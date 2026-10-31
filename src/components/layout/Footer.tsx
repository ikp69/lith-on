"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  MapPin, 
  Phone, 
  Mail, 
  ShieldCheck, 
  AlertTriangle, 
  ExternalLink,
  Linkedin,
  X
} from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";

export function Footer() {
  const [fraudModalOpen, setFraudModalOpen] = useState(false);

  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-300">
      {/* Top Banner: Verification & Certifications */}
      <div className="border-b border-slate-800/80 bg-slate-900/50 px-6 py-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4 items-center">
            <div className="md:col-span-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Compliance Trifecta
              </span>
              <p className="mt-1 text-sm font-medium text-white">
                Simultaneously Certified &amp; Standardized
              </p>
            </div>
            <div className="flex items-center gap-3 rounded-lg border border-slate-800 bg-slate-900/80 p-3">
              <ShieldCheck className="h-6 w-6 text-blue-400 shrink-0" />
              <div>
                <div className="text-xs font-bold text-white">IEC 61508</div>
                <div className="text-[11px] text-slate-400">Functional Safety SIL 2 / SIL 3</div>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-lg border border-slate-800 bg-slate-900/80 p-3">
              <ShieldCheck className="h-6 w-6 text-blue-400 shrink-0" />
              <div>
                <div className="text-xs font-bold text-white">IEC 61850</div>
                <div className="text-[11px] text-slate-400">Utility Substation Automation</div>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-lg border border-slate-800 bg-slate-900/80 p-3">
              <ShieldCheck className="h-6 w-6 text-emerald-400 shrink-0" />
              <div>
                <div className="text-xs font-bold text-white">BIS Certified</div>
                <div className="text-[11px] text-slate-400">Bureau of Indian Standards</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Information */}
      <div className="mx-auto max-w-7xl px-6 py-14 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Company Brief & Coordinates */}
          <div className="lg:col-span-2">
            <div className="relative h-11 w-44 mb-5">
              <Image
                src="/images/logo/logo-light.png"
                alt="Lith-On Bharat Energy Logo"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="text-sm leading-relaxed text-slate-400 max-w-sm">
              Lith-On Bharat Energy is an Indian industrial technology company manufacturing utility-scale 
              Battery Energy Storage Systems (BESS), solar-storage microgrids, and heavy-duty lithium packs.
            </p>

            <div className="mt-6 space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-blue-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Manufacturing Plant &amp; HQ:</strong><br />
                  Plot No. 12, Sector 136, Noida, Uttar Pradesh 201305, India
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-blue-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">R&amp;D &amp; Sourcing Hub:</strong><br />
                  Foshan, Guangdong Province, China
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-[#F74530] shrink-0" />
                <a href="tel:+917000013009" className="hover:text-white transition-colors">
                  +91-7000013009
                </a>
                <span className="text-slate-600">/</span>
                <a href="tel:+917000017005" className="hover:text-white transition-colors">
                  +91-7000017005
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-[#F74530] shrink-0" />
                <a href="mailto:tech@lith-onbharat.com" className="hover:text-white transition-colors">
                  tech@lith-onbharat.com
                </a>
              </div>
              <div className="flex items-center gap-2.5 pt-1">
                <Linkedin className="h-4 w-4 text-[#0B3388] shrink-0" />
                <a
                  href="https://www.linkedin.com/company/lith-on-bharat-energy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-medium text-slate-300 hover:text-white transition-colors"
                >
                  <span>Lith-On on LinkedIn</span>
                  <ExternalLink className="h-3 w-3 text-slate-500" />
                </a>
              </div>
            </div>
          </div>

          {/* Products Column */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-white">Products</div>
            <ul className="mt-4 space-y-2.5 text-xs text-slate-400">
              <li>
                <Link href="/products/magna-ci" className="hover:text-white transition-colors">
                  Magna-C&amp;I 260 kWh
                </Link>
              </li>
              <li>
                <Link href="/products/lithon-50" className="hover:text-white transition-colors">
                  Lith-On-50 (48 kWh)
                </Link>
              </li>
              <li>
                <Link href="/products/lt215" className="hover:text-white transition-colors">
                  LT215 (215 kWh Cabinet)
                </Link>
              </li>
              <li>
                <Link href="/products/max-20hc" className="hover:text-white transition-colors">
                  Max-20HC-5000 (5.0 MWh)
                </Link>
              </li>
              <li>
                <Link href="/products" className="font-semibold text-blue-400 hover:text-blue-300 transition-colors">
                  All Products &amp; Matrix →
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions Column */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-white">Solutions</div>
            <ul className="mt-4 space-y-2.5 text-xs text-slate-400">
              <li>
                <Link href="/solutions" className="hover:text-white transition-colors">
                  Commercial &amp; Industrial BESS
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-white transition-colors">
                  Telecom Tower Storage
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-white transition-colors">
                  Residential Energy Storage
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-white transition-colors">
                  Renewable Energy Integration
                </Link>
              </li>
              <li>
                <Link href="/applications" className="hover:text-white transition-colors">
                  Hospital &amp; Critical Backup
                </Link>
              </li>
            </ul>
          </div>

          {/* About Column */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-white">About &amp; Trust</div>
            <ul className="mt-4 space-y-2.5 text-xs text-slate-400">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Company &amp; Neoclo Energy
                </Link>
              </li>
              <li>
                <Link href="/capabilities" className="hover:text-white transition-colors">
                  Noida 20,000 sq. ft. Plant
                </Link>
              </li>
              <li>
                <Link href="/technology" className="hover:text-white transition-colors">
                  IceBattery® Thermal Physics
                </Link>
              </li>
              <li>
                <Link href="/about#certifications" className="hover:text-white transition-colors">
                  Verified Certifications
                </Link>
              </li>
              <li>
                <Link href="/about#timeline" className="hover:text-white transition-colors">
                  Company Timeline &amp; History
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources & Partners Column */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-white">Resources &amp; Partners</div>
            <ul className="mt-4 space-y-2.5 text-xs text-slate-400">
              <li>
                <Link href="/resources" className="hover:text-white transition-colors">
                  E-Catalogue &amp; Datasheets
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:text-white transition-colors">
                  Technical FAQs (35+)
                </Link>
              </li>
              <li>
                <Link href="/distributor" className="hover:text-white transition-colors">
                  Become a Distributor
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white transition-colors">
                  Careers at Lith-On
                </Link>
              </li>
              <li>
                <Link href="/distributor#apply" className="hover:text-white transition-colors">
                  Strategic Partnerships
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Anti-Fraud Recruitment Alert Bar */}
        <div className="mt-12 rounded-xl border border-amber-500/20 bg-amber-500/10 p-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2.5 text-xs text-amber-200">
              <AlertTriangle className="h-4 w-4 text-amber-400 shrink-0" />
              <span>
                <strong>Important Public Notice:</strong> Beware of fraudulent recruitment schemes or fee solicitations in the name of Lith-On Bharat Energy.
              </span>
            </div>
            <button
              type="button"
              onClick={() => setFraudModalOpen(true)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setFraudModalOpen(true);
                }
              }}
              className="inline-flex items-center gap-1 text-xs font-semibold text-amber-300 hover:text-white underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded"
            >
              <span>Read Advisory</span>
              <ExternalLink className="h-3 w-3" />
            </button>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="mt-10 border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 LITH-ON BHARAT ENERGY PRIVATE LIMITED. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/warranty-and-support" className="hover:text-white transition-colors">
              10-Year Warranty Terms
            </Link>
            <Link href="/sustainability" className="hover:text-white transition-colors">
              GRAP &amp; ESG Policy
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Noida Factory Visits
            </Link>
          </div>
        </div>
      </div>

      {/* Recruitment Fraud Advisory Dialog Modal */}
      <Dialog.Root open={fraudModalOpen} onOpenChange={setFraudModalOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
          <Dialog.Content className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-white/15 bg-slate-900 p-6 shadow-2xl duration-200 sm:rounded-2xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2 text-amber-400">
                <AlertTriangle className="h-5 w-5" />
                <Dialog.Title className="text-base font-bold text-white">
                  Fraudulent Recruitment &amp; Payment Advisory
                </Dialog.Title>
              </div>
              <Dialog.Close asChild>
                <button
                  type="button"
                  className="rounded-lg p-1 text-slate-400 hover:text-white hover:bg-slate-800"
                  aria-label="Close dialog"
                >
                  <X className="h-5 w-5" />
                </button>
              </Dialog.Close>
            </div>

            <Dialog.Description className="space-y-3 text-xs leading-relaxed text-slate-300">
              <p>
                It has come to our notice that certain unscrupulous individuals or agencies are falsely claiming to represent 
                <strong> LITH-ON BHARAT ENERGY PRIVATE LIMITED</strong> and soliciting application fees, refundable deposits, 
                or interview charges for job offers.
              </p>
              <div className="rounded-lg bg-slate-950 p-3 text-slate-200 border border-white/5 space-y-1.5">
                <p><strong>1. Zero Fee Policy:</strong> Lith-On Bharat Energy NEVER asks candidates for any fees, securities, or money transfers at any stage of recruitment.</p>
                <p><strong>2. Official Domain:</strong> All official emails are dispatched exclusively from verified domains ending in <code>@lith-onbharat.com</code> or <code>@lith-on.com</code>.</p>
                <p><strong>3. Reporting:</strong> If you receive suspicious communications, report immediately to <a href="mailto:tech@lith-onbharat.com" className="text-[#F74530] underline">tech@lith-onbharat.com</a> or call our Noida headquarters at <a href="tel:+917000013009" className="text-[#F74530] underline">+91-7000013009</a>.</p>
              </div>
            </Dialog.Description>

            <div className="mt-2 flex justify-end">
              <Dialog.Close asChild>
                <button
                  type="button"
                  className="rounded-lg bg-slate-800 hover:bg-slate-700 px-4 py-2 text-xs font-semibold text-white"
                >
                  I Understand
                </button>
              </Dialog.Close>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </footer>
  );
}
