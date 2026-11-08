"use client";

import { useState } from "react";
import { ArrowRight, TrendingDown, SlidersHorizontal, BookOpen } from "lucide-react";
import Link from "next/link";
import calculatorData from "../../../content/calculator-data.json";

export function SavingsCalculator() {
  const [calcMode, setCalcMode] = useState<"preset" | "custom">("preset");
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
      {/* Mode Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-5">
        <div className="inline-flex rounded-xl bg-gray-100 p-1">
          <button
            type="button"
            onClick={() => setCalcMode("preset")}
            className={`min-h-[44px] inline-flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-semibold transition-all ${
              calcMode === "preset"
                ? "bg-white text-lithon-blue shadow-xs"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            <BookOpen className="h-3.5 w-3.5" />
            <span>Audited Case Studies</span>
          </button>
          <button
            type="button"
            onClick={() => setCalcMode("custom")}
            className={`min-h-[44px] inline-flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-semibold transition-all ${
              calcMode === "custom"
                ? "bg-white text-lithon-blue shadow-xs"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            <SlidersHorizontal className="h-3.5 w-3.5" />
            <span>Interactive Custom Calculator</span>
          </button>
        </div>

        {calcMode === "preset" && (
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Facility Presets">
            {calculatorData.presets.map((p) => (
              <button
                key={p.id}
                type="button"
                role="tab"
                aria-selected={selectedPresetId === p.id}
                onClick={() => setSelectedPresetId(p.id)}
                className={`min-h-[44px] whitespace-nowrap rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lithon-blue ${
                  selectedPresetId === p.id
                    ? "bg-lithon-blue text-white shadow-xs"
                    : "bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {p.name.split(" ")[0]} {p.name.split(" ")[1]}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Preset View */}
      {calcMode === "preset" && (
        <div className="mt-6 space-y-6">
          <div className="rounded-xl border border-gray-100 bg-gray-50/80 p-5 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="rounded bg-emerald-100 text-emerald-800 text-xs px-2.5 py-0.5 font-bold">
                    Audited Case Study
                  </span>
                  <span className="text-xs text-gray-500 font-medium">{preset.facilityType}</span>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mt-2">{preset.name}</h4>
                <div className="text-xs text-gray-600 mt-1">
                  Displacing <strong className="text-gray-800">{preset.dgCapacityKVa} kVA DG</strong> with <strong className="text-lithon-blue">{preset.recommendedBessCapacityKWh} kWh BESS</strong> ({preset.grapStatus})
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-gray-200 shadow-sm shrink-0">
                <div>
                  <div className="text-xs text-gray-500 font-medium">Net Savings</div>
                  <div className="text-xl font-bold text-emerald-700">{formatINR(preset.annualSavingsINR ?? 0)}/yr</div>
                </div>
                <div className="border-l border-gray-200 pl-4">
                  <div className="text-xs text-gray-500 font-medium">Payback</div>
                  <div className="text-xl font-bold text-lithon-blue">{preset.paybackYears} Years</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
            <div className="text-xs text-gray-500">
              Verified operational data based on CAQM GRAP regulations and commercial tariffs.
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-lithon-blue hover:bg-lithon-blue-hover px-6 py-3 text-xs font-semibold text-white shadow-sm transition-all min-h-[44px]"
            >
              <span>Request Facility Proposal</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}

      {/* Interactive Custom Sliders View */}
      {calcMode === "custom" && (
        <div className="mt-8 grid gap-8 lg:grid-cols-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-semibold text-gray-700">
              Interactive Sizing Parameters
            </div>

            {/* DG Rating Slider */}
            <div>
              <div className="flex items-center justify-between text-xs text-gray-700 mb-2">
                <span>Installed DG Capacity</span>
                <span className="font-mono text-base font-bold text-lithon-blue">{dgKva} kVA</span>
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
                className="w-full accent-lithon-blue cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1 font-mono">
                <span>100 kVA</span>
                <span>2500 kVA</span>
                <span>5000 kVA</span>
              </div>
            </div>

            {/* Run Hours Slider */}
            <div>
              <div className="flex items-center justify-between text-xs text-gray-700 mb-2">
                <span>Daily Peaking / Backup Need</span>
                <span className="font-mono text-base font-bold text-lithon-red">{runHoursDaily} Hours/Day</span>
              </div>
              <input
                type="range"
                min="1"
                max="16"
                step="0.5"
                value={runHoursDaily}
                aria-label="Daily Peaking or Backup Need in Hours per Day"
                suppressHydrationWarning
                onChange={(e) => setRunHoursDaily(Number(e.target.value))}
                className="w-full accent-lithon-red cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1 font-mono">
                <span>1 hr</span>
                <span>8 hrs</span>
                <span>16 hrs</span>
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
                className="w-full accent-lithon-blue cursor-pointer"
              />
            </div>
          </div>

          {/* Dynamic Calculated Financial Output Card */}
          <div className="lg:col-span-6">
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
              <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                <span className="text-xs font-semibold text-gray-600">
                  Annual Financial Impact
                </span>
                <span className="rounded bg-emerald-100 text-emerald-800 text-xs px-2.5 py-0.5 font-bold">
                  100% CAQM GRAP Compliant
                </span>
              </div>

              <div className="mt-5 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-600">Current DG OPEX (Fuel + Maint):</span>
                  <span className="text-sm font-mono font-bold text-red-600">
                    ₹{totalAnnualDgOpex.toFixed(2)} Cr / yr
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-600">Lith-On BESS OPEX:</span>
                  <span className="text-sm font-mono font-bold text-lithon-blue">
                    ₹{bessEquivalentOpex.toFixed(2)} Cr / yr
                  </span>
                </div>

                <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold text-emerald-800 block">
                        Direct Net Annual Savings:
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
                    <span className="text-xs text-gray-500 font-semibold block">CO2 Abatement</span>
                    <span className="font-bold text-gray-900 mt-0.5 block">
                      {estimatedCo2Tons.toFixed(0)} Metric Tons / yr
                    </span>
                  </div>
                  <div className="rounded-lg bg-white p-3 border border-gray-200 shadow-xs">
                    <span className="text-xs text-gray-500 font-semibold block">Cutover Latency</span>
                    <span className="font-bold text-lithon-blue mt-0.5 block">
                      &lt;10 ms (Instantaneous)
                    </span>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-lithon-blue hover:bg-lithon-blue-hover px-5 py-3.5 text-xs font-semibold text-white shadow-sm transition-all min-h-[44px]"
                >
                  <span>Request Custom Sizing Proposal</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
