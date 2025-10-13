import type { NextConfig } from "next"
import withBundleAnalyzer from "@next/bundle-analyzer"
import mappedUrls from "./src/helpers/redirection-urls"

const withBundleAnalyzerConfigured = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
})

const nextConfig: NextConfig = {
  compress: true, // ✅ Enables gzip & brotli compression for faster transfer

  experimental: {
    // ✅ Optimize CSS delivery and reduce render-blocking chunks
    optimizeCss: true,

    // ✅ Tree-shake unused imports for lighter bundles
    optimizePackageImports: ["@gsap/react", "react-icons", "lodash-es"],
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
    // ✅ Enable minification of styled components if used
    styledComponents: true,
  },

  webpack(config, { dev, isServer }) {
    config.infrastructureLogging = { level: "error" }

    // ✅ Prevent multiple CSS chunks per component
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

  // ✅ Add HTTP caching and security headers
  async headers() {
    return [
      // Security Headers
      {
        source: "/(.*)",
        headers: [
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },

      // Cache static assets aggressively
      {
        source: "/(.*).(js|css|png|jpg|jpeg|gif|svg|webp|ico|woff|woff2|ttf|eot)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },

      // Cache Next.js static chunks
      {
        source: "/_next/static/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },

      // No cache for SSR / HTML pages
      {
        source: "/((?!_next/static|.*\\..*).*)",
        headers: [
          { key: "Cache-Control", value: "no-store, must-revalidate" },
        ],
      },
    ]
  },

  // ✅ Preload key LCP-related assets (optional hint)
  async rewrites() {
    return [
      { source: "/resources", destination: "https://blogs.enkash.com/blog" },
      { source: "/resources/blog/:path*", destination: "https://blogs.enkash.com/blog/:path*" },
      { source: "/resources/:path*", destination: "https://blogs.enkash.com/:path*" },
    ]
  },

  async redirects() {
    return mappedUrls
  },
}

module.exports = withBundleAnalyzerConfigured(nextConfig)
