export default function Ausstattung() {
  const amenities = [
    { name: "Kostenloses WLAN", icon: "📶" },
    { name: "Gratis Parkplatz", icon: "🅿️" },
    { name: "Haustiere erlaubt (ggf. Gebühr)", icon: "🐕" },
    { name: "Nichtraucherzimmer", icon: "🚭" },
    { name: "Garten und Grillmöglichkeiten", icon: "🌳" },
    { name: "Familienfreundlich", icon: "👨‍👩‍👧‍👦" }
  ]

  const activities = ["Wandern", "Skifahren", "Tennis", "Reiten"]

  return (
    <div id="ausstattung" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-text mb-8">Ausstattung und Services</h2>
          <p className="text-lg text-gray-600">Alles was Sie für einen komfortablen Aufenthalt benötigen</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {amenities.map((amenity, index) => (
            <div key={index} className="bg-background p-6 rounded-lg">
              <div className="text-2xl mb-3">{amenity.icon}</div>
              <h3 className="font-semibold text-text">{amenity.name}</h3>
            </div>
          ))}
        </div>

        <div className="bg-accent/10 p-8 rounded-lg text-center">
          <h3 className="text-xl font-semibold text-text mb-4">Aktivitäten in der Nähe</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {activities.map((activity, index) => (
              <span key={index} className="bg-white px-4 py-2 rounded-full text-text border border-accent/20">
                {activity}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}