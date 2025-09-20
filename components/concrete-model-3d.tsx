"use client"

import { Suspense, useRef, useEffect, useState } from "react"
import { Canvas, useFrame, useLoader } from "@react-three/fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"
import { OrbitControls, Environment } from "@react-three/drei"
import type * as THREE from "three"

function ConcreteWallModel({ scrollY }: { scrollY: number }) {
  const meshRef = useRef<THREE.Group>(null)
  const gltf = useLoader(GLTFLoader, "/models/concrete-wall.glb")

  useFrame((state) => {
    if (meshRef.current) {
      // Scroll-driven camera movement effect
      const scrollProgress = Math.min(scrollY / 1000, 1) // Normalize scroll
      
      // Move camera through the wall as user scrolls
      meshRef.current.rotation.y = scrollProgress * Math.PI * 0.5
      meshRef.current.position.z = -scrollProgress * 2
      
      // Slight breathing animation
      const breathe = Math.sin(state.clock.elapsedTime * 0.8) * 0.05
      meshRef.current.scale.setScalar(1 + breathe)
    }
  })

  return (
    <group ref={meshRef} position={[0, 0, 0]} scale={[2, 2, 2]}>
      <primitive object={gltf.scene} />
    </group>
  )
}

function LoadingFallback() {
  return (
    <div className="w-full h-96 bg-muted rounded-lg flex items-center justify-center">
      <div className="text-center">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-2" />
        <p className="text-sm text-muted-foreground">3D Modell wird geladen...</p>
      </div>
    </div>
  )
}

export function ConcreteModel3D() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="w-full h-96 rounded-lg overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
      <Suspense fallback={<LoadingFallback />}>
        <Canvas camera={{ position: [3, 2, 4], fov: 60 }} className="w-full h-full">
          <ambientLight intensity={0.6} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -5]} intensity={0.5} />

          <ConcreteWallModel scrollY={scrollY} />

          <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />

          <Environment preset="warehouse" />
        </Canvas>
      </Suspense>
    </div>
  )
}
