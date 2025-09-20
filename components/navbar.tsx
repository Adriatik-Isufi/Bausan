"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

interface NavbarProps {
  language: "de" | "en"
  onLanguageChange: (lang: "de" | "en") => void
}

export function Navbar({ language, onLanguageChange }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = {
    de: [
      { href: "#hero", label: "Start" },
      { href: "#about", label: "Über uns" },
      { href: "#services", label: "Leistungen" },
      { href: "#gallery", label: "Projekte" },
      { href: "#contact", label: "Kontakt" },
    ],
    en: [
      { href: "#hero", label: "Home" },
      { href: "#about", label: "About" },
      { href: "#services", label: "Services" },
      { href: "#gallery", label: "Projects" },
      { href: "#contact", label: "Contact" },
    ],
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
            <span className="text-white font-bold text-sm">B</span>
          </div>
          <span className={`font-bold text-lg ${isScrolled ? "text-gray-900" : "text-white"}`}>BAUSAN</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems[language].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isScrolled ? "text-gray-700" : "text-white/90"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Language Toggle */}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onLanguageChange(language === "de" ? "en" : "de")}
          className={`flex items-center space-x-1 ${
            isScrolled ? "text-gray-700 hover:text-primary" : "text-white/90 hover:text-white"
          }`}
        >
          <Globe className="w-4 h-4" />
          <span className="text-xs font-medium">{language.toUpperCase()}</span>
        </Button>
      </div>
    </nav>
  )
}
