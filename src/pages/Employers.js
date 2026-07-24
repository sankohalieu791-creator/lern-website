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

const PLANS = [
  {
    name: 'Starter',
    price: '£750',
    period: '/month',
    desc: 'For organisations starting to build an early-career pipeline.',
    features: [
      'Post up to 2 live employer briefs per month',
      'Search verified student profiles',
      'Direct messaging with candidates',
      'Basic analytics dashboard',
    ],
    cta: 'Get started',
  },
  {
    name: 'Growth',
    price: '£2,000',
    period: '/month',
    desc: 'For organisations actively hiring and engaging young talent.',
    features: [
      'Post unlimited employer briefs',
      'Live brief review sessions with students',
      'Priority placement in student discovery',
      'Gatsby Benchmark employer encounter logging',
      'Dedicated account support',
    ],
    cta: 'Talk to us',
    featured: true,
  },
  {
    name: 'Enterprise',
    price: '£5,000',
    period: '/month',
    desc: 'For large employers building structured early-career programmes.',
    features: [
      'Everything in Growth',
      'Custom employer brief formats',
      'Live employer Q&A sessions',
      'Early access to top candidates',
      'Co-branded institution partnerships',
      'Full data and reporting suite',
    ],
    cta: 'Contact us',
  },
  {
    name: 'Talent pipeline',
    price: '£10,000',
    period: '/month',
    desc: 'For employers who want to shape what the next generation learns.',
    features: [
      'Everything in Enterprise',
      'Curriculum co-design with institutions',
      'Named employer presence on student profiles',
      'First-look access to all new graduates',
      'Live hiring manager sessions in schools',
      'Bespoke partnership agreement',
    ],
    cta: 'Contact us',
  },
]

const HOW_IT_WORKS = [
  { n: '01', title: 'Post a live brief', body: 'Set a real task connected to your actual work. Students complete it live over a session or a week.' },
  { n: '02', title: 'Review the work', body: 'See what candidates actually produce, not what they claim on a CV. Search profiles by verified skill.' },
  { n: '03', title: 'Contact directly', body: 'Message candidates you want to speak to. No recruiter fee. No middleman. Direct access.' },
  { n: '04', title: 'Run live sessions', body: 'Host a Q&A, interview practice, or live assessment session. Students join from partnered institutions.' },
]

export default function Employers() {
  return (
    <main className="page">
      <div className="blob blob-a" />
      <div className="blob blob-b" />

      {/* ─── HERO ─── */}
      <section className="page-hero">
        <motion.div className="page-hero-inner" initial="hidden" animate="visible" variants={fadeUp} custom={0}>
          <span className="eyebrow">
            <span className="pulse-dot" />
            Early-career hiring · Verified talent · No recruiter fees
          </span>
          <h1>
            Hire people you can<br />
            <em className="h1-em">actually assess</em><br />
            before you interview them.
          </h1>
          <p className="hero-lead">
            LERN gives employers direct access to a pool of verified early-career talent.
            See their real work, not their CV. Run live briefs in partnered schools and colleges.
            Contact candidates directly.
          </p>
          <div className="hero-actions">
            <a href="mailto:alieu@joinirl.co.uk" className="btn btn-orange">
              Talk to us →
            </a>
            <Link to="/institutions" className="btn btn-glass">For institutions</Link>
          </div>
        </motion.div>
      </section>

      {/* ─── THE PROBLEM WITH EARLY HIRING ─── */}
      <section className="lsec">
        <div className="section-inner">
          <motion.header className="sec-head"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <span className="sec-tag">THE PROBLEM WITH EARLY HIRING</span>
            <h2>CVs don't tell you<br />if someone can do the job.</h2>
            <p className="sec-sub">
              Early-career candidates have no work history to speak of.
              You're hiring on predicted grades, cover letters, and a 30-minute interview.
              Half your hires don't work out. You don't know why until six months in.
            </p>
          </motion.header>
          <div className="diff-grid">
            {[
              { title: 'The CV problem', body: 'A 19-year-old\'s CV is mostly self-written speculation. You have no way to verify any of it before you commit time to an interview.' },
              { title: 'The volume problem', body: 'Entry-level roles attract hundreds of applications. You can\'t meaningfully review them all. Most candidates never hear back.' },
              { title: 'The proof problem', body: 'Grades tell you how someone performed in an exam. They say nothing about how they work, think, or solve problems under real conditions.' },
              { title: 'The cost problem', body: 'Recruiters charge 15-20% of first year salary. For entry-level hires, that\'s money you\'re spending without any better signal on quality.' },
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

      {/* ─── HOW LERN WORKS FOR EMPLOYERS ─── */}
      <section className="lsec">
        <div className="section-inner">
          <motion.header className="sec-head"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <span className="sec-tag">HOW IT WORKS</span>
            <h2>See what candidates<br />can actually do.</h2>
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
            <h2>Straightforward plans.<br />No recruiter markup.</h2>
            <p className="sec-sub">
              All prices ex VAT. Cancel anytime. Students and institutions always free.
            </p>
          </motion.header>
          <div className="pricing-grid">
            {PLANS.map((p, i) => (
              <TiltCard key={p.name} className={`g-card pricing-card${p.featured ? ' pricing-featured' : ''}`}
                custom={i * 0.1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                {p.featured && <span className="pricing-badge">Most popular</span>}
                <div className="pricing-name">{p.name}</div>
                <div className="pricing-price">
                  {p.price}<span className="pricing-per">{p.period}</span>
                </div>
                <p className="pricing-desc">{p.desc}</p>
                <ul className="pricing-features">
                  {p.features.map(f => (
                    <li key={f}><span className="for-dot" />{f}</li>
                  ))}
                </ul>
                <a href="mailto:alieu@joinirl.co.uk" className={`btn btn-sm ${p.featured ? 'btn-orange' : 'btn-glass'}`}>
                  {p.cta} →
                </a>
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
            <span className="sec-tag">GET STARTED</span>
            <h2>Talk to us.<br />We'll set everything up.</h2>
            <p className="cta-sub">
              Drop us an email and we'll walk you through the platform, set up your employer
              account, and help you post your first live brief.
            </p>
            <div className="cta-btns">
              <a href="mailto:alieu@joinirl.co.uk" className="btn btn-orange btn-lg">Email alieu@joinirl.co.uk →</a>
              <Link to="/students" className="btn btn-glass btn-lg">See the student view</Link>
            </div>
          </TiltCard>
        </div>
      </section>
    </main>
  )
}
