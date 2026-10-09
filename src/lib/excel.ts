import "server-only";

import * as XLSX from "xlsx";
import { isDistributorProduct } from "./distributor";
import type { Category, Product, StockStatus } from "./types";

/**
 * Exportación e importación del catálogo en Excel.
 * El archivo exportado sirve de plantilla: se edita en Excel y se vuelve
 * a importar. La columna `codigo` identifica al producto; filas sin código
 * (o con código nuevo) crean productos.
 */

export const EXCEL_COLUMNS = [
  "codigo",
  "nombre",
  "marca",
  "categoria",
  "precio",
  "stock",
  "estado_stock",
  "unidad",
  "voluminoso",
  "distribuidora",
  "destacado",
  "visible",
  "peso_kg",
  "largo_cm",
  "ancho_cm",
  "alto_cm",
  "descripcion",
] as const;

const ESTADO_TO_EXCEL: Record<StockStatus, string> = {
  en_sucursal: "verde",
  en_argentina: "amarillo",
  sin_stock: "rojo",
};

export function buildCatalogWorkbook(
  products: Product[],
  categories: Category[]
): Buffer {
  const catBySlug = new Map(categories.map((c) => [c.slug, c.name]));

  const rows = products.map((p) => ({
    codigo: p.slug,
    nombre: p.name,
    marca: p.brand ?? "",
    categoria: catBySlug.get(p.category_slug) ?? p.category_slug,
    precio: p.price,
    stock: p.stock,
    estado_stock: ESTADO_TO_EXCEL[p.stock_status] ?? "verde",
    unidad: p.unit,
    voluminoso: p.bulky ? "si" : "no",
    distribuidora: isDistributorProduct(p) ? "si" : "no",
    destacado: p.featured ? "si" : "no",
    visible: p.active ? "si" : "no",
    peso_kg: p.weight_kg ?? "",
    largo_cm: p.length_cm ?? "",
    ancho_cm: p.width_cm ?? "",
    alto_cm: p.height_cm ?? "",
    descripcion: p.description,
  }));

  const sheet = XLSX.utils.json_to_sheet(rows, {
    header: [...EXCEL_COLUMNS],
  });
  sheet["!cols"] = [
    { wch: 34 }, // codigo
    { wch: 48 }, // nombre
    { wch: 12 }, // marca
    { wch: 26 }, // categoria
    { wch: 10 }, // precio
    { wch: 7 }, // stock
    { wch: 12 }, // estado_stock
    { wch: 14 }, // unidad
    { wch: 10 }, // voluminoso
    { wch: 13 }, // distribuidora
    { wch: 9 }, // destacado
    { wch: 7 }, // visible
    { wch: 9 }, // peso_kg
    { wch: 9 }, // largo_cm
    { wch: 9 }, // ancho_cm
    { wch: 9 }, // alto_cm
    { wch: 60 }, // descripcion
  ];

  const help = XLSX.utils.aoa_to_sheet([
    ["CÓMO USAR ESTA PLANILLA"],
    [""],
    ["1. Editá lo que necesites en la hoja 'Catalogo' y guardá el archivo."],
    ["2. En el panel de administración → Productos → 'Importar Excel', subí este archivo."],
    [""],
    ["REGLAS"],
    ["• 'codigo' identifica al producto: NO lo cambies en productos existentes."],
    ["• Para AGREGAR un producto: fila nueva con 'codigo' vacío (o uno nuevo), 'nombre', 'categoria' y 'precio'."],
    ["• Celda vacía = ese dato no se toca. Ideal para planillas de solo precios (codigo + precio)."],
    ["• 'estado_stock': verde (en sucursal) / amarillo (en Argentina, a pedido) / rojo (sin stock)."],
    ["• 'voluminoso', 'distribuidora', 'destacado' y 'visible': si / no."],
    ["• 'distribuidora' = si → el producto aparece en la sección de reventa (clientes distribuidora)."],
    ["• 'precio' en pesos, sin puntos ni símbolo $. Precio 0 = muestra 'Consultar precio'."],
    ["• 'categoria': usá el nombre tal como aparece (por ej. 'Tornillos y Fijaciones')."],
    ["• 'peso_kg' y 'largo_cm/ancho_cm/alto_cm': de UNA unidad ya embalada. Con esos datos"],
    ["   la web cotiza el envío real con Andreani. Si están vacíos usa un estimado por rubro."],
    ["• Para BORRAR un producto usá el panel (el Excel nunca borra, solo agrega y actualiza)."],
  ]);
  help["!cols"] = [{ wch: 100 }];

  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, sheet, "Catalogo");
  XLSX.utils.book_append_sheet(wb, help, "Instrucciones");

  return XLSX.write(wb, { type: "buffer", bookType: "xlsx" }) as Buffer;
}

