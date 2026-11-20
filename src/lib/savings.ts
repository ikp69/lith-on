import calc from "../../content/calculator-data.json" with { type: "json" };

/**
 * Diesel generator vs Lith-On BESS savings estimate (CAL-02).
 * Every formula and default comes from content/calculator-data.json
 * ("calculationFormulas" and "defaults"). One rule is derived, not stated:
 * battery energy is sized to carry the load for the outage hours at 90% depth
 * of discharge and 95% round-trip efficiency, the parameters of vault Case
 * Study B (2,000 kW × 3 h → 7,000 kWh). No fuel escalation, financing, tax,
 * solar or demand-charge savings are modelled.
 */

const D = calc.defaults;

export const ASSUMPTIONS = {
  dieselPrice: D.dieselPricePerLiter,
  gridRate: D.gridElectricityRatePerKWh,
  bessCostPerKwh: D.bessCostPerKWh,
  litresPerKwh: D.dgSpecificFuelConsumptionLitersPerKWh,
  roundTrip: D.bessRoundTripEfficiency,
  co2PerLitre: D.co2KgPerLiterDiesel,
  depthOfDischarge: 0.9,
  dgMaintenancePerKva: 100,
  bessUpkeepPerKwh: 50,
} as const;

export interface SavingsInput {
  /** Load the system must carry during outages, kW. */
  loadKw: number;
  /** Outage or backup hours a day. */
  hours: number;
  /** Installed diesel generator capacity, kVA (drives DG maintenance). */
  dgKva: number;
  dieselPrice: number;
  gridRate: number;
}

export interface SavingsResult {
  dieselLitres: number;
  dgAnnualCost: number;
  bessAnnualCost: number;
  annualSavings: number;
  bessKwh: number;
  capex: number;
  /** Simple payback in years, or null when there are no savings. */
  paybackYears: number | null;
  co2Tonnes: number;
}

export function estimateSavings(i: SavingsInput): SavingsResult {
  const a = ASSUMPTIONS;
  const energyKwh = i.loadKw * i.hours * 365;
  const dieselLitres = energyKwh * a.litresPerKwh;
  const dgAnnualCost = dieselLitres * i.dieselPrice + i.dgKva * a.dgMaintenancePerKva;
  const bessKwh = Math.ceil((i.loadKw * i.hours) / (a.depthOfDischarge * a.roundTrip) / 10) * 10;
  const bessAnnualCost = (energyKwh / a.roundTrip) * i.gridRate + bessKwh * a.bessUpkeepPerKwh;
  const annualSavings = dgAnnualCost - bessAnnualCost;
  const capex = bessKwh * a.bessCostPerKwh;
  return {
    dieselLitres,
    dgAnnualCost,
    bessAnnualCost,
    annualSavings,
    bessKwh,
    capex,
    paybackYears: annualSavings > 0 ? capex / annualSavings : null,
    co2Tonnes: (dieselLitres * a.co2PerLitre) / 1000,
  };
}

/** Example inputs: vault Case Study B, and the mall preset in calculator-data.json. */
export const EXAMPLES: { label: string; input: Pick<SavingsInput, "loadKw" | "hours" | "dgKva"> }[] = [
  { label: "500-flat housing society", input: { loadKw: 2000, hours: 3, dgKva: 3000 } },
  { label: "Shopping mall or tech park", input: { loadKw: 750, hours: 2.5, dgKva: 1000 } },
];

/** ₹ in crore or lakh, Indian style. */
export function formatInr(amount: number): string {
  const sign = amount < 0 ? "−" : "";
  const v = Math.abs(amount);
  if (v >= 1e7) {
    return `${sign}₹${(v / 1e7).toFixed(2)} Cr`;
  }
  if (v >= 1e5) {
    return `${sign}₹${(v / 1e5).toFixed(1)} lakh`;
  }
  return `${sign}₹${Math.round(v).toLocaleString("en-IN")}`;
}
