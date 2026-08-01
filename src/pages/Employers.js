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
  { icon: '◈', title: 'Browse verified profiles', body: 'See the actual work a young person has produced. Not what they claim to be able to do — what they demonstrably can.' },
  { icon: '◎', title: 'Filter by skill, location and role', body: 'Find exactly who you need. Search across verified skills and reach out to the candidates that actually fit.' },
  { icon: '◆', title: 'Request interest and connect', body: 'Reach the ones who fit. For under-18s, contact is routed through their school or college, keeping safeguarding built in.' },
  { icon: '◉', title: 'Set a live brief', body: 'Give a real task and see how young people perform on it before you interview. An audition, not an application.' },
  { icon: '◈', title: 'Application tracking', body: 'So no promising candidate slips through the cracks. See who applied, who you responded to, who you missed.' },
]

const PLANS = [
  { name: 'Starter', price: '£750', per: '/month', desc: 'For organisations hiring occasionally. Post roles, browse profiles, reach out directly.' },
  { name: 'Growth', price: '£2,000', per: '/month', desc: 'For growing teams hiring regularly. Live briefs, deeper filtering, priority access to new talent.' },
  { name: 'Enterprise', price: '£5,000+', per: '/month', desc: 'For large employers and volume hiring. Custom briefs, dedicated support, cohort access.' },
]

const SKILLS = ['UX Design', 'Data Analysis', 'Project Management', 'Copywriting']

export default function Employers() {
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
              Hire from verified work, not guesswork
            </span>
            <h1>
              Hire from real,<br />
              verified work.<br />
              <em className="h1-em">Not a CV.</em>
            </h1>
            <p className="hero-lead">
              See what a young person can actually do before you ever interview them.
              Young people on LERN have a verified profile of real, reviewed work — so you
              can find the ones who fit and reach out directly.
            </p>
            <div className="hero-actions">
              <a href="mailto:alieu@joinirl.co.uk" className="btn btn-orange">
                Talk to us →
              </a>
              <Link to="/institutions" className="btn btn-glass">How it works</Link>
            </div>
          </motion.div>

          <div className="page-hero-visual" ref={heroRef} onMouseMove={onHeroMove} onMouseLeave={onHeroLeave}>
            <div className="tilt-wrap" style={mainTilt}>
              <motion.div className="g-card main-card"
                animate={{ y: [0, -18, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}>
                <div className="mc-bar">
                  <span className="live-chip" style={{ background: 'rgba(0,150,80,0.12)', color: '#006630' }}><span className="live-ring" style={{ background: '#00a050' }} />VERIFIED</span>
                  <span className="mc-time">92% match</span>
                </div>
                <p className="mc-course">Candidate Profile<br />UX Designer · London</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', margin: '0.75rem 0', position: 'relative', zIndex: 1 }}>
                  {SKILLS.map(s => (
                    <span key={s} style={{ fontSize: '0.7rem', padding: '0.2rem 0.6rem', background: 'rgba(255,102,0,0.1)', border: '1px solid rgba(255,102,0,0.25)', color: '#CC4400', borderRadius: '999px', fontWeight: 700 }}>{s} ✓</span>
                  ))}
                </div>
                <div className="mc-prog">
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                    <span style={{ fontSize: '0.72rem', color: 'rgba(80,30,0,0.6)' }}>Profile match</span>
                    <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#FF6600' }}>92%</span>
                  </div>
                  <div className="mc-prog-bar">
                    <div className="mc-prog-fill" style={{ width: '92%' }} />
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="tilt-wrap tilt-b1" style={b1Tilt}>
              <motion.div className="g-badge" animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}>
                <span className="badge-icon b-green">✓</span>
                <div><div className="badge-label">Skills verified</div><div className="badge-sub">Work reviewed by professional</div></div>
              </motion.div>
            </div>

            <div className="tilt-wrap tilt-b2" style={b2Tilt}>
              <motion.div className="g-badge" animate={{ y: [0, 10, 0] }} transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}>
                <span className="badge-icon b-orange">◷</span>
                <div><div className="badge-label">Live brief closes Friday</div><div className="badge-sub">14 submissions so far</div></div>
              </motion.div>
            </div>

            <div className="tilt-wrap tilt-b3" style={b3Tilt}>
              <motion.div className="g-badge" animate={{ y: [0, -8, 0] }} transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 1.4 }}>
                <span className="badge-icon b-blue">★</span>
                <div><div className="badge-label">Below agency rates</div><div className="badge-sub">Placement fees scaled to role</div></div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="lsec">
        <div className="section-inner">
          <motion.header className="sec-head" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <span className="sec-tag">WHY LERN</span>
            <h2>A CV tells you what someone<br />says they can do. LERN shows you.</h2>
            <p className="sec-sub">
              Young people on the platform have a verified profile of real, reviewed work. You can find the ones
              who fit and reach out directly — or set a live brief and see how they perform on a real task before
              you ever interview them.
            </p>
          </motion.header>
        </div>
      </section>

      <section className="lsec">
        <div className="section-inner">
          <motion.header className="sec-head" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <span className="sec-tag">WHAT YOU GET</span>
            <h2>Find who you need.<br />Reach them directly.</h2>
          </motion.header>
          <div className="value-grid value-grid-3">
            {WHAT_YOU_GET.map((c, i) => (
              <TiltCard key={c.title} className="g-card v-card"
                custom={i * 0.07} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
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
          <motion.header className="sec-head" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <span className="sec-tag">PRICING</span>
            <h2>Start with a free one-month trial.<br />No commitment.</h2>
            <p className="sec-sub">Small businesses can post a couple of roles free. Placement fees are scaled to the role and always below agency rates.</p>
          </motion.header>
          <div className="pricing-grid">
            {PLANS.map((p, i) => (
              <TiltCard key={p.name} className="g-card pricing-card"
                custom={i * 0.08} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <div className="pricing-name">{p.name}</div>
                <div className="pricing-price">{p.price}<span className="pricing-per">{p.per}</span></div>
                <p className="pricing-desc">{p.desc}</p>
                <a href="mailto:alieu@joinirl.co.uk" className="btn btn-orange btn-sm">Get in touch →</a>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      <section className="lsec">
        <div className="section-inner">
          <TiltCard className="g-card story-card" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <span className="sec-tag">WHY WORK WITH US EARLY</span>
            <div className="story-body">
              <p>We're onboarding our first employers now. Getting in at this stage means you help shape the platform and get first access to the talent coming through — as a founding employer.</p>
            </div>
          </TiltCard>
        </div>
      </section>

      <section className="lsec cta-sec">
        <div className="section-inner">
          <TiltCard className="g-card cta-inner" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <div className="cta-glow" />
            <span className="sec-tag">GET STARTED</span>
            <h2>Start your free trial.<br />No commitment required.</h2>
            <p className="cta-sub">Email us and we'll get you set up. A free one-month trial with real young people, real verified work, and no risk.</p>
            <div className="cta-btns">
              <a href="mailto:alieu@joinirl.co.uk" className="btn btn-orange btn-lg">Talk to us →</a>
              <Link to="/institutions" className="btn btn-glass btn-lg">How it works</Link>
            </div>
          </TiltCard>
        </div>
      </section>
    </main>
  )
}
