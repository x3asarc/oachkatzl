import { CheckIcon } from '@heroicons/react/24/outline'

export default function PropertyDetails() {
  const features = [
    'Fully furnished apartment',
    'Modern kitchen with appliances',
    'Spacious living area',
    'Comfortable bedrooms',
    'Private bathroom',
    'Balcony with mountain views',
    'High-speed WiFi',
    'Parking available',
    'Pet-friendly',
    'Non-smoking',
  ]

  return (
    <div id="about" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            About Our Apartment
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Welcome to Appartement "Oachkatzl" - your perfect home away from home in the heart of Austria. 
            Our luxury apartment combines modern comfort with traditional Austrian charm.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col">
              <dt className="text-lg font-semibold leading-7 text-gray-900">
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                  <span className="text-white text-lg font-bold">1</span>
                </div>
                Location & Accessibility
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  Perfectly situated in a prime location with easy access to local attractions, 
                  restaurants, and transportation. Enjoy the convenience of being close to everything 
                  while maintaining privacy and tranquility.
                </p>
              </dd>
            </div>
            
            <div className="flex flex-col">
              <dt className="text-lg font-semibold leading-7 text-gray-900">
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                  <span className="text-white text-lg font-bold">2</span>
                </div>
                Comfort & Style
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  Thoughtfully designed interiors with premium materials and furnishings. 
                  Every detail has been carefully considered to ensure your comfort and satisfaction 
                  during your stay.
                </p>
              </dd>
            </div>
            
            <div className="flex flex-col">
              <dt className="text-lg font-semibold leading-7 text-gray-900">
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                  <span className="text-white text-lg font-bold">3</span>
                </div>
                Quality Service
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  Dedicated to providing exceptional service and ensuring your stay exceeds expectations. 
                  We're here to make your experience memorable and hassle-free.
                </p>
              </dd>
            </div>
          </dl>
        </div>

        {/* Features List */}
        <div className="mx-auto mt-16 max-w-2xl lg:mx-0 lg:max-w-none">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900 mb-8">
            What's Included
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-x-3">
                <CheckIcon className="h-5 w-5 text-green-500" />
                <span className="text-sm text-gray-600">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
