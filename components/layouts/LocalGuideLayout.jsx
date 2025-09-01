import Link from 'next/link'
import { ChevronRight, MapPin, Clock, Calendar, Users } from 'lucide-react'

const LocalGuideLayout = ({ children, breadcrumbs = [] }) => {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-gradient-to-r from-green-800 to-green-600 text-white">
        <div className="container mx-auto px-4 py-6">
          <nav className="flex items-center space-x-2 text-sm mb-4">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            {breadcrumbs.map((crumb, index) => (
              <div key={index} className="flex items-center">
                <ChevronRight className="w-4 h-4 mx-1" />
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:underline">
                    {crumb.label}
                  </Link>
                ) : (
                  <span>{crumb.label}</span>
                )}
              </div>
            ))}
          </nav>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
      
      <footer className="bg-gray-100 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/local-guide" className="hover:text-green-600">Local Guide Home</Link></li>
                <li><Link href="/local-guide/attractions" className="hover:text-green-600">Attractions</Link></li>
                <li><Link href="/local-guide/activities" className="hover:text-green-600">Activities</Link></li>
                <li><Link href="/local-guide/dining" className="hover:text-green-600">Dining</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Popular Villages</h3>
              <ul className="space-y-2">
                <li><Link href="/local-guide/volders" className="hover:text-green-600">Volders</Link></li>
                <li><Link href="/local-guide/wattens" className="hover:text-green-600">Wattens</Link></li>
                <li><Link href="/local-guide/hall-in-tirol" className="hover:text-green-600">Hall in Tirol</Link></li>
                <li><Link href="/local-guide/gnadenwald" className="hover:text-green-600">Gnadenwald</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Book Your Stay</h3>
              <p className="text-gray-600 mb-4">Ready to experience Tirol? Book your stay at Oachkatzl Apartments.</p>
              <Link href="/#booking" className="inline-block bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition">
                Check Availability
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LocalGuideLayout