import type { Category, Product } from "../types";
import { adhesilProducts } from "./adhesil-products";
import { dorkingProducts } from "./dorking-products";
import { fischerCuratedProducts } from "./fischer-curated-products";
import { ingcoProducts } from "./ingco-products";
import { iturriaProducts } from "./iturria-products";
import { milwaukeeProducts } from "./milwaukee-products";
import { rothoblaasProducts } from "./rothoblaas-products";
import { telProducts } from "./tel-products";
import { telplastProducts } from "./telplast-products";

/**
 * Catálogo de ejemplo. Se usa cuando Supabase todavía no está configurado,
 * y es la base del script SQL de carga inicial (supabase/schema.sql).
 * Precios en ARS, orientativos — se editan desde el panel de administración.
 */

export const seedCategories: Category[] = [
  {
    id: "c1",
    slug: "tornillos-y-fijaciones",
    name: "Tornillos y Fijaciones",
    description: "Autoperforantes TEL, tarugos, anclajes y fijaciones para steel frame y durlock.",
    icon: "Bolt",
    position: 1,
  },
  {
    id: "c2",
    slug: "perfiles-steel-frame",
    name: "Perfiles Steel Frame",
    description: "Perfiles galvanizados PGC y PGU, montantes y soleras para estructura y tabiques.",
    icon: "AlignVerticalJustifyCenter",
    position: 2,
  },
  {
    id: "c3",
    slug: "placas-y-paneles",
    name: "Placas y Paneles",
    description: "Placas de yeso, OSB, fenólicos y cementicias para cerramientos interiores y exteriores.",
    icon: "LayoutPanelLeft",
    position: 3,
  },
  {
    id: "c4",
    slug: "aislaciones",
    name: "Aislaciones",
    description: "Lana de vidrio, EPS y barreras de agua y viento para aislación térmica y acústica.",
    icon: "Layers",
    position: 4,
  },
  {
    id: "c5",
    slug: "combos",
    name: "Combos",
    description:
      "Kits de máquina con baterías, cargador y accesorios, listos para trabajar.",
    icon: "Package",
    position: 5,
  },
  {
    id: "c6",
    slug: "maquinas-a-bateria",
    name: "Máquinas Solas",
    description:
      "Máquinas a batería sin batería ni cargador, para sumar a la que ya tenés.",
    icon: "BatteryCharging",
    position: 6,
  },
  {
    id: "c7",
    slug: "baterias-y-cargadores",
    name: "Baterías",
    description: "Baterías de litio y cargadores de las líneas P20S, S12 y 42V.",
    icon: "BatteryFull",
    position: 7,
  },
  {
    id: "c8",
    slug: "maquinas-electricas",
    name: "Máquinas Eléctricas",
    description:
      "Amoladoras, taladros, sierras y demás máquinas a cable, de 220 V.",
    icon: "Zap",
    position: 8,
  },
  {
    id: "c9",
    slug: "herramientas-electricas",
    name: "Herramientas Eléctricas",
    description: "Atornilladores, amoladoras, sierras y herramientas Total para obra en seco.",
    icon: "Drill",
    position: 9,
  },
  {
    id: "c10",
    slug: "herramientas-manuales",
    name: "Herramientas Manuales",
    description: "Tijeras de corte, niveles, espátulas y herramientas de mano para el montaje.",
    icon: "Wrench",
    position: 10,
  },
  {
    id: "c11",
    slug: "accesorios-y-terminaciones",
    name: "Accesorios y Terminaciones",
    description: "Masillas, cintas, cantoneras y todo lo necesario para la terminación perfecta.",
    icon: "PaintRoller",
    position: 11,
  },
  {
    id: "c12",
    slug: "clavadoras-y-clavos",
    name: "Clavadoras y Clavos",
    description: "Clavadoras neumáticas Dorking y clavos coil, strip y punta París para wood frame y embalaje.",
    icon: "Hammer",
    position: 12,
  },
];

let n = 0;
const id = () => `p${++n}`;

