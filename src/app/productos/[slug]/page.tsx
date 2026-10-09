import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ChevronRight,
  MessageCircle,
  Store,
  TrendingUp,
  Truck,
} from "lucide-react";
import { getCategoryBySlug, getProductBySlug, getProducts } from "@/lib/catalog";
import { getSessionCustomer } from "@/lib/customers";
import { customerPricing } from "@/lib/pricing";
import {
  discountedPrice,
  formatARS,
  formatPriceLabel,
  whatsappLink,
} from "@/lib/site";
import { ProductDescriptionSpecs } from "@/components/ProductDescriptionSpecs";
import { ProductGallery } from "@/components/ProductGallery";
import { ProductMoreInfo } from "@/components/ProductMoreInfo";
import { ProductPurchasePanel } from "@/components/ProductPurchasePanel";
import { ProductVariantProvider } from "@/components/ProductVariantProvider";
import { ProductCard } from "@/components/ProductCard";
import { StockDot, STOCK_LABEL } from "@/components/StockDot";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) return { title: "Producto no encontrado" };
  return { title: product.name, description: product.description };
}

export default async function ProductoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product || !product.active) notFound();

  const [category, related, customer] = await Promise.all([
    getCategoryBySlug(product.category_slug),
    getProducts({ categorySlug: product.category_slug }),
    getSessionCustomer(),
  ]);
  const others = related.filter((p) => p.id !== product.id).slice(0, 4);

  // Cliente con cuenta: ve su costo y su precio de venta
  const costo = customer
    ? discountedPrice(product.price, customer.discount_pct)
    : product.price;
  const { markupPct, sale } = customerPricing(costo, product.brand, customer);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      {/* Migas */}
      <nav className="flex flex-wrap items-center gap-1.5 text-sm text-concrete-500">
        <Link href="/productos" className="hover:text-steel-600">
          Productos
        </Link>
        {category && (
          <>
            <ChevronRight className="size-3.5" />
            <Link
              href={`/productos?categoria=${category.slug}`}
              className="hover:text-steel-600"
            >
              {category.name}
            </Link>
          </>
        )}
        <ChevronRight className="size-3.5" />
        <span className="text-concrete-800">{product.name}</span>
      </nav>

      <ProductVariantProvider product={product}>
      <div className="mt-8 grid gap-10 lg:grid-cols-2">
        <div>
          <ProductGallery product={product} />
          <ProductMoreInfo product={product} />
        </div>

        <div>
          {product.brand && (
            <p className="tech-label text-steel-500">{product.brand}</p>
          )}
          <h1 className="mt-2 font-display text-3xl font-bold leading-tight tracking-tight">
            {product.name}
          </h1>
          <p className="mt-2 text-sm text-concrete-500">
            Se vende por {product.unit}
          </p>

          <p className="mt-3 flex items-center gap-2 text-sm font-medium">
            <StockDot status={product.stock_status} />
            {STOCK_LABEL[product.stock_status]}
            {product.stock_status === "en_argentina" && (
              <span className="font-normal text-concrete-500">
                — demora unos días en llegar a sucursal
              </span>
            )}
            {product.stock_status === "sin_stock" && (
              <span className="font-normal text-concrete-500">
                — consultanos por disponibilidad
              </span>
            )}
          </p>

          {customer && product.price > 0 ? (
            <div className="mt-6 overflow-hidden rounded-2xl border border-concrete-200">
              <div className="flex flex-wrap items-end justify-between gap-4 bg-white p-5">
                <div>
                  <p className="tech-label text-[10px] text-steel-500">Tu costo</p>
                  <p className="mt-1 font-display text-4xl font-bold text-steel-700">
                    {formatARS(costo)}
                  </p>
                  {customer.discount_pct > 0 && (
                    <p className="mt-1 text-xs text-concrete-500">
                      Lista {formatARS(product.price)} · tu descuento{" "}
                      {customer.discount_pct}%
                    </p>
                  )}
                </div>
                {sale != null && (
                  <div className="text-right">
                    <p className="tech-label text-[10px] text-lime-700">
                      Tu precio de venta
                    </p>
                    <p className="mt-1 font-display text-3xl font-bold text-lime-700">
                      {formatARS(sale)}
                    </p>
                    <p className="mt-1 text-xs text-concrete-500">
                      rentabilidad {markupPct}% · ganás{" "}
                      {formatARS(sale - costo)}
                    </p>
                  </div>
                )}
              </div>
              {sale == null && (
                <Link
                  href="/cliente/rentabilidades"
                  className="flex items-center gap-2 border-t border-concrete-200 bg-lime-50 px-5 py-3 text-xs font-semibold text-lime-800 hover:bg-lime-100"
                >
                  <TrendingUp className="size-4" />
                  Cargá tu rentabilidad para ver acá tu precio de venta →
                </Link>
              )}
            </div>
          ) : (
            <>
              <p className="mt-6 font-display text-4xl font-bold text-steel-700">
                {formatPriceLabel(product.price)}
              </p>
              <p className="mt-1 text-xs text-concrete-500">
                Precio en pesos argentinos, IVA incluido.
              </p>
            </>
          )}

          <ProductPurchasePanel product={product} />

          <div className="mt-8 space-y-3 rounded-xl border border-concrete-200 bg-white p-5 text-sm">
            <div className="flex items-start gap-3">
              <Store className="mt-0.5 size-4 shrink-0 text-steel-500" />
              <p>
                <strong>Retiro gratis</strong> en Chacabuco 6311, Mar del Plata.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <Truck className="mt-0.5 size-4 shrink-0 text-steel-500" />
              {product.bulky ? (
                <p>
                  <strong>Producto voluminoso:</strong> el envío se cotiza según
                  zona y cantidad. Al finalizar la compra te contactamos con el
                  costo del flete.
                </p>
              ) : (
                <p>
                  <strong>Envío a domicilio</strong> en Mar del Plata y la zona.
                </p>
              )}
            </div>
          </div>

          <ProductDescriptionSpecs product={product} />

          {product.spec_table && product.spec_table.rows.length > 0 && (
            <div className="mt-8">
              <h2 className="tech-label text-steel-500">
                Medidas y especificaciones
              </h2>
              <p className="mt-1 text-xs text-concrete-500">
                Datos oficiales del fabricante · {product.spec_table.rows.length}{" "}
                medida{product.spec_table.rows.length !== 1 && "s"}
              </p>
              <div className="mt-3 overflow-x-auto rounded-xl border border-concrete-200 bg-white">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-concrete-200 bg-concrete-50">
                      {product.spec_table.headers.map((h) => (
                        <th
                          key={h}
                          className="whitespace-nowrap px-3 py-2 text-left text-[11px] font-semibold uppercase tracking-wider text-concrete-600"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-concrete-100">
                    {product.spec_table.rows.map((row, i) => (
                      <tr key={i} className="hover:bg-steel-50/60">
                        {row.map((cell, j) => (
                          <td
                            key={j}
                            className={`whitespace-nowrap px-3 py-2 ${
                              j === 0
                                ? "font-semibold text-concrete-950"
                                : "text-concrete-700"
                            }`}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          <a
            href={whatsappLink(
              `¡Hola Tresbe! Quiero consultar por: ${product.name}`
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-lime-700 hover:text-lime-800"
          >
            <MessageCircle className="size-4" />
            Consultar por este producto por WhatsApp
          </a>
        </div>
      </div>
      </ProductVariantProvider>

      {others.length > 0 && (
        <section className="mt-20">
          <h2 className="font-display text-2xl font-bold tracking-tight">
            También te puede servir
          </h2>
          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
            {others.map((p) => (
              <ProductCard key={p.id} product={p} customer={customer} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
