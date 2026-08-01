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
      ref={ref} className={className} initial={initial} whileInView={whileInView}
      viewport={viewport} variants={variants} custom={custom}
      onMouseMove={onMove} onMouseLeave={onLeave}
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
  'Verified proof employers trust',
  'Free for students. Always.',
  'Free for schools and colleges',
  'Live courses from real professionals',
  'Real projects · Real outcomes',
  'Employer discovery built in',
]

const MINI_FACES = ['A', 'J', 'M', 'K', 'S']

const WHAT_LERN_DOES = [
  { icon: '◈', title: 'Learn live', body: 'Young people take live courses and workshops from real professionals, not pre-recorded videos on a shelf.' },
  { icon: '◎', title: 'Prove it', body: 'They build a verified profile of real, reviewed work. A portfolio an employer can trust, which a CV can never be.' },
  { icon: '◆', title: 'Get hired', body: 'Employers browse those profiles, reach out directly, and hire. A real route from the classroom to a job.' },
]

const WHO_FOR = [
  {
    tag: 'Schools & colleges', title: 'Institutions',
    desc: 'Give your students verified proof and evidence your careers provision. Free, always.',
    bullets: ['Private branded space', 'Live virtual classrooms', 'Gatsby-mapped reporting'],
    href: '/institutions', label: 'Set up free',
  },
  {
    tag: 'Charities & support services', title: 'Organisations',
    desc: 'Give the young people you support verified proof and a safe route to work. Free for your organisation.',
    bullets: ['Safe employer contact routed through you', 'Verified skill profiles', 'Progression data for funders'],
    href: '/organisations', label: 'Learn more',
  },
  {
    tag: 'Get your learners hired', title: 'Training providers',
    desc: 'You train learners brilliantly. LERN makes sure that training turns into a job.',
    bullets: ['Verified skill profiles', 'Employers reach out directly', 'Live interview practice'],
    href: '/training-providers', label: 'Learn more',
  },
  {
    tag: 'Hire better', title: 'Employers',
    desc: 'See what a young person can actually do before you ever interview them.',
    bullets: ['Browse verified profiles', 'Set a live brief', 'Contact candidates directly'],
    href: 'mailto:alieu@joinirl.co.uk', label: 'Talk to us', external: true,
  },
  {
    tag: 'Young people', title: 'Students',
    desc: 'Show what you can do. Get found by the people who hire. Free to join.',
    bullets: ['Learn live', 'Verified profile', 'Employers come to you'],
    href: 'https://lernapp.uk', label: 'Sign up free', external: true,
  },
]

