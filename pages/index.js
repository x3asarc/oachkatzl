import Head from 'next/head'
import SimpleHeader from '../components/SimpleHeader'
import SimpleHero from '../components/SimpleHero'
import Beschreibung from '../components/Beschreibung'
import Ausstattung from '../components/Ausstattung'
import SimpleGallery from '../components/SimpleGallery'
import Bewertungen from '../components/Bewertungen'
import SimpleBooking from '../components/SimpleBooking'
import SimpleFooter from '../components/SimpleFooter'

export default function Home() {
  return (
    <>
      <Head>
        <title>Appartement 'Oachkatzl' - Apartment in Grossvolderberg</title>
        <meta name="description" content="Das Appartement 'Oachkatzl' bietet eine gemütliche Unterkunft mit Bergblick, Garten und Terrasse. Ideal für einen ruhigen Urlaub in der Natur." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="language" content="de-DE" />
      </Head>
      
      <div className="min-h-screen bg-white">
        <SimpleHeader />
        <SimpleHero />
        <Beschreibung />
        <Ausstattung />
        <SimpleGallery />
        <Bewertungen />
        <SimpleBooking />
        <SimpleFooter />
      </div>
    </>
  )
}