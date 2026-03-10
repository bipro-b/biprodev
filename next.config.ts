import type { NextConfig } from "next";

const repo = "biprodev";

const nextConfig: NextConfig = {
  output: "export",
  // Ensure the basePath starts with a slash but does NOT end with one
  basePath: `/${repo}`, 
  // assetPrefix should match basePath
  assetPrefix: `/${repo}/`,
  // This helps GitHub Pages resolve paths correctly
  trailingSlash: true, 
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
