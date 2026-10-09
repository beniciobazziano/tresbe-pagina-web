import "server-only";

import { BRANDS } from "./brands";
import { seedCategories, seedProducts } from "./data/seed";
import { isDistributorProduct, withDistributorFlag } from "./distributor";
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

/** Rubros que hoy tienen al menos un producto visible (para los filtros) */
export async function getCategoriesWithProducts(): Promise<Category[]> {
  const [categories, products] = await Promise.all([getCategories(), getProducts()]);
  const conProductos = new Set(products.map((p) => p.category_slug));
  return categories.filter((c) => conProductos.has(c.slug));
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
  /** Solo las líneas que Tresbe distribuye (sección de reventa) */
  distributorOnly?: boolean;
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
        distributorOnly: options?.distributorOnly,
      });
    }
  }

  return filterInMemory(products, options);
}

/**
 * Marcas para los filtros de la tienda: las oficiales (lib/brands.ts) que
 * hoy tienen al menos un producto visible. Así no quedan filtros vacíos
 * cuando una marca está sin publicar.
 */
export async function getBrands(): Promise<string[]> {
  const products = await getProducts();
  const conProductos = new Set(
    products.map((p) => p.brand?.trim().toLowerCase()).filter(Boolean)
  );
  return BRANDS.filter((b) => conProductos.has(b.toLowerCase()));
}

/** Marcas presentes en la sección de distribuidora */
export async function getDistributorBrands(): Promise<string[]> {
  const products = await getProducts({ distributorOnly: true });
  const brands = new Set<string>();
  for (const p of products) if (p.brand?.trim()) brands.add(p.brand.trim());
  return [...brands].sort((a, b) => a.localeCompare(b, "es"));
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  if (isSupabaseConfigured) {
    const supabase = await createSupabaseServerClient();
    const { data } = await supabase
      .from("products")
      .select("*")
      .eq("slug", slug)
      .maybeSingle();
    if (data) return withDistributorFlag(data as Product);
    return null;
  }
  const products = await localGetProducts();
  const found = products.find((p) => p.slug === slug);
  return found ? withDistributorFlag(found) : null;
}

function filterInMemory(
  products: Product[],
  options?: {
    categorySlug?: string;
    brand?: string;
    search?: string;
    featuredOnly?: boolean;
    distributorOnly?: boolean;
  }
): Product[] {
  let result = products;
  if (options?.distributorOnly) {
    result = result.filter((p) => isDistributorProduct(p));
  }
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
  return result.map(withDistributorFlag);
}
