import "server-only";

import { createHash, randomBytes, randomUUID } from "crypto";
import { mkdir, readFile, writeFile } from "fs/promises";
import path from "path";
import { seedCategories, seedProducts } from "./data/seed";
import type { AdminCustomer, Category, Order, Product } from "./types";

/**
 * Almacén local en archivos JSON (carpeta data/, fuera de git).
 * Es el backend del modo sin Supabase: el panel de administración edita
 * estos archivos y la tienda los lee. Al conectar Supabase, todo pasa
 * automáticamente a la base real.
 */

const dataDir = path.join(process.cwd(), "data");

async function readJson<T>(name: string): Promise<T | null> {
  try {
    const raw = await readFile(path.join(dataDir, name), "utf8");
    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
}

async function writeJson(name: string, value: unknown) {
  await mkdir(dataDir, { recursive: true });
  await writeFile(path.join(dataDir, name), JSON.stringify(value, null, 1), "utf8");
}

// ── Catálogo ──────────────────────────────────────────────────────────

export async function localGetProducts(): Promise<Product[]> {
  return (await readJson<Product[]>("products.json")) ?? seedProducts;
}

export async function localSaveProducts(products: Product[]) {
  await writeJson("products.json", products);
}

export async function localGetCategories(): Promise<Category[]> {
  return (await readJson<Category[]>("categories.json")) ?? seedCategories;
}

export async function localUpsertProduct(
  product: Omit<Product, "id"> & { id?: string | null }
): Promise<Product> {
  const products = await localGetProducts();
  if (product.id) {
    const index = products.findIndex((p) => p.id === product.id);
    if (index === -1) throw new Error("Producto no encontrado");
    const updated = { ...products[index], ...product, id: product.id } as Product;
    products[index] = updated;
    await localSaveProducts(products);
    return updated;
  }
  const created = { ...product, id: randomUUID() } as Product;
  products.push(created);
  await localSaveProducts(products);
  return created;
}

export async function localDeleteProduct(id: string) {
  const products = await localGetProducts();
  await localSaveProducts(products.filter((p) => p.id !== id));
}

// ── Pedidos ───────────────────────────────────────────────────────────

export async function localGetOrders(): Promise<Order[]> {
  return (await readJson<Order[]>("orders.json")) ?? [];
}

export async function localAddOrder(order: Order) {
  const orders = await localGetOrders();
  orders.unshift(order);
  await writeJson("orders.json", orders);
}

export async function localUpdateOrderStatus(id: string, status: Order["status"]) {
  const orders = await localGetOrders();
  const order = orders.find((o) => o.id === id);
  if (order) {
    order.status = status;
    await writeJson("orders.json", orders);
  }
}

// ── Clientes B2B ──────────────────────────────────────────────────────

interface LocalCustomer extends AdminCustomer {
  salt: string;
  password_hash: string;
}

function hashPassword(password: string, salt: string) {
  return createHash("sha256").update(`${salt}:${password}`).digest("hex");
}

const demoCustomer = (): LocalCustomer => {
  const salt = randomBytes(8).toString("hex");
  return {
    id: "00000000-0000-4000-8000-000000000001",
    username: "obrador",
    name: "Corralón El Obrador",
    discount_pct: 15,
    notes:
      "Cuenta demo. Retiros: jueves de 9 a 12. Cuenta corriente a 30 días con factura A.",
    active: true,
    salt,
    password_hash: hashPassword("tresbe123", salt),
  };
};

async function localGetCustomersRaw(): Promise<LocalCustomer[]> {
  const stored = await readJson<LocalCustomer[]>("customers.json");
  if (stored) return stored;
  const initial = [demoCustomer()];
  await writeJson("customers.json", initial);
  return initial;
}

export async function localListCustomers(): Promise<AdminCustomer[]> {
  const rows = await localGetCustomersRaw();
  return rows.map(({ salt: _s, password_hash: _p, ...pub }) => pub);
}

export async function localAuthCustomer(username: string, password: string) {
  const rows = await localGetCustomersRaw();
  const row = rows.find(
    (c) => c.username === username.trim().toLowerCase() && c.active
  );
  if (!row) return null;
  if (hashPassword(password, row.salt) !== row.password_hash) return null;
  return {
    id: row.id,
    name: row.name,
    discount_pct: row.discount_pct,
    notes: row.notes,
  };
}

export async function localGetCustomer(id: string) {
  const rows = await localGetCustomersRaw();
  const row = rows.find((c) => c.id === id && c.active);
  if (!row) return null;
  return {
    id: row.id,
    name: row.name,
    discount_pct: row.discount_pct,
    notes: row.notes,
  };
}

export async function localUpsertCustomer(draft: {
  id: string | null;
  username: string;
  password: string | null;
  name: string;
  discount_pct: number;
  notes: string | null;
  active: boolean;
}) {
  const rows = await localGetCustomersRaw();
  const username = draft.username.trim().toLowerCase();

  const clash = rows.find((c) => c.username === username && c.id !== draft.id);
  if (clash) throw new Error("Ya existe un cliente con ese usuario");

  if (draft.id) {
    const row = rows.find((c) => c.id === draft.id);
    if (!row) throw new Error("Cliente no encontrado");
    row.username = username;
    row.name = draft.name;
    row.discount_pct = draft.discount_pct;
    row.notes = draft.notes;
    row.active = draft.active;
    if (draft.password && draft.password.length >= 6) {
      row.salt = randomBytes(8).toString("hex");
      row.password_hash = hashPassword(draft.password, row.salt);
    }
  } else {
    if (!draft.password || draft.password.length < 6) {
      throw new Error("La contraseña debe tener al menos 6 caracteres");
    }
    const salt = randomBytes(8).toString("hex");
    rows.push({
      id: randomUUID(),
      username,
      name: draft.name,
      discount_pct: draft.discount_pct,
      notes: draft.notes,
      active: draft.active,
      salt,
      password_hash: hashPassword(draft.password, salt),
    });
  }
  await writeJson("customers.json", rows);
}

export async function localDeleteCustomer(id: string) {
  const rows = await localGetCustomersRaw();
  await writeJson(
    "customers.json",
    rows.filter((c) => c.id !== id)
  );
}
