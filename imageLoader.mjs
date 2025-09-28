export default function imageLoader({ src, width, quality }) {
  // For GitHub Pages subdirectory deployment - must match next.config.mjs basePath
  const basePath = process.env.NODE_ENV === 'production' ? '/Bausan' : ''
  
  // If src already includes the basePath, don't add it again
  if (src.startsWith(basePath)) {
    return src
  }
  
  // Add basePath for relative URLs
  if (src.startsWith('/')) {
    return `${basePath}${src}`
  }
  
  // Return absolute URLs as-is
  return src
}
