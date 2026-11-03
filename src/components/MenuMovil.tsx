"use client";

import { useEffect, useRef } from "react";
import { enlaceTel, telefonoPrincipal } from "@/config/contacto";
import { navegacion } from "@/content/textos";
import { Cerrar, Menu, Telefono } from "./iconos";
import { Marca } from "./Marca";

export function MenuMovil() {
  const dialogo = useRef<HTMLDialogElement>(null);
  const boton = useRef<HTMLButtonElement>(null);

  // Si la ventana pasa al layout de escritorio con el menú abierto, se cierra.
  useEffect(() => {
    const escritorio = window.matchMedia("(min-width: 48rem)");
    const alCambiar = () => {
      if (escritorio.matches) dialogo.current?.close();
    };
    escritorio.addEventListener("change", alCambiar);
    return () => escritorio.removeEventListener("change", alCambiar);
  }, []);

  const cerrar = () => dialogo.current?.close();

  // Un enlace del menú cierra el diálogo y lleva el foco al destino, no de vuelta al botón.
  function irA(evento: React.MouseEvent<HTMLAnchorElement>, destino: string) {
    evento.preventDefault();
    cerrar();
    const elemento = document.querySelector<HTMLElement>(destino);
    if (!elemento) return;
    elemento.scrollIntoView();
    elemento.tabIndex = -1;
    elemento.focus({ preventScroll: true });
    history.pushState(null, "", destino);
  }

  return (
    <>
      <button
        ref={boton}
        type="button"
        className="btn-icono menu-boton"
        aria-haspopup="dialog"
        aria-label="Abrir menú"
        onClick={() => dialogo.current?.showModal()}
      >
        <Menu />
      </button>

      <dialog
        ref={dialogo}
        className="menu-movil"
        aria-label="Menú"
        onClick={(e) => {
          if (e.target === e.currentTarget) cerrar();
        }}
      >
        <div className="contenedor" style={{ paddingBottom: "2rem" }}>
          <div className="encabezado-fila">
            <Marca />
            <button type="button" className="btn-icono" aria-label="Cerrar menú" onClick={cerrar}>
              <Cerrar />
            </button>
          </div>

          <nav className="menu-nav" aria-label="Menú">
            {navegacion.map((n) => (
              <a key={n.destino} href={n.destino} onClick={(e) => irA(e, n.destino)}>
                {n.etiqueta}
              </a>
            ))}
            <a href="#consulta" onClick={(e) => irA(e, "#consulta")}>
              Consulta
            </a>
          </nav>

          <div style={{ display: "grid", gap: "0.75rem", marginTop: "1.75rem" }}>
            <a className="btn btn-cera" href="#consulta" onClick={(e) => irA(e, "#consulta")}>
              Consultar un retiro
            </a>
            <a className="btn btn-linea" href={enlaceTel(telefonoPrincipal)}>
              <Telefono />
              Llamar al {telefonoPrincipal.visible}
            </a>
          </div>
        </div>
      </dialog>
    </>
  );
}
