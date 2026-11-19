import type { CSSProperties } from "react";

/**
 * HOME-05 tile diagrams (M7). Each sits inside an ActiveOnView `group`; parts
 * animate with `group-data-[active=true]:` and rest in their final state
 * under reduced motion or without JavaScript. Diagrams without measured data
 * are labelled "Schematic" by the tile. Figures from LITHON_DATA_VAULT.md §2.
 */

const EASE = "ease-[cubic-bezier(0.16,1,0.3,1)]";
const draw = `[stroke-dasharray:1] [stroke-dashoffset:1] group-data-[active=true]:[stroke-dashoffset:0] motion-safe:transition-[stroke-dashoffset] motion-safe:duration-[1100ms] ${EASE} motion-reduce:[stroke-dashoffset:0]`;
const fade = "opacity-0 group-data-[active=true]:opacity-100 motion-safe:transition-opacity motion-safe:duration-500 motion-reduce:opacity-100";
const growY = `[transform-box:fill-box] origin-bottom scale-y-0 group-data-[active=true]:scale-y-100 motion-safe:transition-transform motion-safe:duration-500 ${EASE} motion-reduce:scale-y-100`;
const delay = (ms: number): CSSProperties => ({ transitionDelay: `${ms}ms` });

/** Sine path: `cycles` full waves over [x0, x1], centred on y with amplitude a. */
function sine(x0: number, x1: number, y: number, a: number, period: number, phase = 0) {
  const pts: string[] = [];
  for (let x = x0; x <= x1 + 0.01; x += 2) {
    const v = y - a * Math.sin(((x - x0) / period) * 2 * Math.PI + phase);
    pts.push(`${pts.length ? "L" : "M"}${x.toFixed(1)} ${v.toFixed(1)}`);
  }
  return pts.join(" ");
}

/** IceBattery®: sunlight reflected, heat radiated in the 8–13 µm window. Dark tile. */
export function ThermalVisual() {
  const wave = (x: number) => `M${x} 104 q6 -8 0 -16 t0 -16 t0 -16 t0 -16`;
  return (
    <svg viewBox="0 0 480 300" className="h-full w-full overflow-visible" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Sunlight is reflected by the coated cabinet and internal heat is radiated away in the 8 to 13 micrometre infrared window">
      {/* sun */}
      <g className={fade}>
        <circle cx="62" cy="58" r="18" className="fill-none stroke-on-dark-2" strokeWidth="1.5" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((d) => (
          <line key={d} x1="62" y1="30" x2="62" y2="24" className="stroke-on-dark-2" strokeWidth="1.5" strokeLinecap="round" transform={`rotate(${d} 62 58)`} />
        ))}
      </g>
      {/* incoming sunlight */}
      <path d="M84 72 L196 128" pathLength={1} className={`fill-none stroke-lithon-red ${draw}`} strokeWidth="2" />
      <path d="M78 88 L196 168" pathLength={1} className={`fill-none stroke-lithon-red ${draw}`} strokeWidth="2" style={delay(120)} />
      {/* reflected */}
      <path d="M196 128 L120 176" pathLength={1} className={`fill-none stroke-on-dark-2 ${draw}`} strokeWidth="1.5" style={delay(700)} />
      <path d="M196 168 L128 222" pathLength={1} className={`fill-none stroke-on-dark-2 ${draw}`} strokeWidth="1.5" style={delay(820)} />
      <text x="28" y="250" className={`fill-on-dark-2 text-[13px] max-sm:hidden ${fade}`} style={delay(1000)}>
        Sunlight reflected
      </text>
      {/* cabinet with coating */}
      <rect x="196" y="112" width="150" height="160" rx="6" className="fill-white/[0.04] stroke-[#8FB0FF]" strokeWidth="5" />
      <rect x="203" y="119" width="136" height="146" rx="3" className="fill-none stroke-on-dark-2/40" strokeWidth="1" />
      <line x1="346" y1="150" x2="392" y2="150" className="stroke-[#8FB0FF]/60" strokeWidth="1" />
      <text x="398" y="146" className="fill-on-dark-2 text-[13px] max-sm:hidden">
        <tspan x="398">Ceramic</tspan>
        <tspan x="398" dy="16">coating</tspan>
        <tspan x="398" dy="16">300–400 µm</tspan>
      </text>
      {/* radiated heat */}
      {[232, 271, 310].map((x, i) => (
        <path key={x} d={wave(x)} pathLength={1} className={`fill-none stroke-[#8FB0FF] ${draw}`} strokeWidth="2" strokeLinecap="round" style={delay(400 + i * 140)} />
      ))}
      <text x="271" y="22" textAnchor="middle" className={`fill-on-dark-2 text-[13px] max-sm:hidden ${fade}`} style={delay(1000)}>
        Heat radiated at 8–13 µm
      </text>
      {/* internal temperature falls */}
      <path d="M271 150 L271 228" pathLength={1} className={`fill-none stroke-white ${draw}`} strokeWidth="2" style={delay(900)} />
      <path d="M262 218 L271 230 L280 218" className={`fill-none stroke-white ${fade}`} strokeWidth="2" strokeLinejoin="round" style={delay(1500)} />
    </svg>
  );
}

