"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"

interface ContactSectionProps {
  language: "de" | "en"
}

export function ContactSection({ language }: ContactSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const content = {
    de: {
      title: "Kontakt aufnehmen",
      subtitle: "Bereit für Ihr nächstes Betonsanierungsprojekt? Lassen Sie uns gemeinsam eine Lösung finden.",
      getInTouch: "Kontakt",
      formTitle: "Projekt besprechen",
      namePlaceholder: "Ihr Name",
      emailPlaceholder: "Ihre E-Mail",
      phonePlaceholder: "Ihre Telefonnummer",
      messagePlaceholder: "Beschreiben Sie Ihr Projekt...",
      sendButton: "Nachricht senden",
      address: "Schachenstrasse 28, 4653 Obergösgen, Schweiz",
      phone: "+41 76 273 08 03",
      email: "bausan@gmx.ch",
      hours: "Mo-Fr: 7:00-18:00 | Sa: 8:00-16:00",
    },
    en: {
      title: "Get in Touch",
      subtitle: "Ready for your next concrete repair project? Let's find a solution together.",
      getInTouch: "Contact",
      formTitle: "Discuss Your Project",
      namePlaceholder: "Your Name",
      emailPlaceholder: "Your Email",
      phonePlaceholder: "Your Phone Number",
      messagePlaceholder: "Describe your project...",
      sendButton: "Send Message",
      address: "Schachenstrasse 28, 4653 Obergösgen, Switzerland",
      phone: "+41 76 273 08 03",
      email: "bausan@gmx.ch",
      hours: "Mon-Fri: 7:00-18:00 | Sat: 8:00-16:00",
    },
  }

  return (
    <section ref={sectionRef} className="py-24 px-4 bg-gradient-to-br from-muted/30 to-background opacity-0">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            {content[language].title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">{content[language].subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-16 items-start">
          {/* Contact Information - Clean list layout without cards */}
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                  <Phone className="w-4 h-4 text-secondary-foreground" />
                </div>
                {content[language].getInTouch}
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors flex-shrink-0 mt-1">
                    <MapPin className="w-4 h-4 text-secondary" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-foreground mb-1">Adresse</h4>
                    <p className="text-muted-foreground leading-relaxed">{content[language].address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors flex-shrink-0 mt-1">
                    <Phone className="w-4 h-4 text-secondary" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-foreground mb-1">Telefon</h4>
                    <a
                      href={`tel:${content[language].phone}`}
                      className="text-muted-foreground hover:text-secondary transition-colors"
                    >
                      {content[language].phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors flex-shrink-0 mt-1">
                    <Mail className="w-4 h-4 text-secondary" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-foreground mb-1">E-Mail</h4>
                    <a
                      href={`mailto:${content[language].email}`}
                      className="text-muted-foreground hover:text-secondary transition-colors"
                    >
                      {content[language].email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors flex-shrink-0 mt-1">
                    <Clock className="w-4 h-4 text-secondary" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-foreground mb-1">Öffnungszeiten</h4>
                    <p className="text-muted-foreground">{content[language].hours}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form - Modern glass-morphism style */}
          <div className="lg:col-span-3">
            <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-border/50">
              <h3 className="text-3xl font-bold text-foreground mb-2">{content[language].formTitle}</h3>
              <p className="text-muted-foreground mb-8">Erzählen Sie uns von Ihrem Vorhaben</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Input
                      name="name"
                      placeholder={content[language].namePlaceholder}
                      value={formData.name}
                      onChange={handleChange}
                      className="h-14 rounded-xl border-border/50 bg-background/50 backdrop-blur-sm focus:bg-background transition-all"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      name="email"
                      type="email"
                      placeholder={content[language].emailPlaceholder}
                      value={formData.email}
                      onChange={handleChange}
                      className="h-14 rounded-xl border-border/50 bg-background/50 backdrop-blur-sm focus:bg-background transition-all"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Input
                    name="phone"
                    type="tel"
                    placeholder={content[language].phonePlaceholder}
                    value={formData.phone}
                    onChange={handleChange}
                    className="h-14 rounded-xl border-border/50 bg-background/50 backdrop-blur-sm focus:bg-background transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <Textarea
                    name="message"
                    placeholder={content[language].messagePlaceholder}
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="rounded-xl border-border/50 bg-background/50 backdrop-blur-sm focus:bg-background transition-all resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full h-14 bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:scale-[1.02] group"
                >
                  <span>{content[language].sendButton}</span>
                  <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
