export type Observacion = "abejas" | "avispas" | "no-se";

export type DatosConsulta = {
  observo: Observacion | "";
  localidad: string;
  donde: string;
  mas: string;
};

export const limites = { localidad: 80, donde: 120, mas: 300 } as const;

const limpiar = (texto: string) => texto.replace(/\s+/g, " ").trim();
const conPunto = (texto: string) => (/[.!?…]$/.test(texto) ? texto : `${texto}.`);
const minuscula = (texto: string) => texto.charAt(0).toLowerCase() + texto.slice(1);

// Si la persona ya empieza con una preposición de lugar ("debajo del alero"), no se antepone "en".
const yaTienePreposicion =
  /^(en|a|al|bajo|debajo|sobre|encima|detr[aá]s|dentro|fuera|junto|cerca|lejos|arriba|abajo|frente|entre|contra|tras|por|desde|hacia)\b/i;

const lugar = (donde: string) => (yaTienePreposicion.test(donde) ? ` ${minuscula(donde)}` : ` en ${minuscula(donde)}`);

const lo_que_veo: Record<Observacion, string> = {
  abejas: "Veo abejas",
  avispas: "Veo avispas",
  "no-se": "Veo insectos y no sé si son abejas o avispas",
};

/** Arma el texto de la consulta. Es solo un borrador: nada se envía desde acá. */
export function armarMensaje(datos: DatosConsulta): string {
  const localidad = limpiar(datos.localidad);
  const donde = limpiar(datos.donde);
  const mas = limpiar(datos.mas);

  const partes = ["Hola, quiero consultar por un retiro."];
  if (localidad) partes.push(`Estoy en ${localidad}.`);
  if (datos.observo) partes.push(`${lo_que_veo[datos.observo]}${donde ? lugar(donde) : ""}.`);
  if (mas) partes.push(conPunto(mas));
  partes.push("¿Pueden orientarme sobre cómo continuar?");
  return partes.join(" ");
}

export const enlaceWhatsApp = (numero: string, mensaje: string) =>
  `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

export const enlaceCorreo = (direccion: string, mensaje: string) =>
  `mailto:${direccion}?subject=${encodeURIComponent("Consulta por retiro de colmenas")}&body=${encodeURIComponent(mensaje)}`;
