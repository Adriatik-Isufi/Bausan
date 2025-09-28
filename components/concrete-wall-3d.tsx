"use client"

import { Suspense, useRef, useEffect, useState } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { useGLTF, Environment } from "@react-three/drei"
import { useAssetPath } from "@/hooks/use-asset-path"
import type * as THREE from "three"

function ConcreteWallModel({ scrollProgress }: { scrollProgress: number }) {
  const meshRef = useRef<THREE.Group>(null)
  const { camera } = useThree()
  const { getAssetPath } = useAssetPath()

  // Load the GLB model
  const { scene } = useGLTF(getAssetPath("/models/cracked+wall+3d+model.glb"))

  useFrame((state) => {
    if (meshRef.current) {
      // Make model flat/parallel to bottom - rotated 90 degrees right
      const initialRotationY = Math.PI / 2  // 90 degrees right
      const initialRotationX = 0            // Flat/parallel to bottom
      const initialRotationZ = 0            // No roll
      
      // Final rotation - more rotation during scroll, but still flat
      const finalRotationY = Math.PI / 2 + Math.PI * 0.5  // Additional 90 degrees rotation
      const finalRotationX = 0                            // Keep flat
      const finalRotationZ = 0                            // No roll
      
      // Slightly smaller scale - just a tiny bit smaller than original
      const scale = 12  // Just a bit smaller than original 8
      
      // Camera positioned to see full large model
      camera.position.set(0, 2, 18)  // Centered, further back for scale 12
      
      // Smooth easing for scroll rotation
      const easeProgress = scrollProgress * scrollProgress // Ease-in effect
      
      // Automatic rotation (continuous)
      const autoRotation = state.clock.elapsedTime * 0.2  // Slow automatic rotation
      
      // Combine automatic rotation with scroll-driven rotation
      const scrollRotation = easeProgress * (finalRotationY - initialRotationY)
      meshRef.current.rotation.y = initialRotationY + autoRotation + scrollRotation
      meshRef.current.rotation.x = initialRotationX
      meshRef.current.rotation.z = initialRotationZ
      
      // Fixed scale - no zoom
      meshRef.current.scale.setScalar(scale)
      
      // Subtle floating animation
      const float = Math.sin(state.clock.elapsedTime * 0.5) * 0.02
      meshRef.current.position.y = float
      
      // Keep model centered
      meshRef.current.position.x = 0
      meshRef.current.position.z = 0
      
      // Camera looks at the model center
      camera.lookAt(meshRef.current.position)
    }
  })

  return (
    <group ref={meshRef} position={[0, 0, 0]}>
      <primitive object={scene} />
    </group>
  )
}

function LoadingFallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-center">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-2" />
        <p className="text-sm text-muted-foreground">3D Betonwand wird geladen...</p>
      </div>
    </div>
  )
}

export function ConcreteWall3D() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const windowHeight = window.innerHeight

        const enterPoint = windowHeight * 0.8 // Start animation earlier
        const exitPoint = -rect.height * 0.2 // Continue animation longer
        const totalDistance = enterPoint + rect.height * 1.2
        const currentPosition = rect.top

        const rawProgress = Math.max(0, Math.min(1, (enterPoint - currentPosition) / totalDistance))

        const smoothedProgress = rawProgress * rawProgress * (3 - 2 * rawProgress) // Smoothstep
        setScrollProgress(smoothedProgress)
      }
    }

    let ticking = false
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", throttledScroll, { passive: true })
    handleScroll() // Initial calculation
    return () => window.removeEventListener("scroll", throttledScroll)
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[700px] overflow-visible" // Bigger height to fit large model
      style={{
        zIndex: 10,
        transform: "translateZ(0)",
        willChange: "transform", // Optimize for animations
      }}
    >
      <Suspense fallback={<LoadingFallback />}>
        <Canvas
          camera={{
            position: [0, 2, 18], // Match the camera position from useFrame
            fov: 70, // Wide field of view to see full large model
            near: 0.1,
            far: 100, // Sufficient for camera at z=18
          }}
          className="w-full h-full"
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: "high-performance", // Optimize for smooth animations
          }}
          style={{ background: "transparent" }}
        >
          <ambientLight intensity={0.4} />
          <directionalLight
            position={[8, 8, 5]}
            intensity={1.2}
            castShadow
            shadow-mapSize={[2048, 2048]}
            shadow-camera-far={50}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
          />
          <pointLight position={[-4, 4, 4]} intensity={0.3} color="#ffffff" />
          <pointLight position={[4, 2, -2]} intensity={0.2} color="#f0f0f0" />

          <ConcreteWallModel scrollProgress={scrollProgress} />

          <Environment preset="warehouse" background={false} />
        </Canvas>
      </Suspense>
    </div>
  )
}

// Preload the model with correct path
const modelPath = process.env.NODE_ENV === 'production' ? '/Bausan/models/cracked+wall+3d+model.glb' : '/models/cracked+wall+3d+model.glb'
useGLTF.preload(modelPath)
