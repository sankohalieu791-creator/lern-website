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

const WHAT_YOU_GET = [
  { icon: '◈', title: 'Verified skill profiles', body: 'Learners prove capability without needing paper qualifications. A professional reviews real project work and verifies it — creating a profile employers can trust.' },
  { icon: '◎', title: 'Employers reach out directly', body: 'Your hard-to-place learners get seen, instead of your team chasing employers by hand. The platform does the work.' },
  { icon: '◆', title: 'Real job and apprenticeship matching', body: 'Matched to your cohort. Employers on LERN are actively hiring and can filter by verified skill, location and role.' },
  { icon: '◉', title: 'Live interview practice', body: 'With real hiring managers. Not a simulation. The kind of preparation that changes outcomes for learners who have never had a professional in their corner.' },
  { icon: '◈', title: 'Live courses and workshops online', body: 'Run your virtual delivery on LERN, with polling, Q&A and group projects. No need for third-party tools.' },
  { icon: '◎', title: 'Application tracking and feedback', body: 'So learners improve and stay motivated. They see where their application went and why — not silence.' },
  { icon: '◆', title: 'Progression and destinations data', body: 'That feeds your outcomes and inspection evidence. Who got hired, when, at what level. All in one place.' },
  { icon: '◉', title: 'A private, branded space', body: 'Your cohort, your control. Branded to your organisation, separate from the general platform.' },
]

const MINI_FACES = ['T', 'A', 'M', 'K', 'L']

export default function TrainingProviders() {
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
              Training providers · Bootcamps · Employment programmes
            </span>
            <h1>
              Get your learners hired.<br />
              <em className="h1-em">That's the bit</em><br />
              after the training.
            </h1>
            <p className="hero-lead">
              You train learners brilliantly. LERN makes sure that training turns into a job.
              For learners with few qualifications or facing barriers, the hardest step
              isn't passing — it's getting hired.
            </p>
            <div className="hero-actions">
              <a href="mailto:alieu@joinirl.co.uk" className="btn btn-orange">
                Get in touch →
              </a>
              <Link to="/employers" className="btn btn-glass">For employers</Link>
            </div>
          </motion.div>

          <div className="page-hero-visual" ref={heroRef} onMouseMove={onHeroMove} onMouseLeave={onHeroLeave}>
            <div className="tilt-wrap" style={mainTilt}>
              <motion.div className="g-card main-card"
                animate={{ y: [0, -18, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}>
                <div className="mc-bar">
                  <span className="live-chip" style={{ background: 'rgba(0,150,80,0.12)', color: '#006630' }}><span className="live-ring" style={{ background: '#00a050' }} />HIRED</span>
                  <span className="mc-time">This cohort</span>
                </div>
                <p className="mc-course">Cohort outcomes<br />Digital Skills Programme</p>
                <div style={{ borderTop: '1px solid rgba(0,0,0,0.07)', paddingTop: '1rem', position: 'relative', zIndex: 1 }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.5rem', textAlign: 'center', marginBottom: '0.75rem' }}>
                    <div>
                      <div style={{ fontSize: '1.4rem', fontWeight: 900, color: '#FF6600' }}>18</div>
                      <div style={{ fontSize: '0.68rem', color: 'rgba(80,30,0,0.55)', fontWeight: 600 }}>learners</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '1.4rem', fontWeight: 900, color: '#00a050' }}>12</div>
                      <div style={{ fontSize: '0.68rem', color: 'rgba(80,30,0,0.55)', fontWeight: 600 }}>hired</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '1.4rem', fontWeight: 900, color: '#FF6600' }}>67%</div>
                      <div style={{ fontSize: '0.68rem', color: 'rgba(80,30,0,0.55)', fontWeight: 600 }}>placement</div>
                    </div>
                  </div>
                  <div className="mc-prog">
                    <div className="mc-prog-bar">
                      <div className="mc-prog-fill" style={{ width: '67%', background: 'linear-gradient(90deg, #00a050, #00cc66)' }} />
                    </div>
                  </div>
                </div>
                <div className="mc-footer">
                  <div className="mc-faces">
                    {MINI_FACES.map((l, i) => (
                      <div key={i} className="mc-face" style={{ zIndex: 5 - i }}>{l}</div>
                    ))}
                    <span className="mc-more">+7 learners</span>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="tilt-wrap tilt-b1" style={b1Tilt}>
              <motion.div className="g-badge" animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}>
                <span className="badge-icon b-green">✓</span>
                <div><div className="badge-label">Learner hired</div><div className="badge-sub">Employer reached out directly</div></div>
              </motion.div>
            </div>

            <div className="tilt-wrap tilt-b2" style={b2Tilt}>
              <motion.div className="g-badge" animate={{ y: [0, 10, 0] }} transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}>
                <span className="badge-icon b-blue">◆</span>
                <div><div className="badge-label">Skills verified</div><div className="badge-sub">No qualification needed</div></div>
              </motion.div>
            </div>

            <div className="tilt-wrap tilt-b3" style={b3Tilt}>
              <motion.div className="g-badge" animate={{ y: [0, -8, 0] }} transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 1.4 }}>
                <span className="badge-icon b-orange">★</span>
                <div><div className="badge-label">Destinations tracked</div><div className="badge-sub">Ready for your inspections</div></div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="lsec">
        <div className="section-inner">
          <motion.header className="sec-head" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <span className="sec-tag">THE PROBLEM WE SOLVE</span>
            <h2>Right now, it comes down to<br />your team's manual effort.</h2>
            <p className="sec-sub">
              For learners with few qualifications or facing barriers, the hardest step isn't passing — it's getting
              hired. Right now that comes down to your team's manual effort and whatever employer contacts you
              happen to have. LERN makes it run for you.
            </p>
          </motion.header>
        </div>
      </section>

      <section className="lsec">
        <div className="section-inner">
          <motion.header className="sec-head" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <span className="sec-tag">WHAT YOU GET</span>
            <h2>Everything your learners need<br />to actually get hired.</h2>
          </motion.header>
          <div className="value-grid value-grid-3">
            {WHAT_YOU_GET.map((c, i) => (
              <TiltCard key={c.title} className="g-card v-card"
                custom={i * 0.06} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <span className="v-icon">{c.icon}</span>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      <section className="lsec">
        <div className="section-inner">
          <TiltCard className="g-card story-card" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <span className="sec-tag">THE OFFER</span>
            <h2>Try it free for a month.<br />No commitment.</h2>
            <div className="story-body">
              <p>
                Try it free for a month with a group of your learners — no commitment. If it works, a simple
                annual plan scaled to your size. If it doesn't, you've lost nothing.
              </p>
              <p>
                We're already working with training providers and employment programmes. Email us and we'll
                get you set up within a week.
              </p>
            </div>
          </TiltCard>
        </div>
      </section>

      <section className="lsec cta-sec">
        <div className="section-inner">
          <TiltCard className="g-card cta-inner" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <div className="cta-glow" />
            <span className="sec-tag">GET STARTED</span>
            <h2>Let's get your<br />learners hired.</h2>
            <p className="cta-sub">
              Email us and we'll have a conversation about your cohort, your challenges, and what LERN can do
              for your outcomes. No commitment required for the first month.
            </p>
            <div className="cta-btns">
              <a href="mailto:alieu@joinirl.co.uk" className="btn btn-orange btn-lg">Email us to get started →</a>
              <Link to="/employers" className="btn btn-glass btn-lg">For employers</Link>
            </div>
          </TiltCard>
        </div>
      </section>
    </main>
  )
}
