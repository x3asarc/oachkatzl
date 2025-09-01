import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Calendar, Clock, Users, Star, ArrowRight, Phone, Mail, Globe, Shield, CreditCard } from 'lucide-react'
import { useState } from 'react'

const BookingCTA = ({ variant = 'primary', propertyData, className = '' }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleBookingClick = () => {
    // This would typically redirect to Booking.com or open a booking form
    window.open('https://www.booking.com/hotel/at/appartement-39-oachkatzl-39.de.html', '_blank')
  }

  if (variant === 'primary') {
    return (
      <section className={`py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white ${className}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - CTA Content */}
            <div className="space-y-6">
              <div>
                <Badge className="bg-yellow-500 text-black mb-4">
                  🔥 Begrenzte Verfügbarkeit
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                  Bereit für Ihren<br />
                  <span className="text-yellow-300">Traumurlaub?</span>
                </h2>
                <p className="text-xl text-blue-100 mb-6">
                  Sichern Sie sich jetzt das Appartement 'Oachkatzl' mit seiner einzigartigen 
                  Kombination aus modernem Komfort und atemberaubender Naturkulisse.
                </p>
              </div>

              {/* Key Benefits */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span>Sofortige Bestätigung</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span>Kostenlose Stornierung bis 24h vorher</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span>Bestpreis-Garantie</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 pt-4">
                <Button 
                  size="lg" 
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold text-lg px-8 py-4 group min-h-[48px] touch-manipulation"
                  onClick={handleBookingClick}
                >
                  Jetzt buchen
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="border-white text-white hover:bg-white hover:text-blue-800 text-lg px-8 py-4 min-h-[48px] touch-manipulation"
                    >
                      Verfügbarkeit prüfen
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Verfügbarkeit prüfen</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <p className="text-gray-600">
                        Kontaktieren Sie uns direkt für aktuelle Verfügbarkeit und Sonderangebote:
                      </p>
                      <div className="space-y-3">
                        <a 
                          href="https://www.booking.com/hotel/at/appartement-39-oachkatzl-39.de.html" 
                          target="_blank" 
                          className="flex items-center gap-3 p-3 rounded-lg border hover:bg-gray-50 transition-colors"
                        >
                          <Globe className="w-5 h-5 text-blue-600" />
                          <span>Booking.com</span>
                        </a>
                        <a 
                          href="tel:+43123456789" 
                          className="flex items-center gap-3 p-3 rounded-lg border hover:bg-gray-50 transition-colors"
                        >
                          <Phone className="w-5 h-5 text-green-600" />
                          <span>+43 123 456 789</span>
                        </a>
                        <a 
                          href="mailto:info@oachkatzl.at" 
                          className="flex items-center gap-3 p-3 rounded-lg border hover:bg-gray-50 transition-colors"
                        >
                          <Mail className="w-5 h-5 text-orange-600" />
                          <span>info@oachkatzl.at</span>
                        </a>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>

            {/* Right Column - Booking Summary Card */}
            <Card className="bg-white text-gray-900 shadow-2xl">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold">Buchungsübersicht</h3>
                    <Badge className="bg-green-100 text-green-800">
                      Verfügbar
                    </Badge>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="font-medium">Check-in / Check-out</p>
                        <p className="text-sm text-gray-600">
                          {propertyData.policies.check_in.from} - {propertyData.policies.check_out.until}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="font-medium">Bis zu {propertyData.accommodation_details.max_guests} Gäste</p>
                        <p className="text-sm text-gray-600">
                          {propertyData.accommodation_details.bedrooms} Schlafzimmer, {propertyData.accommodation_details.bathrooms} Bad
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Star className="w-5 h-5 text-yellow-500" />
                      <div>
                        <p className="font-medium">{propertyData.ratings.overall_rating}/10 Bewertung</p>
                        <p className="text-sm text-gray-600">
                          {propertyData.ratings.rating_category} ({propertyData.ratings.total_reviews} Bewertungen)
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-lg font-semibold">Ab</span>
                      <span className="text-2xl sm:text-3xl font-bold text-blue-600">€139</span>
                    </div>
                    <p className="text-sm text-gray-600 text-right">pro Nacht</p>
                    <p className="text-xs text-gray-500 text-right">zzgl. €25 Reinigung</p>
                  </div>

                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6 min-h-[48px]"
                    onClick={handleBookingClick}
                  >
                    <Shield className="w-5 h-5 mr-2" />
                    Auf Booking.com reservieren
                  </Button>

                  <div className="space-y-2">
                    <div className="flex items-center justify-center gap-4 text-xs text-gray-600">
                      <div className="flex items-center gap-1">
                        <CreditCard className="w-3 h-3" />
                        <span>PayPal</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <CreditCard className="w-3 h-3" />
                        <span>SEPA</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Shield className="w-3 h-3" />
                        <span>SSL</span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 text-center">
                      Sichere Buchung • Kostenlose Stornierung • Sofortige Bestätigung
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    )
  }

  // Secondary variant (smaller, inline CTAs)
  return (
    <section className={`py-8 bg-blue-50 ${className}`}>
      <div className="max-w-4xl mx-auto px-4">
        <Card className="border-blue-200">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Überzeugt? Jetzt buchen!
                </h3>
                <p className="text-gray-600">
                  Sichern Sie sich Ihren Platz im Appartement 'Oachkatzl' 
                  und erleben Sie unvergessliche Momente in den Tiroler Bergen.
                </p>
              </div>
              <div className="flex gap-3 flex-shrink-0">
                <Button 
                  className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-blue-800 min-h-[48px]"
                  onClick={() => setIsDialogOpen(true)}
                >
                  Anfrage senden
                </Button>
                <Button 
                  className="bg-blue-600 hover:bg-blue-700"
                  onClick={handleBookingClick}
                >
                  Jetzt buchen
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default BookingCTA