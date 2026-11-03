import { enlaceTel, telefonoPrincipal } from "@/config/contacto";
import { hero } from "@/content/textos";
import { EscenaApiario, SignoAbeja } from "./Escenas";
import { FotoPrincipal } from "./Foto";
import { Flecha, Telefono } from "./iconos";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="titulo-hero">
      <div className="contenedor hero-fila">
        <div className="hero-texto">
          <h1 id="titulo-hero" className="t-display">
            {hero.titulo.map((linea, i) => (
              <span key={linea} className={i === 1 ? "block text-wax-soft" : "block"}>
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

        {/* Panal de tres celdas: la fotografía real al centro y dos ilustraciones que completan el cuadro. */}
        <figure className="hero-visual">
          <div className="hero-panal">
            <div className="hex hex-principal">
              <div className="hex-int">
                <FotoPrincipal alt={hero.fotoAlt} />
              </div>
            </div>
            <div className="hex hex-a">
              <div className="hex-int">
                <EscenaApiario />
              </div>
            </div>
            <div className="hex hex-b">
              <div className="hex-int">
                <SignoAbeja />
              </div>
            </div>
            <svg className="hex-c" viewBox="0 0 100 115.5" aria-hidden="true" focusable="false">
              <polygon points="50,2 98,29 98,86 50,113 2,86 2,29" fill="none" stroke="currentColor" strokeWidth="2.5" />
            </svg>
          </div>
          <figcaption>{hero.fotoPie}</figcaption>
        </figure>
      </div>
    </section>
  );
}
