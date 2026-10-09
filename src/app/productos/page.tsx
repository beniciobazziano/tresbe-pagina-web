import type { Metadata } from "next";
import Link from "next/link";
import { PackageSearch } from "lucide-react";
import {
  getBrands,
  getCategoriesWithProducts,
  getProducts,
} from "@/lib/catalog";
import { getSessionCustomer } from "@/lib/customers";
import { sortCatalog } from "@/lib/product-order";
import { Pager } from "@/components/Pager";
import { ProductCard } from "@/components/ProductCard";
import { SearchBox } from "@/components/SearchBox";

export const metadata: Metadata = {
  title: "Productos",
  description:
    "Catálogo completo de insumos para construcción en seco: tornillos TEL, perfiles, placas, aislaciones y herramientas.",
};

const PAGE_SIZE = 24;

function buildQuery(params: {
  categoria?: string;
  marca?: string;
  q?: string;
}) {
  const search = new URLSearchParams();
  if (params.categoria) search.set("categoria", params.categoria);
  if (params.marca) search.set("marca", params.marca);
  if (params.q) search.set("q", params.q);
  const qs = search.toString();
  return qs ? `/productos?${qs}` : "/productos";
}

export default async function ProductosPage({
  searchParams,
}: {
  searchParams: Promise<{
    categoria?: string;
    marca?: string;
    q?: string;
    page?: string;
  }>;
}) {
  const { categoria, marca, q, page: pageParam } = await searchParams;
  const [categories, brands, fetchedProducts, customer] = await Promise.all([
    getCategoriesWithProducts(),
    getBrands(),
    getProducts({ categorySlug: categoria, brand: marca, search: q }),
    getSessionCustomer(),
  ]);

  const activeCategory = categories.find((c) => c.slug === categoria);
  const activeBrand = brands.find(
    (b) => b.toLowerCase() === marca?.toLowerCase()
  );

  // Orden de la tienda: los tornillos TEL primero y el resto por grupo
  // (combos, a batería, baterías, a cable, bolsos, manuales).
  const allProducts = sortCatalog(fetchedProducts);

  // El catálogo puede tener miles de productos: paginamos para que la
  // página cargue rápido en vez de renderizarlos todos de una vez.
  const totalPages = Math.max(1, Math.ceil(allProducts.length / PAGE_SIZE));
  const page = Math.min(totalPages, Math.max(1, Number(pageParam) || 1));
  const products = allProducts.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const chipClass = (active: boolean) =>
    `rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
      active
        ? "border-steel-600 bg-steel-600 text-white"
        : "border-concrete-300 bg-white text-concrete-700 hover:border-steel-400"
    }`;

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <p className="tech-label text-steel-500">Catálogo</p>
      <h1 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
        {activeCategory
          ? activeCategory.name
          : activeBrand
          ? `Productos ${activeBrand}`
          : "Todos los productos"}
      </h1>
      {activeCategory && (
        <p className="mt-2 max-w-2xl text-sm leading-6 text-concrete-600">
          {activeCategory.description}
        </p>
      )}

      <div className="mt-6">
        <SearchBox initialQuery={q ?? ""} categoria={categoria} marca={marca} />
      </div>

      {/* Filtro por marca (único filtro visible) */}
      <div className="mt-6 flex flex-wrap items-center gap-2">
        <span className="tech-label mr-1 text-[10px] text-concrete-500">
          Marca
        </span>
        <Link href={buildQuery({ categoria, q })} className={chipClass(!marca)}>
          Todas
        </Link>
        {brands.map((brand) => (
          <Link
            key={brand}
            href={buildQuery({ categoria, marca: brand, q })}
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
              Probá con otros filtros o consultanos por WhatsApp: trabajamos
              con mucho más de lo que está publicado.
            </p>
          </div>
          <Link
            href="/productos"
            className="text-sm font-semibold text-steel-600 hover:text-steel-800"
          >
            Ver todo el catálogo
          </Link>
        </div>
      ) : (
        <>
          <p className="mt-6 text-xs text-concrete-500">
            {allProducts.length} producto{allProducts.length !== 1 && "s"}
            {activeBrand && ` de ${activeBrand}`}
            {activeCategory && ` en ${activeCategory.name}`}
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
            basePath="/productos"
            params={{ categoria, marca, q }}
          />
        </>
      )}
    </div>
  );
}
