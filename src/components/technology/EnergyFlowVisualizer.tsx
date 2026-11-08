"use client";

import { useState } from "react";
import {
  ShieldCheck,
  TrendingUp,
  Activity,
} from "lucide-react";

type OperatingMode = "solar-charge" | "peak-shaving" | "blackout-ups" | "ev-buffer";

interface ModeConfig {
  id: OperatingMode;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  solarKw: number;
  bessFlowKw: number; // positive = charging, negative = discharging
  gridKw: number;
  facilityLoadKw: number;
  evKw: number;
  savingsPerHour: string;
  gridStatus: "Normal" | "Peak Tariff Alert" | "GRID OUTAGE / ISLANDED" | "Transformer High Load";
}

const MODES: Record<OperatingMode, ModeConfig> = {
  "solar-charge": {
    id: "solar-charge",
    name: "Solar Self-Consumption & BESS Storing",
    shortName: "Solar Storage",
    tagline: "100% Green Microgrid — Zero Grid Dependency",
    description:
      "Peak solar supplies 100% of factory operations while storing 400 kW excess for evening dispatch.",
    solarKw: 900,
    bessFlowKw: 400, // charging
    gridKw: 0,
    facilityLoadKw: 500,
    evKw: 0,
    savingsPerHour: "₹4,850/hr saved vs grid power",
    gridStatus: "Normal",
  },
  "peak-shaving": {
    id: "peak-shaving",
    name: "ToD Peak Demand Shaving",
    shortName: "Peak Shaving",
    tagline: "Arbitrage Highest DISCOM Tariff Surcharges",
    description:
      "During peak evening hours (6:00 PM - 10:00 PM) when DISCOM tariff surges up to ₹14/kWh, Lith-On BESS discharges 500 kW to eliminate peak demand penalties.",
    solarKw: 0,
    bessFlowKw: -500, // discharging
    gridKw: 150,
    facilityLoadKw: 650,
    evKw: 0,
    savingsPerHour: "₹7,000/hr avoided peak tariff",
    gridStatus: "Peak Tariff Alert",
  },
  "blackout-ups": {
    id: "blackout-ups",
    name: "Sub-10ms Instantaneous UPS Islanding",
    shortName: "<10ms UPS Islanding",
    tagline: "Zero Blackout — Computers & Lifts Never Trip",
    description:
      "The 11kV utility grid suddenly drops. In under 10 milliseconds, Lith-On BESS microgrid inverter takes over full campus load with synchronous 50Hz sine-wave continuity.",
    solarKw: 0,
    bessFlowKw: -500, // discharging
    gridKw: 0,
    facilityLoadKw: 500,
    evKw: 0,
    savingsPerHour: "Prevented ₹12 Lakh machinery downtime & lift panic",
    gridStatus: "GRID OUTAGE / ISLANDED",
  },
  "ev-buffer": {
    id: "ev-buffer",
    name: "EV High-Power Fast-Charging Buffer",
    shortName: "EV Fast Buffer",
    tagline: "Fast Charging Without Costly Substation Upgrades",
    description:
      "Dual 180 kW DC fast chargers activate simultaneously. Instead of tripping factory transformer capacity, Lith-On BESS provides instant high-discharge buffering.",
    solarKw: 300,
    bessFlowKw: -200, // discharging to buffer
    gridKw: 250,
    facilityLoadKw: 400,
    evKw: 350,
    savingsPerHour: "Protected ₹35 Lakh transformer infrastructure",
    gridStatus: "Transformer High Load",
  },
};

