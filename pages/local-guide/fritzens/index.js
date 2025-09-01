import MetaTags from '@/components/seo/MetaTags'
import Breadcrumbs from '@/components/navigation/Breadcrumbs'
import Link from 'next/link'
import { MapPin, Clock, Calendar, Camera, Mountain, Church, Castle, Trees, Users, ChevronRight, Home, Bike, Eye } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const attractions = [
  {
    name: 'Parish Church of St. Martin',
    type: 'Historic Church',
    icon: Church,
    description: 'Gothic parish church with baroque elements, featuring beautiful ceiling frescoes and a historic cemetery with panoramic valley views.',
    address: 'Kirchgasse, 6122 Fritzens',
    bestFor: ['Culture lovers', 'History buffs', 'Photographers'],
    season: 'Year-round',
    wheelchairAccess: true
  },
  {
    name: 'Fritzens Observation Point',
    type: 'Scenic Viewpoint',
    icon: Eye,
    description: 'Spectacular viewpoint offering 360-degree panoramic views of the Inn Valley, Karwendel Mountains, and surrounding villages.',
    bestFor: ['Photographers', 'Hikers', 'Sunset watchers'],
    season: 'Year-round',
    free: true,
    note: '20-minute walk from village center'
  },
  {
    name: 'Historic Village Center',
    type: 'Cultural Heritage',
    icon: Home,
    description: 'Well-preserved traditional Tyrolean architecture with decorated farmhouses, historic fountains, and narrow medieval lanes.',
    bestFor: ['Architecture fans', 'Photographers', 'Culture enthusiasts'],
    season: 'Year-round',
    free: true
  },
  {
    name: 'Fritzens-Wattens Walking Path',
    type: 'Hiking Trail',
    icon: Mountain,
    description: 'Easy 3km connecting trail between Fritzens and Wattens, passing through meadows and offering valley views. Perfect for families.',
    bestFor: ['Families', 'Casual walkers', 'Nature lovers'],
    season: 'April-November',
    free: true,
    note: 'Connect to Swarovski Crystal Worlds'
  },
  {
    name: 'Local Farm Experiences',
    type: 'Agritourism',
    icon: Trees,
    description: 'Several traditional farms offer tours, fresh produce sales, and seasonal activities like hay making and harvest participation.',
    bestFor: ['Families', 'Food lovers', 'Cultural experiences'],
    season: 'May-October',
    note: 'Advance booking recommended'
  },
  {
    name: 'Mountain Bike Trails',
    type: 'Sports Activity',
    icon: Bike,
    description: 'Network of mountain bike trails ranging from easy valley routes to challenging uphill climbs with technical descents.',
    bestFor: ['Mountain bikers', 'Sports enthusiasts', 'Adventure seekers'],
    season: 'April-October',
    free: true,
    note: 'Bike rental in Wattens or Hall'
  }
]

const monthlyActivities = {
  January: ['Winter hiking', 'Tobogganing nearby', 'Traditional card games in Gasthof'],
  February: ['Carnival parade', 'Winter photography', 'Cross-country skiing'],
  March: ['Early spring hikes', 'Easter preparations', 'Garden awakening'],
  April: ['Easter egg hunts', 'Spring wildflowers', 'Mountain biking begins'],
  May: ['May pole celebrations', 'Farm visits', 'Hiking season opens'],
  June: ['Midsummer bonfire', 'Alpine flower walks', 'Evening concerts'],
  July: ['Village festival', 'Mountain hut hikes', 'Swimming in nearby lakes'],
  August: ['Harvest begins', 'Star gazing nights', 'Family hiking'],
  September: ['Harvest festival', 'Mushroom foraging', 'Apple picking'],
  October: ['Thanksgiving celebrations', 'Fall color hikes', 'Wine tasting'],
  November: ['All Saints Day', 'Advent preparations', 'Indoor concerts'],
  December: ['Advent markets', 'Christmas concerts', 'Winter solstice walks']
}

const restaurants = [
  { name: 'Gasthof Fritzens', type: 'Traditional Tyrolean', specialty: 'Tiroler Gröstl and local beer' },
  { name: 'Café Panorama', type: 'Café & Restaurant', specialty: 'Homemade strudel with valley views' },
  { name: 'Dorfwirt', type: 'Austrian Tavern', specialty: 'Game dishes and seasonal menu' }
]

