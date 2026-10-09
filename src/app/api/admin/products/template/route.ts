import { NextResponse } from "next/server";
import { isAdminRequest } from "@/lib/admin-auth";
import { adminListCategories } from "@/lib/admindb";
import { BRANDS } from "@/lib/brands";
import { buildTemplateWorkbook } from "@/lib/excel";

export async function GET() {
  if (!(await isAdminRequest())) {
    return NextResponse.json({ error: "No autorizado." }, { status: 401 });
  }
  try {
    const categories = await adminListCategories();
    const buffer = buildTemplateWorkbook(categories, BRANDS);
    return new NextResponse(new Uint8Array(buffer), {
      headers: {
        "Content-Type":
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "Content-Disposition":
          'attachment; filename="tresbe-plantilla-productos.xlsx"',
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Error al generar." },
      { status: 500 }
    );
  }
}
