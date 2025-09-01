import MetaTags from '@/components/seo/MetaTags'
import Breadcrumbs from '@/components/navigation/Breadcrumbs'
import Link from 'next/link'
import { Sun, Mountain, Waves, Music, Cable, Theater, MapPin, Clock, Calendar, ChevronRight, Users } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const summerActivities = [
  {
    name: 'Swimming & Water Activities',
    icon: Waves,
    description: 'Cool off in natural lakes, outdoor pools, and river swimming spots perfect for hot summer days.',
    locations: [
      { village: 'Volders', link: '/local-guide/volders', note: 'Lake Volders for peaceful swimming' },
      { village: 'Hall in Tirol', link: '/local-guide/hall-in-tirol', note: 'Public outdoor pool complex' },
      { village: 'Inn River', link: '/local-guide', note: 'Natural swimming spots' }
    ],
    bestTime: 'June-August',
    duration: 'Half day to full day',
    difficulty: 'Easy',
    bookingRequired: false,
    price: 'Lakes free, Pools €5-8'
  },
  {
    name: 'Alpine Festivals',
    icon: Music,
    description: 'Traditional Tyrolean festivals featuring folk music, dancing, local food, and cultural celebrations.',
    locations: [
      { village: 'All villages', link: '/local-guide', note: 'Rotating village festivals' },
      { village: 'Volders', link: '/local-guide/volders', note: 'Annual summer festival in July' },
      { village: 'Wattens', link: '/local-guide/wattens', note: 'Crystal Festival in August' }
    ],
    bestTime: 'July-August',
    duration: 'Evening events',
    difficulty: 'Easy',
    bookingRequired: false,
    free: true,
    highlight: 'Authentic local culture'
  },
  {
    name: 'Cable Car Excursions',
    icon: Cable,
    description: 'Ride cable cars to mountain peaks for stunning views, alpine restaurants, and high-altitude hiking.',
    locations: [
      { village: 'Glungezer (from Hall)', link: '/local-guide/hall-in-tirol', note: '2,677m peak access' },
      { village: 'Patscherkofel (nearby)', link: '/local-guide', note: 'Olympic mountain views' },
      { village: 'Nordkette (Innsbruck)', link: '/local-guide', note: '30 min from Volders' }
    ],
    bestTime: 'June-September',
    duration: 'Full day',
    difficulty: 'Easy to reach, various hiking options',
    bookingRequired: false,
    price: '€25-40 round trip'
  },
  {
    name: 'Open-Air Theatre',
    icon: Theater,
    description: 'Summer theatre performances in historic courtyards, castle grounds, and natural amphitheaters.',
    locations: [
      { village: 'Hall in Tirol', link: '/local-guide/hall-in-tirol', note: 'Castle courtyard performances' },
      { village: 'Innsbruck venues', link: '/local-guide', note: 'Multiple outdoor stages' },
      { village: 'Local villages', link: '/local-guide', note: 'Traveling theatre groups' }
    ],
    bestTime: 'July-August',
    duration: 'Evening performances',
    difficulty: 'Easy',
    bookingRequired: true,
    price: '€15-35 per ticket'
  }
]

const monthlyHighlights = {
  June: {
    weather: 'Warm, 20-25°C',
    events: ['Midsummer celebrations', 'Mountain hut season opens', 'Longest days of the year'],
    tips: 'Book mountain huts early for overnight stays'
  },
  July: {
    weather: 'Hot, 25-30°C',
    events: ['Peak festival season', 'Perfect swimming weather', 'Alpine flower meadows'],
    tips: 'Start hikes early to avoid afternoon heat'
  },
  August: {
    weather: 'Hot, 25-30°C',
    events: ['Harvest begins', 'Star gazing nights', 'Late summer festivals'],
    tips: 'Best time for high-altitude hikes'
  }
}

const recommendedItineraries = [
  {
    name: 'Summer Adventure Week',
    duration: '5 days',
    day1: [
      'Morning: Cable car to Glungezer',
      'Afternoon: High altitude hiking',
      'Evening: Mountain hut dinner'
    ],
    day2: [
      'Morning: Swimming at Lake Volders',
      'Afternoon: Visit Swarovski Crystal Worlds',
      'Evening: Local restaurant in Wattens'
    ],
    day3: [
      'Morning: Mountain biking in Fritzens',
      'Afternoon: Paragliding in Gnadenwald',
      'Evening: Alpine festival in village'
    ],
    day4: [
      'Morning: Hiking trail from Volders',
      'Afternoon: Historic tour of Hall in Tirol',
      'Evening: Open-air theatre performance'
    ],
    day5: [
      'Morning: Local market shopping',
      'Afternoon: Relaxation and departure'
    ]
  },
  {
    name: 'Family Summer Holiday',
    duration: '3 days',
    day1: [
      'Morning: Easy family hike',
      'Afternoon: Swimming pool in Hall',
      'Evening: Ice cream in village square'
    ],
    day2: [
      'Morning: Cable car adventure',
      'Afternoon: Alpine playground',
      'Evening: Traditional dinner'
    ],
    day3: [
      'Morning: Farm visit in Baumkirchen',
      'Afternoon: Crystal Worlds exploration',
      'Evening: Family-friendly festival'
    ]
  }
]

const summerTips = [
  'Sun protection essential above 1,500m',
  'Afternoon thunderstorms common - plan accordingly',
  'Mountain huts require cash payment',
  'Book accommodations well in advance',
  'Bring swimwear for spontaneous lake stops',
  'Festival dates vary yearly - check local calendars'
]

