"use client";

import { useState } from "react";
import { MapPin, Zap, TrendingUp } from "lucide-react";

interface ProjectNode {
  id: string;
  name: string;
  location: string;
  coords: { x: number; y: number }; // Relative SVG % coordinates on India map
  type: string;
  capacity: string;
  metrics: string;
  description: string;
}

const DEPLOYMENTS: ProjectNode[] = [
  {
    id: "noida-hq",
    name: "Lith-On Manufacturing HQ & Lab",
    location: "Sector 136, Noida, UP",
    coords: { x: 38, y: 32 },
    type: "Manufacturing & R&D",
    capacity: "250 MWh Annual Capacity",
    metrics: "20,000 sq. ft. Facility",
    description: "Primary manufacturing, pack assembly, and cell testing facility for all C&I and containerized BESS."
  },
  {
    id: "invertis",
    name: "Invertis University Microgrid",
    location: "Bareilly, Uttar Pradesh",
    coords: { x: 44, y: 34 },
    type: "Institutional Solar + BESS",
    capacity: "1.0 MWh BESS + 900 kW Solar",
    metrics: "₹2.26 Cr/yr Savings | 4.29-yr Payback",
    description: "Campus microgrid eliminating peak tariffs and diesel backup."
  },
  {
    id: "gurugram-society",
    name: "500-Flat High-Rise Community",
    location: "Gurugram, NCR",
    coords: { x: 36, y: 34 },
    type: "Residential Microgrid",
    capacity: "7.0 MWh / 2.4 MW BESS",
    metrics: "₹4.76 Cr/yr Savings | 1.6-yr Payback",
    description: "Replaced 3000 kVA DG fleet, achieving 100% CAQM GRAP compliance with zero lift blackout delay."
  },
  {
    id: "srinagar-defense",
    name: "Indian Army High-Altitude Post",
    location: "Srinagar, J&K",
    coords: { x: 31, y: 15 },
    type: "Defense & Strategic Storage",
    capacity: "Ruggedized Arctic BESS",
    metrics: "-30°C Extreme Temperature Tolerance",
    description: "Replaces high-altitude kerosene and diesel transport with solar-coupled resilient energy storage."
  },
  {
    id: "rvunl-jaipur",
    name: "RVUNL Substation Peaking",
    location: "Jaipur, Rajasthan",
    coords: { x: 32, y: 37 },
    type: "Utility Substation Support",
    capacity: "33kV Feeder Storage",
    metrics: "Frequency Regulation & Peak Support",
    description: "Mitigates solar duck-curve intermittency and provides rapid grid stabilization."
  },
  {
    id: "pwc-delhi",
    name: "PwC Corporate Towers",
    location: "New Delhi",
    coords: { x: 37, y: 31 },
    type: "Commercial Peak Shaving",
    capacity: "High-Density Indoor BESS",
    metrics: "Maximum Demand Penalty Elimination",
    description: "Peak shaving for EV fleet charging and corporate data center power security."
  }
];

