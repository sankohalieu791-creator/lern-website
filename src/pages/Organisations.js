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
  { icon: '◈', title: 'Verified skill profiles', body: 'Your young people build a verifiable record of real, reviewed work. Not a certificate — proof that an employer can trust and a young person can be proud of.' },
  { icon: '◎', title: 'Safe employer contact — routed through you', body: 'Employers can reach the young people you support, but contact is never direct. It comes through your organisation first. You stay in control.' },
  { icon: '◆', title: 'Live courses and workshops', body: 'Delivered by real professionals. Your young people attend live, ask questions, and build actual work — not watch videos alone.' },
  { icon: '◉', title: 'Progression data', body: 'Evidence of outcomes for your reporting and funders. Who attended, what they built, whether an employer made contact. All tracked.' },
  { icon: '◈', title: 'A private, branded space', body: 'Your own area within LERN. Your cohort, your control, your branding. Separate from the general platform.' },
]

const MINI_FACES = ['J', 'A', 'M', 'T', 'K']

export default function Organisations() {
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
              Charities · Support services · Community groups
            </span>
            <h1>
              Give the young people<br />
              you support verified proof<br />
              <em className="h1-em">and a safe route to work.</em>
            </h1>
            <p className="hero-lead">
              Free for your organisation and the young people you support.
            </p>
            <div className="hero-actions">
              <a href="mailto:hello@lernapp.uk" className="btn btn-orange">
                Get in touch →
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
                  <span className="mc-time">St Giles Trust</span>
                </div>
                <p className="mc-course">Employability Skills<br />Building Your Work Profile</p>
                <div className="mc-instructor">
                  <div className="mc-ava">S</div>
                  <div className="mc-ava-info">
                    <div className="mc-iname">Sarah K.</div>
                    <div className="mc-irole">Employment Coach</div>
                  </div>
                  <span className="mc-viewers">14 learners</span>
                </div>
                <div className="mc-prog">
                  <div className="mc-prog-bar">
                    <div className="mc-prog-fill" style={{ width: '74%' }} />
                  </div>
                  <div className="mc-prog-meta"><span>74% complete</span><span>26% left</span></div>
                </div>
                <div className="mc-footer">
                  <div className="mc-faces">
                    {MINI_FACES.map((l, i) => (
                      <div key={i} className="mc-face" style={{ zIndex: 5 - i }}>{l}</div>
                    ))}
                    <span className="mc-more">+9 learners</span>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="tilt-wrap tilt-b1" style={b1Tilt}>
              <motion.div className="g-badge" animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}>
                <span className="badge-icon b-green">✓</span>
                <div><div className="badge-label">Profile verified</div><div className="badge-sub">Project reviewed by professional</div></div>
              </motion.div>
            </div>

            <div className="tilt-wrap tilt-b2" style={b2Tilt}>
              <motion.div className="g-badge" animate={{ y: [0, 10, 0] }} transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}>
                <span className="badge-icon b-blue">◆</span>
                <div><div className="badge-label">Employer contacted</div><div className="badge-sub">Routed through your organisation</div></div>
              </motion.div>
            </div>

            <div className="tilt-wrap tilt-b3" style={b3Tilt}>
              <motion.div className="g-badge" animate={{ y: [0, -8, 0] }} transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 1.4 }}>
                <span className="badge-icon b-orange">★</span>
                <div><div className="badge-label">Free for your organisation</div><div className="badge-sub">Always</div></div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="lsec">
        <div className="section-inner">
          <motion.header className="sec-head" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <span className="sec-tag">THE PROBLEM WE SOLVE</span>
            <h2>The hardest part isn't building their skills.<br />It's getting those skills recognised.</h2>
            <p className="sec-sub">
              If you work with young people — especially those the formal system overlooks — you know that
              the barrier isn't ability. It's proof. LERN gives your young people a verified profile of real work,
              so they can show what they can do rather than lead with what they lack.
            </p>
          </motion.header>
        </div>
      </section>

      <section className="lsec">
        <div className="section-inner">
          <motion.header className="sec-head" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <span className="sec-tag">WHAT YOU GET</span>
            <h2>Everything your young people need.<br />Nothing to buy.</h2>
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
          <TiltCard className="g-card story-card" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <span className="sec-tag">WHY IT'S FREE</span>
            <div className="story-body">
              <p>
                You bring young people onto the platform. That's the value. We're funded by the employers
                who hire them, never by the organisations supporting them. There's nothing to procure,
                nothing to negotiate, and no catch.
              </p>
            </div>
          </TiltCard>
        </div>
      </section>

      <section className="lsec">
        <div className="section-inner">
          <TiltCard className="g-card story-card" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <span className="sec-tag">WHO WE WORK WITH</span>
            <div className="story-body">
              <p>
                We're already working with St Giles Trust and Lambeth Council. We work with any organisation
                supporting young people — particularly those the formal education and employment systems
                have let down.
              </p>
              <p>
                If your young people face barriers to employment that have nothing to do with their ability,
                LERN was built for them.
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
            <h2>Let's talk about<br />your cohort.</h2>
            <p className="cta-sub">
              Email us and we'll get your organisation set up. No procurement, no cost, no commitment.
              Just a platform your young people can use from day one.
            </p>
            <div className="cta-btns">
              <a href="mailto:hello@lernapp.uk" className="btn btn-orange btn-lg">Email us to get started →</a>
              <Link to="/employers" className="btn btn-glass btn-lg">For employers</Link>
            </div>
          </TiltCard>
        </div>
      </section>
    </main>
  )
}
