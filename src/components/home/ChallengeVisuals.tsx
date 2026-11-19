"use client";

import { type CSSProperties, type ReactNode, useId } from "react";

/**
 * HOME-03 chapter diagrams (M7 diagram draw). Each renders inside a ScrollStory
 * media wrapper that carries `group` and `data-active`; elements animate with
 * `group-data-[active=true]:` and rest in their final state under reduced motion.
 * Red marks the problem, Lith-On Blue the Lith-On response. Curves without real
 * figures are labelled "Schematic". Real figures come from LITHON_DATA_VAULT.md.
 */

const EASE = "ease-[cubic-bezier(0.16,1,0.3,1)]";
const draw = `[stroke-dasharray:1] [stroke-dashoffset:1] group-data-[active=true]:[stroke-dashoffset:0] motion-safe:transition-[stroke-dashoffset] ${EASE} motion-reduce:[stroke-dashoffset:0]`;
const fade = `opacity-0 group-data-[active=true]:opacity-100 motion-safe:transition-opacity motion-safe:duration-500 motion-reduce:opacity-100`;
const growY = `[transform-box:fill-box] origin-bottom scale-y-0 group-data-[active=true]:scale-y-100 motion-safe:transition-transform motion-safe:duration-[900ms] ${EASE} motion-reduce:scale-y-100`;
const growX = `[transform-box:fill-box] origin-left scale-x-0 group-data-[active=true]:scale-x-100 motion-safe:transition-transform motion-safe:duration-700 ${EASE} motion-reduce:scale-x-100`;

const delay = (ms: number) => ({ transitionDelay: `${ms}ms` });

