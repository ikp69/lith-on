"use client";

import { useState } from "react";
import { Sun, Sparkles, Flame, Snowflake, CheckCircle2 } from "lucide-react";

export function IceBatteryThermal() {
  const [activeMode, setActiveMode] = useState<"icebattery" | "conventional">("icebattery");

  const ambientTemp = 50; // Hot Indian summer ambient °C
  const conventionalInternal = 68; // Bare steel container greenhouse internal °C
  const iceBatteryInternal = 38; // IceBattery® treated internal °C
  const deltaT = conventionalInternal - iceBatteryInternal; // 30°C reduction

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
      {/* Header and Toggle */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-5">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0B3388]">
            <Sparkles className="h-4 w-4" />
            <span>Patented Thermal Physics</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight mt-1">
            IceBattery® Passive Ceramic Shield
          </h3>
          <p className="text-xs text-gray-600 mt-1 max-w-xl">
            300µm–400µm microscopic ceramic coating with NIR solar reflectance &amp; FIR radiative space cooling.
          </p>
        </div>

        {/* Mode Switcher Buttons */}
        <div className="inline-flex rounded-xl border border-gray-200 bg-gray-50 p-1">
          <button
            type="button"
            onClick={() => setActiveMode("icebattery")}
            className={`flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-xs font-semibold transition-all ${
              activeMode === "icebattery"
                ? "bg-[#0B3388] text-white shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            <Snowflake className="h-3.5 w-3.5 text-sky-300" />
            <span>IceBattery® Shield</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveMode("conventional")}
            className={`flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-xs font-semibold transition-all ${
              activeMode === "conventional"
                ? "bg-[#F74530] text-white shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            <Flame className="h-3.5 w-3.5" />
            <span>Standard Bare Steel</span>
          </button>
        </div>
      </div>

      {/* Interactive Visual Canvas / SVG */}
      <div className="relative mt-6 rounded-xl border border-gray-200 bg-[#F8FAFC] p-6 overflow-hidden">
        {/* Ambient Sun & Radiation Vectors */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-50 border border-amber-200 text-amber-600">
              <Sun className="h-5 w-5 animate-spin" style={{ animationDuration: "20s" }} />
            </div>
            <div>
              <div className="text-xs font-bold text-gray-900">Peak Solar Irradiation (1,000 W/m²)</div>
              <div className="text-[11px] text-gray-500">Ambient Temperature: {ambientTemp}°C</div>
            </div>
          </div>

          <div className="text-right">
            <div className="text-xs font-medium text-gray-500">Outer Enclosure Status</div>
            <div className="text-xs font-bold">
              {activeMode === "icebattery" ? (
                <span className="text-[#0B3388]">&gt;90% Near-Infrared Reflected</span>
              ) : (
                <span className="text-[#F74530]">85% Solar Radiation Absorbed</span>
              )}
            </div>
          </div>
        </div>

        {/* SVG Enclosure Cutaway Diagram */}
        <div className="relative my-6 h-48 w-full flex items-center justify-center">
          <svg className="w-full h-full max-w-lg" viewBox="0 0 500 180" fill="none" xmlns="http://www.w3.org/2000/svg">
            <title>IceBattery Thermal Dissipation Cutaway Diagram</title>

            {/* Sunlight rays incoming */}
            <path d="M60 20 L150 70" stroke="#F59E0B" strokeWidth="2" strokeDasharray="4 2" />
            <path d="M120 10 L190 70" stroke="#F59E0B" strokeWidth="2" strokeDasharray="4 2" />
            <path d="M180 5 L230 70" stroke="#F59E0B" strokeWidth="2" strokeDasharray="4 2" />

            {/* If IceBattery: Reflected Solar Rays bouncing off */}
            {activeMode === "icebattery" && (
              <>
                <path d="M150 70 L220 25" stroke="#0284C7" strokeWidth="2.5" />
                <path d="M190 70 L260 25" stroke="#0284C7" strokeWidth="2.5" />
                <path d="M230 70 L300 25" stroke="#0284C7" strokeWidth="2.5" />

                {/* Deep Space Radiative Cooling (8-14um FIR window) */}
                <path d="M340 70 L370 20" stroke="#0B3388" strokeWidth="2" strokeDasharray="3 3" />
                <path d="M380 70 L410 20" stroke="#0B3388" strokeWidth="2" strokeDasharray="3 3" />
                <text x="310" y="15" fill="#0B3388" fontSize="10" fontWeight="700">8–14µm FIR Deep Space Window</text>
              </>
            )}

            {/* Outer Container Shell */}
            <rect
              x="50"
              y="70"
              width="400"
              height="90"
              rx="8"
              fill={activeMode === "icebattery" ? "#FFFFFF" : "#FEF2F2"}
              stroke={activeMode === "icebattery" ? "#0B3388" : "#F74530"}
              strokeWidth={activeMode === "icebattery" ? "2.5" : "2"}
            />

            {/* Ceramic Layer (300-400um) on top */}
            {activeMode === "icebattery" && (
              <rect x="50" y="70" width="400" height="7" rx="3" fill="#0284C7" fillOpacity="0.9" />
            )}

            {/* Internal Cells / Rack Stack */}
            <rect x="70" y="90" width="80" height="60" rx="4" fill="#F1F5F9" stroke="#CBD5E1" />
            <rect x="170" y="90" width="80" height="60" rx="4" fill="#F1F5F9" stroke="#CBD5E1" />
            <rect x="270" y="90" width="80" height="60" rx="4" fill="#F1F5F9" stroke="#CBD5E1" />
            <rect x="370" y="90" width="60" height="60" rx="4" fill="#F1F5F9" stroke="#CBD5E1" />

            {/* Labels inside */}
            <text x="110" y="125" textAnchor="middle" fill="#475569" fontSize="11" fontWeight="600">Rack 01</text>
            <text x="210" y="125" textAnchor="middle" fill="#475569" fontSize="11" fontWeight="600">Rack 02</text>
            <text x="310" y="125" textAnchor="middle" fill="#475569" fontSize="11" fontWeight="600">Rack 03</text>
            <text x="400" y="125" textAnchor="middle" fill="#475569" fontSize="11" fontWeight="600">PCS/HVAC</text>

            {/* Active Temperature Badge */}
            <g transform="translate(180, 165)">
              <rect
                x="0"
                y="-18"
                width="140"
                height="24"
                rx="6"
                fill={activeMode === "icebattery" ? "#0B3388" : "#F74530"}
              />
              <text x="70" y="-2" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="700">
                Core Temp: {activeMode === "icebattery" ? `${iceBatteryInternal}°C (Optimal)` : `${conventionalInternal}°C (Critical)`}
              </text>
            </g>
          </svg>
        </div>

        {/* Comparison Result Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-gray-200 pt-4">
          <div className="rounded-xl bg-white p-4 border border-gray-200 shadow-sm">
            <span className="text-[11px] font-medium text-gray-500">Internal Enclosure Temp</span>
            <div className="text-xl font-bold text-gray-900 mt-0.5">
              {activeMode === "icebattery" ? `${iceBatteryInternal}°C` : `${conventionalInternal}°C`}
            </div>
            <div className="text-[11px] text-emerald-600 mt-1 flex items-center gap-1 font-medium">
              <CheckCircle2 className="h-3 w-3 shrink-0" />
              <span>{activeMode === "icebattery" ? `${deltaT}°C cooler core` : "HVAC thermal stress"}</span>
            </div>
          </div>

          <div className="rounded-xl bg-white p-4 border border-gray-200 shadow-sm">
            <span className="text-[11px] font-medium text-gray-500">HVAC Parasitic Load</span>
            <div className="text-xl font-bold text-[#0B3388] mt-0.5">
              {activeMode === "icebattery" ? ">20% Saved" : "Continuous 100% Load"}
            </div>
            <div className="text-[11px] text-gray-500 mt-1">
              {activeMode === "icebattery" ? "Extends battery cycle life" : "Accelerates cell degradation"}
            </div>
          </div>

          <div className="rounded-xl bg-white p-4 border border-gray-200 shadow-sm">
            <span className="text-[11px] font-medium text-gray-500">Maximum Ambient Rating</span>
            <div className="text-xl font-bold text-gray-900 mt-0.5">60°C Tolerance</div>
            <div className="text-[11px] text-emerald-600 mt-1 font-medium">
              Engineered for Indian desert &amp; rooftop climates
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

