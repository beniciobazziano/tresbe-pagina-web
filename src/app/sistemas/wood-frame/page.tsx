import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Hammer,
  Home,
  Leaf,
  ThermometerSun,
  TreePine,
} from "lucide-react";
import { whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sistema Wood Frame",
  description:
    "Qué es el wood frame o entramado de madera, cómo se compone, ventajas, mitos y qué materiales necesitás. Guía completa de Tresbe Distribuidora.",
};

const capas = [
  {
    n: "01",
    nombre: "Entramado de madera estructural",
    detalle:
      "Montantes, soleras y vigas de madera aserrada seca e impregnada (generalmente pino con tratamiento CCA), separados cada 40 o 60 cm. En Argentina el sistema está aprobado como construcción tradicional por la Subsecretaría de Vivienda.",
    productos: "Fijaciones estructurales, tornillos, herrajes",
  },
  {
    n: "02",
    nombre: "Rigidización con placas",
    detalle:
      "Placas de OSB clavadas o atornilladas al entramado que forman un diafragma rígido: son las que le dan al panel su resistencia al viento.",
    productos: "Placa OSB 11,1 mm, tornillos y clavos espiralados",
  },
  {
    n: "03",
    nombre: "Barrera de agua y viento",
    detalle:
      "Membrana hidrófuga respirable sobre el OSB, con solapes sellados. Protege la madera del agua exterior sin encerrar la humedad interna.",
    productos: "Barrera de agua y viento en rollo",
  },
  {
    n: "04",
    nombre: "Aislación térmica y acústica",
    detalle:
      "Lana de vidrio entre montantes. Combinada con la baja conductividad propia de la madera, logra muros con excelente desempeño térmico.",
    productos: "Lana de vidrio 50/70/100 mm",
  },
  {
    n: "05",
    nombre: "Terminación exterior",
    detalle:
      "Siding de madera, PVC o fibrocemento, placa cementicia revestida, o combinaciones. La estética de cabaña o la moderna: las dos salen del mismo sistema.",
    productos: "Placa cementicia, siding, tornillos autoperforantes",
  },
  {
    n: "06",
    nombre: "Terminación interior",
    detalle:
      "Placa de yeso sobre el entramado, con juntas tomadas. También se usan machimbres para climas de montaña o estética rústica.",
    productos: "Placa de yeso 12,5 mm, masilla, cinta de papel",
  },
];

const ventajas = [
  {
    icon: Leaf,
    titulo: "El sistema más sustentable",
    texto:
      "La madera es el único material estructural renovable y captura carbono durante toda la vida del edificio.",
  },
  {
    icon: ThermometerSun,
    titulo: "Confort térmico natural",
    texto:
      "La madera aísla 15 veces más que el hormigón: menos puentes térmicos y ambientes más estables.",
  },
  {
    icon: Clock3,
    titulo: "Obra rápida y seca",
    texto:
      "Paneles que se arman en taller o en obra con herramientas simples. Plazos comparables al steel frame.",
  },
  {
    icon: Hammer,
    titulo: "Fácil de trabajar y modificar",
    texto:
      "Ampliaciones, aberturas nuevas o instalaciones: todo se resuelve con herramientas de carpintería.",
  },
  {
    icon: Home,
    titulo: "Calidez y estética",
    texto:
      "Desde cabañas de montaña hasta casas nórdicas minimalistas: la madera admite todos los lenguajes.",
  },
  {
    icon: TreePine,
    titulo: "Tradición probada",
    texto:
      "Más del 90% de las viviendas de EE.UU., Canadá y los países nórdicos se construyen con entramado de madera.",
  },
];

