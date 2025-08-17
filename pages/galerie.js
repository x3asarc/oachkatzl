import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

export default function Galerie() {
  const [selectedImage, setSelectedImage] = useState(null)

  // All apartment images organized by category
  const imageCategories = [
    {
      title: "Wohnbereich",
      images: [
        { url: '/images/gallery/wohnraum-ferienwohnung-oachkatzl-2.webp', caption: 'Gemütlicher Wohnbereich mit Sitzgelegenheit' },
        { url: '/images/gallery/appartement-ferienwohnung-oachkatzl-tirol-26.webp', caption: 'Wohnzimmer mit Fernseher' },
        { url: '/images/gallery/appartement-ferienwohnung-oachkatzl-tirol-36.webp', caption: 'Sitzecke im Wohnbereich' }
      ]
    },
    {
      title: "Küche", 
      images: [
        { url: '/images/gallery/kueche-in-der-ferienwohnung-oachkatzl-2.webp', caption: 'Voll ausgestattete Küche' },
        { url: '/images/gallery/kueche-42.webp', caption: 'Küchenzeile mit Geräten' },
        { url: '/images/gallery/kueche-43.webp', caption: 'Küche mit Essbereich' },
        { url: '/images/gallery/kueche-44.webp', caption: 'Moderne Küchenausstattung' },
        { url: '/images/gallery/kueche-45.webp', caption: 'Küche von anderer Perspektive' }
      ]
    },
    {
      title: "Schlafzimmer",
      images: [
        { url: '/images/gallery/schlafzimmer-eltern-9.webp', caption: 'Hauptschlafzimmer mit Doppelbett' },
        { url: '/images/gallery/schlafzimmer-eltern-8.webp', caption: 'Elternschlafzimmer' },
        { url: '/images/gallery/schlafzimmer-eltern-10.webp', caption: 'Schlafzimmer mit Bergblick' },
        { url: '/images/gallery/schlafzimmer-eltern-11.webp', caption: 'Gemütliches Doppelbett' },
        { url: '/images/gallery/schlafzimmer-kinder-4.webp', caption: 'Kinderschlafzimmer' },
        { url: '/images/gallery/schlafzimmer-kinder-5.webp', caption: 'Stockbett für Kinder' },
        { url: '/images/gallery/schlafzimmer-urlaub-in-der-ferienwohnung-oachkatzl-2.webp', caption: 'Schlafbereich' }
      ]
    },
    {
      title: "Badezimmer",
      images: [
        { url: '/images/gallery/badezimmer-in-der-ferienwohnung-oachkatzl-2.webp', caption: 'Modernes Badezimmer' },
        { url: '/images/gallery/badezimmer-in-der-ferienwohnung-oachkatzl-volders-2.webp', caption: 'Badezimmer mit Dusche' }
      ]
    },
    {
      title: "Außenbereich & Ausblick", 
      images: [
        { url: '/images/gallery/ausblick-von-der-ferienwohnung-oachkatzl-volders-2.webp', caption: 'Atemberaubender Bergblick' },
        { url: '/images/gallery/ausblick-5.webp', caption: 'Panoramablick auf die Berge' },
        { url: '/images/gallery/terrasse-16.webp', caption: 'Private Terrasse mit Möbeln' },
        { url: '/images/gallery/grillplatz-4.webp', caption: 'Grillplatz im Garten' },
        { url: '/images/gallery/grillplatz-5.webp', caption: 'Gemeinschaftlicher Grillbereich' },
        { url: '/images/gallery/anfahrt-mit-grillplatz-2.webp', caption: 'Gartenbereich mit Grillmöglichkeit' }
      ]
    },
    {
      title: "Weitere Bereiche",
      images: [
        { url: '/images/gallery/gang-4.webp', caption: 'Flur im Appartement' },
        { url: '/images/gallery/gang-5.webp', caption: 'Gang zum Schlafbereich' },
        { url: '/images/gallery/garderobe-4.webp', caption: 'Garderobe und Eingangsbereich' },
        { url: '/images/gallery/garderobe-5.webp', caption: 'Eingangsbereich' },
        { url: '/images/gallery/ferienwohnung-oachkatzl-tirol-volders-2.webp', caption: 'Übersicht der Ferienwohnung' }
      ]
    }
  ]

  const allImages = imageCategories.flatMap(category => category.images)

  return (
    <>
      <Head>
        <title>Galerie - Appartement 'Oachkatzl' in Grossvolderberg</title>
        <meta name="description" content="Entdecken Sie alle Bilder unseres gemütlichen Appartements in Grossvolderberg. Wohnbereich, Küche, Schlafzimmer, Badezimmer und atemberaubende Bergblicke." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-background-warm">
        {/* Header */}
        <header className="bg-primary text-white py-8">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold">Galerie</h1>
                <p className="text-cream mt-2">Appartement "Oachkatzl" - Alle Bilder</p>
              </div>
              <Link href="/" className="bg-secondary hover:bg-accent px-4 py-2 rounded text-white font-semibold transition-colors">
                ← Zurück zur Startseite
              </Link>
            </div>
          </div>
        </header>

        {/* Gallery Content */}
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-forest-deep mb-4">
              Entdecken Sie jede Ecke unseres Appartements
            </h2>
            <p className="text-text-light">
              {allImages.length} hochwertige Bilder zeigen Ihnen alle Bereiche der Ferienwohnung Oachkatzl
            </p>
          </div>

          {/* Image Categories */}
          {imageCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <h3 className="text-xl font-semibold text-forest-deep mb-6 border-b border-wood pb-2">
                {category.title} ({category.images.length} Bilder)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {category.images.map((image, index) => (
                  <div 
                    key={index} 
                    className="bg-background rounded-lg overflow-hidden shadow-lg border border-wood hover:shadow-xl transition-shadow cursor-pointer"
                    onClick={() => setSelectedImage(image)}
                  >
                    <img
                      src={image.url}
                      alt={image.caption}
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="p-4 bg-cream">
                      <p className="text-sm text-text-light">{image.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Call to Action */}
          <div className="text-center mt-16 bg-cream p-8 rounded-lg border border-wood">
            <h3 className="text-2xl font-bold text-forest-deep mb-4">
              Bereit für Ihren Aufenthalt?
            </h3>
            <p className="text-text-light mb-6">
              Buchen Sie jetzt Ihren unvergesslichen Urlaub im Appartement Oachkatzl
            </p>
            <Link href="/#buchung" className="bg-secondary hover:bg-primary px-6 py-3 rounded text-white font-semibold transition-colors shadow-lg">
              Jetzt buchen
            </Link>
          </div>
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4">
            <div className="relative max-w-6xl max-h-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 text-xl"
              >
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <img
                src={selectedImage.url}
                alt={selectedImage.caption}
                className="max-h-full max-w-full object-contain rounded-lg"
              />
              <div className="mt-4 text-center text-white bg-black bg-opacity-50 p-4 rounded">
                <p className="text-lg">{selectedImage.caption}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}