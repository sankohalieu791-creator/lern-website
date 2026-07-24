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

const SKILLS = ['UI Design', 'UX Research', 'Figma', 'Data Analysis']

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
              Early-career hiring · Verified talent · No recruiter fees
            </span>
            <h1>
              Hire people you can<br />
              <em className="h1-em">actually assess</em><br />
              before you interview.
            </h1>
            <p className="hero-lead">
              LERN gives employers direct access to verified early-career talent.
              See their real work, not their CV. Run live briefs in partnered schools.
              Contact candidates directly.
            </p>
            <div className="hero-actions">
              <a href="mailto:alieu@joinirl.co.uk" className="btn btn-orange">
                Talk to us →
              </a>
              <Link to="/institutions" className="btn btn-glass">For institutions</Link>
            </div>
          </motion.div>

          <div className="page-hero-visual" ref={heroRef} onMouseMove={onHeroMove} onMouseLeave={onHeroLeave}>
            <div className="tilt-wrap" style={mainTilt}>
              <motion.div className="g-card main-card"
                animate={{ y: [0, -18, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}>
                <div className="mc-bar">
                  <span className="live-chip" style={{ background: 'rgba(50,120,255,0.12)', border: '1px solid rgba(50,120,255,0.3)', color: '#0044cc' }}>
                    MATCH
                  </span>
                  <span className="mc-time">NHS Digital brief</span>
                </div>
                <p className="mc-course">Jordan M.<br />UX &amp; Product Design</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1rem', position: 'relative', zIndex: 1 }}>
                  {SKILLS.map(s => (
                    <span key={s} style={{ fontSize: '0.7rem', fontWeight: 700, padding: '0.25rem 0.65rem', background: 'rgba(0,180,90,0.12)', border: '1px solid rgba(0,180,90,0.25)', color: '#005522', borderRadius: '999px' }}>✓ {s}</span>
                  ))}
                </div>
                <div className="mc-prog">
                  <div className="mc-prog-bar">
                    <div className="mc-prog-fill" style={{ width: '92%' }} />
                  </div>
                  <div className="mc-prog-meta"><span>Profile match: 92%</span><span>Top candidate</span></div>
                </div>
                <div className="mc-footer">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 1 }}>
                    <span style={{ fontSize: '0.75rem', color: '#FF6600', fontWeight: 700 }}>3 employers viewed</span>
                    <span style={{ fontSize: '0.72rem', color: 'rgba(80,30,0,0.5)' }}>Contact directly →</span>
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
                  <div className="badge-label">Skills verified</div>
                  <div className="badge-sub">Reviewed by professionals</div>
                </div>
              </motion.div>
            </div>

            <div className="tilt-wrap tilt-b2" style={b2Tilt}>
              <motion.div className="g-badge"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}>
                <span className="badge-icon b-blue">◷</span>
                <div>
                  <div className="badge-label">Live brief closes in 2 days</div>
                  <div className="badge-sub">47 submissions so far</div>
                </div>
              </motion.div>
            </div>

            <div className="tilt-wrap tilt-b3" style={b3Tilt}>
              <motion.div className="g-badge"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 1.4 }}>
                <span className="badge-icon b-orange">★</span>
                <div>
                  <div className="badge-label">No recruiter fee</div>
                  <div className="badge-sub">Contact candidates directly</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
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
              { title: 'The proof problem', body: 'Grades tell you how someone performed in an exam. They say nothing about how they work, think, or solve real problems.' },
              { title: 'The cost problem', body: 'Recruiters charge 15–20% of first year salary. For entry-level hires, that\'s money spent without any better signal on quality.' },
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
