"use client";

import { useState } from "react";
import { Calculator, ArrowRight, TrendingDown } from "lucide-react";
import Link from "next/link";
import calculatorData from "../../../content/calculator-data.json";

export function SavingsCalculator() {
  const [selectedPresetId, setSelectedPresetId] = useState<string>("housing-society-500");
  
  // Custom interactive parameters
  const [dgKva, setDgKva] = useState<number>(1000);
  const [runHoursDaily, setRunHoursDaily] = useState<number>(4);
  const [dieselPrice, setDieselPrice] = useState<number>(98); // ₹/L

  // Active preset data
  const preset = calculatorData.presets.find((p) => p.id === selectedPresetId) || calculatorData.presets[0];

  // Helper function to format INR currency in Crores or Lakhs
  const formatINR = (amount: number) => {
    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(2)} Cr`;
    }
    if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(2)} Lakh`;
    }
    return `₹${amount.toLocaleString("en-IN")}`;
  };

  // Dynamic calculations for custom slider mode
  const litersPerHour = dgKva * 0.24;
  const annualDieselLiters = litersPerHour * runHoursDaily * 365;
  const annualDgFuelCost = annualDieselLiters * dieselPrice;
  const annualDgMaintenance = dgKva * 450;
  const totalAnnualDgOpex = (annualDgFuelCost + annualDgMaintenance) / 10000000; // in ₹ Cr

  // BESS equivalent: ~73% OPEX reduction
  const bessEquivalentOpex = totalAnnualDgOpex * 0.27;
  const annualNetSavings = totalAnnualDgOpex - bessEquivalentOpex; // in ₹ Cr
  const estimatedCo2Tons = (annualDieselLiters * 2.68) / 1000;

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0B3388]">
            <Calculator className="h-4 w-4" />
            <span>Audited Financial Modeling</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1">
            DG Displacement &amp; BESS ROI Calculator
          </h3>
          <p className="text-xs text-gray-600 mt-1 max-w-xl">
            Compare expensive diesel generator running costs against Lith-On clean battery storage.
            Real numbers verified against NCR GRAP operating data.
          </p>
        </div>

        {/* Preset Selector */}
        <div className="flex flex-wrap gap-2">
          {calculatorData.presets.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setSelectedPresetId(p.id)}
              className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
                selectedPresetId === p.id
                  ? "bg-[#0B3388] text-white shadow-sm"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200"
              }`}
            >
              {p.name.split(" ")[0]} {p.name.split(" ")[1]}
            </button>
          ))}
        </div>
      </div>

      {/* Preset Details Card */}
      <div className="mt-6 rounded-xl border border-gray-100 bg-gray-50/80 p-5">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="rounded bg-emerald-100 text-emerald-800 text-[11px] px-2.5 py-0.5 font-bold">
                Verified Presentation Case Study
              </span>
              <span className="text-xs text-gray-500">{preset.facilityType}</span>
            </div>
            <h4 className="text-lg font-bold text-gray-900 mt-2">{preset.name}</h4>
            <p className="text-xs text-gray-600 mt-1 max-w-2xl">
              Baseline: <span className="font-semibold text-gray-800">{preset.dgCapacityKVa} kVA DG Backup</span> (Annual OPEX: {formatINR(preset.dgAnnualOpexINR ?? 0)}).
              Upgraded with <span className="text-[#0B3388] font-bold">{preset.recommendedBessCapacityKWh} kWh Lith-On BESS</span>.
            </p>
            <div className="mt-2 text-xs text-emerald-700 font-semibold">{preset.grapStatus}</div>
          </div>

          <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-gray-200 shadow-sm shrink-0">
            <div>
              <div className="text-[11px] text-gray-500 font-medium">Annual Net Savings</div>
              <div className="text-xl font-extrabold text-emerald-700">{formatINR(preset.annualSavingsINR ?? 0)}/yr</div>
            </div>
            <div className="border-l border-gray-200 pl-4">
              <div className="text-[11px] text-gray-500 font-medium">Project Payback</div>
              <div className="text-xl font-extrabold text-[#0B3388]">{preset.paybackYears} Years</div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Custom Facility Sliders */}
      <div className="mt-8 grid gap-8 lg:grid-cols-12 items-center">
        <div className="lg:col-span-6 space-y-6">
          <div className="text-xs font-bold uppercase tracking-wider text-gray-700">
            Calculate For Your Custom Facility
          </div>

          {/* DG Rating Slider */}
          <div>
            <div className="flex items-center justify-between text-xs text-gray-700 mb-2">
              <span>Installed DG Capacity</span>
              <span className="font-mono text-base font-bold text-[#0B3388]">{dgKva} kVA</span>
            </div>
            <input
              type="range"
              min="100"
              max="5000"
              step="50"
              value={dgKva}
              aria-label="Installed DG Capacity in kVA"
              suppressHydrationWarning
              onChange={(e) => setDgKva(Number(e.target.value))}
              className="w-full accent-[#0B3388] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-gray-500 mt-1 font-mono">
              <span>100 kVA (Commercial)</span>
              <span>2500 kVA</span>
              <span>5000 kVA (Campus / High-Rise)</span>
            </div>
          </div>

          {/* Run Hours Slider */}
          <div>
            <div className="flex items-center justify-between text-xs text-gray-700 mb-2">
              <span>Average Daily Power Outage / Peaking Need</span>
              <span className="font-mono text-base font-bold text-[#F74530]">{runHoursDaily} Hours/Day</span>
            </div>
            <input
              type="range"
              min="1"
              max="16"
              step="0.5"
              value={runHoursDaily}
              aria-label="Average Daily Power Outage or Peaking Need in Hours per Day"
              suppressHydrationWarning
              onChange={(e) => setRunHoursDaily(Number(e.target.value))}
              className="w-full accent-[#F74530] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-gray-500 mt-1 font-mono">
              <span>1 hr/day</span>
              <span>8 hrs/day</span>
              <span>16 hrs/day</span>
            </div>
          </div>

          {/* Diesel Fuel Cost */}
          <div>
            <div className="flex items-center justify-between text-xs text-gray-700 mb-2">
              <span>Commercial Diesel Price</span>
              <span className="font-mono text-base font-bold text-gray-900">₹{dieselPrice} / Liter</span>
            </div>
            <input
              type="range"
              min="85"
              max="115"
              step="1"
              value={dieselPrice}
              aria-label="Commercial Diesel Price in Rupees per Liter"
              suppressHydrationWarning
              onChange={(e) => setDieselPrice(Number(e.target.value))}
              className="w-full accent-[#0B3388] cursor-pointer"
            />
          </div>
        </div>

        {/* Dynamic Calculated Financial Output Card */}
        <div className="lg:col-span-6">
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
            <div className="flex items-center justify-between border-b border-gray-200 pb-3">
              <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">
                Annual Financial Impact
              </span>
              <span className="rounded bg-emerald-100 text-emerald-800 text-[10px] px-2.5 py-0.5 font-bold">
                100% CAQM GRAP Compliant
              </span>
            </div>

            <div className="mt-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-600">Estimated Current DG OPEX (Fuel + Maint):</span>
                <span className="text-sm font-mono font-bold text-red-600">
                  ₹{totalAnnualDgOpex.toFixed(2)} Cr / yr
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-600">Estimated Lith-On BESS Equivalent OPEX:</span>
                <span className="text-sm font-mono font-bold text-[#0B3388]">
                  ₹{bessEquivalentOpex.toFixed(2)} Cr / yr
                </span>
              </div>

              <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold text-emerald-800 block">
                      Estimated Direct Net Savings:
                    </span>
                    <span className="text-2xl font-black text-emerald-700">
                      ₹{annualNetSavings.toFixed(2)} Cr / year
                    </span>
                  </div>
                  <TrendingDown className="h-8 w-8 text-emerald-600" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs pt-2">
                <div className="rounded-lg bg-white p-3 border border-gray-200 shadow-xs">
                  <span className="text-[10px] text-gray-500 font-semibold uppercase block">CO2 ABATEMENT</span>
                  <span className="font-bold text-gray-900 mt-0.5 block">
                    {estimatedCo2Tons.toFixed(0)} Metric Tons / yr
                  </span>
                </div>
                <div className="rounded-lg bg-white p-3 border border-gray-200 shadow-xs">
                  <span className="text-[10px] text-gray-500 font-semibold uppercase block">BLACKOUT DELAY</span>
                  <span className="font-bold text-[#0B3388] mt-0.5 block">
                    0 ms (Instantaneous)
                  </span>
                </div>
              </div>

              <Link
                href="/contact"
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-[#0B3388] hover:bg-[#082666] px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all"
              >
                <span>Request Custom Detailed BESS Sizing Proposal</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
