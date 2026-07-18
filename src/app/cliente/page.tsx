"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import {
  ArrowRight,
  BadgePercent,
  LogOut,
  MessageCircle,
  StickyNote,
  UserRound,
} from "lucide-react";
import { useCustomer } from "@/components/customer/CustomerProvider";
import { whatsappLink } from "@/lib/site";

export default function ClientePage() {
  const router = useRouter();
  const { customer, ready, logout } = useCustomer();

  useEffect(() => {
    if (ready && !customer) router.replace("/cliente/login");
  }, [ready, customer, router]);

  if (!ready || !customer) return <div className="min-h-[50vh]" />;

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="flex size-12 items-center justify-center rounded-full bg-lime-100 text-lime-700">
            <UserRound className="size-6" />
          </div>
          <div>
            <p className="tech-label text-steel-500">Tu cuenta</p>
            <h1 className="font-display text-2xl font-bold">{customer.name}</h1>
          </div>
        </div>
        <button
          type="button"
          onClick={async () => {
            await logout();
            router.push("/");
          }}
          className="flex h-10 items-center gap-2 rounded-full px-4 text-sm font-medium text-red-700 hover:bg-red-50"
        >
          <LogOut className="size-4" /> Cerrar sesión
        </button>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <div className="rounded-2xl border border-lime-200 bg-lime-50 p-6">
          <div className="flex items-center gap-3">
            <BadgePercent className="size-6 text-lime-700" />
            <h2 className="font-display text-lg font-bold text-lime-950">
              Tu descuento
            </h2>
          </div>
          {customer.discount_pct > 0 ? (
            <>
              <p className="mt-4 font-display text-5xl font-bold text-lime-700">
                {customer.discount_pct}%
              </p>
              <p className="mt-2 text-sm leading-6 text-lime-900/80">
                Se aplica automáticamente sobre todos los productos al momento
                de finalizar la compra.
              </p>
            </>
          ) : (
            <p className="mt-4 text-sm leading-6 text-lime-900/80">
              Tu cuenta todavía no tiene un descuento asignado. Consultanos por
              WhatsApp.
            </p>
          )}
        </div>

        <div className="rounded-2xl border border-concrete-200 bg-white p-6">
          <div className="flex items-center gap-3">
            <StickyNote className="size-6 text-steel-600" />
            <h2 className="font-display text-lg font-bold">Notas de tu cuenta</h2>
          </div>
          <p className="mt-4 whitespace-pre-line text-sm leading-6 text-concrete-700">
            {customer.notes?.trim() ||
              "Sin notas por ahora. Acá vas a ver tus condiciones de cuenta, días de retiro y acuerdos especiales."}
          </p>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/productos"
          className="flex h-12 items-center gap-2 rounded-full bg-steel-600 px-6 text-sm font-semibold text-white hover:bg-steel-700"
        >
          Ir a comprar con mi descuento <ArrowRight className="size-4" />
        </Link>
        <a
          href={whatsappLink(
            `¡Hola Tresbe! Soy ${customer.name} (cliente registrado) y quiero hacer una consulta.`
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 items-center gap-2 rounded-full border border-concrete-300 px-6 text-sm font-semibold text-concrete-800 hover:border-steel-400"
        >
          <MessageCircle className="size-4" /> Hablar con Tresbe
        </a>
      </div>
    </div>
  );
}
