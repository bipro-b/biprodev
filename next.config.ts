import type { NextConfig } from "next";

const repo = "biprodev";

const nextConfig: NextConfig = {
  output: "export",
  basePath: `/${repo}`,
  // assetPrefix helps CSS/JS load from the subfolder
  assetPrefix: `/${repo}/`, 
  trailingSlash: true, 
  images: {
    unoptimized: true,
  },
  reactCompiler: true,
};

export default nextConfig;
