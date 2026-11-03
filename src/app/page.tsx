import { Consulta } from "@/components/Consulta";
import { Hero } from "@/components/Hero";
import { Preguntas } from "@/components/Preguntas";
import { Proceso } from "@/components/Proceso";
import { Reubicacion } from "@/components/Reubicacion";
import { Servicio } from "@/components/Servicio";
import { correo, telefonoPrincipal } from "@/config/contacto";
import { sitio, urlSitio } from "@/config/sitio";
import { preguntas } from "@/content/textos";

// Solo tipos y propiedades que se sostienen con información real: sin dirección, horarios, reseñas ni ratings.
const datosEstructurados = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: sitio.nombre,
      url: `${urlSitio}/`,
      description: sitio.descripcion,
      telephone: telefonoPrincipal.internacional,
      email: correo,
    },
    {
      "@type": "FAQPage",
      mainEntity: preguntas.items.map((p) => ({
        "@type": "Question",
        name: p.pregunta,
        acceptedAnswer: { "@type": "Answer", text: p.respuesta },
      })),
    },
  ],
};

export default function Inicio() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(datosEstructurados).replace(/</g, "\\u003c") }}
      />
      <Hero />
      <Servicio />
      <Reubicacion />
      <Proceso />
      <Preguntas />
      <Consulta />
    </>
  );
}
