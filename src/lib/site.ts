export const site = {
  name: "Tresbe Distribuidora",
  tagline: "Insumos para construcción en seco, ferretería industrial y herramientas",
  whatsapp: "5492233121896",
  whatsappDisplay: "+54 9 223 312-1896",
  email: "info.tresbedistribuidora@gmail.com",
  /** Casilla que recibe las notas de pedido de la distribuidora */
  ordersEmail: "tresbenotaspedido@gmail.com",
  address: "Chacabuco 6311, Mar del Plata, Buenos Aires",
  hours: "Lun a Jue 08:00–17:00 · Vie 08:00–16:00",
  instagram: "https://www.instagram.com/somos_tresbe",
  facebook: "https://www.facebook.com/tresbe.distribuidora",
  foundedYear: 2019,
};

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

/** Precio con el descuento % de la cuenta del cliente, redondeado a pesos */
export function discountedPrice(price: number, discountPct: number) {
  if (!discountPct || discountPct <= 0) return price;
  return Math.round(price * (1 - discountPct / 100));
}

export function formatARS(value: number) {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  }).format(value);
}

/** Precio para mostrar en catálogo: sin precio cargado (0) => "Consultar precio" */
export function formatPriceLabel(value: number) {
  return value > 0 ? formatARS(value) : "Consultar precio";
}
