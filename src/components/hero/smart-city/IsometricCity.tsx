'use client';

import { SunRaysSolar } from './SunRaysSolar';
import { EnergyFlows } from './EnergyFlows';
import { SECTORS } from './city-data';

export interface IsometricCityProps {
  theme?: 'day' | 'night';
  activeSector: string | null;
  onSelectSector?: (sectorId: string) => void;
  onHoverSector?: (sectorId: string | null) => void;
  svgRef?: React.RefObject<SVGSVGElement | null>;
  cameraRef?: React.RefObject<SVGGElement | null>;
}

export function IsometricCity({
  activeSector,
  onSelectSector,
  onHoverSector,
  svgRef,
  cameraRef,
}: IsometricCityProps) {
  return (
    <svg
      ref={svgRef}
      viewBox="0 0 2752 1536"
      preserveAspectRatio="xMidYMid slice"
      className="smart-city-svg w-full h-full select-none"
      aria-label="Interactive Lith-On Photorealistic Smart Energy City"
      style={{ outline: 'none' }}
    >
      <defs>
        {/* Soft Beacon Shadow */}
        <filter id="beacon-shadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow
            dx="0"
            dy="6"
            stdDeviation="8"
            floodColor="#000000"
            floodOpacity="0.18"
          />
        </filter>

        {/* Glowing Radar Halo */}
        <filter id="radar-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Subtle Atmospheric Wash - softens background noise and emphasizes infrastructure */}
        <linearGradient id="atmospheric-wash" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.10" />
          <stop offset="60%" stopColor="#F8FAFC" stopOpacity="0.04" />
          <stop offset="100%" stopColor="#E2E8F0" stopOpacity="0.12" />
        </linearGradient>

        {/* Ambient Top & Side Vignette */}
        <radialGradient id="city-vignette" cx="50%" cy="50%" r="65%">
          <stop offset="60%" stopColor="#FFFFFF" stopOpacity="0" />
          <stop offset="100%" stopColor="#0B132B" stopOpacity="0.10" />
        </radialGradient>
      </defs>

      {/* Main Camera World Group */}
      <g ref={cameraRef} id="camera-world">
        {/* 1. PHOTOREALISTIC 2X RETINA 3D ARCHITECTURAL ISOMETRIC CGI RENDERING */}
        {/* Desaturated slightly with atmospheric overlay so energy infrastructure is the anchor */}
        <image
          href="/images/hero-sec/smart_energy_city_2x.webp"
          x="0"
          y="0"
          width="2752"
          height="1536"
          preserveAspectRatio="xMidYMid slice"
          className="transition-all duration-700"
          style={{
            filter: 'saturate(0.85) contrast(0.97)',
            imageRendering: '-webkit-optimize-contrast',
          }}
        />

        {/* 2. Atmospheric Soft Wash Overlay */}
        <rect
          width="2752"
          height="1536"
          fill="url(#atmospheric-wash)"
          className="pointer-events-none"
        />

        {/* 3. Soft Ambient Edge Vignette */}
        <rect
          width="2752"
          height="1536"
          fill="url(#city-vignette)"
          className="pointer-events-none"
        />

        {/* 4. DYNAMIC SUN RAYS STREAMING TO SOLAR PANELS & EXCITATION */}
        <SunRaysSolar />

        {/* 5. DISTRICT SPOTLIGHT HALOS (Soft illumination of active/hovered district) */}
        {SECTORS.map((sector) => {
          const isFocused = activeSector === sector.id;
          if (!isFocused) return null;

          return (
            <ellipse
              key={`district-glow-${sector.id}`}
              cx={sector.focusX}
              cy={sector.focusY}
              rx="240"
              ry="150"
              fill={sector.accent}
              opacity="0.16"
              filter="url(#radar-glow)"
              className="pointer-events-none transition-opacity duration-500 ease-out animate-pulse"
            />
          );
        })}

        {/* 6. DYNAMIC SVG LOCAL ENERGY FLOW CIRCUITS (SOLAR → ON-SITE BESS → FACILITY) */}
        <EnergyFlows activeSector={activeSector} />

        {/* 7. DISTRIBUTED ON-SITE LITH-ON BESS TELEMETRY PINS AT EVERY FACILITY */}
        {SECTORS.map((sector) => {
          const isFocused = activeSector === sector.id;
          const labelUpper = sector.label.toUpperCase();
          const textLength = labelUpper.length;
          // Measured char width with letterSpacing ~0.4px:
          const textWidth = Math.ceil(textLength * 8.6);
          // 32px left space for circle icon and margin + textWidth + 26px right safety margin
          const badgeWidth = textWidth + 58;
          const halfW = badgeWidth / 2;

          return (
            <g
              key={sector.id}
              id={`hotspot-${sector.id}`}
              transform={`translate(${sector.focusX}, ${sector.focusY})`}
              className={`pointer-events-auto cursor-pointer select-none transition-all duration-300 ${
                isFocused ? 'opacity-100' : 'opacity-50 hover:opacity-100'
              }`}
              style={{ outline: 'none' }}
              onClick={() => onSelectSector?.(sector.id)}
              onMouseEnter={() => onHoverSector?.(sector.id)}
              onMouseLeave={() => onHoverSector?.(null)}
              tabIndex={-1}
              role="button"
              aria-label={`On-Site BESS: ${sector.label}`}
            >
              {/* Radar Pulse when active */}
              {isFocused && (
                <circle
                  cx="0"
                  cy="0"
                  r="38"
                  fill="none"
                  stroke={sector.accent}
                  strokeWidth="2"
                  className="animate-ping pointer-events-none"
                  opacity="0.4"
                />
              )}

              {/* On-Site BESS Pin Base Circle */}
              <circle
                cx="0"
                cy="0"
                r={isFocused ? 14 : 7}
                fill={sector.accent}
                filter="url(#radar-glow)"
                className="transition-all duration-200"
              />
              <circle
                cx="0"
                cy="0"
                r={isFocused ? 5 : 2.5}
                fill="#FFFFFF"
                className="transition-all duration-200"
              />

              {/* Hotspot Badge - guaranteed zero word overflow */}
              {isFocused && (
                <g
                  transform="translate(0, -36)"
                  className="transition-transform duration-300 pointer-events-none"
                >
                  <rect
                    x={-halfW}
                    y="-16"
                    width={badgeWidth}
                    height="32"
                    rx="16"
                    fill="rgba(255, 255, 255, 0.98)"
                    stroke={sector.accent}
                    strokeWidth="1.5"
                    filter="url(#beacon-shadow)"
                  />
                  <circle
                    cx={-halfW + 18}
                    cy="0"
                    r="4.5"
                    fill={sector.accent}
                  />
                  <text
                    x={-halfW + 32}
                    y="4"
                    fill="#0F172A"
                    fontSize="10"
                    fontWeight="700"
                    letterSpacing="0.4"
                    textLength={textWidth}
                    lengthAdjust="spacingAndGlyphs"
                  >
                    {labelUpper}
                  </text>
                </g>
              )}
            </g>
          );
        })}
      </g>
    </svg>
  );
}