export function PanIndiaMap() {
  const [selectedNode, setSelectedNode] = useState<ProjectNode>(DEPLOYMENTS[1]); // Default to Invertis

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
      <div className="border-b border-gray-100 pb-4">
        <div className="flex items-center gap-2 text-xs font-medium text-lithon-blue">
          <MapPin className="h-4 w-4" />
          <span>Pan-India Strategic Footprint</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight mt-1">
          Proven Commercial &amp; Strategic Deployments
        </h3>
        <p className="text-xs text-gray-600 mt-1">
          Over 500+ MWh deployed globally across universities, high-rises, utilities, and high-altitude defense.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-12 mt-6 items-center">
        {/* Interactive Vector Map Representation */}
        <div className="lg:col-span-7 relative aspect-[4/3] w-full rounded-xl border border-gray-200 bg-surface-light p-4 flex items-center justify-center overflow-hidden">
          {/* India Vector Outline SVG */}
          <svg className="w-full h-full max-h-[380px]" viewBox="0 0 500 550" fill="none" xmlns="http://www.w3.org/2000/svg">
            <title>Lith-On Pan-India Deployment Map</title>
            
            {/* India Approximate Simplified Geometric Boundary */}
            <path
              d="M170 30 L220 50 L270 40 L280 80 L350 110 L390 140 L380 180 L440 180 L480 210 L440 240 L390 220 L350 240 L360 300 L320 340 L300 420 L250 510 L220 450 L190 390 L160 360 L140 280 L120 250 L150 200 L180 170 L150 120 L150 70 Z"
              fill="#FFFFFF"
              stroke="#CBD5E1"
              strokeWidth="2"
            />

            {/* Northern Crown */}
            <path d="M170 30 L160 10 L190 5 L220 20 L220 50 Z" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />

            {/* Connection Network Grid Lines between Nodes */}
            <line x1="185" y1="180" x2="220" y2="190" stroke="#0B3388" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.4" />
            <line x1="220" y1="190" x2="190" y2="90" stroke="#0B3388" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.4" />
            <line x1="185" y1="180" x2="160" y2="205" stroke="#0B3388" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.4" />

            {/* Render Nodes as SVG circles */}
            {DEPLOYMENTS.map((node) => {
              const isSelected = selectedNode.id === node.id;
              // Map coords to SVG viewport
              const cx = (node.coords.x / 100) * 500;
              const cy = (node.coords.y / 100) * 550;

              return (
                <g 
                  key={node.id} 
                  className="cursor-pointer" 
                  onClick={() => setSelectedNode(node)}
                >
                  {/* Outer pulse if selected */}
                  {isSelected && (
                    <circle cx={cx} cy={cy} r="16" fill="#0B3388" fillOpacity="0.2" className="animate-ping" />
                  )}
                  <circle
                    cx={cx}
                    cy={cy}
                    r={isSelected ? "9" : "6"}
                    fill={node.id === "noida-hq" ? "#F74530" : isSelected ? "#0B3388" : "#64748B"}
                    stroke="#FFFFFF"
                    strokeWidth="2"
                  />
                  {/* Node label */}
                  <text
                    x={cx + 12}
                    y={cy + 4}
                    fill={isSelected ? "#0F172A" : "#64748B"}
                    fontSize={isSelected ? "11" : "10"}
                    fontWeight={isSelected ? "700" : "500"}
                  >
                    {node.location.split(",")[0]}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Selected Deployment Detail Card */}
        <div className="lg:col-span-5">
          <div className="rounded-xl border border-gray-200 bg-surface-light p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-lithon-blue/10 border border-lithon-blue/20 px-3 py-1 text-xs font-semibold text-lithon-blue">
                {selectedNode.type}
              </span>
              <span className="text-xs text-gray-500 font-medium">{selectedNode.location}</span>
            </div>

            <h4 className="text-lg font-bold text-gray-900 mt-3">{selectedNode.name}</h4>
            <p className="text-xs leading-relaxed text-gray-600 mt-2">
              {selectedNode.description}
            </p>

            <div className="mt-5 space-y-2.5 border-t border-gray-200 pt-4">
              <div className="flex items-center gap-2 text-xs">
                <Zap className="h-4 w-4 text-lithon-blue shrink-0" />
                <span className="text-gray-500">Capacity:</span>
                <span className="font-semibold text-gray-900">{selectedNode.capacity}</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <TrendingUp className="h-4 w-4 text-emerald-600 shrink-0" />
                <span className="text-gray-500">Audited Impact:</span>
                <span className="font-semibold text-emerald-700">{selectedNode.metrics}</span>
              </div>
            </div>

            {/* Quick selector buttons for all deployments */}
            <div className="mt-6 border-t border-gray-200 pt-4">
              <span className="text-xs text-gray-500 block mb-2 font-medium">
                Explore Deployments:
              </span>
              <div className="flex flex-wrap gap-1.5" role="tablist" aria-label="Explore Strategic Deployments">
                {DEPLOYMENTS.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    aria-selected={selectedNode.id === item.id}
                    onClick={() => setSelectedNode(item)}
                    className={`min-h-[44px] inline-flex items-center rounded-lg px-3 py-2 text-xs font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lithon-blue ${
                      selectedNode.id === item.id
                        ? "bg-lithon-blue text-white shadow-sm"
                        : "bg-white border border-gray-200 text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    }`}
                  >
                    {item.name.split(" ")[0]}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

