import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Process from '../components/Process'
import Products from '../components/ProductsOnHome'
import Trust from '../components/Trust'
import CtaBanner from '../components/CTABanner'
import Footer from '../components/Footer'


export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Trust />
      <Products />
      <CtaBanner />
      <Footer />
    </>
  )
}
