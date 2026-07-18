import type { Metadata } from "next";
import { Clock, Mail, MapPin, MessageCircle } from "lucide-react";
import { site, whatsappLink } from "@/lib/site";
import { FacebookIcon, InstagramIcon } from "@/components/SocialIcons";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Dónde estamos, horarios y todas las vías de contacto de Tresbe Distribuidora en Mar del Plata.",
};

export default function ContactoPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <p className="tech-label text-steel-500">Contacto</p>
      <h1 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
        Estamos para ayudarte
      </h1>
      <p className="mt-3 max-w-2xl text-sm leading-6 text-concrete-600">
        Consultas, presupuestos, disponibilidad de stock o asesoramiento
        técnico: elegí el canal que más te convenga.
      </p>

      <div className="mt-10 grid gap-6 lg:grid-cols-[400px_1fr]">
        <div className="space-y-4">
          <a
            href={whatsappLink("¡Hola Tresbe! Quiero hacer una consulta.")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-xl border border-concrete-200 bg-white p-5 transition-colors hover:border-lime-500"
          >
            <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-lime-100 text-lime-700">
              <MessageCircle className="size-5" />
            </div>
            <div>
              <h2 className="font-semibold">WhatsApp</h2>
              <p className="text-sm text-concrete-600">{site.whatsappDisplay}</p>
            </div>
          </a>
          <a
            href={`mailto:${site.email}`}
            className="flex items-center gap-4 rounded-xl border border-concrete-200 bg-white p-5 transition-colors hover:border-steel-400"
          >
            <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-steel-50 text-steel-600">
              <Mail className="size-5" />
            </div>
            <div>
              <h2 className="font-semibold">Email</h2>
              <p className="break-all text-sm text-concrete-600">{site.email}</p>
            </div>
          </a>
          <div className="flex items-center gap-4 rounded-xl border border-concrete-200 bg-white p-5">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-steel-50 text-steel-600">
              <MapPin className="size-5" />
            </div>
            <div>
              <h2 className="font-semibold">El local</h2>
              <p className="text-sm text-concrete-600">{site.address}</p>
            </div>
          </div>
          <div className="flex items-center gap-4 rounded-xl border border-concrete-200 bg-white p-5">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-steel-50 text-steel-600">
              <Clock className="size-5" />
            </div>
            <div>
              <h2 className="font-semibold">Horarios</h2>
              <p className="text-sm text-concrete-600">{site.hours}</p>
            </div>
          </div>
          <div className="flex gap-3">
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 flex-1 items-center justify-center gap-2 rounded-xl border border-concrete-200 bg-white text-sm font-medium text-concrete-700 transition-colors hover:border-steel-400"
            >
              <InstagramIcon className="size-4" /> @somos_tresbe
            </a>
            <a
              href={site.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 flex-1 items-center justify-center gap-2 rounded-xl border border-concrete-200 bg-white text-sm font-medium text-concrete-700 transition-colors hover:border-steel-400"
            >
              <FacebookIcon className="size-4" /> Facebook
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-concrete-200 bg-white">
          <iframe
            title="Mapa: Chacabuco 6311, Mar del Plata"
            src="https://www.google.com/maps?q=Chacabuco+6311,+Mar+del+Plata,+Argentina&output=embed"
            className="h-full min-h-[420px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}
