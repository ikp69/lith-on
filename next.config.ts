import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  images: {
    // AVIF first (smaller), WebP fallback. 60 is used for soft-faded hero scenes.
    formats: ["image/avif", "image/webp"],
    qualities: [60, 75],
  },
  async redirects() {
    return [
      {
        source: "/applications",
        destination: "/industries",
        permanent: true,
      },
      // /blog is unpublished until real articles exist (audit decision 11.6).
      // Temporary (307) so search engines keep the URL and it can return
      // without a redirect chain. Source kept in src/app/blog for restoring.
      {
        source: "/blog",
        destination: "/resources",
        permanent: false,
      },
      {
        source: "/blog/:path*",
        destination: "/resources",
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
