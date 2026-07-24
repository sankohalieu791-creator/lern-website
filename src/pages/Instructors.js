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
  { icon: '◎', title: '75% revenue share', body: 'You keep 75% of every course booking. No platform bloat. LERN takes 25% to keep the infrastructure running and the students free.' },
  { icon: '◆', title: 'Set employer live briefs', body: 'You can propose and run employer briefs — connecting students with hiring companies and earning additional income for facilitation.' },
  { icon: '◉', title: 'Refer talent directly', body: 'When you see a student who deserves to be in front of an employer, you can refer them directly. That referral carries your name and reputation.' },
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
  return (
    <main className="page">
      <div className="blob blob-a" />
      <div className="blob blob-b" />

      {/* ─── HERO ─── */}
      <section className="page-hero">
        <motion.div className="page-hero-inner" initial="hidden" animate="visible" variants={fadeUp} custom={0}>
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
            actually need. Teach live sessions, verify real project work, refer
            talent directly to employers, and earn from every course you run.
          </p>
          <div className="hero-actions">
            <a href="mailto:alieu@joinirl.co.uk" className="btn btn-orange">
              Apply to teach →
            </a>
            <Link to="/students" className="btn btn-glass">See the student view</Link>
          </div>
        </motion.div>
      </section>

      {/* ─── WHY LERN ─── */}
      <section className="lsec">
        <div className="section-inner">
          <motion.header className="sec-head"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <span className="sec-tag">WHY LERN</span>
            <h2>You already know what<br />employers actually want.</h2>
            <p className="sec-sub">
              Most platforms that "help you teach online" are built around video content,
              passive consumption, and certificates that mean nothing. LERN is the opposite.
              Live teaching. Real projects. Verified outcomes. The kind of learning that changes careers.
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
          <div className="value-grid">
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
            <span className="sec-tag">EARNINGS</span>
            <h2>75% of every course.<br />Paid directly to you.</h2>
            <p className="cta-sub">
              Students pay for optional paid courses. You keep 75%. LERN takes 25%
              to keep the platform running, keep students free, and keep institutions free.
              That's the deal. No hidden fees, no payout thresholds, no games.
            </p>
            <div className="revenue-stats">
              <div className="rev-stat">
                <strong>75%</strong>
                <span>revenue share</span>
              </div>
              <div className="rev-stat">
                <strong>Direct</strong>
                <span>payout to you</span>
              </div>
              <div className="rev-stat">
                <strong>Your terms</strong>
                <span>teach when you want</span>
              </div>
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
              But if you know your field and can teach it live, we want to hear from you.
            </p>
            <div className="cta-btns">
              <a href="mailto:alieu@joinirl.co.uk" className="btn btn-orange btn-lg">Apply to teach →</a>
              <Link to="/about" className="btn btn-glass btn-lg">About LERN</Link>
            </div>
          </TiltCard>
        </div>
      </section>
    </main>
  )
}
