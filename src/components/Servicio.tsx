import { servicio } from "@/content/textos";
import { Flecha } from "./iconos";

export function Servicio() {
  const { abejas, avispas, noSe } = servicio;
  return (
    <section id="servicio" className="seccion" aria-labelledby="titulo-servicio">
      <div className="contenedor">
        <h2 id="titulo-servicio" className="t-h2 medida">
          {servicio.titulo}
        </h2>

        <div className="servicio-bloques">
          <article className="servicio-bloque">
            <h3 className="t-h3">{abejas.titulo}</h3>
            {abejas.parrafos.map((p) => (
              <p key={p} className="medida">
                {p}
              </p>
            ))}
            <p>
              <a className="enlace enlace-bloque" href="#reubicacion">
                {abejas.enlace}
              </a>
            </p>
          </article>

          <article className="servicio-bloque">
            <h3 className="t-h3">{avispas.titulo}</h3>
            {avispas.parrafos.map((p) => (
              <p key={p} className="medida">
                {p}
              </p>
            ))}
          </article>
        </div>

        <div className="nose">
          <h3 className="t-h3">{noSe.titulo}</h3>
          <p className="medida">{noSe.texto}</p>
          <a className="btn btn-tinta" href="#consulta" data-preseleccion="no-se">
            {noSe.accion}
            <Flecha />
          </a>
        </div>
      </div>
    </section>
  );
}
