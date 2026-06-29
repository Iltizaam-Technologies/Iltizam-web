import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Produces .next/standalone for cPanel / VPS deploy bundles
  output: "standalone",

  poweredByHeader: false,

  turbopack: {
    root: process.cwd(),
  },

  images: {
    unoptimized: process.env.NEXT_IMAGE_UNOPTIMIZED === "true",
  },
};

export default nextConfig;
