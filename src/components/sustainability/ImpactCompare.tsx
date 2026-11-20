import { ActiveOnView } from "@/components/motion/ActiveOnView";

/**
 * SUS-04: diesel generators vs Lith-On at one site (500-flat housing society,
 * 3,000 kVA of generators; content/sustainability.md, vault Case Study B).
 * Numeric rows get bars that grow on view (M7; final state under reduced
 * motion or without JavaScript); qualitative rows are text. A table on wide
 * screens, one block per row on phones. Direct, on-site emissions only.
 */

interface Row {
  label: string;
  diesel: string;
  lithon: string;
  /** Bar lengths as fractions of the row maximum (numeric rows only). */
  bars?: [number, number];
}

const ROWS: Row[] = [
  { label: "Diesel burned a year", diesel: "≈ 6,50,000 litres", lithon: "None on site", bars: [1, 0] },
  { label: "Direct CO₂ a year", diesel: "≈ 1,740 tonnes", lithon: "None on site", bars: [1, 0] },
  { label: "Sound level", diesel: "85–95 dB", lithon: "Below 55 dB", bars: [95 / 95, 55 / 95] },
  { label: "Exhaust at the site", diesel: "Particulates, NOx and SOx", lithon: "None" },
  { label: "During GRAP Stages II–IV", diesel: "Generator use restricted", lithon: "Keeps running" },
];

const grow =
  "origin-left scale-x-0 group-data-[active=true]:scale-x-100 motion-safe:transition-transform motion-safe:duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:scale-x-100";

function Bar({ value, colour, delay }: { value: number; colour: string; delay: number }) {
  return (
    <div className="mt-2 h-2 rounded-full bg-surface" aria-hidden="true">
      {value > 0 && <div className={`h-full rounded-full ${colour} ${grow}`} style={{ width: `${Math.max(2, value * 100)}%`, transitionDelay: `${delay}ms` }} />}
    </div>
  );
}

export function ImpactCompare() {
  return (
    <ActiveOnView>
      {/* Wide screens: table */}
      <table className="hidden w-full border-collapse text-left md:table">
        <caption className="sr-only">Diesel generators compared with a Lith-On system at a 500-flat housing society</caption>
        <thead>
          <tr className="border-b border-ink">
            <th scope="col" className="w-[28%] pb-4 text-small font-[500] text-ink-3">
              At one site
            </th>
            <th scope="col" className="w-[36%] pb-4 pr-8 text-small font-[500] text-ink">
              Diesel generators
            </th>
            <th scope="col" className="w-[36%] pb-4 text-small font-[500] text-lithon-blue">
              Lith-On system
            </th>
          </tr>
        </thead>
        <tbody>
          {ROWS.map((r, i) => (
            <tr key={r.label} className="border-b border-line align-top">
              <th scope="row" className="py-5 pr-6 text-body font-[500] text-ink">
                {r.label}
              </th>
              <td className="py-5 pr-8">
                <span className="tabular text-body text-ink">{r.diesel}</span>
                {r.bars && <Bar value={r.bars[0]} colour="bg-lithon-red" delay={i * 120} />}
              </td>
              <td className="py-5">
                <span className="tabular text-body font-[500] text-lithon-blue">{r.lithon}</span>
                {r.bars && <Bar value={r.bars[1]} colour="bg-lithon-blue" delay={i * 120 + 200} />}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Phones: one block per row */}
      <dl className="md:hidden">
        {ROWS.map((r, i) => (
          <div key={r.label} className="border-t border-line py-5">
            <dt className="text-body font-[500] text-ink">{r.label}</dt>
            <dd className="mt-3 grid grid-cols-[6.5rem_1fr] items-baseline gap-x-3 text-small">
              <span className="text-ink-3">Diesel</span>
              <span>
                <span className="tabular text-ink">{r.diesel}</span>
                {r.bars && <Bar value={r.bars[0]} colour="bg-lithon-red" delay={i * 120} />}
              </span>
            </dd>
            <dd className="mt-3 grid grid-cols-[6.5rem_1fr] items-baseline gap-x-3 text-small">
              <span className="text-lithon-blue">Lith-On</span>
              <span>
                <span className="tabular font-[500] text-lithon-blue">{r.lithon}</span>
                {r.bars && <Bar value={r.bars[1]} colour="bg-lithon-blue" delay={i * 120 + 200} />}
              </span>
            </dd>
          </div>
        ))}
      </dl>
    </ActiveOnView>
  );
}
