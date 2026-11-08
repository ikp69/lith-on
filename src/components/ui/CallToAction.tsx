import React from "react";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

interface CallToActionProps {
  eyebrow?: string;
  title: string;
  description: string;
  primaryAction?: {
    label: string;
    href: string;
  };
  secondaryAction?: {
    label: string;
    href: string;
    isPhone?: boolean;
  };
  variant?: "contrast" | "subtle";
  className?: string;
}

export function CallToAction({
  eyebrow = "Turnkey Engineering Proposal",
  title,
  description,
  primaryAction = {
    label: "Talk to an Expert",
    href: "/contact",
  },
  secondaryAction = {
    label: "+91-7000013009",
    href: "tel:+917000013009",
    isPhone: true,
  },
  variant = "contrast",
  className = "",
}: CallToActionProps) {
  if (variant === "subtle") {
    return (
      <section className={`px-4 sm:px-6 ${className}`}>
        <div className="mx-auto max-w-7xl rounded-2xl border border-gray-200 bg-canvas-offwhite p-8 sm:p-12 shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              {eyebrow && (
                <span className="inline-block rounded-full bg-blue-50 border border-blue-200 px-3 py-1 text-xs font-medium text-lithon-blue mb-3">
                  {eyebrow}
                </span>
              )}
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                {title}
              </h2>
              <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                {description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 shrink-0">
              {primaryAction && (
                <Link
                  href={primaryAction.href}
                  className="btn-primary"
                >
                  <span>{primaryAction.label}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              )}
              {secondaryAction && (
                <a
                  href={secondaryAction.href}
                  className="btn-outline"
                >
                  {secondaryAction.isPhone && <Phone className="h-4 w-4 text-lithon-blue" />}
                  <span>{secondaryAction.label}</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`px-4 sm:px-6 ${className}`}>
      <div className="mx-auto max-w-7xl rounded-3xl bg-lithon-blue p-8 sm:p-12 lg:p-14 text-white shadow-xl">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            {eyebrow && (
              <span className="inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-blue-100 mb-3">
                {eyebrow}
              </span>
            )}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              {title}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-blue-100 leading-relaxed font-normal">
              {description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0">
            {primaryAction && (
              <Link
                href={primaryAction.href}
                className="btn-primary"
              >
                <span>{primaryAction.label}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            )}
            {secondaryAction && (
              <a
                href={secondaryAction.href}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 hover:bg-white/20 px-6 py-3.5 text-xs font-semibold text-white transition-all backdrop-blur-md min-h-[44px]"
              >
                {secondaryAction.isPhone && <Phone className="h-4 w-4 text-white" />}
                <span>{secondaryAction.label}</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
