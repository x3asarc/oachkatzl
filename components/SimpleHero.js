export default function SimpleHero() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Appartement <span className="text-blue-600">"Oachkatzl"</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Experience luxury living in our beautiful apartment in Austria. Modern amenities, stunning views, and the perfect location for your next getaway.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#booking"
              className="rounded-md bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-500"
            >
              Book Now
            </a>
            <a href="#gallery" className="text-gray-900 font-semibold">
              View Gallery →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}