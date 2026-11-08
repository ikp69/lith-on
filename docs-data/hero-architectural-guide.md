# Architectural Hero Section — Implementation Guide

## Overview

This guide documents the new architectural hero section components inspired by premium industrial BESS installations. The design follows the light-first, premium, minimal aesthetic outlined in `design.md`.

## Components Created

### 1. FloatingApplicationNav.tsx
**Location:** `src/components/hero/FloatingApplicationNav.tsx`

A curved navigation system with floating pill buttons representing different application sectors.

**Key Features:**
- 5 application categories: Residential, Healthcare, Commercial, Campus, Industrial
- Curved SVG path connecting the pills (using quadratic Bézier curves)
- Glassmorphic floating pills with backdrop blur
- Hover states with tooltip labels
- Responsive (hidden on mobile/tablet, visible on lg+ screens)

**Technical Implementation:**
```typescript
// Curved path using SVG
<path
  d="M 60 0 Q 20 110, 60 220 T 60 440"
  stroke="rgba(255, 255, 255, 0.15)"
  strokeWidth="1.5"
  strokeDasharray="4 6"
/>
```

**Positioning:**
- Pills positioned along curved path at y-intervals of 110px
- X-offset alternates: even indices left (-20px), odd indices right (+20px)
- Creates natural flowing S-curve composition

### 2. HeroArchitectural.tsx
**Location:** `src/components/hero/HeroArchitectural.tsx`

Full-screen hero with background image and minimal overlays.

**Key Features:**
- Full-bleed background imagery
- Floating pill navigation header
- Split composition: left (content) + right (product space)
- Bottom translucent specification cards
- Integrated FloatingApplicationNav

**Layout Structure:**
```
┌─────────────────────────────────────────┐
│   Floating Pill Nav (glassmorphic)      │
├─────────────────────────────────────────┤
│                                      │ │ │ Floating
│  Hero Copy                           │◯│ │ App Nav
│  - Eyebrow                           │◯│ │ (curved
│  - Headline                          │◯│ │  pills)
│  - Description                       │◯│ │
│  - CTAs                              │◯│ │
│                                      │ │ │
├─────────────────────────────────────────┤
│ [Spec Card] [Spec Card] [Spec Card]     │
└─────────────────────────────────────────┘
```

### 3. HeroArchitectural.v2.tsx
**Location:** `src/components/hero/HeroArchitectural.v2.tsx`

Enhanced version with visible BESS product on the right side and generated gradient background.

**Key Differences from v1:**
- Generated gradient background instead of photograph
- Visible BESS product image on right side (desktop)
- Floating technical badge overlay on product
- Architectural grid pattern background
- Radial gradient overlays for depth

**When to Use Which Version:**
- **v1 (HeroArchitectural.tsx):** When you have a high-quality facility photograph
- **v2 (HeroArchitectural.v2.tsx):** When you want product-focused composition with generated background

## Design Principles Applied

### Color Usage
✅ **Correct:**
- Light backgrounds: white, off-white, subtle gradients
- Brand accents used sparingly (Lith-On Blue for CTAs, Red for live indicators)
- 80%+ of surfaces remain light neutral

❌ **Avoid:**
- Dark blue full-page backgrounds
- Alternating red/blue section floods
- Heavy color overlays obscuring imagery

### Glassmorphism Implementation
```css
/* Floating pill navigation */
bg-white/70 backdrop-blur-xl border border-white/80

/* Specification cards */
bg-white/80 backdrop-blur-xl border border-slate-200/60

/* Application nav pills */
bg-white/30 border border-white/20 hover:bg-white/40
```

### Typography Hierarchy
```typescript
// Hero headline
className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 
           font-light tracking-tight text-slate-900 
           leading-[1.05]"

// Body copy
className="text-base sm:text-lg text-slate-700 
           leading-relaxed"

// Specification labels
className="text-xs text-slate-600 font-medium"
```

## Usage Examples

### Basic Implementation
```tsx
import { HeroArchitectural } from "@/components/hero/HeroArchitectural";

export default function HomePage() {
  return (
    <main>
      <HeroArchitectural />
      {/* Rest of page content */}
    </main>
  );
}
```

### With Product Focus
```tsx
import { HeroArchitecturalV2 } from "@/components/hero/HeroArchitectural.v2";

export default function ProductsPage() {
  return (
    <main>
      <HeroArchitecturalV2 />
      {/* Product catalog sections */}
    </main>
  );
}
```

## Customization Guide

