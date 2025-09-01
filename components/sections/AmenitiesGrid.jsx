import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { 
  Wifi, 
  Car, 
  ChefHat, 
  Trees, 
  Tv, 
  Snowflake, 
  Flame, 
  Heart, 
  PawPrint, 
  UtensilsCrossed,
  Refrigerator,
  WashingMachine, 
  Coffee,
  Mountain,
  Eye,
  Utensils,
  Barbecue,
  Flower
} from 'lucide-react'

const AmenitiesGrid = ({ propertyData }) => {
  const amenityCategories = [
    {
      title: 'Küche & Essen',
      icon: <ChefHat className="w-6 h-6" />,
      items: [
        { name: 'Vollausgestattete Küche', icon: <UtensilsCrossed className="w-5 h-5" />, included: true, description: 'Alle Küchengeräte und Utensilien vorhanden' },
        { name: 'Kühlschrank', icon: <Refrigerator className="w-5 h-5" />, included: true },
        { name: 'Geschirrspüler', icon: <Utensils className="w-5 h-5" />, included: true },
        { name: 'Backofen & Herd', icon: <Flame className="w-5 h-5" />, included: true },
        { name: 'Kaffeemaschine', icon: <Coffee className="w-5 h-5" />, included: true },
        { name: 'Toaster', icon: <UtensilsCrossed className="w-5 h-5" />, included: true },
        { name: 'Wasserkocher', icon: <Coffee className="w-5 h-5" />, included: true },
      ]
    },
    {
      title: 'Außenbereich',
      icon: <Trees className="w-6 h-6" />,
      items: [
        { name: 'Private Terrasse', icon: <Flower className="w-5 h-5" />, included: true, featured: true, description: 'Möblierte Terrasse mit Bergblick' },
        { name: 'Privater Garten', icon: <Trees className="w-5 h-5" />, included: true, featured: true, description: 'Gepflegter Garten mit Sitzbereich' },
        { name: 'Grillmöglichkeit', icon: <Barbecue className="w-5 h-5" />, included: true, description: 'BBQ-Bereich für gesellige Abende' },
        { name: 'Gartenmöbel', icon: <Flower className="w-5 h-5" />, included: true },
        { name: 'Outdoor Essbereich', icon: <UtensilsCrossed className="w-5 h-5" />, included: true }
      ]
    },
    {
      title: 'Konnektivität & Entertainment',
      icon: <Tv className="w-6 h-6" />,
      items: [
        { 
          name: 'WLAN', 
          icon: <Wifi className="w-5 h-5" />, 
          included: true, 
          featured: true,
          rating: propertyData.amenities.internet.wifi_rating,
          description: `Hervorragende Internetverbindung mit ${propertyData.amenities.internet.wifi_rating}/10 Bewertung`
        },
        { name: 'Flat-Screen TV', icon: <Tv className="w-5 h-5" />, included: true },
        { name: 'Streaming Services', icon: <Tv className="w-5 h-5" />, included: true, description: 'Netflix, Amazon Prime & mehr verfügbar' }
      ]
    },
    {
      title: 'Komfort & Ausstattung',
      icon: <Heart className="w-6 h-6" />,
      items: [
        { name: 'Fußbodenheizung', icon: <Snowflake className="w-5 h-5" />, included: true, featured: true, description: 'Warme Füße auch im Winter' },
        { name: 'Kamin', icon: <Flame className="w-5 h-5" />, included: true, featured: true, description: 'Gemütliche Atmosphäre an kalten Abenden' },
        { name: 'Waschmaschine', icon: <WashingMachine className="w-5 h-5" />, included: true },
        { name: 'Allergikerfreundlich', icon: <Heart className="w-5 h-5" />, included: true, description: 'Geeignet für Allergiker' },
        { name: 'Skiaufbewahrung', icon: <Mountain className="w-5 h-5" />, included: true, description: 'Sicherer Raum für Skiausrüstung' }
      ]
    },
    {
      title: 'Parkplatz & Transport',
      icon: <Car className="w-6 h-6" />,
      items: [
        { 
          name: 'Kostenloser Parkplatz', 
          icon: <Car className="w-5 h-5" />, 
          included: true, 
          featured: true,
          description: `${propertyData.amenities.parking.type} - ${propertyData.amenities.parking.cost}` 
        }
      ]
    },
    {
      title: 'Haustiere & Familie',
      icon: <PawPrint className="w-6 h-6" />,
      items: [
        { 
          name: 'Haustiere willkommen', 
          icon: <PawPrint className="w-5 h-5" />, 
          included: true, 
          featured: true,
          description: `${propertyData.policies.pets.fee} - Ihr vierbeiniger Begleiter ist herzlich willkommen`
        },
        { name: 'Familienfreundlich', icon: <Heart className="w-5 h-5" />, included: true, description: 'Geeignet für alle Altersgruppen' }
      ]
    },
    {
      title: 'Aussicht & Lage',
      icon: <Mountain className="w-6 h-6" />,
      items: [
        { name: 'Bergblick', icon: <Mountain className="w-5 h-5" />, included: true, featured: true, description: propertyData.special_features.panoramic_view },
        { name: 'Gartenblick', icon: <Trees className="w-5 h-5" />, included: true },
        { name: 'Stadtblick', icon: <Eye className="w-5 h-5" />, included: true }
      ]
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ausstattung & Annehmlichkeiten
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Das Appartement 'Oachkatzl' bietet alles was Sie für einen komfortablen 
            und unvergesslichen Aufenthalt benötigen - von der vollausgestatteten Küche 
            bis hin zum atemberaubenden Bergpanorama.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {amenityCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                    {category.icon}
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {category.items.map((item, itemIndex) => (
                  <TooltipProvider key={itemIndex}>
                    <div className="flex items-center gap-3 group">
                      <div className={`p-2 rounded-lg ${item.featured ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'}`}>
                        {item.icon}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          {item.description ? (
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <span className="font-medium text-gray-900 cursor-help hover:text-blue-600 transition-colors">
                                  {item.name}
                                </span>
                              </TooltipTrigger>
                              <TooltipContent className="max-w-xs">
                                <p>{item.description}</p>
                              </TooltipContent>
                            </Tooltip>
                          ) : (
                            <span className="font-medium text-gray-900">
                              {item.name}
                            </span>
                          )}
                          
                          {item.featured && (
                            <Badge variant="secondary" className="text-xs bg-yellow-100 text-yellow-800">
                              ⭐ Highlight
                            </Badge>
                          )}
                          
                          {item.rating && (
                            <Badge className="text-xs bg-green-100 text-green-800">
                              {item.rating}/10
                            </Badge>
                          )}
                        </div>
                        
                        {item.description && (
                          <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                            {item.description}
                          </p>
                        )}
                      </div>
                      
                      {item.included && (
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-green-600 text-sm font-bold">✓</span>
                        </div>
                      )}
                    </div>
                  </TooltipProvider>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Special Highlights Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Besondere Highlights</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wifi className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-lg mb-2">Perfektes WLAN</h4>
              <p className="text-gray-600 mb-2">
                {propertyData.amenities.internet.wifi_rating}/10 Bewertung
              </p>
              <Badge className="bg-blue-600">Ideal für Remote Work</Badge>
            </Card>

            <Card className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 border-green-200">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mountain className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-lg mb-2">Panorama-Bergblick</h4>
              <p className="text-gray-600 mb-2">
                {propertyData.special_features.panoramic_view}
              </p>
              <Badge className="bg-green-600">Einzigartige Lage</Badge>
            </Card>

            <Card className="text-center p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-lg mb-2">Kostenloser Parkplatz</h4>
              <p className="text-gray-600 mb-2">
                Private Stellplätze direkt vor Ort
              </p>
              <Badge className="bg-yellow-600">Immer verfügbar</Badge>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AmenitiesGrid