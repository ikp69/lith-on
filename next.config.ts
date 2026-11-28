import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  images: {
    // AVIF first (smaller), WebP fallback. 60 is used for soft-faded hero scenes.
    formats: ["image/avif", "image/webp"],
    qualities: [60, 70, 75, 80],
  },
  async redirects() {
    return [
      {
        source: "/applications",
        destination: "/industries",
        permanent: true,
      },
      // /blog was redirected to /resources until real articles existed (audit
      // decision 11.6). Restored on 26 Nov 2026 with three articles (src/data/blog.ts).
      // The /hero-2 prototype became the homepage hero (20 Nov 2026).
      {
        source: "/hero-2",
        destination: "/",
        permanent: false,
      },
      {
        source: "/applications/:path*",
        destination: "/industries/:path*",
        permanent: true,
      },
    ];
  },
  turbopack: {
    root: path.resolve(__dirname),
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
