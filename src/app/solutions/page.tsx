import type { Metadata } from "next";
import Link from "next/link";
import { 
  Download, 
  Check, 
  Layers, 
  Server,
  FileSpreadsheet,
  Cpu,
  Zap,
  Snowflake,
  Clock,
  ShieldCheck
} from "lucide-react";
import { PRODUCTS_DATA } from "@/data/products";
import { ProductCard } from "@/components/products/ProductCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CallToAction } from "@/components/ui/CallToAction";

export const metadata: Metadata = {
  title: "BESS & Lithium Battery Solutions | Lith-On Product Catalog",
  description:
    "Explore Lith-On's comprehensive lineup of Battery Energy Storage Systems: Magna-C&I 260 kWh, Lith-On-50 48 kWh, LT215 Container 215 kWh, and Max-20HC 5.0 MWh utility storage.",
};

const COMPARISON_ROWS = [
  { label: "Nominal Energy Capacity", magna: "260 kWh", lo50: "48 kWh (scalable)", lt215: "215 kWh", max20: "5,000 kWh (5.0 MWh)" },
  { label: "Rated Output Power", magna: "125 kW", lo50: "48 kW", lt215: "110 kW", max20: "1,250 kW (1.25 MW)" },
  { label: "Cell Chemistry", magna: "LiFePO4 (LFP)", lo50: "LiFePO4 (LFP)", lt215: "LiFePO4 (1P240S)", max20: "LiFePO4 (314Ah cells)" },
  { label: "Depth of Discharge (DoD)", magna: "90%", lo50: "90%", lt215: "88%–90%", max20: "90%" },
  { label: "Cycle Life (@ 88% DoD)", magna: ">6,000 Cycles", lo50: ">6,000 Cycles", lt215: ">6,000 Cycles", max20: ">6,500 Cycles" },
  { label: "Round-Trip Efficiency", magna: ">95% to 98%", lo50: ">98%", lt215: ">95%", max20: ">95%" },
  { label: "Thermal Management", magna: "IceBattery® + Liquid/Air", lo50: "IceBattery® + Forced Air", lt215: "IceBattery® + Liquid Loop", max20: "IceBattery® + Dual HVAC" },
  { label: "Operating Ambient Temp", magna: "-10°C to +60°C", lo50: "-10°C to +55°C", lt215: "-20°C to +60°C", max20: "-25°C to +60°C" },
  { label: "UPS Switchover Time", magna: "<10 ms", lo50: "<10 ms", lt215: "<10 ms", max20: "<20 ms" },
  { label: "Enclosure Ingress Rating", magna: "IP55 Outdoor", lo50: "IP54 / IP20", lt215: "IP55 / IP67", max20: "ISO 20ft Container IP55" },
  { label: "SCADA Protocols", magna: "Modbus, CAN, IEC 61850", lo50: "Modbus RTU, CAN", lt215: "Modbus TCP, IEC 61850", max20: "IEC 61850, IEC 60870-5-104" },
  { label: "Standard Performance Warranty", magna: "10 Years", lo50: "10 Years", lt215: "10 Years", max20: "10 Years" },
];

