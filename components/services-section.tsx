"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Hammer, Shield, Wrench, Building } from "lucide-react"

interface ServicesSectionProps {
  language: "de" | "en"
}

export function ServicesSection({ language }: ServicesSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".service-card")
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("fade-in-up")
              }, index * 200)
            })
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
      title: "Unsere Leistungen",
      subtitle:
        "Umfassende Betonlösungen, die auf Ihre spezifischen Bedürfnisse zugeschnitten sind, von der Reparatur bis zum Schutz und zur Wartung.",
      services: [
        {
          icon: Hammer,
          title: "Betonsanierung",
          description:
            "Professionelle Reparatur beschädigter Betonkonstruktionen, Risse und Verschlechterungen mit fortschrittlichen Materialien und Techniken.",
        },
        {
          icon: Building,
          title: "Strukturelle Restaurierung",
          description:
            "Komplette Restaurierung von Betongebäuden, Brücken und Infrastrukturen zur Wiederherstellung der strukturellen Integrität.",
        },
        {
          icon: Shield,
          title: "Schutzbeschichtungen",
          description:
            "Anwendung spezialisierter Schutzbeschichtungen zur Verhinderung zukünftiger Schäden und Verlängerung der Betonlebensdauer.",
        },
        {
          icon: Wrench,
          title: "Wartungsdienstleistungen",
          description:
            "Regelmäßige Wartungsprogramme, um Ihre Betonkonstruktionen das ganze Jahr über in optimalem Zustand zu halten.",
        },
      ],
    },
    en: {
      title: "Our Services",
      subtitle:
        "Comprehensive concrete solutions tailored to meet your specific needs, from repair to protection and maintenance.",
      services: [
        {
          icon: Hammer,
          title: "Concrete Repair",
          description:
            "Professional repair of damaged concrete structures, cracks, and deterioration using advanced materials and techniques.",
        },
        {
          icon: Building,
          title: "Structural Restoration",
          description:
            "Complete restoration of concrete buildings, bridges, and infrastructure to restore structural integrity.",
        },
        {
          icon: Shield,
          title: "Protective Coatings",
          description:
            "Application of specialized protective coatings to prevent future damage and extend concrete lifespan.",
        },
        {
          icon: Wrench,
          title: "Maintenance Services",
          description: "Regular maintenance programs to keep your concrete structures in optimal condition year-round.",
        },
      ],
    },
  }

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{content[language].title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{content[language].subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content[language].services.map((service, index) => (
            <Card
              key={index}
              className="service-card opacity-0 hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-secondary/10 rounded-full flex items-center justify-center">
                  <service.icon className="w-8 h-8 text-secondary" />
                </div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
