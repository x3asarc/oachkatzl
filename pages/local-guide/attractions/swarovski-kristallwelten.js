import MetaTags from '@/components/seo/MetaTags'
import Breadcrumbs from '@/components/navigation/Breadcrumbs'
import Link from 'next/link'
import { MapPin, Clock, Euro, Calendar, Phone, Globe, ChevronRight, Sparkles, Users, Camera } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription } from '@/components/ui/alert'

export default function SwarovskiKristallweltenPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    "name": "Swarovski Crystal Worlds",
    "description": "One of Austria's most visited attractions featuring crystal art installations and gardens",
    "url": "https://oachkatzl.com/local-guide/attractions/swarovski-kristallwelten",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Kristallweltenstraße 1",
      "addressLocality": "Wattens",
      "postalCode": "6112",
      "addressCountry": "AT"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "08:30",
      "closes": "19:30"
    }
  }

  return (
    <>
      <MetaTags
        title="Swarovski Crystal Worlds Wattens | Complete Visitor Guide"
        description="Plan your visit to Swarovski Crystal Worlds near Volders. Opening hours, ticket prices, what to see, and insider tips for Austria's crystal wonderland."
        url="/local-guide/attractions/swarovski-kristallwelten"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gray-50">
        <div className="bg-gradient-to-b from-purple-900 via-purple-700 to-blue-600 text-white">
          <div className="container mx-auto px-4 py-6">
            <Breadcrumbs 
              items={[
                { label: 'Local Guide', href: '/local-guide' },
                { label: 'Attractions', href: '/local-guide/attractions' },
                { label: 'Swarovski Crystal Worlds', href: null }
              ]} 
            />
          </div>
          
          <div className="container mx-auto px-4 pb-16 pt-8">
            <div className="flex items-start gap-3 mb-4">
              <Sparkles className="w-10 h-10 text-yellow-300" />
              <h1 className="text-4xl md:text-5xl font-bold">
                Swarovski Crystal Worlds
              </h1>
            </div>
            <p className="text-xl text-purple-100 max-w-3xl mb-6">
              A magical universe of crystal art, where imagination meets brilliance. 
              Experience 17 Chambers of Wonder designed by international artists.
            </p>
            <div className="flex flex-wrap gap-4">
              <Badge className="bg-white/20 text-white border-white/30 px-3 py-1">
                <MapPin className="w-4 h-4 mr-1" />
                5 km from Volders
              </Badge>
              <Badge className="bg-white/20 text-white border-white/30 px-3 py-1">
                <Users className="w-4 h-4 mr-1" />
                2+ Million Visitors/Year
              </Badge>
              <Badge className="bg-white/20 text-white border-white/30 px-3 py-1">
                <Clock className="w-4 h-4 mr-1" />
                2-4 Hours Visit
              </Badge>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <section>
                <h2 className="text-3xl font-bold mb-6">Essential Information</h2>
                <Card>
                  <CardContent className="pt-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold mb-3">Opening Hours</h3>
                        <div className="space-y-2 text-sm">
                          <p><Clock className="w-4 h-4 inline mr-2" />Daily: 8:30 AM - 7:30 PM</p>
                          <p><Calendar className="w-4 h-4 inline mr-2" />Open year-round</p>
                          <p className="text-gray-600">Last entry: 6:30 PM</p>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-3">Ticket Prices</h3>
                        <div className="space-y-2 text-sm">
                          <p><Euro className="w-4 h-4 inline mr-2" />Adults: €19</p>
                          <p><Euro className="w-4 h-4 inline mr-2" />Youth (6-14): €7.50</p>
                          <p><Euro className="w-4 h-4 inline mr-2" />Children under 5: Free</p>
                          <p className="text-green-600 font-medium">Online booking saves time!</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">What to Experience</h2>
                <div className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Chambers of Wonder</CardTitle>
                      <CardDescription>17 unique installations by renowned artists</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li>• <strong>Blue Hall:</strong> Masterpieces from Dalí, Warhol, and more</li>
                        <li>• <strong>Crystal Dome:</strong> 595 mirrors creating infinite reflections</li>
                        <li>• <strong>Ice Passage:</strong> Crystal interpretations of ice formations</li>
                        <li>• <strong>Silent Light:</strong> Meditative space with crystal installations</li>
                        <li>• <strong>Crystal Theatre:</strong> Immersive crystal performances</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>The Giant & Gardens</CardTitle>
                      <CardDescription>Iconic entrance and outdoor wonderland</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li>• <strong>The Giant:</strong> Famous head-shaped entrance with waterfall</li>
                        <li>• <strong>Crystal Cloud:</strong> 800,000 hand-mounted crystals</li>
                        <li>• <strong>Mirror Pool:</strong> Reflective art installation</li>
                        <li>• <strong>Playground:</strong> Crystal-themed play area for children</li>
                        <li>• <strong>Carousel:</strong> Unique crystal-decorated merry-go-round</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Visitor Tips</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="border-green-200">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">Best Times to Visit</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-1 text-sm">
                        <li>• Weekdays are less crowded</li>
                        <li>• Early morning or late afternoon</li>
                        <li>• Garden beautiful in summer</li>
                        <li>• Magical in winter with lights</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-blue-200">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">Photography</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-1 text-sm">
                        <li>• Photography allowed in most areas</li>
                        <li>• No flash in Chambers of Wonder</li>
                        <li>• Giant waterfall best morning light</li>
                        <li>• Crystal Cloud stunning at sunset</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Dining & Shopping</h2>
                <Card>
                  <CardContent className="pt-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold mb-2">Restaurants</h3>
                        <ul className="space-y-1 text-sm">
                          <li>• <strong>Daniels:</strong> Fine dining with crystal views</li>
                          <li>• <strong>Café-Restaurant:</strong> Casual dining, family-friendly</li>
                          <li>• <strong>Garden Café:</strong> Light meals and snacks</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Shopping</h3>
                        <ul className="space-y-1 text-sm">
                          <li>• Largest Swarovski store globally</li>
                          <li>• Exclusive crystal collections</li>
                          <li>• Tax-free shopping for non-EU visitors</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>
            </div>

            <div className="space-y-6">
              <Card className="border-purple-200 bg-purple-50">
                <CardHeader>
                  <CardTitle>Quick Facts</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div>
                      <strong>Duration:</strong>
                      <p className="text-gray-600">2-4 hours recommended</p>
                    </div>
                    <div>
                      <strong>Accessibility:</strong>
                      <p className="text-gray-600">Wheelchair accessible</p>
                    </div>
                    <div>
                      <strong>Languages:</strong>
                      <p className="text-gray-600">Audio guides in 10 languages</p>
                    </div>
                    <div>
                      <strong>Facilities:</strong>
                      <p className="text-gray-600">Free parking, lockers, baby changing</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Contact & Booking</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <p>
                      <Phone className="w-4 h-4 inline mr-2" />
                      +43 5224 51080
                    </p>
                    <p>
                      <Globe className="w-4 h-4 inline mr-2" />
                      <a href="https://kristallwelten.swarovski.com" className="text-blue-600 hover:underline">
                        kristallwelten.swarovski.com
                      </a>
                    </p>
                    <p>
                      <MapPin className="w-4 h-4 inline mr-2" />
                      Kristallweltenstraße 1, 6112 Wattens
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Alert className="border-amber-200 bg-amber-50">
                <AlertDescription>
                  <strong>Money-Saving Tip:</strong> The Hall-Wattens Card offers discounts. 
                  Ask at your accommodation about guest card benefits!
                </AlertDescription>
              </Alert>

              <Card className="bg-green-50 border-green-200">
                <CardHeader>
                  <CardTitle>Getting There from Volders</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div>
                      <strong>By Bus:</strong>
                      <p className="text-gray-600">Line 4141, free with guest card</p>
                    </div>
                    <div>
                      <strong>By Car:</strong>
                      <p className="text-gray-600">5 km, 10 min via L223</p>
                    </div>
                    <div>
                      <strong>Shuttle Service:</strong>
                      <p className="text-gray-600">Crystal Worlds Shuttle from Innsbruck</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold mb-4">Ready to explore the Crystal Worlds?</h3>
            <p className="text-gray-600 mb-6">
              Stay at Oachkatzl Apartments - just 5 km from this magical attraction!
            </p>
            <Link 
              href="/#booking" 
              className="inline-flex items-center bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition"
            >
              Book Your Stay
              <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}