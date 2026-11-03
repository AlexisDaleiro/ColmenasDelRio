// Derivados generados por `npm run imagenes` (ver scripts/optimizar-imagenes.mjs). Versión en el nombre: -v1.
const ruta = (id: string, ancho: number, ext: "avif" | "webp") => `/img/${id}-${ancho}-v1.${ext}`;
const srcSet = (id: string, anchos: number[], ext: "avif" | "webp") =>
  anchos.map((a) => `${ruta(id, a, ext)} ${a}w`).join(", ");

const tamanos = "(min-width: 64rem) 22rem, 60vw";

/** Foto principal, recortada en vertical para la celda hexagonal del hero. Es la imagen del LCP. */
export function FotoPrincipal({ alt }: { alt: string }) {
  return (
    <picture>
      <source type="image/avif" srcSet={srcSet("hero-escritorio", [480, 684], "avif")} sizes={tamanos} />
      <img
        src={ruta("hero-escritorio", 684, "webp")}
        srcSet={srcSet("hero-escritorio", [480, 684], "webp")}
        sizes={tamanos}
        width={684}
        height={855}
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
