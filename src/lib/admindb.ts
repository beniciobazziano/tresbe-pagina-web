import "server-only";

import { seedCategories, seedProducts } from "./data/seed";
import {
  localDeleteCustomer,
  localDeleteProduct,
  localGetCategories,
  localGetOrders,
  localGetProducts,
  localListCustomers,
  localUpdateOrderStatus,
  localUpsertCustomer,
  localUpsertProduct,
} from "./localdb";
import { isSupabaseConfigured } from "./supabase/config";
import { createSupabaseServerClient } from "./supabase/server";
import type {
  AdminCustomer,
  Category,
  Order,
  OrderStatus,
  Product,
} from "./types";

/**
 * Operaciones del panel de administración. Con Supabase configurado van a
 * la base real (RLS con la sesión del admin); sin configurar, al almacén
 * local en data/*.json.
 */

// ── Productos ─────────────────────────────────────────────────────────

export async function adminListProducts(): Promise<Product[]> {
  if (!isSupabaseConfigured) {
    const products = await localGetProducts();
    return [...products].sort((a, b) => a.name.localeCompare(b.name, "es"));
  }
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase.from("products").select("*").order("name");
  if (error) throw new Error(error.message);
  return (data ?? []) as Product[];
}

export async function adminListCategories(): Promise<Category[]> {
  if (!isSupabaseConfigured) return localGetCategories();
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from("categories")
    .select("*")
    .order("position");
  if (error) throw new Error(error.message);
  return (data ?? []) as Category[];
}

export async function adminUpsertProduct(
  product: Omit<Product, "id"> & { id?: string | null }
) {
  if (!isSupabaseConfigured) {
    await localUpsertProduct(product);
    return;
  }
  const supabase = await createSupabaseServerClient();
  const { id, ...data } = product;
  const result = id
    ? await supabase.from("products").update(data).eq("id", id)
    : await supabase.from("products").insert(data);
  if (result.error) throw new Error(result.error.message);
}

export async function adminDeleteProduct(id: string) {
  if (!isSupabaseConfigured) {
    await localDeleteProduct(id);
    return;
  }
  const supabase = await createSupabaseServerClient();
  const { error } = await supabase.from("products").delete().eq("id", id);
  if (error) throw new Error(error.message);
}

/** Carga el catálogo inicial de ejemplo (solo tiene efecto con Supabase). */
export async function adminImportSeed() {
  if (!isSupabaseConfigured) {
    // En modo local el catálogo de ejemplo ya es la base de datos.
    return;
  }
  const supabase = await createSupabaseServerClient();
  const { error: catError } = await supabase.from("categories").upsert(
    seedCategories.map(({ id: _id, ...c }) => c),
    { onConflict: "slug" }
  );
  if (catError) throw new Error(catError.message);
  const { error: prodError } = await supabase.from("products").upsert(
    seedProducts.map(({ id: _id, ...p }) => p),
    { onConflict: "slug" }
  );
  if (prodError) throw new Error(prodError.message);
}

// ── Pedidos ───────────────────────────────────────────────────────────

export async function adminListOrders(): Promise<Order[]> {
  if (!isSupabaseConfigured) return localGetOrders();
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from("orders")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(200);
  if (error) throw new Error(error.message);
  return (data ?? []) as Order[];
}

export async function adminUpdateOrderStatus(id: string, status: OrderStatus) {
  if (!isSupabaseConfigured) {
    await localUpdateOrderStatus(id, status);
    return;
  }
  const supabase = await createSupabaseServerClient();
  const { error } = await supabase.from("orders").update({ status }).eq("id", id);
  if (error) throw new Error(error.message);
}

// ── Clientes ──────────────────────────────────────────────────────────

export interface CustomerDraft {
  id: string | null;
  username: string;
  password: string | null;
  name: string;
  discount_pct: number;
  notes: string | null;
  active: boolean;
}

export async function adminListCustomers(): Promise<AdminCustomer[]> {
  if (!isSupabaseConfigured) return localListCustomers();
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from("customers")
    .select("id, username, name, discount_pct, notes, active")
    .order("name");
  if (error) throw new Error(error.message);
  return (data ?? []) as AdminCustomer[];
}

export async function adminUpsertCustomer(draft: CustomerDraft) {
  if (!isSupabaseConfigured) {
    await localUpsertCustomer(draft);
    return;
  }
  const supabase = await createSupabaseServerClient();
  const { error } = await supabase.rpc("admin_upsert_customer", {
    p_id: draft.id,
    p_username: draft.username,
    p_password: draft.password,
    p_name: draft.name,
    p_discount: draft.discount_pct,
    p_notes: draft.notes,
    p_active: draft.active,
  });
  if (error) throw new Error(error.message);
}

export async function adminDeleteCustomer(id: string) {
  if (!isSupabaseConfigured) {
    await localDeleteCustomer(id);
    return;
  }
  const supabase = await createSupabaseServerClient();
  const { error } = await supabase.from("customers").delete().eq("id", id);
  if (error) throw new Error(error.message);
}
