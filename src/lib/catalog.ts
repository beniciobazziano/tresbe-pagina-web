import "server-only";

import { BRANDS } from "./brands";
import { seedCategories, seedProducts } from "./data/seed";
import { localGetCategories, localGetProducts } from "./localdb";
import { isSupabaseConfigured } from "./supabase/config";
import { createSupabaseServerClient } from "./supabase/server";
import type { Category, Product } from "./types";

/**
 * Capa de datos del catálogo. Con Supabase configurado lee de la base;
 * sin configurar, lee del almacén local (data/*.json, editable desde el
 * panel de administración) con el catálogo de ejemplo como base.
 */

export async function getCategories(): Promise<Category[]> {
  if (!isSupabaseConfigured) {
    const categories = await localGetCategories();
    return [...categories].sort((a, b) => a.position - b.position);
  }
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from("categories")
    .select("*")
    .order("position");
  if (error || !data) return seedCategories;
  return data as Category[];
}

export async function getCategoryBySlug(slug: string): Promise<Category | null> {
  const categories = await getCategories();
  return categories.find((c) => c.slug === slug) ?? null;
}

export async function getProducts(options?: {
  categorySlug?: string;
  brand?: string;
  search?: string;
  featuredOnly?: boolean;
}): Promise<Product[]> {
  let products: Product[];

  if (!isSupabaseConfigured) {
    products = (await localGetProducts()).filter((p) => p.active);
    products.sort((a, b) => a.name.localeCompare(b.name, "es"));
  } else {
    const supabase = await createSupabaseServerClient();
    let query = supabase.from("products").select("*").eq("active", true);
    if (options?.categorySlug) query = query.eq("category_slug", options.categorySlug);
    if (options?.featuredOnly) query = query.eq("featured", true);
    const { data, error } = await query.order("name");
    if (error || !data) {
      products = seedProducts.filter((p) => p.active);
    } else {
      return filterInMemory(data as Product[], {
        brand: options?.brand,
        search: options?.search,
      });
    }
  }

  return filterInMemory(products, options);
}

/** Lista oficial de marcas de la casa (fija, definida en lib/brands.ts) */
export async function getBrands(): Promise<string[]> {
  return [...BRANDS];
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  if (isSupabaseConfigured) {
    const supabase = await createSupabaseServerClient();
    const { data } = await supabase
      .from("products")
      .select("*")
      .eq("slug", slug)
      .maybeSingle();
    if (data) return data as Product;
    return null;
  }
  const products = await localGetProducts();
  return products.find((p) => p.slug === slug) ?? null;
}

function filterInMemory(
  products: Product[],
  options?: {
    categorySlug?: string;
    brand?: string;
    search?: string;
    featuredOnly?: boolean;
  }
): Product[] {
  let result = products;
  if (options?.categorySlug) {
    result = result.filter((p) => p.category_slug === options.categorySlug);
  }
  if (options?.brand) {
    const brand = options.brand.toLowerCase();
    result = result.filter((p) => p.brand?.trim().toLowerCase() === brand);
  }
  if (options?.featuredOnly) {
    result = result.filter((p) => p.featured);
  }
  if (options?.search) {
    const q = options.search
      .toLowerCase()
      .normalize("NFD")
      .replace(/\p{Diacritic}/gu, "");
    result = result.filter((p) => {
      const haystack = `${p.name} ${p.description} ${p.brand ?? ""}`
        .toLowerCase()
        .normalize("NFD")
        .replace(/\p{Diacritic}/gu, "");
      return haystack.includes(q);
    });
  }
  return result;
}
