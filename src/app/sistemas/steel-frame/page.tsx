import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Feather,
  Flame,
  Leaf,
  Ruler,
  ThermometerSun,
} from "lucide-react";
import { whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sistema Steel Frame",
  description:
    "Qué es el steel frame, cómo se compone capa por capa, ventajas, mitos y qué materiales necesitás. Guía completa de Tresbe Distribuidora.",
};

const capas = [
  {
    n: "01",
    nombre: "Estructura de perfiles galvanizados",
    detalle:
      "Montantes PGC y soleras PGU de acero galvanizado conformado en frío (0,9 a 1,6 mm), separados cada 40 o 60 cm. Es el esqueleto que toma todas las cargas de la vivienda.",
    productos: "Perfiles PGC/PGU, autoperforantes TEL punta mecha (T1)",
  },
  {
    n: "02",
    nombre: "Rigidización estructural",
    detalle:
      "Placas de OSB o cruces de San Andrés (flejes) que evitan la deformación del panel frente al viento y sismos. El OSB además sirve de sustrato para la aislación exterior.",
    productos: "Placa OSB 11,1 mm, flejes, autoperforantes",
  },
  {
    n: "03",
    nombre: "Barrera de agua y viento",
    detalle:
      "Membrana hidrófuga y respirable que envuelve la estructura por fuera: impide el ingreso de agua de lluvia pero deja salir el vapor interior, evitando condensaciones.",
    productos: "Barrera de agua y viento en rollo",
  },
  {
    n: "04",
    nombre: "Aislación térmica y acústica",
    detalle:
      "Lana de vidrio entre montantes y, en muros de mayor exigencia, EPS por el exterior (aislación continua). Es lo que hace que una casa de steel frame gaste hasta 60% menos en climatización.",
    productos: "Lana de vidrio 50/70/100 mm, placas EPS",
  },
  {
    n: "05",
    nombre: "Terminación exterior",
    detalle:
      "Placa cementicia con base coat y revestimiento plástico, siding de PVC o madera, o ladrillo visto. El sistema admite casi cualquier estética.",
    productos: "Placa cementicia 8/10 mm, básicos de EIFS",
  },
  {
    n: "06",
    nombre: "Terminación interior",
    detalle:
      "Placa de yeso atornillada a los montantes, juntas tomadas con cinta y masilla. En baños y cocinas se usa placa verde (resistente a la humedad).",
    productos: "Placa de yeso 12,5 mm, masilla, cinta, autoperforantes T2",
  },
];

const ventajas = [
  {
    icon: Clock3,
    titulo: "Hasta 50% menos de obra",
    texto:
      "Sin tiempos de fragüe ni escombros: una vivienda llave en mano puede resolverse en 4 a 6 meses.",
  },
  {
    icon: ThermometerSun,
    titulo: "Eficiencia energética real",
    texto:
      "La aislación multicapa reduce drásticamente el consumo de calefacción y aire acondicionado.",
  },
  {
    icon: Feather,
    titulo: "Estructura liviana",
    texto:
      "Pesa entre 8 y 10 veces menos que la construcción húmeda: fundaciones más simples y económicas.",
  },
  {
    icon: Ruler,
    titulo: "Precisión milimétrica",
    texto:
      "Perfiles industrializados y paredes perfectamente aplomadas. Nada de revoques para 'emparejar'.",
  },
  {
    icon: Flame,
    titulo: "Seguro ante el fuego",
    texto:
      "El acero no es combustible y las placas de yeso retardan la propagación. Existen configuraciones F30, F60 y F90.",
  },
  {
    icon: Leaf,
    titulo: "Obra seca y limpia",
    texto:
      "Hasta 80% menos de residuos y un uso mínimo de agua. El acero es 100% reciclable.",
  },
];

