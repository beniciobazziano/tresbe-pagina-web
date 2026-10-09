import "server-only";

import { randomUUID } from "crypto";
import { mkdir, writeFile } from "fs/promises";
import path from "path";
import { BRANDS } from "./brands";
import type {
  BynetCustomer,
  BynetCustomerRef,
  BynetOrder,
  BynetOrderNote,
  BynetOrderStatus,
  BynetProduct,
  BynetProductInput,
  BynetTracking,
} from "./bynet-types";
import {
  localGetCategories,
  localGetOrders,
  localGetProducts,
  localListCustomers,
  localSaveCategories,
  localSaveProducts,
  localUpdateOrder,
} from "./localdb";
import { discountedPrice, site } from "./site";
import { isSupabaseConfigured } from "./supabase/config";
import { createSupabaseServiceClient } from "./supabase/service";
import type {
  Category,
  Customer,
  Order,
  OrderItem,
  OrderStatus,
  Product,
} from "./types";

/**
 * Adaptador entre el protocolo Bynet Connect y los datos de la tienda.
 * Es la única parte específica de esta tienda: lee y escribe con las
 * mismas funciones del panel (almacén local data/*.json) o, con Supabase
 * configurado, con un cliente de servidor sin sesión (service role).
 */

const round2 = (n: number) => Math.round(n * 100) / 100;

const normalize = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .trim();

const slugify = (s: string) =>
  normalize(s)
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const byName = <T extends { name: string }>(a: T, b: T) =>
  a.name.localeCompare(b.name, "es");

// ── Lectura del almacén ───────────────────────────────────────────────

async function readOrders(): Promise<Order[]> {
  if (!isSupabaseConfigured) return localGetOrders();
  const { data, error } = await createSupabaseServiceClient()
    .from("orders")
    .select("*");
  if (error) throw new Error(error.message);
  return (data ?? []) as Order[];
}

async function readProducts(): Promise<Product[]> {
  if (!isSupabaseConfigured) return localGetProducts();
  const { data, error } = await createSupabaseServiceClient()
    .from("products")
    .select("*");
  if (error) throw new Error(error.message);
  return (data ?? []) as Product[];
}

async function readCategories(): Promise<Category[]> {
  if (!isSupabaseConfigured) return localGetCategories();
  const { data, error } = await createSupabaseServiceClient()
    .from("categories")
    .select("*")
    .order("position");
  if (error) throw new Error(error.message);
  return (data ?? []) as Category[];
}

async function readCustomers(): Promise<Customer[]> {
  if (!isSupabaseConfigured) {
    return (await localListCustomers()).filter((c) => c.active);
  }
  const { data, error } = await createSupabaseServiceClient()
    .from("customers")
    .select("id, name, discount_pct, notes, customer_type, email, phone, postal_code, active")
    .eq("active", true);
  if (error) throw new Error(error.message);
  return (data ?? []).map((row) => ({
    id: row.id as string,
    name: row.name as string,
    discount_pct: Number(row.discount_pct) || 0,
    notes: (row.notes as string | null) ?? null,
    customer_type: (row.customer_type as Customer["customer_type"]) ?? "publico",
    email: (row.email as string | null) ?? null,
    phone: (row.phone as string | null) ?? null,
    postal_code: (row.postal_code as string | null) ?? null,
  }));
}

async function customerMap(orders: Order[]) {
  const map = new Map<string, Customer>();
  if (!orders.some((o) => o.customer_id)) return map;
  try {
    for (const c of await readCustomers()) map.set(c.id, c);
  } catch (error) {
    // Los pedidos se exportan igual, solo sin los datos de la cuenta
    console.error("[bynet] clientes:", error);
  }
  return map;
}

// ── Pedidos ───────────────────────────────────────────────────────────

const STATUS_TO_BYNET: Record<OrderStatus, BynetOrderStatus> = {
  pendiente: "pending",
  a_cotizar: "pending",
  pagado: "paid",
  preparando: "preparing",
  enviado: "shipped",
  entregado: "delivered",
  cancelado: "cancelled",
};

const STATUS_FROM_BYNET: Record<BynetOrderStatus, OrderStatus> = {
  pending: "pendiente",
  paid: "pagado",
  preparing: "preparando",
  shipped: "enviado",
  delivered: "entregado",
  cancelled: "cancelado",
  refunded: "cancelado",
};

