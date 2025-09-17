import type { NextConfig } from "next"
import withBundleAnalyzer from "@next/bundle-analyzer"
import mappedUrls from "./src/helpers/redirection-urls"

const withBundleAnalyzerConfigured = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
})

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    // optimizeCss: true,
    optimizePackageImports: ["@gsap/react", "react-icons"],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  webpack(config) {
    config.infrastructureLogging = {
      level: "error", // Suppress warnings like the one you're seeing
    }
    return config
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
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
      // {
      //   source: "/resources/",
      //   destination: "https://blogs.enkash.com/",
      // },
      {
        source: "/resources/blog/:path*",
        destination: "https://blogs.enkash.com/blog/:path*",
      },
      // {
      //   source: "/resources/:path*",
      //   destination: "https://blogs.enkash.com/:path*/",
      // },
      {
        source: "/resources/:path*",
        destination: "https://blogs.enkash.com/:path*",
      },
    ]
  },
}

module.exports = withBundleAnalyzerConfigured(nextConfig)
