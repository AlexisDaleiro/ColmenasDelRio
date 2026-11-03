---
name: Colmenas del Río
description: Retiro de colmenas y nidos de avispas contado como una ruta precisa, del lugar del hallazgo al apiario de destino.
colors:
  paper: "#f4f0e7"
  surface: "#fffcf6"
  ink: "#172f35"
  river: "#173c46"
  wax: "#d5a13d"
  wax-soft: "#e4b655"
  muted: "#52615d"
  line: "#cec8ba"
  line-strong: "#6f7a76"
  on-river-muted: "#c3d0cc"
  error: "#9b2c1f"
  focus-on-dark: "#f4c75e"
typography:
  display:
    fontFamily: "Archivo, system-ui, Segoe UI, Arial, sans-serif"
    fontSize: "clamp(2.4rem, 9.8cqi, 5.25rem)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.015em"
    fontVariation: "font-stretch 80%"
  headline:
    fontFamily: "Archivo, system-ui, Segoe UI, Arial, sans-serif"
    fontSize: "clamp(2rem, 1.1rem + 3.2vw, 3.5rem)"
    fontWeight: 780
    lineHeight: 1.04
    letterSpacing: "-0.012em"
    fontVariation: "font-stretch 84%"
  title:
    fontFamily: "Archivo, system-ui, Segoe UI, Arial, sans-serif"
    fontSize: "clamp(1.375rem, 1.1rem + 1vw, 1.75rem)"
    fontWeight: 720
    lineHeight: 1.15
    letterSpacing: "-0.005em"
    fontVariation: "font-stretch 90%"
  lead:
    fontFamily: "Archivo, system-ui, Segoe UI, Arial, sans-serif"
    fontSize: "clamp(1.1875rem, 1.05rem + 0.6vw, 1.4375rem)"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "Archivo, system-ui, Segoe UI, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  small:
    fontFamily: "Archivo, system-ui, Segoe UI, Arial, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.5
  serif-lead:
    fontFamily: "Source Serif 4, Times New Roman, serif"
    fontSize: "clamp(1.375rem, 1.1rem + 1.1vw, 1.875rem)"
    fontWeight: 400
    lineHeight: 1.38
    letterSpacing: "-0.005em"
rounded:
  sm: "6px"
  md: "8px"
  lg: "10px"
  full: "50%"
spacing:
  gutter: "clamp(1.25rem, 4vw, 3rem)"
  section: "clamp(3.5rem, 7vw, 6rem)"
  grid-gap: "1.5rem"
  stack: "1.5rem"
components:
  button-cera:
    backgroundColor: "{colors.wax}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "0.7rem 1.4rem"
    height: "3rem"
  button-cera-hover:
    backgroundColor: "{colors.wax-soft}"
  button-tinta:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.sm}"
    padding: "0.7rem 1.4rem"
    height: "3rem"
  button-tinta-hover:
    backgroundColor: "{colors.river}"
  button-linea:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "0.7rem 1.4rem"
    height: "3rem"
  entrada:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "0.7rem 0.9rem"
    height: "3rem"
  panel:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
  reubicacion:
    backgroundColor: "{colors.river}"
    textColor: "{colors.paper}"
  pie:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
---

# Design System: Colmenas del Río

## Overview

**Creative North Star: "La Ruta del Apiario"**

La página cuenta un trabajo de campo como un recorrido preciso: del lugar del hallazgo al apiario de destino. Todo el sistema sale de esa imagen: marfil mineral de fondo, tinta verdeazulada para leer, un único campo de río profundo donde ocurre la reubicación, y cera ámbar reservada para lo que se toca (acciones) y lo que se recorre (nodos de la ruta). La marca es un signo de dos nodos unidos por una curva, y el mismo lenguaje (nodo, línea fina, curva de río) reaparece en la reubicación y en el proceso.

La densidad es editorial y respirada: titulares condensados y firmes, párrafos de hasta 62ch, líneas finas de 1 a 2 px en lugar de tarjetas, radios de 6 a 10 px. No hay ornamento de miel ni de plaga: ni panal de fondo, ni degradé ámbar, ni rojo de urgencia. La única prueba visual es la fotografía propia del cliente.

