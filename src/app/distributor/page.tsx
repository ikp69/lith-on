import type { Metadata } from "next";
import { 
  Handshake, 
  ShieldCheck, 
  TrendingUp, 
  Truck, 
  FileText, 
  Phone, 
  Mail, 
  ArrowRight,
  CheckCircle2
} from "lucide-react";

export const metadata: Metadata = {
  title: "Become a Distributor & Channel Partner | Lith-On Bharat Energy",
  description: "Join Lith-On's national BESS partner network. Direct factory allocation from our 20,000 sq. ft. Noida facility, protected territories, pre-sales engineering, and 10-year warranties.",
};

const PARTNER_BENEFITS = [
  {
    title: "Direct Noida Plant Allocation",
    description: "Source Tier-1 LiFePO4 battery modules, C&I cabinets, and containerized BESS skids directly from our 250 MWh Noida manufacturing facility with zero broker markups.",
    icon: Truck
  },
  {
    title: "Protected Sales Territories",
    description: "Exclusive state and regional exclusivity agreements for verified EPC partners and industrial electrical equipment distributors.",
    icon: ShieldCheck
  },
  {
    title: "Turnkey Pre-Sales SLD Support",
    description: "Our IIT-led engineering team prepares certified Single Line Diagrams (SLDs), peak shaving payback calculations, and compliance dossiers for your customer pitches.",
    icon: FileText
  },
  {
    title: "High Margins & DG Replacement",
    description: "Capitalize on CAQM GRAP diesel generator bans across NCR and steep industrial maximum demand tariffs with simple 1.6–4 year payback systems.",
    icon: TrendingUp
  }
];

