import { preguntas } from "@/content/textos";
import { Chevron } from "./iconos";

// <details> nativo: teclado, Buscar en la página y enlaces a fragmentos funcionan sin JavaScript.
export function Preguntas() {
  return (
    <section id="preguntas" className="seccion" aria-labelledby="titulo-preguntas">
      <div className="contenedor rejilla-12">
        <div className="lg:col-span-4">
          <h2 id="titulo-preguntas" className="t-h2">
            {preguntas.titulo}
          </h2>
          <p className="mt-5 muted">{preguntas.apoyo}</p>
          <p className="mt-3">
            <a className="enlace enlace-bloque" href="#consulta">
              {preguntas.enlace}
            </a>
          </p>
        </div>

        <div className="faq lg:col-span-8 lg:col-start-5">
          {preguntas.items.map((item) => (
            <details key={item.pregunta}>
              <summary>
                <span>{item.pregunta}</span>
                <Chevron />
              </summary>
              <div className="faq-cuerpo">
                <p>{item.respuesta}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
