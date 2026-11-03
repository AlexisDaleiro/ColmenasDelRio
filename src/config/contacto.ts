// Única fuente de contactos. Ningún componente escribe números a mano.
// Observados en colmenasdelrio.com el 2 de noviembre de 2026; vigencia y prioridad pendientes de confirmar.

export type Telefono = {
  id: string;
  /** Formato para leer, ej. "099 498 294". */
  visible: string;
  /** Formato internacional para tel: y WhatsApp, ej. "+59899498294". */
  internacional: string;
};

export const telefonos: readonly Telefono[] = [
  { id: "principal", visible: "099 498 294", internacional: "+59899498294" },
  { id: "secundario", visible: "099 205 608", internacional: "+59899205608" },
];

/** Teléfono que se destaca en la cabecera, el hero y el cierre. Cambiar el id para cambiar la prioridad. */
export const telefonoPrincipalId = "principal";

export const correo = "leomenoni14@gmail.com";

/**
 * WhatsApp: el sitio actual solo enlaza `tel:`, así que no hay canal confirmado.
 * Con `confirmado: false` la demo no muestra ningún botón de WhatsApp.
 * Al confirmarlo, poner `confirmado: true` y el `telefonoId` del número que atiende WhatsApp.
 */
export const whatsapp: { confirmado: boolean; telefonoId: string } = {
  confirmado: false,
  telefonoId: "principal",
};

/** Muestra el aviso de propuesta en el pie de página. */
export const modoDemo = true;

export const telefonoPrincipal: Telefono =
  telefonos.find((t) => t.id === telefonoPrincipalId) ?? telefonos[0];

export const enlaceTel = (t: Telefono) => `tel:${t.internacional}`;

/** Número de WhatsApp sin signos (formato wa.me), o null si el canal no está confirmado. */
export function numeroWhatsApp(): string | null {
  if (!whatsapp.confirmado) return null;
  const t = telefonos.find((x) => x.id === whatsapp.telefonoId);
  return t ? t.internacional.replace(/\D/g, "") : null;
}
