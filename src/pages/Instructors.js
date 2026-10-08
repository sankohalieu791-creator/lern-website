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
  { icon: '◈', title: 'Teach live', body: 'Run live sessions directly through LERN. Students join from partner schools, colleges, and directly. Real interaction, real teaching.' },
  { icon: '◎', title: '75% revenue share', body: 'You keep 75% of every course booking. LERN takes 25% to keep the infrastructure running and the students free.' },
  { icon: '◆', title: 'Set employer live briefs', body: 'You can propose and run employer briefs — connecting students with hiring companies and earning additional income for facilitation.' },
  { icon: '◉', title: 'Refer talent directly', body: 'When you see a student who deserves to be in front of an employer, refer them directly. That referral carries your name and reputation.' },
  { icon: '◈', title: 'Build your instructor profile', body: 'Your sessions, your students, your verified outcomes — all visible on your LERN instructor profile.' },
  { icon: '◎', title: 'Shape what gets taught', body: 'We work with instructors to build a curriculum that reflects what employers actually need. Your expertise shapes the platform.' },
]

const HOW_IT_WORKS = [
  { n: '01', title: 'Apply to teach', body: 'Tell us your area of expertise and what you\'d teach. We review applications to keep quality high.' },
  { n: '02', title: 'Design your session', body: 'Live sessions are 60–90 minutes. We help you structure them so learners walk away with something real.' },
  { n: '03', title: 'Deliver live', body: 'Teach through the LERN platform. Students ask questions in real time. You respond in real time. That\'s the difference.' },
  { n: '04', title: 'Review and verify', body: 'Students submit project work. You review it. When you verify a piece of work, that mark means something.' },
]

export default function Instructors() {
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
              75% revenue share · Live teaching · Real impact
            </span>
            <h1>
              Teach live.<br />
              <em className="h1-em">Shape careers.</em>
            </h1>
            <p className="hero-lead">
              LERN is where working professionals become the instructors young people
              actually need. Teach live, verify real project work, refer talent to employers,
              and earn from every course you run.
            </p>
            <div className="hero-actions">
              <a href="mailto:hello@lernapp.uk" className="btn btn-orange">
                Apply to teach →
              </a>
              <Link to="/students" className="btn btn-glass">See the student view</Link>
            </div>
          </motion.div>

          <div className="page-hero-visual" ref={heroRef} onMouseMove={onHeroMove} onMouseLeave={onHeroLeave}>
            <div className="tilt-wrap" style={mainTilt}>
              <motion.div className="g-card main-card"
                animate={{ y: [0, -18, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}>
                <div className="mc-bar">
                  <span className="live-chip"><span className="live-ring" />LIVE</span>
                  <span className="mc-time">Teaching now</span>
                </div>
                <p className="mc-course">Design for Impact<br />UX &amp; Product Thinking</p>
                <div className="mc-instructor">
                  <div className="mc-ava">A</div>
                  <div className="mc-ava-info">
                    <div className="mc-iname">You</div>
                    <div className="mc-irole">Lead Instructor</div>
                  </div>
                  <span className="mc-viewers">189 live</span>
                </div>
                <div style={{ borderTop: '1px solid rgba(0,0,0,0.07)', paddingTop: '1rem', position: 'relative', zIndex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <span style={{ fontSize: '0.78rem', color: 'rgba(80,30,0,0.6)' }}>This month</span>
                    <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '#FF6600' }}>£1,840</span>
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '0.7rem', padding: '0.2rem 0.6rem', background: 'rgba(0,180,90,0.12)', border: '1px solid rgba(0,180,90,0.25)', color: '#005522', borderRadius: '999px', fontWeight: 700 }}>75% yours</span>
                    <span style={{ fontSize: '0.7rem', padding: '0.2rem 0.6rem', background: 'rgba(255,102,0,0.1)', border: '1px solid rgba(255,102,0,0.25)', color: '#CC4400', borderRadius: '999px', fontWeight: 700 }}>48 students</span>
                    <span style={{ fontSize: '0.7rem', padding: '0.2rem 0.6rem', background: 'rgba(50,120,255,0.1)', border: '1px solid rgba(50,120,255,0.25)', color: '#0044cc', borderRadius: '999px', fontWeight: 700 }}>3 referred</span>
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
                  <div className="badge-label">12 projects verified today</div>
                  <div className="badge-sub">UX Design · Cohort 4</div>
                </div>
              </motion.div>
            </div>

            <div className="tilt-wrap tilt-b2" style={b2Tilt}>
              <motion.div className="g-badge"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}>
                <span className="badge-icon b-orange">£</span>
                <div>
                  <div className="badge-label">75% revenue share</div>
                  <div className="badge-sub">Paid directly to you</div>
                </div>
              </motion.div>
            </div>

            <div className="tilt-wrap tilt-b3" style={b3Tilt}>
              <motion.div className="g-badge"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 1.4 }}>
                <span className="badge-icon b-blue">◷</span>
                <div>
                  <div className="badge-label">Next session in 2 days</div>
                  <div className="badge-sub">62 students enrolled</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY LERN ─── */}
      <section className="lsec">
        <div className="section-inner">
          <motion.header className="sec-head"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <span className="sec-tag">WHY LERN</span>
            <h2>You already know what<br />employers actually want.</h2>
            <p className="sec-sub">
              Most platforms that "help you teach online" are built around video content and passive
              consumption. LERN is the opposite. Live teaching. Real projects. Verified outcomes.
              The kind of learning that actually changes careers.
            </p>
          </motion.header>
        </div>
      </section>

      {/* ─── WHAT YOU GET ─── */}
      <section className="lsec">
        <div className="section-inner">
          <motion.header className="sec-head"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <span className="sec-tag">WHAT YOU GET</span>
            <h2>More than a teaching slot.<br />A role in what happens next.</h2>
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

      {/* ─── HOW IT WORKS ─── */}
      <section className="lsec">
        <div className="section-inner">
          <motion.header className="sec-head"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <span className="sec-tag">HOW IT WORKS</span>
            <h2>From application<br />to live in weeks.</h2>
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

      {/* ─── REVENUE ─── */}
      <section className="lsec">
        <div className="section-inner">
          <TiltCard className="g-card cta-inner revenue-card"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <div className="cta-glow" />
            <span className="sec-tag">EARNINGS</span>
            <h2>75% of every course.<br />Paid directly to you.</h2>
            <p className="cta-sub">
              Students pay for optional paid courses. You keep 75%. LERN takes 25%
              to keep the platform running, students free, and institutions free.
              No hidden fees, no payout thresholds, no games.
            </p>
            <div className="revenue-stats">
              <div className="rev-stat"><strong>75%</strong><span>revenue share</span></div>
              <div className="rev-stat"><strong>Direct</strong><span>payout to you</span></div>
              <div className="rev-stat"><strong>Your terms</strong><span>teach when you want</span></div>
            </div>
          </TiltCard>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="lsec cta-sec">
        <div className="section-inner">
          <TiltCard className="g-card cta-inner"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <div className="cta-glow" />
            <span className="sec-tag">APPLY TO TEACH</span>
            <h2>We're onboarding<br />instructors now.</h2>
            <p className="cta-sub">
              Tell us what you'd teach and we'll get back to you within a week.
              We're selective — quality of instruction is what makes LERN work.
            </p>
            <div className="cta-btns">
              <a href="mailto:hello@lernapp.uk" className="btn btn-orange btn-lg">Apply to teach →</a>
              <Link to="/about" className="btn btn-glass btn-lg">About LERN</Link>
            </div>
          </TiltCard>
        </div>
      </section>
    </main>
  )
}
