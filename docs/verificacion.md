# Informe de verificación

Fecha de las pruebas: 2 de noviembre de 2026 (hora local de Uruguay). Todo se probó sobre compilaciones de producción servidas en localhost; nada se publicó ni se desplegó. **No hay datos de campo** (CrUX/usuarios reales): no se afirma aprobación de Core Web Vitals en campo.

## Entorno

- Windows 11 Pro, Node 24.19, npm 11.17, Next.js 16.4.4 (Turbopack), React 19.3, Tailwind 4.3, TypeScript 5.9.
- Preview: `npm run build` + `npm start -- -p 3100` (modo preview, `noindex`).
- Variante de lanzamiento, solo para medir SEO sin `noindex`: `NEXT_DIST_DIR=.next-prod NEXT_PUBLIC_SITE_MODE=production NEXT_PUBLIC_SITE_URL=https://colmenasdelrio.example` en el puerto 3101 (el dominio es ficticio y solo prueba el canonical).
- Chromium de Playwright con barra de desplazamiento clásica de 15 px: los anchos efectivos de layout fueron 305, 360, 753, 1009, 1425 y 1905 px para los viewports 320, 375, 768, 1024, 1440 y 1920. Es un caso más exigente que un celular real.

## Herramientas realmente usadas

| Herramienta | Uso |
|---|---|
| MCP Playwright | Recorridos, estados, anchos 320/375/768/1024/1440/1920, teclado, movimiento reducido, sin JavaScript, capturas |
| MCP Unlighthouse (Lighthouse 13.5.0, auditor local, ruta `/`, perfiles mobile y desktop) | Puntajes y métricas de laboratorio |
| MCP Chrome DevTools (traza de rendimiento) | Referencia móvil **con throttling**: Slow 4G, CPU 4×, 375 × 812, DPR 2 |
| `impeccable detect` | Detector mecánico de diseño sobre `src/app` y `src/components`: sin hallazgos |
| Agentes de Impeccable | Revisión final independiente (`impeccable-finish-reviewer`) y documentación (`impeccable-documenter`) |
| `npm test`, `tsc --noEmit`, `next build` | Cuatro pruebas del armado de mensajes y enlaces, tipos y compilación: todo en verde |

Sustituciones y límites de las herramientas:
- Unlighthouse reporta `throttle: false` para sus escaneos. Por eso sus valores de LCP **no son móviles con throttling**; el perfil mobile aplica la emulación de dispositivo de Lighthouse. La referencia con throttling es la traza de DevTools. Además, la herramienta no admite dos escaneos a la vez y devolvió resultados con retraso.
- La variación del LCP "mobile" de Unlighthouse sobre código idéntico fue grande (ver tabla): las corridas frías, justo después de reiniciar el servidor, dieron ≈ 2,1 s; las tibias ≈ 1,1 s; tres corridas dieron 0,16 a 0,21 s. No se eligió la mejor: se informa la mediana y el rango.

## Auditoría (Unlighthouse, ruta `/`)

Tres corridas comparables por perfil sobre la compilación posterior a las correcciones de la revisión final (A, B y C), más una cuarta (D) tras el último cambio de texto del pie de página. Se descartaron las corridas exploratorias previas (el primer build, con fuentes completas, dio mobile Performance 97 y LCP 2,1 s: la subsetting de fuentes y un ancho de imagen intermedio mejoraron el resultado).

**Preview (`noindex`), puerto 3100**

| Corrida | Perfil | Perf. | Accesib. | Buenas prácticas | SEO | LCP | CLS | TBT |
|---|---|---|---|---|---|---|---|---|
| A | mobile | 100 | 100 | 100 | 66 | 211 ms | 0,032 | 0 ms |
| B | mobile | 100 | 100 | 100 | 66 | 1139 ms | 0 | 0 ms |
| C | mobile | 100 | 100 | 100 | 66 | 1136 ms | 0 | 0 ms |
| D (final) | mobile | 100 | 100 | 100 | 66 | 1102 ms | 0 | 0 ms |
| A | desktop | 100 | 100 | 100 | 66 | 242 ms | 0,010 | 0 ms |
| B | desktop | 100 | 100 | 100 | 66 | 234 ms | 0,010 | 0 ms |
| C | desktop | 100 | 100 | 100 | 66 | 159 ms | 0 | 0 ms |
| D (final) | desktop | 100 | 100 | 100 | 66 | 176 ms | 0 | 0 ms |

Mediana de A–C: mobile LCP 1136 ms, CLS 0; desktop LCP 234 ms, CLS 0,010. Con la corrida D, mobile 1102–1139 ms (salvo la corrida A) y desktop 159–242 ms.

