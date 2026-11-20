import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Lith-On Bharat Energy Private Limited",
    short_name: "Lith-On BESS",
    description:
      "Utility-scale and commercial BESS, solar-storage microgrids, and heavy-duty lithium battery packs.",
    start_url: "/",
    display: "standalone",
    background_color: "#FAFAF8",
    theme_color: "#FFFFFF",
    // Brand mark from data-sources/image.png (battery and bolt).
    icons: [
      { src: "/images/logo/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/images/logo/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/images/logo/icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