/**
 * Plantilla vacía para cargar productos nuevos en lote: encabezados,
 * dos filas de ejemplo y hojas de referencia con las categorías y marcas
 * válidas para copiar/pegar.
 */
export function buildTemplateWorkbook(categories: Category[], brands: readonly string[]): Buffer {
  const ejemplo = [
    {
      codigo: "",
      nombre: "EJEMPLO Amoladora angular DeWalt 115 mm 850 W (borrá esta fila)",
      marca: "DeWalt",
      categoria: "Herramientas Eléctricas",
      precio: 185000,
      stock: 10,
      estado_stock: "verde",
      unidad: "unidad",
      voluminoso: "no",
      distribuidora: "no",
      destacado: "no",
      visible: "si",
      peso_kg: 2.6,
      largo_cm: 38,
      ancho_cm: 12,
      alto_cm: 15,
      descripcion: "Amoladora angular compacta con arranque suave.",
    },
    {
      codigo: "",
      nombre: "EJEMPLO Tarugo Fischer SX10 (caja ×50) (borrá esta fila)",
      marca: "Fischer",
      categoria: "Tornillos y Fijaciones",
      precio: 0,
      stock: 0,
      estado_stock: "amarillo",
      unidad: "caja ×50",
      voluminoso: "no",
      distribuidora: "no",
      destacado: "no",
      visible: "si",
      peso_kg: 0.9,
      largo_cm: 14,
      ancho_cm: 9,
      alto_cm: 6,
      descripcion: "Precio 0 = la tienda muestra 'Consultar precio'.",
    },
  ];

  const sheet = XLSX.utils.json_to_sheet(ejemplo, { header: [...EXCEL_COLUMNS] });
  sheet["!cols"] = [
    { wch: 20 },
    { wch: 55 },
    { wch: 12 },
    { wch: 26 },
    { wch: 10 },
    { wch: 7 },
    { wch: 12 },
    { wch: 14 },
    { wch: 10 },
    { wch: 13 },
    { wch: 9 },
    { wch: 7 },
    { wch: 9 },
    { wch: 9 },
    { wch: 9 },
    { wch: 9 },
    { wch: 60 },
  ];

  const help = XLSX.utils.aoa_to_sheet([
    ["PLANTILLA PARA CARGAR PRODUCTOS NUEVOS EN LOTE"],
    [""],
    ["1. Completá una fila por producto (las dos filas de EJEMPLO se borran)."],
    ["2. Obligatorios: nombre, categoria y precio (0 = 'Consultar precio')."],
    ["3. 'codigo' dejalo VACÍO: se genera solo a partir del nombre."],
    ["4. 'categoria' y 'marca': copialas de la hoja 'Referencias' (tal cual están escritas)."],
    ["5. 'estado_stock': verde (en sucursal) / amarillo (en Argentina, a pedido) / rojo (sin stock)."],
    ["6. 'voluminoso' (flete a cotizar), 'destacado' (aparece en la home) y 'visible': si / no."],
    ["7. Guardá el archivo y subilo desde el panel: Productos → 'Importar Excel'."],
    ["8. Las fotos se cargan después desde el panel, editando cada producto."],
  ]);
  help["!cols"] = [{ wch: 95 }];

  const refs = XLSX.utils.aoa_to_sheet([
    ["CATEGORÍAS VÁLIDAS", "", "MARCAS OFICIALES", "", "ESTADO_STOCK"],
    ...Array.from(
      { length: Math.max(categories.length, brands.length, 3) },
      (_, i) => [
        categories[i]?.name ?? "",
        "",
        brands[i] ?? "",
        "",
        ["verde", "amarillo", "rojo"][i] ?? "",
      ]
    ),
  ]);
  refs["!cols"] = [{ wch: 28 }, { wch: 3 }, { wch: 16 }, { wch: 3 }, { wch: 14 }];

  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, sheet, "Catalogo");
  XLSX.utils.book_append_sheet(wb, help, "Instrucciones");
  XLSX.utils.book_append_sheet(wb, refs, "Referencias");

  return XLSX.write(wb, { type: "buffer", bookType: "xlsx" }) as Buffer;
}

