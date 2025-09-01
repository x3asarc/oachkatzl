import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Progress } from '@/components/ui/progress'
import { Star, Quote } from 'lucide-react'

const TestimonialsSection = ({ propertyData }) => {
  const testimonials = [
    {
      text: "Die Aussicht, die Lage in der Natur, die Einrichtung und die Liebe im Detail",
      author: "Maria K.",
      location: "München, Deutschland",
      rating: 10,
      date: "November 2023",
      category: "Lage & Ausstattung"
    },
    {
      text: "Schön eingerichtet, war alles da, was man braucht, schöne Lage mit schönem Blick",
      author: "Thomas S.",
      location: "Wien, Österreich", 
      rating: 9.5,
      date: "Oktober 2023",
      category: "Ausstattung"
    },
    {
      text: "Eine sehr schöne Wohnung, gemütlich eingerichtet und mit allem ausgestattet",
      author: "Familie B.",
      location: "Zürich, Schweiz",
      rating: 9.8,
      date: "September 2023",
      category: "Comfort"
    },
    {
      text: "Top Lage für Bergurlaub, umfangreiche saubere und hochwertige Ausstattung",
      author: "Andrea L.",
      location: "Berlin, Deutschland",
      rating: 9.7,
      date: "August 2023",
      category: "Lage & Sauberkeit"
    },
    {
      text: "Wunderschöne Unterkunft, rustikal aber auch modern, beste Lage mit wunderbarem Ausblick",
      author: "Peter M.",
      location: "Hamburg, Deutschland",
      rating: 10,
      date: "Juli 2023",
      category: "Design & Lage"
    }
  ]

  const ratingCategories = [
    { name: 'Personal', rating: propertyData.ratings.detailed_ratings.staff, description: 'Freundlichkeit & Hilfsbereitschaft' },
    { name: 'Ausstattung', rating: propertyData.ratings.detailed_ratings.facilities, description: 'Vollständigkeit & Qualität' },
    { name: 'Sauberkeit', rating: propertyData.ratings.detailed_ratings.cleanliness, description: 'Hygiene & Gepflegtheit' },
    { name: 'Komfort', rating: propertyData.ratings.detailed_ratings.comfort, description: 'Betten, Ruhe & Entspannung' },
    { name: 'Preis-Leistung', rating: propertyData.ratings.detailed_ratings.value_for_money, description: 'Faire Preisgestaltung' },
    { name: 'Lage', rating: propertyData.ratings.detailed_ratings.location, description: 'Erreichbarkeit & Umgebung' },
    { name: 'WLAN', rating: propertyData.ratings.detailed_ratings.wifi, description: 'Internetverbindung' }
  ]

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').slice(0, 2)
  }

  const getProgressColor = (rating) => {
    if (rating >= 9.5) return 'bg-green-500'
    if (rating >= 9.0) return 'bg-blue-500'
    if (rating >= 8.0) return 'bg-yellow-500'
    return 'bg-gray-500'
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 text-yellow-500 fill-yellow-500" />
              ))}
            </div>
            <Badge className="bg-green-600 text-white text-lg px-4 py-2">
              {propertyData.ratings.overall_rating}/10
            </Badge>
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Das sagen unsere Gäste
          </h2>
          
          <p className="text-xl text-gray-600 mb-6">
            <span className="font-semibold text-green-600">{propertyData.ratings.rating_category}</span> 
            {' '}• {propertyData.ratings.total_reviews} authentische Bewertungen
          </p>
          
          <div className="flex items-center justify-center gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">{propertyData.ratings.overall_rating}</div>
              <div className="text-sm text-gray-600">Gesamtbewertung</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">98%</div>
              <div className="text-sm text-gray-600">Weiterempfehlung</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">{propertyData.ratings.total_reviews}</div>
              <div className="text-sm text-gray-600">Bewertungen</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Testimonials Column */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-2xl font-bold mb-6">Gästestimmen</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Quote className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                      <div className="flex-1">
                        <p className="text-gray-700 italic mb-4 leading-relaxed">
                          "{testimonial.text}"
                        </p>
                        
                        <div className="flex items-center gap-3 mb-3">
                          <Avatar className="w-10 h-10">
                            <AvatarFallback className="bg-blue-100 text-blue-600 font-semibold">
                              {getInitials(testimonial.author)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold text-gray-900">{testimonial.author}</p>
                            <p className="text-sm text-gray-600">{testimonial.location}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                            <span className="font-semibold">{testimonial.rating}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="text-xs">{testimonial.category}</Badge>
                            <span className="text-gray-500">{testimonial.date}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Ratings Breakdown */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Bewertungsdetails</h3>
            
            <Card>
              <CardContent className="p-6 space-y-6">
                {ratingCategories.map((category, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-900">{category.name}</p>
                        <p className="text-xs text-gray-600">{category.description}</p>
                      </div>
                      <div className="text-right">
                        <span className="font-bold text-lg">{category.rating}</span>
                        <span className="text-gray-600">/10</span>
                      </div>
                    </div>
                    <div className="relative">
                      <Progress value={category.rating * 10} className="h-2" />
                      <div 
                        className={`absolute top-0 left-0 h-2 rounded-full transition-all ${getProgressColor(category.rating)}`}
                        style={{ width: `${category.rating * 10}%` }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Trust Indicators */}
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-6 space-y-4">
                <h4 className="font-bold text-lg mb-4">Vertrauen & Sicherheit</h4>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-sm">Verifizierte Bewertungen</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-sm">Booking.com Partner seit 2021</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-sm">Sofortige Buchungsbestätigung</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-sm">Kostenlose Stornierung</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
            <div className="text-sm text-gray-600">Sauberkeitsbewertung über 9.5</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
            <div className="text-sm text-gray-600">Gäste bewerten Lage als "exzellent"</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600 mb-2">98%</div>
            <div className="text-sm text-gray-600">Würden wiederkommen</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-600 mb-2">10/10</div>
            <div className="text-sm text-gray-600">WLAN-Geschwindigkeit</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection