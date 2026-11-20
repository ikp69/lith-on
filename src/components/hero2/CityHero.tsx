"use client";

import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef, useState } from "react";
import { gsap, ScrollTrigger } from "@/animations/gsap-register";
import { getLenis } from "@/components/motion/SmoothScroll";
import { Button } from "@/components/system/Button";
import { cn } from "@/lib/utils";
import { CITY_OVERVIEW, DISTRICTS, type District } from "./cityDistricts";

gsap.registerPlugin(useGSAP);

/**
 * Homepage hero (HOME-01), promoted from the /hero-2 prototype on 20 Nov 2026:
 * "dive into the city".
 *
 * Desktop with a fine pointer: the stage pins under the header inside a
 * rounded frame. The city overview opens out of a window, the camera dives
 * gently into the first district and its close-up crossfades in. From there
 * each close-up hands over directly to the next with a curtain wipe (the city
 * map is not shown between chapters, so its resolution never shows). After the
 * last chapter the camera pulls back out to the whole city.
 *
 * Clicking a building marker or the chapter index flies the camera straight
 * there (zoom out, travel, zoom in), skipping the chapters in between.
 *
 * Phones, touch devices and reduced motion get the same chapters as a
 * swipeable carousel, one complete chapter per slide (design.md §13).
 */
const CINEMATIC = "(min-width: 1024px) and (pointer: fine) and (prefers-reduced-motion: no-preference)";
/** Kept modest: the overview render is 2048px wide and softens beyond this. */
const DIVE_ZOOM = 1.7;
/** Height the camera travels at between districts: wide enough to read the city. */
const TRAVEL_ZOOM = 1.12;
const ASPECT = CITY_OVERVIEW.width / CITY_OVERVIEW.height;
const pad = (n: number) => String(n + 1).padStart(2, "0");

interface Cam {
  x: number;
  y: number;
  z: number;
}

/** Camera transform that centres map point (x, y) at a zoom, never exposing the map edge. */
function cameraFor(px: number, py: number, zoom: number) {
  const lo = 0.5 / zoom;
  const hi = 1 - lo;
  const x = Math.min(hi, Math.max(lo, px));
  const y = Math.min(hi, Math.max(lo, py));
  return { scale: zoom, xPercent: zoom * (0.5 - x) * 100, yPercent: zoom * (0.5 - y) * 100 };
}

function Headline({ className }: { className?: string }) {
  return (
    <h1 className={cn("text-display-xl text-ink", className)}>
      Storage for every
      <span className="block font-[500] text-lithon-blue">corner of the city</span>
    </h1>
  );
}

function Actions({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)}>
      <Button href="/contact" variant="primary" arrow>
        Request technical sizing
      </Button>
      <Button href="/products" variant="secondary">
        Explore products
      </Button>
    </div>
  );
}

const LEAD =
  "Battery energy storage built in Noida for campuses, factories, warehouses, housing societies, EV hubs and hospitals.";

function Caption({ d, i }: { d: District; i: number }) {
  return (
    <>
      <p className="flex items-center gap-3 text-label text-ink-3">
        <span className="tabular text-lithon-blue">{pad(i)}</span>
        <span aria-hidden="true" className="h-px w-8 bg-line-strong" />
        {d.sector}
      </p>
      <h2 className="mt-4 text-heading-2 text-ink">{d.title}</h2>
      <p className="mt-3 text-body text-ink-2">{d.body}</p>
      <div className="mt-5 border-line border-t pt-4 sm:mt-6 sm:pt-5">
        <p className="tabular text-lithon-red text-heading-1 sm:text-stat-l">{d.stat.value}</p>
        <p className="mt-2 text-small text-ink-3">{d.stat.label}</p>
      </div>
      <div className="mt-4">
        <Button href={d.href} variant="tertiary">
          {d.cta}
        </Button>
      </div>
    </>
  );
}

/* ------------------------------------------------------------------------ */
/* Desktop: pinned cinematic stage                                           */
/* ------------------------------------------------------------------------ */

