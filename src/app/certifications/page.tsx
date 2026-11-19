import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  FileText,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Download,
  Globe2,
  Award,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Certifications, Standards & Compliance | Lith-On BESS",
  description:
    "Lith-On BESS standards: IEC 61508 functional safety, IEC 61850 grid communication and BIS compliance, with IP-rated enclosures. Request compliance documentation.",
};

const CERTIFICATIONS = [
  {
    standard: "IEC 61508 SIL 2",
    title: "Functional Safety — Safety Integrity Level 2",
    scope: "Battery Management System (BMS) & Safety Controller",
    description:
      "Verifies that Lith-On's BMS and protection relay firmware achieve Safety Integrity Level 2 for systematic and random hardware failure tolerance. Required for mission-critical healthcare, elevator, and industrial safety applications.",
    applicableProducts: ["Magna-C&I 260 kWh", "LT215", "Max-20HC-5000"],
    status: "active",
  },
  {
    standard: "IEC 61850",
    title: "Communication Networks & Systems for Power Utility Automation",
    scope: "SCADA / EMS Grid Communication Protocol",
    description:
      "Ensures Lith-On BESS communicates with utility SCADA systems, distribution management systems (DMS), and substation automation equipment using international standard GOOSE and MMS messaging.",
    applicableProducts: ["Magna-C&I 260 kWh", "LT215", "Max-20HC-5000"],
    status: "active",
  },
  {
    standard: "BIS",
    title: "Bureau of Indian Standards",
    scope: "Lithium Cell, Module & Distribution Compliance",
    description:
      "Full mandatory compliance for lithium cell chemistry, module packaging, and domestic distribution in India.",
    applicableProducts: ["All Lith-On Products"],
    status: "active",
  },
  {
    standard: "IP55 / IP54",
    title: "Ingress Protection — Dust & Water Resistance",
    scope: "Enclosure Environmental Protection",
    description:
      "Verifies enclosure protection against dust ingress (limited, non-harmful) and water jets from any direction, ensuring reliable outdoor and industrial deployment in Indian monsoon and dust-storm conditions.",
    applicableProducts: ["Magna-C&I (IP55)", "Lith-On-50 (IP54)", "LT215 (IP55)", "Max-20HC (IP55)"],
    status: "active",
  },
];

const DOCUMENT_CHECKLIST = [
  {
    category: "Cell-Level Test Reports",
    documents: [
      "Cell Capacity & Internal Resistance Grading Certificate",
      "Thermal Runaway Onset Temperature Test (DSC/ARC)",
      "Cell Cycle Life Aging Report (6,000+ cycles @ 25°C)",
    ],
  },
  {
    category: "Module & Pack Level",
    documents: [
      "Module Vibration & Mechanical Shock Test Report",
      "BIS Compliance Certificate",
      "Pack-Level Short Circuit & Overcharge Abuse Test Report",
      "Insulation Resistance & Hi-Pot Test Certificate",
    ],
  },
  {
    category: "System & Safety",
    documents: [
      "IEC 61508 SIL 2 Functional Safety Assessment Report",
      "IP55 / IP54 Ingress Protection Test Certificate",
      "Aerosol Fire Suppression System Certification",
    ],
  },
  {
    category: "Grid Communication & Power",
    documents: [
      "IEC 61850 Protocol Conformance Test Report",
      "PCS/Inverter Grid Code Compliance Certificate (CEA Technical Standards)",
      "Power Quality & Harmonic Distortion (THD) Test Report",
      "Round-Trip Efficiency Verification Certificate",
    ],
  },
  {
    category: "Material Safety",
    documents: [
      "MSDS / SDS for Lithium Iron Phosphate Battery Cells",
    ],
  },
  {
    category: "Thermal & IceBattery® Technology",
    documents: [
      "IceBattery® Ceramic Coating NIR Reflectivity Test Report (>90%)",
      "Thermal Cycling Endurance Test (−20°C to +70°C, 1,000 cycles)",
      "Liquid Cooling Loop ΔT Verification Report (<2.5°C uniformity)",
      "HVAC Parasitic Power Reduction Verification (comparative test)",
    ],
  },
];

