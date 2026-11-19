import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { LineReveal } from "@/components/motion/LineReveal";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";
import { Button } from "./Button";
import { MediaFrame } from "./MediaFrame";

export interface HeroAction {
  label: string;
  href: string;
}

interface Crumb {
  label: string;
  href?: string;
}

interface BaseHeroProps {
  /** Headline as lines; each line reveals separately (M2). Aim for ≤ 7 words. */
  title: string[];
  /** Index of the line set in Lith-On Blue (the page's single two-tone moment). */
  emphasisLine?: number;
  /** One sentence. */
  lead?: ReactNode;
  primary?: HeroAction;
  secondary?: HeroAction;
  breadcrumb?: Crumb[];
  /** Homepage only: use the largest display size. */
  display?: "xl" | "l";
  className?: string;
}

interface ProductHeroProps extends BaseHeroProps {
  variant: "product";
  product: { src: string; alt: string };
  /** Optional environment behind the product (rendered scenes must set illustrative). */
  scene?: { src: string; alt: string; illustrative?: boolean };
  /** Small factual line under the actions, e.g. a key figure. */
  footnote?: ReactNode;
}

interface ImageHeroProps extends BaseHeroProps {
  variant: "image";
  image: { src: string; alt: string; illustrative?: boolean };
}

interface EditorialHeroProps extends BaseHeroProps {
  variant: "editorial";
  /** Numbered chapter index linking to page sections. */
  index?: { label: string; href: string }[];
  /** Or a supporting visual on the right. */
  visual?: ReactNode;
}

interface UtilityHeroProps extends BaseHeroProps {
  variant: "utility";
  /** Optional element below the lead (e.g. a search field). */
  extra?: ReactNode;
}

export type PageHeroProps = ProductHeroProps | ImageHeroProps | EditorialHeroProps | UtilityHeroProps;

