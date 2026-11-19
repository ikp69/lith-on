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

export const MAIN_NAVIGATION: NavItem[] = [
  {
    label: "Products",
    href: "/products",
    overview: "All products",
    description: "Cabinet and container systems from 48 kWh to 5 MWh",
    children: [
      { label: "Lith-On-50", href: "/products/lithon-50", meta: "48 kWh · 48 kW", description: "Compact cabinet, indoor or outdoor", image: "/images/products/catalogue/lithon-50.webp" },
      { label: "LT215", href: "/products/lt215", meta: "215 kWh · 110 kW", description: "All-in-one weatherproof system", image: "/images/products/catalogue/lt215.webp" },
      { label: "Magna-C&I", href: "/products/magna-ci", meta: "260 kWh · 125 kW", description: "Outdoor all-in-one IP55 cabinet", image: "/images/products/catalogue/magna-ci-260.webp" },
      { label: "Max-20HC-5000", href: "/products/max-20hc", meta: "5 MWh · 1.25 MW", description: "20-ft high-cube ISO container", image: "/images/products/catalogue/max-20hc-5000.webp" },
    ],
    more: [
      { label: "Home & small business", href: "/products#home-small-business" },
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
      { label: "Commercial buildings", href: "/industries#commercial", description: "Offices, malls and high-rise housing", image: "/images/hero-sec/scene-commercial.webp" },
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
  },
  {
    label: "Company",
    href: "/about",
    overview: "About Lith-On",
    description: "Who we are and where we build",
    children: [
      { label: "About", href: "/about", description: "Our story and leadership" },
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
