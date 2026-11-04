import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@vcws/content", "@vcws/design-tokens"],
  async rewrites() {
    const eco2zeroOrigin = process.env.ECO2ZERO_ORIGIN;
    if (!eco2zeroOrigin) return [];

    return [
      { source: "/eco2zero", destination: `${eco2zeroOrigin}/eco2zero` },
      { source: "/eco2zero/:path+", destination: `${eco2zeroOrigin}/eco2zero/:path+` },
      { source: "/eco2zero-static/:path+", destination: `${eco2zeroOrigin}/eco2zero-static/:path+` },
    ];
  },
};

export default nextConfig;
