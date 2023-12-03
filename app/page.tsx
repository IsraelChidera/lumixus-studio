import Image from 'next/image'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Works from './components/Works'
import StartProject from './components/StartProject'
import Testimonial from './components/Testimonial'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'

export default function Home() {
  return (
    <main className='relative'>
      <Navbar />
      <Hero />
      <Services />
      <Works />
      <StartProject />
      <Testimonial />
      <Contact />
      <Footer />
      <CustomCursor />      
    </main>
  )
}
