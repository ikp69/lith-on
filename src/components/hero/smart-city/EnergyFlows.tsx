'use client';

import { ENERGY_PATHS } from './city-data';

export interface EnergyFlowsProps {
  activeSector: string | null;
}

export function EnergyFlows({ activeSector }: EnergyFlowsProps) {
  // In default view: return null so the entire city is pristine and uncluttered.
  // Connections appear dynamically on hover or focus!
  if (!activeSector) {
    return null;
  }

  return (
    <g className="energy-flows-layer pointer-events-none">
      {ENERGY_PATHS.map((path) => {
        const isSectorActive = activeSector === path.sectorId;
        if (!isSectorActive) {
          return null;
        }

        // Restrained, premium architectural color: Lith-On Blue with precision cyan glow
        const primaryColor = '#0B3388';
        const glowColor = 'rgba(11, 51, 136, 0.28)';

        const strokeWidth = 4;
        const dashArray = '12 8';
        const animDuration = '1.0s';

        return (
          <g
            key={path.id}
            id={`group-${path.id}`}
            className="transition-opacity duration-500 ease-out"
          >
            {/* 1. Subtle, understated architectural glow corridor */}
            <path
              d={path.d}
              fill="none"
              stroke={glowColor}
              strokeWidth={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* 2. Core flowing electricity conduit */}
            <path
              id={`flow-${path.id}`}
              d={path.d}
              fill="none"
              stroke={primaryColor}
              strokeWidth={strokeWidth}
              strokeDasharray={dashArray}
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                animation: `energy-flow ${animDuration} linear infinite`,
              }}
            />

            {/* 3. Single clean energy particle on active conduit */}
            <circle
              r="5"
              fill="#FFFFFF"
              stroke="#F74530"
              strokeWidth="2"
              filter="drop-shadow(0 0 4px rgba(247, 69, 48, 0.5))"
            >
              <animateMotion dur="1.2s" repeatCount="indefinite" begin="0s">
                <mpath href={`#flow-${path.id}`} />
              </animateMotion>
            </circle>
          </g>
        );
      })}
    </g>
  );
}
