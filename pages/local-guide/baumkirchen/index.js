import MetaTags from '@/components/seo/MetaTags'
import Breadcrumbs from '@/components/navigation/Breadcrumbs'
import Link from 'next/link'
import { MapPin, Clock, Calendar, Camera, Mountain, Church, Castle, Trees, Users, ChevronRight, Home, Bike, Train } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const attractions = [
  {
    name: 'Parish Church of St. Lawrence',
    type: 'Historic Church',
    icon: Church,
    description: 'Beautiful baroque parish church dating back to the 18th century, featuring ornate frescoes and a peaceful cemetery with mountain views.',
    address: 'Dorfstraße, 6121 Baumkirchen',
    bestFor: ['Culture lovers', 'History buffs', 'Architecture fans'],
    season: 'Year-round',
    wheelchairAccess: true
  },
  {
    name: 'Inn River Cycling Path',
    type: 'Cycling Route',
    icon: Bike,
    description: 'Part of the famous Inn Cycle Path (Innradweg) connecting Switzerland to Germany. Perfect for leisurely rides with stunning valley views.',
    bestFor: ['Cyclists', 'Families', 'Nature lovers'],
    season: 'April-October',
    free: true,
    note: 'Bike rental available in nearby Hall in Tirol'
  },
  {
    name: 'Baumkirchen Train Station',
    type: 'Historic Railway',
    icon: Train,
    description: 'Historic railway station on the Arlberg railway line, offering scenic train rides and serving as a gateway to exploring the region.',
    bestFor: ['Train enthusiasts', 'Day trips', 'Photographers'],
    season: 'Year-round',
    note: 'Regular connections to Innsbruck and western Austria'
  },
  {
    name: 'Village Walking Trails',
    type: 'Nature Walks',
    icon: Trees,
    description: 'Network of easy walking trails through orchards and meadows, offering peaceful countryside views and connections to neighboring villages.',
    bestFor: ['Families', 'Casual walkers', 'Dog owners'],
    season: 'Year-round',
    free: true
  },
  {
    name: 'Local Orchards',
    type: 'Agricultural Heritage',
    icon: Trees,
    description: 'Traditional fruit orchards producing apples, pears, and cherries. Some farms offer seasonal fruit picking and farm visits.',
    bestFor: ['Families', 'Food lovers', 'Agritourism'],
    season: 'Summer-Autumn',
    note: 'Contact local farms for picking schedules'
  },
  {
    name: 'Mountain Viewpoints',
    type: 'Scenic Spots',
    icon: Mountain,
    description: 'Several elevated viewpoints around the village offering panoramic views of the Inn Valley and surrounding Alpine peaks.',
    bestFor: ['Photographers', 'Hikers', 'Sunset watchers'],
    season: 'Year-round',
    free: true
  }
]

const monthlyActivities = {
  January: ['Winter walks', 'Cross-country skiing nearby', 'Traditional winter gatherings'],
  February: ['Carnival celebrations', 'Winter hiking', 'Indoor cultural events'],
  March: ['Early spring walks', 'Easter preparations', 'Garden preparation'],
  April: ['Easter celebrations', 'Spring cycling begins', 'Orchard blossoms'],
  May: ['Cycling season', 'Spring festivals', 'Wildflower walks'],
  June: ['Summer cycling', 'Midsummer celebrations', 'Farm visits'],
  July: ['Cherry picking', 'Summer festivals', 'Evening walks'],
  August: ['Apple harvest begins', 'Village festivals', 'Peak cycling season'],
  September: ['Harvest season', 'Apple picking', 'Autumn walks'],
  October: ['Harvest festivals', 'Fall foliage tours', 'Cider making'],
  November: ['Advent preparations', 'Indoor events', 'Planning winter activities'],
  December: ['Christmas traditions', 'Advent celebrations', 'Winter markets nearby']
}

const restaurants = [
  { name: 'Gasthof Baumkirchen', type: 'Traditional Austrian', specialty: 'Regional home cooking' },
  { name: 'Pizzeria Da Marco', type: 'Italian', specialty: 'Wood-fired pizzas' },
  { name: 'Café am Dorfplatz', type: 'Café', specialty: 'Homemade cakes and coffee' }
]

