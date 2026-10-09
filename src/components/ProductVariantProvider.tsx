"use client";

import { createContext, useContext, useState } from "react";
import type { Product } from "@/lib/types";

/**
 * Medida, color y tipo elegidos en la ficha de producto, compartidos
 * entre la galería de fotos y el selector de compra (que están en
 * columnas separadas del layout), y también con el bloque de
 * descripción/ficha técnica (que puede cambiar según el tipo elegido,
 * ver product.variants). Así, al cambiar de medida/color/tipo en el
 * selector, la foto principal y el contenido cambian junto con él si
 * el producto tiene datos propios para esa opción.
 */
interface ProductVariantValue {
  size: string;
  setSize: (size: string) => void;
  color: string;
  setColor: (color: string) => void;
  variant: string;
  setVariant: (variant: string) => void;
}

const ProductVariantContext = createContext<ProductVariantValue | null>(null);

export function ProductVariantProvider({
  product,
  children,
}: {
  product: Product;
  children: React.ReactNode;
}) {
  const [size, setSize] = useState(product.sizes?.[0] ?? "");
  const [color, setColor] = useState(product.colors?.[0] ?? "");
  const [variant, setVariant] = useState(product.variants?.[0]?.label ?? "");
  return (
    <ProductVariantContext.Provider value={{ size, setSize, color, setColor, variant, setVariant }}>
      {children}
    </ProductVariantContext.Provider>
  );
}

/** Fuera de una ficha con medidas/colores/tipos, devuelve un estado local propio (no rompe nada) */
export function useProductVariant() {
  const ctx = useContext(ProductVariantContext);
  const sizeFallback = useState("");
  const colorFallback = useState("");
  const variantFallback = useState("");
  if (ctx) return ctx;
  return {
    size: sizeFallback[0],
    setSize: sizeFallback[1],
    color: colorFallback[0],
    setColor: colorFallback[1],
    variant: variantFallback[0],
    setVariant: variantFallback[1],
  };
}
