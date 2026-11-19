/**
 * Lith-On Central Case Studies & Financial Models
 *
 * Central source of truth for all customer economics, DG displacement,
 * and payback calculations. All figures use the shared calculation engine
 * with documented assumptions (measured, customer-provided, engineering, and projected).
 */

export type DataClassification = "measured" | "customer_provided" | "engineering_assumption" | "projected";

export interface CaseStudyFinancialModel {
  id: string;
  title: string;
  subtitle: string;
  location: string;
  sector: "education" | "residential" | "ev_charging" | "defense" | "utility";
  systemHardware: string;
  nominalCapacityKwh: number;
  ratedPowerKw: number | null; // null = not published in source data

  // 1. Baseline Inputs
  baseline: {
    systemType: string;
    installedCapacityKva: number;
    annualFuelLiters: number;
    fuelCostPerLiterInr: number | null;
    annualOperatingCostInr: number; // In Lakhs or Crores
    sourceType: DataClassification;
    notes: string;
  };

  // 2. BESS Solution Inputs
  bessOperation: {
    turnkeyCapexInr: number; // in Crores
    /** true when capex is not stated in the source data and was derived from payback × annual savings */
    capexDerived?: boolean;
    annualChargingCostInr: number | null; // in Crores; null = not published in source data
    annualMaintenanceInr: number | null; // in Crores; null = not published in source data
    netAnnualOperatingCostInr: number | null; // in Crores; null = not published in source data
    sourceType: DataClassification;
  };

  // 3. Economic & Financial Outcomes
  outcomes: {
    annualNetSavingsInr: number; // in Crores
    paybackYears: number;
    fiveYearGrossSavingsInr: number | null; // in Crores
    fiveYearNetRoiPct: number | null;
    /** 10-year cumulative savings as stated in the source data (before capex). */
    tenYearCumulativeSavingsInr: number | null; // in Crores
    tenYearNetRoiPct: number | null;
    dieselDisplacedLitersPerYear: number;
    co2eAvoidedTonsPerYear: number | null; // null = not published in source data
  };

  // 4. Financial Assumptions Methodology
  methodology: {
    dieselEscalationRatePctAnnual: number | null;
    gridEscalationRatePctAnnual: number | null;
    bessRoundTripEfficiencyPct: number | null;
    depthOfDischargePct: number | null;
    projectLifespanYears: number;
    formulaNotes: string;
  };

  // 5. Visuals & References
  images: {
    hero: string;
    thumbnails?: string[];
  };
  highlights: string[];
}

