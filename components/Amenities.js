import { 
  WifiIcon, 
  TvIcon, 
  HomeIcon, 
  CarIcon, 
  HeartIcon,
  SunIcon,
  ShieldCheckIcon,
  MapIcon
} from '@heroicons/react/24/outline'

export default function Amenities() {
  const amenities = [
    {
      name: 'High-Speed WiFi',
      description: 'Fast and reliable internet connection',
      icon: WifiIcon,
    },
    {
      name: 'Smart TV',
      description: 'Stream your favorite shows and movies',
      icon: TvIcon,
    },
    {
      name: 'Fully Equipped Kitchen',
      description: 'Everything you need to cook delicious meals',
      icon: HomeIcon,
    },
    {
      name: 'Free Parking',
      description: 'Secure parking space included',
      icon: CarIcon,
    },
    {
      name: 'Pet Friendly',
      description: 'Your furry friends are welcome',
      icon: HeartIcon,
    },
    {
      name: 'Balcony',
      description: 'Enjoy stunning mountain views',
      icon: SunIcon,
    },
    {
      name: 'Security System',
      description: '24/7 security for your peace of mind',
      icon: ShieldCheckIcon,
    },
    {
      name: 'Central Location',
      description: 'Easy access to all attractions',
      icon: MapIcon,
    },
  ]

  return (
    <div id="amenities" className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Amenities</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need for a perfect stay
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our apartment is equipped with modern amenities to ensure your comfort and convenience. 
            From high-speed internet to a fully equipped kitchen, we've thought of everything.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {amenities.map((amenity) => (
              <div key={amenity.name} className="flex flex-col">
                <dt className="text-lg font-semibold leading-7 text-gray-900">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                    <amenity.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {amenity.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{amenity.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Additional Services */}
        <div className="mx-auto mt-16 max-w-2xl lg:mx-0 lg:max-w-none">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900 mb-8">
            Additional Services Available
          </h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">Airport Transfer</h4>
              <p className="text-sm text-gray-600">Convenient pickup and drop-off service</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">Cleaning Service</h4>
              <p className="text-sm text-gray-600">Daily or weekly cleaning available</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">Concierge</h4>
              <p className="text-sm text-gray-600">24/7 assistance for any requests</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
