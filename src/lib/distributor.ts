import { DISTRIBUTOR_BRANDS, DISTRIBUTOR_KEYWORDS } from "./brands";
import type { Product } from "./types";

const normalize = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .trim();

/**
 * Regla por defecto: un producto es de distribuidora si su marca está entre
 * las que se distribuyen, o si su nombre corresponde a una línea que se
 * distribuye (varillas roscadas). El campo `distributor` del producto, si
 * está definido, siempre manda sobre esta regla.
 */
export function defaultIsDistributor(product: {
  brand: string | null;
  name: string;
}): boolean {
  const brand = product.brand?.trim();
  if (brand && DISTRIBUTOR_BRANDS.some((b) => normalize(b) === normalize(brand))) {
    return true;
  }
  // Solo cuando el producto ES esa línea (el nombre empieza así), para no
  // arrastrar accesorios de otras marcas como "Soporte varilla roscada".
  const name = normalize(product.name);
  return DISTRIBUTOR_KEYWORDS.some((keyword) => {
    const k = normalize(keyword);
    return name.startsWith(k) || name.startsWith(k.replace("varilla", "varillas"));
  });
}

/** Deja el producto siempre con `distributor` resuelto a booleano */
export function withDistributorFlag<T extends Product>(product: T): T {
  return {
    ...product,
    distributor:
      typeof product.distributor === "boolean"
        ? product.distributor
        : defaultIsDistributor(product),
  };
}

export function isDistributorProduct(product: Product): boolean {
  return typeof product.distributor === "boolean"
    ? product.distributor
    : defaultIsDistributor(product);
}
