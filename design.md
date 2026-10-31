# Design System & Visual Specification — Lith-On Website

**Status:** Authoritative Design Specification  
**Version:** 2.0 (Light-First Architectural & Editorial Direction)  
**Date:** October 30, 2026  
**Target Brand:** Lith-On Bharat Energy Private Limited  

---

## 1. Design Philosophy

The Lith-On website embodies a visual aesthetic that is:
**Light, premium, minimal, editorial, architectural, and technology-focused.**

Lith-On is an advanced Indian manufacturer of industrial Battery Energy Storage Systems (BESS) and heavy-duty lithium battery packs with deep engineering roots, a 20,000 sq. ft. automated manufacturing facility in Noida, and an international R&D hub in Foshan, China. 

The website must convey high engineering credibility and sophisticated visual presentation. It must:
- Feel like a world-class industrial clean-technology brand.
- Let authentic product engineering, high-resolution installation photography, and generous whitespace carry the visual impact.
- **Never** look like a generic SaaS template, an off-the-shelf corporate theme, or a website dominated by dark-blue backgrounds.
- Avoid gimmicks: no neon glow effects, no purple gradients, no cluttered card grids, and no decorative animations that distract from technical facts.

---

## 2. Visual References & Aesthetic Interpretation

Directly inspired by the approved reference design (the clean, architectural solar & storage hero composition):

### Architectural Hero Anatomy (The Reference Structure)
1. **Floating Capsule / Pill Navigation**:
   - A floating pill-shaped container (`rounded-full bg-white/40 backdrop-blur-md border border-white/50 shadow-sm px-6 py-2.5`) suspended over the top canvas.
   - Brand logo on the left, centered clean text navigation links, and a high-contrast pill CTA on the right (`START RFQ →`).
2. **Split Oversized Typography**:
   - Massive, confident headlines split across the left and right flanks (e.g., `Industrial ⚡` on the left, `Storage` or `Infrastructure` on the right) in clean Manrope light/regular weight (`font-light tracking-tight text-white`).
   - The central installation photography rises up naturally between the two words, creating a 3D architectural framing effect.
3. **Floating Asymmetric Feature Card**:
   - A floating frosted translucent panel (`rounded-2xl bg-white/30 backdrop-blur-md border border-white/40 p-5 text-white`) positioned on the mid-left:
     - High-emphasis sub-label (e.g., `MAGNA-C&I 260 kWh` in Lith-On Red `#F74530` or gold accent).
     - Concise 2-line technical description (sub-10ms switchover, 60°C ambient tolerance).
     - Circular micro-CTA link (`VIEW DATASHEET ↗`).
4. **Bottom Tri-Panel Architectural Shelf**:
   - Three cohesive, rounded cards resting along the lower viewport edge:
     - **Panel 1 (Left — Institutional Proof)**: Metric callout (`500+ MWh Deployed`, `25+ Countries`, or verified institutional client trust).
     - **Panel 2 (Center — Hardware Focus)**: Prominent arched / elevated card showcasing authentic Lith-On BESS enclosures (`Magna-C&I` or `LT215`) in natural daylight.
     - **Panel 3 (Right — Engineering Shield)**: Severe climate resilience badge (`IceBattery® 300–400µm Ceramic Shield`, `60°C Ambient Heat Resilience`, `IP55 Outdoor Rated`).

### Adaptation to Lith-On (Engineering vs. Residential)
- **Lith-On Context**: While the reference image depicts a residential solar home, Lith-On specializes in **Commercial & Industrial (C&I), High-Rise Residential GRAP Compliance, and Utility-Scale BESS**.
- We adapt the visual composition (soft atmospheric sky, architectural framing, floating translucent cards, and split oversized typography) while featuring **genuine industrial BESS hardware, commercial facility photography, and authentic engineering data**.

---

## 3. Brand Colour Tokens

Lith-On's brand colours are precision accents, **not** full-page flood fills.

| Token Name | Hex Code | Role & Usage Rules |
| :--- | :--- | :--- |
| **Lith-On Red** | `#F74530` | **Primary Brand Accent**: High-emphasis calls to action (primary buttons), active status indicators, key numerical callouts, and subtle interactive details. Use sparingly so it remains visually punchy. |
| **Lith-On Blue** | `#0B3388` | **Secondary Brand Accent**: Technical highlights, selected links, engineering icons, certification badges, and subtle brand reinforcement. Establishes trust and engineering credibility. |