export default function SteelFramePage() {
  return (
    <>
      <section className="blueprint-grid bg-steel-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
          <p className="tech-label text-lime-400">Sistemas constructivos</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Steel Frame: construcción en seco con estructura de acero
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-steel-100">
            El steel frame (o steel framing) es un sistema constructivo
            industrializado: la estructura se arma con perfiles de acero
            galvanizado y se completa con capas especializadas que resuelven
            aislación, estanqueidad y terminaciones. Es el sistema de mayor
            crecimiento en Argentina, normado por el CIRSOC 303.
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
          Las seis etapas de una obra en steel frame, con fotos reales de obra
          y los materiales que se usan en cada una.
        </p>
        <div className="mt-10 space-y-6">
          {[
            {
              n: "PASO 01",
              titulo: "Platea de fundación",
              texto:
                "Todo empieza con una platea de hormigón armado: una losa nivelada con malla de acero donde ya quedan previstas las cañerías. Sobre ella se anclan las soleras con brocas y anclajes químicos o mecánicos. Una platea a nivel es la mitad del éxito del montaje.",
              materiales: "Anclajes, tornillos TEL WALL, nivel láser",
              img: "/images/sistemas/pasos/platea.jpg",
              alt: "Trabajadores nivelando el hormigón fresco de una platea de fundación",
            },
            {
              n: "PASO 02",
              titulo: "Montaje de paneles estructurales",
              texto:
                "Los paneles se arman con montantes PGC y soleras PGU unidos con autoperforantes punta mecha (T1), se aploman y se arriostran con flejes cruzados o placas de OSB. En pocos días la casa completa está en pie, con precisión milimétrica.",
              materiales: "Perfiles PGC/PGU, TEL DRY T1, tijera de corte, nivel",
              img: "/images/sistemas/steel-frame-1.jpg",
              alt: "Paneles de perfiles galvanizados de una vivienda en steel frame durante el montaje",
            },
            {
              n: "PASO 03",
              titulo: "Rigidización y barrera de agua y viento",
              texto:
                "Por fuera se atornilla el OSB estructural y se envuelve todo con la barrera de agua y viento, solapada y sellada. La casa queda estanca al agua pero puede 'respirar': el vapor interior sale y la lluvia no entra.",
              materiales: "Placa OSB 11,1 mm, barrera de agua y viento, TEL ALAS",
              img: "/images/sistemas/pasos/barrera.jpg",
              alt: "Edificio en construcción envuelto con barrera de agua y viento con las aberturas colocadas",
            },
            {
              n: "PASO 04",
              titulo: "Aislación térmica y acústica",
              texto:
                "Entre montante y montante se coloca lana de vidrio, cortada apenas más ancha que la separación para que quede a presión, sin huecos. Acá se define el confort de la casa: una aislación bien colocada ahorra hasta 60% de climatización.",
              materiales: "Lana de vidrio 50/70/100 mm, cuchillo de hoja larga",
              img: "/images/sistemas/pasos/aislacion.jpg",
              alt: "Detalle de un paño de lana de vidrio para aislación térmica",
            },
            {
              n: "PASO 05",
              titulo: "Placas interiores y tomado de juntas",
              texto:
                "Las placas de yeso se atornillan con autoperforantes punta aguja (T2) cada 25 cm. Después, el tomado de juntas: cinta de papel y tres manos de masilla con espátulas cada vez más anchas, hasta que la pared queda espejo.",
              materiales: "Placa de yeso, TEL DRY T2, cinta de papel, masilla, espátulas",
              img: "/images/sistemas/pasos/placas.jpg",
              alt: "Placas de yeso con cinta de papel y espátulas para el tomado de juntas",
            },
            {
              n: "PASO 06",
              titulo: "Terminaciones",
              texto:
                "Cubierta, aberturas, EIFS o siding por fuera; pintura y zócalos por dentro. El resultado es indistinguible de la construcción tradicional… hasta que llega la primera factura de gas y es la mitad.",
              materiales: "Placa cementicia, EPS, autoperforantes hexagonales TEL HEX",
              img: "/images/sistemas/steel-frame-2.jpg",
              alt: "Vivienda de dos plantas en steel frame con techo terminado y barrera colocada",
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
                <p className="mt-4 rounded-lg bg-steel-50 px-4 py-2.5 text-xs leading-5 text-steel-700">
                  <span className="font-semibold">Materiales de esta etapa:</span>{" "}
                  {paso.materiales}
                </p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs text-concrete-400">
          Fotos: Kgbo (CC BY-SA 4.0), Khaosaming (CC BY-SA 3.0), Scott Ehardt
          (dominio público), Typisch (CC BY-SA 3.0) y Timothyjosephwood (CC
          BY-SA 4.0), vía Wikimedia Commons.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <p className="tech-label text-steel-500">Cómo funciona</p>
        <h2 className="mt-2 font-display text-3xl font-bold tracking-tight">
          El muro, capa por capa
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-concrete-600">
          Un muro de steel frame no es &ldquo;una pared de durlock&rdquo;: es un
          sistema multicapa donde cada componente cumple una función precisa,
          de afuera hacia adentro.
        </p>
        <div className="mt-10 space-y-4">
          {capas.map((capa) => (
            <div
              key={capa.n}
              className="grid gap-4 rounded-xl border border-concrete-200 bg-white p-6 sm:grid-cols-[64px_1fr] lg:grid-cols-[64px_1fr_280px]"
            >
              <span className="font-display text-3xl font-bold text-steel-200">
                {capa.n}
              </span>
              <div>
                <h3 className="font-semibold">{capa.nombre}</h3>
                <p className="mt-1.5 text-sm leading-6 text-concrete-600">
                  {capa.detalle}
                </p>
              </div>
              <div className="rounded-lg bg-steel-50 p-4 lg:self-center">
                <p className="tech-label text-[10px] text-steel-500">
                  Lo que necesitás
                </p>
                <p className="mt-1.5 text-sm font-medium text-steel-800">
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
            Por qué elegir steel frame
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
              mito: "“Es una casa prefabricada de baja calidad”",
              realidad:
                "Nada que ver: es un sistema abierto que se construye a medida en obra, con cálculo estructural y normativa propia (CIRSOC 303). Bancos y aseguradoras lo tratan como construcción tradicional.",
            },
            {
              mito: "“Las paredes suenan huecas y son frágiles”",
              realidad:
                "Con la placa correcta y refuerzos se cuelga desde un televisor hasta muebles de cocina completos. La aislación interior mejora incluso el desempeño acústico de un muro macizo.",
            },
            {
              mito: "“El acero se oxida y la casa dura poco”",
              realidad:
                "Los perfiles llevan galvanizado Z275 y quedan protegidos dentro de un muro seco y ventilado. La vida útil proyectada supera los 100 años.",
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
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-steel-900 p-8 text-white sm:flex-row sm:items-center lg:p-12">
          <div>
            <h2 className="font-display text-2xl font-bold lg:text-3xl">
              ¿Arrancás una obra en steel frame?
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-6 text-steel-200">
              Tenemos todos los materiales del sistema y te ayudamos a calcular
              cantidades a partir de tu plano.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/productos?categoria=perfiles-steel-frame"
              className="flex h-12 items-center gap-2 rounded-full bg-lime-500 px-6 text-sm font-semibold text-steel-950 hover:bg-lime-400"
            >
              Ver materiales <ArrowRight className="size-4" />
            </Link>
            <a
              href={whatsappLink(
                "¡Hola Tresbe! Estoy por arrancar una obra en steel frame y necesito asesoramiento."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 items-center rounded-full border border-steel-500 px-6 text-sm font-semibold text-white hover:bg-steel-800"
            >
              Asesorate gratis
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
