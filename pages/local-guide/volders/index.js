import MetaTags from '@/components/seo/MetaTags'
import Breadcrumbs from '@/components/navigation/Breadcrumbs'
import Link from 'next/link'
import { MapPin, Clock, Calendar, Camera, Mountain, Church, Castle, Trees, Users, ChevronRight } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const attractions = [
  {
    name: 'Karlskirche (St. Charles Borromeo Church)',
    type: 'Historic Church',
    icon: Church,
    description: 'Baroque masterpiece and architectural symbol of Volders. Known for its stunning frescoes and impressive facade with a viewing platform offering valley views.',
    address: 'Volderwaldstraße 65, 6111 Volders',
    bestFor: ['Culture lovers', 'Photographers', 'History buffs'],
    season: 'Year-round',
    wheelchairAccess: true
  },
  {
    name: 'Friedberg Castle',
    type: 'Historic Castle',
    icon: Castle,
    description: 'Extensively renovated, privately inhabited castle offering occasional guided tours in summer. Surrounded by beautiful parklands and part of the circular hiking trail.',
    bestFor: ['History buffs', 'Families', 'Architecture fans'],
    season: 'Summer (guided tours)',
    note: 'Check local listings for tour booking'
  },
  {
    name: 'Aschach Castle',
    type: 'Historic Estate',
    icon: Castle,
    description: 'Historic estate surrounded by natural monuments and parks. While not always open to the public, the exterior and grounds offer scenic walks.',
    bestFor: ['Scenic walks', 'Architecture fans', 'Photography'],
    season: 'Exterior year-round',
    note: 'Part of local walking circuits'
  },
  {
    name: 'Siedlung Himmelreich',
    type: 'Archaeological Site',
    icon: Mountain,
    description: "One of Tirol's most significant prehistoric settlements. Findings are displayed along a 10km hiking trail with informative signage in German and English.",
    bestFor: ['Families', 'History enthusiasts', 'Hikers'],
    season: 'Spring-Autumn',
    free: true
  },
  {
    name: 'Lake Volders',
    type: 'Natural Lake',
    icon: Trees,
    description: 'Small forest-surrounded lake ideal for relaxing walks, picnics, and nature photography. A peaceful spot away from crowds.',
    bestFor: ['Couples', 'Families', 'Photographers'],
    season: 'Spring-Autumn',
    free: true
  },
  {
    name: 'Volderberg Toboggan Run',
    type: 'Winter Activity',
    icon: Mountain,
    description: 'Family-friendly 2km toboggan run with easy access and beautiful views. Features floodlit sections for evening fun.',
    bestFor: ['Families', 'Winter sports fans', 'Groups'],
    season: 'Winter (snow required)',
    free: true,
    note: 'Bring your own sled'
  }
]

const monthlyActivities = {
  January: ['Tobogganing', 'Winter hiking', 'Cross-country skiing'],
  February: ['Carnival celebrations', 'Skiing', 'Winter festivals'],
  March: ['Early spring hiking', 'Easter preparations'],
  April: ['Easter markets', 'Spring wildflower tours', 'Mountain biking begins'],
  May: ['Hiking season opens', 'Cycling tours', 'Spring festivals'],
  June: ['Mountain hiking', 'Summer solstice celebrations', 'Outdoor concerts'],
  July: ['Alpine festivals', 'Swimming', 'Mountain hut visits'],
  August: ['Peak hiking season', 'Local festivals', 'Berry picking'],
  September: ['Harvest festivals', 'Fall hiking', 'Mushroom picking'],
  October: ['Fall foliage tours', 'Traditional harvest events'],
  November: ['Advent preparations', 'Indoor cultural events'],
  December: ['Christmas markets', 'Advent celebrations', 'Winter sports begin']
}

const restaurants = [
  { name: 'Gasthof Volderberg', type: 'Traditional Tyrolean', specialty: 'Local game dishes' },
  { name: 'Restaurant Karlskirche', type: 'Austrian cuisine', specialty: 'Sunday roasts' },
  { name: 'Café Dorfplatz', type: 'Café & Bakery', specialty: 'Fresh pastries and coffee' }
]

