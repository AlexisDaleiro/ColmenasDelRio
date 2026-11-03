# Colmenas del Río — demo de rediseño

Propuesta de rediseño para Colmenas del Río, empresa uruguaya de retiro de colmenas, reubicación de abejas y resolución de situaciones con avispas. Es una demostración comercial: **no está publicada y no reemplaza el sitio actual**.

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4. Una sola página prerenderizada, sin backend, sin base de datos y sin analítica.

## Cómo abrirla

Requiere Node 20.9 o superior.

```bash
npm install
npm run dev
```

Abrir http://localhost:3000.

Para ver la versión de producción (la que se audita):

```bash
npm run build
npm start
```

Otros comandos: `npm test` (verifica el armado del mensaje y los enlaces), `npm run typecheck`, `npm run imagenes` (regenera los derivados de la foto en `public/img`), `npm run fuentes` (regenera los subconjuntos de las fuentes desde `src/fonts/origen`).

## Modos: preview y producción

Por defecto la demo corre en **preview**: se sirve con `noindex` (meta robots y encabezado `X-Robots-Tag`), sin canonical y sin sitemap. `robots.txt` permite el rastreo a propósito para que la directiva `noindex` pueda leerse.

Para el lanzamiento se cambia `NEXT_PUBLIC_SITE_MODE=production` y `NEXT_PUBLIC_SITE_URL` (ver `.env.example` y [docs/pendientes-publicacion.md](docs/pendientes-publicacion.md)).

## Qué se edita y dónde

| Qué | Archivo |
|---|---|
| Teléfonos, correo, prioridad, WhatsApp (apagado hasta confirmarlo), aviso de demo | `src/config/contacto.ts` |
| Título, descripción y modo del sitio | `src/config/sitio.ts` |
| Todos los textos de la página y las preguntas frecuentes | `src/content/textos.ts` |
| Armado del mensaje de consulta y enlaces | `src/lib/mensaje.ts` |
| Tokens de color, tipografía, movimiento y componentes | `src/app/globals.css` |
| Fotografía y sus recortes | `investigacion/fuente/` y `scripts/optimizar-imagenes.mjs` |

## Documentación

- [PRODUCT.md](PRODUCT.md): alcance, información comprobada, supuestos y límites.
- [DESIGN.md](DESIGN.md): sistema visual tal como quedó implementado.
- [docs/registro-investigacion.md](docs/registro-investigacion.md): lo observado en las dos webs y las decisiones de método.
- [docs/inventario-imagenes.md](docs/inventario-imagenes.md): fuente, permisos y recortes de cada recurso.
- [docs/verificacion.md](docs/verificacion.md): pruebas, herramientas, resultados y limitaciones reales.
- [docs/pendientes-publicacion.md](docs/pendientes-publicacion.md): confirmaciones y pasos antes de publicar.
- [docs/guion-presentacion.md](docs/guion-presentacion.md): guion de dos minutos.
- `verificacion/capturas/`: capturas de las pruebas.

## Fuentes tipográficas

Archivo y Source Serif 4, servidas localmente en WOFF2 desde `src/fonts/` con licencia SIL Open Font License 1.1 (copias en `src/fonts/licencias/`).
