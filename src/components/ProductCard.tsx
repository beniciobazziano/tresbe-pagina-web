import Link from "next/link";
import { Truck } from "lucide-react";
import type { Product } from "@/lib/types";
import { formatARS } from "@/lib/site";
import { ProductImage } from "./ProductImage";
import { StockDot } from "./StockDot";
import { AddToCartButton } from "./cart/AddToCartButton";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-concrete-200 bg-white transition-shadow hover:shadow-lg hover:shadow-steel-900/5">
      <Link
        href={`/productos/${product.slug}`}
        className="relative block aspect-[4/3] overflow-hidden"
      >
        <ProductImage product={product} />
        {product.brand && (
          <span className="absolute left-3 top-3 rounded-full bg-steel-950/80 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
            {product.brand}
          </span>
        )}
        {/* Semáforo de stock, arriba a la derecha */}
        <span className="absolute right-2.5 top-2.5">
          <StockDot status={product.stock_status} />
        </span>
        {product.bulky && (
          <span
            title="Producto voluminoso: el envío se cotiza aparte"
            className="absolute bottom-3 right-3 flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-medium text-concrete-700"
          >
            <Truck className="size-3" /> Flete a cotizar
          </span>
        )}
      </Link>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <Link href={`/productos/${product.slug}`} className="flex-1">
          <h3 className="text-sm font-semibold leading-snug text-concrete-950 group-hover:text-steel-600">
            {product.name}
          </h3>
        </Link>
        <p className="text-xs text-concrete-500">{product.unit}</p>
        <div className="mt-1 flex items-end justify-between gap-2">
          <p className="font-display text-lg font-bold text-steel-700">
            {formatARS(product.price)}
          </p>
          <AddToCartButton product={product} compact />
        </div>
      </div>
    </article>
  );
}
