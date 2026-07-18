import Image from "next/image";
import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { site, whatsappLink } from "@/lib/site";
import { FacebookIcon, InstagramIcon } from "./SocialIcons";

export function Footer() {
  return (
    <footer className="border-t border-steel-800 bg-steel-950 text-concrete-200">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <Image
            src="/brand/tbdist-logo.png"
            alt="Tresbe Distribuidora"
            width={150}
            height={64}
            className="h-12 w-auto brightness-0 invert"
          />
          <p className="mt-4 max-w-xs text-sm leading-6 text-concrete-300">
            {site.tagline}. Desde {site.foundedYear} acompañando cada obra en
            Mar del Plata y la zona.
          </p>
          <div className="mt-4 flex gap-3">
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex size-9 items-center justify-center rounded-full bg-steel-800 transition-colors hover:bg-lime-600"
            >
              <InstagramIcon className="size-4" />
            </a>
            <a
              href={site.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex size-9 items-center justify-center rounded-full bg-steel-800 transition-colors hover:bg-lime-600"
            >
              <FacebookIcon className="size-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="tech-label text-lime-400">Navegación</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/productos" className="hover:text-white">Productos</Link></li>
            <li><Link href="/sistemas/steel-frame" className="hover:text-white">Sistema Steel Frame</Link></li>
            <li><Link href="/sistemas/wood-frame" className="hover:text-white">Sistema Wood Frame</Link></li>
            <li><Link href="/nosotros" className="hover:text-white">Nosotros</Link></li>
            <li><Link href="/contacto" className="hover:text-white">Contacto</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="tech-label text-lime-400">Contacto</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0 text-steel-400" />
              {site.address}
            </li>
            <li className="flex items-start gap-2.5">
              <Phone className="mt-0.5 size-4 shrink-0 text-steel-400" />
              <a href={whatsappLink("¡Hola Tresbe!")} className="hover:text-white">
                {site.whatsappDisplay}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail className="mt-0.5 size-4 shrink-0 text-steel-400" />
              <a href={`mailto:${site.email}`} className="break-all hover:text-white">
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Clock className="mt-0.5 size-4 shrink-0 text-steel-400" />
              {site.hours}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-steel-800/60">
        <p className="mx-auto max-w-7xl px-4 py-4 text-xs text-concrete-400 sm:px-6">
          © {new Date().getFullYear()} {site.name} · Mar del Plata, Argentina
        </p>
      </div>
    </footer>
  );
}
