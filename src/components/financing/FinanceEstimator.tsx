"use client";

import { animate } from "motion";
import { type ReactNode, useEffect, useId, useRef, useState } from "react";
import { EASE_OUT, prefersReducedMotion } from "@/components/motion/motion-env";
import { Button } from "@/components/system/Button";
import { cn } from "@/lib/utils";

/**
 * FIN-03: rent and EMI estimator, modelled on Lith-On's own calculator at
 * lith-onbharat.com/calc ("Lease Cost Calculator, Ex-GST vs In-GST").
 *
 * Rent (the /calc formulas, checked against its default output: ₹1,38,73,125
 * invoice, PTPQ 62, 20 quarters → ₹7,28,927 a quarter):
 *   base             = invoice ÷ (1 + GST)
 *   quarterly rent   = PTPQ × cost basis ÷ 1,000   (basis: base, or invoice)
 *   GST credit / qtr = GST ÷ quarters              (in-GST view, if claimable)
 *   monthly          = net quarterly ÷ 3
 *   deposit, buyout  = % × cost basis
 *
 * EMI (owner, 20 Nov 2026): 10% down payment, 5-year tenure, "interest rate as
 * in /calc". /calc states its rate only as PTPQ, so the instalment applies the
 * same PTPQ to the amount financed (invoice less down payment), paid monthly:
 *   EMI = PTPQ × financed ÷ 1,000 ÷ 3
 * The equivalent annual interest rate is solved from that instalment and shown
 * for transparency (PTPQ 62 over 5 years ≈ 8.8%; 67 ≈ 12.2%, compounded monthly).
 *
 * Changes from /calc: GST fixed at 18% instead of an input; term in quarters;
 * Indian digit grouping for deposit and buyout (/calc prints ₹1,175,689).
 */

type Mode = "rent" | "emi";

const GST = 0.18;
const EMI_DOWN_PCT = 10;
const EMI_QUARTERS = 20;
const PRESETS = [
  { label: "Competitive", value: 62 },
  { label: "Conservative", value: 67 },
] as const;

const inr = (n: number) => `₹${Math.round(n).toLocaleString("en-IN")}`;

function inrShort(n: number) {
  if (n >= 1e7) {
    return `₹${(n / 1e7).toFixed(2)} Cr`;
  }
  return `₹${(n / 1e5).toFixed(1)} lakh`;
}

/** Annual nominal rate (monthly compounding) at which `payment` a month for `months` repays `principal`. */
function impliedAnnualRate(principal: number, payment: number, months: number): number {
  if (principal <= 0 || payment * months <= principal) {
    return 0;
  }
  let lo = 0;
  let hi = 1;
  for (let k = 0; k < 60; k += 1) {
    const r = (lo + hi) / 2;
    const pv = (payment * (1 - (1 + r) ** -months)) / r;
    if (pv > principal) {
      lo = r;
    } else {
      hi = r;
    }
  }
  return ((lo + hi) / 2) * 12 * 100;
}

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
  hint?: string;
  value: number;
  min: number;
  max: number;
  step: number;
  format: (v: number) => string;
  onChange: (v: number) => void;
  children?: ReactNode;
}

function Slider({ label, hint, value, min, max, step, format, onChange, children }: SliderProps) {
  const id = useId();
  return (
    <div className="border-t border-line py-4">
      <div className="flex items-baseline justify-between gap-4">
        <label htmlFor={id} className="text-body font-[500] text-ink">
          {label}
          {hint ? <span className="mt-0.5 block text-small font-[400] text-ink-3">{hint}</span> : null}
        </label>
        <output htmlFor={id} className="tabular text-heading-3 whitespace-nowrap text-ink">
          {format(value)}
        </output>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        aria-valuetext={format(value)}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-2 h-11 w-full cursor-pointer accent-lithon-blue"
      />
      {children}
    </div>
  );
}

function Row({ label, value, note }: { label: string; value: string; note?: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-line py-3">
      <dt className="text-body text-ink-2">
        {label}
        {note ? <span className="block text-small text-ink-3">{note}</span> : null}
      </dt>
      <dd className="tabular text-body font-[500] whitespace-nowrap text-ink">{value}</dd>
    </div>
  );
}

