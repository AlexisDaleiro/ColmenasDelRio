import { enlaceTel, telefonoPrincipal } from "@/config/contacto";
import { hero } from "@/content/textos";
import { FotoPrincipal } from "./Foto";
import { Flecha, Telefono } from "./iconos";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="titulo-hero">
      <div className="contenedor hero-fila">
        <div className="hero-texto">
          <h1 id="titulo-hero" className="t-display">
            {hero.titulo.map((linea) => (
              <span key={linea} className="block">
                {linea}
              </span>
            ))}
          </h1>
          <p className="t-lead hero-apoyo">{hero.apoyo}</p>

          <div className="hero-acciones">
            <a className="btn btn-cera" href="#consulta">
              {hero.accion}
              <Flecha />
            </a>
            <a className="btn btn-linea" href={enlaceTel(telefonoPrincipal)}>
              <Telefono />
              Llamar al {telefonoPrincipal.visible}
            </a>
          </div>

          <p className="mt-5">
            <a className="enlace enlace-bloque" href="#reubicacion">
              {hero.enlaceReubicacion}
            </a>
          </p>
        </div>

        <figure className="hero-foto">
          <FotoPrincipal alt={hero.fotoAlt} />
          <figcaption>{hero.fotoPie}</figcaption>
        </figure>
      </div>
    </section>
  );
}
