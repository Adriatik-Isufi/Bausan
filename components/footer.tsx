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

          <div className="border-t border-primary-foreground/20 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex flex-col md:flex-row items-center gap-4">
                <p className="text-primary-foreground/60">{content[language].copyright}</p>
                <a 
                  href="/impressum" 
                  className="text-primary-foreground/60 hover:text-red-400 transition-colors duration-300"
                >
                  {language === 'de' ? 'Impressum' : 'Legal Notice'}
                </a>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/60">
                <span>Built by</span>
                <a 
                  href="https://www.linkedin.com/in/fatmir-nuredini/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors duration-300 font-medium"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  Fatmir Nuredini
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }