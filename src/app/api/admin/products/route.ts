import { NextResponse } from "next/server";
import { isAdminRequest } from "@/lib/admin-auth";
import {
  adminDeleteProduct,
  adminImportSeed,
  adminListCategories,
  adminListProducts,
  adminUpsertProduct,
} from "@/lib/admindb";

async function guard() {
  if (!(await isAdminRequest())) {
    return NextResponse.json({ error: "No autorizado." }, { status: 401 });
  }
  return null;
}

export async function GET() {
  const denied = await guard();
  if (denied) return denied;
  try {
    const [products, categories] = await Promise.all([
      adminListProducts(),
      adminListCategories(),
    ]);
    return NextResponse.json({ products, categories });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Error de datos." },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  const denied = await guard();
  if (denied) return denied;
  try {
    const body = await request.json();
    if (body.action === "import-seed") {
      await adminImportSeed();
      return NextResponse.json({ ok: true });
    }
    await adminUpsertProduct(body.product);
    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "No se pudo guardar." },
      { status: 400 }
    );
  }
}

export async function DELETE(request: Request) {
  const denied = await guard();
  if (denied) return denied;
  const id = new URL(request.url).searchParams.get("id");
  if (!id) return NextResponse.json({ error: "Falta el id." }, { status: 400 });
  try {
    await adminDeleteProduct(id);
    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "No se pudo eliminar." },
      { status: 400 }
    );
  }
}
