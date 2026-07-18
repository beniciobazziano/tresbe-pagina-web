import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Handshake, HeartHandshake, Target } from "lucide-react";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Tresbe Distribuidora: una empresa familiar de Mar del Plata dedicada a la ferretería industrial y los insumos para construcción en seco desde 2019.",
};

export default function NosotrosPage() {
  return (
    <>
      <section className="blueprint-grid bg-steel-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
          <p className="tech-label text-lime-400">Nuestra historia</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Una empresa familiar, con espíritu de mostrador
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-steel-100">
            Tresbe Distribuidora fue fundada en {site.foundedYear} por Esteban
            Bazziano y su familia en Mar del Plata. Desde entonces crecimos
            hasta convertirnos en referentes locales en insumos para
            construcción en seco, ferretería industrial y herramientas.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-concrete-200 bg-white p-7">
            <div className="flex size-11 items-center justify-center rounded-xl bg-steel-50 text-steel-600">
              <Target className="size-5" />
            </div>
            <h2 className="mt-4 font-display text-xl font-bold">Qué hacemos</h2>
            <p className="mt-2 text-sm leading-6 text-concrete-600">
              Ofrecemos soluciones integrales en ferretería y construcción en
              seco: desde la caja de tornillos hasta el paquete completo de
              materiales para una vivienda en steel o wood frame, con marcas
              reconocidas como las mejores a nivel mundial.
            </p>
          </div>
          <div className="rounded-xl border border-concrete-200 bg-white p-7">
            <div className="flex size-11 items-center justify-center rounded-xl bg-steel-50 text-steel-600">
              <Handshake className="size-5" />
            </div>
            <h2 className="mt-4 font-display text-xl font-bold">Nuestros socios</h2>
            <p className="mt-2 text-sm leading-6 text-concrete-600">
              Mantenemos una relación comercial de 25 años con TEL, líder en
              tornillos autoperforantes, y trabajamos con DeWalt, Milwaukee,
              Stanley, Bremen, Total, Ingco, Metabo, Fischer y otras primeras
              marcas del rubro.
            </p>
          </div>
          <div className="rounded-xl border border-concrete-200 bg-white p-7">
            <div className="flex size-11 items-center justify-center rounded-xl bg-steel-50 text-steel-600">
              <HeartHandshake className="size-5" />
            </div>
            <h2 className="mt-4 font-display text-xl font-bold">Cómo lo hacemos</h2>
            <p className="mt-2 text-sm leading-6 text-concrete-600">
              Valoramos profundamente el factor humano: el compromiso de
              nuestro equipo nos permite dar un servicio que va más allá de la
              simple venta, acompañando a profesionales y particulares en cada
              etapa de sus proyectos.
            </p>
          </div>
        </div>

        <div className="mt-12 rounded-2xl bg-concrete-100 p-8 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl font-bold">Visítanos</h2>
              <p className="mt-3 text-sm leading-7 text-concrete-700">
                Nuestro local está en la <strong>{site.address}</strong>, con
                acceso conveniente desde diferentes partes de la ciudad.
                <br />
                {site.hours}.
              </p>
              <Link
                href="/contacto"
                className="mt-6 inline-flex h-11 items-center gap-2 rounded-full bg-steel-600 px-6 text-sm font-semibold text-white hover:bg-steel-700"
              >
                Cómo llegar <ArrowRight className="size-4" />
              </Link>
            </div>
            <div className="flex items-center">
              <blockquote className="border-l-4 border-lime-500 pl-6">
                <p className="font-display text-xl font-medium leading-8 text-concrete-800">
                  &ldquo;Nuestro objetivo es que tanto profesionales como el
                  público general puedan llevar a cabo sus proyectos con
                  productos de calidad y un asesoramiento experto.&rdquo;
                </p>
                <footer className="mt-3 text-sm text-concrete-500">
                  Familia Bazziano — Tresbe Distribuidora
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
