"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!isHomePage) return;
    const handleScroll = () => {
      setScrolled(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  const visible = !isHomePage || scrolled;
  if (!visible) return null;

  const phoneNumber = "917000013009";
  const defaultMessage = encodeURIComponent(
    "Hello Lith-On Bharat Energy team, I would like to inquire about your BESS and lithium battery systems for my facility."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 group transition-opacity duration-300">
      {/* Tooltip on hover */}
      <div className="absolute bottom-full right-0 mb-3 hidden rounded-lg bg-slate-900 border border-white/10 px-3 py-1.5 text-xs font-medium text-white shadow-xl whitespace-nowrap group-hover:block transition-all">
        <span>Chat with Technical Sales</span>
        <div className="absolute top-full right-5 border-4 border-transparent border-t-slate-900" />
      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact Lith-On Technical Sales on WhatsApp"
        className="relative flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-[#20ba59] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40"
      >
        {/* Soft pulse glow without transform scale overflow */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-pulse pointer-events-none" />
        <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7 fill-white" />
      </a>
    </div>
  );
}
