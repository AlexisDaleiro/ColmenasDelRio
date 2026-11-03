---
version: 1
slug: "src-app-page-tsx"
primary_target: "src/app/page.tsx"
related_targets: ["src/components/Hero.tsx"]
---

# Surface brief: página de inicio de Colmenas del Río (demo de rediseño)

Alcance: una ruta (`/`), modo Persuade. Visitante: persona con abejas o avispas en su casa, predio o trabajo, que consulta casi siempre desde el celular; también quien evalúa una intervención para una empresa. Acción: llamar o preparar una consulta sin identificar la especie. Prueba real disponible: una fotografía propia del cliente (apicultor en un retiro) y contactos observados. No hay casos, testimonios, precios ni cifras.
Proceso: la dirección y la paleta las fijó el brief del usuario, así que no hubo tirada de concept-seed ni ronda de decisión. Sin generación de imágenes disponible: construcción code-led.

## Direction contract

THESIS: Una página que cuenta el trabajo de campo como una ruta precisa, del lugar del hallazgo al apiario de destino. Rechaza la plantilla de control de plagas (rojo de urgencia, panal como papel tapiz, tres íconos con tres beneficios) y la plantilla de marca de miel (degradé ámbar, flores).
OWN-WORLD: Marfil mineral de fondo, tinta verdeazulada para el texto, un único campo de río profundo para la reubicación y cera ámbar solo en acciones y nodos de la ruta. Archivo de ancho condensado, firme; una frase en Source Serif 4. Líneas finas, radios de 6 a 10 px, un signo de dos nodos unidos por una curva. Sin contenido se reconoce por el trazo de ruta con nodos, la foto amarilla sobre marfil y el titular condensado.
STORY: Quien llega ve en un vistazo que esta empresa retira colmenas y atiende nidos de avispas, entiende cómo consultar (llamar o preparar el mensaje sin nombrar el insecto) y luego comprende que las colonias rústicas de abejas que se reubican van a apiarios trazabilizados del sur de Uruguay; las avispas se resuelven aparte.
FIRST VIEWPORT: Escritorio 1440 × 900: cabecera compacta; a la izquierda, titular de dos líneas (unos 78 px), una frase de apoyo, botón cera "Consultar un retiro" y botón con contorno "Llamar al 099 498 294"; a la derecha, recorte vertical de la foto del cliente que sangra hasta el borde. Móvil 375 × 812: titular de 38 px, apoyo, dos botones a todo el ancho y la foto asomando debajo.
FORM: división editorial asimétrica con una columna de ruta vertical en la reubicación; posición 1 de 1 (dirección fijada por el brief), seed: none (brief-pinned direction, no roll).
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Sin resolver

- La marca (signo de dos nodos) es provisoria hasta que el cliente la valide.
- No hay WhatsApp confirmado: el botón existe pero está apagado en `src/config/contacto.ts`.
- La foto necesita autorización del cliente y de la persona que aparece.
