import MetaTags from '@/components/seo/MetaTags'
import Breadcrumbs from '@/components/navigation/Breadcrumbs'
import Link from 'next/link'
import { MapPin, Clock, Euro, Users, ChevronRight, Sparkles } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function WattensVillagePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    "name": "Wattens, Tirol - Crystal Capital",
    "description": "Home to Swarovski Crystal Worlds, one of Austria's most visited attractions",
    "url": "https://oachkatzl.com/local-guide/wattens"
  }

  return (
    <>
      <MetaTags
        title="Wattens Crystal Capital | Swarovski Crystal Worlds Guide"
        description="Visit Swarovski Crystal Worlds in Wattens, just 5km from Volders. Opening hours, prices, and insider tips for Austria's crystal wonderland."
        url="/local-guide/wattens"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gray-50">
        <div className="bg-gradient-to-b from-purple-800 to-purple-600 text-white">
          <div className="container mx-auto px-4 py-6">
            <Breadcrumbs 
              items={[
                { label: 'Local Guide', href: '/local-guide' },
                { label: 'Wattens', href: null }
              ]} 
            />
          </div>
          
          <div className="container mx-auto px-4 pb-16 pt-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Wattens - The Crystal Capital
            </h1>
            <p className="text-xl text-purple-100 max-w-3xl mb-6">
              Home to the world-famous Swarovski Crystal Worlds, Wattens combines 
              industrial heritage with stunning crystal art installations.
            </p>
            <div className="flex flex-wrap gap-4">
              <Badge className="bg-white/20 text-white border-white/30 px-3 py-1">
                <MapPin className="w-4 h-4 mr-1" />
                5 km from Volders
              </Badge>
              <Badge className="bg-white/20 text-white border-white/30 px-3 py-1">
                <Users className="w-4 h-4 mr-1" />
                2M+ visitors annually
              </Badge>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <section className="mb-16">
            <Card className="border-purple-200">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl flex items-center gap-2">
                      <Sparkles className="w-6 h-6 text-purple-600" />
                      Swarovski Crystal Worlds
                    </CardTitle>
                    <CardDescription>Austria's Most Visited Paid Attraction</CardDescription>
                  </div>
                  <Badge className="bg-purple-100 text-purple-800">Must Visit</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3">Visitor Information</h3>
                    <div className="space-y-2 text-sm">
                      <p><Clock className="w-4 h-4 inline mr-2" />Daily: 8:30 AM - 7:30 PM</p>
                      <p><Euro className="w-4 h-4 inline mr-2" />Adults €19 | Youth (6-14) €7.50</p>
                      <p><Clock className="w-4 h-4 inline mr-2" />Visit Duration: 2-4 hours</p>
                      <p><MapPin className="w-4 h-4 inline mr-2" />Kristallweltenstraße 1, 6112 Wattens</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">What to Expect</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• 17 Chambers of Wonder with crystal installations</li>
                      <li>• Giant Crystal Cloud with 800,000 crystals</li>
                      <li>• Beautiful garden with art installations</li>
                      <li>• Crystal-themed playground for children</li>
                      <li>• Extensive shopping area and restaurants</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-purple-50 rounded-lg">
                  <p className="text-sm text-purple-800">
                    <strong>Insider Tip:</strong> Book tickets online to skip the queue. 
                    Visit on weekdays for smaller crowds. The garden is free to enter after 6 PM.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Other Attractions in Wattens</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Austria's Only Typewriter Museum</CardTitle>
                  <CardDescription>450+ functional typewriters</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Unique collection spanning from 1884 to present day. 
                    Interactive exhibits where visitors can try typing on vintage machines.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Museum Wattens</CardTitle>
                  <CardDescription>Local History & Culture</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Learn about Wattens' transformation from a small village to 
                    the crystal capital through the Swarovski story.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Getting to Wattens from Volders</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">By Bus</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">Regional bus (free with Hall-Wattens Card)</p>
                  <p className="text-sm text-gray-600">10-15 minutes</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">By Car</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">5 km via L223</p>
                  <p className="text-sm text-gray-600">5-10 minutes</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">By Bike</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">Valley cycle path</p>
                  <p className="text-sm text-gray-600">20-25 minutes</p>
                </CardContent>
              </Card>
            </div>
          </section>

          <div className="bg-purple-50 rounded-lg p-8 text-center">
            <h3 className="text-xl font-semibold mb-4">Plan Your Crystal Experience</h3>
            <p className="text-gray-700 mb-6">
              Wattens is just 5 km from your accommodation. Perfect for a half-day or full-day excursion!
            </p>
            <Link 
              href="/#booking" 
              className="inline-flex items-center bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition"
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