"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Layers,
  ThermometerSnowflake,
  ShieldCheck,
  Zap,
  Flame,
  Activity,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";

interface Subsystem {
  id: string;
  name: string;
  shortLabel: string;
  category: string;
  xPercent: number; // Position on the 3D cutaway (0-100)
  yPercent: number;
  specs: { label: string; value: string }[];
  description: string;
  compliance: string[];
  icon: typeof Layers;
  accentColor: string;
}

const SUBSYSTEMS: Subsystem[] = [
  {
    id: "battery-racks",
    name: "Tier-1 LFP Battery Module Racks",
    shortLabel: "LFP Racks",
    category: "Electrochemical Storage",
    xPercent: 18,
    yPercent: 48,
    icon: Layers,
    accentColor: "#0B3388",
    specs: [
      { label: "Cell Chemistry", value: "Lithium Iron Phosphate (LiFePO4)" },
      { label: "Cycle Longevity", value: ">6,000 cycles @ 88% DoD" },
      { label: "Thermal Runaway", value: "Inherently non-combustible (>270°C onset)" },
      { label: "Cell Configuration", value: "3.2V 280Ah Prismatic Grade-A" },
    ],
    description:
      "Lith-On battery racks utilize laser-welded copper busbars and isolated module enclosures. Each rack integrates high-density prismatic cells with individual cell balancing to guarantee decade-long calendar life even under daily deep cycling.",
    compliance: ["IEC 62619", "BIS IS 16046-2", "UN 38.3"],
  },
  {
    id: "bms",
    name: "Automotive-Grade In-House BMS",
    shortLabel: "Digital BMS",
    category: "Battery Intelligence",
    xPercent: 37,
    yPercent: 44,
    icon: ShieldCheck,
    accentColor: "#0B3388",
    specs: [
      { label: "Monitoring Granularity", value: "Cell-level Voltage (±1mV) & Temp" },
      { label: "Current Sensing", value: "Dual Hall-effect shunts (±0.2% accuracy)" },
      { label: "Safety Redundancy", value: "Independent hardware over-voltage trip" },
      { label: "SoC / SoH Precision", value: "Coulomb counting + Kalman filtering" },
    ],
    description:
      "Our proprietary Battery Management System executes continuous diagnostic sweeps every 10 milliseconds. It prevents over-discharge, micro-shorts, and thermal anomalies before they propagate, operating on an automotive safety architecture.",
    compliance: ["IEC 61508 SIL-2", "ISO 26262 ASIL-C", "CE EMC Directive"],
  },
  {
    id: "pcs",
    name: "Bi-Directional PCS Inverter & Switchgear",
    shortLabel: "PCS Inverter",
    category: "Power Conversion",
    xPercent: 46,
    yPercent: 52,
    icon: Zap,
    accentColor: "#F74530",
    specs: [
      { label: "UPS Transfer Time", value: "<10 milliseconds (Zero load drop)" },
      { label: "Peak Efficiency", value: "98.8% conversion efficiency" },
      { label: "Voltage Output", value: "415V 3-Phase / 11kV stepped transformer" },
      { label: "Grid Support", value: "Active & reactive power control (P/Q)" },
    ],
    description:
      "High-speed bi-directional power conversion system converts DC stored energy to synchronous 3-phase AC in sub-10ms during utility brownouts or blackouts, safeguarding sensitive elevators, medical scanners, and CNC machinery.",
    compliance: ["IEEE 1547", "IEC 62477-1", "CEA Technical Standards"],
  },
  {
    id: "thermal",
    name: "IceBattery® Passive Shield + Active HVAC",
    shortLabel: "IceBattery® Thermal",
    category: "Thermal Physics",
    xPercent: 58,
    yPercent: 34,
    icon: ThermometerSnowflake,
    accentColor: "#0284C7",
    specs: [
      { label: "Ceramic Coating", value: "300µm–400µm IceBattery® exterior film" },
      { label: "Solar Reflectance", value: ">90% NIR solar radiation rejected" },
      { label: "Radiative Window", value: "8–14µm Atmospheric transmission window" },
      { label: "Core Operating Range", value: "20°C – 25°C even at 50°C ambient" },
    ],
    description:
      "Lith-On containers feature patented IceBattery® nanotechnology. By reflecting 90%+ solar rays and radiating heat directly into deep space, HVAC parasitic power draw is cut by >20%, dramatically extending electrochemical cell lifetime.",
    compliance: ["Patented Technology", "ISO 9001:2015", "IP55 Outdoor Enclosure"],
  },
  {
    id: "fire",
    name: "Multi-Tier Aerosol Fire Suppression",
    shortLabel: "Aerosol Safety",
    category: "Life Safety & Containment",
    xPercent: 72,
    yPercent: 28,
    icon: Flame,
    accentColor: "#F74530",
    specs: [
      { label: "Suppression Agent", value: "Solid-state condensed aerosol (Zero water)" },
      { label: "Detection Multi-Sensor", value: "Aspiration smoke + CO + H2 gas sensors" },
      { label: "Discharge Speed", value: "<15 seconds complete total flooding" },
      { label: "Environmental", value: "Zero ODP (Ozone Depletion), Non-toxic" },
    ],
    description:
      "Lith-On enclosures feature engineered multi-stage fire suppression. Gas detection catches early off-gassing venting before flames arise, discharging non-conductive aerosol that leaves zero corrosive residue and prevents re-ignition.",
    compliance: ["NFPA 855", "UL 9540A", "EN 15276"],
  },
  {
    id: "scada",
    name: "Edge SCADA & Cloud EMS Console",
    shortLabel: "Edge SCADA",
    category: "Supervisory Control",
    xPercent: 93,
    yPercent: 54,
    icon: Activity,
    accentColor: "#0B3388",
    specs: [
      { label: "Protocols", value: "IEC 61850, Modbus TCP/IP, MQTT, DNP3" },
      { label: "Telemetry Latency", value: "<100ms cloud synchronization" },
      { label: "Dispatch Modes", value: "Peak Shaving, ToD Arbitrage, UPS, Microgrid" },
      { label: "Cybersecurity", value: "Hardware secure enclave & TLS 1.3" },
    ],
    description:
      "Our in-house SCADA edge controller monitors thousands of real-time metrics across every cell and container. Algorithms forecast facility load patterns to autonomously charge during lowest-tariff hours and discharge during penalty peaks.",
    compliance: ["IEC 61850", "IEC 62351 Cybersecurity", "CERT-In Guidelines"],
  },
];

