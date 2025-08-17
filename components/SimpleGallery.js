import Link from 'next/link'

export default function SimpleGallery() {
  const images = [
    {
      url: '/images/gallery/wohnraum-ferienwohnung-oachkatzl-2.webp',
      caption: "Gemütlicher Wohnbereich mit Sitzgelegenheit und Fernseher"
    },
    {
      url: '/images/gallery/kueche-in-der-ferienwohnung-oachkatzl-2.webp',
      caption: "Voll ausgestattete Küche für Selbstversorger"
    },
    {
      url: '/images/gallery/schlafzimmer-eltern-9.webp',
      caption: "Hauptschlafzimmer mit Doppelbett und Bergblick"
    },
    {
      url: '/images/gallery/schlafzimmer-kinder-5.webp',
      caption: "Kinderschlafzimmer mit Stockbett"
    },
    {
      url: '/images/gallery/badezimmer-in-der-ferienwohnung-oachkatzl-2.webp',
      caption: "Modernes Badezimmer mit Dusche"
    },
    {
      url: '/images/gallery/ausblick-von-der-ferienwohnung-oachkatzl-volders-2.webp',
      caption: "Atemberaubender Bergblick von der Terrasse"
    },
    {
      url: '/images/gallery/terrasse-16.webp',
      caption: "Private Terrasse mit Gartenmöbeln"
    },
    {
      url: '/images/gallery/grillplatz-5.webp',
      caption: "Gemeinschaftlicher Grillplatz im Garten"
    }
  ]

  return (
    <div id="galerie" className="bg-background-warm py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-forest-deep mb-4">Galerie</h2>
          <p className="text-lg text-gray-600 mb-6">Entdecken Sie unser gemütliches Appartement</p>
          <Link href="/galerie" className="inline-block bg-accent hover:bg-primary px-6 py-3 rounded-lg text-white font-semibold transition-colors shadow-lg">
            Alle Bilder ansehen →
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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