interface FooterProps {
  language: "de" | "en"
}

export function Footer({ language }: FooterProps) {
  const content = {
    de: {
      companyName: "BETOSAN",
      companyType: "AG",
      description: "Ihr zuverlässiger Partner für professionelle Bauwerkinstandsetzung und Bautenschutz in der Schweiz.",
      address: {
        street: "Schachenstrasse 28",
        city: "4653 Obergösgen",
        country: "Schweiz"
      },
      contact: "Kontakt",
      phone: "Telefon: +41 76 273 0803",
      email: "E-Mail: bausan@gmx.ch",
      workingHours: "Arbeitszeiten",
      monday: "Montag - Freitag: 07:00 - 17:00",
      saturday: "Samstag: 08:00 - 12:00",
      sunday: "Sonntag: Geschlossen",
      services: "Leistungen",
      servicesList: [
        "Bauwerkinstandsetzung",
        "Bautenschutz & Betonkosmetik",
        "Tragwerkverstärkung",
        "Abdichtung",
        "Brandschutz",
        "Stahl-Korrosionsschutz",
        "Säureschutzbau"
      ],
      copyright: "© 2025 BETOSAN AG. Alle Rechte vorbehalten."
    },
    en: {
      companyName: "BETOSAN",
      companyType: "AG",
      description: "Your reliable partner for professional structural repair and building protection in Switzerland.",
      address: {
        street: "Schachenstrasse 28",
        city: "4653 Obergösgen",
        country: "Switzerland"
      },
      contact: "Contact",
      phone: "Phone: +41 76 273 0803",
      email: "Email: bausan@gmx.ch",
      workingHours: "Working Hours",
      monday: "Monday - Friday: 07:00 - 17:00",
      saturday: "Saturday: 08:00 - 12:00",
      sunday: "Sunday: Closed",
      services: "Services",
      servicesList: [
        "Structural Repair",
        "Building Protection & Concrete Cosmetics",
        "Structural Reinforcement",
        "Waterproofing",
        "Fire Protection",
        "Steel Corrosion Protection",
        "Acid-resistant Construction"
      ],
      copyright: "© 2025 BETOSAN AG. All rights reserved."
    }
  }
    return (
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-2xl font-bold mb-4">
                {content[language].companyName} <span className="text-accent">{content[language].companyType}</span>
              </h3>
              <p className="text-primary-foreground/80 mb-4">
                {content[language].description}
              </p>
              <div className="space-y-2 text-primary-foreground/80">
                <p>{content[language].address.street}</p>
                <p>{content[language].address.city}</p>
                <p>{content[language].address.country}</p>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-4">{content[language].contact}</h4>
              <div className="space-y-2 text-primary-foreground/80">
                <p>{content[language].phone}</p>
                <p>{content[language].email}</p>
              </div>
              <div className="mt-4">
                <h5 className="font-semibold mb-2">{content[language].workingHours}</h5>
                <div className="space-y-1 text-sm text-primary-foreground/80">
                  <p>{content[language].monday}</p>
                  <p>{content[language].saturday}</p>
                  <p>{content[language].sunday}</p>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">{content[language].services}</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                {content[language].servicesList.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
            <p className="text-primary-foreground/60">{content[language].copyright}</p>
          </div>
        </div>
      </footer>
    )
  }