# Lith-On Motion Engineering & Visual Asset Guide

**Status:** Authoritative Motion & Asset Specification  
**Version:** 1.0  
**Framework:** Next.js 16 (Turbopack) • React 19 • Tailwind CSS v4 • GSAP 3.15 • Motion 12  
**Target:** Lith-On Bharat Energy Private Limited  

---

## 1. Executive Strategy

To convey Lith-On's engineering authority as a premier Indian BESS manufacturer, the website pairs **authentic industrial visual assets** with **purposeful, restrained motion engineering**. 

We do not scatter arbitrary animation libraries across components. Instead, the stack assigns strict domain ownership to three complementary technologies:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                       MOTION & ANIMATION OWNERSHIP                          │
├───────────────────────┬────────────────────────────┬────────────────────────┤
│ GSAP + ScrollTrigger  │ Motion for React           │ SVG + Native CSS       │
│ (@gsap/react)         │ (motion/react)             │                        │
├───────────────────────┼────────────────────────────┼────────────────────────┤
│ • Scroll orchestration│ • Micro-interactions       │ • Electrical conduits  │
│ • Parallax scrubbing  │ • Interactive buttons/tabs │ • Sine wave monitoring │
│ • Section pinning     │ • Spring-physics gestures  │ • Circuit traces       │
│ • Text split reveals  │ • Drawer / modal dialogs   │ • Radar pulse rings    │
│ • Multi-stage scrubs  │ • Magnetic hover states    │ • Performance badges   │
└───────────────────────┴────────────────────────────┴────────────────────────┘
```

> [!IMPORTANT]
> **Rule of Transform Ownership:** Never allow GSAP and Motion to animate the same element's transform or opacity properties simultaneously. Each animated node must have a single clear owner.

---

## 2. Technology Stack & Installation Guidelines

### Currently Installed & Audited Dependencies
- **GSAP:** `3.15.0` (Core engine & plugins: ScrollTrigger, MotionPath, Flip)
- **@gsap/react:** `2.1.2` (Provides `useGSAP` hook with automatic scope and unmount cleanup)
- **Motion:** `12.4.7` (Modern motion library; import from `motion/react`)
- **React & Next.js:** React `19.3.0` & Next.js `16.4.3`

### Deferred Libraries (Rules of Engagement)
1. **Three.js & React Three Fiber (`@react-three/fiber`, `@react-three/drei`):**
   - **Status:** **Deferred** until authentic 3D CAD/GLB models (`magna-ci-exploded.glb`, `lt215-model.glb`) are supplied by Lith-On's Noida engineering team.
   - **React 19 Compatibility Note:** R3F must be selected to match React 19 peer dependencies when installed. Do not install speculative 3D packages without models.
2. **Lenis (`lenis`):**
   - **Status:** **Deferred**. Native browser scrolling remains fast, accessible, and compliant with accessibility guidelines. Lenis will only be evaluated if multi-layer smooth scrub coordination is specifically required after all page sections are complete.

---

## 3. Directory Architecture

The codebase organizes animation logic cleanly under `src/animations/` and reusable motion components under `src/components/animation/`:

```
src/
├── animations/
│   ├── config.ts              # Global animation timings, thresholds, reduced-motion helper
│   ├── gsap-register.ts       # SSR-safe GSAP and ScrollTrigger registration
│   ├── easing.ts              # Canonical easing curves (power3.out, expo.out, etc.)
│   ├── presets.ts             # Standard transition presets (fadeUp, slideIn, scaleUp)
│   └── hooks/
│       ├── useScrollReveal.ts # GSAP scroll-triggered reveal with auto-cleanup
│       ├── useParallax.ts     # Multi-layer parallax scrubbing hook
│       ├── usePinnedSection.ts# Horizontal scroll & step pinning hook
│       └── useTextReveal.ts   # Editorial split-text reveal hook
│
└── components/
    └── animation/
        ├── Reveal.tsx         # Reusable scroll reveal wrapper
        ├── ParallaxImage.tsx  # Architectural parallax image container
        ├── TextReveal.tsx     # Typography reveal component
        ├── MagneticButton.tsx # Spring-physics magnetic hover button
        └── AnimatedCounter.tsx# Accessible requestAnimationFrame numeric counter
```

---

## 4. Visual Asset Infrastructure

All public visual assets are organized by functional domain under `public/`:

```
public/
├── images/
│   ├── hero/                  # Wide 2400×1350 environmental backgrounds & transparent BESS anchors
│   ├── products/              # Transparent product cutouts & 4-angle hardware photography
│   │   ├── magna-ci/
│   │   ├── lithon-50/
│   │   ├── lt215/
│   │   └── max-20hc/
│   ├── technology/            # Internal subsystems (BMS, PCS, IceBattery®, Liquid Chillers)
│   ├── industries/            # High-resolution architectural photography of 6 target sectors
│   ├── factory/               # Noida Sector 136 clean plant, laser welding, and FAT benches
│   └── case-studies/          # Real customer deployments (Invertis University, Housing Society)
│       ├── invertis/
│       ├── residential/
│       └── ev-hub/
├── videos/                    # Factory process footage & BESS rotation loops
└── models/                    # GLB/GLTF 3D CAD models (once supplied by engineering)
```

---

## 5. Asset Authenticity Rules

1. **Mandatory Authentic Photography:**
   - All product cabinet renders and photos (`Magna-C&I`, `LT215`, `Lith-On-50`, `Max-20HC`).
   - Noida Sector 136 factory floor, machinery, laser welding benches, and testing equipment.
   - Customer case study installations (Invertis University yard, Gurugram high-rise society).
   - *Never substitute third-party or generic battery containers for Lith-On hardware.*
2. **Permitted Licensed Environmental Photography:**
   - Wide background contexts (commercial office parks, university campus buildings, hospital exteriors, EV charging plazas) used as environmental backdrop layers behind anchored Lith-On BESS products.
   - High-resolution, daylight architectural photography adhering to the light-first palette.

---

## 6. Accessibility & Performance Guardrails

- **Reduced Motion:** Every hook and component must check `window.matchMedia('(prefers-reduced-motion: reduce)')`. When active, all transforms are zeroed and opacity transitions are instantaneous.
- **Scroll Hijacking Prohibited:** Never prevent or hijack the user's native mouse wheel or touch scroll. All ScrollTriggers must act as observers of natural scroll progress.
- **Memory & Lifecycle Cleanup:** All GSAP ScrollTrigger instances must be created inside `useGSAP` with a scoped `ref`, or manually killed in `useEffect` cleanup return functions.
- **Turbopack & SSR Safety:** All GSAP plugins and DOM access must be gated behind `typeof window !== 'undefined'`.

