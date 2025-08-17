export default function SimpleHero() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-text sm:text-6xl">
            Appartement <span className="text-primary">"Oachkatzl"</span>
          </h1>
          <p className="text-lg text-accent font-medium mt-2">Apartment in Grossvolderberg</p>
          
          {/* Review Score */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              <div className="bg-forest-deep text-cream px-2 py-1 rounded font-bold text-sm">9,7</div>
              <span className="text-forest-deep font-semibold">Hervorragend</span>
              <span className="text-text-light">• 32 Bewertungen</span>
            </div>
          </div>
          
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
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
            <a href="#galerie" className="text-primary font-semibold hover:text-accent transition-colors">
              Galerie ansehen →
            </a>
          </div>
          
          {/* Location info */}
          <div className="mt-8 text-sm text-gray-600">
            <p>📍 Grubertalstraße 16, Grossvolderberg</p>
            <p>🏔️ 2.950 ft vom Zentrum von Grossvolderberg</p>
          </div>
        </div>
      </div>
    </div>
  )
}