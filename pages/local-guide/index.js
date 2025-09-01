import MetaTags from '@/components/seo/MetaTags'
import Breadcrumbs from '@/components/navigation/Breadcrumbs'
import Link from 'next/link'
import { MapPin, Mountain, Castle, Users, Calendar, Car, ChevronRight } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const villageData = [
  {
    name: 'Volders',
    slug: 'volders',
    distance: 'Your Location',
    character: 'Historic riverside village',
    highlights: ['Karlskirche', 'Friedberg Castle', 'Lake Volders'],
    image: '/images/gallery/image5.webp'
  },
  {
    name: 'Wattens',
    slug: 'wattens',
    distance: '5 km',
    character: 'Crystal Capital',
    highlights: ['Swarovski Crystal Worlds', 'Typewriter Museum'],
    image: '/images/gallery/image3.webp'
  },
  {
    name: 'Hall in Tirol',
    slug: 'hall-in-tirol',
    distance: '8 km',
    character: 'Medieval Old Town',
    highlights: ['Historic Center', 'Mint Museum', 'Medieval Architecture'],
    image: '/images/gallery/image2.webp'
  },
  {
    name: 'Gnadenwald',
    slug: 'gnadenwald',
    distance: '5 km',
    character: 'Alpine Plateau',
    highlights: ["St. Martin's Abbey", 'Panoramic Views', 'Hiking Trails'],
    image: '/images/gallery/image8.webp'
  },
  {
    name: 'Baumkirchen',
    slug: 'baumkirchen',
    distance: '3 km',
    character: 'Orchard Village',
    highlights: ['Traditional Farms', 'Fruit Gardens', 'Local Markets'],
    image: '/images/gallery/image7.webp'
  },
  {
    name: 'Fritzens',
    slug: 'fritzens',
    distance: '7 km',
    character: 'Pottery Village',
    highlights: ['Ceramic Workshops', 'Archaeological Sites'],
    image: '/images/gallery/image6.webp'
  }
]

const seasonalActivities = {
  spring: ['Hiking', 'Wildflower Tours', 'Easter Markets', 'Mountain Biking'],
  summer: ['Swimming', 'Alpine Festivals', 'Cable Car Rides', 'Open-Air Theatre'],
  autumn: ['Harvest Festivals', 'Mushroom Picking', 'Wine Tasting', 'Fall Foliage Tours'],
  winter: ['Skiing', 'Tobogganing', 'Christmas Markets', 'Winter Hiking']
}

