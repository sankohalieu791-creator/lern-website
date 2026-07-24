import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Institutions from './pages/Institutions'
import Employers from './pages/Employers'
import Students from './pages/Students'
import Instructors from './pages/Instructors'
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
        <Route path="/employers" element={<Employers />} />
        <Route path="/students" element={<Students />} />
        <Route path="/instructors" element={<Instructors />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/cookies" element={<Cookies />} />
      </Routes>
      <Footer />
    </Router>
  )
}
