# Inventario de imágenes y recursos

## Fotografía

| Archivo en `public/img` | Origen | Autoría | Permiso | Uso | Recorte sobre el original | Tamaño | Fallback |
|---|---|---|---|---|---|---|---|
| `hero-escritorio-{480,684}-v1.{avif,webp}` | `investigacion/fuente/hero-original-colmenasdelrio.webp`, descargado de `colmenasdelrio.com/_astro/hero.sprEmAM-_Z1UghaI.webp` el 2/11/2026 | Sin confirmar (material publicado por el cliente en su sitio actual) | **Pendiente**: confirmar autoría, permiso de uso y consentimiento de la persona que aparece | Foto principal en escritorio (LCP) | x 216–900, y 0–855 (4:5) | 684 × 855 (AVIF 43 KiB, WebP 62 KiB) | WebP; color de fondo reservado y proporción fijada por CSS |
| `hero-movil-{450,600,900}-v1.{avif,webp}` | Mismo original | Ídem | Ídem | Foto principal en móvil y tablet (LCP) | x 0–900, y 100–820 (5:4) | 450, 600 y 900 de ancho (AVIF 16, 26 y 51 KiB; WebP 24, 38 y 75 KiB) | WebP |
| `detalle-panal-360-v1.{avif,webp}` | Mismo original | Ídem | Ídem | Detalle del lugar del hallazgo en la sección de reubicación | x 270–630, y 270–585 | 360 × 315 (AVIF 8 KiB, WebP 11 KiB) | WebP; carga diferida |

Notas:
- El original mide 900 × 855 px; ningún derivado supera el ancho real del recorte (no hay ampliaciones) ni usa filtros.
- La imagen es de un trabajo real según el sitio actual (alt original: "Apicultor retirando un panel de abejas"). La demo no la presenta como caso, antes/después ni resultado.
- Los nombres llevan versión (`-v1`): al reemplazar la foto, subir el número en `scripts/optimizar-imagenes.mjs` y `src/components/Foto.tsx`, porque `/img` se sirve con caché inmutable.
- No se usó ninguna imagen de Apícola Integral ni stock. No hay imágenes generadas por IA.

## Otros recursos

| Recurso | Origen | Licencia | Uso |
|---|---|---|---|
| Archivo (variable, peso y ancho, subconjunto latín) | Paquete `@fontsource-variable/archivo` 5.3.0 | SIL OFL 1.1 (`src/fonts/licencias/Archivo-OFL.txt`) | Titulares, cuerpo, navegación y controles |
| Source Serif 4 (variable, subconjunto latín) | Paquete `@fontsource-variable/source-serif-4` 5.3.1 | SIL OFL 1.1 (`src/fonts/licencias/SourceSerif4-OFL.txt`) | Una frase de la sección de reubicación |
| Íconos (teléfono, correo, copiar, flechas, etc.) | Trazados propios en `src/components/iconos.tsx` | Propios | Controles |
| Marca provisoria (dos nodos y una curva) | Propia, `src/components/Marca.tsx` e `src/app/icon.svg` | Propia | Cabecera, pie y favicon |
| Imagen para redes (`public/og-colmenas-del-rio.jpg`) | Composición propia con la foto del cliente | Hereda el permiso pendiente de la foto | Vista previa social |

## Sin material disponible (no se fabricó)
Fotografías de apiarios, traslados, equipos o vehículos; casos documentados; antes/después; logo del cliente.
