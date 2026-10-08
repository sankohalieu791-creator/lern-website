import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AppPreview from '../components/AppPreview'
import './Home.css'

/* ── iPhone 15 Pro mockup — ported from 21st.dev ── */
const IPHONE_SCALE = 0.60
const SPEC = { w: 393, h: 852, radius: 56, bezel: 12, topSafe: 59, bottomSafe: 34 }
const ISLAND = { w: 126, h: 37, r: 20 }

function shadeHex(hex, pct) {
  const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex.trim())
  if (!m) return hex
  const [r, g, b] = [parseInt(m[1], 16), parseInt(m[2], 16), parseInt(m[3], 16)]
  const k = (100 + pct) / 100
  const c = v => Math.max(0, Math.min(255, Math.round(v * k)))
  return `#${c(r).toString(16).padStart(2,'0')}${c(g).toString(16).padStart(2,'0')}${c(b).toString(16).padStart(2,'0')}`
}

const SIGNUP_OPTIONS = [
  {
    id: 'young',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
    iconBg: '#FFF0E6', iconColor: '#C94D10',
    title: "I'm a young person",
    desc: "Join with a secure code from your school, college, or training provider.",
  },
  {
    id: 'school',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    iconBg: '#E8F0FF', iconColor: '#2B4FA8',
    title: "I'm a school or college",
    desc: "Set up your organisation, track metrics, and invite your students.",
  },
  {
    id: 'provider',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
        <rect x="9" y="3" width="6" height="4" rx="2" />
        <line x1="9" y1="12" x2="15" y2="12" />
        <line x1="9" y1="16" x2="13" y2="16" />
      </svg>
    ),
    iconBg: '#F0EAFF', iconColor: '#6B3FA0',
    title: "I'm a training provider",
    desc: "List specialised courses, upskill learners, and receive direct leads.",
  },
  {
    id: 'employer',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
      </svg>
    ),
    iconBg: '#FFF5E6', iconColor: '#A05C00',
    title: "I'm an employer",
    desc: "Discover verified young talent and post high-intent career opportunities.",
  },
]

function IPhoneMockup() {
  const outerW = SPEC.w + SPEC.bezel * 2
  const outerH = SPEC.h + SPEC.bezel * 2
  const outerR = SPEC.radius + SPEC.bezel
  const hex = '#1c1e22'
  const frameGrad = `linear-gradient(135deg, ${shadeHex(hex,8)} 0%, ${hex} 40%, ${shadeHex(hex,-14)} 100%)`

  return (
    <div style={{ width: outerW * IPHONE_SCALE, height: outerH * IPHONE_SCALE, flexShrink: 0 }}>
      <div style={{ display: 'inline-block', transform: `scale(${IPHONE_SCALE})`, transformOrigin: 'top left' }}>
        <div style={{
          width: outerW, height: outerH, borderRadius: outerR,
          background: frameGrad, padding: SPEC.bezel, boxSizing: 'border-box',
          boxShadow: '0 24px 60px rgba(0,0,0,.22), 0 2px 8px rgba(0,0,0,.14)',
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{
            width: '100%', height: '100%', borderRadius: SPEC.radius,
            position: 'relative', overflow: 'hidden', background: '#FDF8F4',
            boxShadow: 'inset 0 0 0 1px rgba(255,255,255,.03), inset 0 10px 20px rgba(0,0,0,.2)',
          }}>
            <div aria-hidden style={{
              position: 'absolute', top: 12, left: '50%', transform: 'translateX(-50%)',
              width: ISLAND.w, height: ISLAND.h, borderRadius: ISLAND.r,
              background: '#000', zIndex: 2,
            }} />
            <div style={{
              position: 'absolute', top: SPEC.topSafe, bottom: SPEC.bottomSafe,
              left: 0, right: 0, overflow: 'hidden', zIndex: 1,
              display: 'flex', flexDirection: 'column',
            }}>
              <div style={{ height: '100%', background: '#FDF8F4', display: 'flex', flexDirection: 'column', padding: '0 20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 10, paddingBottom: 10 }}>
                  <span style={{ fontSize: 22, fontWeight: 800, letterSpacing: '-0.02em', color: '#111' }}>LERN</span>
                  <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                    <span style={{ fontSize: 16, color: '#999' }}>Help</span>
                    <span style={{ fontSize: 15, fontWeight: 700, color: '#D4551A', border: '1.5px solid #D4551A', borderRadius: 8, padding: '4px 12px' }}>Log in</span>
                  </div>
                </div>
                <div style={{ flex: 1, paddingTop: 4 }}>
                  <h2 style={{ fontSize: 34, fontWeight: 800, color: '#111', letterSpacing: '-0.025em', marginBottom: 10, lineHeight: 1.12 }}>
                    Who's signing up?
                  </h2>
                  <p style={{ fontSize: 16, color: '#777', lineHeight: 1.5, marginBottom: 22 }}>
                    Pick the option that describes you — each one leads somewhere different.
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {SIGNUP_OPTIONS.map(o => (
                      <div key={o.id} style={{
                        display: 'flex', alignItems: 'center', gap: 14,
                        background: '#fff', borderRadius: 16, padding: '13px 14px',
                        boxShadow: '0 1px 4px rgba(0,0,0,.07)',
                      }}>
                        <span style={{
                          width: 48, height: 48, borderRadius: 14, flexShrink: 0,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          background: o.iconBg, color: o.iconColor,
                        }}>
                          <span style={{ width: 24, height: 24, display: 'flex' }}>{o.icon}</span>
                        </span>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <p style={{ fontSize: 15, fontWeight: 700, color: '#111', margin: 0 }}>{o.title}</p>
                          <p style={{ fontSize: 13, color: '#888', margin: 0, lineHeight: 1.4 }}>{o.desc}</p>
                        </div>
                        <span style={{ fontSize: 22, color: '#ddd', lineHeight: 1 }}>›</span>
                      </div>
                    ))}
                  </div>
                  <p style={{ textAlign: 'center', fontSize: 15, color: '#999', marginTop: 20 }}>
                    Already have an account?{' '}
                    <span style={{ color: '#D4551A', fontWeight: 700 }}>Log in</span>
                  </p>
                </div>
              </div>
            </div>
            <div aria-hidden style={{
              position: 'absolute', bottom: 8, left: '50%', transform: 'translateX(-50%)',
              width: 134, height: 5, borderRadius: 3,
              background: 'rgba(0,0,0,.18)', opacity: .9, zIndex: 3, pointerEvents: 'none',
            }} />
          </div>
        </div>
      </div>
    </div>
  )
}

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
            <AppPreview />
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

      {/* ── IPHONE SHOWCASE ── */}
      <section className="hp-phone lsection">
        <div className="wrap hp-phone-wrap">
          <IPhoneMockup />
          <div className="hp-phone-copy">
            <p className="eyebrow-plain">One app, four roles</p>
            <h2 className="hp-phone-h2">Everyone's invited.<br />Nobody's exposed.</h2>
            <p className="hp-phone-body">
              Young people build a verified portfolio of real work. Schools manage
              placements and safeguarding from one dashboard. Training providers get
              funder-ready evidence automatically. Employers browse and hire safely —
              with the school as the gateway throughout.
            </p>
            <div className="hp-btns">
              <a href="mailto:hello@lernapp.uk" className="btn btn-primary">Get in touch</a>
              <Link to="/pricing" className="link-plain">See pricing →</Link>
            </div>
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
