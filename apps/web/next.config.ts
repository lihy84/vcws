import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@vcws/content", "@vcws/design-tokens"],
};

export default nextConfig;
