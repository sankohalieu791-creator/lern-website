import { Link } from 'react-router-dom'
import './Page.css'

const FEATURES = [
  {
    name: 'Bootcamp Evidence',
    icon: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></>,
    body: 'Attendance per session, course completion status, and interview stage — compiled automatically from what you are already recording, into one exportable record per learner, per cohort. No double entry. No manual reports before your next funder review.',
  },
  {
    name: 'Feed & Review',
    icon: <><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></>,
    body: 'The same verified-work pipeline as schools, built for cohort-based training. Every submission is checked by a tutor before it appears anywhere. Learners build a public-facing record that employers can actually trust.',
  },
  {
    name: 'Courses',
    icon: <><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></>,
    body: "Build a structured course with real criteria — not a checklist, but a set of standards work is measured against. Assign it to a cohort and LERN tracks every learner's progress automatically from there.",
  },
  {
    name: 'Students',
    icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>,
    body: 'Your full learner roster in one view: verified work, attendance across every session, progress against your course criteria, and application history. Nothing stored in separate sheets, nothing reconstructed at the end of a cohort.',
  },
  {
    name: 'Guest invite',
    icon: <><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></>,
    body: "When a learner is ready to share their profile with a potential employer, you send the invite. The employer sees that one learner's verified work — no account needed, no access to the rest of your cohort. You stay in control of who sees what.",
  },
  {
    name: 'Workshops',
    icon: <><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></>,
    body: 'Run online and in-person sessions that learners join directly from their LERN dashboard. Attendance is logged the moment they join — no manual registers, no retrospective data entry.',
  },
  {
    name: 'Job tracking',
    icon: <><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></>,
    body: "Follow every learner from first application through to interview, offer, and hired. Outcomes are logged with dates — so when a funder asks for employment rates three months after a cohort ends, you're not guessing.",
  },
  {
    name: 'Dashboard',
    icon: <><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></>,
    body: 'Active cohorts, what needs review, which learners are behind, and what has happened this week — in one live view. Your programme manager and your tutors see the same thing.',
  },
]

export default function TrainingProviders() {
  return (
    <main className="lpage">
      <section className="lpage-hero">
        <div className="wrap">
          <p className="eyebrow-plain">Training providers · Bootcamps · Employment programmes</p>
          <h1>Everything a school gets, plus the evidence funders ask for.</h1>
          <p className="hero-sub">
            Attendance, course completion, and interview outcomes — compiled automatically
            from work you're already recording, ready to export when a funder needs it.
          </p>
          <div className="hero-actions">
            <a href="mailto:alieu@joinirl.co.uk" className="btn btn-primary-lg">Set up your organisation</a>
            <Link to="/pricing" className="link-accent">See pricing</Link>
          </div>
        </div>
      </section>

      <section className="lsection">
        <div className="wrap">
          <div className="story-card">
            <p>
              Training providers — bootcamps, employment programmes, Skills Bootcamps,
              adult education providers — face a version of the same problem as schools,
              with one extra layer: funders want evidence. Attendance records, completion
              rates, employment outcomes, often within tight reporting windows.
            </p>
            <p>
              Most providers manage this across a combination of spreadsheets, registers,
              email threads and CRM notes. Learner portfolios are held in one system,
              attendance in another, job outcomes sometimes not captured at all until
              a report is due.
            </p>
            <p>
              LERN pulls it together. Learners log and verify their work through the same
              platform your tutors use to track attendance and progress. The Bootcamp
              Evidence add-on compiles that data into the format funders ask for — per
              learner, per cohort, exportable at any point.
            </p>
            <p className="story-quote">
              The evidence is a side effect of the platform working, not an extra job
              you do at the end of every cohort.
            </p>
          </div>
        </div>
      </section>

      <section className="lsection lsection-steps">
        <div className="wrap">
          <h2 className="section-h">How it fits your programme</h2>
          <div className="how-steps">
            <div className="how-step">
              <span className="how-step-n">1</span>
              <div>
                <strong>Set up your course with your own criteria.</strong>
                <p>Build the structure of your programme on LERN — sessions, projects, and the standards learners need to meet. We configure this with you before your next cohort starts.</p>
              </div>
            </div>
            <div className="how-step">
              <span className="how-step-n">2</span>
              <div>
                <strong>Learners join and start building their verified record.</strong>
                <p>Each learner gets a LERN profile — free. As they attend sessions, complete projects and apply for roles, it all feeds into one verified timeline tutors have already reviewed.</p>
              </div>
            </div>
            <div className="how-step">
              <span className="how-step-n">3</span>
              <div>
                <strong>Employers are invited in for specific learners, not the whole cohort.</strong>
                <p>When a learner is ready, you send a guest invite. The employer sees that one profile — verified, checked, presented well — and can express interest back through you.</p>
              </div>
            </div>
            <div className="how-step">
              <span className="how-step-n">4</span>
              <div>
                <strong>Export your evidence when it is needed.</strong>
                <p>The Bootcamp Evidence add-on compiles attendance, completions, and employment outcomes per cohort. Your programme manager can export at any point — no retrospective data collection before each funder review.</p>
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
            The Bootcamp Evidence add-on supports your own funding evidence process — it
            does not replace what your specific funder requires. Always confirm acceptable
            formats with your local authority or funding body before your reporting window.
            We'll work with you to get the export format right.
          </p>
        </div>
      </section>

      <section className="page-cta">
        <div className="wrap">
          <h2>Set up your organisation.</h2>
          <p>
            Email us and we'll have a conversation about your cohort size, your programme
            structure, and what your funders ask for. Pricing starts from £70 per learner
            per year, with flat-rate bands above 100 learners.
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
