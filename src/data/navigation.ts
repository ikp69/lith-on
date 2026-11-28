/**
 * Lith-On navigation (design.md §9): Products · Solutions · Industries ·
 * Technology · Company. Used by the desktop mega-menu and the mobile sheet.
 * Descriptions are plain statements supported by LITHON_DATA_VAULT.md.
 */

export interface NavChild {
  label: string;
  href: string;
  description?: string;
  /** Short figure shown by product entries, e.g. "260 kWh · 125 kW". */
  meta?: string;
  /** Image for panels that show one (product cut-out or illustrative scene). */
  image?: string;
}

export interface NavItem {
  label: string;
  href: string;
  /** Label of the panel's overview link. */
  overview: string;
  description?: string;
  children?: NavChild[];
  /** Secondary links shown in a side column of the panel. */
  more?: NavChild[];
}

/**
 * Every other system in src/data/products.ts, shown under the four featured
 * families in the mega menu, the mobile menu and the footer (owner, 20 Nov
 * 2026: "show all products everywhere"). Keep in step with products.ts.
 */
export const MORE_PRODUCTS: NavChild[] = [
  { label: "Tele-Rack 100", href: "/products/tele-rack-100", meta: "10 kWh" },
  { label: "Resi-Shield 120", href: "/products/resi-shield-120", meta: "120 kWh" },
  { label: "Magna-C&I 215", href: "/products/magna-ci-215", meta: "215 kWh" },
  { label: "Magna-UTL 373", href: "/products/magna-utl-373", meta: "373 kWh" },
  { label: "Magna-UTL 418", href: "/products/magna-utl-418", meta: "418 kWh" },
  { label: "Solar-Hybrid 500", href: "/products/solar-hybrid-500", meta: "500 kWh" },
  { label: "Max-20HC-3440", href: "/products/max-20hc-3440", meta: "3.44 MWh" },
  { label: "Mega-40HC", href: "/products/mega-40hc-10000", meta: "10 MWh" },
  { label: "Home & small business", href: "/products#home-small-business", meta: "Batteries and inverters" },
];

export const MAIN_NAVIGATION: NavItem[] = [
  {
    label: "Products",
    href: "/products",
    overview: "All products",
    description: "From home batteries to 10 MWh containers",
    children: [
      { label: "Lith-On-50", href: "/products/lithon-50", meta: "48 kWh · 48 kW", description: "Compact cabinet, indoor or outdoor", image: "/images/products/catalogue/lithon-50.webp" },
      { label: "LT215", href: "/products/lt215", meta: "215 kWh · 110 kW", description: "All-in-one weatherproof system", image: "/images/products/catalogue/lt215.webp" },
      { label: "Magna-C&I", href: "/products/magna-ci", meta: "260 kWh · 125 kW", description: "Outdoor all-in-one IP55 cabinet", image: "/images/products/catalogue/magna-ci-260.webp" },
      { label: "Max-20HC-5000", href: "/products/max-20hc", meta: "5 MWh · 2.5 MW", description: "20-ft high-cube ISO container", image: "/images/products/catalogue/max-20hc-5000.webp" },
    ],
    more: [
      { label: "Datasheets and downloads", href: "/resources" },
      { label: "Savings calculator", href: "/calculator" },
      { label: "Warranty and support", href: "/warranty-and-support" },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    overview: "All solutions",
    description: "What storage does for a facility",
    children: [
      { label: "Diesel replacement", href: "/solutions#dg-reduction", description: "Replace diesel generator backup with silent storage" },
      { label: "Peak demand shaving", href: "/solutions#peak-shaving", description: "Keep grid draw under your contracted maximum demand" },
      { label: "Solar shifting", href: "/solutions#solar-shifting", description: "Store midday solar for the evening peak" },
      { label: "Backup power", href: "/solutions#backup-power", description: "Cutover in under 10 ms when the grid fails" },
      { label: "Microgrids", href: "/solutions#microgrids", description: "Storage with solar for remote and off-grid sites" },
    ],
    more: [
      { label: "Services and commissioning", href: "/services" },
      { label: "Grid services", href: "/grid-services" },
      { label: "Financing", href: "/financing" },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    overview: "All industries",
    description: "Where Lith-On systems are used",
    children: [
      { label: "Education and campuses", href: "/industries#education", description: "Universities, colleges and schools", image: "/images/hero-sec/scene-university.webp" },
      { label: "Manufacturing", href: "/industries#manufacturing", description: "Factories and process lines", image: "/images/hero-sec/scene-industrial.webp" },
      { label: "Commercial buildings", href: "/industries#commercial", description: "Offices, malls and tech parks", image: "/images/hero-sec/scene-commercial.webp" },
      { label: "Residential societies", href: "/industries#residential", description: "Gated communities and high-rise housing", image: "/images/hero-sec/scene-residential.webp" },
      { label: "Healthcare", href: "/industries#healthcare", description: "Hospitals and clinics", image: "/images/hero-sec/scene-hospital.webp" },
      { label: "EV charging", href: "/industries#ev-infrastructure", description: "Fast-charging hubs and fleet depots" },
      { label: "Data centres and telecom", href: "/industries#data-centers", description: "Server rooms and tower sites" },
    ],
  },
  {
    label: "Technology",
    href: "/technology",
    overview: "Our technology",
    description: "The engineering inside each cabinet",
    children: [
      { label: "IceBattery® thermal shield", href: "/technology#icebattery", description: "300–400 µm ceramic coating, 15–30 °C cooler inside" },
      { label: "Grid-to-battery cutover", href: "/technology#waveform", description: "Switchover in under 10 milliseconds" },
      { label: "Control stack", href: "/technology#stack", description: "In-house BMS, PCS, EMS and SCADA" },
      { label: "LFP cells", href: "/technology#lifepo4", description: "More than 6,000 cycles at 88–90% depth of discharge" },
    ],
    more: [
      { label: "Insights", href: "/blog" },
      { label: "FAQs", href: "/faqs" },
    ],
  },
  {
    label: "Company",
    href: "/about",
    overview: "About Lith-On",
    description: "Who we are and where we build",
    children: [
      { label: "Manufacturing", href: "/capabilities", description: "Our 20,000 sq. ft. plant in Noida" },
      { label: "Case studies", href: "/case-studies", description: "Documented results from installed systems" },
      { label: "Certifications", href: "/certifications", description: "IEC 61508, IEC 61850 and BIS" },
      { label: "Why Lith-On", href: "/why-lith-on", description: "How we compare" },
      { label: "Sustainability", href: "/sustainability", description: "Diesel displacement and recycling" },
    ],
    more: [
      { label: "Distributors", href: "/distributor" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export const PRIMARY_CTA = {
  label: "Request a Consultation",
  href: "/contact",
};
