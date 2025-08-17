export default function Beschreibung() {
  const keyFeatures = [
    "Wohnung ist allergikerfreundlich und rauchfrei.",
    "Terrasse mit Bergblick.",
    "Voll ausgestattete Küche mit Geschirrspüler und Backofen.",
    "Zwei Schlafzimmer."
  ]

  return (
    <div id="beschreibung" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-text mb-8">Beschreibung</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Das Appartement 'Oachkatzl' bietet eine gemütliche Unterkunft mit Bergblick, Garten und Terrasse. 
            Die Wohnung ist modern und hochwertig ausgestattet und ideal für einen ruhigen Urlaub in der Natur.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-8 max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold text-text mb-6">Wichtige Ausstattungsmerkmale</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {keyFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="text-green-500 text-lg">✓</div>
                <span className="text-gray-600">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}