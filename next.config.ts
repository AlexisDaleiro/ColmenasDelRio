import type { NextConfig } from "next";

// Preview es el modo por defecto: la demo se sirve con noindex.
// Para el lanzamiento: NEXT_PUBLIC_SITE_MODE=production (ver docs/pendientes-publicacion.md).
const esPreview = process.env.NEXT_PUBLIC_SITE_MODE !== "production";

const seguridad = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const config: NextConfig = {
  // NEXT_DIST_DIR permite compilar la variante de producción en paralelo para auditarla (docs/verificacion.md).
  distDir: process.env.NEXT_DIST_DIR ?? ".next",
  reactStrictMode: true,
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: esPreview
          ? [{ key: "X-Robots-Tag", value: "noindex, nofollow" }, ...seguridad]
          : seguridad,
      },
      {
        // Los archivos de /img llevan versión en el nombre (-v1): cambiar la versión al reemplazarlos.
        source: "/img/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
};

export default config;