export default function LocalGuideHub() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TravelGuide",
    "name": "Hall-Wattens Region Local Guide",
    "description": "Complete travel guide for the Hall-Wattens region in Tirol, Austria",
    "url": "https://oachkatzl.com/local-guide",
    "author": {
      "@type": "Organization",
      "name": "Oachkatzl Vacation Rentals"
    },
    "about": {
      "@type": "Place",
      "name": "Hall-Wattens Region",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "Tirol",
        "addressCountry": "AT"
      }
    }
  }

  return (
    <>
      <MetaTags
        title="Hall-Wattens Local Guide | Activities & Attractions Tirol"
        description="Discover the Hall-Wattens region: Swarovski Crystal Worlds, medieval towns, alpine villages, hiking trails. Your complete Tirol travel guide."
        url="/local-guide"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gray-50">
        <div className="bg-gradient-to-b from-green-800 to-green-600 text-white">
          <div className="container mx-auto px-4 py-6">
            <Breadcrumbs 
              items={[
                { label: 'Local Guide', href: null }
              ]} 
            />
          </div>
          
          <div className="container mx-auto px-4 pb-16 pt-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Explore the Hall-Wattens Region
            </h1>
            <p className="text-xl text-green-100 max-w-3xl">
              Your gateway to authentic Tirol experiences. From crystal worlds to medieval towns, 
              discover the treasures surrounding your vacation rental in Volders.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="border-green-200">
              <CardHeader>
                <Castle className="w-8 h-8 text-green-600 mb-2" />
                <CardTitle>10+ Historic Sites</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Explore castles, churches, and archaeological sites dating back centuries
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-200">
              <CardHeader>
                <Mountain className="w-8 h-8 text-green-600 mb-2" />
                <CardTitle>Year-Round Activities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  From skiing and tobogganing to hiking and mountain biking adventures
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-200">
              <CardHeader>
                <Car className="w-8 h-8 text-green-600 mb-2" />
                <CardTitle>Hall-Wattens Card</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Free public transport throughout the region with your guest card
                </p>
              </CardContent>
            </Card>
          </div>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Explore Our Villages</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {villageData.map((village) => (
                <Link 
                  key={village.slug} 
                  href={`/local-guide/${village.slug}`}
                  className="group"
                >
                  <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                    <div className="aspect-video relative overflow-hidden">
                      <img 
                        src={village.image} 
                        alt={village.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {village.distance !== 'Your Location' && (
                        <Badge className="absolute top-4 right-4 bg-white/90 text-gray-800">
                          <MapPin className="w-3 h-3 mr-1" />
                          {village.distance}
                        </Badge>
                      )}
                    </div>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        {village.name}
                        <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-green-600 transition-colors" />
                      </CardTitle>
                      <CardDescription>{village.character}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {village.highlights.map((highlight, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Top Attractions</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/local-guide/attractions/swarovski-kristallwelten">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <CardTitle>Swarovski Crystal Worlds</CardTitle>
                    <CardDescription>Wattens • 5 km from Volders</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      One of Austria's most visited attractions with stunning crystal installations, 
                      art exhibits, and beautiful gardens.
                    </p>
                    <div className="flex gap-2">
                      <Badge>2-4 hours</Badge>
                      <Badge>Family Friendly</Badge>
                      <Badge>Year-round</Badge>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/local-guide/attractions/hall-in-tirol-old-town">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <CardTitle>Hall in Tirol Old Town</CardTitle>
                    <CardDescription>Hall in Tirol • 8 km from Volders</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Largest preserved medieval old town in North Tirol with narrow cobblestone streets 
                      and historic architecture.
                    </p>
                    <div className="flex gap-2">
                      <Badge>Half day</Badge>
                      <Badge>Walking Tour</Badge>
                      <Badge>Historic</Badge>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/local-guide/attractions/karlskirche-volders">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <CardTitle>Karlskirche Volders</CardTitle>
                    <CardDescription>Volders • In your village</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Baroque masterpiece with stunning frescoes and a viewing platform offering 
                      panoramic valley views.
                    </p>
                    <div className="flex gap-2">
                      <Badge>1 hour</Badge>
                      <Badge>Photography</Badge>
                      <Badge>Wheelchair Access</Badge>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/local-guide/activities/hiking-trails">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <CardTitle>Alpine Hiking Trails</CardTitle>
                    <CardDescription>Starting from Volders</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Discover trails for all levels, from gentle valley walks to challenging 
                      mountain routes with spectacular views.
                    </p>
                    <div className="flex gap-2">
                      <Badge>Various durations</Badge>
                      <Badge>All levels</Badge>
                      <Badge>Spring-Autumn</Badge>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Seasonal Activities</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.entries(seasonalActivities).map(([season, activities]) => (
                <Card key={season} className="border-green-200">
                  <CardHeader>
                    <Calendar className="w-6 h-6 text-green-600 mb-2" />
                    <CardTitle className="capitalize">{season}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {activities.map((activity, idx) => (
                        <li key={idx} className="flex items-start">
                          <ChevronRight className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="bg-green-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Getting Around the Region</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">Hall-Wattens Guest Card</h3>
                <p className="text-gray-600 mb-4">
                  As our guest, you receive the Hall-Wattens Card providing free public transport 
                  throughout the region. Use it for buses connecting all villages and attractions.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Transportation Options</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Regional buses (free with guest card)</li>
                  <li>• 15 minutes to Innsbruck by car</li>
                  <li>• E-bike rentals available locally</li>
                  <li>• Walking and cycling paths connect villages</li>
                </ul>
              </div>
            </div>
          </section>

          <div className="mt-12 text-center">
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
    </>
  )
}