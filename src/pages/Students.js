import { Link } from 'react-router-dom'
import './Page.css'
import './Students.css'

// Rebuilt on the same page system every other page already uses
// (lpage-hero / feature cards / story-card / page-cta) -- the
// previous version referenced .blob/.g-card/.tilt-wrap/.sp classes
// that were never actually defined anywhere in the codebase, so it
// rendered as unstyled, stacked text. Content kept, layout fixed.
const WHAT_YOU_CAN_DO = [
  {
    name: 'Learn live',
    icon: <><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></>,
    body: 'Real courses and workshops from people who do the job. Not pre-recorded videos, not a PDF to skim — live, with questions, feedback, and real interaction.',
  },
  {
    name: 'Build a verified profile',
    icon: <><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></>,
    body: 'Proof of what you can actually do. A professional reviews your project work and verifies it on your LERN profile. That mark means something.',
  },
  {
    name: 'Get interview practice',
    icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>,
    body: "With real hiring managers, not an AI and not a friend pretending. The kind of practice most people only get if they already know someone.",
  },
  {
    name: 'Get found by employers',
    icon: <><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></>,
    body: "Employers browse your profile and reach out. If you're under 18, that goes safely through your school or college first — you stay in control.",
  },
  {
    name: 'Track your applications',
    icon: <><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></>,
    body: 'See where every application went and get real feedback, so you keep improving instead of being met with silence.',
  },
]

export default function Students() {
  return (
    <main className="lpage">
      <section className="lpage-hero students-hero">
        <div className="wrap">
          <p className="eyebrow-plain">Free to join · Always free</p>
          <h1>Show what you can do. Get found by the people who hire.</h1>
          <p className="hero-sub">
            You don't need the right contacts or a perfect CV. On LERN, you learn live from
            real professionals, build a profile of real work that gets verified, and
            employers come to you.
          </p>
          <div className="hero-actions">
            <a href="https://lernapp.uk" target="_blank" rel="noopener noreferrer" className="btn btn-primary-lg">Sign up free →</a>
            <Link to="/institutions" className="link-accent">For your school</Link>
          </div>
        </div>
      </section>

      {/* ── What you can do ── */}
      <section className="lsection">
        <div className="wrap">
          <div className="section-head" style={{ textAlign: 'center', margin: '0 auto 48px', maxWidth: '60ch' }}>
            <p className="eyebrow-plain">What you can do</p>
            <h2>Your work is what gets you hired. LERN makes it visible.</h2>
          </div>
          <div className="features-grid">
            {WHAT_YOU_CAN_DO.map((f) => (
              <article key={f.name} className="feature-card lcard">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    {f.icon}
                  </svg>
                </div>
                <h3>{f.name}</h3>
                <p>{f.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Free, always ── */}
      <section className="lsection">
        <div className="wrap">
          <div className="story-card">
            <p>
              Everything on LERN that a young person needs — every live course, every
              verified profile, every employer connection, every interview practice session —
              is free. Not free for 30 days, not free with a catch. Free, because that's the
              only way this works for the people it was built for.
            </p>
            <p className="story-quote">
              "You don't need the right contacts. You just need somewhere to show what you
              can do."
            </p>
          </div>
        </div>
      </section>

      <section className="page-cta">
        <div className="wrap">
          <h2>Your profile is waiting. Start building it today.</h2>
          <p>
            Sign up free. Attend your first live session. Build something real.
            Let employers find you.
          </p>
          <div className="cta-actions">
            <a href="https://lernapp.uk" target="_blank" rel="noopener noreferrer" className="btn btn-primary-lg">Sign up free →</a>
            <Link to="/institutions" className="link-accent">For your school</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