function CinematicStage() {
  const rootRef = useRef<HTMLElement>(null);
  // Virtual camera shared by the scroll timeline and click flights.
  const camRef = useRef<Cam>({ x: 0.5, y: 0.5, z: 1.12 });
  const flyingRef = useRef(false);
  const triggerRef = useRef<ScrollTrigger | null>(null);
  const stopsRef = useRef<number[]>([]);
  const [active, setActive] = useState(-1);
  const [hovered, setHovered] = useState<string | null>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(CINEMATIC, () => {
        const q = gsap.utils.selector(rootRef);
        const camera = q("[data-camera]");
        const markers = q("[data-marker]");
        const detail = (d: District) => q(`[data-detail="${d.id}"]`);
        const detailImg = (d: District) => q(`[data-detail="${d.id}"] [data-detail-img]`);
        const caption = (d: District) => q(`[data-caption="${d.id}"]`);
        const first = DISTRICTS[0];
        const last = DISTRICTS.at(-1) ?? first;
        const stops: number[] = [];
        const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });

        // One virtual camera: a centre point on the map plus a zoom. Every
        // camera move tweens this, so zoom-out, travel and zoom-in can overlap
        // into one continuous arc while the district stays correctly centred.
        // Start values are explicit, so a click flight that moved the camera
        // can never be recorded as the start of a scroll move.
        const cam = camRef.current;
        Object.assign(cam, { x: 0.5, y: 0.5, z: 1.12 });
        const planned: Cam = { ...cam };
        const render = () => gsap.set(camera, cameraFor(cam.x, cam.y, cam.z));
        const move = (vars: Partial<Cam>, duration: number, at: number, ease = "power2.inOut") => {
          const from: Partial<Cam> = {};
          for (const k of Object.keys(vars) as (keyof Cam)[]) {
            from[k] = planned[k];
          }
          Object.assign(planned, vars);
          return tl.fromTo(cam, from, { ...vars, duration, ease, immediateRender: false, onUpdate: render }, at);
        };
        render();

        // 1. The overview opens out of its window to fill the frame.
        tl.fromTo(
          q("[data-window]"),
          { clipPath: "inset(42% 2% 0% 2% round 20px)" },
          { clipPath: "inset(0% 0% 0% 0% round 20px)", duration: 1.2 },
          0
        );
        move({ z: 1 }, 1.2, 0, "power3.inOut");
        tl.to(q("[data-intro]"), { yPercent: -30, autoAlpha: 0, duration: 0.6, ease: "power2.in" }, 0)
          .fromTo(markers, { autoAlpha: 0, scale: 0.6 }, { autoAlpha: 1, scale: 1, duration: 0.3, stagger: 0.04, ease: "back.out(2)" }, 0.95)
          .fromTo(q("[data-rail]"), { autoAlpha: 0, x: 16 }, { autoAlpha: 1, x: 0, duration: 0.4, ease: "power2.out" }, 0.9);

        /** Close-up takes over near the end of a zoom-in, before the map softens. */
        const arrive = (d: District, at: number) => {
          tl.fromTo(detail(d), { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.55, ease: "power2.inOut" }, at)
            .fromTo(detailImg(d), { scale: 1.12 }, { scale: 1, duration: 1.3, ease: "power2.out" }, at)
            .fromTo(caption(d), { autoAlpha: 0, y: 32 }, { autoAlpha: 1, y: 0, duration: 0.4, ease: "power2.out" }, at + 0.35);
        };
        /** Close-up dissolves back into the map as the camera starts pulling out. */
        const leave = (d: District, at: number) => {
          tl.to(caption(d), { autoAlpha: 0, y: -24, duration: 0.3, ease: "power2.in" }, at)
            .to(detail(d), { autoAlpha: 0, duration: 0.55, ease: "power2.inOut" }, at + 0.1)
            .to(detailImg(d), { scale: 1.08, duration: 0.55, ease: "power2.in" }, at + 0.1);
        };

        // 2. Dive from the overview into the first district.
        let t = 1.9;
        tl.to(markers, { autoAlpha: 0, scale: 0.6, duration: 0.25, ease: "power2.in" }, t);
        move({ x: first.focus.x, y: first.focus.y }, 1.3, t);
        move({ z: DIVE_ZOOM }, 1.3, t, "power2.in");
        arrive(first, t + 0.85);
        stops.push(t + 1.9);
        t += 2.7;

        // 3. District to district: zoom out, travel across the city, zoom in.
        for (let i = 1; i < DISTRICTS.length; i++) {
          const prev = DISTRICTS[i - 1];
          const d = DISTRICTS[i];
          leave(prev, t);
          move({ z: TRAVEL_ZOOM }, 0.8, t + 0.1, "power2.out");
          move({ x: d.focus.x, y: d.focus.y }, 1.2, t + 0.45);
          move({ z: DIVE_ZOOM }, 0.8, t + 1.25, "power2.in");
          arrive(d, t + 1.6);
          stops.push(t + 2.6);
          t += 3.4;
        }

        // 4. Pull back out to the whole city, closing line.
        leave(last, t);
        move({ z: 1 }, 1.3, t + 0.1);
        move({ x: 0.5, y: 0.5 }, 1.3, t + 0.1);
        tl.to(markers, { autoAlpha: 1, scale: 1, duration: 0.3, stagger: 0.04, ease: "back.out(2)" }, t + 1.2)
          .fromTo(q("[data-outro]"), { autoAlpha: 0, y: 32 }, { autoAlpha: 1, y: 0, duration: 0.45, ease: "power2.out" }, t + 1.2)
          .to({}, { duration: 0.4 });

        const total = tl.duration();
        stopsRef.current = stops.map((s) => s / total);

        triggerRef.current = ScrollTrigger.create({
          trigger: rootRef.current,
          animation: tl,
          start: "top 80px",
          end: () => `+=${window.innerHeight * 8.5}`,
          pin: true,
          scrub: 0.8,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const now = self.progress * total;
            let next = -1;
            for (let i = 0; i < stops.length; i++) {
              if (now >= stops[i] - 1.1 && now < stops[i] + 0.9) {
                next = i;
              }
            }
            setActive((prev) => (prev === next ? prev : next));
          },
        });

        return () => {
          triggerRef.current?.kill();
          triggerRef.current = null;
        };
      });
      return () => mm.revert();
    },
    { scope: rootRef }
  );

  /**
   * Fly straight to a chapter: the current view dissolves into the map, the
   * camera zooms out, travels directly to the chosen district (skipping the
   * chapters in between) and zooms in. Then the scroll position is moved to
   * that chapter silently, so scrolling carries on from there.
   */
  const goTo = (i: number) => {
    const st = triggerRef.current;
    const p = stopsRef.current[i];
    const root = rootRef.current;
    const d = DISTRICTS[i];
    if (!(st && root && d) || p === undefined || flyingRef.current) {
      return;
    }
    // Settle any scroll catch-up still running before taking over.
    st.getTween()?.progress(1);

    const cam = camRef.current;
    const zoomedIn = cam.z > 1.3;
    if (zoomedIn && Math.abs(cam.x - d.focus.x) < 0.005 && Math.abs(cam.y - d.focus.y) < 0.005) {
      return;
    }

    const q = gsap.utils.selector(root);
    const camera = q("[data-camera]");
    const render = () => gsap.set(camera, cameraFor(cam.x, cam.y, cam.z));
    const top = st.start + p * (st.end - st.start);
    const lenis = getLenis();
    flyingRef.current = true;
    lenis?.stop();
    setActive(i);

    const flight = gsap.timeline({
      defaults: { ease: "power2.inOut" },
      onComplete: () => {
        if (lenis) {
          lenis.start();
          lenis.scrollTo(top, { immediate: true, force: true });
        } else {
          window.scrollTo({ top, behavior: "instant" });
        }
        ScrollTrigger.update();
        st.getTween()?.progress(1);
        flyingRef.current = false;
      },
    });

    // Clear whatever is on screen.
    flight
      .to(q("[data-caption]"), { autoAlpha: 0, y: -24, duration: 0.3, ease: "power2.in" }, 0)
      .to(q("[data-outro]"), { autoAlpha: 0, y: -16, duration: 0.3, ease: "power2.in" }, 0)
      .to(q("[data-marker]"), { autoAlpha: 0, scale: 0.6, duration: 0.25, ease: "power2.in" }, 0)
      .to(q("[data-detail]"), { autoAlpha: 0, duration: 0.55 }, 0.1);

    let arriveAt = 1.6;
    if (zoomedIn) {
      // From a close-up: zoom out, travel, zoom in.
      flight
        .to(cam, { z: TRAVEL_ZOOM, duration: 0.8, ease: "power2.out", onUpdate: render }, 0.1)
        .to(cam, { x: d.focus.x, y: d.focus.y, duration: 1.2, onUpdate: render }, 0.45)
        .to(cam, { z: DIVE_ZOOM, duration: 0.8, ease: "power2.in", onUpdate: render }, 1.25);
    } else {
      // From the overview: travel and dive in one move.
      flight
        .to(cam, { x: d.focus.x, y: d.focus.y, duration: 1.3, onUpdate: render }, 0.15)
        .to(cam, { z: DIVE_ZOOM, duration: 1.3, ease: "power2.in", onUpdate: render }, 0.15);
      arriveAt = 1.05;
    }

    // The chosen close-up takes over at the end of the zoom-in.
    flight
      .fromTo(q(`[data-detail="${d.id}"]`), { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.55 }, arriveAt)
      .fromTo(q(`[data-detail="${d.id}"] [data-detail-img]`), { scale: 1.12 }, { scale: 1, duration: 1, ease: "power2.out" }, arriveAt)
      .fromTo(q(`[data-caption="${d.id}"]`), { autoAlpha: 0, y: 32 }, { autoAlpha: 1, y: 0, duration: 0.4, ease: "power2.out" }, arriveAt + 0.35);
  };

  return (
    <section
      ref={rootRef}
      aria-label="Where Lith-On storage works"
      className="city-hero relative hidden bg-canvas lg:pointer-fine:motion-safe:block"
    >
      {/* Rounded frame with an even margin on all four sides */}
      <div className="city-hero__frame">
        {/* City map seen through a window that opens to fill the frame */}
        <div data-window className="city-hero__window absolute inset-0 overflow-hidden bg-canvas-warm">
          <div className="city-hero__map">
            <div data-camera className="relative h-full w-full will-change-transform">
              <Image
                src={CITY_OVERVIEW.src}
                alt={CITY_OVERVIEW.alt}
                fill
                fetchPriority="high"
                sizes="200vw"
                className="object-cover"
              />
              {DISTRICTS.map((d, i) => (
                <button
                  key={d.id}
                  type="button"
                  data-marker
                  onClick={() => goTo(i)}
                  onMouseEnter={() => setHovered(d.id)}
                  onMouseLeave={() => setHovered(null)}
                  onFocus={() => setHovered(d.id)}
                  onBlur={() => setHovered(null)}
                  style={{ left: `${d.marker.x * 100}%`, top: `${d.marker.y * 100}%` }}
                  className={cn(
                    "-translate-x-1/2 -translate-y-1/2 invisible absolute flex items-center gap-2 whitespace-nowrap rounded-full py-1.5 pr-3.5 pl-1.5 font-[600] text-[13px] shadow-[0_6px_20px_rgba(17,24,39,0.16)] backdrop-blur-sm",
                    "transition-[background-color,color,scale] duration-200 ease-out focus-visible:outline-2 focus-visible:outline-lithon-blue focus-visible:outline-offset-4",
                    hovered === d.id ? "scale-105 bg-ink text-white" : "bg-white/95 text-ink"
                  )}
                  aria-label={`${d.sector}: go to chapter ${i + 1}`}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      "grid size-6 place-items-center rounded-full transition-colors duration-200",
                      hovered === d.id ? "bg-white/15" : "bg-lithon-red/10"
                    )}
                  >
                    <span className="size-2 rounded-full bg-lithon-red" />
                  </span>
                  <span aria-hidden="true">
                    <span className={cn("tabular mr-1.5", hovered === d.id ? "text-white/70" : "text-lithon-blue")}>{pad(i)}</span>
                    {d.sector}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Close-up renders, one per district, stacked in chapter order */}
        {DISTRICTS.map((d) => (
          <div key={d.id} data-detail={d.id} className="invisible absolute inset-0 overflow-hidden opacity-0">
            <div data-detail-img className="absolute inset-0 will-change-transform">
              <Image src={d.src} alt={d.alt} fill fetchPriority="low" sizes="100vw" className="object-cover" />
            </div>
          </div>
        ))}

        {/* Captions */}
        {DISTRICTS.map((d, i) => (
          <article
            key={d.id}
            data-caption={d.id}
            className={cn(
              "invisible absolute bottom-6 w-[min(420px,34vw)] rounded-media bg-white/95 p-8 opacity-0 shadow-[0_24px_60px_rgba(17,24,39,0.16)] backdrop-blur-md",
              d.side === "left" ? "left-6" : "right-[200px]"
            )}
          >
            <Caption d={d} i={i} />
          </article>
        ))}

        {/* Closing line once the camera is back out */}
        <div
          data-outro
          className="invisible absolute top-6 left-1/2 w-[min(640px,calc(100%-48px))] -translate-x-1/2 rounded-media bg-white/95 px-8 py-7 opacity-0 shadow-[0_24px_60px_rgba(17,24,39,0.16)] backdrop-blur-md"
        >
          <div className="flex items-center justify-between gap-8">
            <div>
              <p className="text-heading-3 text-ink">Size a system for your site</p>
              <p className="mt-1 text-small text-ink-3">500+ MWh deployed · 25+ countries · 250 MWh made a year</p>
            </div>
            <Button href="/contact" variant="primary" arrow>
              Request sizing
            </Button>
          </div>
        </div>

        {/* Chapter index */}
        <nav
          data-rail
          aria-label="Districts"
          className="invisible absolute top-1/2 right-5 -translate-y-1/2 rounded-media bg-white/90 p-2 opacity-0 shadow-[0_12px_40px_rgba(17,24,39,0.12)] backdrop-blur-md"
        >
          <ol className="flex flex-col">
            {DISTRICTS.map((d, i) => {
              const on = active === i || hovered === d.id;
              return (
                <li key={d.id}>
                  <button
                    type="button"
                    onClick={() => goTo(i)}
                    aria-current={active === i ? "step" : undefined}
                    className="group flex min-h-10 items-center gap-2 rounded-control px-2 text-left focus-visible:outline-2 focus-visible:outline-lithon-blue"
                  >
                    <span
                      aria-hidden="true"
                      className={cn(
                        "h-px transition-[width,background-color] duration-300 ease-out",
                        on ? "w-6 bg-lithon-red" : "w-3 bg-line-strong group-hover:w-5"
                      )}
                    />
                    <span className={cn("tabular text-[13px]", on ? "font-[600] text-ink" : "text-ink-3")}>{pad(i)}</span>
                    <span
                      className={cn(
                        "overflow-hidden whitespace-nowrap text-[13px] transition-[max-width,opacity] duration-300 ease-out",
                        on ? "max-w-40 text-ink opacity-100" : "max-w-0 opacity-0 group-hover:max-w-40 group-hover:opacity-100"
                      )}
                    >
                      {d.sector}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </nav>
      </div>

      {/* Intro copy over the white canvas, above the window */}
      <div data-intro className="absolute inset-x-0 top-0 h-[44%]">
        <div className="container-site flex h-full items-end justify-between gap-12 pb-8">
          <Headline />
          <div className="max-w-[400px] pb-2">
            <p className="text-ink-2 text-lead">{LEAD}</p>
            <Actions className="mt-6" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------------ */
/* Phones, touch and reduced motion: swipeable chapters                      */
/* ------------------------------------------------------------------------ */

/**
 * One sector per slide, swiped left and right (owner, 20 Nov 2026: the stacked
 * city image followed by six stacked chapters read as a long scroll). Native
 * scroll-snap carries the swipe; the arrows, dots and counter track the slide
 * in view. The city overview is left out here so the first thing below the
 * actions is a complete chapter.
 */
function StackedHero() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const last = DISTRICTS.length - 1;

  const onScroll = () => {
    const el = trackRef.current;
    if (el && el.clientWidth > 0) {
      setIndex(Math.min(last, Math.max(0, Math.round(el.scrollLeft / el.clientWidth))));
    }
  };

  const go = (i: number) => {
    const el = trackRef.current;
    if (!el) {
      return;
    }
    const target = Math.min(last, Math.max(0, i));
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollTo({ left: target * el.clientWidth, behavior: reduce ? "auto" : "smooth" });
  };

  const arrow =
    "inline-flex h-11 w-11 items-center justify-center rounded-full border border-line-strong text-ink transition-colors hover:border-ink hover:bg-canvas-warm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lithon-blue disabled:pointer-events-none disabled:opacity-35";

  return (
    <section aria-label="Where Lith-On storage works" className="bg-canvas lg:pointer-fine:motion-safe:hidden">
      <div className="container-site pt-12 pb-10 sm:pt-16">
        <Headline />
        <p className="mt-5 max-w-[56ch] text-ink-2 text-lead">{LEAD}</p>
        <Actions className="mt-7" />
      </div>

      <div className="container-site pb-16">
        <div
          ref={trackRef}
          onScroll={onScroll}
          className="flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {DISTRICTS.map((d, i) => (
            <div
              key={d.id}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${DISTRICTS.length}: ${d.sector}`}
              inert={i !== index}
              className="grid w-full shrink-0 snap-start snap-always content-start gap-5 md:grid-cols-12 md:items-center md:gap-10"
            >
              <div className="relative overflow-hidden rounded-media md:col-span-7" style={{ aspectRatio: ASPECT }}>
                <Image src={d.src} alt={d.alt} fill priority={i === 0} sizes="(min-width: 768px) 58vw, 100vw" className="object-cover" />
              </div>
              <article className="md:col-span-5">
                <Caption d={d} i={i} />
              </article>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between gap-3 border-line border-t pt-4">
          <p className="tabular w-14 text-small text-ink-3" aria-live="polite">
            <span className="font-[500] text-ink">{pad(index)}</span> / {pad(last)}
            <span className="sr-only">: {DISTRICTS[index].sector}</span>
          </p>
          <div className="flex flex-1 justify-center">
          {DISTRICTS.map((d, i) => (
            <button
              key={d.id}
              type="button"
              onClick={() => go(i)}
              aria-label={`Go to ${d.sector}`}
              aria-current={i === index ? "true" : undefined}
              className="group inline-flex h-11 w-5 items-center justify-center sm:w-7 focus-visible:outline-2 focus-visible:outline-lithon-blue"
            >
              <span
                aria-hidden="true"
                className={cn(
                  "h-1.5 rounded-full transition-[width,background-color] duration-300 motion-reduce:transition-none",
                  i === index ? "w-4 bg-lithon-blue sm:w-6" : "w-1.5 bg-line-strong group-hover:bg-ink-3"
                )}
              />
            </button>
          ))}
          </div>
          <div className="flex gap-2">
            <button type="button" onClick={() => go(index - 1)} disabled={index === 0} aria-label="Previous sector" className={arrow}>
              <span aria-hidden="true">←</span>
            </button>
            <button type="button" onClick={() => go(index + 1)} disabled={index === last} aria-label="Next sector" className={arrow}>
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CityHero() {
  return (
    <>
      <CinematicStage />
      <StackedHero />
    </>
  );
}
