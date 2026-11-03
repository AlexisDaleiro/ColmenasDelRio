import { correo, enlaceTel, modoDemo, telefonos } from "@/config/contacto";
import { pie } from "@/content/textos";
import { Marca } from "./Marca";

export function PieDePagina() {
  return (
    <footer className="pie">
      <div className="contenedor">
        <div className="pie-rejilla">
          <div>
            <Marca />
            <p className="medida" style={{ marginTop: "1rem", maxWidth: "26rem" }}>
              {pie.descripcion}
            </p>
          </div>

          <nav aria-label="Pie de página">
            <p className="font-bold">Secciones</p>
            <ul className="pie-lista">
              {pie.navegacion.map((n) => (
                <li key={n.destino}>
                  <a href={n.destino}>{n.etiqueta}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="font-bold">Contacto</p>
            <ul className="pie-lista">
              {telefonos.map((t) => (
                <li key={t.id}>
                  <a href={enlaceTel(t)}>
                    <span className="sr-only">Llamar al </span>
                    {t.visible}
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${correo}`} style={{ overflowWrap: "anywhere" }}>
                  <span className="sr-only">Escribir a </span>
                  {correo}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {modoDemo && <p className="pie-aparte">{pie.propuesta}</p>}
      </div>
    </footer>
  );
}