export default function WoodFramePage() {
  return (
    <>
      <section className="blueprint-grid bg-lime-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
          <p className="tech-label text-lime-400">Sistemas constructivos</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Wood Frame: el entramado de madera, probado por siglos
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-lime-50/90">
            El wood frame (entramado ligero de madera) estructura la vivienda
            con piezas de madera seca e impregnada, cerradas con placas y capas
            especializadas. Es el sistema constructivo más usado del mundo para
            vivienda, y en Argentina crece de la mano de la madera de
            plantación certificada.
          </p>
        </div>
      </section>

      {/* Así se construye, paso a paso */}
      <section className="mx-auto max-w-7xl px-4 pt-16 sm:px-6">
        <p className="tech-label text-steel-500">Referencia de obra</p>
        <h2 className="mt-2 font-display text-3xl font-bold tracking-tight">
          Así se construye, paso a paso
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-concrete-600">
          Las seis etapas de una obra en wood frame, con fotos reales de obra
          y los materiales que se usan en cada una.
        </p>
        <div className="mt-10 space-y-6">
          {[
            {
              n: "PASO 01",
              titulo: "Fundación",
              texto:
                "Platea de hormigón armado o pilotes con plataforma de madera: la malla de acero se apoya sobre separadores y se hormigona de una vez. Sobre la fundación se fija la solera inferior tratada, siempre con una banda de separación que corta la humedad por capilaridad.",
              materiales: "Anclajes, banda de asiento, tirafondos",
              img: "/images/sistemas/pasos/armadura.jpg",
              alt: "Malla de acero lista sobre el contrapiso antes del hormigonado de la platea",
            },
            {
              n: "PASO 02",
              titulo: "Entramado de muros",
              texto:
                "Los paneles se arman acostados en la plataforma: montantes cada 40 o 60 cm, dinteles sobre las aberturas, doble solera superior. Después se levantan a mano entre dos o tres personas, se aploman y se clavan o atornillan entre sí.",
              materiales: "Tornillos TEL FIX / CHIPBOARD, herrajes, nivel",
              img: "/images/sistemas/wood-frame-2.jpg",
              alt: "Interior de un muro de wood frame con montantes y dinteles de madera a la vista",
            },
            {
              n: "PASO 03",
              titulo: "Techo con cabriadas",
              texto:
                "Las cabriadas prefabricadas se izan y se fijan a la doble solera con herrajes especiales. En un día el techo está estructurado y la placa de rigidización de los muros ya arriostra todo el conjunto.",
              materiales: "Placa OSB, herrajes de cabriada, TEL HELIX / FIX TX",
              img: "/images/sistemas/wood-frame-1.jpg",
              alt: "Vivienda en wood frame con cabriadas de techo montadas y placas de rigidización",
            },
            {
              n: "PASO 04",
              titulo: "Envolvente: barrera de agua y viento",
              texto:
                "Con la estructura cerrada en OSB, la casa se envuelve completa con la membrana hidrófuga respirable, solapada de abajo hacia arriba y sellada en aberturas. Desde este momento la obra interior avanza aunque llueva.",
              materiales: "Barrera de agua y viento, cinta de sellado",
              img: "/images/sistemas/pasos/barrera-casa.jpg",
              alt: "Casa de madera envuelta con barrera de agua y viento antes del revestimiento exterior",
            },
            {
              n: "PASO 05",
              titulo: "Aislación térmica y acústica",
              texto:
                "La lana de vidrio se coloca entre montantes, sin comprimir y sin dejar huecos, cubriendo también dinteles y encuentros. Junto con la baja conductividad de la madera, el muro terminado aísla varias veces más que uno macizo.",
              materiales: "Lana de vidrio 50/70/100 mm",
              img: "/images/sistemas/pasos/aislacion.jpg",
              alt: "Detalle de un paño de lana de vidrio para aislación térmica",
            },
            {
              n: "PASO 06",
              titulo: "Terminaciones",
              texto:
                "Siding o revoques por fuera, placa de yeso con juntas tomadas por dentro, y los detalles que hacen a la casa: aberturas, deck, pérgolas. La madera admite todos los lenguajes, de la cabaña clásica al minimalismo nórdico.",
              materiales: "Placa de yeso, masilla, cinta, TEL DECK para el deck",
              img: "/images/sistemas/wood-frame-3.jpg",
              alt: "Vivienda terminada construida con entramado de madera",
            },
          ].map((paso) => (
            <div
              key={paso.n}
              className="grid overflow-hidden rounded-2xl border border-concrete-200 bg-white md:grid-cols-[380px_1fr]"
            >
              <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[240px]">
                <Image
                  src={paso.img}
                  alt={paso.alt}
                  fill
                  sizes="(min-width: 768px) 380px, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center p-6 lg:p-8">
                <p className="tech-label text-lime-600">{paso.n}</p>
                <h3 className="mt-2 font-display text-xl font-bold">{paso.titulo}</h3>
                <p className="mt-2 text-sm leading-6 text-concrete-600">{paso.texto}</p>
                <p className="mt-4 rounded-lg bg-lime-50 px-4 py-2.5 text-xs leading-5 text-lime-900">
                  <span className="font-semibold">Materiales de esta etapa:</span>{" "}
                  {paso.materiales}
                </p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs text-concrete-400">
          Fotos: Famartin (CC BY-SA 4.0), Riisipuuro (CC BY-SA 3.0), Yann
          Forget (CC BY-SA 4.0), Khaosaming (CC BY-SA 3.0), AG20044018 (CC
          BY-SA 4.0) y Typisch (CC BY-SA 3.0), vía Wikimedia Commons.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <p className="tech-label text-steel-500">Cómo funciona</p>
        <h2 className="mt-2 font-display text-3xl font-bold tracking-tight">
          El muro, capa por capa
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-concrete-600">
          Igual que el steel frame, el wood frame es un sistema multicapa: la
          madera pone la estructura y cada capa suma estanqueidad, aislación y
          terminación.
        </p>
        <div className="mt-10 space-y-4">
          {capas.map((capa) => (
            <div
              key={capa.n}
              className="grid gap-4 rounded-xl border border-concrete-200 bg-white p-6 sm:grid-cols-[64px_1fr] lg:grid-cols-[64px_1fr_280px]"
            >
              <span className="font-display text-3xl font-bold text-lime-300">
                {capa.n}
              </span>
              <div>
                <h3 className="font-semibold">{capa.nombre}</h3>
                <p className="mt-1.5 text-sm leading-6 text-concrete-600">
                  {capa.detalle}
                </p>
              </div>
              <div className="rounded-lg bg-lime-50 p-4 lg:self-center">
                <p className="tech-label text-[10px] text-lime-700">
                  Lo que necesitás
                </p>
                <p className="mt-1.5 text-sm font-medium text-lime-900">
                  {capa.productos}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-concrete-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-3xl font-bold tracking-tight">
            Por qué elegir wood frame
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {ventajas.map((v) => (
              <div key={v.titulo} className="flex items-start gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-lime-100 text-lime-700">
                  <v.icon className="size-5" />
                </div>
                <div>
                  <h3 className="font-semibold">{v.titulo}</h3>
                  <p className="mt-1 text-sm leading-6 text-concrete-600">{v.texto}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-3xl font-bold tracking-tight">
          Mitos frecuentes
        </h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {[
            {
              mito: "“La madera se incendia enseguida”",
              realidad:
                "La madera estructural carboniza de afuera hacia adentro a velocidad conocida y mantiene su capacidad portante más tiempo que un perfil de acero sin protección. Con placas de yeso se alcanzan resistencias F30/F60.",
            },
            {
              mito: "“Se la comen las polillas y se pudre”",
              realidad:
                "La madera impregnada en autoclave (CCA/CA) es inmune a hongos e insectos, y la barrera de agua y viento mantiene el muro seco. Hay casas de wood frame de más de 200 años en pie.",
            },
            {
              mito: "“No sirve para el clima argentino”",
              realidad:
                "Funciona de Ushuaia a Misiones: lo que cambia son los espesores de aislación y las terminaciones. El sistema está aprobado a nivel nacional con el CAT correspondiente.",
            },
          ].map((item) => (
            <div key={item.mito} className="rounded-xl border border-concrete-200 bg-white p-6">
              <h3 className="font-semibold text-red-700/80 line-through decoration-red-300">
                {item.mito}
              </h3>
              <p className="mt-3 flex items-start gap-2 text-sm leading-6 text-concrete-700">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-lime-600" />
                {item.realidad}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-lime-900 p-8 text-white sm:flex-row sm:items-center lg:p-12">
          <div>
            <h2 className="font-display text-2xl font-bold lg:text-3xl">
              ¿Tu proyecto es en madera?
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-6 text-lime-100">
              Placas, aislaciones, fijaciones y herramientas para wood frame,
              con asesoramiento de gente que construye.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/productos?categoria=placas-y-paneles"
              className="flex h-12 items-center gap-2 rounded-full bg-lime-500 px-6 text-sm font-semibold text-steel-950 hover:bg-lime-400"
            >
              Ver materiales <ArrowRight className="size-4" />
            </Link>
            <a
              href={whatsappLink(
                "¡Hola Tresbe! Estoy proyectando una obra en wood frame y necesito asesoramiento."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 items-center rounded-full border border-lime-600 px-6 text-sm font-semibold text-white hover:bg-lime-800"
            >
              Asesorate gratis
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
