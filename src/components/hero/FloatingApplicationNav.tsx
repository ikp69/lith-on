"use client";

import { Home, Building2, GraduationCap, Factory, Hospital } from "lucide-react";
import { useState } from "react";

interface ApplicationNavItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
}

const applications: ApplicationNavItem[] = [
  {
    id: "residential",
    label: "Residential",
    icon: Home,
    href: "/applications/residential",
  },
  {
    id: "healthcare",
    label: "Healthcare",
    icon: Hospital,
    href: "/applications/healthcare",
  },
  {
    id: "commercial",
    label: "Commercial",
    icon: Building2,
    href: "/applications/commercial",
  },
  {
    id: "campus",
    label: "Campus",
    icon: GraduationCap,
    href: "/applications/campus",
  },
  {
    id: "industrial",
    label: "Industrial",
    icon: Factory,
    href: "/applications/industrial",
  },
];

export function FloatingApplicationNav() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="absolute top-1/2 right-8 lg:right-16 xl:right-20 -translate-y-1/2 z-20 hidden lg:block">
      {/* SVG Curved Path */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          width: "120px",
          height: "440px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
        viewBox="0 0 120 440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Curved connecting path */}
        <path
          d="M 60 0 Q 20 110, 60 220 T 60 440"
          stroke="rgba(255, 255, 255, 0.15)"
          strokeWidth="1.5"
          strokeDasharray="4 6"
          fill="none"
        />
      </svg>

      {/* Navigation Pills */}
      <div className="relative flex flex-col gap-4">
        {applications.map((app, index) => {
          const Icon = app.icon;
          const isHovered = hoveredId === app.id;
          
          // Calculate position along curve
          // Pills arranged at y: 0, 110, 220, 330, 440
          const yPos = index * 110;
          
          // Calculate x offset for curve effect
          // Using sine wave: even indices (0,2,4) go left, odd (1,3) go right
          const xOffset = index % 2 === 0 ? -20 : 20;

          return (
            <a
              key={app.id}
              href={app.href}
              className="absolute transition-all duration-300 ease-out"
              style={{
                top: `${yPos}px`,
                left: `50%`,
                transform: `translate(calc(-50% + ${xOffset}px), -50%) ${
                  isHovered ? "scale(1.1)" : "scale(1)"
                }`,
              }}
              onMouseEnter={() => setHoveredId(app.id)}
              onMouseLeave={() => setHoveredId(null)}
              aria-label={`View ${app.label} applications`}
            >
              <div
                className={`
                  group relative flex items-center justify-center
                  w-16 h-16 rounded-full
                  backdrop-blur-xl border
                  transition-all duration-300
                  ${
                    isHovered
                      ? "bg-white/95 border-white/40 shadow-2xl shadow-white/20"
                      : "bg-white/30 border-white/20 shadow-lg hover:bg-white/40"
                  }
                `}
              >
                <Icon
                  className={`
                    h-6 w-6 transition-colors duration-300
                    ${isHovered ? "text-lithon-blue" : "text-white"}
                  `}
                  aria-hidden="true"
                />

                {/* Label tooltip */}
                <div
                  className={`
                    absolute left-full ml-4 whitespace-nowrap
                    px-4 py-2 rounded-xl
                    bg-white/95 backdrop-blur-xl border border-white/40
                    text-sm font-semibold text-slate-900
                    shadow-xl
                    transition-all duration-300 origin-left
                    ${
                      isHovered
                        ? "opacity-100 scale-100 translate-x-0"
                        : "opacity-0 scale-95 -translate-x-2 pointer-events-none"
                    }
                  `}
                >
                  {app.label}
                  
                  {/* Arrow pointer */}
                  <div
                    className="absolute right-full top-1/2 -translate-y-1/2 
                               w-0 h-0 
                               border-t-[6px] border-t-transparent
                               border-r-[8px] border-r-white/95
                               border-b-[6px] border-b-transparent"
                  />
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
