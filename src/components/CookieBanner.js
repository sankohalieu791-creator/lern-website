import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './CookieBanner.css'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      if (!localStorage.getItem('lern_cookie_consent')) {
        const timer = setTimeout(() => setVisible(true), 800)
        return () => clearTimeout(timer)
      }
    } catch (e) {}
  }, [])

  const accept = () => {
    try { localStorage.setItem('lern_cookie_consent', 'accepted') } catch (e) {}
    setVisible(false)
  }

  const decline = () => {
    try { localStorage.setItem('lern_cookie_consent', 'declined') } catch (e) {}
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="cookie-banner" role="dialog" aria-label="Cookie consent" aria-live="polite">
      <div className="cookie-inner">
        <p className="cookie-text">
          We use cookies to understand how people use LERN and to improve the site.
          We never sell your data.{' '}
          <Link to="/cookies" className="cookie-link">Cookie policy</Link>
        </p>
        <div className="cookie-actions">
          <button className="cookie-accept" onClick={accept}>Accept</button>
          <button className="cookie-decline" onClick={decline}>Decline</button>
        </div>
      </div>
    </div>
  )
}