function Breadcrumb({ items, tone }: { items?: Crumb[]; tone: "light" | "dark" }) {
  if (!items?.length) {
    return null;
  }
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className={cn("flex flex-wrap items-center gap-2 text-small", tone === "dark" ? "text-on-dark-2" : "text-ink-3")}>
        {items.map((c, i) => (
          <li key={c.label} className="flex items-center gap-2">
            {c.href ? (
              <Link href={c.href} className={cn("hover:underline underline-offset-4", tone === "dark" ? "hover:text-white" : "hover:text-ink")}>
                {c.label}
              </Link>
            ) : (
              <span aria-current="page" className={tone === "dark" ? "text-white" : "text-ink"}>
                {c.label}
              </span>
            )}
            {i < items.length - 1 && <span aria-hidden="true">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

function Headline({ title, emphasisLine, display = "l", tone }: Pick<BaseHeroProps, "title" | "emphasisLine" | "display"> & { tone: "light" | "dark" }) {
  return (
    <LineReveal
      as="h1"
      onLoad
      lines={title}
      className={cn(
        display === "xl" ? "text-display-xl" : "text-display-l",
        "[overflow-wrap:break-word] min-w-0",
        tone === "dark" ? "text-on-dark" : "text-ink"
      )}
      emphasisIndex={emphasisLine}
      emphasisClassName={tone === "dark" ? "font-[500] text-white" : "font-[500] text-lithon-blue"}
    />
  );
}

function Actions({ primary, secondary, tone }: { primary?: HeroAction; secondary?: HeroAction; tone: "light" | "dark" }) {
  if (!primary && !secondary) {
    return null;
  }
  return (
    <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
      {primary && (
        <Button href={primary.href} tone={tone} arrow>
          {primary.label}
        </Button>
      )}
      {secondary && (
        <Button href={secondary.href} variant="tertiary" tone={tone}>
          {secondary.label}
        </Button>
      )}
    </div>
  );
}

/**
 * The four hero compositions (design.md §8). Each page picks one.
 * Headline, one sentence and at most two actions; no chip clusters.
 */
export function PageHero(props: PageHeroProps) {
  const { title, emphasisLine, lead, primary, secondary, breadcrumb, display, className } = props;

  if (props.variant === "product") {
    return (
      <section className={cn("relative overflow-hidden bg-canvas-warm", className)}>
        {props.scene && (
          <div className="absolute inset-0">
            <Image src={props.scene.src} alt={props.scene.alt} fill priority sizes="100vw" className="object-cover opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-r from-canvas-warm via-canvas-warm/85 to-canvas-warm/10 max-lg:bg-gradient-to-b max-lg:via-canvas-warm/70" />
            {props.scene.illustrative && (
              <span className="absolute right-4 bottom-4 z-10 rounded-full bg-black/55 px-2.5 py-1 text-[12px] font-[500] text-white">Illustrative scene</span>
            )}
          </div>
        )}
        <div className="container-site relative grid min-h-[min(88vh,860px)] grid-cols-1 items-center gap-10 pt-10 pb-14 lg:grid-cols-12 lg:gap-6 lg:py-20">
          <div className="lg:col-span-6">
            <Breadcrumb items={breadcrumb} tone="light" />
            <Headline title={title} emphasisLine={emphasisLine} display={display} tone="light" />
            {lead && (
              <Reveal delay={0.25}>
                <p className="mt-6 text-lead text-ink-2 measure text-pretty">{lead}</p>
              </Reveal>
            )}
            <Actions primary={primary} secondary={secondary} tone="light" />
            {props.footnote && <div className="mt-10 border-t border-line pt-5 text-small text-ink-3">{props.footnote}</div>}
          </div>
          <div className="relative lg:col-span-6">
            <Reveal delay={0.15} distance={40}>
              <div className="relative mx-auto aspect-[5/4] w-full max-w-[760px]">
                <Image src={props.product.src} alt={props.product.alt} fill priority sizes="(max-width: 1024px) 90vw, 55vw" className="object-contain mix-blend-multiply" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    );
  }

  if (props.variant === "image") {
    return (
      <section className={cn("relative isolate overflow-hidden bg-stage-dark", className)}>
        <MediaFrame src={props.image.src} alt={props.image.alt} fill rounded={false} priority parallax illustrative={props.image.illustrative} className="absolute inset-0" sizes="100vw" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/5" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/45 via-black/10 to-transparent" />
        <div className="container-site relative flex min-h-[min(80vh,760px)] flex-col justify-end pt-32 pb-14 lg:pb-20">
          <div className="max-w-3xl">
            <Breadcrumb items={breadcrumb} tone="dark" />
            <Headline title={title} emphasisLine={emphasisLine} display={display} tone="dark" />
            {lead && (
              <Reveal delay={0.25}>
                <p className="mt-6 text-lead text-on-dark-2 measure text-pretty">{lead}</p>
              </Reveal>
            )}
            <Actions primary={primary} secondary={secondary} tone="dark" />
          </div>
        </div>
      </section>
    );
  }

  if (props.variant === "editorial") {
    return (
      <section className={cn("bg-canvas", className)}>
        <div className="container-site grid grid-cols-1 gap-12 pt-14 pb-16 lg:grid-cols-12 lg:gap-6 lg:pt-24 lg:pb-28">
          <div className={props.index || props.visual ? "lg:col-span-8" : "lg:col-span-11"}>
            <Breadcrumb items={breadcrumb} tone="light" />
            <Headline title={title} emphasisLine={emphasisLine} display={display} tone="light" />
            {lead && (
              <Reveal delay={0.25}>
                <p className="mt-8 text-lead text-ink-2 measure text-pretty">{lead}</p>
              </Reveal>
            )}
            <Actions primary={primary} secondary={secondary} tone="light" />
          </div>
          {props.index && (
            <nav aria-label="On this page" className="self-end lg:col-span-4">
              <ol className="border-t border-line">
                {props.index.map((item, i) => (
                  <li key={item.href} className="border-b border-line">
                    <Link href={item.href} className="group flex items-baseline gap-4 py-4 text-body text-ink transition-colors hover:text-lithon-blue">
                      <span className="tabular text-small text-ink-3">{String(i + 1).padStart(2, "0")}</span>
                      <span className="flex-1">{item.label}</span>
                      <span aria-hidden="true" className="translate-x-0 transition-transform group-hover:translate-x-1 motion-reduce:transition-none">→</span>
                    </Link>
                  </li>
                ))}
              </ol>
            </nav>
          )}
          {props.visual && !props.index && <div className="self-end lg:col-span-4">{props.visual}</div>}
        </div>
      </section>
    );
  }

  // utility
  return (
    <section className={cn("border-b border-line bg-canvas-warm", className)}>
      <div className="container-site pt-10 pb-12 lg:pt-16 lg:pb-16">
        <div className="max-w-3xl">
          <Breadcrumb items={breadcrumb} tone="light" />
          <h1 className="text-heading-1 text-ink [overflow-wrap:break-word] min-w-0">
            {title.map((line, i) => (
              <span key={line} className={cn("block", i === emphasisLine && "font-[500] text-lithon-blue")}>
                {line}
              </span>
            ))}
          </h1>
          {lead && <p className="mt-5 text-lead text-ink-2 measure text-pretty">{lead}</p>}
          {props.extra && <div className="mt-8">{props.extra}</div>}
          <Actions primary={primary} secondary={secondary} tone="light" />
        </div>
      </div>
    </section>
  );
}
