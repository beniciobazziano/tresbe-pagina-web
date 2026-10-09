import type { Product } from "./types";

/**
 * Orden de exhibición del catálogo (a pedido del usuario):
 *
 *  1. Los tornillos TEL siempre primero (el corazón del negocio).
 *  2. Después el resto, ordenado por su grupo precalculado en sort_group
 *     (asignado al importar el catálogo Ingco): 1 COSLI, 2 máquinas a
 *     batería y combos de máquina, 3 combos de baterías, 4 baterías,
 *     5 máquinas a cable, 6 bolsos y cartucheras, 7 herramientas manuales.
 *  3. Dentro de cada grupo, alfabético.
 */
export function sortCatalog<
  T extends Pick<Product, "name" | "brand" | "sort_group">
>(products: T[]): T[] {
  return [...products].sort((a, b) => {
    const telDiff = (a.brand === "TEL" ? 0 : 1) - (b.brand === "TEL" ? 0 : 1);
    if (telDiff !== 0) return telDiff;
    const rankDiff = (a.sort_group ?? 99) - (b.sort_group ?? 99);
    if (rankDiff !== 0) return rankDiff;
    return a.name.localeCompare(b.name, "es");
  });
}

/** Alias con el nombre histórico (mismo orden, se usa al filtrar por Ingco) */
export const sortIngcoProducts = sortCatalog;
