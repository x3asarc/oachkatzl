import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { MapPin, Clock, Sparkles, Castle, Mountain, ChevronRight, Users, Star } from 'lucide-react'

const ExploreRegion = () => {
  const topAttractions = [
    {
      name: 'Swarovski Crystal Worlds',
      location: 'Wattens',
      distance: '5 km',
      duration: '2-4 hours',
      description: 'Magical crystal wonderland with art installations and gardens',
      icon: Sparkles,
      image: '/images/gallery/image3.webp',
      highlights: ['2M+ visitors/year', 'Family friendly'],
      href: '/local-guide/attractions/swarovski-kristallwelten'
    },
    {
      name: 'Hall in Tirol Old Town',
      location: 'Hall in Tirol',
      distance: '8 km',
      duration: 'Half day',
      description: 'Medieval town with largest preserved historic center in North Tirol',
      icon: Castle,
      image: '/images/gallery/image2.webp',
      highlights: ['Medieval architecture', 'Mint Museum'],
      href: '/local-guide/hall-in-tirol'
    },
    {
      name: 'Alpine Hiking Trails',
      location: 'Starting from Volders',
      distance: '0 km',
      duration: 'Various',
      description: 'Trails for all levels with spectacular mountain views',
      icon: Mountain,
      image: '/images/gallery/image5.webp',
      highlights: ['All difficulty levels', 'Guided tours available'],
      href: '/local-guide/activities/hiking-trails'
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge className="bg-green-100 text-green-800 mb-4">
            Explore the Region
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Discover What's Around You
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your perfect base for exploring the Hall-Wattens region. World-class attractions, 
            alpine adventures, and authentic Tyrolean culture—all within easy reach.
          </p>
        </div>

        {/* Attractions Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {topAttractions.map((attraction) => {
            const Icon = attraction.icon
            return (
              <Link key={attraction.name} href={attraction.href} className="group">
                <Card className="h-full hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden">
                  {/* Image Section */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={attraction.image}
                      alt={attraction.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-between text-white">
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm font-medium">{attraction.distance}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4" />
                          <span className="text-sm font-medium">{attraction.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl group-hover:text-green-600 transition-colors">
                          {attraction.name}
                        </CardTitle>
                        <CardDescription>{attraction.location}</CardDescription>
                      </div>
                      <Icon className="w-6 h-6 text-green-600" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      {attraction.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {attraction.highlights.map((highlight, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>

        {/* Hall-Wattens Card CTA */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 mb-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <Badge className="bg-yellow-500 text-gray-900">
                  Guest Benefit
                </Badge>
                <span className="text-sm text-gray-600">Exclusive for our guests</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">
                Free Hall-Wattens Guest Card Included
              </h3>
              <p className="text-gray-600">
                Enjoy free public transport throughout the region, discounts at major attractions, 
                and complimentary guided hikes during your stay.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/local-guide">
                <Button variant="outline" className="min-h-[44px]">
                  <MapPin className="w-4 h-4 mr-2" />
                  View Full Guide
                </Button>
              </Link>
              <Link href="/#booking">
                <Button className="bg-green-600 hover:bg-green-700 min-h-[44px]">
                  Book Your Stay
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-white rounded-lg border">
            <div className="text-2xl font-bold text-green-600">10+</div>
            <div className="text-sm text-gray-600">Villages to Explore</div>
          </div>
          <div className="text-center p-4 bg-white rounded-lg border">
            <div className="text-2xl font-bold text-green-600">50+</div>
            <div className="text-sm text-gray-600">Attractions Nearby</div>
          </div>
          <div className="text-center p-4 bg-white rounded-lg border">
            <div className="text-2xl font-bold text-green-600">4</div>
            <div className="text-sm text-gray-600">Difficulty Levels</div>
          </div>
          <div className="text-center p-4 bg-white rounded-lg border">
            <div className="text-2xl font-bold text-green-600">365</div>
            <div className="text-sm text-gray-600">Days of Activities</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExploreRegion