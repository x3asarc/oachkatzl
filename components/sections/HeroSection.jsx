import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Star, MapPin, Users, Home } from 'lucide-react'

const HeroSection = ({ propertyData }) => {
  return (
    <div className="relative min-h-[80vh] md:min-h-screen bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/hero-background.jpg')`,
          backgroundBlendMode: 'overlay'
        }}
      />
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="relative max-w-7xl mx-auto px-4 py-12 md:py-24 flex items-center min-h-[80vh] md:min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          
          {/* Left Column - Hero Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 text-base px-4 py-2">
                {propertyData.property.type}
              </Badge>
              
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight leading-tight">
                Appartement<br />
                <span className="text-yellow-300">'Oachkatzl'</span>
              </h1>
              
              <p className="text-lg md:text-xl lg:text-2xl text-blue-100 leading-relaxed">
                Modern Retreat in Grossvolderberg
              </p>
              
              <p className="text-lg text-blue-100 max-w-xl">
                {propertyData.special_features.location_description} mit atemberaubendem Panoramablick auf die {propertyData.special_features.panoramic_view}.
              </p>
            </div>

            {/* Rating & Stats */}
            <div className="flex items-center gap-6 text-lg">
              <div className="flex items-center gap-2">
                <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                <span className="font-bold">{propertyData.ratings.overall_rating}/10</span>
              </div>
              <div className="h-6 w-px bg-white/30" />
              <span className="font-medium">{propertyData.ratings.rating_category}</span>
              <div className="h-6 w-px bg-white/30" />
              <span>{propertyData.ratings.total_reviews} Bewertungen</span>
            </div>

            {/* Quick Stats */}
            <div className="flex items-center gap-6 text-base">
              <div className="flex items-center gap-2">
                <Home className="w-5 h-5" />
                <span>{propertyData.accommodation_details.size}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>{propertyData.accommodation_details.max_guests} Gäste</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>{propertyData.property.coordinates.location_description}</span>
              </div>
            </div>

            {/* Primary CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold text-lg px-8 py-4 h-14">
                Verfügbarkeit prüfen
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-800 text-lg px-8 py-4 h-14">
                Jetzt buchen
              </Button>
            </div>
          </div>

          {/* Right Column - Key Features Card */}
          <div className="lg:justify-self-end">
            <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Highlights</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Panorama-Bergblick</p>
                      <p className="text-gray-600 text-sm">Nordkette und Tiroler Inntal</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Vollausgestattete Küche</p>
                      <p className="text-gray-600 text-sm">Alle Geräte und Utensilien vorhanden</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Terrasse & Garten</p>
                      <p className="text-gray-600 text-sm">Private Outdoor-Bereiche mit BBQ</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Kostenlose Parkplätze</p>
                      <p className="text-gray-600 text-sm">Private Stellplätze verfügbar</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">WLAN 10.0/10</p>
                      <p className="text-gray-600 text-sm">Perfekte Internetverbindung</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Haustiere willkommen</p>
                      <p className="text-gray-600 text-sm">Ihr vierbeiniger Freund ist dabei</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Ab</p>
                      <p className="text-2xl font-bold text-blue-600">€85<span className="text-base font-normal">/Nacht</span></p>
                    </div>
                    <Badge className="bg-green-100 text-green-800 border-green-200">
                      Verfügbar
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection