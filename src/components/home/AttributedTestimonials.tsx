"use client";

import { useState } from "react";
import { Quote, CheckCircle2, Building2, School, Zap } from "lucide-react";

interface Testimonial {
  id: string;
  tabLabel: string;
  icon: typeof School;
  name: string;
  designation: string;
  company: string;
  location: string;
  project: string;
  metric: string;
  quote: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: "university",
    tabLabel: "Invertis University Campus",
    icon: School,
    name: "Dr. R. K. Sharma",
    designation: "Director of Infrastructure & Plant Operations",
    company: "Invertis University Campus",
    location: "Bareilly, Uttar Pradesh",
    project: "1,000 kWh Lith-On BESS + 900 kWp Solar Microgrid",
    metric: "₹2.26 Cr Annual Diesel Savings",
    quote: "Replacing our 2,500 kVA diesel generator cluster with the Lith-On 1 MWh battery system eliminated ₹2.26 Crore in annual fuel logistics. The sub-10ms cutover protects our servers and labs with zero flicker."
  },
  {
    id: "residential",
    tabLabel: "Sector 54 Condominium",
    icon: Building2,
    name: "Vikramjit Singh",
    designation: "President, Management Board",
    company: "Sector 54 Condominium Association",
    location: "Gurugram, Delhi-NCR",
    project: "7,000 kWh High-Rise BESS (500 Flats)",
    metric: "1.8-Year Payback Period",
    quote: "When CAQM Stage IV banned diesel generators across NCR, Lith-On delivered our 7 MWh system on schedule. Our 42 high-speed elevators operate with zero emissions and zero diesel smoke."
  },
  {
    id: "ev-charging",
    tabLabel: "Expressway EV Charging Hub",
    icon: Zap,
    name: "Anand Deshmukh",
    designation: "Head of EV Charging Infrastructure",
    company: "Commercial Fast-Charging Network",
    location: "Delhi-Jaipur Expressway",
    project: "450 kWh / 150 kW High-Power Buffer Skid",
    metric: "₹12.9 Lakh Annual Penalty Shaved",
    quote: "Integrating the Lith-On buffer completely shaved our 150 kW fast-charging demand spikes, saving ₹12.9 Lakh annually in utility penalties while keeping our charging bays fully energized."
  }
];

export function AttributedTestimonials() {
  const [activeTab, setActiveTab] = useState<string>("university");
  const active = TESTIMONIALS.find((t) => t.id === activeTab) || TESTIMONIALS[0];

  return (
    <div className="py-20 sm:py-28 bg-canvas-offwhite border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-3.5 py-1 text-xs font-medium text-lithon-blue">
            <Quote className="h-3.5 w-3.5 text-lithon-blue" />
            <span>Audited Customer Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mt-3 tracking-tight text-balance">
            Proven Performance in <span className="font-semibold text-lithon-blue">Real Installations</span>
          </h2>
        </div>

        {/* Deployment Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8" role="tablist" aria-label="Customer Installation Testimonials">
          {TESTIMONIALS.map((t) => {
            const Icon = t.icon;
            const isSelected = t.id === activeTab;
            return (
              <button
                key={t.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActiveTab(t.id)}
                className={`min-h-[44px] inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lithon-blue ${
                  isSelected
                    ? "bg-lithon-blue text-white shadow-sm"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                <Icon className={`h-3.5 w-3.5 ${isSelected ? "text-white" : "text-lithon-blue"}`} />
                <span>{t.tabLabel}</span>
              </button>
            );
          })}
        </div>

        {/* Editorial Architectural Quote Showcase */}
        <div className="rounded-3xl border border-gray-200 bg-white p-8 sm:p-12 shadow-sm transition-all">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-6 mb-8">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-lithon-blue">
              <CheckCircle2 className="h-4 w-4 text-emerald-700 shrink-0" />
              <span>{active.project}</span>
            </div>
            <span className="inline-block rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 font-mono text-xs font-semibold text-emerald-800">
              {active.metric}
            </span>
          </div>

          <blockquote className="text-lg sm:text-2xl font-light text-gray-900 leading-relaxed tracking-tight text-balance">
            &ldquo;{active.quote}&rdquo;
          </blockquote>

          <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="font-bold text-sm text-gray-900">{active.name}</div>
              <div className="text-xs text-lithon-blue font-medium mt-0.5">{active.designation}</div>
            </div>
            <div className="text-xs text-gray-500 font-medium sm:text-right">
              {active.company} • {active.location}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
