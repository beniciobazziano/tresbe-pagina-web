/**
 * Marcas oficiales que trabaja Tresbe Distribuidora.
 * Es la única fuente de marcas: el filtro de la tienda y el selector del
 * panel de administración salen de acá. El orden es el de la tienda.
 */
export const BRANDS = [
  "TEL",
  "Ingco",
  "DeWalt",
  "Milwaukee",
  "Stanley",
  "Bremen",
  "Total",
  "Emtop",
  "Telplast",
  "Fischer",
  "Veyca",
  "Tyrolit",
  "Adhesil",
  "Metabo",
  "Rothoblaas / Holz",
  "Dorking",
  "Bosch",
  "Mota",
] as const;

/**
 * Líneas que Tresbe DISTRIBUYE (reventa). Todo el catálogo se vende al
 * público, pero solo estas marcas se ofrecen a los clientes marcados como
 * distribuidora.
 */
export const DISTRIBUTOR_BRANDS: readonly string[] = [
  "TEL",
  "Veyca",
  "Ingco",
  "Mota",
];

/**
 * Productos de distribuidora que no se identifican por marca, sino por
 * tipo de producto (por ejemplo las varillas roscadas).
 */
export const DISTRIBUTOR_KEYWORDS: readonly string[] = ["varilla roscada"];
