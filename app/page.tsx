"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { GallerySection } from "@/components/gallery-section"
import { CertificatesSection } from "@/components/certificates-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  const [language, setLanguage] = useState<"de" | "en">("de")

  return (
    <main className="min-h-screen">
      <Navbar language={language} onLanguageChange={setLanguage} />

      <div id="hero">
        <HeroSection language={language} />
      </div>
      <div id="about">
        <AboutSection language={language} />
      </div>
      <div id="services">
        <ServicesSection language={language} />
      </div>
      <div id="gallery">
        <GallerySection language={language} />
      </div>
      <CertificatesSection language={language} />
      <div id="contact">
        <ContactSection language={language} />
      </div>

      <footer className="bg-primary text-primary-foreground py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-4">
            <h3 className="text-2xl font-bold">BAUSAN GmbH</h3>
            <p className="text-sm opacity-80">
              {language === "de" ? "Professionelle Betonlösungen" : "Professional Concrete Solutions"}
            </p>
          </div>
          <div className="text-sm opacity-80 space-y-1">
            <p>Schachenstrasse 28, 4653 Obergösgen, Schweiz</p>
            <p>+41 76 273 08 03 • bausan@gmx.ch</p>
          </div>
          <div className="mt-6 pt-6 border-t border-primary-foreground/20">
            <p className="text-xs opacity-60">
              © 2025 Bausan GmbH. {language === "de" ? "Alle Rechte vorbehalten." : "All rights reserved."}
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
