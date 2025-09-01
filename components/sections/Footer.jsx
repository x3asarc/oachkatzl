import Link from 'next/link'
import { MapPin, Phone, Mail, ChevronRight, Mountain, Users, Calendar, Shield } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Oachkatzl Apartments
            </h3>
            <p className="text-sm mb-4">
              Your perfect alpine retreat in Volders, Tirol. Experience authentic Austrian hospitality 
              with modern comfort and stunning mountain views.
            </p>
            <div className="flex items-center space-x-2 mb-2">
              <Badge className="bg-green-600 text-white">
                9.7/10 Rating
              </Badge>
              <Badge variant="outline" className="text-gray-300 border-gray-600">
                35+ Reviews
              </Badge>
            </div>
          </div>

          {/* Local Guide Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4 flex items-center">
              <Mountain className="w-5 h-5 mr-2" />
              Explore the Region
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/local-guide" className="text-sm hover:text-white transition-colors flex items-center">
                  <ChevronRight className="w-4 h-4 mr-1" />
                  Local Guide Hub
                </Link>
              </li>
              <li>
                <Link href="/local-guide/volders" className="text-sm hover:text-white transition-colors flex items-center">
                  <ChevronRight className="w-4 h-4 mr-1" />
                  Volders Village
                </Link>
              </li>
              <li>
                <Link href="/local-guide/attractions/swarovski-kristallwelten" className="text-sm hover:text-white transition-colors flex items-center">
                  <ChevronRight className="w-4 h-4 mr-1" />
                  Swarovski Crystal Worlds
                </Link>
              </li>
              <li>
                <Link href="/local-guide/hall-in-tirol" className="text-sm hover:text-white transition-colors flex items-center">
                  <ChevronRight className="w-4 h-4 mr-1" />
                  Hall in Tirol Old Town
                </Link>
              </li>
              <li>
                <Link href="/local-guide/activities/hiking-trails" className="text-sm hover:text-white transition-colors flex items-center">
                  <ChevronRight className="w-4 h-4 mr-1" />
                  Alpine Hiking Trails
                </Link>
              </li>
              <li>
                <Link href="/local-guide/wattens" className="text-sm hover:text-white transition-colors flex items-center">
                  <ChevronRight className="w-4 h-4 mr-1" />
                  Wattens Crystal Capital
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4 flex items-center">
              <Users className="w-5 h-5 mr-2" />
              Guest Information
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#amenities" className="text-sm hover:text-white transition-colors flex items-center">
                  <ChevronRight className="w-4 h-4 mr-1" />
                  Amenities & Features
                </Link>
              </li>
              <li>
                <Link href="/#availability" className="text-sm hover:text-white transition-colors flex items-center">
                  <ChevronRight className="w-4 h-4 mr-1" />
                  Check Availability
                </Link>
              </li>
              <li>
                <Link href="/#gallery" className="text-sm hover:text-white transition-colors flex items-center">
                  <ChevronRight className="w-4 h-4 mr-1" />
                  Photo Gallery
                </Link>
              </li>
              <li>
                <Link href="/#testimonials" className="text-sm hover:text-white transition-colors flex items-center">
                  <ChevronRight className="w-4 h-4 mr-1" />
                  Guest Reviews
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="text-sm hover:text-white transition-colors flex items-center">
                  <ChevronRight className="w-4 h-4 mr-1" />
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Booking */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4 flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              Book Your Stay
            </h3>
            <div className="space-y-3 mb-6">
              <p className="text-sm flex items-start">
                <MapPin className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                Grubertalstraße 16<br />
                6111 Grossvolderberg<br />
                Tirol, Austria
              </p>
              <a href="tel:+43123456789" className="text-sm hover:text-white transition-colors flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                +43 123 456 789
              </a>
              <a href="mailto:info@oachkatzl.com" className="text-sm hover:text-white transition-colors flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                info@oachkatzl.com
              </a>
            </div>
            <Link
              href="/#booking"
              className="inline-flex items-center bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors text-sm"
            >
              Book Now
              <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>

        {/* Hall-Wattens Card Info */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="bg-gray-800 rounded-lg p-6">
            <h4 className="text-white font-semibold mb-3 flex items-center">
              <Badge className="bg-yellow-500 text-gray-900 mr-2">Guest Benefit</Badge>
              Hall-Wattens Guest Card
            </h4>
            <p className="text-sm text-gray-400 mb-3">
              As our guest, you receive the Hall-Wattens Card providing:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm">
              <li className="flex items-center">
                <ChevronRight className="w-4 h-4 mr-1 text-green-500" />
                Free public transport in the region
              </li>
              <li className="flex items-center">
                <ChevronRight className="w-4 h-4 mr-1 text-green-500" />
                Discounts at attractions
              </li>
              <li className="flex items-center">
                <ChevronRight className="w-4 h-4 mr-1 text-green-500" />
                Free guided hikes in summer
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-950 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
            <div className="mb-2 md:mb-0">
              © 2025 Oachkatzl Vacation Rentals. All rights reserved.
            </div>
            <div className="flex items-center space-x-4">
              <span className="flex items-center">
                <Shield className="w-3 h-3 mr-1" />
                SSL Secured
              </span>
              <span>GDPR Compliant</span>
              <span>PayPal & SEPA</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer