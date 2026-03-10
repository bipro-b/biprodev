import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: 'export',      // Required for static site generation
  images: {
    unoptimized: true,   // Required because GitHub Pages doesn't have an image optimization server
  },
  // Optional: if your repo is NOT named "yourusername.github.io"
  // basePath: '/your-repo-name', 
};

export default nextConfig;