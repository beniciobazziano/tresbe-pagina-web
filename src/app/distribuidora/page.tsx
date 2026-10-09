import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { PackageSearch, Truck } from "lucide-react";
import { getDistributorBrands, getProducts } from "@/lib/catalog";
import { getSessionCustomer } from "@/lib/customers";
import { sortCatalog } from "@/lib/product-order";
import { Pager } from "@/components/Pager";
import { ProductCard } from "@/components/ProductCard";
import { SearchBox } from "@/components/SearchBox";

export const metadata: Metadata = {
  title: "Productos distribuidora",
  robots: { index: false, follow: false },
};

const PAGE_SIZE = 24;

export default async function DistribuidoraPage({
  searchParams,
}: {
  searchParams: Promise<{ marca?: string; q?: string; page?: string }>;
}) {
  const customer = await getSessionCustomer();
  // Sección exclusiva de las cuentas de reventa
  if (!customer) redirect("/cliente/login");
  if (customer.customer_type !== "distribuidora") redirect("/productos");

  const { marca, q, page: pageParam } = await searchParams;
  const [brands, fetchedProducts] = await Promise.all([
    getDistributorBrands(),
    getProducts({ brand: marca, search: q, distributorOnly: true }),
  ]);

  // Mismo orden que la tienda: TEL primero y el resto por grupo
  const allProducts = sortCatalog(fetchedProducts);

  const totalPages = Math.max(1, Math.ceil(allProducts.length / PAGE_SIZE));
  const page = Math.min(totalPages, Math.max(1, Number(pageParam) || 1));
  const products = allProducts.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const chipClass = (active: boolean) =>
    `rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
      active
        ? "border-steel-600 bg-steel-600 text-white"
        : "border-concrete-300 bg-white text-concrete-700 hover:border-steel-400"
    }`;

  const query = (params: { marca?: string; q?: string }) => {
    const search = new URLSearchParams();
    if (params.marca) search.set("marca", params.marca);
    if (params.q) search.set("q", params.q);
    const qs = search.toString();
    return qs ? `/distribuidora?${qs}` : "/distribuidora";
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <div className="blueprint-grid rounded-2xl bg-steel-950 p-6 text-white lg:p-8">
        <p className="tech-label text-lime-400">Solo para reventa</p>
        <h1 className="mt-2 font-display text-3xl font-bold tracking-tight">
          Productos distribuidora
        </h1>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-steel-100">
          Las líneas que distribuimos, con tu costo y tu precio de venta.
          Cuenta {customer.name}
          {customer.discount_pct > 0 && ` · descuento ${customer.discount_pct}%`}.
        </p>
      </div>

      <div className="mt-6">
        <SearchBox initialQuery={q ?? ""} marca={marca} basePath="/distribuidora" />
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-2">
        <span className="tech-label mr-1 text-[10px] text-concrete-500">Marca</span>
        <Link href={query({ q })} className={chipClass(!marca)}>
          Todas
        </Link>
        {brands.map((brand) => (
          <Link
            key={brand}
            href={query({ marca: brand, q })}
            className={chipClass(marca?.toLowerCase() === brand.toLowerCase())}
          >
            {brand}
          </Link>
        ))}
      </div>

      {products.length === 0 ? (
        <div className="mt-16 flex flex-col items-center gap-4 rounded-2xl border border-dashed border-concrete-300 bg-white px-6 py-16 text-center">
          <PackageSearch className="size-10 text-concrete-400" />
          <div>
            <h2 className="font-semibold">No encontramos productos</h2>
            <p className="mt-1 text-sm text-concrete-600">
              Probá con otra búsqueda o consultanos: podemos conseguir más de
              lo que está publicado.
            </p>
          </div>
          <Link
            href="/distribuidora"
            className="text-sm font-semibold text-steel-600 hover:text-steel-800"
          >
            Ver todo lo que distribuimos
          </Link>
        </div>
      ) : (
        <>
          <p className="mt-6 flex items-center gap-2 text-xs text-concrete-500">
            <Truck className="size-3.5" />
            {allProducts.length} producto{allProducts.length !== 1 && "s"} de
            distribuidora
            {marca && ` · ${marca}`}
            {totalPages > 1 && ` · página ${page} de ${totalPages}`}
          </p>
          <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} customer={customer} />
            ))}
          </div>
          <Pager
            page={page}
            totalPages={totalPages}
            basePath="/distribuidora"
            params={{ marca, q }}
          />
        </>
      )}
    </div>
  );
}
