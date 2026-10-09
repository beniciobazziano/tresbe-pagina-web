"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Package } from "lucide-react";
import type { Product } from "@/lib/types";
import { useProductVariant } from "./ProductVariantProvider";

/**
 * Foto principal + miniaturas debajo (todas las fotos del fabricante).
 * Si el producto no tiene galería, muestra solo la imagen principal
 * (o el ícono de reemplazo, como antes). Si el producto tiene una foto
 * propia por tipo (variants), color (color_images) o medida
 * (size_images) y hay una elegida en el selector de compra, esa foto
 * manda sobre la general (tipo > color > medida, de más a menos específico).
 */
export function ProductGallery({ product }: { product: Product }) {
  const { size, color, variant } = useProductVariant();
  const variantOption = product.variants?.find((v) => v.label === variant);
  const variantImage =
    variantOption?.image_url ?? product.color_images?.[color] ?? product.size_images?.[size];

  const photos =
    product.gallery && product.gallery.length > 0
      ? product.gallery
      : product.image_url
      ? [product.image_url]
      : [];

  const [active, setActive] = useState(0);
  // Al cambiar de medida, la miniatura activa vuelve a la principal
  useEffect(() => {
    setActive(0);
  }, [variantImage]);

  const current = variantImage ?? photos[active];

  return (
    <div>
      <div className="group relative aspect-square overflow-hidden rounded-2xl border border-concrete-200 bg-white">
        {current ? (
          <Image
            src={current}
            alt={product.name}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-contain p-6 transition-transform duration-300 ease-out group-hover:scale-110"
            priority
          />
        ) : (
          <Package className="absolute inset-0 m-auto size-28 text-concrete-300" />
        )}
      </div>

      {photos.length > 1 && (
        <div className="mt-3 grid grid-cols-5 gap-2 sm:grid-cols-6">
          {photos.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Ver foto ${i + 1}`}
              className={`relative aspect-square overflow-hidden rounded-lg border bg-white transition-colors ${
                i === active
                  ? "border-steel-600 ring-2 ring-steel-200"
                  : "border-concrete-200 hover:border-steel-300"
              }`}
            >
              <Image
                src={src}
                alt=""
                fill
                sizes="80px"
                className="object-contain p-1.5"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
