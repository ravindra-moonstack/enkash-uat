import type { NextConfig } from "next"
import withBundleAnalyzer from "@next/bundle-analyzer"
import mappedUrls from "./src/helpers/redirection-urls"
import path from "path"

const withBundleAnalyzerConfigured = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
})

const nextConfig: NextConfig = {
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  compress: true,

  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: [
      "@gsap/react",
      "react-icons",
      "lodash-es",
      "react-bootstrap",
    ],
  },
  outputFileTracingExcludes: {
    "*": ["./public/uploads/**", "./uploads/**"],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
    styledComponents: true,
  },

  images: {
    formats: ["image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [60, 70, 75, 80, 90, 100],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.enkash.com",
        pathname: "/resources/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
        pathname: "/vi/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
    ],
  },

  webpack(config, { dev, isServer }) {
    config.infrastructureLogging = { level: "error" }

    // Alias the third-party slick theme to our performance optimized local version
    config.resolve.alias["slick-carousel/slick/slick-theme.css"] = path.resolve(
      __dirname,
      "src/styles/slick-theme.css"
    )

    if (!dev && !isServer) {
      config.optimization.splitChunks.cacheGroups = {
        ...config.optimization.splitChunks.cacheGroups,
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
        source: "/((?!_next/static|_next/image|.*\\..*).*)",
        headers: [
          {
            key: "Cache-Control",
            value: "no-store, must-revalidate",
          },
        ],
      },
    ]
  },

  async rewrites() {
    return [
      {
        source: "/uploads/:path*",
        destination: "/api/uploads/:path*",
      },
    ]
  },

  async redirects() {
    return mappedUrls
  },
}

module.exports = withBundleAnalyzerConfigured(nextConfig)
