"use client";

import { useState, useMemo } from "react";
import { ArrowRight, TrendingDown, SlidersHorizontal, BookOpen, Download, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";
import { CASE_STUDIES_DATA, calculateBessSavings } from "@/data/case-studies";

export function SavingsCalculator() {
  const [calcMode, setCalcMode] = useState<"preset" | "custom">("preset");
  const [selectedPresetKey, setSelectedPresetKey] = useState<keyof typeof CASE_STUDIES_DATA>("residential_society_500");
  
  // Custom interactive parameters
  const [dgKva, setDgKva] = useState<number>(1000);
  const [runHoursDaily, setRunHoursDaily] = useState<number>(4);
  const [dieselPrice, setDieselPrice] = useState<number>(98); // ₹/L

  // Active preset data from central source of truth
  const activeCaseStudy = CASE_STUDIES_DATA[selectedPresetKey] || CASE_STUDIES_DATA.residential_society_500;

  // Helper function to format INR currency in Crores or Lakhs
  const formatINR = (amount: number) => {
    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(2)} Cr`;
    }
    if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(2)} Lakh`;
    }
    return `₹${Math.round(amount).toLocaleString("en-IN")}`;
  };

  // Dynamic calculations via centralized calculation engine
  const customCalculations = useMemo(() => {
    return calculateBessSavings({
      dgCapacityKva: dgKva,
      dailyRunHours: runHoursDaily,
      dieselPricePerLiterInr: dieselPrice,
    });
  }, [dgKva, runHoursDaily, dieselPrice]);

  // Export summary as a text document for the client
  const handleExportSummary = () => {
    const summaryText = `=====================================================
LITH-ON BHARAT ENERGY — BESS SIZING & PAYBACK ESTIMATE
=====================================================
Date Generated: ${new Date().toLocaleDateString("en-IN")}
Calculation Engine: Lith-On Shared Engineering Model v2.4

INPUT PARAMETERS:
- Installed DG Capacity: ${dgKva} kVA
- Daily Peaking / Backup Run Hours: ${runHoursDaily} Hours/Day
- Commercial Diesel Price: ₹${dieselPrice} / Liter

ENGINEERING RECOMMENDATION:
- Sized BESS Storage Capacity: ${customCalculations.recommendedBessCapacityKwh} kWh
- Sized Bi-directional PCS Power: ${customCalculations.recommendedPcsPowerKw} kW
- Estimated Turnkey Capex: ${formatINR(customCalculations.estimatedCapexInr)}

FINANCIAL & OPERATING OUTCOMES:
- Baseline Annual Diesel Fuel Displaced: ${customCalculations.annualDieselLiters.toLocaleString()} Liters
- Baseline Annual DG Operating Cost: ${formatINR(customCalculations.annualDieselCostInr)} / year
- Annual BESS Off-Peak Charging Cost: ${formatINR(customCalculations.annualBessChargingCostInr)} / year
- Direct Net Annual OPEX Savings: ${formatINR(customCalculations.annualNetSavingsInr)} / year
- Estimated Simple Payback Period: ${customCalculations.simplePaybackYears} Years
- 10-Year Projected Net Financial Gain: ${formatINR(customCalculations.tenYearNetSavingsInr)}
- Annual Carbon Abatement: ${customCalculations.annualCo2AvoidedTons} Metric Tons CO2e / year

REGULATORY & COMPLIANCE:
- 100% CAQM GRAP Stage II–IV Compliant (Zero point-of-use particulate/NOx emissions)
- Cutover Latency: <10 ms (Instantaneous Solid-State UPS Switchover)
- Thermal Protection: IceBattery® Inorganic Ceramic Passive Shielding

For single-line electrical schematics and site-specific civil validation:
Website: https://www.lith-onbharat.com/contact?type=assessment
Email: tech@lith-onbharat.com | Phone: +91-7000013009
=====================================================`;

    const blob = new Blob([summaryText], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `Lith-On-BESS-Sizing-${dgKva}kVA-${Date.now()}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

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
            <button
              type="button"
              role="tab"
              aria-selected={selectedPresetKey === "residential_society_500"}
              onClick={() => setSelectedPresetKey("residential_society_500")}
              className={`min-h-[44px] whitespace-nowrap rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lithon-blue ${
                selectedPresetKey === "residential_society_500"
                  ? "bg-lithon-blue text-white shadow-xs"
                  : "bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              500-Flat Society (7.0 MWh)
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={selectedPresetKey === "invertis_university"}
              onClick={() => setSelectedPresetKey("invertis_university")}
              className={`min-h-[44px] whitespace-nowrap rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lithon-blue ${
                selectedPresetKey === "invertis_university"
                  ? "bg-lithon-blue text-white shadow-xs"
                  : "bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              Invertis University (1.0 MWh)
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={selectedPresetKey === "ev_charging_hub"}
              onClick={() => setSelectedPresetKey("ev_charging_hub")}
              className={`min-h-[44px] whitespace-nowrap rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lithon-blue ${
                selectedPresetKey === "ev_charging_hub"
                  ? "bg-lithon-blue text-white shadow-xs"
                  : "bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              EV Charging Plaza (450 kWh)
            </button>
          </div>
        )}
      </div>

      {/* Preset View */}
      {calcMode === "preset" && (
        <div className="mt-6 space-y-6">
          <div className="border-t border-gray-200 pt-5 sm:pt-6">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div>
                <div className="flex items-center gap-2">
                  <span className="rounded bg-emerald-100 text-emerald-800 text-xs px-2.5 py-0.5 font-bold">
                    Audited Engineering Project
                  </span>
                  <span className="text-xs text-gray-500 font-medium">{activeCaseStudy.location}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mt-2">{activeCaseStudy.title}</h3>
                <p className="text-xs text-gray-600 mt-1 max-w-xl">
                  {activeCaseStudy.subtitle} • {activeCaseStudy.systemHardware}
                </p>

                <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                  <div className="border-t border-gray-200 pt-2.5">
                    <span className="text-gray-500 block">Baseline</span>
                    <span className="font-semibold text-gray-900">{activeCaseStudy.baseline.installedCapacityKva} kVA DG</span>
                  </div>
                  <div className="border-t border-gray-200 pt-2.5">
                    <span className="text-gray-500 block">Turnkey Capex</span>
                    <span className="font-semibold text-gray-900">₹{activeCaseStudy.bessOperation.turnkeyCapexInr} Cr</span>
                  </div>
                  <div className="border-t border-gray-200 pt-2.5">
                    <span className="text-gray-500 block">Fuel Displaced</span>
                    <span className="font-semibold text-gray-900">{activeCaseStudy.outcomes.dieselDisplacedLitersPerYear > 0 ? `${(activeCaseStudy.outcomes.dieselDisplacedLitersPerYear / 1000).toFixed(0)}k L/yr` : "Demand Shaving"}</span>
                  </div>
                  {activeCaseStudy.outcomes.co2eAvoidedTonsPerYear != null && (
                    <div className="border-t border-gray-200 pt-2.5">
                      <span className="text-gray-500 block">CO2 Avoided</span>
                      <span className="font-semibold text-emerald-700">{activeCaseStudy.outcomes.co2eAvoidedTonsPerYear} Tons/yr</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-5 border-y border-gray-200 py-4 shrink-0">
                <div>
                  <div className="text-xs text-gray-500 font-medium">Net Annual Savings</div>
                  <div className="text-2xl font-bold text-emerald-700">₹{activeCaseStudy.outcomes.annualNetSavingsInr} Cr/yr</div>
                  <div className="text-[11px] text-gray-500 mt-0.5">Audited verified balance</div>
                </div>
                <div className="border-l border-gray-200 pl-5">
                  <div className="text-xs text-gray-500 font-medium">Payback Period</div>
                  <div className="text-2xl font-bold text-lithon-blue">{activeCaseStudy.outcomes.paybackYears} Years</div>
                  {activeCaseStudy.outcomes.tenYearNetRoiPct != null && (
                    <div className="text-[11px] text-emerald-700 mt-0.5">10-Yr ROI: {activeCaseStudy.outcomes.tenYearNetRoiPct}%</div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
            <div className="text-xs text-gray-500 flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-emerald-700 shrink-0" />
              <span>Full methodology documented with transparent diesel escalation and auxiliary cooling models.</span>
            </div>
            <Link
              href={`/contact?type=assessment&sector=${activeCaseStudy.sector}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-lithon-blue hover:bg-lithon-blue-hover px-6 py-3 text-xs font-semibold text-white shadow-sm transition-all min-h-[44px]"
            >
              <span>Request Sizing for Similar Site</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}

      {/* Interactive Custom Sliders View */}
      {calcMode === "custom" && (
        <div className="mt-8 grid gap-8 lg:grid-cols-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-gray-700">
                Facility Load Parameters
              </span>
              <span className="text-xs text-gray-500 font-mono">Real-time Sizing Model</span>
            </div>

            {/* DG Rating Slider */}
            <div>
              <div className="flex items-center justify-between text-xs text-gray-700 mb-2">
                <span>Installed Generator Set Capacity</span>
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
                <span>Daily Peaking / Outage Hours</span>
                <span className="font-mono text-base font-bold text-lithon-red-ink">{runHoursDaily} Hours/Day</span>
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
                <span>Commercial Diesel Tariff</span>
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
              <div className="flex justify-between text-xs text-gray-500 mt-1 font-mono">
                <span>₹85/L</span>
                <span>₹100/L</span>
                <span>₹115/L</span>
              </div>
            </div>

            {/* Hardware Sizing Callout */}
            <div className="rounded-xl border border-blue-200/80 bg-blue-50/50 p-4">
              <div className="flex items-center gap-2 text-lithon-blue text-xs font-semibold mb-2">
                <Zap className="h-4 w-4 text-lithon-red" />
                <span>Recommended Turnkey Hardware Sizing</span>
              </div>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-gray-500 block">Sized Battery Storage:</span>
                  <span className="font-mono text-base font-bold text-gray-900">
                    {customCalculations.recommendedBessCapacityKwh} kWh
                  </span>
                </div>
                <div>
                  <span className="text-gray-500 block">Bi-directional PCS:</span>
                  <span className="font-mono text-base font-bold text-gray-900">
                    {customCalculations.recommendedPcsPowerKw} kW
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Dynamic Calculated Financial Output Card */}
          <div className="lg:col-span-6">
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
              <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                <span className="text-xs font-semibold text-gray-600">
                  Calculated Financial Balance
                </span>
                <span className="rounded bg-emerald-100 text-emerald-800 text-xs px-2.5 py-0.5 font-bold">
                  Zero DG Fines (GRAP)
                </span>
              </div>

              <div className="mt-5 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-600">Baseline DG Diesel Cost:</span>
                  <span className="text-sm font-mono font-bold text-red-600">
                    {formatINR(customCalculations.annualDieselCostInr)} / yr
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-600">BESS Off-Peak Charging Cost:</span>
                  <span className="text-sm font-mono font-bold text-lithon-blue">
                    {formatINR(customCalculations.annualBessChargingCostInr)} / yr
                  </span>
                </div>

                <div className="border-l-2 border-emerald-500 pl-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold text-emerald-800 block">
                        Net Annual OPEX Savings:
                      </span>
                      <span className="text-2xl font-black text-emerald-700">
                        {formatINR(customCalculations.annualNetSavingsInr)} / year
                      </span>
                    </div>
                    <TrendingDown className="h-8 w-8 text-emerald-700" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs pt-1">
                  <div className="rounded-lg bg-white p-3 border border-gray-200 shadow-2xs">
                    <span className="text-xs text-gray-500 font-semibold block">Simple Payback</span>
                    <span className="font-bold text-lithon-blue mt-0.5 block text-sm">
                      {customCalculations.simplePaybackYears} Years
                    </span>
                  </div>
                  <div className="rounded-lg bg-white p-3 border border-gray-200 shadow-2xs">
                    <span className="text-xs text-gray-500 font-semibold block">CO2 Abated</span>
                    <span className="font-bold text-emerald-700 mt-0.5 block text-sm">
                      {customCalculations.annualCo2AvoidedTons} Tons / yr
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="rounded-lg bg-white p-3 border border-gray-200 shadow-2xs">
                    <span className="text-xs text-gray-500 font-semibold block">Estimated Turnkey Capex</span>
                    <span className="font-bold text-gray-900 mt-0.5 block text-sm">
                      {formatINR(customCalculations.estimatedCapexInr)}
                    </span>
                  </div>
                  <div className="rounded-lg bg-white p-3 border border-gray-200 shadow-2xs">
                    <span className="text-xs text-gray-500 font-semibold block">10-Year Net Gain</span>
                    <span className="font-bold text-emerald-700 mt-0.5 block text-sm">
                      {formatINR(customCalculations.tenYearNetSavingsInr)}
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                  <button
                    type="button"
                    onClick={handleExportSummary}
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 bg-white hover:bg-gray-100 px-4 py-3 text-xs font-semibold text-gray-700 transition-colors min-h-[44px]"
                  >
                    <Download className="h-4 w-4" />
                    <span>Download Summary</span>
                  </button>

                  <Link
                    href={`/contact?type=assessment&sanctionedLoad=${customCalculations.recommendedPcsPowerKw}&dgCapacity=${dgKva}`}
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-lithon-blue hover:bg-lithon-blue-hover px-4 py-3 text-xs font-semibold text-white shadow-sm transition-all min-h-[44px]"
                  >
                    <span>Request Proposal</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