export const CASE_STUDIES_DATA: Record<string, CaseStudyFinancialModel> = {
  invertis_university: {
    id: "invertis_university",
    title: "Invertis University Campus Microgrid",
    subtitle: "1.0 MWh Lith-On BESS + 900 kWp Rooftop Solar PV",
    location: "Bareilly, Uttar Pradesh",
    sector: "education",
    systemHardware: "1,000 kWh (1 MWh) Lith-On BESS with existing 900 kWp rooftop solar PV",
    nominalCapacityKwh: 1000,
    ratedPowerKw: null,

    baseline: {
      systemType: "2,500 kVA diesel generator infrastructure",
      installedCapacityKva: 2500,
      annualFuelLiters: 418000,
      fuelCostPerLiterInr: null,
      annualOperatingCostInr: 4.14, // ₹4.14 Crore
      sourceType: "customer_provided",
      notes: "Monthly diesel bills averaged over ₹34.5 Lakh.",
    },

    bessOperation: {
      capexDerived: true,
      turnkeyCapexInr: 9.70, // ₹9.70 Crore, derived: 4.29-yr payback × ₹2.26 Cr/yr (source data does not state capex)
      annualChargingCostInr: null,
      annualMaintenanceInr: null,
      netAnnualOperatingCostInr: 1.88, // ₹1.88 Crore/year
      sourceType: "measured",
    },

    outcomes: {
      annualNetSavingsInr: 2.26, // ₹4.14 Cr - ₹1.88 Cr = ₹2.26 Cr/yr
      paybackYears: 4.29, // Capex ₹9.70 Cr / ₹2.26 Cr/yr = 4.29 yrs
      fiveYearGrossSavingsInr: null,
      fiveYearNetRoiPct: null,
      tenYearCumulativeSavingsInr: 17.76, // "10-Year Cumulative Cash Savings: ₹17.76 Crore" (content/case-studies.md)
      tenYearNetRoiPct: null,
      dieselDisplacedLitersPerYear: 418000,
      co2eAvoidedTonsPerYear: 1120, // 418,000 L * 2.68 kg CO2/L / 1000
    },

    methodology: {
      dieselEscalationRatePctAnnual: null,
      gridEscalationRatePctAnnual: null,
      bessRoundTripEfficiencyPct: null,
      depthOfDischargePct: null,
      projectLifespanYears: 15,
      formulaNotes: "Baseline diesel generator operating cost of ₹4.14 Cr a year against ₹1.88 Cr a year for BESS + solar. Payback and 10-year cumulative savings as stated in the project financial model; the ₹9.70 Cr capex is derived from them",
    },

    images: {
      hero: "/images/installations/invertis-bess-yard.jpg",
      thumbnails: [
        "/images/installations/invertis-900kw-solar.jpg",
        "/images/installations/invertis-university-facade.jpg",
      ],
    },
    highlights: [
      "Sub-10ms cutover keeps student hostels, research laboratories, and compute servers powered without interruption.",
      "Stores midday surplus rooftop solar generation (900 kWp) for evening library and hostel hours.",
      "Eliminates campus diesel engine noise (<55 dB vs 85+ dB) and toxic particulate emissions near student halls.",
      "10-year cumulative cash savings of ₹17.76 Crore, with a 4.29-year payback.",
    ],
  },

  residential_society_500: {
    id: "residential_society_500",
    title: "500-Flat High-Rise Housing Society",
    subtitle: "Centralized 7.0 MWh / 2.4 MW Lith-On BESS",
    location: "Gurugram, Delhi-NCR",
    sector: "residential",
    systemHardware: "7,000 kWh (7.0 MWh) BESS with 2,400 kW Bi-directional PCS",
    nominalCapacityKwh: 7000,
    ratedPowerKw: 2400,

    baseline: {
      systemType: "Diesel Generator Fleet (4x 750 kVA)",
      installedCapacityKva: 3000,
      annualFuelLiters: 650000,
      fuelCostPerLiterInr: 98.8,
      annualOperatingCostInr: 6.52, // ₹6.49 Cr fuel + ₹0.03 Cr maintenance = ₹6.52 Cr
      sourceType: "customer_provided",
      notes: "Log sheets for 14 residential towers with 42 lifts and 14 booster water pumps.",
    },

    bessOperation: {
      turnkeyCapexInr: 8.28, // "Total BESS CAPEX: ₹8.28 Crore" (₹7.84 Cr incremental over DG sets)
      annualChargingCostInr: null,
      annualMaintenanceInr: null,
      netAnnualOperatingCostInr: 1.76, // ₹1.76 Crore/year
      sourceType: "engineering_assumption",
    },

    outcomes: {
      annualNetSavingsInr: 4.76, // ₹6.52 Cr - ₹1.76 Cr = ₹4.76 Cr/yr
      paybackYears: 1.6, // "Simple Payback Period: ~1.6 Years" (on ₹7.84 Cr incremental capex)
      fiveYearGrossSavingsInr: null,
      fiveYearNetRoiPct: 204, // "5-Year ROI: ~204%"
      tenYearCumulativeSavingsInr: null, // not stated in source data
      tenYearNetRoiPct: 508, // "10-Year ROI: ~508%"
      dieselDisplacedLitersPerYear: 650000,
      co2eAvoidedTonsPerYear: 1740,
    },

    methodology: {
      dieselEscalationRatePctAnnual: null,
      gridEscalationRatePctAnnual: null,
      bessRoundTripEfficiencyPct: 95,
      depthOfDischargePct: 90,
      projectLifespanYears: 15,
      formulaNotes: "ROI from the project financial model: ₹8.28 Cr BESS capex at ₹12,000/kWh (₹7.84 Cr incremental over DG sets), ₹15 Lakh monthly charging cost at a ₹7/kWh grid tariff, and diesel at ₹98.8/L",
    },

    images: {
      hero: "/images/case-studies/diesel-vs-bess-comparison.jpg",
    },
    highlights: [
      "Sub-10ms cutover prevents 42 elevators from stalling between floors during sudden grid trips.",
      "100% compliant with CAQM GRAP Stage II–IV winter diesel generator prohibitions in NCR.",
      "73% reduction in annual common-area power OPEX (from ₹6.52 Cr to ₹1.76 Cr).",
      "Eliminates 1,740 tons of atmospheric CO2e and 2,800 kg of toxic PM2.5 exhaust annually.",
    ],
  },

  ev_charging_hub: {
    id: "ev_charging_hub",
    title: "Highway Commercial EV Fast-Charging Hub",
    subtitle: "450 kWh / 150 kW Lith-On BESS + 75 kWp Canopy Solar",
    location: "NH-48 Corridor, Haryana",
    sector: "ev_charging",
    systemHardware: "Lith-On BESS, 450 kWh / 150 kW, with 75 kWp canopy solar",
    nominalCapacityKwh: 450,
    ratedPowerKw: 150,

    baseline: {
      systemType: "Direct Grid Feed with Punitive Maximum Demand Charges",
      installedCapacityKva: 500,
      annualFuelLiters: 0,
      fuelCostPerLiterInr: 0,
      annualOperatingCostInr: 0.2892, // ₹28.92 Lakhs/year fixed demand penalties (₹2.41 Lakh/month, LITHON_DATA_VAULT.md)
      sourceType: "measured",
      notes: "60 kW to 350 kW simultaneous EV charging spikes trigger Maximum Demand charges (40%–60% of the utility bill) under DHBVN HT commercial tariffs.",
    },

    bessOperation: {
      capexDerived: true,
      turnkeyCapexInr: 0.79, // ₹79 Lakhs, derived: 3.9-yr payback × ₹20.26 L/yr (source data does not state capex)
      annualChargingCostInr: null,
      annualMaintenanceInr: null,
      netAnnualOperatingCostInr: null,
      sourceType: "measured",
    },

    outcomes: {
      annualNetSavingsInr: 0.2026, // ₹20.26 Lakhs/year in demand charge penalty reduction
      paybackYears: 3.90, // Capex ₹79L / ₹20.26L = 3.9 yrs
      fiveYearGrossSavingsInr: null,
      fiveYearNetRoiPct: null,
      tenYearCumulativeSavingsInr: 2.026, // ">₹2.0 Crore 10-year cumulative net savings" (vault); 20,260,000 INR (calculator-data.json)
      tenYearNetRoiPct: 153, // "153% 10-year ROI"
      dieselDisplacedLitersPerYear: 0,
      co2eAvoidedTonsPerYear: null,
    },

    methodology: {
      dieselEscalationRatePctAnnual: null,
      gridEscalationRatePctAnnual: null,
      bessRoundTripEfficiencyPct: null,
      depthOfDischargePct: null,
      projectLifespanYears: 15,
      formulaNotes: "Primary savings stem from shaving DHBVN HT maximum demand peaks above contracted load. Avoided ₹45 Lakh transformer enhancement capex.",
    },

    images: {
      hero: "/images/installations/commercial-campus-bess-photo.jpg",
    },
    highlights: [
      "Buffers rapid EV charger power draws without requiring costly utility substation transformer enhancements.",
      "Hybrid 75 kWp solar + 450 kWh BESS model saves ₹20.26 Lakh a year with a 153% 10-year ROI.",
      "BESS-only model eliminates 100% of demand charges, saving ₹12.91 Lakh a year with a payback of about 4 years.",
      "Achieved a 3.9-year payback and avoided an 18-month civil transformer upgrade delay.",
    ],
  },
};

