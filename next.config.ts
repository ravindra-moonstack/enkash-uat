import type { NextConfig } from "next"
import withBundleAnalyzer from "@next/bundle-analyzer"
import mappedUrls from "./src/helpers/redirection-urls"

const withBundleAnalyzerConfigured = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
})

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["@gsap/react", "react-icons"],
    optimizeCss: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  webpack(config) {
    config.infrastructureLogging = { level: "error" }
    return config
  },

  async headers() {
    return [
      // 🔒 Security Headers
      {
        source: "/(.*)",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },

      // 🧩 Cache long-lived static assets (public images, JS, fonts)
      {
        source:
          "/(.*).(js|css|png|jpg|jpeg|gif|svg|webp|ico|woff|woff2|ttf|eot)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },

      // 🧱 Cache Next.js static chunks
      {
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },

      // 🏠 No cache for HTML pages (SSR or dynamic)
      {
        source: "/((?!_next/static|.*\\..*).*)",
        headers: [
          {
            key: "Cache-Control",
            value: "no-store, must-revalidate",
          },
        ],
      },
    ]
  },

  async redirects() {
    return mappedUrls
  },
  async rewrites() {
    return [
      {
        source: "/resources",
        destination: "https://blogs.enkash.com/blog",
      },
      {
        source: "/resources/blog/:path*",
        destination: "https://blogs.enkash.com/blog/:path*",
      },
      {
        source: "/resources/:path*",
        destination: "https://blogs.enkash.com/:path*",
      },
    ]
  },
}

module.exports = withBundleAnalyzerConfigured(nextConfig)
