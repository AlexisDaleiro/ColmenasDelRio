import { correo, enlaceTel, telefonos } from "@/config/contacto";
import { consulta } from "@/content/textos";
import { Correo, Telefono } from "./iconos";
import { PreparadorConsulta } from "./PreparadorConsulta";

export function Consulta() {
  return (
    <section id="consulta" className="seccion" aria-labelledby="titulo-consulta">
      <div className="contenedor rejilla-12">
        <div className="consulta-intro">
          <h2 id="titulo-consulta" className="t-h2">
            {consulta.titulo}
          </h2>
          <p className="t-lead medida">{consulta.lead}</p>

          <ul className="contactos" aria-label={consulta.directo}>
            {telefonos.map((t) => (
              <li key={t.id}>
                <a className="contacto-grande" href={enlaceTel(t)}>
                  <Telefono className="icono h-6 w-6" />
                  <span>
                    <span className="sr-only">Llamar al </span>
                    {t.visible}
                  </span>
                </a>
              </li>
            ))}
            <li>
              <a className="contacto-grande correo" href={`mailto:${correo}`}>
                <Correo className="icono h-6 w-6" />
                <span>
                  <span className="sr-only">Escribir a </span>
                  {correo}
                </span>
              </a>
            </li>
          </ul>
        </div>

        <PreparadorConsulta />
      </div>
    </section>
  );
}
