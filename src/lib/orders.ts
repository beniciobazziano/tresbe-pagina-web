import "server-only";

import { randomUUID } from "crypto";
import { localAddOrder, localUpdateOrderStatus } from "./localdb";
import { isSupabaseConfigured } from "./supabase/config";
import { createSupabaseServerClient } from "./supabase/server";
import type { Order } from "./types";

/**
 * Persistencia de pedidos. Con Supabase configurado se guardan en la tabla
 * `orders`; sin configurar, en el almacén local (data/orders.json), así el
 * panel de administración los muestra igual.
 */
export async function saveOrder(
  order: Omit<Order, "id" | "created_at">
): Promise<{ id: string; persisted: boolean }> {
  const id = randomUUID();

  if (!isSupabaseConfigured) {
    await localAddOrder({ ...order, id, created_at: new Date().toISOString() });
    return { id, persisted: true };
  }

  const supabase = await createSupabaseServerClient();
  const { error } = await supabase.from("orders").insert({ id, ...order });
  if (error) {
    console.error("No se pudo guardar el pedido:", error.message);
    return { id, persisted: false };
  }
  return { id, persisted: true };
}

export async function updateOrderStatus(id: string, status: Order["status"]) {
  if (!isSupabaseConfigured) {
    await localUpdateOrderStatus(id, status);
    return;
  }
  const supabase = await createSupabaseServerClient();
  await supabase.from("orders").update({ status }).eq("id", id);
}
