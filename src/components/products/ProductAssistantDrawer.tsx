"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Bot, 
  X, 
  ArrowRight, 
  Check, 
  MessageSquare
} from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";

interface SizingRecommendation {
  productName: string;
  modelCode: string;
  slug: string;
  capacity: string;
  powerRating: string;
  switchover: string;
  annualSavings: string;
  payback: string;
  dieselDisplaced: string;
}

export function ProductAssistantDrawer({
  preselectedProduct,
  triggerLabel = "Instant Sizing Assistant"
}: {
  preselectedProduct?: string;
  triggerLabel?: string;
}) {
  const [open, setOpen] = useState(false);
  const [facilityType, setFacilityType] = useState<string>("commercial");
  const [powerScale, setPowerScale] = useState<string>("medium");
  const [result, setResult] = useState<SizingRecommendation | null>(null);

  const calculateRecommendation = () => {
    if (facilityType === "telecom" || powerScale === "small") {
      setResult({
        productName: "Lith-On-50 (48 kWh)",
        modelCode: "LO-50-48",
        slug: "lithon-50",
        capacity: "48 kWh (Scalable to 192 kWh)",
        powerRating: "30 kW / 50 kW",
        switchover: "<10 ms Seamless Transfer",
        annualSavings: "₹14.5 Lakh / year",
        payback: "1.8 Years",
        dieselDisplaced: "18,500 L / year"
      });
    } else if (facilityType === "industrial") {
      setResult({
        productName: "LT215 Industrial BESS",
        modelCode: "LO-LT-215",
        slug: "lt215",
        capacity: "215 kWh Cabinet",
        powerRating: "100 kW / 110 kW",
        switchover: "<10 ms Industrial UPS",
        annualSavings: "₹38.2 Lakh / year",
        payback: "2.4 Years",
        dieselDisplaced: "42,000 L / year"
      });
    } else if (facilityType === "utility" || powerScale === "large") {
      setResult({
        productName: "Max-20HC-5000 (5.0 MWh)",
        modelCode: "LO-MAX-5000",
        slug: "max-20hc",
        capacity: "5,000 kWh (5.0 MWh Container)",
        powerRating: "1,250 kW / 2,500 kW",
        switchover: "<20 ms Utility Teleprotection",
        annualSavings: "₹1.85 Crore / year",
        payback: "3.2 Years",
        dieselDisplaced: "280,000 L / year"
      });
    } else {
      setResult({
        productName: "Magna-C&I 260 kWh",
        modelCode: "LO-MC-260",
        slug: "magna-ci",
        capacity: "260 kWh Outdoor Cabinet",
        powerRating: "100 kW / 125 kW",
        switchover: "<10 ms Instantaneous UPS",
        annualSavings: "₹42.6 Lakh / year",
        payback: "2.1 Years",
        dieselDisplaced: "54,000 L / year"
      });
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setOpen(true);
          calculateRecommendation();
        }}
        className="inline-flex items-center gap-2 rounded-full border border-blue-300 bg-blue-50/80 hover:bg-blue-100/80 px-4 py-2 text-xs font-semibold text-[#0B3388] transition-all shadow-sm"
      >
        <Bot className="h-4 w-4 text-[#0B3388]" />
        <span>{triggerLabel}</span>
      </button>

      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
          <Dialog.Content className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-xl bg-white p-6 sm:p-8 shadow-2xl flex flex-col justify-between overflow-y-auto data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right duration-300">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                <div className="flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-[#0B3388]">
                    <Bot className="h-5 w-5" />
                  </div>
                  <div>
                    <Dialog.Title className="text-base font-bold text-gray-900">
                      Lith-On BESS Engineering Assistant
                    </Dialog.Title>
                    <p className="text-xs text-gray-500">
                      {preselectedProduct 
                        ? `Evaluating parameters for ${preselectedProduct}` 
                        : "Instant sizing calculation based on Noida factory technical standards"}
                    </p>
                  </div>
                </div>
                <Dialog.Close asChild>
                  <button
                    type="button"
                    className="rounded-lg p-1.5 text-gray-400 hover:text-gray-900 hover:bg-gray-100"
                    aria-label="Close assistant"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </Dialog.Close>
              </div>

              {/* Sizing Form Controls */}
              <div className="mt-6 space-y-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
                    1. Select Facility Profile
                  </label>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {[
                      { id: "commercial", label: "Commercial Complex / IT Park" },
                      { id: "housing", label: "Housing Society (CAQM GRAP)" },
                      { id: "industrial", label: "Manufacturing / Factory HT" },
                      { id: "ev", label: "EV Fast-Charging Plaza" },
                      { id: "telecom", label: "Highway Fuel Station / Telecom" },
                      { id: "utility", label: "Solar IPP / Utility Substation" }
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => {
                          setFacilityType(item.id);
                          setTimeout(calculateRecommendation, 50);
                        }}
                        className={`p-3 rounded-xl border text-left font-medium transition-all ${
                          facilityType === item.id
                            ? "border-[#0B3388] bg-blue-50/60 text-[#0B3388] font-bold"
                            : "border-gray-200 text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
                    2. Power Scale / Displaced DG Capacity
                  </label>
                  <div className="grid grid-cols-3 gap-2 text-xs font-mono">
                    {[
                      { id: "small", label: "30–125 kVA" },
                      { id: "medium", label: "250–750 kVA" },
                      { id: "large", label: "1,000+ kVA" }
                    ].map((scale) => (
                      <button
                        key={scale.id}
                        type="button"
                        onClick={() => {
                          setPowerScale(scale.id);
                          setTimeout(calculateRecommendation, 50);
                        }}
                        className={`p-2.5 rounded-xl border text-center font-bold transition-all ${
                          powerScale === scale.id
                            ? "border-[#0B3388] bg-[#0B3388] text-white"
                            : "border-gray-200 text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        {scale.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Instant Calculation Card */}
                {result && (
                  <div className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50/80 to-white p-5 space-y-4">
                    <div className="flex items-center justify-between border-b border-blue-100 pb-3">
                      <div>
                        <span className="text-[10px] uppercase font-mono text-[#0B3388] font-bold tracking-wider block">
                          Recommended System Architecture
                        </span>
                        <h4 className="text-lg font-bold text-gray-900 mt-0.5">{result.productName}</h4>
                      </div>
                      <span className="font-mono text-xs font-bold text-gray-500 bg-white px-2.5 py-1 rounded-md border border-gray-200">
                        {result.modelCode}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                      <div className="bg-white p-2.5 rounded-xl border border-gray-200">
                        <span className="text-[10px] text-gray-500 block">Storage Capacity:</span>
                        <strong className="text-sm font-bold text-[#0B3388]">{result.capacity}</strong>
                      </div>
                      <div className="bg-white p-2.5 rounded-xl border border-gray-200">
                        <span className="text-[10px] text-gray-500 block">Rated Power:</span>
                        <strong className="text-sm font-bold text-gray-900">{result.powerRating}</strong>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-center text-xs">
                      <div className="bg-emerald-50 border border-emerald-200 p-2 rounded-xl">
                        <span className="text-[10px] text-emerald-700 block font-medium">Est. Savings</span>
                        <strong className="text-xs font-bold text-emerald-800">{result.annualSavings}</strong>
                      </div>
                      <div className="bg-blue-50 border border-blue-200 p-2 rounded-xl">
                        <span className="text-[10px] text-blue-700 block font-medium">Payback</span>
                        <strong className="text-xs font-bold text-[#0B3388]">{result.payback}</strong>
                      </div>
                      <div className="bg-gray-100 border border-gray-200 p-2 rounded-xl">
                        <span className="text-[10px] text-gray-600 block font-medium">Diesel Displaced</span>
                        <strong className="text-xs font-bold text-gray-900">{result.dieselDisplaced}</strong>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-emerald-800 pt-1">
                      <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>{result.switchover} • 100% CAQM GRAP Compliant</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-6 border-t border-gray-100 space-y-3">
              <div className="flex flex-col sm:flex-row gap-2">
                {result && (
                  <Link
                    href={`/products/${result.slug}`}
                    onClick={() => setOpen(false)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#0B3388] hover:bg-[#082666] px-4 py-3 text-xs font-semibold uppercase tracking-wider text-white shadow-sm transition-all"
                  >
                    <span>View System Specs</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                )}
                <a
                  href={`https://wa.me/917000013009?text=Hello%20Lith-On%20Engineering%2C%20I%20used%20the%20sizing%20assistant%20for%20a%20${encodeURIComponent(facilityType)}%20facility%20and%20got%20${encodeURIComponent(result?.productName || 'BESS')}.%20Please%20provide%20a%20formal%20quote.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] px-4 py-3 text-xs font-semibold text-white shadow-sm transition-all"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>WhatsApp Engineering</span>
                </a>
              </div>
              <div className="flex items-center justify-between text-xs text-gray-500 pt-1 px-1">
                <span>Noida Plant Technical Desk:</span>
                <a href="tel:+917000013009" className="font-semibold text-[#0B3388]">
                  +91-7000013009
                </a>
              </div>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}
