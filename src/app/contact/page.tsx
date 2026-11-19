"use client";

import { useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Send, 
  CheckCircle2, 
  AlertTriangle, 
  Globe2, 
  Factory,
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Building2,
  Sparkles
} from "lucide-react";
import { PRODUCTS_DATA, type ProductDetail } from "@/data/products";

type ContactMode = "assessment" | "distributor" | "support";

const FACILITY_OPTIONS = [
  { value: "residential", label: "Residential Gated Society / High-Rise Complex (NCR/Pan-India)" },
  { value: "manufacturing", label: "Industrial Manufacturing / Food & Textile Processing" },
  { value: "commercial", label: "Commercial Office Building / IT & Tech Park" },
  { value: "healthcare", label: "Hospital / Critical Care Healthcare Facility" },
  { value: "education", label: "Educational Campus / University Microgrid" },
  { value: "ev_charging", label: "Highway Commercial EV Fast-Charging Plaza" },
  { value: "data_centers", label: "Hyperscale & Edge Data Center Facility" },
  { value: "utility", label: "Utility Substation / Solar-Wind Hybrid Farm" },
  { value: "other", label: "Other Commercial or Industrial Facility" },
];

const TIMELINE_OPTIONS = [
  "Immediate (Within 30–60 Days / Winter GRAP Urgency)",
  "Next 1–3 Months (Budget Approved)",
  "3–6 Months (Planning & Feasibility Phase)",
  "Exploratory / Budgetary Assessment for FY2026-27"
];

