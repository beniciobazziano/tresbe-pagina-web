"use client";

import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";

export function AdminLogoutButton() {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={async () => {
        await fetch("/api/admin/logout", { method: "POST" });
        router.push("/admin/login");
        router.refresh();
      }}
      className="flex h-10 items-center gap-2 rounded-full px-4 text-sm font-medium text-red-700 hover:bg-red-50"
    >
      <LogOut className="size-4" /> Salir
    </button>
  );
}
