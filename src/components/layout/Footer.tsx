"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ShieldCheck, 
  Zap,
  Award,
  Wind,
  CheckCircle2,
  AlertTriangle, 
  ExternalLink,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  Sparkles,
  Bot,
  Copy,
  Check,
  X
} from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";

export function Footer() {
  const [fraudModalOpen, setFraudModalOpen] = useState(false);
  const [aiModalOpen, setAiModalOpen] = useState(false);
  const [copiedPrompt, setCopiedPrompt] = useState(false);

  const aiPromptText = 
    "Summarize Lith-On Bharat Energy: Indian manufacturer of Battery Energy Storage Systems (BESS) based in Noida (20,000 sq.ft plant) and Foshan, China. Highlight their patented IceBattery® 60°C thermal coating, sub-10ms UPS cutover, LiFePO4 chemistry, and 100% CAQM GRAP winter compliance.";

  const handleCopyPrompt = async () => {
    try {
      await navigator.clipboard.writeText(aiPromptText);
      setCopiedPrompt(true);
      setTimeout(() => setCopiedPrompt(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <footer className="border-t border-gray-200 bg-white text-gray-900" data-credits>
      <div className="mx-auto max-w-7xl border-x border-gray-200">
        
        {/* ROW 1: 5-COLUMN ARCHITECTURAL GRID WITH VERTICAL DIVIDERS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 divide-y sm:divide-y-0 lg:divide-x divide-gray-200 border-b border-gray-200">
          
          {/* Column 1: Platform / Products */}
          <div className="p-6 sm:p-7 lg:p-8">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-gray-900 uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-lithon-red" />
              <span>PRODUCTS</span>
            </div>
            <ul className="mt-5 space-y-3 text-xs text-gray-600">
              <li>
                <Link href="/products/magna-ci" className="hover:text-gray-950 hover:translate-x-0.5 transition-all block">
                  Magna-C&amp;I 260 kWh
                </Link>
              </li>
              <li>
                <Link href="/products/lithon-50" className="hover:text-gray-950 hover:translate-x-0.5 transition-all block">
                  Lith-On-50 (48 kWh)
                </Link>
              </li>
              <li>
                <Link href="/products/lt215" className="hover:text-gray-950 hover:translate-x-0.5 transition-all block">
                  LT215 Container (215 kWh)
                </Link>
              </li>
              <li>
                <Link href="/products/max-20hc" className="hover:text-gray-950 hover:translate-x-0.5 transition-all block">
                  Max-20HC-5000 (5.0 MWh)
                </Link>
              </li>
              <li>
                <Link href="/products" className="font-semibold text-lithon-blue hover:text-lithon-blue-hover hover:translate-x-0.5 transition-all block pt-1">
                  All Products Matrix &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Applications & Sectors */}
          <div className="p-6 sm:p-7 lg:p-8 sm:border-t-0 border-t border-gray-200">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-gray-900 uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
              <span>APPLICATIONS</span>
            </div>
            <ul className="mt-5 space-y-3 text-xs text-gray-600">
              <li>
                <Link href="/applications#healthcare" className="hover:text-gray-950 hover:translate-x-0.5 transition-all block">
                  Hospitals &amp; Critical Care (&lt;10ms)
                </Link>
              </li>
              <li>
                <Link href="/applications#industrial" className="hover:text-gray-950 hover:translate-x-0.5 transition-all block">
                  Heavy Industrial Manufacturing
                </Link>
              </li>
              <li>
                <Link href="/applications#residential" className="hover:text-gray-950 hover:translate-x-0.5 transition-all block">
                  High-Rise Housing Societies
                </Link>
              </li>
              <li>
                <Link href="/applications#universities" className="hover:text-gray-950 hover:translate-x-0.5 transition-all block">
                  Universities &amp; Campuses
                </Link>
              </li>
              <li>
                <Link href="/applications#ev" className="hover:text-gray-950 hover:translate-x-0.5 transition-all block">
                  EV Fast-Charging Hubs
                </Link>
              </li>
              <li>
                <Link href="/applications#defense" className="hover:text-gray-950 hover:translate-x-0.5 transition-all block">
                  Defense &amp; Remote Microgrids
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Technology & Moats */}
          <div className="p-6 sm:p-7 lg:p-8 border-t lg:border-t-0 border-gray-200">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-gray-900 uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
              <span>TECHNOLOGY</span>
            </div>
            <ul className="mt-5 space-y-3 text-xs text-gray-600">
              <li>
                <Link href="/technology#icebattery" className="hover:text-gray-950 hover:translate-x-0.5 transition-all block">
                  IceBattery® 60°C Physics
                </Link>
              </li>
              <li>
                <Link href="/technology#waveform" className="hover:text-gray-950 hover:translate-x-0.5 transition-all block">
                  Sub-10ms UPS Cutover Waveform
                </Link>
              </li>
              <li>
                <Link href="/technology#flow" className="hover:text-gray-950 hover:translate-x-0.5 transition-all block">
                  Dynamic Energy Flow Visualizer
                </Link>
              </li>
              <li>
                <Link href="/technology#stack" className="hover:text-gray-950 hover:translate-x-0.5 transition-all block">
                  Full-Stack BMS / PCS / EMS
                </Link>
              </li>
              <li>
                <Link href="/technology#map" className="hover:text-gray-950 hover:translate-x-0.5 transition-all block">
                  Pan-India Installation Map
                </Link>
              </li>
              <li>
                <Link href="/why-lith-on" className="hover:text-gray-950 hover:translate-x-0.5 transition-all block">
                  The 7 Structural Moats Stack
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Tools & Resources */}
          <div className="p-6 sm:p-7 lg:p-8 border-t sm:border-t-0 border-gray-200">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-gray-900 uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
              <span>RESOURCES</span>
            </div>
            <ul className="mt-5 space-y-3 text-xs text-gray-600">
              <li>
                <Link href="/calculator" className="hover:text-gray-950 hover:translate-x-0.5 transition-all block font-medium text-lithon-red">
                  Diesel Savings &amp; ROI Calculator
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-gray-950 hover:translate-x-0.5 transition-all block">
                  Audited Customer Case Studies
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:text-gray-950 hover:translate-x-0.5 transition-all block">
                  Technical Engineering FAQs (35+)
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-gray-950 hover:translate-x-0.5 transition-all block">
                  E-Catalogue &amp; Datasheets
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="hover:text-gray-950 hover:translate-x-0.5 transition-all block">
                  CAQM GRAP Compliance Guide
                </Link>
              </li>
              <li>
                <Link href="/warranty-and-support" className="hover:text-gray-950 hover:translate-x-0.5 transition-all block">
                  10-Year Manufacturer Warranty
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Company & Leadership */}
          <div className="p-6 sm:p-7 lg:p-8 border-t lg:border-t-0 border-gray-200">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-gray-900 uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
              <span>COMPANY</span>
            </div>
            <ul className="mt-5 space-y-3 text-xs text-gray-600">
              <li>
                <Link href="/about" className="hover:text-gray-950 hover:translate-x-0.5 transition-all block">
                  About Lith-On Bharat Energy
                </Link>
              </li>
              <li>
                <Link href="/capabilities" className="hover:text-gray-950 hover:translate-x-0.5 transition-all block">
                  Noida 20,000 sq.ft. Plant
                </Link>
              </li>
              <li>
                <Link href="/capabilities#foshan" className="hover:text-gray-950 hover:translate-x-0.5 transition-all block">
                  Foshan International R&amp;D Hub
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-gray-950 hover:translate-x-0.5 transition-all block">
                  Careers at Lith-On
                </Link>
              </li>
              <li>
                <Link href="/distributor" className="hover:text-gray-950 hover:translate-x-0.5 transition-all block">
                  Become an Authorized Distributor
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-950 hover:translate-x-0.5 transition-all block">
                  Contact Us &amp; Factory Visits
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* ROW 2: BRAND LOGO, GLOBAL OFFICES & VERIFIED CERTIFICATIONS */}
        <div className="p-6 sm:p-7 lg:p-8 border-b border-gray-200 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          {/* Brand Identity & Office Location Badges */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
            <Link href="/" className="relative h-8 w-36 shrink-0 block" aria-label="Lith-On Bharat Energy Homepage">
              <Image
                src="/images/logo/logo-dark.png"
                alt="Lith-On Bharat Energy"
                fill
                sizes="(max-width: 640px) 144px, 160px"
                className="object-contain object-left"
              />
            </Link>

            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="text-gray-400 font-medium">Offices</span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-gray-50 border border-gray-200 px-3 py-1 text-xs font-medium text-gray-800 shadow-2xs">
                <span className="h-2 w-2 rounded-full bg-emerald-500 motion-safe:animate-pulse" />
                <span>Noida (HQ &amp; Plant), IN</span>
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-gray-50 border border-gray-200 px-3 py-1 text-xs font-medium text-gray-800 shadow-2xs">
                <span className="h-2 w-2 rounded-full bg-lithon-blue" />
                <span>Foshan (R&amp;D Hub), CN</span>
              </span>
            </div>
          </div>

          {/* Compliance Trifecta & Industry Badges */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8 pt-2 lg:pt-0">
            {/* IEC 61508 */}
            <div className="flex flex-col items-center text-center group">
              <div className="h-7 w-7 rounded-md bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-700 mb-1 group-hover:border-lithon-blue transition-colors">
                <ShieldCheck className="h-3.5 w-3.5 text-lithon-blue" />
              </div>
              <span className="text-[10px] font-bold tracking-tight text-gray-900 uppercase">IEC 61508</span>
              <span className="text-[9px] text-gray-500 font-medium">SIL 2 / SIL 3</span>
            </div>

            {/* IEC 61850 */}
            <div className="flex flex-col items-center text-center group">
              <div className="h-7 w-7 rounded-md bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-700 mb-1 group-hover:border-lithon-blue transition-colors">
                <Zap className="h-3.5 w-3.5 text-lithon-blue" />
              </div>
              <span className="text-[10px] font-bold tracking-tight text-gray-900 uppercase">IEC 61850</span>
              <span className="text-[9px] text-gray-500 font-medium">Substation</span>
            </div>

            {/* BIS Certified */}
            <div className="flex flex-col items-center text-center group">
              <div className="h-7 w-7 rounded-md bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-700 mb-1 group-hover:border-emerald-600 transition-colors">
                <Award className="h-3.5 w-3.5 text-emerald-600" />
              </div>
              <span className="text-[10px] font-bold tracking-tight text-gray-900 uppercase">BIS Certified</span>
              <span className="text-[9px] text-gray-500 font-medium">Indian Standards</span>
            </div>

            {/* CAQM GRAP */}
            <div className="flex flex-col items-center text-center group">
              <div className="h-7 w-7 rounded-md bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-700 mb-1 group-hover:border-cyan-600 transition-colors">
                <Wind className="h-3.5 w-3.5 text-cyan-600" />
              </div>
              <span className="text-[10px] font-bold tracking-tight text-gray-900 uppercase">CAQM GRAP</span>
              <span className="text-[9px] text-gray-500 font-medium">100% NCR Diesel Ban</span>
            </div>

            {/* ISO 9001/14001 */}
            <div className="flex flex-col items-center text-center group">
              <div className="h-7 w-7 rounded-md bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-700 mb-1 group-hover:border-amber-600 transition-colors">
                <CheckCircle2 className="h-3.5 w-3.5 text-amber-600" />
              </div>
              <span className="text-[10px] font-bold tracking-tight text-gray-900 uppercase">ISO 9001/14001</span>
              <span className="text-[9px] text-gray-500 font-medium">Factory Tested</span>
            </div>
          </div>
        </div>

        {/* ROW 3: AI ASSISTANT TRIGGER, LEGAL LINKS & SOCIALS */}
        <div className="p-6 sm:p-7 lg:p-8 border-b border-gray-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 text-xs text-gray-600">
          
          {/* Ask AI for Summary Feature */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setAiModalOpen(true)}
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 hover:bg-gray-100 px-3.5 py-1.5 text-xs font-medium text-gray-800 transition-all shadow-2xs hover:border-gray-300"
            >
              <Bot className="h-3.5 w-3.5 text-lithon-red" />
              <span>Ask AI for a summary about Lith-On</span>
              <Sparkles className="h-3 w-3 text-amber-500" />
            </button>
          </div>

          {/* Legal and Technical Policies */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs">
            <Link href="/warranty-and-support" className="hover:text-gray-950 transition-colors">
              10-Year Warranty Terms
            </Link>
            <Link href="/sustainability" className="hover:text-gray-950 transition-colors">
              GRAP &amp; ESG Policy
            </Link>
            <button
              type="button"
              onClick={() => setFraudModalOpen(true)}
              className="inline-flex items-center gap-1 font-medium text-amber-600 hover:text-amber-700 transition-colors"
            >
              <AlertTriangle className="h-3 w-3 text-amber-500" />
              <span>Fraud Advisory</span>
            </button>
            <Link href="/technology#scada" className="hover:text-gray-950 transition-colors">
              Live SCADA Telemetry
            </Link>
            <Link href="/contact" className="hover:text-gray-950 transition-colors">
              Noida Plant Audit
            </Link>
          </div>

          {/* Follow Us / Socials */}
          <div className="flex items-center gap-3 text-gray-500">
            <span className="text-xs font-medium text-gray-700">Follow Us</span>
            <a
              href="https://www.linkedin.com/company/lith-on-bharat-energy"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Lith-On on LinkedIn"
              className="h-7 w-7 rounded-full bg-gray-100 hover:bg-lithon-blue hover:text-white flex items-center justify-center text-gray-700 transition-colors"
            >
              <Linkedin className="h-3.5 w-3.5" />
            </a>
            <a
              href="https://www.youtube.com/@Lith-OnBharatEnergy"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Lith-On on YouTube"
              className="h-7 w-7 rounded-full bg-gray-100 hover:bg-red-600 hover:text-white flex items-center justify-center text-gray-700 transition-colors"
            >
              <Youtube className="h-3.5 w-3.5" />
            </a>
            <a
              href="mailto:tech@lith-onbharat.com"
              aria-label="Email Lith-On Engineering"
              className="h-7 w-7 rounded-full bg-gray-100 hover:bg-gray-900 hover:text-white flex items-center justify-center text-gray-700 transition-colors"
            >
              <Mail className="h-3.5 w-3.5" />
            </a>
            <a
              href="tel:+917000013009"
              aria-label="Call Lith-On Headquarters"
              className="h-7 w-7 rounded-full bg-gray-100 hover:bg-lithon-red hover:text-white flex items-center justify-center text-gray-700 transition-colors"
            >
              <Phone className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        {/* ROW 4: COPYRIGHT & AGENT READINESS ATTRIBUTION */}
        <div className="p-6 sm:p-7 lg:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-gray-500">
          <div>
            © 2026 LITH-ON BHARAT ENERGY PRIVATE LIMITED. All rights reserved.
          </div>
          <div className="flex items-center gap-3 text-gray-400">
            <span>Autonomous AI Agent &amp; LLM Indexable</span>
            <span>•</span>
            <span>250 MWh Annual Noida Production</span>
          </div>
        </div>

      </div>

      {/* DIALOG 1: RECRUITMENT FRAUD ADVISORY */}
      <Dialog.Root open={fraudModalOpen} onOpenChange={setFraudModalOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
          <Dialog.Content className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-gray-200 bg-white p-6 shadow-2xl duration-200 sm:rounded-2xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95">
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <div className="flex items-center gap-2 text-amber-600">
                <AlertTriangle className="h-5 w-5" />
                <Dialog.Title className="text-base font-bold text-gray-900">
                  Fraudulent Recruitment &amp; Payment Advisory
                </Dialog.Title>
              </div>
              <Dialog.Close asChild>
                <button
                  type="button"
                  className="rounded-lg p-1 text-gray-400 hover:text-gray-900 hover:bg-gray-100"
                  aria-label="Close dialog"
                >
                  <X className="h-5 w-5" />
                </button>
              </Dialog.Close>
            </div>

            <Dialog.Description asChild>
              <div className="space-y-3 text-xs leading-relaxed text-gray-600">
                <p>
                  It has come to our notice that certain fraudulent entities or recruitment consultancies are falsely claiming to represent 
                  <strong> LITH-ON BHARAT ENERGY PRIVATE LIMITED</strong> and soliciting application fees, interview charges, or security deposits for employment opportunities.
                </p>
                <div className="rounded-lg bg-amber-50 p-3.5 text-amber-950 border border-amber-200/80 space-y-1.5">
                  <p><strong>1. Strict Zero-Fee Policy:</strong> Lith-On Bharat Energy NEVER demands any money, refundable deposits, or processing fees at any stage of recruitment.</p>
                  <p><strong>2. Official Domains:</strong> All genuine communications originate exclusively from <code>@lith-onbharat.com</code> or <code>@lith-on.com</code>.</p>
                  <p><strong>3. Immediate Reporting:</strong> Forward fraudulent solicitations to <a href="mailto:tech@lith-onbharat.com" className="text-lithon-red font-semibold underline">tech@lith-onbharat.com</a> or phone our Noida plant directly at <a href="tel:+917000013009" className="text-lithon-red font-semibold underline">+91-7000013009</a>.</p>
                </div>
              </div>
            </Dialog.Description>

            <div className="mt-2 flex justify-end">
              <Dialog.Close asChild>
                <button
                  type="button"
                  className="rounded-full bg-gray-900 hover:bg-gray-800 px-5 py-2 text-xs font-semibold text-white"
                >
                  I Understand
                </button>
              </Dialog.Close>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      {/* DIALOG 2: ASK AI ABOUT LITH-ON PROMPT HELPER */}
      <Dialog.Root open={aiModalOpen} onOpenChange={setAiModalOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
          <Dialog.Content className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-gray-200 bg-white p-6 shadow-2xl duration-200 sm:rounded-2xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95">
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <div className="flex items-center gap-2 text-gray-900">
                <Bot className="h-5 w-5 text-lithon-red" />
                <Dialog.Title className="text-base font-bold text-gray-900">
                  Ask AI About Lith-On BESS
                </Dialog.Title>
              </div>
              <Dialog.Close asChild>
                <button
                  type="button"
                  className="rounded-lg p-1 text-gray-400 hover:text-gray-900 hover:bg-gray-100"
                  aria-label="Close dialog"
                >
                  <X className="h-5 w-5" />
                </button>
              </Dialog.Close>
            </div>

            <Dialog.Description asChild>
              <div className="space-y-3 text-xs leading-relaxed text-gray-600">
                <p>
                  Use this verified engineering prompt in ChatGPT, Claude, Gemini, or Perplexity to receive an authoritative executive technical briefing about Lith-On:
                </p>
                
                <div className="relative rounded-xl bg-gray-50 p-4 border border-gray-200 text-gray-800 font-mono text-[11px] leading-relaxed">
                  {aiPromptText}
                </div>

                <div className="flex items-center justify-between pt-2">
                  <button
                    type="button"
                    onClick={handleCopyPrompt}
                    className="inline-flex items-center gap-1.5 rounded-full bg-lithon-red hover:bg-lithon-red-hover text-white px-4 py-2 text-xs font-semibold shadow-sm transition-colors"
                  >
                    {copiedPrompt ? (
                      <>
                        <Check className="h-3.5 w-3.5" />
                        <span>Copied to Clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        <span>Copy AI Prompt</span>
                      </>
                    )}
                  </button>

                  <Link
                    href="/faqs"
                    onClick={() => setAiModalOpen(false)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-lithon-blue hover:underline"
                  >
                    <span>Browse 35+ FAQs</span>
                    <ExternalLink className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </Dialog.Description>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

    </footer>
  );
}
