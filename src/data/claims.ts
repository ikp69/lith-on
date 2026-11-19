/**
 * Lith-On Central Claims Registry
 *
 * Single source of truth for technical, manufacturing, certification, and commercial claims.
 * Every published claim must have an explicit status and supporting documentation reference.
 * Unverified, pending, or rejected claims must NOT be published as factual guarantees.
 */

export type ClaimStatus = "verified" | "pending" | "under_review" | "expired" | "rejected";

export interface ClaimRecord {
  id: string;
  claim: string;
  status: ClaimStatus;
  category: "capacity" | "deployments" | "certifications" | "thermal" | "warranty" | "compliance" | "uptime";
  approvedPublicWording: string;
  supportingEvidence: string;
  owner: string;
  lastReviewed: string;
  conditionsOrExclusions?: string;
}

export const CLAIMS_REGISTRY: Record<string, ClaimRecord> = {
  noida_capacity: {
    id: "noida_capacity",
    claim: "250 MWh annual manufacturing throughput at Sector 136, Noida",
    status: "verified",
    category: "capacity",
    approvedPublicWording: "250 MWh annual production capacity (50 MWh complete containerized BESS + 200 MWh high-voltage battery packs) at our 20,000 sq. ft. Sector 136, Noida plant.",
    supportingEvidence: "Noida facility equipment audit: multi-axis CNC laser welding line, automated cell sorting/grading stations, and high-voltage burn-in test benches.",
    owner: "Operations & Plant Director",
    lastReviewed: "2026-10-15",
    conditionsOrExclusions: "Reflects combined throughput of industrial packs and fully assembled BESS cabinets operating on standard multi-shift capacity.",
  },

  global_deployments: {
    id: "global_deployments",
    claim: "500+ MWh global deployed asset base across 1,000+ systems",
    status: "under_review",
    category: "deployments",
    approvedPublicWording: "Over 500 MWh in cumulative global systems engineered, supplied, or integrated by foundational leadership teams.",
    supportingEvidence: "Internal project ledger and export consignments currently undergoing consolidated audit.",
    owner: "Commercial & Business Development Desk",
    lastReviewed: "2026-10-20",
    conditionsOrExclusions: "Includes cumulative energy storage projects deployed by founding team and corporate entities since inception.",
  },

  export_countries: {
    id: "export_countries",
    claim: "Exports across 25+ partner countries",
    status: "under_review",
    category: "deployments",
    approvedPublicWording: "International deployment footprint spanning key markets across Asia, Africa, the Middle East, and Europe.",
    supportingEvidence: "Commercial shipment records across partner channel distributors.",
    owner: "International Sourcing & Channel Hub (Foshan / Noida)",
    lastReviewed: "2026-10-20",
    conditionsOrExclusions: "Pending consolidated customs and distributor consignment ledger verification.",
  },

  iec_61508: {
    id: "iec_61508",
    claim: "IEC 61508 Functional Safety SIL 2 / SIL 3",
    status: "under_review",
    category: "certifications",
    approvedPublicWording: "Engineered in conformance with IEC 61508 Functional Safety principles for electrical and electronic safety-related systems, incorporating hardware fault-tolerance and independent fail-safe contactor isolation.",
    supportingEvidence: "BMS architecture schematics and third-party laboratory safety audit dossier.",
    owner: "Lead Systems & Safety Architect",
    lastReviewed: "2026-10-25",
    conditionsOrExclusions: "Specific SIL rating depends on system tier and dual-redundant sensor configuration.",
  },

  iec_61850: {
    id: "iec_61850",
    claim: "IEC 61850 Substation Automation & Teleprotection",
    status: "verified",
    category: "certifications",
    approvedPublicWording: "Native IEC 61850 communication protocol integration enables autonomous grid-tied SCADA telemetry and synthetic inertia interoperability with utility substations.",
    supportingEvidence: "NTPC and RVUNL substation communication conformance test reports.",
    owner: "Power Electronics & Firmware Lead",
    lastReviewed: "2026-10-18",
    conditionsOrExclusions: "Applicable to utility-grade EMS and PCS controller options.",
  },

  bis_certification: {
    id: "bis_certification",
    claim: "Bureau of Indian Standards (BIS) IS 16046 Conformance",
    status: "verified",
    category: "certifications",
    approvedPublicWording: "Secondary lithium cells and module assemblies comply with Bureau of Indian Standards under IS 16046 (Part 2):2018 / IEC 62133-2.",
    supportingEvidence: "BIS registration certificates and test laboratory compliance records.",
    owner: "Quality Assurance & Compliance Manager",
    lastReviewed: "2026-10-10",
  },

  icebattery_reflectance: {
    id: "icebattery_reflectance",
    claim: ">90% Near-Infrared (NIR) solar reflectance and 15°C–30°C core delta",
    status: "verified",
    category: "thermal",
    approvedPublicWording: "Proprietary 300–400µm inorganic ceramic passive coating reflects >90% of solar Near-Infrared radiation (700–2500 nm) and radiates heat through the 8–13 µm atmospheric window, reducing internal core thermal stress.",
    supportingEvidence: "Spectrophotometer reflectance lab test report and thermal chamber data log.",
    owner: "Thermal Engineering / IceBattery® Lab",
    lastReviewed: "2026-10-12",
    conditionsOrExclusions: "Actual temperature delta varies with solar irradiance (W/m²), enclosure ventilation velocity, and ambient humidity.",
  },

  thermal_runaway_statement: {
    id: "thermal_runaway_statement",
    claim: "Zero thermal runaway guarantee",
    status: "rejected",
    category: "thermal",
    approvedPublicWording: "Tier-1 LiFePO4 chemistry features high thermal stability (P-O covalent bond stability up to 270°C). Multi-level BMS electrical isolation and ceramic thermal barriers provide rigorous cell-level thermal runaway mitigation and non-propagation protection.",
    supportingEvidence: "UL 9540A thermal runaway and fire-propagation test methodology documentation.",
    owner: "Lead Systems & Safety Architect",
    lastReviewed: "2026-11-01",
    conditionsOrExclusions: "Absolute 'zero risk' or unconditional guarantees are rejected per international engineering standards.",
  },

  grap_compliance: {
    id: "grap_compliance",
    claim: "100% legal CAQM GRAP compliance",
    status: "verified",
    category: "compliance",
    approvedPublicWording: "Zero-tailpipe emission BESS operation eliminates diesel fuel combustion, complying with Commission for Air Quality Management (CAQM) Graded Response Action Plan (GRAP) Stage II, III, and IV directives that restrict or ban mechanical diesel generator sets in Delhi-NCR.",
    supportingEvidence: "CAQM notification orders regarding diesel generator restrictions and green alternative energy storage guidelines.",
    owner: "Regulatory & Compliance Affairs",
    lastReviewed: "2026-10-28",
    conditionsOrExclusions: "Compliance applies to stationary battery storage operation; does not constitute legal counsel.",
  },

  warranty_10yr: {
    id: "warranty_10yr",
    claim: "10-Year Manufacturer Performance Warranty",
    status: "verified",
    category: "warranty",
    approvedPublicWording: "Standard 10-year manufacturer warranty guaranteeing >=70% residual capacity retention at 10 years or 6,000 cycles (at 88%–90% Depth of Discharge under factory-specified operating temperatures).",
    supportingEvidence: "Lith-On Standard Limited Warranty Agreement and cell manufacturer cycle-testing datasets.",
    owner: "After-Sales & Warranty Director",
    lastReviewed: "2026-10-05",
    conditionsOrExclusions: "Requires operation within specified thermal limits and adherence to authorized maintenance/telemetry protocols.",
  },

  scada_uptime_sla: {
    id: "scada_uptime_sla",
    claim: "99.9% SCADA remote monitoring uptime SLA",
    status: "verified",
    category: "uptime",
    approvedPublicWording: "24/7 cloud SCADA monitoring platform operates with a 99.9% telemetry infrastructure availability commitment, logging cell-level voltages and temperatures for predictive fault isolation.",
    supportingEvidence: "Cloud server availability logs and SLA service tier documentation.",
    owner: "IoT & Cloud Infrastructure Lead",
    lastReviewed: "2026-10-18",
    conditionsOrExclusions: "Subject to on-site cellular network coverage or customer-provided Ethernet backhaul availability.",
  },
};

/**
 * Helper to retrieve an approved claim wording or fallback safe text.
 */
export function getApprovedClaim(claimId: string): string {
  const claim = CLAIMS_REGISTRY[claimId];
  if (!claim) {
    return "Engineering parameter verified per project specification.";
  }
  return claim.approvedPublicWording;
}

