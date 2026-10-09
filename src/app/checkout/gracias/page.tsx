import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, MessageCircle } from "lucide-react";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = { title: "¡Pedido recibido!" };

export default async function GraciasPage({
  searchParams,
}: {
  searchParams: Promise<{
    pedido?: string;
    metodo?: string;
    estado?: string;
    mail?: string;
  }>;
}) {
  const { pedido, metodo, estado, mail } = await searchParams;

  const porWhatsApp = metodo === "whatsapp";
  const esNota = metodo === "nota";
  const pendiente = estado === "pendiente";

  if (esNota) {
    return (
      <div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-24 text-center sm:px-6">
        <div className="flex size-16 items-center justify-center rounded-full bg-lime-100">
          <CheckCircle2 className="size-8 text-lime-600" />
        </div>
        <h1 className="mt-6 font-display text-3xl font-bold tracking-tight">
          ¡Pedido enviado!
        </h1>
        {pedido && (
          <p className="mt-3 text-sm text-concrete-600">
            Nota de pedido: <strong className="font-display">{pedido}</strong>
          </p>
        )}
        <p className="mt-4 max-w-md text-sm leading-6 text-concrete-700">
          {mail === "pendiente"
            ? "Tu pedido quedó registrado en el sistema. Te contactamos para confirmar la disponibilidad y coordinar la entrega."
            : "Ya le llegó la nota de pedido al equipo de Tresbe con tus productos y cantidades. La preparamos y te contactamos para coordinar la entrega y el pago."}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/productos"
            className="flex h-11 items-center rounded-full bg-steel-600 px-6 text-sm font-semibold text-white hover:bg-steel-700"
          >
            Seguir comprando
          </Link>
          <Link
            href="/cliente"
            className="flex h-11 items-center rounded-full border border-concrete-300 px-6 text-sm font-semibold text-concrete-800 hover:border-steel-400"
          >
            Mi cuenta
          </Link>
          <a
            href={whatsappLink(
              `¡Hola ${site.name}! Consulto por mi nota de pedido${pedido ? ` ${pedido}` : ""}.`
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 items-center gap-2 rounded-full border border-concrete-300 px-6 text-sm font-semibold text-concrete-800 hover:border-steel-400"
          >
            <MessageCircle className="size-4" /> Consultar
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-24 text-center sm:px-6">
      <div className="flex size-16 items-center justify-center rounded-full bg-lime-100">
        <CheckCircle2 className="size-8 text-lime-600" />
      </div>
      <h1 className="mt-6 font-display text-3xl font-bold tracking-tight">
        {porWhatsApp ? "¡Pedido enviado!" : pendiente ? "Pago en proceso" : "¡Gracias por tu compra!"}
      </h1>
      {pedido && (
        <p className="mt-3 text-sm text-concrete-600">
          Número de pedido: <strong className="font-display">#{pedido}</strong>
        </p>
      )}
      <p className="mt-4 max-w-md text-sm leading-6 text-concrete-700">
        {porWhatsApp
          ? "Recibimos tu pedido y te respondemos por WhatsApp a la brevedad para coordinar la entrega y el pago."
          : pendiente
          ? "Tu pago está siendo procesado. Apenas se acredite te contactamos para coordinar la entrega."
          : "Recibimos tu pago y ya estamos preparando el pedido. Te contactamos para coordinar la entrega o el retiro."}
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/productos"
          className="flex h-11 items-center rounded-full bg-steel-600 px-6 text-sm font-semibold text-white hover:bg-steel-700"
        >
          Seguir comprando
        </Link>
        <a
          href={whatsappLink(
            `¡Hola ${site.name}! Quiero consultar por mi pedido${pedido ? ` #${pedido}` : ""}.`
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-11 items-center gap-2 rounded-full border border-concrete-300 px-6 text-sm font-semibold text-concrete-800 hover:border-steel-400"
        >
          <MessageCircle className="size-4" /> Consultar estado
        </a>
      </div>
    </div>
  );
}
