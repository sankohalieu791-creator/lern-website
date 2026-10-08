import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PlatformDemo from '../components/PlatformDemo'
import { HOME_BEATS, INSTITUTION_NAV } from '../components/demoScripts'
import './Home.css'

/* ── MacBook Neo–style step cards ── */
const STEPS = [
  {
    color: '#ff9f3a', num: '01', total: '04',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: 'Schools & Colleges',
    description: "Track every student's verified work, manage placements, and report on engagement — all from one dashboard.",
    label: 'Institutions',
    link: '/institutions',
  },
  {
    color: '#ff6f9c', num: '02', total: '04',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
        <rect x="9" y="3" width="6" height="4" rx="2" />
        <line x1="9" y1="12" x2="15" y2="12" />
        <line x1="9" y1="16" x2="13" y2="16" />
      </svg>
    ),
    title: 'Training Providers',
    description: 'List specialised courses, collect Bootcamp Evidence automatically, and prove impact to funders — no extra admin.',
    label: 'Providers',
    link: '/training-providers',
  },
  {
    color: '#5e9bff', num: '03', total: '04',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
      </svg>
    ),
    title: 'Employers',
    description: 'Browse genuinely verified young talent. Post opportunities and hire safely — with the school as the gateway, every time.',
    label: 'Employers',
    link: '/employers',
  },
  {
    color: '#a37bff', num: '04', total: '04',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
    title: 'Young People',
    description: 'Build a verified portfolio of real work. Every project, placement and skill — checked by a tutor before it counts.',
    label: 'Students',
    link: '/how-it-works',
  },
]

function StepCard({ step, index }) {
  const ref = useRef(null)
  const [vis, setVis] = useState(false)

  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVis(true) },
      { threshold: 0.18 }
    )
    if (ref.current) io.observe(ref.current)
    return () => io.disconnect()
  }, [])

  return (
    <Link
      to={step.link}
      ref={ref}
      className={`step-card${vis ? ' step-vis' : ''}`}
      style={{ '--c': step.color, transitionDelay: `${index * 0.11}s` }}
    >
      <span className="step-glow" aria-hidden />
      <div className="step-head">
        <span className="step-num"><strong>{step.num}</strong> / {step.total}</span>
        <span className="step-icon" style={{ color: step.color }}>{step.icon}</span>
      </div>
      <h3 className="step-title">{step.title}</h3>
      <p className="step-desc">{step.description}</p>
      <span className="step-label">{step.label}</span>
    </Link>
  )
}

export default function Home() {
  return (
    <main className="home-page">

      {/* ── HERO ── */}
      <section className="hp-hero">
        <div className="wrap hp-hero-inner">
          <p className="hp-eyebrow">Verified · Trusted · Safe</p>
          <h1 className="hp-h1">Work that follows you.</h1>
          <p className="hp-sub">
            LERN connects schools, colleges, training providers and employers
            around real work — properly checked and safely shared.
          </p>
          <div className="hp-btns">
            <a href="https://getlern.com" target="_blank" rel="noopener noreferrer" className="btn-glass btn-glass-lg">
              Get started — it's free
            </a>
            <a href="https://getlern.com" target="_blank" rel="noopener noreferrer" className="btn-glass btn-glass-lg">
              See how it works
            </a>
          </div>
          <div className="hp-hero-preview">
            <PlatformDemo beats={HOME_BEATS} navItems={INSTITUTION_NAV} />
          </div>
        </div>
      </section>

      {/* ── STEP CARDS ── */}
      <section className="hp-steps lsection">
        <div className="wrap">
          <p className="eyebrow-plain" style={{ textAlign: 'center' }}>One platform</p>
          <h2 className="hp-steps-h2" style={{ textAlign: 'center', maxWidth: '100%' }}>Built for everyone in the loop.</h2>
          <div className="hp-steps-grid">
            {STEPS.map((s, i) => <StepCard key={s.num} step={s} index={i} />)}
          </div>
        </div>
      </section>

      {/* ── SAFEGUARDING ── */}
      <section className="hp-safe lsection">
        <div className="wrap hp-safe-wrap">
          <div>
            <h2 className="hp-safe-h2">Safety isn't a setting.<br />It's the architecture.</h2>
            <p className="hp-safe-sub">
              Under-18 protections are built into the platform — not configured by whoever
              is using it, not something that can be switched off.
            </p>
            <Link to="/safeguarding" className="link-accent">
              Read our safeguarding approach →
            </Link>
          </div>
          <ul className="hp-safe-list">
            {[
              'No employer ever contacts a young person directly — every message goes through the school first.',
              "Nothing appears on a student's profile until a real tutor has checked and verified it.",
              'Under-18s are never publicly searchable by name, age, or any personal detail.',
              'Every reported post is hidden immediately and reviewed by a person.',
            ].map(pt => (
              <li key={pt} className="hp-safe-item">
                <span className="hp-safe-check" aria-hidden>
                  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 10l4 4 8-8" />
                  </svg>
                </span>
                {pt}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="hp-cta lsection">
        <div className="wrap hp-cta-inner">
          <h2 className="hp-cta-h2">Ready to get started?</h2>
          <p className="hp-cta-sub">Join schools, colleges, training providers and employers already on LERN.</p>
          <div className="hp-btns" style={{ justifyContent: 'center' }}>
            <a href="mailto:hello@lernapp.uk" className="btn btn-primary-lg">Get in touch</a>
            <Link to="/pricing" className="link-plain">See pricing →</Link>
          </div>
        </div>
      </section>

    </main>
  )
}
