import Head from 'next/head'
import HeroSection from '@/components/sections/HeroSection'
import ImageGallery from '@/components/sections/ImageGallery'
import BookingCTA from '@/components/sections/BookingCTA'
import AmenitiesGrid from '@/components/sections/AmenitiesGrid'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import PropertyDetails from '@/components/sections/PropertyDetails'
import LocationSection from '@/components/sections/LocationSection'
import ContactForm from '@/components/sections/ContactForm'
import AvailabilityCalendar from '@/components/sections/AvailabilityCalendar'
import FAQSection from '@/components/sections/FAQSection'

const propertyData = {
  "property": {
    "name": "Appartement 'Oachkatzl'",
    "type": "Ferienwohnung",
    "address": {
      "street": "Grubertalstraße 16",
      "postal_code": "6111",
      "city": "Grossvolderberg",
      "country": "Österreich"
    },
    "coordinates": {
      "location_rating": 9.2,
      "location_description": "Hervorragende Lage"
    }
  },
  "ratings": {
    "overall_rating": 9.7,
    "rating_category": "Außergewöhnlich",
    "total_reviews": 35,
    "detailed_ratings": {
      "staff": 9.9,
      "facilities": 9.8,
      "cleanliness": 9.7,
      "comfort": 9.7,
      "value_for_money": 9.8,
      "location": 9.2,
      "wifi": 10.0
    },
    "quality_rating": "4 von 5"
  },
  "accommodation_details": {
    "size": "54 m²",
    "bedrooms": 2,
    "bathrooms": 1,
    "max_guests": 4,
    "bedroom_configuration": {
      "bedroom_1": "1 Doppelbett",
      "bedroom_2": "2 Etagenbetten"
    },
    "private_property": true
  },
  "amenities": {
    "internet": {
      "wifi": true,
      "wifi_rating": 10.0,
      "wifi_areas": "einige Zimmer/Wohneinheiten"
    },
    "parking": {
      "available": true,
      "type": "Private Parkplätze",
      "cost": "kostenfrei",
      "reservation_required": false
    },
    "kitchen": {
      "fully_equipped": true,
      "appliances": [
        "Kühlschrank",
        "Geschirrspüler",
        "Backofen",
        "Herdplatte",
        "Toaster",
        "Kaffeemaschine",
        "Wasserkocher",
        "Waschmaschine"
      ]
    },
    "outdoor": {
      "terrace": true,
      "balcony": true,
      "garden": true,
      "bbq": true,
      "garden_furniture": true,
      "outdoor_dining_area": true
    },
    "views": [
      "Bergblick",
      "Stadtblick",
      "Gartenblick"
    ],
    "entertainment": {
      "tv": true,
      "flat_screen": true,
      "streaming_services": true
    },
    "other": [
      "Skiaufbewahrung",
      "Fußbodenheizung",
      "Kamin",
      "Allergikerfreundlich",
      "Haustiere erlaubt"
    ]
  },
  "policies": {
    "check_in": {
      "from": "15:00",
      "until": "00:00"
    },
    "check_out": {
      "from": "10:00",
      "until": "11:00"
    },
    "smoking": false,
    "parties": false,
    "pets": {
      "allowed": true,
      "fee": "30 EUR pro Aufenthalt"
    },
    "children": {
      "all_ages_welcome": true,
      "extra_beds": false,
      "baby_beds": false
    }
  },
  "nearby_attractions": {
    "within_5km": [
      {
        "name": "Pfarrkirche Hl. Johannes",
        "distance": "2.1 km"
      },
      {
        "name": "Swarovski Kristallwelten",
        "distance": "4.4 km"
      }
    ],
    "major_attractions": [
      {
        "name": "Schloss Ambras",
        "distance": "17 km"
      },
      {
        "name": "Kaiserliche Hofburg Innsbruck",
        "distance": "17 km"
      },
      {
        "name": "Hauptbahnhof Innsbruck",
        "distance": "18 km"
      },
      {
        "name": "Flughafen Innsbruck",
        "distance": "21 km"
      }
    ]
  },
  "activities": [
    "Wandern",
    "Skifahren",
    "Fahrradfahren",
    "Mountainbiking",
    "Reiten"
  ],
  "languages_spoken": [
    "Deutsch",
    "Englisch"
  ],
  "special_features": {
    "renovation_year": 2021,
    "access_note": "Sehr steile, geteerte Straße - im Winter Schneeketten/Allrad empfehlenswert",
    "location_description": "Idyllisches Grubertal, 5 Fahrminuten vom Dorfzentrum Volders",
    "panoramic_view": "Nordkette und Tiroler Inntal"
  },
  "guest_reviews_highlights": [
    "Die Aussicht, die Lage in der Natur, die Einrichtung und die Liebe im Detail",
    "Schön eingerichtet, war alles da, was man braucht, schöne Lage mit schönem Blick",
    "Eine sehr schöne Wohnung, gemütlich eingerichtet und mit allem ausgestattet",
    "Top Lage für Bergurlaub, umfangreiche saubere und hochwertige Ausstattung",
    "Wunderschöne Unterkunft, rustikal aber auch modern, beste Lage mit wunderbarem Ausblick"
  ],
  "booking_info": {
    "platform": "Booking.com",
    "genius_discount_available": true,
    "same_price_guarantee": true,
    "currency": "EUR"
  }
}

export default function LandingPage() {
  return (
    <>
      <Head>
        <title>Appartement 'Oachkatzl' - Modern Retreat in Grossvolderberg | Booking Available</title>
        <meta name="description" content="Experience luxury mountain living at Appartement 'Oachkatzl' in Grossvolderberg. Stunning panoramic views, fully equipped kitchen, free parking, and pet-friendly. Book your perfect Alpine getaway today!" />
        <meta name="keywords" content="Appartement Oachkatzl, Grossvolderberg, Ferienwohnung, Tirol, Austria, vacation rental, mountain view, booking" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="language" content="de-DE" />
        <meta property="og:title" content="Appartement 'Oachkatzl' - Modern Mountain Retreat" />
        <meta property="og:description" content="Luxury vacation apartment with panoramic mountain views in Grossvolderberg, Austria. Book your perfect Alpine escape!" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/hero-background.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen">
        <HeroSection propertyData={propertyData} />
        <ImageGallery propertyData={propertyData} />
        <BookingCTA variant="primary" propertyData={propertyData} />
        <AmenitiesGrid propertyData={propertyData} />
        <TestimonialsSection propertyData={propertyData} />
        <PropertyDetails propertyData={propertyData} />
        <BookingCTA variant="secondary" propertyData={propertyData} />
        <LocationSection propertyData={propertyData} />
        <AvailabilityCalendar propertyData={propertyData} />
        <ContactForm propertyData={propertyData} />
        <FAQSection propertyData={propertyData} />
      </div>
    </>
  )
}