"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Menu, X, ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Solutions", href: "/solutions" },
  { name: "Products", href: "/products" },
  { name: "Applications", href: "/applications" },
  { name: "Resources", href: "/resources" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-3 z-50 w-full px-4 sm:px-6 transition-all duration-200">
      <div className="mx-auto max-w-6xl rounded-full bg-white/85 backdrop-blur-xl border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.06)] px-4 sm:px-6 py-2.5 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="relative block h-9 w-36 sm:h-10 sm:w-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F74530] rounded-full"
        >
          <Image
            src="/images/logo/logo-dark.png"
            alt="Lith-On Bharat Energy Logo"
            fill
            priority
            className="object-contain object-left"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="rounded-full px-3 py-1.5 text-xs xl:text-sm font-medium text-gray-700 hover:text-[#0B3388] hover:bg-gray-100/70 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Action / CTA Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+917000013009"
            className="flex items-center gap-1.5 text-xs font-semibold text-gray-600 hover:text-[#0B3388] transition-colors px-2 py-1"
          >
            <Phone className="h-3.5 w-3.5 text-[#0B3388]" />
            <span>+91-7000013009</span>
          </a>

          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-[#0B3388] hover:bg-[#082666] px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white shadow-sm hover:shadow transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F74530]"
          >
            <span>Talk to an Expert</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex items-center gap-1 sm:gap-2 lg:hidden">
          <a
            href="tel:+917000013009"
            aria-label="Direct Phone Line"
            className="flex h-11 w-11 items-center justify-center rounded-full text-gray-700 hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B3388]"
          >
            <Phone className="h-4 w-4 text-[#0B3388]" />
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setMobileMenuOpen(!mobileMenuOpen);
              }
            }}
            className="flex h-11 w-11 items-center justify-center rounded-full text-gray-700 hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F74530]"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="mx-auto mt-2 max-w-6xl rounded-2xl bg-white/95 backdrop-blur-xl border border-gray-200/80 p-5 shadow-xl lg:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile Navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-xl px-4 py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-100 hover:text-[#0B3388] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="mt-4 border-t border-gray-100 pt-4 flex flex-col gap-3">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-[#0B3388] px-5 py-3 text-sm font-semibold text-white shadow"
            >
              <span>Talk to an Expert</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>

            <div className="flex items-center justify-between text-xs text-gray-500 px-2 pt-1">
              <span>Noida Plant HQ:</span>
              <a href="tel:+917000013009" className="text-[#0B3388] font-bold">
                +91-7000013009
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
