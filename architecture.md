# Architecture & Technical Specifications — Lith-On Website

## 1. Architectural Foundation & Stack

- **Framework**: Next.js 16.4.3 (App Router with Turbopack)
- **UI Runtime**: React 19.3.0 & TypeScript 5
- **Styling Architecture**: Tailwind CSS 4.0.9 (CSS-first engine with `@theme` block)
- **Accessible UI Primitives**: Radix UI (`@radix-ui/react-accordion`, `@radix-ui/react-dialog`, `@radix-ui/react-tabs`)
- **Motion & Interactions**: Motion 12.4.7 (hardware-accelerated GPU transforms)
- **Iconography**: Lucide React 0.475.0
- **Rendering Model**: Static Site Generation (SSG / Static Pre-rendering) across all 12 primary routes and dynamic SEO endpoints.

---

## 2. Design System Tokens & Styling Implementation

The site uses a light-first, architectural styling system mapped via Tailwind CSS design tokens:

### A. Colour Token Mapping

```css
@theme {
  /* Brand Accents */
  --color-lithon-red: #F74530;
  --color-lithon-red-hover: #D83522;
  --color-lithon-blue: #0B3388;
  --color-lithon-blue-hover: #082666;

  /* Light-First Surfaces */
  --color-canvas-pure: #FFFFFF;
  --color-canvas-offwhite: #FAFAF8;
  --color-surface-light: #F3F4F6;
  --color-surface-blue-grey: #F0F4F8;
  --color-border-subtle: #E5E7EB;

  /* Typography Charcoal Palette */
  --color-text-primary: #111827;
  --color-text-secondary: #4B5563;
  --color-text-muted: #6B7280;
}
```

### B. Typography Loading (`Manrope`)
Next.js Font Optimization (`next/font/google`) is used to load **Manrope** without external render-blocking network requests:
```typescript
import { Manrope } from "next/font/google";

export const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});
```
The font variable `--font-manrope` is applied to the root `<html>` element, providing crisp typography with system sans-serif fallbacks.

---

## 3. Directory Layout & Route Hierarchy

```
lithon/
├── public/
│   └── images/
│       ├── logo/              # Official brand logos (logo-dark.png, logo-light.png)
│       └── heroes/            # High-res authentic facility & BESS photos
├── src/
│   ├── app/
│   │   ├── layout.tsx         # RootLayout with Manrope font, JSON-LD Schema, Header, Footer
│   │   ├── globals.css        # Tailwind v4 theme tokens and global utility definitions
│   │   ├── sitemap.ts         # Dynamic XML Sitemap generator
│   │   ├── robots.ts          # Robots.txt directives
│   │   ├── manifest.ts        # PWA Web App Manifest
│   │   ├── page.tsx           # Homepage (/)
│   │   ├── solutions/         # Solutions (/solutions)
│   │   ├── applications/      # Applications (/applications)
│   │   ├── case-studies/      # Case Studies (/case-studies)
│   │   ├── technology/        # Technology (/technology)
│   │   ├── capabilities/      # Capabilities (/capabilities)
│   │   ├── why-lith-on/       # Why Lith-On (/why-lith-on)
│   │   ├── about/             # About Us (/about)
│   │   ├── sustainability/    # Sustainability (/sustainability)
│   │   ├── warranty-and-support/ # Warranty & Support (/warranty-and-support)
│   │   ├── faqs/              # FAQs (/faqs)
│   │   └── contact/           # Contact & RFQ (/contact)
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx     # Light-first sticky navbar, logo, quick dial, mobile drawer
│   │   │   └── Footer.tsx     # Clean footer with Noida/Foshan coords, Trifecta badges, fraud modal
│   │   ├── ui/
│   │   │   └── WhatsAppButton.tsx # Floating WhatsApp quick-connect button
│   │   ├── calculator/
│   │   │   └── SavingsCalculator.tsx # Interactive DG vs BESS financial engine
│   │   ├── illustrations/
│   │   │   ├── IceBatteryThermal.tsx # Ceramic thermal shield physics diagram
│   │   │   ├── Sub10msWaveform.tsx   # Oscilloscope UPS waveform visualizer
│   │   │   ├── PanIndiaMap.tsx       # Vector India deployment telemetry map
│   │   │   └── SevenMoatsStack.tsx   # 3D architectural moats stack
│   │   └── products/
│   │       └── ProductCard.tsx       # BESS hardware specification card
│   └── lib/
│       └── utils.ts           # ClassName merge utility (clsx + tailwind-merge)
├── content/                   # Production Markdown source content & JSON data
│   ├── home.md
│   ├── about.md
│   ├── solutions.md
│   ├── applications.md
│   ├── case-studies.md
│   ├── technology.md
│   ├── capabilities.md
│   ├── why-lith-on.md
│   ├── faqs.md
│   ├── sustainability.md
│   ├── warranty-and-support.md
│   ├── contact.md
│   └── calculator-data.json   # Audited presets for the financial savings calculator
├── data-sources/              # Authentic presentation files, brand assets & extracted decks
└── vercel.json                # Deployment headers and asset caching config
```

---

## 4. Component Architectural Guidelines (Light-First Adaptation)

1. **Header Component (`Header.tsx`)**:
   - Clean white or translucent light surface (`bg-white/90 backdrop-blur-md`).
   - Official dark logo (`/images/logo/logo-dark.png`) on pure white background.
   - Text in dark charcoal (`text-gray-700 hover:text-[#0B3388]`).
   - CTA highlighted in Lith-On Red (`#F74530`) or Lith-On Blue (`#0B3388`).
2. **Footer Component (`Footer.tsx`)**:
   - High-contrast, clean layout. Can use an off-white surface (`bg-gray-100 border-t border-gray-200`) or deep industrial charcoal (`bg-slate-900 text-white`) as an intentional grounding footer.
   - Houses the accessible Recruitment Fraud Advisory Dialog modal (`@radix-ui/react-dialog`).
3. **Product & Specification Cards (`ProductCard.tsx`)**:
   - Clean white card (`bg-white border border-gray-200 shadow-sm rounded-xl`).
   - Technical badges with subtle pale blue-grey surfaces (`bg-blue-50 text-[#0B3388] border border-blue-100`).
   - Specification tables with light zebra striping (`even:bg-gray-50/50`).
4. **Interactive Calculators & Visualizers**:
   - Inputs and sliders styled with light neutral track and Lith-On Blue/Red thumb controls.
   - Waveform canvas and temperature physics models render on clean light or subtle slate backgrounds with clear contrast.

---

## 5. Build, Lint & Quality Pipeline

- **Build Script**: `next build` (compiles all 17 static pages via Turbopack in sub-10 seconds).
- **TypeScript**: Strict type checking with `tsconfig.json` (`strict: true`, zero `any` types).
- **ESLint & Ultracite**: Biome/ESLint flat config enforcing accessibility, Next.js `<Image>` usage, no dead code, and clean JSX structures.
