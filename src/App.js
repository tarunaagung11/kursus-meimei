import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Demo from './components/Demo'
import Footer from './components/Footer'
import Slider from './components/Slider'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Slider />
      <Demo />
      <Footer />
    </div>
  );
}

export default App;
