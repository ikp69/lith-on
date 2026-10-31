import type { Metadata } from "next";
import Link from "next/link";
import { 
  ArrowRight, 
  Download, 
  Check, 
  Layers, 
  Server,
  FileSpreadsheet
} from "lucide-react";
import { ProductCard, type BESSProduct } from "@/components/products/ProductCard";

export const metadata: Metadata = {
  title: "BESS & Lithium Battery Solutions | Lith-On Product Catalog",
  description:
    "Explore Lith-On's comprehensive lineup of Battery Energy Storage Systems: Magna-C&I 260 kWh, Lith-On-50 48 kWh, LT215 Container 215 kWh, and Max-20HC 5.0 MWh utility storage.",
};

const BESS_PRODUCTS: BESSProduct[] = [
  {
    id: "magna-ci",
    name: "Magna-C&I Series",
    modelCode: "LO-MC-260",
    tagline: "All-in-One Outdoor Cabinet for Real Estate, Campuses & Manufacturing",
    category: "Commercial",
    capacity: "260 kWh",
    powerRating: "125 kW",
    chemistry: "Tier-1 LiFePO4 (LFP)",
    cycleLife: ">6,000 Cycles @ 88% DoD",
    enclosureRating: "IP55 Outdoor Weatherproof",
    highlights: [
      "Patented IceBattery® ceramic passive shield",
      "Sub-10ms automatic grid-loss islanding",
      "Liquid & Smart Hybrid cooling options (ΔT < 3°C)",
      "Integrated bi-directional PCS & isolation transformer"
    ],
    specs: [
      { label: "Nominal Capacity", value: "260 kWh" },
      { label: "Rated Output Power", value: "125 kW" },
      { label: "Round-Trip Efficiency", value: ">95% to 98%" },
      { label: "Operating Ambient", value: "-10°C to +60°C" },
      { label: "Transfer Time", value: "<10 ms (Instant UPS)" },
      { label: "Communication", value: "Modbus TCP/RTU, CAN, IEC 61850" },
      { label: "Standard Warranty", value: "10 Years" }
    ]
  },
  {
    id: "lithon-50",
    name: "Lith-On-50 Compact ESS",
    modelCode: "LO-50-48",
    tagline: "Modular Commercial Cabinet for Housing Societies, Telecom & Petrol Pumps",
    category: "Modular",
    capacity: "48 kWh (Scalable)",
    powerRating: "48 kW",
    chemistry: "Tier-1 LiFePO4 (LFP)",
    cycleLife: ">6,000 Cycles @ 90% DoD",
    enclosureRating: "IP54 / IP20 Options",
    highlights: [
      "Modular scalability from 48 kWh up to 288 kWh in parallel",
      "Zero lift and server stoppage during blackouts (<10ms)",
      "Whisper-quiet solid-state operation (<55 dB)",
      "Replaces 62.5–125 kVA diesel generators"
    ],
    specs: [
      { label: "Nominal Capacity", value: "48 kWh" },
      { label: "Rated Output Power", value: "48 kW" },
      { label: "Round-Trip Efficiency", value: ">98%" },
      { label: "Operating Ambient", value: "-10°C to +55°C" },
      { label: "Transfer Time", value: "<10 ms" },
      { label: "Communication", value: "Modbus RTU, CAN" },
      { label: "Standard Warranty", value: "10 Years" }
    ]
  },
  {
    id: "lt215",
    name: "LT215 All-in-One Container",
    modelCode: "LO-LT-215",
    tagline: "High-Rate Liquid-Cooled BESS for EV Charging Hubs & Heavy Industry",
    category: "Industrial",
    capacity: "215 kWh",
    powerRating: "110 kW",
    chemistry: "LiFePO4 (1P240S String)",
    cycleLife: ">6,000 Cycles @ 88% DoD",
    enclosureRating: "IP55 / IP67 Compartments",
    highlights: [
      "Buffers simultaneous 60 kW to 350 kW DC fast chargers",
      "Pre-assembled, wired, and tested in Noida facility",
      "Closed-loop precision liquid thermal loop",
      "Eliminates utility maximum demand penalty charges"
    ],
    specs: [
      { label: "Nominal Capacity", value: "215 kWh" },
      { label: "Rated Output Power", value: "110 kW" },
      { label: "Round-Trip Efficiency", value: ">95%" },
      { label: "Operating Ambient", value: "-20°C to +60°C" },
      { label: "Transfer Time", value: "<10 ms" },
      { label: "Communication", value: "Modbus TCP, IEC 61850" },
      { label: "Standard Warranty", value: "10 Years" }
    ]
  },
  {
    id: "max-20hc",
    name: "Max-20HC-5000 Utility ESS",
    modelCode: "LO-MAX-5000",
    tagline: "20ft ISO High-Cube Utility Container for Grid Substation Services",
    category: "Utility",
    capacity: "5,000 kWh (5.0 MWh)",
    powerRating: "1,250 kW (1.25 MW)",
    chemistry: "Utility-Grade LiFePO4 (314Ah)",
    cycleLife: ">6,500 Cycles @ 88% DoD",
    enclosureRating: "ISO 20ft High-Cube C5-M Corrosive Resistant",
    highlights: [
      "Trifecta Certified: IEC 61508 + IEC 61850 + BIS",
      "Synthetic inertia, voltage regulation & black-start",
      "Dual industrial HVAC with IceBattery® shield",
      "Direct integration with 11kV / 33kV utility substations"
    ],
    specs: [
      { label: "Nominal Capacity", value: "5,000 kWh (5.0 MWh)" },
      { label: "Rated Output Power", value: "1,250 kW (1.25 MW)" },
      { label: "Round-Trip Efficiency", value: ">95%" },
      { label: "Operating Ambient", value: "-25°C to +60°C" },
      { label: "Transfer Time", value: "<20 ms (Grid Standard)" },
      { label: "Communication", value: "IEC 61850, IEC 60870-5-104, Modbus TCP" },
      { label: "Standard Warranty", value: "10 Years" }
    ]
  }
];

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
  { label: "SCADA Protocols", magna: "Modbus, CAN, IEC 61850", lo50: "Modbus RTU, CAN", magna2: "Modbus TCP, IEC 61850", max20: "IEC 61850, IEC 60870-5-104" },
  { label: "Standard Performance Warranty", magna: "10 Years", lo50: "10 Years", lt215: "10 Years", max20: "10 Years" },
];

