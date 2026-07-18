import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/components/cart/CartProvider";
import { CustomerProvider } from "@/components/customer/CustomerProvider";
import { Header } from "@/components/Header";
import { MobileTabBar } from "@/components/MobileTabBar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { site } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const grotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} — Insumos para construcción en seco`,
    template: `%s | ${site.name}`,
  },
  description: `${site.tagline}. Steel frame, wood frame, tornillos TEL, placas, perfiles y herramientas en Mar del Plata. Envíos y retiro en local.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR" className={`${inter.variable} ${grotesk.variable} h-full`}>
      <body className="flex min-h-full flex-col pb-[60px] font-sans lg:pb-0">
        <CustomerProvider>
          <CartProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <WhatsAppButton />
            <MobileTabBar />
          </CartProvider>
        </CustomerProvider>
      </body>
    </html>
  );
}
