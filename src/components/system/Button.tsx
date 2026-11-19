import { ArrowRight, Loader2 } from "lucide-react";
import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "tertiary";
export type ButtonTone = "light" | "dark";

interface CommonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  /** Use "dark" on stage-dark or photographic surfaces. */
  tone?: ButtonTone;
  size?: "md" | "sm";
  /** Show the trailing arrow (always on for tertiary). */
  arrow?: boolean;
  className?: string;
}

type LinkProps = CommonProps & { href: string; external?: boolean };
type NativeProps = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & { href?: undefined; loading?: boolean };

export type ButtonProps = LinkProps | NativeProps;

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-[600] whitespace-nowrap select-none " +
  "transition-[background-color,border-color,color,box-shadow,scale] duration-200 ease-out active:scale-[0.96] motion-reduce:active:scale-100 " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 " +
  "disabled:cursor-not-allowed disabled:opacity-50 aria-disabled:cursor-not-allowed aria-disabled:opacity-50";

function classesFor(variant: ButtonVariant, tone: ButtonTone, size: "md" | "sm") {
  const sizing = size === "md" ? "h-12 px-6 text-[15px]" : "h-10 px-5 text-sm";
  if (variant === "primary") {
    return cn(
      base,
      sizing,
      "bg-lithon-red-ink text-white hover:bg-lithon-red-ink-hover active:bg-[#8A2112]",
      tone === "dark" ? "focus-visible:outline-white" : "focus-visible:outline-lithon-blue"
    );
  }
  if (variant === "secondary") {
    return cn(
      base,
      sizing,
      tone === "dark"
        ? "border border-white/60 text-white hover:bg-white/10 hover:border-white active:bg-white/15 focus-visible:outline-white"
        : "border border-line-strong text-ink hover:border-ink hover:bg-canvas-warm active:bg-surface focus-visible:outline-lithon-blue"
    );
  }
  // tertiary: text link with a spaced arrow and growing underline
  return cn(
    "group relative inline-flex min-h-11 items-center gap-2 font-[600] text-[15px] rounded-sm",
    "focus-visible:outline-2 focus-visible:outline-offset-4",
    tone === "dark"
      ? "text-white focus-visible:outline-white"
      : "text-lithon-blue hover:text-ink focus-visible:outline-lithon-blue",
    "transition-colors duration-200"
  );
}

function Inner({ children, variant, arrow, loading }: { children: ReactNode; variant: ButtonVariant; arrow: boolean; loading?: boolean }) {
  return (
    <>
      {loading && <Loader2 className="h-4 w-4 animate-spin motion-reduce:animate-none" aria-hidden="true" />}
      <span className={variant === "tertiary" ? "bg-[length:0%_1px] bg-left-bottom bg-no-repeat bg-gradient-to-r from-current to-current pb-0.5 transition-[background-size] duration-300 group-hover:bg-[length:100%_1px]" : undefined}>
        {children}
      </span>
      {(arrow || variant === "tertiary") && !loading && (
        <ArrowRight
          className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none"
          aria-hidden="true"
        />
      )}
    </>
  );
}

const OWN_PROPS = new Set(["variant", "tone", "size", "arrow", "className", "children", "loading", "type", "href", "external"]);

/** Native button attributes (onClick, aria-*, name, form…) without this component's own props. */
function nativeAttributes(props: NativeProps): ButtonHTMLAttributes<HTMLButtonElement> {
  return Object.fromEntries(Object.entries(props).filter(([key]) => !OWN_PROPS.has(key))) as ButtonHTMLAttributes<HTMLButtonElement>;
}

/**
 * The single button for the site (design.md §10). Renders a Next.js Link when
 * `href` is given, otherwise a native button. Never place two primary buttons
 * side by side.
 */
export function Button(props: ButtonProps) {
  const { variant = "primary", tone = "light", size = "md", arrow = false, className, children } = props;
  const cls = cn(classesFor(variant, tone, size), className);

  if (props.href !== undefined) {
    const { href, external } = props;
    if (external || href.startsWith("tel:") || href.startsWith("mailto:")) {
      return (
        <a href={href} className={cls} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
          <Inner variant={variant} arrow={arrow}>
            {children}
          </Inner>
        </a>
      );
    }
    return (
      <Link href={href} className={cls}>
        <Inner variant={variant} arrow={arrow}>
          {children}
        </Inner>
      </Link>
    );
  }

  const { loading, type = "button" } = props;
  const rest = nativeAttributes(props);
  return (
    <button {...rest} type={type} className={cls} aria-busy={loading || undefined} disabled={props.disabled || loading}>
      <Inner variant={variant} arrow={arrow} loading={loading}>
        {children}
      </Inner>
    </button>
  );
}
