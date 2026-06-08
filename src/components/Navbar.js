import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">
          <img src={`${process.env.PUBLIC_URL}/bird.svg`} alt="LERN bird logo" width="36" height="36" />
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