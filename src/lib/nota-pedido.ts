import "server-only";

import { formatARS, site } from "./site";
import type { Customer, OrderItem } from "./types";

export interface NotaPedidoData {
  numero: string;
  fecha: Date;
  customer: Customer;
  contacto: {
    persona: string;
    telefono: string;
    email: string;
  };
  entrega: {
    metodo: "retiro" | "envio";
    direccion: string | null;
    codigoPostal?: string | null;
    fechaNecesaria: string | null;
  };
  referencia: string | null;
  observaciones: string | null;
  items: OrderItem[];
  subtotal: number;
  descuentoPct: number;
  total: number;
}

const fmtFecha = (date: Date) =>
  new Intl.DateTimeFormat("es-AR", {
    dateStyle: "long",
    timeStyle: "short",
    timeZone: "America/Argentina/Buenos_Aires",
  }).format(date);

const escape = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

export function notaSubject(data: NotaPedidoData) {
  return `Nota de pedido ${data.numero} — ${data.customer.name}`;
}

export function notaPedidoHtml(data: NotaPedidoData): string {
  const filas = data.items
    .map(
      (item, i) => `
      <tr style="background:${i % 2 ? "#f7f7f6" : "#ffffff"}">
        <td style="padding:8px 10px;font-family:monospace;font-size:12px;color:#535551">${escape(item.code ?? "")}</td>
        <td style="padding:8px 10px;font-size:13px">${escape(item.name)}</td>
        <td style="padding:8px 10px;font-size:13px;color:#535551">${escape([item.variant, item.size, item.color, item.packaging].filter(Boolean).join(" · ") || item.unit || "")}</td>
        <td style="padding:8px 10px;font-size:14px;font-weight:700;text-align:center">${item.quantity}</td>
        <td style="padding:8px 10px;font-size:13px;text-align:right">${item.unit_price > 0 ? formatARS(item.unit_price) : "a confirmar"}</td>
        <td style="padding:8px 10px;font-size:13px;text-align:right;font-weight:600">${item.unit_price > 0 ? formatARS(item.unit_price * item.quantity) : "—"}</td>
      </tr>`
    )
    .join("");

  const dato = (label: string, value: string) => `
    <tr>
      <td style="padding:3px 0;font-size:13px;color:#686c73;width:150px">${label}</td>
      <td style="padding:3px 0;font-size:13px;color:#232422"><strong>${escape(value)}</strong></td>
    </tr>`;

  return `<!doctype html>
<html lang="es"><head><meta charset="utf-8"><title>${escape(notaSubject(data))}</title></head>
<body style="margin:0;padding:24px;background:#eeeeef;font-family:Arial,Helvetica,sans-serif;color:#232422">
  <div style="max-width:760px;margin:0 auto;background:#ffffff;border:1px solid #d9dad7;border-radius:12px;overflow:hidden">

    <div style="background:#203440;padding:20px 24px">
      <p style="margin:0;color:#a4bb43;font-size:11px;letter-spacing:2px;text-transform:uppercase">Nota de pedido · Distribuidora</p>
      <h1 style="margin:6px 0 0;color:#ffffff;font-size:24px">${escape(data.numero)}</h1>
      <p style="margin:6px 0 0;color:#c2d6e1;font-size:13px">${fmtFecha(data.fecha)}</p>
    </div>

    <div style="padding:20px 24px">
      <h2 style="margin:0 0 8px;font-size:15px;color:#3f687e">Cliente</h2>
      <table style="width:100%;border-collapse:collapse">
        ${dato("Cuenta", data.customer.name)}
        ${dato("Contacto", data.contacto.persona)}
        ${dato("Teléfono", data.contacto.telefono)}
        ${dato("Email", data.contacto.email)}
        ${data.customer.discount_pct > 0 ? dato("Descuento de cuenta", `${data.customer.discount_pct}%`) : ""}
        ${data.referencia ? dato("Obra / referencia", data.referencia) : ""}
      </table>

      <h2 style="margin:18px 0 8px;font-size:15px;color:#3f687e">Entrega</h2>
      <table style="width:100%;border-collapse:collapse">
        ${dato("Modalidad", data.entrega.metodo === "retiro" ? "Retira en el local (Chacabuco 6311)" : "Envío a domicilio")}
        ${data.entrega.direccion ? dato("Dirección", data.entrega.direccion) : ""}
        ${data.entrega.codigoPostal ? dato("Código postal", data.entrega.codigoPostal) : ""}
        ${data.entrega.fechaNecesaria ? dato("Fecha necesaria", data.entrega.fechaNecesaria) : ""}
      </table>

      <h2 style="margin:18px 0 8px;font-size:15px;color:#3f687e">Productos (${data.items.length})</h2>
      <table style="width:100%;border-collapse:collapse;border:1px solid #d9dad7">
        <thead>
          <tr style="background:#eeeeef">
            <th style="padding:8px 10px;font-size:11px;text-align:left;text-transform:uppercase;letter-spacing:1px;color:#535551">Código</th>
            <th style="padding:8px 10px;font-size:11px;text-align:left;text-transform:uppercase;letter-spacing:1px;color:#535551">Producto</th>
            <th style="padding:8px 10px;font-size:11px;text-align:left;text-transform:uppercase;letter-spacing:1px;color:#535551">Medida / presentación</th>
            <th style="padding:8px 10px;font-size:11px;text-align:center;text-transform:uppercase;letter-spacing:1px;color:#535551">Cant.</th>
            <th style="padding:8px 10px;font-size:11px;text-align:right;text-transform:uppercase;letter-spacing:1px;color:#535551">Unitario</th>
            <th style="padding:8px 10px;font-size:11px;text-align:right;text-transform:uppercase;letter-spacing:1px;color:#535551">Subtotal</th>
          </tr>
        </thead>
        <tbody>${filas}</tbody>
      </table>

      <table style="width:100%;border-collapse:collapse;margin-top:12px">
        <tr>
          <td style="text-align:right;padding:3px 10px;font-size:13px;color:#686c73">Subtotal</td>
          <td style="text-align:right;padding:3px 10px;font-size:13px;width:140px">${formatARS(data.subtotal)}</td>
        </tr>
        ${
          data.descuentoPct > 0
            ? `<tr>
          <td style="text-align:right;padding:3px 10px;font-size:13px;color:#67772a">Descuento cliente (${data.descuentoPct}%)</td>
          <td style="text-align:right;padding:3px 10px;font-size:13px;color:#67772a">− ${formatARS(data.subtotal - data.total)}</td>
        </tr>`
            : ""
        }
        <tr>
          <td style="text-align:right;padding:8px 10px;font-size:15px;font-weight:700;border-top:2px solid #203440">Total estimado</td>
          <td style="text-align:right;padding:8px 10px;font-size:18px;font-weight:700;color:#3f687e;border-top:2px solid #203440">${formatARS(data.total)}</td>
        </tr>
      </table>
      <p style="margin:6px 10px 0;font-size:11px;color:#9a9d96;text-align:right">
        Precios de referencia del sistema. Los productos sin precio cargado se cotizan al confirmar.
      </p>

      ${
        data.observaciones
          ? `<h2 style="margin:18px 0 6px;font-size:15px;color:#3f687e">Observaciones</h2>
             <p style="margin:0;padding:12px;background:#f7f9ec;border-left:3px solid #a4bb43;font-size:13px;white-space:pre-line">${escape(data.observaciones)}</p>`
          : ""
      }

      ${
        data.customer.notes
          ? `<h2 style="margin:18px 0 6px;font-size:15px;color:#3f687e">Notas de la cuenta</h2>
             <p style="margin:0;font-size:12px;color:#686c73;white-space:pre-line">${escape(data.customer.notes)}</p>`
          : ""
      }
    </div>

    <div style="background:#f7f7f6;padding:14px 24px;border-top:1px solid #d9dad7">
      <p style="margin:0;font-size:11px;color:#686c73">
        Generada automáticamente desde la tienda online de ${escape(site.name)} · ${escape(site.address)}
      </p>
    </div>
  </div>
</body></html>`;
}

