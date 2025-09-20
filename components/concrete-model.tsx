"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export function ConcreteModel() {
  const [scrollY, setScrollY] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div ref={containerRef} className="w-full h-96 relative overflow-hidden rounded-lg bg-muted">
      {/* Main showcase image with parallax effect */}
      <div
        className="absolute inset-0 transition-transform duration-300 ease-out"
        style={{
          transform: `translateY(${scrollY * 0.1}px) scale(${1 + scrollY * 0.0002})`,
        }}
      >
        <Image
          src="/images/modern-wall.jpg"
          alt="Professional concrete wall construction"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Floating info cards */}
      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
        <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
          <h4 className="font-semibold text-sm text-gray-900">Professional Grade</h4>
          <p className="text-xs text-gray-600">Concrete Solutions</p>
        </div>
        <div className="bg-secondary/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
          <h4 className="font-semibold text-sm text-secondary-foreground">Swiss Quality</h4>
          <p className="text-xs text-secondary-foreground/80">Since 2015</p>
        </div>
      </div>

      {/* Animated overlay pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            rgba(255,255,255,0.1) 10px,
            rgba(255,255,255,0.1) 20px
          )`,
          transform: `translateX(${scrollY * 0.05}px)`,
        }}
      />
    </div>
  )
}
