import { reubicacion } from "@/content/textos";
import { Recorrido } from "./Recorrido";

export function Reubicacion() {
  return (
    <section id="reubicacion" className="reubicacion seccion" aria-labelledby="titulo-reubicacion">
      <div className="contenedor rejilla-12">
        <div className="reubicacion-intro">
          <h2 id="titulo-reubicacion" className="t-h2">
            {reubicacion.titulo}
          </h2>
          <p className="t-serif text-[clamp(1.375rem,1.1rem+1.1vw,1.875rem)]">{reubicacion.lead}</p>
          <p className="nota-ruta">{reubicacion.nota}</p>
        </div>

        <Recorrido />
      </div>
    </section>
  );
}
