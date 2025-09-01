import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Home, 
  Users, 
  Bed, 
  Bath, 
  Clock, 
  MapPin, 
  Info, 
  Shield,
  Heart,
  Cigarette,
  CigaretteOff,
  PartyPopper,
  PawPrint,
  Baby,
  Calendar,
  Ruler
} from 'lucide-react'

const PropertyDetails = ({ propertyData }) => {
  const accommodationDetails = [
    { 
      icon: <Ruler className="w-5 h-5" />, 
      label: 'Wohnfläche', 
      value: propertyData.accommodation_details.size,
      description: 'Geräumige Wohnung mit optimaler Raumaufteilung'
    },
    { 
      icon: <Bed className="w-5 h-5" />, 
      label: 'Schlafzimmer', 
      value: propertyData.accommodation_details.bedrooms,
      description: '2 separate Schlafbereiche für maximalen Komfort'
    },
    { 
      icon: <Bath className="w-5 h-5" />, 
      label: 'Badezimmer', 
      value: propertyData.accommodation_details.bathrooms,
      description: 'Modern ausgestattetes Badezimmer'
    },
    { 
      icon: <Users className="w-5 h-5" />, 
      label: 'Max. Gäste', 
      value: propertyData.accommodation_details.max_guests,
      description: 'Ideal für Familien oder kleine Gruppen'
    }
  ]

  const policies = [
    {
      icon: <Clock className="w-5 h-5 text-blue-600" />,
      title: 'Check-in',
      value: `${propertyData.policies.check_in.from} - ${propertyData.policies.check_in.until}`,
      description: 'Flexible Ankunftszeiten für Ihre Bequemlichkeit'
    },
    {
      icon: <Clock className="w-5 h-5 text-orange-600" />,
      title: 'Check-out', 
      value: `${propertyData.policies.check_out.from} - ${propertyData.policies.check_out.until}`,
      description: 'Entspannter Abreisetag ohne Zeitdruck'
    },
    {
      icon: propertyData.policies.smoking ? <Cigarette className="w-5 h-5 text-red-600" /> : <CigaretteOff className="w-5 h-5 text-green-600" />,
      title: 'Rauchen',
      value: propertyData.policies.smoking ? 'Erlaubt' : 'Nicht gestattet',
      description: propertyData.policies.smoking ? 'Rauchen in ausgewiesenen Bereichen' : 'Rauchfreie Unterkunft für frische Luft',
      allowed: propertyData.policies.smoking
    },
    {
      icon: <PartyPopper className="w-5 h-5 text-red-600" />,
      title: 'Partys/Events',
      value: propertyData.policies.parties ? 'Erlaubt' : 'Nicht gestattet',
      description: 'Ruhige Umgebung für erholsamen Aufenthalt',
      allowed: propertyData.policies.parties
    },
    {
      icon: <PawPrint className="w-5 h-5 text-blue-600" />,
      title: 'Haustiere',
      value: propertyData.policies.pets.allowed ? `Erlaubt (${propertyData.policies.pets.fee})` : 'Nicht erlaubt',
      description: 'Ihr vierbeiniger Begleiter ist herzlich willkommen',
      allowed: propertyData.policies.pets.allowed
    },
    {
      icon: <Baby className="w-5 h-5 text-green-600" />,
      title: 'Kinder',
      value: propertyData.policies.children.all_ages_welcome ? 'Alle Altersgruppen' : 'Eingeschränkt',
      description: 'Familienfreundliche Unterkunft',
      allowed: propertyData.policies.children.all_ages_welcome
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Unterkunfts-Details
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Alle wichtigen Informationen über das Appartement 'Oachkatzl' - 
            von der Ausstattung über Hausregeln bis hin zu Check-in Details.
          </p>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <Home className="w-4 h-4" />
              <span className="hidden sm:inline">Übersicht</span>
            </TabsTrigger>
            <TabsTrigger value="rooms" className="flex items-center gap-2">
              <Bed className="w-4 h-4" />
              <span className="hidden sm:inline">Zimmer</span>
            </TabsTrigger>
            <TabsTrigger value="policies" className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span className="hidden sm:inline">Hausregeln</span>
            </TabsTrigger>
            <TabsTrigger value="location" className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span className="hidden sm:inline">Lage</span>
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {accommodationDetails.map((detail, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                      {detail.icon}
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">
                      {detail.value}
                    </div>
                    <div className="font-medium text-gray-900 mb-2">
                      {detail.label}
                    </div>
                    <p className="text-sm text-gray-600">
                      {detail.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Property Highlights */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Info className="w-6 h-6" />
                  Wichtige Informationen
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-blue-600" />
                      Renovierung & Modernisierung
                    </h4>
                    <p className="text-gray-600 mb-2">
                      Komplett renoviert in {propertyData.special_features.renovation_year}
                    </p>
                    <Badge className="bg-green-100 text-green-800">
                      Neueste Ausstattung
                    </Badge>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Home className="w-5 h-5 text-blue-600" />
                      Objekttyp
                    </h4>
                    <p className="text-gray-600 mb-2">
                      {propertyData.accommodation_details.private_property ? 'Private Ferienwohnung' : 'Gewerbliche Unterkunft'}
                    </p>
                    <Badge className="bg-blue-100 text-blue-800">
                      Privat betrieben
                    </Badge>
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="font-semibold mb-3">Adresse</h4>
                  <div className="text-gray-600">
                    <p>{propertyData.property.address.street}</p>
                    <p>{propertyData.property.address.postal_code} {propertyData.property.address.city}</p>
                    <p>{propertyData.property.address.country}</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Besondere Hinweise</h4>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <Info className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-yellow-800 mb-1">Anfahrt beachten</p>
                        <p className="text-yellow-700 text-sm">
                          {propertyData.special_features.access_note}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Rooms Tab */}
          <TabsContent value="rooms" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bed className="w-6 h-6" />
                    Schlafzimmer 1
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Betttyp:</span>
                      <span className="font-medium">{propertyData.accommodation_details.bedroom_configuration.bedroom_1}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Für Personen:</span>
                      <span className="font-medium">2 Erwachsene</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      Geräumiges Hauptschlafzimmer mit komfortablem Doppelbett und Bergblick
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bed className="w-6 h-6" />
                    Schlafzimmer 2
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Betttyp:</span>
                      <span className="font-medium">{propertyData.accommodation_details.bedroom_configuration.bedroom_2}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Für Personen:</span>
                      <span className="font-medium">2 Personen</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      Perfekt für Kinder oder zusätzliche Gäste - funktional und gemütlich eingerichtet
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bath className="w-6 h-6" />
                  Badezimmer & weitere Räume
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <Bath className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <h4 className="font-semibold mb-1">Badezimmer</h4>
                    <p className="text-sm text-gray-600">Modern, mit Dusche/Badewanne</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <Home className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <h4 className="font-semibold mb-1">Wohnbereich</h4>
                    <p className="text-sm text-gray-600">Gemütlich mit Kamin</p>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <Ruler className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                    <h4 className="font-semibold mb-1">Küche</h4>
                    <p className="text-sm text-gray-600">Vollausgestattet & modern</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Policies Tab */}
          <TabsContent value="policies" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {policies.map((policy, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-gray-100 rounded-lg">
                        {policy.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-2">{policy.title}</h4>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-medium">{policy.value}</span>
                          {policy.allowed !== undefined && (
                            <Badge 
                              variant={policy.allowed ? "default" : "secondary"}
                              className={policy.allowed ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}
                            >
                              {policy.allowed ? '✓ Erlaubt' : '✗ Nicht erlaubt'}
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-gray-600">{policy.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Location Tab */}
          <TabsContent value="location" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="w-6 h-6" />
                    Lage & Bewertung
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                    <div>
                      <p className="font-semibold">Lage-Bewertung</p>
                      <p className="text-sm text-gray-600">{propertyData.property.coordinates.location_description}</p>
                    </div>
                    <Badge className="bg-blue-600 text-2xl px-4 py-2">
                      {propertyData.property.coordinates.location_rating}/10
                    </Badge>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Panoramablick</h4>
                    <p className="text-gray-600 mb-3">{propertyData.special_features.panoramic_view}</p>
                    <div className="flex flex-wrap gap-2">
                      {propertyData.amenities.views.map((view, index) => (
                        <Badge key={index} variant="outline">{view}</Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Sprachen & Kommunikation</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Gesprochene Sprachen</h4>
                      <div className="flex gap-2">
                        {propertyData.languages_spoken.map((lang, index) => (
                          <Badge key={index} className="bg-green-100 text-green-800">
                            {lang}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Erreichbarkeit</h4>
                      <p className="text-sm text-gray-600 mb-3">
                        Unsere Gastgeber sprechen fließend Deutsch und Englisch und 
                        stehen Ihnen für alle Fragen zur Verfügung.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

export default PropertyDetails