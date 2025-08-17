export default function SimpleFooter() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Appartement Oachkatzl</h3>
            <p className="text-blue-100">
              Ihr gemütliches Zuhause in Grossvolderberg mit Bergblick und moderner Ausstattung.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-blue-100">
              <li><a href="#beschreibung" className="hover:text-white">Beschreibung</a></li>
              <li><a href="#ausstattung" className="hover:text-white">Ausstattung</a></li>
              <li><a href="#galerie" className="hover:text-white">Galerie</a></li>
              <li><a href="#bewertungen" className="hover:text-white">Bewertungen</a></li>
              <li><a href="#buchung" className="hover:text-white">Buchen</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Kontakt</h4>
            <div className="text-blue-100 space-y-2">
              <p>📍 Grubertalstraße 16, Grossvolderberg</p>
              <p>📞 +43 XXX XXX XXX</p>
              <p>✉️ info@oachkatzl-apartment.com</p>
              <div className="mt-4">
                <div className="bg-secondary text-background px-2 py-1 rounded inline-block font-bold text-sm">
                  9,7 ★ Hervorragend
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-blue-800 text-center text-blue-100">
          <p>&copy; 2024 Appartement "Oachkatzl". Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  )
}