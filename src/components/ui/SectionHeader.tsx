import React from "react";
import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";

interface SectionHeaderProps {
  eyebrow?: string;
  eyebrowIcon?: LucideIcon;
  title: React.ReactNode;
  subtitle?: string;
  action?: {
    label: string;
    href: string;
  };
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  eyebrowIcon: EyebrowIcon,
  title,
  subtitle,
  action,
  align = "left",
  className = "",
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`mb-10 sm:mb-12 ${
        isCenter ? "text-center max-w-3xl mx-auto" : "flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-gray-200/80 pb-6"
      } ${className}`}
    >
      <div className={isCenter ? "" : "max-w-2xl"}>
        {eyebrow && (
          <div
            className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/70 px-3.5 py-1 text-xs font-medium text-lithon-blue mb-3"
          >
            {EyebrowIcon && <EyebrowIcon className="h-3.5 w-3.5 text-lithon-blue" />}
            <span>{eyebrow}</span>
          </div>
        )}

        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-light tracking-tight text-gray-900 leading-tight text-balance">
          {title}
        </h2>

        {subtitle && (
          <p className="mt-2.5 text-sm sm:text-base text-gray-600 font-normal leading-relaxed text-pretty">
            {subtitle}
          </p>
        )}
      </div>

      {action && !isCenter && (
        <div className="shrink-0 pt-2 sm:pt-0">
          <Link
            href={action.href}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-lithon-blue hover:text-lithon-red transition-colors group"
          >
            <span>{action.label}</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      )}
    </div>
  );
}
