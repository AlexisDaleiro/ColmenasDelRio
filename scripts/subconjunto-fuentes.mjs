// Reduce las fuentes completas (src/fonts/origen) a los caracteres del español y a los ejes que usa el diseño.
// Uso: npm run fuentes. Si se agregan idiomas o pesos, ampliar `texto` o `ejes` y volver a ejecutarlo.
import subsetFont from "subset-font";
import { readFile, stat, writeFile } from "node:fs/promises";

// ASCII imprimible, Latin-1 completo (á é í ó ú ñ ü ¿ ¡ « ») y puntuación tipográfica.
const rangos = [
  [0x20, 0x7e],
  [0xa0, 0xff],
];
const extra = "–—‘’“”…•€";
const texto =
  rangos.flatMap(([a, b]) => Array.from({ length: b - a + 1 }, (_, i) => String.fromCodePoint(a + i))).join("") + extra;

const fuentes = [
  {
    origen: "src/fonts/origen/archivo-latin-wdth-normal.woff2",
    salida: "src/fonts/archivo-subset.woff2",
    // El diseño usa pesos 400–800 y anchos 80–100 %.
    ejes: { wght: { min: 400, max: 800 }, wdth: { min: 80, max: 100 } },
  },
  {
    origen: "src/fonts/origen/source-serif-4-latin-wght-normal.woff2",
    salida: "src/fonts/source-serif-4-subset.woff2",
    // Solo se usa en peso regular.
    ejes: { wght: 400 },
  },
];

for (const { origen, salida, ejes } of fuentes) {
  const resultado = await subsetFont(await readFile(origen), texto, { targetFormat: "woff2", variationAxes: ejes });
  await writeFile(salida, resultado);
  const kib = async (ruta) => ((await stat(ruta)).size / 1024).toFixed(1);
  console.log(`${salida}: ${await kib(origen)} KiB -> ${await kib(salida)} KiB`);
}
