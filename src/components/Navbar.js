import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">
          <svg width="38" height="40" viewBox="60 40 290 295" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 188,105 L 66,45 L 84,62 L 198,130 Z" fill="white"/>
            <path d="M 186,132 L 104,80 L 118,96 L 198,157 Z" fill="white"/>
            <path d="M 198,88 C 230,76 275,80 316,104 C 337,116 346,130 342,134 C 320,122 298,120 278,128 L 260,136 L 248,140 L 248,252 L 323,252 L 323,272 L 220,272 Q 198,272 198,252 Z" fill="white"/>
            <path d="M 198,254 L 78,326 L 188,252 Z" fill="white"/>
            <line x1="84" y1="62" x2="198" y2="130" stroke="#0a0a0a" strokeWidth="10" strokeLinecap="round"/>
            <line x1="198" y1="88" x2="198" y2="272" stroke="#0a0a0a" strokeWidth="9"/>
            <line x1="198" y1="252" x2="323" y2="252" stroke="#0a0a0a" strokeWidth="9"/>
            <line x1="248" y1="140" x2="262" y2="135" stroke="#0a0a0a" strokeWidth="7"/>
          </svg>
          <span>LERN</span>
        </Link>

        <div className="nav-menu">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/explore" className="nav-link">Explore</Link>
          <Link to="/academy" className="nav-link">Instructor</Link>
          <Link to="/about" className="nav-link">About</Link>
        </div>

        <div className="nav-auth">
          <a href="https://lernapp.uk" target="_blank" rel="noopener noreferrer" className="btn-get-app">Get App</a>
        </div>
      </div>
    </nav>
  )
}