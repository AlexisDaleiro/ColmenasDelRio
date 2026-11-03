# Pendientes para publicar

Publicar y modificar el sitio actual quedó fuera de esta demo. Estas son las confirmaciones y los pasos concretos antes de lanzar.

## Confirmaciones del cliente

1. **Canal principal y WhatsApp.** ¿Cuál de los dos teléfonos es el principal? ¿Alguno atiende WhatsApp? Hoy ambos se muestran como llamada y el botón de WhatsApp está apagado. Para activarlo: en `src/config/contacto.ts`, `whatsapp.confirmado = true` y `telefonoId` con el número elegido.
2. **Cobertura de retiros.** ¿En qué zonas se hacen retiros? La página dice que los apiarios de destino están en el sur y que la zona de atención se confirma al consultar; no afirma cobertura.
3. **Horarios y disponibilidad.** No se publica ninguno. Confirmar si se quiere informar alguno.
4. **Material autorizado.** Autoría y permiso de la fotografía, y consentimiento de la persona que aparece. Más fotos de trabajos reales (o de los apiarios, sin ubicaciones privadas) mejorarían la sección de reubicación.
5. **Alcance de "trazabilizados".** La página solo dice que los apiarios de destino son trazabilizados. No promete registros, informes, acceso del cliente ni certificación. Confirmar qué se puede decir.
6. **"Colonia rústica".** La página usa el término del cliente sin definirlo. Si se quiere explicarlo a quien no conoce el rubro, el cliente debe validar la definición antes de agregarla.
7. **Texto propuesto que necesita validación.** Estas piezas se redactaron a partir del brief y no fueron confirmadas por el cliente: los tres pasos de "Qué pasa después de consultar", la afirmación de que la forma de intervenir con avispas "se confirma con el equipo", la respuesta sobre cómo se define el costo, y las dos indicaciones de seguridad ("evitá acercarte para mirar de cerca", "mantené distancia y no manipules el nido ni la colonia"). Cualquier consejo de seguridad adicional debería respaldarse en fuentes competentes y revisarse para el contexto local.
8. **Vigencia.** Confirmar que los dos teléfonos y el correo siguen activos. La página no publica años de experiencia (el sitio actual dice 9); decidir si se quiere indicar y con qué cifra.
9. **Marca.** El signo de dos nodos es provisorio. Confirmar si se conserva o si existe una marca propia.
10. **Costo de las intervenciones.** La respuesta de preguntas frecuentes dice que se informa al consultar. Confirmar que esa política es correcta.

## Pasos técnicos

1. Definir el dominio final y el despliegue (esta demo no se desplegó).
2. Variables de entorno: `NEXT_PUBLIC_SITE_MODE=production` y `NEXT_PUBLIC_SITE_URL=https://<dominio-final>`. Con eso se quita `noindex` (meta y `X-Robots-Tag`), se agrega el canonical a `/` y se publica `sitemap.xml` con la home.
3. `robots.txt` ya permite el rastreo; en producción además enlaza el sitemap.
4. Verificar que el hosting no agregue su propio `X-Robots-Tag: noindex`.
5. Revisar los datos estructurados (Organization y FAQPage, sin dirección, horarios, reseñas ni ratings) con el validador de resultados enriquecidos. No hay promesa de resultados enriquecidos.
6. Regenerar la imagen social si cambia la foto o el titular (`public/og-colmenas-del-rio.jpg`, 1200 × 630).
7. Retirar el aviso "Propuesta de rediseño" (`modoDemo = false` en `src/config/contacto.ts`).
8. Repetir la auditoría con la configuración de producción (SEO sin la excepción de `noindex`) y medir Core Web Vitals con datos de campo cuando existan.
9. Si más adelante se quiere recibir consultas desde la web, hace falta un receptor real (correo o CRM). La demo no envía nada ni guarda datos.
