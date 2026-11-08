'use client';

export function SunRaysSolar() {
  return (
    <g className="sun-rays-layer pointer-events-none" aria-hidden="true">
      <defs>
        {/* Sun Radial Core Glow */}
        <radialGradient id="sun-core-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
          <stop offset="25%" stopColor="#FEF08A" stopOpacity="0.85" />
          <stop offset="55%" stopColor="#F59E0B" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
        </radialGradient>

        {/* Sun Ray Beam Gradients (Top to Panels) */}
        <linearGradient id="sun-beam-solar-farm" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#FEF08A" stopOpacity="0.55" />
          <stop offset="40%" stopColor="#FDE047" stopOpacity="0.32" />
          <stop offset="85%" stopColor="#38BDF8" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
        </linearGradient>

        <linearGradient id="sun-beam-factory" x1="75%" y1="0%" x2="25%" y2="100%">
          <stop offset="0%" stopColor="#FEF08A" stopOpacity="0.5" />
          <stop offset="50%" stopColor="#FDE047" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
        </linearGradient>

        <linearGradient id="sun-beam-ev" x1="25%" y1="0%" x2="75%" y2="100%">
          <stop offset="0%" stopColor="#FEF08A" stopOpacity="0.5" />
          <stop offset="50%" stopColor="#FDE047" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
        </linearGradient>

        <linearGradient id="sun-beam-uni" x1="30%" y1="0%" x2="70%" y2="100%">
          <stop offset="0%" stopColor="#FEF08A" stopOpacity="0.45" />
          <stop offset="50%" stopColor="#FDE047" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
        </linearGradient>

        <linearGradient id="sun-beam-res" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#FEF08A" stopOpacity="0.4" />
          <stop offset="60%" stopColor="#FDE047" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
        </linearGradient>

        {/* Photovoltaic Excitation Filter */}
        <filter id="pv-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* 1. THE CELESTIAL SUN (Upper Right Azure Sky: x=2610, y=110) */}
      <g transform="translate(2610, 110)">
        {/* Pulsing Corona */}
        <circle cx="0" cy="0" r="180" fill="url(#sun-core-glow)" className="sun-glow" />
        <circle cx="0" cy="0" r="95" fill="url(#sun-core-glow)" opacity="0.92" />
        <circle cx="0" cy="0" r="44" fill="#FEF08A" filter="url(#pv-glow)" />
      </g>

      {/* 2. PHASE 1: TRANSLUCENT LIGHT RAY BEAMS STREAMING TO ARRAYS */}
      {/* Ray 1: Sun to Coastal Solar Array & Grid Substation */}
      <polygon
        points="2610,110 2150,260 2720,420"
        fill="url(#sun-beam-solar-farm)"
        className="sun-ray-shimmer"
      />

      {/* Ray 2: Sun to C&I Factory Rooftop Solar */}
      <polygon
        points="2590,110 480,580 840,740"
        fill="url(#sun-beam-factory)"
        className="sun-ray-shimmer"
        style={{ animationDelay: '1.2s' }}
      />

      {/* Ray 3: Sun to EV Charging Canopy Solar Roof */}
      <polygon
        points="2610,110 1980,980 2300,1180"
        fill="url(#sun-beam-ev)"
        className="sun-ray-shimmer"
        style={{ animationDelay: '2.4s' }}
      />

      {/* Ray 4: Sun to University Campus Research Domes */}
      <polygon
        points="2610,110 2120,480 2420,640"
        fill="url(#sun-beam-uni)"
        className="sun-ray-shimmer"
        style={{ animationDelay: '1.8s' }}
      />

      {/* Ray 5: Sun to Cold Storage Logistics Facility */}
      <polygon
        points="2590,110 520,1050 820,1220"
        fill="url(#sun-beam-factory)"
        className="sun-ray-shimmer"
        style={{ animationDelay: '1.5s' }}
      />

      {/* Ray 6: Sun to Residential Neighborhood Solar Roofs */}
      <polygon
        points="2600,110 1240,1140 1520,1280"
        fill="url(#sun-beam-res)"
        className="sun-ray-shimmer"
        style={{ animationDelay: '3s' }}
      />

      {/* 3. PHASE 1 INDICATOR: PHOTOVOLTAIC HARVEST PULSE RIPPLE OVER PANELS */}
      {/* Factory Rooftop Solar Glow & Ripple */}
      <polygon
        points="560,620 800,620 830,720 590,720"
        fill="#38BDF8"
        className="pv-shimmer"
        style={{ animationDelay: '1.2s' }}
      />
      <polygon
        points="560,620 800,620 830,720 590,720"
        fill="none"
        stroke="#FDE047"
        strokeWidth="1.5"
        strokeDasharray="16 32"
        className="pv-ripple-line"
        style={{ animationDelay: '1.2s' }}
      />

      {/* EV Canopy Solar Glow & Ripple */}
      <polygon
        points="2020,1010 2240,1010 2270,1140 2050,1140"
        fill="#38BDF8"
        className="pv-shimmer"
        style={{ animationDelay: '2s' }}
      />
      <polygon
        points="2020,1010 2240,1010 2270,1140 2050,1140"
        fill="none"
        stroke="#FDE047"
        strokeWidth="1.5"
        strokeDasharray="16 32"
        className="pv-ripple-line"
        style={{ animationDelay: '2s' }}
      />

      {/* 4. STREAMING PHOTON ENERGY PARTICLES */}
      {[
        { cx: 2350, cy: 190, delay: '0s' },
        { cx: 2200, cy: 260, delay: '0.7s' },
        { cx: 2000, cy: 360, delay: '1.4s' },
        { cx: 1650, cy: 450, delay: '0.4s' },
        { cx: 1100, cy: 560, delay: '1.1s' },
        { cx: 720, cy: 660, delay: '0.9s' },
        { cx: 680, cy: 1120, delay: '1.6s' },
        { cx: 2120, cy: 1060, delay: '0.5s' },
        { cx: 2250, cy: 580, delay: '1.3s' },
        { cx: 1380, cy: 1200, delay: '0.8s' },
      ].map((p, i) => (
        <circle
          key={`photon-${i}`}
          cx={p.cx}
          cy={p.cy}
          r="3.5"
          fill="#FEF08A"
          filter="url(#pv-glow)"
          className="photon-particle"
          style={{ animationDelay: p.delay }}
        />
      ))}
    </g>
  );
}