### Changing Application Categories
Edit `FloatingApplicationNav.tsx`:

```typescript
const applications: ApplicationNavItem[] = [
  {
    id: "your-category",
    label: "Your Label",
    icon: YourIconComponent, // from lucide-react
    href: "/your-path",
  },
  // Add more items
];
```

**Note:** Adjust SVG path and positioning calculations if adding/removing items.

### Adjusting Curved Path
Modify the SVG path in `FloatingApplicationNav.tsx`:

```typescript
// Current: S-curve with 5 points
d="M 60 0 Q 20 110, 60 220 T 60 440"

// Steeper curve
d="M 60 0 Q 10 110, 60 220 T 60 440"

// Gentler curve
d="M 60 0 Q 40 110, 60 220 T 60 440"
```

### Updating Specification Cards
Edit the bottom cards section in either component:

```tsx
<div className="rounded-2xl bg-white/80 backdrop-blur-xl border border-slate-200/60 p-5 shadow-lg">
  <div className="flex items-start gap-3">
    <div className="p-2.5 rounded-xl bg-your-color/10">
      <YourIcon className="h-5 w-5 text-your-color" />
    </div>
    <div>
      <div className="text-2xl font-bold text-slate-900">Your Metric</div>
      <div className="text-xs text-slate-600 font-medium mt-0.5">
        Your Label
      </div>
    </div>
  </div>
</div>
```

### Replacing Background Image
In `HeroArchitectural.tsx`, update the Image src:

```tsx
<Image
  src="/your-path/your-image.webp"
  alt="Descriptive alt text"
  fill
  priority
  className="object-cover object-center"
  sizes="100vw"
  quality={90}
/>
```

## Accessibility Features

✅ **Implemented:**
- Semantic HTML structure with proper landmark roles
- `aria-label` on navigation and sections
- `aria-hidden` on decorative SVG elements
- Keyboard-accessible navigation links
- Min-height touch targets (44px minimum)
- `prefers-reduced-motion` support planned

## Responsive Behavior

### Breakpoints
- **Mobile (< 640px):** Stacked layout, hidden nav pills, simplified header
- **Tablet (640px - 1024px):** Improved spacing, still hidden nav pills
- **Desktop (1024px+):** Full layout with floating nav pills visible

### Key Responsive Classes
```typescript
// Header navigation
"hidden lg:flex"           // Show on desktop only

// Floating app nav
"hidden lg:block"          // Show on desktop only

// Hero headline
"text-4xl sm:text-5xl lg:text-6xl xl:text-7xl"

// Spec cards grid
"grid-cols-1 sm:grid-cols-3"
```

## Performance Considerations

### Image Optimization
- Use WebP format for all hero images
- Implement Next.js Image component with proper sizes
- Set `priority={true}` for above-fold images

### Animation Performance
- Use `will-change` sparingly
- Leverage `transform` and `opacity` for animations
- Implement `backdrop-filter` with fallbacks

### Bundle Size
- Import only used Lucide icons
- Client component only where interactivity needed
- No heavy animation libraries (using CSS transitions)

## Browser Support

**Fully Supported:**
- Chrome/Edge 90+
- Firefox 88+
- Safari 15+

**Glassmorphism Fallbacks:**
```css
/* Fallback for browsers without backdrop-filter support */
@supports not (backdrop-filter: blur(16px)) {
  .glass-pill {
    background: rgba(255, 255, 255, 0.95);
  }
}
```

## Testing Checklist

- [ ] Verify responsive layout on mobile, tablet, desktop
- [ ] Test all navigation links and CTAs
- [ ] Confirm image loading and optimization
- [ ] Check glassmorphism rendering across browsers
- [ ] Validate accessibility with screen reader
- [ ] Test keyboard navigation
- [ ] Verify color contrast ratios (WCAG AA)
- [ ] Test with reduced motion preferences
- [ ] Confirm touch target sizes on mobile

## Related Files

- `design.md` — Visual design specification
- `AGENTS.md` — Content and implementation rules
- `src/app/globals.css` — Shared design tokens and utilities
- `public/images/hero-sec/` — Hero image assets

## Future Enhancements

**Potential additions:**
1. Scroll-triggered parallax effects (subtle, respecting reduced motion)
2. Video background option
3. Interactive 3D BESS model viewer
4. Animated specification counter-ups
5. Multi-language support for navigation
6. Dark mode variant (optional, not default)

---

**Last Updated:** 2026-11-04
**Version:** 1.0
**Author:** Kiro AI Agent
