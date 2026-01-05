/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['little-leaders.org', 'images.unsplash.com', 'plus.unsplash.com'],
    unoptimized: false,
  },
  // Optimize for production
  swcMinify: true,
  compress: true,
  // Performance optimizations
  poweredByHeader: false,
  // Output configuration for Netlify
  output: 'standalone',
  // Optimize fonts
  optimizeFonts: true,
}

module.exports = nextConfig

