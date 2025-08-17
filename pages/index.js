import Head from 'next/head'
import SimpleHeader from '../components/SimpleHeader'
import SimpleHero from '../components/SimpleHero'
import SimpleGallery from '../components/SimpleGallery'
import SimpleBooking from '../components/SimpleBooking'
import SimpleFooter from '../components/SimpleFooter'

export default function Home() {
  return (
    <>
      <Head>
        <title>Appartement Oachkatzl - Luxury Austrian Mountain Retreat</title>
        <meta name="description" content="Experience authentic Austrian hospitality in our beautifully appointed apartment. Perfect for mountain getaways with modern amenities and stunning Alpine views." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="min-h-screen bg-white">
        <SimpleHeader />
        <SimpleHero />
        
        <div id="about" className="bg-gray-50 py-24">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">About Our Apartment</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Welcome to Appartement "Oachkatzl" - your perfect home away from home in the heart of Austria. 
              Our luxury apartment combines modern comfort with traditional Austrian charm.
            </p>
          </div>
        </div>
        
        <div id="amenities" className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Amenities</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="p-6">
                <div className="text-2xl mb-4">🏠</div>
                <h3 className="font-semibold mb-2">Fully Furnished</h3>
                <p className="text-gray-600">Complete apartment with all modern amenities</p>
              </div>
              <div className="p-6">
                <div className="text-2xl mb-4">📶</div>
                <h3 className="font-semibold mb-2">High-Speed WiFi</h3>
                <p className="text-gray-600">Fast and reliable internet connection</p>
              </div>
              <div className="p-6">
                <div className="text-2xl mb-4">🅿️</div>
                <h3 className="font-semibold mb-2">Free Parking</h3>
                <p className="text-gray-600">Secure parking space included</p>
              </div>
            </div>
          </div>
        </div>
        
        <SimpleGallery />
        <SimpleBooking />
        <SimpleFooter />
      </div>
    </>
  )
}