/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,  // Set to false for strict builds
  },
  typescript: {
    ignoreBuildErrors: true,   // Set to false for strict builds
  },
  images: {
    unoptimized: true,         // Required for static export
  },
  output: 'export',            // Enable static export
  trailingSlash: true,         // Add trailing slashes to routes
  basePath: '/Bausan.github.io',  // GitHub Pages subdirectory path
  assetPrefix: '/Bausan.github.io',  // Prefix for all assets
}

export default nextConfig
