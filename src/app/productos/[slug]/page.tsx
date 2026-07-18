import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, MessageCircle, Store, Truck } from "lucide-react";
import { getCategoryBySlug, getProductBySlug, getProducts } from "@/lib/catalog";
import { formatARS, whatsappLink } from "@/lib/site";
import { AddToCartButton } from "@/components/cart/AddToCartButton";
import { ProductCard } from "@/components/ProductCard";
import { ProductImage } from "@/components/ProductImage";
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

  const [category, related] = await Promise.all([
    getCategoryBySlug(product.category_slug),
    getProducts({ categorySlug: product.category_slug }),
  ]);
  const others = related.filter((p) => p.id !== product.id).slice(0, 4);

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

      <div className="mt-8 grid gap-10 lg:grid-cols-2">
        <div className="relative aspect-square overflow-hidden rounded-2xl border border-concrete-200 bg-white">
          <ProductImage
            product={product}
            sizes="(min-width: 1024px) 50vw, 100vw"
            iconSize="size-28"
          />
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

          <p className="mt-6 font-display text-4xl font-bold text-steel-700">
            {formatARS(product.price)}
          </p>
          <p className="mt-1 text-xs text-concrete-500">
            Precio en pesos argentinos, IVA incluido.
          </p>

          <div className="mt-8">
            <AddToCartButton product={product} />
          </div>

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

          <p className="mt-8 leading-7 text-concrete-700">{product.description}</p>

          {product.specs.length > 0 && (
            <div className="mt-8">
              <h2 className="tech-label text-steel-500">Ficha técnica</h2>
              <dl className="mt-3 divide-y divide-concrete-200 overflow-hidden rounded-xl border border-concrete-200 bg-white">
                {product.specs.map((spec) => (
                  <div key={spec.label} className="grid grid-cols-2 gap-4 px-5 py-3 text-sm">
                    <dt className="font-medium text-concrete-600">{spec.label}</dt>
                    <dd className="text-concrete-950">{spec.value}</dd>
                  </div>
                ))}
              </dl>
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

      {others.length > 0 && (
        <section className="mt-20">
          <h2 className="font-display text-2xl font-bold tracking-tight">
            También te puede servir
          </h2>
          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
            {others.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