export default function Home() {
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
    <main className="home">
      <div className="blob blob-a" />
      <div className="blob blob-b" />
      <div className="blob blob-c" />

      {/* ─── HERO ─── */}
      <section className="hero">
        <div className="sp sp-a" style={sp(-55, -38)} />
        <div className="sp sp-b" style={sp(-32, -22)} />
        <div className="sp sp-e" style={sp(-18, -14)} />
        <div className="sp sp-c" style={{ transform: `translate(${mouse.x * 42}px, ${mouse.y * 28}px)`, transition: 'transform 0.35s cubic-bezier(0.16,1,0.3,1)', zIndex: 10 }} />
        <div className="sp sp-d" style={{ transform: `translate(${mouse.x * 62}px, ${mouse.y * 44}px)`, transition: 'transform 0.35s cubic-bezier(0.16,1,0.3,1)', zIndex: 10 }} />

        <div className="hero-inner">
          <motion.div className="hero-copy" initial="hidden" animate="visible" variants={fadeUp} custom={0}>
            <span className="eyebrow">
              <span className="pulse-dot" />
              Free for schools, colleges and students · Always
            </span>
            <h1>
              Proof of what<br />
              <em className="h1-em">young people</em><br />
              can actually do.
            </h1>
            <p className="hero-lead">
              Young people build a verified profile of real work. Employers find them
              and reach out directly. LERN is the bridge between finishing a course
              and getting hired.
            </p>
            <div className="hero-actions">
              <a href="https://lernapp.uk" target="_blank" rel="noopener noreferrer" className="btn btn-orange">
                Sign up <span aria-hidden="true">→</span>
              </a>
              <Link to="/institutions" className="btn btn-glass">See how it works</Link>
            </div>
            <div className="hero-pills">
              <div className="stat-pill"><strong>Free</strong><span>for schools &amp; students</span></div>
              <div className="stat-pill"><strong>Live</strong><span>real professionals teaching</span></div>
            </div>
          </motion.div>

          <div className="hero-visual" ref={heroRef} onMouseMove={onHeroMove} onMouseLeave={onHeroLeave}>
            <div className="tilt-wrap" style={mainTilt}>
              <motion.div className="g-card main-card"
                animate={{ y: [0, -18, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}>
                <div className="mc-bar">
                  <span className="live-chip"><span className="live-ring" />LIVE</span>
                  <span className="mc-time">31 mins remaining</span>
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
                    <div className="mc-prog-fill" style={{ width: '55%' }} />
                  </div>
                  <div className="mc-prog-meta">
                    <span>55% complete</span><span>45% left</span>
                  </div>
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
                  <div className="badge-label">Interview unlocked</div>
                  <div className="badge-sub">Employer reached out directly</div>
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

      {/* ─── THE PROBLEM ─── */}
      <section className="lsec problem-sec">
        <div className="section-inner">
          <motion.header className="sec-head"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <span className="sec-tag">THE PROBLEM</span>
            <h2>Young people don't<br />lack advice. They lack proof.</h2>
            <p className="sec-sub">
              Schools and colleges are full of careers information, virtual work experience and job listings.
              None of it survives an application sift. Employers don't want to know what a young person was taught.
              They want evidence of what that young person can do.
            </p>
            <p className="sec-sub">
              Today, no platform gives a school leaver that evidence. LERN does.
            </p>
          </motion.header>
        </div>
      </section>

      {/* ─── WHAT LERN DOES ─── */}
      <section className="lsec value-sec">
        <div className="section-inner">
          <motion.header className="sec-head"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <span className="sec-tag">WHAT LERN DOES</span>
            <h2>Learn live. Prove it.<br />Get hired.</h2>
          </motion.header>
          <div className="how-grid">
            {WHAT_LERN_DOES.map((c, i) => (
              <TiltCard key={c.title} className="g-card v-card"
                custom={i * 0.1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <span className="v-icon">{c.icon}</span>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
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
            <h2>Free for schools, colleges<br />and students. Always.</h2>
          </motion.header>
          <div className="for-grid for-grid-wrap">
            {WHO_FOR.map((c, i) => (
              <TiltCard key={c.title} className="g-card for-card"
                custom={i * 0.08} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <span className="for-tag">{c.tag}</span>
                <h3>{c.title}</h3>
                <p className="for-desc">{c.desc}</p>
                <ul className="for-list">
                  {c.bullets.map(b => (
                    <li key={b}><span className="for-dot" />{b}</li>
                  ))}
                </ul>
                {c.external
                  ? <a href={c.href} target={c.href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer" className="btn btn-orange btn-sm">{c.label} →</a>
                  : <Link to={c.href} className="btn btn-orange btn-sm">{c.label} →</Link>
                }
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SAFEGUARDING ─── */}
      <section className="lsec">
        <div className="section-inner">
          <TiltCard className="g-card story-card"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <span className="sec-tag">SAFEGUARDING, BUILT IN</span>
            <div className="story-body">
              <p>
                Because our users include under-18s, safety is designed into the platform, not added on.
                For under-18s, employers never make contact directly — it is routed through the young person's
                school or college. Sessions are moderated and recorded, instructors are vetted, and our approach
                is aligned to Keeping Children Safe in Education.
              </p>
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
            <span className="sec-tag">GET STARTED</span>
            <h2>Every school already has courses.<br />What they don't have is proof.</h2>
            <p className="cta-sub">That's what we built.</p>
            <div className="cta-btns">
              <a href="https://lernapp.uk" target="_blank" rel="noopener noreferrer" className="btn btn-orange btn-lg">Sign up →</a>
              <Link to="/institutions" className="btn btn-glass btn-lg">For institutions</Link>
            </div>
          </TiltCard>
        </div>
      </section>
    </main>
  )
}
