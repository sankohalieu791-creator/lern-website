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
            <p>Training and jobs young people can't get anywhere else.</p>
          </div>
          <div className="footer-section">
            <h4>Platform</h4>
            <Link to="/institutions">Institutions</Link>
            <Link to="/employers">Employers</Link>
            <Link to="/students">Students</Link>
            <Link to="/instructors">Instructors</Link>
          </div>
          <div className="footer-section">
            <h4>Company</h4>
            <Link to="/about">About</Link>
            <a href="mailto:alieu@joinirl.co.uk">Contact</a>
          </div>
          <div className="footer-section">
            <h4>Follow us</h4>
            <a href="https://www.instagram.com/lern_alieu" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 IRL Connect Ltd. All rights reserved.</p>
          <p className="footer-legal">
            <Link to="/privacy">Privacy Policy</Link>
            {' · '}
            <Link to="/cookies">Cookie Policy</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
