import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Demo from './components/Demo'
import Footer from './components/Footer'
import Slider from './components/Slider'
import Program from './components/Program'
import Kenapa from './components/Kenapa'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Kenapa />
      <Program />
      <Slider />
      <Demo />
      <Footer />
    </div>
  );
}

export default App;
