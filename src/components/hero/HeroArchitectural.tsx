"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play, Zap, Thermometer, RotateCcw } from "lucide-react";
import { FloatingApplicationNav } from "./FloatingApplicationNav";

export function HeroArchitectural() {
  return (
    <section className="relative w-full h-screen min-h-[700px] max-h-[1080px] overflow-hidden bg-gradient-to-br from-sky-100 via-blue-50 to-slate-100">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-sec/scene-commercial.webp"
          alt="Lith-On Industrial BESS Installation at Commercial Facility"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          quality={90}
        />
        
        {/* Soft gradient overlays for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-transparent to-white/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/50" />
      </div>

      {/* Floating Pill Navigation Header */}
      <header className="absolute top-6 sm:top-8 left-1/2 -translate-x-1/2 z-30 w-[95%] max-w-7xl">
        <nav
          className="mx-auto flex items-center justify-between gap-8 
                     px-6 sm:px-8 py-3.5 
                     rounded-full 
                     bg-white/40 backdrop-blur-xl 
                     border border-white/50 
                     shadow-lg shadow-black/5"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/images/logo/lith-on-logo.svg"
              alt="Lith-On Bharat Energy"
              width={140}
              height={36}
              className="h-9 w-auto"
              priority
            />
          </Link>

          {/* Navigation Links - Hidden on mobile */}
          <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
            <Link
              href="/about"
              className="text-slate-700 hover:text-lithon-blue transition-colors"
            >
              About
            </Link>
            <Link
              href="/solutions"
              className="text-slate-700 hover:text-lithon-blue transition-colors"
            >
              Solutions
            </Link>
            <Link
              href="/products"
              className="text-slate-700 hover:text-lithon-blue transition-colors"
            >
              Products
            </Link>
            <Link
              href="/applications"
              className="text-slate-700 hover:text-lithon-blue transition-colors"
            >
              Applications
            </Link>
            <Link
              href="/resources"
              className="text-slate-700 hover:text-lithon-blue transition-colors"
            >
              Resources
            </Link>
            <Link
              href="/contact"
              className="text-slate-700 hover:text-lithon-blue transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Phone + CTA */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            <a
              href="tel:+917000013009"
              className="text-sm font-semibold text-slate-700 hover:text-lithon-blue transition-colors"
            >
              +91-7000013009
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 
                         px-5 py-2.5 rounded-full 
                         bg-lithon-blue hover:bg-lithon-blue/90 
                         text-white text-sm font-semibold 
                         transition-colors shadow-md"
            >
              Talk to an Expert
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </nav>
      </header>

      {/* Main Content Container */}
      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl w-full px-6 sm:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Hero Copy */}
            <div className="space-y-8 pt-24 lg:pt-0">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/60 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-lithon-red animate-pulse" />
                <span className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                  Lith-On Bharat Energy
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight text-slate-900 leading-[1.05]">
                Industrial BESS
                <br />
                <span className="font-normal text-slate-900">for a Cleaner,</span>
                <br />
                <span className="font-semibold text-lithon-blue">Resilient India</span>
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-xl">
                Advanced Battery Energy Storage Systems that ensure reliable power, lower energy costs, and a low-carbon future for industries, campuses, and critical infrastructure.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 
                             px-6 py-3.5 rounded-full 
                             bg-lithon-blue hover:bg-lithon-blue/90 
                             text-white text-sm font-semibold 
                             transition-all shadow-lg hover:shadow-xl
                             min-h-[50px]"
                >
                  Talk to an Expert
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <button
                  type="button"
                  className="inline-flex items-center gap-2 
                             px-6 py-3.5 rounded-full 
                             bg-white/70 hover:bg-white/90 backdrop-blur-md 
                             border border-white/60 
                             text-slate-900 text-sm font-semibold 
                             transition-all
                             min-h-[50px]"
                >
                  <Play className="h-4 w-4" />
                  Watch Overview
                </button>
              </div>
            </div>

            {/* Right Column: Product Focus (hidden on mobile, visible on lg+) */}
            <div className="hidden lg:block relative">
              {/* This space is for the BESS product image which sits naturally in the background */}
            </div>
          </div>

          {/* Bottom Spec Cards */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Card 1: UPS Switching */}
              <div className="rounded-2xl bg-white/60 backdrop-blur-xl border border-white/60 p-5 shadow-lg">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-lithon-blue/10">
                    <Zap className="h-5 w-5 text-lithon-blue" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900">Sub-10ms</div>
                    <div className="text-xs text-slate-600 font-medium mt-0.5">
                      UPS Switching
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: Heat Rating */}
              <div className="rounded-2xl bg-white/60 backdrop-blur-xl border border-white/60 p-5 shadow-lg">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-lithon-red/10">
                    <Thermometer className="h-5 w-5 text-lithon-red" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900">60°C</div>
                    <div className="text-xs text-slate-600 font-medium mt-0.5">
                      Heat Rating
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3: Cycles */}
              <div className="rounded-2xl bg-white/60 backdrop-blur-xl border border-white/60 p-5 shadow-lg">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-600/10">
                    <RotateCcw className="h-5 w-5 text-emerald-600" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900">6,000+</div>
                    <div className="text-xs text-slate-600 font-medium mt-0.5">
                      Cycles
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Application Navigation Pills */}
      <FloatingApplicationNav />
    </section>
  );
}
