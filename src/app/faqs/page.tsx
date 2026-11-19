"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Search,
  ChevronDown,
  ArrowRight,
  Phone
} from "lucide-react";
import * as Accordion from "@radix-ui/react-accordion";
import { FaqJsonLd } from "@/components/seo/FaqJsonLd";

interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
  // Category 1: Battery Technology & Lifespan
  {
    id: "q1",
    category: "Battery Tech & Lifespan",
    question: "What battery chemistry does Lith-On use, and why?",
    answer: "Lith-On exclusively utilizes Tier-1 Lithium Iron Phosphate (LiFePO4 / LFP). LFP is selected for its intrinsic thermal stability, stable olivine crystal structure, zero cobalt/nickel dependencies, and outstanding cycle life, and is recognised for non-combustion under puncture testing."
  },
  {
    id: "q2",
    category: "Battery Tech & Lifespan",
    question: "How long do Lith-On battery systems last?",
    answer: "Lith-On systems deliver greater than 6,000 full charge-discharge cycles at 88%–90% Depth of Discharge (DoD) under 25°C standard conditions. In typical commercial or residential applications cycling once per day, this translates to an operational design life of 15 to 20 years with over 70% residual capacity remaining at end-of-life."
  },
  {
    id: "q3",
    category: "Battery Tech & Lifespan",
    question: "What is the round-trip energy efficiency of a Lith-On BESS?",
    answer: "Our systems achieve a round-trip AC-to-AC energy efficiency of >95% to 98%, depending on operating C-rates and temperature profiles. The self-discharge rate is extremely low, at less than 2.5% per month (compared to 10%–15% for traditional lead-acid batteries)."
  },
  {
    id: "q4",
    category: "Battery Tech & Lifespan",
    question: "What makes Lith-On systems different from standard imported battery packs?",
    answer: "Most low-cost assemblers import generic, pre-packaged battery cabinets with third-party software that is not tuned for Indian conditions. Lith-On designs and manufactures its own cell-level BMS, bi-directional PCS, and EMS in our 20,000 sq. ft. Noida facility, coating our enclosures with proprietary IceBattery® ceramic insulation to withstand 60°C ambient heat."
  },

  // Category 2: Thermal Safety & Climate
  {
    id: "q5",
    category: "Thermal Safety & Climate",
    question: "How does Lith-On prevent battery fires and overheating?",
    answer: "Safety is built into multiple layers: 1) Non-flammable LFP chemistry with thermal runaway threshold above 270°C. 2) IceBattery® ceramic coating reflecting >90% of solar radiation and emitting far-infrared heat to lower internal cabinet temperatures by 15°C to 30°C. 3) Cell-level BMS with continuous millivolt and dual-point temperature monitoring. 4) Integrated aerosol or clean-agent fire extinguishing systems with multi-gas detection."
  },
  {
    id: "q6",
    category: "Thermal Safety & Climate",
    question: "Can Lith-On BESS operate in extreme 50°C+ summer heat?",
    answer: "Yes. Thanks to native engineering and our proprietary IceBattery® thermal shield, Lith-On enclosures maintain internal thermal equilibrium and are rated for continuous operation in ambient temperatures up to 60°C without triggering thermal curtailment or HVAC overload."
  },
  {
    id: "q7",
    category: "Thermal Safety & Climate",
    question: "What happens if a cell develops an internal fault?",
    answer: "Our 3-tier BMS detects internal impedance deviations, thermal rate-of-rise anomalies, and voltage imbalances instantly. The BMS isolates the affected module via solid-state contactors within milliseconds, sounds local and SCADA cloud alarms, and maintains system operation on redundant strings where configured."
  },

  // Category 3: Commercial Economics & ROI
  {
    id: "q8",
    category: "Commercial Economics & ROI",
    question: "How does a BESS reduce commercial electricity bills?",
    answer: "A Lith-On BESS reduces commercial bills primarily through two mechanisms: 1) Peak Demand Shaving: Discharges during high-load facility spikes (such as chillers or motors starting up) to keep registered peak demand safely below contracted utility thresholds, eliminating expensive Maximum Demand Charges. 2) Time-of-Day (ToD) Tariff Arbitrage: Automatically charges from the grid during low-cost off-peak night hours and discharges during peak daytime/evening tariff windows."
  },
  {
    id: "q9",
    category: "Commercial Economics & ROI",
    question: "Can a BESS be integrated with an existing rooftop solar PV plant?",
    answer: "Yes. Compatible with both AC-coupled and DC-coupled architectures, Lith-On BESS stores daytime solar surplus that would otherwise be curtailed or fed back at unfavorable feed-in tariffs, allowing your facility to achieve up to 80%–90% clean energy self-consumption."
  },
  {
    id: "q10",
    category: "Commercial Economics & ROI",
    question: "What is the typical financial payback period for an industrial BESS?",
    answer: "Across verified client deployments, commercial and industrial payback typically ranges from 1.6 to 4.29 years, depending on local utility tariff structures, diesel generator replacement savings, and daily operating hours."
  },

  // Category 4: Residential & GRAP Regulations
  {
    id: "q11",
    category: "Residential & GRAP",
    question: "What are the key problems with using diesel generators in housing societies?",
    answer: "Fuel Costs: Diesel power costs ₹30 to ₹40 per kWh (consuming over ₹6.5 Crore annually in large 500-flat societies). Startup Delay: Mechanical generators have a 10–30 second blackout gap that stalls elevators between floors and resets Wi-Fi routers. Regulatory Bans: The CAQM enforces GRAP Stage II, III, and IV directives banning diesel generator operations across Delhi-NCR during winter pollution emergencies."
  },
  {
    id: "q12",
    category: "Residential & GRAP",
    question: "How does Lith-On BESS solve high-rise residential power cuts?",
    answer: "Lith-On BESS provides sub-10ms instantaneous switchover, meaning elevator motors never lose drive power, corridor lights stay on, and residents experience zero interruption. It operates completely silently (<55 dB) with zero emissions, ensuring 100% legal compliance with GRAP regulations year-round."
  },
  {
    id: "q13",
    category: "Residential & GRAP",
    question: "How much space does a residential BESS require compared to a DG set?",
    answer: "Lith-On BESS requires up to 50% less physical footprint than an equivalent diesel generator set, completely eliminating bulk underground diesel storage tanks and vertical exhaust chimney piping."
  },

  // Category 5: Telecom & Defense
  {
    id: "q14",
    category: "Telecom & Defense",
    question: "Can Lith-On lithium batteries replace lead-acid banks at telecom towers?",
    answer: "Yes. Our 48V / 51.2V 100Ah and 200Ah lithium battery modules are direct 19-inch rack-mount drop-in replacements for bulky VRLA batteries. They deliver 3x greater usable energy in one-third the weight and space, charge 4x faster, and withstand high-ambient tower sites without air conditioning."
  },
  {
    id: "q15",
    category: "Telecom & Defense",
    question: "Has Lith-On technology been deployed in defense or harsh alpine environments?",
    answer: "Yes. Lith-On ruggedized LFP systems are deployed with the Indian Army in forward high-altitude border security zones in Srinagar and Jammu & Kashmir, performing reliably down to -20°C."
  },

  // Category 6: Installation & 10-Year Warranty
  {
    id: "q16",
    category: "Installation & Warranty",
    question: "Can Lith-On battery storage work with my existing inverters?",
    answer: "Yes. Lith-On BESS supports standard open industrial protocols including Modbus TCP/RTU, CAN, and IEC 61850, allowing direct communication with leading bi-directional commercial inverters, solar charge controllers, and SCADA networks."
  },
  {
    id: "q17",
    category: "Installation & Warranty",
    question: "What is covered under the Lith-On 10-Year Warranty?",
    answer: "Lith-On provides a comprehensive 10-year manufacturer warranty covering cell capacity retention (>70% at 10 years or 6,000 cycles at 88% DoD), internal busbar connections, BMS electronics, and enclosure integrity when operated within factory operating guidelines."
  },
  {
    id: "q18",
    category: "Installation & Warranty",
    question: "Does Lith-On provide 24/7 remote monitoring and after-sales service?",
    answer: "Yes. All systems connect to our secure cloud SCADA monitoring center. Our engineering team in Noida proactively monitors cell voltages, temperatures, and state-of-health 24/7, with field engineering support available for on-site service across India."
  }
];