/** Estados en los que el pedido ya está cobrado */
const PAID_STATUSES: ReadonlySet<OrderStatus> = new Set([
  "pagado",
  "preparando",
  "enviado",
  "entregado",
]);

const orderUpdatedAt = (o: Order) => o.updated_at ?? o.created_at;
const isOrderNote = (o: Order) => o.order_type === "distribuidora";

const itemSku = (i: OrderItem) => i.code ?? i.product_id;
const itemOptions = (i: OrderItem) =>
  [i.variant, i.size, i.color, i.packaging].filter(Boolean).join(" · ") || null;

function customerRef(o: Order, accounts: Map<string, Customer>): BynetCustomerRef {
  const account = o.customer_id ? accounts.get(o.customer_id) : undefined;
  return {
    name: o.customer_name,
    email: o.customer_email || account?.email || null,
    phone: o.customer_phone || account?.phone || null,
    cuit: account?.cuit ?? null,
    externalId: o.customer_id ?? null,
  };
}

function toBynetOrder(o: Order, accounts: Map<string, Customer>): BynetOrder {
  const items = o.items.map((i) => {
    const unitPrice = round2(i.unit_price);
    const options = itemOptions(i);
    return {
      sku: itemSku(i),
      name: options ? `${i.name} (${options})` : i.name,
      qty: i.quantity,
      unitPrice,
      total: round2(unitPrice * i.quantity),
    };
  });
  const subtotal = round2(items.reduce((acc, i) => acc + i.total, 0));
  // El descuento de cuenta se aplica por ítem al cobrar (ver /api/checkout)
  const discounted = o.items.reduce(
    (acc, i) => acc + discountedPrice(i.unit_price, o.discount_pct) * i.quantity,
    0
  );
  const discount = round2(Math.max(0, subtotal - discounted));
  return {
    id: o.id,
    number: `WEB-${o.id.slice(0, 8).toUpperCase()}`,
    date: o.created_at,
    status: STATUS_TO_BYNET[o.status] ?? "pending",
    paymentStatus: PAID_STATUSES.has(o.status) ? "paid" : "pending",
    paymentMethod: o.payment_method,
    customer: customerRef(o, accounts),
    shipping: {
      method: o.shipping_method === "retiro" ? "retiro" : "envio",
      address: o.shipping_address ?? null,
      city: null,
      zone: null,
      postalCode: o.shipping_postal_code ?? null,
      cost: round2(o.shipping_cost ?? 0),
    },
    items,
    subtotal,
    discount,
    total: round2(o.total),
    notes: o.notes ?? null,
    tracking: o.tracking ?? null,
    updatedAt: orderUpdatedAt(o),
  };
}

/** Filtra por updatedAt > since, ordena del más viejo al más nuevo y pagina */
function page<T extends { updatedAt: string }>(
  rows: T[],
  since: Date | null,
  limit: number
): { rows: T[]; next: string | null } {
  const time = (r: T) => new Date(r.updatedAt).getTime();
  const filtered = rows
    .filter((r) => !since || time(r) > since.getTime())
    .sort((a, b) => time(a) - time(b));
  const slice = filtered.slice(0, limit);
  const next = filtered.length > limit ? slice[slice.length - 1].updatedAt : null;
  return { rows: slice, next };
}

/** Pedidos del checkout público (con o sin pago online), sin las notas de pedido */
export async function bynetListOrders(options: { since: Date | null; limit: number }) {
  const orders = (await readOrders()).filter((o) => !isOrderNote(o));
  const accounts = await customerMap(orders);
  const mapped = orders.map((o) => toBynetOrder(o, accounts));
  const { rows, next } = page(mapped, options.since, options.limit);
  return { orders: rows, next };
}

/** Cambia el estado del pedido y guarda el seguimiento. false si no existe. */
export async function bynetSetOrderStatus(
  id: string,
  status: BynetOrderStatus,
  tracking: BynetTracking | null
): Promise<boolean> {
  const patch: Partial<Omit<Order, "id" | "created_at">> = {
    status: STATUS_FROM_BYNET[status],
    updated_at: new Date().toISOString(),
  };
  if (tracking) patch.tracking = tracking;

  if (!isSupabaseConfigured) return localUpdateOrder(id, patch);

  const supabase = createSupabaseServiceClient();
  const full = await supabase.from("orders").update(patch).eq("id", id).select("id");
  if (!full.error) return (full.data?.length ?? 0) > 0;
  // Base sin las columnas updated_at/tracking (schema viejo): al menos el estado
  const basic = await supabase
    .from("orders")
    .update({ status: patch.status })
    .eq("id", id)
    .select("id");
  if (basic.error) throw new Error(basic.error.message);
  return (basic.data?.length ?? 0) > 0;
}

