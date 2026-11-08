import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { 
  GraduationCap, 
  CheckCircle2, 
  ShieldCheck, 
  Building2, 
  FileCheck,
  Calendar,
  Factory
} from "lucide-react";
import { GlobalExportsShowcase } from "@/components/home/GlobalExportsShowcase";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CallToAction } from "@/components/ui/CallToAction";

export const metadata: Metadata = {
  title: "About Lith-On Bharat Energy | Corporate Heritage, Technology & Timeline",
  description:
    "Discover Lith-On Bharat Energy (originally Neoclo Energy), our 20,000 sq. ft. Noida facility, verified IEC 61508 / IEC 61850 certifications, and milestone timeline.",
};

const VALUES = [
  {
    title: "1. Innovation & Practical Engineering",
    description: "We engineer application-specific energy storage solutions rather than deploying generic off-the-shelf imports. Every BMS, PCS, and EMS algorithm is tuned for Indian ambient heat and extreme grid load profiles."
  },
  {
    title: "2. Safety & Quality Without Compromise",
    description: "Safety is embedded at every level of our system architecture—from Tier-1 LiFePO4 chemistry and multi-stage electrical isolation to cell-level telemetry and IceBattery® ceramic passive shielding."
  },
  {
    title: "3. Reliability & Proven Performance",
    description: "Our systems are engineered for a 15–20 year operational lifespan, delivering >6,000 charge-discharge cycles at 88%–90% DoD and backed by a transparent 10-year manufacturer warranty."
  },
  {
    title: "4. Customer Commitment & Transparency",
    description: "We partner with clients from initial facility load audits and tariff analyses to turnkey engineering, procurement, construction (EPC), commissioning, and 24/7 cloud SCADA monitoring."
  }
];

const TIMELINE = [
  {
    year: "2022",
    title: "Company Inception as Neoclo Energy",
    focus: "Corporate Foundation & IIT Synergy",
    description: "Founded by IIT alumni and veteran power electronics engineers under the name Neoclo Energy Private Limited. Formed core R&D partnerships for cell chemistry and high-voltage BMS firmware."
  },
  {
    year: "2023",
    title: "Noida Manufacturing Plant Commissioned",
    focus: "20,000 sq. ft. Assembly & IceBattery® R&D",
    description: "Inaugurated our advanced 20,000 sq. ft. plant in Sector 136, Noida (250 MWh annual throughput). Formulated the proprietary IceBattery® 300–400µm inorganic ceramic passive thermal coating."
  },
  {
    year: "2024",
    title: "C&I Flagships & University Microgrid",
    focus: "Magna-C&I 260 kWh & Sub-10ms Cutover",
    description: "Commercialized Magna-C&I 260 kWh and Lith-On-50. Successfully deployed the 1,000 kWh (1 MWh) solar-storage hybrid microgrid at Invertis University, saving ₹2.26 Cr annually in diesel."
  },
  {
    year: "2025",
    title: "The Trifecta Certification Wall",
    focus: "IEC 61508, IEC 61850 & Max-20HC 5 MWh",
    description: "Attained simultaneous certifications for IEC 61508 (Functional Safety SIL 2/3), IEC 61850 (Substation Automation), and BIS. Engineered the Max-20HC-5000 20ft containerized utility BESS."
  },
  {
    year: "2026",
    title: "Lith-On Bharat Energy Formalization",
    focus: "500+ MWh Global Deployment & 25+ Countries",
    description: "Formalized brand identity under Lith-On Bharat Energy Private Limited to spearhead India's domestic BESS and international exports across 25+ partner countries."
  }
];

