import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Add this line specifically for your repository name:
  basePath: '/biprodev', 
  // This ensures internal links and assets point to /biprodev/ instead of /
  assetPrefix: '/biprodev', 
};

export default nextConfig;
