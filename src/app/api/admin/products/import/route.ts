import { NextResponse } from "next/server";
import { isAdminRequest } from "@/lib/admin-auth";
import {
  adminBulkImportProducts,
  adminListCategories,
  adminListProducts,
} from "@/lib/admindb";
import { BRANDS } from "@/lib/brands";
import { parseCatalogSheet } from "@/lib/excel";
import type { Product } from "@/lib/types";

const MAX_BYTES = 15 * 1024 * 1024;

const normalize = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .trim();

const slugify = (text: string) =>
  normalize(text)
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export async function POST(request: Request) {
  if (!(await isAdminRequest())) {
    return NextResponse.json({ error: "No autorizado." }, { status: 401 });
  }

  let body: { dataBase64?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Datos inválidos." }, { status: 400 });
  }
  if (!body.dataBase64) {
    return NextResponse.json({ error: "Falta el archivo." }, { status: 400 });
  }
  const buffer = Buffer.from(body.dataBase64, "base64");
  if (buffer.length === 0 || buffer.length > MAX_BYTES) {
    return NextResponse.json(
      { error: "El archivo debe pesar menos de 15 MB." },
      { status: 400 }
    );
  }

  const { rows, sheetError } = parseCatalogSheet(buffer);
  if (sheetError) {
    return NextResponse.json({ error: sheetError }, { status: 400 });
  }

  const [products, categories] = await Promise.all([
    adminListProducts(),
    adminListCategories(),
  ]);

  // Resolvedores: categoría por slug o nombre; marca canónica
  const catBySlug = new Map(categories.map((c) => [c.slug, c.slug]));
  const catByName = new Map(categories.map((c) => [normalize(c.name), c.slug]));
  const resolveCategory = (value: string) =>
    catBySlug.get(value.trim()) ??
    catBySlug.get(slugify(value)) ??
    catByName.get(normalize(value)) ??
    null;
  const brandCanonical = new Map(BRANDS.map((b) => [normalize(b), b]));

  // Mapa de trabajo: acumula cambios para que filas repetidas no se pisen
  const working = new Map<string, Product | (Omit<Product, "id"> & { id?: undefined })>();
  for (const p of products) working.set(p.slug, p);
  const byName = new Map(products.map((p) => [normalize(p.name), p.slug]));

  const touched = new Set<string>();
  const createdSlugs = new Set<string>();
  const errors: string[] = [];
  const warnings: string[] = [];

  for (const row of rows) {
    if (row.errors.length > 0) {
      errors.push(`Fila ${row.rowNumber}: ${row.errors.join("; ")}`);
      continue;
    }

    // Busca el producto: por código, o por nombre exacto
    let slug = row.codigo?.trim() ?? null;
    if (slug && !working.has(slug) && slugify(slug) !== slug) {
      // el "código" vino con mayúsculas/espacios: probamos normalizado
      const norm = slugify(slug);
      if (working.has(norm)) slug = norm;
    }
    if (!slug && row.nombre) {
      slug = byName.get(normalize(row.nombre)) ?? null;
    }

    const existing = slug ? working.get(slug) : undefined;

    // Marca: canónica si está en la lista oficial
    let brand: string | null | undefined;
    if (row.marca != null) {
      brand = brandCanonical.get(normalize(row.marca)) ?? row.marca;
      if (!brandCanonical.has(normalize(row.marca))) {
        warnings.push(
          `Fila ${row.rowNumber}: la marca "${row.marca}" no está en la lista oficial (se guardó igual)`
        );
      }
    }

    if (existing) {
      const merged = {
        ...existing,
        name: row.nombre ?? existing.name,
        brand: brand !== undefined ? brand : existing.brand,
        price: row.precio ?? existing.price,
        stock: row.stock ?? existing.stock,
        stock_status: row.estado_stock ?? existing.stock_status,
        unit: row.unidad ?? existing.unit,
        bulky: row.voluminoso ?? existing.bulky,
        distributor: row.distribuidora ?? existing.distributor,
        featured: row.destacado ?? existing.featured,
        active: row.visible ?? existing.active,
        description: row.descripcion ?? existing.description,
        weight_kg: row.peso_kg ?? existing.weight_kg,
        length_cm: row.largo_cm ?? existing.length_cm,
        width_cm: row.ancho_cm ?? existing.width_cm,
        height_cm: row.alto_cm ?? existing.height_cm,
      };
      if (row.categoria) {
        const cat = resolveCategory(row.categoria);
        if (!cat) {
          errors.push(`Fila ${row.rowNumber}: categoría "${row.categoria}" no existe`);
          continue;
        }
        merged.category_slug = cat;
      }
      working.set(existing.slug, merged);
      touched.add(existing.slug);
      continue;
    }

    // Producto nuevo
    if (!row.nombre) {
      errors.push(
        `Fila ${row.rowNumber}: código "${row.codigo ?? ""}" no existe y falta el nombre para crearlo`
      );
      continue;
    }
    if (!row.categoria) {
      errors.push(`Fila ${row.rowNumber}: falta la categoría para crear "${row.nombre}"`);
      continue;
    }
    const cat = resolveCategory(row.categoria);
    if (!cat) {
      errors.push(`Fila ${row.rowNumber}: categoría "${row.categoria}" no existe`);
      continue;
    }

    let newSlug = slug ?? slugify(row.nombre);
    if (!newSlug) {
      errors.push(`Fila ${row.rowNumber}: no se pudo generar un código para "${row.nombre}"`);
      continue;
    }
    while (working.has(newSlug)) newSlug = `${newSlug}-2`;

    working.set(newSlug, {
      slug: newSlug,
      name: row.nombre,
      description: row.descripcion ?? "",
      price: row.precio ?? 0,
      category_slug: cat,
      brand: brand ?? null,
      unit: row.unidad ?? "unidad",
      stock: row.stock ?? 0,
      stock_status: row.estado_stock ?? "en_sucursal",
      featured: row.destacado ?? false,
      bulky: row.voluminoso ?? false,
      distributor: row.distribuidora ?? undefined,
      image_url: null,
      specs: [],
      weight_kg: row.peso_kg ?? undefined,
      length_cm: row.largo_cm ?? undefined,
      width_cm: row.ancho_cm ?? undefined,
      height_cm: row.alto_cm ?? undefined,
      active: row.visible ?? true,
    });
    createdSlugs.add(newSlug);
    byName.set(normalize(row.nombre), newSlug);
  }

  const updates: Product[] = [];
  const creates: Omit<Product, "id">[] = [];
  for (const slug of touched) {
    const p = working.get(slug);
    if (p && "id" in p && p.id) updates.push(p as Product);
  }
  for (const slug of createdSlugs) {
    const p = working.get(slug);
    if (p) creates.push(p as Omit<Product, "id">);
  }

  if (updates.length > 0 || creates.length > 0) {
    try {
      await adminBulkImportProducts(updates, creates);
    } catch (error) {
      return NextResponse.json(
        { error: error instanceof Error ? error.message : "No se pudo guardar." },
        { status: 500 }
      );
    }
  }

  return NextResponse.json({
    updated: updates.length,
    created: creates.length,
    totalRows: rows.length,
    errors: errors.slice(0, 30),
    warnings: warnings.slice(0, 30),
    moreErrors: Math.max(0, errors.length - 30),
  });
}
