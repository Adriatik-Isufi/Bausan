"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export function ConcreteShowcase() {
  const [scrollY, setScrollY] = useState(0)
  const [currentImage, setCurrentImage] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const images = [
    { src: "/images/modern-wall.jpg", title: "Moderne Betonwände", subtitle: "Präzise Ausführung" },
    { src: "/images/pool-area.jpg", title: "Poolbereich", subtitle: "Wasserdichte Lösungen" },
    { src: "/images/balcony-finish.jpg", title: "Balkon-Sanierung", subtitle: "Hochwertige Oberflächen" },
    { src: "/images/finished-garden.jpg", title: "Garten-Integration", subtitle: "Ästhetische Gestaltung" },
  ]

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div
      ref={containerRef}
      className="w-full h-96 relative overflow-hidden rounded-lg bg-gradient-to-br from-gray-100 to-gray-200"
    >
      {/* Main rotating showcase */}
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentImage ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
            style={{
              transform: `translateY(${scrollY * 0.05}px) rotateY(${scrollY * 0.02}deg)`,
            }}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Image info overlay */}
            <div className="absolute bottom-6 left-6 text-white">
              <h4 className="text-lg font-bold mb-1">{image.title}</h4>
              <p className="text-sm opacity-90">{image.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 3D-like floating elements */}
      <div className="absolute top-4 right-4 space-y-2">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="w-3 h-3 bg-white/30 rounded-full backdrop-blur-sm"
            style={{
              transform: `translateY(${Math.sin(scrollY * 0.01 + i) * 10}px)`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Progress indicators */}
      <div className="absolute bottom-4 right-4 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImage ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>

      {/* Animated grid overlay */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
          transform: `translate(${scrollY * 0.02}px, ${scrollY * 0.01}px)`,
        }}
      />
    </div>
  )
}
