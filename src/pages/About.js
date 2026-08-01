import React, { useRef, useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './About.css'
import './Page.css'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (d = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: d, ease: [0.16, 1, 0.3, 1] },
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

const BELIEFS = [
  { n: '01', title: 'Talent is everywhere. Opportunity isn\'t.', body: 'The gap between them is proof — a credible, verified record of what a young person can actually do, and a direct line to the people who hire. That\'s what LERN exists to close.' },
  { n: '02', title: 'The platform has to be free.', body: 'You can\'t charge the schools and students who need this most. We\'re funded by the employers who hire from the platform. That\'s how the model works. It\'s not charity — it\'s alignment.' },
  { n: '03', title: 'Live over recorded.', body: 'You can\'t ask a video a question. Live teaching means real instructors, real interaction, and real accountability. The learning that changes careers happens in rooms — even virtual ones.' },
  { n: '04', title: 'Proof over certificates.', body: 'A mark on LERN means a professional reviewed your actual work and said: this is good. That\'s different from a PDF that says you completed a course.' },
]

export default function About() {
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
    <main className="about page">
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
              Our story
            </span>
            <h1>
              We're building the route into work<br />
              <em className="h1-em">too many young people</em><br />
              never get.
            </h1>
            <p className="hero-lead">
              LERN was founded by Alieu Sankoh. He came to the UK at twelve, was told
              at eighteen he couldn't go to university on financial grounds, and taught
              himself to build instead.
            </p>
            <div className="hero-actions">
              <a href="mailto:alieu@joinirl.co.uk" className="btn btn-orange">
                Talk to us →
              </a>
              <a href="https://lernapp.uk" target="_blank" rel="noopener noreferrer" className="btn btn-glass">Sign up</a>
            </div>
          </motion.div>

          <div className="page-hero-visual" ref={heroRef} onMouseMove={onHeroMove} onMouseLeave={onHeroLeave}>
            <div className="tilt-wrap" style={mainTilt}>
              <motion.div className="g-card main-card"
                animate={{ y: [0, -18, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}>
                <div className="mc-bar">
                  <span className="live-chip" style={{ background: 'rgba(255,102,0,0.15)', color: '#CC4400' }}><span className="live-ring" style={{ background: '#FF6600' }} />FOUNDER</span>
                  <span className="mc-time">Alieu Sankoh</span>
                </div>
                <p className="mc-course" style={{ fontSize: '0.9rem', lineHeight: 1.6, fontStyle: 'italic', color: 'rgba(40,10,0,0.75)' }}>
                  "LERN is the platform I wished I'd had: a way for young people to prove what they can do, regardless of where they started."
                </p>
                <div style={{ borderTop: '1px solid rgba(0,0,0,0.07)', paddingTop: '1rem', position: 'relative', zIndex: 1 }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '1.1rem', fontWeight: 900, color: '#FF6600' }}>Free</div>
                      <div style={{ fontSize: '0.68rem', color: 'rgba(80,30,0,0.55)', fontWeight: 600 }}>always</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '1.1rem', fontWeight: 900, color: '#FF6600' }}>Live</div>
                      <div style={{ fontSize: '0.68rem', color: 'rgba(80,30,0,0.55)', fontWeight: 600 }}>teaching only</div>
                    </div>
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
                  <div className="badge-label">Leyton Sixth Form</div>
                  <div className="badge-sub">First college partnership</div>
                </div>
              </motion.div>
            </div>

            <div className="tilt-wrap tilt-b2" style={b2Tilt}>
              <motion.div className="g-badge"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}>
                <span className="badge-icon b-blue">◆</span>
                <div>
                  <div className="badge-label">NHS · Lambeth Council</div>
                  <div className="badge-sub">Live on platform</div>
                </div>
              </motion.div>
            </div>

            <div className="tilt-wrap tilt-b3" style={b3Tilt}>
              <motion.div className="g-badge"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 1.4 }}>
                <span className="badge-icon b-orange">★</span>
                <div>
                  <div className="badge-label">Onboarding now</div>
                  <div className="badge-sub">Schools · Employers · Providers</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── THE STORY ─── */}
      <section className="lsec">
        <div className="section-inner">
          <TiltCard className="g-card story-card"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <span className="sec-tag">THE STORY</span>
            <div className="story-body">
              <p>
                Alieu Sankoh was born in Sierra Leone and came to the UK aged twelve. He grew up in the UK
                state education system. At eighteen, he was told he couldn't go to university on financial grounds.
                He taught himself to build instead.
              </p>
              <p>
                LERN is the platform he wished he'd had: a way for young people to prove what they can do,
                regardless of where they started. Because the problem is real. Young people from backgrounds
                without the right networks have the ability — but no way to show it. A CV doesn't capture it.
                An interview they never get to doesn't capture it. Employers sift them out before they ever see
                what they're capable of.
              </p>
              <p className="story-quote">
                "Talent is everywhere. Opportunity isn't. The gap between them is proof — and that's what LERN exists to close."
              </p>
              <p className="story-attr">— Alieu Sankoh, Founder</p>
            </div>
          </TiltCard>
        </div>
      </section>

      {/* ─── WHAT WE BELIEVE ─── */}
      <section className="lsec">
        <div className="section-inner">
          <motion.header className="sec-head"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <span className="sec-tag">WHAT WE BELIEVE</span>
            <h2>Four things we won't<br />compromise on.</h2>
          </motion.header>
          <div className="approach-items">
            {BELIEFS.map((p, i) => (
              <TiltCard key={p.n} className="g-card approach-item"
                custom={i * 0.1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <div className="approach-num">{p.n}</div>
                <div>
                  <h4>{p.title}</h4>
                  <p>{p.body}</p>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHERE WE ARE ─── */}
      <section className="lsec">
        <div className="section-inner">
          <TiltCard className="g-card story-card"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <span className="sec-tag">WHERE WE ARE</span>
            <h2>Early. Moving fast.<br />Building for real.</h2>
            <div className="story-body">
              <p>
                The platform is live. It's being used by Leyton Sixth Form College. We're working with
                training providers, Lambeth Council, and St Giles Trust, and we're onboarding our first
                employers now.
              </p>
              <p>
                We're early, and we're building deliberately — with the young people we serve at the centre
                of every decision. If you want to be part of it — as a school, an employer, a training provider,
                or an investor — we want to hear from you.
              </p>
            </div>
          </TiltCard>
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section className="lsec cta-sec">
        <div className="section-inner">
          <TiltCard className="g-card cta-inner"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <div className="cta-glow" />
            <span className="sec-tag">GET IN TOUCH</span>
            <h2>Reach us directly.<br />We reply.</h2>
            <p className="cta-sub">
              Whether you're a school, an employer, a training provider, a journalist, or an investor —
              email Alieu directly. There's no contact form here. Real conversations work better.
            </p>
            <div className="cta-btns">
              <a href="mailto:alieu@joinirl.co.uk" className="btn btn-orange btn-lg">alieu@joinirl.co.uk →</a>
              <Link to="/institutions" className="btn btn-glass btn-lg">Set up your institution</Link>
            </div>
            <p className="about-legal">IRL Connect Ltd · Company No. 17200180</p>
          </TiltCard>
        </div>
      </section>
    </main>
  )
}
