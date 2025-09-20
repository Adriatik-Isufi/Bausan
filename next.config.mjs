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
  // GitHub Pages deployment configuration
  // Remove basePath and assetPrefix for now to use default GitHub Pages URL
}

export default nextConfig
