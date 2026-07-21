import React from 'react'
import { Link } from 'react-router-dom'
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
            <a href="/academy">Instructor</a>
            <a href="#about">About</a>
          </div>
          <div className="footer-section">
            <h4>Follow Us</h4>
            <a href="https://www.instagram.com/lern_alieu" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 IRL CONNECT LTD. All rights reserved.</p>
          <p className="footer-legal">
            <Link to="/privacy">Privacy Policy</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}