"use client";

import { useState } from "react";
import { ShieldCheck, CheckCircle2, ChevronRight } from "lucide-react";

interface MoatItem {
  id: number;
  title: string;
  subtitle: string;
  tag: string;
  competitorBarrier: string;
  metric: string;
  description: string;
}

const MOATS: MoatItem[] = [
  {
    id: 1,
    title: "Dual Geographic Advantage",
    subtitle: "Noida 20,000 sq. ft. Plant + Foshan Hub",
    tag: "Supply Chain",
    competitorBarrier: "Local Make in India customs incentives + direct raw cell Tier-1 Chinese pricing.",
    metric: "250 MWh Annual Capacity",
    description: "Rapid domestic delivery, custom Indian engineering, and zero single-country supply vulnerabilities."
  },
  {
    id: 2,
    title: "Patented IceBattery® Ceramic Shield",
    subtitle: "Passive Radiative Space Cooling",
    tag: "Thermal Physics",
    competitorBarrier: "Competitors require 30–50% oversized HVAC chillers prone to desert thermal tripping.",
    metric: "15°C–30°C Internal Delta",
    description: "300µm–400µm ceramic coating reflecting >90% NIR solar rays and radiating FIR directly to deep space."
  },
  {
    id: 3,
    title: "Sub-10ms Instantaneous UPS Cutover",
    subtitle: "Zero Blackout Interruption",
    tag: "Power Electronics",
    competitorBarrier: "Standard DGs require 10–30s cranking delay, stranding elevators and crashing IT server racks.",
    metric: "<10ms Cutover",
    description: "Seamless grid-loss detection and automatic phase synchronization preventing critical equipment trip."
  },
  {
    id: 4,
    title: "Fully Integrated Tech Stack",
    subtitle: "In-House BMS + PCS + EMS + SCADA",
    tag: "Software & Firmware",
    competitorBarrier: "Competitors assemble fragmented 3rd-party subsystems with communication latency and integration disputes.",
    metric: "6 Native Operating Modes",
    description: "Unified controller supporting peak shaving, demand limiting, dynamic PPA arbitrage, and black-start."
  },
  {
    id: 5,
    title: "Heavy-Duty LiFePO4 Longevity",
    subtitle: ">6,000 Cycles @ 88%–90% DoD",
    tag: "Electrochemistry",
    competitorBarrier: "Traditional lead-acid fails at 1,200 cycles; ternary NMC carries severe thermal runaway risk.",
    metric: "10-Year Warranty",
    description: "Thermally stable chemistry with <2.5% monthly self-discharge and >98% coulombic efficiency."
  },
  {
    id: 6,
    title: "Simultaneous Trifecta Certification",
    subtitle: "IEC 61508 + IEC 61850 + BIS",
    tag: "Regulatory Moat",
    competitorBarrier: "Requires 24–36 months and extensive safety testing that generic assemblers cannot pass.",
    metric: "Utility & Grid Approved",
    description: "Safety Integrity Level (SIL 2/3), substation SCADA communications, and Bureau of Indian Standards compliance."
  },
  {
    id: 7,
    title: "Turnkey Pre-Commissioned Skids",
    subtitle: "72-Hour Rapid On-Site Integration",
    tag: "EPC Speed",
    competitorBarrier: "Field-assembled systems take 4–8 weeks with high risk of wiring faults and utility delays.",
    metric: "50% Footprint Reduction",
    description: "Factory factory-acceptance tested (FAT) at Noida; delivered pre-wired, pre-tested, and ready for hookup."
  }
];

export function SevenMoatsStack() {
  const [selectedMoat, setSelectedMoat] = useState<MoatItem>(MOATS[0]);

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
      <div className="border-b border-gray-100 pb-5">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0B3388]">
          <ShieldCheck className="h-4 w-4" />
          <span>Competitive Moats &amp; Engineering Defensibility</span>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 tracking-tight mt-1">
          The 7 Structural Lith-On Moats
        </h3>
        <p className="text-xs text-gray-600 mt-1 max-w-2xl">
          Why leading enterprises, housing societies, and universities choose Lith-On over legacy DG backup and generic BESS assemblers.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-12 mt-8 items-start">
        {/* Left Stack Stepper List */}
        <div className="lg:col-span-6 space-y-2.5">
          {MOATS.map((moat) => {
            const isSelected = selectedMoat.id === moat.id;
            return (
              <button
                key={moat.id}
                type="button"
                onClick={() => setSelectedMoat(moat)}
                className={`w-full text-left rounded-xl p-3.5 border transition-all flex items-center justify-between ${
                  isSelected
                    ? "bg-[#0B3388] text-white border-[#0B3388] shadow-md"
                    : "bg-white border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-900"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`flex h-8 w-8 items-center justify-center rounded-lg font-bold text-xs ${
                    isSelected ? "bg-white text-[#0B3388]" : "bg-gray-100 text-gray-600"
                  }`}>
                    0{moat.id}
                  </div>
                  <div>
                    <div className={`text-sm font-bold ${isSelected ? "text-white" : "text-gray-900"}`}>{moat.title}</div>
                    <div className={`text-[11px] ${isSelected ? "text-blue-100" : "text-gray-500"}`}>{moat.subtitle}</div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className={`hidden sm:inline rounded px-2 py-0.5 text-[10px] font-mono ${
                    isSelected ? "bg-white/20 text-white" : "bg-gray-100 text-gray-600"
                  }`}>
                    {moat.tag}
                  </span>
                  <ChevronRight className={`h-4 w-4 transition-transform ${isSelected ? "text-white translate-x-1" : "text-gray-400"}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Active Moat Detailed Card */}
        <div className="lg:col-span-6 sticky top-24">
          <div className="rounded-xl border border-gray-200 bg-[#F8FAFC] p-6 shadow-sm">
            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
              <span className="rounded-full bg-[#0B3388]/10 border border-[#0B3388]/20 text-[#0B3388] text-xs px-3 py-1 font-semibold">
                Moat #0{selectedMoat.id} • {selectedMoat.tag}
              </span>
              <span className="text-xs font-mono font-bold text-emerald-700">
                {selectedMoat.metric}
              </span>
            </div>

            <h4 className="text-xl font-bold text-gray-900 mt-4">{selectedMoat.title}</h4>
            <div className="text-xs text-gray-500 mt-0.5 font-medium">{selectedMoat.subtitle}</div>

            <p className="text-xs text-gray-600 leading-relaxed mt-4">
              {selectedMoat.description}
            </p>

            <div className="mt-6 rounded-lg bg-red-50/70 border border-red-200 p-4">
              <span className="text-[11px] font-bold text-[#F74530] uppercase tracking-wider block">
                Competitor Defense Barrier
              </span>
              <p className="text-xs text-gray-700 mt-1.5 leading-relaxed">
                {selectedMoat.competitorBarrier}
              </p>
            </div>

            <div className="mt-6 border-t border-gray-200 pt-4 flex items-center justify-between text-xs text-gray-500">
              <span className="flex items-center gap-1.5 text-emerald-600 font-medium">
                <CheckCircle2 className="h-4 w-4" />
                Audited &amp; Standardized
              </span>
              <span className="font-medium text-gray-600">LITH-ON Proprietary Advantage</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
