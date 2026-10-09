import "server-only";

import { createHash, randomBytes, randomUUID } from "crypto";
import { mkdir, readFile, writeFile } from "fs/promises";
import path from "path";
import { seedCategories, seedProducts } from "./data/seed";
import type {
  AdminCustomer,
  Category,
  CustomerType,
  Order,
  Product,
} from "./types";

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

export async function localSaveCategories(categories: Category[]) {
  await writeJson("categories.json", categories);
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
    order.updated_at = new Date().toISOString();
    await writeJson("orders.json", orders);
  }
}

/** Aplica cambios parciales a un pedido (estado, seguimiento). false si no existe. */
export async function localUpdateOrder(
  id: string,
  patch: Partial<Omit<Order, "id" | "created_at">>
): Promise<boolean> {
  const orders = await localGetOrders();
  const index = orders.findIndex((o) => o.id === id);
  if (index === -1) return false;
  orders[index] = { ...orders[index], ...patch, id, created_at: orders[index].created_at };
  await writeJson("orders.json", orders);
  return true;
}

// ── Clientes B2B ──────────────────────────────────────────────────────

interface LocalCustomer extends AdminCustomer {
  salt: string;
  password_hash: string;
  markups?: Record<string, number>;
  email?: string | null;
  phone?: string | null;
  cuit?: string | null;
  postal_code?: string | null;
  self_registered?: boolean;
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
    customer_type: "distribuidora",
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

const toCustomer = (row: LocalCustomer) => ({
  id: row.id,
  name: row.name,
  discount_pct: row.discount_pct,
  notes: row.notes,
  customer_type: row.customer_type ?? "publico",
  markups: row.markups ?? {},
  email: row.email ?? null,
  phone: row.phone ?? null,
  postal_code: row.postal_code ?? null,
  self_registered: row.self_registered ?? false,
});

/** Acepta el usuario que dio el admin o el email con el que se registró */
export async function localAuthCustomer(username: string, password: string) {
  const rows = await localGetCustomersRaw();
  const ident = username.trim().toLowerCase();
  const row = rows.find(
    (c) => (c.username === ident || c.email?.toLowerCase() === ident) && c.active
  );
  if (!row) return null;
  if (hashPassword(password, row.salt) !== row.password_hash) return null;
  return toCustomer(row);
}

export async function localGetCustomer(id: string) {
  const rows = await localGetCustomersRaw();
  const row = rows.find((c) => c.id === id && c.active);
  if (!row) return null;
  return toCustomer(row);
}

/**
 * Alta que hace la propia persona desde /cliente/registro: cuenta de
 * público, sin descuento. El usuario es el email.
 */
export async function localRegisterCustomer(draft: {
  name: string;
  email: string;
  phone: string;
  postal_code: string;
  password: string;
}) {
  const rows = await localGetCustomersRaw();
  const email = draft.email.trim().toLowerCase();

  if (rows.some((c) => c.username === email || c.email?.toLowerCase() === email)) {
    throw new Error("Ya hay una cuenta con ese email");
  }

  const salt = randomBytes(8).toString("hex");
  const row: LocalCustomer = {
    id: randomUUID(),
    username: email,
    name: draft.name.trim(),
    discount_pct: 0,
    notes: null,
    active: true,
    customer_type: "publico",
    email,
    phone: draft.phone.trim(),
    postal_code: draft.postal_code.trim(),
    self_registered: true,
    salt,
    password_hash: hashPassword(draft.password, salt),
  };
  rows.push(row);
  await writeJson("customers.json", rows);
  return toCustomer(row);
}

/** Datos de entrega que el cliente edita desde su cuenta */
export async function localUpdateCustomerProfile(
  id: string,
  patch: { phone?: string; postal_code?: string }
) {
  const rows = await localGetCustomersRaw();
  const row = rows.find((c) => c.id === id);
  if (!row) throw new Error("Cliente no encontrado");
  if (patch.phone !== undefined) row.phone = patch.phone.trim();
  if (patch.postal_code !== undefined) row.postal_code = patch.postal_code.trim();
  await writeJson("customers.json", rows);
  return toCustomer(row);
}

/** Guarda las rentabilidades por marca que configura el propio cliente */
export async function localSetCustomerMarkups(
  id: string,
  markups: Record<string, number>
) {
  const rows = await localGetCustomersRaw();
  const row = rows.find((c) => c.id === id);
  if (!row) throw new Error("Cliente no encontrado");
  row.markups = markups;
  await writeJson("customers.json", rows);
}

export async function localUpsertCustomer(draft: {
  id: string | null;
  username: string;
  password: string | null;
  name: string;
  discount_pct: number;
  notes: string | null;
  active: boolean;
  customer_type: CustomerType;
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
    row.customer_type = draft.customer_type;
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
      customer_type: draft.customer_type,
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
