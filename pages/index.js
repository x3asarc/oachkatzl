import Head from 'next/head'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

const propertyData = {
  "property": {
    "name": "Appartement 'Oachkatzl'",
    "type": "Ferienwohnung",
    "address": {
      "street": "16 Grubertalstraße",
      "postal_code": "6111",
      "city": "Grossvolderberg",
      "country": "Österreich"
    },
    "coordinates": {
      "location_rating": 9.2,
      "location_description": "Hervorragende Lage"
    }
  },
  "ratings": {
    "overall_rating": 9.7,
    "rating_category": "Außergewöhnlich",
    "total_reviews": 35,
    "detailed_ratings": {
      "staff": 9.9,
      "facilities": 9.8,
      "cleanliness": 9.7,
      "comfort": 9.7,
      "value_for_money": 9.8,
      "location": 9.2,
      "wifi": 10.0
    },
    "quality_rating": "4 von 5"
  },
  "accommodation_details": {
    "size": "54 m²",
    "bedrooms": 2,
    "bathrooms": 1,
    "max_guests": 4,
    "bedroom_configuration": {
      "bedroom_1": "1 Doppelbett",
      "bedroom_2": "2 Etagenbetten"
    },
    "private_property": true
  },
  "amenities": {
    "internet": {
      "wifi": true,
      "wifi_rating": 10.0,
      "wifi_areas": "einige Zimmer/Wohneinheiten"
    },
    "parking": {
      "available": true,
      "type": "Private Parkplätze",
      "cost": "kostenfrei",
      "reservation_required": false
    },
    "kitchen": {
      "fully_equipped": true,
      "appliances": [
        "Kühlschrank",
        "Geschirrspüler",
        "Backofen",
        "Herdplatte",
        "Toaster",
        "Kaffeemaschine",
        "Wasserkocher",
        "Waschmaschine"
      ]
    },
    "outdoor": {
      "terrace": true,
      "balcony": true,
      "garden": true,
      "bbq": true,
      "garden_furniture": true,
      "outdoor_dining_area": true
    },
    "views": [
      "Bergblick",
      "Stadtblick",
      "Gartenblick"
    ],
    "entertainment": {
      "tv": true,
      "flat_screen": true,
      "streaming_services": true
    },
    "other": [
      "Skiaufbewahrung",
      "Fußbodenheizung",
      "Kamin",
      "Allergikerfreundlich",
      "Haustiere erlaubt"
    ]
  },
  "policies": {
    "check_in": {
      "from": "15:00",
      "until": "00:00"
    },
    "check_out": {
      "from": "10:00",
      "until": "11:00"
    },
    "smoking": false,
    "parties": false,
    "pets": {
      "allowed": true,
      "fee": "30 EUR pro Aufenthalt"
    },
    "children": {
      "all_ages_welcome": true,
      "extra_beds": false,
      "baby_beds": false
    }
  },
  "nearby_attractions": {
    "within_5km": [
      {
        "name": "Pfarrkirche Hl. Johannes",
        "distance": "2.1 km"
      },
      {
        "name": "Swarovski Kristallwelten",
        "distance": "4.4 km"
      }
    ],
    "major_attractions": [
      {
        "name": "Schloss Ambras",
        "distance": "17 km"
      },
      {
        "name": "Kaiserliche Hofburg Innsbruck",
        "distance": "17 km"
      },
      {
        "name": "Hauptbahnhof Innsbruck",
        "distance": "18 km"
      },
      {
        "name": "Flughafen Innsbruck",
        "distance": "21 km"
      }
    ]
  },
  "activities": [
    "Wandern",
    "Skifahren",
    "Fahrradfahren",
    "Mountainbiking",
    "Reiten"
  ],
  "languages_spoken": [
    "Deutsch",
    "Englisch"
  ],
  "special_features": {
    "renovation_year": 2021,
    "access_note": "Sehr steile, geteerte Straße - im Winter Schneeketten/Allrad empfehlenswert",
    "location_description": "Idyllisches Grubertal, 5 Fahrminuten vom Dorfzentrum Volders",
    "panoramic_view": "Nordkette und Tiroler Inntal"
  },
  "guest_reviews_highlights": [
    "Die Aussicht, die Lage in der Natur, die Einrichtung und die Liebe im Detail",
    "Schön eingerichtet, war alles da, was man braucht, schöne Lage mit schönem Blick",
    "Eine sehr schöne Wohnung, gemütlich eingerichtet und mit allem ausgestattet",
    "Top Lage für Bergurlaub, umfangreiche saubere und hochwertige Ausstattung",
    "Wunderschöne Unterkunft, rustikal aber auch modern, beste Lage mit wunderbarem Ausblick"
  ],
  "booking_info": {
    "platform": "Booking.com",
    "genius_discount_available": true,
    "same_price_guarantee": true,
    "currency": "EUR"
  }
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Appartement 'Oachkatzl' - Ferienwohnung in Grossvolderberg</title>
        <meta name="description" content="Das Appartement 'Oachkatzl' bietet eine gemütliche Unterkunft mit Bergblick, Garten und Terrasse. Ideal für einen ruhigen Urlaub in der Natur." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="language" content="de-DE" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 py-24">
            <div className="text-center space-y-6">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                {propertyData.property.type}
              </Badge>
              <h1 className="text-5xl font-bold tracking-tight">
                {propertyData.property.name}
              </h1>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                {propertyData.special_features.location_description}
              </p>
              <div className="flex items-center justify-center gap-4 text-lg">
                <span>⭐ {propertyData.ratings.overall_rating}/10</span>
                <span>•</span>
                <span>{propertyData.ratings.rating_category}</span>
                <span>•</span>
                <span>{propertyData.ratings.total_reviews} Bewertungen</span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
          {/* Quick Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-blue-600">{propertyData.accommodation_details.size}</div>
                <div className="text-sm text-gray-600">Wohnfläche</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-blue-600">{propertyData.accommodation_details.bedrooms}</div>
                <div className="text-sm text-gray-600">Schlafzimmer</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-blue-600">{propertyData.accommodation_details.max_guests}</div>
                <div className="text-sm text-gray-600">Gäste</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-blue-600">{propertyData.special_features.renovation_year}</div>
                <div className="text-sm text-gray-600">Renoviert</div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Property Details */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    🏠 Unterkunftsdetails
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Adresse</h4>
                    <p className="text-gray-700">
                      {propertyData.property.address.street}<br/>
                      {propertyData.property.address.postal_code} {propertyData.property.address.city}<br/>
                      {propertyData.property.address.country}
                    </p>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="font-semibold mb-2">Zimmeraufteilung</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Schlafzimmer 1: {propertyData.accommodation_details.bedroom_configuration.bedroom_1}</li>
                      <li>• Schlafzimmer 2: {propertyData.accommodation_details.bedroom_configuration.bedroom_2}</li>
                      <li>• {propertyData.accommodation_details.bathrooms} Badezimmer</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Amenities */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    ⚡ Ausstattung
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">Küche</h4>
                    <div className="flex flex-wrap gap-2">
                      {propertyData.amenities.kitchen.appliances.map((appliance, i) => (
                        <Badge key={i} variant="secondary">{appliance}</Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Außenbereich</h4>
                    <div className="flex flex-wrap gap-2">
                      {propertyData.amenities.views.map((view, i) => (
                        <Badge key={i} variant="outline">{view}</Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Weitere Ausstattung</h4>
                    <div className="flex flex-wrap gap-2">
                      {propertyData.amenities.other.map((item, i) => (
                        <Badge key={i} variant="secondary">{item}</Badge>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium">WLAN:</span> ⭐ {propertyData.amenities.internet.wifi_rating}/10
                    </div>
                    <div>
                      <span className="font-medium">Parkplatz:</span> {propertyData.amenities.parking.cost}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Activities */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    🏔️ Aktivitäten in der Umgebung
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {propertyData.activities.map((activity, i) => (
                      <Badge key={i} variant="outline">{activity}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Ratings */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    ⭐ Bewertungen
                    <Badge className="bg-green-100 text-green-800">
                      {propertyData.ratings.overall_rating}/10
                    </Badge>
                  </CardTitle>
                  <CardDescription>
                    {propertyData.ratings.rating_category} • {propertyData.ratings.total_reviews} Bewertungen
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {Object.entries(propertyData.ratings.detailed_ratings).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center">
                      <span className="text-sm capitalize">{key.replace('_', ' ')}</span>
                      <span className="font-semibold">{value}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Check-in/out */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    🕒 Check-in & Check-out
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <div className="font-medium">Check-in</div>
                    <div className="text-sm text-gray-600">
                      {propertyData.policies.check_in.from} - {propertyData.policies.check_in.until}
                    </div>
                  </div>
                  <div>
                    <div className="font-medium">Check-out</div>
                    <div className="text-sm text-gray-600">
                      {propertyData.policies.check_out.from} - {propertyData.policies.check_out.until}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Policies */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    📋 Hausregeln
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Rauchen</span>
                    <span className="text-red-600">❌ Nicht gestattet</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Partys</span>
                    <span className="text-red-600">❌ Nicht gestattet</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Haustiere</span>
                    <span className="text-green-600">✅ Erlaubt ({propertyData.policies.pets.fee})</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Kinder</span>
                    <span className="text-green-600">✅ Alle Altersgruppen</span>
                  </div>
                </CardContent>
              </Card>

              {/* Nearby Attractions */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    🎯 Sehenswürdigkeiten
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <h4 className="font-medium mb-2">In der Nähe (< 5km)</h4>
                    {propertyData.nearby_attractions.within_5km.map((attraction, i) => (
                      <div key={i} className="flex justify-between text-sm">
                        <span>{attraction.name}</span>
                        <span className="text-gray-500">{attraction.distance}</span>
                      </div>
                    ))}
                  </div>
                  <Separator />
                  <div>
                    <h4 className="font-medium mb-2">Weitere Attraktionen</h4>
                    {propertyData.nearby_attractions.major_attractions.slice(0, 3).map((attraction, i) => (
                      <div key={i} className="flex justify-between text-sm">
                        <span>{attraction.name}</span>
                        <span className="text-gray-500">{attraction.distance}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Guest Reviews */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                💬 Was Gäste sagen
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {propertyData.guest_reviews_highlights.slice(0, 4).map((review, i) => (
                  <div key={i} className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm italic">"{review}"</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Special Features */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                ✨ Besonderheiten
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium">🏔️ Panoramablick</h4>
                <p className="text-gray-600">{propertyData.special_features.panoramic_view}</p>
              </div>
              <div>
                <h4 className="font-medium">🚗 Anfahrt</h4>
                <p className="text-gray-600">{propertyData.special_features.access_note}</p>
              </div>
              <div>
                <h4 className="font-medium">🗣️ Sprachen</h4>
                <div className="flex gap-2">
                  {propertyData.languages_spoken.map((lang, i) => (
                    <Badge key={i} variant="outline">{lang}</Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Booking Section */}
          <div className="text-center py-12">
            <h2 className="text-3xl font-bold mb-4">Bereit für Ihren Aufenthalt?</h2>
            <p className="text-gray-600 mb-8">
              Erleben Sie die Ruhe und Schönheit der Tiroler Berge im Appartement 'Oachkatzl'
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Jetzt auf Booking.com buchen
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}