import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion'
import { 
  HelpCircle, 
  Clock, 
  Wifi, 
  Car, 
  PawPrint, 
  Users, 
  Shield,
  MapPin,
  Utensils,
  MessageCircle,
  Phone
} from 'lucide-react'

const FAQSection = ({ propertyData }) => {
  const faqCategories = [
    {
      title: 'Buchung & Anreise',
      icon: <Clock className="w-5 h-5" />,
      questions: [
        {
          question: 'Wie kann ich das Appartement \'Oachkatzl\' buchen?',
          answer: `Sie können das Appartement direkt über Booking.com buchen oder uns eine unverbindliche Anfrage über unser Kontaktformular senden. Bei einer direkten Buchung erhalten Sie eine sofortige Bestätigung und können von unserem Bestpreis-Service profitieren.`
        },
        {
          question: 'Wann kann ich einchecken und auschecken?',
          answer: `Check-in ist täglich von ${propertyData.policies.check_in.from} bis ${propertyData.policies.check_in.until} Uhr möglich. Check-out ist bis ${propertyData.policies.check_out.until} Uhr. Gerne können wir bei Bedarf individuelle Zeiten vereinbaren - sprechen Sie uns einfach an.`
        },
        {
          question: 'Gibt es eine Mindestaufenthaltsdauer?',
          answer: 'Ja, der Mindestaufenthalt beträgt 2 Nächte. An Feiertagen und in der Hochsaison kann eine Mindestaufenthaltsdauer von 3-7 Nächten gelten. Details finden Sie bei der Buchung oder auf Anfrage.'
        },
        {
          question: 'Kann ich meine Buchung kostenlos stornieren?',
          answer: 'Ja, Sie können bis 24 Stunden vor Anreise kostenlos stornieren. Bei Buchungen über Booking.com gelten deren Stornierungsrichtlinien. Wir empfehlen eine Reiserücktrittsversicherung für maximale Flexibilität.'
        },
        {
          question: 'Wie funktioniert der Schlüsselaustausch?',
          answer: 'Wir organisieren eine persönliche Schlüsselübergabe bei Ihrer Ankunft. Alternativ steht ein sicherer Schlüsseltresor zur Verfügung. Die genauen Details erhalten Sie 24-48 Stunden vor Anreise per E-Mail oder SMS.'
        }
      ]
    },
    {
      title: 'Ausstattung & Annehmlichkeiten',
      icon: <Wifi className="w-5 h-5" />,
      questions: [
        {
          question: 'Wie ist die WLAN-Qualität im Appartement?',
          answer: `Das WLAN wurde von unseren Gästen mit ${propertyData.amenities.internet.wifi_rating}/10 bewertet. Sie haben Zugang zu schnellem Internet in allen Räumen der Wohnung, ideal für Remote Work, Streaming und Video-Calls.`
        },
        {
          question: 'Ist die Küche vollständig ausgestattet?',
          answer: `Ja, die Küche ist komplett ausgestattet mit allen wichtigen Geräten: ${propertyData.amenities.kitchen.appliances.slice(0, 5).join(', ')} und weiteren nützlichen Utensilien. Sie können selbstständig kochen und müssen sich um nichts kümmern.`
        },
        {
          question: 'Welche Aussicht habe ich vom Appartement?',
          answer: `Das Appartement bietet einen spektakulären ${propertyData.amenities.views.join(', ')}. Besonders beeindruckend ist der Panoramablick auf die ${propertyData.special_features.panoramic_view} - perfekt für unvergessliche Sonnenaufgänge und -untergänge.`
        },
        {
          question: 'Gibt es Outdoor-Bereiche?',
          answer: `Ja, Ihnen stehen eine private Terrasse, ein Garten und ein BBQ-Bereich zur Verfügung. Die Terrasse ist möbliert und bietet den perfekten Ort für entspannte Abende mit Bergpanorama. Gartenmöbel und Grillutensilien sind vorhanden.`
        },
        {
          question: 'Ist Bettwäsche und Handtücher inklusive?',
          answer: 'Ja, alle Bettwäsche, Handtücher und Geschirrtücher sind inklusive und werden frisch gewaschen bereitgestellt. Bei längeren Aufenthalten ab 7 Nächten bieten wir einen kostenlosen Wechselservice an.'
        }
      ]
    },
    {
      title: 'Parken & Anreise',
      icon: <Car className="w-5 h-5" />,
      questions: [
        {
          question: 'Wo kann ich mein Auto parken?',
          answer: `Kostenlose private Parkplätze stehen direkt vor dem Appartement zur Verfügung. ${propertyData.amenities.parking.type} - ${propertyData.amenities.parking.cost}. Eine Reservierung ist nicht erforderlich, die Plätze sind für unsere Gäste garantiert.`
        },
        {
          question: 'Wie erreiche ich das Appartement am besten?',
          answer: `Das Appartement liegt ${propertyData.special_features.location_description}. Mit dem Auto nehmen Sie die A12 Inntalautobahn, Ausfahrt Volders. Wichtig: ${propertyData.special_features.access_note}`
        },
        {
          question: 'Gibt es öffentliche Verkehrsmittel?',
          answer: 'Der nächste Bahnhof ist Volders (ca. 2 km entfernt) mit direkter Verbindung nach Innsbruck. Von dort können Sie ein Taxi nehmen oder wir organisieren gerne eine Abholung gegen Aufpreis. Busverbindungen sind begrenzt.'
        },
        {
          question: 'Wie weit ist es zum Flughafen?',
          answer: 'Der Flughafen Innsbruck ist nur 21 km entfernt (ca. 25 Minuten Fahrt). Mietwagen sind am Flughafen verfügbar, oder wir können einen Transfer gegen Aufpreis organisieren. Auch Taxi-Services stehen zur Verfügung.'
        }
      ]
    },
    {
      title: 'Haustiere & Gäste',
      icon: <PawPrint className="w-5 h-5" />,
      questions: [
        {
          question: 'Sind Haustiere erlaubt?',
          answer: `${propertyData.policies.pets.allowed ? `Ja, Haustiere sind herzlich willkommen! Es fällt eine Gebühr von ${propertyData.policies.pets.fee} an. Bitte informieren Sie uns bei der Buchung über Ihr Haustier. Der Garten bietet viel Platz zum Spielen und Entspannen.` : 'Leider sind Haustiere nicht gestattet.'}`
        },
        {
          question: 'Wie viele Gäste können maximal übernachten?',
          answer: `Das Appartement ist für maximal ${propertyData.accommodation_details.max_guests} Personen ausgelegt. Die Schlafmöglichkeiten umfassen: ${propertyData.accommodation_details.bedroom_configuration.bedroom_1} im Hauptschlafzimmer und ${propertyData.accommodation_details.bedroom_configuration.bedroom_2} im zweiten Zimmer.`
        },
        {
          question: 'Ist das Appartement kinderfreundlich?',
          answer: `${propertyData.policies.children.all_ages_welcome ? 'Ja, Kinder aller Altersgruppen sind willkommen! Das Appartement ist sicher und familienfreundlich eingerichtet. Der private Garten bietet viel Platz zum Spielen. Kinderbetten sind auf Anfrage verfügbar.' : 'Das Appartement ist begrenzt kinderfreundlich. Bitte kontaktieren Sie uns für Details.'}`
        },
        {
          question: 'Gibt es Einschränkungen für Partys oder Events?',
          answer: `${propertyData.policies.parties ? 'Kleinere Feiern sind nach Absprache möglich.' : 'Partys und Events sind nicht gestattet. Wir bitten um Rücksichtnahme auf die Nachbarn und um Einhaltung der Ruhezeiten (22:00-07:00 Uhr). Das Appartement ist ideal für einen erholsamen Urlaub.'}`
        }
      ]
    },
    {
      title: 'Praktische Informationen',
      icon: <Shield className="w-5 h-5" />,
      questions: [
        {
          question: 'Wo finde ich Supermärkte und Restaurants?',
          answer: 'Im Dorfzentrum Volders (5 Minuten Fahrt) finden Sie Supermärkte, Apotheke, Restaurants und Cafés. Der nächste größere Supermarkt ist ca. 3 km entfernt. In Innsbruck (17 km) haben Sie die größte Auswahl an Einkaufs- und Gastronomiemöglichkeiten.'
        },
        {
          question: 'Was gibt es in der Umgebung zu unternehmen?',
          answer: `Die Region bietet ${propertyData.activities.join(', ')}. Beliebte Ausflugsziele sind die Swarovski Kristallwelten (4,4 km), Schloss Ambras (17 km) und natürlich die Innsbrucker Altstadt. Im Winter sind Skigebiete schnell erreichbar.`
        },
        {
          question: 'Welche Sprachen sprechen Sie?',
          answer: `Wir sprechen fließend ${propertyData.languages_spoken.join(' und ')}. Bei Fragen vor, während oder nach Ihrem Aufenthalt stehen wir Ihnen gerne zur Verfügung. Wir sind auch per WhatsApp erreichbar.`
        },
        {
          question: 'Was ist bei einem Notfall zu tun?',
          answer: 'Bei Notfällen erreichen Sie uns über die Notfall-Nummer, die Sie bei der Ankunft erhalten. Für medizinische Notfälle wählen Sie 144 (Rettung) oder 133 (Polizei). Das nächste Krankenhaus ist in Hall in Tirol (10 km entfernt).'
        },
        {
          question: 'Gibt es Zusatzleistungen oder Services?',
          answer: 'Gerne bieten wir zusätzliche Services wie Flughafen-Transfer, Einkaufsservice, Kinderbetreuung oder Wanderführungen an. Auch E-Bike-Verleih und Skiverleih können wir vermitteln. Sprechen Sie uns einfach an!'
        }
      ]
    }
  ]

  const quickAnswers = [
    { icon: <Wifi className="w-4 h-4" />, text: `WLAN: ${propertyData.amenities.internet.wifi_rating}/10` },
    { icon: <Car className="w-4 h-4" />, text: 'Parken: Kostenlos' },
    { icon: <PawPrint className="w-4 h-4" />, text: `Haustiere: ${propertyData.policies.pets.allowed ? 'Erlaubt' : 'Nicht erlaubt'}` },
    { icon: <Users className="w-4 h-4" />, text: `Max. ${propertyData.accommodation_details.max_guests} Gäste` }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Häufig gestellte Fragen
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Hier finden Sie Antworten auf die wichtigsten Fragen rund um 
            Ihren Aufenthalt im Appartement 'Oachkatzl'. Bei weiteren Fragen 
            kontaktieren Sie uns gerne direkt.
          </p>
          
          {/* Quick Answers */}
          <div className="flex flex-wrap justify-center gap-4">
            {quickAnswers.map((item, index) => (
              <Badge key={index} variant="secondary" className="flex items-center gap-2 text-sm px-4 py-2">
                {item.icon}
                {item.text}
              </Badge>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* FAQ Accordion */}
          <div className="lg:col-span-2 space-y-8">
            {faqCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                      {category.icon}
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((faq, questionIndex) => (
                      <AccordionItem key={questionIndex} value={`${categoryIndex}-${questionIndex}`}>
                        <AccordionTrigger className="text-left">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact & Support */}
          <div className="space-y-6">
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HelpCircle className="w-6 h-6" />
                  Weitere Fragen?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Konnten wir nicht alle Ihre Fragen beantworten? 
                  Wir sind gerne für Sie da!
                </p>
                
                <div className="space-y-3">
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={() => window.location.href = 'tel:+43123456789'}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Anrufen: +43 123 456 789
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={() => window.location.href = 'mailto:info@oachkatzl.at'}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    E-Mail senden
                  </Button>
                </div>
                
                <div className="text-sm text-gray-500 space-y-1">
                  <p>📞 Telefon: Mo-Fr 9:00-18:00 Uhr</p>
                  <p>📧 E-Mail: Antwort binnen 24h</p>
                  <p>💬 WhatsApp: Schnelle Hilfe</p>
                </div>
              </CardContent>
            </Card>

            {/* Booking Reminder */}
            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-6 text-center">
                <h4 className="font-bold text-green-800 mb-2">
                  Bereit zum Buchen?
                </h4>
                <p className="text-green-700 text-sm mb-4">
                  Sichern Sie sich jetzt Ihren Traumurlaub im Appartement 'Oachkatzl'
                </p>
                <Button 
                  className="w-full bg-green-600 hover:bg-green-700"
                  onClick={() => window.open('https://booking.com', '_blank')}
                >
                  Jetzt auf Booking.com buchen
                </Button>
              </CardContent>
            </Card>

            {/* Important Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Wichtige Hinweise
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div>
                  <h5 className="font-semibold mb-1">Anfahrt</h5>
                  <p className="text-gray-600">{propertyData.special_features.access_note}</p>
                </div>
                
                <div>
                  <h5 className="font-semibold mb-1">Lage</h5>
                  <p className="text-gray-600">{propertyData.special_features.location_description}</p>
                </div>
                
                <div>
                  <h5 className="font-semibold mb-1">Renovierung</h5>
                  <p className="text-gray-600">
                    Komplett renoviert {propertyData.special_features.renovation_year} - 
                    modernste Ausstattung garantiert
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Guest Reviews Preview */}
            <Card>
              <CardHeader>
                <CardTitle>Was Gäste sagen</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {propertyData.guest_reviews_highlights.slice(0, 2).map((review, index) => (
                    <div key={index} className="bg-gray-50 p-3 rounded text-sm italic">
                      "{review.length > 80 ? review.substring(0, 80) + '...' : review}"
                    </div>
                  ))}
                  <div className="text-center">
                    <Badge className="bg-green-600">
                      {propertyData.ratings.overall_rating}/10 • {propertyData.ratings.total_reviews} Bewertungen
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQSection