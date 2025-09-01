import MetaTags from '@/components/seo/MetaTags'
import Breadcrumbs from '@/components/navigation/Breadcrumbs'
import Link from 'next/link'
import { Flower, Mountain, Calendar, MapPin, Clock, Camera, ChevronRight, Sun, Bike } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const springActivities = [
  {
    name: 'Alpine Wildflower Tours',
    icon: Flower,
    description: 'Guided botanical walks through meadows bursting with spring wildflowers including gentians, primulas, and Alpine roses.',
    locations: [
      { village: 'Gnadenwald', link: '/local-guide/gnadenwald', note: 'Best variety at 880m elevation' },
      { village: 'Volders', link: '/local-guide/volders', note: 'Easy access meadows' }
    ],
    bestTime: 'April-May',
    duration: '2-3 hours',
    difficulty: 'Easy',
    bookingRequired: true,
    price: '€15-25 per person'
  },
  {
    name: 'Easter Markets',
    icon: Calendar,
    description: 'Traditional Easter markets featuring local crafts, decorated eggs, spring flowers, and regional delicacies.',
    locations: [
      { village: 'Hall in Tirol', link: '/local-guide/hall-in-tirol', note: 'Largest market in region' },
      { village: 'Wattens', link: '/local-guide/wattens', note: 'Crystal-themed decorations' },
      { village: 'Volders', link: '/local-guide/volders', note: 'Small village atmosphere' }
    ],
    bestTime: '2 weeks before Easter',
    duration: 'Half day',
    difficulty: 'Easy',
    bookingRequired: false,
    free: true
  },
  {
    name: 'Spring Hiking Trails',
    icon: Mountain,
    description: 'Lower altitude trails perfect for early season hiking as snow melts from higher elevations.',
    locations: [
      { village: 'All villages', link: '/local-guide/activities/hiking-trails', note: 'Valley and hillside routes' }
    ],
    bestTime: 'March-May',
    duration: '1-5 hours',
    difficulty: 'Easy to Moderate',
    bookingRequired: false,
    free: true,
    highlight: 'Snow-capped peaks with green valleys'
  },
  {
    name: 'Mountain Biking Season Opening',
    icon: Bike,
    description: 'Trail networks open as snow clears, offering everything from family rides to challenging mountain routes.',
    locations: [
      { village: 'Fritzens', link: '/local-guide/fritzens', note: 'Technical trails' },
      { village: 'Baumkirchen', link: '/local-guide/baumkirchen', note: 'Inn Cycle Path' },
      { village: 'Gnadenwald', link: '/local-guide/gnadenwald', note: 'Mountain routes' }
    ],
    bestTime: 'April-May',
    duration: '2-6 hours',
    difficulty: 'All levels',
    bookingRequired: false,
    rental: 'Bikes available in Hall/Wattens'
  }
]

const monthlyHighlights = {
  March: {
    weather: 'Variable, 5-15°C',
    events: ['Early spring walks', 'Last skiing opportunities', 'Easter preparations begin'],
    tips: 'Layer clothing, weather can change quickly'
  },
  April: {
    weather: 'Mild, 10-18°C',
    events: ['Easter celebrations', 'First wildflowers', 'Cycling season begins'],
    tips: 'Perfect for valley hikes, higher trails may have snow'
  },
  May: {
    weather: 'Warm, 15-22°C',
    events: ['Peak wildflower season', 'May Day festivals', 'All trails accessible'],
    tips: 'Best month for photography, book accommodations early'
  }
}

const recommendedItineraries = [
  {
    name: 'Spring Nature Weekend',
    duration: '2 days',
    day1: [
      'Morning: Wildflower tour in Gnadenwald',
      'Afternoon: Visit Swarovski Crystal Worlds',
      'Evening: Traditional dinner in Volders'
    ],
    day2: [
      'Morning: Easter market in Hall in Tirol',
      'Afternoon: Easy bike ride along Inn River',
      'Evening: Sunset viewing from Fritzens'
    ]
  },
  {
    name: 'Active Spring Break',
    duration: '3 days',
    day1: [
      'Morning: Mountain bike rental and valley exploration',
      'Afternoon: Visit local farms in Baumkirchen',
      'Evening: Relaxation at accommodation'
    ],
    day2: [
      'Full day: Guided hiking tour with botanical focus',
      'Evening: Local restaurant experience'
    ],
    day3: [
      'Morning: Easter market shopping',
      'Afternoon: Cultural sites in Hall in Tirol',
      'Evening: Return journey'
    ]
  }
]