export function InteractiveBessCutaway() {
  const [activeSubsystem, setActiveSubsystem] = useState<Subsystem>(SUBSYSTEMS[0]);

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-5">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0B3388]">
            <Layers className="h-4 w-4" />
            <span>Hardware Architecture &amp; Subsystems</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight mt-1">
            Containerized BESS Engineering Cutaway
          </h3>
          <p className="text-xs text-gray-600 mt-1 max-w-xl">
            Click any interactive pulse point below to inspect Lith-On&apos;s integrated container components, from Tier-1 LFP cell stacks to IceBattery® thermal barriers.
          </p>
        </div>

        {/* Quick selector pill badges */}
        <div className="flex flex-wrap gap-1.5">
          {SUBSYSTEMS.map((sub) => {
            const isSelected = activeSubsystem.id === sub.id;
            return (
              <button
                key={sub.id}
                type="button"
                onClick={() => setActiveSubsystem(sub)}
                className={`rounded-lg px-2.5 py-1 text-xs font-medium transition-all ${
                  isSelected
                    ? "bg-[#0B3388] text-white shadow-sm"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {sub.shortLabel}
              </button>
            );
          })}
        </div>
      </div>

      {/* 3D Cutaway Interactive Canvas */}
      <div className="relative mt-6 rounded-xl border border-gray-200 bg-gradient-to-b from-gray-50/60 to-white p-4 sm:p-6 overflow-hidden">
        <div className="relative aspect-[16/7] w-full min-h-[260px] sm:min-h-[380px] rounded-lg overflow-hidden flex items-center justify-center">
          {/* Authentic 3D Cutaway Graphic */}
          <Image
            src="/images/products/bess-3d-cutaway.jpg"
            alt="Lith-On Containerized BESS 3D Subsystem Engineering Cutaway"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 1200px"
            priority
          />

          {/* Interactive Glowing Hotspot Pins */}
          {SUBSYSTEMS.map((sub) => {
            const isSelected = activeSubsystem.id === sub.id;
            return (
              <button
                key={sub.id}
                type="button"
                onClick={() => setActiveSubsystem(sub)}
                className="group absolute -translate-x-1/2 -translate-y-1/2 focus:outline-none"
                style={{
                  left: `${sub.xPercent}%`,
                  top: `${sub.yPercent}%`,
                }}
                aria-label={`Inspect ${sub.name}`}
              >
                {/* Ping animation */}
                <span
                  className={`absolute -inset-2 rounded-full opacity-75 animate-ping ${
                    isSelected ? "bg-[#F74530]" : "bg-[#0B3388] group-hover:bg-[#F74530]"
                  }`}
                  style={{ animationDuration: isSelected ? "1.8s" : "3s" }}
                />

                {/* Main pin button */}
                <span
                  className={`relative flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full border-2 border-white shadow-md text-white transition-all transform ${
                    isSelected
                      ? "scale-110 bg-[#F74530] ring-4 ring-[#F74530]/20"
                      : "bg-[#0B3388] group-hover:scale-110 group-hover:bg-[#F74530]"
                  }`}
                >
                  <sub.icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </span>

                {/* Floating tooltip on hover */}
                <span className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden sm:group-hover:flex items-center gap-1 rounded-md bg-gray-900/90 px-2 py-1 text-[11px] font-semibold text-white whitespace-nowrap shadow-md z-20">
                  {sub.shortLabel}
                  <ChevronRight className="h-3 w-3 text-red-400" />
                </span>
              </button>
            );
          })}
        </div>

        {/* Live Subsystem Detail Card */}
        <div className="mt-5 rounded-xl border border-gray-200 bg-white p-5 sm:p-6 shadow-sm transition-all">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-gray-100 pb-4">
            <div className="flex items-center gap-3">
              <div
                className="flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-sm"
                style={{ backgroundColor: activeSubsystem.accentColor }}
              >
                <activeSubsystem.icon className="h-5 w-5" />
              </div>
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-500">
                  {activeSubsystem.category}
                </span>
                <h4 className="text-lg font-bold text-gray-900 leading-tight">
                  {activeSubsystem.name}
                </h4>
              </div>
            </div>

            {/* Compliance badges */}
            <div className="flex flex-wrap items-center gap-1.5">
              {activeSubsystem.compliance.map((cert) => (
                <span
                  key={cert}
                  className="inline-flex items-center gap-1 rounded-md bg-blue-50 px-2 py-0.5 text-[11px] font-medium text-[#0B3388] border border-blue-100"
                >
                  <CheckCircle2 className="h-3 w-3 text-[#0B3388]" />
                  <span>{cert}</span>
                </span>
              ))}
            </div>
          </div>

          <p className="mt-3.5 text-xs sm:text-sm text-gray-700 leading-relaxed">
            {activeSubsystem.description}
          </p>

          {/* Technical Specs Grid */}
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {activeSubsystem.specs.map((spec) => (
              <div
                key={spec.label}
                className="rounded-lg bg-gray-50 p-2.5 border border-gray-100"
              >
                <span className="text-[10px] font-medium text-gray-500 uppercase block tracking-wider">
                  {spec.label}
                </span>
                <span className="text-xs font-bold text-gray-900 block mt-0.5">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
