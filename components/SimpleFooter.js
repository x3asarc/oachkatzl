export default function SimpleFooter() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Oachkatzl</h3>
            <p className="text-gray-300">
              Experience luxury living in our beautiful apartment in Austria.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#amenities" className="hover:text-white">Amenities</a></li>
              <li><a href="#gallery" className="hover:text-white">Gallery</a></li>
              <li><a href="#booking" className="hover:text-white">Book Now</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="text-gray-300 space-y-2">
              <p>📍 Austria</p>
              <p>📞 +43 XXX XXX XXX</p>
              <p>✉️ info@oachkatzl-apartment.com</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; 2024 Appartement "Oachkatzl". All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}