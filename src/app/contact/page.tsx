"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Send, 
  CheckCircle2, 
  AlertTriangle, 
  Globe2, 
  Factory
} from "lucide-react";

const FACILITY_TYPES = [
  "Residential Gated Society / High-Rise Complex",
  "Commercial Office Building / IT Tech Park",
  "Hospital / Critical Care Healthcare Facility",
  "Educational Campus / University Microgrid",
  "Industrial Manufacturing / Food Processing",
  "EV Fast-Charging Plaza",
  "Utility Substation / Solar-Wind Hybrid Farm",
  "Other Industrial / Commercial Application"
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    org: "",
    phone: "",
    email: "",
    city: "",
    facilityType: FACILITY_TYPES[0],
    sanctionedLoadKw: "",
    dgCapacityKva: "",
    dailyOutageHours: "3",
    hasSolar: "No",
    notes: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-16 pb-20">
      {/* 1. Header Banner */}
      <section className="border-b border-gray-200 bg-white px-6 pt-16 pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0B3388] mb-3">
            <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
            <span className="text-gray-400">/</span>
            <span>Contact &amp; Global Offices</span>
          </div>

          <h1 className="text-4xl font-light text-gray-900 sm:text-5xl lg:text-6xl tracking-tight leading-tight">
            Contact Lith-On Bharat Energy <br className="hidden sm:block" />
            <span className="font-semibold text-[#0B3388]">
              Technical Consultation &amp; System Sizing
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl leading-relaxed">
            Get in touch with our energy storage application specialists for site-specific BESS sizing, 
            commercial tariff assessments, or to schedule a tour of our Noida 20,000 sq. ft. manufacturing facility.
          </p>
        </div>
      </section>

      {/* 2. Global Office Locations Grid */}
      <section className="px-6 -mt-10">
        <div className="mx-auto max-w-7xl grid gap-6 md:grid-cols-2">
          {/* Noida HQ Card */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="rounded-full bg-[#0B3388]/10 border border-[#0B3388]/20 text-[#0B3388] text-xs font-bold px-3 py-1">
                  Global Headquarters &amp; Manufacturing Plant
                </span>
                <span className="text-xs font-mono text-gray-500">Sector 136, Noida</span>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-4">
                LITH-ON BHARAT ENERGY PRIVATE LIMITED
              </h2>

              <div className="mt-5 space-y-3 text-xs text-gray-600">
                <div className="flex items-start gap-2.5">
                  <MapPin className="h-4 w-4 text-[#0B3388] shrink-0 mt-0.5" />
                  <span>
                    Arihant Business Centre, Sector 136, Noida - 201304, Uttar Pradesh, India
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Factory className="h-4 w-4 text-gray-400 shrink-0" />
                  <span>20,000 sq. ft. Plant • 250 MWh Annual Production Throughput</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="h-4 w-4 text-[#F74530] shrink-0" />
                  <a href="tel:+917000013009" className="hover:text-gray-900 font-semibold transition-colors py-1 inline-block">+91-7000013009</a>
                  <span className="text-gray-400">/</span>
                  <a href="tel:+917000017005" className="hover:text-gray-900 transition-colors py-1 inline-block">+91-7000017005</a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="h-4 w-4 text-[#0B3388] shrink-0" />
                  <a href="mailto:tech@lith-onbharat.com" className="hover:text-gray-900 transition-colors py-1 inline-block">
                    tech@lith-onbharat.com
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-gray-100 pt-4 flex items-center justify-between text-xs text-gray-500">
              <span className="flex items-center gap-1.5 text-emerald-700 font-medium">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                Factory Open For Audits
              </span>
              <span>Mon–Sat 9:00 AM – 7:00 PM IST</span>
            </div>
          </div>

          {/* Foshan Hub Card */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="rounded-full bg-blue-50 border border-blue-200 text-[#0B3388] text-xs font-bold px-3 py-1">
                  International Innovation &amp; Supply Hub
                </span>
                <span className="text-xs font-mono text-gray-500">Guangdong, China</span>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-4">
                Foshan Technology &amp; Sourcing Center
              </h2>

              <div className="mt-5 space-y-3 text-xs text-gray-600">
                <div className="flex items-start gap-2.5">
                  <MapPin className="h-4 w-4 text-[#0B3388] shrink-0 mt-0.5" />
                  <span>
                    C11-6, Foshan Innovation Torchpark, Jihua 2 Road, Chancheng, Foshan, Guangdong, China
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Globe2 className="h-4 w-4 text-gray-400 shrink-0" />
                  <span>Tier-1 Cell Procurement, Raw Material Testing &amp; Export Logistics</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="h-4 w-4 text-[#0B3388] shrink-0" />
                  <a href="mailto:tech@lith-onbharat.com" className="hover:text-gray-900 transition-colors">
                    tech@lith-onbharat.com
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-gray-100 pt-4 text-xs text-gray-500">
              International Partner Logistics &amp; Direct Factory Supply Allocation
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive RFQ Sizing Intake Form */}
      <section className="px-6">
        <div className="mx-auto max-w-4xl rounded-2xl border border-gray-200 bg-white p-8 sm:p-12 shadow-sm">
          <div className="border-b border-gray-200 pb-6 mb-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0B3388]">
              Engineering Intake Form
            </span>
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl mt-1">
              Request a Technical Sizing Proposal &amp; Payback Model
            </h2>
            <p className="text-xs text-gray-600 mt-1 max-w-2xl leading-relaxed">
              Share your current facility power metrics below. Our Noida engineering team calculates your exact 
              BESS capacity (kWh), required inverter power (kW), and annual diesel fuel savings.
            </p>
          </div>

          {submitted ? (
            <div className="rounded-xl border border-emerald-300 bg-emerald-50 p-8 text-center space-y-4">
              <CheckCircle2 className="h-12 w-12 text-emerald-600 mx-auto" />
              <h3 className="text-2xl font-bold text-gray-900">Engineering Request Received</h3>
              <p className="text-xs text-gray-600 max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-gray-900">{formData.name}</strong>. An electrical application engineer from 
                Lith-On Noida headquarters will review your {formData.facilityType} requirements and provide a preliminary 
                single-line diagram and financial model within 24 hours.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="rounded-full bg-[#0B3388] hover:bg-[#082666] px-5 py-2.5 text-xs font-semibold text-white transition-colors"
                >
                  Submit Another Project
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Facility Details */}
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="facilityType" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Facility Type &amp; Application *
                  </label>
                  <select
                    id="facilityType"
                    required
                    value={formData.facilityType}
                    onChange={(e) => setFormData({ ...formData, facilityType: e.target.value })}
                    className="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-3 sm:py-2.5 text-base sm:text-sm text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B3388]"
                  >
                    {FACILITY_TYPES.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Facility City &amp; State *
                  </label>
                  <input
                    id="city"
                    type="text"
                    required
                    placeholder="e.g. Gurugram, Haryana"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-3 sm:py-2.5 text-base sm:text-sm text-gray-900 placeholder-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B3388]"
                  />
                </div>
              </div>

              {/* Electrical Profile */}
              <div className="grid gap-6 sm:grid-cols-3">
                <div>
                  <label htmlFor="sanctionedLoadKw" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Sanctioned Load (kW or kVA)
                  </label>
                  <input
                    id="sanctionedLoadKw"
                    type="number"
                    placeholder="e.g. 500"
                    value={formData.sanctionedLoadKw}
                    onChange={(e) => setFormData({ ...formData, sanctionedLoadKw: e.target.value })}
                    className="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-3 sm:py-2.5 text-base sm:text-sm text-gray-900 placeholder-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B3388]"
                  />
                </div>

                <div>
                  <label htmlFor="dgCapacityKva" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Installed DG Rating (kVA)
                  </label>
                  <input
                    id="dgCapacityKva"
                    type="number"
                    placeholder="e.g. 750"
                    value={formData.dgCapacityKva}
                    onChange={(e) => setFormData({ ...formData, dgCapacityKva: e.target.value })}
                    className="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-3 sm:py-2.5 text-base sm:text-sm text-gray-900 placeholder-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B3388]"
                  />
                </div>

                <div>
                  <label htmlFor="dailyOutageHours" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Daily Outage / Run Hours
                  </label>
                  <input
                    id="dailyOutageHours"
                    type="number"
                    step="0.5"
                    placeholder="e.g. 3"
                    value={formData.dailyOutageHours}
                    onChange={(e) => setFormData({ ...formData, dailyOutageHours: e.target.value })}
                    className="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-3 sm:py-2.5 text-base sm:text-sm text-gray-900 placeholder-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B3388]"
                  />
                </div>
              </div>

              {/* Contact Information */}
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Authorized Representative Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-3 sm:py-2.5 text-base sm:text-sm text-gray-900 placeholder-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B3388]"
                  />
                </div>

                <div>
                  <label htmlFor="org" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Organization / Housing Society Name *
                  </label>
                  <input
                    id="org"
                    type="text"
                    required
                    placeholder="Company or RWA Name"
                    value={formData.org}
                    onChange={(e) => setFormData({ ...formData, org: e.target.value })}
                    className="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-3 sm:py-2.5 text-base sm:text-sm text-gray-900 placeholder-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B3388]"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Mobile Phone Number *
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    placeholder="+91-XXXXX-XXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-3 sm:py-2.5 text-base sm:text-sm text-gray-900 placeholder-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B3388]"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Official Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-3 sm:py-2.5 text-base sm:text-sm text-gray-900 placeholder-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B3388]"
                  />
                </div>
              </div>

              {/* Additional Notes */}
              <div>
                <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Project Notes &amp; Specific Constraints (Optional)
                </label>
                <textarea
                  id="notes"
                  rows={3}
                  placeholder="Share details on rooftop solar capacity, basement space constraints, elevator quantities, etc."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-3 sm:py-2.5 text-base sm:text-sm text-gray-900 placeholder-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B3388]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 rounded-full bg-[#F74530] hover:bg-[#d83522] px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F74530]"
                >
                  <Send className="h-4 w-4" />
                  <span>Submit Sizing Request</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* 4. Important Notice: Recruitment Fraud Warning Banner */}
      <section className="px-6">
        <div className="mx-auto max-w-4xl rounded-2xl border border-amber-300 bg-amber-50 p-6 sm:p-8">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-6 w-6 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <h3 className="text-base font-bold text-gray-900">Public Advisory: Recruitment &amp; Payment Fraud Warning</h3>
              <p className="text-xs text-gray-700 mt-2 leading-relaxed">
                It has come to our attention that unauthorized individuals and agencies may falsely claim to represent 
                <strong> LITH-ON BHARAT ENERGY PRIVATE LIMITED</strong> (or formerly Neoclo Energy), offering fictitious employment opportunities 
                and demanding interview charges, application fees, or security deposits.
              </p>
              <div className="mt-4 space-y-1 text-xs text-amber-900">
                <p>• <strong>Zero Fee Policy:</strong> Lith-On Bharat Energy NEVER solicits fees or security deposits at any stage of hiring.</p>
                <p>• <strong>Verified Domains:</strong> Official communications originate exclusively from <code>@lith-onbharat.com</code> or <code>@lith-on.com</code>.</p>
                <p>• <strong>Report Suspicious Solicitations:</strong> Forward unauthorized inquiries directly to <a href="mailto:tech@lith-onbharat.com" className="underline font-bold text-gray-900">tech@lith-onbharat.com</a>.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
