import React from 'react'
import './App.css'
import { Tours } from './components/Tours.js'
import { Navbar } from './components/Navbar.js'
import { Services } from './components/Services.js'
import { About } from './components/About.js'
import { Footer } from './components/Footer.js'
import { Hero } from './components/Hero.js'

const App = () => {
  return (
    <body>
      <Navbar />
      <Hero />
      <About />
      <Tours />
      <Services />
      <Footer />
    </body>
  );
}

export default App;