const CERTIFICATIONS = [
  {
    standard: "IEC 61508",
    title: "Functional Safety SIL 2 / SIL 3",
    scope: "Covers electrical, electronic, and programmable electronic safety-related systems. Validates failsafe hardware isolation in battery packs and PCS.",
    authority: "TUV / Accredited International Laboratory"
  },
  {
    standard: "IEC 61850",
    title: "Substation Communication & Teleprotection",
    scope: "Defines international communication architecture for electrical substations. Enables autonomous grid-tied SCADA telemetry and synthetic inertia.",
    authority: "Utility Grid Conformance Authority"
  },
  {
    standard: "BIS R-Number",
    title: "Bureau of Indian Standards",
    scope: "Mandatory compliance for secondary lithium batteries and module assemblies under IS 16046 (Part 2):2018 / IEC 62133-2.",
    authority: "Government of India (BIS)"
  },
  {
    standard: "CE Marking",
    title: "European Conformity",
    scope: "Certified compliance with European Electromagnetic Compatibility (EMC 2014/30/EU) and Low Voltage Directive (LVD 2014/35/EU).",
    authority: "EU Accredited Testing Body"
  },
  {
    standard: "ISO 9001 & 14001",
    title: "Quality & Environmental Management",
    scope: "Certified quality management in battery assembly, laser welding, and environmentally compliant recycling processes.",
    authority: "Certified Registrar"
  }
];

