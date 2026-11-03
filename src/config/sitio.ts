// Preview es el modo por defecto: noindex efectivo y sin canonical.
// Para el lanzamiento: NEXT_PUBLIC_SITE_MODE=production (ver docs/pendientes-publicacion.md).
export const esProduccion = process.env.NEXT_PUBLIC_SITE_MODE === "production";

export const urlSitio = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");

export const sitio = {
  nombre: "Colmenas del Río",
  titulo: "Retiro de colmenas y avispas | Colmenas del Río",
  descripcion:
    "Retiro de colmenas de abejas y atención de nidos de avispas. Las colonias rústicas que se reubican van a apiarios trazabilizados del sur de Uruguay.",
  imagenSocial: "/og-colmenas-del-rio.jpg",
  imagenSocialAlt: "Colmenas del Río. Retiro de colmenas. Reubicación de abejas.",
} as const;
