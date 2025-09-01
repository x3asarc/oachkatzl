import MetaTags from '@/components/seo/MetaTags'
import Breadcrumbs from '@/components/navigation/Breadcrumbs'
import Link from 'next/link'
import { MapPin, Clock, Castle, Building, Coins, ChevronRight } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function HallInTirolPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    "name": "Hall in Tirol",
    "description": "Medieval town with the largest preserved historic district in North Tirol",
    "url": "https://oachkatzl.com/local-guide/hall-in-tirol"
  }

  return (
    <>
      <MetaTags
        title="Hall in Tirol Old Town | Medieval Architecture & Mint Museum"
        description="Explore Hall in Tirol's medieval old town, 8km from Volders. Visit the Mint Museum, historic streets, and experience authentic Tyrolean culture."
        url="/local-guide/hall-in-tirol"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gray-50">
        <div className="bg-gradient-to-b from-amber-800 to-amber-600 text-white">
          <div className="container mx-auto px-4 py-6">
            <Breadcrumbs 
              items={[
                { label: 'Local Guide', href: '/local-guide' },
                { label: 'Hall in Tirol', href: null }
              ]} 
            />
          </div>
          
          <div className="container mx-auto px-4 pb-16 pt-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hall in Tirol - Medieval Treasure
            </h1>
            <p className="text-xl text-amber-100 max-w-3xl mb-6">
              Step back in time in North Tirol's largest preserved medieval town, 
              where cobblestone streets and historic architecture tell 700 years of history.
            </p>
            <div className="flex flex-wrap gap-4">
              <Badge className="bg-white/20 text-white border-white/30 px-3 py-1">
                <MapPin className="w-4 h-4 mr-1" />
                8 km from Volders
              </Badge>
              <Badge className="bg-white/20 text-white border-white/30 px-3 py-1">
                <Building className="w-4 h-4 mr-1" />
                400x300m Historic Center
              </Badge>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Top Attractions</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-amber-200">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <Castle className="w-6 h-6 text-amber-600 mt-1" />
                    <div>
                      <CardTitle>Hall Mint Museum & Hasegg Castle</CardTitle>
                      <CardDescription>Birthplace of the Thaler</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Discover where the world's first Thaler was minted. See the largest 
                    silver Thaler (20kg) and mint your own coin to take home.
                  </p>
                  <div className="space-y-2 text-sm">
                    <p><Clock className="w-4 h-4 inline mr-2" />Tue-Sun: 10 AM - 5 PM</p>
                    <p><Coins className="w-4 h-4 inline mr-2" />Coin minting experience available</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-amber-200">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <Building className="w-6 h-6 text-amber-600 mt-1" />
                    <div>
                      <CardTitle>Medieval Old Town</CardTitle>
                      <CardDescription>Largest in North Tirol</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Wander through narrow cobblestone streets, admire Gothic and Baroque 
                    buildings, and discover hidden courtyards and charming squares.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <Badge variant="secondary">Free Walking</Badge>
                    <Badge variant="secondary">Guided Tours</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6">What to See & Do</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Mint Tower</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Climb the symbol of Hall for panoramic views over the Inn Valley
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">St. Nicholas Parish Church</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Gothic church with impressive baroque interior decorations
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Upper Town Square</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Medieval market square surrounded by colorful historic buildings
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mb-16 bg-amber-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Visitor Tips</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Best Time to Visit</h3>
                <p className="text-sm text-gray-600">
                  Morning for quieter streets, Tuesday-Saturday for all museums open. 
                  December for magical Christmas markets.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Parking & Access</h3>
                <p className="text-sm text-gray-600">
                  Park at Unterer Stadtplatz or use Park & Ride. 
                  Old town is pedestrian-only but easily walkable.
                </p>
              </div>
            </div>
          </section>

          <div className="bg-primary/5 rounded-lg p-8 mt-12">
            <h2 className="text-2xl font-bold mb-4 text-center">Explore the Hall-Wattens Region</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Hall in Tirol Location</h3>
                <div className="rounded-lg overflow-hidden shadow-md">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10841.234567!2d11.5083!3d47.2833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479d6b5f7a8c8e7f%3A0x1234567890abcdef!2sHall%20in%20Tirol%2C%20Austria!5e0!3m2!1sen!2sat!4v1234567890"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Hall in Tirol Map"
                  />
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Hall in Tirol, the region's historic center, features one of Austria's best-preserved medieval old towns 
                  and serves as the cultural hub of the Hall-Wattens region.
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
                      <Badge variant="outline">5 km</Badge>
                    </div>
                  </Link>
                  
                  <Link href="/local-guide/wattens" className="block hover:bg-white/50 p-3 rounded-lg transition-colors">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium text-primary">Wattens</p>
                        <p className="text-sm text-gray-600">Swarovski Crystal Worlds</p>
                      </div>
                      <Badge variant="outline">6 km</Badge>
                    </div>
                  </Link>
                  
                  <Link href="/local-guide/volders" className="block hover:bg-white/50 p-3 rounded-lg transition-colors">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium text-primary">Volders</p>
                        <p className="text-sm text-gray-600">Historic churches & Lake Volders</p>
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
                  
                  <Link href="/local-guide/fritzens" className="block hover:bg-white/50 p-3 rounded-lg transition-colors">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium text-primary">Fritzens</p>
                        <p className="text-sm text-gray-600">Panoramic views & hiking trails</p>
                      </div>
                      <Badge variant="outline">9 km</Badge>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-6">
              <Link 
                href="/#booking" 
                className="inline-flex items-center bg-amber-600 text-white px-8 py-3 rounded-lg hover:bg-amber-700 transition"
              >
                Book Your Stay Near Hall in Tirol
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}