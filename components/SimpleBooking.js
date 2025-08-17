export default function SimpleBooking() {
  return (
    <div id="buchung" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-text mb-4">Buchungsanfrage</h2>
          <p className="text-lg text-gray-600">Kontaktieren Sie uns für Ihre Buchung</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Buchungsformular */}
          <div className="bg-white p-8 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-text mb-6">Verfügbarkeit anfragen</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-text mb-2">Anreise</label>
                  <input type="date" className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text mb-2">Abreise</label>
                  <input type="date" className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-text mb-2">Anzahl Gäste</label>
                <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary">
                  <option>1 Gast</option>
                  <option>2 Gäste</option>
                  <option>3 Gäste</option>
                  <option>4 Gäste</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-text mb-2">Vollständiger Name</label>
                <input type="text" className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-text mb-2">E-Mail</label>
                <input type="email" className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-text mb-2">Nachricht (optional)</label>
                <textarea rows="3" className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary" placeholder="Besondere Wünsche oder Fragen..."></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full rounded-md bg-primary px-6 py-3 text-white font-semibold hover:bg-accent transition-colors"
              >
                Anfrage senden
              </button>
            </form>
          </div>

          {/* Informationen */}
          <div className="bg-white p-8 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-text mb-6">Hausregeln & Informationen</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-text mb-2">Check-in / Check-out</h4>
                <div className="text-gray-600 space-y-1">
                  <p>🕒 Check-in: 15:00 - 20:00</p>
                  <p>🕒 Check-out: 10:00 - 11:00</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-text mb-2">Wichtige Hinweise</h4>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Bitte informieren Sie die Unterkunft im Voraus über Ihre Ankunftszeit</li>
                  <li>• Keine Altersbeschränkung für den Check-in</li>
                  <li>• Rauchen ist nicht gestattet</li>
                  <li>• Partys/Veranstaltungen sind nicht erlaubt</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-text mb-2">Kontakt</h4>
                <div className="text-gray-600 space-y-1">
                  <p>📧 info@oachkatzl-apartment.com</p>
                  <p>📞 +43 XXX XXX XXX</p>
                  <p>📍 Grubertalstraße 16, Grossvolderberg</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}