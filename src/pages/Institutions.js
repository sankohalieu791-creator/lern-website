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
  { icon: '◈', title: 'Private branded space', body: 'Your institution\'s own LERN environment. Your name, your branding, your students. Nobody else\'s.' },
  { icon: '◎', title: 'Live virtual classrooms', body: 'Your teachers deliver sessions directly through LERN. Students join from anywhere. No third-party tools needed.' },
  { icon: '◆', title: 'Real employer connection', body: 'Employers post live briefs for your students to complete. They review the work and contact the best candidates directly.' },
  { icon: '◉', title: 'Gatsby Benchmark reporting', body: 'Built-in tracking and reporting for all 8 Gatsby Benchmarks. Everything you need for Ofsted, in one place.' },
  { icon: '◈', title: 'Student verified profiles', body: 'Every student builds a LERN profile of verified work and skills. A proof record they carry with them after they leave.' },
  { icon: '◎', title: 'Zero cost. Permanently.', body: 'Free for every school, college, and sixth form. No trial period, no hidden tier, no catch. That\'s the model.' },
]

const HOW_IT_WORKS = [
  { n: '01', title: 'Sign up your institution', body: 'Takes five minutes. We set up your private space, branded to your school or college.' },
  { n: '02', title: 'Your teachers start delivering', body: 'Careers, enrichment, employability, or curriculum — any subject, live through LERN.' },
  { n: '03', title: 'Students build real proof', body: 'Every session ends with real work that goes onto a verified student profile.' },
  { n: '04', title: 'Employers discover your students', body: 'Hiring companies post live briefs and review student work directly. Your students get seen.' },
]

export default function Institutions() {
  return (
    <main className="page">
      <div className="blob blob-a" />
      <div className="blob blob-b" />

      {/* ─── HERO ─── */}
      <section className="page-hero">
        <motion.div className="page-hero-inner" initial="hidden" animate="visible" variants={fadeUp} custom={0}>
          <span className="eyebrow">
            <span className="pulse-dot" />
            Schools · Colleges · Sixth forms
          </span>
          <h1>
            Free for your institution.<br />
            <em className="h1-em">Free for your students.</em><br />
            Permanently.
          </h1>
          <p className="hero-lead">
            LERN gives schools, colleges, and sixth forms a private platform to run live
            career sessions, connect students with real employers, and track every Gatsby
            Benchmark — at no cost, forever.
          </p>
          <div className="hero-actions">
            <a href="mailto:alieu@joinirl.co.uk" className="btn btn-orange">
              Set up your institution →
            </a>
            <Link to="/students" className="btn btn-glass">See the student view</Link>
          </div>
        </motion.div>
      </section>

      {/* ─── WHY FREE ─── */}
      <section className="lsec">
        <div className="section-inner">
          <motion.header className="sec-head"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <span className="sec-tag">WHY FREE</span>
            <h2>The students who need this most<br />are in schools with the least budget.</h2>
            <p className="sec-sub">
              We built LERN to close a gap that money shouldn't determine.
              A school in a deprived area deserves the same employer connections as one in a wealthy suburb.
              Charging institutions would defeat the point.
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
            <h2>Everything your careers programme<br />needs. Nothing it doesn't.</h2>
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
            <h2>Up and running<br />in a week.</h2>
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

      {/* ─── THE GATSBY BENCHMARKS ─── */}
      <section className="lsec">
        <div className="section-inner">
          <motion.header className="sec-head"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <span className="sec-tag">GATSBY BENCHMARKS</span>
            <h2>Built-in evidence<br />for every inspection.</h2>
            <p className="sec-sub">
              LERN tracks and logs activity against all 8 Gatsby Benchmarks automatically.
              Employer encounters, live employer briefs, workplace experiences, encounters with
              further and higher education — all recorded and reportable.
            </p>
          </motion.header>
          <div className="diff-grid">
            {[
              'Stable careers programme',
              'Learning from career & labour market information',
              'Addressing the needs of each student',
              'Linking curriculum learning to careers',
              'Encounters with employers and employees',
              'Experience of workplaces',
              'Encounters with further & higher education',
              'Personal guidance',
            ].map((bm, i) => (
              <TiltCard key={bm} className="g-card diff-card gatsby-card"
                custom={i * 0.05} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <span className="gatsby-num">{String(i + 1).padStart(2, '0')}</span>
                <p>{bm}</p>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="lsec cta-sec">
        <div className="section-inner">
          <TiltCard className="g-card cta-inner"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <div className="cta-glow" />
            <span className="sec-tag">GET SET UP</span>
            <h2>Ready to get started?<br />It takes five minutes.</h2>
            <p className="cta-sub">
              Email us and we'll set up your institution's private LERN space. No procurement,
              no contract, no cost. Just a platform your students can use from day one.
            </p>
            <div className="cta-btns">
              <a href="mailto:alieu@joinirl.co.uk" className="btn btn-orange btn-lg">Email us to get started →</a>
              <Link to="/employers" className="btn btn-glass btn-lg">Are you an employer?</Link>
            </div>
          </TiltCard>
        </div>
      </section>
    </main>
  )
}
