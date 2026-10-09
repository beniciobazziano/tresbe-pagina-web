"use client";

import { usePathname, useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

/**
 * Botón "Volver" presente en todas las pantallas menos la home.
 * Usa el historial del navegador; si se entró directo por link o QR,
 * cae a la pantalla padre según la dirección.
 */
export function BackButton() {
  const pathname = usePathname();
  const router = useRouter();

  if (pathname === "/") return null;

  // Pantalla padre para cuando no hay historial (entrada directa)
  const parent = (() => {
    const parts = pathname.split("/").filter(Boolean);
    if (parts.length <= 1) return "/";
    return `/${parts.slice(0, -1).join("/")}`;
  })();

  function goBack() {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
      return;
    }
    router.push(parent);
  }

  return (
    <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6">
      <button
        type="button"
        onClick={goBack}
        className="flex h-9 items-center gap-1.5 rounded-full border border-concrete-300 bg-white px-3.5 text-sm font-medium text-concrete-700 transition-colors hover:border-steel-400 hover:text-steel-700"
      >
        <ArrowLeft className="size-4" />
        Volver
      </button>
    </div>
  );
}