export default function DistributorPage() {
  return (
    <div className="bg-white">
      {/* Editorial Header */}
      <section className="relative border-b border-gray-200 bg-canvas-offwhite pt-10 sm:pt-36 pb-14 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-3.5 py-1 text-xs font-medium text-lithon-blue">
              <Handshake className="h-3.5 w-3.5 text-lithon-blue" />
              <span>National Channel Network</span>
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl font-light tracking-tight text-gray-900">
              Become a Lith-On <span className="font-semibold text-lithon-blue">Channel Partner</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-600 font-normal leading-relaxed">
              Expand your renewable energy and electrical integration business with India&apos;s leading manufacturer of industrial Battery Energy Storage Systems. Deliver turnkey BESS hardware backed by our Noida factory and a 10-year warranty.
            </p>
          </div>
        </div>
      </section>

      {/* Partner Advantages Grid */}
      <section className="py-20 sm:py-24 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-medium text-lithon-blue">
              Why Partner With Lith-On
            </span>
            <h2 className="text-3xl font-light text-gray-900 mt-2">
              Empowering <span className="font-semibold text-lithon-blue">Solar EPCs &amp; Industrial Distributors</span>
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              We empower our channel network with pre-sales engineering, guaranteed cell availability, and transparent technical support.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {PARTNER_BENEFITS.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  className="rounded-2xl border border-gray-200 bg-canvas-offwhite p-6 hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-lithon-blue mb-4">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">{benefit.title}</h3>
                    <p className="mt-2 text-xs text-gray-600 leading-relaxed font-normal">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Distributor Categories & Application Form */}
      <section className="py-20 sm:py-28 lg:py-32 bg-canvas-offwhite border-t border-gray-200" id="apply">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 items-start">
            {/* Left Column: Requirements & Profile */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-medium text-lithon-blue">
                Partner Profile
              </span>
              <h2 className="text-3xl font-light text-gray-900">
                Who Can Apply as a <span className="font-semibold text-lithon-blue">Distributor?</span>
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                We work with experienced engineering entities committed to high installation standards and long-term customer service:
              </p>

              <ul className="space-y-3 text-xs text-gray-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span><strong>Solar EPC Contractors:</strong> Expanding from grid-tied solar into high-margin solar-plus-storage microgrids.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span><strong>Diesel Generator Dealers:</strong> Transitioning commercial clients to clean BESS under CAQM GRAP mandates.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span><strong>Industrial Electrical Contractors:</strong> Managing high-voltage HT substations and plant peak shaving systems.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span><strong>International Importers:</strong> Serving microgrids in Southeast Asia, Africa, and the Middle East.</span>
                </li>
              </ul>

              <div className="rounded-2xl border border-gray-200 bg-white p-6 space-y-3">
                <div className="text-xs font-bold text-gray-900">Direct Channel Head Contact:</div>
                <div className="flex items-center gap-2 text-xs text-gray-700">
                  <Phone className="h-4 w-4 text-lithon-blue" />
                  <a href="tel:+917000013009" className="hover:underline font-semibold">+91-7000013009</a>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-700">
                  <Mail className="h-4 w-4 text-lithon-red" />
                  <a href="mailto:tech@lith-onbharat.com" className="hover:underline">tech@lith-onbharat.com</a>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Partner Application Form */}
            <div className="lg:col-span-7 rounded-3xl border border-gray-200 bg-white p-8 sm:p-10 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Channel Partner Application</h3>
              <p className="text-xs text-gray-600 mb-6 font-normal">
                Submit your credentials. Our channel team in Noida will evaluate your territory and schedule a partner discussion.
              </p>

              <form action="/contact" method="GET" className="space-y-4">
                <input type="hidden" name="type" value="distributor-application" />
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="company-name" className="block text-xs font-semibold text-gray-700 mb-1">Company / Organization Name</label>
                    <input
                      id="company-name"
                      type="text"
                      required
                      placeholder="e.g. Apex Solar Engineering Pvt Ltd"
                      className="w-full rounded-xl border border-gray-300 px-3.5 py-3 text-base sm:py-2.5 sm:text-sm text-gray-900 focus:border-lithon-blue focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-person" className="block text-xs font-semibold text-gray-700 mb-1">Contact Person &amp; Title</label>
                    <input
                      id="contact-person"
                      type="text"
                      required
                      placeholder="e.g. Rajesh Kumar (Managing Director)"
                      className="w-full rounded-xl border border-gray-300 px-3.5 py-3 text-base sm:py-2.5 sm:text-sm text-gray-900 focus:border-lithon-blue focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone-number" className="block text-xs font-semibold text-gray-700 mb-1">Mobile / WhatsApp Number</label>
                    <input
                      id="phone-number"
                      type="tel"
                      required
                      placeholder="+91-9876543210"
                      className="w-full rounded-xl border border-gray-300 px-3.5 py-3 text-base sm:py-2.5 sm:text-sm text-gray-900 focus:border-lithon-blue focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="email-addr" className="block text-xs font-semibold text-gray-700 mb-1">Official Corporate Email</label>
                    <input
                      id="email-addr"
                      type="email"
                      required
                      placeholder="rajesh@apexsolar.in"
                      className="w-full rounded-xl border border-gray-300 px-3.5 py-3 text-base sm:py-2.5 sm:text-sm text-gray-900 focus:border-lithon-blue focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="state-territory" className="block text-xs font-semibold text-gray-700 mb-1">Proposed State / Region</label>
                    <input
                      id="state-territory"
                      type="text"
                      required
                      placeholder="e.g. Gujarat / Western Maharashtra"
                      className="w-full rounded-xl border border-gray-300 px-3.5 py-3 text-base sm:py-2.5 sm:text-sm text-gray-900 focus:border-lithon-blue focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="business-type" className="block text-xs font-semibold text-gray-700 mb-1">Primary Business Nature</label>
                    <select
                      id="business-type"
                      className="w-full rounded-xl border border-gray-300 px-3.5 py-3 text-base sm:py-2.5 sm:text-sm text-gray-900 focus:border-lithon-blue focus:outline-none"
                    >
                      <option value="solar-epc">Solar EPC Integrator</option>
                      <option value="dg-dealer">DG Set Retrofitter / Dealer</option>
                      <option value="electrical-contractor">HT Electrical Contractor</option>
                      <option value="export-partner">International Export Partner</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="annual-turnover" className="block text-xs font-semibold text-gray-700 mb-1">Annual Solar / Energy Equipment Turnover</label>
                  <select
                    id="annual-turnover"
                    className="w-full rounded-xl border border-gray-300 px-3.5 py-3 text-base sm:py-2.5 sm:text-sm text-gray-900 focus:border-lithon-blue focus:outline-none"
                  >
                    <option value="under-1cr">Under ₹1 Crore / year</option>
                    <option value="1cr-5cr">₹1 Crore – ₹5 Crore / year</option>
                    <option value="5cr-25cr">₹5 Crore – ₹25 Crore / year</option>
                    <option value="above-25cr">₹25+ Crore / year</option>
                  </select>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-lithon-blue hover:bg-lithon-blue-hover py-3.5 text-xs font-semibold text-white shadow transition-all min-h-[44px]"
                  >
                    <span>Submit Channel Partner Application</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
