/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  productionBrowserSourceMaps: false,
  experimental: {
    disableOptimizedLoading: false,
  },
}

module.exports = nextConfig