**SEO 66 en preview es una excepción deliberada**: el único criterio que falla es `is-crawlable` (la página bloquea indexación por el `noindex` de la demo). Todos los demás criterios de SEO pasan.

**Configuración de publicación (variante de lanzamiento, puerto 3101)**

| Corrida | Perfil | Perf. | Accesib. | Buenas prácticas | SEO | LCP | CLS | TBT |
|---|---|---|---|---|---|---|---|---|
| 1 (fría) | mobile | 97 | 100 | 100 | 100 | 2098 ms | 0 | 0 ms |
| 2 | mobile | 100 | 100 | 100 | 100 | 1193 ms | 0 | 0 ms |
| 3 (final, fría) | mobile | 97 | 100 | 100 | 100 | 2090 ms | 0 | 0 ms |
| 1 | desktop | 100 | 100 | 100 | 100 | 212 ms | 0 | 0 ms |
| 2 | desktop | 100 | 100 | 100 | 100 | 196 ms | 0 | 0 ms |
| 3 (final) | desktop | 100 | 100 | 100 | 100 | 249 ms | 0,010 | 0 ms |

SEO 100 con canonical, `index, follow` y sitemap. Las corridas 1 y 3 fueron las primeras tras reiniciar el servidor (frías) y dieron Performance 97 en mobile con LCP ≈ 2,1 s; la tibia (2) dio 100 con 1193 ms. Mediana mobile: LCP 2090 ms (objetivo ≤ 2,5 s) y Performance 97 (objetivo ≥ 95); mediana desktop: LCP 212 ms. Estas corridas se hicieron sobre la compilación final, con el aviso del pie de página ya actualizado.

**Referencia móvil con throttling (DevTools, Slow 4G, CPU 4×, 375 × 812, DPR 2, preview):** LCP 1020, 997 y 1012 ms; CLS 0,00 en las tres. Mediana 1012 ms (objetivo de laboratorio: ≤ 2,5 s). El desglose del LCP: TTFB ≈ 565 ms, retardo de carga ≈ 85 ms, descarga ≈ 1 ms, retardo de render ≈ 360 ms; el elemento LCP es la imagen principal (con `fetchpriority="high"`, sin carga diferida).

Presupuestos propios (orientativos):
- Imagen principal móvil: AVIF de 16, 26 y 51 KiB según el ancho (objetivo ≈ 250 KiB). Escritorio: 24 y 43 KiB (objetivo ≈ 450 KiB).
- JavaScript inicial: ≈ 144 KiB transferidos en la primera medición (objetivo ≈ 180 KiB); no se volvió a leer ese total tras reducir las fuentes.
- Fuentes: Archivo 47,6 KiB y Source Serif 4 18,4 KiB (subconjunto del español; antes 88 y 49,7 KiB).
- Peso total de la página: 357 KiB en la primera medición, antes de reducir las fuentes y de agregar el ancho de 600 px.

## Recorridos verificados con Playwright

Se probaron en 375 × 812 y 1440 × 900 (los flujos de formulario, en ambos), con 0 errores de consola y 0 respuestas HTTP ≥ 400 en los seis anchos.

| Verificación | Resultado |
|---|---|
| Carga inicial | H1, "Consultar un retiro", "Llamar al 099 498 294" y la foto visibles sin esperar animaciones; en 320 × 700, 375 × 812, 768, 1024, 1440 y 1920 ambos botones quedan dentro del primer viewport |
| Desbordes horizontales | Ninguno a 305, 360, 753, 1009, 1425 y 1905 px de layout. Un desborde real de la cabecera a 305 px se detectó y corrigió |
| Anclas y cabecera fija | `scroll-padding-top` y orden de tabulación: ningún elemento de contenido queda bajo la cabecera (59 paradas de tabulación en cada ancho) |
| Menú móvil (`<dialog>`) | Abre, `Escape` cierra, el foco vuelve al botón "Abrir menú"; los enlaces del menú llevan el foco al destino |
| Contactos | `tel:+59899498294`, `tel:+59899205608` y `mailto:leomenoni14@gmail.com` presentes sin completar el formulario. No se llamó ni se escribió |
| Preparador: errores | Enviar vacío muestra un error junto a cada campo, no oculta el texto, y el foco va al primer campo inválido (visible bajo la cabecera) |
| Preparador: "No sé" | El enlace "Consultar sin identificar" preselecciona la opción; el mensaje resultante no identifica el insecto |
| Preparador: edición | El texto editado a mano se respeta al corregir un dato; "Volver a armarlo con los datos" lo regenera; ningún campo se pierde |
| Copiar | Éxito: "Mensaje copiado." en una región `role="status"`; fallo simulado del portapapeles: el texto queda seleccionado y se muestra la alternativa manual |
| WhatsApp | Con `confirmado: false` (estado entregado) no hay botón. Con una prueba temporal en `true` el enlace fue `https://wa.me/59899498294?text=…` con el texto idéntico al mensaje y codificado correctamente (`&`, `#`, tildes), `rel="noopener noreferrer"`, sin cargador de imágenes. La configuración se revirtió |
| FAQ | `<details>` nativo: abre y cierra con clic y teclado; funciona sin JavaScript |
| Recorrido a la reubicación | Estático (lista ordenada de tres momentos, nodos y curva) y con el trazo avanzando con el desplazamiento; con `prefers-reduced-motion` la animación es `none` y las distancias de movimiento valen 0 |
| Sin JavaScript | H1, 7 enlaces de llamada, 6 preguntas y los 3 momentos de la ruta presentes; el botón de menú se oculta |
| Teclado | Orden natural; todas las paradas de tabulación tienen anillo de foco de al menos 2 px; el enlace "Saltar al contenido" es el primero |
| Objetivos táctiles | Botones y enlaces de acción ≥ 44 px de alto; los enlaces sueltos en su propia línea se llevaron a 44 px. Los tres `input` de tipo radio miden 20 px pero su etiqueta completa (≥ 48 px) es el objetivo |

