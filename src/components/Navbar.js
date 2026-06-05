import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: '#4C1D95', stopOpacity: 1}} />
                <stop offset="50%" style={{stopColor: '#00D9FF', stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: '#39FF14', stopOpacity: 1}} />
              </linearGradient>
            </defs>
            <rect x="4" y="4" width="24" height="24" rx="6" fill="url(#logoGradient)" opacity="0.2" stroke="url(#logoGradient)" strokeWidth="2"/>
            <polygon points="12,10 12,22 22,16" fill="url(#logoGradient)"/>
          </svg>
          <span>LERN</span>
        </Link>

        <div className="nav-menu">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/explore" className="nav-link">Explore</Link>
          <Link to="/academy" className="nav-link">Academy</Link>
          <Link to="/about" className="nav-link">About</Link>
        </div>

        <div className="nav-auth">
          <a href="https://lernapp.uk" target="_blank" rel="noopener noreferrer" className="btn-get-app">Get App</a>
        </div>
      </div>
    </nav>
  )
}