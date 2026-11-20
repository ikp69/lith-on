/**
 * Technology comparisons from the Lith-On BESS products catalogue
 * (data-sources/Lith-On Catalogue, pages 29–30). Wording lightly edited for
 * grammar only. These are general technology comparisons; where they differ
 * from Lith-On's own product figures (LITHON_DATA_VAULT.md §2) the table note
 * says so. See CLAIMS_REVIEW item 15.
 */

export interface ComparisonRow {
  parameter: string;
  ours: string;
  theirs: string;
}

export interface ComparisonGroup {
  title?: string;
  rows: ComparisonRow[];
}

export interface Comparison {
  id: string;
  title: string;
  lead: string;
  oursLabel: string;
  theirsLabel: string;
  groups: ComparisonGroup[];
  note: string;
}

export const DG_VS_BESS: Comparison = {
  id: "dg-vs-bess",
  title: "Battery storage or a diesel generator?",
  lead: "How a lithium battery energy storage system compares with a DG set on cost, upkeep and efficiency.",
  oursLabel: "Lithium battery ESS",
  theirsLabel: "Diesel generator set",
  groups: [
    {
      title: "Capital investment",
      rows: [
        { parameter: "Initial cost", ours: "Higher upfront cost, due to battery technology and inverter systems", theirs: "Lower initial cost" },
        { parameter: "Installation cost", ours: "Lower: modular systems, simple installation", theirs: "Higher: fuel lines, venting and similar works" },
      ],
    },
    {
      title: "Operating costs",
      rows: [
        { parameter: "Fuel cost", ours: "None: charged from solar or grid electricity", theirs: "High: diesel consumption" },
        { parameter: "Maintenance cost", ours: "Minimal: no moving parts, periodic BMS checks", theirs: "High: engine servicing, filters and similar" },
        { parameter: "Lifespan", ours: "10–15 years (5,000+ cycles)", theirs: "5–10 years, depending on usage" },
      ],
    },
    {
      title: "Efficiency",
      rows: [
        { parameter: "Efficiency", ours: "90–95% (charge and discharge)", theirs: "30–40% (diesel energy converted to power)" },
        { parameter: "Energy use", ours: "Higher, with further savings when paired with renewables", theirs: "Lower, due to higher losses" },
      ],
    },
  ],
  note: "General comparison from the Lith-On product catalogue. Lith-On systems are specified for round-trip efficiency above 95%, more than 6,000 cycles and a 15–20 year design life.",
};

export const LEAD_ACID_VS_LITHIUM: Comparison = {
  id: "lead-acid-vs-lithium",
  title: "Lithium or lead-acid?",
  lead: "Typical differences between the two battery technologies.",
  oursLabel: "Lithium-ion",
  theirsLabel: "Lead-acid",
  groups: [
    {
      rows: [
        { parameter: "Size and weight", ours: "Around 6 kg per kWh, with higher energy density and a smaller footprint", theirs: "Around 30 kg per kWh, about five times heavier" },
        { parameter: "Voltage", ours: "Stable output for consistent power", theirs: "Fluctuates with the output load" },
        { parameter: "Cycle life", ours: "4,500–6,000 cycles; manufacturer warranty typically 5–10 years", theirs: "500–1,000 cycles; manufacturer warranty typically 2–3 years" },
        { parameter: "Depth of discharge", ours: "Up to 99% of capacity", theirs: "Around 50–60%" },
        { parameter: "Charging time", ours: "Full charge in 5–6 hours", theirs: "8–12 hours for a full charge" },
        { parameter: "Operating temperature", ours: "−20 °C to +75 °C", theirs: "−20 °C to +55 °C" },
      ],
    },
  ],
  note: "Typical values for each technology, from the Lith-On product catalogue. Lith-On LFP systems are specified for more than 6,000 cycles at 88–90% depth of discharge, with warranty terms set for each product.",
};
