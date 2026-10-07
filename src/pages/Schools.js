import { Link } from 'react-router-dom'
import './Page.css'

const FEATURES = [
  { name: 'Feed', body: 'a safe space where students share achievements, positive reactions only, no direct contact' },
  { name: 'Review', body: "your staff verify their own students' work" },
  { name: 'Students, attendance and guest invite', body: 'a roster, an attendance register, and a way to invite one employer to see a chosen student\'s verified work' },
  { name: 'Briefs', body: 'set new project work, or verify work students already do' },
  { name: 'Workshops', body: 'online and in-person sessions' },
  { name: 'Interest received', body: 'employer interest in a named student, routed to you to accept or decline, never sent to the student directly' },
  { name: 'Job tracking', body: "follow students' applications through stages" },
  { name: 'Dashboard', body: 'activity and outcomes at a glance' },
]

export default function Schools() {
  return (
    <main className="lpage">
      <section className="lpage-hero">
        <div className="wrap">
          <p className="eyebrow-plain">Schools · Colleges · Sixth forms</p>
          <h1>Turn everyday student work into proof that gets them seen.</h1>
          <p className="hero-sub">
            Your students are already doing real work — projects, coursework, work experience.
            LERN turns it into verified, lasting proof, with no extra marking for your staff.
          </p>
          <div className="hero-actions">
            <a href="mailto:alieu@joinirl.co.uk" className="btn btn-primary-lg">Talk to us</a>
            <Link to="/employers" className="link-accent">For employers</Link>
          </div>
        </div>
      </section>

      <section className="lsection">
        <div className="wrap">
          <div className="story-card featured-callout">
            <h3>Work Experience, organised.</h3>
            <p>
              See at a glance which students have a placement, who still needs one, and their
              attendance while there — all in one view per year group.
            </p>
          </div>

          <p className="features-section-label">Everything else you get</p>
          <ul className="feature-list">
            {FEATURES.map((f) => (
              <li key={f.name}><strong>{f.name}</strong> — {f.body}</li>
            ))}
          </ul>

          <p className="inline-note">
            Safeguarding is built in from the start. Under-18s are never publicly searchable,
            there's no direct contact with employers, and every interest routes through you.
          </p>
        </div>
      </section>

      <section className="page-cta">
        <div className="wrap">
          <h2>Bring your students on.</h2>
          <p>
            Email us and we'll set up your institution's private LERN space. Students join
            free. You pay a simple flat fee based on size, with no per-student cost.
          </p>
          <div className="cta-actions">
            <a href="mailto:alieu@joinirl.co.uk" className="btn btn-primary-lg">Talk to us</a>
            <Link to="/employers" className="link-accent">For employers</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