### Colour Usage Rules
1. **Never** use `#0B3388` or dark blue as the full-page or default section background.
2. **Never** create a website where every section is blue.
3. Avoid alternating large red and blue backgrounds simply to display brand colours.
4. Keep at least 85% of page surfaces white or light neutral.
5. Use red deliberately and sparingly—when everything is red, nothing stands out.
6. Use blue selectively for technical authority and brand recognition.
7. Preserve strict WCAG AA contrast (minimum 4.5:1 for body copy, 3:1 for large headings).
8. Do not introduce unrelated purple, cyan neon gradients, or multi-colour decorative flourishes.
9. Do not recolour or distort the official Lith-On logo.
10. If a dark surface is required for a specific purpose (e.g., deep technical terminal, evening product photograph, or compact footer), treat it as an intentional exception, not the default theme.

---

## 4. Neutral Background & Typography Palette

The site is built upon a light-first, natural architectural neutral system:

| Role | Token / Hex | Semantic Purpose |
| :--- | :--- | :--- |
| **Pure White** | `#FFFFFF` | Primary canvas for heroes, main articles, and alternating content sections. |
| **Off-White (Warm)** | `#FAFAF8` | Secondary section background, creating soft architectural contrast without heavy divider lines. |
| **Light Neutral Grey** | `#F3F4F6` | Subtle contrast surface for technical comparison panels, specification tables, and input fields. |
| **Pale Blue-Grey Surface** | `#F0F4F8` | Optional light accent surface for engineering telemetry cards and badge containers. |
| **Subtle Border Neutral** | `#E5E7EB` / `#E2E8F0` | Delicate 1px structural dividing lines for cards, tables, and navigation boundaries. |
| **Primary Text (Charcoal)** | `#111827` (Slate 900) | High-contrast, near-black tone for all headings, body copy, and data values. |
| **Secondary Text (Neutral)** | `#4B5563` (Gray 600) | Calm, readable neutral tone for supporting descriptions, subtitles, and captions. |
| **Muted Metadata** | `#6B7280` (Gray 500) | Low-emphasis labels, timestamps, and breadcrumbs. |

---

## 5. Typography System

The preferred typography family for the Lith-On website is **Manrope**, loaded via Next.js Google Fonts (`next/font/google`) with system sans-serif fallbacks (`-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`).

### Type Scale & Hierarchy

| Element | Weight | Size (Desktop) | Size (Mobile) | Line Height | Tracking | Colour |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Headline (H1)** | Light (`300`) / Regular (`400`) | 48px – 64px (`text-4xl` to `text-6xl`) | 32px – 40px | 1.1 – 1.15 | `-0.025em` | `#111827` |
| **Section Title (H2)** | Regular (`400`) / Medium (`500`) | 32px – 40px (`text-3xl` to `text-4xl`) | 24px – 28px | 1.2 – 1.25 | `-0.02em` | `#111827` |
| **Subsection Header (H3)** | Medium (`500`) / Semibold (`600`) | 20px – 24px (`text-xl` to `text-2xl`) | 18px – 20px | 1.3 | `-0.01em` | `#111827` |
| **Feature Lead / Intro** | Regular (`400`) | 18px – 20px (`text-lg` to `text-xl`) | 16px – 17px | 1.6 | Normal | `#4B5563` |
| **Body Paragraph** | Regular (`400`) | 15px – 16px (`text-sm` to `text-base`) | 15px | 1.65 – 1.7 | Normal | `#374151` |
| **Technical Label / Tag** | Medium (`500`) / Semibold (`600`) | 11px – 12px (`text-xs`) | 11px | 1.4 | `+0.05em` (Uppercase) | `#0B3388` or `#4B5563` |
| **Key Metric Number** | Regular (`400`) / Medium (`500`) | 36px – 56px (`text-4xl` to `text-5xl`) | 32px – 36px | 1.0 | `-0.02em` | `#111827` or `#F74530` |
| **Button Text** | Medium (`500`) / Semibold (`600`) | 13px – 14px (`text-xs` to `text-sm`) | 14px | 1.0 | `+0.02em` | Text color per button variant |

---

## 6. Spacing & Grid System

- **Base Unit:** 4px / 8px scale.
- **Section Vertical Padding:**
  - Desktop: `py-20` to `py-28` (80px to 112px).
  - Mobile: `py-12` to `py-16` (48px to 64px).