/**
 * Shared Dynamic Financial Calculation Engine
 * Used consistently by SavingsCalculator.tsx and case study models.
 */
export interface CalculatorInput {
  dgCapacityKva: number;
  dailyRunHours: number;
  dieselPricePerLiterInr: number;
  fuelConsumptionLitersPerHour?: number;
  bessCapitalCostPerKwhInr?: number;
}

export interface CalculatorOutput {
  annualDieselLiters: number;
  annualDieselCostInr: number;
  annualBessChargingCostInr: number;
  annualNetSavingsInr: number;
  recommendedBessCapacityKwh: number;
  recommendedPcsPowerKw: number;
  estimatedCapexInr: number;
  simplePaybackYears: number;
  tenYearNetSavingsInr: number;
  annualCo2AvoidedTons: number;
}

export function calculateBessSavings(input: CalculatorInput): CalculatorOutput {
  const { dgCapacityKva, dailyRunHours, dieselPricePerLiterInr } = input;

  // Typical industrial heat rate: ~0.24 to 0.28 L/hr per kVA load (at ~75% loading)
  const litersPerHour = input.fuelConsumptionLitersPerHour ?? Math.round(dgCapacityKva * 0.22);
  const annualDieselLiters = litersPerHour * dailyRunHours * 365;
  const annualDieselCostInr = annualDieselLiters * dieselPricePerLiterInr;

  // Sizing heuristics:
  // Rated power = ~70% of DG kVA to match typical base-load
  const recommendedPcsPowerKw = Math.round(dgCapacityKva * 0.7);
  // Storage kWh = power * run hours + 15% safety buffer
  const recommendedBessCapacityKwh = Math.round(recommendedPcsPowerKw * dailyRunHours * 1.15);

  // Grid off-peak charging cost: ₹7.5 / kWh with 95% round-trip efficiency
  const annualElectricityUnitsKwh = recommendedPcsPowerKw * dailyRunHours * 365;
  const annualBessChargingCostInr = (annualElectricityUnitsKwh / 0.95) * 7.5;

  // Capex estimate: ~₹13,500 to ₹16,000 per kWh turnkey installed
  const costPerKwh = input.bessCapitalCostPerKwhInr ?? 14500;
  const estimatedCapexInr = recommendedBessCapacityKwh * costPerKwh;

  const annualNetSavingsInr = Math.max(0, annualDieselCostInr - annualBessChargingCostInr);
  const simplePaybackYears = annualNetSavingsInr > 0 ? Number((estimatedCapexInr / annualNetSavingsInr).toFixed(2)) : 0;

  // 10-year cumulative with a conservative 3% annual fuel escalation
  let tenYearCumulativeGrossSavings = 0;
  let currentFuelCost = annualDieselCostInr;
  let currentBessCost = annualBessChargingCostInr;

  for (let year = 1; year <= 10; year++) {
    tenYearCumulativeGrossSavings += (currentFuelCost - currentBessCost);
    currentFuelCost *= 1.03;
    currentBessCost *= 1.02;
  }

  const tenYearNetSavingsInr = Math.max(0, tenYearCumulativeGrossSavings - estimatedCapexInr);
  const annualCo2AvoidedTons = Math.round((annualDieselLiters * 2.68) / 1000);

  return {
    annualDieselLiters,
    annualDieselCostInr,
    annualBessChargingCostInr,
    annualNetSavingsInr,
    recommendedBessCapacityKwh,
    recommendedPcsPowerKw,
    estimatedCapexInr,
    simplePaybackYears,
    tenYearNetSavingsInr,
    annualCo2AvoidedTons,
  };
}

