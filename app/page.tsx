import Image from 'next/image'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Works from './components/Works'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Works />
    </main>
  )
}
