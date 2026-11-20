import { ActiveOnView } from "@/components/motion/ActiveOnView";

/**
 * SRV-04: field response zones as a schematic, not a map. Three nested rings
 * around the Noida hub fade in from the centre when they enter view (M7; final
 * state under reduced motion or without JavaScript). Dispatch times from
 * content/warranty-and-support.md. The same facts are listed beside it as
 * text, so the drawing is decorative for screen readers.
 */

const ZONES = [
  { r: 170, label: "Pan-India", time: "48 h", fill: "fill-lithon-blue/[0.04]" },
  { r: 116, label: "Tier-1 cities", time: "24 h", fill: "fill-lithon-blue/[0.08]" },
  { r: 62, label: "Delhi-NCR", time: "4–8 h", fill: "fill-lithon-blue/[0.14]" },
];

const C = 200;

export function ResponseZones() {
  return (
    <ActiveOnView>
      <figure>
        <svg viewBox="0 0 400 400" className="mx-auto block w-full max-w-[460px]" aria-hidden="true">
          {ZONES.map((z, i) => (
            <g
              key={z.label}
              className="opacity-0 group-data-[active=true]:opacity-100 motion-safe:transition-opacity motion-safe:duration-[800ms] motion-reduce:opacity-100"
              style={{ transitionDelay: `${(ZONES.length - 1 - i) * 220}ms` }}
            >
              <circle cx={C} cy={C} r={z.r} className={`${z.fill} stroke-lithon-blue/30`} strokeWidth="1" />
              {i < ZONES.length - 1 && (
                <text x={C} y={C - z.r + 26} textAnchor="middle" className="fill-ink-2 text-[14px] max-sm:text-[16px]">
                  {z.label} · <tspan className="fill-ink font-[600]">{z.time}</tspan>
                </text>
              )}
            </g>
          ))}
          <g className="opacity-0 group-data-[active=true]:opacity-100 motion-safe:transition-opacity motion-safe:duration-[800ms] motion-reduce:opacity-100">
            <text x={C} y={C - 16} textAnchor="middle" className="fill-ink-2 text-[14px] max-sm:text-[16px]">
              Delhi-NCR · <tspan className="fill-ink font-[600]">4–8 h</tspan>
            </text>
            <circle cx={C} cy={C + 10} r="5" className="fill-lithon-blue" />
            <text x={C} y={C + 34} textAnchor="middle" className="fill-lithon-blue text-[13px] max-sm:text-[15px] font-[500]">
              Noida hub
            </text>
          </g>
        </svg>
        <figcaption className="mt-3 text-center text-small text-ink-3">Schematic, not to scale: on-site response time after a critical alert.</figcaption>
      </figure>
    </ActiveOnView>
  );
}
