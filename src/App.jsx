import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Skills from './pages/Skills/Skills'
import Portfolio from './pages/Portfolio/Portfolio'
import Contact from './pages/Contact/Contact'
import Router from './Router'



function App() {
  return (
    <Router />
    // <Routes>
    // <Route path="/" element={<Home />} />
    // <Route path="/about-me" element={<About />} />
    // <Route path="/skills" element={<Skills />} />
    // <Route path="/portfolio" element={<Portfolio />} />
    // <Route path="/contact-me" element={<Contact />} />
    // </Routes>
  )
}

export default App