export default function SummerActivitiesPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    "name": "Summer Activities in Hall-Wattens Region",
    "description": "Summer activities including swimming, Alpine festivals, cable car rides, and open-air theatre in the Tyrolean Alps",
    "url": "https://oachkatzl.com/local-guide/activities/summer",
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
    { name: 'Summer' }
  ]

  return (
    <>
      <MetaTags 
        title="Summer Activities Hall-Wattens | Swimming, Festivals & Alpine Fun"
        description="Summer in Tirol: swimming lakes, Alpine festivals, cable car adventures, open-air theatre. Complete June-August activity guide near Volders."
        structuredData={structuredData}
      />
      
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          <Breadcrumbs items={breadcrumbs} />
          
          <div className="mt-8 text-center max-w-4xl mx-auto">
            <Badge className="mb-4" variant="secondary">
              <Sun className="w-3 h-3 mr-1" />
              June - August
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Summer Activities
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Long sunny days perfect for swimming, festivals, mountain adventures, and cultural experiences
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-4 mb-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <Waves className="w-8 h-8 text-blue-600 mb-2" />
                <CardTitle className="text-lg">Swimming</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Lakes & pools</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <Music className="w-8 h-8 text-purple-600 mb-2" />
                <CardTitle className="text-lg">Alpine Festivals</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Traditional celebrations</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <Cable className="w-8 h-8 text-green-600 mb-2" />
                <CardTitle className="text-lg">Cable Car Rides</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Mountain access</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <Theater className="w-8 h-8 text-red-600 mb-2" />
                <CardTitle className="text-lg">Open-Air Theatre</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Cultural nights</p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="activities" className="mb-12">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="activities">Featured Activities</TabsTrigger>
              <TabsTrigger value="monthly">Monthly Guide</TabsTrigger>
              <TabsTrigger value="itineraries">Itineraries</TabsTrigger>
              <TabsTrigger value="tips">Summer Tips</TabsTrigger>
            </TabsList>
            
            <TabsContent value="activities" className="mt-6">
              <div className="space-y-6">
                {summerActivities.map((activity, index) => {
                  const Icon = activity.icon
                  return (
                    <Card key={index} className="overflow-hidden">
                      <CardHeader>
                        <CardTitle className="flex items-center text-xl">
                          <Icon className="w-5 h-5 mr-2 text-blue-600" />
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
                            <Badge className="bg-blue-100 text-blue-800">
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
              <div className="space-y-6">
                {recommendedItineraries.map((itinerary, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle>{itinerary.name}</CardTitle>
                      <CardDescription>{itinerary.duration}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {Object.entries(itinerary).map(([key, value]) => {
                          if (key.startsWith('day')) {
                            const dayNumber = key.replace('day', '')
                            return (
                              <div key={key}>
                                <h4 className="font-semibold mb-2">Day {dayNumber}</h4>
                                <ul className="space-y-1">
                                  {value.map((item, i) => (
                                    <li key={i} className="text-sm text-gray-600">• {item}</li>
                                  ))}
                                </ul>
                              </div>
                            )
                          }
                          return null
                        })}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="tips" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Essential Summer Tips</CardTitle>
                  <CardDescription>Make the most of your summer visit</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {summerTips.map((tip, index) => (
                      <div key={index} className="flex items-start">
                        <Sun className="w-4 h-4 mr-2 mt-0.5 text-yellow-600 flex-shrink-0" />
                        <p className="text-sm text-gray-600">{tip}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold mb-2">Peak Season Note</h4>
                    <p className="text-sm text-gray-600">
                      July and August are the busiest months. Book accommodations and popular activities 
                      well in advance. Consider visiting in June or early September for fewer crowds 
                      while still enjoying warm weather.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="bg-gradient-to-br from-blue-50 to-green-50">
              <CardHeader>
                <CardTitle>Related Summer Pages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Link href="/local-guide/activities/hiking-trails" className="block hover:bg-white/50 p-2 rounded">
                    <p className="font-medium text-primary">Summer Hiking Trails</p>
                    <p className="text-sm text-gray-600">All difficulty levels open</p>
                  </Link>
                  <Link href="/local-guide/gnadenwald" className="block hover:bg-white/50 p-2 rounded">
                    <p className="font-medium text-primary">Paragliding in Gnadenwald</p>
                    <p className="text-sm text-gray-600">Perfect summer conditions</p>
                  </Link>
                  <Link href="/local-guide/dining" className="block hover:bg-white/50 p-2 rounded">
                    <p className="font-medium text-primary">Al Fresco Dining</p>
                    <p className="text-sm text-gray-600">Outdoor restaurant terraces</p>
                  </Link>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-yellow-50 to-orange-50">
              <CardHeader>
                <CardTitle>Village Summer Specials</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Link href="/local-guide/volders" className="block hover:bg-white/50 p-2 rounded">
                    <p className="font-medium text-primary">Volders Summer Festival</p>
                    <p className="text-sm text-gray-600">Annual July celebration</p>
                  </Link>
                  <Link href="/local-guide/hall-in-tirol" className="block hover:bg-white/50 p-2 rounded">
                    <p className="font-medium text-primary">Hall Medieval Festival</p>
                    <p className="text-sm text-gray-600">August historical event</p>
                  </Link>
                  <Link href="/local-guide/wattens" className="block hover:bg-white/50 p-2 rounded">
                    <p className="font-medium text-primary">Wattens Crystal Festival</p>
                    <p className="text-sm text-gray-600">Late summer sparkle</p>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Explore Other Seasons</h2>
            <p className="text-gray-600 mb-6">Discover year-round activities in the Hall-Wattens region</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/local-guide/activities/spring" className="btn btn-outline">
                Spring Activities
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