const CATEGORIES = [
  "All",
  "Battery Tech & Lifespan",
  "Thermal Safety & Climate",
  "Commercial Economics & ROI",
  "Residential & GRAP",
  "Telecom & Defense",
  "Installation & Warranty"
];

export default function FAQsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFAQs = FAQ_DATA.filter((faq) => {
    const matchesCategory = selectedCategory === "All" || faq.category === selectedCategory;
    const matchesSearch = 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-20 sm:space-y-28 lg:space-y-36 pt-28 sm:pt-36 pb-28 lg:pb-36">
      <FaqJsonLd faqs={FAQ_DATA.map((f) => ({ question: f.question, answer: f.answer }))} />
      {/* 1. Header Banner */}
      <section className="px-4 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#0B3388] mb-3">
            <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
            <span className="text-gray-500">/</span>
            <span>Frequently Asked Questions</span>
          </div>

          <h1 className="text-4xl font-light text-gray-900 sm:text-5xl lg:text-6xl tracking-tight leading-tight">
            Frequently Asked Questions <br className="hidden sm:block" />
            <span className="font-bold text-[#0B3388]">
              Technical &amp; Operational Insights
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-gray-600 max-w-3xl leading-relaxed">
            Find detailed, technically verified answers regarding Lith-On Battery Energy Storage Systems (BESS), 
            cell chemistry, financial payback models, CAQM GRAP environmental regulations, and our 10-year warranty.
          </p>

          {/* Search Input */}
          <div className="mt-8 max-w-xl relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search questions (e.g., GRAP, payback, warranty, elevators)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-2xl border border-gray-200 bg-white pl-12 pr-4 py-3.5 text-base sm:text-sm text-gray-900 placeholder-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B3388] shadow-sm"
            />
          </div>
        </div>
      </section>

      {/* 2. Category Filter Pills */}
      <section className="px-4 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap gap-2 pb-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-xl px-4 py-2 text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? "bg-[#0B3388] text-white shadow-sm"
                    : "bg-white text-gray-600 hover:text-gray-900 border border-gray-200 hover:bg-gray-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="mt-3 text-xs text-gray-500 font-medium">
            Showing {filteredFAQs.length} questions
          </div>
        </div>
      </section>

      {/* 3. Accordion Questions List */}
      <section className="px-4 sm:px-6">
        <div className="mx-auto max-w-7xl">
          {filteredFAQs.length > 0 ? (
            <Accordion.Root type="single" collapsible className="space-y-4">
              {filteredFAQs.map((faq) => (
                <Accordion.Item
                  key={faq.id}
                  value={faq.id}
                  className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden transition-all data-[state=open]:border-[#0B3388]"
                >
                  <Accordion.Header className="flex">
                    <Accordion.Trigger className="flex flex-1 items-center justify-between p-5 text-left text-sm font-bold text-gray-900 transition-all hover:text-[#0B3388] [&[data-state=open]>svg]:rotate-180">
                      <div className="flex min-w-0 flex-col items-start gap-2 pr-4 sm:flex-row sm:items-center sm:gap-3">
                        <span className="rounded bg-gray-100 px-2 py-0.5 text-[10px] text-gray-600 font-mono shrink-0">
                          {faq.category}
                        </span>
                        <span className="min-w-0">{faq.question}</span>
                      </div>
                      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200 text-gray-500" />
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="border-t border-gray-100 bg-[#F8FAFC] p-5 text-xs text-gray-600 leading-relaxed">
                    {faq.answer}
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          ) : (
            <div className="rounded-2xl border border-gray-200 bg-white p-12 text-center text-gray-500 text-sm shadow-sm">
              No matching questions found for &ldquo;{searchQuery}&rdquo;. Try another search term or select &ldquo;All&rdquo;.
            </div>
          )}
        </div>
      </section>

      {/* 4. Bottom Support CTA */}
      <section className="px-4 sm:px-6">
        <div className="mx-auto max-w-7xl rounded-3xl bg-[#0B3388] text-white p-8 sm:p-12 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white sm:text-3xl tracking-tight">Have a Question Not Listed Here?</h3>
            <p className="text-sm text-blue-100 mt-2 max-w-xl">
              Connect directly with our Noida engineering and power systems applications team for immediate clarification.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-lithon-red-ink hover:bg-lithon-red-ink-hover px-6 py-3.5 text-xs font-bold text-white transition-all shadow-md"
            >
              <span>Submit Inquiry</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:+917000013009"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-xs font-bold text-white hover:bg-white/20 transition-all"
            >
              <Phone className="h-4 w-4 text-white" />
              <span>+91-7000013009</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
