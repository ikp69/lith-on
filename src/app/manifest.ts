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
    theme_color: "#0B3388",
    icons: [
      {
        src: "/images/logo/logo-dark.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/images/logo/logo-dark.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
