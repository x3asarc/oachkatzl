import Header from '../components/Header'
import Hero from '../components/Hero'
import PropertyDetails from '../components/PropertyDetails'
import Amenities from '../components/Amenities'
import Gallery from '../components/Gallery'
import BookingForm from '../components/BookingForm'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
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