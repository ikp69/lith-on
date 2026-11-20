import { ActiveOnView } from "@/components/motion/ActiveOnView";

/**
 * WAR-04: on-site response times on one axis (0–48 hours). The axis draws and
 * the markers appear on view (M7); final state under reduced motion or without
 * JavaScript. Times from content/warranty-and-support.md. The facts are also
 * given as text in each marker label.
 */

const MAX_H = 48;
const pct = (h: number) => `${(h / MAX_H) * 100}%`;
const fade = "opacity-0 group-data-[active=true]:opacity-100 motion-safe:transition-opacity motion-safe:duration-500 motion-reduce:opacity-100";

const MARKS = [
  { from: 4, to: 8, time: "4–8 h", zone: "Delhi-NCR", align: "left" },
  { from: 24, to: 24, time: "24 h", zone: "Tier-1 cities", align: "center" },
  { from: 48, to: 48, time: "48 h", zone: "Pan-India", align: "right" },
] as const;

const alignClass = { left: "", center: "-translate-x-1/2 text-center", right: "-translate-x-full text-right" };

export function ResponseScale() {
  return (
    <ActiveOnView>
      <div className="relative pt-16 pb-14">
        <span aria-hidden="true" className="absolute top-16 right-0 left-0 h-px bg-line" />
        <span
          aria-hidden="true"
          className="absolute top-16 right-0 left-0 h-px origin-left scale-x-0 bg-ink-3 group-data-[active=true]:scale-x-100 motion-safe:transition-transform motion-safe:duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:scale-x-100"
        />
        <ul>
          {MARKS.map((m, i) => (
            <li key={m.zone} className={fade} style={{ transitionDelay: `${400 + i * 200}ms` }}>
              {m.from === m.to ? (
                <span aria-hidden="true" className="absolute top-16 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lithon-blue" style={{ left: pct(m.from) }} />
              ) : (
                <span aria-hidden="true" className="absolute top-16 h-2 -translate-y-1/2 rounded-full bg-lithon-blue" style={{ left: pct(m.from), width: `calc(${pct(m.to - m.from)})` }} />
              )}
              <span className={`absolute top-0 whitespace-nowrap ${alignClass[m.align]}`} style={{ left: pct(m.align === "left" ? m.from : m.to) }}>
                <span className="tabular block text-heading-2 text-ink">{m.time}</span>
              </span>
              <span className={`absolute top-[4.75rem] whitespace-nowrap text-small text-ink-2 ${alignClass[m.align]}`} style={{ left: pct(m.align === "left" ? m.from : m.to) }}>
                {m.zone}
              </span>
            </li>
          ))}
        </ul>
        <span aria-hidden="true" className="absolute bottom-0 left-0 text-small text-ink-3 tabular">
          0 h
        </span>
      </div>
    </ActiveOnView>
  );
}
