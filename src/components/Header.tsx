"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  Menu,
  ShoppingCart,
  Truck,
  TrendingUp,
  UserRound,
  X,
} from "lucide-react";
import { useCart } from "./cart/CartProvider";
import { useCustomer } from "./customer/CustomerProvider";

const nav = [
  { href: "/productos", label: "Productos" },
  { href: "/sistemas/steel-frame", label: "Steel Frame" },
  { href: "/sistemas/wood-frame", label: "Wood Frame" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export function Header() {
  const pathname = usePathname();
  const { count, ready } = useCart();
  const { customer, ready: customerReady } = useCustomer();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-concrete-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
          <Image
            src="/brand/tbdist-logo.png"
            alt="Tresbe Distribuidora"
            width={132}
            height={56}
            priority
            className="h-11 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => {
            const active = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "bg-steel-50 text-steel-700"
                    : "text-concrete-700 hover:bg-concrete-100 hover:text-concrete-950"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          {/* Solo para cuentas de reventa */}
          {customer?.customer_type === "distribuidora" && (
            <Link
              href="/distribuidora"
              className={`flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-semibold transition-colors ${
                pathname.startsWith("/distribuidora")
                  ? "bg-steel-950 text-white"
                  : "bg-steel-100 text-steel-800 hover:bg-steel-200"
              }`}
            >
              <Truck className="size-4" /> Productos distribuidora
            </Link>
          )}
          {/* Solo para clientes con cuenta */}
          {customer && (
            <Link
              href="/cliente/rentabilidades"
              className={`flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-semibold transition-colors ${
                pathname.startsWith("/cliente/rentabilidades")
                  ? "bg-lime-100 text-lime-800"
                  : "text-lime-700 hover:bg-lime-50"
              }`}
            >
              <TrendingUp className="size-4" /> Rentabilidades
            </Link>
          )}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={customer ? "/cliente" : "/cliente/login"}
            className={`hidden h-10 items-center gap-2 rounded-full border px-4 text-sm font-semibold transition-colors sm:flex ${
              customer
                ? "border-lime-500 bg-lime-50 text-lime-800 hover:bg-lime-100"
                : "border-steel-300 text-steel-700 hover:bg-steel-50"
            }`}
          >
            <UserRound className="size-4" />
            {customerReady && customer ? (
              <span className="max-w-36 truncate">{customer.name}</span>
            ) : (
              "Ingresar"
            )}
          </Link>
          <Link
            href="/carrito"
            aria-label="Ver carrito"
            className="relative flex size-10 items-center justify-center rounded-full text-concrete-700 transition-colors hover:bg-concrete-100"
          >
            <ShoppingCart className="size-5" />
            {ready && count > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex size-5 items-center justify-center rounded-full bg-lime-500 text-[11px] font-bold text-white">
                {count > 99 ? "99+" : count}
              </span>
            )}
          </Link>
          <button
            type="button"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((v) => !v)}
            className="flex size-10 items-center justify-center rounded-full text-concrete-700 hover:bg-concrete-100 lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-concrete-200 bg-white px-4 py-3 lg:hidden">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-2.5 text-sm font-medium text-concrete-800 hover:bg-concrete-100"
            >
              {item.label}
            </Link>
          ))}
          {customer?.customer_type === "distribuidora" && (
            <Link
              href="/distribuidora"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 rounded-md px-3 py-2.5 text-sm font-semibold text-steel-800 hover:bg-steel-50"
            >
              <Truck className="size-4" /> Productos distribuidora
            </Link>
          )}
          {customer && (
            <Link
              href="/cliente/rentabilidades"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 rounded-md px-3 py-2.5 text-sm font-semibold text-lime-700 hover:bg-lime-50"
            >
              <TrendingUp className="size-4" /> Rentabilidades
            </Link>
          )}
          <Link
            href={customer ? "/cliente" : "/cliente/login"}
            onClick={() => setOpen(false)}
            className="mt-1 flex items-center gap-2 rounded-md border-t border-concrete-100 px-3 py-2.5 text-sm font-semibold text-steel-700 hover:bg-steel-50"
          >
            <UserRound className="size-4" />
            {customer ? customer.name : "Ingresar / Registrarme"}
          </Link>
        </nav>
      )}
    </header>
  );
}
