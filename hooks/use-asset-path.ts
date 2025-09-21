import { useCallback } from 'react'

/**
 * Hook to get the correct asset path for both local development and GitHub Pages deployment
 * @returns Function that takes a path and returns the correct full path
 */
export function useAssetPath() {
  const getAssetPath = useCallback((assetPath: string) => {
    // In production (GitHub Pages), use the repository name as basePath
    // In development, use no basePath (empty string)
    const basePath = process.env.NODE_ENV === 'production' ? '/Bausan' : ''
    
    // Ensure the asset path starts with /
    const cleanPath = assetPath.startsWith('/') ? assetPath : `/${assetPath}`
    
    return `${basePath}${cleanPath}`
  }, [])

  return { getAssetPath }
}
