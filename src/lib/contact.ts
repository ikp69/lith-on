import { PRODUCTS_DATA } from "@/data/products";

/**
 * Contact intake schema, shared by the form (src/components/contact) and the
 * /api/contact route, so the server accepts only the fields defined here and
 * validates them with the same rules the visitor saw.
 * Facility types follow content/contact.md.
 */

export const INTENTS = ["assessment", "distributor", "support"] as const;
export type Intent = (typeof INTENTS)[number];

/** Everything /api/contact accepts: the three Contact page intents plus the catalogue download form. */
export const API_INTENTS = [...INTENTS, "catalogue"] as const;
export type ApiIntent = (typeof API_INTENTS)[number];

export type FieldType = "text" | "email" | "tel" | "number" | "select" | "textarea";

export interface FieldDef {
  name: string;
  label: string;
  type: FieldType;
  required?: boolean;
  options?: readonly string[];
  placeholder?: string;
  hint?: string;
  autoComplete?: string;
  /** Spans both columns on wider screens. */
  wide?: boolean;
  /** Message when a required field is empty (defaults to "Enter …" / "Choose …"). */
  requiredMessage?: string;
}

export interface StepDef {
  title: string;
  /** Shown under the step title. */
  note?: string;
  fields: FieldDef[];
}

export const RECOMMEND = "Let your engineers recommend";

export const FACILITY_TYPES = [
  { key: "residential", label: "Residential society or high-rise" },
  { key: "commercial", label: "Commercial office or IT park" },
  { key: "healthcare", label: "Hospital or healthcare facility" },
  { key: "education", label: "Educational campus" },
  { key: "industrial", label: "Industrial or manufacturing plant" },
  { key: "ev_charging", label: "EV fast-charging site" },
  { key: "utility", label: "Utility substation or solar/wind farm" },
  { key: "other", label: "Other" },
] as const;

const PRODUCT_NAMES = PRODUCTS_DATA.map((p) => p.name);

const contactFields = (prefix = ""): FieldDef[] => [
  { name: "name", label: `${prefix}Name`, type: "text", required: true, autoComplete: "name" },
  { name: "organisation", label: "Organisation", type: "text", required: true, autoComplete: "organization" },
  { name: "phone", label: "Phone", type: "tel", required: true, autoComplete: "tel", placeholder: "+91" },
  { name: "email", label: "Email", type: "email", required: true, autoComplete: "email" },
];

export const ASSESSMENT_STEPS: StepDef[] = [
  {
    title: "Your site",
    fields: [
      { name: "facility", label: "Facility type", type: "select", required: true, options: FACILITY_TYPES.map((f) => f.label) },
      { name: "city", label: "City and state", type: "text", required: true, autoComplete: "address-level2", placeholder: "e.g. Gurugram, Haryana" },
      { name: "timeline", label: "Timeline", type: "select", required: true, options: ["Within 3 months", "3 to 6 months", "6 to 12 months", "Exploring options"] },
      { name: "product", label: "Product (optional)", type: "select", options: [RECOMMEND, ...PRODUCT_NAMES] },
    ],
  },
  {
    title: "Power profile",
    note: "All optional. If you don't have these to hand, continue and our engineers will work them out with you.",
    fields: [
      { name: "load", label: "Sanctioned load (kW or kVA)", type: "number" },
      { name: "dg", label: "Diesel generator capacity (kVA)", type: "number" },
      { name: "outage", label: "Daily outage or backup hours", type: "number" },
      { name: "solar", label: "Solar on site", type: "select", options: ["No", "Yes, under 100 kWp", "Yes, 100–500 kWp", "Yes, over 500 kWp", "Planned"] },
    ],
  },
  { title: "Your details", fields: contactFields() },
  {
    title: "Anything else",
    fields: [
      {
        name: "notes",
        label: "Notes (optional)",
        type: "textarea",
        wide: true,
        placeholder: "Space available, monthly consumption, peak demand charges, GRAP deadlines, documents you need…",
      },
    ],
  },
];

