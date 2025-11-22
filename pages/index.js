import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import HowItWorks from '../components/HowItWorks'
import Footer from '../components/Footer'
import Contact from '../components/Contact'



export default function Home() {
  return (
    <>
      <Head>
        <title>DarziGhar — Custom Fits. Delivered to Your Doorstep.</title>
        <meta name="description" content="DarziGhar - Uber for Tailoring. Book trusted local tailors, get measurements saved, and receive perfectly fitted garments — all from your phone." />
        <meta property="og:title" content="DarziGhar — Custom Fits. Delivered to Your Doorstep." />
        <meta property="og:description" content="Book trusted local tailors, get measurements saved, and receive perfectly fitted garments — all from your phone." />
        <meta property="og:image" content="/logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <About />
          <HowItWorks />
          <Services />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
