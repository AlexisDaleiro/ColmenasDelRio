import type { MetadataRoute } from "next";
import { esProduccion, urlSitio } from "@/config/sitio";

// En preview se permite el rastreo a propósito: así los buscadores pueden leer el noindex.
// El bloqueo se logra con la meta robots y el encabezado X-Robots-Tag, no con Disallow.
export default function robots(): MetadataRoute.Robots {
  return esProduccion
    ? { rules: { userAgent: "*", allow: "/" }, sitemap: `${urlSitio}/sitemap.xml` }
    : { rules: { userAgent: "*", allow: "/" } };
}
