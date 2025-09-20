"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

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
    // Handle form submission here
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
      title: "Kontakt",
      subtitle:
        "Bereit, Ihr Betonsanierungsprojekt zu besprechen? Nehmen Sie Kontakt mit unserem Expertenteam für eine Beratung auf.",
      address: "Adresse",
      phone: "Telefon",
      email: "E-Mail",
      businessHours: "Geschäftszeiten",
      monday: "Montag - Freitag: 7:00 - 18:00",
      saturday: "Samstag: 8:00 - 16:00",
      sunday: "Sonntag: Geschlossen",
      sendMessage: "Nachricht senden",
      formTitle: "Senden Sie uns eine Nachricht",
      namePlaceholder: "Ihr Name",
      emailPlaceholder: "Ihre E-Mail",
      phonePlaceholder: "Ihre Telefonnummer",
      messagePlaceholder: "Erzählen Sie uns von Ihrem Projekt...",
      sendButton: "Nachricht senden",
    },
    en: {
      title: "Contact Us",
      subtitle: "Ready to discuss your concrete repair project? Get in touch with our expert team for a consultation.",
      address: "Address",
      phone: "Phone",
      email: "Email",
      businessHours: "Business Hours",
      monday: "Monday - Friday: 7:00 AM - 6:00 PM",
      saturday: "Saturday: 8:00 AM - 4:00 PM",
      sunday: "Sunday: Closed",
      sendMessage: "Send us a Message",
      formTitle: "Send us a Message",
      namePlaceholder: "Your Name",
      emailPlaceholder: "Your Email",
      phonePlaceholder: "Your Phone Number",
      messagePlaceholder: "Tell us about your project...",
      sendButton: "Send Message",
    },
  }

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-background opacity-0">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{content[language].title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{content[language].subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-secondary" />
                  {content[language].address}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Schachenstrasse 28
                  <br />
                  4653 Obergösgen
                  <br />
                  {language === "de" ? "Schweiz" : "Switzerland"}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-secondary" />
                  {content[language].phone}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">+41 76 273 08 03</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-secondary" />
                  {content[language].email}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">bausan@gmx.ch</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-secondary" />
                  {content[language].businessHours}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-1 text-muted-foreground">
                  <p>{content[language].monday}</p>
                  <p>{content[language].saturday}</p>
                  <p>{content[language].sunday}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>{content[language].formTitle}</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="name"
                      placeholder={content[language].namePlaceholder}
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder={content[language].emailPlaceholder}
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div>
                  <Input
                    name="phone"
                    type="tel"
                    placeholder={content[language].phonePlaceholder}
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder={content[language].messagePlaceholder}
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                  {content[language].sendButton}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