// ── Notas de pedido (portal de clientes de distribuidora) ─────────────

function noteNumber(o: Order) {
  if (o.order_number) return o.order_number;
  // Mismo formato que arma /api/cliente/nota-pedido al enviar el mail
  const yyyymmdd = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Argentina/Buenos_Aires",
  })
    .format(new Date(o.created_at))
    .replace(/-/g, "");
  return `NP-${yyyymmdd}-${o.id.slice(0, 4).toUpperCase()}`;
}

/** Las notas se guardan como "Obra/referencia: X · Fecha necesaria: Y · observaciones" */
function parseNoteMeta(notes: string | null) {
  let requestedDate: string | null = null;
  const rest: string[] = [];
  for (const part of (notes ?? "").split(" · ")) {
    const match = /^Fecha necesaria:\s*(.+)$/i.exec(part.trim());
    if (match) {
      const value = match[1].trim();
      const dmy = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/.exec(value);
      requestedDate = dmy
        ? `${dmy[3]}-${dmy[2].padStart(2, "0")}-${dmy[1].padStart(2, "0")}`
        : value;
    } else if (part.trim()) {
      rest.push(part.trim());
    }
  }
  return { requestedDate, rest };
}

function toBynetOrderNote(o: Order, accounts: Map<string, Customer>): BynetOrderNote {
  const account = o.customer_id ? accounts.get(o.customer_id) : undefined;
  // customer_name se guarda como "Cuenta — persona que hizo el pedido"
  const [accountName, contact] = o.customer_name.split(" — ");
  const { requestedDate, rest } = parseNoteMeta(o.notes);
  const email =
    o.customer_email && o.customer_email !== site.ordersEmail
      ? o.customer_email
      : (account?.email ?? null);
  const notes = [contact ? `Contacto: ${contact}` : null, ...rest]
    .filter(Boolean)
    .join(" · ");
  return {
    id: o.id,
    number: noteNumber(o),
    date: o.created_at,
    customer: {
      name: account?.name ?? accountName,
      email,
      phone: o.customer_phone || account?.phone || null,
      cuit: account?.cuit ?? null,
      externalId: o.customer_id ?? null,
    },
    items: o.items.map((i) => ({
      sku: itemSku(i),
      name: i.name,
      qty: i.quantity,
      note: itemOptions(i),
    })),
    delivery:
      o.shipping_method === "retiro"
        ? "retira"
        : o.shipping_method === "envio"
          ? "envio"
          : "a_definir",
    address: o.shipping_address ?? null,
    requestedDate,
    notes: notes || null,
    status: STATUS_TO_BYNET[o.status] ?? "pending",
    total: round2(o.total),
    updatedAt: orderUpdatedAt(o),
  };
}

export async function bynetListOrderNotes(options: { since: Date | null; limit: number }) {
  const orders = (await readOrders()).filter(isOrderNote);
  const accounts = await customerMap(orders);
  const mapped = orders.map((o) => toBynetOrderNote(o, accounts));
  const { rows, next } = page(mapped, options.since, options.limit);
  return { orderNotes: rows, next };
}

// ── Catálogo ──────────────────────────────────────────────────────────