/** <10 ms cutover: one 50 Hz cycle is 20 ms, so the cutover is under half a cycle. */
export function CutoverVisual() {
  const period = 80; // 20 ms
  const cut = 180;
  const band = period / 2; // 10 ms
  return (
    <svg viewBox="0 0 400 150" className="h-full w-full overflow-visible" preserveAspectRatio="xMidYMid meet" role="img" aria-label="The supply waveform continues through the switch from grid to battery, which takes under 10 milliseconds">
      <rect x={cut} y="16" width={band} height="104" className={`fill-lithon-blue/10 ${fade}`} />
      <line x1={cut} x2={cut} y1="16" y2="120" className="stroke-lithon-red" strokeWidth="1.5" strokeDasharray="4 3" />
      <text x={cut + band / 2} y="10" textAnchor="middle" className={`fill-lithon-blue text-[13px] max-sm:text-[19px] font-[500] ${fade}`} style={delay(600)}>
        &lt; 10 ms
      </text>
      <path d={sine(20, cut, 68, 38, period)} className="fill-none stroke-ink-3" strokeWidth="2" />
      <path d={sine(cut, 380, 68, 38, period)} pathLength={1} className={`fill-none stroke-lithon-blue ${draw}`} strokeWidth="2.5" style={delay(200)} />
      <text x="20" y="144" className="fill-ink-3 text-[13px] max-sm:text-[19px]">
        Grid
      </text>
      <text x="380" y="144" textAnchor="end" className="fill-ink-2 text-[13px] max-sm:text-[19px]">
        Battery
      </text>
    </svg>
  );
}

/** >6,000 cycles: sixty marks of 100 cycles each. */
export function CyclesVisual() {
  return (
    <svg viewBox="0 0 300 36" className="h-auto w-full" role="img" aria-label="Sixty marks, each representing 100 charge and discharge cycles">
      {Array.from({ length: 60 }, (_, i) => (
        <rect key={`c${i * 100}`} x={i * 5} y="0" width="3" height="36" rx="1" className={`fill-lithon-blue ${growY}`} style={delay(i * 14)} />
      ))}
    </svg>
  );
}

const STACK = [
  { abbr: "BMS", name: "Battery management", line: "Cell balancing and multi-stage protection" },
  { abbr: "PCS", name: "Power conversion", line: "Bi-directional, four-quadrant grid support" },
  { abbr: "EMS", name: "Energy management", line: "Six automatic modes, from peak shaving to backup" },
  { abbr: "SCADA", name: "Remote monitoring", line: "Cloud telemetry and automated alarms" },
];

/** In-house control stack: four layers joined by one line that draws across. */
export function StackVisual() {
  return (
    <div className="relative">
      <span
        aria-hidden="true"
        className={`absolute top-[5px] right-0 left-0 hidden h-px origin-left scale-x-0 bg-line-strong group-data-[active=true]:scale-x-100 motion-safe:transition-transform motion-safe:duration-[1100ms] ${EASE} motion-reduce:scale-x-100 md:block`}
      />
      <ol className="grid gap-6 sm:grid-cols-2 md:grid-cols-4 md:gap-8">
        {STACK.map((s, i) => (
          <li key={s.abbr} className="relative border-l border-line pl-5 md:border-l-0 md:pl-0">
            <span
              aria-hidden="true"
              className={`absolute top-1 -left-[5.5px] size-2.5 rounded-full border-2 border-lithon-blue bg-white md:static md:block ${fade}`}
              style={delay(200 + i * 220)}
            />
            <p className="tabular text-heading-3 text-ink md:mt-5">{s.abbr}</p>
            <p className="mt-1 text-small font-[500] text-ink-2">{s.name}</p>
            <p className="mt-2 text-small text-ink-3">{s.line}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
