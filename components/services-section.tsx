"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Hammer, Shield, Building2, Droplets, Flame, Zap, FlaskConical } from "lucide-react"

interface ServicesSectionProps {
  language: "de" | "en"
}

export function ServicesSection({ language }: ServicesSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeService, setActiveService] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".service-card")
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("fade-in-up")
              }, index * 100)
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

  const services = [
    {
      icon: Hammer,
      title: "Bauwerkinstandsetzung",
      description:
        "Für die Reparatur von Schäden an bestehenden Bauwerken kommen verschiedene Schutz- und Sanierungstechniken zum Einsatz. Das Hauptziel der Sanierung besteht darin, die Ursachen der Schäden zu beseitigen, den Fortschritt der Schädigung zu verlangsamen oder ganz zu stoppen und die Tragwerksstrukturen zu schützen. Darüber hinaus wird die Verstärkung von Bauteilen vorgenommen, um langfristige Schäden zu verhindern und bestehende Schäden nachhaltig zu beheben. Während kleinere Schäden in der Regel mit Mörtel ausgebessert werden, werden bei größeren Flächen, wie etwa Brückenplatten, fließfähige Materialien wie Beton oder Vergussmörtel verwendet. Für großflächige Objekte wird häufig die Spritztechnik angewendet.",
    },
    {
      icon: Shield,
      title: "Bautenschutz und Betonkosmetik",
      description:
        "Zum Bautenschutz und zur Betonkosmetik zählen Bereiche wie Beschichtungen, Oberflächenschutzsysteme, Antigraffiti-Behandlungen und Bodenbelagstechniken. Beschichtungen und Oberflächenschutzsysteme werden aufgetragen, um beispielsweise Stahlbeton vor äußeren Einflüssen zu schützen und so die Haltbarkeit zu verbessern. Dabei kommen Techniken wie Imprägnierungen und Beschichtungen zum Einsatz, die sowohl die Porosität der Oberfläche verringern als auch die Struktur festigen, indem Poren und Kapillaren teilweise oder vollständig verschlossen werden. Selbst hohe ästhetische Ansprüche können durch unsere Fachkräfte nahezu immer durch Spachtelungen und Retuschen erfüllt werden.",
    },
    {
      icon: Building2,
      title: "Tragwerkverstärkung",
      description:
        "Die Ertüchtigung oder Verstärkung eines Bauwerks wird stets von einem Bauingenieur festgelegt. Um die notwendige Verstärkung zu erzielen, stehen verschiedene Verfahren zur Verfügung. BETOSAN kann in diesem Zusammenhang beratend zur Seite stehen und die Durchführung der Maßnahmen übernehmen. Die Erhöhung oder Wiederherstellung der statischen Tragfähigkeit erfolgt durch den Einsatz von CFK- und Stahllamellen, Kohlenstoff- und Glasfasergewebe, Vorspannverfahren (Memory-Steel) sowie speziellen Bewehrungen bei Problemen mit Durchstanzungen. Die Wahl der geeigneten Methode hängt von verschiedenen Projektfaktoren wie Kosten, Baustellenbedingungen und -umgebung ab.",
    },
    {
      icon: Droplets,
      title: "Abdichtung",
      description:
        "Um strukturelle Schäden durch Feuchtigkeitseintritt in Bauwerke zu verhindern, werden diverse Techniken und Materialien zur Bauabdichtung verwendet. Dabei kommen spezielle Verfahren wie Injektionen, Vergelungen, Fugenabdichtungen, Flüssigkunststoffabdichtungen und Flächenabdichtungen zum Einsatz. Die Wahl des geeigneten Verfahrens hängt vom Typ des Bauwerks, dem Schadensbild, den klimatischen Bedingungen sowie den spezifischen Anforderungen ab. Daher empfehlen wir, unsere fachliche Beratung und langjährige Erfahrung in Anspruch zu nehmen.",
    },
    {
      icon: Flame,
      title: "Brandschutz",
      description:
        "Beim Brandschutz überlassen wir von der BETOSAN AG nichts dem Zufall. Besonders bei der Betoninstandsetzung besteht oft Bedarf an Brandschutzbeschichtungen, vor allem bei unzureichender Betondeckung der Bewehrung. Wir bieten die fachgerechte Anwendung von Schutzbeschichtungen und die Verkleidung von Tragwerken an. Zudem sichern wir Versorgungsleitungen, die durch Decken und Wände führen, mit Brandabschottungen feuerbeständig und rauchgasdicht ab. Brennbare Leitungen werden zusätzlich mit Brandschutzmanschetten geschützt, die im Brandfall als Barriere wirken.",
    },
    {
      icon: Zap,
      title: "Stahl-Korrosionsschutz",
      description:
        "Stahl ist ein vielseitiger und kostengünstiger Baustoff, hat jedoch einen Nachteil: Er korrodiert in Wasser, Erde und der Atmosphäre. Um dies zu verhindern, sind wirksame Beschichtungssysteme unerlässlich. Korrosionsschutz für Stahl bedeutet in erster Linie den Erhalt von Wert und Sicherheit. Ohne eine funktionierende Schutzbeschichtung altern viele Stahlbauten schnell. Dies beeinträchtigt nicht nur das Aussehen, sondern kann auch die Statik gefährden, im schlimmsten Fall droht der Abriss. Die Anwendung von Stahl-Korrosionsschutz erfordert geprüfte Beschichtungssysteme und vor allem die Fachkompetenz des ausführenden Unternehmens – eine echte Vertrauenssache!",
    },
    {
      icon: FlaskConical,
      title: "Säureschutzbau",
      description:
        "Aggressive Medien wie pflanzliche und tierische Öle, Fette, Weichmacher, Säuren, Laugen, Lösungsmittel und Salzlösungen führen in der Industrie häufig zu Schäden an Beton, Stahlbeton und Stahl. Daher ist der Einsatz von Säureschutzbeschichtungen, also schwerem Korrosionsschutz, unerlässlich. Strenge gesetzliche Vorschriften zielen vor allem auf den Umweltschutz ab. Unsere Spezialität im Säureschutzbau ist die gewebeverstärkte, ableitfähige Vinylester-Beschichtung, die selbst hohen Belastungen standhält. Bei zusätzlicher mechanischer Belastung kommen säurefeste Platten zum Einsatz.",
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Unsere Fachbereiche</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Spezialisierte Lösungen für Bauwerkinstandsetzung, Bautenschutz und industrielle Anwendungen mit höchsten
            Qualitätsstandards.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Service Navigation */}
          <div className="lg:col-span-1">
            <div className="space-y-2">
              {services.map((service, index) => (
                <Button
                  key={index}
                  variant={activeService === index ? "default" : "ghost"}
                  className="w-full justify-start text-left h-auto p-4 hover:bg-secondary/80"
                  onClick={() => setActiveService(index)}
                >
                  <service.icon className="w-5 h-5 mr-3 flex-shrink-0" />
                  <span className="font-medium">{service.title}</span>
                </Button>
              ))}
            </div>
          </div>

          {/* Service Content */}
          <div className="lg:col-span-2">
            <Card className="service-card opacity-0 min-h-[400px]">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    {(() => {
                      const IconComponent = services[activeService].icon
                      return <IconComponent className="w-6 h-6 text-primary" />
                    })()}
                  </div>
                  <CardTitle className="text-2xl font-bold">{services[activeService].title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-lg">{services[activeService].description}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