function absoluteUrl(url: string, baseUrl: string) {
  if (/^(https?:)?\/\//i.test(url) || url.startsWith("data:")) return url;
  try {
    return new URL(url, baseUrl).toString();
  } catch {
    return url;
  }
}

export async function bynetGetCatalog(baseUrl: string): Promise<BynetProduct[]> {
  const [products, categories] = await Promise.all([readProducts(), readCategories()]);
  const categoryName = new Map(categories.map((c) => [c.slug, c.name]));
  return [...products].sort(byName).map((p) => ({
    sku: p.slug,
    name: p.name,
    brand: p.brand ?? null,
    category: categoryName.get(p.category_slug) ?? p.category_slug,
    description: p.description ?? "",
    unit: p.unit,
    price: round2(p.price),
    stock: p.stock,
    visible: p.active,
    featured: p.featured,
    images: [p.image_url, ...(p.gallery ?? [])]
      .filter((u): u is string => Boolean(u))
      .map((u) => absoluteUrl(u, baseUrl)),
  }));
}

/**
 * Marca: la lista de la tienda es fija (lib/brands.ts). Se toma la que
 * coincide o la más parecida; si ninguna, el producto queda sin marca.
 * Si Bynet no manda el campo, se conserva la que tenía.
 */
function resolveBrand(raw: string | null | undefined, existing?: Product): string | null {
  if (raw === undefined) return existing?.brand ?? null;
  const name = raw?.trim();
  if (!name) return null;
  const target = normalize(name);
  const exact = BRANDS.find((b) => normalize(b) === target);
  if (exact) return exact;
  const similar = BRANDS.find((b) => {
    const brand = normalize(b);
    return (
      brand.split(/\s*\/\s*/).some((part) => part === target) ||
      brand.includes(target) ||
      target.includes(brand)
    );
  });
  return similar ?? null;
}

/** Rubro por nombre o slug; si no existe, se crea (icono genérico) */
function resolveCategory(
  raw: string | null | undefined,
  existing: Product | undefined,
  categories: Category[],
  created: Category[]
): string {
  const name = raw?.trim();
  if (!name) return existing?.category_slug ?? categories[0]?.slug ?? "otros";
  const target = normalize(name);
  const slug = slugify(name) || "otros";
  const all = [...categories, ...created];
  const found = all.find((c) => normalize(c.name) === target || c.slug === slug);
  if (found) return found.slug;
  const category: Category = {
    id: randomUUID(),
    slug,
    name,
    description: "",
    icon: "Package",
    position: all.reduce((max, c) => Math.max(max, c.position), 0) + 1,
  };
  created.push(category);
  return slug;
}

const IMAGE_EXT: Record<string, string> = {
  "image/jpeg": "jpg",
  "image/jpg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
};
const MAX_IMAGE_BYTES = 6 * 1024 * 1024;

async function saveImage(file: string, buffer: Buffer, contentType: string) {
  if (!isSupabaseConfigured) {
    const dir = path.join(process.cwd(), "public", "products", "bynet");
    await mkdir(dir, { recursive: true });
    await writeFile(path.join(dir, file), buffer);
    return `/products/bynet/${file}`;
  }
  const storage = createSupabaseServiceClient().storage.from("productos");
  const key = `bynet/${file}`;
  const { error } = await storage.upload(key, buffer, { contentType, upsert: true });
  if (error) throw new Error(`No se pudo guardar la imagen ${file}: ${error.message}`);
  return storage.getPublicUrl(key).data.publicUrl;
}

/**
 * Fotos del producto: las data URLs se guardan como archivo
 * (public/products/bynet/<sku>.jpg o el bucket de Supabase) y las URLs
 * públicas se referencian tal cual. null = Bynet no mandó el campo.
 */
async function storeImages(sku: string, images: unknown): Promise<string[] | null> {
  if (!Array.isArray(images)) return null;
  const urls: string[] = [];
  const base = slugify(sku) || "producto";
  for (const image of images) {
    if (typeof image !== "string" || !image.trim()) continue;
    if (/^(https?:)?\/\//i.test(image) || image.startsWith("/")) {
      urls.push(image);
      continue;
    }
    const match = /^data:(image\/[a-z]+);base64,([\s\S]+)$/i.exec(image);
    if (!match) continue;
    const ext = IMAGE_EXT[match[1].toLowerCase()];
    if (!ext) continue;
    const buffer = Buffer.from(match[2], "base64");
    if (buffer.length === 0 || buffer.length > MAX_IMAGE_BYTES) continue;
    const n = urls.length + 1;
    const file = `${base}${n > 1 ? `-${n}` : ""}.${ext}`;
    urls.push(await saveImage(file, buffer, match[1].toLowerCase()));
  }
  return urls;
}

const EMPTY_PRODUCT: Omit<Product, "id"> = {
  slug: "",
  name: "",
  description: "",
  price: 0,
  category_slug: "",
  brand: null,
  unit: "unidad",
  stock: 0,
  stock_status: "sin_stock",
  featured: false,
  bulky: false,
  image_url: null,
  specs: [],
  active: true,
};

async function persistCatalog(
  updates: Product[],
  creates: Omit<Product, "id">[],
  newCategories: Category[]
) {
  if (!isSupabaseConfigured) {
    if (newCategories.length > 0) {
      await localSaveCategories([...(await localGetCategories()), ...newCategories]);
    }
    const byId = new Map((await localGetProducts()).map((p) => [p.id, p]));
    for (const update of updates) byId.set(update.id, update);
    const merged = [...byId.values(), ...creates.map((c) => ({ ...c, id: randomUUID() }))];
    await localSaveProducts(merged);
    return;
  }

  const supabase = createSupabaseServiceClient();
  if (newCategories.length > 0) {
    const { error } = await supabase
      .from("categories")
      .insert(newCategories.map(({ id: _id, ...c }) => c));
    if (error) throw new Error(error.message);
  }
  const CHUNK = 400;
  for (let i = 0; i < updates.length; i += CHUNK) {
    const { error } = await supabase
      .from("products")
      .upsert(updates.slice(i, i + CHUNK), { onConflict: "id" });
    if (error) throw new Error(error.message);
  }
  for (let i = 0; i < creates.length; i += CHUNK) {
    const { error } = await supabase.from("products").insert(creates.slice(i, i + CHUNK));
    if (error) throw new Error(error.message);
  }
}

/**
 * Upsert de productos por sku (= slug). Solo pisa los campos que vienen;
 * lo que la tienda tiene de más (ficha técnica, medidas, galería, peso)
 * se conserva. En modo "replace" oculta los que no vinieron (no borra).
 */
export async function bynetPutCatalog(
  input: BynetProductInput[],
  mode: "upsert" | "replace"
): Promise<{ updated: number; created: number; hidden: number }> {
  const [products, categories] = await Promise.all([readProducts(), readCategories()]);
  const bySku = new Map(products.map((p) => [p.slug.toLowerCase(), p]));
  const newCategories: Category[] = [];
  const updates = new Map<string, Product>();
  const creates: Omit<Product, "id">[] = [];
  const seen = new Set<string>();

  for (const raw of input) {
    const sku = raw.sku.trim();
    const key = sku.toLowerCase();
    if (!sku || seen.has(key)) continue;
    seen.add(key);

    const existing = bySku.get(key);
    const images = await storeImages(sku, raw.images);
    const stockGiven = raw.stock !== undefined && raw.stock !== null;
    const stock = stockGiven
      ? Math.max(0, Math.floor(Number(raw.stock) || 0))
      : (existing?.stock ?? 0);
    const priceGiven = raw.price !== undefined && raw.price !== null;

    const merged: Omit<Product, "id"> = {
      ...(existing ?? EMPTY_PRODUCT),
      slug: existing?.slug ?? sku,
      name: raw.name?.trim() || existing?.name || sku,
      description:
        raw.description !== undefined
          ? String(raw.description ?? "")
          : (existing?.description ?? ""),
      price: priceGiven
        ? round2(Math.max(0, Number(raw.price) || 0))
        : (existing?.price ?? 0),
      category_slug: resolveCategory(raw.category, existing, categories, newCategories),
      brand: resolveBrand(raw.brand, existing),
      unit: raw.unit?.trim() || existing?.unit || "unidad",
      stock,
      stock_status: stockGiven
        ? stock > 0
          ? "en_sucursal"
          : "sin_stock"
        : (existing?.stock_status ?? (stock > 0 ? "en_sucursal" : "sin_stock")),
      featured: typeof raw.featured === "boolean" ? raw.featured : (existing?.featured ?? false),
      active: typeof raw.visible === "boolean" ? raw.visible : (existing?.active ?? true),
      image_url: images ? (images[0] ?? null) : (existing?.image_url ?? null),
      gallery: images ? (images.length > 1 ? images.slice(1) : undefined) : existing?.gallery,
    };

    if (existing) updates.set(existing.id, { ...merged, id: existing.id });
    else creates.push(merged);
  }

  let hidden = 0;
  if (mode === "replace") {
    for (const p of products) {
      if (!seen.has(p.slug.toLowerCase()) && p.active) {
        updates.set(p.id, { ...p, active: false });
        hidden++;
      }
    }
  }

  await persistCatalog([...updates.values()], creates, newCategories);
  return { updated: updates.size - hidden, created: creates.length, hidden };
}

// ── Clientes ──────────────────────────────────────────────────────────

export async function bynetListCustomers(): Promise<BynetCustomer[]> {
  const rows = await readCustomers();
  return rows
    .map((c) => ({
      externalId: c.id,
      name: c.name,
      email: c.email ?? null,
      phone: c.phone ?? null,
      cuit: c.cuit ?? null,
      address: null,
      city: null,
      postalCode: c.postal_code ?? null,
      type: c.customer_type ?? "publico",
      discountPct: c.discount_pct,
    }))
    .sort(byName);
}
