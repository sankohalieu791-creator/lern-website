import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="brand">
          <span className="brand-wordmark">LERN</span>
          <span className="brand-slash" />
        </Link>

        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/explore" className="nav-link">Courses</Link>
          <Link to="/academy" className="nav-link">Teach</Link>
          <Link to="/about" className="nav-link">About</Link>
        </div>

        <Link to="/explore" className="btn-secondary">Start learning</Link>
      </div>
    </nav>
  )
}
