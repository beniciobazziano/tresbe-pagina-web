import Link from "next/link";
import { redirect } from "next/navigation";
import { ClipboardList, Package, Plug, UsersRound } from "lucide-react";
import { isAdminRequest } from "@/lib/admin-auth";
import { isSupabaseConfigured } from "@/lib/supabase/config";
import { AdminLogoutButton } from "@/components/admin/AdminLogoutButton";

export default async function AdminPanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (!(await isAdminRequest())) {
    redirect("/admin/login");
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-concrete-200 pb-5">
        <div>
          <p className="tech-label text-steel-500">Tresbe</p>
          <h1 className="font-display text-2xl font-bold">Administración</h1>
        </div>
        <nav className="flex flex-wrap items-center gap-2">
          <Link
            href="/admin"
            className="flex h-10 items-center gap-2 rounded-full px-4 text-sm font-medium text-concrete-700 hover:bg-concrete-100"
          >
            <ClipboardList className="size-4" /> Pedidos
          </Link>
          <Link
            href="/admin/productos"
            className="flex h-10 items-center gap-2 rounded-full px-4 text-sm font-medium text-concrete-700 hover:bg-concrete-100"
          >
            <Package className="size-4" /> Productos
          </Link>
          <Link
            href="/admin/clientes"
            className="flex h-10 items-center gap-2 rounded-full px-4 text-sm font-medium text-concrete-700 hover:bg-concrete-100"
          >
            <UsersRound className="size-4" /> Clientes
          </Link>
          <Link
            href="/admin/configuracion"
            className="flex h-10 items-center gap-2 rounded-full px-4 text-sm font-medium text-concrete-700 hover:bg-concrete-100"
          >
            <Plug className="size-4" /> Bynet
          </Link>
          <AdminLogoutButton />
        </nav>
      </div>
      {!isSupabaseConfigured && (
        <p className="mt-4 rounded-lg bg-steel-50 px-4 py-3 text-xs leading-5 text-steel-700">
          <strong>Modo local:</strong> los cambios se guardan en este equipo
          (carpeta <span className="font-mono">data/</span>). Cuando conectes
          Supabase, el panel pasa automáticamente a la base de datos online.
        </p>
      )}
      <div className="py-8">{children}</div>
    </div>
  );
}
