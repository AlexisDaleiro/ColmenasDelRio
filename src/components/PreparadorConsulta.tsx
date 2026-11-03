"use client";

import { useEffect, useId, useRef, useState } from "react";
import { correo, enlaceTel, numeroWhatsApp, telefonoPrincipal } from "@/config/contacto";
import { consulta } from "@/content/textos";
import {
  armarMensaje,
  enlaceCorreo,
  enlaceWhatsApp,
  limites,
  type DatosConsulta,
  type Observacion,
} from "@/lib/mensaje";
import { Alerta, Copiar, Correo, Mensaje, Telefono } from "./iconos";

type Errores = { observo?: string; localidad?: string };
type Aviso = { tipo: "ok" | "error"; texto: string } | null;

const inicial: DatosConsulta = { observo: "", localidad: "", donde: "", mas: "" };

/**
 * Prepara un borrador de consulta. No envía nada, no guarda datos y no usa analítica:
 * el estado vive solo en este componente y se pierde al cerrar la pestaña.
 */
export function PreparadorConsulta() {
  const id = useId();
  const { panel, resultado } = consulta;
  const whatsapp = numeroWhatsApp();

  const [datos, setDatos] = useState<DatosConsulta>(inicial);
  const [errores, setErrores] = useState<Errores>({});
  const [preparado, setPreparado] = useState(false);
  const [envios, setEnvios] = useState(0);
  const [aviso, setAviso] = useState<Aviso>(null);
  const [copia, setCopia] = useState<Aviso>(null);
  // null = el texto se deriva de los datos; con texto = la persona lo editó a mano y se respeta.
  const [editado, setEditado] = useState<string | null>(null);
  const mensaje = editado ?? armarMensaje(datos);

  const grupoObservo = useRef<HTMLFieldSetElement>(null);
  const localidadRef = useRef<HTMLInputElement>(null);
  const tituloResultado = useRef<HTMLHeadingElement>(null);
  const mensajeRef = useRef<HTMLTextAreaElement>(null);

  // Los enlaces de otras secciones con data-preseleccion marcan esa opción; el desplazamiento al ancla sigue siendo nativo.
  useEffect(() => {
    const alHacerClic = (evento: MouseEvent) => {
      const enlace = (evento.target as Element | null)?.closest<HTMLAnchorElement>("a[data-preseleccion]");
      const valor = enlace?.dataset.preseleccion;
      if (valor === "abejas" || valor === "avispas" || valor === "no-se") {
        setDatos((d) => ({ ...d, observo: valor }));
        setErrores((e) => ({ ...e, observo: undefined }));
      }
    };
    document.addEventListener("click", alHacerClic);
    return () => document.removeEventListener("click", alHacerClic);
  }, []);

  // Al preparar el mensaje el foco pasa a su título (no al campo: en el celular abriría el teclado).
  useEffect(() => {
    if (envios > 0) tituloResultado.current?.focus();
  }, [envios]);

  function cambiar(parcial: Partial<DatosConsulta>) {
    setDatos((d) => ({ ...d, ...parcial }));
    setAviso(null);
    setCopia(null);
    if (parcial.observo) setErrores((e) => ({ ...e, observo: undefined }));
    if (parcial.localidad?.trim()) setErrores((e) => ({ ...e, localidad: undefined }));
  }

  function alEnviar(evento: React.FormEvent) {
    evento.preventDefault();
    const nuevos: Errores = {};
    if (!datos.observo) nuevos.observo = panel.errorObservo;
    if (!datos.localidad.trim()) nuevos.localidad = panel.errorLocalidad;
    setErrores(nuevos);

    if (nuevos.observo) return grupoObservo.current?.querySelector("input")?.focus();
    if (nuevos.localidad) return localidadRef.current?.focus();

    setPreparado(true);
    setEnvios((n) => n + 1);
    setAviso({ tipo: "ok", texto: resultado.preparado });
  }

  async function copiar() {
    try {
      await navigator.clipboard.writeText(mensaje);
      setCopia({ tipo: "ok", texto: resultado.copiado });
    } catch {
      // Sin permiso o sin contexto seguro: se deja el texto seleccionado para copiarlo a mano.
      mensajeRef.current?.focus();
      mensajeRef.current?.select();
      setCopia({ tipo: "error", texto: resultado.falloCopia });
    }
  }

  const idObservoError = `${id}-error-observo`;
  const idLocalidadError = `${id}-error-localidad`;
  const idLocalidadAyuda = `${id}-ayuda-localidad`;
  const idTituloResultado = `${id}-resultado`;

  return (
    <form className="panel" noValidate onSubmit={alEnviar} aria-labelledby={`${id}-titulo`}>
      <h3 id={`${id}-titulo`} className="t-h3">
        {panel.titulo}
      </h3>

      <fieldset
        ref={grupoObservo}
        className="campo"
        aria-describedby={errores.observo ? idObservoError : undefined}
      >
        <legend className="campo-etiqueta">{panel.observo}</legend>
        <div className="opciones">
          {panel.opciones.map((opcion) => (
            <label key={opcion.valor} className={opcion.valor === "no-se" ? "opcion opcion-ancha" : "opcion"}>
              <input
                type="radio"
                name="observo"
                value={opcion.valor}
                checked={datos.observo === opcion.valor}
                onChange={() => cambiar({ observo: opcion.valor as Observacion })}
                aria-invalid={errores.observo ? true : undefined}
              />
              <span>{opcion.etiqueta}</span>
            </label>
          ))}
        </div>
        {errores.observo && (
          <p id={idObservoError} className="error-campo">
            <Alerta />
            {errores.observo}
          </p>
        )}
      </fieldset>

      <div className="campo">
        <label className="campo-etiqueta" htmlFor={`${id}-localidad`}>
          {panel.localidad.etiqueta}
        </label>
        <p id={idLocalidadAyuda} className="campo-ayuda">
          {panel.localidad.ayuda}
        </p>
        <input
          ref={localidadRef}
          id={`${id}-localidad`}
          className="entrada"
          type="text"
          name="localidad"
          autoComplete="address-level2"
          maxLength={limites.localidad}
          value={datos.localidad}
          onChange={(e) => cambiar({ localidad: e.target.value })}
          aria-invalid={errores.localidad ? true : undefined}
          aria-describedby={errores.localidad ? `${idLocalidadAyuda} ${idLocalidadError}` : idLocalidadAyuda}
        />
        {errores.localidad && (
          <p id={idLocalidadError} className="error-campo">
            <Alerta />
            {errores.localidad}
          </p>
        )}
      </div>

      <div className="campo">
        <label className="campo-etiqueta" htmlFor={`${id}-donde`}>
          {panel.donde.etiqueta} <span className="opcional">{panel.opcional}</span>
        </label>
        <p id={`${id}-ayuda-donde`} className="campo-ayuda">
          {panel.donde.ayuda}
        </p>
        <input
          id={`${id}-donde`}
          className="entrada"
          type="text"
          name="donde"
          maxLength={limites.donde}
          value={datos.donde}
          onChange={(e) => cambiar({ donde: e.target.value })}
          aria-describedby={`${id}-ayuda-donde`}
        />
      </div>

      <div className="campo">
        <label className="campo-etiqueta" htmlFor={`${id}-mas`}>
          {panel.mas.etiqueta} <span className="opcional">{panel.opcional}</span>
        </label>
        <p id={`${id}-ayuda-mas`} className="campo-ayuda">
          {panel.mas.ayuda}
        </p>
        <textarea
          id={`${id}-mas`}
          className="entrada"
          name="mas"
          rows={3}
          maxLength={limites.mas}
          value={datos.mas}
          onChange={(e) => cambiar({ mas: e.target.value })}
          aria-describedby={`${id}-ayuda-mas`}
        />
        <p className="contador" aria-hidden="true">
          {datos.mas.length} / {limites.mas}
        </p>
      </div>

      <div>
        <button type="submit" className="btn btn-tinta btn-bloque">
          {panel.preparar}
        </button>
        <p className="t-peq muted" style={{ marginTop: "0.9rem" }}>
          {panel.nota}
        </p>
        <p className="estado" role="status" data-tipo={aviso?.tipo}>
          {aviso?.texto}
        </p>
      </div>

      {preparado && (
        <section className="resultado" aria-labelledby={idTituloResultado}>
          <h3 id={idTituloResultado} ref={tituloResultado} tabIndex={-1} className="t-h3">
            {resultado.titulo}
          </h3>
          <p className="muted t-peq">{resultado.ayuda}</p>
          <textarea
            ref={mensajeRef}
            className="entrada"
            rows={7}
            value={mensaje}
            onChange={(e) => {
              setEditado(e.target.value);
              setCopia(null);
            }}
            aria-labelledby={idTituloResultado}
          />
          {editado !== null && (
            <button
              type="button"
              className="enlace"
              style={{ background: "none", border: 0, padding: 0, font: "inherit", cursor: "pointer" }}
              onClick={() => {
                setEditado(null);
                setCopia(null);
              }}
            >
              {resultado.regenerar}
            </button>
          )}

          <div className="resultado-acciones">
            <button type="button" className="btn btn-cera" onClick={copiar}>
              <Copiar />
              {resultado.copiar}
            </button>
            <a className="btn btn-linea" href={enlaceTel(telefonoPrincipal)}>
              <Telefono />
              Llamar al {telefonoPrincipal.visible}
            </a>
            <a className="btn btn-linea" href={enlaceCorreo(correo, mensaje)}>
              <Correo />
              {resultado.correo}
            </a>
            {whatsapp && (
              <a
                className="btn btn-linea"
                href={enlaceWhatsApp(whatsapp, mensaje)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mensaje />
                {resultado.whatsapp}
                <span className="sr-only"> (se abre en otra pestaña)</span>
              </a>
            )}
          </div>

          <p className="estado" role="status" data-tipo={copia?.tipo}>
            {copia?.texto}
          </p>

          <p className="t-peq muted">{resultado.foto}</p>
        </section>
      )}
    </form>
  );
}
