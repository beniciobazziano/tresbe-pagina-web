import { GENERAL_MARKUP_KEY, type Customer, type Markups } from "./types";

/**
 * Precio de venta sugerido del cliente: su costo más la rentabilidad que
 * tenga cargada para esa marca (o la general si no configuró esa marca).
 */
export function resolveMarkup(
  markups: Markups | undefined,
  brand: string | null
): number {
  if (!markups) return 0;
  if (brand && typeof markups[brand] === "number") return markups[brand];
  const general = markups[GENERAL_MARKUP_KEY];
  return typeof general === "number" ? general : 0;
}

export function salePrice(cost: number, markupPct: number): number {
  if (cost <= 0 || markupPct <= 0) return cost;
  return Math.round(cost * (1 + markupPct / 100));
}

/** Costo + precio de venta del cliente para un producto */
export function customerPricing(
  cost: number,
  brand: string | null,
  customer: Customer | null
): { cost: number; markupPct: number; sale: number | null } {
  if (!customer || cost <= 0) return { cost, markupPct: 0, sale: null };
  const markupPct = resolveMarkup(customer.markups, brand);
  if (markupPct <= 0) return { cost, markupPct: 0, sale: null };
  return { cost, markupPct, sale: salePrice(cost, markupPct) };
}
