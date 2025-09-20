"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"

interface HeroSectionProps {
  language: "de" | "en"
}

export function HeroSection({ language }: HeroSectionProps) {
  const heroRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  
  // Get the base path for images
  const getImagePath = (imagePath: string) => {
    const basePath = process.env.NODE_ENV === 'production' ? '/Bausan' : ''
    return `${basePath}${imagePath}`
  }

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current && textRef.current) {
        const scrolled = window.pageYOffset
        const parallax = scrolled * 0.5
        const textParallax = scrolled * 0.3

        heroRef.current.style.transform = `translateY(${parallax}px)`
        textRef.current.style.transform = `translateY(${textParallax}px)`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const content = {
    de: {
      subtitle: "Betonsanierung • Restaurierung • Schutz",
      button: "Kontakt aufnehmen",
    },
    en: {
      subtitle: "Concrete Repair • Restoration • Protection",
      button: "Get Started",
    },
  }

  return (
    <section className="relative h-screen overflow-hidden parallax-container">
      {/* Background Image with Parallax */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black/20 to-transparent z-10" />
      <div
        ref={heroRef}
        className="absolute inset-0 parallax-element"
        style={{
          backgroundImage: `url(${getImagePath('/images/hero-wall.jpg')})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Hero Content */}
      <div ref={textRef} className="relative z-10 flex items-center justify-center h-full parallax-element">
        <div className="text-center text-white px-4 max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-balance">
            BAUSAN
            <span className="block text-4xl md:text-6xl font-normal mt-2">GmbH</span>
          </h1>

          <div className="space-y-4 mb-8">
            {/* Language support for subtitle */}
            <p className="text-xl md:text-2xl font-light">{content[language].subtitle}</p>
            <div className="text-lg md:text-xl space-y-2">
              <p>Schachenstrasse 28, 4653 Obergösgen</p>
              <p>+41 76 273 08 03 • bausan@gmx.ch</p>
            </div>
          </div>

          <Button
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-4 text-lg font-semibold"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            {/* Language support for button text */}
            {content[language].button}
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
