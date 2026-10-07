import { Link } from 'react-router-dom'
import './Page.css'

const FEATURES = [
  {
    name: 'Feed',
    icon: <><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></>,
    body: 'A school-wide feed of verified student wins — placements secured, workshops attended, work recognised. Nothing shows until a tutor has reviewed and approved it. Students build a real record; the school sees it all.',
  },
  {
    name: 'Review',
    icon: <><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></>,
    body: 'Every submission is checked against criteria you set before it counts as verified. If something is flagged by a student or staff member, it disappears instantly and lands in your review queue. Nothing slips through unnoticed.',
  },
  {
    name: 'Work Experience',
    icon: <><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></>,
    body: "Track every student's placement — where they are, whether they've arrived each day, what the employer said at sign-off. No more chasing teachers for updates or reconstructing records after the fact.",
  },
  {
    name: 'Briefs & Workshops',
    icon: <><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></>,
    body: "Set a real project brief with clear criteria and assign it to a year group, a class, or the whole school. Run live workshops students join directly from their dashboard — attendance is logged automatically.",
  },
  {
    name: 'Students',
    icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>,
    body: "One view per student: every piece of verified work, every placement, every workshop attended, every application made. The careers lead, the tutor, and the safeguarding lead all see the same record.",
  },
  {
    name: 'Guest invite',
    icon: <><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></>,
    body: "When an employer wants to see a specific student's work, you invite them to that one profile — no account, no access to anyone else, no way to contact the student directly. You stay in control.",
  },
  {
    name: 'Job tracking',
    icon: <><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></>,
    body: "Follow every student from first interest through to application, interview, and hired — all logged in one place. When Ofsted or a governor asks about destinations data, you have it.",
  },
  {
    name: 'Dashboard',
    icon: <><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></>,
    body: 'What needs review, what is overdue, which students have not logged anything this term — your safeguarding lead and careers lead see it at a glance. Every action is timestamped and kept.',
  },
]

export default function Institutions() {
  return (
    <main className="lpage">
      <section className="lpage-hero">
        <div className="wrap">
          <p className="eyebrow-plain">Schools · Colleges · Sixth forms</p>
          <h1>One platform for the whole school.</h1>
          <p className="hero-sub">
            Verified student work, attendance, and Work Experience — logged, reviewed,
            and safely shared, without the admin overhead.
          </p>
          <div className="hero-actions">
            <a href="mailto:alieu@joinirl.co.uk" className="btn btn-primary-lg">Set up your school or college</a>
            <Link to="/pricing" className="link-accent">See pricing</Link>
          </div>
        </div>
      </section>

      <section className="lsection">
        <div className="wrap">
          <div className="story-card">
            <p>
              Most schools manage Work Experience through spreadsheets, email chains and
              paper forms. Student portfolios — if they exist at all — live in scattered
              folders with no standard format. Employers are contacted ad hoc by individual
              teachers, with no shared record of what was agreed or what happened.
              Safeguarding checks happen offline, if they happen at all.
            </p>
            <p>
              LERN replaces all of that. One platform the whole school uses — for verified
              student work, placement tracking, employer relationships, and careers
              activity — with safeguarding built into how every feature works, not added
              as an afterthought.
            </p>
            <p className="story-quote">
              Students join free. Every member of staff gets a seat. You pay one flat
              annual fee based on the size of your school.
            </p>
          </div>
        </div>
      </section>

      <section className="lsection lsection-steps">
        <div className="wrap">
          <h2 className="section-h">How it fits your school</h2>
          <div className="how-steps">
            <div className="how-step">
              <span className="how-step-n">1</span>
              <div>
                <strong>You set up your school's space.</strong>
                <p>We configure your institution, import your student roster, and brief your staff. Most schools are live within a week.</p>
              </div>
            </div>
            <div className="how-step">
              <span className="how-step-n">2</span>
              <div>
                <strong>Students join free and start logging work.</strong>
                <p>Each submission goes to a tutor's review queue before it becomes verified. Nothing is public until a member of staff has checked it.</p>
              </div>
            </div>
            <div className="how-step">
              <span className="how-step-n">3</span>
              <div>
                <strong>Employers are invited through the school, never around it.</strong>
                <p>When a student is ready to share their profile, you send the invite. The employer sees one profile. They have no way to contact the student directly.</p>
              </div>
            </div>
            <div className="how-step">
              <span className="how-step-n">4</span>
              <div>
                <strong>Your safeguarding lead has a complete log.</strong>
                <p>Every review, every flag, every employer interaction — timestamped and visible to whoever needs to see it, for as long as you need to keep it.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="lsection">
        <div className="wrap">
          <div className="section-head">
            <h2 className="section-h">What's included</h2>
          </div>
          <div className="features-grid">
            {FEATURES.map((f) => (
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

          <p className="inline-note">
            Safeguarding is the architecture, not a setting. Under-18s are never publicly
            searchable, there is no direct employer contact, and every piece of work is
            checked by a person before it counts. The dashboard logs everything so your
            designated safeguarding lead is never working from memory.
          </p>
        </div>
      </section>

      <section className="page-cta">
        <div className="wrap">
          <h2>Set up your school or college.</h2>
          <p>
            Email us and we'll have your institution's private LERN space ready. Students
            join free. You pay a simple flat annual fee based on size — from £2,000/year.
          </p>
          <div className="cta-actions">
            <a href="mailto:alieu@joinirl.co.uk" className="btn btn-primary-lg">Get in touch</a>
            <Link to="/pricing" className="link-accent">See pricing</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