export default function VoldersVillagePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    "name": "Volders, Tirol",
    "description": "Historic village in Tirol, Austria with baroque churches, castles, and alpine activities",
    "url": "https://oachkatzl.com/local-guide/volders",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Volders",
      "addressRegion": "Tirol",
      "postalCode": "6111",
      "addressCountry": "AT"
    },
    "touristType": ["Cultural tourism", "Nature tourism", "Family tourism"],
    "publicAccess": true
  }

  return (
    <>
      <MetaTags
        title="Volders Village Guide | Attractions & Activities in Tirol"
        description="Discover Volders: Karlskirche, Friedberg Castle, Lake Volders, hiking trails, and authentic Tyrolean experiences. Your complete Volders travel guide."
        url="/local-guide/volders"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gray-50">
        <div className="bg-gradient-to-b from-green-800 to-green-600 text-white">
          <div className="container mx-auto px-4 py-6">
            <Breadcrumbs 
              items={[
                { label: 'Local Guide', href: '/local-guide' },
                { label: 'Volders', href: null }
              ]} 
            />
          </div>
          
          <div className="container mx-auto px-4 pb-16 pt-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Volders Village Guide
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mb-6">
              Historic riverside village blending cultural heritage with natural beauty. 
              Home to baroque churches, medieval castles, and gateway to alpine adventures.
            </p>
            <div className="flex flex-wrap gap-4">
              <Badge className="bg-white/20 text-white border-white/30 px-3 py-1">
                <Users className="w-4 h-4 mr-1" />
                Population: ~4,600
              </Badge>
              <Badge className="bg-white/20 text-white border-white/30 px-3 py-1">
                <MapPin className="w-4 h-4 mr-1" />
                15 km from Innsbruck
              </Badge>
              <Badge className="bg-white/20 text-white border-white/30 px-3 py-1">
                <Mountain className="w-4 h-4 mr-1" />
                Elevation: 558m
              </Badge>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Major Attractions in Volders</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {attractions.map((attraction, idx) => {
                const Icon = attraction.icon
                return (
                  <Card key={idx} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-3">
                          <Icon className="w-6 h-6 text-green-600 mt-1" />
                          <div>
                            <CardTitle className="text-xl">{attraction.name}</CardTitle>
                            <CardDescription>{attraction.type}</CardDescription>
                          </div>
                        </div>
                        {attraction.free && (
                          <Badge variant="secondary">Free</Badge>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{attraction.description}</p>
                      
                      {attraction.address && (
                        <p className="text-sm text-gray-500 mb-3">
                          <MapPin className="w-4 h-4 inline mr-1" />
                          {attraction.address}
                        </p>
                      )}
                      
                      <div className="space-y-2">
                        <div className="flex flex-wrap gap-2">
                          <span className="text-sm font-medium">Best for:</span>
                          {attraction.bestFor.map((item, i) => (
                            <Badge key={i} variant="outline" className="text-xs">
                              {item}
                            </Badge>
                          ))}
                        </div>
                        
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span>
                            <Calendar className="w-4 h-4 inline mr-1" />
                            {attraction.season}
                          </span>
                          {attraction.wheelchairAccess && (
                            <span>♿ Wheelchair accessible</span>
                          )}
                        </div>
                        
                        {attraction.note && (
                          <p className="text-sm text-amber-600 mt-2">
                            ℹ️ {attraction.note}
                          </p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Activities by Season</h2>
            <Tabs defaultValue="current" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="current">Current Season</TabsTrigger>
                <TabsTrigger value="spring">Spring</TabsTrigger>
                <TabsTrigger value="summer">Summer</TabsTrigger>
                <TabsTrigger value="autumn">Autumn</TabsTrigger>
                <TabsTrigger value="winter">Winter</TabsTrigger>
              </TabsList>
              
              <TabsContent value="current" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>September Activities</CardTitle>
                    <CardDescription>Perfect time for outdoor adventures</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">This Month's Highlights</h4>
                        <ul className="space-y-2">
                          {monthlyActivities.September.map((activity, idx) => (
                            <li key={idx} className="flex items-start">
                              <ChevronRight className="w-4 h-4 text-green-600 mr-2 mt-0.5" />
                              <span>{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Weather & Conditions</h4>
                        <p className="text-gray-600">
                          September offers ideal hiking weather with mild temperatures (15-20°C), 
                          clear skies, and stunning autumn colors beginning to appear in the forests.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="spring" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Spring in Volders (March - May)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="grid md:grid-cols-2 gap-3">
                      <li>🌸 Wildflower tours in alpine meadows</li>
                      <li>🚴 Mountain biking season begins</li>
                      <li>🥾 Lower altitude hiking trails open</li>
                      <li>🎪 Easter markets and celebrations</li>
                      <li>🌿 Nature photography opportunities</li>
                      <li>☀️ Outdoor café season starts</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="summer" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Summer in Volders (June - August)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="grid md:grid-cols-2 gap-3">
                      <li>⛰️ High alpine hiking trails accessible</li>
                      <li>🏊 Swimming at local lakes</li>
                      <li>🎭 Open-air theatre performances</li>
                      <li>🎪 Traditional alpine festivals</li>
                      <li>🚴 Peak mountain biking season</li>
                      <li>🏔️ Cable car rides to mountain peaks</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="autumn" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Autumn in Volders (September - November)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="grid md:grid-cols-2 gap-3">
                      <li>🍂 Spectacular fall foliage tours</li>
                      <li>🍄 Mushroom picking expeditions</li>
                      <li>🎪 Harvest festivals and markets</li>
                      <li>🥾 Ideal hiking temperatures</li>
                      <li>📸 Photography workshops</li>
                      <li>🍷 Wine tasting events</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="winter" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Winter in Volders (December - February)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="grid md:grid-cols-2 gap-3">
                      <li>⛷️ Skiing at nearby resorts</li>
                      <li>🛷 Tobogganing on Volderberg run</li>
                      <li>🎄 Traditional Christmas markets</li>
                      <li>❄️ Winter hiking and snowshoeing</li>
                      <li>⛸️ Ice skating opportunities</li>
                      <li>🎿 Cross-country skiing trails</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Dining & Local Cuisine</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {restaurants.map((restaurant, idx) => (
                <Card key={idx}>
                  <CardHeader>
                    <CardTitle className="text-lg">{restaurant.name}</CardTitle>
                    <CardDescription>{restaurant.type}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">
                      Specialty: {restaurant.specialty}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-6 p-6 bg-amber-50 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Local Tip</h3>
              <p className="text-gray-700">
                Don't miss the weekly farmers' market on Saturday mornings at the village square. 
                Sample local cheeses, fresh bread, and seasonal produce directly from local farms.
              </p>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Getting to Volders</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>From Innsbruck</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>🚗 By car: 15 km, ~20 minutes via A12</li>
                    <li>🚌 By bus: Line 4141 from Innsbruck Hauptbahnhof</li>
                    <li>🚂 By train: To Hall in Tirol, then bus to Volders</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>From Innsbruck Airport</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>🚗 By car: 21 km, ~25 minutes</li>
                    <li>🚕 By taxi: ~€40-50</li>
                    <li>🚌 Public transport: Bus F to Innsbruck, then Line 4141</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="bg-green-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Practical Information</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Tourist Information</h3>
                <p className="text-sm text-gray-600">
                  Hall-Wattens Tourism Office<br />
                  Wallpachgasse 5, Hall in Tirol<br />
                  Tel: +43 5223 45544-0
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Emergency Services</h3>
                <p className="text-sm text-gray-600">
                  Emergency: 112<br />
                  Medical: 141<br />
                  Mountain Rescue: 140
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Local Services</h3>
                <p className="text-sm text-gray-600">
                  Supermarket: SPAR Volders<br />
                  Pharmacy: Apotheke Volders<br />
                  ATM: Raiffeisenbank
                </p>
              </div>
            </div>
          </section>

          <div className="mt-12 bg-primary/5 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4 text-center">Explore the Hall-Wattens Region</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Volders Location</h3>
                <div className="rounded-lg overflow-hidden shadow-md">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10841.234567!2d11.5567!3d47.2783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479d6c1f5a7b9c3d%3A0x1234567890abcdef!2sVolders%2C%20Austria!5e0!3m2!1sen!2sat!4v1234567890"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Volders Map"
                  />
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Volders is centrally located in the Hall-Wattens region, offering easy access to Swarovski Crystal Worlds, 
                  medieval Hall in Tirol, and scenic mountain villages while maintaining its quiet village charm.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Nearby Villages</h3>
                <div className="space-y-3">
                  <Link href="/local-guide/baumkirchen" className="block hover:bg-white/50 p-3 rounded-lg transition-colors">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium text-primary">Baumkirchen</p>
                        <p className="text-sm text-gray-600">Orchards & cycling paths</p>
                      </div>
                      <Badge variant="outline">4 km</Badge>
                    </div>
                  </Link>
                  
                  <Link href="/local-guide/wattens" className="block hover:bg-white/50 p-3 rounded-lg transition-colors">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium text-primary">Wattens</p>
                        <p className="text-sm text-gray-600">Swarovski Crystal Worlds</p>
                      </div>
                      <Badge variant="outline">5 km</Badge>
                    </div>
                  </Link>
                  
                  <Link href="/local-guide/fritzens" className="block hover:bg-white/50 p-3 rounded-lg transition-colors">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium text-primary">Fritzens</p>
                        <p className="text-sm text-gray-600">Panoramic views & hiking trails</p>
                      </div>
                      <Badge variant="outline">6 km</Badge>
                    </div>
                  </Link>
                  
                  <Link href="/local-guide/hall-in-tirol" className="block hover:bg-white/50 p-3 rounded-lg transition-colors">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium text-primary">Hall in Tirol</p>
                        <p className="text-sm text-gray-600">Medieval old town & mint museum</p>
                      </div>
                      <Badge variant="outline">7 km</Badge>
                    </div>
                  </Link>
                  
                  <Link href="/local-guide/gnadenwald" className="block hover:bg-white/50 p-3 rounded-lg transition-colors">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium text-primary">Gnadenwald</p>
                        <p className="text-sm text-gray-600">Mountain terrace & paragliding</p>
                      </div>
                      <Badge variant="outline">10 km</Badge>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-6">
              <h3 className="text-xl font-semibold mb-4">Ready to explore Volders?</h3>
              <Link 
                href="/#booking" 
                className="inline-flex items-center bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition"
              >
                Book Your Stay at Oachkatzl
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}