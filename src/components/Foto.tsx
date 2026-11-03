// Derivados generados por `npm run imagenes` (ver scripts/optimizar-imagenes.mjs). Versión en el nombre: -v1.
const ruta = (id: string, ancho: number, ext: "avif" | "webp") => `/img/${id}-${ancho}-v1.${ext}`;
const srcSet = (id: string, anchos: number[], ext: "avif" | "webp") =>
  anchos.map((a) => `${ruta(id, a, ext)} ${a}w`).join(", ");

const tamanos = "(min-width: 64rem) 36vw, calc(100vw - 2.5rem)";

/** Foto principal con dirección de arte: recorte vertical en escritorio, 5:4 en móvil. Es la imagen del LCP. */
export function FotoPrincipal({ alt }: { alt: string }) {
  return (
    <picture>
      <source media="(min-width: 64rem)" type="image/avif" srcSet={srcSet("hero-escritorio", [480, 684], "avif")} sizes={tamanos} />
      <source media="(min-width: 64rem)" type="image/webp" srcSet={srcSet("hero-escritorio", [480, 684], "webp")} sizes={tamanos} />
      <source type="image/avif" srcSet={srcSet("hero-movil", [450, 600, 900], "avif")} sizes={tamanos} />
      <img
        src={ruta("hero-movil", 900, "webp")}
        srcSet={srcSet("hero-movil", [450, 600, 900], "webp")}
        sizes={tamanos}
        width={900}
        height={720}
        alt={alt}
        fetchPriority="high"
        decoding="async"
      />
    </picture>
  );
}

/** Detalle del mismo trabajo, recorte más cerrado: se carga recién al acercarse. */
export function FotoDetalle({ alt }: { alt: string }) {
  return (
    <picture>
      <source type="image/avif" srcSet={ruta("detalle-panal", 360, "avif")} />
      <img src={ruta("detalle-panal", 360, "webp")} width={360} height={315} alt={alt} loading="lazy" decoding="async" />
    </picture>
  );
}
