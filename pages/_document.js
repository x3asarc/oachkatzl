import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <meta name="theme-color" content="#ffffff" />
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["LodgingBusiness", "LocalBusiness"],
              "name": "Oachkatzl Vacation Rentals",
              "description": "Luxury vacation rental apartments in Volders, Tirol with mountain views and premium amenities",
              "url": "https://oachkatzl.com",
              "telephone": "+43-xxx-xxx-xxxx",
              "email": "info@oachkatzl.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Grubertalstraße 16",
                "addressLocality": "Volders",
                "addressRegion": "Tirol",
                "postalCode": "6111",
                "addressCountry": "AT"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 47.2833,
                "longitude": 11.5500
              },
              "priceRange": "€€€",
              "servesCuisine": "N/A",
              "hasMap": "https://goo.gl/maps/YourMapLink",
              "sameAs": [
                "https://www.booking.com/hotel/at/oachkatzl",
                "https://www.facebook.com/oachkatzl",
                "https://www.instagram.com/oachkatzl"
              ]
            })
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}