function Panel({ label, schematic, legend, ratio, children }: { label: string; schematic?: boolean; legend?: ReactNode; ratio: string; children: ReactNode }) {
  return (
    <div className="flex flex-col p-5 sm:p-8 lg:absolute lg:inset-0 lg:p-10">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 pr-16 lg:pr-24">
        <p className="text-small font-[500] text-ink">{label}</p>
        {schematic && <p className="text-[13px] text-ink-3">Schematic</p>}
      </div>
      {legend && <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-[13px] text-ink-2">{legend}</div>}
      <div className="relative mt-4 w-full aspect-[var(--r)] lg:aspect-auto lg:min-h-0 lg:flex-1" style={{ "--r": ratio } as CSSProperties}>{children}</div>
    </div>
  );
}

function Key({ colour, children, dashed }: { colour: string; children: ReactNode; dashed?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2">
      <span className={`inline-block h-0 w-5 border-t-2 ${colour} ${dashed ? "border-dashed" : ""}`} aria-hidden="true" />
      {children}
    </span>
  );
}

const svgCls = "absolute inset-0 h-full w-full overflow-visible";
const textCls = "fill-ink-2 text-[13px] max-sm:text-[17px]";

/** Chapter 1: annual energy cost, 500-flat society (₹6.52 Cr diesel vs ₹1.76 Cr Lith-On). */
export function DieselVisual() {
  const uid = useId();
  const base = 250;
  const h1 = 180;
  const h2 = (h1 * 1.76) / 6.52;
  return (
    <Panel label="Annual energy cost, 500-flat society, Gurugram" ratio="400 / 290">
      <svg viewBox="0 0 400 290" className={svgCls} preserveAspectRatio="xMidYMid meet" role="img" aria-labelledby={`${uid}-t`}>
        <title id={`${uid}-t`}>Annual energy cost fell from ₹6.52 crore with diesel generators to ₹1.76 crore with Lith-On BESS</title>
        <line x1="30" x2="370" y1={base} y2={base} className="stroke-line-strong" strokeWidth="1" />
        <rect x="70" y={base - h1} width="96" height={h1} rx="4" className={`fill-lithon-red ${growY}`} />
        <rect x="234" y={base - h2} width="96" height={h2} rx="4" className={`fill-lithon-blue ${growY}`} style={delay(250)} />
        <text x="118" y={base - h1 - 12} textAnchor="middle" className={`fill-ink text-[18px] max-sm:text-[22px] font-[500] ${fade}`} style={delay(500)}>₹6.52 Cr</text>
        <text x="282" y={base - h2 - 12} textAnchor="middle" className={`fill-ink text-[18px] max-sm:text-[22px] font-[500] ${fade}`} style={delay(700)}>₹1.76 Cr</text>
        <text x="282" y={base - h2 - 44} textAnchor="middle" className={`fill-lithon-blue text-[15px] max-sm:text-[19px] font-[600] ${fade}`} style={delay(900)}>73% lower</text>
        <text x="118" y={base + 24} textAnchor="middle" className={textCls}>Diesel generators</text>
        <text x="282" y={base + 24} textAnchor="middle" className={textCls}>Lith-On BESS</text>
      </svg>
    </Panel>
  );
}

/** Chapter 2: load spikes shaved under the contracted demand limit (schematic). */
export function PeakVisual() {
  const uid = useId();
  const raw = "M30 205 L70 195 L100 170 L120 90 L135 165 L170 160 L200 150 L215 70 L232 150 L270 160 L300 100 L315 170 L370 200";
  const shaved = "M30 205 L70 195 L100 170 L112.5 120 L126 120 L135 165 L170 160 L200 150 L205.6 120 L225.6 120 L232 150 L270 160 L290 120 L304.3 120 L315 170 L370 200";
  return (
    <Panel
      label="Grid draw across a working day"
      ratio="400 / 260"
      schematic
      legend={
        <>
          <Key colour="border-lithon-red">Without storage</Key>
          <Key colour="border-lithon-blue">With Lith-On</Key>
          <Key colour="border-ink-3" dashed>Contracted limit</Key>
        </>
      }
    >
      <svg viewBox="0 0 400 260" className={svgCls} preserveAspectRatio="xMidYMid meet" role="img" aria-labelledby={`${uid}-t`}>
        <title id={`${uid}-t`}>Three demand spikes rise above the contracted limit; with Lith-On the battery covers each spike and grid draw stays under the limit</title>
        <line x1="30" x2="370" y1="235" y2="235" className="stroke-line-strong" strokeWidth="1" />
        <line x1="30" x2="370" y1="120" y2="120" className="stroke-ink-3" strokeWidth="1" strokeDasharray="5 5" />
        <path d={raw} pathLength={1} fill="none" strokeWidth="2" strokeLinejoin="round" className={`stroke-lithon-red/70 ${draw} motion-safe:duration-[1100ms]`} />
        {["M112.5 120 L120 90 L126 120 Z", "M205.6 120 L215 70 L225.6 120 Z", "M290 120 L300 100 L304.3 120 Z"].map((d, i) => (
          <path key={d} d={d} className={`fill-lithon-blue/20 ${fade}`} style={delay(1200 + i * 120)} />
        ))}
        <path d={shaved} pathLength={1} fill="none" strokeWidth="3" strokeLinejoin="round" className={`stroke-lithon-blue ${draw} motion-safe:duration-[1100ms]`} style={delay(500)} />
        <text x="215" y="58" textAnchor="middle" className={`fill-lithon-blue text-[12px] max-sm:text-[16px] font-[600] ${fade}`} style={delay(1500)}>Battery covers the spike</text>
      </svg>
    </Panel>
  );
}

/** Chapter 3: power to critical loads when the grid fails (schematic timeline). */
export function OutageVisual() {
  const uid = useId();
  return (
    <Panel label="Power to critical loads when the grid fails" ratio="400 / 280" schematic>
      <svg viewBox="0 0 400 280" className={svgCls} preserveAspectRatio="xMidYMid meet" role="img" aria-labelledby={`${uid}-t`}>
        <title id={`${uid}-t`}>When the grid fails, Lith-On keeps power on with a cutover under 10 milliseconds; a diesel generator leaves 10 to 30 seconds without power</title>
        <line x1="150" x2="150" y1="40" y2="270" className="stroke-ink-3" strokeWidth="1" strokeDasharray="4 4" />
        <text x="150" y="28" textAnchor="middle" className="fill-ink-2 text-[13px] max-sm:text-[17px] font-[500]">Grid fails</text>

        <text x="30" y="82" className="fill-ink text-[13px] max-sm:text-[17px] font-[500]">Lith-On BESS</text>
        <line x1="30" x2="370" y1="132" y2="132" className="stroke-line" strokeWidth="1" />
        <path d="M30 100 H148 L150 105 L152 100 H370" pathLength={1} fill="none" strokeWidth="3" strokeLinejoin="round" className={`stroke-lithon-blue ${draw} motion-safe:duration-[1200ms]`} />
        <text x="160" y="94" className={`fill-lithon-blue text-[13px] max-sm:text-[17px] font-[600] ${fade}`} style={delay(900)}>Under 10 ms</text>

        <text x="30" y="182" className="fill-ink text-[13px] max-sm:text-[17px] font-[500]">Diesel generator</text>
        <line x1="30" x2="370" y1="250" y2="250" className="stroke-line" strokeWidth="1" />
        <path d="M30 200 H150 V250 H292 V200 H370" pathLength={1} fill="none" strokeWidth="3" strokeLinejoin="round" className={`stroke-lithon-red ${draw} motion-safe:duration-[1200ms]`} style={delay(300)} />
        <rect x="152" y="203" width="138" height="45" className={`fill-lithon-red/10 ${fade}`} style={delay(1200)} />
        <text x="221" y="231" textAnchor="middle" className={`fill-lithon-red-ink text-[13px] max-sm:text-[17px] font-[600] ${fade}`} style={delay(1300)}>10–30 s</text>
        <text x="221" y="272" textAnchor="middle" className={`fill-lithon-red-ink text-[12px] max-sm:text-[16px] ${fade}`} style={delay(1400)}>No power</text>
      </svg>
    </Panel>
  );
}

/** Chapter 4: midday solar stored, released in the evening (schematic day). */
export function SolarVisual() {
  const uid = useId();
  const bell = "M60 230 C 120 230, 140 70, 190 70 C 240 70, 260 230, 320 230";
  return (
    <Panel
      label="A day on site with rooftop solar"
      ratio="400 / 260"
      schematic
      legend={
        <>
          <Key colour="border-ink-2">Solar output</Key>
          <Key colour="border-ink-3" dashed>Site demand</Key>
        </>
      }
    >
      <svg viewBox="0 0 400 260" className={svgCls} preserveAspectRatio="xMidYMid meet" role="img" aria-labelledby={`${uid}-t`}>
        <title id={`${uid}-t`}>Solar output above site demand at midday is stored in the battery and released in the evening</title>
        <defs>
          <clipPath id={`${uid}-clip`}>
            <rect x="0" y="0" width="400" height="160" />
          </clipPath>
        </defs>
        <line x1="30" x2="380" y1="230" y2="230" className="stroke-line-strong" strokeWidth="1" />
        <path d={`${bell} Z`} clipPath={`url(#${uid}-clip)`} className={`fill-lithon-blue/25 ${fade}`} style={delay(1000)} />
        <rect x="320" y="160" width="60" height="70" className={`fill-lithon-blue ${growX}`} style={delay(1400)} />
        <line x1="30" x2="380" y1="160" y2="160" className="stroke-ink-3" strokeWidth="1.5" strokeDasharray="5 5" />
        <path d={bell} pathLength={1} fill="none" strokeWidth="2.5" className={`stroke-ink-2 ${draw} motion-safe:duration-[1100ms]`} />
        <text x="190" y="52" textAnchor="middle" className={`fill-lithon-blue text-[13px] max-sm:text-[17px] font-[600] ${fade}`} style={delay(1100)}>Stored at midday</text>
        <text x="380" y="122" textAnchor="end" className={`fill-lithon-blue text-[13px] max-sm:text-[17px] font-[600] ${fade}`} style={delay(1500)}>Released</text>
        <text x="380" y="141" textAnchor="end" className={`fill-lithon-blue text-[13px] max-sm:text-[17px] font-[600] ${fade}`} style={delay(1550)}>in the evening</text>
        {[["60", "6 am"], ["190", "Noon"], ["320", "6 pm"], ["380", "10 pm"]].map(([x, t]) => (
          <text key={t} x={x} y="252" textAnchor="middle" className="fill-ink-3 text-[12px] max-sm:text-[16px]">{t}</text>
        ))}
      </svg>
    </Panel>
  );
}
