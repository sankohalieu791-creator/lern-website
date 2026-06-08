import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: '#4C1D95', stopOpacity: 1}} />
                <stop offset="50%" style={{stopColor: '#00D9FF', stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: '#39FF14', stopOpacity: 1}} />
              </linearGradient>
            </defs>
            <path d="M 16,11 L 3,4 L 5,7 L 17,13 Z" fill="url(#logoGradient)"/>
            <path d="M 16,14 L 7,9 L 9,12 L 17,16 Z" fill="url(#logoGradient)"/>
            <path d="M 17,9 C 20,7 24,8 28,11 C 30,13 31,15 30,16 C 28,14 26,14 24,15 L 22,16 L 21,17 L 21,26 L 27,26 L 27,28 L 18,28 Q 17,28 17,26 Z" fill="url(#logoGradient)"/>
            <path d="M 17,26 L 4,33 L 16,26 Z" fill="url(#logoGradient)"/>
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