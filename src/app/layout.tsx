import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Encabezado } from "@/components/Encabezado";
import { PieDePagina } from "@/components/PieDePagina";
import { esProduccion, sitio, urlSitio } from "@/config/sitio";
import "./globals.css";

// Archivo variable (peso 400–800, ancho 80–100 %): una sola familia firme para titulares, cuerpo y controles.
// Subconjunto español generado con `npm run fuentes` (ver scripts/subconjunto-fuentes.mjs).
const archivo = localFont({
  src: "../fonts/archivo-subset.woff2",
  weight: "400 800",
  style: "normal",
  display: "swap",
  variable: "--font-archivo",
  declarations: [{ prop: "font-stretch", value: "80% 100%" }],
  fallback: ["system-ui", "Segoe UI", "Arial", "sans-serif"],
  adjustFontFallback: "Arial",
});

// Source Serif 4: acento editorial únicamente en el relato de la reubicación (debajo del primer pantallazo).
const serif = localFont({
  src: "../fonts/source-serif-4-subset.woff2",
  weight: "400",
  style: "normal",
  display: "swap",
  variable: "--font-serif-4",
  preload: false,
  fallback: ["Times New Roman", "serif"],
  adjustFontFallback: "Times New Roman",
});

export const metadata: Metadata = {
  metadataBase: new URL(urlSitio),
  title: sitio.titulo,
  description: sitio.descripcion,
  applicationName: sitio.nombre,
  // Canonical y permiso de indexación solo en producción; la demo se identifica como preview.
  alternates: esProduccion ? { canonical: "/" } : undefined,
  robots: esProduccion
    ? { index: true, follow: true }
    : { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } },
  openGraph: {
    type: "website",
    locale: "es_UY",
    siteName: sitio.nombre,
    title: sitio.titulo,
    description: sitio.descripcion,
    url: "/",
    images: [{ url: sitio.imagenSocial, width: 1200, height: 630, alt: sitio.imagenSocialAlt }],
  },
  twitter: {
    card: "summary_large_image",
    title: sitio.titulo,
    description: sitio.descripcion,
    images: [sitio.imagenSocial],
  },
};

// Sin maximumScale ni userScalable: el zoom del navegador queda habilitado.
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F4F0E7",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-UY" className={`${archivo.variable} ${serif.variable}`}>
      <body>
        <a href="#contenido" className="saltar">
          Saltar al contenido
        </a>
        <Encabezado />
        <main id="contenido" tabIndex={-1}>
          {children}
        </main>
        <PieDePagina />
      </body>
    </html>
  );
}
