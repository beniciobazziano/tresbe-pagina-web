"use client";

import type { Product } from "@/lib/types";
import { useProductVariant } from "./ProductVariantProvider";

/**
 * Descripción + ficha técnica del producto. Si el producto tiene
 * `variants` (ej. los distintos tipos de químico de un anclaje) y hay
 * uno elegido en el selector de compra, se muestran la descripción y
 * specs de ESE tipo en vez de las generales del producto — así cada
 * tipo cuenta para qué sirve específicamente.
 */
export function ProductDescriptionSpecs({ product }: { product: Product }) {
  const { variant } = useProductVariant();
  const activeVariant = product.variants?.find((v) => v.label === variant);

  const description = activeVariant?.description ?? product.description;
  const specs = activeVariant?.specs ?? product.specs;

  return (
    <>
      <p className="mt-8 leading-7 text-concrete-700">{description}</p>

      {specs.length > 0 && (
        <div className="mt-8">
          <h2 className="tech-label text-steel-500">Ficha técnica</h2>
          {activeVariant && (
            <p className="mt-1 text-xs text-concrete-500">
              Datos del tipo &ldquo;{activeVariant.label}&rdquo;
            </p>
          )}
          <dl className="mt-3 divide-y divide-concrete-200 overflow-hidden rounded-xl border border-concrete-200 bg-white">
            {specs.map((spec) => (
              <div key={spec.label} className="grid grid-cols-2 gap-4 px-5 py-3 text-sm">
                <dt className="font-medium text-concrete-600">{spec.label}</dt>
                <dd className="text-concrete-950">{spec.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      )}
    </>
  );
}
