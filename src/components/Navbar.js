import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-wordmark">LERN</span>
          <span className="brand-slash" />
        </Link>

        <div className={`nav-links ${open ? 'nav-open' : ''}`}>
          <Link to="/institutions" className="nav-link" onClick={() => setOpen(false)}>Institutions</Link>
          <Link to="/employers" className="nav-link" onClick={() => setOpen(false)}>Employers</Link>
          <Link to="/students" className="nav-link" onClick={() => setOpen(false)}>Students</Link>
          <Link to="/instructors" className="nav-link" onClick={() => setOpen(false)}>Instructors</Link>
          <Link to="/about" className="nav-link" onClick={() => setOpen(false)}>About</Link>
        </div>

        <Link to="/students" className="btn-secondary" onClick={() => setOpen(false)}>Get started</Link>

        <button className="nav-burger" aria-label="Menu" onClick={() => setOpen(o => !o)}>
          <span /><span /><span />
        </button>
      </div>

      {open && (
        <div className="nav-mobile">
          <Link to="/institutions" className="nav-link" onClick={() => setOpen(false)}>Institutions</Link>
          <Link to="/employers" className="nav-link" onClick={() => setOpen(false)}>Employers</Link>
          <Link to="/students" className="nav-link" onClick={() => setOpen(false)}>Students</Link>
          <Link to="/instructors" className="nav-link" onClick={() => setOpen(false)}>Instructors</Link>
          <Link to="/about" className="nav-link" onClick={() => setOpen(false)}>About</Link>
          <Link to="/students" className="btn-secondary" onClick={() => setOpen(false)}>Get started</Link>
        </div>
      )}
    </nav>
  )
}
