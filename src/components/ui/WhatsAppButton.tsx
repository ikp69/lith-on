"use client";

import { useEffect, useState } from "react";

/**
 * G5 floating WhatsApp button (audit §4). Neutral ink, no pulse. Appears after
 * the visitor scrolls past roughly one screen (clear of every hero and its
 * primary action) and hides while the footer is on screen. Fades over 250 ms;
 * hidden state is inert so it never takes focus.
 */

const WHATSAPP_URL = `https://wa.me/917000013009?text=${encodeURIComponent(
  "Hello Lith-On Bharat Energy team, I would like to inquire about your BESS and lithium battery systems for my facility."
)}`;

function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.9 11.9 0 0 0 4.6 4c1.7.7 2.3.8 3.2.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z" />
    </svg>
  );
}

export function WhatsAppButton() {
  const [pastHero, setPastHero] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > window.innerHeight * 0.9);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const footer = document.querySelector("footer");
    const io = footer ? new IntersectionObserver(([e]) => setFooterVisible(e.isIntersecting), { rootMargin: "0px 0px -10% 0px" }) : null;
    if (footer && io) {
      io.observe(footer);
    }
    return () => {
      window.removeEventListener("scroll", onScroll);
      io?.disconnect();
    };
  }, []);

  const shown = pastHero && !footerVisible;

  return (
    <div
      inert={!shown}
      className={`fixed right-4 bottom-4 z-30 transition-[opacity,transform] duration-[250ms] ease-out motion-reduce:transition-none sm:right-6 sm:bottom-6 ${
        shown ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
      }`}
    >
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Lith-On on WhatsApp (opens in a new tab)"
        className="flex h-12 items-center gap-2 rounded-full bg-ink px-3.5 text-white shadow-[0_8px_24px_-8px_rgb(15_23_42/0.45)] transition-colors hover:bg-ink-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lithon-blue sm:px-4"
      >
        <WhatsAppGlyph className="h-5 w-5" />
        <span className="hidden text-small font-[500] sm:inline">WhatsApp</span>
      </a>
    </div>
  );
}
