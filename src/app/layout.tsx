import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { MOTION_BOOT_SCRIPT } from "@/components/motion/motion-env";
import { Header } from "@/components/layout/Header";
import { NavigationFeedback } from "@/components/layout/NavigationFeedback";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lith-On Bharat Energy | Industrial BESS & Lithium Battery Systems",
  description:
    "Commercial and utility battery energy storage made in Noida, with IceBattery® thermal management and under-10 ms switchover.",
  keywords: [
    "BESS",
    "Battery Energy Storage System",
    "Lithium Battery Manufacturer",
    "Commercial BESS India",
    "IceBattery",
    "DG Replacement BESS",
    "GRAP Compliance Gurugram",
    "Sub-10ms UPS BESS",
  ],
  authors: [{ name: "Lith-On Bharat Energy Private Limited" }],
  openGraph: {
    title: "Lith-On Bharat Energy | Advanced Industrial BESS Solutions",
    description:
      "250 MWh annual capacity, 500+ MWh deployed globally. Engineered for 60°C ambient tolerance with IceBattery® thermal management.",
    url: "https://www.lith-on.com",
    siteName: "Lith-On Bharat Energy",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.lith-on.com/#organization",
        name: "Lith-On Bharat Energy Private Limited",
        url: "https://www.lith-on.com",
        logo: "https://www.lith-on.com/images/logo/logo-dark.png",
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+91-7000013009",
            contactType: "technical support",
            areaServed: "IN",
            availableLanguage: ["English", "Hindi"],
          },
          {
            "@type": "ContactPoint",
            telephone: "+91-7000017005",
            contactType: "sales",
            areaServed: "IN",
            availableLanguage: ["English", "Hindi"],
          },
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress: "A-162, Arihant Business Centre, 7th Floor, Sector 136",
          addressLocality: "Noida",
          addressRegion: "Uttar Pradesh",
          postalCode: "201304",
          addressCountry: "IN",
        },
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.lith-on.com/#plant",
        name: "Lith-On Manufacturing Plant",
        description:
          "20,000 sq. ft. automated BESS manufacturing and pack assembly facility with 250 MWh annual production capacity.",
        url: "https://www.lith-on.com/capabilities",
        telephone: "+91-7000013009",
        email: "tech@lith-onbharat.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "A-162, Arihant Business Centre, 7th Floor, Sector 136",
          addressLocality: "Noida",
          addressRegion: "Uttar Pradesh",
          postalCode: "201304",
          addressCountry: "IN",
        },
      },
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth" className={`${manrope.variable} font-sans scroll-smooth overflow-x-clip`}>
      <body className="min-h-screen bg-canvas-offwhite text-gray-900 antialiased selection:bg-lithon-red-ink selection:text-white flex flex-col justify-between overflow-x-clip">
        {/* Enables entrance motion before first paint unless reduced motion is preferred */}
        <script dangerouslySetInnerHTML={{ __html: MOTION_BOOT_SCRIPT }} />
        <SmoothScroll />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-full focus:bg-white focus:px-5 focus:py-3 focus:text-small focus:font-[600] focus:text-lithon-blue focus:shadow-lg focus:outline-2 focus:outline-lithon-blue"
        >
          Skip to content
        </a>
        <NavigationFeedback />
        <Header />
        <main id="main" className="flex-1 scroll-mt-24">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

