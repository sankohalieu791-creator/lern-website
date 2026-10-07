import { Link } from 'react-router-dom'
import './Page.css'

export default function NotFound() {
  return (
    <main className="page-main lsection">
      <div className="wrap" style={{ textAlign: 'center', maxWidth: 560, margin: '0 auto' }}>
        <p className="eyebrow-plain">404</p>
        <h1 style={{ fontSize: 'clamp(36px,5vw,56px)', letterSpacing: '-0.03em', marginBottom: 20 }}>
          Page not found.
        </h1>
        <p style={{ fontSize: 17, color: 'var(--ink-soft)', lineHeight: 1.65, marginBottom: 40 }}>
          This page doesn't exist or may have moved. Head back to the homepage
          and you'll find what you're looking for.
        </p>
        <Link to="/" className="btn btn-primary-lg">Back to home</Link>
      </div>
    </main>
  )
}
