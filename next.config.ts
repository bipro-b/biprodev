import type { NextConfig } from "next";

const repo = "https://github.com/bipro-b/biprodev"; // change this to your GitHub repo name

const nextConfig: NextConfig = {
  reactCompiler: true,

  // Static export for GitHub Pages
  output: "export",

  // Required for GitHub Pages routing
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
