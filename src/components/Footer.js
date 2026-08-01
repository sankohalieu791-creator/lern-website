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
            <p>Proof of what young people can actually do.</p>
            <p style={{ marginTop: '0.5rem', fontSize: '0.85rem', opacity: 0.75 }}>Free for schools, colleges and students. Always.</p>
          </div>
          <div className="footer-section">
            <h4>For</h4>
            <Link to="/institutions">Institutions</Link>
            <Link to="/employers">Employers</Link>
            <Link to="/training-providers">Training providers</Link>
            <Link to="/organisations">Organisations</Link>
            <Link to="/students">Students</Link>
          </div>
          <div className="footer-section">
            <h4>Company</h4>
            <Link to="/about">About</Link>
            <a href="mailto:alieu@joinirl.co.uk">Contact</a>
            <a href="https://www.instagram.com/lern_alieu" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
          <div className="footer-section">
            <h4>Get started</h4>
            <a href="https://lernapp.uk" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ display: 'inline-block', marginBottom: '0.75rem' }}>Sign up →</a>
            <p style={{ fontSize: '0.82rem', color: 'inherit', opacity: 0.7 }}>join.lernapp.uk</p>
            <a href="mailto:alieu@joinirl.co.uk" style={{ fontSize: '0.82rem' }}>alieu@joinirl.co.uk</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>IRL Connect Ltd · Company No. 17200180</p>
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
