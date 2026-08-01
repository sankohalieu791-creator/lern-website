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
          <Link to="/training-providers" className="nav-link" onClick={() => setOpen(false)}>Training providers</Link>
          <Link to="/organisations" className="nav-link" onClick={() => setOpen(false)}>Organisations</Link>
          <Link to="/about" className="nav-link" onClick={() => setOpen(false)}>About</Link>
        </div>

        <a href="https://lernapp.uk" target="_blank" rel="noopener noreferrer" className="btn-secondary" onClick={() => setOpen(false)}>Sign up</a>

        <button className="nav-burger" aria-label="Menu" onClick={() => setOpen(o => !o)}>
          <span /><span /><span />
        </button>
      </div>

      {open && (
        <div className="nav-mobile">
          <Link to="/institutions" className="nav-link" onClick={() => setOpen(false)}>Institutions</Link>
          <Link to="/employers" className="nav-link" onClick={() => setOpen(false)}>Employers</Link>
          <Link to="/training-providers" className="nav-link" onClick={() => setOpen(false)}>Training providers</Link>
          <Link to="/organisations" className="nav-link" onClick={() => setOpen(false)}>Organisations</Link>
          <Link to="/students" className="nav-link" onClick={() => setOpen(false)}>Students</Link>
          <Link to="/about" className="nav-link" onClick={() => setOpen(false)}>About</Link>
          <a href="https://lernapp.uk" target="_blank" rel="noopener noreferrer" className="btn-secondary" onClick={() => setOpen(false)}>Sign up</a>
        </div>
      )}
    </nav>
  )
}
