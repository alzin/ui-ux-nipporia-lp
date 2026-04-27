import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["localhost:3000", "192.168.1.123:3000", "192.168.1.123"],
  output: 'standalone',
  productionBrowserSourceMaps: true,
  turbopack: {},
  reactStrictMode: true,
  experimental: {
    inlineCss: true,
    optimizePackageImports: ["framer-motion", "lucide-react"],
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async headers() {
    if (process.env.NODE_ENV !== "production") return [];
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
        ],
      },
      {
        // Allow Clarity replay player to fetch CSS/JS/fonts for session recordings
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
        ],
      },
    ];
  },
};

export default nextConfig;