- **Maximum Content Container Width:**
  - Standard: `max-w-7xl` (1280px) centered with `px-6` or `px-8` horizontal gutters.
  - Editorial / Reading Width: `max-w-3xl` (768px) to maintain a comfortable reading line length of 65–75 characters.
- **Gap Spacing:**
  - Grids: `gap-8` to `gap-12` (32px to 48px).
  - Component internals: `gap-3` to `gap-6` (12px to 24px).

---

## 7. Layout Principles

1. **Avoid Repetitive Three-Card Grids**: Do not force every section into a uniform row of 3 rounded boxes. Instead, use:
   - Split asymmetric compositions (60% image / 40% text).
   - Horizontal editorial data strips.
   - Clean tabular specification matrixes.
   - Restrained two-column side-by-side technical breakdowns.
   - Full-bleed architectural photography dividers.
2. **Open Structure Over Boxed Containers**: Use whitespace, subtle 1px divider lines, and typography scale to organize content rather than enclosing every single paragraph in a card.
3. **Selective Overlapping Panels**: Offset panels inspired by modern architecture (e.g., an authentic BESS photograph overlapping a subtle neutral panel) add tactile dimension without cluttered glassmorphism.

---

## 8. Hero-Section Guidelines

The Hero section sets the tone for the entire brand:
- **Visual Foundation**: High-resolution authentic image of a Lith-On commercial or industrial installation (e.g., commercial solar microgrid with Magna-C&I BESS enclosure).
- **Composition**: Left-aligned or split architectural layout.
- **Headline**: Restrained, confident typography (e.g., *"Engineered Energy Storage for Commercial & Industrial Infrastructure"*).
- **Supporting Copy**: 2–3 sentences stating verified capability: Noida 20,000 sq. ft. plant, 250 MWh throughput, sub-10ms UPS cutover, and 60°C ambient tolerance.
- **Calls to Action**:
  - Primary: *"Request Technical Sizing & RFQ"* in Lith-On Red (`#F74530`) or Lith-On Blue (`#0B3388`).
  - Secondary: *"Explore BESS Hardware"* with subtle light border or text link.
- **Overlays**: Minimal and translucent. The photography must remain clearly legible; do not obscure equipment with heavy gradients.

---

## 9. Navigation & Header Styling

- **Background**: Pure white (`#FFFFFF`) or translucent off-white (`bg-white/90 backdrop-blur-md`) with a delicate bottom border (`border-b border-gray-200`).
- **Brand Identity**: Official Lith-On dark logo (`/images/logo/logo-dark.png`) positioned on the left.
- **Navigation Links**: Clean charcoal text (`text-gray-700 hover:text-[#0B3388] transition-colors`) with clear active state indicators.
- **Utility Micro-Bar**: Top strip with subtle off-white background (`bg-gray-50 border-b border-gray-200`) indicating facility status, direct engineering phone (`+91-7000013009`), and Trifecta certification badge.
- **Primary Header CTA**: Crisp button with Lith-On Red (`#F74530`) accent or Lith-On Blue (`#0B3388`).
- **Mobile Menu**: Lightweight slide-down drawer with clean white background, accessible touch targets, and keyboard escape handling.

---

## 10. Button & Interactive Control Styles

1. **Primary Action Button (High Emphasis)**:
   - Background: `bg-[#F74530] hover:bg-[#d83522]` (Lith-On Red).
   - Text: `text-white font-medium text-sm`.
   - Padding: `px-6 py-3 rounded-lg`.
   - Shadow: Subtle natural shadow (`shadow-sm hover:shadow transition-all`).
   - Focus: `focus-visible:ring-2 focus-visible:ring-[#F74530] focus-visible:ring-offset-2`.
2. **Secondary Button (Technical / Navigation)**:
   - Background: `bg-[#0B3388] hover:bg-[#082666]` (Lith-On Blue).
   - Text: `text-white font-medium text-sm`.
   - Padding: `px-6 py-3 rounded-lg`.
   - Focus: `focus-visible:ring-2 focus-visible:ring-[#0B3388] focus-visible:ring-offset-2`.
3. **Tertiary / Outline Button**:
   - Background: `bg-white hover:bg-gray-50 border border-gray-300`.
   - Text: `text-gray-800 font-medium text-sm`.
   - Padding: `px-6 py-3 rounded-lg`.
   - Focus: `focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2`.
