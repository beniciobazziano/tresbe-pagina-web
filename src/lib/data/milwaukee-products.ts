import type { Product } from "../types";

/**
 * Catálogo Milwaukee: primero los 108 productos curados a
 * mano por el usuario (nombre real, foto verificada, ficha técnica --
 * investigado en fuentes oficiales, sort_group 1-108),
 * ACTIVOS y en su orden exacto, seguidos por el resto del catálogo del
 * distribuidor Papierttei (268 productos) sin curar
 * todavía, que queda INACTIVO como placeholder para cargar más adelante.
 * Reconstruir la parte curada con el scratchpad de la sesión 72ce4d70,
 * carpeta borrado-ingco/ (investigacion-milwaukee.json + armar-milwaukee.js).
 */
export const milwaukeeProducts: Omit<Product, "id">[] = [
  {
    "slug": "milwaukee-3697259a",
    "name": "Kit M18 FUEL Taladro Percutor 1/2\" + Atornillador de Impacto 1/4\" Hex (2 Baterías 5.0Ah + Cargador + Maletín)",
    "description": "Combo M18 FUEL de 2 herramientas: el taladro percutor de 1/2\" más potente y compacto de su clase (con modo de seguridad AutoStop) junto al atornillador de impacto de 1/4\" hex más veloz de Milwaukee. Incluye 2 baterías, cargador y maletín de transporte.",
    "price": 0,
    "category_slug": "combos",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/3697259a.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "3697-259A"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Sistema",
        "value": "M18 FUEL (18V) - motor brushless POWERSTATE"
      },
      {
        "label": "Taladro percutor - Mandril",
        "value": "1/2\" (13mm) metálico"
      },
      {
        "label": "Taladro percutor - Capacidad autoperforante madera",
        "value": "Hasta 6.5 cm"
      },
      {
        "label": "Atornillador de impacto - Torque máx.",
        "value": "226 Nm (2000 in-lb)"
      },
      {
        "label": "Atornillador de impacto - Velocidad",
        "value": "Hasta 3900 RPM"
      },
      {
        "label": "Baterías incluidas",
        "value": "2x M18 REDLITHIUM XC 5.0Ah"
      },
      {
        "label": "Cargador",
        "value": "M18/M12 multivoltaje"
      },
      {
        "label": "Incluye",
        "value": "Maletín de transporte"
      }
    ],
    "sort_group": 1,
    "active": true
  },
  {
    "slug": "milwaukee-2691259a",
    "name": "Kit M18 Taladro/Atornillador 1/2\" + Atornillador de Impacto 1/4\" Hex (2 Baterías 3.0Ah + Cargador + Maletín)",
    "description": "Combo M18 de 2 herramientas: taladro/atornillador de 13mm y atornillador de impacto hex, con sistema inteligente RedLink que optimiza rendimiento y protege la herramienta. Incluye 2 baterías, cargador y maletín.",
    "price": 0,
    "category_slug": "combos",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/2691259a.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "2691-259A"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Sistema",
        "value": "M18 (18V)"
      },
      {
        "label": "Taladro - Torque máx.",
        "value": "56 Nm (500 in-lb)"
      },
      {
        "label": "Taladro - Velocidad",
        "value": "0-450 / 0-1800 RPM (2 velocidades)"
      },
      {
        "label": "Atornillador impacto - Torque máx.",
        "value": "169 Nm (1500 in-lb)"
      },
      {
        "label": "Baterías incluidas",
        "value": "2x M18 REDLITHIUM XC 3.0Ah"
      },
      {
        "label": "Incluye",
        "value": "Cargador y maletín"
      }
    ],
    "sort_group": 2,
    "active": true
  },
  {
    "slug": "milwaukee-2607259a",
    "name": "Kit M18 Taladro Atornillador Percutor 1/2\" (2 Baterías 3.0Ah + Cargador + Maletín)",
    "description": "Taladro atornillador percutor M18 de 13mm, compacto y potente, con función de percusión para mampostería, luz LED y protección electrónica RedLink. Kit con 2 baterías, cargador rápido y maletín.",
    "price": 0,
    "category_slug": "maquinas-a-bateria",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/2607259a.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "2607-259A"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Sistema",
        "value": "M18 (18V)"
      },
      {
        "label": "Mandril",
        "value": "13mm metálico"
      },
      {
        "label": "Torque máx.",
        "value": "59 Nm"
      },
      {
        "label": "Velocidad",
        "value": "0-400 / 0-1800 RPM (2 velocidades)"
      },
      {
        "label": "Baterías incluidas",
        "value": "2x M18 REDLITHIUM 3.0Ah"
      },
      {
        "label": "Incluye",
        "value": "Maletín de transporte"
      }
    ],
    "sort_group": 3,
    "active": true
  },
  {
    "slug": "milwaukee-2904259a",
    "name": "Kit M18 FUEL Taladro Percutor 1/2\" (2 Baterías 5.0Ah + Cargador Multivoltaje + Maletín)",
    "description": "Taladro percutor M18 FUEL de 1/2\" con motor brushless POWERSTATE, el más compacto de su clase, con modo de seguridad AutoStop que detiene el motor ante un atasco brusco de la mecha. Kit con 2 baterías de alta capacidad, cargador multivoltaje y maletín.",
    "price": 0,
    "category_slug": "maquinas-a-bateria",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/2904259a.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "2904-259A"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Sistema",
        "value": "M18 FUEL (18V) - motor brushless POWERSTATE"
      },
      {
        "label": "Mandril",
        "value": "1/2\" metálico de trinquete"
      },
      {
        "label": "Torque máx.",
        "value": "158 Nm (1400 in-lb)"
      },
      {
        "label": "Percusión",
        "value": "Hasta 33.000 BPM"
      },
      {
        "label": "Peso (solo herramienta)",
        "value": "1.5 kg"
      },
      {
        "label": "Baterías incluidas",
        "value": "2x M18 REDLITHIUM XC 5.0Ah"
      },
      {
        "label": "Cargador",
        "value": "M18/M12 multivoltaje"
      }
    ],
    "sort_group": 4,
    "active": true
  },
  {
    "slug": "milwaukee-2606259ca",
    "name": "Kit M18 Taladro Atornillador Compacto 1/2\" (2 Baterías 1.5Ah + Cargador + Maletín)",
    "description": "Taladro atornillador compacto M18 de 13mm con motor 4 polos sin carcasa, embrague electrónico multi-posición y luz LED integrada. Kit de entrada con 2 baterías compactas, cargador y maletín.",
    "price": 0,
    "category_slug": "maquinas-a-bateria",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/2606259ca.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "2606-259CA"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Sistema",
        "value": "M18 (18V)"
      },
      {
        "label": "Mandril",
        "value": "13mm metálico autoajustable"
      },
      {
        "label": "Torque máx.",
        "value": "56 Nm (500 in-lb)"
      },
      {
        "label": "Capacidad en acero / madera",
        "value": "13 mm / 29 mm"
      },
      {
        "label": "Baterías incluidas",
        "value": "2x M18 REDLITHIUM 1.5Ah"
      },
      {
        "label": "Incluye",
        "value": "Maletín de transporte"
      }
    ],
    "sort_group": 5,
    "active": true
  },
  {
    "slug": "milwaukee-288020",
    "name": "Amoladora Angular M18 FUEL 4-1/2\"/5\" con Freno y Switch de Paleta (Solo Herramienta)",
    "description": "Amoladora angular M18 FUEL de 4-1/2\"/5\" con motor brushless POWERSTATE que iguala la potencia de un modelo a cable (11A), freno RAPIDSTOP que detiene el disco en menos de 2 segundos, y switch de paleta sin traba. Se vende solo la herramienta, sin batería ni cargador.",
    "price": 0,
    "category_slug": "maquinas-a-bateria",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/288020.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "2880-20"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Sistema",
        "value": "M18 (18V)"
      },
      {
        "label": "Motor",
        "value": "POWERSTATE brushless"
      },
      {
        "label": "Velocidad sin carga",
        "value": "8500 RPM"
      },
      {
        "label": "Diámetro de disco",
        "value": "4-1/2\" / 5\""
      },
      {
        "label": "Rosca del eje",
        "value": "5/8\"-11"
      },
      {
        "label": "Freno",
        "value": "RAPIDSTOP (menor a 2 segundos)"
      },
      {
        "label": "Presentación",
        "value": "Solo herramienta (bare tool)"
      }
    ],
    "sort_group": 6,
    "active": true
  },
  {
    "slug": "milwaukee-295320",
    "name": "Atornillador de Impacto M18 FUEL 1/4\" Hex (Solo Herramienta)",
    "description": "Atornillador de impacto M18 FUEL de 1/4\" hex con motor brushless POWERSTATE, la mayor velocidad de atornillado de su categoría, control de gatillo para fijaciones pequeñas y 4 modos de manejo. Se vende solo la herramienta.",
    "price": 0,
    "category_slug": "maquinas-a-bateria",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/295320.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "2953-20"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Sistema",
        "value": "M18 FUEL (18V)"
      },
      {
        "label": "Torque máx.",
        "value": "226 Nm (2000 in-lb)"
      },
      {
        "label": "Velocidad",
        "value": "0-3900 RPM"
      },
      {
        "label": "Impactos por minuto",
        "value": "0-4400 IPM"
      },
      {
        "label": "Peso",
        "value": "1.0 kg (2.2 lb)"
      },
      {
        "label": "Presentación",
        "value": "Solo herramienta (bare tool)"
      }
    ],
    "sort_group": 7,
    "active": true
  },
  {
    "slug": "milwaukee-286620",
    "name": "Atornillador para Durlock (Drywall) M18 FUEL (Solo Herramienta)",
    "description": "Atornillador para placas de yeso/durlock M18 FUEL con motor brushless POWERSTATE a 4500 RPM y función AUTO START que arranca el motor al contacto con la placa. Se vende solo la herramienta.",
    "price": 0,
    "category_slug": "maquinas-a-bateria",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/286620.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "2866-20"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Sistema",
        "value": "M18 FUEL (18V)"
      },
      {
        "label": "Velocidad",
        "value": "4500 RPM"
      },
      {
        "label": "Función especial",
        "value": "AUTO START (arranque al contacto)"
      },
      {
        "label": "Autonomía con batería XC5.0",
        "value": "64 placas por carga"
      },
      {
        "label": "Incluye",
        "value": "Clip de cinturón y punta PR2"
      }
    ],
    "sort_group": 8,
    "active": true
  },
  {
    "slug": "milwaukee-260620",
    "name": "Taladro Atornillador Compacto M18 1/2\" (Solo Herramienta)",
    "description": "Taladro atornillador compacto M18 de 1/2\", con motor Milwaukee de 4 polos sin carcasa que entrega 500 in-lb de torque, caja de engranajes y mandril totalmente metálicos, e inteligencia REDLINK. Se vende solo la herramienta.",
    "price": 0,
    "category_slug": "maquinas-a-bateria",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/260620.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "2606-20"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Sistema",
        "value": "M18 (18V)"
      },
      {
        "label": "Mandril",
        "value": "1/2\" metálico"
      },
      {
        "label": "Torque máx.",
        "value": "56 Nm (500 in-lb)"
      },
      {
        "label": "Peso (solo herramienta)",
        "value": "1.6 kg"
      },
      {
        "label": "Motor",
        "value": "4 polos sin carcasa (frameless)"
      }
    ],
    "sort_group": 9,
    "active": true
  },
  {
    "slug": "milwaukee-26411592606p",
    "name": "Kit Combo Milwaukee M18: Pistola Aplicadora de Silicona/Calafateo + Taladro Atornillador Compacto 1/2\"",
    "description": "Kit combinado Milwaukee M18 que reúne dos herramientas a batería: la pistola aplicadora de silicona/sellador (950 lbs de fuerza de empuje) y el taladro atornillador compacto de 1/2\" (500 in-lbs de torque). Ideal para tareas de instalación, sellado y fijación en obra.",
    "price": 0,
    "category_slug": "combos",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/26411592606p.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "2641159-2606P"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Voltaje",
        "value": "18V (M18)"
      },
      {
        "label": "Herramienta 1",
        "value": "Pistola aplicadora de silicona/calafecto M18"
      },
      {
        "label": "Herramienta 2",
        "value": "Taladro atornillador compacto M18 1/2\""
      },
      {
        "label": "Fuerza de empuje (pistola)",
        "value": "950 lbs"
      },
      {
        "label": "Velocidad de flujo (pistola)",
        "value": "0-21 IPM, 6 posiciones"
      },
      {
        "label": "Cartuchos compatibles",
        "value": "10 oz, 1/4 galón y salchichas de 20 oz"
      },
      {
        "label": "Torque (taladro)",
        "value": "56 Nm (500 in-lbs)"
      },
      {
        "label": "Incluye",
        "value": "Batería(s) M18, cargador y bolso de transporte"
      }
    ],
    "sort_group": 10,
    "active": true
  },
  {
    "slug": "milwaukee-ag750115a",
    "name": "Amoladora Angular Milwaukee 115mm (4-1/2\"), 750W",
    "description": "Amoladora angular compacta y liviana de 750W para corte, desbaste y acabado de materiales ferrosos. Cuenta con ajuste del protector de disco sin necesidad de llave, mango lateral y llave de cambio de disco incluidos.",
    "price": 0,
    "category_slug": "maquinas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/ag750115a.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "AG 750-115 A"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Potencia",
        "value": "750W"
      },
      {
        "label": "Diámetro de disco",
        "value": "115mm (4-1/2\")"
      },
      {
        "label": "Rosca de husillo",
        "value": "M14"
      },
      {
        "label": "Velocidad en vacío",
        "value": "10.000-11.000 RPM"
      },
      {
        "label": "Peso",
        "value": "1,6-1,8 kg"
      },
      {
        "label": "Voltaje",
        "value": "220V-240V"
      },
      {
        "label": "Incluye",
        "value": "Mango lateral y llave de cambio de disco"
      }
    ],
    "sort_group": 11,
    "active": true
  },
  {
    "slug": "milwaukee-608659a",
    "name": "Amoladora Angular Milwaukee 180mm (7\"), 2200W",
    "description": "Amoladora angular de uso industrial de 180mm (7\") con motor de 2200W y 8.500 RPM. Engranajes cónicos en espiral para máxima transferencia de torque, bobinas de motor recubiertas en epoxi para mayor durabilidad y caja de engranajes de bajo perfil. Interruptor gatillo con traba de 2 dedos.",
    "price": 0,
    "category_slug": "maquinas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/608659a.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "6086-59A"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Potencia",
        "value": "2.200W"
      },
      {
        "label": "Voltaje",
        "value": "220-240V"
      },
      {
        "label": "Velocidad",
        "value": "8.500 RPM"
      },
      {
        "label": "Diámetro máx. de disco",
        "value": "180mm (7\")"
      },
      {
        "label": "Rosca de husillo",
        "value": "M14"
      },
      {
        "label": "Peso",
        "value": "4,9 kg"
      },
      {
        "label": "Incluye",
        "value": "Llave y mango lateral de 2 posiciones"
      }
    ],
    "sort_group": 12,
    "active": true
  },
  {
    "slug": "milwaukee-608759a",
    "name": "Amoladora Angular Milwaukee 230mm (9\"), 2200W",
    "description": "Amoladora angular industrial de 230mm (9\") con motor de 2200W y 6.600 RPM. Cabezal metálico plano, caja de engranajes de aleación de magnesio para bajo nivel de vibración, rodamientos y switch protegidos contra el polvo, y traba de eje para cambio rápido de disco.",
    "price": 0,
    "category_slug": "maquinas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/608759a.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "6087-59A"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Potencia",
        "value": "2.200W"
      },
      {
        "label": "Velocidad",
        "value": "6.600 RPM"
      },
      {
        "label": "Diámetro máx. de disco",
        "value": "230mm (9\")"
      },
      {
        "label": "Rosca de husillo",
        "value": "M14"
      },
      {
        "label": "Profundidad máx. de corte",
        "value": "43mm"
      },
      {
        "label": "Peso",
        "value": "4,9 kg"
      },
      {
        "label": "Incluye",
        "value": "Mango lateral ergonómico y llave"
      }
    ],
    "sort_group": 13,
    "active": true
  },
  {
    "slug": "milwaukee-278520",
    "name": "Amoladora Angular Grande M18 FUEL 7\"/9\" (Solo Herramienta)",
    "description": "Primera amoladora angular grande de 18V del mercado, con motor sin escobillas POWERSTATE que entrega rendimiento equivalente a una amoladora a cable de 15A. Cambio de accesorios y ajuste de protector 100% sin herramientas mediante tuerca FIXTEC. No incluye batería ni cargador.",
    "price": 0,
    "category_slug": "maquinas-a-bateria",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/278520.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "2785-20"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Voltaje",
        "value": "18V (M18)"
      },
      {
        "label": "Motor",
        "value": "POWERSTATE sin escobillas"
      },
      {
        "label": "Velocidad",
        "value": "6.600 RPM"
      },
      {
        "label": "Capacidad de disco",
        "value": "7\" a 9\""
      },
      {
        "label": "Equivalencia de potencia",
        "value": "15A (a cable)"
      },
      {
        "label": "Presentación",
        "value": "Solo herramienta (bare tool)"
      }
    ],
    "sort_group": 14,
    "active": true
  },
  {
    "slug": "milwaukee-611759a",
    "name": "Amoladora Angular Milwaukee 115mm (4-1/2\"), 1550W, Velocidad Variable",
    "description": "Amoladora angular de 115mm con motor potente de 1550W y velocidad variable electrónica (2.800-11.000 RPM). Incorpora protección contra sobrecarga, embrague electrónico, arranque suave y traba de eje.",
    "price": 0,
    "category_slug": "maquinas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/611759a.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "6117-59A"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Voltaje",
        "value": "220V 50Hz"
      },
      {
        "label": "Potencia",
        "value": "1.550W"
      },
      {
        "label": "Rango de velocidad",
        "value": "2.800-11.000 RPM (variable)"
      },
      {
        "label": "Diámetro de disco",
        "value": "115mm (4-1/2\")"
      },
      {
        "label": "Rosca de husillo",
        "value": "M14"
      },
      {
        "label": "Peso",
        "value": "2,6 kg"
      }
    ],
    "sort_group": 15,
    "active": true
  },
  {
    "slug": "milwaukee-298620",
    "name": "Amoladora M18 FUEL 4-1/2\"/5\" Doble Gatillo con Freno (Solo Herramienta)",
    "description": "Amoladora inalámbrica con activación de doble gatillo (uso a dos manos), mango lateral permanente de 15 posiciones, control de retroceso AUTOSTOP y freno RAPIDSTOP que detiene el disco en 1 segundo o menos. Compatible con ONE-KEY. No incluye batería ni cargador.",
    "price": 0,
    "category_slug": "maquinas-a-bateria",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/298620.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "2986-20"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Voltaje",
        "value": "18V (M18)"
      },
      {
        "label": "Motor",
        "value": "POWERSTATE sin escobillas"
      },
      {
        "label": "Velocidad",
        "value": "3.500-8.500 RPM (4 modos)"
      },
      {
        "label": "Capacidad de disco",
        "value": "4-1/2\" o 5\""
      },
      {
        "label": "Seguridad",
        "value": "AUTOSTOP anti-retroceso, freno RAPIDSTOP"
      },
      {
        "label": "Presentación",
        "value": "Solo herramienta (bare tool)"
      }
    ],
    "sort_group": 16,
    "active": true
  },
  {
    "slug": "milwaukee-2986259",
    "name": "Kit Amoladora M18 FUEL Doble Gatillo 5\" con 2 Baterías 6.0Ah, Cargador y Bolso",
    "description": "Kit completo de la amoladora angular M18 FUEL de doble gatillo (5\"/125mm), con motor sin escobillas de 8.500 RPM, control de retroceso AUTOSTOP y freno RAPIDSTOP. Incluye 2 baterías M18 REDLITHIUM FORGE XC 6.0Ah, cargador rápido doble y bolso de transporte.",
    "price": 0,
    "category_slug": "maquinas-a-bateria",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/2986259.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "2986-259"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Voltaje",
        "value": "18V (M18)"
      },
      {
        "label": "Velocidad",
        "value": "3.500-8.500 RPM (4 modos)"
      },
      {
        "label": "Capacidad de disco",
        "value": "5\" (125mm)"
      },
      {
        "label": "Baterías incluidas",
        "value": "2 x M18 REDLITHIUM FORGE XC 6.0Ah"
      },
      {
        "label": "Cargador incluido",
        "value": "Cargador rápido doble M18"
      },
      {
        "label": "Incluye además",
        "value": "Bolso de transporte"
      }
    ],
    "sort_group": 17,
    "active": true
  },
  {
    "slug": "milwaukee-643059a",
    "name": "Sierra Circular Milwaukee 184mm (7-1/4\"), 1600W",
    "description": "Sierra circular eléctrica de 1600W para trabajos pesados en madera, con disco de 184mm (7-1/4\"). Base de aluminio robusta, protecciones de magnesio y guía ajustable para cortes en bisel de 0° a 45° (hasta 56° con tope positivo a 45°). Se entrega con disco de carburo de 24 dientes.",
    "price": 0,
    "category_slug": "maquinas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/643059a.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "6430-59A"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Potencia",
        "value": "1.600W"
      },
      {
        "label": "Voltaje",
        "value": "220V"
      },
      {
        "label": "Diámetro de disco",
        "value": "184mm (7-1/4\")"
      },
      {
        "label": "Peso",
        "value": "5 kg"
      },
      {
        "label": "Profundidad de corte a 90°",
        "value": "0-60mm"
      },
      {
        "label": "Capacidad de bisel",
        "value": "56°, con tope positivo a 45°"
      },
      {
        "label": "Incluye",
        "value": "Disco de carburo de 24 dientes, llave de ajuste"
      }
    ],
    "sort_group": 18,
    "active": true
  },
  {
    "slug": "milwaukee-263120",
    "name": "Sierra Circular M18 FUEL 7-1/4\" (Solo Herramienta)",
    "description": "Sierra circular inalámbrica M18 FUEL de 7-1/4\", con motor brushless POWERSTATE, gancho para cabrio integrado, guarda de magnesio y zapata de aluminio con luz LED. No incluye batería ni cargador.",
    "price": 0,
    "category_slug": "maquinas-a-bateria",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/263120.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "2631-20"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Voltaje",
        "value": "18V (M18)"
      },
      {
        "label": "Motor",
        "value": "Brushless POWERSTATE"
      },
      {
        "label": "Velocidad",
        "value": "5.000 RPM"
      },
      {
        "label": "Diámetro de hoja",
        "value": "7-1/4\" (184 mm)"
      },
      {
        "label": "Peso",
        "value": "9 lb (4,1 kg)"
      },
      {
        "label": "Presentación",
        "value": "Solo herramienta (bare tool)"
      }
    ],
    "sort_group": 19,
    "active": true
  },
  {
    "slug": "milwaukee-252220",
    "name": "Amoladora/Cortadora Compacta M12 FUEL 3\" (Solo Herramienta)",
    "description": "Cortadora compacta inalámbrica M12 FUEL de 3\", diseñada para uso a una mano, con motor brushless POWERSTATE, rotación de disco reversible y guarda sin herramientas con adaptador para aspiración. No incluye batería ni cargador.",
    "price": 0,
    "category_slug": "maquinas-a-bateria",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/252220.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "2522-20"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Voltaje",
        "value": "12V (M12)"
      },
      {
        "label": "Motor",
        "value": "Brushless POWERSTATE"
      },
      {
        "label": "Velocidad",
        "value": "20.000 RPM"
      },
      {
        "label": "Diámetro de disco",
        "value": "3\""
      },
      {
        "label": "Profundidad máx. de corte",
        "value": "0,64\" (16 mm)"
      },
      {
        "label": "Peso",
        "value": "1,52 lb (0,69 kg)"
      },
      {
        "label": "Presentación",
        "value": "Solo herramienta"
      }
    ],
    "sort_group": 20,
    "active": true
  },
  {
    "slug": "milwaukee-244720",
    "name": "Engrapadora de Corona M12 3/8\" (Solo Herramienta)",
    "description": "Engrapadora inalámbrica M12 de corona 3/8\", pensada como reemplazo de herramienta manual. Dispara grampas de corona plana de 1/4\" a 9/16\". Gatillo con modo secuencial y de contacto. No incluye batería ni cargador.",
    "price": 0,
    "category_slug": "maquinas-a-bateria",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/244720.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "2447-20"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Voltaje",
        "value": "12V (M12)"
      },
      {
        "label": "Tipo de grampa",
        "value": "Corona 3/8\""
      },
      {
        "label": "Rango de grampa",
        "value": "1/4\" a 9/16\""
      },
      {
        "label": "Capacidad por carga",
        "value": "Hasta 1.500 grampas"
      },
      {
        "label": "Peso",
        "value": "3 lb (1,36 kg)"
      },
      {
        "label": "Presentación",
        "value": "Solo herramienta"
      }
    ],
    "sort_group": 21,
    "active": true
  },
  {
    "slug": "milwaukee-274920",
    "name": "Engrapadora de Corona Estrecha M18 FUEL 18GA 1/4\" (Solo Herramienta)",
    "description": "Engrapadora inalámbrica M18 FUEL de corona estrecha 1/4\", calibre 18, con motor brushless POWERSTATE y tecnología REDLINK PLUS, sin necesidad de cartucho de gas. Dispara grampas de 3/8\" a 1-1/2\". No incluye batería ni cargador.",
    "price": 0,
    "category_slug": "maquinas-a-bateria",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/274920.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "2749-20"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Voltaje",
        "value": "18V (M18)"
      },
      {
        "label": "Motor",
        "value": "Brushless POWERSTATE"
      },
      {
        "label": "Calibre / Corona",
        "value": "18GA, corona 1/4\""
      },
      {
        "label": "Rango de grampa",
        "value": "3/8\" a 1-1/2\""
      },
      {
        "label": "Peso",
        "value": "5,4 lb (2,45 kg)"
      },
      {
        "label": "Presentación",
        "value": "Solo herramienta"
      }
    ],
    "sort_group": 22,
    "active": true
  },
  {
    "slug": "milwaukee-548559a",
    "name": "Rotomartillo Milwaukee SDS-Plus 800W 24mm",
    "description": "Rotomartillo eléctrico con cable, SDS-Plus, de 800W, con tres modos de operación (rotopercusión, solo percusión, solo rotación). Ideal para perforación y cincelado liviano en hormigón y mampostería. Incluye empuñadura lateral y tope de profundidad.",
    "price": 0,
    "category_slug": "maquinas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/548559a.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "5485-59A"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Potencia",
        "value": "800W"
      },
      {
        "label": "Voltaje",
        "value": "220V"
      },
      {
        "label": "Energía de impacto",
        "value": "2,4 J"
      },
      {
        "label": "Mandril",
        "value": "SDS-Plus"
      },
      {
        "label": "Capacidad máx. en hormigón",
        "value": "24 mm"
      },
      {
        "label": "Peso",
        "value": "2,6 kg"
      },
      {
        "label": "Garantía",
        "value": "3 años"
      }
    ],
    "sort_group": 23,
    "active": true
  },
  {
    "slug": "milwaukee-291220",
    "name": "Rotomartillo M18 FUEL SDS-Plus 1\" (Solo Herramienta)",
    "description": "Rotomartillo inalámbrico M18 FUEL SDS-Plus de 1\", con motor brushless POWERSTATE, sistema AUTOSTOP de control de contragolpe y sistema anti-vibración AVS. Tres modos: rotopercusión, solo percusión, solo rotación. No incluye batería ni cargador.",
    "price": 0,
    "category_slug": "maquinas-a-bateria",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/291220.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "2912-20"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Voltaje",
        "value": "18V (M18)"
      },
      {
        "label": "Motor",
        "value": "Brushless POWERSTATE"
      },
      {
        "label": "Energía de impacto",
        "value": "2 ft-lbs"
      },
      {
        "label": "Mandril",
        "value": "SDS-Plus"
      },
      {
        "label": "Peso",
        "value": "6,8 lb (3,08 kg)"
      },
      {
        "label": "Presentación",
        "value": "Solo herramienta"
      }
    ],
    "sort_group": 24,
    "active": true
  },
  {
    "slug": "milwaukee-271720",
    "name": "Rotomartillo M18 FUEL SDS-Max 1-9/16\" (Solo Herramienta)",
    "description": "Rotomartillo inalámbrico M18 FUEL SDS-Max de 1-9/16\", con motor brushless POWERSTATE y más de 20 minutos de cincelado continuo por carga. Tres modos: rotopercusión, cincelado, 12 ángulos de cincelado. No incluye batería ni cargador.",
    "price": 0,
    "category_slug": "maquinas-a-bateria",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/271720.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "2717-20"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Voltaje",
        "value": "18V (M18)"
      },
      {
        "label": "Motor",
        "value": "Brushless POWERSTATE"
      },
      {
        "label": "Energía de impacto",
        "value": "5 ft-lbs"
      },
      {
        "label": "Mandril",
        "value": "SDS-Max"
      },
      {
        "label": "Peso",
        "value": "12,15 lb (5,51 kg)"
      },
      {
        "label": "Presentación",
        "value": "Solo herramienta"
      }
    ],
    "sort_group": 25,
    "active": true
  },
  {
    "slug": "milwaukee-531759a",
    "name": "Rotomartillo Milwaukee SDS-Max 1100W 40mm",
    "description": "Rotomartillo eléctrico con cable, SDS-Max, de 1100W, para perforación con percusión y cincelado en hormigón y mampostería pesada. Incluye embrague de seguridad y maletín plástico.",
    "price": 0,
    "category_slug": "maquinas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/531759a.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "5317-59A"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Potencia",
        "value": "1100W"
      },
      {
        "label": "Voltaje",
        "value": "220V"
      },
      {
        "label": "Energía de impacto",
        "value": "7,5 J"
      },
      {
        "label": "Mandril",
        "value": "SDS-Max"
      },
      {
        "label": "Capacidad máx. en hormigón",
        "value": "40 mm"
      },
      {
        "label": "Peso",
        "value": "7 kg"
      },
      {
        "label": "Incluye",
        "value": "Empuñadura auxiliar, maletín plástico"
      }
    ],
    "sort_group": 26,
    "active": true
  },
  {
    "slug": "milwaukee-286420",
    "name": "Llave de Impacto M18 FUEL ONE-KEY 3/4\" Alto Torque (Solo Herramienta)",
    "description": "Llave de impacto inalámbrica M18 FUEL de alto torque, 3/4\" con anillo de fricción, motor brushless POWERSTATE y conectividad ONE-KEY. No incluye batería ni cargador.",
    "price": 0,
    "category_slug": "maquinas-a-bateria",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/286420.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "2864-20"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Voltaje",
        "value": "18V (M18)"
      },
      {
        "label": "Torque máx. de ajuste",
        "value": "1.200 ft-lbs"
      },
      {
        "label": "Velocidad",
        "value": "0-1.800 rpm"
      },
      {
        "label": "Peso",
        "value": "6,3 lb (2,86 kg)"
      },
      {
        "label": "Conectividad",
        "value": "ONE-KEY"
      },
      {
        "label": "Presentación",
        "value": "Solo herramienta"
      }
    ],
    "sort_group": 27,
    "active": true
  },
  {
    "slug": "milwaukee-48111850",
    "name": "Milwaukee M18 REDLITHIUM XC5.0 - Batería 18V 5.0Ah",
    "description": "Batería de iones de litio M18 de capacidad extendida. Ofrece hasta 2.5 veces más autonomía, 20% más potencia y el doble de recargas que una batería de litio estándar.",
    "price": 0,
    "category_slug": "baterias-y-cargadores",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48111850.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "4811-1850"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Voltaje",
        "value": "18V"
      },
      {
        "label": "Capacidad",
        "value": "5.0 Ah"
      },
      {
        "label": "Química",
        "value": "Litio-Ion (REDLITHIUM)"
      },
      {
        "label": "Compatibilidad",
        "value": "Sistema M18 (más de 300 herramientas)"
      },
      {
        "label": "Indicador",
        "value": "Medidor de combustible integrado"
      }
    ],
    "sort_group": 28,
    "active": true
  },
  {
    "slug": "milwaukee-48111880",
    "name": "Milwaukee M18 REDLITHIUM HIGH OUTPUT XC8.0 - Batería 18V 8.0Ah",
    "description": "Batería de la línea HIGH OUTPUT, la gama más potente del sistema M18. Entrega 50% más potencia y funciona 50% más fresca que las baterías REDLITHIUM XC estándar.",
    "price": 0,
    "category_slug": "baterias-y-cargadores",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48111880.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "4811-1880"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Voltaje",
        "value": "18V"
      },
      {
        "label": "Capacidad",
        "value": "8.0 Ah"
      },
      {
        "label": "Química",
        "value": "Litio-Ion (REDLITHIUM HIGH OUTPUT)"
      },
      {
        "label": "Peso",
        "value": "1.06 kg"
      },
      {
        "label": "Garantía",
        "value": "3 años"
      }
    ],
    "sort_group": 29,
    "active": true
  },
  {
    "slug": "milwaukee-2420259a",
    "name": "Milwaukee M12 HACKZALL - Sierra Sable 12V (Kit con 2 Baterías, Cargador y Maletín)",
    "description": "Sierra sable compacta y liviana M12 HACKZALL, ideal para cortes rápidos en espacios reducidos. Kit con 2 baterías M12 de 2.0Ah, cargador y maletín plástico.",
    "price": 0,
    "category_slug": "maquinas-a-bateria",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/2420259a.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "2420-259A"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Voltaje",
        "value": "12V"
      },
      {
        "label": "Golpes por minuto",
        "value": "0-3000 spm"
      },
      {
        "label": "Longitud de carrera",
        "value": "1/2 in (13 mm)"
      },
      {
        "label": "Peso",
        "value": "2.6 lb (1.2 kg)"
      },
      {
        "label": "Incluye",
        "value": "2 baterías M12 2.0Ah, cargador y maletín"
      }
    ],
    "sort_group": 30,
    "active": true
  },
  {
    "slug": "milwaukee-271920",
    "name": "Milwaukee M18 FUEL HACKZALL - Sierra Sable 18V (Solo Herramienta)",
    "description": "Sierra sable compacta de una mano con motor sin escobillas POWERSTATE y sistema REDLINK PLUS. Corta hasta 50% más rápido que la competencia y ofrece hasta 4 veces menos vibración.",
    "price": 0,
    "category_slug": "maquinas-a-bateria",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/271920.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "2719-20"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Voltaje",
        "value": "18V"
      },
      {
        "label": "Golpes por minuto",
        "value": "0-3000 spm"
      },
      {
        "label": "Longitud de carrera",
        "value": "7/8 in (22 mm)"
      },
      {
        "label": "Peso",
        "value": "4.07 lb (1.85 kg), sin batería"
      },
      {
        "label": "Presentación",
        "value": "Solo herramienta (bare tool)"
      }
    ],
    "sort_group": 31,
    "active": true
  },
  {
    "slug": "milwaukee-282120",
    "name": "Milwaukee M18 FUEL SAWZALL - Sierra Recíproca 18V (Solo Herramienta)",
    "description": "Sierra recíproca de mango D con motor sin escobillas POWERSTATE, diseñada para trabajo pesado. Carrera larga de 1-1/4\" para remover material más rápido, luz LED integrada y gancho para colgar.",
    "price": 0,
    "category_slug": "maquinas-a-bateria",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/282120.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "2821-20"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Voltaje",
        "value": "18V"
      },
      {
        "label": "Golpes por minuto",
        "value": "3000 spm"
      },
      {
        "label": "Longitud de carrera",
        "value": "1-1/4 in (32 mm)"
      },
      {
        "label": "Peso",
        "value": "6.8 lb (3.1 kg), sin batería"
      },
      {
        "label": "Presentación",
        "value": "Solo herramienta (bare tool)"
      }
    ],
    "sort_group": 32,
    "active": true
  },
  {
    "slug": "milwaukee-48228427",
    "name": "Milwaukee PACKOUT Caja Rodante con Ruedas (Rolling Tool Box)",
    "description": "Caja de herramientas rodante del sistema modular PACKOUT, con capacidad de carga de 250 lb, ruedas todo terreno de 9\" y manija colapsable de bajo perfil. Se conecta a todos los demás componentes PACKOUT.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48228427.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "48-22-8427"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Capacidad de carga",
        "value": "250 lb (113 kg)"
      },
      {
        "label": "Dimensiones exteriores",
        "value": "55.9 x 45.7 x 49.5 cm"
      },
      {
        "label": "Ruedas",
        "value": "2 ruedas todo terreno de 9\""
      },
      {
        "label": "Sello climático",
        "value": "IP65"
      },
      {
        "label": "Garantía",
        "value": "Limitada de por vida"
      }
    ],
    "sort_group": 33,
    "active": true
  },
  {
    "slug": "milwaukee-48228425",
    "name": "Milwaukee PACKOUT Caja de Herramientas Grande (Large Tool Box)",
    "description": "Caja de herramientas grande del sistema modular PACKOUT, con capacidad de 100 lb y bandeja organizadora interior. Se apila y conecta con el resto de los componentes PACKOUT.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48228425.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "48-22-8425"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Capacidad de carga",
        "value": "100 lb (45.4 kg)"
      },
      {
        "label": "Dimensiones exteriores",
        "value": "56.1 x 41.1 x 28.2 cm"
      },
      {
        "label": "Sello climático",
        "value": "IP65"
      },
      {
        "label": "Extras",
        "value": "Bandeja organizadora interior"
      }
    ],
    "sort_group": 34,
    "active": true
  },
  {
    "slug": "milwaukee-48228435",
    "name": "Milwaukee PACKOUT Organizador Compacto (Compact Organizer)",
    "description": "Organizador compacto del sistema PACKOUT con 5 contenedores removibles para piezas pequeñas y accesorios. Tapa transparente sellada que evita que el contenido se mueva durante el transporte.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48228435.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "48-22-8435"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Compartimentos",
        "value": "5 contenedores removibles (4 chicos + 1 grande)"
      },
      {
        "label": "Dimensiones exteriores",
        "value": "24.9 x 38.6 x 11.7 cm"
      },
      {
        "label": "Peso",
        "value": "1.54 kg"
      },
      {
        "label": "Sello climático",
        "value": "IP65"
      }
    ],
    "sort_group": 35,
    "active": true
  },
  {
    "slug": "milwaukee-48228423",
    "name": "Milwaukee PACKOUT Caja de Herramientas XL (XL Tool Box)",
    "description": "Caja de herramientas de mayor tamaño del sistema modular PACKOUT, con capacidad de 100 lb, ideal para herramientas voluminosas o mayor cantidad de accesorios. Se conecta con el resto de los componentes PACKOUT.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48228423.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "48-22-8423"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Capacidad de carga",
        "value": "100 lb (45.4 kg)"
      },
      {
        "label": "Dimensiones exteriores",
        "value": "55.4 x 42.9 x 39.4 cm aprox."
      },
      {
        "label": "Sello climático",
        "value": "IP65"
      },
      {
        "label": "Extras",
        "value": "Bandeja organizadora interior, manija reforzada en metal"
      }
    ],
    "sort_group": 36,
    "active": true
  },
  {
    "slug": "milwaukee-48228432",
    "name": "Milwaukee PACKOUT Organizador Profundo (Deep Organizer)",
    "description": "Organizador profundo del sistema modular PACKOUT con 6 compartimentos y divisores Quick-Adjust, pensado para piezas de mayor volumen. Tapa transparente sellada y construcción resistente a impactos.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48228432.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "48-22-8432"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Dimensiones exteriores",
        "value": "500 x 386 x 178 mm"
      },
      {
        "label": "Compartimentos",
        "value": "6, con divisores ajustables Quick-Adjust"
      },
      {
        "label": "Capacidad de carga",
        "value": "50 lb (22.7 kg)"
      },
      {
        "label": "Protección",
        "value": "Sello climático IP65"
      }
    ],
    "sort_group": 37,
    "active": true
  },
  {
    "slug": "milwaukee-48228431",
    "name": "Milwaukee PACKOUT Organizador Bajo Perfil (Low-Profile Organizer)",
    "description": "Organizador delgado (perfil bajo) del sistema PACKOUT con 10 compartimentos removibles y divisores, más un canal central para mechas y hojas largas. Ideal para apilar sobre otros módulos.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48228431.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "48-22-8431"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Dimensiones exteriores",
        "value": "500 x 414 x 64 mm"
      },
      {
        "label": "Compartimentos",
        "value": "10 bins removibles (8 chicos + 2 grandes)"
      },
      {
        "label": "Peso vacío",
        "value": "2.06 kg"
      },
      {
        "label": "Protección",
        "value": "Sello climático IP65"
      }
    ],
    "sort_group": 38,
    "active": true
  },
  {
    "slug": "milwaukee-48228422",
    "name": "Milwaukee PACKOUT Caja de Herramientas Compacta (Compact Tool Box)",
    "description": "Caja de herramientas compacta y portátil del sistema PACKOUT, con bandeja interior y divisores ajustables. Se conecta a otros módulos PACKOUT, ideal como caja individual de transporte de mano.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48228422.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "48-22-8422"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Dimensiones exteriores",
        "value": "16-1/4\" x 10\" x 13\""
      },
      {
        "label": "Capacidad de carga",
        "value": "75 lb (34 kg)"
      },
      {
        "label": "Protección",
        "value": "Sello climático IP65"
      },
      {
        "label": "Extra",
        "value": "Bandeja interior + divisores Quick-Adjust"
      }
    ],
    "sort_group": 39,
    "active": true
  },
  {
    "slug": "milwaukee-48228430",
    "name": "Milwaukee PACKOUT Organizador Estándar",
    "description": "Organizador estándar del sistema PACKOUT con 10 compartimentos removibles, canal central para mechas/hojas largas y ranuras para montaje en pared. Es el organizador de tamaño intermedio de la línea.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48228430.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "48-22-8430"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Dimensiones exteriores",
        "value": "500 x 386 x 117 mm"
      },
      {
        "label": "Compartimentos",
        "value": "10 bins removibles (8 chicos + 2 grandes)"
      },
      {
        "label": "Capacidad de carga",
        "value": "75 lb (34 kg)"
      },
      {
        "label": "Protección",
        "value": "Sello climático IP65"
      }
    ],
    "sort_group": 40,
    "active": true
  },
  {
    "slug": "milwaukee-48228424",
    "name": "Milwaukee PACKOUT Caja de Herramientas y Accesorios (Tool Box)",
    "description": "Caja de herramientas de tamaño completo del sistema PACKOUT, con esquinas reforzadas en metal, bandejas organizadoras internas y cierres resistentes.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48228424.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "48-22-8424"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Dimensiones exteriores",
        "value": "561 x 411 x 165 mm"
      },
      {
        "label": "Capacidad de carga",
        "value": "75 lb (34 kg)"
      },
      {
        "label": "Peso propio",
        "value": "4.6 kg"
      },
      {
        "label": "Protección",
        "value": "Sello climático IP65"
      }
    ],
    "sort_group": 41,
    "active": true
  },
  {
    "slug": "milwaukee-48228436",
    "name": "Milwaukee PACKOUT Organizador Compacto Bajo Perfil",
    "description": "Versión angosta y de perfil bajo del organizador PACKOUT, con 5 compartimentos removibles. Pensado para tornillos, brocas y piezas pequeñas cuando no se necesita el ancho completo.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48228436.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "48-22-8436"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Dimensiones exteriores",
        "value": "250 x 411 x 64 mm"
      },
      {
        "label": "Compartimentos",
        "value": "5 bins removibles (4 chicos + 1 grande)"
      },
      {
        "label": "Peso vacío",
        "value": "1.5 kg"
      },
      {
        "label": "Protección",
        "value": "Sello climático IP65"
      }
    ],
    "sort_group": 42,
    "active": true
  },
  {
    "slug": "milwaukee-48228450",
    "name": "Milwaukee PACKOUT Maletín Rígido con Espuma Personalizable (Tool Case)",
    "description": "Maletín rígido del sistema PACKOUT con inserto de espuma recortable, para proteger y transportar herramientas, instrumentos de medición o equipos delicados.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48228450.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "48-22-8450"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Dimensiones exteriores",
        "value": "526 x 386 x 157 mm"
      },
      {
        "label": "Capacidad de carga",
        "value": "75 lb (34 kg)"
      },
      {
        "label": "Incluye",
        "value": "Inserto de espuma personalizable"
      },
      {
        "label": "Protección",
        "value": "Sello climático IP65"
      }
    ],
    "sort_group": 43,
    "active": true
  },
  {
    "slug": "milwaukee-48228442",
    "name": "Milwaukee PACKOUT Caja de Herramientas de 2 Cajones",
    "description": "Caja de herramientas con 2 cajones deslizables sobre rodamientos metálicos, con barra de seguridad para candado y divisores Quick-Adjust. Parte superior plana para apilar otros módulos.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48228442.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "48-22-8442"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Dimensiones exteriores",
        "value": "565 x 413 x 362 mm"
      },
      {
        "label": "Capacidad de carga",
        "value": "50 lb (22.7 kg)"
      },
      {
        "label": "Cajones",
        "value": "2, sobre corredizas metálicas de bolillas"
      },
      {
        "label": "Seguridad",
        "value": "Barra de seguridad para candado"
      }
    ],
    "sort_group": 44,
    "active": true
  },
  {
    "slug": "milwaukee-48228440",
    "name": "Milwaukee PACKOUT Cajón Abierto (Crate)",
    "description": "Cajón abierto (sin tapa) del sistema PACKOUT, con asas laterales integradas, orificios de drenaje y puntos de anclaje traseros para colgar en pared o montar en un stand vertical.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48228440.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "48-22-8440"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Dimensiones interiores",
        "value": "406 x 330 x 229 mm"
      },
      {
        "label": "Capacidad de carga",
        "value": "50 lb (22.7 kg)"
      },
      {
        "label": "Drenaje",
        "value": "Orificios de desagüe integrados"
      },
      {
        "label": "Montaje",
        "value": "Puntos de enganche trasero para pared"
      }
    ],
    "sort_group": 45,
    "active": true
  },
  {
    "slug": "milwaukee-48228428",
    "name": "Milwaukee PACKOUT Caja Rodante (Rolling Tool Chest)",
    "description": "Caja de herramientas rodante del sistema PACKOUT con tapa Dual Stack Top que permite llevar dos torres PACKOUT completas sobre ruedas. Manija telescópica de grado industrial y bandeja organizadora interior.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48228428.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "48-22-8428"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Dimensiones",
        "value": "96.5 x 61 x 40 cm aprox."
      },
      {
        "label": "Capacidad de carga",
        "value": "250 lb (113 kg)"
      },
      {
        "label": "Capacidad de almacenamiento",
        "value": "35 galones (132 L)"
      },
      {
        "label": "Ruedas",
        "value": "2 ruedas todo terreno de 9 pulgadas"
      }
    ],
    "sort_group": 46,
    "active": true
  },
  {
    "slug": "milwaukee-48228460",
    "name": "Milwaukee PACKOUT Heladera Compacta 16QT (Compact Cooler)",
    "description": "Heladera rígida compacta de 16 cuartos (15 L) del sistema PACKOUT, con sellado IP65 contra agua y polvo, retención de hielo superior a 30 horas y abrebotellas integrado.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48228460.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "48-22-8460"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Dimensiones exteriores",
        "value": "41.4 x 25 x 33 cm"
      },
      {
        "label": "Capacidad",
        "value": "16 cuartos (15 litros) / hasta 20 latas"
      },
      {
        "label": "Retención de hielo",
        "value": "Más de 30 horas"
      },
      {
        "label": "Protección",
        "value": "Sellado IP65"
      }
    ],
    "sort_group": 47,
    "active": true
  },
  {
    "slug": "milwaukee-48228410",
    "name": "Milwaukee PACKOUT Carro Dolly",
    "description": "Base rodante del sistema PACKOUT para transportar torres apiladas de cajas, organizadores y cajones dentro del taller o en la obra. Ruedas bloqueables y palanca Quick-Stop para fijar la carga.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48228410.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "48-22-8410"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Dimensiones",
        "value": "62 x 48 x 19.3 cm aprox."
      },
      {
        "label": "Capacidad de carga",
        "value": "250 lb (113 kg)"
      },
      {
        "label": "Ruedas",
        "value": "Ruedas de rodadura suave con traba"
      }
    ],
    "sort_group": 48,
    "active": true
  },
  {
    "slug": "milwaukee-48228447",
    "name": "Milwaukee PACKOUT Caja Organizadora 3 Cajones Multi-Profundidad",
    "description": "Caja organizadora de 3 cajones con profundidades distintas entre sí del sistema PACKOUT, con guías metálicas a rodamiento, esquinas reforzadas en metal y barra de seguridad con traba para candado.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48228447.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "48-22-8447"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Dimensiones",
        "value": "56.4 x 41.4 x 36.3 cm"
      },
      {
        "label": "Peso",
        "value": "10.7 kg"
      },
      {
        "label": "Capacidad de carga",
        "value": "50 lb (22.7 kg)"
      },
      {
        "label": "Cajones",
        "value": "3, de distinta profundidad"
      }
    ],
    "sort_group": 49,
    "active": true
  },
  {
    "slug": "milwaukee-48228444",
    "name": "Milwaukee PACKOUT Caja Organizadora 4 Cajones",
    "description": "Caja organizadora de 4 cajones del sistema PACKOUT, con guías metálicas a rodamiento, esquinas reforzadas en metal y barra de seguridad con traba para candado.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48228444.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "48-22-8444"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Dimensiones",
        "value": "56.4 x 41.4 x 36.3 cm"
      },
      {
        "label": "Capacidad de carga",
        "value": "50 lb (22.7 kg)"
      },
      {
        "label": "Cajones",
        "value": "4"
      },
      {
        "label": "Divisores",
        "value": "4 sets Quick-Adjust"
      }
    ],
    "sort_group": 50,
    "active": true
  },
  {
    "slug": "milwaukee-48228443",
    "name": "Milwaukee PACKOUT Caja Organizadora 3 Cajones",
    "description": "Caja organizadora estándar de 3 cajones del sistema PACKOUT (distinta de la versión Multi-Depth), con guías metálicas a rodamiento, esquinas reforzadas y barra de seguridad para candado.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48228443.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "48-22-8443"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Dimensiones",
        "value": "56.4 x 41.4 x 36.3 cm"
      },
      {
        "label": "Capacidad de carga",
        "value": "50 lb (22.7 kg)"
      },
      {
        "label": "Cajones",
        "value": "3, profundidad uniforme"
      }
    ],
    "sort_group": 51,
    "active": true
  },
  {
    "slug": "milwaukee-48228311",
    "name": "Milwaukee PACKOUT Bolso Rígido 10\" (Structured Tote)",
    "description": "Bolso rígido estructurado del sistema PACKOUT, en tela balística resistente a desgarros, con base moldeada que se acopla al sistema modular. 35 bolsillos, cierres YKK y correa acolchada para hombro.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48228311.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "48-22-8311"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Dimensiones",
        "value": "38 x 24.8 x 48.3 cm"
      },
      {
        "label": "Peso",
        "value": "3.4 kg"
      },
      {
        "label": "Capacidad de carga",
        "value": "50 lb (22.7 kg)"
      },
      {
        "label": "Bolsillos",
        "value": "35 en total"
      }
    ],
    "sort_group": 52,
    "active": true
  },
  {
    "slug": "milwaukee-48228485",
    "name": "Milwaukee PACKOUT Placa de Montaje (Mounting Plate)",
    "description": "Placa de montaje del sistema PACKOUT para fijar módulos de forma permanente a paredes, pisos o vehículos de trabajo. Orificios de montaje reforzados en metal y puntos de amarre reforzados.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48228485.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "48-22-8485"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Dimensiones",
        "value": "59.5 x 46.8 x 2.9 cm"
      },
      {
        "label": "Capacidad de carga (piso)",
        "value": "100 lb (45.4 kg)"
      },
      {
        "label": "Capacidad de carga (pared)",
        "value": "50 lb (22.7 kg)"
      },
      {
        "label": "Espaciado de orificios",
        "value": "16 pulgadas estándar"
      }
    ],
    "sort_group": 53,
    "active": true
  },
  {
    "slug": "milwaukee-48228445",
    "name": "Milwaukee PACKOUT Gabinete (Cabinet)",
    "description": "Gabinete cerrado del sistema PACKOUT con puerta de acceso rápido, pensado para colgar en una Placa de Montaje o apilarse con otros módulos. Función Secure Hang and Stack.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48228445.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "48-22-8445"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Dimensiones",
        "value": "49.5 x 36.8 x 37.3 cm"
      },
      {
        "label": "Peso",
        "value": "7.3 kg"
      },
      {
        "label": "Capacidad de carga (pared)",
        "value": "50 lb (22.7 kg)"
      },
      {
        "label": "Capacidad de carga (apilado)",
        "value": "25 lb (11.3 kg)"
      }
    ],
    "sort_group": 54,
    "active": true
  },
  {
    "slug": "milwaukee-48553490",
    "name": "Milwaukee Bolso Portaherramientas Contractor Bag",
    "description": "Bolso resistente al agua para transporte de herramientas y accesorios, con tirante de hombro y doble asa, ideal para contratistas.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48553490.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "48-55-3490"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Material",
        "value": "600 Denier resistente al agua"
      },
      {
        "label": "Dimensiones",
        "value": "43 x 23 x 26 cm aprox."
      },
      {
        "label": "Bolsillos",
        "value": "10 externos, 8 internos"
      },
      {
        "label": "Transporte",
        "value": "Tirante de hombro + doble asa"
      }
    ],
    "sort_group": 55,
    "active": true
  },
  {
    "slug": "milwaukee-48228462",
    "name": "Milwaukee PACKOUT Heladera 40QT XL Cooler",
    "description": "Heladera rígida de gran capacidad del sistema modular PACKOUT, con cuerpo resistente a impactos, diseñada para mantener alimentos y bebidas frías en el trabajo.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48228462.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "48-22-8462"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Capacidad",
        "value": "40 cuartos (aprox. 38 litros)"
      },
      {
        "label": "Resistencia",
        "value": "IP65, cuerpo resistente a impactos"
      },
      {
        "label": "Retención de hielo",
        "value": "Hasta 5 días"
      },
      {
        "label": "Incluye",
        "value": "Tabla de cortar, bandeja interior, abrebotellas"
      }
    ],
    "sort_group": 56,
    "active": true
  },
  {
    "slug": "milwaukee-49666803",
    "name": "Juego de Vasos SHOCKWAVE Impact Duty 1/2\" 16 Piezas Métricos con PACKOUT",
    "description": "Juego de 16 vasos profundos métricos de impacto de encastre 1/2\", en acero forjado de alta resistencia, incluido en organizador PACKOUT.",
    "price": 0,
    "category_slug": "herramientas-manuales",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/49666803.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "49-66-6803"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Encastre",
        "value": "1/2\""
      },
      {
        "label": "Piezas",
        "value": "16 (15 vasos profundos + extensión)"
      },
      {
        "label": "Medidas",
        "value": "10 a 24 mm"
      },
      {
        "label": "Material",
        "value": "Acero de impacto forjado"
      },
      {
        "label": "Almacenamiento",
        "value": "Organizador PACKOUT con bandeja removible"
      }
    ],
    "sort_group": 57,
    "active": true
  },
  {
    "slug": "milwaukee-48229482",
    "name": "Juego de Carraca y Vasos 3/8\" Métrico 32 Piezas con Organizador PACKOUT",
    "description": "Juego de carraca y vasos métricos de encastre 3/8\", con vasos de 4 caras planas antideslizantes y organizador PACKOUT de bajo perfil incluido.",
    "price": 0,
    "category_slug": "herramientas-manuales",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48229482.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "48-22-9482"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Encastre",
        "value": "3/8\""
      },
      {
        "label": "Piezas",
        "value": "32 + organizador"
      },
      {
        "label": "Medidas",
        "value": "6 mm a 19 mm"
      },
      {
        "label": "Carraca",
        "value": "90 dientes, giro de arco de 4°"
      },
      {
        "label": "Organizador",
        "value": "PACKOUT Low-Profile, IP65"
      }
    ],
    "sort_group": 58,
    "active": true
  },
  {
    "slug": "milwaukee-48229487",
    "name": "Juego de Carraca y Vasos 1/2\" SAE/Métrico 47 Piezas con Organizador PACKOUT",
    "description": "Juego de carraca y vasos SAE y métricos de encastre 1/2\", con vasos de 4 caras planas antideslizantes y organizador PACKOUT de bajo perfil.",
    "price": 0,
    "category_slug": "herramientas-manuales",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48229487.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "48-22-9487"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Encastre",
        "value": "1/2\""
      },
      {
        "label": "Piezas",
        "value": "47 (SAE y métrico)"
      },
      {
        "label": "Carraca",
        "value": "90 dientes, giro de arco de 4°"
      },
      {
        "label": "Material",
        "value": "Acero cromo-vanadio"
      },
      {
        "label": "Organizador",
        "value": "PACKOUT Low-Profile, IP65"
      }
    ],
    "sort_group": 59,
    "active": true
  },
  {
    "slug": "milwaukee-48228316",
    "name": "Milwaukee PACKOUT Bolso Estructurado 15\"",
    "description": "Bolso estructurado de material balístico resistente al desgarro, con base moldeada compatible con el sistema modular PACKOUT y capacidad para 50 libras.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48228316.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "48-22-8316"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Dimensiones",
        "value": "25 x 46 x 50 cm"
      },
      {
        "label": "Capacidad de carga",
        "value": "50 lb (22.7 kg)"
      },
      {
        "label": "Bolsillos",
        "value": "65 en total"
      },
      {
        "label": "Material",
        "value": "Ballistic 1680D y 1800D"
      }
    ],
    "sort_group": 60,
    "active": true
  },
  {
    "slug": "milwaukee-48228608",
    "name": "Milwaukee PACKOUT Placa Compacta para Caja de Herramientas",
    "description": "Accesorio de montaje lateral para cajas PACKOUT que permite sumar ganchos, racks y organizadores compactos al stack de almacenamiento.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48228608.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "48228608"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Capacidad",
        "value": "30 lb (13.6 kg)"
      },
      {
        "label": "Fijación",
        "value": "Esquinas reforzadas en metal"
      },
      {
        "label": "Incluye",
        "value": "Placa, llave hexagonal, arandelas, tornillos"
      }
    ],
    "sort_group": 61,
    "active": true
  },
  {
    "slug": "milwaukee-48228603",
    "name": "Milwaukee PACKOUT Soporte para Baterías M18",
    "description": "Rack de montaje lateral para cajas PACKOUT que permite transportar hasta 3 baterías M18 con acceso rápido tipo clip.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48228603.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "48228603"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Capacidad",
        "value": "3 baterías M18"
      },
      {
        "label": "Sistema de sujeción",
        "value": "Enganche rápido tipo clip"
      },
      {
        "label": "Incluye",
        "value": "Soporte, anclajes de montaje, llave hexagonal"
      }
    ],
    "sort_group": 62,
    "active": true
  },
  {
    "slug": "milwaukee-48228343",
    "name": "Milwaukee PACKOUT Estación de Herramientas (Tool Station)",
    "description": "Estación de pared para guardar taladros, atornilladores de impacto y accesorios, con ranuras de acceso rápido y compartimentos para cargadores.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48228343.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "48228343"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Dimensiones",
        "value": "25 x 24 x 36 cm"
      },
      {
        "label": "Capacidad de carga",
        "value": "25 lb (11.3 kg)"
      },
      {
        "label": "Diseño",
        "value": "Ranuras de acceso rápido, estante y compartimento inferior"
      }
    ],
    "sort_group": 63,
    "active": true
  },
  {
    "slug": "milwaukee-48228496",
    "name": "Milwaukee PACKOUT Placa de Pared Compacta (Compact Wall Plate)",
    "description": "Placa de pared compacta del sistema modular PACKOUT. Con lengüetas de alineación rápida para instalar filas y columnas de varias placas, rieles de montaje reforzados con metal.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48228496.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "48-22-8496"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Capacidad de carga (pared)",
        "value": "50 lb (22.7 kg)"
      },
      {
        "label": "Capacidad de carga (vehículo)",
        "value": "25 lb (11.3 kg)"
      },
      {
        "label": "Dimensiones",
        "value": "20 x 10.25 x 1 in"
      },
      {
        "label": "Peso",
        "value": "1.5 lb"
      }
    ],
    "sort_group": 64,
    "active": true
  },
  {
    "slug": "milwaukee-48228497",
    "name": "Milwaukee PACKOUT Placa de Pared Grande (Large Wall Plate)",
    "description": "Placa de pared grande del sistema modular PACKOUT, con lengüetas de alineación rápida y rieles de montaje reforzados con metal. Soporta más carga que la versión compacta.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48228497.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "48-22-8497"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Capacidad de carga (pared)",
        "value": "150 lb (68 kg)"
      },
      {
        "label": "Capacidad de carga (vehículo)",
        "value": "75 lb (34 kg)"
      },
      {
        "label": "Contenido",
        "value": "1 placa de pared grande"
      }
    ],
    "sort_group": 65,
    "active": true
  },
  {
    "slug": "milwaukee-48324602",
    "name": "Milwaukee SHOCKWAVE Impact Duty 2\" Phillips #2 Power Bits (5 PK)",
    "description": "Puntas de impacto Phillips #2 de 2 pulgadas, tecnología SHOCKZONE que absorbe el pico de torque y evita roturas, y punta Wear Guard que reduce el desgaste. Paquete de 5 unidades.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48324602.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "48-32-4602"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Punta",
        "value": "Phillips #2 (PH2)"
      },
      {
        "label": "Longitud",
        "value": "2 in (51 mm)"
      },
      {
        "label": "Cantidad por paquete",
        "value": "5 puntas"
      },
      {
        "label": "Vástago",
        "value": "Hexagonal 1/4 in"
      }
    ],
    "sort_group": 66,
    "active": true
  },
  {
    "slug": "milwaukee-48324601",
    "name": "Milwaukee SHOCKWAVE Impact Duty 1\" Phillips #2 Insert Bits (5 PK)",
    "description": "Puntas cortas de impacto Phillips #2 de 1 pulgada, ideales para espacios reducidos. Tecnología SHOCKZONE y punta Wear Guard. Paquete de 5 unidades.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48324601.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "48-32-4601"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Punta",
        "value": "Phillips #2 (PH2)"
      },
      {
        "label": "Longitud",
        "value": "1 in (25 mm)"
      },
      {
        "label": "Cantidad por paquete",
        "value": "5 puntas"
      },
      {
        "label": "Vástago",
        "value": "Hexagonal 1/4 in"
      }
    ],
    "sort_group": 67,
    "active": true
  },
  {
    "slug": "milwaukee-48324564",
    "name": "Milwaukee SHOCKWAVE Impact Duty 3-1/2\" Phillips #2 Power Bits (5 PK)",
    "description": "Puntas largas de impacto Phillips #2 de 3-1/2 pulgadas, para llegar a tornillos en zonas profundas. Tecnología SHOCKZONE y punta Wear Guard. Paquete de 5 unidades.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48324564.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "48-32-4564"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Punta",
        "value": "Phillips #2 (PH2)"
      },
      {
        "label": "Longitud",
        "value": "3.5 in (89 mm)"
      },
      {
        "label": "Cantidad por paquete",
        "value": "5 puntas"
      },
      {
        "label": "Vástago",
        "value": "Hexagonal 1/4 in"
      }
    ],
    "sort_group": 68,
    "active": true
  },
  {
    "slug": "milwaukee-48325004",
    "name": "Milwaukee SHOCKWAVE Impact Duty 2\" Phillips #2 Power Bits - Contractor Pack 15 Piezas",
    "description": "Set contratista de 15 puntas de impacto Phillips #2 de 2 pulgadas en estuche tipo 'tictac'. Geometría SHOCKZONE que absorbe 3 veces más torque. Punta de precisión endurecida por láser.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48325004.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "48-32-5004"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Punta",
        "value": "Phillips #2 (PH2)"
      },
      {
        "label": "Longitud",
        "value": "2 in (51 mm)"
      },
      {
        "label": "Cantidad por paquete",
        "value": "15 puntas"
      },
      {
        "label": "Vástago",
        "value": "Hexagonal 1/4 in"
      }
    ],
    "sort_group": 69,
    "active": true
  },
  {
    "slug": "milwaukee-48324762",
    "name": "Milwaukee SHOCKWAVE Impact Duty 2\" Phillips #2 Power Bits - Bulk 25 Piezas",
    "description": "Puntas de impacto Phillips #2 de 2 pulgadas en presentación a granel de 25 unidades, pensadas para uso profesional intensivo. Vástago SHOCKZONE y punta Wear Guard.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48324762.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "48-32-4762"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Punta",
        "value": "Phillips #2 (PH2)"
      },
      {
        "label": "Longitud",
        "value": "2 in (51 mm)"
      },
      {
        "label": "Cantidad por paquete",
        "value": "25 puntas (a granel)"
      },
      {
        "label": "Vástago",
        "value": "Hexagonal 1/4 in"
      }
    ],
    "sort_group": 70,
    "active": true
  },
  {
    "slug": "milwaukee-48324444",
    "name": "Milwaukee SHOCKWAVE Impact Duty 1\" Phillips #2 Reduced Diameter Drywall Insert Bits (2 PK)",
    "description": "Puntas de diámetro reducido especiales para colocación de placas de yeso (drywall), Phillips #2, de 1 pulgada. Entra en el buje del atornillador de drywall sin friccionar. Paquete de 2 unidades.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48324444.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "48-32-4444"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Punta",
        "value": "Phillips #2 reducido (PR2)"
      },
      {
        "label": "Longitud",
        "value": "1 in (25 mm)"
      },
      {
        "label": "Cantidad por paquete",
        "value": "2 puntas"
      },
      {
        "label": "Uso específico",
        "value": "Atornilladoras de drywall"
      }
    ],
    "sort_group": 71,
    "active": true
  },
  {
    "slug": "milwaukee-48324462",
    "name": "Milwaukee SHOCKWAVE Impact Duty 2\" Phillips #2 Power Bit (Unidad)",
    "description": "Punta de impacto Phillips #2 de 2 pulgadas en presentación individual, con tecnología SHOCKZONE y punta Wear Guard para mayor durabilidad frente a atornilladoras de impacto.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48324462.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "48-32-4462"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Punta",
        "value": "Phillips #2 (PH2)"
      },
      {
        "label": "Longitud",
        "value": "2 in (51 mm)"
      },
      {
        "label": "Cantidad por paquete",
        "value": "1 punta"
      },
      {
        "label": "Vástago",
        "value": "Hexagonal 1/4 in"
      }
    ],
    "sort_group": 72,
    "active": true
  },
  {
    "slug": "milwaukee-48324503",
    "name": "Milwaukee SHOCKWAVE Porta Puntas Magnético 3\"",
    "description": "Porta puntas magnético de 3 pulgadas de la línea SHOCKWAVE Impact Duty, con vástago SHOCKZONE que absorbe el torque pico y diseño de barril delgado para espacios reducidos.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48324503.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "48-32-4503"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Longitud",
        "value": "3 pulgadas (76 mm)"
      },
      {
        "label": "Tipo",
        "value": "Porta puntas magnético para impacto"
      },
      {
        "label": "Vástago",
        "value": "Hex 1/4\" SHOCKZONE"
      }
    ],
    "sort_group": 73,
    "active": true
  },
  {
    "slug": "milwaukee-48221932",
    "name": "Milwaukee Cuchillas de Gancho para Cuchillo Utilitario, 5 Piezas",
    "description": "Set de 5 cuchillas de gancho de doble filo para cúter/cuchillo utilitario, ideales para cortar techado, membranas sintéticas, alfombra y aislación. Metal de carburo micro-disperso.",
    "price": 0,
    "category_slug": "herramientas-manuales",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48221932.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "48-22-1932"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Cantidad",
        "value": "5 piezas"
      },
      {
        "label": "Tipo de filo",
        "value": "Gancho (hook), doble punta"
      },
      {
        "label": "Material",
        "value": "Metal carburo micro-disperso"
      },
      {
        "label": "Aplicaciones",
        "value": "Techado, membranas, aislación, alfombra"
      }
    ],
    "sort_group": 74,
    "active": true
  },
  {
    "slug": "milwaukee-48221933",
    "name": "Milwaukee Cuchillas para Durlock/Yeso Cartón, 5 Piezas",
    "description": "Set de 5 cuchillas rectas para durlock/placas de yeso. Ángulo de afilado optimizado para filo agudo, metal de carburo micro-disperso para mayor duración.",
    "price": 0,
    "category_slug": "herramientas-manuales",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48221933.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "48-22-1933"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Cantidad",
        "value": "5 piezas"
      },
      {
        "label": "Tipo",
        "value": "Hoja recta para durlock/yeso cartón"
      },
      {
        "label": "Material",
        "value": "Metal carburo micro-disperso"
      }
    ],
    "sort_group": 75,
    "active": true
  },
  {
    "slug": "milwaukee-48324487",
    "name": "Milwaukee SHOCKWAVE Punta de Impacto 2\" TORX T30",
    "description": "Punta de atornillar de impacto SHOCKWAVE de 2 pulgadas, punta TORX T30, con vástago SHOCKZONE optimizado que absorbe el torque pico y punta Wear Guard.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48324487.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "48-32-4487"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Longitud",
        "value": "2 pulgadas (51 mm)"
      },
      {
        "label": "Punta",
        "value": "TORX T30"
      },
      {
        "label": "Vástago",
        "value": "Hex 1/4\""
      },
      {
        "label": "Cantidad",
        "value": "1 unidad"
      }
    ],
    "sort_group": 76,
    "active": true
  },
  {
    "slug": "milwaukee-48324637",
    "name": "Milwaukee SHOCKWAVE Puntas de Impacto 1\" TORX T30, 5 Piezas",
    "description": "Set de 5 puntas de inserción de impacto SHOCKWAVE de 1 pulgada, punta TORX T30, en acero aleado con tratamiento térmico.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48324637.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "48-32-4637"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Longitud",
        "value": "1 pulgada (25 mm)"
      },
      {
        "label": "Punta",
        "value": "TORX T30"
      },
      {
        "label": "Cantidad",
        "value": "5 piezas"
      }
    ],
    "sort_group": 77,
    "active": true
  },
  {
    "slug": "milwaukee-48324485",
    "name": "Milwaukee SHOCKWAVE Punta de Impacto 2\" TORX T25",
    "description": "Punta de atornillar de impacto SHOCKWAVE de 2 pulgadas, punta TORX T25, con vástago SHOCKZONE que absorbe el torque pico y punta Wear Guard.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48324485.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "48-32-4485"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Longitud",
        "value": "2 pulgadas (51 mm)"
      },
      {
        "label": "Punta",
        "value": "TORX T25"
      },
      {
        "label": "Vástago",
        "value": "Hex 1/4\""
      },
      {
        "label": "Cantidad",
        "value": "1 unidad"
      }
    ],
    "sort_group": 78,
    "active": true
  },
  {
    "slug": "milwaukee-48324985",
    "name": "Milwaukee SHOCKWAVE Puntas de Impacto 2\" TORX T25, 2 Piezas",
    "description": "Set de 2 puntas de atornillar de impacto SHOCKWAVE de 2 pulgadas, punta TORX T25, con vástago SHOCKZONE y punta Wear Guard.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48324985.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "48-32-4985"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Longitud",
        "value": "2 pulgadas (51 mm)"
      },
      {
        "label": "Punta",
        "value": "TORX T25"
      },
      {
        "label": "Cantidad",
        "value": "2 piezas"
      }
    ],
    "sort_group": 79,
    "active": true
  },
  {
    "slug": "milwaukee-48324785",
    "name": "Milwaukee SHOCKWAVE Puntas de Impacto 2\" TORX T25, Pack Granel 25 Piezas",
    "description": "Pack a granel de 25 puntas de atornillar de impacto SHOCKWAVE de 2 pulgadas, punta TORX T25, ideal para uso profesional intensivo.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48324785.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "48-32-4785"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Longitud",
        "value": "2 pulgadas (51 mm)"
      },
      {
        "label": "Punta",
        "value": "TORX T25"
      },
      {
        "label": "Cantidad",
        "value": "25 piezas (pack granel)"
      }
    ],
    "sort_group": 80,
    "active": true
  },
  {
    "slug": "milwaukee-48324484",
    "name": "Milwaukee SHOCKWAVE Punta de Impacto 2\" TORX T20",
    "description": "Punta de atornillar de impacto SHOCKWAVE de 2 pulgadas, punta TORX T20, con vástago SHOCKZONE que absorbe el torque pico y punta Wear Guard.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48324484.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "48-32-4484"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Longitud",
        "value": "2 pulgadas (51 mm)"
      },
      {
        "label": "Punta",
        "value": "TORX T20"
      },
      {
        "label": "Vástago",
        "value": "Hex 1/4\""
      },
      {
        "label": "Cantidad",
        "value": "1 unidad"
      }
    ],
    "sort_group": 81,
    "active": true
  },
  {
    "slug": "milwaukee-48324984",
    "name": "Milwaukee SHOCKWAVE Puntas de Impacto TORX T20 2\" (Pack x2)",
    "description": "Puntas de impacto TORX T20 de 2 pulgadas de la línea SHOCKWAVE, en acero Custom Alloy76 con tratamiento térmico. Pack de 2 unidades.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48324984.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "48-32-4984"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Tipo de punta",
        "value": "TORX T20"
      },
      {
        "label": "Longitud",
        "value": "2 pulgadas (51 mm)"
      },
      {
        "label": "Cantidad por pack",
        "value": "2 unidades"
      }
    ],
    "sort_group": 82,
    "active": true
  },
  {
    "slug": "milwaukee-48324483",
    "name": "Milwaukee SHOCKWAVE Punta de Impacto TORX T15 2\"",
    "description": "Punta de impacto TORX T15 de 2 pulgadas, línea SHOCKWAVE Impact Duty. Geometría de punta personalizada para reducir el desgaste de tornillos.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48324483.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "48-32-4483"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Tipo de punta",
        "value": "TORX T15"
      },
      {
        "label": "Longitud",
        "value": "2 pulgadas (51 mm)"
      },
      {
        "label": "Vástago",
        "value": "1/4\" hexagonal"
      }
    ],
    "sort_group": 83,
    "active": true
  },
  {
    "slug": "milwaukee-48324661",
    "name": "Milwaukee SHOCKWAVE Puntas de Impacto Phillips #1 de 1\" (Pack x5)",
    "description": "Puntas insertables Phillips #1 de 1 pulgada de largo, línea SHOCKWAVE Impact Duty, en pack de 5 unidades. Ajuste 'Ultimate Fit' y mayor vida útil.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48324661.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "48-32-4661"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Tipo de punta",
        "value": "Phillips #1 (PH1)"
      },
      {
        "label": "Longitud",
        "value": "1 pulgada (25 mm)"
      },
      {
        "label": "Cantidad por pack",
        "value": "5 unidades"
      }
    ],
    "sort_group": 84,
    "active": true
  },
  {
    "slug": "milwaukee-48324413",
    "name": "Milwaukee SHOCKWAVE Puntas de Impacto Phillips #3 de 1\" (Pack x2)",
    "description": "Puntas insertables Phillips #3 de 1 pulgada de largo, línea SHOCKWAVE Impact Duty, en pack de 2 unidades, con punta Wear Guard.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48324413.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "48-32-4413"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Tipo de punta",
        "value": "Phillips #3 (PH3)"
      },
      {
        "label": "Longitud",
        "value": "1 pulgada (25 mm)"
      },
      {
        "label": "Cantidad por pack",
        "value": "2 unidades"
      }
    ],
    "sort_group": 85,
    "active": true
  },
  {
    "slug": "milwaukee-48324411",
    "name": "Milwaukee SHOCKWAVE Puntas de Impacto Phillips #1 de 1\" (Pack x2)",
    "description": "Puntas insertables Phillips #1 de 1 pulgada de largo, línea SHOCKWAVE Impact Duty, en pack de 2 unidades. Vástago ShockZone optimizado.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48324411.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "48-32-4411"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Tipo de punta",
        "value": "Phillips #1 (PH1)"
      },
      {
        "label": "Longitud",
        "value": "1 pulgada (25 mm)"
      },
      {
        "label": "Cantidad por pack",
        "value": "2 unidades"
      }
    ],
    "sort_group": 86,
    "active": true
  },
  {
    "slug": "milwaukee-49664505",
    "name": "Milwaukee SHOCKWAVE Dado Bocallave Magnético de Impacto 3/8\" x 1-7/8\"",
    "description": "Bocallave (nut driver) magnético de impacto de 3/8 pulgada, línea SHOCKWAVE Impact Duty. Imán Impact Duty que no pierde fuerza con el uso.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/49664505.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "49-66-4505"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Medida de boca",
        "value": "3/8 pulgada"
      },
      {
        "label": "Largo total",
        "value": "1-7/8 pulgada (48 mm)"
      },
      {
        "label": "Vástago",
        "value": "1/4\" hexagonal"
      }
    ],
    "sort_group": 87,
    "active": true
  },
  {
    "slug": "milwaukee-48324403",
    "name": "Milwaukee SHOCKWAVE Set de Puntas de Impacto 18 Piezas con Estuche",
    "description": "Set de 18 puntas de atornillar SHOCKWAVE Impact Duty (Phillips, Square, planas y TORX en distintas longitudes) más un portapuntas magnético compacto, en estuche compatible con PACKOUT.",
    "price": 0,
    "category_slug": "herramientas-manuales",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48324403.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "48-32-4403"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Cantidad de piezas",
        "value": "18"
      },
      {
        "label": "Contenido",
        "value": "Puntas Phillips, cuadradas, planas y TORX + portapuntas"
      },
      {
        "label": "Estuche",
        "value": "Compatible con sistema PACKOUT"
      }
    ],
    "sort_group": 88,
    "active": true
  },
  {
    "slug": "milwaukee-49664503",
    "name": "Milwaukee SHOCKWAVE Dado Bocallave Magnético de Impacto 5/16\" x 1-7/8\"",
    "description": "Bocallave (nut driver) magnético de impacto de 5/16 pulgada, línea SHOCKWAVE Impact Duty, con imán de alta retención y geometría hexagonal mejorada.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/49664503.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "49-66-4503"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Medida de boca",
        "value": "5/16 pulgada"
      },
      {
        "label": "Largo total",
        "value": "1-7/8 pulgada (48 mm)"
      },
      {
        "label": "Vástago",
        "value": "1/4\" hexagonal"
      }
    ],
    "sort_group": 89,
    "active": true
  },
  {
    "slug": "milwaukee-49664506",
    "name": "Milwaukee SHOCKWAVE Dado Bocallave Magnético de Impacto 7/16\" x 1-7/8\"",
    "description": "Bocallave (nut driver) magnético de impacto de 7/16 pulgada, línea SHOCKWAVE Impact Duty, con imán resistente al aflojamiento y borde achaflanado.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/49664506.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "49-66-4506"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Medida de boca",
        "value": "7/16 pulgada"
      },
      {
        "label": "Largo total",
        "value": "1-7/8 pulgada (48 mm)"
      },
      {
        "label": "Vástago",
        "value": "1/4\" hexagonal"
      }
    ],
    "sort_group": 90,
    "active": true
  },
  {
    "slug": "milwaukee-49664562",
    "name": "Milwaukee SHOCKWAVE Impact Duty Set 4 Piezas Bocallaves Magnéticos 1-7/8\"",
    "description": "Set de 4 llaves de tubo (nut drivers) magnéticas SHOCKWAVE Impact Duty, en medidas 1/4\", 5/16\", 3/8\" y 7/16\", de 1-7/8\" de largo. Imán de alta resistencia que sujeta firme el sujetador.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/49664562.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "49-66-4562"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Contenido",
        "value": "4 piezas"
      },
      {
        "label": "Medidas incluidas",
        "value": "1/4\", 5/16\", 3/8\", 7/16\""
      },
      {
        "label": "Largo",
        "value": "1-7/8\" (47 mm)"
      }
    ],
    "sort_group": 91,
    "active": true
  },
  {
    "slug": "milwaukee-48321554",
    "name": "Milwaukee Set de Puntas para Atornillar 42 Piezas",
    "description": "Juego de 42 piezas para atornillar de Milwaukee, en acero S2 de grado premium. Incluye guía magnética de impulsión con manguito retráctil y estuche compatible con el sistema PACKOUT.",
    "price": 0,
    "category_slug": "herramientas-manuales",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48321554.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "48-32-1554"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Piezas",
        "value": "42 (incluye guía magnética + estuche)"
      },
      {
        "label": "Puntas Phillips",
        "value": "P1, P2, P3, PR2"
      },
      {
        "label": "Puntas TORX",
        "value": "T10 a T30"
      },
      {
        "label": "Puntas Hex",
        "value": "3/16\" y 1/4\""
      },
      {
        "label": "Estuche",
        "value": "Compatible sistema PACKOUT"
      }
    ],
    "sort_group": 92,
    "active": true
  },
  {
    "slug": "milwaukee-484059a",
    "name": "Milwaukee Kit Cargador Rápido M18/M12 + Batería REDLITHIUM HIGH OUTPUT XC8.0",
    "description": "Kit combo que incluye un cargador rápido multi-voltaje compatible con baterías M18 y M12, junto con una batería M18 REDLITHIUM HIGH OUTPUT XC8.0 de 8.0 Ah.",
    "price": 0,
    "category_slug": "baterias-y-cargadores",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/484059a.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "48-40-59A"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Cargador incluido",
        "value": "Multi-Voltaje M18/M12 Rapid Charger"
      },
      {
        "label": "Batería incluida",
        "value": "M18 REDLITHIUM HIGH OUTPUT XC8.0"
      },
      {
        "label": "Capacidad batería",
        "value": "8.0 Ah"
      },
      {
        "label": "Voltaje",
        "value": "18V"
      }
    ],
    "sort_group": 93,
    "active": true
  },
  {
    "slug": "milwaukee-48111820",
    "name": "Milwaukee M18 REDLITHIUM CP2.0 - Batería Compacta 18V 2.0Ah",
    "description": "Batería compacta de iones de litio M18 REDLITHIUM CP2.0, 18V y 2.0 Ah, con tecnología REDLINK Intelligence, indicador de carga integrado y diseño liviano para espacios reducidos.",
    "price": 0,
    "category_slug": "baterias-y-cargadores",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48111820.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "48-11-1820"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Voltaje",
        "value": "18V"
      },
      {
        "label": "Capacidad",
        "value": "2.0 Ah"
      },
      {
        "label": "Compatibilidad",
        "value": "+40 herramientas M18"
      },
      {
        "label": "Garantía",
        "value": "2 años"
      }
    ],
    "sort_group": 94,
    "active": true
  },
  {
    "slug": "milwaukee-48005186",
    "name": "Milwaukee SAWZALL 6\" 24 TPI - Hoja para Metal Fino (Pack x5)",
    "description": "Pack de 5 hojas de sierra sable (SAWZALL) Milwaukee de 6\" de largo y 24 dientes por pulgada, diseñadas para corte de metal delgado como perfiles de acero, cobre, ductos y caños.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48005186.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "48-00-5186"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Largo",
        "value": "6\""
      },
      {
        "label": "TPI",
        "value": "24"
      },
      {
        "label": "Cantidad por pack",
        "value": "5 hojas"
      },
      {
        "label": "Material",
        "value": "Bi-metal Matrix II, perfil delgado"
      }
    ],
    "sort_group": 95,
    "active": true
  },
  {
    "slug": "milwaukee-48005782",
    "name": "Milwaukee SAWZALL The Torch 6\" 14 TPI - Hoja para Metal Medio (Pack x5)",
    "description": "Pack de 5 hojas Milwaukee The Torch para sierra sable, de 6\" y 14 TPI, pensadas para cortes rectos en metal de espesor medio: caños, canales, tubos y perfiles angulares.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48005782.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "48-00-5782"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Largo",
        "value": "6\""
      },
      {
        "label": "TPI",
        "value": "14"
      },
      {
        "label": "Cantidad por pack",
        "value": "5 hojas"
      },
      {
        "label": "Material",
        "value": "Bi-metal, línea The Torch"
      }
    ],
    "sort_group": 96,
    "active": true
  },
  {
    "slug": "milwaukee-48005788",
    "name": "Milwaukee SAWZALL The Torch 9\" 18 TPI - Hoja para Metal Medio (Pack x5)",
    "description": "Pack de 5 hojas Milwaukee The Torch para sierra sable, de 9\" y 18 TPI, bi-metal, para cortes rectos en caños, conduit, perfiles estructurales y metal en general.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48005788.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "48-00-5788"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Largo x ancho",
        "value": "9\" x 1\""
      },
      {
        "label": "TPI",
        "value": "18"
      },
      {
        "label": "Cantidad por pack",
        "value": "5 hojas"
      },
      {
        "label": "Material",
        "value": "Bi-metal Matrix II"
      }
    ],
    "sort_group": 97,
    "active": true
  },
  {
    "slug": "milwaukee-48005026",
    "name": "Milwaukee SAWZALL The AX 9\" 5 TPI - Hoja para Madera con Clavos (Pack x5)",
    "description": "Pack de 5 hojas Milwaukee The AX para sierra sable, de 9\" y 5 TPI, pensadas para demolición de madera con clavos incrustados. Diseño NAIL GUARD y punta FANG TIP.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48005026.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "48-00-5026"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Largo",
        "value": "9\""
      },
      {
        "label": "TPI",
        "value": "5"
      },
      {
        "label": "Cantidad por pack",
        "value": "5 hojas"
      },
      {
        "label": "Material",
        "value": "Bi-metal Matrix II, extra grueso"
      }
    ],
    "sort_group": 98,
    "active": true
  },
  {
    "slug": "milwaukee-48400720",
    "name": "Milwaukee Disco de Sierra Circular para Enmarcado 7-1/4\" 24 Dientes",
    "description": "Disco de sierra circular Milwaukee de 7-1/4\" con 24 dientes de carburo infundido con cobalto, ventilación tipo diamante para corte más fresco. Apto para sierras con y sin cable.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48400720.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "48-40-0720"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Diámetro",
        "value": "7-1/4\""
      },
      {
        "label": "Cantidad de dientes",
        "value": "24"
      },
      {
        "label": "Material de dientes",
        "value": "Carburo infundido con cobalto"
      },
      {
        "label": "Uso",
        "value": "Enmarcado en madera y derivados"
      }
    ],
    "sort_group": 99,
    "active": true
  },
  {
    "slug": "milwaukee-48400726",
    "name": "Milwaukee Disco de Sierra Circular 7-1/4\" 40 Dientes Fine Finish",
    "description": "Hoja de sierra circular de 7-1/4 pulgadas con 40 dientes de carburo de tungsteno, diseñada para cortes finos y limpios en maderas duras, blandas, melamina, MDF y contrachapados.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48400726.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "48-40-0726"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Diámetro",
        "value": "7-1/4\""
      },
      {
        "label": "Cantidad de dientes",
        "value": "40T"
      },
      {
        "label": "Tipo de kerf",
        "value": "Delgado"
      },
      {
        "label": "Material de corte",
        "value": "Carburo de tungsteno infundido con cobalto"
      }
    ],
    "sort_group": 100,
    "active": true
  },
  {
    "slug": "milwaukee-48410710",
    "name": "Milwaukee Disco de Sierra Circular 7-1/4\" 24 Dientes para Enmarcado (Pack x10)",
    "description": "Hoja de sierra circular de 7-1/4 pulgadas con 24 dientes de carburo de tungsteno para trabajos de enmarcado y corte rápido en madera. Se comercializa en caja de 10 unidades.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48410710.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "48-41-0710"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Diámetro",
        "value": "7-1/4\""
      },
      {
        "label": "Cantidad de dientes",
        "value": "24T"
      },
      {
        "label": "Presentación",
        "value": "Caja de 10 unidades"
      },
      {
        "label": "RPM máximo",
        "value": "8.000 RPM"
      }
    ],
    "sort_group": 101,
    "active": true
  },
  {
    "slug": "milwaukee-48221500",
    "name": "Milwaukee FASTBACK Cutter Compacto Plegable",
    "description": "Cúter plegable compacto de la línea FASTBACK, con mecanismo de apertura de un solo movimiento para uso con una sola mano. Cambio de hoja sin herramientas, clip de cinturón de alambre resistente.",
    "price": 0,
    "category_slug": "herramientas-manuales",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48221500.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "48-22-1500"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Mecanismo",
        "value": "Apertura con una mano (press and flip)"
      },
      {
        "label": "Longitud",
        "value": "6,15 in"
      },
      {
        "label": "Peso",
        "value": "0,24 lb (109 g)"
      },
      {
        "label": "Clip de cinturón",
        "value": "Sí, tipo alambre"
      }
    ],
    "sort_group": 102,
    "active": true
  },
  {
    "slug": "milwaukee-48221512",
    "name": "Milwaukee Cutter Autorretráctil (Self-Retracting Utility Knife)",
    "description": "Cúter de hoja autorretráctil: la hoja se retrae automáticamente al soltar el botón. Cuerpo totalmente metálico, cambio de hoja sin herramientas y almacenamiento interno para 5 hojas.",
    "price": 0,
    "category_slug": "herramientas-manuales",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48221512.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "48-22-1512"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Mecanismo",
        "value": "Autorretráctil"
      },
      {
        "label": "Almacenamiento de hojas",
        "value": "5 hojas de repuesto"
      },
      {
        "label": "Cuerpo",
        "value": "Metálico, diseño delgado"
      }
    ],
    "sort_group": 103,
    "active": true
  },
  {
    "slug": "milwaukee-48221502",
    "name": "Milwaukee FASTBACK Cutter Plegable con Almacenamiento de Hojas",
    "description": "Cúter plegable de la línea FASTBACK con apertura de un solo movimiento, almacenamiento interno para 5 hojas de repuesto, pelacables integrado y gancho para cortar.",
    "price": 0,
    "category_slug": "herramientas-manuales",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48221502.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "48-22-1502"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Almacenamiento de hojas",
        "value": "5 hojas de repuesto"
      },
      {
        "label": "Funciones extra",
        "value": "Pelacables y gancho corta-cartón"
      },
      {
        "label": "Cuerpo",
        "value": "Metálico"
      }
    ],
    "sort_group": 104,
    "active": true
  },
  {
    "slug": "milwaukee-48899332",
    "name": "Milwaukee Broca Escalonada 6-32mm (13 Escalones)",
    "description": "Broca escalonada de acero de alta velocidad (HSS) con recubrimiento de óxido negro anticorrosivo, para perforar la mayoría de los metales con múltiples diámetros en una sola herramienta.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48899332.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "48-89-9332"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Rango de medidas",
        "value": "6 a 32 mm"
      },
      {
        "label": "Cantidad de escalones",
        "value": "13"
      },
      {
        "label": "Longitud total",
        "value": "92 mm"
      },
      {
        "label": "Material",
        "value": "Acero rápido (HSS)"
      }
    ],
    "sort_group": 105,
    "active": true
  },
  {
    "slug": "milwaukee-48899301",
    "name": "Milwaukee Broca Escalonada 4-12mm (9 Escalones)",
    "description": "Broca escalonada de acero de alta velocidad (HSS) con recubrimiento de óxido negro, ideal para perforar chapa, acero inoxidable y plástico en diámetros pequeños a medianos.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48899301.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "48-89-9301"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Rango de medidas",
        "value": "4 a 12 mm"
      },
      {
        "label": "Cantidad de escalones",
        "value": "9"
      },
      {
        "label": "Material",
        "value": "Acero rápido (HSS)"
      }
    ],
    "sort_group": 106,
    "active": true
  },
  {
    "slug": "milwaukee-48324006",
    "name": "Milwaukee SHOCKWAVE Set de Puntas y Accesorios de Impacto 40 Piezas",
    "description": "Set de 40 piezas de la línea SHOCKWAVE para taladro/atornillador de impacto: puntas Phillips, Torx, cuadradas, planas y hexagonales, portapuntas magnético, adaptadores para tubo y nueces magnéticas.",
    "price": 0,
    "category_slug": "herramientas-manuales",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48324006.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "48-32-4006"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Cantidad de piezas",
        "value": "40"
      },
      {
        "label": "Puntas incluidas",
        "value": "Phillips, Torx, Cuadrada, Plana, Hexagonal"
      },
      {
        "label": "Accesorios incluidos",
        "value": "Nueces magnéticas, adaptadores de tubo, portapuntas"
      }
    ],
    "sort_group": 107,
    "active": true
  },
  {
    "slug": "milwaukee-49220071",
    "name": "Milwaukee Set de Mechas Planas Universales para Madera 6 Piezas (6\")",
    "description": "Set de 6 mechas planas universales de 6 pulgadas para perforar orificios limpios y rápidos en madera, contrachapado, plástico y Fórmica. Filos que pueden reafilarse. Incluye estuche de transporte.",
    "price": 0,
    "category_slug": "herramientas-manuales",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/49220071.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "49-22-0071"
      },
      {
        "label": "Origen",
        "value": "Milwaukee (Techtronic Industries)"
      },
      {
        "label": "Cantidad de piezas",
        "value": "6"
      },
      {
        "label": "Medidas incluidas",
        "value": "3/8\", 1/2\", 5/8\", 3/4\", 7/8\", 1\""
      },
      {
        "label": "Material",
        "value": "Acero al carbono tratado térmicamente"
      },
      {
        "label": "Presentación",
        "value": "Estuche de transporte"
      }
    ],
    "sort_group": 108,
    "active": true
  },
  {
    "slug": "milwaukee-48111812",
    "name": "Milwaukee 48111812 — Baterías",
    "description": "Batería Milwaukee código 48111812, línea Baterías del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48111812.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "48111812"
      },
      {
        "label": "Línea",
        "value": "Baterías"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-48111813",
    "name": "Milwaukee 48111813 — Baterías",
    "description": "Batería Milwaukee código 48111813, línea Baterías del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48111813.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "48111813"
      },
      {
        "label": "Línea",
        "value": "Baterías"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-48111815",
    "name": "Milwaukee 48111815 — Baterías",
    "description": "Batería Milwaukee código 48111815, línea Baterías del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48111815.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "48111815"
      },
      {
        "label": "Línea",
        "value": "Baterías"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-48111835",
    "name": "Milwaukee 48111835 — Baterías",
    "description": "Batería Milwaukee código 48111835, línea Baterías del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48111835.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "48111835"
      },
      {
        "label": "Línea",
        "value": "Baterías"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-48111840",
    "name": "Milwaukee 48111840 — Baterías",
    "description": "Batería Milwaukee código 48111840, línea Baterías del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48111840.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "48111840"
      },
      {
        "label": "Línea",
        "value": "Baterías"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-48111850r",
    "name": "Milwaukee 48111850R — Baterías",
    "description": "Batería Milwaukee código 48111850R, línea Baterías del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48111850r.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "48111850R"
      },
      {
        "label": "Línea",
        "value": "Baterías"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-48111861",
    "name": "Milwaukee 48111861 — Baterías",
    "description": "Batería Milwaukee código 48111861, línea Baterías del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48111861.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "48111861"
      },
      {
        "label": "Línea",
        "value": "Baterías"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-48111865",
    "name": "Milwaukee 48111865 — Baterías",
    "description": "Batería Milwaukee código 48111865, línea Baterías del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48111865.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "48111865"
      },
      {
        "label": "Línea",
        "value": "Baterías"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-48111881",
    "name": "Milwaukee 48111881 — Baterías",
    "description": "Batería Milwaukee código 48111881, línea Baterías del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48111881.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "48111881"
      },
      {
        "label": "Línea",
        "value": "Baterías"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-48111890",
    "name": "Milwaukee 48111890 — Baterías",
    "description": "Batería Milwaukee código 48111890, línea Baterías del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48111890.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "48111890"
      },
      {
        "label": "Línea",
        "value": "Baterías"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-48112131",
    "name": "Milwaukee 48112131 — Baterías",
    "description": "Batería Milwaukee código 48112131, línea Baterías del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48112131.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "48112131"
      },
      {
        "label": "Línea",
        "value": "Baterías"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-48112159",
    "name": "Milwaukee 48112159 — Baterías",
    "description": "Batería Milwaukee código 48112159, línea Baterías del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48112159.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "48112159"
      },
      {
        "label": "Línea",
        "value": "Baterías"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-48112401",
    "name": "Milwaukee 48112401 — Baterías",
    "description": "Batería Milwaukee código 48112401, línea Baterías del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48112401.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "48112401"
      },
      {
        "label": "Línea",
        "value": "Baterías"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-48112402",
    "name": "Milwaukee 48112402 — Baterías",
    "description": "Batería Milwaukee código 48112402, línea Baterías del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48112402.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "48112402"
      },
      {
        "label": "Línea",
        "value": "Baterías"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-48112420",
    "name": "Milwaukee 48112420 — Baterías",
    "description": "Batería Milwaukee código 48112420, línea Baterías del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48112420.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "48112420"
      },
      {
        "label": "Línea",
        "value": "Baterías"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-48112425",
    "name": "Milwaukee 48112425 — Baterías",
    "description": "Batería Milwaukee código 48112425, línea Baterías del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48112425.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "48112425"
      },
      {
        "label": "Línea",
        "value": "Baterías"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-48112430",
    "name": "Milwaukee 48112430 — Baterías",
    "description": "Batería Milwaukee código 48112430, línea Baterías del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48112430.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "48112430"
      },
      {
        "label": "Línea",
        "value": "Baterías"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-48112440",
    "name": "Milwaukee 48112440 — Baterías",
    "description": "Batería Milwaukee código 48112440, línea Baterías del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48112440.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "48112440"
      },
      {
        "label": "Línea",
        "value": "Baterías"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-48112450",
    "name": "Milwaukee 48112450 — Baterías",
    "description": "Batería Milwaukee código 48112450, línea Baterías del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48112450.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "48112450"
      },
      {
        "label": "Línea",
        "value": "Baterías"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-48112460",
    "name": "Milwaukee 48112460 — Baterías",
    "description": "Batería Milwaukee código 48112460, línea Baterías del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48112460.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "48112460"
      },
      {
        "label": "Línea",
        "value": "Baterías"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-48112659",
    "name": "Milwaukee 48112659 — Baterías",
    "description": "Batería Milwaukee código 48112659, línea Baterías del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48112659.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "48112659"
      },
      {
        "label": "Línea",
        "value": "Baterías"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-48112759",
    "name": "Milwaukee 48112759 — Baterías",
    "description": "Batería Milwaukee código 48112759, línea Baterías del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48112759.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "48112759"
      },
      {
        "label": "Línea",
        "value": "Baterías"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-481959a",
    "name": "Milwaukee 481959A — Cargadores",
    "description": "Cargador Milwaukee código 481959A, línea Cargadores del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/481959a.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "481959A"
      },
      {
        "label": "Línea",
        "value": "Cargadores"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-482259a",
    "name": "Milwaukee 482259A — Cargadores",
    "description": "Cargador Milwaukee código 482259A, línea Cargadores del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/482259a.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "482259A"
      },
      {
        "label": "Línea",
        "value": "Cargadores"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-482459a",
    "name": "Milwaukee 482459A — Cargadores",
    "description": "Cargador Milwaukee código 482459A, línea Cargadores del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/482459a.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "482459A"
      },
      {
        "label": "Línea",
        "value": "Cargadores"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-483959a",
    "name": "Milwaukee 483959A — Cargadores",
    "description": "Cargador Milwaukee código 483959A, línea Cargadores del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/483959a.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "483959A"
      },
      {
        "label": "Línea",
        "value": "Cargadores"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-48591201",
    "name": "Milwaukee 48591201 — Cargadores",
    "description": "Cargador Milwaukee código 48591201, línea Cargadores del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48591201.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "48591201"
      },
      {
        "label": "Línea",
        "value": "Cargadores"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-48591810",
    "name": "Milwaukee 48591810 — Cargadores",
    "description": "Cargador Milwaukee código 48591810, línea Cargadores del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48591810.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "48591810"
      },
      {
        "label": "Línea",
        "value": "Cargadores"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-48591859a",
    "name": "Milwaukee 48591859A — Cargadores",
    "description": "Cargador Milwaukee código 48591859A, línea Cargadores del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48591859a.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "48591859A"
      },
      {
        "label": "Línea",
        "value": "Cargadores"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-2680159a",
    "name": "Milwaukee 2680159A — Amoladoras",
    "description": "Herramienta Milwaukee código 2680159A, línea Amoladoras del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/2680159a.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "2680159A"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Amoladoras"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-2781159a",
    "name": "Milwaukee 2781159A — Amoladoras",
    "description": "Herramienta Milwaukee código 2781159A, línea Amoladoras del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/2781159a.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "2781159A"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Amoladoras"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-2785259hda",
    "name": "Milwaukee 2785259HDA — Amoladoras",
    "description": "Herramienta Milwaukee código 2785259HDA, línea Amoladoras del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/2785259hda.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "2785259HDA"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Amoladoras"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-288120",
    "name": "Milwaukee 288120 — Amoladoras",
    "description": "Herramienta Milwaukee código 288120, línea Amoladoras del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/288120.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "288120"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Amoladoras"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-288620",
    "name": "Milwaukee 288620 — Amoladoras",
    "description": "Herramienta Milwaukee código 288620, línea Amoladoras del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/288620.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "288620"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Amoladoras"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-2980159ax",
    "name": "Milwaukee 2980159AX — Amoladoras",
    "description": "Herramienta Milwaukee código 2980159AX, línea Amoladoras del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/2980159ax.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "2980159AX"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Amoladoras"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-298020",
    "name": "Milwaukee 298020 — Amoladoras",
    "description": "Herramienta Milwaukee código 298020, línea Amoladoras del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/298020.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "298020"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Amoladoras"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-298120",
    "name": "Milwaukee 298120 — Amoladoras",
    "description": "Herramienta Milwaukee código 298120, línea Amoladoras del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/298120.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "298120"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Amoladoras"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-298420",
    "name": "Milwaukee 298420 — Amoladoras",
    "description": "Herramienta Milwaukee código 298420, línea Amoladoras del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/298420.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "298420"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Amoladoras"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-2986259a",
    "name": "Milwaukee 2986259A — Amoladoras",
    "description": "Herramienta Milwaukee código 2986259A, línea Amoladoras del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/2986259a.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "2986259A"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Amoladoras"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-608659",
    "name": "Milwaukee 608659 — Amoladoras",
    "description": "Herramienta Milwaukee código 608659, línea Amoladoras del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/608659.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "608659"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Amoladoras"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-608759",
    "name": "Milwaukee 608759 — Amoladoras",
    "description": "Herramienta Milwaukee código 608759, línea Amoladoras del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/608759.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "608759"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Amoladoras"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-614259a",
    "name": "Milwaukee 614259A — Amoladoras",
    "description": "Herramienta Milwaukee código 614259A, línea Amoladoras del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/614259a.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "614259A"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Amoladoras"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-614959a",
    "name": "Milwaukee 614959A — Amoladoras",
    "description": "Herramienta Milwaukee código 614959A, línea Amoladoras del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/614959a.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "614959A"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Amoladoras"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-dg30qe",
    "name": "Milwaukee DG30QE — Amoladoras",
    "description": "Herramienta Milwaukee código DG30QE, línea Amoladoras del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/dg30qe.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "DG30QE"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Amoladoras"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-dgl30qe",
    "name": "Milwaukee DGL30QE — Amoladoras",
    "description": "Herramienta Milwaukee código DGL30QE, línea Amoladoras del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/dgl30qe.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "DGL30QE"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Amoladoras"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-dr350t",
    "name": "Milwaukee DR350T — Aparejos",
    "description": "Herramienta Milwaukee código DR350T, línea Aparejos del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/dr350t.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "DR350T"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Aparejos"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-088520",
    "name": "Milwaukee 088520 — Aspiradoras",
    "description": "Herramienta Milwaukee código 088520, línea Aspiradoras del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/088520.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "088520"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Aspiradoras"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-257920",
    "name": "Milwaukee 257920 — Bombas",
    "description": "Herramienta Milwaukee código 257920, línea Bombas del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/257920.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "257920"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Bombas"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-282820",
    "name": "Milwaukee 282820 — Bordeadora",
    "description": "Herramienta Milwaukee código 282820, línea Bordeadora del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/282820.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "282820"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Bordeadora"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-promo2828",
    "name": "Milwaukee PROMO2828 — Bordeadora",
    "description": "Herramienta Milwaukee código PROMO2828, línea Bordeadora del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/promo2828.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "PROMO2828"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Bordeadora"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-2311159a",
    "name": "Milwaukee 2311159A — Camaras",
    "description": "Herramienta Milwaukee código 2311159A, línea Camaras del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/2311159a.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "2311159A"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Camaras"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-2314159a",
    "name": "Milwaukee 2314159A — Camaras",
    "description": "Herramienta Milwaukee código 2314159A, línea Camaras del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/2314159a.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "2314159A"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Camaras"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-2407259a",
    "name": "Milwaukee 2407259A — Camaras",
    "description": "Herramienta Milwaukee código 2407259A, línea Camaras del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/2407259a.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "2407259A"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Camaras"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-262320",
    "name": "Milwaukee 262320 — Cepillos",
    "description": "Herramienta Milwaukee código 262320, línea Cepillos del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/262320.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "262320"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Cepillos"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-264820",
    "name": "Milwaukee 264820 — Cepillos",
    "description": "Herramienta Milwaukee código 264820, línea Cepillos del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/264820.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "264820"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Cepillos"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-lijadoracaladora",
    "name": "Milwaukee LIJADORACALADORA — Cepillos",
    "description": "Herramienta Milwaukee código LIJADORACALADORA, línea Cepillos del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/lijadoracaladora.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "LIJADORACALADORA"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Cepillos"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-263520",
    "name": "Milwaukee 263520 — Cizalla",
    "description": "Herramienta Milwaukee código 263520, línea Cizalla del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/263520.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "263520"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Cizalla"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-272620",
    "name": "Milwaukee 272620 — Cortacercos",
    "description": "Herramienta Milwaukee código 272620, línea Cortacercos del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/272620.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "272620"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Cortacercos"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-303320",
    "name": "Milwaukee 303320 — Cortacercos",
    "description": "Herramienta Milwaukee código 303320, línea Cortacercos del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/303320.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "303320"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Cortacercos"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-promo2726",
    "name": "Milwaukee PROMO2726 — Cortacercos",
    "description": "Herramienta Milwaukee código PROMO2726, línea Cortacercos del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/promo2726.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "PROMO2726"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Cortacercos"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-247020",
    "name": "Milwaukee 247020 — Cortatubos",
    "description": "Herramienta Milwaukee código 247020, línea Cortatubos del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/247020.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "247020"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Cortatubos"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-267822bg",
    "name": "Milwaukee 267822BG — Crimpeadora",
    "description": "Herramienta Milwaukee código 267822BG, línea Crimpeadora del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/267822bg.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "267822BG"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Crimpeadora"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-267822o",
    "name": "Milwaukee 267822O — Crimpeadora",
    "description": "Herramienta Milwaukee código 267822O, línea Crimpeadora del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/267822o.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "267822O"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Crimpeadora"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-267922",
    "name": "Milwaukee 267922 — Crimpeadora",
    "description": "Herramienta Milwaukee código 267922, línea Crimpeadora del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/267922.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "267922"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Crimpeadora"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-2679750a",
    "name": "Milwaukee 2679750A — Crimpeadora",
    "description": "Herramienta Milwaukee código 2679750A, línea Crimpeadora del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/2679750a.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "2679750A"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Crimpeadora"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-277721",
    "name": "Milwaukee 277721 — Crimpeadora",
    "description": "Herramienta Milwaukee código 277721, línea Crimpeadora del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/277721.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "277721"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Crimpeadora"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-277922",
    "name": "Milwaukee 277922 — Crimpeadora",
    "description": "Herramienta Milwaukee código 277922, línea Crimpeadora del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/277922.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "277922"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Crimpeadora"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-287622",
    "name": "Milwaukee 287622 — Crimpeadora",
    "description": "Herramienta Milwaukee código 287622, línea Crimpeadora del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/287622.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "287622"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Crimpeadora"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-2878k22",
    "name": "Milwaukee 2878K22 — Crimpeadora",
    "description": "Herramienta Milwaukee código 2878K22, línea Crimpeadora del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/2878k22.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "2878K22"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Crimpeadora"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-2457159a",
    "name": "Milwaukee 2457159A — Crique",
    "description": "Herramienta Milwaukee código 2457159A, línea Crique del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/2457159a.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "2457159A"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Crique"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-255820",
    "name": "Milwaukee 255820 — Crique",
    "description": "Herramienta Milwaukee código 255820, línea Crique del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/255820.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "255820"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Crique"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-2729159a",
    "name": "Milwaukee 2729159A — Electrosierras",
    "description": "Herramienta Milwaukee código 2729159A, línea Electrosierras del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/2729159a.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "2729159A"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Electrosierras"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-272920",
    "name": "Milwaukee 272920 — Electrosierras",
    "description": "Herramienta Milwaukee código 272920, línea Electrosierras del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/272920.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "272920"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Electrosierras"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-2646159a",
    "name": "Milwaukee 2646159A — Engrasadoras",
    "description": "Herramienta Milwaukee código 2646159A, línea Engrasadoras del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/2646159a.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "2646159A"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Engrasadoras"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-255520",
    "name": "Milwaukee 255520 — Impacto",
    "description": "Herramienta Milwaukee código 255520, línea Impacto del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/255520.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "255520"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Impacto"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-2555259ax",
    "name": "Milwaukee 2555259AX — Impacto",
    "description": "Herramienta Milwaukee código 2555259AX, línea Impacto del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/2555259ax.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "2555259AX"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Impacto"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-256320",
    "name": "Milwaukee 256320 — Impacto",
    "description": "Herramienta Milwaukee código 256320, línea Impacto del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/256320.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "256320"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Impacto"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-256520",
    "name": "Milwaukee 256520 — Impacto",
    "description": "Herramienta Milwaukee código 256520, línea Impacto del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/256520.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "256520"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Impacto"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-2664259a",
    "name": "Milwaukee 2664259A — Impacto",
    "description": "Herramienta Milwaukee código 2664259A, línea Impacto del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/2664259a.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "2664259A"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Impacto"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-275520",
    "name": "Milwaukee 275520 — Impacto",
    "description": "Herramienta Milwaukee código 275520, línea Impacto del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/275520.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "275520"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Impacto"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-285520",
    "name": "Milwaukee 285520 — Impacto",
    "description": "Herramienta Milwaukee código 285520, línea Impacto del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/285520.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "285520"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Impacto"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-286120",
    "name": "Milwaukee 286120 — Impacto",
    "description": "Herramienta Milwaukee código 286120, línea Impacto del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/286120.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "286120"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Impacto"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-286320",
    "name": "Milwaukee 286320 — Impacto",
    "description": "Herramienta Milwaukee código 286320, línea Impacto del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/286320.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "286320"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Impacto"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-2864259",
    "name": "Milwaukee 2864259 — Impacto",
    "description": "Herramienta Milwaukee código 2864259, línea Impacto del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/2864259.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "2864259"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Impacto"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-286720",
    "name": "Milwaukee 286720 — Impacto",
    "description": "Herramienta Milwaukee código 286720, línea Impacto del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/286720.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "286720"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Impacto"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-2867259ax",
    "name": "Milwaukee 2867259AX — Impacto",
    "description": "Herramienta Milwaukee código 2867259AX, línea Impacto del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/2867259ax.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "2867259AX"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Impacto"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-286820",
    "name": "Milwaukee 286820 — Impacto",
    "description": "Herramienta Milwaukee código 286820, línea Impacto del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/286820.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "286820"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Impacto"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-286920",
    "name": "Milwaukee 286920 — Impacto",
    "description": "Herramienta Milwaukee código 286920, línea Impacto del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/286920.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "286920"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Impacto"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-296220",
    "name": "Milwaukee 296220 — Impacto",
    "description": "Herramienta Milwaukee código 296220, línea Impacto del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/296220.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "296220"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Impacto"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-296720",
    "name": "Milwaukee 296720 — Impacto",
    "description": "Herramienta Milwaukee código 296720, línea Impacto del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/296720.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "296720"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Impacto"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-247520",
    "name": "Milwaukee 247520 — Infladores",
    "description": "Herramienta Milwaukee código 247520, línea Infladores del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/247520.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "247520"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Infladores"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-24202593453p",
    "name": "Milwaukee 24202593453P — Kits",
    "description": "Herramienta Milwaukee código 24202593453P, línea Kits del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/24202593453p.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "24202593453P"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Kits"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-2472159a",
    "name": "Milwaukee 2472159A — Kits",
    "description": "Herramienta Milwaukee código 2472159A, línea Kits del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/2472159a.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "2472159A"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Kits"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-24972592565p",
    "name": "Milwaukee 24972592565P — Kits",
    "description": "Herramienta Milwaukee código 24972592565P, línea Kits del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/24972592565p.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "24972592565P"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Kits"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-25502415159p",
    "name": "Milwaukee 25502415159P — Kits",
    "description": "Herramienta Milwaukee código 25502415159P, línea Kits del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/25502415159p.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "25502415159P"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Kits"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-2606159p",
    "name": "Milwaukee 2606159P — Kits",
    "description": "Herramienta Milwaukee código 2606159P, línea Kits del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/2606159p.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "2606159P"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Kits"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-2607159axpuntas",
    "name": "Milwaukee 2607159AXPUNTAS — Kits",
    "description": "Herramienta Milwaukee código 2607159AXPUNTAS, línea Kits del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/2607159axpuntas.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "2607159AXPUNTAS"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Kits"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-2623159ax",
    "name": "Milwaukee 2623159AX — Kits",
    "description": "Herramienta Milwaukee código 2623159AX, línea Kits del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/2623159ax.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "2623159AX"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Kits"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-2648159ax",
    "name": "Milwaukee 2648159AX — Kits",
    "description": "Herramienta Milwaukee código 2648159AX, línea Kits del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/2648159ax.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "2648159AX"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Kits"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-2715259ax",
    "name": "Milwaukee 2715259AX — Kits",
    "description": "Herramienta Milwaukee código 2715259AX, línea Kits del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/2715259ax.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "2715259AX"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Kits"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-2776r21",
    "name": "Milwaukee 2776R21 — Kits",
    "description": "Herramienta Milwaukee código 2776R21, línea Kits del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/2776r21.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "2776R21"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Kits"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-2782259ax",
    "name": "Milwaukee 2782259AX — Kits",
    "description": "Herramienta Milwaukee código 2782259AX, línea Kits del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/2782259ax.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "2782259AX"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Kits"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-2853259ax",
    "name": "Milwaukee 2853259AX — Kits",
    "description": "Herramienta Milwaukee código 2853259AX, línea Kits del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/2853259ax.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "2853259AX"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Kits"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-2855259ax",
    "name": "Milwaukee 2855259AX — Kits",
    "description": "Herramienta Milwaukee código 2855259AX, línea Kits del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/2855259ax.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "2855259AX"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Kits"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-2863259ax",
    "name": "Milwaukee 2863259AX — Kits",
    "description": "Herramienta Milwaukee código 2863259AX, línea Kits del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/2863259ax.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "2863259AX"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Kits"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-2864159p",
    "name": "Milwaukee 2864159P — Kits",
    "description": "Herramienta Milwaukee código 2864159P, línea Kits del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/2864159p.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "2864159P"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Kits"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-2864259ax",
    "name": "Milwaukee 2864259AX — Kits",
    "description": "Herramienta Milwaukee código 2864259AX, línea Kits del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/2864259ax.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "2864259AX"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Kits"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-2866259ax",
    "name": "Milwaukee 2866259AX — Kits",
    "description": "Herramienta Milwaukee código 2866259AX, línea Kits del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/2866259ax.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "2866259AX"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Kits"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-2868259ax",
    "name": "Milwaukee 2868259AX — Kits",
    "description": "Herramienta Milwaukee código 2868259AX, línea Kits del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/2868259ax.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "2868259AX"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Kits"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-2880159ax",
    "name": "Milwaukee 2880159AX — Kits",
    "description": "Herramienta Milwaukee código 2880159AX, línea Kits del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/2880159ax.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "2880159AX"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Kits"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-2880159p",
    "name": "Milwaukee 2880159P — Kits",
    "description": "Herramienta Milwaukee código 2880159P, línea Kits del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/2880159p.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "2880159P"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Kits"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-2881159ax",
    "name": "Milwaukee 2881159AX — Kits",
    "description": "Herramienta Milwaukee código 2881159AX, línea Kits del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/2881159ax.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "2881159AX"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Kits"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-2900259ax",
    "name": "Milwaukee 2900259AX — Kits",
    "description": "Herramienta Milwaukee código 2900259AX, línea Kits del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/2900259ax.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "2900259AX"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Kits"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-2953159",
    "name": "Milwaukee 2953159 — Kits",
    "description": "Herramienta Milwaukee código 2953159, línea Kits del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/2953159.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "2953159"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Kits"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-2953159p",
    "name": "Milwaukee 2953159P — Kits",
    "description": "Herramienta Milwaukee código 2953159P, línea Kits del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/2953159p.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "2953159P"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Kits"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-2962259ax",
    "name": "Milwaukee 2962259AX — Kits",
    "description": "Herramienta Milwaukee código 2962259AX, línea Kits del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/2962259ax.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "2962259AX"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Kits"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-2982159ax",
    "name": "Milwaukee 2982159AX — Kits",
    "description": "Herramienta Milwaukee código 2982159AX, línea Kits del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/2982159ax.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "2982159AX"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Kits"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-promo26062723",
    "name": "Milwaukee PROMO26062723 — Kits",
    "description": "Herramienta Milwaukee código PROMO26062723, línea Kits del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/promo26062723.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "PROMO26062723"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Kits"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-promo26072737",
    "name": "Milwaukee PROMO26072737 — Kits",
    "description": "Herramienta Milwaukee código PROMO26072737, línea Kits del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/promo26072737.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "PROMO26072737"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Kits"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-sierram12packout",
    "name": "Milwaukee SIERRAM12PACKOUT — Kits",
    "description": "Herramienta Milwaukee código SIERRAM12PACKOUT, línea Kits del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/sierram12packout.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "SIERRAM12PACKOUT"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Kits"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-talremachm12",
    "name": "Milwaukee TALREMACHM12 — Kits",
    "description": "Herramienta Milwaukee código TALREMACHM12, línea Kits del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/talremachm12.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "TALREMACHM12"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Kits"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-526259a",
    "name": "Milwaukee 526259A — Martillos",
    "description": "Herramienta Milwaukee código 526259A, línea Martillos del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/526259a.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "526259A"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Martillos"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-534759a",
    "name": "Milwaukee 534759A — Martillos",
    "description": "Herramienta Milwaukee código 534759A, línea Martillos del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/534759a.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "534759A"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Martillos"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-2460159a",
    "name": "Milwaukee 2460159A — Mini torno",
    "description": "Herramienta Milwaukee código 2460159A, línea Mini torno del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/2460159a.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "2460159A"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Mini torno"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-246020",
    "name": "Milwaukee 246020 — Mini torno",
    "description": "Herramienta Milwaukee código 246020, línea Mini torno del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/246020.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "246020"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Mini torno"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-252720",
    "name": "Milwaukee 252720 — Motosierras",
    "description": "Herramienta Milwaukee código 252720, línea Motosierras del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/252720.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "252720"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Motosierras"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-272720",
    "name": "Milwaukee 272720 — Motosierras",
    "description": "Herramienta Milwaukee código 272720, línea Motosierras del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/272720.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "272720"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Motosierras"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-2426159a",
    "name": "Milwaukee 2426159A — Multiple",
    "description": "Herramienta Milwaukee código 2426159A, línea Multiple del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/2426159a.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "2426159A"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Multiple"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-242620",
    "name": "Milwaukee 242620 — Multiple",
    "description": "Herramienta Milwaukee código 242620, línea Multiple del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/242620.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "242620"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Multiple"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-252620",
    "name": "Milwaukee 252620 — Multiple",
    "description": "Herramienta Milwaukee código 252620, línea Multiple del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/252620.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "252620"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Multiple"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-2626159a",
    "name": "Milwaukee 2626159A — Multiple",
    "description": "Herramienta Milwaukee código 2626159A, línea Multiple del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/2626159a.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "2626159A"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Multiple"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-268820",
    "name": "Milwaukee 268820 — Pistola calor",
    "description": "Herramienta Milwaukee código 268820, línea Pistola calor del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/268820.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "268820"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Pistola calor"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-2641159a",
    "name": "Milwaukee 2641159A — Pistola silicona",
    "description": "Herramienta Milwaukee código 2641159A, línea Pistola silicona del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/2641159a.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "2641159A"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Pistola silicona"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-268420",
    "name": "Milwaukee 268420 — Pulidoras",
    "description": "Herramienta Milwaukee código 268420, línea Pulidoras del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/268420.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "268420"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Pulidoras"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-282020ps",
    "name": "Milwaukee 282020PS — Pulverizadora",
    "description": "Herramienta Milwaukee código 282020PS, línea Pulverizadora del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/282020ps.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "282020PS"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Pulverizadora"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-255020",
    "name": "Milwaukee 255020 — Remachadoras",
    "description": "Herramienta Milwaukee código 255020, línea Remachadoras del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/255020.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "255020"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Remachadoras"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-266020",
    "name": "Milwaukee 266020 — Remachadoras",
    "description": "Herramienta Milwaukee código 266020, línea Remachadoras del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/266020.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "266020"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Remachadoras"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-2416259a",
    "name": "Milwaukee 2416259A — Rotomartillos",
    "description": "Herramienta Milwaukee código 2416259A, línea Rotomartillos del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/2416259a.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "2416259A"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Rotomartillos"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-271520",
    "name": "Milwaukee 271520 — Rotomartillos",
    "description": "Herramienta Milwaukee código 271520, línea Rotomartillos del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/271520.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "271520"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Rotomartillos"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-272320",
    "name": "Milwaukee 272320 — Router",
    "description": "Herramienta Milwaukee código 272320, línea Router del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/272320.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "272320"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Router"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-617759a",
    "name": "Milwaukee 617759A — Sensitivas",
    "description": "Herramienta Milwaukee código 617759A, línea Sensitivas del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/617759a.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "617759A"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Sensitivas"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-2631259ax",
    "name": "Milwaukee 2631259AX — Sierras",
    "description": "Herramienta Milwaukee código 2631259AX, línea Sierras del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/2631259ax.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "2631259AX"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Sierras"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-272020",
    "name": "Milwaukee 272020 — Sierras",
    "description": "Herramienta Milwaukee código 272020, línea Sierras del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/272020.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "272020"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Sierras"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-273720",
    "name": "Milwaukee 273720 — Sierras",
    "description": "Herramienta Milwaukee código 273720, línea Sierras del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/273720.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "273720"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Sierras"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-278220",
    "name": "Milwaukee 278220 — Sierras",
    "description": "Herramienta Milwaukee código 278220, línea Sierras del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/278220.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "278220"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Sierras"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-292920",
    "name": "Milwaukee 292920 — Sierras",
    "description": "Herramienta Milwaukee código 292920, línea Sierras del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/292920.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "292920"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Sierras"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-298220",
    "name": "Milwaukee 298220 — Sierras",
    "description": "Herramienta Milwaukee código 298220, línea Sierras del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/298220.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "298220"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Sierras"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-637059a",
    "name": "Milwaukee 637059A — Sierras",
    "description": "Herramienta Milwaukee código 637059A, línea Sierras del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/637059a.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "637059A"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Sierras"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-272420",
    "name": "Milwaukee 272420 — Sopladoras",
    "description": "Herramienta Milwaukee código 272420, línea Sopladoras del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/272420.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "272420"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Sopladoras"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-301720",
    "name": "Milwaukee 301720 — Sopladoras",
    "description": "Herramienta Milwaukee código 301720, línea Sopladoras del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/301720.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "301720"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Sopladoras"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-216221",
    "name": "Milwaukee 216221 — Taladros y atornilladores",
    "description": "Herramienta Milwaukee código 216221, línea Taladros y atornilladores del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/216221.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "216221"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Taladros y atornilladores"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-240120",
    "name": "Milwaukee 240120 — Taladros y atornilladores",
    "description": "Herramienta Milwaukee código 240120, línea Taladros y atornilladores del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/240120.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "240120"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Taladros y atornilladores"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-2401259a",
    "name": "Milwaukee 2401259A — Taladros y atornilladores",
    "description": "Herramienta Milwaukee código 2401259A, línea Taladros y atornilladores del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/2401259a.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "2401259A"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Taladros y atornilladores"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-2402259a",
    "name": "Milwaukee 2402259A — Taladros y atornilladores",
    "description": "Herramienta Milwaukee código 2402259A, línea Taladros y atornilladores del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/2402259a.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "2402259A"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Taladros y atornilladores"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-2408159ax",
    "name": "Milwaukee 2408159AX — Taladros y atornilladores",
    "description": "Herramienta Milwaukee código 2408159AX, línea Taladros y atornilladores del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/2408159ax.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "2408159AX"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Taladros y atornilladores"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-240820",
    "name": "Milwaukee 240820 — Taladros y atornilladores",
    "description": "Herramienta Milwaukee código 240820, línea Taladros y atornilladores del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/240820.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "240820"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Taladros y atornilladores"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-2408259a",
    "name": "Milwaukee 2408259A — Taladros y atornilladores",
    "description": "Herramienta Milwaukee código 2408259A, línea Taladros y atornilladores del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/2408259a.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "2408259A"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Taladros y atornilladores"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-2415159a",
    "name": "Milwaukee 2415159A — Taladros y atornilladores",
    "description": "Herramienta Milwaukee código 2415159A, línea Taladros y atornilladores del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/2415159a.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "2415159A"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Taladros y atornilladores"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-2452259a",
    "name": "Milwaukee 2452259A — Taladros y atornilladores",
    "description": "Herramienta Milwaukee código 2452259A, línea Taladros y atornilladores del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/2452259a.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "2452259A"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Taladros y atornilladores"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-2454259a",
    "name": "Milwaukee 2454259A — Taladros y atornilladores",
    "description": "Herramienta Milwaukee código 2454259A, línea Taladros y atornilladores del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/2454259a.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "2454259A"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Taladros y atornilladores"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-2462259a",
    "name": "Milwaukee 2462259A — Taladros y atornilladores",
    "description": "Herramienta Milwaukee código 2462259A, línea Taladros y atornilladores del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/2462259a.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "2462259A"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Taladros y atornilladores"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-2497259a",
    "name": "Milwaukee 2497259A — Taladros y atornilladores",
    "description": "Herramienta Milwaukee código 2497259A, línea Taladros y atornilladores del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/2497259a.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "2497259A"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Taladros y atornilladores"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-250420",
    "name": "Milwaukee 250420 — Taladros y atornilladores",
    "description": "Herramienta Milwaukee código 250420, línea Taladros y atornilladores del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/250420.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "250420"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Taladros y atornilladores"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-2504259ax",
    "name": "Milwaukee 2504259AX — Taladros y atornilladores",
    "description": "Herramienta Milwaukee código 2504259AX, línea Taladros y atornilladores del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/2504259ax.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "2504259AX"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Taladros y atornilladores"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-255320",
    "name": "Milwaukee 255320 — Taladros y atornilladores",
    "description": "Herramienta Milwaukee código 255320, línea Taladros y atornilladores del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/255320.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "255320"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Taladros y atornilladores"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-2553259ax",
    "name": "Milwaukee 2553259AX — Taladros y atornilladores",
    "description": "Herramienta Milwaukee código 2553259AX, línea Taladros y atornilladores del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/2553259ax.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "2553259AX"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Taladros y atornilladores"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-2598259a",
    "name": "Milwaukee 2598259A — Taladros y atornilladores",
    "description": "Herramienta Milwaukee código 2598259A, línea Taladros y atornilladores del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/2598259a.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "2598259A"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Taladros y atornilladores"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-260720",
    "name": "Milwaukee 260720 — Taladros y atornilladores",
    "description": "Herramienta Milwaukee código 260720, línea Taladros y atornilladores del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/260720.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "260720"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Taladros y atornilladores"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-2653259ca",
    "name": "Milwaukee 2653259CA — Taladros y atornilladores",
    "description": "Herramienta Milwaukee código 2653259CA, línea Taladros y atornilladores del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/2653259ca.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "2653259CA"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Taladros y atornilladores"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-2657259a",
    "name": "Milwaukee 2657259A — Taladros y atornilladores",
    "description": "Herramienta Milwaukee código 2657259A, línea Taladros y atornilladores del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/2657259a.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "2657259A"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Taladros y atornilladores"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-285020",
    "name": "Milwaukee 285020 — Taladros y atornilladores",
    "description": "Herramienta Milwaukee código 285020, línea Taladros y atornilladores del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/285020.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "285020"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Taladros y atornilladores"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-285320",
    "name": "Milwaukee 285320 — Taladros y atornilladores",
    "description": "Herramienta Milwaukee código 285320, línea Taladros y atornilladores del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/285320.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "285320"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Taladros y atornilladores"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-2902159ax",
    "name": "Milwaukee 2902159AX — Taladros y atornilladores",
    "description": "Herramienta Milwaukee código 2902159AX, línea Taladros y atornilladores del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/2902159ax.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "2902159AX"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Taladros y atornilladores"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-290220",
    "name": "Milwaukee 290220 — Taladros y atornilladores",
    "description": "Herramienta Milwaukee código 290220, línea Taladros y atornilladores del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/290220.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "290220"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Taladros y atornilladores"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-2967259a",
    "name": "Milwaukee 2967259A — Taladros y atornilladores",
    "description": "Herramienta Milwaukee código 2967259A, línea Taladros y atornilladores del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/2967259a.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "2967259A"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Taladros y atornilladores"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-3403259a",
    "name": "Milwaukee 3403259A — Taladros y atornilladores",
    "description": "Herramienta Milwaukee código 3403259A, línea Taladros y atornilladores del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/3403259a.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "3403259A"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Taladros y atornilladores"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-3404259a",
    "name": "Milwaukee 3404259A — Taladros y atornilladores",
    "description": "Herramienta Milwaukee código 3404259A, línea Taladros y atornilladores del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/3404259a.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "3404259A"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Taladros y atornilladores"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-345320",
    "name": "Milwaukee 345320 — Taladros y atornilladores",
    "description": "Herramienta Milwaukee código 345320, línea Taladros y atornilladores del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/345320.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "345320"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Taladros y atornilladores"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-3497259a",
    "name": "Milwaukee 3497259A — Taladros y atornilladores",
    "description": "Herramienta Milwaukee código 3497259A, línea Taladros y atornilladores del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/3497259a.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "3497259A"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Taladros y atornilladores"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-360220",
    "name": "Milwaukee 360220 — Taladros y atornilladores",
    "description": "Herramienta Milwaukee código 360220, línea Taladros y atornilladores del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/360220.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "360220"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Taladros y atornilladores"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-365020",
    "name": "Milwaukee 365020 — Taladros y atornilladores",
    "description": "Herramienta Milwaukee código 365020, línea Taladros y atornilladores del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/365020.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "365020"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Taladros y atornilladores"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-427459a",
    "name": "Milwaukee 427459A — Taladros y atornilladores",
    "description": "Herramienta Milwaukee código 427459A, línea Taladros y atornilladores del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/427459a.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "427459A"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Taladros y atornilladores"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-537459a",
    "name": "Milwaukee 537459A — Taladros y atornilladores",
    "description": "Herramienta Milwaukee código 537459A, línea Taladros y atornilladores del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/537459a.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "537459A"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Taladros y atornilladores"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-537459apromo",
    "name": "Milwaukee 537459APROMO — Taladros y atornilladores",
    "description": "Herramienta Milwaukee código 537459APROMO, línea Taladros y atornilladores del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/537459apromo.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "537459APROMO"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Taladros y atornilladores"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-537559a",
    "name": "Milwaukee 537559A — Taladros y atornilladores",
    "description": "Herramienta Milwaukee código 537559A, línea Taladros y atornilladores del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/537559a.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "537559A"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Taladros y atornilladores"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-537859a",
    "name": "Milwaukee 537859A — Taladros y atornilladores",
    "description": "Herramienta Milwaukee código 537859A, línea Taladros y atornilladores del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/537859a.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "537859A"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Taladros y atornilladores"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-538659a",
    "name": "Milwaukee 538659A — Taladros y atornilladores",
    "description": "Herramienta Milwaukee código 538659A, línea Taladros y atornilladores del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/538659a.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "538659A"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Taladros y atornilladores"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-674259a",
    "name": "Milwaukee 674259A — Taladros y atornilladores",
    "description": "Herramienta Milwaukee código 674259A, línea Taladros y atornilladores del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/674259a.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "674259A"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Taladros y atornilladores"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-dcm2350c",
    "name": "Milwaukee DCM2350C — Taladros y atornilladores",
    "description": "Herramienta Milwaukee código DCM2350C, línea Taladros y atornilladores del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/dcm2350c.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "DCM2350C"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Taladros y atornilladores"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-088620",
    "name": "Milwaukee 088620 — Ventiladores",
    "description": "Herramienta Milwaukee código 088620, línea Ventiladores del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/088620.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "088620"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas > Ventiladores"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-289120",
    "name": "Milwaukee 289120 — Herramientas eléctricas",
    "description": "Herramienta Milwaukee código 289120, línea Herramientas eléctricas del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/289120.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "289120"
      },
      {
        "label": "Línea",
        "value": "Herramientas eléctricas"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-48221017m",
    "name": "Milwaukee 48221017M — Cintas metricas",
    "description": "Herramienta manual Milwaukee código 48221017M, línea Cintas metricas del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-manuales",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48221017m.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "48221017M"
      },
      {
        "label": "Línea",
        "value": "Herramientas manuales > Cintas metricas"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-48221026m",
    "name": "Milwaukee 48221026M — Cintas metricas",
    "description": "Herramienta manual Milwaukee código 48221026M, línea Cintas metricas del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-manuales",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48221026m.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "48221026M"
      },
      {
        "label": "Línea",
        "value": "Herramientas manuales > Cintas metricas"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-48221717",
    "name": "Milwaukee 48221717 — Cintas metricas",
    "description": "Herramienta manual Milwaukee código 48221717, línea Cintas metricas del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-manuales",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48221717.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "48221717"
      },
      {
        "label": "Línea",
        "value": "Herramientas manuales > Cintas metricas"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-48221726",
    "name": "Milwaukee 48221726 — Cintas metricas",
    "description": "Herramienta manual Milwaukee código 48221726, línea Cintas metricas del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-manuales",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48221726.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "48221726"
      },
      {
        "label": "Línea",
        "value": "Herramientas manuales > Cintas metricas"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-48227704",
    "name": "Milwaukee 48227704 — Cintas metricas",
    "description": "Herramienta manual Milwaukee código 48227704, línea Cintas metricas del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-manuales",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48227704.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "48227704"
      },
      {
        "label": "Línea",
        "value": "Herramientas manuales > Cintas metricas"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-48227718",
    "name": "Milwaukee 48227718 — Cintas metricas",
    "description": "Herramienta manual Milwaukee código 48227718, línea Cintas metricas del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-manuales",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48227718.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "48227718"
      },
      {
        "label": "Línea",
        "value": "Herramientas manuales > Cintas metricas"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-48221510",
    "name": "Milwaukee 48221510 — Cuters",
    "description": "Herramienta manual Milwaukee código 48221510, línea Cuters del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-manuales",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48221510.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "48221510"
      },
      {
        "label": "Línea",
        "value": "Herramientas manuales > Cuters"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-48221515",
    "name": "Milwaukee 48221515 — Cuters",
    "description": "Herramienta manual Milwaukee código 48221515, línea Cuters del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-manuales",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48221515.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "48221515"
      },
      {
        "label": "Línea",
        "value": "Herramientas manuales > Cuters"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-48221901",
    "name": "Milwaukee 48221901 — Cuters",
    "description": "Herramienta manual Milwaukee código 48221901, línea Cuters del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-manuales",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48221901.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "48221901"
      },
      {
        "label": "Línea",
        "value": "Herramientas manuales > Cuters"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-48221965",
    "name": "Milwaukee 48221965 — Cuters",
    "description": "Herramienta manual Milwaukee código 48221965, línea Cuters del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-manuales",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48221965.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "48221965"
      },
      {
        "label": "Línea",
        "value": "Herramientas manuales > Cuters"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-48221999",
    "name": "Milwaukee 48221999 — Cuters",
    "description": "Herramienta manual Milwaukee código 48221999, línea Cuters del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-manuales",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48221999.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "48221999"
      },
      {
        "label": "Línea",
        "value": "Herramientas manuales > Cuters"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-48222130",
    "name": "Milwaukee 48222130 — Destornilladores",
    "description": "Herramienta manual Milwaukee código 48222130, línea Destornilladores del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-manuales",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48222130.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "48222130"
      },
      {
        "label": "Línea",
        "value": "Herramientas manuales > Destornilladores"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-48222204",
    "name": "Milwaukee 48222204 — Destornilladores",
    "description": "Herramienta manual Milwaukee código 48222204, línea Destornilladores del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-manuales",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48222204.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "48222204"
      },
      {
        "label": "Línea",
        "value": "Herramientas manuales > Destornilladores"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-48222330",
    "name": "Milwaukee 48222330 — Destornilladores",
    "description": "Herramienta manual Milwaukee código 48222330, línea Destornilladores del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-manuales",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48222330.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "48222330"
      },
      {
        "label": "Línea",
        "value": "Herramientas manuales > Destornilladores"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-48222606",
    "name": "Milwaukee 48222606 — Destornilladores",
    "description": "Herramienta manual Milwaukee código 48222606, línea Destornilladores del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-manuales",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48222606.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "48222606"
      },
      {
        "label": "Línea",
        "value": "Herramientas manuales > Destornilladores"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-48222610",
    "name": "Milwaukee 48222610 — Destornilladores",
    "description": "Herramienta manual Milwaukee código 48222610, línea Destornilladores del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-manuales",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48222610.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "48222610"
      },
      {
        "label": "Línea",
        "value": "Herramientas manuales > Destornilladores"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-48222706",
    "name": "Milwaukee 48222706 — Destornilladores",
    "description": "Herramienta manual Milwaukee código 48222706, línea Destornilladores del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-manuales",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48222706.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "48222706"
      },
      {
        "label": "Línea",
        "value": "Herramientas manuales > Destornilladores"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-48222710",
    "name": "Milwaukee 48222710 — Destornilladores",
    "description": "Herramienta manual Milwaukee código 48222710, línea Destornilladores del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-manuales",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48222710.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "48222710"
      },
      {
        "label": "Línea",
        "value": "Herramientas manuales > Destornilladores"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-48222886",
    "name": "Milwaukee 48222886 — Destornilladores",
    "description": "Herramienta manual Milwaukee código 48222886, línea Destornilladores del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-manuales",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48222886.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "48222886"
      },
      {
        "label": "Línea",
        "value": "Herramientas manuales > Destornilladores"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-48227406",
    "name": "Milwaukee 48227406 — Llaves",
    "description": "Herramienta manual Milwaukee código 48227406, línea Llaves del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-manuales",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48227406.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "48227406"
      },
      {
        "label": "Línea",
        "value": "Herramientas manuales > Llaves"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-48227408",
    "name": "Milwaukee 48227408 — Llaves",
    "description": "Herramienta manual Milwaukee código 48227408, línea Llaves del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-manuales",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48227408.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "48227408"
      },
      {
        "label": "Línea",
        "value": "Herramientas manuales > Llaves"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-48227410",
    "name": "Milwaukee 48227410 — Llaves",
    "description": "Herramienta manual Milwaukee código 48227410, línea Llaves del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-manuales",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48227410.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "48227410"
      },
      {
        "label": "Línea",
        "value": "Herramientas manuales > Llaves"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-48227412",
    "name": "Milwaukee 48227412 — Llaves",
    "description": "Herramienta manual Milwaukee código 48227412, línea Llaves del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-manuales",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48227412.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "48227412"
      },
      {
        "label": "Línea",
        "value": "Herramientas manuales > Llaves"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-48227415",
    "name": "Milwaukee 48227415 — Llaves",
    "description": "Herramienta manual Milwaukee código 48227415, línea Llaves del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-manuales",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48227415.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "48227415"
      },
      {
        "label": "Línea",
        "value": "Herramientas manuales > Llaves"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-4932367712",
    "name": "Milwaukee 4932367712 — Llaves",
    "description": "Herramienta manual Milwaukee código 4932367712, línea Llaves del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-manuales",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/4932367712.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "4932367712"
      },
      {
        "label": "Línea",
        "value": "Herramientas manuales > Llaves"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-48223068",
    "name": "Milwaukee 48223068 — Pinzas",
    "description": "Herramienta manual Milwaukee código 48223068, línea Pinzas del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-manuales",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48223068.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "48223068"
      },
      {
        "label": "Línea",
        "value": "Herramientas manuales > Pinzas"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-48223079",
    "name": "Milwaukee 48223079 — Pinzas",
    "description": "Herramienta manual Milwaukee código 48223079, línea Pinzas del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-manuales",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48223079.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "48223079"
      },
      {
        "label": "Línea",
        "value": "Herramientas manuales > Pinzas"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-48223409",
    "name": "Milwaukee 48223409 — Pinzas",
    "description": "Herramienta manual Milwaukee código 48223409, línea Pinzas del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-manuales",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48223409.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "48223409"
      },
      {
        "label": "Línea",
        "value": "Herramientas manuales > Pinzas"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-48223607",
    "name": "Milwaukee 48223607 — Pinzas",
    "description": "Herramienta manual Milwaukee código 48223607, línea Pinzas del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-manuales",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48223607.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "48223607"
      },
      {
        "label": "Línea",
        "value": "Herramientas manuales > Pinzas"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-4932313194",
    "name": "Milwaukee 4932313194 — Pinzas",
    "description": "Herramienta manual Milwaukee código 4932313194, línea Pinzas del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-manuales",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/4932313194.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "4932313194"
      },
      {
        "label": "Línea",
        "value": "Herramientas manuales > Pinzas"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-48220304",
    "name": "Milwaukee 48220304 — Serrucho",
    "description": "Herramienta manual Milwaukee código 48220304, línea Serrucho del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-manuales",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48220304.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "48220304"
      },
      {
        "label": "Línea",
        "value": "Herramientas manuales > Serrucho"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-48222322",
    "name": "Milwaukee 48222322 — Sets",
    "description": "Herramienta manual Milwaukee código 48222322, línea Sets del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-manuales",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48222322.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "48222322"
      },
      {
        "label": "Línea",
        "value": "Herramientas manuales > Sets"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-48321551",
    "name": "Milwaukee 48321551 — Sets",
    "description": "Herramienta manual Milwaukee código 48321551, línea Sets del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-manuales",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48321551.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "48321551"
      },
      {
        "label": "Línea",
        "value": "Herramientas manuales > Sets"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-48324004",
    "name": "Milwaukee 48324004 — Sets",
    "description": "Herramienta manual Milwaukee código 48324004, línea Sets del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-manuales",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48324004.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "48324004"
      },
      {
        "label": "Línea",
        "value": "Herramientas manuales > Sets"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-48324010",
    "name": "Milwaukee 48324010 — Sets",
    "description": "Herramienta manual Milwaukee código 48324010, línea Sets del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-manuales",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48324010.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "48324010"
      },
      {
        "label": "Línea",
        "value": "Herramientas manuales > Sets"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-48324408",
    "name": "Milwaukee 48324408 — Sets",
    "description": "Herramienta manual Milwaukee código 48324408, línea Sets del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-manuales",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48324408.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "48324408"
      },
      {
        "label": "Línea",
        "value": "Herramientas manuales > Sets"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-48891561",
    "name": "Milwaukee 48891561 — Sets",
    "description": "Herramienta manual Milwaukee código 48891561, línea Sets del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-manuales",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48891561.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "48891561"
      },
      {
        "label": "Línea",
        "value": "Herramientas manuales > Sets"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-48224040",
    "name": "Milwaukee 48224040 — Tijeras",
    "description": "Herramienta manual Milwaukee código 48224040, línea Tijeras del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-manuales",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48224040.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "48224040"
      },
      {
        "label": "Línea",
        "value": "Herramientas manuales > Tijeras"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-48224046",
    "name": "Milwaukee 48224046 — Tijeras",
    "description": "Herramienta manual Milwaukee código 48224046, línea Tijeras del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-manuales",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48224046.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "48224046"
      },
      {
        "label": "Línea",
        "value": "Herramientas manuales > Tijeras"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-48224510",
    "name": "Milwaukee 48224510 — Tijeras",
    "description": "Herramienta manual Milwaukee código 48224510, línea Tijeras del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-manuales",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48224510.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "48224510"
      },
      {
        "label": "Línea",
        "value": "Herramientas manuales > Tijeras"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-48224520",
    "name": "Milwaukee 48224520 — Tijeras",
    "description": "Herramienta manual Milwaukee código 48224520, línea Tijeras del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-manuales",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48224520.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "48224520"
      },
      {
        "label": "Línea",
        "value": "Herramientas manuales > Tijeras"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-48224530",
    "name": "Milwaukee 48224530 — Tijeras",
    "description": "Herramienta manual Milwaukee código 48224530, línea Tijeras del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-manuales",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48224530.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "48224530"
      },
      {
        "label": "Línea",
        "value": "Herramientas manuales > Tijeras"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-48224550",
    "name": "Milwaukee 48224550 — Tijeras",
    "description": "Herramienta manual Milwaukee código 48224550, línea Tijeras del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-manuales",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48224550.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "48224550"
      },
      {
        "label": "Línea",
        "value": "Herramientas manuales > Tijeras"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-48224560",
    "name": "Milwaukee 48224560 — Tijeras",
    "description": "Herramienta manual Milwaukee código 48224560, línea Tijeras del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-manuales",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48224560.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "48224560"
      },
      {
        "label": "Línea",
        "value": "Herramientas manuales > Tijeras"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-2013r",
    "name": "Milwaukee 2013R — Iluminación",
    "description": "Iluminación Milwaukee código 2013R, línea Iluminación del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/2013r.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "2013R"
      },
      {
        "label": "Línea",
        "value": "Iluminación"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-211021",
    "name": "Milwaukee 211021 — Iluminación",
    "description": "Iluminación Milwaukee código 211021, línea Iluminación del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/211021.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "211021"
      },
      {
        "label": "Línea",
        "value": "Iluminación"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-211121",
    "name": "Milwaukee 211121 — Iluminación",
    "description": "Iluminación Milwaukee código 211121, línea Iluminación del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/211121.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "211121"
      },
      {
        "label": "Línea",
        "value": "Iluminación"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-211221",
    "name": "Milwaukee 211221 — Iluminación",
    "description": "Iluminación Milwaukee código 211221, línea Iluminación del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/211221.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "211221"
      },
      {
        "label": "Línea",
        "value": "Iluminación"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-212220",
    "name": "Milwaukee 212220 — Iluminación",
    "description": "Iluminación Milwaukee código 212220, línea Iluminación del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/212220.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "212220"
      },
      {
        "label": "Línea",
        "value": "Iluminación"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-212520",
    "name": "Milwaukee 212520 — Iluminación",
    "description": "Iluminación Milwaukee código 212520, línea Iluminación del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/212520.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "212520"
      },
      {
        "label": "Línea",
        "value": "Iluminación"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-212821",
    "name": "Milwaukee 212821 — Iluminación",
    "description": "Iluminación Milwaukee código 212821, línea Iluminación del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/212821.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "212821"
      },
      {
        "label": "Línea",
        "value": "Iluminación"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-2130059",
    "name": "Milwaukee 2130059 — Iluminación",
    "description": "Iluminación Milwaukee código 2130059, línea Iluminación del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/2130059.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "2130059"
      },
      {
        "label": "Línea",
        "value": "Iluminación"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-213120",
    "name": "Milwaukee 213120 — Iluminación",
    "description": "Iluminación Milwaukee código 213120, línea Iluminación del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/213120.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "213120"
      },
      {
        "label": "Línea",
        "value": "Iluminación"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-216321",
    "name": "Milwaukee 216321 — Iluminación",
    "description": "Iluminación Milwaukee código 216321, línea Iluminación del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/216321.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "216321"
      },
      {
        "label": "Línea",
        "value": "Iluminación"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-235420",
    "name": "Milwaukee 235420 — Iluminación",
    "description": "Iluminación Milwaukee código 235420, línea Iluminación del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/235420.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "235420"
      },
      {
        "label": "Línea",
        "value": "Iluminación"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-235620",
    "name": "Milwaukee 235620 — Iluminación",
    "description": "Iluminación Milwaukee código 235620, línea Iluminación del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/235620.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "235620"
      },
      {
        "label": "Línea",
        "value": "Iluminación"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-235820",
    "name": "Milwaukee 235820 — Iluminación",
    "description": "Iluminación Milwaukee código 235820, línea Iluminación del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/235820.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "235820"
      },
      {
        "label": "Línea",
        "value": "Iluminación"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-2360059",
    "name": "Milwaukee 2360059 — Iluminación",
    "description": "Iluminación Milwaukee código 2360059, línea Iluminación del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/2360059.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "2360059"
      },
      {
        "label": "Línea",
        "value": "Iluminación"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-236120",
    "name": "Milwaukee 236120 — Iluminación",
    "description": "Iluminación Milwaukee código 236120, línea Iluminación del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/236120.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "236120"
      },
      {
        "label": "Línea",
        "value": "Iluminación"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-236420",
    "name": "Milwaukee 236420 — Iluminación",
    "description": "Iluminación Milwaukee código 236420, línea Iluminación del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/236420.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "236420"
      },
      {
        "label": "Línea",
        "value": "Iluminación"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-236520",
    "name": "Milwaukee 236520 — Iluminación",
    "description": "Iluminación Milwaukee código 236520, línea Iluminación del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/236520.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "236520"
      },
      {
        "label": "Línea",
        "value": "Iluminación"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-236720",
    "name": "Milwaukee 236720 — Iluminación",
    "description": "Iluminación Milwaukee código 236720, línea Iluminación del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/236720.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "236720"
      },
      {
        "label": "Línea",
        "value": "Iluminación"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-49240146",
    "name": "Milwaukee 49240146 — Iluminación",
    "description": "Iluminación Milwaukee código 49240146, línea Iluminación del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "herramientas-electricas",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/49240146.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "49240146"
      },
      {
        "label": "Línea",
        "value": "Iluminación"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-48228200",
    "name": "Milwaukee 48228200 — Packout y bolsos",
    "description": "Almacenamiento PACKOUT / bolso Milwaukee código 48228200, línea Packout y bolsos del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48228200.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "48228200"
      },
      {
        "label": "Línea",
        "value": "Packout y bolsos"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-48228202",
    "name": "Milwaukee 48228202 — Packout y bolsos",
    "description": "Almacenamiento PACKOUT / bolso Milwaukee código 48228202, línea Packout y bolsos del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48228202.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "48228202"
      },
      {
        "label": "Línea",
        "value": "Packout y bolsos"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-48228210",
    "name": "Milwaukee 48228210 — Packout y bolsos",
    "description": "Almacenamiento PACKOUT / bolso Milwaukee código 48228210, línea Packout y bolsos del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48228210.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "48228210"
      },
      {
        "label": "Línea",
        "value": "Packout y bolsos"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-48228301",
    "name": "Milwaukee 48228301 — Packout y bolsos",
    "description": "Almacenamiento PACKOUT / bolso Milwaukee código 48228301, línea Packout y bolsos del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48228301.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "48228301"
      },
      {
        "label": "Línea",
        "value": "Packout y bolsos"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-48228310",
    "name": "Milwaukee 48228310 — Packout y bolsos",
    "description": "Almacenamiento PACKOUT / bolso Milwaukee código 48228310, línea Packout y bolsos del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48228310.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "48228310"
      },
      {
        "label": "Línea",
        "value": "Packout y bolsos"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-48228315",
    "name": "Milwaukee 48228315 — Packout y bolsos",
    "description": "Almacenamiento PACKOUT / bolso Milwaukee código 48228315, línea Packout y bolsos del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48228315.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "48228315"
      },
      {
        "label": "Línea",
        "value": "Packout y bolsos"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-48228316p",
    "name": "Milwaukee 48228316P — Packout y bolsos",
    "description": "Almacenamiento PACKOUT / bolso Milwaukee código 48228316P, línea Packout y bolsos del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48228316p.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "48228316P"
      },
      {
        "label": "Línea",
        "value": "Packout y bolsos"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-48228320",
    "name": "Milwaukee 48228320 — Packout y bolsos",
    "description": "Almacenamiento PACKOUT / bolso Milwaukee código 48228320, línea Packout y bolsos del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48228320.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "48228320"
      },
      {
        "label": "Línea",
        "value": "Packout y bolsos"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-48228338",
    "name": "Milwaukee 48228338 — Packout y bolsos",
    "description": "Almacenamiento PACKOUT / bolso Milwaukee código 48228338, línea Packout y bolsos del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48228338.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "48228338"
      },
      {
        "label": "Línea",
        "value": "Packout y bolsos"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-48228339",
    "name": "Milwaukee 48228339 — Packout y bolsos",
    "description": "Almacenamiento PACKOUT / bolso Milwaukee código 48228339, línea Packout y bolsos del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48228339.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "48228339"
      },
      {
        "label": "Línea",
        "value": "Packout y bolsos"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-48228415",
    "name": "Milwaukee 48228415 — Packout y bolsos",
    "description": "Almacenamiento PACKOUT / bolso Milwaukee código 48228415, línea Packout y bolsos del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48228415.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "48228415"
      },
      {
        "label": "Línea",
        "value": "Packout y bolsos"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-48228426",
    "name": "Milwaukee 48228426 — Packout y bolsos",
    "description": "Almacenamiento PACKOUT / bolso Milwaukee código 48228426, línea Packout y bolsos del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48228426.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "48228426"
      },
      {
        "label": "Línea",
        "value": "Packout y bolsos"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-48228429",
    "name": "Milwaukee 48228429 — Packout y bolsos",
    "description": "Almacenamiento PACKOUT / bolso Milwaukee código 48228429, línea Packout y bolsos del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48228429.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "48228429"
      },
      {
        "label": "Línea",
        "value": "Packout y bolsos"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  },
  {
    "slug": "milwaukee-48229481",
    "name": "Milwaukee 48229481 — Packout y bolsos",
    "description": "Almacenamiento PACKOUT / bolso Milwaukee código 48229481, línea Packout y bolsos del catálogo oficial del distribuidor Papierttei. Consultanos por características, precio y disponibilidad.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Milwaukee",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/milwaukee/48229481.jpg",
    "specs": [
      {
        "label": "Código",
        "value": "48229481"
      },
      {
        "label": "Línea",
        "value": "Packout y bolsos"
      },
      {
        "label": "Fuente",
        "value": "Catálogo oficial Milwaukee — Papierttei S.A."
      }
    ],
    "active": true
  }
];