export default function SolutionsPage() {
  return (
    <div className="space-y-16 sm:space-y-24 pb-20 bg-white">
      {/* 1. Header Banner */}
      <section className="border-b border-gray-200 bg-canvas-offwhite px-4 sm:px-6 pt-16 sm:pt-20 pb-20 sm:pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-2 text-xs font-medium text-lithon-blue mb-3">
            <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
            <span className="text-gray-400">/</span>
            <span>Product Catalog</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light text-gray-900 tracking-tight leading-tight">
            Advanced Energy Storage &amp; <br className="hidden sm:block" />
            <span className="font-semibold text-lithon-blue">
              Lithium Battery Solutions
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-gray-600 max-w-3xl leading-relaxed font-normal">
            Lith-On manufactures and integrates energy storage systems across four dedicated tiers—from 
            compact 48 kWh commercial cabinets to 5.0 MWh containerized utility infrastructure. 
            All systems utilize Tier-1 Lithium Iron Phosphate (LiFePO4) chemistry, patented 
            <strong className="text-gray-900 font-semibold"> IceBattery® thermal management</strong>, and our integrated in-house BMS/PCS/EMS stack.
          </p>

          {/* Catalog Dimension Badges */}
          <div className="mt-7 flex flex-wrap items-center gap-3 text-xs">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white border border-gray-300 px-3.5 py-1.5 font-medium text-gray-700 shadow-sm">
              <Zap className="h-3.5 w-3.5 text-amber-500" />
              <span>48 kWh to 5.0 MWh Range</span>
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white border border-gray-300 px-3.5 py-1.5 font-medium text-gray-700 shadow-sm">
              <Snowflake className="h-3.5 w-3.5 text-cyan-600" />
              <span>IceBattery® 60°C Resilience</span>
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white border border-gray-300 px-3.5 py-1.5 font-medium text-gray-700 shadow-sm">
              <Clock className="h-3.5 w-3.5 text-blue-600" />
              <span>Sub-10ms Instant Cutover</span>
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white border border-gray-300 px-3.5 py-1.5 font-medium text-gray-700 shadow-sm">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
              <span>Trifecta Certified (IEC / BIS)</span>
            </span>
          </div>
        </div>
      </section>

      {/* 2. Hardware Product Grid */}
      <section className="px-4 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="BESS Enclosure Families"
            eyebrowIcon={Cpu}
            title={
              <>
                Standardized <span className="font-semibold text-lithon-blue">System Hardware</span>
              </>
            }
            subtitle="Pre-tested, skid-mounted, and turnkey factory integrated at our Noida Sector 136 plant."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {PRODUCTS_DATA.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Comprehensive Technical Specifications Matrix */}
      <section className="px-4 sm:px-6">
        <div className="mx-auto max-w-7xl rounded-2xl border border-gray-200 bg-white p-6 sm:p-10 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-200/80 pb-6 mb-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-medium text-lithon-blue mb-1.5">
                <FileSpreadsheet className="h-4 w-4" />
                <span>Audited Technical Datasheet</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                Side-by-Side Specifications Matrix
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                Direct comparative parameters for facility directors and solar EPC electrical engineers.
              </p>
            </div>
            <Link
              href="/resources"
              className="btn-secondary"
            >
              <Download className="h-4 w-4" />
              <span>Download E-Catalogue</span>
            </Link>
          </div>

          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-gray-200 bg-canvas-offwhite text-gray-800">
                  <th scope="col" className="p-4 font-bold text-xs">Technical Parameter</th>
                  <th scope="col" className="p-4 font-bold text-lithon-blue text-xs">Magna-C&amp;I (260 kWh)</th>
                  <th scope="col" className="p-4 font-bold text-gray-700 text-xs">Lith-On-50 (48 kWh)</th>
                  <th scope="col" className="p-4 font-bold text-gray-700 text-xs">LT215 (215 kWh)</th>
                  <th scope="col" className="p-4 font-bold text-lithon-red text-xs">Max-20HC (5.0 MWh)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 font-mono text-xs sm:text-sm">
                {COMPARISON_ROWS.map((row, idx) => (
                  <tr 
                    key={row.label} 
                    className={`transition-colors hover:bg-blue-50/40 ${idx % 2 === 0 ? "bg-white" : "bg-canvas-offwhite/60"}`}
                  >
                    <td className="p-4 font-sans font-medium text-gray-900">{row.label}</td>
                    <td className="p-4 text-lithon-blue font-bold">{row.magna}</td>
                    <td className="p-4 text-gray-700">{row.lo50}</td>
                    <td className="p-4 text-gray-700">{row.lt215}</td>
                    <td className="p-4 text-lithon-red font-bold">{row.max20}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. Standalone Battery Modules & Telecom Power */}
      <section className="px-4 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Modular DC Subsystems"
            eyebrowIcon={Layers}
            title={
              <>
                Lithium Battery Modules &amp; <span className="font-semibold text-lithon-blue">Telecom Power</span>
              </>
            }
            subtitle="Engineered for telecommunications tower sites, distributed data nodes, and custom commercial microgrids."
          />

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-white p-7 sm:p-8 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-lithon-blue/10 text-lithon-blue">
                    <Server className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">48V / 51.2V Telecom Lithium Modules</h3>
                    <span className="text-xs text-gray-500 font-mono">100Ah &amp; 200Ah Standard 19-inch Rack</span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mt-4 font-normal">
                  Direct drop-in replacement for degraded lead-acid and VRLA battery banks at telecom tower sites. 
                  Offers 3x higher usable energy density, 5x longer cycle life, and integrated BMS communications with standard DC rectifiers.
                </p>
                <ul className="mt-5 space-y-2.5 text-xs sm:text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>Fits standard 19-inch / 23-inch telecom cabinets</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>Built-in cell balancing, over-voltage, and short-circuit protection</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>RS485 / CAN telemetry for remote NOC monitoring</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-7 sm:p-8 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-lithon-red">
                    <Layers className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">High-Voltage Battery Rack Systems</h3>
                    <span className="text-xs text-gray-500 font-mono">200V DC up to 1000V DC Scalable Strings</span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mt-4 font-normal">
                  Custom DC energy storage racks designed to integrate directly with third-party commercial solar inverters, 
                  hybrid PCS units, and heavy industrial microgrids requiring high-voltage DC bus architectures.
                </p>
                <ul className="mt-5 space-y-2.5 text-xs sm:text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>Master-Slave BMS architecture with high-voltage DC contactors</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>Integrated fuse protection and pyro-switch emergency disconnect</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>Supports multi-rack parallel scalability for multi-megawatt configurations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Bottom Conversion CTA */}
      <CallToAction
        eyebrow="Custom Electrical Sizing & SLD"
        title="Need a Site-Specific Engineering Proposal?"
        description="Provide your facility load profile, transformer rating, and daily generator operating hours. Our Noida engineering team delivers an engineering-grade BESS sizing analysis and Single Line Diagram (SLD) within 24 hours."
        primaryAction={{
          label: "Request Custom Proposal",
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
