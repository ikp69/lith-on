# Design System & Visual Specification — Lith-On Website

**Status:** Authoritative Design Specification  
**Version:** 3.0 (Visual, UX & Motion system, approved 17 November 2026)  
**Date:** November 17, 2026  
**Companion documents:** `docs/visual-audit/LITHON_VISUAL_UX_MOTION_AUDIT.md` (section-by-section plan), `docs/MOTION_SYSTEM.md` (motion implementation)  
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

> **Superseded in v3.0 where it conflicts with §8:** the hero now carries a headline, one sentence and at most two actions. Floating chip clusters and badge shelves are no longer used; keep the reference only for its light, architectural mood.
1. **Floating Capsule / Pill Navigation**:
   - A floating pill-shaped container (`rounded-full bg-white/40 backdrop-blur-md border border-white/50 shadow-sm px-6 py-2.5`) suspended over the top canvas.
   - Brand logo on the left, centered clean text navigation links, and a high-contrast pill CTA on the right (`Start RFQ`).
2. **Split Oversized Typography**:
   - Massive, confident headlines split across the left and right flanks (e.g., `Industrial ⚡` on the left, `Storage` or `Infrastructure` on the right) in clean Manrope light/regular weight (`font-light tracking-tight text-white`).
   - The central installation photography rises up naturally between the two words, creating a 3D architectural framing effect.
3. **Floating Asymmetric Feature Card**:
   - A floating frosted translucent panel (`rounded-2xl bg-white/30 backdrop-blur-md border border-white/40 p-5 text-white`) positioned on the mid-left:
     - High-emphasis sub-label (e.g., `MAGNA-C&I 260 kWh` in Lith-On Red `#F74530` or gold accent).
     - Concise 2-line technical description (sub-10ms switchover, 60°C ambient tolerance).
     - Circular micro-CTA link (`View datasheet`).
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
| **Lith-On Red Ink** | `#C2301E` (hover `#A32716`) | **Accessible red**: the brand red measures only 3.59:1 on white, so small red text (under 24px) and filled red buttons carrying white text use this deeper shade (5.6:1). `#F74530` stays for large display numbers, icons, status dots, borders and red text on dark surfaces. |
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
| **Stage Dark** (`stage-dark`) | `#0E1116` | The single permitted dark photographic band per page (§11). Never a CTA background. |
| **Strong Line** (`line-strong`) | `#D1D5DB` | Secondary-button outlines and emphasised dividers. |

---

## 5. Typography System

**Manrope is the only typeface**, loaded through `next/font/google` as `--font-manrope`. Do not add fonts. Monospace is reserved for model codes (LO-MC-260) and true tabular data inside spec tables; everywhere else numbers use Manrope with tabular figures.

### Type scale (tokens in `src/app/globals.css`, utilities `text-display-xl` … `text-label`)

| Token / utility | Desktop | Phone | Weight | Line height | Tracking | Use |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `display-xl` | 88px | 44px | 300 | 0.98 | -0.035em | Homepage hero only |
| `display-l` | 64px | 36px | 300 | 1.02 | -0.03em | Inner-page heroes |
| `heading-1` | 48px | 30px | 400 | 1.08 | -0.025em | Section headings |
| `heading-2` | 32px | 24px | 500 | 1.15 | -0.02em | Sub-sections, feature titles |
| `heading-3` | 22px | 19px | 500 | 1.25 | -0.01em | Item titles |
| `lead` | 20px | 17px | 400 | 1.55 | normal | One-sentence section intros |
| `body` | 17px | 16px | 400 | 1.65 | normal | Running text |
| `small` | 14px | 14px | 400 | 1.5 | normal | Captions, metadata |
| `label` | 13px | 13px | 600 | 1.3 | normal | Labels, tabs, tags |
| `stat-xl` | 120px | 64px | 300 | 0.9 | -0.04em | Hero statistics (tabular figures) |
| `stat-l` | 64px | 40px | 300 | 1 | -0.03em | Inline statistics |

Sizes scale fluidly between 375px and 1440px with `clamp()`.

