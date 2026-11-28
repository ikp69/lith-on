/**
 * Insights articles for /blog and /blog/[slug].
 *
 * Every figure here already appears in LITHON_DATA_VAULT.md or on a case-study
 * page; `sources` names where. Add an article only from approved material, and
 * leave out publication dates until the owner sets them.
 */

export interface BlogSection {
  heading: string;
  paragraphs: readonly string[];
  list?: readonly string[];
  table?: { caption: string; columns: readonly string[]; rows: readonly (readonly string[])[] };
}

export interface BlogPost {
  slug: string;
  title: string;
  /** Meta description and listing summary, about 150 characters. */
  description: string;
  topic: string;
  readMinutes: number;
  lead: string;
  sections: readonly BlogSection[];
  related: readonly { label: string; href: string }[];
  sources: readonly string[];
}

export const BLOG_POSTS: readonly BlogPost[] = [
  {
    slug: "housing-society-diesel-to-storage",
    title: "Replacing diesel generators in a housing society",
    description: "How a 500-flat Gurugram society moves from four diesel generators to 7 MWh of storage: costs, payback and GRAP diesel restrictions.",
    topic: "Residential societies",
    readMinutes: 4,
    lead: "Diesel generators keep a housing society running in an outage, but they are expensive to fuel, slow to start and restricted during Delhi-NCR pollution episodes. Here is what changes when a society switches to battery storage.",
    sections: [
      {
        heading: "The site",
        paragraphs: [
          "The society has 14 towers of 11 floors, 500 flats in all. Its demand is about 2,000 kW, including 42 lifts and 14 water pumps. Backup came from four 750 kVA diesel generators, 3,000 kVA in total.",
        ],
      },
      {
        heading: "What diesel costs",
        paragraphs: [
          "Running those generators cost about ₹6.52 Cr a year: ₹6.49 Cr of fuel at ₹98.8 a litre, plus ₹3 lakh of maintenance. Fuel is 75–80% of what a diesel generator costs to run.",
          "Cost is not the only problem. A generator takes 10–30 seconds to start, so lifts stall and routers drop. It runs at 75–90 dB, and with its fuel tanks it takes space that could hold parking or EV charging.",
        ],
      },
      {
        heading: "The storage system",
        paragraphs: [
          "The replacement is a 7,000 kWh, 2,400 kW Lith-On system, enough for three hours at full demand. It runs at 90% depth of discharge and 95% efficiency, and switches over in under 10 milliseconds, so lifts keep moving through an outage.",
        ],
        table: {
          caption: "Annual operating cost",
          columns: ["", "Diesel generators", "Lith-On storage"],
          rows: [
            ["Annual cost", "₹6.52 Cr", "₹1.76 Cr"],
            ["How it is powered", "Diesel at ₹98.8 a litre", "Grid power at ₹7 per kWh"],
            ["Switchover", "10–30 seconds", "Under 10 ms"],
          ],
        },
      },
      {
        heading: "Payback",
        paragraphs: [
          "The society saves about ₹4.76 Cr a year, 73% of its energy cost. The system costs ₹8.28 Cr, ₹7.84 Cr more than diesel, so the simple payback is about 1.6 years.",
        ],
      },
      {
        heading: "Pollution restrictions",
        paragraphs: [
          "Under CAQM's Graded Response Action Plan, diesel generators can be restricted across Delhi-NCR when air quality worsens. A battery system has no exhaust, so it keeps running through GRAP Stages II, III and IV.",
        ],
      },
    ],
    related: [
      { label: "Read the full case study", href: "/case-studies/residential-society-500" },
      { label: "Storage for residential societies", href: "/industries#residential" },
    ],
    sources: ["BESS in Housing Society Presentation, slides 9–10", "LITHON_DATA_VAULT.md §3"],
  },
  {
    slug: "how-icebattery-coating-works",
    title: "How the IceBattery® coating keeps a cabinet cool",
    description: "A 300–400 µm ceramic coating that reflects sunlight and radiates heat, keeping Lith-On cabinets 15–30 °C cooler inside at up to 60 °C ambient.",
    topic: "Technology",
    readMinutes: 3,
    lead: "Batteries lose capacity and life when they run hot, and Indian summers push enclosures well past what most cooling systems are sized for. IceBattery® is Lith-On's answer: a coating on the enclosure that keeps heat out before the air-conditioning has to remove it.",
    sections: [
      {
        heading: "What it is",
        paragraphs: [
          "IceBattery® is an inorganic ceramic coating, 300–400 µm thick, applied to the outside of Lith-On cabinets and containers at the Noida plant.",
        ],
      },
      {
        heading: "How it works",
        paragraphs: ["The coating handles heat in two ways."],
        list: [
          "It reflects sunlight. The coating has high reflectance in the near-infrared, so most incoming solar heat bounces off instead of soaking into the walls.",
          "It radiates heat away. Its emissivity is above 0.92 in the 8–13 µm atmospheric window, so heat the enclosure has gathered leaves as far-infrared radiation.",
        ],
      },
      {
        heading: "What it does",
        paragraphs: [
          "Together these keep the inside of the cabinet 15–30 °C cooler. The system runs at full power in ambient heat up to 60 °C without thermal throttling, and the cooling system uses more than 20% less energy.",
          "Inside, liquid or HVAC cooling holds the cells near 20 °C. Because the coating has already kept most of the heat out, that cooling has far less work to do.",
        ],
      },
      {
        heading: "In cold weather",
        paragraphs: [
          "The coating also helps on cold, high-altitude sites such as Kashmir. Its ceramic surface stays close to the outside temperature, which reduces heat lost through the enclosure walls.",
        ],
      },
    ],
    related: [
      { label: "IceBattery® on the technology page", href: "/technology#icebattery" },
      { label: "Browse storage systems", href: "/products" },
    ],
    sources: ["LITHON_DATA_VAULT.md §2", "Lith-On BESS presentation for Investors, slides 6 and 13"],
  },
  {
    slug: "ev-charging-demand-charges",
    title: "Why EV charging hubs pay demand charges, and how storage removes them",
    description: "Fast chargers starting together set a high maximum demand. A 450 kWh battery buffer removed a highway hub's ₹96,000 monthly demand charge.",
    topic: "EV charging",
    readMinutes: 4,
    lead: "An EV charging hub can spend more on its peak than on the energy it sells. When several fast chargers start at once, the maximum demand they set decides a large part of the bill.",
    sections: [
      {
        heading: "Where the money goes",
        paragraphs: [
          "Fast chargers draw 60–350 kW each, in sudden spikes. Under a commercial tariff the utility bills the highest demand of the month, and that charge is often 40–60% of a station's bill.",
          "On the highway hub we modelled on NH-48 in Haryana, a 240 kVA peak at ₹400 per kVA under the DHBVN HT commercial tariff cost ₹96,000 a month, out of a total bill of ₹2.42 lakh.",
        ],
      },
      {
        heading: "What operators do instead",
        paragraphs: [
          "To keep the peak down, many operators throttle their chargers. A 30-minute charge can then take 90 minutes, and drivers go elsewhere.",
        ],
      },
      {
        heading: "How a battery buffer helps",
        paragraphs: [
          "A 450 kWh, 150 kW Lith-On system sits between the grid and the chargers. The battery absorbs the charging spikes, so the grid connection never reaches the old peak. The EMS charges the battery ahead of forecast demand, and in an outage the station keeps charging in island mode.",
        ],
        table: {
          caption: "Savings in the hub model",
          columns: ["", "Storage only", "Storage with 75 kWp solar"],
          rows: [
            ["Demand charges", "Removed", "Removed"],
            ["Saved a year", "₹12.91 lakh", "₹20.26 lakh"],
            ["Payback", "About 4 years", "3.9 years"],
          ],
        },
      },
      {
        heading: "No transformer upgrade",
        paragraphs: [
          "Because the battery supplies the peaks, the same chargers can run on a smaller grid connection. A hub can add chargers without waiting for a transformer upgrade.",
        ],
      },
    ],
    related: [
      { label: "Read the EV hub case study", href: "/case-studies/ev-charging-hub" },
      { label: "Storage for EV charging", href: "/industries#ev-infrastructure" },
    ],
    sources: ["Hyundai Lith-On presentation, slides 9–11", "LITHON_DATA_VAULT.md §3"],
  },
];

export const getPost = (slug: string): BlogPost | undefined => BLOG_POSTS.find((p) => p.slug === slug);
