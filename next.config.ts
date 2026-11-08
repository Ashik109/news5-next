import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vendor widgets and per-demo global styles require inactive pages to unmount.
  cacheComponents: false,
  reactCompiler: true,
};

export default nextConfig;
