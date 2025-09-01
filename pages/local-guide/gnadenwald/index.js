import MetaTags from '@/components/seo/MetaTags'
import Breadcrumbs from '@/components/navigation/Breadcrumbs'
import Link from 'next/link'
import { MapPin, Clock, Calendar, Camera, Mountain, Church, Castle, Trees, Users, ChevronRight, Home, Sparkles, Sun } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const attractions = [
  {
    name: 'St. Michael Chapel',
    type: 'Pilgrimage Chapel',
    icon: Church,
    description: 'Historic pilgrimage chapel perched on a hillside with breathtaking valley views. Features baroque interior and peaceful meditation garden.',
    address: 'St. Michael Weg, 6069 Gnadenwald',
    bestFor: ['Spiritual seekers', 'History buffs', 'Photographers'],
    season: 'Year-round',
    wheelchairAccess: false,
    note: 'Steep path, sturdy shoes recommended'
  },
  {
    name: 'Gnadenwald Terrace',
    type: 'Natural Viewpoint',
    icon: Sun,
    description: 'Famous sunny terrace location offering panoramic views across the Inn Valley to the Stubai Alps. Known as one of Tirol\'s sunniest spots.',
    bestFor: ['Photographers', 'Nature lovers', 'Relaxation'],
    season: 'Year-round',
    free: true,
    note: 'Best views at sunset'
  },
  {
    name: 'Forest Nature Trail',
    type: 'Educational Trail',
    icon: Trees,
    description: 'Educational forest path with information boards about local flora, fauna, and forest management. Perfect for families with children.',
    bestFor: ['Families', 'Nature education', 'Easy walking'],
    season: 'April-November',
    free: true,
    note: '2.5 km circular route'
  },
  {
    name: 'Traditional Alpine Farms',
    type: 'Cultural Heritage',
    icon: Home,
    description: 'Working mountain farms maintaining traditional Alpine agriculture. Some offer farm stays, fresh products, and seasonal experiences.',
    bestFor: ['Agritourism', 'Families', 'Food lovers'],
    season: 'May-October',
    note: 'Contact farms directly for visits'
  },
  {
    name: 'Paragliding Launch Site',
    type: 'Adventure Sport',
    icon: Mountain,
    description: 'Popular paragliding launch point with tandem flight options. Spectacular aerial views of the entire Inn Valley and surrounding peaks.',
    bestFor: ['Adventure seekers', 'Thrill seekers', 'Photographers'],
    season: 'April-October',
    note: 'Book with certified operators'
  },
  {
    name: 'Mountain Herb Gardens',
    type: 'Botanical Interest',
    icon: Sparkles,
    description: 'Local herb gardens showcasing Alpine medicinal and culinary plants. Guided tours and workshops on traditional herb use available.',
    bestFor: ['Garden enthusiasts', 'Wellness seekers', 'Educational visits'],
    season: 'May-September',
    note: 'Workshop schedule varies'
  }
]

const monthlyActivities = {
  January: ['Snowshoeing', 'Winter forest walks', 'Cozy mountain hut visits'],
  February: ['Cross-country skiing', 'Winter photography', 'Traditional sledding'],
  March: ['Spring skiing nearby', 'Early wildflowers', 'Easter preparations'],
  April: ['Spring hiking begins', 'Paragliding season starts', 'Bird watching'],
  May: ['Alpine flower blooms', 'Farm visits begin', 'Herb garden tours'],
  June: ['Summer solstice hikes', 'Herb workshops', 'Mountain biking'],
  July: ['Peak paragliding', 'Alpine festivals', 'Sunset viewing'],
  August: ['Berry picking', 'Mountain hut overnight stays', 'Star gazing'],
  September: ['Harvest time', 'Mushroom hunting', 'Fall hiking'],
  October: ['Autumn colors', 'Thanksgiving traditions', 'Last paragliding'],
  November: ['Quiet forest walks', 'Advent preparations', 'Wildlife spotting'],
  December: ['Christmas traditions', 'Winter solstice', 'Snowshoe tours']
}

const restaurants = [
  { name: 'Gasthof Gnadenwald', type: 'Mountain Inn', specialty: 'Traditional Kaiserschmarrn' },
  { name: 'Alpengasthof Terrace', type: 'Alpine Restaurant', specialty: 'Game dishes with valley views' },
  { name: 'Bauernstube', type: 'Farm Restaurant', specialty: 'Farm-to-table Alpine cuisine' }
]

