import { sitio } from "@/config/sitio";

// Marca provisoria: dos nodos unidos por una curva (del hallazgo al nuevo lugar). A validar con el cliente.
export function Marca() {
  return (
    <a className="marca" href="/" aria-label={`${sitio.nombre}, inicio`}>
      <svg width="34" height="34" viewBox="0 0 28 28" aria-hidden="true" focusable="false">
        <path d="M7 22C7 12 21 16 21 6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <circle cx="7" cy="22" r="3.4" fill="none" stroke="currentColor" strokeWidth="2.2" />
        <circle cx="21" cy="6" r="3.8" fill="#D5A13D" />
      </svg>
      <span>{sitio.nombre}</span>
    </a>
  );
}
