import { Link } from 'react-router-dom'
import './Page.css'
import './Safeguarding.css'
import './About.css'

const BELIEFS = [
  {
    heading: 'Verification comes first.',
    body: 'Nothing is shown, shared, or counted as evidence until a real tutor has checked it.',
  },
  {
    heading: "Safety isn't a setting.",
    body: "Under-18 protections are built into the platform, not configured by whoever's using it.",
  },
  {
    heading: 'Recognition should be effortless.',
    body: "Schools, providers and employers shouldn't need extra admin to prove work happened — LERN builds the record automatically from work already being done.",
  },
]

export default function About() {
  return (
    <main className="lpage">
      <section className="lpage-hero">
        <div className="wrap">
          <p className="eyebrow-plain">About LERN</p>
          <h1>We built the door we were never given.</h1>
          <div className="hero-actions">
            <a href="mailto:hello@lernapp.uk" className="btn btn-primary-lg">Get in touch</a>
            <Link to="/institutions" className="link-accent">For institutions</Link>
          </div>
        </div>
      </section>

      {/* ── What LERN is ── */}
      <section className="lsection">
        <div className="wrap">
          <div className="story-card">
            <p>
              LERN is an EdTech platform built to close the gap between what young people
              can do and what the world gets to see of them.
            </p>
            <p>
              Traditional routes into work — degrees, internships, a name on a CV — favour
              people who can afford to wait. LERN doesn't. Students and young people complete
              real, verified project briefs, build a profile that actually demonstrates their
              ability rather than just claiming it, and get introduced to employers and
              institutions through a platform designed to make that connection safe, credible,
              and fast.
            </p>
            <p>
              We work with schools, colleges, and institutions to give their students real
              project experience they can point to — not another line on a personal statement,
              but proof. For employers, it means seeing what someone can actually do before a
              CV ever gets involved.
            </p>
          </div>
        </div>
      </section>

      {/* ── Founder story ── */}
      <section className="lsection about-founder-section">
        <div className="wrap">
          <div className="about-founder">
            <div className="about-founder-text">
              <h2>Why I built it</h2>
              <p>
                My name's Alieu Sankoh. I'm 19, and I founded LERN.
              </p>
              <p>
                I didn't go to university — it wasn't something my family could afford, and I
                wasn't willing to let that be the end of it. Instead of waiting for a door to
                open, I decided to build one. LERN started from a simple frustration: the system
                asks young people to prove themselves through credentials that cost money and time
                most of them don't have, while ignoring the work they're already capable of doing
                right now.
              </p>
              <p>
                So I built a platform that measures people by what they produce, not by what they
                could afford to study. It's still early — we're building carefully, with
                safeguarding and safety built in from day one rather than bolted on afterward —
                but it's real, it's live, and it's growing.
              </p>
              <p>
                I've had the support of a small, experienced team around me — people who've worked
                in EdTech, safeguarding, and business who believed in this early enough to help
                shape it.
              </p>
            </div>
            <div className="about-founder-aside">
              <div className="about-founder-card">
                <img
                  src="/alieu.jpg"
                  alt="Alieu Sankoh, founder of LERN"
                  className="about-founder-photo"
                />
                <p className="about-founder-name">Alieu Sankoh</p>
                <p className="about-founder-role">Founder, LERN</p>
                <p className="about-founder-note">
                  Aged 19. Building the platform he wishes had existed when he needed it.
                </p>
                <a href="mailto:hello@lernapp.uk" className="link-accent" style={{ fontSize: '14px' }}>
                  hello@lernapp.uk
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="lsection about-team-section">
        <div className="wrap">
          <div className="section-head">
            <h2>The team</h2>
            <p>A small group of people who believed in this early enough to help build it.</p>
          </div>
          <div className="about-team-grid">
            <div className="about-team-card lcard">
              <div className="team-card-top team-card-top--photo">
                <img src="/alieu.jpg" alt="Alieu Sankoh" className="team-card-photo" />
              </div>
              <div className="team-card-body">
                <p className="team-name">Alieu Sankoh</p>
                <p className="team-role">Founder & CEO</p>
                <p className="team-bio">
                  Aged 19. Built LERN from a personal frustration with a system that asks young
                  people to prove themselves through credentials they can't afford.
                </p>
              </div>
            </div>
            <div className="about-team-card lcard">
              <div className="team-card-top team-card-top--orange">
                <span className="team-avatar">AL</span>
              </div>
              <div className="team-card-body">
                <p className="team-name">Alex</p>
                <p className="team-role">BD · Institutions & Providers</p>
                <p className="team-bio">
                  Leads on getting LERN into schools and colleges — the person who gets the right
                  doors open and makes sure institutions understand what they're getting.
                </p>
              </div>
            </div>
            <div className="about-team-card lcard">
              <div className="team-card-top team-card-top--teal">
                <span className="team-avatar">MI</span>
              </div>
              <div className="team-card-body">
                <p className="team-name">Michael</p>
                <p className="team-role">BD · Employers</p>
                <p className="team-bio">
                  Leads on bringing employers onto the platform — making the case for why verified
                  student work is a better starting point than a CV stack.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── What we believe ── */}
      <section className="lsection" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <h2>What we believe</h2>
          </div>
          <div className="sg-commitment-grid">
            {BELIEFS.map((b) => (
              <article key={b.heading} className="lcard sg-commitment">
                <h3>{b.heading}</h3>
                <p>{b.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-cta">
        <div className="wrap">
          <h2>Reach us directly. We reply.</h2>
          <p>
            Whether you're a school, an employer, a training provider or a journalist —
            email us directly.
          </p>
          <div className="cta-actions">
            <a href="mailto:hello@lernapp.uk" className="btn btn-primary-lg">hello@lernapp.uk</a>
            <Link to="/institutions" className="link-accent">For institutions</Link>
          </div>
          <p style={{ marginTop: '20px', fontSize: '13px', color: 'var(--ink-faint)' }}>
            IRL Connect Ltd · Company No. 17200180
          </p>
        </div>
      </section>
    </main>
  )
}