export const seedProducts: Product[] = [
  // — Tornillos y Fijaciones: línea completa TEL (importada del fabricante)
  ...telProducts.map((p) => ({ ...p, id: id() })),
  // — Aislaciones: cinta SIMPLA y membrana TRASPIR 110 (Rothoblaas)
  ...rothoblaasProducts.map((p) => ({ ...p, id: id() })),
  // — Clavadoras y Clavos: línea Dorking (clavadoras neumáticas + clavos)
  ...dorkingProducts.map((p) => ({ ...p, id: id() })),
  // — Milwaukee: catálogo oficial del distribuidor Papierttei (sin accesorios)
  ...milwaukeeProducts.map((p) => ({ ...p, id: id() })),
  // — Fischer / Bosch / DeWalt: catálogos oficiales que distribuye Iturria S.A.
  ...iturriaProducts.map((p) => ({ ...p, id: id() })),
  ...ingcoProducts.map((p) => ({ ...p, id: id() })),
  // — Telplast: línea WOW! de adhesivos y selladores
  ...telplastProducts.map((p) => ({ ...p, id: id() })),
  // — Fischer: espumas, selladores y anclajes curados por el usuario (aparte
  // del catálogo masivo de iturriaProducts, sin foto/inactivo)
  ...fischerCuratedProducts.map((p) => ({ ...p, id: id() })),
  // — Adhesil: siliconas (neutra, acética, 11 PRO) y salchichas
  ...adhesilProducts.map((p) => ({ ...p, id: id() })),
  {
    id: id(),
    slug: "tarugo-fischer-sx8-caja-100",
    name: "Tarugo Fischer SX8 con tope (caja ×100)",
    description:
      "Tarugo de expansión de nylon de alta calidad para fijaciones en mampostería y hormigón.",
    price: 6900,
    category_slug: "tornillos-y-fijaciones",
    brand: "Fischer",
    unit: "caja ×100",
    stock: 150,
    stock_status: "en_sucursal",
    featured: false,
    bulky: false,
    image_url: null,
    specs: [
      { label: "Diámetro", value: "8 mm" },
      { label: "Material", value: "Nylon" },
    ],
    active: true,
  },

  // — Perfiles Steel Frame
  {
    id: id(),
    slug: "perfil-pgc-100-galvanizado",
    name: "Perfil PGC 100 galvanizado × 6 m",
    description:
      "Perfil galvanizado estructural C de 100 mm, espesor 0,94 mm, largo 6 metros. El montante estructural del sistema steel frame.",
    price: 28400,
    category_slug: "perfiles-steel-frame",
    brand: null,
    unit: "unidad",
    stock: 300,
    stock_status: "en_sucursal",
    featured: true,
    bulky: true,
    image_url: null,
    specs: [
      { label: "Alma", value: "100 mm" },
      { label: "Espesor", value: "0,94 mm (chapa 20)" },
      { label: "Largo", value: "6 m" },
      { label: "Norma", value: "IRAM-IAS U500-205" },
    ],
    active: true,
  },
  {
    id: id(),
    slug: "perfil-pgu-100-galvanizado",
    name: "Perfil PGU 100 galvanizado × 6 m",
    description:
      "Perfil galvanizado estructural U de 100 mm para solera superior e inferior de paneles de steel frame.",
    price: 24900,
    category_slug: "perfiles-steel-frame",
    brand: null,
    unit: "unidad",
    stock: 280,
    stock_status: "en_sucursal",
    featured: false,
    bulky: true,
    image_url: null,
    specs: [
      { label: "Alma", value: "100 mm" },
      { label: "Espesor", value: "0,94 mm (chapa 20)" },
      { label: "Largo", value: "6 m" },
    ],
    active: true,
  },
  {
    id: id(),
    slug: "montante-69-durlock",
    name: "Montante 69 mm × 2,60 m",
    description:
      "Perfil montante de chapa galvanizada para tabiques interiores de placa de yeso.",
    price: 6200,
    category_slug: "perfiles-steel-frame",
    brand: null,
    unit: "unidad",
    stock: 500,
    stock_status: "en_sucursal",
    featured: false,
    bulky: true,
    image_url: null,
    specs: [
      { label: "Ancho", value: "69 mm" },
      { label: "Largo", value: "2,60 m" },
      { label: "Uso", value: "Tabiques interiores" },
    ],
    active: true,
  },
  {
    id: id(),
    slug: "solera-70-durlock",
    name: "Solera 70 mm × 2,60 m",
    description:
      "Perfil solera de chapa galvanizada para piso y techo de tabiques de placa de yeso.",
    price: 5400,
    category_slug: "perfiles-steel-frame",
    brand: null,
    unit: "unidad",
    stock: 500,
    stock_status: "en_sucursal",
    featured: false,
    bulky: true,
    image_url: null,
    specs: [
      { label: "Ancho", value: "70 mm" },
      { label: "Largo", value: "2,60 m" },
    ],
    active: true,
  },

  // — Placas y Paneles
  {
    id: id(),
    slug: "placa-yeso-125-estandar",
    name: "Placa de yeso estándar 12,5 mm — 1,20 × 2,40 m",
    description:
      "Placa de yeso estándar para tabiques y cielorrasos interiores en construcción en seco.",
    price: 15800,
    category_slug: "placas-y-paneles",
    brand: null,
    unit: "unidad",
    stock: 400,
    stock_status: "en_sucursal",
    featured: true,
    bulky: true,
    image_url: null,
    specs: [
      { label: "Espesor", value: "12,5 mm" },
      { label: "Medidas", value: "1,20 × 2,40 m" },
      { label: "Borde", value: "Rebajado" },
    ],
    active: true,
  },
  {
    id: id(),
    slug: "placa-yeso-verde-125",
    name: "Placa de yeso resistente a la humedad 12,5 mm (verde)",
    description:
      "Placa de yeso con tratamiento hidrófugo para baños, cocinas y lavaderos.",
    price: 24300,
    category_slug: "placas-y-paneles",
    brand: null,
    unit: "unidad",
    stock: 180,
    stock_status: "en_sucursal",
    featured: false,
    bulky: true,
    image_url: null,
    specs: [
      { label: "Espesor", value: "12,5 mm" },
      { label: "Medidas", value: "1,20 × 2,40 m" },
      { label: "Uso", value: "Locales húmedos" },
    ],
    active: true,
  },
  {
    id: id(),
    slug: "placa-osb-111",
    name: "Placa OSB 11,1 mm — 1,22 × 2,44 m",
    description:
      "Placa OSB estructural para rigidización de paneles de steel frame y wood frame, sustratos de cubierta y entrepisos.",
    price: 32500,
    category_slug: "placas-y-paneles",
    brand: null,
    unit: "unidad",
    stock: 250,
    stock_status: "en_sucursal",
    featured: true,
    bulky: true,
    image_url: null,
    specs: [
      { label: "Espesor", value: "11,1 mm" },
      { label: "Medidas", value: "1,22 × 2,44 m" },
      { label: "Tipo", value: "OSB/3 estructural" },
    ],
    active: true,
  },
  {
    id: id(),
    slug: "placa-cementicia-8mm",
    name: "Placa cementicia 8 mm — 1,20 × 2,40 m",
    description:
      "Placa cementicia para fachadas y locales húmedos, base ideal para revestimientos exteriores en steel frame.",
    price: 41800,
    category_slug: "placas-y-paneles",
    brand: null,
    unit: "unidad",
    stock: 90,
    stock_status: "en_argentina",
    featured: false,
    bulky: true,
    image_url: null,
    specs: [
      { label: "Espesor", value: "8 mm" },
      { label: "Medidas", value: "1,20 × 2,40 m" },
      { label: "Uso", value: "Exterior / húmedos" },
    ],
    active: true,
  },

  // — Aislaciones
  {
    id: id(),
    slug: "lana-vidrio-50mm-rollo",
    name: "Lana de vidrio 50 mm con foil de aluminio (rollo 1,20 × 18 m)",
    description:
      "Aislación termoacústica en rollo con barrera de vapor de aluminio, para muros y cubiertas.",
    price: 68900,
    category_slug: "aislaciones",
    brand: null,
    unit: "rollo",
    stock: 60,
    stock_status: "en_sucursal",
    featured: true,
    bulky: true,
    image_url: null,
    specs: [
      { label: "Espesor", value: "50 mm" },
      { label: "Medidas", value: "1,20 × 18 m" },
      { label: "Barrera de vapor", value: "Foil de aluminio" },
    ],
    active: true,
  },
  {
    id: id(),
    slug: "barrera-agua-viento-rollo",
    name: "Barrera de agua y viento (rollo 1,50 × 30 m)",
    description:
      "Membrana hidrófuga y respirable para envolvente de steel frame y wood frame. Deja salir el vapor e impide el ingreso de agua.",
    price: 96500,
    category_slug: "aislaciones",
    brand: null,
    unit: "rollo",
    stock: 40,
    stock_status: "en_sucursal",
    featured: false,
    bulky: false,
    image_url: null,
    specs: [
      { label: "Medidas", value: "1,50 × 30 m" },
      { label: "Función", value: "Hidrófuga + respirable" },
    ],
    active: true,
  },
  {
    id: id(),
    slug: "eps-20kg-50mm",
    name: "Placa EPS 50 mm densidad 20 kg/m³ — 1 × 1 m",
    description:
      "Poliestireno expandido de alta densidad para aislación térmica exterior (EIFS/SATE) sobre placa cementicia u OSB.",
    price: 7800,
    category_slug: "aislaciones",
    brand: null,
    unit: "unidad",
    stock: 350,
    stock_status: "en_argentina",
    featured: false,
    bulky: true,
    image_url: null,
    specs: [
      { label: "Espesor", value: "50 mm" },
      { label: "Densidad", value: "20 kg/m³" },
    ],
    active: true,
  },

  // — Herramientas Eléctricas
  {
    id: id(),
    slug: "atornillador-drywall-total",
    name: "Atornillador drywall Total 600 W con tope de profundidad",
    description:
      "Atornillador eléctrico específico para placas de yeso, con tope de profundidad regulable y embrague silencioso. 4000 rpm.",
    price: 189000,
    category_slug: "herramientas-electricas",
    brand: "Total",
    unit: "unidad",
    stock: 25,
    stock_status: "en_sucursal",
    featured: true,
    bulky: false,
    image_url: null,
    specs: [
      { label: "Potencia", value: "600 W" },
      { label: "Velocidad", value: "0–4000 rpm" },
      { label: "Encastre", value: "1/4\" hexagonal" },
    ],
    active: true,
  },
  {
    id: id(),
    slug: "amoladora-angular-total-115",
    name: "Amoladora angular Total 115 mm 900 W",
    description:
      "Amoladora angular compacta para corte de perfiles y placas cementicias.",
    price: 145000,
    category_slug: "herramientas-electricas",
    brand: "Total",
    unit: "unidad",
    stock: 30,
    stock_status: "en_sucursal",
    featured: false,
    bulky: false,
    image_url: null,
    specs: [
      { label: "Disco", value: "115 mm" },
      { label: "Potencia", value: "900 W" },
    ],
    active: true,
  },
  {
    id: id(),
    slug: "sierra-circular-total-185",
    name: "Sierra circular Total 185 mm 1400 W",
    description:
      "Sierra circular para corte de OSB, fenólicos y madera estructural en wood frame.",
    price: 265000,
    category_slug: "herramientas-electricas",
    brand: "Total",
    unit: "unidad",
    stock: 15,
    stock_status: "sin_stock",
    featured: false,
    bulky: false,
    image_url: null,
    specs: [
      { label: "Disco", value: "185 mm" },
      { label: "Potencia", value: "1400 W" },
      { label: "Corte a 90°", value: "63 mm" },
    ],
    active: true,
  },

  // — Herramientas Manuales
  {
    id: id(),
    slug: "tijera-corte-chapa-stanley",
    name: "Tijera corte chapa aviación Stanley (corte recto)",
    description:
      "Tijera de aviación para corte de perfiles galvanizados y chapa fina. Hoja de acero cromo-molibdeno.",
    price: 38900,
    category_slug: "herramientas-manuales",
    brand: "Stanley",
    unit: "unidad",
    stock: 45,
    stock_status: "en_sucursal",
    featured: false,
    bulky: false,
    image_url: null,
    specs: [
      { label: "Corte", value: "Recto" },
      { label: "Capacidad", value: "Chapa hasta 1,2 mm" },
    ],
    active: true,
  },
  {
    id: id(),
    slug: "nivel-aluminio-60cm",
    name: "Nivel de aluminio 60 cm 3 burbujas",
    description:
      "Nivel de aluminio reforzado con tres burbujas, imprescindible para aplomar montantes.",
    price: 24500,
    category_slug: "herramientas-manuales",
    brand: "Total",
    unit: "unidad",
    stock: 40,
    stock_status: "en_sucursal",
    featured: false,
    bulky: false,
    image_url: null,
    specs: [{ label: "Largo", value: "60 cm" }],
    active: true,
  },
  {
    id: id(),
    slug: "espatula-acero-15cm",
    name: "Espátula de acero inoxidable 15 cm mango bimaterial",
    description:
      "Espátula ancha para tomado de juntas y masillado de placas de yeso.",
    price: 12800,
    category_slug: "herramientas-manuales",
    brand: null,
    unit: "unidad",
    stock: 70,
    stock_status: "en_sucursal",
    featured: false,
    bulky: false,
    image_url: null,
    specs: [{ label: "Hoja", value: "15 cm inoxidable" }],
    active: true,
  },

  // — Accesorios y Terminaciones
  {
    id: id(),
    slug: "masilla-lista-32kg",
    name: "Masilla lista para usar × 32 kg",
    description:
      "Masilla de secado para tomado de juntas de placas de yeso en todas sus manos.",
    price: 54300,
    category_slug: "accesorios-y-terminaciones",
    brand: null,
    unit: "balde 32 kg",
    stock: 85,
    stock_status: "en_sucursal",
    featured: true,
    bulky: false,
    image_url: null,
    specs: [
      { label: "Presentación", value: "Balde 32 kg" },
      { label: "Uso", value: "Juntas y masillado" },
    ],
    active: true,
  },
  {
    id: id(),
    slug: "cinta-papel-juntas-150m",
    name: "Cinta de papel para juntas × 150 m",
    description:
      "Cinta de papel microperforada para el tomado de juntas entre placas de yeso.",
    price: 9800,
    category_slug: "accesorios-y-terminaciones",
    brand: null,
    unit: "rollo 150 m",
    stock: 120,
    stock_status: "en_sucursal",
    featured: false,
    bulky: false,
    image_url: null,
    specs: [{ label: "Largo", value: "150 m" }],
    active: true,
  },
  {
    id: id(),
    slug: "banda-acustica-70mm",
    name: "Banda acústica autoadhesiva 70 mm × 10 m",
    description:
      "Banda de polietileno expandido para desolidarizar soleras y mejorar el desempeño acústico del tabique.",
    price: 8600,
    category_slug: "accesorios-y-terminaciones",
    brand: null,
    unit: "rollo 10 m",
    stock: 95,
    stock_status: "en_sucursal",
    featured: false,
    bulky: false,
    image_url: null,
    specs: [
      { label: "Ancho", value: "70 mm" },
      { label: "Largo", value: "10 m" },
    ],
    active: true,
  },
  {
    id: id(),
    slug: "cantonera-galvanizada-32x32",
    name: "Cantonera galvanizada 32×32 mm × 2,60 m",
    description:
      "Perfil cantonera para protección y terminación de aristas en tabiques de placa de yeso.",
    price: 4900,
    category_slug: "accesorios-y-terminaciones",
    brand: null,
    unit: "unidad",
    stock: 200,
    stock_status: "en_sucursal",
    featured: false,
    bulky: true,
    image_url: null,
    specs: [
      { label: "Alas", value: "32 × 32 mm" },
      { label: "Largo", value: "2,60 m" },
    ],
    active: true,
  },
];
