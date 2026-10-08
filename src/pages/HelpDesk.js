import { Link } from 'react-router-dom'
import HelpDeskWidget from '../components/HelpDeskWidget'
import './Page.css'
import './HelpDesk.css'

const PROMISES = [
  "Every answer is written by someone who knows the real product — nothing is generated, nothing is guessed.",
  "If nothing in the knowledge base matches well enough, it says so, rather than showing a weak match dressed up as a real answer.",
  "Ask it to start a brief or a workshop and it drafts one for you to fill in and confirm — the same form you'd use manually, just pre-filled.",
  "It's built into the app for every role — institution staff, training provider staff, and employers each see answers relevant to them.",
]

const MORE_TOPICS = [
  'How do I create a guest invite?',
  'How do I filter students by group?',
  'How do students join my organisation?',
  'How do I change light or dark mode?',
  'How do I set the safeguarding lead?',
  'How do I export my data?',
]

export default function HelpDeskPage() {
  return (
    <main className="lpage">
      <section className="lpage-hero">
        <div className="wrap">
          <p className="eyebrow-plain">Built into every account</p>
          <h1>The LERN Help Desk.</h1>
          <p className="hero-sub">
            A small orb in the corner of the app that answers real questions about how
            LERN works — written by hand by the LERN team, not generated. If it doesn't
            know, it says so instead of guessing.
          </p>
        </div>
      </section>

      <section className="lsection" style={{ paddingTop: 56 }}>
        <div className="wrap">
          <HelpDeskWidget />
        </div>
      </section>

      <section className="lsection" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="story-card">
            <p>
              Most "help" widgets these days are a chatbot bolted onto a product, generating
              an answer on the spot and hoping it's close enough. We didn't want that — not
              because it's impossible to get right, but because when a teacher or a safeguarding
              lead asks how something works, a guess dressed up as confidence is worse than
              no answer at all.
            </p>
            <p className="story-quote">
              So the Help Desk doesn't generate anything. It searches a knowledge base the
              LERN team wrote by hand, and shows you the entry that actually matches — or
              tells you honestly that it doesn't have one yet.
            </p>
          </div>
        </div>
      </section>

      <section className="lsection lsection-steps">
        <div className="wrap">
          <h2 className="section-h">What makes it different</h2>
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

      <section className="lsection">
        <div className="wrap">
          <div className="section-head">
            <h2 className="section-h">More of what it covers</h2>
          </div>
          <div className="hd-topic-grid">
            {MORE_TOPICS.map((t) => (
              <div key={t} className="hd-topic-chip">{t}</div>
            ))}
          </div>
          <p className="inline-note">
            It's always there — a small icon in the bottom corner of every page in the app,
            for whichever role you're signed in as. Click it, ask in your own words, and it
            searches for the closest written answer.
          </p>
        </div>
      </section>

      <section className="page-cta">
        <div className="wrap">
          <h2>See it inside the real app.</h2>
          <p>
            The Help Desk is included free with every LERN account — no setup, no extra
            seats to buy.
          </p>
          <div className="cta-actions">
            <a href="mailto:hello@lernapp.uk" className="btn btn-primary-lg">Get in touch</a>
            <Link to="/how-it-works" className="link-accent">See how LERN works</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
