import { CalendarIcon, MapPinIcon, StarIcon } from '@heroicons/react/24/outline'

export default function Hero() {
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <div className="hidden sm:mt-32 sm:flex lg:mt-16">
              <div className="relative rounded-full py-1 px-3 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                <span className="font-semibold text-blue-600">New</span> Luxury apartment available for booking
              </div>
            </div>
            <h1 className="mt-24 text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl">
              Appartement{' '}
              <span className="text-blue-600">"Oachkatzl"</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Experience luxury living in our beautiful apartment in Austria. Modern amenities, stunning views, and the perfect location for your next getaway.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="#booking"
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Book Now
              </a>
              <a href="#gallery" className="text-sm font-semibold leading-6 text-gray-900">
                View Gallery <span aria-hidden="true">→</span>
              </a>
            </div>
            
            {/* Quick Info */}
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="flex items-center gap-x-3">
                <MapPinIcon className="h-5 w-5 text-blue-600" />
                <span className="text-sm text-gray-600">Austria</span>
              </div>
              <div className="flex items-center gap-x-3">
                <StarIcon className="h-5 w-5 text-yellow-400" />
                <span className="text-sm text-gray-600">4.8/5 Rating</span>
              </div>
              <div className="flex items-center gap-x-3">
                <CalendarIcon className="h-5 w-5 text-blue-600" />
                <span className="text-sm text-gray-600">Available Now</span>
              </div>
            </div>
          </div>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <img
            className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
            src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Luxury apartment interior"
          />
        </div>
      </div>
    </div>
  )
}
