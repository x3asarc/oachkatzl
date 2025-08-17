export default function SimpleHero() {
  return (
    <div className="relative bg-white">
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="/images/gallery/ausblick-von-der-ferienwohnung-oachkatzl-volders-2.webp"
          alt="Atemberaubender Bergblick von der Ferienwohnung Oachkatzl"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      {/* Hero Content */}
      <div className="relative mx-auto max-w-7xl px-6 py-32 lg:py-40">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Appartement <span className="text-secondary">"Oachkatzl"</span>
          </h1>
          <p className="text-lg text-cream font-medium mt-2">Apartment in Grossvolderberg</p>
          
          {/* Review Score */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <div className="flex items-center gap-2 bg-white bg-opacity-90 px-4 py-2 rounded-lg">
              <div className="bg-forest-deep text-cream px-2 py-1 rounded font-bold text-sm">9,7</div>
              <span className="text-forest-deep font-semibold">Hervorragend</span>
              <span className="text-text-light">• 32 Bewertungen</span>
            </div>
          </div>
          
          <p className="mt-6 text-lg leading-8 text-white max-w-3xl mx-auto bg-black bg-opacity-50 px-6 py-4 rounded-lg">
            Das Appartement 'Oachkatzl' bietet eine gemütliche Unterkunft mit Bergblick, Garten und Terrasse. 
            Die Wohnung ist modern und hochwertig ausgestattet und ideal für einen ruhigen Urlaub in der Natur.
          </p>
          
          <div className="mt-8 flex items-center justify-center gap-x-6">
            <a
              href="#buchung"
              className="rounded-md bg-secondary px-6 py-3 text-white font-semibold hover:bg-primary transition-colors shadow-lg"
            >
              Jetzt buchen
            </a>
            <a href="#galerie" className="text-white font-semibold hover:text-cream transition-colors">
              Galerie ansehen →
            </a>
          </div>
          
          {/* Location info */}
          <div className="mt-8 text-sm text-cream bg-black bg-opacity-50 px-4 py-3 rounded-lg inline-block">
            <p>📍 Grubertalstraße 16, Grossvolderberg</p>
            <p>🏔️ 2.950 ft vom Zentrum von Grossvolderberg</p>
          </div>
        </div>
      </div>
    </div>
  )
}