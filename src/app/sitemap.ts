import type { MetadataRoute } from "next";
import { esProduccion, urlSitio } from "@/config/sitio";

// En preview no se publica sitemap: la demo no debe descubrirse ni indexarse.
export default function sitemap(): MetadataRoute.Sitemap {
  return esProduccion ? [{ url: `${urlSitio}/` }] : [];
}
