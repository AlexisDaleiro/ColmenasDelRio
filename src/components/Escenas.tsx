import { useId } from "react";

// Ilustraciones vectoriales propias, decorativas y representativas: no son fotografías de casos reales.
// Misma paleta que el sitio más tierra de ladrillo y verde apagado para los exteriores.
const C = {
  cielo: "#efe8d6",
  cera: "#d5a13d",
  ceraClara: "#e4b655",
  ceraOscura: "#b8862c",
  tinta: "#172f35",
  rio: "#173c46",
  rioClaro: "#2c5b66",
  papel: "#fffcf6",
  mortero: "#d9c9b0",
  ladrillo: "#a65a41",
  salvia: "#8a9a72",
  salviaOscura: "#6c7f5a",
  nido: "#c8b896",
  nidoOscuro: "#a99a78",
};

type Props = { className?: string };

function Lienzo({ className = "escena", children }: Props & { children: React.ReactNode }) {
  return (
    <svg className={className} viewBox="0 0 320 240" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
      {children}
    </svg>
  );
}

function Abeja({ x, y, giro = 0, escala = 1 }: { x: number; y: number; giro?: number; escala?: number }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${giro}) scale(${escala})`}>
      <ellipse cx="-2" cy="-6" rx="6.5" ry="3.4" fill={C.papel} opacity=".9" transform="rotate(-28 -2 -6)" />
      <ellipse cx="3" cy="-6.5" rx="6.5" ry="3.4" fill={C.papel} opacity=".9" transform="rotate(-8 3 -6.5)" />
      <ellipse rx="9" ry="5.5" fill={C.ceraClara} />
      <path d="M-3 -5.2v10.4M2 -5.4v10.8" stroke={C.tinta} strokeWidth="2.6" />
      <circle cx="9.5" cy="0" r="3.4" fill={C.tinta} />
    </g>
  );
}

function Avispa({ x, y, giro = 0, escala = 1 }: { x: number; y: number; giro?: number; escala?: number }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${giro}) scale(${escala})`}>
      <ellipse cx="-1" cy="-5" rx="8" ry="2.8" fill={C.papel} opacity=".85" transform="rotate(-22 -1 -5)" />
      <ellipse cx="-9" cy="0" rx="7" ry="3.6" fill="#f0c53a" />
      <rect x="-3" y="-1" width="6" height="2" fill={C.tinta} />
      <ellipse cx="6" cy="0" rx="6" ry="3.4" fill="#f0c53a" />
      <path d="M-12 -2.5v5M-8 -3.4v6.8M5 -3.2v6.4M9 -2.4v4.8" stroke={C.tinta} strokeWidth="1.8" />
      <circle cx="12.5" cy="0" r="3" fill={C.tinta} />
    </g>
  );
}

function Sol({ x, y, r = 20 }: { x: number; y: number; r?: number }) {
  return (
    <>
      <circle cx={x} cy={y} r={r * 1.7} fill={C.cera} opacity=".16" />
      <circle cx={x} cy={y} r={r} fill={C.ceraClara} />
    </>
  );
}

/** Colmena de cajones apilados con techo de cera, vista de frente. */
function Colmena({ x, y, ancho = 44, cajones = 2 }: { x: number; y: number; ancho?: number; cajones?: number }) {
  const alto = ancho * 0.5;
  return (
    <g>
      <rect x={x - 3} y={y} width={ancho + 6} height={ancho * 0.12} fill={C.tinta} opacity=".85" />
      {Array.from({ length: cajones }, (_, i) => (
        <rect
          key={i}
          x={x}
          y={y - alto * (i + 1)}
          width={ancho}
          height={alto}
          fill={C.papel}
          stroke={C.tinta}
          strokeWidth="1.4"
        />
      ))}
      <rect x={x + ancho * 0.3} y={y - ancho * 0.1} width={ancho * 0.4} height={ancho * 0.07} rx="1" fill={C.tinta} />
      <rect x={x - 4} y={y - alto * cajones - ancho * 0.16} width={ancho + 8} height={ancho * 0.16} fill={C.cera} stroke={C.tinta} strokeWidth="1.4" />
    </g>
  );
}

