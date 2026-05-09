import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isGitHubPages ? "/junchen-meteor" : undefined,
  assetPrefix: isGitHubPages ? "/junchen-meteor/" : undefined,
  turbopack: {
    root: process.cwd()
  }
};

export default nextConfig;
