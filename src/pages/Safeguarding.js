import { Link } from 'react-router-dom'
import './Page.css'
import './Safeguarding.css'

const PROMISES = [
  "Under-18s are never publicly searchable, and can't be found by name.",
  "No direct contact between employers and under-18s, ever — all interest is routed through the institution.",
  "Reactions only — no open comments, no direct messaging between students.",
  "Every reported post is hidden while it's reviewed, and a person always decides what happens next — nothing is auto-removed.",
  "Every employer is checked — company registration, a genuine business email and website, and confirmation they're really who they say they are — before they get any access.",
  "Data is held in the UK, with access limited to named individuals.",
]

const INSTITUTION_DUTIES = [
  'Naming a safeguarding lead.',
  'Managing consent and access for their own students.',
  "Following their own safeguarding duties, as they already do today.",
]

export default function Safeguarding() {
  return (
    <main className="lpage">
      <section className="lpage-hero">
        <div className="wrap">
          <p className="eyebrow-plain">Safeguarding</p>
          <h1>Safety isn't a feature we added. It's how LERN was built.</h1>
          <p className="hero-sub">
            Young people using LERN are often under 18, so safeguarding sits at the centre
            of every decision we make — not an afterthought bolted on at the end.
          </p>
          <div className="hero-actions">
            <a href="mailto:alieu@joinirl.co.uk" className="btn btn-primary-lg">Speak to us about safeguarding</a>
          </div>
        </div>
      </section>

      <section className="lsection">
        <div className="wrap">
          <div className="section-head">
            <h2>What we promise</h2>
          </div>
          <div className="sg-points">
            {PROMISES.map((p) => (
              <div key={p} className="sg-point">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                  <path d="M4 12l6 6L20 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="lsection" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="story-card">
            <h3 style={{ fontSize: '20px', marginBottom: '20px' }}>What institutions are responsible for</h3>
            <div className="sg-points">
              {INSTITUTION_DUTIES.map((d) => (
                <div key={d} className="sg-point">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                    <path d="M4 12l6 6L20 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p>{d}</p>
                </div>
              ))}
            </div>
            <p style={{ marginTop: '28px', fontSize: '15px', color: 'var(--ink-soft)', lineHeight: '1.6' }}>
              Have a safeguarding concern?{' '}
              <a href="mailto:alieu@joinirl.co.uk" className="link-accent">Contact us</a>
            </p>
            <p style={{ marginTop: '12px', fontSize: '15px', color: 'var(--ink-soft)', lineHeight: '1.6' }}>
              For the full detail, read our{' '}
              <a href="mailto:alieu@joinirl.co.uk?subject=Safeguarding+Position+Request" className="link-accent">Safeguarding Position</a>
              {' '}and{' '}
              <Link to="/privacy" className="link-accent">Data Protection Policy</Link>.
            </p>
          </div>
        </div>
      </section>

      <section className="page-cta">
        <div className="wrap">
          <h2>Questions from your DSL or headteacher?</h2>
          <p>
            We're happy to speak with your designated safeguarding lead before your school
            joins. We take these conversations seriously and take as long as you need.
          </p>
          <div className="cta-actions">
            <a href="mailto:alieu@joinirl.co.uk" className="btn btn-primary-lg">alieu@joinirl.co.uk</a>
            <Link to="/schools" className="link-accent">For schools and colleges</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
