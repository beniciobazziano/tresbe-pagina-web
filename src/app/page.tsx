import Link from "next/link";
import {
  ArrowRight,
  Building2,
  MessageCircle,
  ShieldCheck,
  Store,
  Truck,
} from "lucide-react";
import {
  getBrands,
  getCategoriesWithProducts,
  getProducts,
} from "@/lib/catalog";
import { getSessionCustomer } from "@/lib/customers";
import { site, whatsappLink } from "@/lib/site";
import { ProductCard } from "@/components/ProductCard";
import { CategoryIcon } from "@/components/CategoryIcon";
import { SearchBox } from "@/components/SearchBox";

export default async function HomePage() {
  const [categories, featured, customer, brands] = await Promise.all([
    getCategoriesWithProducts(),
    getProducts({ featuredOnly: true }),
    getSessionCustomer(),
    getBrands(),
  ]);

  return (
    <>
      {/* Celular: la home es la tienda — buscador directo, sin presentación */}
      <section className="blueprint-grid bg-steel-950 text-white lg:hidden">
        <div className="px-4 pb-6 pt-7">
          <p className="tech-label text-lime-400">
            Construcción en seco · Mar del Plata
          </p>
          <h1 className="mt-2 font-display text-2xl font-bold tracking-tight">
            ¿Qué necesitás para tu obra?
          </h1>
          <div className="mt-4">
            <SearchBox initialQuery="" />
          </div>
          {/* Accesos rápidos por marca */}
          <div className="-mx-4 mt-4 flex gap-2 overflow-x-auto px-4 pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {brands.map((brand) => (
              <Link
                key={brand}
                href={`/productos?marca=${encodeURIComponent(brand)}`}
                className="shrink-0 rounded-full border border-steel-600/70 bg-steel-900/70 px-3.5 py-1.5 text-xs font-semibold text-steel-100 transition-colors hover:bg-steel-800"
              >
                {brand}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Celular: carrusel de los más vendidos */}
      {featured.length > 0 && (
        <section className="border-b border-concrete-200 bg-white lg:hidden">
          <div className="px-4 py-6">
            <p className="tech-label text-steel-500">Seleccionados</p>
            <h2 className="mt-1 font-display text-xl font-bold tracking-tight">
              Los más vendidos
            </h2>
            <div className="-mx-4 mt-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {featured.slice(0, 10).map((product) => (
                <div key={product.id} className="w-44 shrink-0 snap-start">
                  <ProductCard product={product} customer={customer} />
                </div>
              ))}
            </div>
            <Link
              href="/productos"
              className="mt-4 flex h-12 items-center justify-center gap-2 rounded-full bg-steel-600 text-sm font-semibold text-white hover:bg-steel-700"
            >
              Ver todo el catálogo <ArrowRight className="size-4" />
            </Link>
          </div>
        </section>
      )}

      {/* Hero (escritorio) */}
      <section className="blueprint-grid relative hidden overflow-hidden bg-steel-950 text-white lg:block">
        <div className="pointer-events-none absolute -right-32 -top-32 size-96 rounded-full bg-steel-600/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 left-1/4 size-96 rounded-full bg-lime-500/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20 lg:py-28">
          <p className="tech-label text-lime-400">
            Construcción en seco · Mar del Plata
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Todo para tu obra en{" "}
            <span className="text-lime-400">steel frame</span> y{" "}
            <span className="text-lime-400">wood frame</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-steel-100">
            Perfiles, placas, aislaciones, tornillos TEL y herramientas de las
            mejores marcas. Asesoramiento real, de una familia que conoce el
            mostrador desde {site.foundedYear}.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/productos"
              className="flex h-12 items-center gap-2 rounded-full bg-lime-500 px-7 text-sm font-semibold text-steel-950 transition-colors hover:bg-lime-400"
            >
              Ver productos <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/sistemas/steel-frame"
              className="flex h-12 items-center gap-2 rounded-full border border-steel-400/60 px-7 text-sm font-semibold text-white transition-colors hover:bg-steel-800"
            >
              Conocé los sistemas
            </Link>
          </div>
        </div>
        {/* Línea de cota decorativa */}
        <div className="relative mx-auto max-w-7xl px-4 pb-8 sm:px-6">
          <div className="flex items-center gap-3 text-steel-400">
            <span className="h-px flex-1 bg-steel-700" />
            <span className="font-display text-xs tracking-[0.3em]">
              EST. {site.foundedYear} — CHACABUCO 6311, MDP
            </span>
            <span className="h-px flex-1 bg-steel-700" />
          </div>
        </div>
      </section>

      {/* Secciones */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:py-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="tech-label text-steel-500">Catálogo</p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight">
              Comprá por sección
            </h2>
          </div>
          <Link
            href="/productos"
            className="hidden items-center gap-1.5 text-sm font-semibold text-steel-600 hover:text-steel-800 sm:flex"
          >
            Ver todo <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/productos?categoria=${cat.slug}`}
              className="group rounded-xl border border-concrete-200 bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-steel-300 hover:shadow-lg hover:shadow-steel-900/5"
            >
              <div className="flex size-11 items-center justify-center rounded-xl bg-steel-50 text-steel-600 transition-colors group-hover:bg-lime-100 group-hover:text-lime-700">
                <CategoryIcon name={cat.icon} className="size-5" />
              </div>
              <h3 className="mt-4 font-semibold leading-snug">{cat.name}</h3>
              <p className="mt-1.5 line-clamp-2 text-xs leading-5 text-concrete-500">
                {cat.description}
              </p>
            </Link>
          ))}
          <Link
            href="/productos"
            className="group flex flex-col items-start justify-between rounded-xl bg-steel-600 p-5 text-white transition-all hover:-translate-y-0.5 hover:bg-steel-700"
          >
            <ArrowRight className="size-6 transition-transform group-hover:translate-x-1" />
            <div>
              <h3 className="font-display text-lg font-bold">Todo el catálogo</h3>
              <p className="mt-1 text-xs text-steel-100">
                Buscá por nombre, marca o categoría
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* Destacados (escritorio: en móvil los muestra el carrusel) */}
      {featured.length > 0 && (
        <section className="hidden border-y border-concrete-200 bg-white lg:block">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
            <p className="tech-label text-steel-500">Seleccionados</p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight">
              Productos destacados
            </h2>
            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
              {featured.slice(0, 8).map((product) => (
                <ProductCard key={product.id} product={product} customer={customer} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Beneficios (solo escritorio: en móvil la home es la tienda) */}
      <section className="hidden border-b border-concrete-200 bg-white lg:block">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-10 sm:grid-cols-3 sm:px-6">
          <div className="flex items-start gap-4">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-steel-50 text-steel-600">
              <Truck className="size-5" />
            </div>
            <div>
              <h3 className="font-semibold">Envíos y retiro en local</h3>
              <p className="mt-1 text-sm text-concrete-600">
                Retirá en Chacabuco 6311 o recibí tu pedido. Materiales
                voluminosos con flete cotizado a medida.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-steel-50 text-steel-600">
              <ShieldCheck className="size-5" />
            </div>
            <div>
              <h3 className="font-semibold">Marcas líderes</h3>
              <p className="mt-1 text-sm text-concrete-600">
                Socios de TEL hace 25 años. Trabajamos con DeWalt, Milwaukee,
                Stanley, Total, Ingco, Fischer y más primeras marcas.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-steel-50 text-steel-600">
              <MessageCircle className="size-5" />
            </div>
            <div>
              <h3 className="font-semibold">Asesoramiento experto</h3>
              <p className="mt-1 text-sm text-concrete-600">
                ¿Dudas con cantidades o sistemas? Te ayudamos a calcular tu
                obra por WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sistemas constructivos (solo escritorio) */}
      <section className="mx-auto hidden max-w-7xl px-4 py-16 sm:px-6 lg:block">
        <p className="tech-label text-steel-500">Aprendé con nosotros</p>
        <h2 className="mt-2 max-w-xl font-display text-3xl font-bold tracking-tight">
          Sistemas constructivos en seco, explicados de verdad
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Link
            href="/sistemas/steel-frame"
            className="blueprint-grid group relative overflow-hidden rounded-2xl bg-steel-900 p-8 text-white transition-transform hover:-translate-y-0.5"
          >
            <Building2 className="size-10 text-lime-400" />
            <h3 className="mt-6 font-display text-2xl font-bold">Steel Frame</h3>
            <p className="mt-3 max-w-md text-sm leading-6 text-steel-100">
              Estructura de perfiles de acero galvanizado: rapidez, precisión y
              eficiencia energética. Descubrí cómo funciona el sistema, capa
              por capa, y qué materiales necesitás.
            </p>
            <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-lime-400">
              Conocer el sistema{" "}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
          <Link
            href="/sistemas/wood-frame"
            className="blueprint-grid group relative overflow-hidden rounded-2xl bg-lime-900 p-8 text-white transition-transform hover:-translate-y-0.5"
          >
            <Store className="size-10 text-lime-300" />
            <h3 className="mt-6 font-display text-2xl font-bold">Wood Frame</h3>
            <p className="mt-3 max-w-md text-sm leading-6 text-lime-50/90">
              Entramado de madera estructural: calidez, sustentabilidad y una
              tradición constructiva probada en todo el mundo. Mirá cómo se
              arma y con qué materiales.
            </p>
            <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-lime-300">
              Conocer el sistema{" "}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </div>
      </section>

      {/* CTA WhatsApp (solo escritorio) */}
      <section className="mx-auto hidden max-w-7xl px-4 pb-20 sm:px-6 lg:block">
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-lime-500 p-8 sm:flex-row sm:items-center lg:p-12">
          <div>
            <h2 className="font-display text-2xl font-bold text-steel-950 lg:text-3xl">
              ¿Estás calculando una obra?
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-6 text-lime-950/80">
              Pasanos el plano o la lista de materiales y te armamos el
              presupuesto completo, con flete incluido.
            </p>
          </div>
          <a
            href={whatsappLink(
              "¡Hola Tresbe! Estoy calculando una obra y necesito un presupuesto."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 shrink-0 items-center gap-2 rounded-full bg-steel-950 px-7 text-sm font-semibold text-white transition-colors hover:bg-steel-800"
          >
            <MessageCircle className="size-4" /> Pedir presupuesto
          </a>
        </div>
      </section>
    </>
  );
}
