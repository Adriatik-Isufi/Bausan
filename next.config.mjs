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
    loader: 'custom',
    loaderFile: './imageLoader.mjs',
  },
  output: 'export',            // Enable static export
  trailingSlash: true,         // Add trailing slashes to routes
  basePath: process.env.NODE_ENV === 'production' ? '/Bausan' : '',  // GitHub Pages subdirectory path
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Bausan' : '',  // Prefix for all assets
}

export default nextConfig
