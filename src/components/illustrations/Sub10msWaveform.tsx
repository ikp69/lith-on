"use client";

import { useState } from "react";
import { Zap, AlertOctagon, Activity } from "lucide-react";

export function Sub10msWaveform() {
  const [selectedSystem, setSelectedSystem] = useState<"bess" | "dg">("bess");

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-8 shadow-sm">
      {/* Header and Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-5">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-lithon-blue">
            <Activity className="h-4 w-4" />
            <span>Real-Time Power Quality Telemetry</span>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            Compare phase cutover between Lith-On BESS and conventional diesel generators.
          </p>
        </div>

        {/* Toggle */}
        <div className="grid grid-cols-1 sm:inline-flex rounded-xl border border-gray-200 bg-gray-50 p-1 gap-1 sm:gap-0 w-full sm:w-auto">
          <button
            type="button"
            onClick={() => setSelectedSystem("bess")}
            className={`min-h-[44px] flex items-center justify-center sm:justify-start gap-1.5 rounded-lg px-3.5 py-2 text-xs font-semibold whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lithon-blue ${
              selectedSystem === "bess"
                 ? "bg-lithon-blue text-white shadow-sm"
                 : "text-gray-600 hover:text-gray-900"
            }`}
          >
            <Zap className="h-3.5 w-3.5 text-amber-300" />
            <span>Lith-On BESS (&lt;10ms)</span>
          </button>
          <button
            type="button"
            onClick={() => setSelectedSystem("dg")}
            className={`min-h-[44px] flex items-center justify-center sm:justify-start gap-1.5 rounded-lg px-3.5 py-2 text-xs font-semibold whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lithon-red ${
              selectedSystem === "dg"
                 ? "bg-lithon-red-ink text-white shadow-sm"
                 : "text-gray-600 hover:text-gray-900"
            }`}
          >
            <AlertOctagon className="h-3.5 w-3.5" />
            <span>Conventional DG (10–30s)</span>
          </button>
        </div>
      </div>

      {/* Oscilloscope Screen */}
      <div className="mt-6 rounded-xl border border-gray-900 bg-[#090D16] p-5 relative overflow-hidden shadow-inner">
        {/* Telemetry Header */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-x-4 gap-y-1 text-xs font-mono text-slate-400 border-b border-white/10 pb-3">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              CH1: 415V 50Hz 3-phase
            </span>
            <span className="hidden sm:inline text-slate-300">Timebase: 2ms/div</span>
          </div>
          <div className="sm:text-right">
            <span className="text-slate-300">Grid loss trigger: </span>
            <span className="text-lithon-red font-bold">t = 0.00ms</span>
          </div>
        </div>

        {/* Oscilloscope SVG Waveform */}
        <div className="relative z-10 my-4 h-44 w-full flex items-center justify-center">
          <svg className="w-full h-full" viewBox="0 0 600 160" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
            <title>Grid Blackout Cutover Oscilloscope Waveform</title>
            
            {/* Center Zero Voltage Axis */}
            <line x1="0" y1="80" x2="600" y2="80" stroke="#334155" strokeWidth="1" strokeDasharray="2 2" />

            {/* Grid Loss Threshold Line */}
            <line x1="220" y1="0" x2="220" y2="160" stroke="#F74530" strokeWidth="1.5" strokeDasharray="4 2" />
            <text x="225" y="20" fill="#F74530" fontSize="10" fontFamily="monospace" fontWeight="bold">Grid trip detected</text>

            {/* Section 1: Normal Grid Sine Wave (0 to 220) */}
            <path
              d="M0 80 Q27.5 15 55 80 T110 80 T165 80 T220 80"
              stroke="#38BDF8"
              strokeWidth="2.5"
              fill="none"
            />

            {selectedSystem === "bess" ? (
              /* Lith-On BESS: Seamless Sine Wave continuing with <10ms phase lock */
              <>
                {/* 8ms transition zone (220 to 245) */}
                <path
                  d="M220 80 Q232.5 50 245 80"
                  stroke="#38BDF8"
                  strokeWidth="2.5"
                  strokeDasharray="2 1"
                  fill="none"
                />
                {/* Clean BESS output seamlessly continuing */}
                <path
                  d="M245 80 Q272.5 145 300 80 T355 80 T410 80 T465 80 T520 80 T575 80 T600 80"
                  stroke="#38BDF8"
                  strokeWidth="2.5"
                  fill="none"
                />

                {/* Annotation marker */}
                <rect x="230" y="115" width="140" height="26" rx="4" fill="#0B3388" fillOpacity="0.95" />
                <text x="300" y="132" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontFamily="monospace" fontWeight="bold">
                  BESS cutover: 8.2ms
                </text>
              </>
            ) : (
              /* Conventional DG: Blackout dead-zone for 15-30 seconds */
              <>
                {/* Flat zero voltage line from 220 to 520 */}
                <line x1="220" y1="80" x2="520" y2="80" stroke="#F74530" strokeWidth="3" />

                {/* Staggered DG crank up after prolonged blackout */}
                <path
                  d="M520 80 Q535 110 550 80 T580 80 T600 80"
                  stroke="#F59E0B"
                  strokeWidth="2"
                  strokeDasharray="4 2"
                  fill="none"
                />

                {/* Annotation marker */}
                <rect x="250" y="45" width="220" height="26" rx="4" fill="#F74530" fillOpacity="0.95" />
                <text x="360" y="62" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontFamily="monospace" fontWeight="bold">
                  Blackout delay: 10–30 seconds
                </text>
              </>
            )}
          </svg>
        </div>

        {/* Real-world Impact Grid */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-white/10 pt-4 text-xs font-mono">
          <div className="border-t border-white/10 pt-3">
            <span className="text-slate-400 block text-xs font-sans font-medium">Elevator &amp; Lifts</span>
            <span className={selectedSystem === "bess" ? "text-emerald-400 font-bold block mt-1" : "text-lithon-red font-bold block mt-1"}>
              {selectedSystem === "bess" ? "0 Trips / Smooth Operation" : "42 Lifts Halted Between Floors"}
            </span>
          </div>

          <div className="border-t border-white/10 pt-3">
            <span className="text-slate-400 block text-xs font-sans font-medium">IT &amp; Data Server Racks</span>
            <span className={selectedSystem === "bess" ? "text-emerald-400 font-bold block mt-1" : "text-lithon-red font-bold block mt-1"}>
              {selectedSystem === "bess" ? "Zero Reboot / Zero Packet Loss" : "Cold Reboot &amp; Data Corruption"}
            </span>
          </div>

          <div className="border-t border-white/10 pt-3">
            <span className="text-slate-400 block text-xs font-sans font-medium">Water Pump &amp; Fire Systems</span>
            <span className={selectedSystem === "bess" ? "text-emerald-400 font-bold block mt-1" : "text-lithon-red font-bold block mt-1"}>
              {selectedSystem === "bess" ? "Continuous Pressure Maintained" : "Pressure Loss / Water Hammer"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

