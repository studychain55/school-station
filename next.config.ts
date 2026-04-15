import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  bundlePagesRouterDependencies: true,
  serverExternalPackages: [],
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  rewrites: async () => ({
    beforeFiles: [
      // Juku area routes: p-/c-/s- prefixes → pure dynamic paths
      { source: "/juku/p-:prefecture/", destination: "/juku/pref/:prefecture/" },
      { source: "/juku/p-:prefecture", destination: "/juku/pref/:prefecture" },
      { source: "/juku/c-:city/", destination: "/juku/city/:city/" },
      { source: "/juku/c-:city", destination: "/juku/city/:city" },
      { source: "/juku/s-:station/", destination: "/juku/station/:station/" },
      { source: "/juku/s-:station", destination: "/juku/station/:station" },
      { source: "/juku/ranking/p-:prefecture/", destination: "/juku/ranking/pref/:prefecture/" },
      { source: "/juku/ranking/p-:prefecture", destination: "/juku/ranking/pref/:prefecture" },
      // Koukou ranking routes
      { source: "/rankings/koukou/p-:prefecture/c-:city/", destination: "/rankings/koukou/pref/:prefecture/c/:city/" },
      { source: "/rankings/koukou/p-:prefecture/c-:city", destination: "/rankings/koukou/pref/:prefecture/c/:city" },
      { source: "/rankings/koukou/p-:prefecture/", destination: "/rankings/koukou/pref/:prefecture/" },
      { source: "/rankings/koukou/p-:prefecture", destination: "/rankings/koukou/pref/:prefecture" },
      { source: "/rankings/koukou/public/p-:prefecture/", destination: "/rankings/koukou/public/pref/:prefecture/" },
      { source: "/rankings/koukou/public/p-:prefecture", destination: "/rankings/koukou/public/pref/:prefecture" },
    ],
  }),
  headers: async () => [
    {
      source: "/(.*)",
      headers: [
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "X-Frame-Options", value: "DENY" },
        { key: "X-XSS-Protection", value: "1; mode=block" },
        {
          key: "Strict-Transport-Security",
          value: "max-age=31536000; includeSubDomains",
        },
      ],
    },
  ],
};

export default nextConfig;
