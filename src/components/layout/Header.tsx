'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, ChevronDown } from 'lucide-react';
import { Button } from '@/components/system/Button';
import { MAIN_NAVIGATION, type NavItem } from '@/data/navigation';
import { MegaPanelContent } from './MegaMenu';
import { MobileNav } from './MobileNav';

const TOP_NAV: NavItem[] = MAIN_NAVIGATION;

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [visited, setVisited] = useState<string[]>([]);
  const pathname = usePathname();
  const openTimer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const closeTimer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Hysteresis: condense after 24px, expand again only above 8px, so the
    // state never flickers while hovering around one threshold.
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled((was) => (was ? y > 8 : y > 24));
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change. Adjusting state during render (rather than in
  // an effect) avoids an extra cascading render.
  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  }

  const clearTimers = useCallback(() => {
    if (openTimer.current) clearTimeout(openTimer.current);
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  const openPanel = useCallback((label: string) => {
    setOpenDropdown(label);
    setVisited((v) => (v.includes(label) ? v : [...v, label]));
  }, []);

  // Hover intent: a short delay before the first open; switching between
  // panels once one is open is immediate.
  const handleMouseEnter = useCallback(
    (label: string) => {
      clearTimers();
      if (openDropdown) {
        openPanel(label);
      } else {
        openTimer.current = setTimeout(() => openPanel(label), 90);
      }
    },
    [clearTimers, openDropdown, openPanel]
  );

  const handleMouseLeave = useCallback(() => {
    clearTimers();
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 180);
  }, [clearTimers]);

  const keepOpen = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  useEffect(() => clearTimers, [clearTimers]);

  // Escape closes the open panel and returns focus to its toggle.
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (!openDropdown) {
      return;
    }
    const header = headerRef.current;
    const toggle = header?.querySelector<HTMLButtonElement>(`[data-mega-toggle="${openDropdown}"]`);
    if (e.key === 'Escape') {
      setOpenDropdown(null);
      toggle?.focus();
      return;
    }
    if (e.key !== 'Tab' || !header || !toggle) {
      return;
    }
    // Panels sit after the header row in the DOM; route Tab so the open panel
    // follows its toggle: toggle → panel links → next top-level item.
    const panel = header.querySelector<HTMLElement>(`#mega-${openDropdown.toLowerCase()}`);
    const items = panel ? [...panel.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')] : [];
    if (items.length === 0) {
      return;
    }
    const target = e.target as HTMLElement;
    const after = () => {
      const all = [...header.querySelectorAll<HTMLElement>('nav[aria-label="Main"] a[href], nav[aria-label="Main"] button, a[href="/contact"]')];
      return all[all.indexOf(toggle) + 1];
    };
    if (!e.shiftKey && target === toggle) {
      e.preventDefault();
      items[0].focus();
    } else if (e.shiftKey && target === items[0]) {
      e.preventDefault();
      toggle.focus();
    } else if (!e.shiftKey && target === items.at(-1)) {
      e.preventDefault();
      setOpenDropdown(null);
      after()?.focus();
    }
  };
  // Focus leaving the header closes the panel.
  const onBlur = (e: React.FocusEvent) => {
    if (openDropdown && !headerRef.current?.contains(e.relatedTarget as Node | null)) {
      setOpenDropdown(null);
    }
  };

  return (
    <header
      ref={headerRef}
      onKeyDown={onKeyDown}
      onBlur={onBlur}
      data-scrolled={scrolled || undefined}
      style={{ viewTransitionName: 'site-header' }}
      className={`group/header sticky top-0 z-50 w-full border-b transition-[background-color,box-shadow,border-color,translate] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${
        scrolled ? '-translate-y-4' : 'translate-y-0'
      } ${
        scrolled || openDropdown
          ? 'border-line bg-white/85 shadow-[0_10px_30px_-18px_rgb(15_23_42/0.22)] backdrop-blur-md supports-[not(backdrop-filter:blur(0))]:bg-white'
          : 'border-line/60 bg-white'
      }`}
    >
      {/* G1 scroll state: the bar condenses from 80px to 64px by sliding up 16px
          while its contents move down 8px to stay centred. Transforms only, so
          nothing below the header shifts. */}
      <div className="container-site">
        <div
          className={`flex h-20 items-center justify-between gap-6 transition-[translate] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${
            scrolled ? 'translate-y-2' : 'translate-y-0'
          }`}
        >
          {/* Logo */}
          <Link
            href="/"
            className={`relative flex h-10 w-44 shrink-0 origin-left items-center rounded-lg transition-[scale] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lithon-blue motion-reduce:transition-none sm:h-11 sm:w-48 ${
              scrolled ? 'scale-[0.9]' : 'scale-100'
            }`}
          >
            <Image
              src="/images/logo/logo-dark.png"
              alt="Lith-On Bharat Energy Logo"
              fill
              sizes="(max-width: 640px) 176px, 192px"
              priority
              loading="eager"
              className="object-contain object-left"
            />
          </Link>

          {/* Desktop navigation: disclosure pattern (label link + panel toggle) */}
          <nav className="hidden lg:block" aria-label="Main">
            <ul className="flex items-center gap-1">
              {TOP_NAV.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== '/' && pathname.startsWith(item.href)) ||
                  (item.children?.some((c) => pathname === c.href.split('#')[0]) ?? false);
                const isOpen = openDropdown === item.label;
                const panelId = `mega-${item.label.toLowerCase()}`;
                return (
                  <li
                    key={item.label}
                    className="flex items-center"
                    onMouseEnter={() => handleMouseEnter(item.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      href={item.href}
                      aria-current={pathname === item.href ? 'page' : undefined}
                      className={`relative rounded-control py-2 pl-3 pr-1 text-sm font-[500] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lithon-blue ${
                        isActive || isOpen ? 'text-lithon-blue' : 'text-ink hover:text-lithon-blue'
                      }`}
                    >
                      {item.label}
                      {isActive && <span aria-hidden="true" className="absolute inset-x-3 -bottom-[3px] h-0.5 rounded-full bg-lithon-blue" />}
                    </Link>
                    <button
                      type="button"
                      data-mega-toggle={item.label}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      aria-label={`${item.label} menu`}
                      onClick={() => (isOpen ? setOpenDropdown(null) : openPanel(item.label))}
                      className={`flex h-9 w-7 items-center justify-center rounded-control transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lithon-blue ${
                        isOpen ? 'text-lithon-blue' : 'text-ink-3 hover:text-lithon-blue'
                      }`}
                    >
                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform duration-200 motion-reduce:transition-none ${isOpen ? 'rotate-180' : ''}`}
                        aria-hidden="true"
                      />
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <Button href="/contact" size="sm" arrow>
              Get quote
            </Button>
          </div>

          {/* Mobile: call + menu sheet (G3) */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="tel:+917000013009"
              aria-label="Call Lith-On, +91 70000 13009"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-lithon-blue transition-colors hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lithon-blue"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
            </a>
            <MobileNav open={mobileMenuOpen} onOpenChange={setMobileMenuOpen} pathname={pathname} />
          </div>
        </div>
      </div>

      {/* Desktop mega-menu panels. Content mounts on first open; closed panels are inert. */}
      {TOP_NAV.map((item) => {
        const isOpen = openDropdown === item.label;
        return (
          <div
            key={item.label}
            id={`mega-${item.label.toLowerCase()}`}
            inert={!isOpen}
            onMouseEnter={keepOpen}
            onMouseLeave={handleMouseLeave}
            className={`absolute inset-x-0 top-full hidden border-b border-line bg-white shadow-[0_24px_48px_-24px_rgb(15_23_42/0.18)] lg:block transition-[opacity,transform,visibility] duration-[250ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${
              isOpen ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-2 opacity-0'
            }`}
          >
            <div className="container-site py-10">{visited.includes(item.label) && <MegaPanelContent item={item} />}</div>
          </div>
        );
      })}

    </header>
  );
}
