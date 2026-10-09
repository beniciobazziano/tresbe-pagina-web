import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Paginador simple: mantiene los filtros actuales (categoría, marca,
 * búsqueda) y solo cambia el número de página en la URL.
 */
export function Pager({
  page,
  totalPages,
  basePath,
  params,
}: {
  page: number;
  totalPages: number;
  basePath: string;
  params: Record<string, string | undefined>;
}) {
  if (totalPages <= 1) return null;

  const hrefFor = (p: number) => {
    const search = new URLSearchParams();
    for (const [key, value] of Object.entries(params)) {
      if (value) search.set(key, value);
    }
    if (p > 1) search.set("page", String(p));
    const qs = search.toString();
    return qs ? `${basePath}?${qs}` : basePath;
  };

  // Ventana de páginas visibles alrededor de la actual
  const windowStart = Math.max(1, page - 2);
  const windowEnd = Math.min(totalPages, windowStart + 4);
  const pages = Array.from(
    { length: windowEnd - windowStart + 1 },
    (_, i) => windowStart + i
  );

  const btnClass = (active: boolean) =>
    `flex h-10 min-w-10 items-center justify-center rounded-full border px-3 text-sm font-medium transition-colors ${
      active
        ? "border-steel-600 bg-steel-600 text-white"
        : "border-concrete-300 bg-white text-concrete-700 hover:border-steel-400"
    }`;

  return (
    <nav
      aria-label="Paginación de productos"
      className="mt-10 flex flex-wrap items-center justify-center gap-2"
    >
      <Link
        href={hrefFor(Math.max(1, page - 1))}
        aria-disabled={page === 1}
        className={`${btnClass(false)} ${page === 1 ? "pointer-events-none opacity-40" : ""}`}
      >
        <ChevronLeft className="size-4" />
      </Link>

      {windowStart > 1 && (
        <>
          <Link href={hrefFor(1)} className={btnClass(false)}>
            1
          </Link>
          {windowStart > 2 && <span className="px-1 text-concrete-400">…</span>}
        </>
      )}

      {pages.map((p) => (
        <Link key={p} href={hrefFor(p)} className={btnClass(p === page)}>
          {p}
        </Link>
      ))}

      {windowEnd < totalPages && (
        <>
          {windowEnd < totalPages - 1 && (
            <span className="px-1 text-concrete-400">…</span>
          )}
          <Link href={hrefFor(totalPages)} className={btnClass(false)}>
            {totalPages}
          </Link>
        </>
      )}

      <Link
        href={hrefFor(Math.min(totalPages, page + 1))}
        aria-disabled={page === totalPages}
        className={`${btnClass(false)} ${page === totalPages ? "pointer-events-none opacity-40" : ""}`}
      >
        <ChevronRight className="size-4" />
      </Link>
    </nav>
  );
}
