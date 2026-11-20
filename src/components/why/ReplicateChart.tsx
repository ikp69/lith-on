import type { CSSProperties } from "react";
import { ActiveOnView } from "@/components/motion/ActiveOnView";

/**
 * WHY-05: time a competitor would need to replicate each advantage, as
 * horizontal bars on a 0–36 month axis that grow when they enter view (M7;
 * final state under reduced motion or without JavaScript). Single series, so
 * one colour and a direct label on every row; the values are in the DOM text,
 * so the figure reads as a list without the bars. Figures from
 * content/why-lith-on.md and LITHON_DATA_VAULT.md §5.
 */

const AXIS_MAX = 36;
const TICKS = [0, 12, 24, 36];

interface Row {
  label: string;
  display: string;
  /** Solid bar end, in months. */
  months: number;
  /** Optional upper end of a range, in months (drawn lighter). */
  upTo?: number;
  /** Beyond the axis: the bar runs to the edge and fades out. */
  offScale?: boolean;
  note: string;
}

const ROWS: Row[] = [
  { label: "Manufacturing plant", display: "~18 months", months: 18, note: "Set up and calibrate a plant like our 20,000 sq. ft. Noida facility" },
  { label: "Certification trifecta", display: "24–36 months", months: 24, upTo: 36, note: "Attain IEC 61508, IEC 61850 and BIS at the same time" },
  { label: "Grid engineering experience", display: "Decades", months: AXIS_MAX, offScale: true, note: "Our team brings 40+ years of combined Indian grid experience; off this scale" },
];

const pct = (m: number) => `${(m / AXIS_MAX) * 100}%`;

/** First and last tick labels sit flush with the axis ends; the rest centre on their tick. */
function tickStyle(t: number): CSSProperties {
  if (t === 0) {
    return { left: 0 };
  }
  if (t === AXIS_MAX) {
    return { right: 0 };
  }
  return { left: pct(t), transform: "translateX(-50%)" };
}
const grow =
  "origin-left scale-x-0 group-data-[active=true]:scale-x-100 motion-safe:transition-transform motion-safe:duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:scale-x-100";

export function ReplicateChart() {
  return (
    <ActiveOnView>
      <figure>
        <ul>
          {ROWS.map((r, i) => {
            const end = r.upTo ?? r.months;
            return (
              <li key={r.label} className="border-t border-line py-6">
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                  <p className="text-body font-[500] text-ink">{r.label}</p>
                  <p className="tabular text-heading-2 text-ink">{r.display}</p>
                </div>
                <div className="relative mt-4 h-3" aria-hidden="true">
                  {/* recessive month grid */}
                  {TICKS.slice(1, -1).map((t) => (
                    <span key={t} className="absolute -inset-y-1.5 w-px bg-line" style={{ left: pct(t) }} />
                  ))}
                  <div className={`relative h-3 ${grow}`} style={{ width: pct(end), transitionDelay: `${i * 180}ms` }}>
                    {r.offScale ? (
                      <div className="h-full rounded-l-full bg-linear-to-r from-lithon-blue from-60% to-lithon-blue/0" />
                    ) : (
                      <>
                        <div className="absolute inset-y-0 left-0 rounded-full bg-lithon-blue" style={{ width: `${(r.months / end) * 100}%` }} />
                        {r.upTo && (
                          <div className="absolute inset-y-0 right-0 rounded-r-full bg-lithon-blue/30" style={{ left: `calc(${(r.months / end) * 100}% + 2px)` }} />
                        )}
                      </>
                    )}
                  </div>
                </div>
                <p className="mt-2 text-small text-ink-3">{r.note}</p>
              </li>
            );
          })}
        </ul>
        <div className="relative h-6 border-t border-line text-small text-ink-3 tabular" aria-hidden="true">
          {TICKS.map((t) => (
            <span key={t} className="absolute top-2" style={tickStyle(t)}>
              {t === AXIS_MAX ? `${t} months` : t}
            </span>
          ))}
        </div>
        <figcaption className="mt-6 text-small text-ink-3">Estimated time for a new entrant to match each capability. The lighter segment shows the range.</figcaption>
      </figure>
    </ActiveOnView>
  );
}
