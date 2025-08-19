import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
  // generateBuildId() {
  //   return new Date().getTime().toString()
  // },
}

export default nextConfig
