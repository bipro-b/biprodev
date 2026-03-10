import type { NextConfig } from "next";

const repo = "biprodev";

const nextConfig: NextConfig = {
  output: "export",

  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,

  images: {
    unoptimized: true,
  },

  reactCompiler: true,
};

export default nextConfig;
