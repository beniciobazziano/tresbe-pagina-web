"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Check, ChevronDown, Package, Tag, X } from "lucide-react";
import type { Product } from "@/lib/types";

/**
 * Botón "Ver más" que despliega todo lo que publica el fabricante:
 * características completas, usos y aplicaciones, presentaciones y
 * la galería entera en grande.
 */
export function ProductMoreInfo({ product }: { product: Product }) {
  const [open, setOpen] = useState(false);
  const hasInfo =
    (product.full_info && product.full_info.length > 0) ||
    (product.uses && product.uses.length > 0) ||
    (product.gallery && product.gallery.length > 1);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!hasInfo) return null;

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="mt-3 flex items-center gap-1.5 text-sm font-semibold text-steel-600 hover:text-steel-800"
      >
        Ver más
        <ChevronDown className="size-4" />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 p-0 sm:items-center sm:p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-t-2xl bg-white sm:rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-concrete-200 bg-white px-5 py-4">
              <h2 className="font-display text-lg font-bold">{product.name}</h2>
              <button
                type="button"
                aria-label="Cerrar"
                onClick={() => setOpen(false)}
                className="flex size-9 items-center justify-center rounded-full text-concrete-500 hover:bg-concrete-100"
              >
                <X className="size-5" />
              </button>
            </div>

            <div className="space-y-8 p-5">
              {product.gallery && product.gallery.length > 1 && (
                <section>
                  <h3 className="tech-label text-steel-500">Fotos</h3>
                  <div className="mt-3 grid grid-cols-3 gap-3 sm:grid-cols-4">
                    {product.gallery.map((src) => (
                      <div
                        key={src}
                        className="relative aspect-square overflow-hidden rounded-lg border border-concrete-200 bg-white"
                      >
                        <Image
                          src={src}
                          alt=""
                          fill
                          sizes="200px"
                          className="object-contain p-2"
                        />
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {product.uses && product.uses.length > 0 && (
                <section>
                  <h3 className="flex items-center gap-1.5 tech-label text-steel-500">
                    <Tag className="size-3.5" /> Usos y aplicaciones
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {product.uses.map((use) => (
                      <span
                        key={use}
                        className="rounded-full bg-steel-50 px-3 py-1.5 text-xs font-medium text-steel-700"
                      >
                        {use}
                      </span>
                    ))}
                  </div>
                </section>
              )}

              {product.full_info?.map((section) => (
                <section key={section.title}>
                  <h3 className="flex items-center gap-1.5 tech-label text-steel-500">
                    {/Present/i.test(section.title) ? (
                      <Package className="size-3.5" />
                    ) : (
                      <Check className="size-3.5" />
                    )}
                    {section.title}
                  </h3>
                  <dl className="mt-3 divide-y divide-concrete-100 overflow-hidden rounded-xl border border-concrete-200">
                    {(() => {
                      const rows: { label: string; value: string }[] = [];
                      const items = section.items;
                      // Pares LABEL/valor (mayúsculas = etiqueta) cuando aplica
                      let i = 0;
                      while (i < items.length) {
                        const label = items[i];
                        const isLabel = label === label.toUpperCase() && /[A-ZÁÉÍÓÚÑ]/.test(label);
                        if (isLabel && items[i + 1]) {
                          rows.push({ label, value: items[i + 1] });
                          i += 2;
                        } else {
                          rows.push({ label: "", value: items[i] });
                          i += 1;
                        }
                      }
                      return rows.map((r, idx) => (
                        <div
                          key={idx}
                          className="grid grid-cols-2 gap-4 px-4 py-2.5 text-sm"
                        >
                          {r.label ? (
                            <>
                              <dt className="font-medium text-concrete-600">
                                {r.label}
                              </dt>
                              <dd className="text-concrete-950">{r.value}</dd>
                            </>
                          ) : (
                            <dd className="col-span-2 text-concrete-950">{r.value}</dd>
                          )}
                        </div>
                      ));
                    })()}
                  </dl>
                </section>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
