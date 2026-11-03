import { enlaceTel, telefonoPrincipal } from "@/config/contacto";
import { navegacion } from "@/content/textos";
import { Telefono } from "./iconos";
import { Marca } from "./Marca";
import { MenuMovil } from "./MenuMovil";

export function Encabezado() {
  return (
    <header className="encabezado">
      <div className="contenedor encabezado-fila">
        <Marca />

        <nav className="nav-principal" aria-label="Principal">
          {navegacion.map((n) => (
            <a key={n.destino} href={n.destino}>
              {n.etiqueta}
            </a>
          ))}
          <a className="btn btn-cera btn-sm" href="#consulta">
            Consultar
          </a>
        </nav>

        <div className="encabezado-acciones solo-movil">
          <a
            className="btn-icono"
            href={enlaceTel(telefonoPrincipal)}
            aria-label={`Llamar al ${telefonoPrincipal.visible}`}
          >
            <Telefono />
          </a>
          <MenuMovil />
        </div>
      </div>
      {/* Sin JavaScript el menú no abre: se oculta su botón y quedan la llamada, el CTA y el pie de página. */}
      <noscript>
        <style>{".menu-boton{display:none}"}</style>
      </noscript>
    </header>
  );
}
