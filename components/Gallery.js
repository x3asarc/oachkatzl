import { useState } from 'react'

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  const images = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      alt: 'Living room with modern furniture',
      category: 'Living Area'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      alt: 'Modern kitchen with stainless steel appliances',
      category: 'Kitchen'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1560448075-bb485b067938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      alt: 'Comfortable bedroom with queen bed',
      category: 'Bedroom'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1556909114-8c6f0c0c0c0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      alt: 'Spacious bathroom with modern fixtures',
      category: 'Bathroom'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1560448204-8c6f0c0c0c0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      alt: 'Balcony with mountain views',
      category: 'Balcony'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1556909114-8c6f0c0c0c0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      alt: 'Dining area with elegant table',
      category: 'Dining'
    }
  ]

  return (
    <div id="gallery" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Gallery</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Take a virtual tour of our apartment
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Explore every corner of our beautifully designed apartment through our photo gallery. 
            See the quality and attention to detail that makes your stay special.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {images.map((image) => (
              <div key={image.id} className="group relative">
                <div className="aspect-h-3 aspect-w-4 overflow-hidden rounded-lg bg-gray-100">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75 cursor-pointer transition-opacity duration-300"
                    onClick={() => setSelectedImage(image)}
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-sm font-medium text-gray-900">{image.category}</h3>
                  <p className="text-sm text-gray-500">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mx-auto mt-16 max-w-2xl text-center">
          <p className="text-lg text-gray-600 mb-6">
            Ready to experience the comfort and luxury of our apartment?
          </p>
          <a
            href="#booking"
            className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Book Your Stay Now
          </a>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-h-full max-w-full object-contain"
            />
            <div className="mt-4 text-center text-white">
              <h3 className="text-lg font-semibold">{selectedImage.category}</h3>
              <p className="text-sm">{selectedImage.alt}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
