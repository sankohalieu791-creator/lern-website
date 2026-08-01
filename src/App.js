import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Institutions from './pages/Institutions'
import Organisations from './pages/Organisations'
import TrainingProviders from './pages/TrainingProviders'
import Employers from './pages/Employers'
import Students from './pages/Students'
import About from './pages/About'
import Privacy from './pages/Privacy'
import Cookies from './pages/Cookies'
import './App.css'

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/institutions" element={<Institutions />} />
        <Route path="/organisations" element={<Organisations />} />
        <Route path="/training-providers" element={<TrainingProviders />} />
        <Route path="/employers" element={<Employers />} />
        <Route path="/students" element={<Students />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/cookies" element={<Cookies />} />
      </Routes>
      <Footer />
    </Router>
  )
}
