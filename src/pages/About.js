import { Link } from 'react-router-dom'
import Logo from '../components/Logo'
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
      <section className="lpage-hero about-hero-centered">
        <div className="wrap">
          <p className="eyebrow-plain">About LERN</p>
          <h1>We built the door we were never given.</h1>
          <div className="hero-actions">
            <a href="mailto:hello@lernapp.uk" className="btn btn-primary-lg">Get in touch</a>
            <Link to="/institutions" className="link-accent">For institutions</Link>
          </div>
        </div>
      </section>

      {/* ── Our mission ── */}
      <section className="lsection" style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <div className="section-head" style={{ textAlign: 'center', margin: '0 auto 48px', maxWidth: '60ch' }}>
            <p className="eyebrow-plain">Our mission</p>
            <h2>A CV shouldn't decide who gets a chance.</h2>
          </div>
          <div className="story-card">
            <p>
              The CV was built for a world where the only proof of ability was a piece of
              paper — a degree, a reference, a job title. That world is already behind us.
              Real ability shows up in what someone has actually built, fixed, designed, and
              delivered, not in how well they can summarise it in two pages.
            </p>
            <p>
              Our goal is to make the CV genuinely unnecessary — not replace it with a nicer
              CV, remove the need for one. Every young person should be able to show real,
              verified work instead: a brief they completed, a placement they showed up to, a
              skill a tutor actually checked. That's a portfolio an employer can trust, built
              from the moment someone starts learning, not assembled the week before an
              application is due.
            </p>
            <p>
              The same goes for university. Right now, the fastest route into most jobs and
              apprenticeships still runs through a system that costs money and time most young
              people don't have. We think the work itself should be the route in — not where
              you studied, or whether you could afford to.
            </p>
          </div>
        </div>
      </section>

      {/* ── Team — moved up here, right after the mission, per direct
          request: "the team needs to be up." Skill Wallet now sits
          directly underneath it instead of above. ── */}
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
                  Sets product direction and runs the company day to day.
                </p>
              </div>
            </div>
            <div className="about-team-card lcard">
              <div className="team-card-top team-card-top--photo">
                <img src="/alex.jpg" alt="Alex" className="team-card-photo" style={{ objectPosition: 'center 30%' }} />
              </div>
              <div className="team-card-body">
                <p className="team-name">Alex</p>
                <p className="team-role">Head of Institutions & Training Providers</p>
                <p className="team-bio">
                  An experienced strategic leader with 15 years' experience, an MBA and Chartered
                  Manager status, specialising in business development, strategic partnerships,
                  operations and organisational growth. Extensive experience in public sector
                  leadership, stakeholder engagement, commercial strategy and service innovation —
                  with a strong focus on education and SEND, and on delivering measurable outcomes
                  that make a tangible change to young people's lives with LERN.
                </p>
              </div>
            </div>
            <div className="about-team-card lcard">
              <div className="team-card-top team-card-top--purple">
                <span className="team-avatar">MA</span>
              </div>
              <div className="team-card-body">
                <p className="team-name">Mayank</p>
                <p className="team-role">Lead, Institutional Sales</p>
                <p className="team-bio">
                  Leads institutional sales alongside Alex — identifying and closing new schools,
                  colleges and training providers.
                </p>
              </div>
            </div>
            <div className="about-team-card lcard">
              <div className="team-card-top team-card-top--teal">
                <span className="team-avatar">MI</span>
              </div>
              <div className="team-card-body">
                <p className="team-name">Michael</p>
                <p className="team-role">Head of Employer Partnerships</p>
                <p className="team-bio">
                  Leads on bringing employers onto the platform — making the case for why verified
                  student work is a better starting point than a CV stack.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LERN Skill Wallet ── */}
      <section className="lsection" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head" style={{ textAlign: 'center', margin: '0 auto 48px', maxWidth: '60ch' }}>
            <p className="eyebrow-plain">The LERN Skill Wallet</p>
            <h2>One place every verified skill lives, for good.</h2>
          </div>
          <div className="story-card">
            <p>
              A CV lists what someone studied. The Skill Wallet shows what they can actually
              do — a growing, portable record of specific, real skills, in two forms. Skills a
              tutor sets for a course move through five levels as verified work comes in,
              checked against real criteria. A student can also set their own goal for
              something they're teaching themselves, then check in weekly with what they did
              and proof of the work — no tutor step for that one, just a real, dated log an
              employer can actually look through.
            </p>
            <p>
              It works alongside the briefs and courses a student is already doing, not as
              extra homework. A tutor sets out the skills for their course and what counts
              as proof for each one. As a student's real work gets verified, those skills
              move through five honest levels — Not started, Beginner, Developing, Secure,
              Advanced — and every level-up is tied to a specific, checked piece of work a
              student can point back to.
            </p>
            <p className="story-quote">
              It's live now, in its first phase, built the same way everything else on LERN
              is: every claim is backed by something real — a tutor's check, or a student's
              own dated proof. It belongs to the student, not the school or employer — built
              once, kept for good, and carried with them into whatever comes next.
            </p>
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
              Students and young people complete real, verified project briefs, build a profile
              that actually demonstrates their ability rather than just claiming it, and get
              introduced to employers and institutions through a platform designed to make that
              connection safe, credible, and fast.
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

      {/* ── Founder story — no separate photo sidebar; Alieu appears
          once, in the team grid above, same as everyone else. ── */}
      <section className="lsection about-founder-section">
        <div className="wrap">
          <div className="about-founder">
            <div className="section-head" style={{ textAlign: 'center', margin: '0 auto 40px' }}>
              <h2>Why I built it</h2>
            </div>
            <div className="about-founder-text">
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
                LERN isn't the first thing I've built. I've started several platforms before this
                one that didn't make it — including IRL, an earlier attempt at tackling social
                media addiction. None of them survived, but each one taught me something I've
                used to build LERN properly.
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
                shape it. You'll find all of us, me included, in the team above.
              </p>
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
          <div style={{ marginTop: '28px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
            <Logo height={20} color="var(--ink)" />
            <p style={{ fontSize: '13px', color: 'var(--ink-faint)' }}>
              IRL Connect Ltd · Company No. 17200180
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
