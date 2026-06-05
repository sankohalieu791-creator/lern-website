import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>LERN</h3>
            <p>Learn. Connect. Earn.</p>
          </div>
          <div className="footer-section">
            <h4>Product</h4>
            <a href="#explore">Explore</a>
            <a href="#academy">Academy</a>
            <a href="#about">About</a>
          </div>
          <div className="footer-section">
            <h4>Community</h4>
            <a href="#discord">Discord</a>
            <a href="#twitter">Twitter</a>
            <a href="#instagram">Instagram</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 IRL CONNECT LTD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}