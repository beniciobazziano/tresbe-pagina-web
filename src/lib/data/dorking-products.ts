import type { Product } from "../types";

/**
 * Línea Dorking (dorking.com.ar): clavadoras neumáticas y clavos compatibles.
 * Descripciones y especificaciones oficiales del fabricante argentino.
 * PRECIOS ORIENTATIVOS: ajustarlos desde el panel de administración.
 */

const CAT = "clavadoras-y-clavos";

export const dorkingProducts: Omit<Product, "id">[] = [
  // ── Clavadoras neumáticas ─────────────────────────────────────────────
  {
    slug: "dorking-cn50",
    name: "Clavadora neumática Dorking CN50",
    description:
      "Clavadora neumática de clavos en rollo (coil) liviana, de fabricación argentina, pensada para embalaje ligero y carpintería. Con solo 1,5 kg de peso y cargador para 320 clavos Coil 21, es ideal para pallets, alzas de colmenas, casas prefabricadas y techos.",
    price: 480000,
    category_slug: CAT,
    brand: "Dorking",
    unit: "unidad",
    stock: 10,
    stock_status: "en_sucursal",
    featured: false,
    bulky: false,
    image_url: "/products/dorking/cn50.jpg",
    specs: [
      { label: "Presión de trabajo", value: "5 – 8 bar" },
      { label: "Consumo de aire", value: "1,15 L por golpe" },
      { label: "Capacidad del cargador", value: "320 clavos" },
      { label: "Clavo compatible", value: "Clavo en rollo Coil 21" },
      { label: "Peso", value: "1,5 kg" },
      { label: "Origen", value: "Industria Argentina (Dorking)" },
    ],
    active: true,
  },
  {
    slug: "dorking-cn57",
    name: "Clavadora neumática Dorking CN57",
    description:
      "Clavadora neumática de clavos en rollo para trabajo profesional en construcción, embalaje y aplicaciones industriales. Su cargador de 360 clavos le da gran autonomía en pallets, tarimas, casas prefabricadas y techos.",
    price: 620000,
    category_slug: CAT,
    brand: "Dorking",
    unit: "unidad",
    stock: 10,
    stock_status: "en_sucursal",
    featured: false,
    bulky: false,
    image_url: "/products/dorking/cn57.jpg",
    specs: [
      { label: "Presión de trabajo", value: "5 – 8 bar" },
      { label: "Consumo de aire", value: "1,9 L por golpe" },
      { label: "Capacidad del cargador", value: "360 clavos" },
      { label: "Tipo de fijación", value: "Clavos en rollo (coil)" },
      { label: "Peso", value: "2,7 kg" },
      { label: "Origen", value: "Industria Argentina (Dorking)" },
    ],
    active: true,
  },
  {
    slug: "dorking-cn65",
    name: "Clavadora neumática Dorking CN65",
    description:
      "Clavadora neumática potente para trabajos de clavado intensivo en embalaje y construcción industrializada. Compatible con clavos en rollo Coil 21 y Coil 26, ofrece gran autonomía y rendimiento en líneas productivas, pallets, paneles y viviendas industrializadas.",
    price: 590000,
    category_slug: CAT,
    brand: "Dorking",
    unit: "unidad",
    stock: 10,
    stock_status: "en_sucursal",
    featured: false,
    bulky: false,
    image_url: "/products/dorking/cn65.jpg",
    specs: [
      { label: "Presión de trabajo", value: "5 – 8 bar" },
      { label: "Consumo de aire", value: "2,0 L por golpe" },
      { label: "Capacidad del cargador", value: "320 clavos" },
      { label: "Clavos compatibles", value: "Coil 21 y Coil 26" },
      { label: "Peso", value: "2,0 kg" },
      { label: "Origen", value: "Industria Argentina (Dorking)" },
    ],
    active: true,
  },
  {
    slug: "dorking-cn70r",
    name: "Clavadora neumática Dorking CN70R (remachadora)",
    description:
      "Clavadora neumática especializada en remachado y reparación de pallets, con alimentación por clavos en rollo. Su cargador de 320 clavos y su construcción robusta la hacen apta para uso industrial intensivo.",
    price: 1450000,
    category_slug: CAT,
    brand: "Dorking",
    unit: "unidad",
    stock: 5,
    stock_status: "en_argentina",
    featured: false,
    bulky: false,
    image_url: "/products/dorking/cn70r.jpg",
    specs: [
      { label: "Presión de trabajo", value: "5 – 8 bar" },
      { label: "Consumo de aire", value: "1,7 L por golpe" },
      { label: "Capacidad del cargador", value: "320 clavos" },
      { label: "Clavos compatibles", value: "Coil 21, Coil 26 y Coil 29" },
      { label: "Peso", value: "7,3 kg" },
      { label: "Aplicaciones", value: "Reparación de pallets, remachado" },
      { label: "Origen", value: "Industria Argentina (Dorking)" },
    ],
    active: true,
  },
  {
    slug: "dorking-titania",
    name: "Clavadora neumática Dorking Titania",
    description:
      "Clavadora neumática de clavos en rollo orientada a mueblería, embalaje y construcción ligera. Su cargador de alta capacidad (400-450 clavos Coil 22/Coil 25) la hace ideal para sofás, butacas, cajones y armazones en producción en serie.",
    price: 780000,
    category_slug: CAT,
    brand: "Dorking",
    unit: "unidad",
    stock: 8,
    stock_status: "en_sucursal",
    featured: false,
    bulky: false,
    image_url: "/products/dorking/titania.jpg",
    specs: [
      { label: "Presión de trabajo", value: "5 – 8 bar" },
      { label: "Consumo de aire", value: "4,8 L por golpe" },
      { label: "Capacidad del cargador", value: "400 – 450 clavos" },
      { label: "Clavos compatibles", value: "Coil 22 y Coil 25" },
      { label: "Peso", value: "3,6 kg" },
      { label: "Origen", value: "Industria Argentina (Dorking)" },
    ],
    active: true,
  },
  {
    slug: "dorking-cn80",
    name: "Clavadora neumática Dorking CN80",
    description:
      "Clavadora neumática profesional de clavos en rollo para embalaje y construcción industrial. Admite clavos Coil 26, 29 y 31 y clavo tornillo, con cargador para 250-300 clavos, apta para embalaje pesado, cajones, pallets y viviendas industrializadas.",
    price: 820000,
    category_slug: CAT,
    brand: "Dorking",
    unit: "unidad",
    stock: 8,
    stock_status: "en_sucursal",
    featured: false,
    bulky: false,
    image_url: "/products/dorking/cn80.jpg",
    specs: [
      { label: "Presión de trabajo", value: "5 – 8 bar" },
      { label: "Consumo de aire", value: "5,2 L por golpe" },
      { label: "Capacidad del cargador", value: "250 – 300 clavos" },
      { label: "Clavos compatibles", value: "Coil 26, Coil 29, Coil 31 y clavo tornillo" },
      { label: "Peso", value: "3,8 kg" },
      { label: "Origen", value: "Industria Argentina (Dorking)" },
    ],
    active: true,
  },
  {
    slug: "dorking-cn90",
    name: "Clavadora neumática Dorking CN90",
    description:
      "Clavadora neumática de clavos en rollo para uso profesional en construcción y embalaje pesado. Compatible con clavos Coil 29, 31 y 34 y clavo tornillo, se emplea en cabreadas, casas prefabricadas, pallets y viviendas industrializadas.",
    price: 860000,
    category_slug: CAT,
    brand: "Dorking",
    unit: "unidad",
    stock: 8,
    stock_status: "en_sucursal",
    featured: false,
    bulky: false,
    image_url: "/products/dorking/cn90.jpg",
    specs: [
      { label: "Presión de trabajo", value: "5 – 8 bar" },
      { label: "Consumo de aire", value: "5,5 L por golpe" },
      { label: "Capacidad del cargador", value: "250 clavos" },
      { label: "Clavos compatibles", value: "Coil 29, Coil 31, Coil 34 y clavo tornillo" },
      { label: "Peso", value: "3,70 kg" },
      { label: "Origen", value: "Industria Argentina (Dorking)" },
    ],
    active: true,
  },
  {
    slug: "dorking-cn90c",
    name: "Clavadora neumática Dorking CN90C",
    description:
      "Clavadora neumática de alto rendimiento diseñada para trabajos estructurales exigentes en construcción con madera y embalaje pesado. Herramienta profesional para wood frame, carpintería estructural, cerchas y entablonado, con cargador de 300 clavos en rollo.",
    price: 790000,
    category_slug: CAT,
    brand: "Dorking",
    unit: "unidad",
    stock: 10,
    stock_status: "en_sucursal",
    featured: true,
    bulky: false,
    image_url: "/products/dorking/cn90c.png",
    specs: [
      { label: "Presión de trabajo", value: "5 – 8 bar" },
      { label: "Consumo de aire", value: "4,8 L por golpe" },
      { label: "Capacidad del cargador", value: "300 clavos" },
      { label: "Clavos compatibles", value: "Coil 26, Coil 29, Coil 31 y Coil 34" },
      { label: "Peso", value: "3,0 kg" },
      { label: "Aplicaciones", value: "Wood frame, cerchas, entablonado, embalaje pesado" },
      { label: "Origen", value: "Industria Argentina (Dorking)" },
    ],
    active: true,
  },
  {
    slug: "dorking-cn90cp",
    name: "Clavadora neumática Dorking CN90CP con regulador",
    description:
      "Clavadora neumática de precisión con regulador de profundidad de clavado y maletín de transporte, de diseño equilibrado (2,9 kg) para manejo cómodo en obra. Dispara clavos en rollo de 2,6 a 3,4 mm de diámetro y de 40 a 90 mm de largo, con cargador de 300 clavos para producciones en serie.",
    price: 940000,
    category_slug: CAT,
    brand: "Dorking",
    unit: "unidad",
    stock: 10,
    stock_status: "en_sucursal",
    featured: true,
    bulky: false,
    image_url: "/products/dorking/cn90cp.jpg",
    specs: [
      { label: "Presión de trabajo", value: "5 – 7 bar" },
      { label: "Consumo de aire", value: "4,8 L por golpe" },
      { label: "Capacidad del cargador", value: "300 clavos" },
      { label: "Diámetro de clavos", value: "2,6 mm a 3,4 mm" },
      { label: "Largo de clavos", value: "40 mm (1,5\") a 90 mm (3,5\")" },
      { label: "Clavos compatibles", value: "Coil 26, Coil 29, Coil 31 y Coil 34" },
      { label: "Peso sin clavos", value: "2,9 kg" },
      { label: "Maletín de transporte", value: "Incluido" },
      { label: "Origen", value: "Industria Argentina (Dorking)" },
    ],
    active: true,
  },
  {
    slug: "dorking-cn100",
    name: "Clavadora neumática Dorking CN100",
    description:
      "Clavadora neumática de clavos en rollo para construcción y carpintería industrial pesada. Compatible con clavos Coil 29, 31 y 34 y clavo tornillo, se usa en cabañas de troncos, cabreadas, jaulas, embalaje pesado y viviendas industrializadas.",
    price: 1150000,
    category_slug: CAT,
    brand: "Dorking",
    unit: "unidad",
    stock: 5,
    stock_status: "en_argentina",
    featured: false,
    bulky: false,
    image_url: "/products/dorking/cn100.jpg",
    specs: [
      { label: "Presión de trabajo", value: "5 – 8 bar" },
      { label: "Consumo de aire", value: "8 L por golpe" },
      { label: "Capacidad del cargador", value: "250 clavos" },
      { label: "Clavos compatibles", value: "Coil 29, Coil 31, Coil 34 y clavo tornillo" },
      { label: "Peso", value: "5,24 kg" },
      { label: "Origen", value: "Industria Argentina (Dorking)" },
    ],
    active: true,
  },
  {
    slug: "dorking-cn130",
    name: "Clavadora neumática Dorking CN130",
    description:
      "Clavadora neumática de clavos en rollo para los trabajos de fijación más pesados en construcción y embalaje. Compatible con clavos Coil 31 y Coil 34, se emplea en cabañas de troncos, cabreadas, jaulas, embalaje pesado y viviendas industrializadas.",
    price: 1290000,
    category_slug: CAT,
    brand: "Dorking",
    unit: "unidad",
    stock: 5,
    stock_status: "en_argentina",
    featured: false,
    bulky: false,
    image_url: "/products/dorking/cn130.jpg",
    specs: [
      { label: "Presión de trabajo", value: "5 – 8 bar" },
      { label: "Consumo de aire", value: "5,39 L por golpe" },
      { label: "Capacidad del cargador", value: "120 – 125 clavos" },
      { label: "Clavos compatibles", value: "Coil 31 y Coil 34" },
      { label: "Peso", value: "5,79 kg" },
      { label: "Origen", value: "Industria Argentina (Dorking)" },
    ],
    active: true,
  },
  {
    slug: "dorking-fn83",
    name: "Clavadora neumática Dorking FN83 (clavos en tira)",
    description:
      "Clavadora neumática de clavos en tira (strip) para uso profesional en construcción y carpintería. Compatible con clavos Strip 31, 34 y 38, es ideal para armazones, cerchas, carpintería arquitectónica, marcos y terminaciones.",
    price: 690000,
    category_slug: CAT,
    brand: "Dorking",
    unit: "unidad",
    stock: 8,
    stock_status: "en_sucursal",
    featured: false,
    bulky: false,
    image_url: "/products/dorking/fn83.jpg",
    specs: [
      { label: "Presión de trabajo", value: "5 – 8 bar" },
      { label: "Consumo de aire", value: "2,0 L por golpe" },
      { label: "Capacidad del cargador", value: "64 clavos" },
      { label: "Tipo de carga", value: "Clavos en tira (strip)" },
      { label: "Clavos compatibles", value: "Strip 31, Strip 34 y Strip 38" },
      { label: "Peso", value: "3,75 kg" },
      { label: "Origen", value: "Industria Argentina (Dorking)" },
    ],
    active: true,
  },
  {
    slug: "dorking-fn90",
    name: "Clavadora neumática Dorking FN90 (clavos en tira)",
    description:
      "Clavadora neumática de clavos en tira (strip) para construcción en madera, carpintería y terminaciones. Compatible con clavos Strip 31, 34 y 38, está diseñada para ensamblaje y fijación general en obra y taller.",
    price: 710000,
    category_slug: CAT,
    brand: "Dorking",
    unit: "unidad",
    stock: 8,
    stock_status: "en_sucursal",
    featured: false,
    bulky: false,
    image_url: "/products/dorking/fn90.jpg",
    specs: [
      { label: "Presión de trabajo", value: "5 – 8 bar" },
      { label: "Consumo de aire", value: "2,0 L por golpe" },
      { label: "Capacidad del cargador", value: "64 clavos" },
      { label: "Tipo de carga", value: "Clavos en tira (strip)" },
      { label: "Clavos compatibles", value: "Strip 31, Strip 34 y Strip 38" },
      { label: "Peso", value: "3,6 kg" },
      { label: "Origen", value: "Industria Argentina (Dorking)" },
    ],
    active: true,
  },
  {
    slug: "dorking-sn130",
    name: "Clavadora neumática Dorking SN130 (clavos en tira)",
    description:
      "Clavadora neumática de clavos en tira (strip) para construcción pesada y embalaje. Compatible con clavo Strip 38, se utiliza en cabañas de troncos, cabreadas, cerchas, viviendas industrializadas y embalaje pesado.",
    price: 1350000,
    category_slug: CAT,
    brand: "Dorking",
    unit: "unidad",
    stock: 4,
    stock_status: "en_argentina",
    featured: false,
    bulky: false,
    image_url: "/products/dorking/sn130.jpg",
    specs: [
      { label: "Presión de trabajo", value: "5 – 8 bar" },
      { label: "Consumo de aire", value: "2,0 L por golpe" },
      { label: "Capacidad del cargador", value: "54 clavos" },
      { label: "Tipo de carga", value: "Clavos en tira (strip)" },
      { label: "Clavo compatible", value: "Strip 38" },
      { label: "Peso", value: "6,1 kg" },
      { label: "Origen", value: "Industria Argentina (Dorking)" },
    ],
    active: true,
  },
  // ── Clavos para clavadoras ────────────────────────────────────────────
  {
    slug: "dorking-clavo-en-rollo-coil",
    name: "Clavo en Rollo Coil Dorking",
    description:
      "Clavo en rollo (coil) de industria argentina para clavadoras neumáticas Dorking, en todas las medidas de calibre. Cada medida es compatible con un rango distinto de clavadoras de la línea CN/Titania, según el grosor del clavo. Se usa en embalaje, pallets, mueblería, casas prefabricadas, cerchas y viviendas industrializadas.",
    price: 48000,
    category_slug: CAT,
    brand: "Dorking",
    unit: "caja",
    stock: 60,
    stock_status: "en_sucursal",
    featured: false,
    bulky: false,
    image_url: "/products/dorking/coil-26.jpg",
    specs: [
      { label: "Presentación", value: "Rollo (coil)" },
      { label: "Medidas", value: "Coil 21, 22, 25, 26, 29, 31 y 34" },
      { label: "Origen", value: "Industria Argentina (Dorking)" },
    ],
    sizes: ["Coil 21", "Coil 22", "Coil 25", "Coil 26", "Coil 29", "Coil 31", "Coil 34"],
    spec_table: {
      headers: ["Medida", "Clavadoras compatibles"],
      rows: [
        ["Coil 21", "CN50, CN57, CN65 y CN70R"],
        ["Coil 22", "Titania"],
        ["Coil 25", "Titania"],
        ["Coil 26", "CN65, CN70R, CN80 y CN90C"],
        ["Coil 29", "CN70R, CN80, CN90, CN90C y CN100"],
        ["Coil 31", "CN80, CN90, CN90C, CN100 y CN130"],
        ["Coil 34", "CN90, CN90C, CN100 y CN130"],
      ],
    },
    active: true,
  },
  {
    slug: "dorking-clavo-strip-31",
    name: "Clavo en tira Dorking Strip 31",
    description:
      "Clavo en tira (strip) para clavadoras neumáticas Dorking FN83 y FN90. Se utiliza en carpintería arquitectónica, construcción con madera, decoración, marcos y terminaciones.",
    price: 46000,
    category_slug: CAT,
    brand: "Dorking",
    unit: "caja",
    stock: 60,
    stock_status: "en_sucursal",
    featured: false,
    bulky: false,
    image_url: "/products/dorking/strip-31.jpg",
    specs: [
      { label: "Presentación", value: "Tira (strip)" },
      { label: "Clavadoras compatibles", value: "Dorking FN83 y FN90" },
      { label: "Origen", value: "Industria Argentina (Dorking)" },
    ],
    active: true,
  },
  {
    slug: "dorking-clavo-strip-34",
    name: "Clavo en tira Dorking Strip 34",
    description:
      "Clavo en tira (strip) de industria argentina para las clavadoras Dorking FN83 y FN90. Apto para carpintería arquitectónica, construcción con madera, cerchas, decoración y terminaciones.",
    price: 50000,
    category_slug: CAT,
    brand: "Dorking",
    unit: "caja",
    stock: 60,
    stock_status: "en_sucursal",
    featured: false,
    bulky: false,
    image_url: "/products/dorking/strip-34.jpg",
    specs: [
      { label: "Presentación", value: "Tira (strip)" },
      { label: "Clavadoras compatibles", value: "Dorking FN83 y FN90" },
      { label: "Origen", value: "Industria Argentina (Dorking)" },
    ],
    active: true,
  },
  {
    slug: "dorking-clavo-strip-38",
    name: "Clavo en tira Dorking Strip 38",
    description:
      "Clavo en tira (strip) para clavado neumático con las clavadoras Dorking FN83, FN90 y SN130. Diseñado para construcción con madera, cerchas, carpintería arquitectónica y terminaciones.",
    price: 54000,
    category_slug: CAT,
    brand: "Dorking",
    unit: "caja",
    stock: 60,
    stock_status: "en_sucursal",
    featured: false,
    bulky: false,
    image_url: "/products/dorking/strip-38.jpg",
    specs: [
      { label: "Presentación", value: "Tira (strip)" },
      { label: "Clavadoras compatibles", value: "Dorking FN83, FN90 y SN130" },
      { label: "Origen", value: "Industria Argentina (Dorking)" },
    ],
    active: true,
  },
  {
    slug: "dorking-clavo-paris-2",
    name: "Clavo punta París 2\" Dorking",
    description:
      "Clavos sueltos de acero punta París de 2 pulgadas para clavado manual en construcción con madera y carpintería general. Su punta París permite una penetración eficiente en la madera, logrando un armado sólido y resistente.",
    price: 38000,
    category_slug: CAT,
    brand: "Dorking",
    unit: "cajón 16 kg",
    stock: 40,
    stock_status: "en_sucursal",
    featured: false,
    bulky: false,
    image_url: "/products/dorking/clavo-paris-2.jpg",
    specs: [
      { label: "Largo", value: "2\" (50,8 mm)" },
      { label: "Tipo de punta", value: "Punta París" },
      { label: "Material", value: "Acero" },
      { label: "Presentación", value: "Cajón de 16 kg o 25 kg" },
      { label: "Origen", value: "Industria Argentina (Dorking)" },
    ],
    active: true,
  },
  {
    slug: "dorking-clavo-paris-2-5",
    name: "Clavo punta París 2 1/2\" Dorking",
    description:
      "Clavos sueltos de acero punta París de 2 1/2 pulgadas para trabajos exigentes en construcción y carpintería con madera. Ofrecen mayor poder de agarre y profundidad de fijación en maderas de espesor considerable y aplicaciones estructurales.",
    price: 40000,
    category_slug: CAT,
    brand: "Dorking",
    unit: "cajón 16 kg",
    stock: 40,
    stock_status: "en_sucursal",
    featured: false,
    bulky: false,
    image_url: "/products/dorking/clavo-paris-2-5.jpg",
    specs: [
      { label: "Largo", value: "2 1/2\" (63,5 mm)" },
      { label: "Tipo de punta", value: "Punta París" },
      { label: "Material", value: "Acero" },
      { label: "Presentación", value: "Cajón de 16 kg o 25 kg" },
      { label: "Origen", value: "Industria Argentina (Dorking)" },
    ],
    active: true,
  },
  // ── Clavillos, grampas y sus clavadoras/engrampadoras ─────────────────
  {
    "slug": "dorking-clavillo-tipin-dorking",
    "name": "Clavillo Tipín Dorking",
    "description": "Clavo fino de bajo calibre para fijación discreta y prolija, ideal para terminaciones. Fabricado en acero de alta calidad, penetra la madera sin dañarla dejando una marca mínima.",
    "price": 9000,
    "category_slug": "clavadoras-y-clavos",
    "brand": "Dorking",
    "unit": "caja",
    "stock": 40,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/dorking/dorking-clavillo-tipin-dorking.jpg",
    "specs": [
      {
        "label": "Presentación",
        "value": "Caja de 5.000 unidades"
      },
      {
        "label": "Aplicaciones",
        "value": "Molduras, marcos de cuadros/espejos, marcos de puertas y ventanas, pisos de madera, muebles, carpintería fina"
      },
      {
        "label": "Clavadora compatible",
        "value": "Clavillera Dorking Tipín 50"
      },
      {
        "label": "Origen",
        "value": "Industria Argentina (Dorking)"
      }
    ],
    "sizes": [
      "15mm",
      "20mm",
      "25mm",
      "28mm",
      "30mm",
      "32mm",
      "35mm",
      "38mm",
      "44mm",
      "50mm"
    ],
    "active": true
  },
  {
    "slug": "dorking-clavillo-tip-dorking",
    "name": "Clavillo Tip Dorking",
    "description": "Clavo de calibre más grueso que el Tipín, con mayor resistencia y capacidad de sujeción manteniendo terminación estética. Acero de alta calidad.",
    "price": 10000,
    "category_slug": "clavadoras-y-clavos",
    "brand": "Dorking",
    "unit": "caja",
    "stock": 40,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/dorking/dorking-clavillo-tip-dorking.jpg",
    "specs": [
      {
        "label": "Presentación",
        "value": "Caja de 2.500 unidades"
      },
      {
        "label": "Aplicaciones",
        "value": "Molduras, armado de muebles, marcos, terminaciones decorativas"
      },
      {
        "label": "Clavadora compatible",
        "value": "Clavillera Dorking Tip 65"
      },
      {
        "label": "Origen",
        "value": "Industria Argentina (Dorking)"
      }
    ],
    "sizes": [
      "20mm",
      "25mm",
      "30mm",
      "35mm",
      "40mm",
      "45mm",
      "50mm",
      "65mm"
    ],
    "active": true
  },
  {
    "slug": "dorking-clavillera-dorking-tipin-50",
    "name": "Clavillera Dorking Tipín 50",
    "description": "Clavadora neumática de acabado para clavillo Tipín, pensada para adornos, molduras y artículos del hogar.",
    "price": 0,
    "category_slug": "clavadoras-y-clavos",
    "brand": "Dorking",
    "unit": "unidad",
    "stock": 5,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/dorking/dorking-clavillera-dorking-tipin-50.jpg",
    "specs": [
      {
        "label": "Presión de trabajo",
        "value": "4 – 6 bar"
      },
      {
        "label": "Consumo de aire",
        "value": "0,65 L por golpe"
      },
      {
        "label": "Capacidad del cargador",
        "value": "100 clavillos"
      },
      {
        "label": "Dimensiones",
        "value": "263 × 60 × 256 mm"
      },
      {
        "label": "Peso",
        "value": "1,2 kg"
      },
      {
        "label": "Clavillo compatible",
        "value": "Clavillo Tipín, 15 a 50mm"
      },
      {
        "label": "Origen",
        "value": "Industria Argentina (Dorking)"
      }
    ],
    "active": true
  },
  {
    "slug": "dorking-clavillera-dorking-tip-65",
    "name": "Clavillera Dorking Tip 65",
    "description": "Clavadora neumática de acabado para clavillo Tip, para molduras, armado de muebles y marcos de cuadros.",
    "price": 0,
    "category_slug": "clavadoras-y-clavos",
    "brand": "Dorking",
    "unit": "unidad",
    "stock": 5,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/dorking/dorking-clavillera-dorking-tip-65.jpg",
    "specs": [
      {
        "label": "Presión de trabajo",
        "value": "5 – 7 bar"
      },
      {
        "label": "Consumo de aire",
        "value": "1,2 L por golpe"
      },
      {
        "label": "Capacidad del cargador",
        "value": "100 clavillos"
      },
      {
        "label": "Dimensiones",
        "value": "299 × 74 × 281 mm"
      },
      {
        "label": "Peso",
        "value": "1,7 kg"
      },
      {
        "label": "Clavillo compatible",
        "value": "Clavillo Tip, 20 a 65mm"
      },
      {
        "label": "Origen",
        "value": "Industria Argentina (Dorking)"
      }
    ],
    "active": true
  },
  {
    "slug": "dorking-grampa-71-dorking",
    "name": "Grampa 71 Dorking",
    "description": "Grampa de uso general para tareas livianas a medianas: alzas de colmenas, marcos, cajas acústicas, tapicería y embalaje liviano.",
    "price": 0,
    "category_slug": "clavadoras-y-clavos",
    "brand": "Dorking",
    "unit": "caja",
    "stock": 40,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/dorking/dorking-grampa-71-dorking.jpg",
    "specs": [
      {
        "label": "Clavadora compatible",
        "value": "Engrampadora Dorking 71/16 y 71/16 Auto"
      },
      {
        "label": "Origen",
        "value": "Industria Argentina (Dorking)"
      }
    ],
    "sizes": [
      "16mm"
    ],
    "active": true
  },
  {
    "slug": "dorking-grampa-80-dorking",
    "name": "Grampa 80 Dorking",
    "description": "Grampa para trabajos de tapicería y armado de estructuras de madera que requieren precisión y firmeza.",
    "price": 11000,
    "category_slug": "clavadoras-y-clavos",
    "brand": "Dorking",
    "unit": "caja",
    "stock": 40,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/dorking/dorking-grampa-80-dorking.jpg",
    "specs": [
      {
        "label": "Clavadora compatible",
        "value": "Engrampadora Dorking 80/30"
      },
      {
        "label": "Origen",
        "value": "Industria Argentina (Dorking)"
      }
    ],
    "sizes": [
      "8mm",
      "10mm",
      "12mm",
      "14mm",
      "20mm",
      "22mm",
      "25mm"
    ],
    "active": true
  },
  {
    "slug": "dorking-grampa-84-dorking",
    "name": "Grampa 84 Dorking",
    "description": "Grampa versátil para tapicería y aplicaciones industriales; alta resistencia y buen poder de sujeción para materiales de mayor espesor.",
    "price": 14000,
    "category_slug": "clavadoras-y-clavos",
    "brand": "Dorking",
    "unit": "caja",
    "stock": 40,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/dorking/dorking-grampa-84-dorking.jpg",
    "specs": [
      {
        "label": "Clavadora compatible",
        "value": "Engrampadora Dorking 84/16"
      },
      {
        "label": "Origen",
        "value": "Industria Argentina (Dorking)"
      }
    ],
    "sizes": [
      "4mm",
      "6mm",
      "8mm",
      "10mm",
      "12mm",
      "14mm",
      "16mm"
    ],
    "active": true
  },
  {
    "slug": "dorking-grampa-88-dorking",
    "name": "Grampa 88 Dorking",
    "description": "Grampa para fábrica de colchones, fijación de goma espuma, acolchados y revestimientos.",
    "price": 0,
    "category_slug": "clavadoras-y-clavos",
    "brand": "Dorking",
    "unit": "caja",
    "stock": 40,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/dorking/dorking-grampa-88-dorking.jpg",
    "specs": [
      {
        "label": "Clavadora compatible",
        "value": "Engrampadora Dorking PLIER 88"
      },
      {
        "label": "Origen",
        "value": "Industria Argentina (Dorking)"
      }
    ],
    "sizes": [
      "medida única"
    ],
    "active": true
  },
  {
    "slug": "dorking-grampa-90-dorking",
    "name": "Grampa 90 Dorking",
    "description": "Grampa diseñada para aplicaciones que requieren fijación más robusta; mayor espesor y resistencia. Uso en marcos, bandejas, cajas, mueblería y flotante de pisos de madera.",
    "price": 26000,
    "category_slug": "clavadoras-y-clavos",
    "brand": "Dorking",
    "unit": "caja",
    "stock": 40,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/dorking/dorking-grampa-90-dorking.jpg",
    "specs": [
      {
        "label": "Clavadora compatible",
        "value": "Engrampadora Dorking 90/30, 90/40 y 90/40P (piso de madera)"
      },
      {
        "label": "Origen",
        "value": "Industria Argentina (Dorking)"
      }
    ],
    "sizes": [
      "15mm",
      "20mm",
      "25mm",
      "30mm",
      "35mm",
      "40mm"
    ],
    "active": true
  },
  {
    "slug": "dorking-grampa-92-dorking",
    "name": "Grampa 92 Dorking",
    "description": "Grampa para armazones, bandejas, bastidores, cajas, carteles, embalaje liviano, escenografías, ataúdes, frutihortícola, náutica y mueblería.",
    "price": 0,
    "category_slug": "clavadoras-y-clavos",
    "brand": "Dorking",
    "unit": "caja",
    "stock": 40,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/dorking/dorking-grampa-92-dorking.jpg",
    "specs": [
      {
        "label": "Clavadora compatible",
        "value": "Engrampadora Dorking 92/32 y 92/40"
      },
      {
        "label": "Origen",
        "value": "Industria Argentina (Dorking)"
      }
    ],
    "sizes": [
      "32mm",
      "40mm"
    ],
    "active": true
  },
  {
    "slug": "dorking-grampa-93-dorking",
    "name": "Grampa 93 Dorking",
    "description": "Grampa para alzas de colmenas, armazones, avicultura, cajones y numerosas aplicaciones de construcción, agro y mueblería.",
    "price": 0,
    "category_slug": "clavadoras-y-clavos",
    "brand": "Dorking",
    "unit": "caja",
    "stock": 40,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/dorking/dorking-grampa-93-dorking.jpg",
    "specs": [
      {
        "label": "Clavadora compatible",
        "value": "Engrampadora Dorking 93/25"
      },
      {
        "label": "Origen",
        "value": "Industria Argentina (Dorking)"
      }
    ],
    "sizes": [
      "25mm"
    ],
    "active": true
  },
  {
    "slug": "dorking-grampa-100-dorking",
    "name": "Grampa 100 Dorking",
    "description": "Grampa para alzas de colmenas, armazones, bobinas de cables, cajas, cerco, techado, tarimas de madera, piso y mueblería.",
    "price": 0,
    "category_slug": "clavadoras-y-clavos",
    "brand": "Dorking",
    "unit": "caja",
    "stock": 40,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/dorking/dorking-grampa-100-dorking.jpg",
    "specs": [
      {
        "label": "Clavadora compatible",
        "value": "Engrampadora Dorking 100/50 y 100/50N"
      },
      {
        "label": "Origen",
        "value": "Industria Argentina (Dorking)"
      }
    ],
    "sizes": [
      "50mm"
    ],
    "active": true
  },
  {
    "slug": "dorking-grampa-16wc-dorking",
    "name": "Grampa 16WC Dorking",
    "description": "Grampa de corona ancha (Wide Crown) calibre 16 para alzas de colmenas, tejuela canadiense, marcos, ataúdes, papel embreado, marcos de puertas/ventanas y cartón corrugado.",
    "price": 0,
    "category_slug": "clavadoras-y-clavos",
    "brand": "Dorking",
    "unit": "caja",
    "stock": 40,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/dorking/dorking-grampa-16wc-dorking.jpg",
    "specs": [
      {
        "label": "Clavadora compatible",
        "value": "Engrampadora Dorking 16WC/38"
      },
      {
        "label": "Origen",
        "value": "Industria Argentina (Dorking)"
      }
    ],
    "sizes": [
      "38mm"
    ],
    "active": true
  },
  {
    "slug": "dorking-engrampadora-dorking-71-16",
    "name": "Engrampadora Dorking 71/16",
    "description": "Engrampadora neumática de la Línea 71 para aplicaciones livianas a medianas: alzas de colmenas, mueblería, tapicería, embalaje liviano y marcos decorativos.",
    "price": 0,
    "category_slug": "clavadoras-y-clavos",
    "brand": "Dorking",
    "unit": "unidad",
    "stock": 5,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/dorking/dorking-engrampadora-dorking-71-16.jpg",
    "specs": [
      {
        "label": "Presión de trabajo",
        "value": "5 – 6 bar"
      },
      {
        "label": "Consumo de aire",
        "value": "0,25 L por golpe"
      },
      {
        "label": "Capacidad del cargador",
        "value": "167 grampas"
      },
      {
        "label": "Peso",
        "value": "0,9 kg"
      },
      {
        "label": "Grampa compatible",
        "value": "Grampa 71"
      },
      {
        "label": "Origen",
        "value": "Industria Argentina (Dorking)"
      }
    ],
    "active": true
  },
  {
    "slug": "dorking-engrampadora-dorking-71-16-auto",
    "name": "Engrampadora Dorking 71/16 Auto",
    "description": "Versión automática de la Línea 71, misma aplicación que el modelo estándar con gatillo de disparo por contacto.",
    "price": 0,
    "category_slug": "clavadoras-y-clavos",
    "brand": "Dorking",
    "unit": "unidad",
    "stock": 5,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/dorking/dorking-engrampadora-dorking-71-16.jpg",
    "specs": [
      {
        "label": "Presión de trabajo",
        "value": "5 – 6 bar"
      },
      {
        "label": "Consumo de aire",
        "value": "0,25 L por golpe"
      },
      {
        "label": "Capacidad del cargador",
        "value": "167 grampas"
      },
      {
        "label": "Peso",
        "value": "0,9 kg"
      },
      {
        "label": "Grampa compatible",
        "value": "Grampa 71"
      },
      {
        "label": "Origen",
        "value": "Industria Argentina (Dorking)"
      }
    ],
    "active": true
  },
  {
    "slug": "dorking-engrampadora-dorking-80-30",
    "name": "Engrampadora Dorking 80/30",
    "description": "Engrampadora neumática de la Línea 80 para marcos, tapicería (sillones, sillas, sofás), cajas acústicas, cartelería, interiores de vehículos/embarcaciones y embalaje.",
    "price": 0,
    "category_slug": "clavadoras-y-clavos",
    "brand": "Dorking",
    "unit": "unidad",
    "stock": 5,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/dorking/dorking-engrampadora-dorking-80-30.jpg",
    "specs": [
      {
        "label": "Presión de trabajo",
        "value": "4 – 6 bar"
      },
      {
        "label": "Consumo de aire",
        "value": "0,5 L por golpe"
      },
      {
        "label": "Capacidad del cargador",
        "value": "125 grampas"
      },
      {
        "label": "Peso",
        "value": "1,2 kg"
      },
      {
        "label": "Grampa compatible",
        "value": "Grampa 80"
      },
      {
        "label": "Origen",
        "value": "Industria Argentina (Dorking)"
      }
    ],
    "active": true
  },
  {
    "slug": "dorking-engrampadora-dorking-84-16",
    "name": "Engrampadora Dorking 84/16",
    "description": "Engrampadora neumática de la Línea 84 para apicultura, marcos serigráficos, artículos del hogar, jaulas avícolas, tapicería, cajas, cajas acústicas, construcción en madera y mueblería.",
    "price": 0,
    "category_slug": "clavadoras-y-clavos",
    "brand": "Dorking",
    "unit": "unidad",
    "stock": 5,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/dorking/dorking-engrampadora-dorking-84-16.jpg",
    "specs": [
      {
        "label": "Presión de trabajo",
        "value": "4 – 6 bar"
      },
      {
        "label": "Consumo de aire",
        "value": "0,25 L por golpe"
      },
      {
        "label": "Capacidad del cargador",
        "value": "125 grampas"
      },
      {
        "label": "Peso",
        "value": "0,9 kg"
      },
      {
        "label": "Grampa compatible",
        "value": "Grampa 84"
      },
      {
        "label": "Origen",
        "value": "Industria Argentina (Dorking)"
      }
    ],
    "active": true
  },
  {
    "slug": "dorking-engrampadora-dorking-90-30",
    "name": "Engrampadora Dorking 90/30",
    "description": "Engrampadora neumática de la Línea 90 para marcos, bandejas, cajas, embalaje liviano, escenografía, ataúdes, industria naval y mueblería (baño, cocina, jardín).",
    "price": 0,
    "category_slug": "clavadoras-y-clavos",
    "brand": "Dorking",
    "unit": "unidad",
    "stock": 5,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/dorking/dorking-engrampadora-dorking-90-30.jpg",
    "specs": [
      {
        "label": "Presión de trabajo",
        "value": "5 – 7 bar"
      },
      {
        "label": "Consumo de aire",
        "value": "0,78 L por golpe"
      },
      {
        "label": "Capacidad del cargador",
        "value": "100 grampas"
      },
      {
        "label": "Peso",
        "value": "1,1 kg"
      },
      {
        "label": "Grampa compatible",
        "value": "Grampa 90"
      },
      {
        "label": "Origen",
        "value": "Industria Argentina (Dorking)"
      }
    ],
    "active": true
  },
  {
    "slug": "dorking-engrampadora-dorking-90-40",
    "name": "Engrampadora Dorking 90/40",
    "description": "Engrampadora neumática de la Línea 90, mismas aplicaciones que el 90/30 pero con mayor capacidad de cargador para largos de grampa mayores.",
    "price": 0,
    "category_slug": "clavadoras-y-clavos",
    "brand": "Dorking",
    "unit": "unidad",
    "stock": 5,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/dorking/dorking-engrampadora-dorking-90-40.jpg",
    "specs": [
      {
        "label": "Presión de trabajo",
        "value": "5 – 7 bar"
      },
      {
        "label": "Consumo de aire",
        "value": "1,5 L por golpe"
      },
      {
        "label": "Capacidad del cargador",
        "value": "160 grampas"
      },
      {
        "label": "Peso",
        "value": "1,9 kg"
      },
      {
        "label": "Grampa compatible",
        "value": "Grampa 90"
      },
      {
        "label": "Origen",
        "value": "Industria Argentina (Dorking)"
      }
    ],
    "active": true
  },
  {
    "slug": "dorking-engrampadora-dorking-90-40p-piso-de-madera",
    "name": "Engrampadora Dorking 90/40P (piso de madera)",
    "description": "Engrampadora neumática especializada para pisos de madera (flotante/machimbre), diseño compacto para instaladores y carpinteros profesionales.",
    "price": 0,
    "category_slug": "clavadoras-y-clavos",
    "brand": "Dorking",
    "unit": "unidad",
    "stock": 5,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/dorking/dorking-engrampadora-dorking-90-40p-piso-de-madera.jpg",
    "specs": [
      {
        "label": "Presión de trabajo",
        "value": "5 – 8 bar"
      },
      {
        "label": "Consumo de aire",
        "value": "2,0 L por golpe"
      },
      {
        "label": "Capacidad del cargador",
        "value": "80 grampas"
      },
      {
        "label": "Peso",
        "value": "1,4 kg"
      },
      {
        "label": "Grampa compatible",
        "value": "Grampa 90, 15 a 40mm"
      },
      {
        "label": "Origen",
        "value": "Industria Argentina (Dorking)"
      }
    ],
    "active": true
  },
  {
    "slug": "dorking-engrampadora-dorking-92-32",
    "name": "Engrampadora Dorking 92/32",
    "description": "Engrampadora neumática de la Línea 92 para armazones, bandejas, bastidores, cajas, cartelería, embalaje liviano, ataúdes, náutica y mueblería.",
    "price": 0,
    "category_slug": "clavadoras-y-clavos",
    "brand": "Dorking",
    "unit": "unidad",
    "stock": 5,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/dorking/dorking-engrampadora-dorking-92-32.jpg",
    "specs": [
      {
        "label": "Presión de trabajo",
        "value": "5 – 7 bar"
      },
      {
        "label": "Consumo de aire",
        "value": "0,68 L por golpe"
      },
      {
        "label": "Capacidad del cargador",
        "value": "100 grampas"
      },
      {
        "label": "Peso",
        "value": "1,2 kg"
      },
      {
        "label": "Grampa compatible",
        "value": "Grampa 92"
      },
      {
        "label": "Origen",
        "value": "Industria Argentina (Dorking)"
      }
    ],
    "active": true
  },
  {
    "slug": "dorking-engrampadora-dorking-92-40",
    "name": "Engrampadora Dorking 92/40",
    "description": "Engrampadora neumática de la Línea 92, mismas aplicaciones que el 92/32 con mayor capacidad de cargador.",
    "price": 0,
    "category_slug": "clavadoras-y-clavos",
    "brand": "Dorking",
    "unit": "unidad",
    "stock": 5,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/dorking/dorking-engrampadora-dorking-92-40.jpg",
    "specs": [
      {
        "label": "Presión de trabajo",
        "value": "5 – 7 bar"
      },
      {
        "label": "Consumo de aire",
        "value": "1,5 L por golpe"
      },
      {
        "label": "Capacidad del cargador",
        "value": "160 grampas"
      },
      {
        "label": "Peso",
        "value": "1,9 kg"
      },
      {
        "label": "Grampa compatible",
        "value": "Grampa 92"
      },
      {
        "label": "Origen",
        "value": "Industria Argentina (Dorking)"
      }
    ],
    "active": true
  },
  {
    "slug": "dorking-engrampadora-dorking-93-25",
    "name": "Engrampadora Dorking 93/25",
    "description": "Engrampadora neumática de la Línea 93 para alzas de colmenas, armazones, avicultura, bastidores y aplicaciones de embalaje/mueblería livianas.",
    "price": 0,
    "category_slug": "clavadoras-y-clavos",
    "brand": "Dorking",
    "unit": "unidad",
    "stock": 5,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/dorking/dorking-engrampadora-dorking-93-25.jpg",
    "specs": [
      {
        "label": "Presión de trabajo",
        "value": "4 – 6 bar"
      },
      {
        "label": "Consumo de aire",
        "value": "0,5 L por golpe"
      },
      {
        "label": "Capacidad del cargador",
        "value": "142 grampas"
      },
      {
        "label": "Peso",
        "value": "1,2 kg"
      },
      {
        "label": "Grampa compatible",
        "value": "Grampa 93"
      },
      {
        "label": "Origen",
        "value": "Industria Argentina (Dorking)"
      }
    ],
    "active": true
  },
  {
    "slug": "dorking-engrampadora-dorking-100-50",
    "name": "Engrampadora Dorking 100/50",
    "description": "Engrampadora neumática de la Línea 100 para embalaje semipesado y construcción en madera: alzas de colmenas, armazones, bobinas de cables, cajas, cercos, techado, tarimas.",
    "price": 0,
    "category_slug": "clavadoras-y-clavos",
    "brand": "Dorking",
    "unit": "unidad",
    "stock": 5,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/dorking/dorking-engrampadora-dorking-100-50.jpg",
    "specs": [
      {
        "label": "Presión de trabajo",
        "value": "5 – 7 bar"
      },
      {
        "label": "Consumo de aire",
        "value": "1,8 L por golpe"
      },
      {
        "label": "Capacidad del cargador",
        "value": "150 grampas"
      },
      {
        "label": "Peso",
        "value": "2,5 kg"
      },
      {
        "label": "Grampa compatible",
        "value": "Grampa 100"
      },
      {
        "label": "Origen",
        "value": "Industria Argentina (Dorking)"
      }
    ],
    "active": true
  },
  {
    "slug": "dorking-engrampadora-dorking-100-50n",
    "name": "Engrampadora Dorking 100/50N",
    "description": "Engrampadora neumática de la Línea 100, misma familia de aplicaciones de construcción/embalaje que el 100/50, con dimensiones y peso algo menores.",
    "price": 0,
    "category_slug": "clavadoras-y-clavos",
    "brand": "Dorking",
    "unit": "unidad",
    "stock": 5,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/dorking/dorking-engrampadora-dorking-100-50n.jpg",
    "specs": [
      {
        "label": "Presión de trabajo",
        "value": "5 – 7 bar"
      },
      {
        "label": "Consumo de aire",
        "value": "1,89 L por golpe"
      },
      {
        "label": "Capacidad del cargador",
        "value": "140 grampas"
      },
      {
        "label": "Peso",
        "value": "1,94 kg"
      },
      {
        "label": "Grampa compatible",
        "value": "Grampa 100"
      },
      {
        "label": "Origen",
        "value": "Industria Argentina (Dorking)"
      }
    ],
    "active": true
  },
  {
    "slug": "dorking-engrampadora-dorking-plier-88",
    "name": "Engrampadora Dorking PLIER 88",
    "description": "Engrampadora neumática de la Línea 88 para fábrica de colchones, fijación de goma espuma y materiales acolchados/tapizados.",
    "price": 0,
    "category_slug": "clavadoras-y-clavos",
    "brand": "Dorking",
    "unit": "unidad",
    "stock": 5,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/dorking/dorking-engrampadora-dorking-plier-88.jpg",
    "specs": [
      {
        "label": "Presión de trabajo",
        "value": "5 – 6,5 bar"
      },
      {
        "label": "Consumo de aire",
        "value": "0,50 L por golpe"
      },
      {
        "label": "Capacidad del cargador",
        "value": "170 grampas"
      },
      {
        "label": "Peso",
        "value": "2,10 kg"
      },
      {
        "label": "Grampa compatible",
        "value": "Grampa 88"
      },
      {
        "label": "Origen",
        "value": "Industria Argentina (Dorking)"
      }
    ],
    "active": true
  },
  {
    "slug": "dorking-engrampadora-dorking-16wc-38",
    "name": "Engrampadora Dorking 16WC/38",
    "description": "Engrampadora neumática de corona ancha (Wide Crown) para alzas de colmenas, tejuela canadiense, marcos, ataúdes, papel embreado, marcos de puertas/ventanas y armado de cartón corrugado.",
    "price": 0,
    "category_slug": "clavadoras-y-clavos",
    "brand": "Dorking",
    "unit": "unidad",
    "stock": 5,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/dorking/dorking-engrampadora-dorking-16wc-38.jpg",
    "specs": [
      {
        "label": "Presión de trabajo",
        "value": "5 – 7,5 bar"
      },
      {
        "label": "Consumo de aire",
        "value": "1,4 L por golpe"
      },
      {
        "label": "Capacidad del cargador",
        "value": "140 grampas"
      },
      {
        "label": "Peso",
        "value": "3 kg"
      },
      {
        "label": "Grampa compatible",
        "value": "Grampa 16WC"
      },
      {
        "label": "Origen",
        "value": "Industria Argentina (Dorking)"
      }
    ],
    "active": true
  },
];