function ContactContent() {
  const searchParams = useSearchParams();
  const initialType = searchParams.get("type");
  const initialProduct = searchParams.get("product");
  const initialSector = searchParams.get("sector");

  const [activeTab, setActiveTab] = useState<ContactMode>(() => {
    if (initialType === "distributor") return "distributor";
    if (initialType === "support") return "support";
    return "assessment";
  });

  // -------------------------------------------------------------
  // TAB 1: Progressive 4-Step BESS Project Assessment Form State
  // -------------------------------------------------------------
  const [assessmentStep, setAssessmentStep] = useState<number>(1);
  const [assessmentSubmitted, setAssessmentSubmitted] = useState<boolean>(false);
  const [assessmentData, setAssessmentData] = useState({
    // Step 1: Project Scope
    facilityType: initialSector ? (FACILITY_OPTIONS.find((f) => f.value === initialSector)?.label || FACILITY_OPTIONS[0].label) : FACILITY_OPTIONS[0].label,
    preferredProduct: initialProduct ? (PRODUCTS_DATA.find((p: ProductDetail) => p.slug === initialProduct)?.name || "Recommended by Engineering") : "Recommended by Engineering",
    city: "",
    timeline: TIMELINE_OPTIONS[0],

    // Step 2: Electrical Metrics (Optional)
    sanctionedLoadKw: "",
    dgCapacityKva: "",
    dailyOutageHours: "3",
    hasSolar: "No",

    // Step 3: Contact Details (Required)
    fullName: "",
    organization: "",
    phone: "",
    email: "",

    // Step 4: Additional Information (Optional)
    specialConstraints: "",
    additionalNotes: "",
  });

  const nextAssessmentStep = () => {
    setAssessmentStep((prev) => Math.min(4, prev + 1));
  };

  const prevAssessmentStep = () => {
    setAssessmentStep((prev) => Math.max(1, prev - 1));
  };

  const handleAssessmentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAssessmentSubmitted(true);
  };

  // -------------------------------------------------------------
  // TAB 2: Channel Partner & Distributor Application State
  // -------------------------------------------------------------
  const [distributorSubmitted, setDistributorSubmitted] = useState<boolean>(false);
  const [distributorData, setDistributorData] = useState({
    companyName: "",
    businessType: "EPC Solar / Electrical Contractor",
    operatingTerritories: "",
    annualTurnover: "₹5 Cr – ₹20 Cr",
    contactPerson: "",
    phone: "",
    email: "",
    existingExperience: "",
  });

  const handleDistributorSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDistributorSubmitted(true);
  };

  // -------------------------------------------------------------
  // TAB 3: Warranty & Engineering Support Ticket State
  // -------------------------------------------------------------
  const [supportSubmitted, setSupportSubmitted] = useState<boolean>(false);
  const [generatedTicketId, setGeneratedTicketId] = useState<string>("LT-582910");
  const [supportData, setSupportData] = useState({
    facilityName: "",
    productModel: "Magna-C&I 260 kWh",
    serialNumber: "",
    urgencyLevel: "Standard Maintenance / Health Check",
    contactPerson: "",
    phone: "",
    email: "",
    issueDescription: "",
  });

  const handleSupportSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setGeneratedTicketId(`LT-${Math.floor(100000 + Math.random() * 900000)}`);
    setSupportSubmitted(true);
  };

  return (
    <div className="space-y-20 sm:space-y-28 lg:space-y-36 pb-28 lg:pb-36">
      {/* 1. Page Header */}
      <section className="border-b border-gray-200 bg-white px-4 sm:px-6 pt-10 sm:pt-36 pb-14 sm:pb-24">
        <div className="mx-auto max-w-7xl">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-medium text-lithon-blue mb-3">
            <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-900 font-semibold" aria-current="page">Contact &amp; Engineering Intake</span>
          </nav>

          <h1 className="text-4xl font-light text-gray-900 sm:text-5xl lg:text-6xl tracking-tight leading-tight">
            Consult With Our <br className="hidden sm:block" />
            <span className="font-semibold text-lithon-blue">
              BESS Application Engineers
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-gray-600 max-w-3xl leading-relaxed">
            Connect directly with Lith-On&apos;s Noida engineering headquarters for verified facility sizing, commercial tariff assessments, channel partnership queries, or factory warranty support.
          </p>

          {/* Tab Selection Navigation */}
          <div className="mt-8 flex flex-wrap gap-2 sm:gap-3" role="tablist" aria-label="Contact Forms">
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "assessment"}
              onClick={() => setActiveTab("assessment")}
              className={`min-h-[44px] inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lithon-blue ${
                activeTab === "assessment"
                  ? "bg-lithon-blue text-white shadow-sm"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              <Sparkles className="h-4 w-4 text-amber-300" />
              <span>BESS Project Assessment (4-Step Flow)</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "distributor"}
              onClick={() => setActiveTab("distributor")}
              className={`min-h-[44px] inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lithon-blue ${
                activeTab === "distributor"
                  ? "bg-lithon-blue text-white shadow-sm"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              <Building2 className="h-4 w-4" />
              <span>Channel Partner / Distributor</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "support"}
              onClick={() => setActiveTab("support")}
              className={`min-h-[44px] inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lithon-blue ${
                activeTab === "support"
                  ? "bg-lithon-blue text-white shadow-sm"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              <span>Warranty &amp; Technical Support</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. Interactive Form Card Section */}
      <section className="px-4 sm:px-6 -mt-8 sm:-mt-10">
        <div className="mx-auto max-w-4xl rounded-2xl border border-gray-200 bg-white p-6 sm:p-10 shadow-sm">
          
          {/* TAB 1: BESS Project Assessment (4-Step Dynamic Flow) */}
          {activeTab === "assessment" && (
            <div>
              <div className="border-b border-gray-200 pb-6 mb-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-xs font-semibold text-lithon-blue">
                      BESS Project Assessment Intake
                    </span>
                    <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl mt-1">
                      {assessmentStep === 1 && "Step 1 of 4: Project Scope & Location"}
                      {assessmentStep === 2 && "Step 2 of 4: Electrical Profile & Load"}
                      {assessmentStep === 3 && "Step 3 of 4: Authorized Representative"}
                      {assessmentStep === 4 && "Step 4 of 4: Additional Requirements & Review"}
                    </h2>
                  </div>

                  <span className="inline-flex items-center rounded-full bg-blue-50 border border-blue-200/80 px-3 py-1 text-xs font-semibold text-lithon-blue shrink-0">
                    Step {assessmentStep} of 4
                  </span>
                </div>

                {/* Progress Indicators */}
                <div className="mt-6 grid grid-cols-4 gap-2">
                  {[
                    { num: 1, label: "Scope" },
                    { num: 2, label: "Power Profile" },
                    { num: 3, label: "Contact" },
                    { num: 4, label: "Review" },
                  ].map((stepItem) => (
                    <div key={stepItem.num} className="space-y-1.5">
                      <div
                        className={`h-2 rounded-full transition-colors ${
                          stepItem.num <= assessmentStep
                            ? "bg-lithon-blue"
                            : "bg-gray-200"
                        }`}
                      />
                      <span className="hidden sm:block text-[11px] font-medium text-gray-500">
                        {stepItem.num}. {stepItem.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {assessmentSubmitted ? (
                <div className="rounded-xl border border-emerald-300 bg-emerald-50 p-8 text-center space-y-4">
                  <CheckCircle2 className="h-12 w-12 text-emerald-700 mx-auto" />
                  <h3 className="text-2xl font-bold text-gray-900">Project Assessment Received</h3>
                  <p className="text-sm text-gray-700 max-w-lg mx-auto leading-relaxed">
                    Thank you, <strong className="text-gray-900">{assessmentData.fullName}</strong>. An electrical application engineer from Lith-On Noida headquarters will review your {assessmentData.facilityType} profile and prepare a preliminary single-line sizing schematic and financial model within 24 business hours.
                  </p>

                  <div className="mt-4 rounded-lg bg-white p-4 border border-emerald-200 text-left text-xs space-y-1.5 max-w-md mx-auto text-gray-600">
                    <div><strong>Facility:</strong> {assessmentData.facilityType}</div>
                    <div><strong>Location:</strong> {assessmentData.city || "Not specified"}</div>
                    <div><strong>DG Rating:</strong> {assessmentData.dgCapacityKva ? `${assessmentData.dgCapacityKva} kVA` : "To be calculated"}</div>
                    <div><strong>Sanctioned Load:</strong> {assessmentData.sanctionedLoadKw ? `${assessmentData.sanctionedLoadKw} kW` : "To be surveyed"}</div>
                    <div><strong>Representative:</strong> {assessmentData.fullName} ({assessmentData.organization})</div>
                  </div>

                  <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        setAssessmentSubmitted(false);
                        setAssessmentStep(1);
                      }}
                      className="rounded-full bg-lithon-blue hover:bg-lithon-blue-hover px-6 py-2.5 text-xs font-semibold text-white transition-colors min-h-[44px]"
                    >
                      Submit Another Facility
                    </button>
                    <Link
                      href="/products"
                      className="rounded-full bg-white border border-gray-300 hover:bg-gray-50 px-6 py-2.5 text-xs font-semibold text-gray-800 transition-colors min-h-[44px] inline-flex items-center"
                    >
                      Explore Products Catalogue
                    </Link>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleAssessmentSubmit} className="space-y-6">
                  
                  {/* STEP 1: Scope & Location */}
                  {assessmentStep === 1 && (
                    <div className="space-y-6">
                      <div className="grid gap-6 sm:grid-cols-2">
                        <div>
                          <label htmlFor="facilityType" className="block text-sm font-medium text-gray-700 mb-1.5">
                            Facility Sector &amp; Application *
                          </label>
                          <select
                            id="facilityType"
                            required
                            value={assessmentData.facilityType}
                            onChange={(e) => setAssessmentData({ ...assessmentData, facilityType: e.target.value })}
                            className="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-3 sm:py-2.5 text-base sm:text-sm text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lithon-blue"
                          >
                            {FACILITY_OPTIONS.map((opt) => (
                              <option key={opt.value} value={opt.label}>
                                {opt.label}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label htmlFor="preferredProduct" className="block text-sm font-medium text-gray-700 mb-1.5">
                            Preferred Hardware Family (Optional)
                          </label>
                          <select
                            id="preferredProduct"
                            value={assessmentData.preferredProduct}
                            onChange={(e) => setAssessmentData({ ...assessmentData, preferredProduct: e.target.value })}
                            className="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-3 sm:py-2.5 text-base sm:text-sm text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lithon-blue"
                          >
                            <option value="Recommended by Engineering">Let Lith-On Application Engineers Recommend</option>
                            {PRODUCTS_DATA.map((prod: ProductDetail) => (
                              <option key={prod.id} value={prod.name}>
                                {prod.name} ({prod.capacity} / {prod.powerRating})
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="grid gap-6 sm:grid-cols-2">
                        <div>
                          <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1.5">
                            Facility City &amp; State *
                          </label>
                          <input
                            id="city"
                            type="text"
                            required
                            placeholder="e.g. Gurugram, Haryana / Pune, Maharashtra"
                            value={assessmentData.city}
                            onChange={(e) => setAssessmentData({ ...assessmentData, city: e.target.value })}
                            className="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-3 sm:py-2.5 text-base sm:text-sm text-gray-900 placeholder-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lithon-blue"
                          />
                        </div>

                        <div>
                          <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-1.5">
                            Project Execution Timeline *
                          </label>
                          <select
                            id="timeline"
                            value={assessmentData.timeline}
                            onChange={(e) => setAssessmentData({ ...assessmentData, timeline: e.target.value })}
                            className="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-3 sm:py-2.5 text-base sm:text-sm text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lithon-blue"
                          >
                            {TIMELINE_OPTIONS.map((t) => (
                              <option key={t} value={t}>{t}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="pt-4 flex justify-end">
                        <button
                          type="button"
                          onClick={() => {
                            if (!assessmentData.city) {
                              alert("Please enter the facility city & state.");
                              return;
                            }
                            nextAssessmentStep();
                          }}
                          className="min-h-[44px] inline-flex items-center gap-2 rounded-full bg-lithon-blue hover:bg-lithon-blue-hover px-6 py-2.5 text-sm font-semibold text-white transition-colors"
                        >
                          <span>Continue to Power Profile</span>
                          <ArrowRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* STEP 2: Power Requirements (Optional details that can be skipped) */}
                  {assessmentStep === 2 && (
                    <div className="space-y-6">
                      <div className="rounded-xl bg-blue-50/70 border border-blue-200/80 p-4 text-xs text-blue-900 leading-relaxed">
                        <strong>Engineering Note:</strong> These electrical metrics are entirely optional. If you do not have current utility bills or transformer ratings handy, simply click <em>&quot;Skip / Continue to Contact&quot;</em> below and our engineers will calculate them during on-site load logging.
                      </div>

                      <div className="grid gap-6 sm:grid-cols-3">
                        <div>
                          <label htmlFor="sanctionedLoadKw" className="block text-sm font-medium text-gray-700 mb-1.5">
                            Sanctioned Grid Load (kW or kVA)
                          </label>
                          <input
                            id="sanctionedLoadKw"
                            type="number"
                            placeholder="e.g. 500 (Optional)"
                            value={assessmentData.sanctionedLoadKw}
                            onChange={(e) => setAssessmentData({ ...assessmentData, sanctionedLoadKw: e.target.value })}
                            className="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-3 sm:py-2.5 text-base sm:text-sm text-gray-900 placeholder-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lithon-blue"
                          />
                        </div>

                        <div>
                          <label htmlFor="dgCapacityKva" className="block text-sm font-medium text-gray-700 mb-1.5">
                            Installed DG Capacity (kVA)
                          </label>
                          <input
                            id="dgCapacityKva"
                            type="number"
                            placeholder="e.g. 750 (Optional)"
                            value={assessmentData.dgCapacityKva}
                            onChange={(e) => setAssessmentData({ ...assessmentData, dgCapacityKva: e.target.value })}
                            className="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-3 sm:py-2.5 text-base sm:text-sm text-gray-900 placeholder-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lithon-blue"
                          />
                        </div>

                        <div>
                          <label htmlFor="dailyOutageHours" className="block text-sm font-medium text-gray-700 mb-1.5">
                            Typical Daily Backup Hours
                          </label>
                          <input
                            id="dailyOutageHours"
                            type="number"
                            step="0.5"
                            placeholder="e.g. 3"
                            value={assessmentData.dailyOutageHours}
                            onChange={(e) => setAssessmentData({ ...assessmentData, dailyOutageHours: e.target.value })}
                            className="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-3 sm:py-2.5 text-base sm:text-sm text-gray-900 placeholder-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lithon-blue"
                          />
                        </div>
                      </div>

                      <div className="grid gap-6 sm:grid-cols-2">
                        <div>
                          <label htmlFor="hasSolar" className="block text-sm font-medium text-gray-700 mb-1.5">
                            Existing Rooftop or Ground Solar PV?
                          </label>
                          <select
                            id="hasSolar"
                            value={assessmentData.hasSolar}
                            onChange={(e) => setAssessmentData({ ...assessmentData, hasSolar: e.target.value })}
                            className="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-3 sm:py-2.5 text-base sm:text-sm text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lithon-blue"
                          >
                            <option value="No">No Existing Solar</option>
                            <option value="Yes (< 100 kWp)">Yes — Under 100 kWp Rooftop</option>
                            <option value="Yes (100–500 kWp)">Yes — 100 kWp to 500 kWp Rooftop</option>
                            <option value="Yes (> 500 kWp)">Yes — Commercial Solar &gt; 500 kWp</option>
                            <option value="Planned">Planned in Next Phase</option>
                          </select>
                        </div>
                      </div>

                      <div className="pt-4 flex items-center justify-between">
                        <button
                          type="button"
                          onClick={prevAssessmentStep}
                          className="min-h-[44px] inline-flex items-center gap-1.5 text-xs font-semibold text-gray-600 hover:text-gray-900 px-3 py-2"
                        >
                          <ArrowLeft className="h-4 w-4" />
                          <span>Back</span>
                        </button>

                        <button
                          type="button"
                          onClick={nextAssessmentStep}
                          className="min-h-[44px] inline-flex items-center gap-2 rounded-full bg-lithon-blue hover:bg-lithon-blue-hover px-6 py-2.5 text-sm font-semibold text-white transition-colors"
                        >
                          <span>Continue to Contact</span>
                          <ArrowRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* STEP 3: Contact Details (Required) */}
                  {assessmentStep === 3 && (
                    <div className="space-y-6">
                      <div className="grid gap-6 sm:grid-cols-2">
                        <div>
                          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1.5">
                            Authorized Representative Name *
                          </label>
                          <input
                            id="fullName"
                            type="text"
                            required
                            placeholder="Full Name &amp; Designation"
                            value={assessmentData.fullName}
                            onChange={(e) => setAssessmentData({ ...assessmentData, fullName: e.target.value })}
                            className="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-3 sm:py-2.5 text-base sm:text-sm text-gray-900 placeholder-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lithon-blue"
                          />
                        </div>

                        <div>
                          <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1.5">
                            Organization / Enterprise / RWA Name *
                          </label>
                          <input
                            id="organization"
                            type="text"
                            required
                            placeholder="e.g. DLF CyberCity RWA / ABC Pharma Ltd"
                            value={assessmentData.organization}
                            onChange={(e) => setAssessmentData({ ...assessmentData, organization: e.target.value })}
                            className="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-3 sm:py-2.5 text-base sm:text-sm text-gray-900 placeholder-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lithon-blue"
                          />
                        </div>

                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                            Mobile Phone Number (WhatsApp Enabled) *
                          </label>
                          <input
                            id="phone"
                            type="tel"
                            required
                            placeholder="+91-XXXXX-XXXXX"
                            value={assessmentData.phone}
                            onChange={(e) => setAssessmentData({ ...assessmentData, phone: e.target.value })}
                            className="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-3 sm:py-2.5 text-base sm:text-sm text-gray-900 placeholder-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lithon-blue"
                          />
                        </div>

                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                            Official Business / Management Email *
                          </label>
                          <input
                            id="email"
                            type="email"
                            required
                            placeholder="name@company.com"
                            value={assessmentData.email}
                            onChange={(e) => setAssessmentData({ ...assessmentData, email: e.target.value })}
                            className="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-3 sm:py-2.5 text-base sm:text-sm text-gray-900 placeholder-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lithon-blue"
                          />
                        </div>
                      </div>

                      <div className="pt-4 flex items-center justify-between">
                        <button
                          type="button"
                          onClick={prevAssessmentStep}
                          className="min-h-[44px] inline-flex items-center gap-1.5 text-xs font-semibold text-gray-600 hover:text-gray-900 px-3 py-2"
                        >
                          <ArrowLeft className="h-4 w-4" />
                          <span>Back</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => {
                            if (!assessmentData.fullName || !assessmentData.organization || !assessmentData.phone || !assessmentData.email) {
                              alert("Please complete all required contact fields.");
                              return;
                            }
                            nextAssessmentStep();
                          }}
                          className="min-h-[44px] inline-flex items-center gap-2 rounded-full bg-lithon-blue hover:bg-lithon-blue-hover px-6 py-2.5 text-sm font-semibold text-white transition-colors"
                        >
                          <span>Review &amp; Submit</span>
                          <ArrowRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* STEP 4: Additional Requirements & Final Review */}
                  {assessmentStep === 4 && (
                    <div className="space-y-6">
                      <div>
                        <label htmlFor="specialConstraints" className="block text-sm font-medium text-gray-700 mb-1.5">
                          Additional Project Constraints &amp; Site Context (Optional)
                        </label>
                        <textarea
                          id="specialConstraints"
                          rows={3}
                          placeholder="Share details on basement installation height, lift quantities, outdoor transformer plinth space, or CAQM compliance deadlines."
                          value={assessmentData.specialConstraints}
                          onChange={(e) => setAssessmentData({ ...assessmentData, specialConstraints: e.target.value })}
                          className="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-3 sm:py-2.5 text-base sm:text-sm text-gray-900 placeholder-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lithon-blue"
                        />
                      </div>

                      {/* Summary Review Box */}
                      <div className="rounded-xl border border-gray-200 bg-gray-50/80 p-5 space-y-3">
                        <div className="flex items-center justify-between border-b border-gray-200 pb-2">
                          <span className="text-xs font-semibold text-gray-700">Project Assessment Summary</span>
                          <button
                            type="button"
                            onClick={() => setAssessmentStep(1)}
                            className="text-xs text-lithon-blue hover:underline font-medium"
                          >
                            Edit Information
                          </button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-600">
                          <div>
                            <span className="text-gray-500 block">Facility &amp; Sector:</span>
                            <span className="font-semibold text-gray-900">{assessmentData.facilityType}</span>
                          </div>
                          <div>
                            <span className="text-gray-500 block">Location:</span>
                            <span className="font-semibold text-gray-900">{assessmentData.city || "Not provided"}</span>
                          </div>
                          <div>
                            <span className="text-gray-500 block">Hardware Track:</span>
                            <span className="font-semibold text-gray-900">{assessmentData.preferredProduct}</span>
                          </div>
                          <div>
                            <span className="text-gray-500 block">Execution Timeline:</span>
                            <span className="font-semibold text-gray-900">{assessmentData.timeline}</span>
                          </div>
                          <div>
                            <span className="text-gray-500 block">DG / Grid Baseline:</span>
                            <span className="font-semibold text-gray-900">
                              {assessmentData.dgCapacityKva ? `${assessmentData.dgCapacityKva} kVA DG` : "No DG specified"} • {assessmentData.sanctionedLoadKw ? `${assessmentData.sanctionedLoadKw} kW load` : "To be calculated"}
                            </span>
                          </div>
                          <div>
                            <span className="text-gray-500 block">Authorized Contact:</span>
                            <span className="font-semibold text-gray-900">{assessmentData.fullName} ({assessmentData.organization})</span>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-lg bg-amber-50 border border-amber-200 p-3.5 text-xs text-amber-800">
                        <strong>Privacy &amp; Data Safeguard:</strong> All shared technical information is held under strict commercial non-disclosure by Lith-On Bharat Energy Private Limited. We do not share your contact details with external intermediaries.
                      </div>

                      <div className="pt-4 flex items-center justify-between">
                        <button
                          type="button"
                          onClick={prevAssessmentStep}
                          className="min-h-[44px] inline-flex items-center gap-1.5 text-xs font-semibold text-gray-600 hover:text-gray-900 px-3 py-2"
                        >
                          <ArrowLeft className="h-4 w-4" />
                          <span>Back</span>
                        </button>

                        <button
                          type="submit"
                          className="min-h-[48px] inline-flex items-center justify-center gap-2 rounded-full bg-lithon-red-ink hover:bg-lithon-red-ink-hover px-8 py-3 text-sm font-semibold text-white shadow-md transition-colors"
                        >
                          <Send className="h-4 w-4" />
                          <span>Submit Assessment Request</span>
                        </button>
                      </div>
                    </div>
                  )}

                </form>
              )}
            </div>
          )}

          {/* TAB 2: Channel Partner & Distributor Application */}
          {activeTab === "distributor" && (
            <div>
              <div className="border-b border-gray-200 pb-6 mb-8">
                <span className="text-xs font-semibold text-lithon-blue">
                  Commercial Expansion
                </span>
                <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl mt-1">
                  Channel Partner &amp; Regional Distributor Application
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 mt-2 max-w-2xl leading-relaxed">
                  Join Lith-On&apos;s pan-India distributor network. We partner with Tier-1 solar EPC contractors, electrical distributors, and industrial power integrators to deploy turnkey C&amp;I BESS solutions with direct factory margins and engineering support.
                </p>
              </div>

              {distributorSubmitted ? (
                <div className="rounded-xl border border-emerald-300 bg-emerald-50 p-8 text-center space-y-4">
                  <CheckCircle2 className="h-12 w-12 text-emerald-700 mx-auto" />
                  <h3 className="text-2xl font-bold text-gray-900">Partner Application Submitted</h3>
                  <p className="text-sm text-gray-700 max-w-lg mx-auto leading-relaxed">
                    Thank you, <strong className="text-gray-900">{distributorData.contactPerson}</strong>. Our Channel Development Director will review your organization&apos;s territory profile and arrange an introductory virtual or in-person briefing at our Noida plant.
                  </p>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setDistributorSubmitted(false)}
                      className="rounded-full bg-lithon-blue hover:bg-lithon-blue-hover px-6 py-2.5 text-xs font-semibold text-white transition-colors min-h-[44px]"
                    >
                      Submit Another Territory
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleDistributorSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Company / Firm Name *
                      </label>
                      <input
                        id="companyName"
                        type="text"
                        required
                        placeholder="e.g. Apex Solar EPC Solutions Pvt Ltd"
                        value={distributorData.companyName}
                        onChange={(e) => setDistributorData({ ...distributorData, companyName: e.target.value })}
                        className="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-3 sm:py-2.5 text-base sm:text-sm text-gray-900 placeholder-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lithon-blue"
                      />
                    </div>

                    <div>
                      <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Primary Business Activity *
                      </label>
                      <select
                        id="businessType"
                        value={distributorData.businessType}
                        onChange={(e) => setDistributorData({ ...distributorData, businessType: e.target.value })}
                        className="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-3 sm:py-2.5 text-base sm:text-sm text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lithon-blue"
                      >
                        <option value="EPC Solar / Electrical Contractor">Turnkey Solar / Electrical EPC</option>
                        <option value="Industrial Electrical Equipment Distributor">Electrical Switchgear &amp; Transformer Distributor</option>
                        <option value="DG Genset Dealer / Service Provider">DG Genset Sales &amp; AMCs Dealer</option>
                        <option value="EV Infrastructure Integrator">EV Charging Network Operator / Integrator</option>
                        <option value="Consulting Electrical Engineer (CEE)">Engineering &amp; MEP Design Consultant</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="operatingTerritories" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Target States / Operating Territories *
                      </label>
                      <input
                        id="operatingTerritories"
                        type="text"
                        required
                        placeholder="e.g. Gujarat, Maharashtra, Rajasthan"
                        value={distributorData.operatingTerritories}
                        onChange={(e) => setDistributorData({ ...distributorData, operatingTerritories: e.target.value })}
                        className="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-3 sm:py-2.5 text-base sm:text-sm text-gray-900 placeholder-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lithon-blue"
                      />
                    </div>

                    <div>
                      <label htmlFor="annualTurnover" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Annual Revenue Bracket *
                      </label>
                      <select
                        id="annualTurnover"
                        value={distributorData.annualTurnover}
                        onChange={(e) => setDistributorData({ ...distributorData, annualTurnover: e.target.value })}
                        className="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-3 sm:py-2.5 text-base sm:text-sm text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lithon-blue"
                      >
                        <option value="Under ₹5 Cr">Under ₹5 Crore</option>
                        <option value="₹5 Cr – ₹20 Cr">₹5 Crore – ₹20 Crore</option>
                        <option value="₹20 Cr – ₹50 Cr">₹20 Crore – ₹50 Crore</option>
                        <option value="Over ₹50 Cr">Over ₹50 Crore</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="distContactPerson" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Principal Contact Person *
                      </label>
                      <input
                        id="distContactPerson"
                        type="text"
                        required
                        placeholder="Director / Business Head Name"
                        value={distributorData.contactPerson}
                        onChange={(e) => setDistributorData({ ...distributorData, contactPerson: e.target.value })}
                        className="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-3 sm:py-2.5 text-base sm:text-sm text-gray-900 placeholder-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lithon-blue"
                      />
                    </div>

                    <div>
                      <label htmlFor="distPhone" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Mobile Phone *
                      </label>
                      <input
                        id="distPhone"
                        type="tel"
                        required
                        placeholder="+91-XXXXX-XXXXX"
                        value={distributorData.phone}
                        onChange={(e) => setDistributorData({ ...distributorData, phone: e.target.value })}
                        className="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-3 sm:py-2.5 text-base sm:text-sm text-gray-900 placeholder-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lithon-blue"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="distEmail" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Official Corporate Email *
                      </label>
                      <input
                        id="distEmail"
                        type="email"
                        required
                        placeholder="corporate@company.com"
                        value={distributorData.email}
                        onChange={(e) => setDistributorData({ ...distributorData, email: e.target.value })}
                        className="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-3 sm:py-2.5 text-base sm:text-sm text-gray-900 placeholder-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lithon-blue"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="distExperience" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Existing Energy / Inverter Infrastructure Portfolio (Optional)
                    </label>
                    <textarea
                      id="distExperience"
                      rows={3}
                      placeholder="Mention past MW volume installed, preferred inverter brands, warehouse logistics, or industrial client base."
                      value={distributorData.existingExperience}
                      onChange={(e) => setDistributorData({ ...distributorData, existingExperience: e.target.value })}
                      className="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-3 sm:py-2.5 text-base sm:text-sm text-gray-900 placeholder-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lithon-blue"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="min-h-[48px] inline-flex items-center justify-center gap-2 rounded-full bg-lithon-blue hover:bg-lithon-blue-hover px-8 py-3.5 text-sm font-semibold text-white shadow-md transition-colors"
                    >
                      <Building2 className="h-4 w-4" />
                      <span>Submit Distributor Application</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}

          {/* TAB 3: Warranty Registration & Technical Support */}
          {activeTab === "support" && (
            <div>
              <div className="border-b border-gray-200 pb-6 mb-8">
                <span className="text-xs font-semibold text-emerald-700">
                  Customer Engineering Care
                </span>
                <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl mt-1">
                  10-Year Warranty &amp; Field Support Request
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 mt-2 max-w-2xl leading-relaxed">
                  Submit a service ticket for commissioned Lith-On systems. Our Noida Operations Control Center operates 24/7 remote SCADA diagnostics with 4 to 8 hour on-site dispatch commitments across Delhi-NCR and major metros.
                </p>
              </div>

              {supportSubmitted ? (
                <div className="rounded-xl border border-emerald-300 bg-emerald-50 p-8 text-center space-y-4">
                  <CheckCircle2 className="h-12 w-12 text-emerald-700 mx-auto" />
                  <h3 className="text-2xl font-bold text-gray-900">Support Ticket Logged</h3>
                  <p className="text-sm text-gray-700 max-w-lg mx-auto leading-relaxed">
                    Ticket #{generatedTicketId} has been generated for <strong className="text-gray-900">{supportData.facilityName}</strong>. A support engineer is actively reviewing your telemetry log and will contact <strong className="text-gray-900">{supportData.contactPerson}</strong> shortly.
                  </p>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setSupportSubmitted(false)}
                      className="rounded-full bg-lithon-blue hover:bg-lithon-blue-hover px-6 py-2.5 text-xs font-semibold text-white transition-colors min-h-[44px]"
                    >
                      Log Another Service Request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSupportSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="suppFacility" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Commissioned Site / Facility Name *
                      </label>
                      <input
                        id="suppFacility"
                        type="text"
                        required
                        placeholder="e.g. Apex Hospital Phase-1 / Bareilly Campus"
                        value={supportData.facilityName}
                        onChange={(e) => setSupportData({ ...supportData, facilityName: e.target.value })}
                        className="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-3 sm:py-2.5 text-base sm:text-sm text-gray-900 placeholder-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lithon-blue"
                      />
                    </div>

                    <div>
                      <label htmlFor="suppModel" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Product Hardware Model *
                      </label>
                      <select
                        id="suppModel"
                        value={supportData.productModel}
                        onChange={(e) => setSupportData({ ...supportData, productModel: e.target.value })}
                        className="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-3 sm:py-2.5 text-base sm:text-sm text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lithon-blue"
                      >
                        <option value="Magna-C&I 260 kWh">Magna-C&amp;I 260 kWh</option>
                        <option value="LT215 Liquid-Cooled 215 kWh">LT215 Liquid-Cooled 215 kWh</option>
                        <option value="Lith-On-50 Heavy Duty 50 kWh">Lith-On-50 Heavy Duty 50 kWh</option>
                        <option value="Max-20HC-5000 Containerized 5.0 MWh">Max-20HC-5000 Utility Container (5.0 MWh)</option>
                        <option value="Custom High-Voltage Battery Pack">Custom High-Voltage Battery Pack</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="suppSerial" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Commissioning Serial / Rack Number (Optional)
                      </label>
                      <input
                        id="suppSerial"
                        type="text"
                        placeholder="e.g. LTH-2025-MG-089"
                        value={supportData.serialNumber}
                        onChange={(e) => setSupportData({ ...supportData, serialNumber: e.target.value })}
                        className="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-3 sm:py-2.5 text-base sm:text-sm text-gray-900 placeholder-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lithon-blue"
                      />
                    </div>

                    <div>
                      <label htmlFor="suppUrgency" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Request Urgency Level *
                      </label>
                      <select
                        id="suppUrgency"
                        value={supportData.urgencyLevel}
                        onChange={(e) => setSupportData({ ...supportData, urgencyLevel: e.target.value })}
                        className="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-3 sm:py-2.5 text-base sm:text-sm text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lithon-blue"
                      >
                        <option value="Critical Outage (Immediate Telemetry Triage)">Critical: System Offline / Immediate Telemetry Triage</option>
                        <option value="Performance Anomaly (SCADA Alert)">High: Battery Alarm / Balancing Advisory</option>
                        <option value="Standard Maintenance / Health Check">Medium: Annual Preventative Health Check</option>
                        <option value="Warranty Documentation / Commissioning Record">General: Warranty Certificate / Records Request</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="suppContact" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Site Engineer / Facility Manager Name *
                      </label>
                      <input
                        id="suppContact"
                        type="text"
                        required
                        placeholder="Full Name"
                        value={supportData.contactPerson}
                        onChange={(e) => setSupportData({ ...supportData, contactPerson: e.target.value })}
                        className="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-3 sm:py-2.5 text-base sm:text-sm text-gray-900 placeholder-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lithon-blue"
                      />
                    </div>

                    <div>
                      <label htmlFor="suppPhone" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Emergency Contact Phone *
                      </label>
                      <input
                        id="suppPhone"
                        type="tel"
                        required
                        placeholder="+91-XXXXX-XXXXX"
                        value={supportData.phone}
                        onChange={(e) => setSupportData({ ...supportData, phone: e.target.value })}
                        className="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-3 sm:py-2.5 text-base sm:text-sm text-gray-900 placeholder-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lithon-blue"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="suppEmail" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Official Facility Email *
                      </label>
                      <input
                        id="suppEmail"
                        type="email"
                        required
                        placeholder="engineer@facility.com"
                        value={supportData.email}
                        onChange={(e) => setSupportData({ ...supportData, email: e.target.value })}
                        className="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-3 sm:py-2.5 text-base sm:text-sm text-gray-900 placeholder-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lithon-blue"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="suppDesc" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Description of Technical Query or Error Code *
                    </label>
                    <textarea
                      id="suppDesc"
                      rows={3}
                      required
                      placeholder="Please note any alarm codes on PCS LCD display, SCADA app notification, or electrical breaker status."
                      value={supportData.issueDescription}
                      onChange={(e) => setSupportData({ ...supportData, issueDescription: e.target.value })}
                      className="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-3 sm:py-2.5 text-base sm:text-sm text-gray-900 placeholder-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lithon-blue"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="min-h-[48px] inline-flex items-center justify-center gap-2 rounded-full bg-emerald-700 hover:bg-emerald-800 px-8 py-3.5 text-sm font-semibold text-white shadow-md transition-colors"
                    >
                      <ShieldCheck className="h-4 w-4" />
                      <span>Log Engineering Service Ticket</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}

        </div>
      </section>

      {/* 3. Global Office Locations Grid */}
      <section className="px-4 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="border-b border-gray-200 pb-4 mb-8">
            <span className="text-xs font-semibold text-lithon-blue">
              Global Manufacturing &amp; Logistics Infrastructure
            </span>
            <h2 className="text-2xl font-bold text-gray-900 tracking-tight sm:text-3xl mt-1">
              Factory Headquarters &amp; Sourcing Hub
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Noida HQ Card */}
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="rounded-full bg-blue-50 border border-blue-200 text-lithon-blue text-xs font-semibold px-3 py-1">
                    Global Headquarters &amp; Manufacturing Plant
                  </span>
                  <span className="text-xs font-normal text-gray-500">Sector 136, Noida</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mt-4">
                  LITH-ON BHARAT ENERGY PRIVATE LIMITED
                </h3>

                <div className="mt-5 space-y-3 text-xs text-gray-600">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="h-4 w-4 text-lithon-blue shrink-0 mt-0.5" />
                    <span>
                      Arihant Business Centre, Sector 136, Noida - 201304, Uttar Pradesh, India
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Factory className="h-4 w-4 text-gray-500 shrink-0" />
                    <span>20,000 sq. ft. Plant • 250 MWh Annual Production Throughput</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="h-4 w-4 text-lithon-red shrink-0" />
                    <a href="tel:+917000013009" className="hover:text-gray-900 font-semibold transition-colors py-1 inline-block">+91-7000013009</a>
                    <span className="text-gray-500">/</span>
                    <a href="tel:+917000017005" className="hover:text-gray-900 transition-colors py-1 inline-block">+91-7000017005</a>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Mail className="h-4 w-4 text-lithon-blue shrink-0" />
                    <a href="mailto:tech@lith-onbharat.com" className="hover:text-gray-900 transition-colors py-1 inline-block">
                      tech@lith-onbharat.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-gray-100 pt-4 flex items-center justify-between text-xs text-gray-500">
                <span className="flex items-center gap-1.5 text-emerald-700 font-medium">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 motion-safe:animate-pulse" />
                  Factory Open For Client Audits
                </span>
                <span>Mon to Sat 9:00 AM – 7:00 PM IST</span>
              </div>
            </div>

            {/* Foshan Hub Card */}
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="rounded-full bg-blue-50 border border-blue-200 text-lithon-blue text-xs font-semibold px-3 py-1">
                    International Innovation &amp; Supply Hub
                  </span>
                  <span className="text-xs font-normal text-gray-500">Guangdong, China</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mt-4">
                  Foshan Technology &amp; Sourcing Center
                </h3>

                <div className="mt-5 space-y-3 text-xs text-gray-600">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="h-4 w-4 text-lithon-blue shrink-0 mt-0.5" />
                    <span>
                      C11-6, Foshan Innovation Torchpark, Jihua 2 Road, Chancheng, Foshan, Guangdong, China
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Globe2 className="h-4 w-4 text-gray-500 shrink-0" />
                    <span>Tier-1 Cell Procurement, Raw Material Testing &amp; Export Logistics</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Mail className="h-4 w-4 text-lithon-blue shrink-0" />
                    <a href="mailto:tech@lith-onbharat.com" className="hover:text-gray-900 transition-colors py-1 inline-block">
                      tech@lith-onbharat.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-gray-100 pt-4 text-xs text-gray-500">
                Direct Supply Sourcing, Cell Factory Quality Assurance &amp; Export Shipping
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Important Notice: Recruitment Fraud Warning Banner */}
      <section className="px-4 sm:px-6">
        <div className="mx-auto max-w-4xl rounded-2xl border border-amber-300 bg-amber-50 p-6 sm:p-8">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-6 w-6 text-amber-700 shrink-0 mt-0.5" />
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

export default function ContactPage() {
  return (
    <Suspense fallback={
      <div className="py-24 text-center">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-lithon-blue border-r-transparent align-[-0.125em]" />
        <p className="mt-3 text-xs text-gray-500">Loading Engineering Intake Form...</p>
      </div>
    }>
      <ContactContent />
    </Suspense>
  );
}