4. **Text Link with Arrow**:
   - Styling: `text-[#0B3388] hover:text-[#F74530] font-medium inline-flex items-center gap-1.5 transition-colors`.

---

## 11. Cards, Surfaces & Overlays

- **Surface Treatment**: Crisp pure white (`#FFFFFF`) or off-white (`#FAFAF8`).
- **Border**: Subtle 1px solid neutral (`border border-gray-200/80`). Avoid thick or brightly colored borders.
- **Corner Radii**: Restrained architectural corners (`rounded-xl` / 8px–12px). Do not use pill-shaped or exaggerated radii.
- **Shadows**: Soft, natural ambient diffusion (`shadow-[0_2px_8px_rgba(0,0,0,0.04)]` or Tailwind `shadow-sm`). Never use harsh, dark drop shadows or colored neon glows.
- **Frosted Overlays**: Use translucent white (`bg-white/85 backdrop-blur-md`) selectively for floating data chips or sticky headers. Do not make every card glassmorphic.

---

## 12. Imagery & Asset Guidelines

- **Source of Truth**: All photography and technical schematics originate from `data-sources/` and verified project assets.
- **Equipment Authenticity**: Depict genuine Lith-On hardware:
  - Magna-C&I 260 kWh Outdoor All-in-One Cabinet.
  - Lith-On-50 48 kWh Modular Enclosure.
  - LT215 215 kWh Weatherproof Container.
  - Max-20HC-5000 5.0 MWh Utility Container.
  - Noida 20,000 sq. ft. manufacturing facility and testing bays.
- **Image Processing**: Clean, natural color balance with true daylight tones. Avoid hyper-saturated cybernetic filters or artificial lens flares.
- **Accessibility**: All images must include descriptive, informative `alt` text. Purely decorative elements must carry empty `alt=""`.

---

## 13. Motion & Animation Guidelines

- **Principle**: Motion is functional, subtle, and restrained. It aids spatial comprehension; it never acts as decoration.
- **Allowed Motion**:
  - Micro-transitions on buttons and links (`transition-colors duration-150`).
  - Gentle fade-in and subtle vertical translation on viewport enter (`opacity: 0 -> 1`, `y: 12px -> 0px` over 0.3s).
  - Smooth expansion for Radix accordions (`transition-all duration-200 ease-out`).
  - Interactive technical schematics (e.g., IceBattery thermal temperature toggle, oscilloscope waveform switch).
- **Strictly Prohibited Motion**:
  - Aggressive parallax scrolling.
  - Constant floating or bouncing elements.
  - Slow entrance reveals that block reading.
  - Heavy 3D WebGL scenes that cause CPU throttling or battery drain.
- **Accessibility**: Strict adherence to `prefers-reduced-motion: reduce`. All content must be fully visible and navigable without motion.

---

## 14. Accessibility & Quality Standards

- **Contrast**: Text elements must meet or exceed WCAG 2.1 AA standards (minimum 4.5:1 for body copy against light backgrounds).
- **Semantics**: Meaningful HTML5 structure (`<main>`, `<header>`, `<footer>`, `<section>`, `<nav>`, `<article>`).
- **Keyboard Navigation**: All interactive elements (menus, tabs, dialogs, accordions) must be operable via Tab, Enter, and Space with visible focus indicators.
- **Form Controls**: Explicit labels associated with input IDs, visible error states, and clear submission confirmations.

---

## 15. Explicit Anti-Patterns (What NOT to Do)

1. **NO Default Dark-Blue Theme**: Do not build the website with dark-blue (`#0B132B`) as the universal page background.
2. **NO Wall-to-Wall Blue**: Do not create pages where every section has a solid blue background.
3. **NO Red/Blue Striping**: Do not alternate whole-section red and whole-section blue backgrounds.
4. **NO Neon Gradients**: Avoid cybernetic gradients (e.g., cyan-to-purple or electric neon lines).
5. **NO Repetitive Card Grids**: Avoid repeating identical 3-card containers across multiple consecutive sections.
6. **NO Fictional Claims**: Never invent technical specs, prices, customer names, or compliance certificates.
7. **NO Unnecessary Dependencies**: Rely on Next.js, Tailwind CSS, Lucide React, and Radix UI primitives.
