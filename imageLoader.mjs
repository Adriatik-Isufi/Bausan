export default function imageLoader({ src, width, quality }) {
  // For GitHub Pages subdirectory deployment
  const basePath = '/Bausan.github.io'
  
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
