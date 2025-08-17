export default function SimpleGallery() {
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800',
      caption: "Gemütlicher Wohnbereich mit Kamin."
    },
    {
      url: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800',
      caption: "Voll ausgestattete Küche für Selbstversorger."
    },
    {
      url: 'https://images.unsplash.com/photo-1560448075-bb485b067938?w=800',
      caption: "Schlafzimmer mit atemberaubender Aussicht."
    },
    {
      url: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800',
      caption: "Modernes Bad mit bodengleicher Dusche."
    },
    {
      url: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800',
      caption: "Privater Balkon mit Panoramablick."
    }
  ]

  return (
    <div id="galerie" className="bg-background-warm py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-forest-deep mb-4">Galerie</h2>
          <p className="text-lg text-gray-600">Entdecken Sie unser gemütliches Appartement</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={index} className="bg-background rounded-lg overflow-hidden shadow-lg border border-wood hover:shadow-xl transition-shadow">
              <img
                src={image.url}
                alt={image.caption}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-cream">
                <p className="text-sm text-text-light">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}