import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Demo from './components/Demo'
import Footer from './components/Footer'
import Slider from './components/Slider'
import Program from './components/Program'
import Kenapa from './components/Kenapa'
import EmblaCarousel from './components/EmblaCarousel'

const OPTIONS = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      <Kenapa />
      <Program />
      <Slider />
      <Demo />
      <Footer />
    </div>
  );
}

export default App;
