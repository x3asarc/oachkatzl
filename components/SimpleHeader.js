export default function SimpleHeader() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-blue-600">Oachkatzl</div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-900 hover:text-blue-600">About</a>
            <a href="#amenities" className="text-gray-900 hover:text-blue-600">Amenities</a>
            <a href="#gallery" className="text-gray-900 hover:text-blue-600">Gallery</a>
            <a href="#booking" className="text-gray-900 hover:text-blue-600">Book Now</a>
          </div>
        </div>
      </nav>
    </header>
  )
}