/** Dónde se encuentra la colonia: pared de ladrillo con una abertura y los panales a la vista. */
export function EscenaPared({ className }: Props) {
  const id = useId();
  const r = 12.5;
  const dx = r * Math.sqrt(3);
  const filas = [4, 4, 3, 3, 2, 1];
  const celdas = filas.flatMap((n, fila) => {
    const x0 = 160 - ((n - 1) * dx) / 2;
    return Array.from({ length: n }, (_, k) => ({ cx: x0 + k * dx, cy: 86 + fila * r * 1.5, oscura: (fila + k) % 3 === 0 }));
  });
  const hex = (cx: number, cy: number) =>
    Array.from({ length: 6 }, (_, i) => {
      const a = (Math.PI / 3) * i - Math.PI / 2;
      return `${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`;
    }).join(" ");
  return (
    <Lienzo className={className}>
      <defs>
        <pattern id={`${id}-l`} width="40" height="20" patternUnits="userSpaceOnUse">
          <rect width="40" height="20" fill={C.mortero} />
          <rect x="1" y="1" width="18" height="8" fill={C.ladrillo} />
          <rect x="21" y="1" width="18" height="8" fill={C.ladrillo} />
          <rect x="-9" y="11" width="18" height="8" fill={C.ladrillo} />
          <rect x="11" y="11" width="18" height="8" fill="#9a5039" />
          <rect x="31" y="11" width="18" height="8" fill={C.ladrillo} />
        </pattern>
        <clipPath id={`${id}-a`}>
          <path d="M104 58h112v130l-14 8h-84l-14-8z" />
        </clipPath>
      </defs>
      <rect width="320" height="240" fill={`url(#${id}-l)`} />
      <rect width="320" height="34" fill="#2a3f45" />
      <rect y="34" width="320" height="10" fill="#0f2227" opacity=".35" />
      <path d="M104 58h112v130l-14 8h-84l-14-8z" fill="#0f2227" />
      <g clipPath={`url(#${id}-a)`}>
        {celdas.map((c) => (
          <polygon key={`${c.cx}-${c.cy}`} points={hex(c.cx, c.cy)} fill={c.oscura ? C.ceraOscura : C.cera} stroke="#8a6420" strokeWidth="1.3" />
        ))}
      </g>
      <Abeja x={92} y={110} giro={-20} />
      <Abeja x={236} y={92} giro={15} escala={0.9} />
      <Abeja x={224} y={160} giro={-35} escala={0.8} />
    </Lienzo>
  );
}

/** El traslado: una camioneta con colmenas por el camino. */
export function EscenaTraslado({ className }: Props) {
  return (
    <Lienzo className={className}>
      <rect width="320" height="240" fill={C.cielo} />
      <Sol x={252} y={54} />
      <path d="M0 150C50 110 90 130 140 112S250 100 320 130V240H0z" fill={C.rioClaro} opacity=".55" />
      <path d="M0 170C60 140 110 160 170 144S270 138 320 156V240H0z" fill={C.rio} opacity=".9" />
      <rect y="176" width="320" height="64" fill={C.tinta} />
      <path d="M0 208H320" stroke={C.cera} strokeWidth="3" strokeDasharray="22 16" />
      {/* Carga: tres colmenas sobre la caja */}
      <rect x="56" y="140" width="120" height="30" rx="2" fill={C.rio} stroke={C.papel} strokeWidth="1.5" />
      <g stroke={C.tinta} strokeWidth="1.3">
        {[64, 102, 140].map((x) => (
          <g key={x}>
            <rect x={x} y={124} width="28" height="16" fill={C.papel} />
            <rect x={x} y={108} width="28" height="16" fill={C.papel} />
            <rect x={x - 3} y={101} width="34" height="7" fill={C.cera} />
          </g>
        ))}
      </g>
      {/* Cabina */}
      <path d="M176 142h20l16 16v12h-36z" fill={C.cera} stroke={C.tinta} strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M184 146h9l10 11h-19z" fill={C.cielo} stroke={C.tinta} strokeWidth="1.2" />
      <rect x="52" y="168" width="162" height="6" rx="2" fill={C.tinta} />
      {[88, 190].map((cx) => (
        <g key={cx}>
          <circle cx={cx} cy="180" r="13" fill={C.tinta} stroke={C.papel} strokeWidth="1.5" />
          <circle cx={cx} cy="180" r="5" fill={C.papel} />
        </g>
      ))}
      <path d="M22 150h22M10 160h34M26 170h18" stroke={C.papel} strokeWidth="2" strokeLinecap="round" opacity=".55" />
      <Abeja x={228} y={116} giro={-10} escala={0.8} />
    </Lienzo>
  );
}

