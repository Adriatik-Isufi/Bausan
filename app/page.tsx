"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { MasonryGallerySection } from "@/components/masonry-gallery-section"
import { CertificatesSection } from "@/components/certificates-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

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
        <MasonryGallerySection language={language} />
      </div>
      <div id="certificates">
        <CertificatesSection language={language} />
      </div>
      <div id="contact">
        <ContactSection language={language} />
      </div>

      <Footer language={language} />
    </main>
  )
}