export default function BaumkirchenVillagePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    "name": "Baumkirchen, Tirol",
    "description": "Peaceful Tyrolean village with orchards, cycling paths, and traditional Austrian countryside charm",
    "url": "https://oachkatzl.com/local-guide/baumkirchen",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Baumkirchen",
      "addressRegion": "Tirol",
      "postalCode": "6121",
      "addressCountry": "AT"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "47.2883",
      "longitude": "11.5633"
    }
  }

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Local Guide', href: '/local-guide' },
    { name: 'Baumkirchen' }
  ]

  return (
    <>
      <MetaTags 
        title="Baumkirchen Village Guide | Orchards & Cycling Paths"
        description="Discover Baumkirchen: fruit orchards, Inn cycling path, traditional Austrian village life. Your complete guide to activities and attractions near Volders."
        structuredData={structuredData}
      />
      
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          <Breadcrumbs items={breadcrumbs} />
          
          <div className="mt-8 text-center max-w-4xl mx-auto">
            <Badge className="mb-4" variant="secondary">
              <MapPin className="w-3 h-3 mr-1" />
              4 km from Volders
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Baumkirchen
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              A peaceful Tyrolean village known for its fruit orchards, cycling paths, and authentic rural charm
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center">
                  <Users className="w-4 h-4 mr-2 text-primary" />
                  Population
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">~1,200</p>
                <p className="text-sm text-gray-600">Traditional farming community</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center">
                  <Mountain className="w-4 h-4 mr-2 text-primary" />
                  Elevation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">558m</p>
                <p className="text-sm text-gray-600">Inn Valley location</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-primary" />
                  From Volders
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">5 min</p>
                <p className="text-sm text-gray-600">By car via L223</p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="attractions" className="mb-12">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="attractions">Attractions</TabsTrigger>
              <TabsTrigger value="activities">Monthly Activities</TabsTrigger>
              <TabsTrigger value="practical">Practical Info</TabsTrigger>
            </TabsList>
            
            <TabsContent value="attractions" className="mt-6">
              <div className="grid md:grid-cols-2 gap-6">
                {attractions.map((attraction, index) => {
                  const Icon = attraction.icon
                  return (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <CardTitle className="flex items-center text-xl">
                          <Icon className="w-5 h-5 mr-2 text-primary" />
                          {attraction.name}
                        </CardTitle>
                        <CardDescription>{attraction.type}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 mb-4">{attraction.description}</p>
                        
                        {attraction.address && (
                          <p className="text-sm text-gray-500 mb-2">
                            <MapPin className="w-3 h-3 inline mr-1" />
                            {attraction.address}
                          </p>
                        )}
                        
                        <div className="flex flex-wrap gap-2 mb-3">
                          {attraction.bestFor.map((item, i) => (
                            <Badge key={i} variant="outline" className="text-xs">
                              {item}
                            </Badge>
                          ))}
                        </div>
                        
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-500">
                            <Calendar className="w-3 h-3 inline mr-1" />
                            {attraction.season}
                          </span>
                          {attraction.free && (
                            <Badge variant="secondary">Free</Badge>
                          )}
                        </div>
                        
                        {attraction.note && (
                          <p className="text-xs text-gray-500 mt-2 italic">
                            {attraction.note}
                          </p>
                        )}
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </TabsContent>
            
            <TabsContent value="activities" className="mt-6">
              <div className="grid md:grid-cols-3 gap-4">
                {Object.entries(monthlyActivities).map(([month, activities]) => (
                  <Card key={month}>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">{month}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-1">
                        {activities.map((activity, i) => (
                          <li key={i} className="text-sm text-gray-600 flex items-start">
                            <ChevronRight className="w-3 h-3 mr-1 mt-0.5 text-gray-400" />
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="practical" className="mt-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Getting Here</h3>
                  <Card className="mb-6">
                    <CardContent className="pt-6">
                      <div className="space-y-3">
                        <div>
                          <p className="font-medium">From Volders (4 km)</p>
                          <p className="text-sm text-gray-600">5 minutes by car via L223</p>
                          <p className="text-sm text-gray-600">15 minutes by bicycle</p>
                        </div>
                        <div>
                          <p className="font-medium">From Innsbruck (12 km)</p>
                          <p className="text-sm text-gray-600">15 minutes by car via A12</p>
                          <p className="text-sm text-gray-600">20 minutes by train (S-Bahn)</p>
                        </div>
                        <div>
                          <p className="font-medium">From Airport (18 km)</p>
                          <p className="text-sm text-gray-600">20 minutes by car</p>
                          <p className="text-sm text-gray-600">35 minutes by public transport</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <h3 className="text-xl font-semibold mb-4">Local Dining</h3>
                  <div className="space-y-3">
                    {restaurants.map((restaurant, index) => (
                      <Card key={index}>
                        <CardContent className="pt-4 pb-4">
                          <p className="font-medium">{restaurant.name}</p>
                          <p className="text-sm text-gray-600">{restaurant.type}</p>
                          <p className="text-xs text-gray-500 mt-1">Known for: {restaurant.specialty}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Local Services</h3>
                  <Card className="mb-6">
                    <CardContent className="pt-6">
                      <div className="space-y-3">
                        <div>
                          <p className="font-medium">Village Office</p>
                          <p className="text-sm text-gray-600">Dorfstraße 1</p>
                          <p className="text-sm text-gray-600">Mon-Fri: 8:00-12:00</p>
                        </div>
                        <div>
                          <p className="font-medium">Post Office</p>
                          <p className="text-sm text-gray-600">Available in Hall in Tirol (5km)</p>
                        </div>
                        <div>
                          <p className="font-medium">Medical Services</p>
                          <p className="text-sm text-gray-600">Local doctor in village</p>
                          <p className="text-sm text-gray-600">Hospital in Hall in Tirol</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <h3 className="text-xl font-semibold mb-4">Tourist Tips</h3>
                  <Card>
                    <CardContent className="pt-6">
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Visit during harvest season (Sept-Oct) for fruit picking</li>
                        <li>• Rent bikes in Hall for the Inn Cycle Path</li>
                        <li>• Train station offers scenic rides to western Austria</li>
                        <li>• Village is quieter than tourist hotspots - perfect for relaxation</li>
                        <li>• Local farmers may sell fresh produce directly</li>
                        <li>• Evening walks offer stunning sunset views over the valley</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <div className="bg-primary/5 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4 text-center">Explore the Hall-Wattens Region</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Baumkirchen Location</h3>
                <div className="rounded-lg overflow-hidden shadow-md">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10841.234567!2d11.5633!3d47.2883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479d6c5f4a5b4c5d%3A0x1234567890abcdef!2sBaumkirchen%2C%20Austria!5e0!3m2!1sen!2sat!4v1234567890"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Baumkirchen Map"
                  />
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Baumkirchen sits in the Inn Valley, perfectly positioned between Hall in Tirol and Volders, 
                  with easy access to the Inn Cycle Path and surrounding orchards.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Nearby Villages</h3>
                <div className="space-y-3">
                  <Link href="/local-guide/volders" className="block hover:bg-white/50 p-3 rounded-lg transition-colors">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium text-primary">Volders</p>
                        <p className="text-sm text-gray-600">Historic churches & Lake Volders</p>
                      </div>
                      <Badge variant="outline">4 km</Badge>
                    </div>
                  </Link>
                  
                  <Link href="/local-guide/fritzens" className="block hover:bg-white/50 p-3 rounded-lg transition-colors">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium text-primary">Fritzens</p>
                        <p className="text-sm text-gray-600">Panoramic views & hiking trails</p>
                      </div>
                      <Badge variant="outline">3 km</Badge>
                    </div>
                  </Link>
                  
                  <Link href="/local-guide/gnadenwald" className="block hover:bg-white/50 p-3 rounded-lg transition-colors">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium text-primary">Gnadenwald</p>
                        <p className="text-sm text-gray-600">Mountain terrace & paragliding</p>
                      </div>
                      <Badge variant="outline">7 km</Badge>
                    </div>
                  </Link>
                  
                  <Link href="/local-guide/hall-in-tirol" className="block hover:bg-white/50 p-3 rounded-lg transition-colors">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium text-primary">Hall in Tirol</p>
                        <p className="text-sm text-gray-600">Medieval old town & mint museum</p>
                      </div>
                      <Badge variant="outline">5 km</Badge>
                    </div>
                  </Link>
                  
                  <Link href="/local-guide/wattens" className="block hover:bg-white/50 p-3 rounded-lg transition-colors">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium text-primary">Wattens</p>
                        <p className="text-sm text-gray-600">Swarovski Crystal Worlds</p>
                      </div>
                      <Badge variant="outline">8 km</Badge>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}