import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const NAV_LINKS = [
  { to: '/', label: 'Home', exact: true },
  { to: '/institutions', label: 'Institutions' },
  { to: '/training-providers', label: 'Providers' },
  { to: '/employers', label: 'Employers' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/about', label: 'About' },
  { to: '/how-it-works', label: 'How it works' },
]

function isActive(link, pathname) {
  if (link.exact || link.to === '/') return pathname === '/'
  if (link.to === '/institutions') return pathname === '/institutions' || pathname === '/schools'
  return pathname.startsWith(link.to)
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [indicatorStyle, setIndicatorStyle] = useState({ opacity: 0 })
  const navRef = useRef(null)
  const location = useLocation()

  useEffect(() => { setOpen(false) }, [location.pathname])

  /* slide the tubelight indicator to the active link */
  useEffect(() => {
    if (!navRef.current) return
    const active = navRef.current.querySelector('a.tl-active')
    if (!active) { setIndicatorStyle({ opacity: 0 }); return }
    const navRect = navRef.current.getBoundingClientRect()
    const linkRect = active.getBoundingClientRect()
    setIndicatorStyle({
      opacity: 1,
      width: linkRect.width,
      left: linkRect.left - navRect.left,
    })
  }, [location.pathname])

  return (
    <header className="site-header">
      <div className="wrap header-row">

        {/* Logo */}
        <Link to="/" className="logo" aria-label="Lern, home" onClick={() => setOpen(false)}>
          <svg viewBox="0 0 460 180" aria-hidden="true">
            <path fill="currentColor" d="M82.82,137.15 L3.88,136.96 L3.49,40.59 L4.08,40.00 L19.36,40.00 L19.94,40.59 L19.94,120.89 L82.82,121.09 L82.82,137.15 Z" />
            <path fill="currentColor" d="M193.68,137.15 L110.83,136.96 L110.83,40.59 L111.42,40.00 L193.29,40.00 L193.88,40.59 L193.68,56.06 L127.08,56.06 L126.50,56.65 L126.50,79.37 L127.08,79.96 L183.10,79.96 L183.69,80.55 L183.10,96.02 L127.08,96.02 L126.50,96.61 L126.50,120.50 L127.08,121.09 L193.68,121.09 L193.68,137.15 Z" />
            <path fill="currentColor" d="M293.97,102.68 L291.23,102.68 L276.53,87.99 L293.58,87.40 L299.06,85.05 L302.00,82.50 L305.13,77.02 L305.92,70.75 L304.35,64.48 L300.63,59.59 L296.71,57.24 L291.62,56.06 L232.07,56.06 L217.77,40.20 L292.79,40.00 L301.80,41.96 L310.03,46.66 L315.71,52.73 L320.02,61.35 L321.19,67.23 L321.19,76.24 L320.41,80.55 L316.88,88.77 L311.20,95.63 L303.76,100.33 L293.97,102.68 Z" />
            <path fill="currentColor" d="M448.31,137.15 L433.82,137.15 L368.40,65.46 L367.42,66.05 L367.42,136.96 L352.53,136.96 L352.73,40.00 L367.22,40.00 L432.25,111.30 L433.23,111.10 L433.23,40.20 L447.92,40.00 L448.51,40.59 L448.31,137.15 Z" />
            <path fill="#F26B21" d="M319.43,137.15 L294.36,137.15 L243.63,87.99 L247.35,87.40 L266.94,87.79 L317.86,134.80 L319.63,136.56 L319.43,137.15 Z" />
          </svg>
        </Link>

        {/* Tubelight nav */}
        <nav className="tl-nav" ref={navRef} aria-label="Main navigation">
          {/* sliding indicator */}
          <span className="tl-indicator" style={indicatorStyle} aria-hidden />
          {NAV_LINKS.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={isActive(link, location.pathname) ? 'tl-active' : ''}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="header-actions">
          <a className="link-plain" href="https://getlern.com" target="_blank" rel="noopener noreferrer">Log in</a>
          <a className="btn btn-primary" href="https://getlern.com" target="_blank" rel="noopener noreferrer">Get started</a>
          <button
            className="menu-toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen(o => !o)}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              {open
                ? <><path d="M4 4l12 12M16 4l-12 12" /></>
                : <><path d="M3 6h14M3 10h14M3 14h14" /></>
              }
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="wrap mobile-panel">
          {NAV_LINKS.map(({ to, label }) => (
            <Link key={to} to={to} onClick={() => setOpen(false)}>{label}</Link>
          ))}
          <div className="mobile-actions">
            <a className="link-plain" href="https://getlern.com" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>Log in</a>
            <a className="btn btn-primary" href="https://getlern.com" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>Get started</a>
          </div>
        </div>
      )}
    </header>
  )
}
