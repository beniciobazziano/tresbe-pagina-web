import type { StockStatus } from "@/lib/types";

export const STOCK_LABEL: Record<StockStatus, string> = {
  en_sucursal: "En stock en sucursal",
  en_argentina: "Stock en Argentina (a pedido)",
  sin_stock: "Sin stock en Argentina",
};

const DOT_COLOR: Record<StockStatus, string> = {
  en_sucursal: "bg-emerald-500",
  en_argentina: "bg-amber-400",
  sin_stock: "bg-red-500",
};

/**
 * Semáforo de stock: verde = en sucursal, amarillo = en Argentina pero no
 * en sucursal, rojo = sin stock en Argentina.
 */
export function StockDot({
  status,
  size = "md",
}: {
  status: StockStatus;
  size?: "sm" | "md";
}) {
  return (
    <span
      title={STOCK_LABEL[status]}
      aria-label={STOCK_LABEL[status]}
      className={`inline-block shrink-0 rounded-full ring-2 ring-white shadow-sm ${DOT_COLOR[status]} ${
        size === "sm" ? "size-2.5" : "size-3.5"
      }`}
    />
  );
}
