// Todo el contenido editable de la página. Los contactos viven en src/config/contacto.ts.
// Regla de redacción: nada que el cliente no haya confirmado (ver PRODUCT.md, "Límites duros").

export const navegacion = [
  { etiqueta: "Servicio", destino: "#servicio" },
  { etiqueta: "Reubicación", destino: "#reubicacion" },
  { etiqueta: "Preguntas", destino: "#preguntas" },
] as const;

export const hero = {
  titulo: ["Retiro de colmenas.", "Reubicación de abejas."],
  apoyo: "Nos especializamos en situaciones con abejas y avispas. Conocé el servicio y consultanos por tu caso.",
  accion: "Consultar un retiro",
  enlaceReubicacion: "Ver qué pasa con las abejas que se reubican",
  fotoAlt:
    "Apicultor con traje de protección amarillo retira panales de una abertura en una pared de ladrillo, bajo el alero de una casa.",
  fotoPie: "Retiro de panales en una abertura de pared.",
} as const;

export const servicio = {
  titulo: "Qué situaciones atendemos",
  abejas: {
    titulo: "Colmenas de abejas",
    parrafos: [
      "Retiramos la colmena del lugar donde se instaló. Si se trata de una colonia rústica y el caso lo permite, se reubica.",
      "Las colonias rústicas que se reubican se trasladan a apiarios trazabilizados en distintos predios del sur de Uruguay.",
    ],
    enlace: "Ver el recorrido de la reubicación",
  },
  avispas: {
    titulo: "Nidos de avispas",
    parrafos: [
      "Evaluamos el nido y resolvemos la situación según el caso. La forma de intervenir depende de cada situación y se confirma con el equipo.",
      "Es una resolución aparte de la reubicación de abejas: el destino en apiarios corresponde solo a las colonias de abejas.",
    ],
  },
  noSe: {
    titulo: "No sé si son abejas o avispas",
    texto:
      "No hace falta que lo identifiques. Contanos qué ves y dónde, y te orientamos sobre cómo seguir. Evitá acercarte para mirar de cerca.",
    accion: "Consultar sin identificar",
  },
} as const;

export const reubicacion = {
  titulo: "El retiro es parte del recorrido.",
  lead: "Las colonias rústicas de abejas que se reubican son trasladadas a apiarios trazabilizados en distintos predios del sur de Uruguay.",
  etapas: [
    {
      id: "hallazgo",
      titulo: "El lugar del hallazgo",
      texto: "Se evalúa el caso donde la colonia se instaló y se define si corresponde retirarla y reubicarla.",
    },
    {
      id: "traslado",
      titulo: "El traslado",
      texto: "Cuando la colonia se reubica, sale del lugar del hallazgo con rumbo a un apiario.",
    },
    {
      id: "apiario",
      titulo: "El apiario de destino",
      texto: "Llega a un apiario trazabilizado, en uno de los distintos predios del sur de Uruguay.",
    },
  ],
  fotoAlt: "Panales a la vista en una abertura de pared de ladrillo durante un retiro.",
  nota: "Esquema explicativo: no es un mapa ni el seguimiento de un caso real. El destino en apiarios corresponde solo a las colonias de abejas que se reubican; los nidos de avispas se resuelven por separado.",
} as const;

export const proceso = {
  titulo: "Qué pasa después de consultar",
  pasos: [
    {
      titulo: "Nos contás qué ves",
      texto:
        "Por llamada o mensaje: en qué zona estás, qué observás y dónde se encuentra. Si ya tenés una foto, o podés sacarla sin acercarte, ayuda; si no, no hace falta.",
    },
    {
      titulo: "Evaluamos tu caso",
      texto:
        "Con esos datos te orientamos sobre cómo continuar. Las condiciones dependen de cada situación y se confirman con el equipo.",
    },
    {
      titulo: "Se define la intervención",
      texto: "Según el caso, se retira y reubica la colonia de abejas o se resuelve el nido de avispas.",
    },
  ],
  aviso: { lead: "Mientras tanto,", texto: "mantené distancia y no manipules el nido ni la colonia." },
} as const;

