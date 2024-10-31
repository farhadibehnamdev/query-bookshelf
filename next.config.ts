import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "https://nextui.org" },
      { protocol: "https", hostname: "https://i.gr-assets.com" },
    ],
  },
};

export default nextConfig;
