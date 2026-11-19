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
    return (
      <section className={cn("section-loose bg-canvas", className)}>
        <div className="container-site">
          <div className="border-t border-ink pt-10 lg:pt-14">
            <LineReveal as="h2" lines={title} className="text-display-l text-ink max-w-[16ch] lg:max-w-none [overflow-wrap:break-word] min-w-0" />
            <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              {lead ? <p className="text-lead text-ink-2 measure">{lead}</p> : <span />}
              {actions}
            </div>
            {props.links && props.links.length > 0 && (
              <nav aria-label="Other ways to work with us" className="mt-14 border-t border-line pt-6 lg:mt-20">
                <ul className="grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
                  {props.links.map((l) => (
                    <li key={l.href}>
                      <Button href={l.href} variant="tertiary">
                        {l.label}
                      </Button>
                      {l.description && <p className="mt-1 text-small text-ink-3">{l.description}</p>}
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
