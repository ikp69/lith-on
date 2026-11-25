"use client";

import Image from "next/image";
import { type ReactNode, useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "@/animations/gsap-register";
import { cn } from "@/lib/utils";

export interface StoryChapter {
  id: string;
  title: ReactNode;
  body?: ReactNode;
  /** Optional emphasised figure / link row under the body. */
  aside?: ReactNode;
  /** A photograph for the chapter… */
  image?: { src: string; alt: string; illustrative?: boolean };
  /**
   * …or a live visual (diagram). It is wrapped in an element with the `group`
   * class and `data-active="true|false"`, so it can animate with
   * `group-data-[active=true]:` utilities when its chapter becomes active.
   * On phones it always renders active (its final state).
   */
  visual?: ReactNode;
}

interface ScrollStoryProps {
  chapters: StoryChapter[];
  /** Media on the left (default) or right on desktop. */
  mediaSide?: "left" | "right";
  /** Aspect ratio of the sticky media frame on desktop (default "4/5"). */
  mediaAspect?: string;
  /**
   * Section intro (usually a SectionIntro). On desktop it stays pinned under
   * the header, with the media pinned below it, until the last chapter arrives;
   * then it scrolls away. On phones it scrolls normally.
   */
  intro?: ReactNode;
  /** Background class for the pinned intro band, matching the section (e.g. "bg-canvas-warm"). */
  introBg?: string;
  className?: string;
}

/**
 * M4 Scroll story (design.md §16).
 * Desktop: media stays put (CSS sticky) while chapters scroll past; the active
 * chapter, tracked with ScrollTrigger, crossfades the media.
 * Phones: chapters stack, each with its own image. No pinning.
 * Reduced motion: same layout, instant swaps (motion-safe variants).
 * Budget: at most one or two per page.
 */
export function ScrollStory({
  chapters,
  mediaSide = "left",
  mediaAspect = "4/5",
  intro,
  introBg = "bg-canvas",
  className,
}: ScrollStoryProps) {
  const hasVisuals = chapters.some((c) => c.visual);
  const [active, setActive] = useState(0);
  const chapterRefs = useRef<(HTMLElement | null)[]>([]);
  const rootRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  // Header (80px) + the pinned intro band; the media pins just below it.
  const [layout, setLayout] = useState({ stickyTop: 112, introH: 0, track: 0 });

  useEffect(() => {
    const root = rootRef.current;
    const el = introRef.current;
    if (!(root && el)) {
      return;
    }
    // The intro is pinned inside a track that ends where the last chapter
    // begins, so it scrolls away as the visitor moves past the second-last one.
    const measure = () => {
      const lastChapter = chapterRefs.current.at(-1);
      const track = lastChapter ? lastChapter.getBoundingClientRect().top - root.getBoundingClientRect().top : 0;
      const introH = el.offsetHeight;
      setLayout((prev) =>
        prev.introH === introH && prev.track === track ? prev : { stickyTop: 80 + introH + 16, introH, track }
      );
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    ro.observe(root);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const triggers = chapterRefs.current.map((el, i) =>
      el
        ? ScrollTrigger.create({
            trigger: el,
            start: "top 55%",
            end: "bottom 55%",
            onToggle: (self) => {
              if (self.isActive) {
                setActive(i);
              }
            },
          })
        : null
    );
    return () => {
      for (const t of triggers) {
        t?.kill();
      }
    };
  }, [chapters.length]);

  const lifted = layout.track > layout.introH && layout.introH > 0;
  const fade = "motion-safe:transition-opacity motion-safe:duration-[800ms] motion-safe:ease-out";

  return (
    <div
      ref={rootRef}
      className={cn("relative", className)}
      style={
        {
          "--story-top": `${layout.stickyTop}px`,
          "--intro-h": `${layout.introH}px`,
          "--intro-track": `${layout.track}px`,
        } as React.CSSProperties
      }
    >
      {intro && (
        <>
          {/* Until measured, the intro sits in normal flow. Once measured it is
              lifted into the pin track and an exact-height spacer takes its
              place, so the page never shifts under the visitor. */}
          <div
            className={cn(
              "pointer-events-none lg:z-10",
              lifted && "lg:absolute lg:inset-x-0 lg:top-0 lg:h-(--intro-track)"
            )}
          >
            <div ref={introRef} className={cn("pointer-events-auto lg:pt-6 lg:pb-2", lifted &&
                  "lg:sticky lg:top-20 lg:before:pointer-events-none lg:before:absolute lg:before:inset-x-0 lg:before:bottom-full lg:before:h-20 lg:before:bg-inherit lg:before:content-['']",
                introBg
              )}
            >
              {intro}
            </div>
          </div>
          {lifted && <div aria-hidden="true" className="hidden lg:block lg:h-(--intro-h)" />}
        </>
      )}
    <div className="lg:grid lg:grid-cols-12 lg:gap-12">
      {/* Desktop media (sticky) */}
      <div className={cn("hidden lg:block lg:col-span-6", mediaSide === "right" && "lg:order-2")}>
        <div
          className={cn("sticky top-(--story-top) max-h-[calc(100vh-var(--story-top)-1.5rem)] w-full overflow-hidden rounded-media", hasVisuals ? "bg-canvas shadow-[0_1px_2px_rgba(17,24,39,0.04),0_8px_24px_-12px_rgba(17,24,39,0.12)]" : "bg-surface")}
          style={{ aspectRatio: mediaAspect }}
        >
          {chapters.map((c, i) => (
            <div
              key={c.id}
              data-active={i === active}
              className={cn("group absolute inset-0", fade, i === active ? "opacity-100" : "opacity-0")}
              aria-hidden={i !== active}
            >
              {c.visual}
              {c.image && <Image src={c.image.src} alt={i === active ? c.image.alt : ""} fill sizes="50vw" className="object-cover" />}
              {c.image?.illustrative && (
                <span className="absolute right-3 bottom-3 rounded-full bg-black/55 px-2.5 py-1 text-[12px] font-[500] text-white">Illustrative scene</span>
              )}
            </div>
          ))}
          <ol className="absolute top-5 right-5 flex gap-1.5" aria-hidden="true">
            {chapters.map((c, i) => (
              <li
                key={c.id}
                className={cn(
                  "h-1 w-6 rounded-full",
                  fade,
                  hasVisuals ? (i === active ? "bg-ink" : "bg-line-strong") : i === active ? "bg-white" : "bg-white/50"
                )}
              />
            ))}
          </ol>
        </div>
      </div>

      {/* Chapters */}
      <div className="lg:col-span-6">
        {chapters.map((c, i) => (
          <article
            key={c.id}
            id={c.id}
            ref={(el) => {
              chapterRefs.current[i] = el;
            }}
            className="scroll-mt-(--story-top) border-t border-line py-10 first:border-t-0 first:pt-0 lg:flex lg:min-h-[70vh] lg:flex-col lg:justify-center lg:border-t-0 lg:py-0"
          >
            {/* Phone image: each chapter has its own */}
            {c.visual && (
              <div data-active="true" className="group relative mb-6 overflow-hidden rounded-media bg-canvas shadow-[0_1px_2px_rgba(17,24,39,0.04),0_8px_24px_-12px_rgba(17,24,39,0.12)] lg:hidden">
                {c.visual}
              </div>
            )}
            {c.image && (
              <div className="relative mb-6 aspect-[4/3] overflow-hidden rounded-media bg-surface lg:hidden">
                <Image src={c.image.src} alt={c.image.alt} fill sizes="100vw" className="object-cover" />
                {c.image.illustrative && (
                  <span className="absolute right-3 bottom-3 rounded-full bg-black/55 px-2.5 py-1 text-[12px] font-[500] text-white">Illustrative scene</span>
                )}
              </div>
            )}
            <p className="text-label text-ink-3 tabular">
              {String(i + 1).padStart(2, "0")} / {String(chapters.length).padStart(2, "0")}
            </p>
            <h3 className={cn("mt-3 text-heading-2 text-ink lg:transition-colors lg:duration-500", i !== active && "lg:text-ink-3")}>{c.title}</h3>
            {c.body && <div className="mt-4 text-body text-ink-2 measure">{c.body}</div>}
            {c.aside && <div className="mt-6">{c.aside}</div>}
          </article>
        ))}
      </div>
    </div>
    </div>
  );
}
