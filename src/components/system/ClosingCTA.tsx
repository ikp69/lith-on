import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { LineReveal } from "@/components/motion/LineReveal";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";
import { Button } from "./Button";
import { MediaFrame } from "./MediaFrame";
import type { HeroAction } from "./PageHero";

interface BaseCTAProps {
  title: string[];
  lead?: ReactNode;
  primary: HeroAction;
  secondary?: HeroAction;
  className?: string;
}

interface StatementCTAProps extends BaseCTAProps {
  variant: "statement";
  /** Secondary routes shown as one quiet row of text links (never as cards). */
  links?: { label: string; href: string; description?: string }[];
}
interface SplitCTAProps extends BaseCTAProps {
  variant: "split";
  image: { src: string; alt: string; illustrative?: boolean };
}
interface InlineCTAProps extends BaseCTAProps {
  variant: "inline";
}

export type ClosingCTAProps = StatementCTAProps | SplitCTAProps | InlineCTAProps;

/**
 * Light, editorial page endings (design.md §11). Never on a dark or blue band.
 * Rotate the three variants across pages so endings differ.
 */
export function ClosingCTA(props: ClosingCTAProps) {
  const { title, lead, primary, secondary, className } = props;

  const actions = (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
      <Button href={primary.href} arrow>
        {primary.label}
      </Button>
      {secondary && (
        <Button href={secondary.href} variant="tertiary">
          {secondary.label}
        </Button>
      )}
    </div>
  );

  if (props.variant === "statement") {
    const links = props.links ?? [];
    return (
      <section className={cn("section-tight bg-canvas", className)}>
        <div className="container-site">
          {/* One Lith-On Blue panel. Red marks only the eyebrow, the primary action and link hover. */}
          <div className="grid gap-10 overflow-hidden rounded-[24px] bg-lithon-blue p-7 text-white sm:p-10 lg:grid-cols-12 lg:gap-0 lg:p-12">
            <div className={cn("flex min-w-0 flex-col", links.length > 0 ? "lg:col-span-7 lg:pr-12" : "lg:col-span-12")}>
              <p className="flex items-center gap-3 text-label text-white/70">
                <span aria-hidden="true" className="h-0.5 w-6 rounded-full bg-lithon-red" />
                Technical sizing
              </p>
              <LineReveal as="h2" lines={title} className="mt-5 min-w-0 text-balance text-heading-1 text-white wrap-break-word" />
              {lead && <p className="mt-4 max-w-[48ch] text-pretty text-body text-white/75">{lead}</p>}
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 lg:mt-auto lg:pt-10">
                <Button href={primary.href} tone="dark" arrow className="active:scale-[0.96]">
                  {primary.label}
                </Button>
                {secondary && (
                  <Button href={secondary.href} variant="tertiary" tone="dark">
                    {secondary.label}
                  </Button>
                )}
              </div>
            </div>
            {links.length > 0 && (
              <nav aria-label="Other ways to work with us" className="flex flex-col justify-center lg:col-span-5 lg:border-white/15 lg:border-l lg:pl-12">
                <p className="text-label text-white/55">Or go straight to</p>
                <ul className="mt-3">
                  {links.map((l) => (
                    <li key={l.href} className="border-white/15 border-b last:border-b-0">
                      <Link
                        href={l.href}
                        className="group -mx-3 flex min-h-[64px] items-center justify-between gap-5 rounded-[12px] px-3 py-3 transition-colors duration-150 ease-out hover:bg-white/[0.06] focus-visible:outline-2 focus-visible:outline-white focus-visible:-outline-offset-2"
                      >
                        <span className="min-w-0">
                          <span className="block font-[600] text-[15px] text-white">{l.label}</span>
                          {l.description && <span className="mt-0.5 block text-small text-white/60">{l.description}</span>}
                        </span>
                        <ArrowRight
                          aria-hidden="true"
                          strokeWidth={2}
                          className="size-4 shrink-0 text-white/60 transition-[translate,color] duration-150 ease-out group-hover:translate-x-1 group-hover:text-lithon-red"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </div>
        </div>
      </section>
    );
  }

  if (props.variant === "split") {
    return (
      <section className={cn("section bg-canvas-warm", className)}>
        <div className="container-site grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-6 lg:pr-10">
            <Reveal>
              <h2 className="text-heading-1 text-ink text-balance">{title.join(" ")}</h2>
              {lead && <p className="mt-5 text-lead text-ink-2 measure">{lead}</p>}
              <div className="mt-9">{actions}</div>
            </Reveal>
          </div>
          <div className="lg:col-span-6">
            <MediaFrame src={props.image.src} alt={props.image.alt} ratio="4/3" illustrative={props.image.illustrative} sizes="(max-width: 1024px) 100vw, 50vw" />
          </div>
        </div>
      </section>
    );
  }

  // inline
  return (
    <section className={cn("section-tight bg-canvas", className)}>
      <div className="container-site">
        <div className="flex flex-col gap-6 border-y border-line py-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-heading-2 text-ink">{title.join(" ")}</h2>
            {lead && <p className="mt-2 text-body text-ink-2">{lead}</p>}
          </div>
          {actions}
        </div>
      </div>
    </section>
  );
}
