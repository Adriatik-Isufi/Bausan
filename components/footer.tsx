export function Footer() {
    return (
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-2xl font-bold mb-4">
                BETOSAN <span className="text-accent">AG</span>
              </h3>
              <p className="text-primary-foreground/80 mb-4">
                Ihr zuverlässiger Partner für professionelle Bauwerkinstandsetzung und Bautenschutz in der Schweiz.
              </p>
              <div className="space-y-2 text-primary-foreground/80">
                <p>Schachenstrasse 28</p>
                <p>4653 Obergösgen</p>
                <p>Schweiz</p>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
              <div className="space-y-2 text-primary-foreground/80">
                <p>Telefon: +41 76 273 0803</p>
                <p>E-Mail: bausan@gmx.ch</p>
              </div>
              <div className="mt-4">
                <h5 className="font-semibold mb-2">Arbeitszeiten</h5>
                <div className="space-y-1 text-sm text-primary-foreground/80">
                  <p>Montag - Freitag: 07:00 - 17:00</p>
                  <p>Samstag: 08:00 - 12:00</p>
                  <p>Sonntag: Geschlossen</p>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Leistungen</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>Bauwerkinstandsetzung</li>
                <li>Bautenschutz & Betonkosmetik</li>
                <li>Tragwerkverstärkung</li>
                <li>Abdichtung</li>
                <li>Brandschutz</li>
                <li>Stahl-Korrosionsschutz</li>
                <li>Säureschutzbau</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
            <p className="text-primary-foreground/60">© 2025 BETOSAN AG. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    )
  }