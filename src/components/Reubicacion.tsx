import { reubicacion } from "@/content/textos";
import { FotoDetalle } from "./Foto";
import { FlechaAbajo } from "./iconos";

export function Reubicacion() {
  const { etapas } = reubicacion;
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

        {/* El recorrido es una lista ordenada: se lee completo sin animación ni JavaScript. */}
        <ol className="ruta" role="list" aria-label="Recorrido de una colonia de abejas que se reubica">
          {etapas.map((etapa, i) => (
            <li key={etapa.id} className="ruta-etapa">
              <div className="ruta-riel" aria-hidden="true">
                <span className="ruta-nodo" data-fin={i === etapas.length - 1 ? "" : undefined}>
                  {i === 1 && <FlechaAbajo />}
                </span>
              </div>
              <div>
                <h3 className="ruta-titulo">{etapa.titulo}</h3>
                <p className="ruta-texto">{etapa.texto}</p>
                {i === 0 && (
                  <figure className="ruta-foto">
                    <FotoDetalle alt={reubicacion.fotoAlt} />
                  </figure>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
