"use client";

import { ChevronDown } from "lucide-react";
import { animate } from "motion";
import { useEffect, useId, useRef, useState } from "react";
import { EASE_OUT, prefersReducedMotion } from "@/components/motion/motion-env";
import { Button } from "@/components/system/Button";
import { cn } from "@/lib/utils";
import { ASSUMPTIONS, EXAMPLES, estimateSavings, formatInr, type SavingsInput } from "@/lib/savings";

/**
 * CAL-02/03/04 (audit §6.12). Two panes: inputs on the left as sliders with
 * live values; results on the right (sticky on desktop) as large figures that
 * tween, annual cost bars, and a 10-year cash line that redraws as inputs
 * change. The methodology is a disclosure under the results (CAL-03) and the
 * closing is the inline "Send me this as a proposal" action (CAL-04).
 * Formulas: src/lib/savings.ts (content/calculator-data.json).
 */

const YEARS = 10;
const DEFAULTS: SavingsInput = { ...EXAMPLES[1].input, dieselPrice: ASSUMPTIONS.dieselPrice, gridRate: ASSUMPTIONS.gridRate };
const nf = (n: number, digits = 0) => n.toLocaleString("en-IN", { maximumFractionDigits: digits, minimumFractionDigits: digits });

/** Tweens a displayed number to its new value (M3 style); instant under reduced motion. */
function useTween(value: number) {
  const [shown, setShown] = useState(value);
  const current = useRef(value);
  useEffect(() => {
    if (prefersReducedMotion() || current.current === value) {
      current.current = value;
      setShown(value);
      return;
    }
    const controls = animate(current.current, value, {
      duration: 0.5,
      ease: EASE_OUT,
      onUpdate: (v) => {
        current.current = v;
        setShown(v);
      },
    });
    return () => controls.stop();
  }, [value]);
  return shown;
}

interface SliderProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  unit: string;
  digits?: number;
  prefix?: string;
  onChange: (v: number) => void;
}

function Slider({ label, value, min, max, step, unit, digits = 0, prefix = "", onChange }: SliderProps) {
  const id = useId();
  const text = `${prefix}${nf(value, digits)} ${unit}`;
  return (
    <div className="border-t border-line py-5">
      <div className="flex items-baseline justify-between gap-4">
        <label htmlFor={id} className="text-body font-[500] text-ink">
          {label}
        </label>
        <output htmlFor={id} className="tabular text-heading-3 whitespace-nowrap text-ink">
          {text}
        </output>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        aria-valuetext={text}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-2 h-11 w-full cursor-pointer accent-lithon-blue"
      />
      <div className="flex justify-between text-small text-ink-3 tabular" aria-hidden="true">
        <span>
          {prefix}
          {nf(min, digits)}
        </span>
        <span>
          {prefix}
          {nf(max, digits)} {unit}
        </span>
      </div>
    </div>
  );
}

/** Cumulative cash position over ten years: starts at −capex, rises by the annual saving. */
function PaybackChart({ capex, savings, payback }: { capex: number; savings: number; payback: number | null }) {
  const W = 560;
  const H = 200;
  const PAD_T = 12;
  const PAD_B = 12;
  const end = savings * YEARS - capex;
  const max = Math.max(end, 0, -capex * 0.05);
  const min = Math.min(-capex, end);
  const y = (v: number) => PAD_T + ((max - v) / (max - min || 1)) * (H - PAD_T - PAD_B);
  const zero = y(0);
  const d = `M 0 ${y(-capex).toFixed(1)} L ${W} ${y(end).toFixed(1)}`;
  const pbPct = payback !== null && payback <= YEARS ? (payback / YEARS) * 100 : null;
  const morph = "motion-safe:[transition:d_500ms_cubic-bezier(0.16,1,0.3,1),cx_500ms_cubic-bezier(0.16,1,0.3,1),cy_500ms_cubic-bezier(0.16,1,0.3,1)]";
  const summary =
    pbPct === null
      ? `Cash position over ten years: starts at ${formatInr(-capex)} and does not break even within ten years.`
      : `Cash position over ten years: starts at ${formatInr(-capex)}, breaks even after ${nf(payback ?? 0, 1)} years and reaches ${formatInr(end)} after ten years.`;

  return (
    <figure>
      <div className="flex items-baseline justify-between gap-4 text-small">
        <span className="text-ink-2">
          Today <span className="tabular text-ink">{formatInr(-capex)}</span>
        </span>
        <span className="text-right text-ink-2">
          After 10 years <span className="tabular font-[500] text-ink">{formatInr(end)}</span>
        </span>
      </div>
      <div className="relative mt-3">
        <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" className="block h-40 w-full overflow-visible sm:h-48" role="img" aria-label={summary}>
          <title>{summary}</title>
          <line x1="0" x2={W} y1={zero} y2={zero} className="stroke-ink-3" strokeWidth="1" vectorEffect="non-scaling-stroke" />
          <path d={d} className={cn("fill-none stroke-lithon-blue", morph)} strokeWidth="2" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
        </svg>
        {pbPct !== null && (
          <div className="pointer-events-none absolute inset-0 motion-safe:transition-transform motion-safe:duration-500" style={{ transform: `translateX(${pbPct}%)` }} aria-hidden="true">
            <span className="absolute size-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-lithon-blue bg-canvas" style={{ top: `${(zero / H) * 100}%` }} />
            <span className={cn("absolute whitespace-nowrap text-small font-[500] text-ink", pbPct > 70 ? "-translate-x-full pr-3" : "pl-3")} style={{ top: `calc(${(zero / H) * 100}% + 0.5rem)` }}>
              Break-even, year {nf(payback ?? 0, 1)}
            </span>
          </div>
        )}
      </div>
      <div className="mt-2 flex justify-between text-small text-ink-3 tabular" aria-hidden="true">
        {[0, 2, 4, 6, 8, 10].map((t) => (
          <span key={t}>{t === 10 ? "10 yrs" : t}</span>
        ))}
      </div>
      <figcaption className="mt-3 text-small text-ink-3">Cash position: system cost today, then the annual saving added each year. No fuel price rise is assumed.</figcaption>
    </figure>
  );
}