// ── Importación ───────────────────────────────────────────────────────

export interface ImportRow {
  rowNumber: number;
  codigo: string | null;
  nombre: string | null;
  marca: string | null;
  categoria: string | null;
  precio: number | null;
  stock: number | null;
  estado_stock: StockStatus | null;
  unidad: string | null;
  voluminoso: boolean | null;
  distribuidora: boolean | null;
  destacado: boolean | null;
  visible: boolean | null;
  peso_kg: number | null;
  largo_cm: number | null;
  ancho_cm: number | null;
  alto_cm: number | null;
  descripcion: string | null;
  errors: string[];
}

const normalize = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .trim();

const HEADER_ALIASES: Record<string, string> = {
  codigo: "codigo",
  sku: "codigo",
  slug: "codigo",
  nombre: "nombre",
  producto: "nombre",
  marca: "marca",
  categoria: "categoria",
  rubro: "categoria",
  precio: "precio",
  "precio ars": "precio",
  "precio ($)": "precio",
  stock: "stock",
  cantidad: "stock",
  "estado stock": "estado_stock",
  estado_stock: "estado_stock",
  estado: "estado_stock",
  semaforo: "estado_stock",
  unidad: "unidad",
  presentacion: "unidad",
  voluminoso: "voluminoso",
  flete: "voluminoso",
  distribuidora: "distribuidora",
  distribuidor: "distribuidora",
  reventa: "distribuidora",
  destacado: "destacado",
  visible: "visible",
  activo: "visible",
  publicado: "visible",
  peso_kg: "peso_kg",
  peso: "peso_kg",
  "peso kg": "peso_kg",
  kilos: "peso_kg",
  largo_cm: "largo_cm",
  largo: "largo_cm",
  "largo cm": "largo_cm",
  ancho_cm: "ancho_cm",
  ancho: "ancho_cm",
  "ancho cm": "ancho_cm",
  alto_cm: "alto_cm",
  alto: "alto_cm",
  "alto cm": "alto_cm",
  descripcion: "descripcion",
  detalle: "descripcion",
};

function parseBool(value: unknown): boolean | null {
  if (value == null || value === "") return null;
  const v = normalize(String(value));
  if (["si", "s", "x", "1", "true", "verdadero"].includes(v)) return true;
  if (["no", "n", "0", "false", "falso"].includes(v)) return false;
  return null;
}

function parseNumber(value: unknown): number | null {
  if (value == null || value === "") return null;
  if (typeof value === "number") return Number.isFinite(value) ? value : null;
  let s = String(value).replace(/[$\s]/g, "");
  if (s.includes(",")) s = s.replace(/\./g, "").replace(",", ".");
  const n = Number(s);
  return Number.isFinite(n) ? n : null;
}