export default function CertificationsPage() {
  return (
    <div className="space-y-20 sm:space-y-28 lg:space-y-36 pb-28 lg:pb-36 bg-white">
      {/* Header */}
      <section className="border-b border-gray-200 bg-canvas-offwhite px-4 sm:px-6 pt-10 sm:pt-40 pb-14 sm:pb-32">
        <div className="mx-auto max-w-7xl">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs font-medium text-lithon-blue mb-4"
          >
            <Link href="/" className="hover:text-gray-900 transition-colors">
              Home
            </Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-900 font-semibold" aria-current="page">
              Certifications
            </span>
          </nav>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light text-gray-900 tracking-tight leading-tight">
            Certifications &amp;{" "}
            <span className="font-semibold text-lithon-blue">
              Compliance Standards
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-gray-600 max-w-3xl leading-relaxed font-normal">
            Every Lith-On BESS system is designed, manufactured, and tested against international
            safety, grid communication, and performance standards. Our Trifecta Compliance Framework
            (IEC 61508 + IEC 61850 + BIS) establishes a defensible procurement barrier that most
            competitors cannot replicate.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-4 py-2 text-xs font-semibold text-emerald-700">
              <ShieldCheck className="h-4 w-4" />
              <span>IEC 61508 SIL 2</span>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200 px-4 py-2 text-xs font-semibold text-lithon-blue">
              <Globe2 className="h-4 w-4" />
              <span>IEC 61850</span>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 border border-orange-200 px-4 py-2 text-xs font-semibold text-orange-700">
              <Award className="h-4 w-4" />
              <span>BIS</span>
            </div>
          </div>
        </div>
      </section>

      {/* Active Certifications Grid */}
      <section className="px-4 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <span className="text-xs font-mono font-bold text-lithon-blue">
              Active Compliance Portfolio
            </span>
            <h2 className="text-2xl sm:text-3xl font-light text-gray-900 mt-2">
              Standards We <span className="font-semibold text-lithon-blue">Test Against</span>
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.standard}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-xs hover:border-blue-200 transition-colors"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="inline-flex items-center gap-2 rounded-lg bg-blue-50 border border-blue-200 px-3 py-1.5">
                    <ShieldCheck className="h-4 w-4 text-lithon-blue" />
                    <span className="text-xs font-bold text-lithon-blue font-mono">
                      {cert.standard}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Active
                  </span>
                </div>
                <h3 className="text-sm font-bold text-gray-900">{cert.title}</h3>
                <p className="text-[11px] font-medium text-gray-500 mt-0.5">
                  Scope: {cert.scope}
                </p>
                <p className="text-xs text-gray-600 leading-relaxed mt-3">
                  {cert.description}
                </p>
                <div className="mt-4 pt-3 border-t border-gray-100">
                  <span className="text-[10px] font-bold text-gray-500 block mb-1.5">
                    Applicable Products
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.applicableProducts.map((p) => (
                      <span
                        key={p}
                        className="rounded-md bg-gray-100 px-2 py-0.5 text-[10px] font-medium text-gray-700"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Document Checklist for Procurement Teams */}
      <section className="px-4 sm:px-6 bg-canvas-offwhite py-16 sm:py-20 border-y border-gray-200">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <span className="text-xs font-mono font-bold text-lithon-blue">
              Procurement &amp; Tender Documentation
            </span>
            <h2 className="text-2xl sm:text-3xl font-light text-gray-900 mt-2">
              Documents Available on{" "}
              <span className="font-semibold text-lithon-blue">Request</span>
            </h2>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              The following test reports, certificates, and compliance documents are available for
              procurement teams, tender evaluations, and EPC due diligence. Contact our engineering
              team to request specific documents.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {DOCUMENT_CHECKLIST.map((group) => (
              <div
                key={group.category}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-xs"
              >
                <div className="flex items-center gap-2 text-xs font-bold text-gray-900 mb-4">
                  <FileText className="h-4 w-4 text-lithon-blue" />
                  <span>{group.category}</span>
                </div>
                <ul className="space-y-2.5">
                  {group.documents.map((doc) => (
                    <li
                      key={doc}
                      className="flex items-start gap-2 text-xs text-gray-600 leading-relaxed"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Important Note */}
          <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5 sm:p-6 max-w-4xl">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-bold text-amber-800">
                  Document Request Note
                </p>
                <p className="text-xs text-amber-700 leading-relaxed mt-1">
                  Specific test reports and certificates are shared under NDA with verified procurement
                  teams, EPC contractors, and DISCOM evaluation committees. Generic certificates may be
                  available without NDA. Please contact us with your project RFP reference number for
                  expedited document delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-3xl border border-blue-200 bg-white p-8 sm:p-12 shadow-xs">
            <div className="grid gap-8 lg:grid-cols-12 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-mono font-bold text-lithon-blue">
                  Compliance Document Package
                </span>
                <h2 className="text-3xl sm:text-4xl font-light text-gray-900">
                  Request Certification{" "}
                  <span className="font-semibold text-lithon-blue">Documents</span>
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed max-w-xl">
                  Our engineering team can prepare a custom compliance document package tailored to your
                  tender requirements, EPC qualification checklist, or DISCOM interconnection review
                  within 48 hours.
                </p>
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link
                    href="/contact?type=assessment"
                    className="inline-flex items-center gap-2 rounded-full bg-lithon-red-ink hover:bg-lithon-red-ink-hover px-6 py-3 text-xs font-semibold text-white shadow-sm transition-colors"
                  >
                    <Download className="h-4 w-4" />
                    <span>Request Documents</span>
                  </Link>
                  <a
                    href="tel:+917000013009"
                    className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-5 py-3 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    <Phone className="h-3.5 w-3.5 text-lithon-blue" />
                    <span>Call +91-7000013009</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 border-t border-gray-200 pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
                <h3 className="text-sm font-bold text-gray-900 mb-4">
                  Commonly Requested Packages
                </h3>
                <ul className="space-y-3">
                  {[
                    "DISCOM Interconnection Compliance Package",
                    "EPC Tender Qualification Document Set",
                    "Hospital / Healthcare SIL 2 Safety File",
                    "CAQM GRAP Compliance Certification Bundle",
                  ].map((pkg) => (
                    <li
                      key={pkg}
                      className="flex items-center gap-2 text-xs text-gray-700"
                    >
                      <ArrowRight className="h-3.5 w-3.5 text-lithon-blue shrink-0" />
                      <span>{pkg}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