export function notaPedidoTexto(data: NotaPedidoData): string {
  const lineas = [
    `NOTA DE PEDIDO ${data.numero} — DISTRIBUIDORA`,
    fmtFecha(data.fecha),
    "",
    `Cuenta: ${data.customer.name}`,
    `Contacto: ${data.contacto.persona} · ${data.contacto.telefono} · ${data.contacto.email}`,
  ];
  if (data.customer.discount_pct > 0) {
    lineas.push(`Descuento de cuenta: ${data.customer.discount_pct}%`);
  }
  if (data.referencia) lineas.push(`Obra / referencia: ${data.referencia}`);
  lineas.push(
    "",
    `Entrega: ${data.entrega.metodo === "retiro" ? "Retira en el local (Chacabuco 6311)" : "Envío a domicilio"}`
  );
  if (data.entrega.direccion) lineas.push(`Dirección: ${data.entrega.direccion}`);
  if (data.entrega.codigoPostal) {
    lineas.push(`Código postal: ${data.entrega.codigoPostal}`);
  }
  if (data.entrega.fechaNecesaria) {
    lineas.push(`Fecha necesaria: ${data.entrega.fechaNecesaria}`);
  }
  lineas.push("", `PRODUCTOS (${data.items.length})`);
  for (const item of data.items) {
    const precio =
      item.unit_price > 0
        ? `${formatARS(item.unit_price)} c/u = ${formatARS(item.unit_price * item.quantity)}`
        : "precio a confirmar";
    const opciones = [item.variant, item.size, item.color, item.packaging].filter(Boolean).join(" · ");
    lineas.push(
      `• ${item.quantity} × ${item.name}${opciones ? ` (${opciones})` : ""}${item.code ? ` [${item.code}]` : ""} — ${precio}`
    );
  }
  lineas.push("", `Subtotal: ${formatARS(data.subtotal)}`);
  if (data.descuentoPct > 0) {
    lineas.push(
      `Descuento cliente (${data.descuentoPct}%): -${formatARS(data.subtotal - data.total)}`
    );
  }
  lineas.push(`TOTAL ESTIMADO: ${formatARS(data.total)}`);
  if (data.observaciones) lineas.push("", `Observaciones: ${data.observaciones}`);
  return lineas.join("\n");
}
