# Lith-On Bharat Energy — Official Website Repository

The official web application and digital presence for **LITH-ON BHARAT ENERGY PRIVATE LIMITED**, an integrated Indian manufacturer of high-performance Lithium Iron Phosphate (LiFePO4) Battery Energy Storage Systems (BESS) and heavy-duty battery packs.

---

## 1. Visual Direction & Design Philosophy

The Lith-On website follows a **light, premium, minimal, editorial, architectural, and technology-focused** visual aesthetic:

- **Light-First Canvas**: Pure white (`#FFFFFF`) and off-white (`#FAFAF8`) surfaces provide an airy, confident foundation. Light neutral grey (`#F3F4F6`) and pale blue-grey (`#F0F4F8`) provide subtle architectural hierarchy.
- **Brand Accent Colours**:
  - **Lith-On Red (`#F74530`)**: Used exclusively as a high-emphasis accent for primary calls to action (CTAs), live indicators, and critical data callouts.
  - **Lith-On Blue (`#0B3388`)**: Used selectively for technical highlights, engineering links, icons, and certification marks.
  - *Prohibition*: No universal dark-blue backgrounds, no full-page blue flood fills, and no cybernetic neon gradients.
- **Typography**: **Manrope** sans-serif font family. Light-to-regular weight hero headlines (`font-light` / `font-normal`), medium section headings, and readable charcoal body copy.
- **Layout & Composition**:
  - Image-led hero with genuine BESS installation photography from `data-sources/`.
  - Generous whitespace and architectural breathing room (80px to 120px section padding).
  - Open editorial layouts: asymmetric split compositions, clean technical specification tables, and selective overlapping panels.
  - No repetitive three-card grids.

Detailed design tokens, typography rules, component patterns, and explicit anti-patterns are documented in **[design.md](file:///d:/Projects/npo-jibb/lithon/design.md)**.

---

## 2. Technical Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router with Turbopack)
- **UI & Runtime**: React 19, TypeScript 5
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Primitives**: Radix UI (`@radix-ui/react-accordion`, `@radix-ui/react-dialog`, `@radix-ui/react-tabs`)
- **Animation**: Motion 12 (hardware-accelerated GPU transitions)
- **Icons**: Lucide React
- **Code Standards**: Ultracite & Biome code quality with strict zero-error ESLint configuration

---

## 3. Route & Information Architecture

All 12 primary routes are pre-rendered statically:
- `/` — Homepage: Architectural hero, live metrics, 7 Moats stack, IceBattery physics, waveform oscilloscope, India map, and DG vs BESS Savings Calculator.
- `/solutions` — BESS product catalog: Magna-C&I 260 kWh, LT215 Container 215 kWh, Lith-On-50 48 kWh, Max-20HC-5000 5.0 MWh.
- `/applications` — Sector blueprints: High-Rise Residential (CAQM GRAP), Hospitals, Commercial Parks, EV Charging Hubs, Defense microgrids.
- `/case-studies` — Audited financial case studies: Kashmir Defense, Bareilly University (Invertis), 500-Flat Society, Hyundai Dealership.
- `/technology` — Proprietary technology: IceBattery® 300–400µm ceramic coating, sub-10ms UPS switchover, in-house 3-tier BMS/EMS/PCS stack.
- `/capabilities` — Noida 20,000 sq. ft. plant, 250 MWh annual throughput, 6-step testing workflow.
- `/why-lith-on` — The 7 Moats, Trifecta Certifications (`IEC 61508 + IEC 61850 + BIS`), Diesel vs BESS TCO matrix.
- `/about` — Corporate history (est. 2022 as Neoclo Energy), IIT alumni leadership, Noida factory, and Foshan R&D hub.
- `/sustainability` — Scope 1 & 2 emissions reduction, 2,800+ MT CO2 offset, circular hydrometallurgical recycling.
- `/warranty-and-support` — 10-year / 6,000-cycle warranty terms, 24/7 cloud SCADA monitoring, Noida rapid dispatch SLAs.
- `/faqs` — Searchable, categorized technical accordion covering chemistry, safety, economics, and delivery.
- `/contact` — Technical sizing RFQ inquiry form, Noida & Foshan coordinates, official phone (`+91-7000013009`), recruitment fraud warning.
- Dynamic SEO: `/sitemap.xml`, `/robots.txt`, `/manifest.webmanifest`.

---

## 4. Local Development & Build

### Prerequisites
- Node.js 20+ and npm

### Installation
```bash
# Clone the repository
git clone <repo-url>
cd lithon

# Install dependencies
npm install
```

### Running Locally
```bash
# Start development server on port 3000
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Quality Checks & Production Build
```bash
# Run production build and generate static HTML
npm run build

# Run ESLint validation
npx eslint src
```

---

## 5. Authoritative Documentation Index

- **[design.md](file:///d:/Projects/npo-jibb/lithon/design.md)**: Authoritative design system, brand colors, Manrope typography, and layout rules.
- **[rules.md](file:///d:/Projects/npo-jibb/lithon/rules.md)**: Coding agent instructions, visual enforcement, and Ultracite rules.
- **[AGENTS.md](file:///d:/Projects/npo-jibb/lithon/AGENTS.md)**: Repository guidelines, source of truth rules, and code standards.
- **[PRD.md](file:///d:/Projects/npo-jibb/lithon/PRD.md)**: Product requirements and route specifications.
- **[architecture.md](file:///d:/Projects/npo-jibb/lithon/architecture.md)**: Technical architecture, directory hierarchy, and component guidelines.
- **[LITHON_DATA_VAULT.md](file:///d:/Projects/npo-jibb/lithon/LITHON_DATA_VAULT.md)**: Master knowledge vault containing 100% verified technical specs, corporate history, and presentation metrics.
- **[PRODUCTION_HANDOFF_GUIDE.md](file:///d:/Projects/npo-jibb/lithon/PRODUCTION_HANDOFF_GUIDE.md)**: Cloud deployment instructions (Vercel, Docker, PM2) and operations procedures.
- **[content/](file:///d:/Projects/npo-jibb/lithon/content/)**: Production Markdown content files for all 12 routes.
