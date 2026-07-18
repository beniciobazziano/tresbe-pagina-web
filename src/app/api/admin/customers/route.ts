import { NextResponse } from "next/server";
import { isAdminRequest } from "@/lib/admin-auth";
import {
  adminDeleteCustomer,
  adminListCustomers,
  adminUpsertCustomer,
} from "@/lib/admindb";

export async function GET() {
  if (!(await isAdminRequest())) {
    return NextResponse.json({ error: "No autorizado." }, { status: 401 });
  }
  try {
    return NextResponse.json({ customers: await adminListCustomers() });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Error de datos." },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  if (!(await isAdminRequest())) {
    return NextResponse.json({ error: "No autorizado." }, { status: 401 });
  }
  try {
    const draft = await request.json();
    if (!draft.username?.trim() || !draft.name?.trim()) {
      return NextResponse.json(
        { error: "Completá al menos usuario y nombre." },
        { status: 400 }
      );
    }
    await adminUpsertCustomer({
      id: draft.id ?? null,
      username: draft.username,
      password: draft.password || null,
      name: draft.name,
      discount_pct: Math.min(90, Math.max(0, Number(draft.discount_pct) || 0)),
      notes: draft.notes?.trim() || null,
      active: draft.active !== false,
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "No se pudo guardar." },
      { status: 400 }
    );
  }
}

export async function DELETE(request: Request) {
  if (!(await isAdminRequest())) {
    return NextResponse.json({ error: "No autorizado." }, { status: 401 });
  }
  const id = new URL(request.url).searchParams.get("id");
  if (!id) return NextResponse.json({ error: "Falta el id." }, { status: 400 });
  try {
    await adminDeleteCustomer(id);
    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "No se pudo eliminar." },
      { status: 400 }
    );
  }
}
