"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Globe, Menu, X } from "lucide-react"

interface NavbarProps {
  language: "de" | "en"
  onLanguageChange: (lang: "de" | "en") => void
}

export function Navbar({ language, onLanguageChange }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight * 0.8)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = {
    de: [
      { href: "#about", label: "Über uns" },
      { href: "#services", label: "Leistungen" },
      { href: "#gallery", label: "Projekte" },
      { href: "#certificates", label: "Zertifikate" },
      { href: "#contact", label: "Kontakt" },
    ],
    en: [
      { href: "#about", label: "About" },
      { href: "#services", label: "Services" },
      { href: "#gallery", label: "Projects" },
      { href: "#certificates", label: "Certificates" },
      { href: "#contact", label: "Contact" },
    ],
  }

  const ctaText = {
    de: "Kostenlose Beratung",
    en: "Free Consultation",
  }

  const handleMobileMenuClick = (href: string) => {
    setIsMobileMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled || isMobileMenuOpen ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 py-6 relative flex items-center">
          {/* Logo - positioned absolutely on the left */}
          <div className="absolute left-4 flex items-center space-x-3">
            <div className="w-10 h-10 bg-red-600 rounded-sm flex items-center justify-center">
              <span className="text-white font-bold text-lg">B</span>
            </div>
            <div className="flex flex-col">
              <span
                className={`font-bold text-lg leading-tight transition-colors duration-500 ${
                  isScrolled || isMobileMenuOpen ? "text-gray-900" : "text-white"
                }`}
              >
                BAUSAN
              </span>
              <span
                className={`text-sm leading-tight transition-colors duration-500 ${
                  isScrolled || isMobileMenuOpen ? "text-gray-700" : "text-gray-200"
                }`}
              >
                Betonsanierung
              </span>
            </div>
          </div>

          {/* Navigation Links - centered (desktop only) */}
          <div className="hidden md:flex items-center justify-center space-x-8 w-full">
            {navItems[language].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-500 hover:text-red-600 ${
                  isScrolled ? "text-gray-900" : "text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right side buttons */}
          <div className="absolute right-4 flex items-center space-x-2">
            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onLanguageChange(language === "de" ? "en" : "de")}
              className={`flex items-center space-x-1 transition-colors duration-500 ${
                isScrolled || isMobileMenuOpen
                  ? "text-gray-700 hover:text-red-600 hover:bg-red-50"
                  : "text-white/90 hover:text-white hover:bg-white/10"
              }`}
            >
              <Globe className="w-4 h-4" />
              <span className="text-xs font-medium">{language.toUpperCase()}</span>
            </Button>

            <Button
              className="hidden md:block bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-2 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              {ctaText[language]}
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className={`md:hidden p-2 transition-colors duration-500 ${
                isScrolled || isMobileMenuOpen
                  ? "text-gray-700 hover:text-red-600 hover:bg-red-50"
                  : "text-white/90 hover:text-white hover:bg-white/10"
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300">
            <div className="p-6 pt-20">
              <div className="space-y-3">
                {navItems[language].map((item, index) => {
                  // Different heights for masonry effect: h-12, h-16, h-14, h-18, h-12 (48+64+56+72+48=288px total)
                  const heights = ["h-12", "h-16", "h-14", "h-18", "h-12"]
                  return (
                    <button
                      key={item.href}
                      onClick={() => handleMobileMenuClick(item.href)}
                      className={`block w-full text-left px-4 text-lg font-semibold text-gray-800 hover:bg-red-50 hover:text-red-700 rounded-lg transition-colors flex items-center ${heights[index]}`}
                    >
                      {item.label}
                    </button>
                  )
                })}
                <div className="pt-4 border-t border-gray-200">
                  <Button
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 rounded-lg h-12"
                    onClick={() => {
                      setIsMobileMenuOpen(false)
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    {ctaText[language]}
                  </Button>
                  
                  <div className="pt-4 mt-4 border-t border-gray-200">
                    <a
                      href="/impressum"
                      className="block w-full text-center px-4 py-2 text-sm font-semibold text-gray-700 hover:text-red-600 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {language === 'de' ? 'Impressum' : 'Legal Notice'}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
