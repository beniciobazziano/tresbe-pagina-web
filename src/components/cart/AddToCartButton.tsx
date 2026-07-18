"use client";

import { useState } from "react";
import { Check, Minus, Plus, ShoppingCart } from "lucide-react";
import type { Product } from "@/lib/types";
import { useCart } from "./CartProvider";

export function AddToCartButton({
  product,
  compact = false,
}: {
  product: Product;
  compact?: boolean;
}) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  function handleAdd() {
    addItem(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  if (compact) {
    return (
      <button
        type="button"
        onClick={handleAdd}
        aria-label={`Agregar ${product.name} al carrito`}
        className={`flex size-9 shrink-0 items-center justify-center rounded-full transition-colors ${
          added
            ? "bg-lime-500 text-white"
            : "bg-steel-600 text-white hover:bg-steel-700"
        }`}
      >
        {added ? <Check className="size-4" /> : <Plus className="size-4" />}
      </button>
    );
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
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
  );
}