function CostBars({ dg, bess }: { dg: number; bess: number }) {
  const max = Math.max(dg, bess, 1);
  const rows = [
    { label: "Diesel generator", value: dg, colour: "bg-lithon-red" },
    { label: "Lith-On battery, charged from the grid", value: bess, colour: "bg-lithon-blue" },
  ];
  return (
    <div className="space-y-4">
      {rows.map((r) => (
        <div key={r.label}>
          <div className="flex items-baseline justify-between gap-4 text-small">
            <span className="text-ink-2">{r.label}</span>
            <span className="tabular font-[500] whitespace-nowrap text-ink">{formatInr(r.value)} / yr</span>
          </div>
          <div className="mt-2 h-2.5 rounded-full bg-surface" aria-hidden="true">
            <div
              className={cn("h-full origin-left rounded-full motion-safe:transition-transform motion-safe:duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]", r.colour)}
              style={{ transform: `scaleX(${Math.max(0.02, r.value / max)})` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export function Calculator() {
  const [input, setInput] = useState<SavingsInput>(DEFAULTS);
  const set = (key: keyof SavingsInput) => (v: number) => setInput((i) => ({ ...i, [key]: v }));
  const r = estimateSavings(input);

  const savings = useTween(r.annualSavings);
  const payback = useTween(r.paybackYears ?? 0);
  const kwh = useTween(r.bessKwh);

  const proposal = `/contact?type=assessment&from=calculator&load=${input.loadKw}&outage=${input.hours}&dgCapacity=${input.dgKva}`;
  const positive = r.annualSavings > 0;

  return (
    <div className="grid gap-12 lg:grid-cols-12 lg:gap-6">
      {/* Inputs */}
      <div className="lg:col-span-5">
        <div>
          <p className="text-small text-ink-3">Start from an example</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {EXAMPLES.map((ex) => {
              const on = ex.input.loadKw === input.loadKw && ex.input.hours === input.hours && ex.input.dgKva === input.dgKva;
              return (
                <Button key={ex.label} size="sm" variant="secondary" aria-pressed={on} className={cn(on && "border-lithon-blue text-lithon-blue")} onClick={() => setInput((i) => ({ ...i, ...ex.input }))}>
                  {ex.label}
                </Button>
              );
            })}
          </div>
        </div>

        <fieldset className="mt-10">
          <legend className="mb-1 text-heading-3 text-ink">Your site</legend>
          <Slider label="Load to back up" value={input.loadKw} min={50} max={5000} step={10} unit="kW" onChange={set("loadKw")} />
          <Slider label="Outage hours a day" value={input.hours} min={0.5} max={12} step={0.5} unit="h" digits={1} onChange={set("hours")} />
          <Slider label="Diesel generator capacity" value={input.dgKva} min={50} max={6000} step={25} unit="kVA" onChange={set("dgKva")} />
        </fieldset>

        <fieldset className="mt-8">
          <legend className="mb-1 text-heading-3 text-ink">Prices</legend>
          <Slider label="Diesel" value={input.dieselPrice} min={85} max={115} step={0.1} unit="/ litre" prefix="₹" digits={1} onChange={set("dieselPrice")} />
          <Slider label="Grid electricity" value={input.gridRate} min={4} max={12} step={0.1} unit="/ kWh" prefix="₹" digits={1} onChange={set("gridRate")} />
        </fieldset>
      </div>

      {/* Results */}
      <div className="lg:col-span-7 lg:col-start-6 lg:pl-6">
        <div className="rounded-media border border-line bg-canvas p-6 shadow-[0_1px_2px_rgba(17,24,39,0.04),0_8px_24px_-12px_rgba(17,24,39,0.12)] sm:p-10 lg:sticky lg:top-28">
          <h2 className="sr-only">Your estimate</h2>
          <div aria-live="polite" aria-atomic="true" className="sr-only">
            {positive
              ? `Estimated saving ${formatInr(r.annualSavings)} a year, payback ${nf(r.paybackYears ?? 0, 1)} years, battery about ${nf(r.bessKwh)} kWh.`
              : "At these prices the battery costs more to run than the diesel generator."}
          </div>

          <p className="text-small text-ink-2">Estimated saving a year</p>
          <p className={cn("tabular text-stat-l", positive ? "text-ink" : "text-ink-3")}>{formatInr(savings)}</p>
          {!positive && <p className="mt-2 text-small text-ink-2">At these prices the battery costs more to run than the generator. Try a higher diesel price or more outage hours.</p>}

          <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-line pt-6">
            <div>
              <dt className="text-small text-ink-2">Simple payback</dt>
              <dd className="tabular mt-1 text-heading-1 text-ink">{positive ? `${nf(payback, 1)} yrs` : "Not reached"}</dd>
            </div>
            <div>
              <dt className="text-small text-ink-2">Battery size</dt>
              <dd className="tabular mt-1 text-heading-1 text-ink">
                {nf(kwh)} <span className="text-heading-3">kWh</span>
              </dd>
            </div>
          </dl>

          <div className="mt-8 border-t border-line pt-6">
            <h3 className="mb-4 text-small font-[500] text-ink">Running cost a year</h3>
            <CostBars dg={r.dgAnnualCost} bess={r.bessAnnualCost} />
          </div>

          <div className="mt-8 border-t border-line pt-6">
            <h3 className="mb-4 text-small font-[500] text-ink">Ten years</h3>
            <PaybackChart capex={r.capex} savings={r.annualSavings} payback={r.paybackYears} />
          </div>

          <dl className="mt-8 grid gap-4 border-t border-line pt-6 text-small sm:grid-cols-3">
            <div>
              <dt className="text-ink-3">System cost (estimate)</dt>
              <dd className="tabular mt-1 text-body text-ink">{formatInr(r.capex)}</dd>
            </div>
            <div>
              <dt className="text-ink-3">Diesel avoided</dt>
              <dd className="tabular mt-1 text-body text-ink">{nf(Math.round(r.dieselLitres / 100) * 100)} L / yr</dd>
            </div>
            <div>
              <dt className="text-ink-3">CO₂ avoided</dt>
              <dd className="tabular mt-1 text-body text-ink">{nf(r.co2Tonnes)} t / yr</dd>
            </div>
          </dl>

          <div className="mt-8 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-small text-ink-2 measure">An estimate, not a quotation. Our engineers confirm the figures with a site survey.</p>
            <Button href={proposal} arrow>
              Send me this as a proposal
            </Button>
          </div>

          <details className="group mt-6 border-t border-line pt-4">
            <summary className="inline-flex min-h-11 cursor-pointer list-none items-center gap-2 text-small font-[500] text-lithon-blue [&::-webkit-details-marker]:hidden">
              How this is calculated
              <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180 motion-reduce:transition-none" aria-hidden="true" />
            </summary>
            <ul className="mt-3 space-y-2 border-l-2 border-line pl-4 text-small text-ink-2">
              <li>Energy needed a year = load × outage hours × 365.</li>
              <li>
                Diesel: {ASSUMPTIONS.litresPerKwh} litres per kWh at your diesel price, plus maintenance of ₹{ASSUMPTIONS.dgMaintenancePerKva} per kVA a year.
              </li>
              <li>
                Battery: the same energy charged from the grid at your tariff with {ASSUMPTIONS.roundTrip * 100}% round-trip efficiency, plus upkeep of ₹{ASSUMPTIONS.bessUpkeepPerKwh} per kWh
                of battery a year.
              </li>
              <li>
                Battery size covers the load for the outage hours at {ASSUMPTIONS.depthOfDischarge * 100}% depth of discharge. System cost uses ₹{nf(ASSUMPTIONS.bessCostPerKwh)} per kWh.
              </li>
              <li>Payback = system cost ÷ annual saving. CO₂ uses {ASSUMPTIONS.co2PerLitre} kg per litre of diesel.</li>
              <li>Not included: fuel price rises, financing, tax, solar, demand-charge savings and the cost of the generator itself.</li>
            </ul>
          </details>
        </div>
      </div>
    </div>
  );
}
