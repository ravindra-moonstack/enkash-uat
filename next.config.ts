import type { NextConfig } from "next"
import withBundleAnalyzer from "@next/bundle-analyzer"
import mappedUrls from "./src/helpers/redirection-urls"

const withBundleAnalyzerConfigured = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
})

const nextConfig: NextConfig = {
  compress: true,

  experimental: {
    optimizeCss: true,
    optimizePackageImports: ["@gsap/react", "react-icons", "lodash-es"],
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
    styledComponents: true,
  },

  // ✅ ADD THIS PART FOR BLOG IMAGE SUPPORT
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.enkash.com",
        pathname: "/resources/wp-content/uploads/**",
      },
    ],
  },

  webpack(config, { dev, isServer }) {
    config.infrastructureLogging = { level: "error" }

    if (!dev && !isServer) {
      config.optimization.splitChunks.cacheGroups = {
        default: false,
        vendors: false,
        styles: {
          name: "styles",
          type: "css/mini-extract",
          chunks: "all",
          enforce: true,
        },
      }
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
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
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
      {
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/((?!_next/static|.*\\..*).*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, s-maxage=60, stale-while-revalidate=3600",
          },
        ],
      },
    ]
  },

  async rewrites() {
    return [
      { source: "/resources", destination: "https://blogs.enkash.com/blog" },
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

  async redirects() {
    return mappedUrls
  },
}

module.exports = withBundleAnalyzerConfigured(nextConfig)
