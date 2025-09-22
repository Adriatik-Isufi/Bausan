"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Award, CheckCircle, Star, Trophy } from "lucide-react"

interface CertificatesSectionProps {
  language: "de" | "en"
}

export function CertificatesSection({ language }: CertificatesSectionProps) {
  const content = {
    de: {
      title: "Zertifikate & Standards",
      subtitle: "Unser Engagement für Qualität und Sicherheit spiegelt sich in unseren Zertifizierungen und der Einhaltung von Industriestandards wider.",
      certificates: [
        {
          icon: Award,
          title: "ISO 9001:2015",
          description: "Qualitätsmanagementsystem-Zertifizierung",
          status: "In Vorbereitung",
        },
        {
          icon: CheckCircle,
          title: "Schweizer Baustandards",
          description: "Einhaltung der SIA-Normen",
          status: "Zertifiziert",
        },
        {
          icon: Star,
          title: "Fachliche Exzellenz",
          description: "Branchenanerkennung",
          status: "In Vorbereitung",
        },
        {
          icon: Trophy,
          title: "Sicherheitszertifizierung",
          description: "Arbeitsplatz-Sicherheitsstandards",
          status: "Zertifiziert",
        },
      ]
    },
    en: {
      title: "Certificates & Standards",
      subtitle: "Our commitment to quality and safety is reflected in our certifications and adherence to industry standards.",
      certificates: [
        {
          icon: Award,
          title: "ISO 9001:2015",
          description: "Quality Management System Certification",
          status: "Coming Soon",
        },
        {
          icon: CheckCircle,
          title: "Swiss Building Standards",
          description: "Compliance with SIA Standards",
          status: "Certified",
        },
        {
          icon: Star,
          title: "Professional Excellence",
          description: "Industry Recognition Award",
          status: "Coming Soon",
        },
        {
          icon: Trophy,
          title: "Safety Certification",
          description: "Workplace Safety Standards",
          status: "Certified",
        },
      ]
    }
  }
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".cert-card")
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

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{content[language].title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {content[language].subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content[language].certificates.map((cert, index) => (
            <Card key={index} className="cert-card opacity-0 text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-secondary/10 rounded-full flex items-center justify-center">
                  <cert.icon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{cert.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{cert.description}</p>
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                    cert.status === "Certified" || cert.status === "Zertifiziert" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {cert.status}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
