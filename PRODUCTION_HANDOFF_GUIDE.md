# Lith-On Bharat Energy — Production Operations & Handoff Guide

## 1. System Overview

- **Framework**: Next.js 16.4.3 (App Router with Turbopack)
- **UI & Runtime**: React 19.3.0, TypeScript 5, Tailwind CSS 4.0.9
- **Design Primitives**: `@radix-ui/react-accordion`, `@radix-ui/react-dialog`, `@radix-ui/react-tabs`
- **Visual Design Direction**: Light-first, architectural, editorial, and minimal (`design.md`) with Manrope typography, Lith-On Red (`#F74530`), and Lith-On Blue (`#0B3388`).
- **Animation & Motion**: Motion 12.4.7 hardware-accelerated transforms
- **Iconography**: Lucide React 0.475.0
- **Corporate Entity**: LITH-ON BHARAT ENERGY PRIVATE LIMITED (Noida Sector 136 HQ & Foshan Innovation Hub)

---

## 2. Information Architecture & Route Manifest

| Route | File Location | Key Components & Features |
| :--- | :--- | :--- |
| **Home** (`/`) | `src/app/page.tsx` | Hero, Live capacity badges, 7 Moats stack, IceBattery physics, Oscilloscope waveform, India deployment map, Savings Calculator |
| **Solutions** (`/solutions`) | `src/app/solutions/page.tsx` | Magna-C&I 260 kWh, LT215 Cabinet, Lith-On-50, Max-20HC-5000 5.0 MWh technical specs |
| **Applications** (`/applications`) | `src/app/applications/page.tsx` | Hospitals, C&I Facilities, Data Centers, Solar Microgrids, EV Fast Charging hubs |
| **Case Studies** (`/case-studies`) | `src/app/case-studies/page.tsx` | Audited financial models (Kashmir Defense 1.2 MWh, Bareilly Univ 400 kWh, NCR 500 kWh, Hyundai Dealership) |
| **Technology** (`/technology`) | `src/app/technology/page.tsx` | IceBattery® 300–400µm ceramic coating physics, Sub-10ms UPS cutover, 3-tier BMS architecture |
| **Capabilities** (`/capabilities`) | `src/app/capabilities/page.tsx` | Noida 20,000 sq. ft. manufacturing facility, 250 MWh annual throughput, 6-step testing workflow |
| **Why Lith-On** (`/why-lith-on`) | `src/app/why-lith-on/page.tsx` | The 7 Moats, Trifecta Certifications (`IEC 61508 + IEC 61850 + BIS`), Diesel vs BESS TCO matrix |
| **About Us** (`/about`) | `src/app/about/page.tsx` | Corporate governance, founding story (est. 2022 as Neoclo Energy), IIT leadership, vision |
| **Sustainability** (`/sustainability`) | `src/app/sustainability/page.tsx` | Scope 1/2 reduction, 2,800+ MT CO2 offset, GRAP diesel ban compliance, closed-loop battery recycling |
| **Warranty & Support** (`/warranty-and-support`) | `src/app/warranty-and-support/page.tsx` | 10-year warranty, >6,000 cycles guarantee, 24/7 cloud SCADA telemetry, enterprise SLAs |
| **FAQs** (`/faqs`) | `src/app/faqs/page.tsx` | 35+ searchable and categorized accordion questions across 6 technical domains |
| **Contact & Sizing RFQ** (`/contact`) | `src/app/contact/page.tsx` | Interactive sizing RFQ form, Noida HQ coords, Foshan hub, email & phones, fraud warning |

---

## 3. SEO & Crawl Optimization

- **Dynamic Sitemap**: Automatically generated at `/sitemap.xml` via `src/app/sitemap.ts`.
- **Robots Directives**: Automatically generated at `/robots.txt` via `src/app/robots.ts`.
- **Web App Manifest**: Automatically generated at `/manifest.webmanifest` via `src/app/manifest.ts`.
- **Structured Data (JSON-LD)**: Organization schema, ContactPoint schema, and LocalBusiness plant schema injected in `src/app/layout.tsx`.

---

## 4. Deployment Instructions

### Option A: Vercel (Recommended)
1. Push this repository to GitHub or GitLab.
2. Import project into Vercel.
3. Vercel automatically detects Next.js:
   - Framework: **Next.js**
   - Build Command: `npm run build`
   - Output Directory: `.next`
4. The included `vercel.json` applies HTTP security headers (`nosniff`, `DENY`, `strict-origin-when-cross-origin`) and long-term caching for static assets.

### Option B: Docker Container
Build and run the multi-stage Docker container:
```bash
# Build production Docker image
docker build -t lithon-website:latest .

# Run container on port 3000
docker run -d -p 3000:3000 --name lithon-app lithon-website:latest
```

### Option C: Standalone Node.js / PM2 Server
```bash
# Install production dependencies and build
npm ci
npm run build

# Start production server using PM2
pm2 start npm --name "lithon-website" -- start
```

---

## 5. Maintenance & Content Updates

- **Updating Financial Calculator Presets**:
  Modify `content/calculator-data.json`. The component `SavingsCalculator.tsx` automatically consumes this configuration without needing code modifications.
- **Updating Verified Product Specs**:
  Reference `LITHON_DATA_VAULT.md` before changing specifications to ensure strict compliance with `AGENTS.md`.
- **Quality Checks Before Every Deploy**:
  ```bash
  # Check for TypeScript errors and compile static routes
  npm run build

  # Run ESLint validation
  npx eslint src
  ```
