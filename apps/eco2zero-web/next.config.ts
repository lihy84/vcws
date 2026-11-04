import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/eco2zero",
  assetPrefix: "/eco2zero-static",
  transpilePackages: ["@vcws/content", "@vcws/design-tokens"],
};

export default nextConfig;
