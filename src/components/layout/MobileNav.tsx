"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { ArrowRight, ChevronDown, MessageCircle, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MAIN_NAVIGATION } from "@/data/navigation";
import { cn } from "@/lib/utils";

/**
 * G3 mobile navigation (audit §4). A full-screen sheet (Radix Dialog: focus
 * trap, Escape, scroll lock) with large rows, one expandable group at a time,
 * and a fixed bottom bar: "Request sizing" plus call and WhatsApp.
 * Sheet slides in over 400 ms; rows stagger 40 ms (CSS in globals.css).
 */

const WHATSAPP = `https://wa.me/917000013009?text=${encodeURIComponent(
  "Hello Lith-On Bharat Energy team, I would like to inquire about your BESS and lithium battery systems for my facility."
)}`;

export function MobileNav({ open, onOpenChange, pathname }: { open: boolean; onOpenChange: (open: boolean) => void; pathname: string }) {
  const [expanded, setExpanded] = useState<string | null>(null);
  const close = () => onOpenChange(false);

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Trigger asChild>
        <button
          type="button"
          aria-label="Open menu"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink transition-colors hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lithon-blue"
        >
          <span aria-hidden="true" className="flex w-[18px] flex-col gap-[5px]">
            <span className="h-[1.5px] w-full rounded-full bg-current" />
            <span className="h-[1.5px] w-full rounded-full bg-current" />
            <span className="h-[1.5px] w-2/3 rounded-full bg-current" />
          </span>
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="mobile-sheet-overlay fixed inset-0 z-[60] bg-black/30 lg:hidden" />
        <Dialog.Content
          aria-describedby={undefined}
          className="mobile-sheet fixed inset-0 z-[61] flex flex-col bg-white lg:hidden"
          onOpenAutoFocus={(e) => {
            // Focus the close button rather than the first link.
            e.preventDefault();
            (e.currentTarget as HTMLElement).querySelector<HTMLElement>("[data-sheet-close]")?.focus();
          }}
        >
          <Dialog.Title className="sr-only">Menu</Dialog.Title>

          {/* Top bar mirrors the header */}
          <div className="flex h-20 shrink-0 items-center justify-between border-b border-line px-4 sm:px-6">
            <Link href="/" onClick={close} aria-label="Lith-On Bharat Energy home" className="focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lithon-blue">
              <Image src="/images/logo/logo-dark.png" alt="" width={532} height={133} className="h-9 w-auto" />
            </Link>
            <Dialog.Close asChild>
              <button
                type="button"
                data-sheet-close=""
                aria-label="Close menu"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lithon-blue"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </Dialog.Close>
          </div>

          {/* Groups */}
          <nav aria-label="Main" className="flex-1 overflow-y-auto overscroll-contain px-4 pb-8 sm:px-6" data-lenis-prevent="">
            <ul>
              {MAIN_NAVIGATION.map((item, i) => {
                const isOpen = expanded === item.label;
                const panelId = `sheet-${item.label.toLowerCase()}`;
                const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href)) || (item.children?.some((c) => pathname === c.href.split("#")[0]) ?? false);
                const links = [...(item.children ?? []), ...(item.more ?? [])];
                return (
                  <li key={item.label} data-nav-row="" style={{ animationDelay: `${80 + i * 40}ms` }} className="border-b border-line">
                    <div className="flex items-center">
                      <Link
                        href={item.href}
                        onClick={close}
                        aria-current={pathname === item.href ? "page" : undefined}
                        className={cn(
                          "flex min-h-16 flex-1 items-center text-heading-2 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lithon-blue",
                          isActive ? "text-lithon-blue" : "text-ink"
                        )}
                      >
                        {item.label}
                      </Link>
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        aria-label={`${item.label} links`}
                        onClick={() => setExpanded(isOpen ? null : item.label)}
                        className="flex h-12 w-12 items-center justify-center rounded-full text-ink-2 hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lithon-blue"
                      >
                        <ChevronDown className={cn("h-5 w-5 transition-transform duration-300 motion-reduce:transition-none", isOpen && "rotate-180")} aria-hidden="true" />
                      </button>
                    </div>
                    <div
                      id={panelId}
                      className={cn(
                        "grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none",
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      )}
                    >
                      <div className="overflow-hidden" inert={!isOpen}>
                        <ul className="pb-5">
                          {links.map((c) => (
                            <li key={c.href}>
                              <Link
                                href={c.href}
                                onClick={close}
                                className="flex min-h-11 items-baseline justify-between gap-4 py-1.5 focus-visible:outline-2 focus-visible:outline-lithon-blue"
                              >
                                <span className="text-body text-ink-2">{c.label}</span>
                                {c.meta && <span className="tabular shrink-0 text-small text-ink-3">{c.meta}</span>}
                              </Link>
                            </li>
                          ))}
                          <li className="pt-2">
                            <Link href={item.href} onClick={close} className="inline-flex min-h-11 items-center gap-2 text-body font-[500] text-lithon-blue">
                              {item.overview}
                              <ArrowRight className="h-4 w-4" aria-hidden="true" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
            <div data-nav-row="" style={{ animationDelay: "320ms" }} className="mt-8 space-y-1 text-small text-ink-3">
              <a href="mailto:tech@lith-onbharat.com" className="inline-flex min-h-11 items-center text-lithon-blue">
                tech@lith-onbharat.com
              </a>
              <p>Arihant Business Centre, Sector 136, Noida</p>
            </div>
          </nav>

          {/* Fixed actions */}
          <div className="shrink-0 border-t border-line bg-white px-4 pt-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:px-6">
            <Link
              href="/contact?type=assessment"
              onClick={close}
              className="flex h-13 min-h-12 w-full items-center justify-center gap-2 rounded-full bg-lithon-red-ink text-body font-[500] text-white transition-colors hover:bg-lithon-red-ink-hover active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lithon-blue"
            >
              Request sizing
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <div className="mt-3 grid grid-cols-2 gap-3">
              <a href="tel:+917000013009" className="flex min-h-11 items-center justify-center gap-2 rounded-full border border-line text-small font-[500] text-ink hover:bg-surface">
                <Phone className="h-4 w-4 text-lithon-blue" aria-hidden="true" />
                Call
              </a>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="flex min-h-11 items-center justify-center gap-2 rounded-full border border-line text-small font-[500] text-ink hover:bg-surface">
                <MessageCircle className="h-4 w-4 text-lithon-blue" aria-hidden="true" />
                WhatsApp
              </a>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