### Rules
- Headlines aim for 7 words or fewer.
- **The two-tone headline (second line in Lith-On Blue, weight 500) is used at most once per page**, for that page's main statement.
- Body text is never smaller than 16px; captions never smaller than 13px.
- **Case rule:** labels, tags, table heads, captions, nav links and buttons are sentence case with normal tracking. Uppercase only for acronyms (BESS, IEC, CAQM GRAP), model codes and the registered company name.
- Muted text is never lighter than `ink-3` (#6B7280) on light surfaces (4.5:1).

---

## 6. Spacing, Grid & Containers

- **Base scale (8px):** 4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 160.
- **Section rhythm** (utilities `section`, `section-tight`, `section-loose`): default 128px desktop / 72px phone; tight 96px / 56px between closely related sections; loose 160px / 96px around a statement section. Vary the rhythm deliberately; never one gap everywhere.
- **Grid:** 12 columns, 24px gutters (16px on phones).
- **Container** (`container-site`): max 1360px, centred, 24px side padding (16px on phones). Reading measure (`measure`): 68ch. Full-bleed media breaks out of the container on purpose.
- **Radii, one per level:** `radius-media` 20px (large media, panels), `radius-control` 12px (inputs, small cards), full round for buttons and tags only.

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

Every page uses one of four `PageHero` variants (`src/components/system/PageHero.tsx`). The variant is chosen by the page's material, and neighbouring pages in the same nav group should not all use the same one.

| Variant | Composition | Use for |
| :--- | :--- | :--- |
| **Product** | Product cut-out large on a light stage, headline and one sentence beside it | Homepage, Products, product detail |
| **Image** | Full-bleed photograph, headline on a gentle scrim | Solutions, Industries, About, Case study detail, Services |
| **Editorial** | Very large statement with a supporting visual or numbered index | Technology, Why Lith-On, Warranty, Financing |
| **Utility** | Compact headline and lead, no visual | Contact, FAQs, Certifications, Legal, Calculator |

Rules:
- Headline, one sentence and at most two actions (primary + secondary). No chip clusters.
- The headline, sentence and primary action are visible at 1280 × 800 without scrolling.
- **Rendered environments must carry the visible label "Illustrative scene"** (`MediaFrame` / `PageHero` `illustrative` prop) and must never be described as an installation.
- Overlays: a black-to-transparent scrim of at most 60% only behind text.

---

## 9. Navigation & Header

- **Five primary items:** Products · Solutions · Industries · Technology · Company. Supporting pages live inside their groups: Company holds About, Capabilities, Why Lith-On, Case Studies, Certifications, Sustainability, Careers and Contact; Products holds Resources, Calculator and Warranty; Solutions holds Services, Grid Services and Financing.
- **Header:** white, compact; becomes translucent (`bg-white/85` + blur) with a hairline after scrolling. Logo left, nav centre, one primary action right ("Get quote"). The phone number lives inside the menus, not in the bar.
- **Mega-menus:** full-width panels that can show product cut-outs or a featured image; open on hover and on keyboard focus; close on Escape.
- **Mobile:** full-screen sheet with large rows and the primary action anchored at the bottom.
- **Page transitions:** a subtle fade + rise via React `<ViewTransition>` (see `docs/MOTION_SYSTEM.md`). The header is anchored and never moves during a transition.

---

## 10. Buttons & Interactive Controls

One `Button` component (`src/components/system/Button.tsx`) with three variants, 48px tall (40px small), pill-shaped, sentence case, with all states (default, hover, focus-visible, active, disabled, loading):

| Variant | Look | Use |
| :--- | :--- | :--- |
| `primary` | Lith-On Red Ink `#C2301E` fill, white text; hover `#A32716` | The one main action in a view |
| `secondary` | Ink outline on light; white outline on dark | Second action |
| `tertiary` | Text link with an arrow icon spaced 8px from the label; underline grows on hover | Inline navigation, "View product" |

- Never two filled buttons side by side.
- Focus ring: 2px Lith-On Blue, 2px offset (white on dark surfaces), appearing instantly.
- Hover feedback uses colour and a 4px arrow nudge, never layout shifts.

---

## 11. Surfaces, Cards & Dark Sections

### Surfaces
`canvas` #FFFFFF · `canvas-warm` #FAFAF8 · `surface` #F3F4F6 (spec tables, inputs, behind product cut-outs) · `line` #E5E7EB hairlines.

### Cards are the exception, not the default
Use a card only when the information genuinely benefits from being grouped (a product in a catalogue, a selectable option, a form). Prefer, in this order: open layouts with hairline separators, asymmetric editorial splits, full-width photography, large typography, horizontal rails, interactive diagrams. Product photography is shown without containers wherever possible.

When a card is used: `radius-control` or `radius-media`, a 1px `line` border **or** a soft shadow (never both), and no card inside a card.

### Dark photographic band (`stage-dark` #0E1116)
- **At most one per page.**
- Used for visual contrast and storytelling: a full-bleed photograph, a dramatic statistic, a defence or extreme-environment story.
- **Never for closing calls to action**, and never simply as a replacement for the old blue banners.
- Text on it uses white and `#C9CED6`; the red accent stays `#F74530` (it has more contrast on dark).

### Closing sections
Each page ends with one of three light, editorial `ClosingCTA` variants: **Statement** (large type + action), **Split** (image + action), **Inline** (one line + action). Rotate variants across pages.

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

## 13. Motion & Interaction

Motion is a design language of its own and is used **intentionally, not maximally**. Full specification and API: `docs/MOTION_SYSTEM.md`.

### Budget
- On any page: **at most two sophisticated scroll experiences** (pinned story or scroll-driven rail), a few interactive components, subtle entrances elsewhere, and **some sections completely static**.
- At most one entrance reveal per section. Nothing animates continuously (no pulsing, floating or looping), except a diagram the visitor is actively interacting with.

### The nine patterns (the only ones allowed)
| # | Pattern | Library |
| :--- | :--- | :--- |
| M1 | Reveal: fade + 24px rise, once | Motion |
| M2 | Line reveal: headline lines rise from a mask | Motion |
| M3 | Count-up: numbers count to their value with tabular figures | Motion |
| M4 | Scroll story: media pins while chapters scroll past (desktop only) | GSAP ScrollTrigger |
| M5 | Scroll rail: vertical scroll drives a horizontal track (desktop); native swipe on phones | GSAP ScrollTrigger |
| M6 | Parallax media: image drifts inside its frame | GSAP ScrollTrigger |
| M7 | Diagram draw: SVG strokes and values animate in view | GSAP or Motion |
| M8 | Hover: image scale 1.03 inside a clipped frame, arrow nudge, underline grow | CSS |
| M9 | Page transition: subtle fade + 12px rise | React `<ViewTransition>` |

Smooth scrolling: **Lenis**, synchronised with ScrollTrigger, disabled for reduced motion and on touch devices (native scrolling is kept on phones).

### Tokens
Durations `fast` 250ms, `standard` 500ms, `relaxed` 800ms, `deliberate` 1200ms; ease-out `cubic-bezier(0.16,1,0.3,1)`; ease-in-out `power3.inOut`; stagger 60ms (lines) / 90ms (items).

### Rules
- Animate `transform` and `opacity` only.
- `prefers-reduced-motion: reduce` makes M1–M3 instant, turns M4/M5 into ordinary stacked/swipe layouts, and disables M6, M9 and Lenis.
- All content is present and readable without JavaScript; motion only enhances.
- Desktop and phone are designed as separate experiences: pinned stories become stacked chapters with their own images, scroll rails become native swipe, hover interactions become tap interactions. Never sacrifice phone usability to keep a desktop animation.

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
7. **NO Unnecessary Dependencies**: Rely on Next.js, Tailwind CSS, Lucide React, Radix UI, GSAP, Motion and Lenis. Anything else needs a documented reason.
8. **NO Card-Everything Layouts**: Cards only where grouping genuinely helps (§11).
9. **NO Maximum Motion**: Stay within the motion budget (§13).
10. **NO Identical Page Openings or Endings**: Choose `PageHero` and `ClosingCTA` variants deliberately.
11. **NO Renders Presented as Installations**: Label illustrative scenes.

---

## 16. Core Component Library

Built once in `src/components/system/` and previewed at `/design-system` (internal, not indexed, not linked).

| Component | Purpose |
| :--- | :--- |
| `Button` | Three variants (§10) |
| `PageHero` | Four variants (§8) |
| `SectionIntro` | Heading + optional one-sentence lead; no eyebrow pill |
| `MediaFrame` | Image frame: aspect ratio, caption, optional parallax (M6), `illustrative` label, cut-out mode on `surface` |
| `Stat`, `StatBand` | Statistics with tabular figures and optional count-up (M3); the band is open, separated by hairlines |
| `BentoGrid`, `BentoTile` | Asymmetric 12-column compositions |
| `HorizontalRail` | Scroll-driven rail on desktop (M5), native swipe with snap on phones, keyboard-operable |
| `ScrollStory` | Pinned media + scrolling chapters on desktop (M4); stacked chapters with their own images on phones |
| `ClosingCTA` | Statement, Split, Inline (§11) |
| `Reveal`, `LineReveal`, `CountUp`, `Parallax` | Motion primitives M1, M2, M3, M6 |

## 17. Composition Palette

Every section uses one composition, and **no page uses the same composition twice in a row**:
Statement · Split asymmetric (5/7) · Full-bleed image · Bento · Scroll story · Horizontal rail · Stat band · Editorial list (hairline rows) · Spec table · Interactive diagram.
