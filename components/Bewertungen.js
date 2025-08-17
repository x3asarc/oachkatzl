export default function Bewertungen() {
  const reviews = [
    {
      author: "Sergey",
      country: "Zypern",
      rating: 10,
      summary: "Die Gastgeber sind wunderbar, die Lage ist hervorragend für einen ruhigen Aufenthalt, die Wohnung ist perfekt für eine vierköpfige Familie."
    },
    {
      author: "Charley",
      country: "Vereinigtes Königreich",
      rating: 10,
      summary: "Die Lage ist einfach atemberaubend, wir wurden bei der Ankunft von beiden Gastgebern empfangen, die so nette Leute sind. Mein einziges Bedauern ist, dass ich keinen längeren Aufenthalt gebucht habe."
    },
    {
      author: "Stefanie",
      country: "Deutschland",
      rating: 10,
      summary: "Die Aussicht, die Lage in der Natur, die Einrichtung und die Liebe zum Detail sind top!"
    },
    {
      author: "Maik",
      country: "Schweiz",
      rating: 10,
      summary: "Mega schöne Ferienwohnung mit tollem Ausblick und die Anfahrt sehr abenteuerlich. Wir wurden sehr herzlich empfangen und es ist genau so, wie auf den Bildern."
    }
  ]

  return (
    <div id="bewertungen" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-text mb-4">Das sagen unsere Gäste</h2>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="bg-forest-deep text-cream px-3 py-2 rounded font-bold text-xl">9,7</div>
            <div>
              <div className="text-forest-deep font-semibold text-lg">Hervorragend</div>
              <div className="text-text-light">Basierend auf 32 Bewertungen</div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-cream p-6 rounded-lg border border-wood shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-forest-deep text-cream w-10 h-10 rounded-full flex items-center justify-center font-bold">
                  {review.author[0]}
                </div>
                <div>
                  <div className="font-semibold text-text">{review.author}</div>
                  <div className="text-sm text-text-light">{review.country}</div>
                </div>
                <div className="ml-auto bg-secondary text-white px-2 py-1 rounded text-sm font-bold">
                  {review.rating}
                </div>
              </div>
              <p className="text-text-light italic">"{review.summary}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}