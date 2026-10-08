import { Link } from 'react-router-dom'
import './Legal.css'

export default function Terms() {
  return (
    <div className="legal-page">
      <div className="wrap">
        <Link to="/" className="legal-back">Back to home</Link>

        <div className="legal-doc">
          <h1>Terms of Service</h1>
          <p className="legal-meta">
            IRL Connect Ltd (trading as LERN) · Company No. 17200180 · Version 1.0 · [Date to be confirmed]
          </p>
          <p className="legal-notice">
            These Terms of Service are being drafted with legal advice and will be published
            before LERN enters open availability. If you have any questions in the meantime,
            contact <a href="mailto:hello@lernapp.uk">hello@lernapp.uk</a>.
          </p>

          <h2>1. About these terms</h2>
          <p>[To be completed — will cover: who these terms apply to, when they take effect, the difference between individual users and institutional accounts.]</p>

          <h2>2. Your account</h2>
          <p>[To be completed — will cover: account creation, responsibility for credentials, minimum age requirements, institutional accounts and administrator responsibilities.]</p>

          <h2>3. What LERN provides</h2>
          <p>[To be completed — will cover: the platform and its features, what LERN is responsible for, what LERN is not responsible for, availability and uptime.]</p>

          <h2>4. What you may and may not do</h2>
          <p>[To be completed — will cover: acceptable use, prohibited conduct, content standards, consequences of breach.]</p>

          <h2>5. Content and intellectual property</h2>
          <p>[To be completed — will cover: who owns user-generated content, what licence you grant LERN, LERN's own intellectual property, content you must not upload.]</p>

          <h2>6. Safeguarding obligations</h2>
          <p>[To be completed — will cover: institutional obligations where the platform is used with under-18s, compliance with KCSIE, DSL registration requirements.]</p>

          <h2>7. Data and privacy</h2>
          <p>[To be completed — will cover: reference to the Privacy Notice and Data Processing Schedule, data controller / processor responsibilities, international transfers.]</p>

          <h2>8. Payments and refunds</h2>
          <p>[To be completed — will cover: subscription fees, invoicing, payment terms, what happens if payment fails, refund policy.]</p>

          <h2>9. Termination</h2>
          <p>[To be completed — will cover: how either party may end the agreement, what happens to data on termination, notice periods.]</p>

          <h2>10. Liability</h2>
          <p>[To be completed — will cover: limitation of liability, exclusions, indemnity. Subject to legal review.]</p>

          <h2>11. Governing law</h2>
          <p>[To be completed — will cover: jurisdiction (England and Wales), dispute resolution process.]</p>

          <h2>12. Changes to these terms</h2>
          <p>[To be completed — will cover: how we notify you of changes, what constitutes acceptance of new terms.]</p>

          <p className="legal-footer">
            IRL Connect Ltd (trading as LERN) · <a href="mailto:hello@lernapp.uk">hello@lernapp.uk</a> · lernapp.uk
          </p>
        </div>
      </div>
    </div>
  )
}