El sistema se declara honesto con lo que no sabe: sin precios, cifras, casos ni certificaciones. Lo que no está confirmado no se dibuja.

**Key Characteristics:**
- Un solo campo de color profundo (río) en toda la página; el resto es marfil y tinta.
- Una sola familia tipográfica (Archivo variable, ancho 80 a 100 %) más una frase en Source Serif 4.
- Plano por defecto: sin sombras proyectadas; la profundidad es tonal y por líneas.
- Nodo, línea y curva como único motivo gráfico recurrente.
- Movimiento corto, nativo de CSS, con versión estática completa.

## Colors

Paleta mineral y fría con un solo acento cálido; el ámbar escasea a propósito.

### Primary
- **Cera Ámbar** (#d5a13d): fondo de la acción principal (`btn-cera`), trazo y borde de los nodos de la ruta, nodo final lleno, subrayado de enlaces y del paso final. Texto tinta encima (6.0:1). Hover: **Cera Clara** (#e4b655, tinta encima 7.4:1).
- **Río Profundo** (#173c46): único campo de color profundo (sección Reubicación), hover del botón tinta, estado "ok" del formulario y hover de las preguntas.

### Neutral
- **Marfil Mineral** (#f4f0e7): fondo de página, texto sobre campos oscuros, relleno de nodos numerados.
- **Marfil Claro** (#fffcf6): superficie elevada tonalmente: panel de consulta, campos, opciones.
- **Tinta Verdeazulada** (#172f35): texto, bordes activos, botón tinta, fondo del pie y foco por defecto.
- **Gris Musgo** (#52615d): texto secundario, ayudas, placeholders, pies de foto.
- **Línea Piedra** (#cec8ba): divisores finos de 1 px (cabecera, preguntas, resultado).
- **Línea Firme** (#6f7a76): borde de campos y opciones y barra de desplazamiento.
- **Apoyo sobre Río** (#c3d0cc): texto secundario sobre río y sobre el pie.
- **Foco sobre Oscuro** (#f4c75e): anillo de foco dentro de Reubicación y del pie.
- **Error Óxido** (#9b2c1f): borde de campo inválido, mensaje de error y estado de error; siempre acompañado de ícono y texto.

### Contrastes medidos (WCAG, calculados desde los hex)
- Tinta sobre marfil: 12.4:1
- Tinta sobre cera: 6.0:1 (tinta sobre cera clara: 7.4:1)
- Gris musgo sobre marfil: 5.7:1 (sobre marfil claro: 6.4:1)
- Marfil sobre río: 10.4:1
- Apoyo sobre río: 7.5:1 (sobre tinta: 8.8:1)
- Error sobre marfil claro: 7.4:1 (sobre marfil: 6.7:1)
- Cera sobre río (nodos, trazo): 5.1:1
- Foco sobre oscuro sobre río: 7.4:1
- Línea firme sobre marfil claro: 4.3:1; solo para bordes de componentes (umbral 3:1), nunca para texto.

### Named Rules
**La Regla de la Cera.** La cera aparece en acciones y en nodos de la ruta, nada más. Nunca como fondo de sección ni como degradé.
**La Regla del Único Río.** Hay un solo campo de color profundo en la página (Reubicación). El pie usa tinta, no un segundo campo de color.
**La Regla del Texto Oscuro sobre Cera.** El texto sobre cera es siempre tinta; el marfil sobre cera no alcanza contraste.

## Typography

**Display, Headline y Body:** Archivo (variable, peso 400 a 800, ancho 80 a 100 %), con system-ui, Segoe UI, Arial como respaldo.
**Acento editorial:** Source Serif 4 regular, una sola frase (la entrada de Reubicación), con Times New Roman como respaldo.

**Carácter:** condensado y firme en los titulares, abierto y legible en el cuerpo. La jerarquía se construye con ancho y peso de una misma familia; el serif aparece una vez, como voz del relato.

### Hierarchy
- **Display** (800, ancho 80 %, clamp(2.4rem, 9.8cqi, 5.25rem), 0.98): titular del hero; el `cqi` sale del contenedor de texto del hero, no de la ventana.
- **Headline** (780, ancho 84 %, clamp(2rem, 1.1rem + 3.2vw, 3.5rem), 1.04): títulos de sección.
- **Title** (720, ancho 90 %, clamp(1.375rem, 1.1rem + 1vw, 1.75rem), 1.15): pasos del proceso y bloques de servicio. Los títulos de etapa de la ruta usan 780, ancho 84 %, clamp(1.75rem, 1.2rem + 1.8vw, 2.5rem).
- **Lead** (400, clamp(1.1875rem, 1.05rem + 0.6vw, 1.4375rem), 1.5): frases de apoyo.
- **Body** (400, 1.0625rem, 1.6): texto corrido, máximo 62ch (`medida`); respuestas de preguntas 60ch.
- **Small** (400, 0.9375rem, 1.5; 0.875rem para pies de foto y contador): ayudas, notas, errores.
- **Contacto grande** (800, ancho 85 %, clamp(1.75rem, 1.2rem + 2.2vw, 2.5rem)): teléfonos como enlaces; el correo baja a clamp(1.1875rem, 1rem + 1vw, 1.5rem), 700, ancho 100 %.
- **Marca** (800, ancho 86 %, 1.25rem).
- **Serif de relato** (400, clamp(1.375rem, 1.1rem + 1.1vw, 1.875rem), 1.38).

### Named Rules
**La Regla de una Sola Familia.** Los titulares se diferencian por ancho y peso de Archivo, no por mezclar familias.
**La Regla de la Frase Serif.** Source Serif 4 se usa en una frase de relato; no se extiende a titulares ni se combina con cursivas.
**La Regla del Balance.** Los h1 a h3 llevan `text-wrap: balance` y los párrafos `text-wrap: pretty`.

## Layout

Contenedor `min(100% - 2 * gutter, 80rem)` centrado, con gutter `clamp(1.25rem, 4vw, 3rem)`. Desde 64rem, la rejilla es de 12 columnas con 1.5rem de separación horizontal y 3rem vertical; por debajo, una columna con 2.5rem de separación. Breakpoints en uso: 40rem (botones en fila, opciones), 48rem (navegación visible, proceso en tres columnas, pie en tres), 64rem (rejilla de 12, hero y bloques asimétricos) y 80rem como ancho máximo del contenedor. Hay además un ajuste de marca para pantallas de hasta 23rem.

Ritmo vertical: cada sección usa `clamp(3.5rem, 7vw, 6rem)` de relleno en bloque; dentro, pilas de 1 a 1.5rem entre elementos y 2.5 a 3.5rem antes de listas o bloques grandes. La composición es asimétrica: en escritorio el hero ocupa 8 columnas de texto y 4 de foto; Reubicación y Consulta usan 5 columnas de introducción y el resto para el recorrido o el formulario.

Rasgos de responsive que son parte del diseño: el titular del hero escala por container query; la foto del hero sangra hasta el borde derecho de la ventana sin usar 100vw; la introducción de Reubicación es sticky a 6.5rem desde 64rem (y estática si la altura es menor a 40rem) y en móvil se reordena para que la nota quede después del recorrido; `scroll-padding-top` de 5rem compensa la cabecera sticky.

## Elevation & Depth

Sistema plano. No hay sombras proyectadas. La profundidad se logra con tono (marfil claro sobre marfil para el panel y los campos), con líneas de 1 a 2 px y con el campo de río. La única "sombra" es un anillo interno de 1 px (`inset 0 0 0 1px` tinta) que refuerza la opción marcada de un grupo de selección. El `::backdrop` del menú móvil es tinta al 50 %.

### Named Rules
**La Regla Plana.** Las superficies están planas en reposo y en hover; el estado se comunica con borde, color o subrayado, no con elevación.

## Shapes

Radios contenidos: 6 px para botones, campos, opciones y fotos secundarias; 8 px para la foto del hero (solo en el lado izquierdo, porque sangra a la derecha); 10 px para el panel de consulta; círculo para nodos. Bordes de 1 px para divisores, 1.5 px en campos, 2 px en botones con contorno, nodos y reglas de cierre (`nose`, `aviso`). El signo de la marca es dos nodos unidos por una curva; la ruta usa la misma curva cúbica (M20 0 C29 30, 11 70, 20 100) entre nodos, con pista tenue de marfil al 45 % y trazo de cera encima.

## Components

### Buttons
- **Shape:** 6 px, mínimo 3rem de alto (2.75rem en `btn-sm`), borde de 2 px, texto en 700.
- **Cera (primario):** fondo cera, texto tinta; hover cera clara. Una por vista de decisión.
- **Tinta:** fondo tinta, texto marfil; hover río.
- **Línea:** contorno de color actual, transparente; hover con mezcla del 9 % del color actual.
- **Estados:** `:active` baja 1 px; deshabilitado al 55 % de opacidad y `not-allowed`; en móvil ocupan todo el ancho (`btn-bloque`), desde 40rem se ajustan al contenido. Transiciones de 150 ms.
- **Ícono (`btn-icono`):** 2.75rem cuadrado, borde tinta 2 px, hover marfil claro.
- **Enlace:** peso 650, subrayado de cera de 0.14em que engrosa a 0.24em al hover.

### Encabezado y MenuMovil
Cabecera sticky sobre marfil con filete inferior de 1 px, 3.75rem de alto (4.25rem desde 48rem). Marca a la izquierda; desde 48rem navegación en línea con enlaces de 600 y un botón; por debajo, botón de ícono que abre un `<dialog>` modal nativo a todo el ancho: Esc, foco atrapado y devolución del foco los resuelve el navegador. Entrada con fundido y desplazamiento de `--move-md` en 260 ms (`@starting-style`), enlaces de 1.75rem a 760 con filete inferior. El scroll del cuerpo se bloquea mientras hay un diálogo abierto.

### Hero
Titular display a la izquierda, frase de apoyo (máx. 34rem), botón cera y botón con contorno hacia el teléfono principal; foto del cliente a la derecha. En móvil la foto va debajo en 5:4; desde 64rem pasa a 4:5, sangra al borde derecho con esquinas de 8 px solo a la izquierda y el pie de foto respeta el gutter. Altura mínima `min(46rem, 100svh - 4.25rem)`.

### Servicio
Dos bloques editoriales lado a lado desde 64rem (separados por un filete vertical de 1 px y 3.5rem de relleno), apilados antes. Cierra la franja "No sé qué es": regla superior de 2 px tinta, texto y acción en tres columnas (4fr 5fr auto) en escritorio.

### Reubicacion
El campo de río: texto marfil, apoyo en #c3d0cc, foco claro. Introducción sticky a la izquierda (5 columnas) con la frase serif; a la derecha, la ruta (desde la columna 7): etapas con un carril de 2.5rem y un nodo de 1.75rem unidos por una curva SVG. Tipos de nodo: anillo (origen), flecha (tránsito) y lleno con aro exterior de 2 px a 3 px (apiario de destino). El trazo de cera se dibuja con el scroll mediante `animation-timeline: view()` (rango entry 25 % a cover 55 %) y solo si el navegador lo soporta y no hay `prefers-reduced-motion`; de lo contrario el recorrido aparece completo. Fotos de etapa de hasta 21rem, nota final con filete de marfil al 28 %.

### Proceso
Pasos numerados en nodos circulares de 2.75rem (borde tinta 2 px) unidos por una línea de 2 px: vertical en móvil, horizontal en tres columnas desde 48rem. El último paso (la intervención) lleva el nodo lleno de cera. Cierra con un aviso: regla superior de 2 px tinta y texto de 1.1875rem.

### Preguntas
Acordeón de `<details>` nativos, filetes de 1 px arriba y abajo, resumen de 1.1875rem a 680 y mínimo de 3.5rem, ícono que gira 180° en 260 ms; el cuerpo entra con fundido y desplazamiento de `--move-sm`. Hover del resumen en río.

### Consulta y PreparadorConsulta
Teléfonos como enlaces grandes (clase de contacto grande) con filete inferior y subrayado de cera al hover, junto a un panel de marfil claro con borde tinta de 1.5 px y radio 10 px. El formulario usa campos de 3rem con borde de 1.5 px en línea firme (hover: tinta), opciones tipo radio en rejilla de dos columnas con estado marcado (borde tinta, fondo marfil, anillo interno) y contador de caracteres a la derecha.
- **Error:** borde de 2 px error, mensaje con ícono, en 650; el estado global también usa texto, no solo color.
- **Resultado / edición / copia:** el mensaje preparado aparece bajo un filete con entrada de 260 ms y foco programático en su título; permite editar, copiar (con estado `ok` en río o `error` en óxido, `min-height` fijo para no saltar) y abrir el canal. Sin WhatsApp confirmado no se muestra ese botón.

### PieDePagina
Fondo tinta, texto marfil, tres columnas desde 48rem, enlaces de 2.75rem de alto con subrayado de cera, foco claro y nota inferior con filete de marfil al 28 % en apoyo sobre río.

### Motion
Tokens: `--dur-feedback` 150 ms (botones, bordes, enlaces), `--dur-ui` 260 ms (menú, preguntas, resultado), `--dur-editorial` 560 ms (reservado para transiciones editoriales; la ruta usa el scroll, no el reloj), `--ease-out` cubic-bezier(.22, 1, .36, 1) como curva por defecto, `--ease-in-out` cubic-bezier(.4, 0, .2, 1), `--move-sm` 0.5rem y `--move-md` 1rem. Con `prefers-reduced-motion: reduce`, ambas distancias valen 0 y `--dur-ui` y `--dur-editorial` bajan a 150 ms: quedan fundidos breves. El `scroll-behavior: smooth` solo se activa sin esa preferencia. No hay librería de animación: todo es CSS nativo (transiciones, `@starting-style`, animation-timeline).

### Fotografía
- El único material es la fotografía propia del cliente; no hay banco de imágenes, imágenes generadas por IA ni evidencia fabricada.
- Recortes: 4:5 en escritorio y 5:4 en móvil para el hero; las variantes se generan con `scripts/optimizar-imagenes.mjs` en AVIF y WebP, y su procedencia está en `docs/inventario-imagenes.md`.
- Nunca se amplía por encima de su resolución original.
- Todo ráster lleva pie o alt que dice qué es, sin atribuir hechos que el cliente no confirmó.

## Do's and Don'ts

### Do:
- **Do** usar cera (#d5a13d) solo en acciones y nodos de la ruta, siempre con texto tinta.
- **Do** mantener un solo campo de río profundo y reutilizar el motivo de nodo y curva para cualquier secuencia nueva.
- **Do** dar a cada control un objetivo de al menos 2.75rem y mostrar foco con anillo de 3px y separación de 3px.
- **Do** expresar los errores con texto e ícono además del color.
- **Do** pasar todo número, correo o canal por `src/config/contacto.ts` y el texto por `src/content/textos.ts`.
- **Do** ofrecer siempre la versión estática del movimiento (sin soporte o con movimiento reducido).

### Don't:
- **Don't** usar fondos de hexágonos o panal como papel tapiz.
- **Don't** poner eyebrows o kickers sobre los titulares.
- **Don't** armar rejillas de tarjetas con ícono, título y texto.
- **Don't** usar texto con degradé, vidrio esmerilado ni sombras proyectadas.
- **Don't** animar abejas que siguen el cursor, ni usar marquesinas, contadores animados, cursor personalizado o secuestro del scroll.
- **Don't** mezclar cursivas serif en cada titular; el serif es una frase.
- **Don't** afirmar precios, atención 24/7, zonas de cobertura ni certificaciones: no están confirmados.
- **Don't** usar imágenes de banco, imágenes generadas ni evidencia inventada (casos, testimonios, cifras).
- **Don't** usar rojo de urgencia ni degradé ámbar de marca de miel.