export default function SolutionsPage() {
  return (
    <div className="space-y-16 py-10 sm:py-16">
      {/* 1. Header Banner */}
      <section className="px-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0B3388] mb-3">
            <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
            <span className="text-gray-400">/</span>
            <span>Product Catalog</span>
          </div>

          <h1 className="text-4xl font-light text-gray-900 sm:text-5xl lg:text-6xl tracking-tight leading-tight">
            Advanced Energy Storage &amp; <br className="hidden sm:block" />
            <span className="font-bold text-[#0B3388]">
              Lithium Battery Solutions
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-gray-600 max-w-3xl leading-relaxed">
            Lith-On manufactures and integrates energy storage systems across four dedicated tiers—from 
            compact 48 kWh commercial cabinets to 5.0 MWh containerized utility infrastructure. 
            All systems utilize Tier-1 Lithium Iron Phosphate (LiFePO4) chemistry, proprietary 
            <strong className="text-gray-900 font-semibold"> IceBattery® thermal management</strong>, and our integrated in-house BMS/PCS/EMS stack.
          </p>
        </div>
      </section>

      {/* 2. Hardware Product Grid */}
      <section className="px-6">
        <div className="mx-auto max-w-7xl">
          <div className="border-b border-gray-200 pb-4 mb-10">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl tracking-tight">BESS Enclosure Families</h2>
            <p className="text-sm text-gray-500 mt-1">Pre-tested, skid-mounted, and turnkey factory integrated at our Noida plant.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {BESS_PRODUCTS.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Comprehensive Technical Specifications Matrix */}
      <section className="px-6">
        <div className="mx-auto max-w-7xl rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-5 mb-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0B3388]">
                <FileSpreadsheet className="h-4 w-4" />
                <span>Audited Technical Datasheet</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 tracking-tight mt-1">
                Side-by-Side Specifications Matrix
              </h2>
            </div>
            <Link
              href="/contact?type=datasheet"
              className="inline-flex items-center gap-2 rounded-xl bg-[#0B3388] hover:bg-[#092768] px-4 py-2.5 text-xs font-semibold text-white transition-all shadow-sm"
            >
              <Download className="h-4 w-4" />
              <span>Download Engineering PDF</span>
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50 text-gray-700">
                  <th scope="col" className="p-3.5 font-bold uppercase tracking-wider">Technical Parameter</th>
                  <th scope="col" className="p-3.5 font-bold text-[#0B3388]">Magna-C&amp;I (260 kWh)</th>
                  <th scope="col" className="p-3.5 font-bold text-gray-700">Lith-On-50 (48 kWh)</th>
                  <th scope="col" className="p-3.5 font-bold text-gray-700">LT215 (215 kWh)</th>
                  <th scope="col" className="p-3.5 font-bold text-[#F74530]">Max-20HC (5.0 MWh)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 font-mono text-[11px]">
                {COMPARISON_ROWS.map((row) => (
                  <tr key={row.label} className="hover:bg-gray-50/80 transition-colors">
                    <td className="p-3.5 font-sans font-medium text-gray-700">{row.label}</td>
                    <td className="p-3.5 text-[#0B3388] font-semibold">{row.magna}</td>
                    <td className="p-3.5 text-gray-600">{row.lo50}</td>
                    <td className="p-3.5 text-gray-600">{row.lt215}</td>
                    <td className="p-3.5 text-[#F74530] font-semibold">{row.max20}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. Standalone Battery Modules & Telecom Power */}
      <section className="px-6">
        <div className="mx-auto max-w-7xl">
          <div className="border-b border-gray-200 pb-4 mb-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0B3388]">
              Modular DC Subsystems
            </span>
            <h2 className="text-2xl font-bold text-gray-900 tracking-tight mt-1 sm:text-3xl">
              Lithium Battery Modules &amp; Telecom Power
            </h2>
            <p className="text-sm text-gray-500 mt-1 max-w-2xl">
              Engineered for telecommunications tower sites, distributed data nodes, and custom commercial microgrids.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0B3388]/10 text-[#0B3388]">
                  <Server className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">48V / 51.2V Telecom Lithium Modules</h3>
                  <span className="text-xs text-gray-500 font-mono">100Ah &amp; 200Ah Standard 19-inch Rack</span>
                </div>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed mt-4">
                Direct drop-in replacement for degraded lead-acid and VRLA battery banks at telecom tower sites. 
                Offers 3x higher usable energy density, 5x longer cycle life, and integrated BMS communications with standard DC rectifiers.
              </p>
              <ul className="mt-4 space-y-2 text-xs text-gray-600">
                <li className="flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 text-emerald-600" />
                  <span>Fits standard 19-inch / 23-inch telecom cabinets</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 text-emerald-600" />
                  <span>Built-in cell balancing, over-voltage, and short-circuit protection</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 text-emerald-600" />
                  <span>RS485 / CAN telemetry for remote NOC monitoring</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-[#F74530]">
                  <Layers className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">High-Voltage Battery Rack Systems</h3>
                  <span className="text-xs text-gray-500 font-mono">200V DC up to 1000V DC Scalable Strings</span>
                </div>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed mt-4">
                Custom DC energy storage racks designed to pair seamlessly with third-party commercial solar inverters, 
                hybrid PCS units, and heavy industrial microgrids requiring high-voltage DC bus architectures.
              </p>
              <ul className="mt-4 space-y-2 text-xs text-gray-600">
                <li className="flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 text-emerald-600" />
                  <span>Master-Slave BMS architecture with high-voltage DC contactors</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 text-emerald-600" />
                  <span>Integrated fuse protection and pyro-switch emergency disconnect</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 text-emerald-600" />
                  <span>Supports multi-rack parallel scalability for multi-megawatt configurations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Bottom Conversion CTA */}
      <section className="px-6">
        <div className="mx-auto max-w-7xl rounded-3xl bg-[#0B3388] text-white p-8 sm:p-12 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white sm:text-3xl tracking-tight">Need a Custom Electrical Sizing &amp; SLD?</h3>
            <p className="text-sm text-blue-100 mt-2 max-w-xl">
              Provide your facility load profile, transformer rating, and daily generator operating hours. 
              Our Noida engineering team delivers an engineering-grade BESS sizing analysis within 24 hours.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F74530] hover:bg-[#d63623] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition-all shrink-0 shadow-md"
          >
            <span>Request Custom Proposal</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