Capturas en `verificacion/capturas/` (primer viewport y página completa en 375 y 1440, más 320, 768, 1024 y 1920; menú abierto, FAQ abierta, errores, mensaje preparado y copiado, secciones de reubicación y proceso). Todas se abrieron y se revisaron. Las de `iter*` son de iteraciones intermedias; las `final-*` corresponden a la versión entregada.

## Problemas encontrados y corregidos

- Cabecera desbordada a 305 px de layout: se compactó la marca por debajo de 23 rem.
- Falta de separación entre campos del formulario por un margen sobrescrito: corregido.
- Mensaje "en debajo del alero": ahora no se duplica la preposición (con prueba).
- La confirmación de copia aparecía lejos del botón: ahora está junto a los botones de acción.
- Enlaces de texto en línea propia de 19 px de alto: llevados a 44 px.
- Imagen principal móvil sin ancho intermedio y fuentes completas: se agregaron 600 px y subconjuntos; el LCP de Unlighthouse bajó de ≈ 2,1 s a ≈ 1,1 s.
- Comentario de contrastes de `globals.css` con cifras incorrectas: recalculadas (tinta/papel 12,36; tinta/cera 6,02; muted/papel 5,72; papel/río 10,42; apoyo/río 7,46; error/superficie 7,39; borde de control/superficie 4,34).
- Revisión final independiente (disposición `fix`): se retiró la definición propia de "colonia rústica", se recortaron afirmaciones (avispas, costo), se dibujó la ruta con una curva más visible y la nota pasó a la columna izquierda, los pasos del proceso adoptaron el lenguaje de nodos y se agregó al pie el aviso de que pasos, indicaciones de seguridad y contactos están pendientes de validación. Segunda pasada del revisor: ruta y pasos resueltos; el marcador visible en la página fue el único punto abierto y se resolvió con el aviso del pie.

## Guía web moderna (modern-web-guidance)

Consultada antes de implementar. Aplicadas: `scroll-entry-exit-effects` (animación de la ruta con `animation-timeline: view()` dentro de `@supports` y `prefers-reduced-motion: no-preference`, sin polyfill porque es decorativa y el estado estático ya es completo), `motion` (propiedades compuestas y movimiento reducido por caso), `required-field-feedback` (se adoptó la validación propia con `aria-invalid` y errores junto a cada campo para controlar el foco), `search-hidden-content` (`<details>` nativo para FAQ) y `optimize-image-priority` (`fetchpriority="high"` solo en la imagen LCP; imagen secundaria con `loading="lazy"`).

## No verificado (pendiente real)

- Lector de pantalla (NVDA, VoiceOver, TalkBack): no se probó. La accesibilidad se verificó con Lighthouse (100), revisión de teclado y de estructura.
- Firefox y Safari: no se probaron. La animación de la ruta es mejora progresiva (Firefox no soporta `animation-timeline`: queda la versión estática completa).
- Zoom de navegador al 200–400 % y agrandado de texto del sistema: no se probaron por separado; el reflujo se comprobó con anchos de 305 y 360 px.
- Datos de campo (LCP, INP y CLS en el percentil 75): inexistentes para una demo nueva.
- INP: no se midió; TBT = 0 ms es solo una señal de laboratorio.
- Carga muy lenta con bloqueo de imágenes secundarias: se midió el throttling Slow 4G con CPU 4×, pero no un bloqueo específico de imágenes.
