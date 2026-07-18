"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, ShoppingCart, Store, UserRound } from "lucide-react";
import { useCart } from "./cart/CartProvider";
import { useCustomer } from "./customer/CustomerProvider";

/**
 * Barra de navegación inferior para celulares, estilo app de compras:
 * el foco del sitio móvil es vender, así que la tienda y el carrito
 * están siempre a un toque de distancia.
 */
export function MobileTabBar() {
  const pathname = usePathname();
  const { count, ready } = useCart();
  const { customer } = useCustomer();

  // En el panel de administración no aporta y roba espacio
  if (pathname.startsWith("/admin")) return null;

  const tabs = [
    { href: "/", label: "Inicio", icon: Home, active: pathname === "/" },
    {
      href: "/productos",
      label: "Tienda",
      icon: Store,
      active: pathname.startsWith("/productos"),
    },
    {
      href: "/carrito",
      label: "Carrito",
      icon: ShoppingCart,
      active: pathname.startsWith("/carrito") || pathname.startsWith("/checkout"),
      badge: ready && count > 0 ? count : null,
    },
    {
      href: customer ? "/cliente" : "/cliente/login",
      label: customer ? "Mi cuenta" : "Cliente",
      icon: UserRound,
      active: pathname.startsWith("/cliente"),
    },
  ];

  return (
    <nav
      aria-label="Navegación principal"
      className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-4 border-t border-concrete-200 bg-white/95 pb-[env(safe-area-inset-bottom)] backdrop-blur lg:hidden"
    >
      {tabs.map((tab) => (
        <Link
          key={tab.label}
          href={tab.href}
          className={`relative flex flex-col items-center gap-0.5 py-2 text-[11px] font-medium transition-colors ${
            tab.active ? "text-steel-700" : "text-concrete-500"
          }`}
        >
          <span className="relative">
            <tab.icon
              className={`size-5 ${tab.active ? "stroke-[2.25]" : ""}`}
            />
            {tab.badge != null && (
              <span className="absolute -right-2.5 -top-1.5 flex size-4.5 min-w-4.5 items-center justify-center rounded-full bg-lime-500 px-1 text-[10px] font-bold text-white">
                {tab.badge > 99 ? "99+" : tab.badge}
              </span>
            )}
          </span>
          {tab.label}
          {tab.active && (
            <span className="absolute inset-x-1/4 top-0 h-0.5 rounded-full bg-steel-600" />
          )}
        </Link>
      ))}
    </nav>
  );
}