export function EnergyFlowVisualizer() {
  const [activeMode, setActiveMode] = useState<OperatingMode>("solar-charge");
  const mode = MODES[activeMode];

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
      {/* Header and Mode Selector */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-5">
        <div className="flex items-center gap-2 text-xs font-semibold text-lithon-blue">
          <Activity className="h-4 w-4" />
          <span>Select Dispatch Simulation Mode:</span>
        </div>

        {/* Mode Selector Tabs */}
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Microgrid Dispatch Modes">
          {(Object.keys(MODES) as OperatingMode[]).map((mKey) => {
            const isSelected = activeMode === mKey;
            return (
              <button
                key={mKey}
                type="button"
                onClick={() => setActiveMode(mKey)}
                className={`min-h-[44px] whitespace-nowrap rounded-lg px-3.5 py-2 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lithon-blue ${
                  isSelected
                    ? "bg-lithon-blue text-white shadow-sm"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {MODES[mKey].shortName}
              </button>
            );
          })}
        </div>
      </div>

      {/* Interactive Flow Schematic */}
      <div className="relative mt-6 rounded-xl border border-gray-200 bg-surface-light p-6 overflow-hidden">
        {/* Status Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-200/80 pb-4 text-xs font-medium">
          <div className="flex items-center gap-2">
            <span className="text-gray-500">Operating Mode:</span>
            <span className="font-bold text-gray-900">{mode.name}</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-gray-500">Grid Status:</span>
            <span
              className={`inline-flex items-center gap-1 rounded-md px-2 py-0.5 font-bold ${
                mode.gridStatus === "GRID OUTAGE / ISLANDED"
                  ? "bg-red-50 text-[#F74530] border border-red-200"
                  : mode.gridStatus === "Peak Tariff Alert"
                  ? "bg-amber-50 text-amber-700 border border-amber-200"
                  : "bg-emerald-50 text-emerald-700 border border-emerald-200"
              }`}
            >
              <span className="h-2 w-2 rounded-full bg-current animate-pulse" />
              {mode.gridStatus}
            </span>
          </div>
        </div>

        {/* SVG Flow Schematic Canvas */}
        <div className="relative my-6 h-64 sm:h-72 w-full flex items-center justify-center">
          <svg
            className="w-full h-full max-w-2xl"
            viewBox="0 0 640 280"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Dynamic Microgrid Energy Vector Diagram</title>

            <defs>
              <linearGradient id="flowGradientBlue" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0B3388" />
                <stop offset="100%" stopColor="#0284C7" />
              </linearGradient>
              <linearGradient id="flowGradientRed" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#F74530" />
                <stop offset="100%" stopColor="#FB7185" />
              </linearGradient>
              <linearGradient id="flowGradientGreen" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#10B981" />
                <stop offset="100%" stopColor="#34D399" />
              </linearGradient>
            </defs>

            {/* FLOW LINES WITH ANIMATED PARTICLES */}

            {/* Line: Solar (Top Left: 110, 60) -> Lith-On BESS (Center: 320, 140) */}
            <path
              d="M 110 60 C 200 60, 240 140, 320 140"
              stroke={mode.solarKw > 0 ? "#10B981" : "#E2E8F0"}
              strokeWidth={mode.solarKw > 0 ? 3 : 1.5}
              strokeDasharray={mode.solarKw > 0 ? "8 6" : "none"}
              className={mode.solarKw > 0 ? "animate-flow-dash" : ""}
            />

            {/* Line: Utility Grid (Top Right: 530, 60) -> Center Bus / Lith-On BESS */}
            <path
              d="M 530 60 C 440 60, 400 140, 320 140"
              stroke={mode.gridKw > 0 ? "#0B3388" : "#E2E8F0"}
              strokeWidth={mode.gridKw > 0 ? 3 : 1.5}
              strokeDasharray={mode.gridKw > 0 ? "8 6" : "none"}
              className={mode.gridKw > 0 ? "animate-flow-dash" : ""}
            />

            {/* Line: Lith-On BESS (Center: 320, 140) -> Factory Load (Bottom Left: 110, 220) */}
            <path
              d="M 320 140 C 240 140, 200 220, 110 220"
              stroke={mode.bessFlowKw < 0 ? "#F74530" : "#10B981"}
              strokeWidth="3.5"
              strokeDasharray="8 6"
              className="animate-flow-dash"
            />

            {/* Line: Lith-On BESS (Center: 320, 140) -> EV Charger (Bottom Right: 530, 220) */}
            <path
              d="M 320 140 C 400 140, 440 220, 530 220"
              stroke={mode.evKw > 0 ? "#0284C7" : "#E2E8F0"}
              strokeWidth={mode.evKw > 0 ? 3 : 1.5}
              strokeDasharray={mode.evKw > 0 ? "8 6" : "none"}
              className={mode.evKw > 0 ? "animate-flow-dash" : ""}
            />

            {/* CENTER NODE: LITH-ON BESS (1 MWh) */}
            <g transform="translate(320, 140)">
              <circle
                r="44"
                fill="#FFFFFF"
                stroke={mode.bessFlowKw < 0 ? "#F74530" : "#0B3388"}
                strokeWidth="3"
                className="shadow-lg"
              />
              <circle
                r="38"
                fill={mode.bessFlowKw < 0 ? "#FEF2F2" : "#EFF6FF"}
              />
              <text
                textAnchor="middle"
                y="-10"
                fill="#0B3388"
                fontSize="10"
                fontWeight="bold"
                fontFamily="sans-serif"
              >
                LITH-ON BESS
              </text>
              <text
                textAnchor="middle"
                y="6"
                fill={mode.bessFlowKw < 0 ? "#F74530" : "#0B3388"}
                fontSize="12"
                fontWeight="900"
                fontFamily="monospace"
              >
                {mode.bessFlowKw > 0 ? `+${mode.bessFlowKw} kW` : `${mode.bessFlowKw} kW`}
              </text>
              <text
                textAnchor="middle"
                y="20"
                fill="#64748B"
                fontSize="8"
                fontWeight="600"
              >
                {mode.bessFlowKw > 0 ? "CHARGING" : "DISCHARGING"}
              </text>
            </g>

            {/* TOP LEFT NODE: SOLAR PV */}
            <g transform="translate(110, 60)">
              <circle r="34" fill="#FFFFFF" stroke="#10B981" strokeWidth="2.5" />
              <text textAnchor="middle" y="-6" fill="#10B981" fontSize="9" fontWeight="bold">
                SOLAR PV
              </text>
              <text textAnchor="middle" y="10" fill="#047857" fontSize="12" fontWeight="bold" fontFamily="monospace">
                {mode.solarKw} kW
              </text>
            </g>

            {/* TOP RIGHT NODE: UTILITY GRID */}
            <g transform="translate(530, 60)">
              <circle
                r="34"
                fill="#FFFFFF"
                stroke={mode.gridKw > 0 ? "#0B3388" : "#94A3B8"}
                strokeWidth="2.5"
              />
              <text
                textAnchor="middle"
                y="-6"
                fill={mode.gridKw > 0 ? "#0B3388" : "#94A3B8"}
                fontSize="9"
                fontWeight="bold"
              >
                11kV GRID
              </text>
              <text
                textAnchor="middle"
                y="10"
                fill={mode.gridKw > 0 ? "#0B3388" : "#94A3B8"}
                fontSize="12"
                fontWeight="bold"
                fontFamily="monospace"
              >
                {mode.gridKw} kW
              </text>
            </g>

            {/* BOTTOM LEFT NODE: INDUSTRIAL FACILITY LOAD */}
            <g transform="translate(110, 220)">
              <circle r="34" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2.5" />
              <text textAnchor="middle" y="-6" fill="#0F172A" fontSize="9" fontWeight="bold">
                FACTORY LOAD
              </text>
              <text textAnchor="middle" y="10" fill="#0F172A" fontSize="12" fontWeight="bold" fontFamily="monospace">
                {mode.facilityLoadKw} kW
              </text>
            </g>

            {/* BOTTOM RIGHT NODE: EV FAST CHARGERS */}
            <g transform="translate(530, 220)">
              <circle
                r="34"
                fill="#FFFFFF"
                stroke={mode.evKw > 0 ? "#0284C7" : "#CBD5E1"}
                strokeWidth="2.5"
              />
              <text
                textAnchor="middle"
                y="-6"
                fill={mode.evKw > 0 ? "#0284C7" : "#94A3B8"}
                fontSize="9"
                fontWeight="bold"
              >
                EV CHARGERS
              </text>
              <text
                textAnchor="middle"
                y="10"
                fill={mode.evKw > 0 ? "#0284C7" : "#94A3B8"}
                fontSize="12"
                fontWeight="bold"
                fontFamily="monospace"
              >
                {mode.evKw} kW
              </text>
            </g>
          </svg>
        </div>

        {/* Real-time Impact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-gray-200/80 pt-4">
          <div className="rounded-xl bg-white p-4 border border-gray-200 shadow-sm">
            <span className="text-[11px] font-medium text-gray-500 uppercase tracking-wider block">
              Economic Impact
            </span>
            <div className="text-sm sm:text-base font-bold text-gray-900 mt-1 flex items-center gap-1.5">
              <TrendingUp className="h-4 w-4 text-emerald-600 shrink-0" />
              <span>{mode.savingsPerHour}</span>
            </div>
          </div>

          <div className="rounded-xl bg-white p-4 border border-gray-200 shadow-sm">
            <span className="text-xs font-medium text-gray-500 block">
              Active Strategy
            </span>
            <p className="text-xs text-gray-700 mt-1 leading-relaxed">
              {mode.description}
            </p>
          </div>

          <div className="rounded-xl bg-white p-4 border border-gray-200 shadow-sm">
            <span className="text-xs font-medium text-gray-500 block">
              Grid Resilience
            </span>
            <div className="text-xs font-semibold text-lithon-blue mt-1 flex items-center gap-1">
              <ShieldCheck className="h-4 w-4 text-lithon-blue shrink-0" />
              <span>{mode.tagline}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
