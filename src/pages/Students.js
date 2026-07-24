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
  'Priority access to new live employer briefs',
  'Live interview practice with hiring managers',
  'Instructor referral programme — get vouched for directly',
  'Exclusive employer Q&A sessions',
  'Career coaching add-ons',
]

const MINI_FACES = ['A', 'J', 'M', 'K', 'S']

export default function Students() {
  const heroRef = useRef(null)
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  const onHeroMove = useCallback((e) => {
    const r = heroRef.current?.getBoundingClientRect()
    if (!r) return
    setMouse({ x: (e.clientX - r.left) / r.width - 0.5, y: (e.clientY - r.top) / r.height - 0.5 })
  }, [])
  const onHeroLeave = useCallback(() => setMouse({ x: 0, y: 0 }), [])

  const sp = (dx, dy) => ({
    transform: `translate(${mouse.x * dx}px, ${mouse.y * dy}px)`,
    transition: 'transform 0.35s cubic-bezier(0.16,1,0.3,1)',
  })
  const mainTilt = {
    transform: `rotateX(${8 + mouse.y * -12}deg) rotateY(${-12 + mouse.x * 16}deg)`,
    transition: 'transform 0.35s cubic-bezier(0.16,1,0.3,1)',
  }
  const b1Tilt = {
    transform: `rotateX(${-7 + mouse.y * 6}deg) rotateY(${18 + mouse.x * -9}deg) rotateZ(-3deg)`,
    transition: 'transform 0.35s cubic-bezier(0.16,1,0.3,1)',
  }
  const b2Tilt = {
    transform: `rotateX(${10 + mouse.y * 5}deg) rotateY(${-7 + mouse.x * 7}deg) rotateZ(2.5deg)`,
    transition: 'transform 0.35s cubic-bezier(0.16,1,0.3,1)',
  }
  const b3Tilt = {
    transform: `rotateX(${-5 + mouse.y * 4}deg) rotateY(${-14 + mouse.x * -7}deg) rotateZ(1.5deg)`,
    transition: 'transform 0.35s cubic-bezier(0.16,1,0.3,1)',
  }

  return (
    <main className="page">
      <div className="blob blob-a" />
      <div className="blob blob-b" />
      <div className="blob blob-c" />

      {/* ─── HERO ─── */}
      <section className="page-hero">
        <div className="sp sp-a" style={sp(-55, -38)} />
        <div className="sp sp-b" style={sp(-32, -22)} />
        <div className="sp sp-e" style={sp(-18, -14)} />
        <div className="sp sp-c" style={{ transform: `translate(${mouse.x * 42}px, ${mouse.y * 28}px)`, transition: 'transform 0.35s cubic-bezier(0.16,1,0.3,1)', zIndex: 10 }} />
        <div className="sp sp-d" style={{ transform: `translate(${mouse.x * 62}px, ${mouse.y * 44}px)`, transition: 'transform 0.35s cubic-bezier(0.16,1,0.3,1)', zIndex: 10 }} />

        <div className="page-hero-split">
          <motion.div className="page-hero-text" initial="hidden" animate="visible" variants={fadeUp} custom={0}>
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
              LERN is where you learn live from real professionals, build actual work
              that proves your skills, and get discovered by employers who are actively hiring.
              Free, always.
            </p>
            <div className="hero-actions">
              <a href="https://lernapp.uk" target="_blank" rel="noopener noreferrer" className="btn btn-orange">
                Join free →
              </a>
              <Link to="/institutions" className="btn btn-glass">For your school</Link>
            </div>
          </motion.div>

          <div className="page-hero-visual" ref={heroRef} onMouseMove={onHeroMove} onMouseLeave={onHeroLeave}>
            <div className="tilt-wrap" style={mainTilt}>
              <motion.div className="g-card main-card"
                animate={{ y: [0, -18, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}>
                <div className="mc-bar">
                  <span className="live-chip"><span className="live-ring" />LIVE</span>
                  <span className="mc-time">22 mins remaining</span>
                </div>
                <p className="mc-course">Design for Impact<br />UX &amp; Product Thinking</p>
                <div className="mc-instructor">
                  <div className="mc-ava">A</div>
                  <div className="mc-ava-info">
                    <div className="mc-iname">Alieu S.</div>
                    <div className="mc-irole">Product Designer</div>
                  </div>
                  <span className="mc-viewers">189 live</span>
                </div>
                <div className="mc-prog">
                  <div className="mc-prog-bar">
                    <div className="mc-prog-fill" style={{ width: '62%' }} />
                  </div>
                  <div className="mc-prog-meta"><span>62% complete</span><span>38% left</span></div>
                </div>
                <div className="mc-footer">
                  <div className="mc-faces">
                    {MINI_FACES.map((l, i) => (
                      <div key={i} className="mc-face" style={{ zIndex: 5 - i }}>{l}</div>
                    ))}
                    <span className="mc-more">+184 learners</span>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="tilt-wrap tilt-b1" style={b1Tilt}>
              <motion.div className="g-badge"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}>
                <span className="badge-icon b-green">✓</span>
                <div>
                  <div className="badge-label">Skill verified</div>
                  <div className="badge-sub">UX Research · Project reviewed</div>
                </div>
              </motion.div>
            </div>

            <div className="tilt-wrap tilt-b2" style={b2Tilt}>
              <motion.div className="g-badge"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}>
                <span className="badge-icon b-blue">👁</span>
                <div>
                  <div className="badge-label">NHS Digital viewed your work</div>
                  <div className="badge-sub">3 employers this week</div>
                </div>
              </motion.div>
            </div>

            <div className="tilt-wrap tilt-b3" style={b3Tilt}>
              <motion.div className="g-badge"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 1.4 }}>
                <span className="badge-icon b-orange">★</span>
                <div>
                  <div className="badge-label">Job match unlocked</div>
                  <div className="badge-sub">Employer contacted you directly</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── THE PROBLEM ─── */}
      <section className="lsec">
        <div className="section-inner">
          <motion.header className="sec-head"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <span className="sec-tag">THE PROBLEM</span>
            <h2>The system was built<br />for people who already have connections.</h2>
            <p className="sec-sub">
              If you didn't go to the right school, don't have the right contacts, or can't afford
              unpaid internships — the traditional route to a career wasn't designed for you. LERN was.
            </p>
          </motion.header>
          <div className="diff-grid">
            {[
              { title: 'Experience is locked behind contacts', body: 'Work experience, internships, and referrals go to people whose parents know someone. If yours don\'t, you start behind.' },
              { title: 'Your CV proves nothing', body: 'You haven\'t worked yet. Employers know that. A CV at 18 is basically a list of things you claim about yourself.' },
              { title: 'Nobody tells you why', body: '98% of early-career applicants never hear back. You apply into silence and have no idea what to improve.' },
              { title: 'Most training leads nowhere', body: 'Completing a course online gives you a PDF certificate. Employers have seen thousands of them. It proves almost nothing.' },
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
              LERN Plus exists for people who want every advantage — not for people who need the basics.
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