const chip =
  "min-h-9 rounded-full border border-line px-3 text-small text-ink-2 transition-colors hover:border-ink hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lithon-blue aria-pressed:border-lithon-blue aria-pressed:bg-lithon-blue aria-pressed:text-white";

const termLabel = (q: number) => `${Number.isInteger(q / 4) ? q / 4 : (q / 4).toFixed(2)} yrs · ${q} qtrs`;

export function FinanceEstimator() {
  const [mode, setMode] = useState<Mode>("rent");
  const [invoiceLakh, setInvoiceLakh] = useState(138.7);
  const [ptpq, setPtpq] = useState(62);
  const [quarters, setQuarters] = useState(20);
  const [emiQuarters, setEmiQuarters] = useState(EMI_QUARTERS);
  const [depositPct, setDepositPct] = useState(10);
  const [buyoutPct, setBuyoutPct] = useState(10);
  const [downPct, setDownPct] = useState(EMI_DOWN_PCT);
  const [credit, setCredit] = useState(true);
  const creditId = useId();

  const invoice = invoiceLakh * 1e5;
  const base = invoice / (1 + GST);
  const gst = invoice - base;

  // Rent, ex-GST view: rent is charged on the cost before GST.
  const quarterly = (ptpq * base) / 1000;
  const monthly = quarterly / 3;
  const total = quarterly * quarters;
  // Rent, in-GST view: rent on the GST-inclusive cost, less the GST credit spread over the term.
  const inMonthly = ((ptpq * invoice) / 1000 - (credit ? gst / quarters : 0)) / 3;
  const diff = inMonthly - monthly;
  const breakEven = 1000 / quarters;

  // EMI: same PTPQ on the amount financed, paid monthly.
  const down = (downPct / 100) * invoice;
  const financed = invoice - down;
  const emi = (ptpq * financed) / 1000 / 3;
  const emiMonths = emiQuarters * 3;
  const emiTotal = emi * emiMonths;
  const rate = impliedAnnualRate(financed, emi, emiMonths);

  const headline = mode === "rent" ? monthly : emi;
  const shown = useTween(headline);

  const ptpqSlider = (
    <Slider
      label={mode === "rent" ? "Lease rate (PTPQ)" : "Finance rate (PTPQ)"}
      hint="Payment per ₹1,000 financed, per quarter"
      value={ptpq}
      min={40}
      max={90}
      step={0.5}
      format={(v) => v.toFixed(1)}
      onChange={setPtpq}
    >
      <fieldset className="mt-1 flex flex-wrap gap-2">
        <legend className="sr-only">Rate presets</legend>
        {PRESETS.map((p) => (
          <button key={p.value} type="button" aria-pressed={ptpq === p.value} onClick={() => setPtpq(p.value)} className={chip}>
            {p.label} ({p.value})
          </button>
        ))}
      </fieldset>
    </Slider>
  );

  return (
    <div>
      <fieldset className="mb-8 inline-flex rounded-full border border-line p-1">
        <legend className="sr-only">Financing model</legend>
        {(
          [
            ["rent", "Rent"],
            ["emi", "EMI"],
          ] as const
        ).map(([key, label]) => (
          <button
            key={key}
            type="button"
            aria-pressed={mode === key}
            onClick={() => setMode(key)}
            className={cn(
              "min-h-10 min-w-24 rounded-full px-5 text-body font-[500] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lithon-blue",
              mode === key ? "bg-ink text-white" : "text-ink-2 hover:text-ink"
            )}
          >
            {label}
          </button>
        ))}
      </fieldset>

      <div className="grid gap-10 lg:grid-cols-12 lg:gap-6">
        <div className="lg:col-span-6">
          <Slider
            label="System cost"
            hint="Invoice value including 18% GST"
            value={invoiceLakh}
            min={5}
            max={1500}
            step={0.5}
            format={(v) => inrShort(v * 1e5)}
            onChange={setInvoiceLakh}
          />
          {ptpqSlider}
          {mode === "rent" ? (
            <>
              <Slider label="Lease term" value={quarters} min={4} max={28} step={1} format={termLabel} onChange={setQuarters} />
              <Slider label="Security deposit" value={depositPct} min={0} max={30} step={1} format={(v) => `${v}%`} onChange={setDepositPct} />
              <Slider label="Buyout at end of term" value={buyoutPct} min={0} max={30} step={1} format={(v) => `${v}%`} onChange={setBuyoutPct} />
              <div className="flex items-center justify-between gap-4 border-t border-line py-4">
                <label htmlFor={creditId} className="text-body font-[500] text-ink">
                  GST credit claimable
                  <span className="mt-0.5 block text-small font-[400] text-ink-3">Used in the GST-inclusive comparison</span>
                </label>
                <button
                  id={creditId}
                  type="button"
                  role="switch"
                  aria-checked={credit}
                  onClick={() => setCredit((c) => !c)}
                  className="relative inline-flex h-7 w-12 shrink-0 items-center rounded-full bg-line-strong transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lithon-blue aria-checked:bg-lithon-blue"
                >
                  <span
                    aria-hidden="true"
                    className={cn("h-5 w-5 rounded-full bg-white shadow transition-transform motion-reduce:transition-none", credit ? "translate-x-6" : "translate-x-1")}
                  />
                </button>
              </div>
            </>
          ) : (
            <>
              <Slider label="Down payment" hint="Standard: 10%" value={downPct} min={10} max={50} step={5} format={(v) => `${v}%`} onChange={setDownPct} />
              <Slider label="Tenure" hint="Standard: 5 years" value={emiQuarters} min={4} max={28} step={4} format={termLabel} onChange={setEmiQuarters} />
            </>
          )}
        </div>

        <div className="lg:col-span-5 lg:col-start-8">
          <div className="lg:sticky lg:top-28" aria-live="polite">
            <p className="text-small text-ink-3">{mode === "rent" ? "Monthly rent, excluding GST" : "Monthly EMI"}</p>
            <p className="tabular mt-2 text-stat-l text-ink">{inr(shown)}</p>

            {mode === "rent" ? (
              <>
                <p className="mt-2 text-small text-ink-2">
                  {inr(quarterly)} a quarter for {quarters / 4} {quarters === 4 ? "year" : "years"}
                </p>
                <dl className="mt-6 border-t border-line">
                  <Row label="Total rent over the term" value={inr(total)} note="Excludes deposit and buyout" />
                  <Row label={`Security deposit (${depositPct}%)`} value={inr((depositPct / 100) * base)} />
                  <Row label={`Buyout (${buyoutPct}%)`} value={inr((buyoutPct / 100) * base)} note="To own the system at the end of the term" />
                  <Row label="Cost before GST" value={inr(base)} note={`GST of ${inr(gst)} excluded`} />
                </dl>
                <div className="mt-6 rounded-media bg-surface p-5">
                  <p className="text-small font-[500] text-ink">If rent were charged on the GST-inclusive cost</p>
                  <p className="mt-1 text-small text-ink-2">
                    <span className="tabular font-[500] text-ink">{inr(inMonthly)}</span> a month{credit ? ", net of GST credit" : ""}: {inr(Math.abs(diff))}{" "}
                    {diff >= 0 ? "more" : "less"} than the ex-GST rent.
                    {credit ? ` At this term the two are equal at a PTPQ of ${breakEven.toFixed(1)}.` : ""}
                  </p>
                </div>
              </>
            ) : (
              <>
                <p className="mt-2 text-small text-ink-2">
                  for {emiMonths} months · about {rate.toFixed(1)}% a year
                </p>
                <dl className="mt-6 border-t border-line">
                  <Row label={`Down payment (${downPct}%)`} value={inr(down)} />
                  <Row label="Amount financed" value={inr(financed)} />
                  <Row label="Total of instalments" value={inr(emiTotal)} />
                  <Row label="Interest over the tenure" value={inr(Math.max(0, emiTotal - financed))} note="Equivalent annual rate, compounded monthly" />
                </dl>
              </>
            )}

            <p className="mt-6 text-small text-ink-3">
              Illustrative figures. Final terms are set by the financing partner.
              {mode === "rent" ? " The GST-inclusive view assumes the GST credit is claimable; confirm tax treatment with your accountant." : ""}
            </p>
            <div className="mt-3">
              <Button href="/calculator" variant="tertiary">
                Compare with your diesel savings
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
