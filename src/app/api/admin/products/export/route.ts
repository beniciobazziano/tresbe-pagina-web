import { NextResponse } from "next/server";
import { isAdminRequest } from "@/lib/admin-auth";
import { adminListCategories, adminListProducts } from "@/lib/admindb";
import { buildCatalogWorkbook } from "@/lib/excel";

export async function GET() {
  if (!(await isAdminRequest())) {
    return NextResponse.json({ error: "No autorizado." }, { status: 401 });
  }
  try {
    const [products, categories] = await Promise.all([
      adminListProducts(),
      adminListCategories(),
    ]);
    const buffer = buildCatalogWorkbook(products, categories);
    const fecha = new Date().toISOString().slice(0, 10);
    return new NextResponse(new Uint8Array(buffer), {
      headers: {
        "Content-Type":
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "Content-Disposition": `attachment; filename="tresbe-catalogo-${fecha}.xlsx"`,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Error al exportar." },
      { status: 500 }
    );
  }
}
