import Head from 'next/head'
import Navbar from '../components/Navbar'
import OurWork from '../components/OurWork'
import Footer from '../components/Footer'

export default function OurWorkPage() {
  return (
    <>
      <Head>
        <title>Our Work — DarziGhar</title>
        <meta name="description" content="Browse DarziGhar's portfolio of stitched garments, bridal blouses, lehengas, alterations and uniforms crafted in Chennai." />
        <meta property="og:title" content="Our Work — DarziGhar" />
        <meta property="og:description" content="Every stitch tells a story. See the garments we've crafted for our customers across Chennai." />
        <meta property="og:image" content="/logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <OurWork />
        </main>
        <Footer />
      </div>
    </>
  )
}
