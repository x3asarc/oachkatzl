export default function SimpleGallery() {
  const images = [
    'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500',
    'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500',
    'https://images.unsplash.com/photo-1560448075-bb485b067938?w=500',
    'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500',
    'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=500',
    'https://images.unsplash.com/photo-1566195992011-5f6b21e539aa?w=500'
  ]

  return (
    <div id="gallery" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Gallery</h2>
          <p className="text-lg text-gray-600 mb-16">Take a virtual tour of our apartment</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div key={index} className="aspect-w-4 aspect-h-3">
              <img
                src={src}
                alt={`Apartment view ${index + 1}`}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}