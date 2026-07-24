import React, { useRef, useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './Page.css'

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (d = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, delay: d, ease: [0.16, 1, 0.3, 1] },
  }),
}

function TiltCard({ children, className, initial, whileInView, viewport, variants, custom, ...rest }) {
  const ref = useRef(null)
  const [t, setT] = useState({ x: 0, y: 0, on: false })
  const onMove = useCallback((e) => {
    const r = ref.current?.getBoundingClientRect()
    if (!r) return
    setT({ x: (e.clientX - r.left) / r.width - 0.5, y: (e.clientY - r.top) / r.height - 0.5, on: true })
  }, [])
  const onLeave = useCallback(() => setT({ x: 0, y: 0, on: false }), [])
  return (
    <motion.div
      ref={ref} className={className} initial={initial} whileInView={whileInView}
      viewport={viewport} variants={variants} custom={custom}
      onMouseMove={onMove} onMouseLeave={onLeave}
      style={{
        transform: `perspective(800px) rotateX(${t.y * -6}deg) rotateY(${t.x * 6}deg) ${t.on ? 'scale(1.02)' : 'scale(1)'}`,
        transition: 'transform 0.18s ease-out',
        willChange: 'transform',
      }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

const HOW_IT_WORKS = [
  { n: '01', title: 'Join a live session', body: 'Pick a course. Join live. Ask questions. Learn from a real professional who is actually there.' },
  { n: '02', title: 'Complete a real project', body: 'Every course ends in a task you actually complete — not a quiz. Design something, build something, solve something real.' },
  { n: '03', title: 'Get your work verified', body: 'A professional reviews your project and verifies it on your LERN profile. That verification means something.' },
  { n: '04', title: 'Get discovered by employers', body: 'Employers search LERN profiles by skill. When they find your verified work, they can message you directly.' },
]

const WHAT_FREE_MEANS = [
  'Every live course',
  'Your verified profile',
  'Employer discovery',
  'Application tracking',
  'Skills gap alerts',
  'Community access',
]

const PLUS_FEATURES = [
  'Everything free, always',
  'Priority access to new live briefs',
  'Live interview practice with hiring managers',
  'Instructor referral programme — get vouched for directly',
  'Exclusive employer Q&A sessions',
  'Career coaching add-ons',
]

export default function Students() {
  return (
    <main className="page">
      <div className="blob blob-a" />
      <div className="blob blob-b" />

      {/* ─── HERO ─── */}
      <section className="page-hero">
        <motion.div className="page-hero-inner" initial="hidden" animate="visible" variants={fadeUp} custom={0}>
          <span className="eyebrow">
            <span className="pulse-dot" />
            Free · Live · Real
          </span>
          <h1>
            Learn something real.<br />
            <em className="h1-em">Prove you can do it.</em><br />
            Get hired.
          </h1>
          <p className="hero-lead">
            LERN is where you learn live from real professionals, build actual
            work that proves your skills, and get discovered by employers who
            are actively hiring. Free, always.
          </p>
          <div className="hero-actions">
            <a href="https://lernapp.uk" target="_blank" rel="noopener noreferrer" className="btn btn-orange">
              Join free →
            </a>
            <Link to="/institutions" className="btn btn-glass">For your school</Link>
          </div>
        </motion.div>
      </section>

      {/* ─── THE PROBLEM YOU'RE FACING ─── */}
      <section className="lsec">
        <div className="section-inner">
          <motion.header className="sec-head"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <span className="sec-tag">THE PROBLEM</span>
            <h2>The system was built<br />for people who already have connections.</h2>
            <p className="sec-sub">
              If you didn't go to the right school, don't have the right family contacts, or can't afford
              unpaid internships — the traditional route to a career wasn't designed for you.
              LERN was.
            </p>
          </motion.header>
          <div className="diff-grid">
            {[
              { title: 'Experience is locked behind contacts', body: 'Work experience, internships, and referrals go to people whose parents know someone. If yours don\'t, you start behind.' },
              { title: 'Your CV proves nothing', body: 'You haven\'t worked yet. Employers know that. A CV at 18 is basically a list of things you claim about yourself.' },
              { title: 'Nobody tells you why you didn\'t get the job', body: '98% of early-career applicants never hear back. You apply into silence and have no idea what to improve.' },
              { title: 'Most training doesn\'t lead anywhere real', body: 'Completing a course online gives you a PDF certificate. Employers have seen thousands of them. It proves almost nothing.' },
            ].map((d, i) => (
              <TiltCard key={d.title} className="g-card diff-card"
                custom={i * 0.08} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <h3>{d.title}</h3>
                <p>{d.body}</p>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="lsec">
        <div className="section-inner">
          <motion.header className="sec-head"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <span className="sec-tag">HOW IT WORKS</span>
            <h2>Learn. Prove it.<br />Get discovered.</h2>
          </motion.header>
          <div className="how-grid">
            {HOW_IT_WORKS.map((s, i) => (
              <TiltCard key={s.n} className="g-card how-card"
                custom={i * 0.1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <div className="how-num">{s.n}</div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRICING ─── */}
      <section className="lsec">
        <div className="section-inner">
          <motion.header className="sec-head"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <span className="sec-tag">PRICING</span>
            <h2>Everything that matters<br />is free. Full stop.</h2>
            <p className="sec-sub">
              We built LERN so that cost is never a reason someone can't access it.
              LERN Plus exists for people who want more — not for people who need it.
            </p>
          </motion.header>

          <div className="pricing-grid pricing-two">
            <TiltCard className="g-card pricing-card"
              custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="pricing-name">LERN Free</div>
              <div className="pricing-price">£0<span className="pricing-per">/always</span></div>
              <p className="pricing-desc">Everything you need to learn, build proof, and get hired.</p>
              <ul className="pricing-features">
                {WHAT_FREE_MEANS.map(f => (
                  <li key={f}><span className="for-dot" />{f}</li>
                ))}
              </ul>
              <a href="https://lernapp.uk" target="_blank" rel="noopener noreferrer" className="btn btn-glass btn-sm">
                Join free →
              </a>
            </TiltCard>

            <TiltCard className="g-card pricing-card pricing-featured"
              custom={0.1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <span className="pricing-badge">Optional upgrade</span>
              <div className="pricing-name">LERN Plus</div>
              <div className="pricing-price">£5<span className="pricing-per">/month</span></div>
              <p className="pricing-desc">For students who want every advantage we can give them.</p>
              <ul className="pricing-features">
                {PLUS_FEATURES.map(f => (
                  <li key={f}><span className="for-dot" />{f}</li>
                ))}
              </ul>
              <a href="https://lernapp.uk" target="_blank" rel="noopener noreferrer" className="btn btn-orange btn-sm">
                Get LERN Plus →
              </a>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="lsec cta-sec">
        <div className="section-inner">
          <TiltCard className="g-card cta-inner"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <div className="cta-glow" />
            <span className="sec-tag">GET STARTED</span>
            <h2>Your profile is waiting.<br />Start building it today.</h2>
            <p className="cta-sub">
              Join LERN for free. Attend your first live session. Build something real.
              Let employers find you.
            </p>
            <div className="cta-btns">
              <a href="https://lernapp.uk" target="_blank" rel="noopener noreferrer" className="btn btn-orange btn-lg">
                Join LERN free →
              </a>
              <Link to="/instructors" className="btn btn-glass btn-lg">Want to teach?</Link>
            </div>
          </TiltCard>
        </div>
      </section>
    </main>
  )
}
