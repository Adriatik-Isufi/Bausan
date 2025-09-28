"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Award, Clock } from "lucide-react"

interface HeroSectionProps {
  language: "de" | "en"
}

export function HeroSection({ language }: HeroSectionProps) {
  const content = {
    de: {
      title: "Professionelle",
      titleHighlight: "Betonsanierung",
      titleEnd: "für dauerhafte Lösungen",
      subtitle:
        "Spezialisiert auf Betonreparatur, Gebäudeschutz, Fassadensanierung, Balkonsanierung, Abdichtung und Korrosionsschutz",
      ctaButton: "Jetzt Beratung anfragen",
      projectsButton: "Unsere Projekte ansehen",
      experience: "25+ Jahre",
      experienceLabel: "Erfahrung",
      certified: "Zertifiziert",
      certifiedLabel: "Nach DIN Standards",
      service: "24/7",
      serviceLabel: "Notdienst",
    },
    en: {
      title: "Professional",
      titleHighlight: "Concrete Repair",
      titleEnd: "for Lasting Solutions",
      subtitle:
        "Specialized in concrete repair, building protection, facade renovation, balcony restoration, waterproofing and corrosion protection",
      ctaButton: "Request Consultation Now",
      projectsButton: "View Our Projects",
      experience: "25+ Years",
      experienceLabel: "Experience",
      certified: "Certified",
      certifiedLabel: "To DIN Standards",
      service: "24/7",
      serviceLabel: "Emergency Service",
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center industrial-texture">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat md:bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/14.jpg-MRWhSaA2TkWx7GizG3UkcpnDUbLVm2.jpeg')`,
          backgroundPosition: "center 30%",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
            {content[language].title} <span className="text-red-600">{content[language].titleHighlight}</span>{" "}
            {content[language].titleEnd}
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-gray-200 text-pretty">{content[language].subtitle}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="text-lg px-8 py-4 bg-red-600 hover:bg-red-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              {content[language].ctaButton}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20 hover:border-white/50 transition-all duration-300"
              onClick={() => document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" })}
            >
              {content[language].projectsButton}
            </Button>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {/* Mobile: Stack vertically with compact design */}
            <div className="md:hidden space-y-3">
              <div className="flex items-center justify-center space-x-4 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <Shield className="h-6 w-6 text-red-500 flex-shrink-0" />
                <div className="text-center">
                  <span className="font-semibold text-sm">
                    {content[language].experience} {content[language].experienceLabel}
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-4 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <Award className="h-6 w-6 text-red-500 flex-shrink-0" />
                <div className="text-center">
                  <span className="font-semibold text-sm">
                    {content[language].certified} {content[language].certifiedLabel}
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-4 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <Clock className="h-6 w-6 text-red-500 flex-shrink-0" />
                <div className="text-center">
                  <span className="font-semibold text-sm">
                    {content[language].service} {content[language].serviceLabel}
                  </span>
                </div>
              </div>
            </div>

            {/* Desktop: Original grid layout */}
            <div className="hidden md:contents">
              <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/15 transition-all duration-300">
                <Shield className="h-8 w-8 text-red-500" />
                <div className="text-left">
                  <h3 className="font-semibold">{content[language].experience}</h3>
                  <p className="text-sm text-gray-300">{content[language].experienceLabel}</p>
                </div>
              </div>

              <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/15 transition-all duration-300">
                <Award className="h-8 w-8 text-red-500" />
                <div className="text-left">
                  <h3 className="font-semibold">{content[language].certified}</h3>
                  <p className="text-sm text-gray-300">{content[language].certifiedLabel}</p>
                </div>
              </div>

              <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/15 transition-all duration-300">
                <Clock className="h-8 w-8 text-red-500" />
                <div className="text-left">
                  <h3 className="font-semibold">{content[language].service}</h3>
                  <p className="text-sm text-gray-300">{content[language].serviceLabel}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on mobile */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
