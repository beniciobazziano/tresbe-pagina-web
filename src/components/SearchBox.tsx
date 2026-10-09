"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Search, X } from "lucide-react";

export function SearchBox({
  initialQuery,
  categoria,
  marca,
  basePath = "/productos",
}: {
  initialQuery: string;
  categoria?: string;
  marca?: string;
  /** Permite reutilizar el buscador en la sección de distribuidora */
  basePath?: string;
}) {
  const router = useRouter();
  const [value, setValue] = useState(initialQuery);

  function submit(query: string) {
    const params = new URLSearchParams();
    if (categoria) params.set("categoria", categoria);
    if (marca) params.set("marca", marca);
    if (query.trim()) params.set("q", query.trim());
    router.push(`${basePath}${params.size ? `?${params}` : ""}`);
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        submit(value);
      }}
      className="relative max-w-xl"
    >
      <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-concrete-400" />
      <input
        type="search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Buscar por nombre o marca… ej: autoperforante TEL"
        className="h-12 w-full rounded-full border border-concrete-300 bg-white pl-11 pr-24 text-sm outline-none transition-colors placeholder:text-concrete-400 focus:border-steel-500 focus:ring-2 focus:ring-steel-200"
      />
      {value && (
        <button
          type="button"
          aria-label="Limpiar búsqueda"
          onClick={() => {
            setValue("");
            submit("");
          }}
          className="absolute right-16 top-1/2 flex size-8 -translate-y-1/2 items-center justify-center rounded-full text-concrete-400 hover:bg-concrete-100"
        >
          <X className="size-4" />
        </button>
      )}
      <button
        type="submit"
        className="absolute right-1.5 top-1/2 flex h-9 -translate-y-1/2 items-center rounded-full bg-steel-600 px-4 text-sm font-semibold text-white hover:bg-steel-700"
      >
        Buscar
      </button>
    </form>
  );
}