export default function AboutPage() {
  return (
    <div className="space-y-16 sm:space-y-24 pb-20 bg-white">
      {/* 1. Header Banner */}
      <section className="border-b border-gray-200 bg-canvas-offwhite px-4 sm:px-6 pt-16 sm:pt-20 pb-20 sm:pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-2 text-xs font-medium text-lithon-blue mb-3">
            <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
            <span className="text-gray-400">/</span>
            <span>About Us</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light text-gray-900 tracking-tight leading-tight">
            Integrated Energy Storage. <br className="hidden sm:block" />
            <span className="font-semibold text-lithon-blue">
              Engineered for the Real World.
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-gray-600 max-w-3xl leading-relaxed font-normal">
            Lith-On Bharat Energy Private Limited is a premier Indian manufacturer and system integrator of 
            industrial Battery Energy Storage Systems (BESS) and heavy-duty lithium battery packs. Bringing together 
            over 40 cumulative years of grid engineering wisdom, we build systems purpose-engineered for demanding climates.
          </p>

          {/* Quick Sub-Navigation Anchors */}
          <div className="mt-8 flex flex-wrap gap-2.5 text-xs font-semibold">
            <a href="#company" className="rounded-full bg-white border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-lithon-blue hover:border-lithon-blue/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lithon-blue active:scale-[0.98]">
              Company &amp; Neoclo Identity
            </a>
            <a href="#manufacturing" className="rounded-full bg-white border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-lithon-blue hover:border-lithon-blue/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lithon-blue active:scale-[0.98]">
              Noida Manufacturing
            </a>
            <a href="#certifications" className="rounded-full bg-white border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-lithon-blue hover:border-lithon-blue/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lithon-blue active:scale-[0.98]">
              Verified Certifications
            </a>
            <a href="#timeline" className="rounded-full bg-white border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-lithon-blue hover:border-lithon-blue/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lithon-blue active:scale-[0.98]">
              Visual Timeline
            </a>
          </div>
        </div>
      </section>

      {/* 2. Global Footprint Metrics */}
      <section className="px-4 sm:px-6 -mt-12 sm:-mt-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-md lg:grid-cols-4 lg:p-8">
            <div className="border-r border-gray-200/80 pr-4">
              <div className="text-3xl sm:text-4xl font-bold text-gray-900">250 MWh</div>
              <div className="text-xs sm:text-sm text-gray-600 mt-1 font-medium">Annual Production Throughput</div>
              <div className="text-xs text-lithon-blue font-semibold mt-1">50 MWh BESS + 200 MWh Pack</div>
            </div>

            <div className="border-r border-gray-200/80 pr-4 pl-2 lg:pl-4">
              <div className="text-3xl sm:text-4xl font-bold text-gray-900">20,000 sq.ft.</div>
              <div className="text-xs sm:text-sm text-gray-600 mt-1 font-medium">Manufacturing &amp; Testing Facility</div>
              <div className="text-xs text-gray-500 mt-1">Sector 136, Noida, UP</div>
            </div>

            <div className="border-r border-gray-200/80 pr-4 pl-2 lg:pl-4">
              <div className="text-3xl sm:text-4xl font-bold text-emerald-600">500+ MWh</div>
              <div className="text-xs sm:text-sm text-gray-600 mt-1 font-medium">Global Installed Asset Base</div>
              <div className="text-xs text-emerald-700 font-semibold mt-1">1,000+ Operational Systems</div>
            </div>

            <div className="pl-2 lg:pl-4">
              <div className="text-3xl sm:text-4xl font-bold text-lithon-red">25+</div>
              <div className="text-xs sm:text-sm text-gray-600 mt-1 font-medium">Export Partner Countries</div>
              <div className="text-xs text-gray-500 mt-1">Asia, Africa, UAE &amp; Europe</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Company & Neoclo Energy Heritage */}
      <section className="px-4 sm:px-6" id="company">
        <div className="mx-auto max-w-7xl rounded-2xl border border-blue-200/90 bg-surface-blue-grey/60 p-7 sm:p-9 shadow-sm">
          <div className="flex items-start gap-4">
            <Building2 className="h-6 w-6 text-lithon-blue shrink-0 mt-1" />
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                Corporate Identity: Lith-On Bharat Energy &amp; Neoclo Energy
              </h2>
              <p className="mt-2 text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
                Our organization was incorporated in 2022 under the legal registration of <strong>Neoclo Energy Private Limited</strong>. As our market focus expanded across utility BESS containers, commercial peak shaving skids, and global institutional contracts, our brand and commercial operations evolved into <strong>Lith-On Bharat Energy Private Limited</strong>.
              </p>
              <div className="mt-3 text-xs sm:text-sm text-gray-600 leading-relaxed">
                <span className="font-semibold text-gray-900">Important Note on Communications:</span> Corporate correspondence, domain routing, and contractual documents may reference both <em>Lith-On Bharat Energy</em> and <em>Neoclo Energy</em> under the same unified engineering entity and Noida headquarters.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Leadership & Engineering Pedigree */}
      <section className="px-4 sm:px-6">
        <div className="mx-auto max-w-7xl rounded-2xl border border-gray-200 bg-white p-8 sm:p-10 shadow-sm">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-2 text-xs font-medium text-lithon-blue mb-2">
                <GraduationCap className="h-4 w-4" />
                <span>Foundational Heritage</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                IIT Alumni Leadership &amp; Indian Grid Wisdom
              </h2>
              <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                Lith-On’s engineering leadership is anchored by alumni from the prestigious Indian Institutes of Technology (IIT) 
                and veteran energy storage specialists. Unlike trading intermediaries who import generic kits engineered for mild 
                temperate climates, Lith-On designs proprietary hardware and firmware tailored directly to the demanding challenges 
                of the Indian electrical grid—such as ambient heat exceeding 48°C, frequent voltage sags, floating neutrals, and 
                strict pollution mandates like CAQM GRAP.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 text-xs sm:text-sm font-medium text-gray-800">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> In-House BMS / PCS / EMS</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> Sub-10ms Islanding Topology</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> IceBattery® Ceramic Technology</span>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div className="rounded-xl border border-gray-200 bg-canvas-offwhite p-6 text-center shadow-sm w-full">
                <div className="text-4xl sm:text-5xl font-bold text-lithon-blue">40+</div>
                <div className="text-sm text-gray-900 font-bold mt-2">Cumulative Engineering Years</div>
                <div className="text-xs text-gray-500 mt-2 leading-relaxed">
                  Specialized Power Electronics, Grid Inverters &amp; Battery Thermal Architecture
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Dual Infrastructure Footprint */}
      <section className="px-4 sm:px-6" id="manufacturing">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Manufacturing Infrastructure"
            title={
              <>
                Dual Geographic Advantage: <span className="font-semibold text-lithon-blue">Noida &amp; Foshan</span>
              </>
            }
            subtitle="Two purpose-built facilities combining domestic high-volume Indian manufacturing with direct international component supply chain integration."
          />

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-lithon-blue/10 border border-lithon-blue/20 text-lithon-blue text-xs font-bold px-3 py-1">
                  Noida Manufacturing HQ
                </span>
                <span className="text-xs font-normal text-gray-500">Uttar Pradesh, India</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mt-4">Sector 136 Climate-Controlled Plant</h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed font-normal">
                Spans 20,000 sq. ft. housing automated CNC laser busbar micro-welding stations, automated cell sorting and grading lines, 
                high-voltage dielectric withstand test benches (3,000V DC), and environmental thermal chambers cycling from -20°C to +60°C.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-blue-50 border border-blue-200 text-lithon-blue text-xs font-bold px-3 py-1">
                  Foshan Innovation Hub
                </span>
                <span className="text-xs font-normal text-gray-500">Guangdong, China</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mt-4">Foshan Innovation Torchpark</h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed font-normal">
                Located at C11-6, Jihua 2 Road, Chancheng, Foshan. Serves as our strategic supply chain interface and raw material 
                quality testing station, securing priority cell allocations and direct factory pricing from top global Tier-1 manufacturers.
              </p>
            </div>
          </div>

          {/* Authentic Facility Photo Gallery */}
          <div className="mt-10 rounded-2xl border border-gray-200 bg-canvas-offwhite p-6 sm:p-8">
            <div className="flex items-center gap-2 text-xs font-medium text-lithon-blue mb-2">
              <Factory className="h-4 w-4" />
              <span>Noida Plant Operations</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
              Inside the 20,000 sq. ft. Noida Assembly &amp; Testing Facility
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-1 max-w-2xl leading-relaxed font-normal">
              Every Lith-On system deployed across India is integrated, wired, and tested in our Sector 136 climate-controlled clean facility under strict ISO 9001 and IEC 61508 protocols.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="group rounded-xl border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative aspect-[4/3] w-full bg-gray-100 overflow-hidden">
                  <Image
                    src="/images/factory/noida-facility-bench.jpg"
                    alt="Lith-On Noida plant testing bench lineup"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 300px"
                  />
                  <div className="absolute top-2 left-2 rounded-full bg-black/60 backdrop-blur-sm px-2.5 py-0.5 text-xs font-medium text-white">
                    Final Lineup
                  </div>
                </div>
                <div className="p-4">
                  <div className="text-sm font-bold text-gray-900">Finished Hardware Lineup</div>
                  <div className="text-xs text-gray-500 mt-1 leading-snug">
                    Lith-On-50 and Magna-C&amp;I pre-commissioned inventory on test floor.
                  </div>
                </div>
              </div>

              <div className="group rounded-xl border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative aspect-[4/3] w-full bg-gray-100 overflow-hidden">
                  <Image
                    src="/images/factory/battery-pack-assembly.jpg"
                    alt="Laser micro-welding and battery pack assembly"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 300px"
                  />
                  <div className="absolute top-2 left-2 rounded-full bg-black/60 backdrop-blur-sm px-2.5 py-0.5 text-xs font-medium text-white">
                    Pack Assembly
                  </div>
                </div>
                <div className="p-4">
                  <div className="text-sm font-bold text-gray-900">Laser Welding &amp; Wiring</div>
                  <div className="text-xs text-gray-500 mt-1 leading-snug">
                    Precision busbar laser welding and high-voltage module wiring harnesses.
                  </div>
                </div>
              </div>

              <div className="group rounded-xl border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative aspect-[4/3] w-full bg-gray-100 overflow-hidden">
                  <Image
                    src="/images/factory/integrated-bess-assembly.jpg"
                    alt="Cabinet integration and PCS assembly"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 300px"
                  />
                  <div className="absolute top-2 left-2 rounded-full bg-black/60 backdrop-blur-sm px-2.5 py-0.5 text-xs font-medium text-white">
                    Cabinet Mechanicals
                  </div>
                </div>
                <div className="p-4">
                  <div className="text-sm font-bold text-gray-900">Integrated Cabinet Assembly</div>
                  <div className="text-xs text-gray-500 mt-1 leading-snug">
                    Heavy-duty outdoor IP55 enclosure framing and bi-directional PCS mounting.
                  </div>
                </div>
              </div>

              <div className="group rounded-xl border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative aspect-[4/3] w-full bg-gray-100 overflow-hidden">
                  <Image
                    src="/images/factory/testing-quality-assurance.jpg"
                    alt="QA engineer conducting high voltage testing"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 300px"
                  />
                  <div className="absolute top-2 left-2 rounded-full bg-black/60 backdrop-blur-sm px-2.5 py-0.5 text-xs font-medium text-white">
                    QA Testing
                  </div>
                </div>
                <div className="p-4">
                  <div className="text-sm font-bold text-gray-900">High-Voltage Dielectric QA</div>
                  <div className="text-xs text-gray-500 mt-1 leading-snug">
                    3,000V DC withstand testing, cell impedance balancing, and thermal verification.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. International Deployment Footprint */}
      <GlobalExportsShowcase />

      {/* 7. Visual Timeline */}
      <section className="px-4 sm:px-6" id="timeline">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Historical Milestones"
            eyebrowIcon={Calendar}
            title={
              <>
                Visual Growth &amp; <span className="font-semibold text-lithon-blue">Technology Timeline</span>
              </>
            }
            subtitle="From foundational power electronics research to grid-scale multi-megawatt execution across India and 25+ export markets."
          />

          <div className="relative border-l-2 border-blue-200 ml-4 md:ml-6 space-y-10 pl-6 md:pl-10">
            {TIMELINE.map((item) => (
              <div key={item.year} className="relative group">
                {/* Node Dot */}
                <div className="absolute -left-[31px] md:-left-[47px] top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white border-2 border-lithon-blue group-hover:bg-lithon-blue transition-colors">
                  <div className="h-2 w-2 rounded-full bg-lithon-blue group-hover:bg-white" />
                </div>

                <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-7 shadow-sm hover:border-blue-300 hover:shadow-md transition-shadow">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-100 pb-3">
                    <span className="font-mono text-xl sm:text-2xl font-extrabold text-lithon-blue">{item.year}</span>
                    <span className="rounded-full bg-blue-50 border border-blue-100 px-3 py-0.5 text-xs font-semibold text-lithon-blue">
                      {item.focus}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mt-3">{item.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Dedicated Verified Certifications Matrix */}
      <section className="px-4 sm:px-6" id="certifications">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Verified Standards"
            eyebrowIcon={FileCheck}
            title={
              <>
                Verified Certifications &amp; <span className="font-semibold text-lithon-blue">Conformance</span>
              </>
            }
            subtitle="Every certification listed below is internally audited and verified across our hardware and software architecture."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {CERTIFICATIONS.map((cert) => (
              <div key={cert.standard} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                    <span className="font-mono text-base font-bold text-lithon-blue">{cert.standard}</span>
                    <ShieldCheck className="h-5 w-5 text-emerald-600" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mt-3">{cert.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed font-normal">{cert.scope}</p>
                </div>
                <div className="mt-5 pt-3 border-t border-gray-100 text-xs text-gray-500 font-medium">
                  Audited by: {cert.authority}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Core Values */}
      <section className="px-4 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Corporate Ethos"
            title="Our Core Engineering Values"
            subtitle="The operational philosophy guiding our R&D, product testing, and enterprise client partnerships."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((val) => (
              <div key={val.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="text-base font-bold text-gray-900">{val.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-2.5 leading-relaxed font-normal">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Bottom CTA */}
      <CallToAction
        eyebrow="Direct Leadership Access"
        title="Connect with Lith-On Engineering Founders"
        description="Meet our technical founders at our 20,000 sq. ft. Noida plant or schedule an executive consultation regarding utility storage deployments and custom high-voltage packs."
        primaryAction={{
          label: "Contact Headquarters",
          href: "/contact",
        }}
        secondaryAction={{
          label: "+91-7000013009",
          href: "tel:+917000013009",
          isPhone: true,
        }}
        variant="contrast"
      />
    </div>
  );
}
