import { Link } from 'react-router-dom'
import './Page.css'

const FEATURES = [
  {
    name: 'Discover',
    icon: <><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></>,
    body: "Browse verified student and learner work before a CV is ever involved. Every profile has been reviewed by a real tutor — you're not looking at self-reported achievements, you're looking at evidence someone has already checked.",
  },
  {
    name: 'Jobs',
    icon: <><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></>,
    body: "Post a role and manage every applicant from one place. Each candidate moves through your pipeline — Applied, Reviewing, Shortlisted, Interview, Offer, Hired — and every stage is logged with a date. Nothing gets lost in an inbox.",
  },
  {
    name: 'Candidates',
    icon: <><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></>,
    body: "One pipeline across every role you're hiring for. Move candidates between stages with a click. Leave notes visible to your whole team. Everything stays in one place from the moment someone applies to the moment you decide.",
  },
  {
    name: 'Talent pools',
    icon: <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>,
    body: "Save a candidate you like but aren't ready to hire yet. LERN keeps them warm automatically — a check-in message, a relevant workshop invite, a profile update prompt — on a cadence you set. You stay front of mind without any ongoing effort from your team.",
  },
  {
    name: 'Inbox',
    icon: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>,
    body: "All conversations with a candidate's school or training provider are in one place. There is no direct line to the young person — interest always routes through the institution first. That means the school can verify your enquiry, the student is protected, and you have a paper trail.",
  },
  {
    name: 'Partners',
    icon: <><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></>,
    body: "See every school and training provider you've worked with, how many students you've reached through each relationship, and how many you've hired. Over time, LERN helps you understand which institutional partnerships actually turn into hires — so you can invest in them.",
  },
]

export default function Employers() {
  return (
    <main className="lpage">
      <section className="lpage-hero">
        <div className="wrap">
          <p className="eyebrow-plain">Employers · Hiring managers · Talent teams</p>
          <h1>Hire from genuinely verified work — safely.</h1>
          <p className="hero-sub">
            Browse real, checked student work before any CV is involved. Every employer
            account is verified before you see a single profile. Under-18s are never
            contacted directly — everything routes through their school first.
          </p>
          <div className="hero-actions">
            <a href="mailto:hello@lernapp.uk" className="btn btn-primary-lg">Start hiring safely</a>
            <Link to="/pricing" className="link-accent">See pricing</Link>
          </div>
        </div>
      </section>

      <section className="lsection">
        <div className="wrap">
          <div className="story-card">
            <p>
              Building a pipeline of young talent is slow. Getting into schools takes
              months — introductions, visits, careers fairs, agreements with senior staff.
              When you do get access, the CVs you receive are mostly identical, and it is
              almost impossible to tell who has actually done anything from who has simply
              written it down.
            </p>
            <p>
              LERN gives employers direct access to verified work — projects, placements,
              workshops — that tutors have already checked and signed off. You can browse
              profiles before a CV is written. You see what students have actually done,
              not what they say they have done.
            </p>
            <p>
              Every employer account goes through a verification check before access is
              granted — company registration, a genuine business email, confirmation the
              company is real. And every interaction with a young person is routed through
              their school. You are never in direct contact with an under-18.
            </p>
            <p className="story-quote">
              You are not just accessing talent — you are building a relationship with the
              schools and providers who produce it. That is how a long-term pipeline works.
            </p>
          </div>
        </div>
      </section>

      <section className="lsection lsection-steps">
        <div className="wrap">
          <h2 className="section-h">How it works for your team</h2>
          <div className="how-steps">
            <div className="how-step">
              <span className="how-step-n">1</span>
              <div>
                <strong>Your account is verified before you see anything.</strong>
                <p>We check your company registration and business email. Once verified, your team can browse student profiles and post roles. No shortcuts — this is what keeps the platform trustworthy for schools.</p>
              </div>
            </div>
            <div className="how-step">
              <span className="how-step-n">2</span>
              <div>
                <strong>Browse verified work before the CV stage.</strong>
                <p>Filter by location, skill, or type of experience. Every profile you see has been reviewed by a tutor. You are looking at a real record, not a polished self-description.</p>
              </div>
            </div>
            <div className="how-step">
              <span className="how-step-n">3</span>
              <div>
                <strong>Express interest through the school.</strong>
                <p>When you want to reach a student, the message goes to their school first. The institution reviews it, passes it on if appropriate, and the student decides. You never contact them directly.</p>
              </div>
            </div>
            <div className="how-step">
              <span className="how-step-n">4</span>
              <div>
                <strong>Build relationships that keep producing candidates.</strong>
                <p>Every school you work with becomes a partner in your dashboard. The relationships you build now are the pipeline you draw from for years — not a one-time hire from a careers fair.</p>
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
            Every employer account is checked before it gets access — company registration,
            a genuine business email, and manual confirmation that the company is real.
            Under-18s can never be contacted directly; all interest is routed through their
            school first, and the student always has the final say.
          </p>
        </div>
      </section>

      <section className="page-cta">
        <div className="wrap">
          <h2>Start hiring safely.</h2>
          <p>
            Email us and we'll get your account set up and verified. Employer plans start
            from £79/month, priced by company size. Your first roles are free to post
            while we onboard you.
          </p>
          <div className="cta-actions">
            <a href="mailto:hello@lernapp.uk" className="btn btn-primary-lg">Get in touch</a>
            <Link to="/pricing" className="link-accent">See pricing</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
