"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Hammer, Shield, Building2, Droplets, Flame, Zap, FlaskConical, ChevronDown } from "lucide-react"

interface ServicesSectionProps {
  language: "de" | "en"
}

export function ServicesSection({ language }: ServicesSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeService, setActiveService] = useState(0)
  const [expandedServices, setExpandedServices] = useState<number[]>([0])

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

  const content = {
    de: {
      title: "Unsere Fachbereiche",
      subtitle: "Spezialisierte Lösungen für Bauwerkinstandsetzung, Bautenschutz und industrielle Anwendungen mit höchsten Qualitätsstandards.",
      services: [
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
    },
    en: {
      title: "Our Specialties",
      subtitle: "Specialized solutions for structural repair, building protection and industrial applications with the highest quality standards.",
      services: [
        {
          icon: Hammer,
          title: "Structural Repair",
          description:
            "Various protection and repair techniques are used to repair damage to existing structures. The main goal of renovation is to eliminate the causes of damage, slow down or completely stop the progression of damage, and protect the structural framework. In addition, reinforcement of components is carried out to prevent long-term damage and sustainably repair existing damage. While minor damage is usually repaired with mortar, flowable materials such as concrete or grouting mortar are used for larger areas, such as bridge slabs. Spray technology is often used for large-scale objects.",
        },
        {
          icon: Shield,
          title: "Building Protection & Concrete Cosmetics",
          description:
            "Building protection and concrete cosmetics include areas such as coatings, surface protection systems, anti-graffiti treatments and flooring techniques. Coatings and surface protection systems are applied to protect reinforced concrete from external influences and thus improve durability. Techniques such as impregnations and coatings are used, which both reduce the porosity of the surface and strengthen the structure by partially or completely sealing pores and capillaries. Even high aesthetic demands can almost always be met by our specialists through filling and retouching.",
        },
        {
          icon: Building2,
          title: "Structural Reinforcement",
          description:
            "The upgrading or reinforcement of a structure is always determined by a structural engineer. Various methods are available to achieve the necessary reinforcement. BETOSAN can provide advisory support and take over the implementation of the measures. The increase or restoration of static load-bearing capacity is achieved through the use of CFRP and steel lamellas, carbon and glass fiber fabrics, prestressing methods (Memory-Steel) as well as special reinforcements for problems with punching shear. The choice of suitable method depends on various project factors such as costs, construction site conditions and environment.",
        },
        {
          icon: Droplets,
          title: "Waterproofing",
          description:
            "To prevent structural damage from moisture ingress into buildings, various techniques and materials are used for building waterproofing. Special methods such as injections, gelling, joint sealing, liquid plastic waterproofing and surface waterproofing are used. The choice of suitable method depends on the type of building, the damage pattern, the climatic conditions and the specific requirements. We therefore recommend using our professional advice and many years of experience.",
        },
        {
          icon: Flame,
          title: "Fire Protection",
          description:
            "At BETOSAN AG, we leave nothing to chance when it comes to fire protection. Fire protection coatings are often needed, especially in concrete repair, particularly when there is insufficient concrete cover of the reinforcement. We offer professional application of protective coatings and cladding of structures. We also secure supply lines that run through ceilings and walls with fire-resistant and smoke-tight fire barriers. Combustible lines are additionally protected with fire protection sleeves that act as a barrier in case of fire.",
        },
        {
          icon: Zap,
          title: "Steel Corrosion Protection",
          description:
            "Steel is a versatile and cost-effective building material, but it has one disadvantage: it corrodes in water, earth and the atmosphere. To prevent this, effective coating systems are essential. Corrosion protection for steel primarily means preserving value and safety. Without a functioning protective coating, many steel structures age quickly. This not only affects the appearance, but can also endanger the statics, in the worst case threatening demolition. The application of steel corrosion protection requires tested coating systems and, above all, the expertise of the executing company – a real matter of trust!",
        },
        {
          icon: FlaskConical,
          title: "Acid-Resistant Construction",
          description:
            "Aggressive media such as vegetable and animal oils, fats, plasticizers, acids, alkalis, solvents and salt solutions frequently cause damage to concrete, reinforced concrete and steel in industry. Therefore, the use of acid-resistant coatings, i.e. heavy corrosion protection, is essential. Strict legal regulations aim primarily at environmental protection. Our specialty in acid-resistant construction is the fabric-reinforced, conductive vinyl ester coating, which withstands even high loads. With additional mechanical stress, acid-resistant plates are used.",
        },
      ]
    }
  }

  const toggleServiceExpansion = (index: number) => {
    setExpandedServices((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{content[language].title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {content[language].subtitle}
          </p>
        </div>

        <div className="lg:hidden space-y-4">
          {content[language].services.map((service, index) => (
            <Card key={index} className="service-card opacity-0">
              <CardHeader className="cursor-pointer" onClick={() => toggleServiceExpansion(index)}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <service.icon className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg font-bold">{service.title}</CardTitle>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground transition-transform duration-200 ${
                      expandedServices.includes(index) ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </CardHeader>
              {expandedServices.includes(index) && (
                <CardContent className="pt-0">
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        <div className="hidden lg:grid lg:grid-cols-3 gap-8">
          {/* Service Navigation */}
          <div className="lg:col-span-1">
            <div className="space-y-2">
              {content[language].services.map((service, index) => (
                <Button
                  key={index}
                  variant={activeService === index ? "default" : "ghost"}
                  className="w-full justify-start text-left h-auto p-4 hover:bg-red-50 hover:text-red-700"
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
            <div className="lg:sticky lg:top-24">
              <Card className="service-card opacity-0 min-h-[400px]">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      {(() => {
                        const IconComponent = content[language].services[activeService].icon
                        return <IconComponent className="w-6 h-6 text-primary" />
                      })()}
                    </div>
                    <CardTitle className="text-2xl font-bold">{content[language].services[activeService].title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-lg">{content[language].services[activeService].description}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
