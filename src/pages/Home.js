import React, { useRef, useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './Home.css'

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (d = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, delay: d, ease: [0.16, 1, 0.3, 1] },
  }),
}

/* ── Interactive tilt card — every glass card responds to mouse hover ── */
function TiltCard({ children, className, initial, whileInView, viewport, variants, custom, style, ...rest }) {
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
      ref={ref}
      className={className}
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      variants={variants}
      custom={custom}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        ...style,
        transform: `perspective(800px) rotateX(${t.y * -7}deg) rotateY(${t.x * 7}deg) ${t.on ? 'scale(1.025)' : 'scale(1)'}`,
        transition: 'transform 0.18s ease-out',
        willChange: 'transform',
      }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

const TICKER = [
  'Live instructor-led cohorts',
  'Verified proof employers trust',
  'Real projects · Real outcomes',
  'Built for learners left behind',
  'Industry-aligned credentials',
  'Live instructor feedback',
]

const MINI_FACES = ['A', 'J', 'M', 'K', 'S']

export default function Home() {
  const heroRef = useRef(null)
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  const onHeroMove = useCallback((e) => {
    const r = heroRef.current?.getBoundingClientRect()
    if (!r) return
    setMouse({ x: (e.clientX - r.left) / r.width - 0.5, y: (e.clientY - r.top) / r.height - 0.5 })
  }, [])

  const onHeroLeave = useCallback(() => setMouse({ x: 0, y: 0 }), [])

  /* Parallax helpers — each depth gives a different speed so layers separate */
  const sp = (dx, dy) => ({
    transform: `translate(${mouse.x * dx}px, ${mouse.y * dy}px)`,
    transition: 'transform 0.35s cubic-bezier(0.16,1,0.3,1)',
  })

  /* Main card tilt — follows mouse on top of its static CSS angle */
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
    <main className="home">
      <div className="blob blob-a" />
      <div className="blob blob-b" />
      <div className="blob blob-c" />

      {/* ─── HERO ─── */}
      <section className="hero">

        {/* Spheres at hero level — behind hero-inner in the z-stack.
            backdrop-filter on glass cards sees them as actual background. */}
        <div className="sp sp-a" style={sp(-55, -38)} />
        <div className="sp sp-b" style={sp(-32, -22)} />
        <div className="sp sp-e" style={sp(-18, -14)} />
        {/* Foreground spheres — in front of everything */}
        <div className="sp sp-c" style={{ transform: `translate(${mouse.x * 42}px, ${mouse.y * 28}px)`, transition: 'transform 0.35s cubic-bezier(0.16,1,0.3,1)', zIndex: 10 }} />
        <div className="sp sp-d" style={{ transform: `translate(${mouse.x * 62}px, ${mouse.y * 44}px)`, transition: 'transform 0.35s cubic-bezier(0.16,1,0.3,1)', zIndex: 10 }} />

        <div className="hero-inner">

          <motion.div className="hero-copy"
            initial="hidden" animate="visible" variants={fadeUp} custom={0}>
            <span className="eyebrow">
              <span className="pulse-dot" />
              Live cohorts · Verified proof · Real outcomes
            </span>
            <h1>
              Skill-building<br />
              <em className="h1-em">for the ones</em><br />
              left behind.
            </h1>
            <p className="hero-lead">
              LERN combines live teaching, real projects, and employer-aligned
              credentials — so every learner can prove what they can do.
            </p>
            <div className="hero-actions">
              <Link to="/explore" className="btn btn-orange">
                Browse courses <span aria-hidden="true">→</span>
              </Link>
              <a href="https://www.lernapp.uk" target="_blank" rel="noopener noreferrer"
                className="btn btn-glass">Get the App</a>
            </div>
            <div className="hero-pills">
              <div className="stat-pill">
                <strong>100+</strong>
                <span>Live sessions / month</span>
              </div>
              <div className="stat-pill">
                <strong>98%</strong>
                <span>Learner satisfaction</span>
              </div>
            </div>
          </motion.div>

          {/* ── Interactive 3D glass hero ── */}
          <div className="hero-visual" ref={heroRef}
            onMouseMove={onHeroMove} onMouseLeave={onHeroLeave}>

            {/* Main live-session glass card */}
            <div className="tilt-wrap" style={mainTilt}>
              <motion.div className="g-card main-card"
                animate={{ y: [0, -18, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}>
                <div className="mc-bar">
                  <span className="live-chip"><span className="live-ring" />LIVE</span>
                  <span className="mc-time">2:34 remaining</span>
                </div>
                <p className="mc-course">Web Development<br />Fundamentals</p>
                <div className="mc-instructor">
                  <div className="mc-ava">A</div>
                  <div className="mc-ava-info">
                    <div className="mc-iname">Alieu S.</div>
                    <div className="mc-irole">Lead Instructor</div>
                  </div>
                  <span className="mc-viewers">247 live</span>
                </div>
                <div className="mc-prog">
                  <div className="mc-prog-bar">
                    <div className="mc-prog-fill" style={{ width: '62%' }} />
                  </div>
                  <div className="mc-prog-meta">
                    <span>62% complete</span><span>38% left</span>
                  </div>
                </div>
                <div className="mc-footer">
                  <div className="mc-faces">
                    {MINI_FACES.map((l, i) => (
                      <div key={i} className="mc-face" style={{ zIndex: 5 - i }}>{l}</div>
                    ))}
                    <span className="mc-more">+242 learners</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Badges — also respond to mouse, each at its own depth */}
            <div className="tilt-wrap tilt-b1" style={b1Tilt}>
              <motion.div className="g-badge"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}>
                <span className="badge-icon b-green">✓</span>
                <div>
                  <div className="badge-label">Credential earned</div>
                  <div className="badge-sub">Web Dev · Cohort 12</div>
                </div>
              </motion.div>
            </div>

            <div className="tilt-wrap tilt-b2" style={b2Tilt}>
              <motion.div className="g-badge"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}>
                <span className="badge-icon b-blue">◷</span>
                <div>
                  <div className="badge-label">Next live session</div>
                  <div className="badge-sub">Starts in 2 hours</div>
                </div>
              </motion.div>
            </div>

            <div className="tilt-wrap tilt-b3" style={b3Tilt}>
              <motion.div className="g-badge"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 1.4 }}>
                <span className="badge-icon b-orange">★</span>
                <div>
                  <div className="badge-label">Verified outcome</div>
                  <div className="badge-sub">Employer-recognised</div>
                </div>
              </motion.div>
            </div>


          </div>
        </div>
      </section>

      {/* ─── RIBBON ─── */}
      <div className="ribbon">
        <div className="ribbon-track">
          {[...TICKER, ...TICKER].map((t, i) => (
            <span key={i} className="ribbon-item">
              {t} <span className="rdot" aria-hidden="true">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* ─── WHY LERN ─── */}
      <section className="lsec value-sec">
        <div className="section-inner">
          <motion.header className="sec-head"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <span className="sec-tag">WHY LERN</span>
            <h2>Designed to change who can learn<br />and how they prove it.</h2>
          </motion.header>
          <div className="value-grid">
            {[
              { icon: '◈', title: 'Built for real impact', body: 'Live learning, real projects, verified outcomes — designed for people who need a pathway, not an extra expense.' },
              { icon: '◎', title: 'No barriers to entry', body: 'Live learning, real projects, and verified outcomes built to be as accessible as possible for those who need it.' },
              { icon: '◆', title: 'Industry-aligned proof', body: 'Projects and credentials employers actually recognise, not just another badge to collect.' },
              { icon: '◉', title: 'Community-led cohorts', body: 'Learn live with peers, ask questions in real time, and stay motivated through every course.' },
            ].map((c, i) => (
              <TiltCard key={c.title} className="g-card v-card"
                custom={i * 0.08} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <span className="v-icon">{c.icon}</span>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="lsec how-sec">
        <div className="section-inner">
          <motion.header className="sec-head"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <span className="sec-tag">HOW IT WORKS</span>
            <h2>Three steps from joining<br />to verified proof.</h2>
          </motion.header>
          <div className="how-grid">
            {[
              { n: '01', title: 'Join a live cohort', body: 'Start every course with a live session guided by instructors who answer your questions as you learn.' },
              { n: '02', title: 'Build real work', body: 'Complete a meaningful project that shows your skills — not just your ability to click through videos.' },
              { n: '03', title: 'Earn verified proof', body: 'Receive verification from instructors and community review that signals readiness to employers.' },
            ].map((s, i) => (
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

      {/* ─── WHO IT'S FOR ─── */}
      <section className="lsec for-sec">
        <div className="section-inner">
          <motion.header className="sec-head"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <span className="sec-tag">WHO IT'S FOR</span>
            <h2>For learners, changers,<br />and instructors.</h2>
          </motion.header>
          <div className="for-grid">
            {[
              {
                tag: 'Pathways', title: 'Learners',
                desc: 'Access live courses, build real projects, and earn verified credentials.',
                bullets: ['Live classes with real feedback', 'Project-based curriculum', 'Verified credentials'],
                href: '/explore', label: 'Browse courses', external: false,
              },
              {
                tag: 'New pathways', title: 'Career changers',
                desc: 'Transition into a new field with flexible live learning and employer-ready skills.',
                bullets: ['Flexible schedules', 'Employer-ready skills', 'Accessible pathways'],
                href: '/explore', label: 'Start changing', external: false,
              },
              {
                tag: 'Teach live', title: 'Instructors',
                desc: 'Reach real learners, deliver live sessions, and earn from your expertise on your terms.',
                bullets: ['Reach motivated learners', 'Verify outcomes', 'Earn from your expertise'],
                href: 'https://www.lernapp.uk', label: 'Start teaching →', external: true,
              },
            ].map((c, i) => (
              <TiltCard key={c.title} className="g-card for-card"
                custom={i * 0.1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <span className="for-tag">{c.tag}</span>
                <h3>{c.title}</h3>
                <p className="for-desc">{c.desc}</p>
                <ul className="for-list">
                  {c.bullets.map(b => (
                    <li key={b}><span className="for-dot" />{b}</li>
                  ))}
                </ul>
                {c.external
                  ? <a href={c.href} target="_blank" rel="noopener noreferrer"
                      className="btn btn-orange btn-sm">{c.label}</a>
                  : <Link to={c.href} className="btn btn-orange btn-sm">{c.label} →</Link>
                }
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
            <h2>Live learning that lets you<br />build proof, not pass tests.</h2>
            <p className="cta-sub">Real skills. Real credentials. Built for the learners who need it most.</p>
            <div className="cta-btns">
              <Link to="/explore" className="btn btn-orange btn-lg">Start learning today →</Link>
              <a href="https://www.lernapp.uk" target="_blank" rel="noopener noreferrer"
                className="btn btn-glass btn-lg">Get the App</a>
            </div>
          </TiltCard>
        </div>
      </section>

    </main>
  )
}
