"use client";

import { useState } from "react";
import { Check, FlaskConical, Minus, Package, Palette, Plus, Ruler, ShoppingCart } from "lucide-react";
import { useCart } from "./cart/CartProvider";
import { useProductVariant } from "./ProductVariantProvider";
import type { Product } from "@/lib/types";

/**
 * Selección de tipo, medida, color y presentación + alta al carrito.
 * Un mismo producto puede venir en varios tipos, medidas, colores y/o
 * empaques (estuche, granel…): el cliente elige antes de agregar. Tipo,
 * medida y color viven en un contexto compartido con ProductGallery (y
 * con la descripción/ficha técnica, si el tipo trae las suyas propias):
 * así, si el producto tiene foto propia por tipo/medida/color, la foto
 * principal cambia junto con el selector.
 */
export function ProductPurchasePanel({ product }: { product: Product }) {
  const { addItem } = useCart();
  const sizes = product.sizes ?? [];
  const colors = product.colors ?? [];
  const packagings = product.packagings ?? [];
  const variants = product.variants ?? [];

  const { size, setSize, color, setColor, variant, setVariant } = useProductVariant();
  const [packaging, setPackaging] = useState(packagings[0] ?? "");
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  function handleAdd() {
    addItem(product, quantity, {
      size: size || undefined,
      color: color || undefined,
      variant: variant || undefined,
      packaging: packaging || undefined,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1600);
  }

  const selectClass =
    "h-11 w-full rounded-lg border border-concrete-300 bg-white px-3 text-sm outline-none focus:border-steel-500 focus:ring-2 focus:ring-steel-200";

  return (
    <div className="mt-8">
      {(variants.length > 0 || sizes.length > 0 || colors.length > 0 || packagings.length > 0) && (
        <div className="grid gap-4 sm:grid-cols-2">
          {variants.length > 0 && (
            <label className="block text-sm sm:col-span-2">
              <span className="mb-1.5 flex items-center gap-1.5 font-medium">
                <FlaskConical className="size-4 text-steel-500" />
                Tipo
              </span>
              <select
                value={variant}
                onChange={(e) => setVariant(e.target.value)}
                className={selectClass}
              >
                {variants.map((v) => (
                  <option key={v.label} value={v.label}>
                    {v.label}
                  </option>
                ))}
              </select>
              <span className="mt-1 block text-xs text-concrete-500">
                {variants.length} tipos disponibles — la descripción y ficha técnica cambian según el elegido
              </span>
            </label>
          )}

          {sizes.length > 0 && (
            <label className="block text-sm">
              <span className="mb-1.5 flex items-center gap-1.5 font-medium">
                <Ruler className="size-4 text-steel-500" />
                Medida
              </span>
              <select
                value={size}
                onChange={(e) => setSize(e.target.value)}
                className={selectClass}
              >
                {sizes.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
              <span className="mt-1 block text-xs text-concrete-500">
                {sizes.length} medida{sizes.length !== 1 && "s"} disponible
                {sizes.length !== 1 && "s"}
              </span>
            </label>
          )}

          {colors.length > 0 && (
            <label className="block text-sm">
              <span className="mb-1.5 flex items-center gap-1.5 font-medium">
                <Palette className="size-4 text-steel-500" />
                Color
              </span>
              <select
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className={selectClass}
              >
                {colors.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
              <span className="mt-1 block text-xs text-concrete-500">
                {colors.length} color{colors.length !== 1 && "es"} disponible
                {colors.length !== 1 && "s"}
              </span>
            </label>
          )}

          {packagings.length > 0 && (
            <label className="block text-sm">
              <span className="mb-1.5 flex items-center gap-1.5 font-medium">
                <Package className="size-4 text-steel-500" />
                Presentación
              </span>
              <select
                value={packaging}
                onChange={(e) => setPackaging(e.target.value)}
                className={selectClass}
              >
                {packagings.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
              <span className="mt-1 block text-xs text-concrete-500">
                Te confirmamos la cantidad por envase al preparar el pedido
              </span>
            </label>
          )}
        </div>
      )}

      <div className="mt-5 flex flex-wrap items-center gap-3">
        <div className="flex items-center rounded-full border border-concrete-300">
          <button
            type="button"
            aria-label="Restar uno"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="flex size-11 items-center justify-center rounded-l-full text-concrete-700 hover:bg-concrete-100"
          >
            <Minus className="size-4" />
          </button>
          <span className="w-10 text-center font-display text-base font-semibold">
            {quantity}
          </span>
          <button
            type="button"
            aria-label="Sumar uno"
            onClick={() => setQuantity((q) => q + 1)}
            className="flex size-11 items-center justify-center rounded-r-full text-concrete-700 hover:bg-concrete-100"
          >
            <Plus className="size-4" />
          </button>
        </div>
        <button
          type="button"
          onClick={handleAdd}
          className={`flex h-11 items-center gap-2 rounded-full px-6 text-sm font-semibold text-white transition-colors ${
            added ? "bg-lime-500" : "bg-steel-600 hover:bg-steel-700"
          }`}
        >
          {added ? (
            <>
              <Check className="size-4" /> Agregado
            </>
          ) : (
            <>
              <ShoppingCart className="size-4" /> Agregar al carrito
            </>
          )}
        </button>
      </div>
    </div>
  );
}