export default function GnadenwaldVillagePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    "name": "Gnadenwald, Tirol",
    "description": "Sunny mountain terrace village above the Inn Valley with paragliding, traditional farms, and spectacular Alpine views",
    "url": "https://oachkatzl.com/local-guide/gnadenwald",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Gnadenwald",
      "addressRegion": "Tirol",
      "postalCode": "6069",
      "addressCountry": "AT"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "47.3350",
      "longitude": "11.5667"
    }
  }

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Local Guide', href: '/local-guide' },
    { name: 'Gnadenwald' }
  ]

  return (
    <>
      <MetaTags 
        title="Gnadenwald Village Guide | Sunny Alpine Terrace & Paragliding"
        description="Discover Gnadenwald: Tirol's sunny terrace, paragliding paradise, traditional mountain farms. Your guide to Alpine adventures near Volders."
        structuredData={structuredData}
      />
      
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          <Breadcrumbs items={breadcrumbs} />
          
          <div className="mt-8 text-center max-w-4xl mx-auto">
            <Badge className="mb-4" variant="secondary">
              <MapPin className="w-3 h-3 mr-1" />
              10 km from Volders
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Gnadenwald
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              A sun-blessed mountain terrace village offering Alpine tranquility and adventure high above the Inn Valley
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
                <p className="text-2xl font-bold">~700</p>
                <p className="text-sm text-gray-600">Mountain community</p>
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
                <p className="text-2xl font-bold">880m</p>
                <p className="text-sm text-gray-600">Sunny terrace location</p>
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
                <p className="text-2xl font-bold">15 min</p>
                <p className="text-sm text-gray-600">By car (mountain road)</p>
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
                          <p className="font-medium">From Volders (10 km)</p>
                          <p className="text-sm text-gray-600">15 minutes by car (mountain road)</p>
                          <p className="text-sm text-gray-600">Note: Steep, winding road</p>
                        </div>
                        <div>
                          <p className="font-medium">From Hall in Tirol (8 km)</p>
                          <p className="text-sm text-gray-600">12 minutes by car</p>
                          <p className="text-sm text-gray-600">Local bus service available</p>
                        </div>
                        <div>
                          <p className="font-medium">From Innsbruck (18 km)</p>
                          <p className="text-sm text-gray-600">25 minutes by car</p>
                          <p className="text-sm text-gray-600">Bus to Hall, then local connection</p>
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
                  <h3 className="text-xl font-semibold mb-4">Adventure Activities</h3>
                  <Card className="mb-6">
                    <CardContent className="pt-6">
                      <div className="space-y-3">
                        <div>
                          <p className="font-medium">Paragliding</p>
                          <p className="text-sm text-gray-600">Tandem flights available</p>
                          <p className="text-sm text-gray-600">April-October, weather dependent</p>
                        </div>
                        <div>
                          <p className="font-medium">Mountain Biking</p>
                          <p className="text-sm text-gray-600">Forest trails and downhill routes</p>
                          <p className="text-sm text-gray-600">Bike rental in Hall in Tirol</p>
                        </div>
                        <div>
                          <p className="font-medium">Winter Sports</p>
                          <p className="text-sm text-gray-600">Snowshoeing and ski touring</p>
                          <p className="text-sm text-gray-600">Equipment rental nearby</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <h3 className="text-xl font-semibold mb-4">Seasonal Highlights</h3>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="space-y-3">
                        <Link href="/local-guide/activities/spring" className="block hover:bg-gray-50 p-2 rounded">
                          <p className="font-medium text-primary">Spring Adventures</p>
                          <p className="text-sm text-gray-600">Wildflower hikes, paragliding begins</p>
                        </Link>
                        <Link href="/local-guide/activities/summer" className="block hover:bg-gray-50 p-2 rounded">
                          <p className="font-medium text-primary">Summer Activities</p>
                          <p className="text-sm text-gray-600">Peak paragliding, herb gardens</p>
                        </Link>
                        <Link href="/local-guide/activities/autumn" className="block hover:bg-gray-50 p-2 rounded">
                          <p className="font-medium text-primary">Autumn Experiences</p>
                          <p className="text-sm text-gray-600">Mushroom picking, harvest time</p>
                        </Link>
                        <Link href="/local-guide/activities/winter" className="block hover:bg-gray-50 p-2 rounded">
                          <p className="font-medium text-primary">Winter Magic</p>
                          <p className="text-sm text-gray-600">Snowshoeing, winter forest walks</p>
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
                <h3 className="text-lg font-semibold mb-4">Gnadenwald Location</h3>
                <div className="rounded-lg overflow-hidden shadow-md">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10841.234567!2d11.5667!3d47.3350!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479d6e2f4b6c8d9f%3A0x1234567890abcdef!2sGnadenwald%2C%20Austria!5e0!3m2!1sen!2sat!4v1234567890"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Gnadenwald Map"
                  />
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Gnadenwald sits on a sunny terrace 880m above sea level, offering breathtaking views over the Inn Valley. 
                  This peaceful mountain village is renowned for paragliding and its exceptional sunny climate.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Nearby Villages</h3>
                <div className="space-y-3">
                  <Link href="/local-guide/hall-in-tirol" className="block hover:bg-white/50 p-3 rounded-lg transition-colors">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium text-primary">Hall in Tirol</p>
                        <p className="text-sm text-gray-600">Medieval old town & mint museum</p>
                      </div>
                      <Badge variant="outline">8 km</Badge>
                    </div>
                  </Link>
                  
                  <Link href="/local-guide/fritzens" className="block hover:bg-white/50 p-3 rounded-lg transition-colors">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium text-primary">Fritzens</p>
                        <p className="text-sm text-gray-600">Panoramic views & hiking trails</p>
                      </div>
                      <Badge variant="outline">8 km</Badge>
                    </div>
                  </Link>
                  
                  <Link href="/local-guide/volders" className="block hover:bg-white/50 p-3 rounded-lg transition-colors">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium text-primary">Volders</p>
                        <p className="text-sm text-gray-600">Historic churches & Lake Volders</p>
                      </div>
                      <Badge variant="outline">10 km</Badge>
                    </div>
                  </Link>
                  
                  <Link href="/local-guide/wattens" className="block hover:bg-white/50 p-3 rounded-lg transition-colors">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium text-primary">Wattens</p>
                        <p className="text-sm text-gray-600">Swarovski Crystal Worlds</p>
                      </div>
                      <Badge variant="outline">11 km</Badge>
                    </div>
                  </Link>
                  
                  <Link href="/local-guide/baumkirchen" className="block hover:bg-white/50 p-3 rounded-lg transition-colors">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium text-primary">Baumkirchen</p>
                        <p className="text-sm text-gray-600">Orchards & cycling paths</p>
                      </div>
                      <Badge variant="outline">12 km</Badge>
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