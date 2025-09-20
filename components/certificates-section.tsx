"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Award, CheckCircle, Star, Trophy } from "lucide-react"

const certificates = [
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

export function CertificatesSection() {
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
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Certificates & Standards</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our commitment to quality and safety is reflected in our certifications and adherence to industry standards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, index) => (
            <Card key={index} className="cert-card opacity-0 text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-secondary/10 rounded-full flex items-center justify-center">
                  <cert.icon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{cert.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{cert.description}</p>
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                    cert.status === "Certified" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
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