export default function FritzensVillagePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    "name": "Fritzens, Tirol",
    "description": "Picturesque Tyrolean village with panoramic viewpoints, traditional architecture, and easy access to Swarovski Crystal Worlds",
    "url": "https://oachkatzl.com/local-guide/fritzens",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Fritzens",
      "addressRegion": "Tirol",
      "postalCode": "6122",
      "addressCountry": "AT"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "47.3033",
      "longitude": "11.5967"
    }
  }

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Local Guide', href: '/local-guide' },
    { name: 'Fritzens' }
  ]

  return (
    <>
      <MetaTags 
        title="Fritzens Village Guide | Panoramic Views & Traditional Tirol"
        description="Explore Fritzens: panoramic mountain views, traditional Tyrolean village, walking distance to Swarovski. Complete guide to attractions near Volders."
        structuredData={structuredData}
      />
      
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          <Breadcrumbs items={breadcrumbs} />
          
          <div className="mt-8 text-center max-w-4xl mx-auto">
            <Badge className="mb-4" variant="secondary">
              <MapPin className="w-3 h-3 mr-1" />
              6 km from Volders
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Fritzens
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              A charming hillside village offering spectacular valley views and authentic Tyrolean mountain life
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
                <p className="text-2xl font-bold">~2,100</p>
                <p className="text-sm text-gray-600">Growing mountain community</p>
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
                <p className="text-2xl font-bold">716m</p>
                <p className="text-sm text-gray-600">Sunny hillside location</p>
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
                <p className="text-2xl font-bold">8 min</p>
                <p className="text-sm text-gray-600">By car via L38</p>
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
                          <p className="font-medium">From Volders (6 km)</p>
                          <p className="text-sm text-gray-600">8 minutes by car via L38</p>
                          <p className="text-sm text-gray-600">25 minutes by bicycle (uphill)</p>
                        </div>
                        <div>
                          <p className="font-medium">From Wattens (3 km)</p>
                          <p className="text-sm text-gray-600">5 minutes by car</p>
                          <p className="text-sm text-gray-600">15 minutes by bicycle</p>
                          <p className="text-sm text-gray-600">45 minutes walking</p>
                        </div>
                        <div>
                          <p className="font-medium">From Innsbruck (15 km)</p>
                          <p className="text-sm text-gray-600">20 minutes by car via A12</p>
                          <p className="text-sm text-gray-600">Bus line to Wattens, then local bus</p>
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
                  <h3 className="text-xl font-semibold mb-4">Nearby Attractions</h3>
                  <Card className="mb-6">
                    <CardContent className="pt-6">
                      <div className="space-y-3">
                        <Link href="/local-guide/attractions/swarovski-kristallwelten" className="block hover:bg-gray-50 p-2 rounded">
                          <p className="font-medium text-primary">Swarovski Crystal Worlds</p>
                          <p className="text-sm text-gray-600">3 km - World-famous crystal art museum</p>
                        </Link>
                        <Link href="/local-guide/wattens" className="block hover:bg-gray-50 p-2 rounded">
                          <p className="font-medium text-primary">Wattens Town Center</p>
                          <p className="text-sm text-gray-600">3 km - Shopping and dining</p>
                        </Link>
                        <Link href="/local-guide/activities/hiking-trails" className="block hover:bg-gray-50 p-2 rounded">
                          <p className="font-medium text-primary">Regional Hiking Trails</p>
                          <p className="text-sm text-gray-600">Various difficulty levels</p>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <h3 className="text-xl font-semibold mb-4">Seasonal Highlights</h3>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="space-y-3">
                        <Link href="/local-guide/activities/spring" className="block hover:bg-gray-50 p-2 rounded">
                          <p className="font-medium text-primary">Spring Activities</p>
                          <p className="text-sm text-gray-600">Wildflower tours, Easter markets</p>
                        </Link>
                        <Link href="/local-guide/activities/summer" className="block hover:bg-gray-50 p-2 rounded">
                          <p className="font-medium text-primary">Summer Adventures</p>
                          <p className="text-sm text-gray-600">Alpine festivals, mountain biking</p>
                        </Link>
                        <Link href="/local-guide/activities/autumn" className="block hover:bg-gray-50 p-2 rounded">
                          <p className="font-medium text-primary">Autumn Experiences</p>
                          <p className="text-sm text-gray-600">Harvest festivals, mushroom picking</p>
                        </Link>
                        <Link href="/local-guide/activities/winter" className="block hover:bg-gray-50 p-2 rounded">
                          <p className="font-medium text-primary">Winter Activities</p>
                          <p className="text-sm text-gray-600">Christmas markets, winter hiking</p>
                        </Link>
                      </div>
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
                <h3 className="text-lg font-semibold mb-4">Fritzens Location</h3>
                <div className="rounded-lg overflow-hidden shadow-md">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10841.234567!2d11.5967!3d47.3033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479d6d8f5a6b7c9d%3A0x1234567890abcdef!2sFritzens%2C%20Austria!5e0!3m2!1sen!2sat!4v1234567890"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Fritzens Map"
                  />
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Fritzens is perched on the sunny hillside above Wattens, offering spectacular panoramic views 
                  of the Inn Valley and easy access to both valley attractions and mountain adventures.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Nearby Villages</h3>
                <div className="space-y-3">
                  <Link href="/local-guide/wattens" className="block hover:bg-white/50 p-3 rounded-lg transition-colors">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium text-primary">Wattens</p>
                        <p className="text-sm text-gray-600">Swarovski Crystal Worlds</p>
                      </div>
                      <Badge variant="outline">3 km</Badge>
                    </div>
                  </Link>
                  
                  <Link href="/local-guide/volders" className="block hover:bg-white/50 p-3 rounded-lg transition-colors">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium text-primary">Volders</p>
                        <p className="text-sm text-gray-600">Historic churches & Lake Volders</p>
                      </div>
                      <Badge variant="outline">6 km</Badge>
                    </div>
                  </Link>
                  
                  <Link href="/local-guide/baumkirchen" className="block hover:bg-white/50 p-3 rounded-lg transition-colors">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium text-primary">Baumkirchen</p>
                        <p className="text-sm text-gray-600">Orchards & cycling paths</p>
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
                      <Badge variant="outline">8 km</Badge>
                    </div>
                  </Link>
                  
                  <Link href="/local-guide/hall-in-tirol" className="block hover:bg-white/50 p-3 rounded-lg transition-colors">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium text-primary">Hall in Tirol</p>
                        <p className="text-sm text-gray-600">Medieval old town & mint museum</p>
                      </div>
                      <Badge variant="outline">9 km</Badge>
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