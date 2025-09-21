import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Award, Clock } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center industrial-texture">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/14.jpg-MRWhSaA2TkWx7GizG3UkcpnDUbLVm2.jpeg')`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
            Professionelle <span className="text-red-600">Betonsanierung</span> für dauerhafte Lösungen
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-gray-200 text-pretty">
            Spezialisiert auf Betonreparatur, Gebäudeschutz, Fassadensanierung, Balkonsanierung, Abdichtung und
            Korrosionsschutz
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="text-lg px-8 py-4 bg-red-600 hover:bg-red-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Jetzt Beratung anfragen
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20 hover:border-white/50 transition-all duration-300"
            >
              Unsere Projekte ansehen
            </Button>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/15 transition-all duration-300">
              <Shield className="h-8 w-8 text-red-500" />
              <div className="text-left">
                <h3 className="font-semibold">25+ Jahre</h3>
                <p className="text-sm text-gray-300">Erfahrung</p>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/15 transition-all duration-300">
              <Award className="h-8 w-8 text-red-500" />
              <div className="text-left">
                <h3 className="font-semibold">Zertifiziert</h3>
                <p className="text-sm text-gray-300">Nach DIN Standards</p>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/15 transition-all duration-300">
              <Clock className="h-8 w-8 text-red-500" />
              <div className="text-left">
                <h3 className="font-semibold">24/7</h3>
                <p className="text-sm text-gray-300">Notdienst</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
