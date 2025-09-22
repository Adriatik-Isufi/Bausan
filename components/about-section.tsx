"use client"

import { useEffect, useRef } from "react"
import dynamic from "next/dynamic"

// Dynamically import the 3D component for static export compatibility
const ConcreteWall3D = dynamic(() => import("./concrete-wall-3d").then((mod) => ({ default: mod.ConcreteWall3D })), {
  ssr: false,
  loading: () => (
    <div className="w-full h-96 bg-muted rounded-lg flex items-center justify-center">
      <div className="text-center">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-2" />
        <p className="text-sm text-muted-foreground">3D Betonwand wird geladen...</p>
      </div>
    </div>
  ),
})

interface AboutSectionProps {
  language: "de" | "en"
}

export function AboutSection({ language }: AboutSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const content = {
    de: {
      title: "Über Bausan GmbH",
      paragraph1:
        "Mit jahrelanger Expertise in der Betonsanierung und -restaurierung bietet die Bausan GmbH professionelle Lösungen für strukturelle Betonherausforderungen. Unser spezialisiertes Team kombiniert traditionelle Handwerkskunst mit modernen Techniken, um dauerhafte Ergebnisse zu gewährleisten.",
      paragraph2:
        "Von kleineren Reparaturen bis hin zur kompletten Struktursanierung bieten wir umfassende Betonschutzdienstleistungen, die die Lebensdauer Ihrer Strukturen verlängern und dabei deren Integrität und Erscheinungsbild erhalten.",
      experience: "Erfahrung",
      projects: "Projekte",
      completed: "Abgeschlossen",
    },
    en: {
      title: "About Bausan GmbH",
      paragraph1:
        "With years of expertise in concrete repair and restoration, Bausan GmbH delivers professional solutions for structural concrete challenges. Our specialized team combines traditional craftsmanship with modern techniques to ensure lasting results.",
      paragraph2:
        "From minor repairs to complete structural restoration, we provide comprehensive concrete protection services that extend the life of your structures while maintaining their integrity and appearance.",
      experience: "Experience",
      projects: "Projects",
      completed: "Completed",
    },
  }

  return (
    <section ref={sectionRef} className="py-4 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative overflow-visible" style={{ minHeight: "700px", width: "100%" }}>
            <ConcreteWall3D />
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">{content[language].title}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{content[language].paragraph1}</p>
            <p className="text-lg text-muted-foreground leading-relaxed">{content[language].paragraph2}</p>
            <div className="pt-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-foreground">{content[language].experience}</h4>
                  <p className="text-muted-foreground">10+ Jahre</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{content[language].projects}</h4>
                  <p className="text-muted-foreground">500+ {content[language].completed}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
