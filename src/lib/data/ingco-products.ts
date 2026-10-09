import type { Product } from "../types";

/**
 * Catálogo Ingco: 78 productos cargados a mano por el usuario, en el
 * orden EXACTO que dio (campo `sort_group`, 1 a 78 — sortCatalog()
 * nunca los reordena). Primeros 36: tanda 1. Del 37 al 78: tanda 2.
 * Fotos, descripciones y fichas técnicas investigadas en fuentes
 * oficiales/revendedores reales (ninguna inventada). Reconstruir con
 * el scratchpad de la sesión 72ce4d70, carpeta borrado-ingco/.
 */
export const ingcoProducts: Omit<Product, "id">[] = [
  {
    "slug": "ingco-cosli241198-4",
    "name": "Combo Ingco 20V P20S 3 en 1: Taladro Atornillador Percutor + Amoladora Angular + Rotomartillo + 2 Baterías 4Ah + Cargador",
    "description": "Combo profesional Ingco de la línea P20S 20V con tres herramientas inalámbricas de motor brushless: taladro atornillador percutor, amoladora angular y rotomartillo, todas sobre la misma plataforma de batería. Incluye 2 baterías de litio 4Ah, cargador y 47 accesorios en valija.",
    "price": 629496,
    "category_slug": "combos",
    "brand": "Ingco",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/ingco/ingco-cosli241198-4.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "COSLI241198"
      },
      {
        "label": "Origen",
        "value": "Ingco (importado)"
      },
      {
        "label": "Voltaje",
        "value": "20V (P20S)"
      },
      {
        "label": "Taladro percutor CIDLI206681",
        "value": "0-500/0-2000 rpm brushless, impacto máx. 30.000 bpm, torque 66 Nm, mandril 13mm"
      },
      {
        "label": "Amoladora CAGLI27153",
        "value": "1000W máx. brushless, 3000/6000/9000 rpm, disco 115mm, rosca M14"
      },
      {
        "label": "Rotomartillo CRHLI20268",
        "value": "0-1100 rpm brushless, 0-5000 bpm, impacto 2.5J, mandril SDS-plus"
      },
      {
        "label": "Capacidad de perforación",
        "value": "26mm concreto / 13mm acero / 30mm madera"
      },
      {
        "label": "Batería y carga",
        "value": "2 baterías Li-Ion 4.0Ah + cargador 220-240V 50/60Hz"
      },
      {
        "label": "Accesorios incluidos",
        "value": "47 piezas + valija de transporte"
      }
    ],
    "sort_group": 1,
    "active": true
  },
  {
    "slug": "ingco-cosli241193-4",
    "name": "Combo Ingco 20V P20S 3 en 1: Sierra Circular + Taladro Atornillador Percutor + Lijadora de Palma + Baterías + Cargador",
    "description": "Combo Ingco P20S 20V con tres herramientas inalámbricas: sierra circular, taladro atornillador percutor y lijadora de palma, todas compatibles con la misma batería. Incluye baterías, cargador, disco de sierra y 47 accesorios.",
    "price": 405718,
    "category_slug": "combos",
    "brand": "Ingco",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/ingco/ingco-cosli241193-4.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "COSLI241193"
      },
      {
        "label": "Origen",
        "value": "Ingco (importado)"
      },
      {
        "label": "Voltaje",
        "value": "20V (P20S)"
      },
      {
        "label": "Sierra circular CSLI1402",
        "value": "6300 rpm brushless, disco 140mm, corte 50mm a 90° / 33mm a 45°"
      },
      {
        "label": "Taladro percutor CIDLI206681",
        "value": "0-500/0-2000 rpm brushless, torque 66 Nm, impacto 30.000 bpm, mandril 13mm"
      },
      {
        "label": "Lijadora de palma CSHSLI2014",
        "value": "12.000 rpm sin carga, base 110x100mm"
      },
      {
        "label": "Baterías y carga",
        "value": "1 batería 2.0Ah + 1 batería 4.0Ah, cargador 220-240V"
      },
      {
        "label": "Accesorios incluidos",
        "value": "1 disco de sierra + 47 accesorios"
      }
    ],
    "sort_group": 2,
    "active": true
  },
  {
    "slug": "ingco-hkthp41662-4",
    "name": "Kit Ingco 166 Piezas: Taladro Atornillador Percutor 20V (66Nm) + Batería + Cargador + Set de Herramientas Manuales",
    "description": "Kit todo-en-uno Ingco con taladro atornillador percutor inalámbrico 20V y 165 herramientas manuales y accesorios (puntas, llaves, dados, martillo, pinzas, destornilladores, cinta métrica, brocas, tarugos), organizado en valija plástica moldeada.",
    "price": 0,
    "category_slug": "combos",
    "brand": "Ingco",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/ingco/ingco-hkthp41662-4.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "HKTHP41662"
      },
      {
        "label": "Origen",
        "value": "Ingco (importado)"
      },
      {
        "label": "Modelo del taladro",
        "value": "CIDLI206681"
      },
      {
        "label": "Voltaje",
        "value": "20V"
      },
      {
        "label": "Torque máximo",
        "value": "66 Nm"
      },
      {
        "label": "Impacto máximo",
        "value": "22.500 bpm"
      },
      {
        "label": "Mandril",
        "value": "1/2\" (13mm) metálico"
      },
      {
        "label": "Batería incluida",
        "value": "1 batería de litio 2.0Ah"
      },
      {
        "label": "Total de piezas",
        "value": "166 piezas"
      },
      {
        "label": "Accesorios",
        "value": "Puntas de precisión, mechas, dados Cr-V, llaves hex, brocas madera/metal/mampostería, martillo, pinzas, llave ajustable, destornilladores, cinta métrica, cutter, tarugos y fijaciones, valija plástica"
      }
    ],
    "sort_group": 3,
    "active": true
  },
  {
    "slug": "ingco-ckli20273-4",
    "name": "Combo Ingco 20V P20S: Amoladora Angular + Taladro Atornillador Percutor + 2 Baterías 4Ah + Cargador",
    "description": "Combo Ingco P20S 20V compuesto por amoladora angular y taladro atornillador percutor compacto, ambos con motor brushless. Incluye 10 discos de corte de 115mm, 47 accesorios, 2 baterías de litio 4.0Ah, cargador y valija.",
    "price": 418614,
    "category_slug": "combos",
    "brand": "Ingco",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/ingco/ingco-ckli20273-4.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "CKLI20273"
      },
      {
        "label": "Origen",
        "value": "Ingco (importado)"
      },
      {
        "label": "Voltaje",
        "value": "20V (P20S)"
      },
      {
        "label": "Amoladora CAGLI27153",
        "value": "3000/6000/9000 rpm brushless, disco 115mm, rosca M14"
      },
      {
        "label": "Taladro percutor CIDLI206681",
        "value": "0-500/0-2000 rpm brushless, impacto 30.000 bpm, torque 66 Nm, mandril 13mm"
      },
      {
        "label": "Baterías y carga",
        "value": "2 baterías Li-Ion 4.0Ah + cargador 220-240V 50/60Hz"
      },
      {
        "label": "Accesorios incluidos",
        "value": "10 discos de corte metal 115mm + 47 accesorios + valija"
      }
    ],
    "sort_group": 4,
    "active": true
  },
  {
    "slug": "ingco-cosli250591",
    "name": "Combo Ingco 20V P20S 3 en 1: Taladro Atornillador Percutor + Atornillador para Yeso + Rotomartillo + Baterías + Cargador",
    "description": "Combo Ingco P20S 20V con taladro atornillador percutor, atornillador para yeso (drywall) y rotomartillo, todos brushless y sobre la misma plataforma de batería. Incluye baterías, cargador, valija y 47 accesorios.",
    "price": 0,
    "category_slug": "combos",
    "brand": "Ingco",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/ingco/ingco-cosli250591.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "COSLI250591"
      },
      {
        "label": "Origen",
        "value": "Ingco (importado)"
      },
      {
        "label": "Voltaje",
        "value": "20V (P20S)"
      },
      {
        "label": "Taladro percutor CIDLI206681",
        "value": "0-500/0-2000 rpm, 30.000 bpm, 66 Nm, mandril 13mm"
      },
      {
        "label": "Atornillador para yeso CDSLI20428",
        "value": "0-4200 rpm, punta hex 6.35mm (1/4\"), tornillos hasta 4.2mm"
      },
      {
        "label": "Rotomartillo CRHLI20268",
        "value": "0-1100 rpm, 0-5000 bpm, 2.5J, mandril SDS-plus"
      },
      {
        "label": "Capacidad rotomartillo",
        "value": "26mm concreto / 13mm acero / 30mm madera"
      },
      {
        "label": "Accesorios y carga",
        "value": "47 accesorios, baterías, cargador y valija de transporte"
      }
    ],
    "sort_group": 5,
    "active": true
  },
  {
    "slug": "ingco-cosli250586",
    "name": "Combo Ingco 20V P20S: Taladro Atornillador Percutor 96Nm + Llave de Impacto 850Nm + 2 Baterías 4Ah + Cargador",
    "description": "Combo Ingco P20S 20V con taladro atornillador percutor de alto torque (96Nm) y llave de impacto de 1/2\", ambos brushless. Incluye brocas para madera/metal/mampostería, puntas de impacto, dados profundos, 2 baterías 4.0Ah y cargador.",
    "price": 0,
    "category_slug": "combos",
    "brand": "Ingco",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/ingco/ingco-cosli250586.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "COSLI250586"
      },
      {
        "label": "Origen",
        "value": "Ingco (importado)"
      },
      {
        "label": "Voltaje",
        "value": "20V (P20S)"
      },
      {
        "label": "Taladro percutor CIDLI209681",
        "value": "0-500/0-2000 rpm brushless, torque 96 Nm, impacto 30.000 bpm, mandril 13mm"
      },
      {
        "label": "Llave de impacto CIWLI20851",
        "value": "0-1600/2100/2400 rpm brushless, impacto 0-1500/1800/2200 bpm"
      },
      {
        "label": "Torque llave de impacto",
        "value": "850 Nm de apriete / 1000 Nm de aflojado, encastre 1/2\""
      },
      {
        "label": "Accesorios y carga",
        "value": "Brocas madera/mampostería/HSS, puntas de impacto, dados profundos, 2 baterías 4.0Ah, cargador"
      }
    ],
    "sort_group": 6,
    "active": true
  },
  {
    "slug": "ingco-cosli250511",
    "name": "Combo Ingco 20V P20S 3 en 1: Taladro Atornillador Percutor + Nivel Láser Autonivelante + Medidor de Distancia",
    "description": "Combo Ingco P20S 20V que combina un taladro atornillador percutor compacto brushless con un nivel láser autonivelante de línea verde y un medidor de distancia láser, ideal para obra e instalaciones. Incluye baterías, cargador, valija y accesorios.",
    "price": 0,
    "category_slug": "combos",
    "brand": "Ingco",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/ingco/ingco-cosli250511.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "COSLI250511"
      },
      {
        "label": "Origen",
        "value": "Ingco (importado)"
      },
      {
        "label": "Taladro percutor CIDLI207681",
        "value": "0-500/0-2000 rpm, 30.000 bpm, torque máx. 76 Nm, mandril 13mm"
      },
      {
        "label": "Nivel láser HLL156601",
        "value": "Láser verde 520±10nm Clase II <1mW, rango 0-35m"
      },
      {
        "label": "Precisión nivel láser",
        "value": "±1.5mm@7m, autonivelado <4°, tiempo <3s"
      },
      {
        "label": "Medidor de distancia HLDD0708",
        "value": "Rango 0.05-70m, precisión ±2.0mm, láser clase 2"
      },
      {
        "label": "Funciones medidor",
        "value": "Medición simple/continua, área, volumen, cálculo pitagórico"
      },
      {
        "label": "Accesorios y carga",
        "value": "2 baterías 2.0Ah, cargador, 47 accesorios, valija"
      }
    ],
    "sort_group": 7,
    "active": true
  },
  {
    "slug": "ingco-hll680081",
    "name": "Kit Nivel Láser Autonivelante Verde + Cinta Métrica 5m Ingco",
    "description": "Kit Ingco que combina un nivel láser autonivelante de línea cruzada (horizontal y vertical) con haz verde de alta visibilidad, y una cinta métrica de acero de 5 metros con gancho magnético doble. Ideal para nivelación, alineación y trabajos de instalación en interiores.",
    "price": 149851,
    "category_slug": "herramientas-manuales",
    "brand": "Ingco",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/ingco/ingco-hll680081.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "HLL680081"
      },
      {
        "label": "Origen",
        "value": "Ingco (importado)"
      },
      {
        "label": "Rango de trabajo",
        "value": "0-35m"
      },
      {
        "label": "Precisión de nivelación",
        "value": "±1.5mm @ 7m"
      },
      {
        "label": "Precisión de línea",
        "value": "±1.5mm @ 7m"
      },
      {
        "label": "Tiempo de autonivelado",
        "value": "< 3 segundos"
      },
      {
        "label": "Ángulo de autonivelado",
        "value": "< 4°"
      },
      {
        "label": "Tipo de láser",
        "value": "Verde, 520±10nm, Clase II <1mW"
      },
      {
        "label": "Cinta métrica HSMT80532",
        "value": "5m x 32mm, cinta recubierta de nylon, doble impresión métrico/pulgadas, doble gancho magnético"
      },
      {
        "label": "Alimentación",
        "value": "3 pilas AA (LR6) 1.5V"
      },
      {
        "label": "Incluye",
        "value": "Soporte/base magnética y estuche plástico"
      }
    ],
    "sort_group": 8,
    "active": true
  },
  {
    "slug": "ingco-cos25105",
    "name": "Set Mochila Porta Herramientas + Termofusora Inalámbrica 20V P20S + Medidor de Distancia Láser + 2 Baterías 4Ah + Cargador",
    "description": "Combo armado por el distribuidor que reúne una mochila porta-herramientas, una termofusora inalámbrica P20S 20V para soldadura de caños plásticos (PTWTLI2018) y un medidor de distancia láser, con 2 baterías de 4Ah y cargador.",
    "price": 0,
    "category_slug": "combos",
    "brand": "Ingco",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/ingco/ingco-cos25105.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "COS25105"
      },
      {
        "label": "Origen",
        "value": "Ingco (importado)"
      },
      {
        "label": "Termofusora PTWTLI2018",
        "value": "20V (P20S) inalámbrica, temperatura de trabajo 0-320°C"
      },
      {
        "label": "Cabezales termofusora",
        "value": "3 cabezales intercambiables: 20mm, 25mm y 32mm"
      },
      {
        "label": "Batería y carga",
        "value": "2 baterías Li-Ion 4.0Ah + cargador"
      },
      {
        "label": "Incluye",
        "value": "Mochila porta herramientas, medidor de distancia, cabezales, llave hexagonal y estuche"
      }
    ],
    "sort_group": 9,
    "active": true
  },
  {
    "slug": "ingco-ctvli20015-4",
    "name": "Ventosa Vibradora para Colocación de Cerámicos 60KG (P20S) 20V + Batería 2AH + Cargador + Accesorios",
    "description": "Ventosa vibradora inalámbrica para colocación de cerámicos y porcelanatos. Vibra y nivela las piezas mediante succión, eliminando burbujas de aire bajo el pegamento y logrando una superficie pareja. Ideal para instalaciones profesionales de piso y revestimiento.",
    "price": 197081,
    "category_slug": "maquinas-a-bateria",
    "brand": "Ingco",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/ingco/ingco-ctvli20015-4.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "CTVLI20015"
      },
      {
        "label": "Origen",
        "value": "Ingco (importado)"
      },
      {
        "label": "Voltaje",
        "value": "20V (P20S)"
      },
      {
        "label": "Frecuencia de vibración",
        "value": "0-10.000 RPM, 6 velocidades"
      },
      {
        "label": "Capacidad de succión",
        "value": "60 kg"
      },
      {
        "label": "Diámetro de ventosa",
        "value": "130 mm"
      },
      {
        "label": "Batería incluida",
        "value": "1 x 2.0Ah (FBLI20011)"
      },
      {
        "label": "Cargador",
        "value": "1 x FCLI2001, 220-240V~50/60Hz"
      },
      {
        "label": "Accesorios",
        "value": "Rodilleras, espátula, separadores de junta (1.5, 2.0, 2.5mm)"
      }
    ],
    "sort_group": 10,
    "active": true
  },
  {
    "slug": "ingco-cosli250784-4",
    "name": "Set Atornillador de Impacto Hexagonal 285Nm (P20S) 20V Brushless + 2 Baterías 2AH + Cargador + Maletín + 51 Accesorios",
    "description": "Set con atornillador de impacto inalámbrico Brushless de alto torque (285Nm), ideal para atornillado pesado en madera dura y fijaciones metálicas. Incluye 2 baterías, cargador rápido, maletín rígido y un extenso juego de accesorios (puntas y dados).",
    "price": 310628,
    "category_slug": "maquinas-a-bateria",
    "brand": "Ingco",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/ingco/ingco-cosli250784-4.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "COSLI250784"
      },
      {
        "label": "Origen",
        "value": "Ingco (importado)"
      },
      {
        "label": "Voltaje",
        "value": "20V (P20S)"
      },
      {
        "label": "Torque máximo",
        "value": "285 Nm"
      },
      {
        "label": "Portapuntas",
        "value": "Hexagonal 1/4\" (6.35mm)"
      },
      {
        "label": "Velocidad sin carga",
        "value": "0-1600/1900/2600 rpm"
      },
      {
        "label": "Frecuencia de impacto",
        "value": "0-2100/2500/2900 bpm"
      },
      {
        "label": "Baterías",
        "value": "2 x 2.0Ah Litio"
      },
      {
        "label": "Peso",
        "value": "3.12 kg"
      },
      {
        "label": "Incluye",
        "value": "Cargador, maletín rígido, 51 puntas y dados"
      }
    ],
    "sort_group": 11,
    "active": true
  },
  {
    "slug": "ingco-cidli429982",
    "name": "Taladro Atornillador Percutor Compacto 13MM 99NM 1100W (42VMAX) 42V Brushless + 2 Baterías 2AH + Cargador + Maletín",
    "description": "Taladro atornillador percutor inalámbrico de línea industrial 42V con motor Brushless, alto torque (99Nm) y mandril metálico de 13mm. Pensado para trabajos exigentes en madera, metal y mampostería, con doble velocidad mecánica y luz LED integrada.",
    "price": 0,
    "category_slug": "maquinas-a-bateria",
    "brand": "Ingco",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/ingco/ingco-cidli429982.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "CIDLI429982"
      },
      {
        "label": "Origen",
        "value": "Ingco (importado)"
      },
      {
        "label": "Voltaje",
        "value": "42V"
      },
      {
        "label": "Torque máximo",
        "value": "99 Nm"
      },
      {
        "label": "Velocidad sin carga",
        "value": "0-500/0-2000 rpm"
      },
      {
        "label": "Frecuencia de impacto",
        "value": "30.000 bpm máx."
      },
      {
        "label": "Mandril",
        "value": "Metálico, 13mm, 22+1+1 ajustes de torque"
      },
      {
        "label": "Baterías",
        "value": "2 x 2.0Ah"
      },
      {
        "label": "Incluye",
        "value": "Cargador, brocas madera/metal/mampostería, puntas, maletín"
      }
    ],
    "sort_group": 12,
    "active": true
  },
  {
    "slug": "ingco-cidli426981",
    "name": "Taladro Atornillador Percutor Compacto 13MM 69NM 710W (42VMAX) 42V Brushless + 1 Batería 2AH + 1 Cargador",
    "description": "Taladro atornillador percutor inalámbrico compacto de línea 42V con motor Brushless, mandril metálico de 13mm y alto torque (69Nm). Doble velocidad mecánica, luz LED de trabajo y bloqueo de husillo para cambio rápido de mecha.",
    "price": 258285,
    "category_slug": "maquinas-a-bateria",
    "brand": "Ingco",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/ingco/ingco-cidli426981.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "CIDLI426981"
      },
      {
        "label": "Origen",
        "value": "Ingco (importado)"
      },
      {
        "label": "Voltaje",
        "value": "42V"
      },
      {
        "label": "Torque máximo",
        "value": "69 Nm"
      },
      {
        "label": "Velocidad sin carga",
        "value": "0-500/0-2000 rpm"
      },
      {
        "label": "Frecuencia de impacto",
        "value": "30.000 bpm máx."
      },
      {
        "label": "Mandril",
        "value": "Metálico, 13mm"
      },
      {
        "label": "Incluye",
        "value": "1 batería, 1 cargador, brocas y estuche"
      }
    ],
    "sort_group": 13,
    "active": true
  },
  {
    "slug": "ingco-cidli20968-4",
    "name": "Taladro Atornillador Percutor 13MM 96NM 1100W (P20S) 20V Brushless + 2 Baterías 4AH + Cargador + Maletín Industrial",
    "description": "Taladro atornillador percutor inalámbrico de línea industrial P20S 20V, motor Brushless y alto torque (96Nm). Incluye 2 baterías de 4.0Ah, cargador, maletín y set completo de brocas y puntas para madera, metal y mampostería.",
    "price": 335244,
    "category_slug": "maquinas-a-bateria",
    "brand": "Ingco",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/ingco/ingco-cidli20968-4.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "CIDLI20968"
      },
      {
        "label": "Origen",
        "value": "Ingco (importado)"
      },
      {
        "label": "Voltaje",
        "value": "20V (P20S)"
      },
      {
        "label": "Torque máximo",
        "value": "96 Nm"
      },
      {
        "label": "Velocidad sin carga",
        "value": "0-500/0-2000 rpm"
      },
      {
        "label": "Frecuencia de impacto",
        "value": "30.000 bpm máx."
      },
      {
        "label": "Mandril",
        "value": "Metálico, 13mm, 22+1+1 ajustes"
      },
      {
        "label": "Baterías",
        "value": "2 x 4.0Ah"
      },
      {
        "label": "Incluye",
        "value": "Cargador, brocas madera/mampostería/HSS, puntas 65mm, maletín"
      }
    ],
    "sort_group": 14,
    "active": true
  },
  {
    "slug": "ingco-cidli20768-4",
    "name": "Taladro Atornillador Percutor 13MM 76NM (P20S) 20V Brushless + 2 Baterías 2AH + Cargador + Maletín",
    "description": "Taladro atornillador percutor inalámbrico compacto Brushless de línea P20S 20V, con torque de 76Nm y mandril metálico de 13mm. Incluye 2 baterías, cargador, maletín y kit de 47 accesorios para trabajos en madera, metal y mampostería.",
    "price": 249061,
    "category_slug": "maquinas-a-bateria",
    "brand": "Ingco",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/ingco/ingco-cidli20768-4.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "CIDLI20768"
      },
      {
        "label": "Origen",
        "value": "Ingco (importado)"
      },
      {
        "label": "Voltaje",
        "value": "20V (P20S)"
      },
      {
        "label": "Torque máximo",
        "value": "76 Nm"
      },
      {
        "label": "Velocidad sin carga",
        "value": "0-500/0-2000 rpm"
      },
      {
        "label": "Frecuencia de impacto",
        "value": "30.000 bpm máx."
      },
      {
        "label": "Mandril",
        "value": "Metálico, 13mm, 22+1+1 ajustes"
      },
      {
        "label": "Baterías",
        "value": "2 x 2.0Ah (FBLI20011)"
      },
      {
        "label": "Incluye",
        "value": "47 accesorios, 3 brocas mampostería, maletín"
      }
    ],
    "sort_group": 15,
    "active": true
  },
  {
    "slug": "ingco-cidli20668-4",
    "name": "Taladro Atornillador Percutor Compacto 13MM 66NM 710W (P20S) 20V Brushless + 2 Baterías 2AH + Cargador",
    "description": "Taladro atornillador percutor inalámbrico compacto, motor Brushless de 710W equivalente, mandril metálico de 13mm y torque de 66Nm. Doble velocidad mecánica, luz LED y bloqueo de husillo.",
    "price": 229529,
    "category_slug": "maquinas-a-bateria",
    "brand": "Ingco",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/ingco/ingco-cidli20668-4.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "CIDLI20668"
      },
      {
        "label": "Origen",
        "value": "Ingco (importado)"
      },
      {
        "label": "Voltaje",
        "value": "20V (P20S)"
      },
      {
        "label": "Torque máximo",
        "value": "66 Nm"
      },
      {
        "label": "Potencia equivalente",
        "value": "710 W"
      },
      {
        "label": "Velocidad sin carga",
        "value": "0-500/0-2000 rpm"
      },
      {
        "label": "Frecuencia de impacto",
        "value": "30.000 bpm máx."
      },
      {
        "label": "Mandril",
        "value": "Metálico, 13mm, 22+1+1 ajustes"
      },
      {
        "label": "Baterías",
        "value": "2 x 2.0Ah"
      },
      {
        "label": "Incluye",
        "value": "Cargador, 47 accesorios, 3 brocas mampostería, maletín"
      }
    ],
    "sort_group": 16,
    "active": true
  },
  {
    "slug": "ingco-cidli20558-4",
    "name": "Taladro Atornillador Percutor 13MM 55NM (P20S) 20V Brushless + 2 Baterías 2AH + Cargador",
    "description": "Taladro atornillador percutor inalámbrico de línea P20S 20V, motor Brushless, mandril metálico de 13mm y torque de 55Nm. Doble velocidad, reversible y con ajuste de torque electrónico.",
    "price": 194217,
    "category_slug": "maquinas-a-bateria",
    "brand": "Ingco",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/ingco/ingco-cidli20558-4.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "CIDLI20558"
      },
      {
        "label": "Origen",
        "value": "Ingco (importado)"
      },
      {
        "label": "Voltaje",
        "value": "20V (P20S)"
      },
      {
        "label": "Torque máximo",
        "value": "55 Nm"
      },
      {
        "label": "Velocidad sin carga",
        "value": "0-500/0-2000 rpm"
      },
      {
        "label": "Mandril",
        "value": "Metálico, 13mm, 22+1+1 ajustes"
      },
      {
        "label": "Baterías",
        "value": "2 x 2.0Ah (FBLI20011)"
      },
      {
        "label": "Peso",
        "value": "Aprox. 1 kg (solo herramienta)"
      }
    ],
    "sort_group": 17,
    "active": true
  },
  {
    "slug": "ingco-csli14021",
    "name": "Sierra Circular 5 1/2\" / 140MM (P20S) 20V Brushless + 1 Batería 4AH + 1 Cargador",
    "description": "Sierra circular inalámbrica con motor Brushless, disco de 140mm y velocidad de 6300 rpm sin carga. Profundidad de corte ajustable hasta 50mm a 90° y 33mm a 45°, ideal para cortes en madera de forma portátil.",
    "price": 0,
    "category_slug": "maquinas-a-bateria",
    "brand": "Ingco",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/ingco/ingco-csli14021.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "CSLI14021"
      },
      {
        "label": "Origen",
        "value": "Ingco (importado)"
      },
      {
        "label": "Voltaje",
        "value": "20V (P20S)"
      },
      {
        "label": "Velocidad sin carga",
        "value": "6.300 rpm"
      },
      {
        "label": "Diámetro de disco",
        "value": "140 mm (5 1/2\")"
      },
      {
        "label": "Diámetro de eje",
        "value": "20 mm"
      },
      {
        "label": "Profundidad de corte a 90°",
        "value": "50 mm"
      },
      {
        "label": "Profundidad de corte a 45°",
        "value": "33 mm"
      },
      {
        "label": "Batería",
        "value": "1 x 4.0Ah"
      },
      {
        "label": "Cargador",
        "value": "220-240V~50/60Hz"
      }
    ],
    "sort_group": 18,
    "active": true
  },
  {
    "slug": "ingco-csli1652",
    "name": "Sierra Circular Inalámbrica 6-1/2\" (165mm) 20V Brushless P20S (Sin Batería ni Cargador)",
    "description": "Sierra circular inalámbrica de 165mm (6-1/2\") con motor brushless de la línea P20S de Ingco. Permite ajuste de profundidad y ángulo de corte sin herramientas, con base de hierro para mayor estabilidad. Compatible con batería y cargador de la plataforma 20V (se venden por separado).",
    "price": 177885,
    "category_slug": "maquinas-a-bateria",
    "brand": "Ingco",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/ingco/ingco-csli1652.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "CSLI1652"
      },
      {
        "label": "Origen",
        "value": "Ingco (importado)"
      },
      {
        "label": "Voltaje",
        "value": "20V"
      },
      {
        "label": "Velocidad sin carga",
        "value": "5200 rpm"
      },
      {
        "label": "Diámetro de disco",
        "value": "165mm (6-1/2\")"
      },
      {
        "label": "Profundidad de corte a 90°",
        "value": "55mm"
      },
      {
        "label": "Profundidad de corte a 45°",
        "value": "42mm"
      },
      {
        "label": "Motor",
        "value": "Brushless (sin escobillas)"
      },
      {
        "label": "Incluye",
        "value": "1 disco de 165mm (batería y cargador no incluidos)"
      }
    ],
    "sort_group": 19,
    "active": true
  },
  {
    "slug": "ingco-cagli221253",
    "name": "Amoladora Angular 5PLG/125MM 1200W (P20S) 20V Brushless (Sin Batería ni Cargador) Industrial",
    "description": "Amoladora angular inalámbrica de 125mm con motor brushless y 3 velocidades seleccionables, ideal para corte y desbaste de metal, cerámica y otros materiales. Compatible con baterías de la plataforma 20V de distintas capacidades. Se vende sin batería ni cargador.",
    "price": 155391,
    "category_slug": "maquinas-a-bateria",
    "brand": "Ingco",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/ingco/ingco-cagli221253.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "CAGLI221253"
      },
      {
        "label": "Origen",
        "value": "Ingco (importado)"
      },
      {
        "label": "Voltaje",
        "value": "20V"
      },
      {
        "label": "Potencia máx.",
        "value": "1200W"
      },
      {
        "label": "Velocidad sin carga",
        "value": "3000/6000/9000 rpm"
      },
      {
        "label": "Diámetro de disco",
        "value": "125mm"
      },
      {
        "label": "Rosca de eje",
        "value": "M14"
      },
      {
        "label": "Motor",
        "value": "Brushless"
      }
    ],
    "sort_group": 20,
    "active": true
  },
  {
    "slug": "ingco-cgsli201286-4",
    "name": "Motosierra Inalámbrica 12\"/300MM (P20S) 20V Brushless + 2 Baterías 4Ah + Cargador Industrial",
    "description": "Motosierra inalámbrica con barra de 30cm (12\") y motor brushless, pensada para poda y corte de leña sin la complicación de motores a combustión. Incluye freno de cadena de respuesta inmediata y sistema de lubricación automática. Se entrega con 2 baterías de 4.0Ah y cargador rápido.",
    "price": 507777,
    "category_slug": "maquinas-a-bateria",
    "brand": "Ingco",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/ingco/ingco-cgsli201286-4.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "CGSLI201286"
      },
      {
        "label": "Origen",
        "value": "Ingco (importado)"
      },
      {
        "label": "Voltaje",
        "value": "20V"
      },
      {
        "label": "Motor",
        "value": "Brushless (sin escobillas)"
      },
      {
        "label": "Longitud de barra",
        "value": "30cm (12\")"
      },
      {
        "label": "Velocidad de cadena",
        "value": "7.9 m/s"
      },
      {
        "label": "Peso",
        "value": "4.5 kg"
      },
      {
        "label": "Freno de cadena",
        "value": "Respuesta inmediata"
      },
      {
        "label": "Lubricación",
        "value": "Sistema automático"
      },
      {
        "label": "Incluye",
        "value": "2 baterías 4.0Ah, cargador rápido, barra y cadena 12\""
      }
    ],
    "sort_group": 21,
    "active": true
  },
  {
    "slug": "ingco-hhwb61201",
    "name": "Carro Plegable Porta Cajas Apilables - Carga Máx. 130kg",
    "description": "Carro plegable de aluminio para transportar cajas plásticas apilables Ingco. Se pliega para guardar en poco espacio y soporta hasta 130kg. Incluye correa elástica para sujetar la carga.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Ingco",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/ingco/ingco-hhwb61201.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "HHWB61201"
      },
      {
        "label": "Origen",
        "value": "Ingco (importado)"
      },
      {
        "label": "Carga máxima",
        "value": "130 kg"
      },
      {
        "label": "Material del marco",
        "value": "Aluminio"
      },
      {
        "label": "Medida extendido",
        "value": "560 x 506 x 1110 mm"
      },
      {
        "label": "Medida plegado",
        "value": "86 x 480 x 840 mm"
      },
      {
        "label": "Ruedas",
        "value": "175mm (PP+TPR)"
      },
      {
        "label": "Peso",
        "value": "6.6 kg"
      },
      {
        "label": "Incluye",
        "value": "Correa elástica (bungee)"
      }
    ],
    "sort_group": 22,
    "active": true
  },
  {
    "slug": "ingco-cagli2211532",
    "name": "Amoladora Angular 4-1/2PLG/115MM 1200W (P20S) 20V Brushless + 2 Baterías 5Ah + Cargador + Valija Industrial",
    "description": "Amoladora angular inalámbrica de 115mm con motor brushless y 3 velocidades, ideal para corte y desbaste de metal, piedra, hormigón y cerámica. Incluye kit de 10 discos abrasivos de corte, 2 baterías de 5.0Ah, cargador y valija de transporte.",
    "price": 0,
    "category_slug": "maquinas-a-bateria",
    "brand": "Ingco",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/ingco/ingco-cagli2211532.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "CAGLI2211532"
      },
      {
        "label": "Origen",
        "value": "Ingco (importado)"
      },
      {
        "label": "Voltaje",
        "value": "20V"
      },
      {
        "label": "Potencia máx.",
        "value": "1200W"
      },
      {
        "label": "Velocidad sin carga",
        "value": "3000/6000/9000 rpm"
      },
      {
        "label": "Diámetro de disco",
        "value": "115mm"
      },
      {
        "label": "Rosca de eje",
        "value": "M14"
      },
      {
        "label": "Incluye",
        "value": "10 discos abrasivos, 2 baterías 5.0Ah, cargador, valija"
      }
    ],
    "sort_group": 23,
    "active": true
  },
  {
    "slug": "ingco-hgli20035",
    "name": "Pistola de Calor Inalámbrica 30-550°C (P20S) 20V + Batería 4Ah + Cargador Industrial",
    "description": "Pistola de calor inalámbrica con display LCD y control de temperatura ajustable (30-300°C / 30-550°C), ideal para decapar pintura, termocontraíble, descongelar y aflojar tornillos oxidados. Incluye boquilla reductora, boquilla reflectora, boquilla plana y espátula.",
    "price": 0,
    "category_slug": "maquinas-a-bateria",
    "brand": "Ingco",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/ingco/ingco-hgli20035.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "HGLI20035"
      },
      {
        "label": "Origen",
        "value": "Ingco (importado)"
      },
      {
        "label": "Voltaje",
        "value": "20V"
      },
      {
        "label": "Rango de temperatura",
        "value": "30-300°C / 30-550°C"
      },
      {
        "label": "Caudal de aire",
        "value": "100/200 L/min"
      },
      {
        "label": "Display",
        "value": "LCD con temperatura ajustable"
      },
      {
        "label": "Incluye",
        "value": "Batería 4.0Ah, cargador, boquilla reductora, boquilla reflectora, boquilla plana, espátula"
      }
    ],
    "sort_group": 24,
    "active": true
  },
  {
    "slug": "ingco-hcs103",
    "name": "Banco Mecánico Porta Herramientas 3 Cajones con Ruedas Industrial",
    "description": "Banco mecánico móvil con 3 cajones laterales, bandeja frontal y estante trasero para ordenar herramientas en el taller. Montado sobre 4 ruedas giratorias que facilitan su desplazamiento.",
    "price": 202798,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Ingco",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/ingco/ingco-hcs103.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "HCS103"
      },
      {
        "label": "Origen",
        "value": "Ingco (importado)"
      },
      {
        "label": "Cajones",
        "value": "3 laterales + bandeja frontal"
      },
      {
        "label": "Dimensiones",
        "value": "45 x 34 x 43 cm"
      },
      {
        "label": "Peso",
        "value": "10 kg"
      },
      {
        "label": "Ruedas",
        "value": "4 giratorias de 3\""
      }
    ],
    "sort_group": 25,
    "active": true
  },
  {
    "slug": "ingco-cagli4128112-4",
    "name": "Amoladora Angular 4-1/2PLG/115MM 1280W (42VMAX) 42V Brushless + 2 Baterías 2.5Ah + Cargador Industrial",
    "description": "Amoladora angular inalámbrica de alta gama de la línea 42V Max de Ingco, con motor brushless y 3 velocidades para trabajos exigentes de corte y desbaste. Incluye un completo kit de discos (25 abrasivos de corte, 3 de láminas y 1 diamantado), 2 baterías de 2.5Ah, cargador y maletín de transporte.",
    "price": 449649,
    "category_slug": "maquinas-a-bateria",
    "brand": "Ingco",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/ingco/ingco-cagli4128112-4.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "CAGLI4128112"
      },
      {
        "label": "Origen",
        "value": "Ingco (importado)"
      },
      {
        "label": "Voltaje",
        "value": "42V"
      },
      {
        "label": "Potencia máx.",
        "value": "1280W"
      },
      {
        "label": "Velocidad sin carga",
        "value": "3000/6500/10000 rpm"
      },
      {
        "label": "Diámetro de disco",
        "value": "115mm"
      },
      {
        "label": "Rosca de eje",
        "value": "M14"
      },
      {
        "label": "Incluye",
        "value": "25 discos abrasivos, 3 discos de láminas, 1 disco diamantado, 2 baterías 2.5Ah, cargador, maletín"
      }
    ],
    "sort_group": 26,
    "active": true
  },
  {
    "slug": "ingco-csli4218511",
    "name": "Sierra Circular 7-1/4PLG/185MM (42VMAX) 42V Brushless + Batería 2.5Ah + Cargador Industrial",
    "description": "Sierra circular inalámbrica de la línea 42V Max de Ingco, con motor brushless de alto rendimiento para cortes precisos en madera y otros materiales de construcción. Incluye batería, cargador, dos discos de 185mm y cinta métrica.",
    "price": 0,
    "category_slug": "maquinas-a-bateria",
    "brand": "Ingco",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/ingco/ingco-csli4218511.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "CSLI4218511"
      },
      {
        "label": "Origen",
        "value": "Ingco (importado)"
      },
      {
        "label": "Voltaje",
        "value": "42V"
      },
      {
        "label": "Velocidad sin carga",
        "value": "4800 rpm"
      },
      {
        "label": "Diámetro de disco",
        "value": "185mm (7-1/4\")"
      },
      {
        "label": "Diámetro de eje",
        "value": "20mm"
      },
      {
        "label": "Profundidad de corte a 90°",
        "value": "65mm"
      },
      {
        "label": "Profundidad de corte a 45°",
        "value": "45mm"
      },
      {
        "label": "Incluye",
        "value": "Batería 2.5Ah, cargador, 2 discos de 185mm, cinta métrica"
      }
    ],
    "sort_group": 27,
    "active": true
  },
  {
    "slug": "ingco-crhli422882",
    "name": "Rotomartillo SDS Plus 42V Brushless 4.5J (P20S) + 2 Baterías 2.5AH + Cargador Industrial",
    "description": "Rotomartillo inalámbrico de 42V con motor brushless, sistema de mandril SDS-Plus y luz LED integrada. Pensado para perforar hormigón, acero y madera, y también para cincelado liviano en trabajos de albañilería y construcción.",
    "price": 0,
    "category_slug": "maquinas-a-bateria",
    "brand": "Ingco",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/ingco/ingco-crhli422882.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "CRHLI422882"
      },
      {
        "label": "Origen",
        "value": "Ingco (importado)"
      },
      {
        "label": "Voltaje",
        "value": "42V"
      },
      {
        "label": "Motor",
        "value": "Brushless (sin carbones)"
      },
      {
        "label": "Velocidad sin carga",
        "value": "0-900 rpm"
      },
      {
        "label": "Frecuencia de impacto",
        "value": "0-4400 bpm"
      },
      {
        "label": "Energía de impacto",
        "value": "4.5 J"
      },
      {
        "label": "Mandril",
        "value": "SDS-Plus"
      },
      {
        "label": "Capacidad máx.",
        "value": "28mm hormigón / 13mm acero / 40mm madera"
      },
      {
        "label": "Batería incluida",
        "value": "2 x 2.5Ah"
      },
      {
        "label": "Accesorios",
        "value": "6 brocas, 2 cinceles, grasa, llave, maletín"
      }
    ],
    "sort_group": 28,
    "active": true
  },
  {
    "slug": "ingco-crhli202682",
    "name": "Rotomartillo SDS Plus 20V Brushless 2.5J (P20S) + 2 Baterías 4AH + Cargador Industrial",
    "description": "Rotomartillo inalámbrico de 20V con motor brushless, mandril SDS-Plus y luz de trabajo LED integrada. Con 3 modos (perforar, percutir, perforar+percutir), ideal para hormigón, acero y madera en tareas profesionales y de bricolaje.",
    "price": 0,
    "category_slug": "maquinas-a-bateria",
    "brand": "Ingco",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/ingco/ingco-crhli202682.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "CRHLI202682"
      },
      {
        "label": "Origen",
        "value": "Ingco (importado)"
      },
      {
        "label": "Voltaje",
        "value": "20V"
      },
      {
        "label": "Motor",
        "value": "Brushless (sin carbones)"
      },
      {
        "label": "Velocidad sin carga",
        "value": "0-1100 rpm"
      },
      {
        "label": "Frecuencia de impacto",
        "value": "0-5000/5500 bpm"
      },
      {
        "label": "Energía de impacto",
        "value": "2.5 J"
      },
      {
        "label": "Mandril",
        "value": "SDS-Plus"
      },
      {
        "label": "Capacidad máx.",
        "value": "26mm hormigón / 13mm acero / 30mm madera"
      },
      {
        "label": "Batería incluida",
        "value": "2 x 4.0Ah"
      },
      {
        "label": "Accesorios",
        "value": "3 brocas, 1 cincel, maletín"
      }
    ],
    "sort_group": 29,
    "active": true
  },
  {
    "slug": "ingco-ab6038",
    "name": "Sopladora Aspiradora 650W Velocidad Variable Industrial",
    "description": "Sopladora-aspiradora eléctrica de 650W con control de velocidad variable, ideal para limpiar hojas y escombros de patios y jardines, secar superficies después de limpiar, o soplar polvo en trabajos de carpintería. Incluye bolsa para residuos.",
    "price": 0,
    "category_slug": "maquinas-electricas",
    "brand": "Ingco",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/ingco/ingco-ab6038.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "AB6038"
      },
      {
        "label": "Origen",
        "value": "Ingco (importado)"
      },
      {
        "label": "Potencia",
        "value": "650W"
      },
      {
        "label": "Voltaje",
        "value": "220-240V~50/60Hz"
      },
      {
        "label": "Velocidad sin carga",
        "value": "0-16000 rpm"
      },
      {
        "label": "Caudal de aire",
        "value": "0-4.0 m³/min"
      },
      {
        "label": "Control de velocidad",
        "value": "Variable"
      },
      {
        "label": "Accesorios",
        "value": "1 bolsa para polvo/residuos"
      }
    ],
    "sort_group": 30,
    "active": true
  },
  {
    "slug": "ingco-fcli2064-4",
    "name": "Cargador Múltiple Para Batería (P20S) 20V 4A Con 6 Estaciones Industrial",
    "description": "Cargador con 6 puertos para baterías de la línea P20S de Ingco, carga las baterías de forma secuencial. Compatible con baterías de 2.0Ah y 4.0Ah, ideal para talleres o usuarios con varias herramientas inalámbricas Ingco.",
    "price": 115229,
    "category_slug": "baterias-y-cargadores",
    "brand": "Ingco",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/ingco/ingco-fcli2064-4.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "FCLI2064"
      },
      {
        "label": "Origen",
        "value": "Ingco (importado)"
      },
      {
        "label": "Voltaje de entrada",
        "value": "220-240V~50/60Hz"
      },
      {
        "label": "Voltaje de salida",
        "value": "20V"
      },
      {
        "label": "Corriente de salida",
        "value": "4A"
      },
      {
        "label": "Puertos",
        "value": "6, carga secuencial"
      },
      {
        "label": "Compatibilidad",
        "value": "Baterías P20S de 2.0Ah y 4.0Ah"
      }
    ],
    "sort_group": 31,
    "active": true
  },
  {
    "slug": "ingco-cagli76012",
    "name": "Amoladora Angular Mini 3\"/76mm (P20S) 20V 19500RPM + Batería 2AH + Cargador Industrial",
    "description": "Mini amoladora/cortadora angular inalámbrica de 20V y disco de 76mm, con bloqueo de husillo y carcasa resistente a impactos con empuñadura antivibración. Para cortar y desbastar metal, hormigón, piedra y cerámica, y para pulido y afilado.",
    "price": 0,
    "category_slug": "maquinas-a-bateria",
    "brand": "Ingco",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/ingco/ingco-cagli76012.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "CAGLI76012"
      },
      {
        "label": "Origen",
        "value": "Ingco (importado)"
      },
      {
        "label": "Voltaje",
        "value": "20V"
      },
      {
        "label": "Diámetro de disco",
        "value": "76 mm (3\")"
      },
      {
        "label": "Velocidad sin carga",
        "value": "19500 rpm"
      },
      {
        "label": "Rosca de husillo",
        "value": "M6"
      },
      {
        "label": "Batería incluida",
        "value": "1 x 2.0Ah"
      },
      {
        "label": "Accesorios",
        "value": "Discos de corte y desbaste, llave hex"
      }
    ],
    "sort_group": 32,
    "active": true
  },
  {
    "slug": "ingco-csgli20042",
    "name": "Pistola Para Pintar Inalámbrica 800ML/MIN (P20S) 20V + Batería 2AH + Cargador",
    "description": "Pistola pulverizadora inalámbrica de 20V con depósito de 1000ml, ideal para pintar superficies sin necesidad de compresor ni cable. Incluye boquillas de cobre intercambiables, vaso medidor de viscosidad y aguja de limpieza.",
    "price": 0,
    "category_slug": "maquinas-a-bateria",
    "brand": "Ingco",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/ingco/ingco-csgli20042.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "CSGLI20042"
      },
      {
        "label": "Origen",
        "value": "Ingco (importado)"
      },
      {
        "label": "Voltaje",
        "value": "20V"
      },
      {
        "label": "Capacidad de depósito",
        "value": "1000 ml (1L)"
      },
      {
        "label": "Caudal máximo",
        "value": "800 ml/min"
      },
      {
        "label": "Viscosidad máxima",
        "value": "120 DIN-s"
      },
      {
        "label": "Presión de rociado",
        "value": "0.1-0.2 bar"
      },
      {
        "label": "Batería incluida",
        "value": "1 x 2.0Ah"
      },
      {
        "label": "Accesorios",
        "value": "2 boquillas de cobre, vaso medidor, aguja de limpieza, soplador de polvo"
      }
    ],
    "sort_group": 33,
    "active": true
  },
  {
    "slug": "ingco-ptwtli20182",
    "name": "Termofusora a Batería (P20S) 20V 320°C + 2 Baterías 4AH + Cargador Industrial",
    "description": "Termofusora inalámbrica de 20V para soldar/fusionar caños de polipropileno (PPR) y otros termoplásticos, con control de temperatura ajustable de 0 a 320°C. Incluye 3 boquillas intercambiables para distintos diámetros de caño.",
    "price": 0,
    "category_slug": "maquinas-a-bateria",
    "brand": "Ingco",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/ingco/ingco-ptwtli20182.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "PTWTLI20182"
      },
      {
        "label": "Origen",
        "value": "Ingco (importado)"
      },
      {
        "label": "Voltaje",
        "value": "20V"
      },
      {
        "label": "Rango de temperatura",
        "value": "0-320°C"
      },
      {
        "label": "Diámetros de boquilla",
        "value": "20mm, 25mm, 32mm"
      },
      {
        "label": "Batería incluida",
        "value": "2 x 4.0Ah"
      },
      {
        "label": "Accesorios",
        "value": "3 boquillas intercambiables, llave hexagonal"
      }
    ],
    "sort_group": 34,
    "active": true
  },
  {
    "slug": "ingco-cabli20428",
    "name": "Sopladora Inalámbrica Brushless (P20S) 20V 15000RPM - Solo Herramienta (sin batería ni cargador)",
    "description": "Sopladora inalámbrica de 20V con motor brushless, liviana y compacta, para despejar hojas y residuos de patios, veredas y jardines. Se vende como herramienta sola: la batería y el cargador se compran por separado (compatibles con toda la línea P20S).",
    "price": 163032,
    "category_slug": "maquinas-a-bateria",
    "brand": "Ingco",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/ingco/ingco-cabli20428.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "CABLI20428"
      },
      {
        "label": "Origen",
        "value": "Ingco (importado)"
      },
      {
        "label": "Voltaje",
        "value": "20V"
      },
      {
        "label": "Motor",
        "value": "Brushless (sin carbones)"
      },
      {
        "label": "Velocidad sin carga",
        "value": "15000 rpm"
      },
      {
        "label": "Volumen de aire",
        "value": "8.5 m³/min"
      },
      {
        "label": "Velocidad máx. de aire",
        "value": "42 m/s"
      },
      {
        "label": "Batería/Cargador",
        "value": "No incluidos (vendidos por separado)"
      }
    ],
    "sort_group": 35,
    "active": true
  },
  {
    "slug": "ingco-crsli6508",
    "name": "Sierra Sable Inalámbrica (P20S) 20V 3200RPM - Corta Madera 65mm/Metal 8mm - Solo Herramienta",
    "description": "Sierra sable inalámbrica de 20V con luz de trabajo integrada, pensada para cortes en madera, metal y plástico en obra o taller. Se vende como herramienta sola: batería y cargador P20S se compran por separado.",
    "price": 111840,
    "category_slug": "maquinas-a-bateria",
    "brand": "Ingco",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/ingco/ingco-crsli6508.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "CRSLI6508"
      },
      {
        "label": "Origen",
        "value": "Ingco (importado)"
      },
      {
        "label": "Voltaje",
        "value": "20V"
      },
      {
        "label": "Velocidad sin carga",
        "value": "0-3200 rpm"
      },
      {
        "label": "Capacidad de corte en madera",
        "value": "65 mm"
      },
      {
        "label": "Capacidad de corte en metal",
        "value": "8 mm"
      },
      {
        "label": "Luz de trabajo",
        "value": "LED integrada"
      },
      {
        "label": "Batería/Cargador",
        "value": "No incluidos (vendidos por separado)"
      }
    ],
    "sort_group": 36,
    "active": true
  },
  {
    "slug": "ingco-ckli20277",
    "name": "Combo Taladro Percutor + Atornillador de Impacto 20V Brushless (P20S) + 2 Baterías 2Ah + Cargador",
    "description": "Combo de taladro atornillador de impacto y atornillador de impacto Ingco, ambos con motor brushless y sistema de batería 20V (P20S). Incluye 2 baterías de 2.0Ah, cargador y kit de 47 accesorios en valija de transporte.",
    "price": 0,
    "category_slug": "combos",
    "brand": "Ingco",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/ingco/ingco-ckli20277.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "CKLI20277"
      },
      {
        "label": "Origen",
        "value": "Ingco (importado)"
      },
      {
        "label": "Voltaje",
        "value": "20V (P20S)"
      },
      {
        "label": "Motor",
        "value": "Brushless (ambas herramientas)"
      },
      {
        "label": "Torque taladro CIDLI206681",
        "value": "66 Nm, mandril 13mm, 0-500/0-2000 rpm, 22+1+1 posiciones"
      },
      {
        "label": "Torque atornillador CIRLI20281",
        "value": "285 Nm, punta hex 6.35mm, 0-1600/1900/2600 rpm"
      },
      {
        "label": "Batería",
        "value": "2 x 2.0Ah incluidas"
      },
      {
        "label": "Accesorios",
        "value": "Kit de 47 piezas + valija de transporte"
      }
    ],
    "sort_group": 37,
    "active": true
  },
  {
    "slug": "ingco-cagli271532-4",
    "name": "Amoladora Angular 115mm (4 1/2\") 1000W 20V Brushless (P20S) + 2 Baterías 4Ah + Cargador Industrial",
    "description": "Amoladora angular inalámbrica Ingco de 115mm con motor brushless 20V (P20S), potencia máxima de 1000W y 3 velocidades seleccionables. Incluye 2 baterías de 4.0Ah, cargador industrial y disco de corte, en valija de transporte.",
    "price": 287736,
    "category_slug": "maquinas-a-bateria",
    "brand": "Ingco",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/ingco/ingco-cagli271532-4.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "CAGLI271532"
      },
      {
        "label": "Origen",
        "value": "Ingco (importado)"
      },
      {
        "label": "Voltaje",
        "value": "20V (P20S)"
      },
      {
        "label": "Motor",
        "value": "Brushless"
      },
      {
        "label": "Potencia máx.",
        "value": "1000W"
      },
      {
        "label": "Diámetro de disco",
        "value": "115mm (4 1/2\")"
      },
      {
        "label": "Velocidad sin carga",
        "value": "3000/6000/9000 rpm"
      },
      {
        "label": "Rosca de eje",
        "value": "M14"
      },
      {
        "label": "Batería",
        "value": "2 x 4.0Ah incluidas"
      },
      {
        "label": "Accesorios",
        "value": "10 discos de corte abrasivo + valija"
      }
    ],
    "sort_group": 38,
    "active": true
  },
  {
    "slug": "ingco-cdsli20428",
    "name": "Atornillador para Durlock/Drywall 20V (P20S) con Luz LED (sin batería ni cargador)",
    "description": "Atornillador para durlock/placas de yeso Ingco 20V (P20S), con luz LED integrada, tope de profundidad ajustable y traba de seguridad. Ideal para colocación rápida de tornillos en construcción en seco. No incluye batería ni cargador.",
    "price": 0,
    "category_slug": "maquinas-a-bateria",
    "brand": "Ingco",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/ingco/ingco-cdsli20428.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "CDSLI20428"
      },
      {
        "label": "Origen",
        "value": "Ingco (importado)"
      },
      {
        "label": "Voltaje",
        "value": "20V (P20S)"
      },
      {
        "label": "Velocidad sin carga",
        "value": "0-4200 rpm"
      },
      {
        "label": "Punta",
        "value": "Hexagonal 6.35mm (1/4\")"
      },
      {
        "label": "Diámetro máx. de tornillo",
        "value": "4.2mm"
      },
      {
        "label": "Características",
        "value": "Luz LED, botón de traba, profundidad ajustable"
      },
      {
        "label": "Accesorios incluidos",
        "value": "5 puntas + 1 conector"
      },
      {
        "label": "Batería/Cargador",
        "value": "No incluidos"
      }
    ],
    "sort_group": 39,
    "active": true
  },
  {
    "slug": "ingco-cwli2025",
    "name": "Reflector/Lámpara Portátil LED 1800 Lúmenes 20V (P20S) (sin batería ni cargador)",
    "description": "Reflector/lámpara portátil Ingco de 20V (P20S) con LED de 20W, hasta 1800 lúmenes en modo alto y 900 en modo bajo. Ideal para iluminar zonas de trabajo, obras y emergencias. No incluye batería ni cargador.",
    "price": 95006,
    "category_slug": "maquinas-a-bateria",
    "brand": "Ingco",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/ingco/ingco-cwli2025.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "CWLI2025"
      },
      {
        "label": "Origen",
        "value": "Ingco (importado)"
      },
      {
        "label": "Voltaje",
        "value": "20V (P20S)"
      },
      {
        "label": "Potencia LED",
        "value": "20W"
      },
      {
        "label": "Lúmenes",
        "value": "1800 (alto) / 900 (bajo)"
      },
      {
        "label": "Batería/Cargador",
        "value": "No incluidos, compatible con línea Ingco 20V"
      }
    ],
    "sort_group": 40,
    "active": true
  },
  {
    "slug": "ingco-ctvli2001",
    "name": "Ventosa Vibradora para Cerámicos 20V 130mm - Absorción 60kg (sin batería ni cargador)",
    "description": "Ventosa vibradora a batería Ingco 20V (P20S) para colocación de cerámicos y mayólicas, con disco de succión de 130mm y capacidad de absorción de hasta 60kg. Ayuda a asentar y nivelar las piezas eliminando burbujas de aire. No incluye batería ni cargador.",
    "price": 0,
    "category_slug": "maquinas-a-bateria",
    "brand": "Ingco",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/ingco/ingco-ctvli2001.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "CTVLI2001"
      },
      {
        "label": "Origen",
        "value": "Ingco (importado)"
      },
      {
        "label": "Voltaje",
        "value": "20V (P20S)"
      },
      {
        "label": "Diámetro de ventosa",
        "value": "130mm"
      },
      {
        "label": "Capacidad de absorción",
        "value": "60kg"
      },
      {
        "label": "Batería/Cargador",
        "value": "No incluidos"
      }
    ],
    "sort_group": 41,
    "active": true
  },
  {
    "slug": "ingco-crhli20188",
    "name": "Rotomartillo SDS-Plus 20V 1.8J (P20S) (sin batería ni cargador)",
    "description": "Rotomartillo Ingco 20V (P20S) con mandril SDS-Plus y energía de impacto de 1.8J, pensado para instalaciones eléctricas, sanitarias y perforaciones livianas en mampostería. Incluye 3 mechas SDS. No incluye batería ni cargador.",
    "price": 121970,
    "category_slug": "maquinas-a-bateria",
    "brand": "Ingco",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/ingco/ingco-crhli20188.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "CRHLI20188"
      },
      {
        "label": "Origen",
        "value": "Ingco (importado)"
      },
      {
        "label": "Voltaje",
        "value": "20V (P20S)"
      },
      {
        "label": "Energía de impacto",
        "value": "1.8J"
      },
      {
        "label": "Mandril",
        "value": "SDS-Plus"
      },
      {
        "label": "Accesorios incluidos",
        "value": "3 brocas/mechas SDS"
      },
      {
        "label": "Batería/Cargador",
        "value": "No incluidos"
      }
    ],
    "sort_group": 42,
    "active": true
  },
  {
    "slug": "ingco-crhli20288",
    "name": "Rotomartillo SDS-Plus 20V 4.5J Brushless (P20S) (sin batería ni cargador)",
    "description": "Rotomartillo Ingco SDS-Plus 20V (P20S) con motor brushless, 4.5J de energía de impacto y hasta 4400 golpes por minuto. Perfora hasta 28mm en hormigón, 13mm en acero y 40mm en madera. Incluye 3 mechas, cincel, tubo de grasa y llave. No incluye batería ni cargador.",
    "price": 214601,
    "category_slug": "maquinas-a-bateria",
    "brand": "Ingco",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/ingco/ingco-crhli20288.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "CRHLI20288"
      },
      {
        "label": "Origen",
        "value": "Ingco (importado)"
      },
      {
        "label": "Voltaje",
        "value": "20V (P20S)"
      },
      {
        "label": "Motor",
        "value": "Brushless"
      },
      {
        "label": "Energía de impacto",
        "value": "4.5J"
      },
      {
        "label": "Velocidad sin carga",
        "value": "0-930 rpm"
      },
      {
        "label": "Frecuencia de impacto",
        "value": "0-4400 bpm"
      },
      {
        "label": "Mandril",
        "value": "SDS-Plus"
      },
      {
        "label": "Capacidad de perforación",
        "value": "28mm hormigón / 13mm acero / 40mm madera"
      },
      {
        "label": "Accesorios incluidos",
        "value": "3 mechas (8,10,12mm), 1 cincel, grasa, llave"
      },
      {
        "label": "Batería/Cargador",
        "value": "No incluidos"
      }
    ],
    "sort_group": 43,
    "active": true
  },
  {
    "slug": "ingco-cmli20228-4",
    "name": "Multiherramienta Oscilante 20V (P20S) + Batería 2Ah + Cargador + Accesorios",
    "description": "Multiherramienta oscilante Ingco 20V (P20S), velocidad variable de 5000 a 20000 rpm en 6 posiciones y ángulo de oscilación de 3.2°. Incluye batería de 2.0Ah, cargador, rasqueta flexible, hojas de sierra, base de lijado y valija.",
    "price": 179170,
    "category_slug": "maquinas-a-bateria",
    "brand": "Ingco",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/ingco/ingco-cmli20228-4.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "CMLI20228"
      },
      {
        "label": "Origen",
        "value": "Ingco (importado)"
      },
      {
        "label": "Voltaje",
        "value": "20V (P20S)"
      },
      {
        "label": "Velocidad",
        "value": "5000-20000 rpm, 6 posiciones"
      },
      {
        "label": "Ángulo de oscilación",
        "value": "3.2°"
      },
      {
        "label": "Batería",
        "value": "1 x 2.0Ah incluida"
      },
      {
        "label": "Accesorios",
        "value": "Rasqueta flexible, hojas de sierra, base de lijado, 3 lijas, valija"
      }
    ],
    "sort_group": 44,
    "active": true
  },
  {
    "slug": "ingco-cwli2058",
    "name": "Lámpara de Trabajo Inalámbrica LED 450 Lúmenes 20V (P20S) (sin batería ni cargador)",
    "description": "Lámpara de trabajo inalámbrica Ingco 20V (P20S), LED de 5W con 450 lúmenes en modo alto y 230 en modo bajo, cabezal orientable 120°+30° y gancho metálico para colgar. No incluye batería ni cargador.",
    "price": 0,
    "category_slug": "maquinas-a-bateria",
    "brand": "Ingco",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/ingco/ingco-cwli2058.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "CWLI2058"
      },
      {
        "label": "Origen",
        "value": "Ingco (importado)"
      },
      {
        "label": "Voltaje",
        "value": "20V (P20S)"
      },
      {
        "label": "Potencia LED",
        "value": "5W"
      },
      {
        "label": "Lúmenes",
        "value": "450 (alto) / 230 (bajo)"
      },
      {
        "label": "Ángulo ajustable",
        "value": "120° + 30° extra"
      },
      {
        "label": "Batería/Cargador",
        "value": "No incluidos"
      }
    ],
    "sort_group": 45,
    "active": true
  },
  {
    "slug": "ingco-cs18578-4",
    "name": "Sierra Circular 1200W 7-1/4\" (185mm) Super Select",
    "description": "Sierra circular eléctrica profesional de 1200W con disco de 185mm (7-1/4\"), ideal para cortes rápidos y precisos en madera. Para carpintería, taller o uso profesional y amateur.",
    "price": 0,
    "category_slug": "maquinas-electricas",
    "brand": "Ingco",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/ingco/ingco-cs18578-4.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "CS18578"
      },
      {
        "label": "Origen",
        "value": "Ingco (importado)"
      },
      {
        "label": "Potencia",
        "value": "1200W"
      },
      {
        "label": "Velocidad",
        "value": "5000 rpm"
      },
      {
        "label": "Diámetro de disco",
        "value": "185mm (7-1/4\")"
      },
      {
        "label": "Profundidad de corte a 90°",
        "value": "65mm"
      },
      {
        "label": "Profundidad de corte a 45°",
        "value": "45mm"
      },
      {
        "label": "Voltaje",
        "value": "220-240V"
      },
      {
        "label": "Peso",
        "value": "5 kg"
      }
    ],
    "sort_group": 46,
    "active": true
  },
  {
    "slug": "ingco-hrrtb2015",
    "name": "Bolso Porta Herramientas Rígido con Ruedas 20\"",
    "description": "Bolso porta herramientas industrial de 20 pulgadas con estructura rígida, base plástica reforzada, mango telescópico y ruedas para fácil transporte. Cuenta con múltiples bolsillos internos y externos.",
    "price": 101398,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Ingco",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/ingco/ingco-hrrtb2015.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "HRRTB2015"
      },
      {
        "label": "Origen",
        "value": "Ingco (importado)"
      },
      {
        "label": "Dimensiones",
        "value": "450 x 280/300 x 360 mm"
      },
      {
        "label": "Material",
        "value": "Poliéster 1680D con base plástica rígida"
      },
      {
        "label": "Bolsillos",
        "value": "19 (14 internos + 5 externos)"
      },
      {
        "label": "Carga máxima",
        "value": "20 kg"
      },
      {
        "label": "Volumen",
        "value": "30 litros"
      },
      {
        "label": "Transporte",
        "value": "Mango telescópico + 2 ruedas"
      }
    ],
    "sort_group": 47,
    "active": true
  },
  {
    "slug": "ingco-cb1501-4",
    "name": "Cargador de Batería 6/12V para Auto y Moto (ING-CB1501)",
    "description": "Cargador de baterías portátil de diseño compacto para cargar baterías de auto y moto de 6V y 12V. Incluye protección contra sobrecarga y cortocircuito.",
    "price": 0,
    "category_slug": "baterias-y-cargadores",
    "brand": "Ingco",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/ingco/ingco-cb1501-4.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "CB1501"
      },
      {
        "label": "Origen",
        "value": "Ingco (importado)"
      },
      {
        "label": "Voltaje de entrada",
        "value": "220-240V~50/60Hz"
      },
      {
        "label": "Voltaje de carga",
        "value": "6V / 12V"
      },
      {
        "label": "Corriente nominal",
        "value": "6A"
      },
      {
        "label": "Capacidad de batería (referencia)",
        "value": "40-90 Ah"
      },
      {
        "label": "Peso",
        "value": "3.4 kg"
      },
      {
        "label": "Protecciones",
        "value": "Sobrecarga y cortocircuito"
      }
    ],
    "sort_group": 48,
    "active": true
  },
  {
    "slug": "ingco-fbcpk2013-4",
    "name": "Kit 2 Baterías de Litio 20V 4.0Ah (P20S) + Cargador Rápido Industrial",
    "description": "Kit con 2 baterías de iones de litio de 20V 4.0Ah línea P20S más un cargador rápido inteligente, compatible con toda la línea de herramientas inalámbricas Ingco P20S. Incluye indicador LED de carga.",
    "price": 0,
    "category_slug": "baterias-y-cargadores",
    "brand": "Ingco",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/ingco/ingco-fbcpk2013-4.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "FBCPK2013"
      },
      {
        "label": "Origen",
        "value": "Ingco (importado)"
      },
      {
        "label": "Baterías incluidas",
        "value": "2 x 20V 4.0Ah Litio-ion"
      },
      {
        "label": "Cargador incluido",
        "value": "FCLI20411, rápido inteligente"
      },
      {
        "label": "Corriente de salida cargador",
        "value": "4A"
      },
      {
        "label": "Compatibilidad",
        "value": "Herramientas Ingco línea P20S 20V"
      }
    ],
    "sort_group": 49,
    "active": true
  },
  {
    "slug": "ingco-fbcpk1012-4",
    "name": "Kit Batería de Litio 20V 4.0Ah (P20S) + Cargador Industrial",
    "description": "Kit con 1 batería de iones de litio FBLI20021 de 20V 4.0Ah línea P20S más 1 cargador FCLI2001, en doble blister. Compatible con toda la línea de herramientas inalámbricas Ingco P20S.",
    "price": 0,
    "category_slug": "baterias-y-cargadores",
    "brand": "Ingco",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/ingco/ingco-fbcpk1012-4.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "FBCPK1012"
      },
      {
        "label": "Origen",
        "value": "Ingco (importado)"
      },
      {
        "label": "Batería incluida",
        "value": "1 x FBLI20021, 20V 4.0Ah Litio-ion"
      },
      {
        "label": "Cargador incluido",
        "value": "FCLI2001"
      },
      {
        "label": "Corriente de salida cargador",
        "value": "2A"
      },
      {
        "label": "Compatibilidad",
        "value": "Herramientas Ingco línea P20S 20V"
      }
    ],
    "sort_group": 50,
    "active": true
  },
  {
    "slug": "ingco-fbcpk2212-4",
    "name": "Kit 2 Baterías de Litio 20V 2.0Ah (P20S) + Cargador Rápido",
    "description": "Kit con 2 baterías de iones de litio FBLI20011 de 20V 2.0Ah línea P20S más 1 cargador rápido inteligente FCLI2001, en doble blister. Ideal para trabajar sin interrupciones alternando baterías.",
    "price": 111536,
    "category_slug": "baterias-y-cargadores",
    "brand": "Ingco",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/ingco/ingco-fbcpk2212-4.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "FBCPK2212"
      },
      {
        "label": "Origen",
        "value": "Ingco (importado)"
      },
      {
        "label": "Baterías incluidas",
        "value": "2 x FBLI20011, 20V 2.0Ah Litio-ion"
      },
      {
        "label": "Cargador incluido",
        "value": "FCLI2001, rápido inteligente"
      },
      {
        "label": "Compatibilidad",
        "value": "Herramientas Ingco línea P20S 20V"
      }
    ],
    "sort_group": 51,
    "active": true
  },
  {
    "slug": "ingco-fbcpk2513-4",
    "name": "Kit 2 Baterías de Litio 20V 5.0Ah (P20S) + Cargador Rápido 4A",
    "description": "Kit con 2 baterías de iones de litio FBLI20031 de 20V 5.0Ah línea P20S más 1 cargador rápido inteligente FCLI20411 de 4A, en doble blister. Máxima autonomía para trabajos profesionales exigentes.",
    "price": 0,
    "category_slug": "baterias-y-cargadores",
    "brand": "Ingco",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/ingco/ingco-fbcpk2513-4.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "FBCPK2513"
      },
      {
        "label": "Origen",
        "value": "Ingco (importado)"
      },
      {
        "label": "Baterías incluidas",
        "value": "2 x FBLI20031, 20V 5.0Ah Litio-ion"
      },
      {
        "label": "Voltaje de salida cargador",
        "value": "21V"
      },
      {
        "label": "Corriente de salida cargador",
        "value": "4A"
      },
      {
        "label": "Compatibilidad",
        "value": "Herramientas Ingco línea P20S 20V"
      }
    ],
    "sort_group": 52,
    "active": true
  },
  {
    "slug": "ingco-fcli2001-4",
    "name": "Cargador de Batería (P20S) 20V 2A Industrial",
    "description": "Cargador de batería de iones de litio de la línea P20S, compatible con baterías Ingco de 1.5Ah, 2Ah, 4Ah y 5Ah. Incluye indicador LED de estado de carga.",
    "price": 27569,
    "category_slug": "baterias-y-cargadores",
    "brand": "Ingco",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/ingco/ingco-fcli2001-4.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "FCLI2001"
      },
      {
        "label": "Origen",
        "value": "Ingco (importado)"
      },
      {
        "label": "Voltaje de entrada",
        "value": "220-240V~50/60Hz"
      },
      {
        "label": "Voltaje de salida",
        "value": "20V"
      },
      {
        "label": "Corriente de salida",
        "value": "2A"
      },
      {
        "label": "Compatibilidad",
        "value": "Baterías 20V de 1.5Ah, 2Ah, 4Ah y 5Ah"
      },
      {
        "label": "Tiempo de carga (batería 2Ah)",
        "value": "1 hora"
      },
      {
        "label": "Peso",
        "value": "0.43 kg"
      }
    ],
    "sort_group": 53,
    "active": true
  },
  {
    "slug": "ingco-fcli2082-4",
    "name": "Cargador Doble Rápido Para Batería 20V 8Ah (P20S) Industrial",
    "description": "Cargador doble e inteligente de 20V para baterías de iones de litio línea P20S. Carga hasta dos baterías de forma simultánea e independiente en cada puerto, con apagado automático al completar la carga.",
    "price": 104592,
    "category_slug": "baterias-y-cargadores",
    "brand": "Ingco",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/ingco/ingco-fcli2082-4.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "FCLI2082"
      },
      {
        "label": "Origen",
        "value": "Ingco (importado)"
      },
      {
        "label": "Voltaje de salida",
        "value": "20V"
      },
      {
        "label": "Corriente de salida",
        "value": "4A + 4A"
      },
      {
        "label": "Puertos de carga",
        "value": "2, activos e independientes"
      },
      {
        "label": "Peso",
        "value": "1 kg"
      }
    ],
    "sort_group": 54,
    "active": true
  },
  {
    "slug": "ingco-fbli42201",
    "name": "Batería de Litio-Ion 42V 2.0Ah Línea P42M",
    "description": "Batería de iones de litio 42V 2.0Ah de la línea profesional P42M de Ingco. Incluye indicador LED de carga restante y es compatible con toda la gama de herramientas inalámbricas P42M.",
    "price": 89500,
    "category_slug": "baterias-y-cargadores",
    "brand": "Ingco",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/ingco/ingco-fbli42201.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "FBLI42201"
      },
      {
        "label": "Origen",
        "value": "Ingco (importado)"
      },
      {
        "label": "Voltaje",
        "value": "42V"
      },
      {
        "label": "Capacidad",
        "value": "2.0Ah"
      },
      {
        "label": "Tipo",
        "value": "Litio-Ion"
      },
      {
        "label": "Indicador",
        "value": "LED de nivel de carga"
      },
      {
        "label": "Compatibilidad",
        "value": "Línea Ingco P42M"
      }
    ],
    "sort_group": 55,
    "active": true
  },
  {
    "slug": "ingco-fcli42021-4",
    "name": "Cargador Para Batería 42V 2Ah Línea P42M Industrial",
    "description": "Cargador inteligente para baterías de iones de litio 42V de la línea profesional P42M de Ingco. Ofrece una carga eficiente, segura y estable, apto para uso profesional e industrial.",
    "price": 0,
    "category_slug": "baterias-y-cargadores",
    "brand": "Ingco",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/ingco/ingco-fcli42021-4.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "FCLI42021"
      },
      {
        "label": "Origen",
        "value": "Ingco (importado)"
      },
      {
        "label": "Voltaje de entrada",
        "value": "220-240V~50/60Hz"
      },
      {
        "label": "Voltaje de salida",
        "value": "42V"
      },
      {
        "label": "Corriente de salida",
        "value": "2A"
      },
      {
        "label": "Compatibilidad",
        "value": "Baterías Ingco línea P42M"
      }
    ],
    "sort_group": 56,
    "active": true
  },
  {
    "slug": "ingco-cos230908",
    "name": "Set 4 en 1 Porta Herramientas: Mochila + Chaleco + Bolso + Cinturón",
    "description": "Combo de 4 piezas para transporte y organización de herramientas, fabricado en poliéster 1680D. Incluye mochila porta herramientas, bolso 13\", cinturón porta herramientas y chaleco multiuso.",
    "price": 83621,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Ingco",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/ingco/ingco-cos230908.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "COS230908"
      },
      {
        "label": "Origen",
        "value": "Ingco (importado)"
      },
      {
        "label": "Material",
        "value": "Poliéster 1680D"
      },
      {
        "label": "Piezas incluidas",
        "value": "4 (mochila, bolso, cinturón, chaleco)"
      },
      {
        "label": "Mochila",
        "value": "38x17x46cm, carga máx. 8kg"
      },
      {
        "label": "Bolso",
        "value": "33x21x18cm, carga máx. 12kg"
      },
      {
        "label": "Cinturón",
        "value": "ajustable 92-127cm, 10 bolsillos"
      },
      {
        "label": "Chaleco",
        "value": "48x60x3cm, carga máx. 3kg, 17 bolsillos"
      }
    ],
    "sort_group": 57,
    "active": true
  },
  {
    "slug": "ingco-htvt09028",
    "name": "Chaleco Porta Herramientas Multiuso 17 Bolsillos",
    "description": "Chaleco porta herramientas multiuso con 17 bolsillos de distintos tamaños, correas de hombro y cintura ajustables y material de malla transpirable.",
    "price": 36091,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Ingco",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/ingco/ingco-htvt09028.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "HTVT09028"
      },
      {
        "label": "Origen",
        "value": "Ingco (importado)"
      },
      {
        "label": "Bolsillos",
        "value": "17"
      },
      {
        "label": "Dimensiones",
        "value": "48 x 60 x 3 cm"
      },
      {
        "label": "Carga máxima",
        "value": "3 kg"
      },
      {
        "label": "Material",
        "value": "Malla de aire (mesh)"
      }
    ],
    "sort_group": 58,
    "active": true
  },
  {
    "slug": "ingco-hptct031",
    "name": "Carro Porta Herramientas 3 Bandejas con Ruedas Industrial 300 Lbs",
    "description": "Carro rodante de herramientas industrial con 3 bandejas removibles, estructura de acero con acabado en polvo, 4 ruedas giratorias (2 con freno) y manija ergonómica.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Ingco",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/ingco/ingco-hptct031.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "HPTCT031"
      },
      {
        "label": "Origen",
        "value": "Ingco (importado)"
      },
      {
        "label": "Capacidad máxima",
        "value": "300 lbs (~135 kg)"
      },
      {
        "label": "Bandejas",
        "value": "3, de 28\" x 14\" cada una"
      },
      {
        "label": "Material",
        "value": "Acero"
      },
      {
        "label": "Dimensiones",
        "value": "35.6 x 71.1 x 66 cm"
      },
      {
        "label": "Peso",
        "value": "14.18 kg"
      }
    ],
    "sort_group": 59,
    "active": true
  },
  {
    "slug": "ingco-hhwb61001",
    "name": "Plataforma Rodante Para Cajas Apilables 100kg",
    "description": "Base con ruedas que transforma las cajas apilables Ingco en un carro móvil de gran capacidad. Estructura de ABS resistente con ruedas de PP+TPR para un desplazamiento suave.",
    "price": 63917,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Ingco",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/ingco/ingco-hhwb61001.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "HHWB61001"
      },
      {
        "label": "Origen",
        "value": "Ingco (importado)"
      },
      {
        "label": "Capacidad máxima",
        "value": "100 kg"
      },
      {
        "label": "Dimensiones plataforma",
        "value": "537 x 360 mm"
      },
      {
        "label": "Material",
        "value": "ABS"
      },
      {
        "label": "Peso",
        "value": "~3.6-3.8 kg"
      },
      {
        "label": "Ruedas",
        "value": "4 x 4\" (PP+TPR)"
      }
    ],
    "sort_group": 60,
    "active": true
  },
  {
    "slug": "ingco-pbx2001",
    "name": "Caja Plástica Organizadora 20 Pulgadas con Bandeja",
    "description": "Caja organizadora plástica de 20 pulgadas fabricada en polipropileno, con manija de alta resistencia, tapa superior con función de escala y tres compartimentos de almacenamiento. Incluye 1 bandeja plástica interior removible.",
    "price": 0,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Ingco",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/ingco/ingco-pbx2001.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "PBX2001"
      },
      {
        "label": "Origen",
        "value": "Ingco (importado)"
      },
      {
        "label": "Dimensiones",
        "value": "508 x 296 x 261 mm (20\")"
      },
      {
        "label": "Material",
        "value": "Polipropileno (PP)"
      },
      {
        "label": "Peso",
        "value": "2150 g"
      },
      {
        "label": "Carga máxima",
        "value": "20 kg"
      },
      {
        "label": "Bandejas incluidas",
        "value": "1 (plástica, removible)"
      }
    ],
    "sort_group": 61,
    "active": true
  },
  {
    "slug": "ingco-htbp010128",
    "name": "Bolsito de Cintura Porta Herramientas 9 Bolsillos",
    "description": "Bolsito de cintura para herramientas Ingco, ideal para llevar las herramientas de uso frecuente siempre a mano. Fabricado en poliéster 1680D resistente, con 9 bolsillos y portamartillo.",
    "price": 21404,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Ingco",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/ingco/ingco-htbp010128.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "HTBP010128"
      },
      {
        "label": "Origen",
        "value": "Ingco (importado)"
      },
      {
        "label": "Dimensiones",
        "value": "35 x 32 cm"
      },
      {
        "label": "Material",
        "value": "Poliéster 1680D"
      },
      {
        "label": "Bolsillos",
        "value": "9"
      },
      {
        "label": "Carga máxima",
        "value": "10 kg"
      }
    ],
    "sort_group": 62,
    "active": true
  },
  {
    "slug": "ingco-hbp01028",
    "name": "Mochila Porta Herramientas Reforzada 25 Bolsillos",
    "description": "Mochila porta herramientas Ingco con armazón rígido que facilita la apertura y el acceso interior. Cuenta con 25 bolsillos y espaldar acolchado para mayor comodidad.",
    "price": 54627,
    "category_slug": "accesorios-y-terminaciones",
    "brand": "Ingco",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/ingco/ingco-hbp01028.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "HBP01028"
      },
      {
        "label": "Origen",
        "value": "Ingco (importado)"
      },
      {
        "label": "Dimensiones",
        "value": "380 x 170 x 460 mm"
      },
      {
        "label": "Material",
        "value": "Poliéster Oxford 1680D"
      },
      {
        "label": "Bolsillos",
        "value": "25 (4 internos + 6 externos)"
      },
      {
        "label": "Carga máxima",
        "value": "8 kg"
      }
    ],
    "sort_group": 63,
    "active": true
  },
  {
    "slug": "ingco-js57028-4",
    "name": "Sierra Caladora Eléctrica 570W",
    "description": "Sierra caladora eléctrica Ingco de 570W con velocidad variable y función péndulo en 4 pasos, ideal para cortes curvos y rectos en madera y metal. Incluye 3 hojas de sierra y juego de carbones de repuesto.",
    "price": 85522,
    "category_slug": "maquinas-electricas",
    "brand": "Ingco",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/ingco/ingco-js57028-4.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "JS57028"
      },
      {
        "label": "Origen",
        "value": "Ingco (importado)"
      },
      {
        "label": "Potencia",
        "value": "570W"
      },
      {
        "label": "Velocidad sin carga",
        "value": "800-3000 rpm"
      },
      {
        "label": "Corte en madera",
        "value": "65 mm"
      },
      {
        "label": "Corte en acero",
        "value": "8 mm"
      },
      {
        "label": "Función péndulo",
        "value": "4 pasos"
      },
      {
        "label": "Incluye",
        "value": "3 hojas de sierra + juego de carbones"
      }
    ],
    "sort_group": 64,
    "active": true
  },
  {
    "slug": "ingco-js80068-4",
    "name": "Sierra Caladora 800W Industrial",
    "description": "Sierra caladora industrial Ingco de 800W con base de aluminio y función péndulo en 4 pasos, para cortes precisos en madera y metal. Incluye 5 hojas de sierra y juego de carbones de repuesto.",
    "price": 0,
    "category_slug": "maquinas-electricas",
    "brand": "Ingco",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/ingco/ingco-js80068-4.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "JS80068"
      },
      {
        "label": "Origen",
        "value": "Ingco (importado)"
      },
      {
        "label": "Potencia",
        "value": "800W"
      },
      {
        "label": "Velocidad sin carga",
        "value": "800-3100 rpm"
      },
      {
        "label": "Corte en madera",
        "value": "135 mm"
      },
      {
        "label": "Corte en acero",
        "value": "10 mm"
      },
      {
        "label": "Función péndulo",
        "value": "4 pasos"
      },
      {
        "label": "Base",
        "value": "Aluminio"
      },
      {
        "label": "Incluye",
        "value": "5 hojas de sierra + juego de carbones"
      }
    ],
    "sort_group": 65,
    "active": true
  },
  {
    "slug": "ingco-rh10506-4",
    "name": "Rotomartillo Eléctrico SDS-Plus 1050W",
    "description": "Rotomartillo eléctrico Ingco de 1050W con mandril SDS-Plus para cambio rápido de brocas y cinceles. Diseñado para perforación y demolición liviana en hormigón, ladrillo y mampostería. Incluye 3 brocas y 2 cinceles.",
    "price": 145862,
    "category_slug": "maquinas-electricas",
    "brand": "Ingco",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/ingco/ingco-rh10506-4.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "RH10506"
      },
      {
        "label": "Origen",
        "value": "Ingco (importado)"
      },
      {
        "label": "Potencia",
        "value": "1050W"
      },
      {
        "label": "Velocidad sin carga",
        "value": "1100 rpm"
      },
      {
        "label": "Tasa de impacto",
        "value": "3800 bpm"
      },
      {
        "label": "Energía de impacto",
        "value": "4.5 J"
      },
      {
        "label": "Perforación hormigón",
        "value": "26 mm"
      },
      {
        "label": "Mandril",
        "value": "SDS-Plus"
      },
      {
        "label": "Incluye",
        "value": "3 brocas + 2 cinceles"
      }
    ],
    "sort_group": 66,
    "active": true
  },
  {
    "slug": "ingco-ps2416-4",
    "name": "Lijadora Orbital de Palma 240W",
    "description": "Lijadora orbital de palma Ingco de 240W, diseñada para lijado fino y desbastado ligero en madera, pintura, plástico y metal. Base compacta ideal para trabajar en rincones y superficies pequeñas. Incluye 5 hojas de lija.",
    "price": 90227,
    "category_slug": "maquinas-electricas",
    "brand": "Ingco",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/ingco/ingco-ps2416-4.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "PS2416"
      },
      {
        "label": "Origen",
        "value": "Ingco (importado)"
      },
      {
        "label": "Potencia",
        "value": "240W"
      },
      {
        "label": "Velocidad sin carga",
        "value": "14000 rpm"
      },
      {
        "label": "Base",
        "value": "110 x 100 mm"
      },
      {
        "label": "Incluye",
        "value": "5 hojas de lija + juego de carbones"
      }
    ],
    "sort_group": 67,
    "active": true
  },
  {
    "slug": "ingco-pl7508-4",
    "name": "Cepillo Eléctrico de Madera 750W",
    "description": "Cepillo eléctrico de carpintero Ingco de 750W, con base y cubierta lateral de aluminio para un acabado preciso en superficies de madera. Ideal para desbastar, ranurar y rebajar en trabajos de carpintería.",
    "price": 0,
    "category_slug": "maquinas-electricas",
    "brand": "Ingco",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/ingco/ingco-pl7508-4.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "PL7508"
      },
      {
        "label": "Origen",
        "value": "Ingco (importado)"
      },
      {
        "label": "Potencia",
        "value": "750W"
      },
      {
        "label": "Velocidad sin carga",
        "value": "17000 rpm"
      },
      {
        "label": "Ancho/profundidad de cepillado",
        "value": "82 x 2 mm"
      },
      {
        "label": "Base",
        "value": "Aluminio reforzado"
      },
      {
        "label": "Incluye",
        "value": "Llave, guía paralela y juego de carbones"
      }
    ],
    "sort_group": 68,
    "active": true
  },
  {
    "slug": "ingco-ag9608-4",
    "name": "Amoladora Angular 4-1/2\" 115mm 960W",
    "description": "Amoladora angular Ingco de 960W con mango ergonómico, para tareas de corte, desbaste y pulido en distintos materiales. Disco de 115mm (4-1/2\"), rosca M14.",
    "price": 98540,
    "category_slug": "maquinas-electricas",
    "brand": "Ingco",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/ingco/ingco-ag9608-4.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "AG9608"
      },
      {
        "label": "Origen",
        "value": "Ingco (importado)"
      },
      {
        "label": "Potencia",
        "value": "960W"
      },
      {
        "label": "Velocidad sin carga",
        "value": "12000 rpm"
      },
      {
        "label": "Diámetro de disco",
        "value": "115 mm (4-1/2\")"
      },
      {
        "label": "Rosca del eje",
        "value": "M14"
      },
      {
        "label": "Incluye",
        "value": "Mango auxiliar (disco no incluido)"
      }
    ],
    "sort_group": 69,
    "active": true
  },
  {
    "slug": "ingco-ag24008-4",
    "name": "Amoladora Angular 9\" 230mm 2400W",
    "description": "Amoladora angular industrial Ingco de 2400W con disco de 230mm (9\"), pensada para trabajos exigentes de corte y desbaste en metal y mampostería. Incluye mango auxiliar.",
    "price": 253931,
    "category_slug": "maquinas-electricas",
    "brand": "Ingco",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/ingco/ingco-ag24008-4.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "AG24008"
      },
      {
        "label": "Origen",
        "value": "Ingco (importado)"
      },
      {
        "label": "Voltaje",
        "value": "220-240V"
      },
      {
        "label": "Potencia",
        "value": "2400W"
      },
      {
        "label": "Velocidad sin carga",
        "value": "6300 rpm"
      },
      {
        "label": "Diámetro de disco",
        "value": "230 mm (9\")"
      },
      {
        "label": "Rosca del eje",
        "value": "5/8\"-11UNC"
      },
      {
        "label": "Incluye",
        "value": "Mango auxiliar"
      }
    ],
    "sort_group": 70,
    "active": true
  },
  {
    "slug": "ingco-rh1600388-4",
    "name": "Rotomartillo Demoledor SDS-MAX 1600W 10J",
    "description": "Rotomartillo demoledor profesional con sistema SDS-MAX, ideal para demolición y perforación en hormigón y mampostería. Sistema anti-vibración y bloqueo de cincel. Incluye mechas, cinceles y maletín de transporte.",
    "price": 0,
    "category_slug": "maquinas-electricas",
    "brand": "Ingco",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/ingco/ingco-rh1600388-4.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "RH1600388"
      },
      {
        "label": "Origen",
        "value": "Ingco (importado)"
      },
      {
        "label": "Potencia",
        "value": "1600W"
      },
      {
        "label": "Velocidad sin carga",
        "value": "630 rpm"
      },
      {
        "label": "Frecuencia de impacto",
        "value": "3850 bpm"
      },
      {
        "label": "Energía de impacto",
        "value": "10 J"
      },
      {
        "label": "Capacidad máx. hormigón",
        "value": "40 mm"
      },
      {
        "label": "Sistema de sujeción",
        "value": "SDS-MAX"
      },
      {
        "label": "Accesorios incluidos",
        "value": "2 mechas, 2 cinceles, maletín"
      }
    ],
    "sort_group": 71,
    "active": true
  },
  {
    "slug": "ingco-hg200058-4",
    "name": "Pistola De Calor 2000W Temperatura Variable + Accesorios Industrial",
    "description": "Pistola de calor industrial de 2000W con pantalla LCD para control preciso de temperatura y caudal de aire en 3 modos. Incluye boquillas intercambiables para decapado de pintura, termocontraíble, soldadura y moldeado de plásticos.",
    "price": 88005,
    "category_slug": "maquinas-electricas",
    "brand": "Ingco",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/ingco/ingco-hg200058-4.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "HG200058"
      },
      {
        "label": "Origen",
        "value": "Ingco (importado)"
      },
      {
        "label": "Potencia",
        "value": "2000W"
      },
      {
        "label": "Rango de temperatura",
        "value": "50-600°C, con pantalla LCD"
      },
      {
        "label": "Caudal de aire",
        "value": "450/300/450 L/min (3 modos)"
      },
      {
        "label": "Accesorios incluidos",
        "value": "Boquilla reductora, reflectora, plana, rasqueta"
      }
    ],
    "sort_group": 72,
    "active": true
  },
  {
    "slug": "ingco-rs7508-4",
    "name": "Sierra Sable Recíproca Eléctrica 750W",
    "description": "Sierra sable eléctrica de 750W con velocidad variable, ideal para cortes rápidos en madera, metal, tubos y plásticos en trabajos de construcción, mantenimiento y desarme. Sistema de cambio de hoja sin herramientas (SDS).",
    "price": 146876,
    "category_slug": "maquinas-electricas",
    "brand": "Ingco",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/ingco/ingco-rs7508-4.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "RS7508"
      },
      {
        "label": "Origen",
        "value": "Ingco (importado)"
      },
      {
        "label": "Potencia",
        "value": "750W"
      },
      {
        "label": "Velocidad sin carga",
        "value": "900-3300 rpm"
      },
      {
        "label": "Longitud de carrera",
        "value": "25 mm"
      },
      {
        "label": "Capacidad de corte en madera",
        "value": "115 mm"
      },
      {
        "label": "Capacidad de corte en acero",
        "value": "8 mm"
      },
      {
        "label": "Accesorios incluidos",
        "value": "1 hoja madera, 1 hoja metal, llave hex"
      }
    ],
    "sort_group": 73,
    "active": true
  },
  {
    "slug": "ingco-cos243558-4",
    "name": "Sierra Sensitiva Tronzadora 14\" (355mm) 2400W 3900RPM Industrial",
    "description": "Sierra sensitiva (tronzadora) industrial de 2400W para cortes rápidos y precisos en perfiles, caños y barras de acero. Incluye disco de corte de 355mm y guía para ajustar el ángulo de corte.",
    "price": 265905,
    "category_slug": "maquinas-electricas",
    "brand": "Ingco",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/ingco/ingco-cos243558-4.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "COS243558"
      },
      {
        "label": "Origen",
        "value": "Ingco (importado)"
      },
      {
        "label": "Potencia",
        "value": "2400W"
      },
      {
        "label": "Velocidad sin carga",
        "value": "3900 rpm"
      },
      {
        "label": "Disco",
        "value": "355 mm x 25.4 mm"
      },
      {
        "label": "Capacidad corte tubo redondo",
        "value": "100 mm"
      },
      {
        "label": "Capacidad corte perfil cuadrado",
        "value": "100 x 100 mm"
      },
      {
        "label": "Capacidad corte barra maciza",
        "value": "50 mm"
      },
      {
        "label": "Accesorios incluidos",
        "value": "1 disco de corte de 355 mm"
      }
    ],
    "sort_group": 74,
    "active": true
  },
  {
    "slug": "ingco-hpwr14008-4",
    "name": "Hidrolavadora Eléctrica 1400W 130 Bar",
    "description": "Hidrolavadora eléctrica de 1400W para uso doméstico y semiprofesional, ideal para lavar vehículos, patios, terrazas y herramientas. Sistema de auto-stop que ahorra energía al soltar el gatillo. Incluye pistola pulverizadora y manguera de alta presión de 5 metros.",
    "price": 176306,
    "category_slug": "maquinas-electricas",
    "brand": "Ingco",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/ingco/ingco-hpwr14008-4.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "HPWR14008"
      },
      {
        "label": "Origen",
        "value": "Ingco (importado)"
      },
      {
        "label": "Potencia",
        "value": "1400W"
      },
      {
        "label": "Presión máxima",
        "value": "130 bar (1900 PSI)"
      },
      {
        "label": "Caudal",
        "value": "5.5 L/min"
      },
      {
        "label": "Peso",
        "value": "5 kg"
      },
      {
        "label": "Accesorios incluidos",
        "value": "Pistola pulverizadora + manguera de 5m"
      }
    ],
    "sort_group": 75,
    "active": true
  },
  {
    "slug": "ingco-spg3508-4",
    "name": "Pistola Pulverizadora Para Pintar Eléctrica 450W",
    "description": "Pistola pulverizadora eléctrica para pintar, ideal para aplicar pintura, barniz y sellador en muros, cercos y muebles. Incluye tacho de 800ml, vaso medidor de viscosidad y aguja de limpieza de boquilla.",
    "price": 57869,
    "category_slug": "maquinas-electricas",
    "brand": "Ingco",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/ingco/ingco-spg3508-4.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "SPG3508"
      },
      {
        "label": "Origen",
        "value": "Ingco (importado)"
      },
      {
        "label": "Potencia",
        "value": "450W"
      },
      {
        "label": "Presión de pulverizado",
        "value": "0.1-0.2 Bar"
      },
      {
        "label": "Caudal máximo",
        "value": "550 ml/min"
      },
      {
        "label": "Capacidad de tacho",
        "value": "800 ml"
      },
      {
        "label": "Accesorios incluidos",
        "value": "3 boquillas de cobre, vaso medidor, aguja limpiadora"
      }
    ],
    "sort_group": 76,
    "active": true
  },
  {
    "slug": "ingco-spg5008-4",
    "name": "Pistola Para Pintar HVLP 0.85L/MIN 550W + Accesorios Industrial",
    "description": "Pistola pulverizadora eléctrica HVLP de 550W, con boquilla de 3 formas de pintado (horizontal, vertical y circular) para trabajos de pintura interior y exterior. Incluye correa para transporte, vaso medidor de viscosidad y aguja de limpieza.",
    "price": 87546,
    "category_slug": "maquinas-electricas",
    "brand": "Ingco",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/ingco/ingco-spg5008-4.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "SPG5008"
      },
      {
        "label": "Origen",
        "value": "Ingco (importado)"
      },
      {
        "label": "Potencia",
        "value": "550W"
      },
      {
        "label": "Presión de pulverizado",
        "value": "0.1-0.2 Bar"
      },
      {
        "label": "Caudal máximo",
        "value": "850 ml/min"
      },
      {
        "label": "Capacidad de tacho",
        "value": "800 ml"
      },
      {
        "label": "Peso",
        "value": "2 kg"
      },
      {
        "label": "Accesorios incluidos",
        "value": "Vaso medidor, aguja de limpieza, correa"
      }
    ],
    "sort_group": 77,
    "active": true
  },
  {
    "slug": "ingco-htcs151081",
    "name": "Set De Herramientas Manuales 108 Piezas En Caja Metálica",
    "description": "Set completo de 108 herramientas manuales en caja metálica portátil (tipo cantilever), ideal para reparaciones del hogar y trabajos profesionales de mantenimiento. Incluye llaves de vaso, llaves combinadas, destornilladores, alicates, llaves Allen y más, en acero al cromo-vanadio.",
    "price": 459917,
    "category_slug": "herramientas-manuales",
    "brand": "Ingco",
    "unit": "unidad",
    "stock": 0,
    "stock_status": "en_argentina",
    "featured": false,
    "bulky": false,
    "image_url": "/products/ingco/ingco-htcs151081.jpg",
    "specs": [
      {
        "label": "Código de fábrica",
        "value": "HTCS151081"
      },
      {
        "label": "Origen",
        "value": "Ingco (importado)"
      },
      {
        "label": "Piezas",
        "value": "108"
      },
      {
        "label": "Llave de carraca 1/4\"",
        "value": "con 13 dados (4-14mm)"
      },
      {
        "label": "Llave de carraca 1/2\"",
        "value": "con 18 dados (10-32mm)"
      },
      {
        "label": "Llaves combinadas",
        "value": "12 pzs (8-22mm)"
      },
      {
        "label": "Llaves hexagonales",
        "value": "9 pzs (1.5-10mm)"
      },
      {
        "label": "Material",
        "value": "Acero al cromo-vanadio"
      },
      {
        "label": "Estuche",
        "value": "Caja metálica portátil tipo cantilever"
      }
    ],
    "sort_group": 78,
    "active": true
  }
];
