import type { CSSProperties } from "react";

/**
 * TEC-03 IceBattery® scroll story visual. One drawing, four states:
 * 0 sunlight heats bare steel · 1 the coating reflects near-infrared sunlight ·
 * 2 heat radiates out through the 8–13 µm window · 3 result.
 * Rendered inside a ScrollStory `group`; parts animate with
 * `group-data-[active=true]:` and show their final state under reduced motion.
 * Figures from LITHON_DATA_VAULT.md §2. Schematic, not to scale.
 */

const EASE = "ease-[cubic-bezier(0.16,1,0.3,1)]";
const draw = `[stroke-dasharray:1] [stroke-dashoffset:1] group-data-[active=true]:[stroke-dashoffset:0] motion-safe:transition-[stroke-dashoffset] motion-safe:duration-[1200ms] ${EASE} motion-reduce:[stroke-dashoffset:0]`;
const fade = "opacity-0 group-data-[active=true]:opacity-100 motion-safe:transition-opacity motion-safe:duration-[800ms] motion-reduce:opacity-100";
const d = (ms: number): CSSProperties => ({ transitionDelay: `${ms}ms` });
const label = "fill-ink-2 text-[13px] max-sm:text-[17px]";

const CAPTIONS = [
  "Without a coating, sunlight heats the steel and the cells inside",
  "A 300–400 µm ceramic coating reflects near-infrared sunlight",
  "Heat radiates out through the 8–13 µm atmospheric window",
  "The cabinet runs 15–30 °C cooler inside",
];

export function ThermalStep({ step }: { step: 0 | 1 | 2 | 3 }) {
  const coated = step > 0;
  const wave = (x: number) => `M${x} 128 q7 -9 0 -18 t0 -18 t0 -18 t0 -18`;
  return (
    <div className="flex h-full flex-col p-5 sm:p-8 lg:absolute lg:inset-0 lg:p-10">
      <div className="flex items-baseline justify-between gap-4 pr-16 lg:pr-24">
        <p className="text-small font-[500] text-ink">IceBattery® thermal shield</p>
        <p className="text-[13px] text-ink-3">Schematic</p>
      </div>
      <div className="relative mt-4 aspect-[480/320] w-full lg:aspect-auto lg:min-h-0 lg:flex-1">
        <svg viewBox="0 0 480 320" className="absolute inset-0 h-full w-full overflow-visible" role="img" aria-label={CAPTIONS[step]}>
          <title>{CAPTIONS[step]}</title>
          {/* ground */}
          <line x1="40" x2="440" y1="290" y2="290" className="stroke-line-strong" strokeWidth="1" />
          {/* sun */}
          <circle cx="70" cy="60" r="18" className="fill-none stroke-ink-3" strokeWidth="1.5" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
            <line key={a} x1="70" y1="32" x2="70" y2="26" className="stroke-ink-3" strokeWidth="1.5" strokeLinecap="round" transform={`rotate(${a} 70 60)`} />
          ))}
          {/* sunlight in */}
          <path d="M92 74 L208 140" pathLength={1} className={`fill-none stroke-lithon-red ${draw}`} strokeWidth="2" />
          <path d="M86 92 L208 186" pathLength={1} className={`fill-none stroke-lithon-red ${draw}`} strokeWidth="2" style={d(120)} />

          {/* cabinet */}
          <rect x="208" y="130" width="150" height="160" rx="6" className={coated ? "fill-white stroke-lithon-blue" : "fill-white stroke-ink-3"} strokeWidth={coated ? 6 : 2} />
          <rect x="216" y="138" width="134" height="144" rx="3" className="fill-none stroke-line" strokeWidth="1" />

          {/* step 0: heat builds inside */}
          {step === 0 && (
            <>
              <rect x="217" y="139" width="132" height="142" rx="2" className={`fill-lithon-red/15 ${fade}`} style={d(500)} />
              <text x="283" y="216" textAnchor="middle" className={`fill-lithon-red text-[15px] max-sm:text-[19px] font-[500] ${fade}`} style={d(800)}>
                Heat builds
              </text>
            </>
          )}

          {/* step 1+: reflected */}
          {coated && (
            <>
              <path d="M208 140 L126 188" pathLength={1} className={`fill-none stroke-ink-3 ${draw}`} strokeWidth="1.5" style={d(600)} />
              <path d="M208 186 L134 240" pathLength={1} className={`fill-none stroke-ink-3 ${draw}`} strokeWidth="1.5" style={d(720)} />
              <text x="40" y="270" className={`${label} ${fade}`} style={d(900)}>
                Reflected
              </text>
              <line x1="358" x2="398" y1="170" y2="170" className="stroke-lithon-blue/50" strokeWidth="1" />
              <text x="404" y="166" className={label}>
                <tspan x="404">Ceramic</tspan>
                <tspan x="404" dy="16">coating</tspan>
              </text>
            </>
          )}

          {/* step 2+: radiated */}
          {step >= 2 &&
            [244, 283, 322].map((x, i) => (
              <path key={x} d={wave(x)} pathLength={1} className={`fill-none stroke-lithon-blue ${draw}`} strokeWidth="2" strokeLinecap="round" style={d(300 + i * 140)} />
            ))}
          {step >= 2 && (
            <text x="283" y="34" textAnchor="middle" className={`${label} ${fade}`} style={d(900)}>
              Radiated at 8–13 µm
            </text>
          )}

          {/* step 3: cooler inside */}
          {step === 3 && (
            <>
              <rect x="217" y="139" width="132" height="142" rx="2" className={`fill-lithon-blue/10 ${fade}`} style={d(300)} />
              <path d="M283 168 L283 236" pathLength={1} className={`fill-none stroke-lithon-blue ${draw}`} strokeWidth="2.5" style={d(500)} />
              <path d="M273 226 L283 240 L293 226" className={`fill-none stroke-lithon-blue ${fade}`} strokeWidth="2.5" strokeLinejoin="round" style={d(1100)} />
              <text x="283" y="262" textAnchor="middle" className={`fill-lithon-blue text-[15px] max-sm:text-[19px] font-[500] ${fade}`} style={d(1200)}>
                15–30 °C cooler
              </text>
            </>
          )}
        </svg>
      </div>
    </div>
  );
}