function parseEstado(value: unknown): StockStatus | null {
  if (value == null || value === "") return null;
  const v = normalize(String(value)).replace(/[_-]/g, " ");
  if (["verde", "en sucursal", "sucursal", "en stock", "stock"].includes(v))
    return "en_sucursal";
  if (
    ["amarillo", "en argentina", "argentina", "a pedido", "pedido"].includes(v)
  )
    return "en_argentina";
  if (["rojo", "sin stock", "sin", "agotado"].includes(v)) return "sin_stock";
  return null;
}

export function parseCatalogSheet(buffer: Buffer): {
  rows: ImportRow[];
  sheetError: string | null;
} {
  let wb: XLSX.WorkBook;
  try {
    wb = XLSX.read(buffer, { type: "buffer" });
  } catch {
    return { rows: [], sheetError: "No se pudo leer el archivo. ¿Es un Excel o CSV válido?" };
  }

  // Usa la hoja "Catalogo" si existe; si no, la primera
  const sheetName =
    wb.SheetNames.find((n) => normalize(n) === "catalogo") ?? wb.SheetNames[0];
  if (!sheetName) return { rows: [], sheetError: "El archivo no tiene hojas." };

  const raw = XLSX.utils.sheet_to_json<Record<string, unknown>>(
    wb.Sheets[sheetName],
    { defval: null, raw: true }
  );
  if (raw.length === 0) {
    return { rows: [], sheetError: "La hoja está vacía (no hay filas debajo del encabezado)." };
  }

  const rows: ImportRow[] = [];
  raw.forEach((rec, i) => {
    // Mapea encabezados tolerando mayúsculas y acentos
    const mapped: Record<string, unknown> = {};
    for (const [key, value] of Object.entries(rec)) {
      const canonical = HEADER_ALIASES[normalize(key)];
      if (canonical && !(canonical in mapped)) mapped[canonical] = value;
    }

    const text = (v: unknown) => {
      if (v == null) return null;
      const s = String(v).trim();
      return s === "" ? null : s;
    };

    const row: ImportRow = {
      rowNumber: i + 2, // 1 = encabezado
      codigo: text(mapped.codigo),
      nombre: text(mapped.nombre),
      marca: text(mapped.marca),
      categoria: text(mapped.categoria),
      precio: parseNumber(mapped.precio),
      stock: parseNumber(mapped.stock),
      estado_stock: parseEstado(mapped.estado_stock),
      unidad: text(mapped.unidad),
      voluminoso: parseBool(mapped.voluminoso),
      distribuidora: parseBool(mapped.distribuidora),
      destacado: parseBool(mapped.destacado),
      visible: parseBool(mapped.visible),
      peso_kg: parseNumber(mapped.peso_kg),
      largo_cm: parseNumber(mapped.largo_cm),
      ancho_cm: parseNumber(mapped.ancho_cm),
      alto_cm: parseNumber(mapped.alto_cm),
      descripcion: text(mapped.descripcion),
      errors: [],
    };

    if (mapped.estado_stock != null && mapped.estado_stock !== "" && !row.estado_stock) {
      row.errors.push(
        `estado_stock "${mapped.estado_stock}" no reconocido (usar verde/amarillo/rojo)`
      );
    }
    if (row.precio != null && row.precio < 0) row.errors.push("precio negativo");
    if (row.stock != null && row.stock < 0) row.errors.push("stock negativo");
    for (const [campo, valor] of [
      ["peso_kg", row.peso_kg],
      ["largo_cm", row.largo_cm],
      ["ancho_cm", row.ancho_cm],
      ["alto_cm", row.alto_cm],
    ] as const) {
      if (valor != null && valor <= 0) row.errors.push(`${campo} tiene que ser mayor a 0`);
    }

    // Filas totalmente vacías se ignoran
    const hasData = Object.values({ ...row, rowNumber: null, errors: null }).some(
      (v) => v != null
    );
    if (hasData) rows.push(row);
  });

  return { rows, sheetError: null };
}
