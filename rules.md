# Rules — AI Coding Agent (Lith-On Website)

## 1. Priority Order
When instructions conflict, follow this order:
1. System, platform, and safety requirements.
2. Explicit user instructions for the current task.
3. This repository's `AGENTS.md` and other applicable agent instructions.
4. Approved requirements in `PRD.md`.
5. Authoritative design specifications in `design.md`.
6. Verified architecture in `architecture.md`.
7. Preferences or historical notes in `memory.md`.

Treat `memory.md` as context, not as authority to override current instructions, design specifications, or verified code.

---

## 2. Visual Direction & Design Enforcement Rules

1. **Light-First Canvas**:
   - The default page canvas and section background must be pure white (`#FFFFFF`) or off-white (`#FAFAF8`).
   - Light neutral grey (`#F3F4F6`) or pale blue-grey (`#F0F4F8`) may be used for technical panels, specification tables, and subtle architectural contrast.
   - **Prohibited**: Universal dark-blue (`#0B132B`) or dark-slate backgrounds as the default page theme. Dark styling is permitted only for selective, purposeful exceptions (e.g., deep technical terminal or compact footer).
2. **Restricted Brand Accent Colours**:
   - **Lith-On Red (`#F74530`)**: Used exclusively as a high-emphasis accent for primary action buttons (CTAs), live indicators, and critical data highlights. Do not flood large backgrounds with red.
   - **Lith-On Blue (`#0B3388`)**: Used selectively for technical highlights, engineering links, icons, and certification badges. Do not use as a universal section background or alternate full-bleed blue and red stripes.
3. **Typography Consistency**:
   - Use **Manrope** as the primary font family across the entire website.
   - Hero headlines: Large, confident, light or regular weight (`font-light` / `font-normal`).
   - Section headings: Medium to semibold (`font-medium` / `font-semibold`).
   - Body copy: Charcoal (`#111827` / `#374151`) with generous line-height (`leading-relaxed`).
4. **Layout Composition & Editorial Structure**:
   - Generous whitespace: 80px to 120px section vertical padding (`py-20` to `py-28`).
   - Avoid repetitive three-card grids. Use varied layouts: asymmetric editorial compositions, split image-and-text layouts, clean tabular specification matrixes, and full-bleed photography.
   - Restrained cards: 8px to 12px radii (`rounded-xl`), delicate 1px borders (`border-gray-200`), and soft ambient shadows (`shadow-sm`). No glowing borders or heavy glassmorphism.
5. **Authentic Imagery & Engineering Assets**:
   - Use genuine product and facility imagery from `data-sources/` (Magna-C&I 260 kWh, LT215, Lith-On-50, Max-20HC-5000, Noida 20,000 sq. ft. plant).
   - Do not use generic residential solar stock imagery to represent commercial/utility BESS.
   - Do not generate or present fictional product renderings as real Lith-On products.
6. **Animation & Motion Restraint**:
   - Keep motion subtle, purposeful, and hardware-accelerated (smooth hovers, gentle fade-in on enter).
   - Prohibited: Aggressive parallax, continuous floating elements, decorative WebGL scenes, or slow loading animations that impede readability.
   - Always honor `prefers-reduced-motion`.

---

## 3. Truth and Content Integrity

- Use supplied Lith-On content from `content/` and `LITHON_DATA_VAULT.md` as the approved source of truth.
- **Never fabricate or assume**: Product specifications, capacity numbers, cycle life, prices, warranty periods, compliance standards, customer names, or case study metrics.
- All metrics (250 MWh annual capacity, 500+ MWh deployed, 25+ countries, 300–400µm IceBattery® coating, sub-10ms UPS switchover, IEC 61508 + IEC 61850 + BIS) must remain 100% faithful to the authentic source material.
- Clearly flag missing or conflicting information for human review.

---

## 4. Code Quality & Ultracite Standards

- Follow Ultracite / Biome / ESLint guidelines: zero `any` types, zero dead imports or variables, full accessibility attributes.
- Use Next.js `<Image>` components with explicit dimensions and descriptive `alt` texts. Never use legacy `<img>` tags.
- Accompany every `onClick` handler with an accessible `onKeyDown` handler for keyboard navigation.
- Use Radix UI primitives (`@radix-ui/react-accordion`, `@radix-ui/react-dialog`, `@radix-ui/react-tabs`) for accessible UI state.
- Handle loading, empty, success, and error states gracefully across all forms and interactive controls.

---

## 5. Dependencies and Commands

- Do not add packages unless necessary. Check if an installed package already fulfills the requirement.
- Inspect available scripts in `package.json` before running checks.
- Always verify changes with `npm run build` and `npx eslint src`. Never claim checks passed without executing them.

---

## 6. Accessibility & Contrast

- Strict adherence to WCAG 2.1 AA standards on light backgrounds (minimum 4.5:1 contrast for body copy).
- Semantic HTML landmarks: `<header>`, `<main>`, `<footer>`, `<section>`, `<nav>`, `<article>`.
- Visible, high-contrast keyboard focus indicators (`focus-visible:ring-2 focus-visible:ring-[#F74530]` or `focus-visible:ring-[#0B3388]`).

---

## 7. Completion Checklist

Before reporting completion of any task:
1. Confirm visual alignment with the light-first architectural direction in `design.md`.
2. Confirm factual accuracy against `LITHON_DATA_VAULT.md`.
3. Check mobile, tablet, and desktop responsive reflow.
4. Run `npm run build` and `npx eslint src` to confirm zero errors or warnings.
5. Summarize changed files and highlight any items requiring human review.