export const DISTRIBUTOR_FIELDS: FieldDef[] = [
  { name: "organisation", label: "Company", type: "text", required: true, autoComplete: "organization" },
  {
    name: "business",
    label: "Business type",
    type: "select",
    required: true,
    options: ["Solar or electrical EPC", "Electrical equipment distributor", "Diesel generator dealer", "EV charging integrator", "Engineering or MEP consultant", "Other"],
  },
  { name: "territory", label: "States you cover", type: "text", required: true, placeholder: "e.g. Gujarat, Maharashtra" },
  { name: "turnover", label: "Annual turnover (optional)", type: "select", options: ["Prefer not to say", "Under ₹5 crore", "₹5–20 crore", "₹20–50 crore", "Over ₹50 crore"] },
  { name: "name", label: "Contact person", type: "text", required: true, autoComplete: "name" },
  { name: "phone", label: "Phone", type: "tel", required: true, autoComplete: "tel", placeholder: "+91" },
  { name: "email", label: "Email", type: "email", required: true, autoComplete: "email", wide: true },
  { name: "notes", label: "Your experience (optional)", type: "textarea", wide: true, placeholder: "Installed volume, brands you work with, client base…" },
];

export const URGENT = "Critical: system offline";

export const SUPPORT_FIELDS: FieldDef[] = [
  { name: "site", label: "Site name", type: "text", required: true },
  { name: "product", label: "Product", type: "select", required: true, options: [...PRODUCT_NAMES, "Battery pack or other"] },
  { name: "serial", label: "Serial number (optional)", type: "text" },
  { name: "urgency", label: "Urgency", type: "select", required: true, options: [URGENT, "Alarm or performance issue", "Routine maintenance", "Warranty or records request"] },
  { name: "name", label: "Contact person", type: "text", required: true, autoComplete: "name" },
  { name: "phone", label: "Phone", type: "tel", required: true, autoComplete: "tel", placeholder: "+91" },
  { name: "email", label: "Email", type: "email", required: true, autoComplete: "email", wide: true },
  { name: "notes", label: "What is happening?", type: "textarea", required: true, requiredMessage: "Describe what is happening", wide: true, placeholder: "Alarm codes on the PCS display or SCADA app, breaker status, when it started…" },
];

/** Catalogue download form (resources page): name, email and phone only. */
export const CATALOGUE_FIELDS: FieldDef[] = [
  { name: "name", label: "Name", type: "text", required: true, autoComplete: "name", wide: true },
  { name: "email", label: "Email", type: "email", required: true, autoComplete: "email" },
  { name: "phone", label: "Phone", type: "tel", required: true, autoComplete: "tel", placeholder: "+91" },
];

export function fieldsFor(intent: ApiIntent): FieldDef[] {
  if (intent === "catalogue") {
    return CATALOGUE_FIELDS;
  }
  if (intent === "assessment") {
    return ASSESSMENT_STEPS.flatMap((s) => s.fields);
  }
  return intent === "distributor" ? DISTRIBUTOR_FIELDS : SUPPORT_FIELDS;
}

export const INTENT_LABEL: Record<ApiIntent, string> = {
  assessment: "Project or sizing request",
  distributor: "Distributor application",
  support: "Support request",
  catalogue: "Catalogue download",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[+\d][\d\s()-]{6,19}$/;
const MAX_TEXT = 200;
const MAX_LONG = 3000;

/** Returns an error message for one field, or "" when valid. */
export function validateField(field: FieldDef, raw: string | undefined): string {
  const value = (raw ?? "").trim();
  if (!value) {
    if (!field.required) {
      return "";
    }
    const verb = field.type === "select" ? "Choose" : "Enter";
    return field.requiredMessage ?? `${verb} ${field.label.toLowerCase()}`;
  }
  if (value.length > (field.type === "textarea" ? MAX_LONG : MAX_TEXT)) {
    return "This is too long";
  }
  if (field.type === "email" && !EMAIL_RE.test(value)) {
    return "Enter an email address like name@company.com";
  }
  if (field.type === "tel" && !PHONE_RE.test(value)) {
    return "Enter a phone number with digits only, e.g. +91 98765 43210";
  }
  if (field.type === "number" && !(Number.isFinite(Number(value)) && Number(value) >= 0)) {
    return "Enter a number";
  }
  if (field.type === "select" && field.options && !field.options.includes(value)) {
    return "Choose an option from the list";
  }
  return "";
}

export function validateFields(fields: FieldDef[], values: Record<string, string>): Record<string, string> {
  const errors: Record<string, string> = {};
  for (const f of fields) {
    const message = validateField(f, values[f.name]);
    if (message) {
      errors[f.name] = message;
    }
  }
  return errors;
}

/** Default values: the first option for required selects, empty otherwise. */
export function initialValues(intent: Intent): Record<string, string> {
  const values: Record<string, string> = {};
  for (const f of fieldsFor(intent)) {
    values[f.name] = f.type === "select" && f.options ? f.options[0] : "";
  }
  return values;
}
