"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ImpressumPage() {
  const [language, setLanguage] = useState<"de" | "en">("de")

  const content = {
    de: {
      title: "Impressum",
      backToHome: "Zurück zur Startseite",
      companyInfo: "Angaben gemäß § 5 TMG",
      contact: "Kontakt",
      responsible: "Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV",
      disclaimer: "Haftungsausschluss",
      disclaimerContent: {
        liability: "Haftung für Inhalte",
        liabilityText:
          "Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.",
        links: "Haftung für Links",
        linksText:
          "Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.",
        copyright: "Urheberrecht",
        copyrightText:
          "Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.",
      },
    },
    en: {
      title: "Legal Notice",
      backToHome: "Back to Home",
      companyInfo: "Information according to § 5 TMG",
      contact: "Contact",
      responsible: "Responsible for content according to § 55 Abs. 2 RStV",
      disclaimer: "Disclaimer",
      disclaimerContent: {
        liability: "Liability for Content",
        liabilityText:
          "As service providers, we are liable for own contents of these websites according to Sec. 7, paragraph 1 German Telemedia Act (TMG). However, according to Sec. 8 to 10 German Telemedia Act (TMG), service providers are not under obligation to permanently monitor submitted or stored information or to search for evidences that indicate illegal activities.",
        links: "Liability for Links",
        linksText:
          "Our offer includes links to external third party websites. We have no influence on the contents of those websites, therefore we cannot guarantee for those contents. Providers or administrators of linked websites are always responsible for their own contents.",
        copyright: "Copyright",
        copyrightText:
          "Contents and compilations published on these websites by the providers are subject to German copyright laws. Reproduction, editing, distribution as well as the use of any kind outside the scope of the copyright law require a written permission of the author or originator.",
      },
    },
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header with language toggle and back button */}
      <header className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/">
            <Button variant="ghost" className="flex items-center gap-2">
              <ArrowLeft size={20} />
              {content[language].backToHome}
            </Button>
          </Link>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setLanguage(language === "de" ? "en" : "de")}
              className="flex items-center gap-2 px-3 py-2 rounded-lg border hover:bg-muted transition-colors"
            >
              <span className="text-sm font-medium">{language.toUpperCase()}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-red-600 mb-8">{content[language].title}</h1>

        {/* Company Information */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">{content[language].companyInfo}</h2>
          <div className="bg-muted/30 p-6 rounded-lg">
            <div className="space-y-2">
              <p className="font-semibold">Bausan GmbH</p>
              <p>Betonsanierung</p>
              <p>Musterstraße 123</p>
              <p>12345 Musterstadt</p>
              <p>Deutschland</p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">{content[language].contact}</h2>
          <div className="bg-muted/30 p-6 rounded-lg">
            <div className="space-y-2">
              <p>
                <span className="font-medium">Telefon:</span> +49 (0) 123 456789
              </p>
              <p>
                <span className="font-medium">E-Mail:</span> info@bausan-gmbh.de
              </p>
              <p>
                <span className="font-medium">Website:</span> www.bausan-gmbh.de
              </p>
            </div>
          </div>
        </section>

        {/* Responsible Person */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">{content[language].responsible}</h2>
          <div className="bg-muted/30 p-6 rounded-lg">
            <p>Max Mustermann</p>
            <p>Geschäftsführer</p>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">{content[language].disclaimer}</h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-medium mb-4">{content[language].disclaimerContent.liability}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {content[language].disclaimerContent.liabilityText}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4">{content[language].disclaimerContent.links}</h3>
              <p className="text-muted-foreground leading-relaxed">{content[language].disclaimerContent.linksText}</p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4">{content[language].disclaimerContent.copyright}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {content[language].disclaimerContent.copyrightText}
              </p>
            </div>
          </div>
        </section>

        {/* Footer note */}
        <div className="text-center pt-8 border-t">
          <p className="text-sm text-muted-foreground">© 2025 Bausan GmbH. Alle Rechte vorbehalten.</p>
        </div>
      </main>
    </div>
  )
}