/** El destino: hilera de colmenas en un predio abierto. */
export function EscenaApiario({ className }: Props) {
  return (
    <Lienzo className={className}>
      <rect width="320" height="240" fill={C.cielo} />
      <Sol x={64} y={50} />
      <path d="M0 128C60 96 120 118 190 100S290 96 320 112V240H0z" fill={C.salvia} />
      <path d="M0 160H320V240H0z" fill={C.salviaOscura} />
      <g fill={C.salviaOscura}>
        <circle cx="262" cy="104" r="20" />
        <circle cx="282" cy="112" r="16" />
        <circle cx="244" cy="114" r="14" />
      </g>
      <rect x="260" y="118" width="5" height="22" fill={C.tinta} opacity=".7" />
      <Colmena x={96} y={150} ancho={30} />
      <Colmena x={160} y={150} ancho={30} />
      <Colmena x={222} y={152} ancho={30} />
      <Colmena x={26} y={206} ancho={52} />
      <Colmena x={112} y={210} ancho={52} />
      <Colmena x={198} y={206} ancho={52} />
      <g fill={C.ceraClara}>
        {[40, 70, 150, 180, 270, 300, 126, 240].map((x, i) => (
          <circle key={x} cx={x} cy={222 + (i % 3) * 6} r="2.2" />
        ))}
      </g>
      <Abeja x={92} y={120} giro={-18} escala={0.9} />
      <Abeja x={188} y={112} giro={12} escala={0.8} />
      <Abeja x={286} y={168} giro={-30} escala={0.8} />
    </Lienzo>
  );
}

/** Un nido de avispas colgado bajo un alero. */
export function EscenaNido({ className }: Props) {
  return (
    <Lienzo className={className}>
      <rect width="320" height="240" fill="#e9e2d0" />
      <rect width="320" height="38" fill="#2a3f45" />
      <rect y="38" width="320" height="14" fill={C.mortero} />
      <rect x="157" y="52" width="6" height="14" fill={C.nidoOscuro} />
      <ellipse cx="160" cy="126" rx="54" ry="64" fill={C.nido} />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <path
          key={i}
          d={`M${112 + i * 3} ${86 + i * 18}Q160 ${72 + i * 18 + (i % 2) * 6} ${208 - i * 3} ${86 + i * 18}`}
          fill="none"
          stroke={C.nidoOscuro}
          strokeWidth="3.5"
          strokeLinecap="round"
        />
      ))}
      <ellipse cx="160" cy="184" rx="11" ry="8" fill={C.tinta} />
      <Avispa x={92} y={150} giro={-30} />
      <Avispa x={236} y={120} giro={20} escala={0.9} />
      <Avispa x={196} y={206} giro={-10} escala={0.85} />
    </Lienzo>
  );
}

/** Abeja grande para el panal decorativo del hero. */
export function SignoAbeja({ className }: Props) {
  return (
    <svg className={className} viewBox="-18 -18 36 36" aria-hidden="true" focusable="false">
      <Abeja x={0} y={0} giro={-18} escala={1.7} />
    </svg>
  );
}
