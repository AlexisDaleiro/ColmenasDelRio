# Registro de investigación

Preparado el 2 de noviembre de 2026. Las dos webs se abrieron en navegador (Playwright, escritorio 1440 × 900) y se leyó su contenido y su estructura. Capturas completas en `investigacion/`.

## Cuatro categorías

### Confirmado por el cliente
- Empresa especializada en el retiro, reubicación y resolución de casos de colmenas de abejas (*Apis mellifera*) y avispas.
- Las colonias rústicas que se reubican se llevan a apiarios trazabilizados en distintos predios del sur de Uruguay.
- Pedido reciente: mostrar solo el servicio de retiro, reubicación y resolución. Sin tienda, miel, insumos, cursos, polinización, blog ni catálogo.

### Observado en la web
Colmenas del Río (`colmenasdelrio.com`, observada el 2/11/2026):
- Página única con fondo naranja y trama de panal, titular "Apicultores profesionales para retiro de colmenas y control de enjambres", secciones "¿Quiénes somos?", "¿Por qué elegirnos?" y "Contacto". Sin navegación.
- Texto observado: "grupo de apicultores profesionales", "9 años de experiencia en el sector", "prevención, control y retiro de colonias rústicas para empresas en general", "colmenas de todo tipo".
- Contactos vigentes al momento de la prueba: `tel:+59899498294` (099498294), `tel:+59899205608` (099205608) y `mailto:leomenoni14@gmail.com`. No hay enlace `wa.me`: el ícono de WhatsApp acompaña teléfonos con enlace `tel:`.
- Una fotografía (`hero.webp`, 900 × 855 px) de un apicultor con traje amarillo retirando panales de una abertura en una pared de ladrillo. Es el único material propio visible.
- Sin dirección, horarios, redes ni logo. Pie con crédito del desarrollador.

Apícola Integral (`apicolaintegral.com`, solo como referencia sectorial):
- Empresa de insumos y servicios apícolas. Cabecera con cuatro anclas y selector de idioma, sin hero convencional, fotografías documentales de planta y equipos, bloques de insumos con enlaces, contacto con teléfonos, correo, dirección y formulario.
- Cualidades transferibles (hipótesis, no preferencia confirmada): presencia de empresa real, imágenes de actividad y vocabulario del sector.
- No se copia su estructura, logo, fotografías, textos, composición ni combinación de recursos, y no se usó ningún activo suyo.

### Supuesto de diseño
- La persona que consulta está preocupada, no distingue abejas de avispas y usa el celular con una mano.
- Una fotografía de intervención explica el oficio mejor que ornamentos; por eso protagoniza el primer pantallazo.
- Explicar con precisión el destino de las abejas es el diferencial; las avispas se separan.
- "Colonia rústica" se usa tal como lo escribe el cliente, sin definirlo: una definición propia sería un dato no confirmado.
- Los pasos de "Qué pasa después de consultar" y las dos indicaciones de seguridad siguen el esquema pedido por el brief (consulta, evaluación, intervención; mantener distancia) y quedan como texto propuesto a validar.
- El orden Servicio → Reubicación → Proceso → Preguntas → Consulta prioriza que el segundo tramo aclare la reubicación.

### Pendiente de confirmar
Ver [pendientes-publicacion.md](pendientes-publicacion.md): canal principal y WhatsApp, cobertura de retiros, horarios, vigencia de contactos y de la experiencia, autorización de la fotografía, alcance de "trazabilizados", marca.

## Método y herramientas
- **ui-ux-pro-max**: se consultó la generación de sistema de diseño. Devolvió una propuesta genérica de SaaS (azul, naranja urgente, Poppins/Open Sans, estilo plano). Se descartó por ajena al servicio y al brief. Se conservaron sus verificaciones: contraste 4,5:1, foco visible, movimiento reducido, contactos sin ocultar y revisión en 375, 768, 1024 y 1440 px.
- **Impeccable**: condujo el contexto (PRODUCT.md), la dirección, la crítica y el cierre. La dirección y la paleta las fijó el brief, por lo que no hubo tirada de `concept-seed` ni ronda de decisión; se declaró en el brief de superficie.
- **ui-ux-pro-max:ui-styling**: Tailwind 4 con tokens en `@theme`. No se instaló shadcn/ui: las primitivas necesarias (diálogo, `details`, formulario) son nativas.
- **vercel-react-best-practices y ecc:react-patterns**: componentes de servidor por defecto; solo dos límites cliente (`MenuMovil`, `PreparadorConsulta`); valores derivados calculados en el render, sin efectos para eso; sin memoización innecesaria.
- **ecc:nextjs-turbopack**: Next.js 16 con Turbopack; compilación de producción con prerenderizado estático.
- **ecc:motion-foundations y ecc:motion-patterns**: se aplicaron sus principios (tokens de duración, curva y distancia; estados iniciales visibles; movimiento reducido que elimina desplazamientos). **No se usó la librería Motion**: las animaciones (trazo de la ruta, FAQ, mensaje, menú) se resuelven con CSS nativo, como pide la guía web moderna, y así no suma JavaScript.
- **modern-web-guidance**: consultada antes de implementar (`scroll-entry-exit-effects`, `motion`, `required-field-feedback`, `search-hidden-content`, `optimize-image-priority`). Detalle en [verificacion.md](verificacion.md).
- **ecc:seo y ecc:accessibility**: aplicadas desde el diseño y auditadas al cierre.
- No se mezcló `frontend-design`, `interface-design` ni `ui-ux-pro-max:design` con Impeccable.
