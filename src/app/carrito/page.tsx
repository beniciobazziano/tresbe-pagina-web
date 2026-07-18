"use client";

import Link from "next/link";
import { ArrowRight, Minus, Plus, ShoppingCart, Trash2, Truck } from "lucide-react";
import { useCart } from "@/components/cart/CartProvider";
import { useCustomer } from "@/components/customer/CustomerProvider";
import { ProductImage } from "@/components/ProductImage";
import { discountedPrice, formatARS } from "@/lib/site";

export default function CarritoPage() {
  const { items, ready, setQuantity, removeItem, total, hasBulky } = useCart();
  const { customer } = useCustomer();

  const discountPct = customer?.discount_pct ?? 0;
  const discountedTotal = items.reduce(
    (acc, i) => acc + discountedPrice(i.product.price, discountPct) * i.quantity,
    0
  );

  if (!ready) return <div className="min-h-[50vh]" />;

  if (items.length === 0) {
    return (
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-4 py-24 text-center sm:px-6">
        <div className="flex size-16 items-center justify-center rounded-full bg-concrete-100">
          <ShoppingCart className="size-7 text-concrete-400" />
        </div>
        <div>
          <h1 className="font-display text-2xl font-bold">Tu carrito está vacío</h1>
          <p className="mt-2 text-sm text-concrete-600">
            Recorré el catálogo y sumá lo que necesites para tu obra.
          </p>
        </div>
        <Link
          href="/productos"
          className="flex h-11 items-center gap-2 rounded-full bg-steel-600 px-6 text-sm font-semibold text-white hover:bg-steel-700"
        >
          Ver productos <ArrowRight className="size-4" />
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <h1 className="font-display text-3xl font-bold tracking-tight">Tu carrito</h1>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_360px]">
        <ul className="space-y-4">
          {items.map(({ product, quantity }) => (
            <li
              key={product.id}
              className="flex gap-4 rounded-xl border border-concrete-200 bg-white p-4"
            >
              <Link
                href={`/productos/${product.slug}`}
                className="relative block size-24 shrink-0 overflow-hidden rounded-lg border border-concrete-100"
              >
                <ProductImage product={product} sizes="96px" iconSize="size-8" />
              </Link>
              <div className="flex flex-1 flex-col justify-between gap-2">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <Link
                      href={`/productos/${product.slug}`}
                      className="text-sm font-semibold leading-snug hover:text-steel-600"
                    >
                      {product.name}
                    </Link>
                    <p className="mt-0.5 text-xs text-concrete-500">
                      {product.unit}
                      {product.bulky && " · flete a cotizar"}
                    </p>
                  </div>
                  <button
                    type="button"
                    aria-label={`Quitar ${product.name}`}
                    onClick={() => removeItem(product.id)}
                    className="flex size-8 shrink-0 items-center justify-center rounded-full text-concrete-400 hover:bg-red-50 hover:text-red-600"
                  >
                    <Trash2 className="size-4" />
                  </button>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center rounded-full border border-concrete-300">
                    <button
                      type="button"
                      aria-label="Restar uno"
                      onClick={() => setQuantity(product.id, quantity - 1)}
                      className="flex size-8 items-center justify-center rounded-l-full text-concrete-700 hover:bg-concrete-100"
                    >
                      <Minus className="size-3.5" />
                    </button>
                    <span className="w-8 text-center text-sm font-semibold">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      aria-label="Sumar uno"
                      onClick={() => setQuantity(product.id, quantity + 1)}
                      className="flex size-8 items-center justify-center rounded-r-full text-concrete-700 hover:bg-concrete-100"
                    >
                      <Plus className="size-3.5" />
                    </button>
                  </div>
                  <p className="font-display font-bold text-steel-700">
                    {formatARS(product.price * quantity)}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <aside className="h-fit rounded-xl border border-concrete-200 bg-white p-6">
          <h2 className="font-display text-lg font-bold">Resumen</h2>
          <dl className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between">
              <dt className="text-concrete-600">Subtotal</dt>
              <dd className="font-semibold">{formatARS(total)}</dd>
            </div>
            {discountPct > 0 && (
              <div className="flex justify-between text-lime-700">
                <dt>Descuento cliente ({discountPct}%)</dt>
                <dd className="font-semibold">
                  −{formatARS(total - discountedTotal)}
                </dd>
              </div>
            )}
            <div className="flex justify-between">
              <dt className="text-concrete-600">Envío</dt>
              <dd className="text-concrete-600">se define al finalizar</dd>
            </div>
          </dl>
          <div className="mt-4 flex justify-between border-t border-concrete-200 pt-4">
            <span className="font-semibold">Total</span>
            <span className="font-display text-xl font-bold text-steel-700">
              {formatARS(discountPct > 0 ? discountedTotal : total)}
            </span>
          </div>

          {hasBulky && (
            <p className="mt-4 flex items-start gap-2 rounded-lg bg-lime-50 p-3 text-xs leading-5 text-lime-900">
              <Truck className="mt-0.5 size-4 shrink-0" />
              Tenés productos voluminosos: si elegís envío, te cotizamos el
              flete antes de pagar.
            </p>
          )}

          <Link
            href="/checkout"
            className="mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-full bg-lime-500 text-sm font-semibold text-steel-950 transition-colors hover:bg-lime-400"
          >
            Finalizar compra <ArrowRight className="size-4" />
          </Link>
          <Link
            href="/productos"
            className="mt-3 block text-center text-sm font-medium text-steel-600 hover:text-steel-800"
          >
            Seguir comprando
          </Link>
        </aside>
      </div>
    </div>
  );
}