export default function SpringActivitiesPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    "name": "Spring Activities in Hall-Wattens Region",
    "description": "Spring activities including wildflower tours, Easter markets, hiking, and mountain biking in the Tyrolean Alps",
    "url": "https://oachkatzl.com/local-guide/activities/spring",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Tirol",
      "addressCountry": "AT"
    }
  }

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Local Guide', href: '/local-guide' },
    { name: 'Activities', href: '/local-guide/activities' },
    { name: 'Spring' }
  ]

  return (
    <>
      <MetaTags 
        title="Spring Activities Hall-Wattens | Wildflowers, Easter & Hiking"
        description="Spring in Tirol: wildflower tours, Easter markets, early hiking, mountain biking. Complete guide to March-May activities near Volders."
        structuredData={structuredData}
      />
      
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          <Breadcrumbs items={breadcrumbs} />
          
          <div className="mt-8 text-center max-w-4xl mx-auto">
            <Badge className="mb-4" variant="secondary">
              <Sun className="w-3 h-3 mr-1" />
              March - May
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Spring Activities
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Experience the awakening of the Alps with wildflower meadows, Easter traditions, and perfect hiking weather
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-4 mb-12">
            <Link href="/local-guide/activities/hiking-trails" className="block">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                <CardHeader className="pb-2">
                  <Mountain className="w-8 h-8 text-green-600 mb-2" />
                  <CardTitle className="text-lg">Hiking</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Valley trails open</p>
                </CardContent>
              </Card>
            </Link>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <Flower className="w-8 h-8 text-pink-600 mb-2" />
                <CardTitle className="text-lg">Wildflower Tours</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Alpine botanicals</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <Calendar className="w-8 h-8 text-purple-600 mb-2" />
                <CardTitle className="text-lg">Easter Markets</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Traditional celebrations</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <Bike className="w-8 h-8 text-blue-600 mb-2" />
                <CardTitle className="text-lg">Mountain Biking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Trails reopen</p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="activities" className="mb-12">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="activities">Featured Activities</TabsTrigger>
              <TabsTrigger value="monthly">Monthly Guide</TabsTrigger>
              <TabsTrigger value="itineraries">Suggested Itineraries</TabsTrigger>
            </TabsList>
            
            <TabsContent value="activities" className="mt-6">
              <div className="space-y-6">
                {springActivities.map((activity, index) => {
                  const Icon = activity.icon
                  return (
                    <Card key={index} className="overflow-hidden">
                      <CardHeader>
                        <CardTitle className="flex items-center text-xl">
                          <Icon className="w-5 h-5 mr-2 text-green-600" />
                          {activity.name}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 mb-4">{activity.description}</p>
                        
                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <h4 className="font-semibold mb-2">Where to Experience</h4>
                            <div className="space-y-2">
                              {activity.locations.map((location, i) => (
                                <Link key={i} href={location.link} className="block hover:bg-gray-50 p-2 rounded">
                                  <p className="text-primary font-medium">{location.village}</p>
                                  {location.note && (
                                    <p className="text-sm text-gray-600">{location.note}</p>
                                  )}
                                </Link>
                              ))}
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            <div className="flex items-center text-sm">
                              <Clock className="w-4 h-4 mr-2 text-gray-400" />
                              <span className="font-medium">Duration:</span>
                              <span className="ml-2 text-gray-600">{activity.duration}</span>
                            </div>
                            <div className="flex items-center text-sm">
                              <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                              <span className="font-medium">Best Time:</span>
                              <span className="ml-2 text-gray-600">{activity.bestTime}</span>
                            </div>
                            <div className="flex items-center text-sm">
                              <Mountain className="w-4 h-4 mr-2 text-gray-400" />
                              <span className="font-medium">Difficulty:</span>
                              <span className="ml-2 text-gray-600">{activity.difficulty}</span>
                            </div>
                            {activity.price && (
                              <div className="text-sm">
                                <span className="font-medium">Price:</span>
                                <span className="ml-2 text-gray-600">{activity.price}</span>
                              </div>
                            )}
                            {activity.rental && (
                              <div className="text-sm">
                                <span className="font-medium">Rental:</span>
                                <span className="ml-2 text-gray-600">{activity.rental}</span>
                              </div>
                            )}
                          </div>
                        </div>
                        
                        <div className="flex gap-2">
                          {activity.bookingRequired && (
                            <Badge variant="outline">Booking Required</Badge>
                          )}
                          {activity.free && (
                            <Badge variant="secondary">Free Activity</Badge>
                          )}
                          {activity.highlight && (
                            <Badge className="bg-green-100 text-green-800">
                              {activity.highlight}
                            </Badge>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </TabsContent>
            
            <TabsContent value="monthly" className="mt-6">
              <div className="grid md:grid-cols-3 gap-6">
                {Object.entries(monthlyHighlights).map(([month, data]) => (
                  <Card key={month}>
                    <CardHeader>
                      <CardTitle className="text-xl">{month}</CardTitle>
                      <CardDescription>
                        <span className="flex items-center">
                          <Sun className="w-4 h-4 mr-1" />
                          {data.weather}
                        </span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <h4 className="font-semibold mb-2">Events & Activities</h4>
                      <ul className="space-y-1 mb-4">
                        {data.events.map((event, i) => (
                          <li key={i} className="text-sm text-gray-600 flex items-start">
                            <ChevronRight className="w-3 h-3 mr-1 mt-0.5 text-gray-400" />
                            {event}
                          </li>
                        ))}
                      </ul>
                      <div className="pt-3 border-t">
                        <p className="text-sm font-medium text-gray-700">Tip:</p>
                        <p className="text-sm text-gray-600">{data.tips}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="itineraries" className="mt-6">
              <div className="grid md:grid-cols-2 gap-6">
                {recommendedItineraries.map((itinerary, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle>{itinerary.name}</CardTitle>
                      <CardDescription>{itinerary.duration}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Day 1</h4>
                          <ul className="space-y-1">
                            {itinerary.day1.map((item, i) => (
                              <li key={i} className="text-sm text-gray-600">• {item}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Day 2</h4>
                          <ul className="space-y-1">
                            {itinerary.day2.map((item, i) => (
                              <li key={i} className="text-sm text-gray-600">• {item}</li>
                            ))}
                          </ul>
                        </div>
                        {itinerary.day3 && (
                          <div>
                            <h4 className="font-semibold mb-2">Day 3</h4>
                            <ul className="space-y-1">
                              {itinerary.day3.map((item, i) => (
                                <li key={i} className="text-sm text-gray-600">• {item}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Explore Other Seasons</h2>
            <p className="text-gray-600 mb-6">Discover year-round activities in the Hall-Wattens region</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/local-guide/activities/summer" className="btn btn-outline">
                Summer Activities
              </Link>
              <Link href="/local-guide/activities/autumn" className="btn btn-outline">
                Autumn Activities
              </Link>
              <Link href="/local-guide/activities/winter" className="btn btn-outline">
                Winter Activities
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}