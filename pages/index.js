import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import PropertyDetails from '../components/PropertyDetails'
import Amenities from '../components/Amenities'
import Gallery from '../components/Gallery'
import BookingForm from '../components/BookingForm'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Appartement "Oachkatzl" - Luxury Apartment in Austria</title>
        <meta name="description" content="Experience luxury living in our beautiful Appartement Oachkatzl. Book your perfect stay in Austria with modern amenities and stunning views." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Hero />
      <PropertyDetails />
      <Amenities />
      <Gallery />
      <BookingForm />
      <Footer />
    </div>
  )
}
