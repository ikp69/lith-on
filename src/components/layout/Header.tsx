"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    if (!isHomePage) return;
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  return (
    <header
      className={`z-50 w-full px-3 sm:px-6 transition-all duration-300 ${
        isHomePage
          ? "fixed top-0 inset-x-0 pointer-events-none"
          : "sticky top-0 pointer-events-auto"
      }`}
    >
      <div
        className={`mx-auto max-w-5xl xl:max-w-6xl rounded-full bg-white/95 backdrop-blur-xl border border-gray-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.05)] px-4 sm:px-5 py-1.5 flex items-center justify-between pointer-events-auto transition-all duration-300 ${
          isHomePage
            ? scrolled
              ? "mt-2 sm:mt-2.5"
              : "mt-4 sm:mt-5 md:mt-6"
            : "mt-2 sm:mt-2.5"
        }`}
      >
        {/* Brand Logo with generous breathing room */}
        <Link
          href="/"
          className="relative block h-8 w-32 sm:h-8.5 sm:w-36 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F74530] rounded-full my-0.5"
        >
          <Image
            src="/images/logo/logo-dark.png"
            alt="Lith-On Bharat Energy Logo"
            fill
            sizes="(max-width: 640px) 128px, 144px"
            priority
            loading="eager"
            className="object-contain object-left"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5" aria-label="Main Navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="rounded-full px-3 py-1 text-xs font-medium text-gray-700 hover:text-lithon-blue hover:bg-gray-100/60 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Action / CTA Buttons */}
        <div className="hidden lg:flex items-center gap-2.5">
          <a
            href="tel:+917000013009"
            className="flex items-center gap-1.5 text-[11px] font-normal text-gray-500 hover:text-gray-900 transition-colors px-2 py-1"
          >
            <Phone className="h-3 w-3 text-gray-400" />
            <span>+91-7000013009</span>
          </a>

          <Link
            href="/contact"
            className="btn-primary inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white shadow-xs hover:shadow transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
            style={{ minHeight: '34px', padding: '0.4rem 1.1rem' }}
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
            className="flex h-11 w-11 items-center justify-center rounded-full text-gray-700 hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lithon-blue"
          >
            <Phone className="h-4 w-4 text-lithon-blue" />
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
            className="flex h-11 w-11 items-center justify-center rounded-full text-gray-700 hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lithon-red"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="mx-auto mt-2 max-w-6xl rounded-2xl bg-white/95 backdrop-blur-xl border border-gray-200/80 p-5 shadow-xl lg:hidden pointer-events-auto">
          <nav className="flex flex-col gap-1" aria-label="Mobile Navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-xl px-4 py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-100 hover:text-lithon-blue transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="mt-4 border-t border-gray-100 pt-4 flex flex-col gap-3">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-lithon-blue px-5 py-3 text-sm font-semibold text-white shadow"
            >
              <span>Talk to an Expert</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>

            <div className="flex items-center justify-between text-xs text-gray-500 px-2 pt-1">
              <span>Noida Plant HQ:</span>
              <a href="tel:+917000013009" className="text-lithon-blue font-bold">
                +91-7000013009
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
