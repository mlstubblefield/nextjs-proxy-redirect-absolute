import type { NextConfig } from "next";

const nextConfig = {
  /* config options here */
  skipMiddlewareUrlNormalize: true,
  experimental: {
    trustHostHeader: true,
  }
};

export default nextConfig;
