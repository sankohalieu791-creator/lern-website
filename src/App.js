import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CookieBanner from './components/CookieBanner'
import Home from './pages/Home'
import Institutions from './pages/Institutions'
import TrainingProviders from './pages/TrainingProviders'
import Employers from './pages/Employers'
import Students from './pages/Students'
import Pricing from './pages/Pricing'
import About from './pages/About'
import HowItWorks from './pages/HowItWorks'
import HelpDeskPage from './pages/HelpDesk'
import Safeguarding from './pages/Safeguarding'
import Privacy from './pages/Privacy'
import Cookies from './pages/Cookies'
import Terms from './pages/Terms'
import NotFound from './pages/NotFound'
import './App.css'

function RevealManager() {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
    const timer = setTimeout(() => {
      const els = document.querySelectorAll('.reveal:not(.is-visible)')
      if (!els.length) return
      const io = new IntersectionObserver(
        entries => entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            io.unobserve(e.target)
          }
        }),
        { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
      )
      els.forEach(el => io.observe(el))
      return () => io.disconnect()
    }, 80)
    return () => clearTimeout(timer)
  }, [location.pathname])
  return null
}

export default function App() {
  return (
    <Router>
      <RevealManager />
      {/* Watched by Navbar's IntersectionObserver — nav is transparent while
          this is in view (top of page), frosted once it scrolls out. */}
      <div id="nav-sentinel" aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, width: 1, height: 1, pointerEvents: 'none' }} />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/institutions" element={<Institutions />} />
        <Route path="/schools" element={<Institutions />} />
        <Route path="/training-providers" element={<TrainingProviders />} />
        <Route path="/employers" element={<Employers />} />
        <Route path="/students" element={<Students />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/help-desk" element={<HelpDeskPage />} />
        <Route path="/safeguarding" element={<Safeguarding />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <CookieBanner />
    </Router>
  )
}
