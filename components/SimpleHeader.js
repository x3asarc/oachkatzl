export default function SimpleHeader() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">Appartement Oachkatzl</div>
          <div className="hidden md:flex space-x-8">
            <a href="#beschreibung" className="text-text hover:text-accent">Beschreibung</a>
            <a href="#ausstattung" className="text-text hover:text-accent">Ausstattung</a>
            <a href="#galerie" className="text-text hover:text-accent">Galerie</a>
            <a href="#bewertungen" className="text-text hover:text-accent">Bewertungen</a>
            <a href="#buchung" className="text-text hover:text-accent">Buchen</a>
          </div>
        </div>
      </nav>
    </header>
  )
}