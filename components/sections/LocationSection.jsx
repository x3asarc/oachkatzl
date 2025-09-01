import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  MapPin, 
  Navigation, 
  Car, 
  Train, 
  Plane, 
  Mountain, 
  Camera,
  Clock,
  ExternalLink,
  Star
} from 'lucide-react'

const LocationSection = ({ propertyData }) => {
  const address = `${propertyData.property.address.street}, ${propertyData.property.address.postal_code} ${propertyData.property.address.city}, ${propertyData.property.address.country}`
  
  // Using OpenStreetMap with Mapbox for clean, modern map integration
  const mapboxEmbedUrl = `https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-s-home+3b82f6(11.5,47.29)/${11.5},${47.29},12,0/800x400@2x?access_token=pk.eyJ1IjoiZXhhbXBsZSIsImEiOiJja2x2cWVjdGYwMDFhMm5wZmFyNGZpNWd1In0.example`
  
  // Fallback to Google Maps static image (more reliable)
  const googleMapsStaticUrl = `https://maps.googleapis.com/maps/api/staticmap?center=Grossvolderberg,Austria&zoom=13&size=800x400&maptype=roadmap&markers=color:blue%7Clabel:A%7CGrossvolderberg,Austria&key=YOUR_GOOGLE_MAPS_API_KEY`
  
  // Simple embedded map using OpenStreetMap
  const osmEmbedUrl = `https://www.openstreetmap.org/export/embed.html?bbox=11.45%2C47.25%2C11.55%2C47.33&layer=mapnik&marker=47.29%2C11.5`

  const nearbyAttractions = [
    ...propertyData.nearby_attractions.within_5km.map(attraction => ({
      ...attraction,
      category: 'Nahbereich',
      time: 'Zu Fuß erreichbar'
    })),
    ...propertyData.nearby_attractions.major_attractions.map(attraction => ({
      ...attraction,
      category: 'Sehenswürdigkeiten',
      time: 'Mit dem Auto'
    }))
  ]

  const transportationOptions = [
    {
      icon: <Car className="w-6 h-6" />,
      title: 'Mit dem Auto',
      description: 'Kostenlose Parkplätze direkt vor Ort',
      details: [
        'A12 Inntalautobahn - Ausfahrt Volders',
        '5 Minuten vom Dorfzentrum Volders',
        'Private Stellplätze kostenfrei'
      ],
      primary: true
    },
    {
      icon: <Train className="w-6 h-6" />,
      title: 'Mit der Bahn',
      description: 'Bahnhof Volders in 5 Minuten erreichbar',
      details: [
        'Bahnhof Volders: 2 km entfernt',
        'Direktverbindung nach Innsbruck',
        'Taxi oder Abholung möglich'
      ]
    },
    {
      icon: <Plane className="w-6 h-6" />,
      title: 'Mit dem Flugzeug',
      description: 'Flughafen Innsbruck nur 21 km entfernt',
      details: [
        'Flughafen Innsbruck: 21 km',
        'Mietwagen am Flughafen verfügbar',
        'Transfer auf Anfrage'
      ]
    }
  ]

  const activities = propertyData.activities.map(activity => {
    const activityDetails = {
      'Wandern': { icon: <Mountain className="w-5 h-5" />, season: 'Ganzjährig', difficulty: 'Alle Level' },
      'Skifahren': { icon: <Mountain className="w-5 h-5" />, season: 'Winter', difficulty: 'Alle Level' },
      'Fahrradfahren': { icon: <Navigation className="w-5 h-5" />, season: 'Apr-Okt', difficulty: 'Einfach-Mittel' },
      'Mountainbiking': { icon: <Navigation className="w-5 h-5" />, season: 'Mai-Okt', difficulty: 'Mittel-Schwer' },
      'Reiten': { icon: <Mountain className="w-5 h-5" />, season: 'Apr-Nov', difficulty: 'Alle Level' }
    }
    return {
      name: activity,
      ...activityDetails[activity] || { icon: <Star className="w-5 h-5" />, season: 'Ganzjährig', difficulty: 'Alle Level' }
    }
  })

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Lage & Umgebung
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Entdecken Sie die privilegierte Lage des Appartements 'Oachkatzl' 
            im idyllischen Grubertal mit direktem Zugang zu den schönsten 
            Ausflugszielen Tirols.
          </p>
          <Badge className="bg-blue-600 text-white text-lg px-6 py-3">
            <Star className="w-5 h-5 mr-2" />
            {propertyData.property.coordinates.location_rating}/10 Lage-Bewertung
          </Badge>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Interactive Map */}
          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-6 h-6 text-blue-600" />
                Standort
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="relative">
                {/* Embedded Map */}
                <iframe
                  src={osmEmbedUrl}
                  width="100%"
                  height="400"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  className="rounded-b-lg"
                  title="Karte des Appartement Oachkatzl Standorts"
                />
                
                {/* Map Overlay with Address */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">Appartement 'Oachkatzl'</h4>
                      <p className="text-sm text-gray-600 mb-2">{address}</p>
                      <Badge className="bg-green-100 text-green-800">
                        {propertyData.property.coordinates.location_description}
                      </Badge>
                    </div>
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => window.open(`https://maps.google.com/maps?q=${encodeURIComponent(address)}`, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Route
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Location Details */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Lage-Highlights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mountain className="w-5 h-5 text-green-600 mt-1" />
                  <div>
                    <p className="font-medium">Panorama-Bergblick</p>
                    <p className="text-sm text-gray-600">{propertyData.special_features.panoramic_view}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <p className="font-medium">Idyllisches Grubertal</p>
                    <p className="text-sm text-gray-600">{propertyData.special_features.location_description}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Navigation className="w-5 h-5 text-purple-600 mt-1" />
                  <div>
                    <p className="font-medium">Ausgezeichnete Anbindung</p>
                    <p className="text-sm text-gray-600">Zentral gelegen mit schnellem Zugang zu allen Attraktionen</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Distance Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Entfernungen
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="font-semibold text-blue-600">2 km</div>
                    <div className="text-gray-600">Volders Zentrum</div>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <div className="font-semibold text-green-600">4.4 km</div>
                    <div className="text-gray-600">Swarovski Kristallwelten</div>
                  </div>
                  <div className="text-center p-3 bg-purple-50 rounded-lg">
                    <div className="font-semibold text-purple-600">17 km</div>
                    <div className="text-gray-600">Innsbruck Zentrum</div>
                  </div>
                  <div className="text-center p-3 bg-orange-50 rounded-lg">
                    <div className="font-semibold text-orange-600">21 km</div>
                    <div className="text-gray-600">Flughafen</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Detailed Information Tabs */}
        <Tabs defaultValue="attractions" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="attractions" className="flex items-center gap-2">
              <Camera className="w-4 h-4" />
              Sehenswürdigkeiten
            </TabsTrigger>
            <TabsTrigger value="transport" className="flex items-center gap-2">
              <Navigation className="w-4 h-4" />
              Anreise
            </TabsTrigger>
            <TabsTrigger value="activities" className="flex items-center gap-2">
              <Mountain className="w-4 h-4" />
              Aktivitäten
            </TabsTrigger>
          </TabsList>

          <TabsContent value="attractions" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {nearbyAttractions.map((attraction, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-semibold text-gray-900 pr-2">{attraction.name}</h4>
                      <Badge variant="outline" className="text-xs flex-shrink-0">
                        {attraction.category}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">{attraction.time}</span>
                      <span className="font-medium text-blue-600">{attraction.distance}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="transport" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {transportationOptions.map((option, index) => (
                <Card key={index} className={`hover:shadow-lg transition-shadow ${option.primary ? 'ring-2 ring-blue-500' : ''}`}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${option.primary ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`}>
                        {option.icon}
                      </div>
                      {option.title}
                      {option.primary && <Badge className="bg-blue-600">Empfohlen</Badge>}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{option.description}</p>
                    <ul className="space-y-2">
                      {option.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-6 bg-yellow-50 border-yellow-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Navigation className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-yellow-800 mb-2">Wichtiger Hinweis zur Anfahrt</h4>
                    <p className="text-yellow-700 text-sm">
                      {propertyData.special_features.access_note}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="activities" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {activities.map((activity, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                      {activity.icon}
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">{activity.name}</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Saison:</span>
                        <span className="font-medium">{activity.season}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Level:</span>
                        <span className="font-medium">{activity.difficulty}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

export default LocationSection