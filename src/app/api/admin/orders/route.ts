import { NextResponse } from "next/server";
import { isAdminRequest } from "@/lib/admin-auth";
import { adminListOrders, adminUpdateOrderStatus } from "@/lib/admindb";
import type { OrderStatus } from "@/lib/types";

const VALID_STATUS: OrderStatus[] = [
  "pendiente",
  "pagado",
  "a_cotizar",
  "preparando",
  "enviado",
  "entregado",
  "cancelado",
];

export async function GET() {
  if (!(await isAdminRequest())) {
    return NextResponse.json({ error: "No autorizado." }, { status: 401 });
  }
  try {
    return NextResponse.json({ orders: await adminListOrders() });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Error de datos." },
      { status: 500 }
    );
  }
}

export async function PATCH(request: Request) {
  if (!(await isAdminRequest())) {
    return NextResponse.json({ error: "No autorizado." }, { status: 401 });
  }
  try {
    const { id, status } = await request.json();
    if (!id || !VALID_STATUS.includes(status)) {
      return NextResponse.json({ error: "Datos inválidos." }, { status: 400 });
    }
    await adminUpdateOrderStatus(id, status);
    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "No se pudo actualizar." },
      { status: 400 }
    );
  }
}
