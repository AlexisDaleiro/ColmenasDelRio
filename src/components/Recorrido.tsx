"use client";

import { useId, useState } from "react";
import { reubicacion } from "@/content/textos";
import { EscenaApiario, EscenaNido, EscenaTraslado } from "./Escenas";
import { FotoDetalle } from "./Foto";
import { Flecha } from "./iconos";

type Caso = keyof typeof reubicacion.recorridos;
const casos = Object.keys(reubicacion.recorridos) as Caso[];

// Una imagen por etapa cuando la hay. La del hallazgo de abejas es la fotografía real del cliente.
const figuras: Record<string, React.ReactNode> = {
  hallazgo: <FotoDetalle alt={reubicacion.fotoAlt} />,
  traslado: <EscenaTraslado />,
  apiario: <EscenaApiario />,
  nido: <EscenaNido />,
};

/**
 * El visitante elige qué tiene (abejas, avispas o no sabe) y ve el recorrido que le corresponde.
 * La acción final lleva esa elección ya marcada al formulario de consulta.
 */
export function Recorrido() {
  const nombre = useId();
  const [caso, setCaso] = useState<Caso>("abejas");
  const { etapas } = reubicacion.recorridos[caso];

  return (
    <div className="recorrido">
      <fieldset className="caso">
        <legend className="caso-leyenda">{reubicacion.selector}</legend>
        <div className="caso-opciones">
          {casos.map((c) => (
            <label key={c} className="caso-opcion">
              <input type="radio" name={nombre} value={c} checked={caso === c} onChange={() => setCaso(c)} />
              {reubicacion.recorridos[c].etiqueta}
            </label>
          ))}
        </div>
      </fieldset>

      {/* Región estable: el lector de pantalla anuncia el recorrido nuevo cuando cambia la elección. */}
      <div aria-live="polite">
        <ol key={caso} className="ruta" role="list" aria-label={`Recorrido: ${reubicacion.recorridos[caso].etiqueta}`}>
          {etapas.map((etapa, i) => (
            <li key={etapa.id} className="ruta-etapa">
              <div className="ruta-riel" aria-hidden="true">
                <span className="ruta-nodo" data-fin={i === etapas.length - 1 ? "" : undefined} />
              </div>
              <div>
                <h3 className="ruta-titulo">{etapa.titulo}</h3>
                <p className="ruta-texto">{etapa.texto}</p>
                {figuras[etapa.id] && <figure className="ruta-foto">{figuras[etapa.id]}</figure>}
              </div>
            </li>
          ))}
        </ol>
      </div>

      <a className="btn btn-cera recorrido-accion" href="#consulta" data-preseleccion={caso}>
        {reubicacion.accion}
        <Flecha />
      </a>
    </div>
  );
}