export const preguntas = {
  titulo: "Preguntas frecuentes",
  apoyo: "¿Tu duda no está acá? Consultanos y te orientamos.",
  enlace: "Ir a la consulta",
  items: [
    {
      pregunta: "¿También atienden situaciones con avispas?",
      respuesta:
        "Sí. Evaluamos el nido y resolvemos la situación según el caso. El destino en apiarios corresponde solo a las colonias de abejas que se reubican, no a las avispas.",
    },
    {
      pregunta: "¿Qué ocurre con las abejas que se reubican?",
      respuesta:
        "Las colonias rústicas que se reubican se trasladan a apiarios trazabilizados en distintos predios del sur de Uruguay. No todos los casos admiten la misma solución: se define al evaluar la situación.",
    },
    {
      pregunta: "¿Puedo consultar si no sé qué insecto es?",
      respuesta:
        "Sí. Contanos qué ves y dónde está, y te orientamos. No hace falta que lo identifiques ni que te acerques para mirar.",
    },
    {
      pregunta: "¿Qué información conviene aportar?",
      respuesta:
        "Tu localidad o zona, qué observás (abejas, avispas o no sabés), dónde se encuentra y cualquier dato que ayude a entender el lugar. Una foto solo si ya la tenés o podés sacarla sin acercarte.",
    },
    {
      pregunta: "¿Cómo confirmo si atienden mi zona?",
      respuesta:
        "Consultanos con tu localidad. Los apiarios de destino están en el sur del país, pero eso no define dónde se hacen los retiros: la zona de atención se confirma al consultar.",
    },
    {
      pregunta: "¿Cómo se define el costo de una intervención?",
      respuesta:
        "Depende de cada situación, por eso no hay un valor único para publicar. Consultanos con los datos de tu caso.",
    },
  ],
} as const;

export const consulta = {
  titulo: "Contanos qué ves.",
  lead: "Llamá o escribí directamente, o prepará acá tu mensaje y seguí por el canal que prefieras.",
  directo: "Contacto directo",
  panel: {
    titulo: "Preparar mi consulta",
    observo: "¿Qué observás?",
    opciones: [
      { valor: "abejas", etiqueta: "Abejas" },
      { valor: "avispas", etiqueta: "Avispas" },
      { valor: "no-se", etiqueta: "No sé si son abejas o avispas" },
    ],
    localidad: { etiqueta: "Localidad o zona", ayuda: "Alcanza con el barrio, la ciudad o el paraje." },
    donde: { etiqueta: "Dónde se encuentra", ayuda: "Por ejemplo: techo, pared, árbol, galpón." },
    mas: { etiqueta: "Algo más que debamos saber", ayuda: "Por ejemplo: altura, cuánto hace que están, si hay personas cerca." },
    opcional: "(opcional)",
    errorObservo: "Elegí una opción. Si no sabés qué son, elegí “No sé”.",
    errorLocalidad: "Escribí tu localidad o zona para que podamos orientarte.",
    preparar: "Preparar mensaje",
    nota: "Esto prepara tu consulta; no confirma una visita ni envía el mensaje automáticamente.",
  },
  resultado: {
    titulo: "Tu mensaje",
    ayuda: "Podés editarlo antes de usarlo.",
    copiar: "Copiar mensaje",
    copiado: "Mensaje copiado.",
    falloCopia:
      "No se pudo copiar automáticamente. El texto quedó seleccionado: copialo con el menú de tu teléfono o con Ctrl+C.",
    correo: "Enviar por correo",
    whatsapp: "Abrir WhatsApp",
    regenerar: "Volver a armarlo con los datos",
    foto: "Este mensaje no adjunta imágenes. Si ya tenés una foto, o podés sacarla sin acercarte, mencionalo al contactarnos.",
    preparado: "Mensaje preparado. Revisalo y elegí cómo continuar.",
  },
} as const;

export const pie = {
  descripcion: "Retiro, reubicación y resolución de situaciones con colmenas de abejas y nidos de avispas.",
  navegacion: [
    { etiqueta: "Servicio", destino: "#servicio" },
    { etiqueta: "Reubicación", destino: "#reubicacion" },
    { etiqueta: "Preguntas", destino: "#preguntas" },
    { etiqueta: "Consulta", destino: "#consulta" },
  ],
  propuesta:
    "Propuesta de rediseño. Demostración sin publicar: los pasos del proceso, las indicaciones de seguridad y los contactos están pendientes de validación del cliente.",
} as const;
