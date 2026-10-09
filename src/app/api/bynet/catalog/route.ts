import {
  BynetHttpError,
  bynetBody,
  bynetJson,
  bynetRoute,
  requestOrigin,
} from "@/lib/bynet-auth";
export { bynetOptions as OPTIONS } from "@/lib/bynet-auth";
import { bynetGetCatalog, bynetPutCatalog } from "@/lib/bynet-data";
import type { BynetProductInput } from "@/lib/bynet-types";

const MAX_PRODUCTS = 5000;

/** GET /api/bynet/catalog — catálogo actual (imágenes como URL pública) */
export const GET = bynetRoute(async (request) => {
  const products = await bynetGetCatalog(requestOrigin(request));
  return bynetJson({ products, mode: "upsert" });
});

function optionalString(value: unknown): string | null | undefined {
  if (value === undefined) return undefined;
  if (value === null) return null;
  return String(value);
}

function optionalNumber(value: unknown, field: string, index: number) {
  if (value === undefined || value === null || value === "") return undefined;
  const n = Number(value);
  if (!Number.isFinite(n)) {
    throw new BynetHttpError(400, `products[${index}].${field} debe ser un número.`);
  }
  return n;
}

function optionalBoolean(value: unknown) {
  return typeof value === "boolean" ? value : undefined;
}

/**
 * PUT /api/bynet/catalog
 * body { products: [{ sku, name, brand, category, description, unit, price,
 *        stock, visible, featured, images }], mode: "upsert" | "replace" }
 * Responde { ok, updated, created, hidden }.
 */
export const PUT = bynetRoute(async (request) => {
  const body = await bynetBody(request);
  if (!Array.isArray(body.products)) {
    throw new BynetHttpError(400, "Falta products (array de productos).");
  }
  if (body.products.length > MAX_PRODUCTS) {
    throw new BynetHttpError(
      413,
      `Mandá como máximo ${MAX_PRODUCTS} productos por llamada.`
    );
  }
  const mode = body.mode === "replace" ? "replace" : "upsert";

  const products: BynetProductInput[] = body.products.map((raw: unknown, index: number) => {
    if (!raw || typeof raw !== "object") {
      throw new BynetHttpError(400, `products[${index}] debe ser un objeto.`);
    }
    const p = raw as Record<string, unknown>;
    const sku = typeof p.sku === "string" ? p.sku.trim() : "";
    if (!sku) throw new BynetHttpError(400, `products[${index}] no tiene sku.`);
    return {
      sku,
      name: typeof p.name === "string" ? p.name : undefined,
      brand: optionalString(p.brand),
      category: optionalString(p.category),
      description: optionalString(p.description),
      unit: optionalString(p.unit),
      price: optionalNumber(p.price, "price", index),
      stock: optionalNumber(p.stock, "stock", index),
      visible: optionalBoolean(p.visible),
      featured: optionalBoolean(p.featured),
      images: Array.isArray(p.images)
        ? p.images.filter((i): i is string => typeof i === "string")
        : undefined,
    };
  });

  const result = await bynetPutCatalog(products, mode);
  return bynetJson({ ok: true, ...result });
});
