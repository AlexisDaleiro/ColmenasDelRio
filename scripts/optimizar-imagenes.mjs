// Genera los derivados de la fotografía propia del cliente (investigacion/fuente) en public/img.
// Uso: npm run imagenes
// Los nombres llevan versión (-v1): subir el número al reemplazar la foto, porque /img se sirve con caché inmutable.
import sharp from "sharp";
import { mkdir, stat } from "node:fs/promises";

const origen = "investigacion/fuente/hero-original-colmenasdelrio.webp"; // 900 x 855 px
const salida = "public/img";
const version = "v1";

// Recortes sobre el original. Los anchos nunca superan el ancho real del recorte: no se amplía nada.
const recortes = [
  { id: "hero-escritorio", region: { left: 216, top: 0, width: 684, height: 855 }, anchos: [480, 684] },
  { id: "hero-movil", region: { left: 0, top: 100, width: 900, height: 720 }, anchos: [450, 600, 900] },
  { id: "detalle-panal", region: { left: 270, top: 270, width: 360, height: 315 }, anchos: [360] },
];

await mkdir(salida, { recursive: true });

for (const { id, region, anchos } of recortes) {
  for (const ancho of anchos) {
    const base = sharp(origen).extract(region).resize({ width: ancho, withoutEnlargement: true });
    const nombre = `${salida}/${id}-${ancho}-${version}`;
    await base.clone().avif({ quality: 52, effort: 6 }).toFile(`${nombre}.avif`);
    await base.clone().webp({ quality: 76, effort: 6 }).toFile(`${nombre}.webp`);
    const kib = async (ext) => ((await stat(`${nombre}.${ext}`)).size / 1024).toFixed(1);
    console.log(`${id}-${ancho}-${version}: avif ${await kib("avif")} KiB, webp ${await kib("webp")} KiB`);
  }
}
