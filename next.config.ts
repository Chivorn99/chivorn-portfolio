import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Add basePath if your domain serves from a subdirectory
  // Remove or comment out if serving from root
  // basePath: '',

  // Ensure assets are loaded with correct paths
  assetPrefix: undefined,
};

export default nextConfig;
