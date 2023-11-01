/** @type {import('next').NextConfig} */
const nextConfig = {
  profiler: true,
  images: {
    domains: ["www.enkash.com"],
  },
};

module.exports = nextConfig;
