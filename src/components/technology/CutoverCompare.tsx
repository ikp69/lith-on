import { ActiveOnView } from "@/components/motion/ActiveOnView";

/**
 * TEC-04: the supply waveform when the grid fails, Lith-On vs a diesel
 * generator. Draws when it enters view (M7). One 50 Hz cycle is 20 ms, so the
 * Lith-On cutover is under half a cycle. The diesel gap (10–30 s) is not to
 * scale. Figures from LITHON_DATA_VAULT.md §2.
 */

const EASE = "ease-[cubic-bezier(0.16,1,0.3,1)]";
const draw = `[stroke-dasharray:1] [stroke-dashoffset:1] group-data-[active=true]:[stroke-dashoffset:0] motion-safe:transition-[stroke-dashoffset] motion-safe:duration-[1200ms] ${EASE} motion-reduce:[stroke-dashoffset:0]`;
const fade = "opacity-0 group-data-[active=true]:opacity-100 motion-safe:transition-opacity motion-safe:duration-500 motion-reduce:opacity-100";

function sine(x0: number, x1: number, y: number, a: number, period: number) {
  const pts: string[] = [];
  for (let x = x0; x <= x1 + 0.01; x += 2) {
    pts.push(`${pts.length ? "L" : "M"}${x.toFixed(1)} ${(y - a * Math.sin(((x - x0) / period) * 2 * Math.PI)).toFixed(1)}`);
  }
  return pts.join(" ");
}

function Row({ label, ours }: { label: string; ours: boolean }) {
  const cut = 360;
  const period = 80;
  return (
    <div className="border-t border-line py-6">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
        <p className={ours ? "text-body font-[500] text-lithon-blue" : "text-body font-[500] text-ink-2"}>{label}</p>
        <p className="tabular text-small text-ink-3">{ours ? "Under 10 ms without power" : "10–30 s without power (not to scale)"}</p>
      </div>
      <svg viewBox="0 0 900 140" className="mt-3 h-auto w-full" role="img" aria-label={ours ? "The waveform continues through the cutover, which takes under 10 milliseconds" : "The supply drops to zero for 10 to 30 seconds while the generator starts"}>
        <line x1={cut} x2={cut} y1="10" y2="130" className="stroke-lithon-red" strokeWidth="1.5" strokeDasharray="4 3" />
        <text x={cut + 6} y="20" className="fill-lithon-red text-[13px] max-sm:text-[22px]">
          Grid fails
        </text>
        <path d={sine(20, cut, 75, 45, period)} className="fill-none stroke-ink-3" strokeWidth="2" />
        {ours ? (
          <>
            <rect x={cut} y="22" width={period / 2} height="106" className={`fill-lithon-blue/10 ${fade}`} />
            <path d={sine(cut, 880, 75, 45, period)} pathLength={1} className={`fill-none stroke-lithon-blue ${draw}`} strokeWidth="2.5" />
          </>
        ) : (
          <>
            <path d={`M${cut} 75 L700 75`} pathLength={1} className={`fill-none stroke-lithon-red ${draw}`} strokeWidth="3" />
            <path d={sine(700, 880, 75, 45, period)} pathLength={1} className={`fill-none stroke-ink-2 ${draw}`} strokeWidth="2" style={{ transitionDelay: "900ms" }} />
          </>
        )}
      </svg>
    </div>
  );
}

export function CutoverCompare() {
  return (
    <ActiveOnView>
      <Row label="Lith-On system" ours />
      <Row label="Diesel generator" ours={false} />
      <div className="border-t border-line" />
    </ActiveOnView>
  );
}
