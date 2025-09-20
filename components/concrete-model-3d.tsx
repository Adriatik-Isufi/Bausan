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
      // Rotate based on scroll position
      meshRef.current.rotation.y = scrollY * 0.001
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1

      // Scale slightly based on scroll
      const scale = 1 + Math.sin(scrollY * 0.002) * 0.1
      meshRef.current.scale.setScalar(scale)
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
        <Canvas camera={{ position: [5, 5, 5], fov: 50 }} className="w-full h-full">
          <ambientLight intensity={0.6} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -5]} intensity={0.5} />

          <ConcreteWallModel scrollY={scrollY} />

          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />

          <Environment preset="warehouse" />
        </Canvas>
      </Suspense>
    </div>
  )
}
