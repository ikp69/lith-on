"use client";

import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { gsap } from "@/animations/gsap-register";
import { LineReveal } from "@/components/motion/LineReveal";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/system/Button";
import { cn } from "@/lib/utils";

gsap.registerPlugin(useGSAP);

/**
 * HOME-01 Homepage hero (audit §5, design.md §8 "Product" variant, custom stage).
 *
 * One Lith-On BESS shelter stays anchored while the visitor switches the
 * environment behind it. Scenes and the shelter are rendered illustrations,
 * labelled as such (decision 11.3). The scene images share one aspect ratio
 * (1670 × 941) and each has an empty pad that the shelter cut-out sits on.
 */
const SCENES = [
  { id: "manufacturing", label: "Manufacturing", src: "/images/hero-sec/scene-industrial.webp", alt: "factory" },
  { id: "commercial", label: "Commercial", src: "/images/hero-sec/scene-commercial.webp", alt: "commercial building" },
  { id: "healthcare", label: "Healthcare", src: "/images/hero-sec/scene-hospital.webp", alt: "hospital" },
  { id: "campus", label: "Campus", src: "/images/hero-sec/scene-university.webp", alt: "university campus" },
] as const;

export function HomeHero() {
  const rootRef = useRef<HTMLElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  // Only the first scene loads with the page (LCP). The rest load on first
  // interest in the switch, or a few seconds after load.
  const [warm, setWarm] = useState(false);
  const hoverTimer = useRef<number | undefined>(undefined);

  useEffect(() => {
    const id = window.setTimeout(() => setWarm(true), 3500);
    return () => {
      window.clearTimeout(id);
      window.clearTimeout(hoverTimer.current);
    };
  }, []);

  // Desktop scroll hand-off: the stage recedes slightly as the hero leaves.
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px) and (pointer: fine) and (prefers-reduced-motion: no-preference)", () => {
        gsap.to(frameRef.current, {
          scale: 0.94,
          yPercent: 4,
          ease: "none",
          scrollTrigger: { trigger: rootRef.current, start: "top top", end: "bottom top", scrub: true },
        });
      });
      return () => mm.revert();
    },
    { scope: rootRef }
  );

  const scene = SCENES[active];

  return (
    <section ref={rootRef} className="relative overflow-hidden bg-canvas">
      <div ref={frameRef} className="home-hero relative origin-top overflow-hidden bg-canvas-warm">
        {/* Stage: scenes + anchored shelter */}
        <div className="home-hero__layer">
          <div className="home-hero__stage">
            <div className="home-hero__scenes">
            {SCENES.map((s, i) =>
              i === 0 || warm ? (
                <Image
                  key={s.id}
                  src={s.src}
                  alt={i === active ? `Illustrative render: a Lith-On BESS shelter at a ${s.alt}` : ""}
                  fill
                  priority={i === 0}
                  fetchPriority={i === 0 ? "high" : "low"}
                  quality={60}
                  sizes="(min-width: 1024px) 86vw, min(165vw, 900px)"
                  className={cn(
                    "object-cover motion-safe:transition-opacity motion-safe:duration-[600ms] motion-safe:ease-out",
                    i === active ? "opacity-100" : "opacity-0"
                  )}
                />
              ) : null
            )}
            </div>
            <Reveal className="home-hero__shelter" delay={0.15} distance={40}>
              <Image
                src="/images/hero-sec/bess-shelter-anchor.webp"
                alt=""
                fill
                priority
                sizes="(min-width: 1024px) 62vw, 95vw"
                className="object-contain object-bottom"
              />
            </Reveal>
            <span className="absolute right-[2%] bottom-[5%] rounded-full bg-black/55 px-2.5 py-1 text-[12px] font-[500] text-white">
              Illustrative scene
            </span>
          </div>
        </div>

        {/* Copy */}
        <div className="home-hero__content container-site relative">
          <div className="max-w-[34rem] lg:max-w-[30rem] xl:max-w-[38rem]">
            <LineReveal
              as="h1"
              onLoad
              lines={["Battery storage", "for Indian heat"]}
              emphasisIndex={1}
              emphasisClassName="font-[500] text-lithon-blue"
              className="text-display-xl text-ink text-balance [overflow-wrap:break-word] min-w-0"
            />
            <Reveal delay={0.35}>
              <p className="mt-6 text-lead text-ink-2 measure text-pretty">
                Cabinet and containerised energy storage, engineered and manufactured at our 20,000 sq. ft. plant in Noida.
              </p>
            </Reveal>
            <Reveal delay={0.45}>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
                <Button href="/contact" arrow>
                  Request sizing
                </Button>
                <Button href="/products" variant="tertiary">
                  Explore products
                </Button>
              </div>
            </Reveal>

            {/* Scene switch: hover or click on desktop, tap on phones */}
            <Reveal delay={0.55}>
              <div className="mt-10 lg:mt-14">
                <p id="home-hero-scenes" className="text-small text-ink-3">
                  See the system at
                </p>
                <div
                  role="group"
                  aria-labelledby="home-hero-scenes"
                  className="-mx-4 mt-3 flex gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 [&::-webkit-scrollbar]:hidden"
                  onPointerEnter={() => setWarm(true)}
                  onFocus={() => setWarm(true)}
                >
                  {SCENES.map((s, i) => (
                    <button
                      key={s.id}
                      type="button"
                      aria-pressed={i === active}
                      onClick={() => {
                        window.clearTimeout(hoverTimer.current);
                        setActive(i);
                      }}
                      onPointerEnter={(e) => {
                        // Hover intent: switch after 120ms so sweeping across the row doesn't flash scenes
                        if (e.pointerType === "mouse") {
                          window.clearTimeout(hoverTimer.current);
                          hoverTimer.current = window.setTimeout(() => setActive(i), 120);
                        }
                      }}
                      onPointerLeave={() => window.clearTimeout(hoverTimer.current)}
                      className={cn(
                        "h-11 shrink-0 rounded-full border px-4 text-[14px] font-[500] whitespace-nowrap",
                        "transition-[background-color,border-color,color,scale] duration-200 active:scale-[0.96] motion-reduce:active:scale-100",
                        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lithon-blue",
                        i === active
                          ? "border-ink bg-ink text-white"
                          : "border-line-strong bg-white/80 text-ink hover:border-ink"
                      )}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
                <p className="sr-only" aria-live="polite">
                  Showing an illustrative {scene.alt} scene
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
