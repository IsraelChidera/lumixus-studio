import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Works from './components/Works'
import StartProject from './components/StartProject'
import Testimonial from './components/Testimonial'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Image from 'next/image'
import Faq from './components/Faq'
import Pricing from './components/Pricing'

export default function Home() {
  return (
    <main className='relative'>
      <div className="relative">
        <Navbar />
        <Hero />

        <Image src="/nav-blur.webp" alt="blur" className='absolute top-0 left-0 z-10' width={1300} height={200} />
      </div>
      <div className="relative">
        <Services />
        <Works />        
        <Pricing />
        <StartProject />
        <Testimonial />
        <Faq />
        <Image src="/body-blur.webp" alt="blur" className='absolute top-0 left-0 z-10' width={1300} height={1866} />
      </div>
      <Contact />
    </main>
  )
}
