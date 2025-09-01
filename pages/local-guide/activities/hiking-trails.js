import MetaTags from '@/components/seo/MetaTags'
import Breadcrumbs from '@/components/navigation/Breadcrumbs'
import Link from 'next/link'
import { Mountain, Clock, Users, MapPin, ChevronRight, AlertCircle } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription } from '@/components/ui/alert'

const hikingTrails = [
  {
    name: 'Volderberg Circular Trail',
    difficulty: 'Easy',
    duration: '2 hours',
    distance: '5 km',
    elevation: '200 m',
    description: 'Family-friendly circular route through forests and meadows with valley views.',
    highlights: ['Karlskirche viewpoint', 'Forest paths', 'Valley panorama'],
    startPoint: 'Volders village center'
  },
  {
    name: 'Himmelreich Archaeological Trail',
    difficulty: 'Moderate',
    duration: '3-4 hours',
    distance: '10 km',
    elevation: '400 m',
    description: "Explore Tirol's prehistoric settlements with informative signage along scenic paths.",
    highlights: ['Archaeological sites', 'Educational boards', 'Mountain views'],
    startPoint: 'Volders parking area'
  },
  {
    name: 'Gnadenwald Plateau Hike',
    difficulty: 'Moderate',
    duration: '4 hours',
    distance: '12 km',
    elevation: '600 m',
    description: 'Ascend to the alpine plateau for spectacular panoramic views and monastery visit.',
    highlights: ["St. Martin's Abbey", 'Alpine meadows', 'Inn Valley views'],
    startPoint: 'Volders or Gnadenwald'
  },
  {
    name: 'Wattenberg Mountain Trail',
    difficulty: 'Challenging',
    duration: '6 hours',
    distance: '15 km',
    elevation: '1000 m',
    description: 'Demanding mountain hike to Wattenberg with rewarding summit views.',
    highlights: ['Summit cross', '360° panorama', 'Alpine flora'],
    startPoint: 'Wattens cable car station'
  }
]

export default function HikingTrailsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    "name": "Hiking Trails around Volders",
    "description": "Discover hiking trails for all levels in the Hall-Wattens region of Tirol",
    "url": "https://oachkatzl.com/local-guide/activities/hiking-trails"
  }

  return (
    <>
      <MetaTags
        title="Hiking Trails Volders Tirol | Routes for All Levels"
        description="Explore hiking trails from easy valley walks to challenging mountain routes around Volders. Trail maps, difficulty levels, and insider tips."
        url="/local-guide/activities/hiking-trails"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gray-50">
        <div className="bg-gradient-to-b from-green-900 to-green-700 text-white">
          <div className="container mx-auto px-4 py-6">
            <Breadcrumbs 
              items={[
                { label: 'Local Guide', href: '/local-guide' },
                { label: 'Activities', href: '/local-guide/activities' },
                { label: 'Hiking Trails', href: null }
              ]} 
            />
          </div>
          
          <div className="container mx-auto px-4 pb-16 pt-8">
            <div className="flex items-start gap-3 mb-4">
              <Mountain className="w-10 h-10 text-green-300" />
              <h1 className="text-4xl md:text-5xl font-bold">
                Alpine Hiking Trails
              </h1>
            </div>
            <p className="text-xl text-green-100 max-w-3xl">
              From gentle valley walks to challenging summit conquests, discover trails 
              that showcase the natural beauty of the Tyrolean Alps.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <Alert className="mb-8 border-amber-200 bg-amber-50">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              <strong>Safety First:</strong> Always check weather conditions, wear appropriate footwear, 
              and carry water and snacks. Mountain weather can change quickly.
            </AlertDescription>
          </Alert>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Popular Hiking Trails</h2>
            <div className="grid gap-6">
              {hikingTrails.map((trail, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl">{trail.name}</CardTitle>
                        <CardDescription className="flex items-center gap-4 mt-2">
                          <Badge variant={
                            trail.difficulty === 'Easy' ? 'secondary' :
                            trail.difficulty === 'Moderate' ? 'default' : 'destructive'
                          }>
                            {trail.difficulty}
                          </Badge>
                          <span className="text-sm">
                            <Clock className="w-4 h-4 inline mr-1" />
                            {trail.duration}
                          </span>
                          <span className="text-sm">
                            <Mountain className="w-4 h-4 inline mr-1" />
                            {trail.elevation} elevation
                          </span>
                        </CardDescription>
                      </div>
                      <Badge variant="outline">{trail.distance}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{trail.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-sm mb-2">Trail Highlights</h4>
                        <ul className="space-y-1">
                          {trail.highlights.map((highlight, i) => (
                            <li key={i} className="text-sm text-gray-600">
                              • {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-2">Starting Point</h4>
                        <p className="text-sm text-gray-600">
                          <MapPin className="w-4 h-4 inline mr-1" />
                          {trail.startPoint}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Essential Hiking Information</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Best Hiking Seasons</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Spring (Apr-May):</strong> Lower trails, wildflowers</li>
                    <li><strong>Summer (Jun-Aug):</strong> All trails accessible</li>
                    <li><strong>Autumn (Sep-Oct):</strong> Perfect weather, fall colors</li>
                    <li><strong>Winter:</strong> Valley trails only (unless equipped)</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What to Bring</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1 text-sm">
                    <li>• Hiking boots with good grip</li>
                    <li>• Water (min. 1.5L per person)</li>
                    <li>• Sun protection & hat</li>
                    <li>• Light rain jacket</li>
                    <li>• Trail map or GPS app</li>
                    <li>• First aid basics</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Mountain Huts</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Wattenberger Alm:</strong> Open Jun-Oct</li>
                    <li><strong>Gnadenwald Alm:</strong> Refreshments available</li>
                    <li><strong>Volderberg Hut:</strong> Weekend opening</li>
                    <li className="text-amber-600">Check opening times before hiking!</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="bg-green-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Guided Hiking Options</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Hall-Wattens Tourism</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Free guided hikes weekly in summer with Hall-Wattens guest card.
                </p>
                <p className="text-sm">Contact: +43 5223 45544-0</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Private Mountain Guides</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Professional guides for challenging routes and summit tours.
                </p>
                <p className="text-sm">Book through local tourism office</p>
              </div>
            </div>
          </section>

          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold mb-4">Ready for your alpine adventure?</h3>
            <p className="text-gray-600 mb-6">
              Stay at Oachkatzl Apartments - your perfect base for hiking in Tirol!
            </p>
            <Link 
              href="/#booking" 
              className="inline-flex items-center bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition"
            >
              Book Your Hiking Holiday
              <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}