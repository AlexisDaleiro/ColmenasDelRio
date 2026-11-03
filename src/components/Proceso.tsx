import { proceso } from "@/content/textos";

export function Proceso() {
  return (
    <section id="proceso" className="seccion" aria-labelledby="titulo-proceso">
      <div className="contenedor">
        <h2 id="titulo-proceso" className="t-h2 medida">
          {proceso.titulo}
        </h2>

        <ol className="pasos" role="list">
          {proceso.pasos.map((paso, i) => (
            <li key={paso.titulo} className="paso">
              <span className="paso-num" aria-hidden="true">
                {i + 1}
              </span>
              <h3 className="t-h3">{paso.titulo}</h3>
              <p>{paso.texto}</p>
            </li>
          ))}
        </ol>

        <p className="aviso">
          <span>
            <strong>{proceso.aviso.lead}</strong> {proceso.aviso.texto}
          </span>
        </p>
      </div>
    </section>
  );
}
