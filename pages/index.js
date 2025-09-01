import MetaTags from '@/components/seo/MetaTags'
import StickyHeader from '@/components/navigation/StickyHeader'
import HeroSection from '@/components/sections/HeroSection'
import ImageGallery from '@/components/sections/ImageGallery'
import BookingCTA from '@/components/sections/BookingCTA'
import AmenitiesGrid from '@/components/sections/AmenitiesGrid'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import PropertyDetails from '@/components/sections/PropertyDetails'
import LocationSection from '@/components/sections/LocationSection'
import ExploreRegion from '@/components/sections/ExploreRegion'
import ContactForm from '@/components/sections/ContactForm'
import AvailabilityCalendar from '@/components/sections/AvailabilityCalendar'
import FAQSection from '@/components/sections/FAQSection'
import Footer from '@/components/sections/Footer'

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
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["VacationRental", "Product"],
    "name": "Appartement 'Oachkatzl' - Luxury Mountain Retreat",
    "description": "Spacious 2-bedroom luxury apartment with mountain views, modern amenities, and traditional Alpine charm in Volders, Tirol",
    "image": [
      "https://oachkatzl.com/images/gallery/image2.webp",
      "https://oachkatzl.com/images/gallery/image3.webp",
      "https://oachkatzl.com/images/gallery/image5.webp"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Grubertalstraße 16",
      "addressLocality": "Grossvolderberg",
      "postalCode": "6111",
      "addressRegion": "Tirol",
      "addressCountry": "AT"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 47.2833,
      "longitude": 11.5500
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "9.7",
      "bestRating": "10",
      "worstRating": "1",
      "ratingCount": "35",
      "reviewCount": "35"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock",
      "validFrom": "2025-01-01",
      "validThrough": "2025-12-31"
    },
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "Free WiFi",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Free Parking",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Pet Friendly",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Mountain View",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Fully Equipped Kitchen",
        "value": true
      }
    ],
    "numberOfRooms": 2,
    "occupancy": {
      "@type": "QuantitativeValue",
      "minValue": 1,
      "maxValue": 4
    },
    "floorSize": {
      "@type": "QuantitativeValue",
      "value": 54,
      "unitCode": "MTK"
    }
  };

  return (
    <>
      <MetaTags
        title="Vacation Rentals Tirol Austria | Oachkatzl Apartments"
        description="Luxury mountain apartment in Volders, Tirol. Hot tub, hiking trails, booking available. Your Alpine escape awaits!"
        url="/"
        structuredData={structuredData}
      />
      
      <StickyHeader />
      
      <div className="min-h-screen pt-16 md:pt-20">
        <HeroSection propertyData={propertyData} />
        <ImageGallery propertyData={propertyData} />
        <BookingCTA variant="primary" propertyData={propertyData} />
        <AmenitiesGrid propertyData={propertyData} />
        <TestimonialsSection propertyData={propertyData} />
        <PropertyDetails propertyData={propertyData} />
        <BookingCTA variant="secondary" propertyData={propertyData} />
        <LocationSection propertyData={propertyData} />
        <ExploreRegion />
        <AvailabilityCalendar propertyData={propertyData} />
        <ContactForm propertyData={propertyData} />
        <FAQSection propertyData={propertyData} />
      </div>
      
      <Footer />
    </>
  )
}