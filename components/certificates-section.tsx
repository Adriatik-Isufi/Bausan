"use client"

import { useEffect, useRef, useState } from "react"
import { Award, CheckCircle, Star, Trophy, Calendar, Shield } from "lucide-react"

interface CertificatesSectionProps {
  language: "de" | "en"
}

export function CertificatesSection({ language }: CertificatesSectionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false) // Added state to track visibility
  const sectionRef = useRef<HTMLElement>(null)

  const content = {
    de: {
      title: "Zertifikate & Standards",
      subtitle: "Unser Weg zur Exzellenz - Qualität und Sicherheit in jedem Schritt",
      certificates: [
        {
          icon: CheckCircle,
          title: "Schweizer Baustandards",
          description: "Einhaltung der SIA-Normen",
          status: "Zertifiziert",
          year: "2020",
          details: "Vollständige Compliance mit allen relevanten SIA-Normen für Betonreparatur und Bautenschutz.",
        },
        {
          icon: Trophy,
          title: "Sicherheitszertifizierung",
          description: "Arbeitsplatz-Sicherheitsstandards",
          status: "Zertifiziert",
          year: "2021",
          details: "Höchste Sicherheitsstandards für alle Mitarbeiter und Baustellen.",
        },
  {
    icon: Award,
    title: "ISO 9001:2015",
          description: "Qualitätsmanagementsystem-Zertifizierung",
          status: "In Vorbereitung",
          year: "2025",
          details: "Internationale Qualitätsstandards für optimierte Geschäftsprozesse.",
        },
        {
          icon: Star,
          title: "Fachliche Exzellenz",
          description: "Branchenanerkennung",
          status: "In Vorbereitung",
          year: "2025",
          details: "Anerkennung für herausragende Leistungen in der Betoninstandsetzung.",
        },
      ],
    },
    en: {
      title: "Certificates & Standards",
      subtitle: "Our Journey to Excellence - Quality and Safety in Every Step",
      certificates: [
  {
    icon: CheckCircle,
    title: "Swiss Building Standards",
    description: "Compliance with SIA Standards",
    status: "Certified",
          year: "2020",
          details: "Full compliance with all relevant SIA standards for concrete repair and building protection.",
        },
        {
          icon: Trophy,
          title: "Safety Certification",
          description: "Workplace Safety Standards",
          status: "Certified",
          year: "2021",
          details: "Highest safety standards for all employees and construction sites.",
        },
        {
          icon: Award,
          title: "ISO 9001:2015",
          description: "Quality Management System Certification",
          status: "Coming Soon",
          year: "2025",
          details: "International quality standards for optimized business processes.",
  },
  {
    icon: Star,
    title: "Professional Excellence",
    description: "Industry Recognition Award",
    status: "Coming Soon",
          year: "2025",
          details: "Recognition for outstanding performance in concrete restoration.",
        },
      ],
    },
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
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

  const isCertified = (status: string) => status === "Certified" || status === "Zertifiziert"

  return (
    <section id="certificates" ref={sectionRef} className="py-20 px-4 bg-gradient-to-br from-muted/20 to-muted/40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{content[language].title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{content[language].subtitle}</p>
        </div>

        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
           {/* Desktop Timeline */}
           <div className="hidden md:block relative">
             <div className="grid grid-cols-4 gap-8 relative">
               {/* Background timeline line - positioned to go through the center of nodes */}
               <div className="absolute top-8 left-8 right-8 h-1 bg-gray-300 transform"></div>
               
               {/* Progress timeline line - fills based on completed certificates */}
               <div 
                 className="absolute top-8 left-8 h-1 bg-red-600 transform transition-all duration-1000"
                 style={{ 
                   width: `${Math.max(0, ((content[language].certificates.filter(cert => isCertified(cert.status)).length / content[language].certificates.length) * 100) - 12.5)}%` 
                 }}
               ></div>
              {content[language].certificates.map((cert, index) => (
                <div key={index} className="relative">
                  {/* Timeline node */}
                  <div
                    className={`w-16 h-16 mx-auto rounded-full border-4 flex items-center justify-center cursor-pointer transition-all duration-300 transform hover:scale-110 ${
                      isCertified(cert.status)
                        ? "bg-red-600 border-red-500 shadow-lg shadow-red-200"
                        : "bg-gray-400 border-gray-300 shadow-lg shadow-gray-200"
                    } ${activeIndex === index ? "scale-110 ring-4 ring-red-600/30" : ""}`}
                    onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  >
                    <cert.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Year badge */}
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-medium">
                      {cert.year}
                    </span>
                  </div>

                  {/* Certificate info */}
                   <div className="mt-6 text-center">
                     <h3 className="font-bold text-lg mb-2">{cert.title}</h3>
                     <p className="text-sm text-muted-foreground mb-3">{cert.description}</p>
                     <span
                       className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${
                         isCertified(cert.status) ? "bg-red-100 text-red-800" : "bg-gray-100 text-gray-800"
                       }`}
                     >
                       {isCertified(cert.status) ? <Shield className="w-3 h-3" /> : <Calendar className="w-3 h-3" />}
                       {cert.status}
                     </span>
                   </div>

                  {/* Expandable details */}
                  {activeIndex === index && (
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-80 bg-white rounded-lg shadow-xl border p-4 z-10 animate-in slide-in-from-top-2 duration-300">
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-l border-t rotate-45"></div>
                      <p className="text-sm text-muted-foreground">{cert.details}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

           {/* Mobile Layout */}
           <div className="md:hidden space-y-6 relative">
             {/* Background vertical line */}
             <div className="absolute left-7 top-0 bottom-0 w-1 bg-gray-300"></div>
             
             {content[language].certificates.map((cert, index) => {
               const isCurrentCertified = isCertified(cert.status)
               const shouldShowProgress = content[language].certificates.slice(0, index + 1).some(c => isCertified(c.status))
               
               return (
                 <div
                   key={index}
                   className={`relative pl-16 pb-6 cursor-pointer transition-all duration-300 ${
                     activeIndex === index ? "bg-white/50 rounded-lg p-4 shadow-lg" : ""
                   }`}
                   onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                 >
                   {/* Progress line for mobile - only show if current or previous certs are achieved */}
                   {shouldShowProgress && (
                     <div 
                       className="absolute left-7 top-0 w-1 bg-red-600 transition-all duration-500"
                       style={{ 
                         height: isCurrentCertified ? '100%' : '50%' 
                       }}
                     ></div>
                   )}

                {/* Badge */}
                <div
                  className={`absolute left-0 top-0 w-14 h-14 rounded-full border-4 flex items-center justify-center transition-all duration-300 ${
                    isCertified(cert.status)
                      ? "bg-red-600 border-red-500 shadow-lg shadow-red-200"
                      : "bg-gray-400 border-gray-300 shadow-lg shadow-gray-200"
                  } ${activeIndex === index ? "scale-110 ring-4 ring-red-600/30" : ""}`}
                >
                  <cert.icon className="w-6 h-6 text-white" />
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-bold text-lg">{cert.title}</h3>
                    <span className="bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-medium">
                      {cert.year}
                    </span>
                  </div>
                <p className="text-sm text-muted-foreground mb-3">{cert.description}</p>
                   <span
                     className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${
                       isCertified(cert.status) ? "bg-red-100 text-red-800" : "bg-gray-100 text-gray-800"
                     }`}
                   >
                     {isCertified(cert.status) ? <Shield className="w-3 h-3" /> : <Calendar className="w-3 h-3" />}
                     {cert.status}
                   </span>

                  {/* Expandable details for mobile */}
                  {activeIndex === index && (
                    <div className="mt-4 p-3 bg-white rounded-lg border animate-in slide-in-from-top-2 duration-300">
                      <p className="text-sm text-muted-foreground">{cert.details}</p>
                    </div>
                  )}
                   </div>
                 </div>
               )
             })}
           </div>
        </div>
      </div>
    </section>
  )
}
