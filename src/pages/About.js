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

const PRINCIPLES = [
  { n: '01', title: 'Free for anyone who learns', body: 'Every student, everywhere. No exceptions, no trial period, no bait-and-switch. The product that changes a young person\'s life cannot have a paywall in front of it.' },
  { n: '02', title: 'Proof over certificates', body: 'A certificate from LERN means a professional reviewed your actual work and said: this is good. That\'s different from a PDF that says you completed a course.' },
  { n: '03', title: 'Live over recorded', body: 'You can\'t ask a video a question. Live teaching means real instructors, real interaction, and real accountability. The learning that changes careers happens in rooms — even virtual ones.' },
  { n: '04', title: 'Access over advantage', body: 'We built LERN so that where you grew up, who your parents know, and how much money your family has are not the deciding factors in whether you get a career. That\'s the whole point.' },
]

export default function About() {
  return (
    <main className="about">
      <div className="blob blob-a" />
      <div className="blob blob-b" />

      {/* ─── HERO ─── */}
      <motion.section className="page-hero"
        initial="hidden" animate="visible" variants={fadeUp} custom={0}>
        <div className="page-hero-inner">
          <span className="eyebrow">
            <span className="pulse-dot" />
            Our story
          </span>
          <h1>
            This started because<br />
            <em className="h1-em">someone needed it</em><br />
            to exist.
          </h1>
        </div>
      </motion.section>

      {/* ─── FOUNDER STORY ─── */}
      <section className="lsec">
        <div className="section-inner">
          <TiltCard className="g-card story-card"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <span className="sec-tag">THE FOUNDER</span>
            <div className="story-body">
              <p>
                Alieu Sankoh was born in Sierra Leone and came to the UK aged 12.
                He grew up in the UK state education system. He was good at school.
                But when he was 18, he couldn't go to university — the money wasn't there.
              </p>
              <p>
                He watched people with the same ability as him — or less — get opportunities
                because of who their parents were, which school they went to, or which city
                they happened to live in. He watched the system filter people out before they
                had a chance to show what they could do.
              </p>
              <p>
                He built LERN because the gap between what a young person can do and what
                the system lets them prove they can do is a problem that nobody has properly
                fixed. Not universities, not job boards, not online course platforms.
              </p>
              <p className="story-quote">
                "I built LERN because I needed it to exist when I was 18.
                I want it to be there for everyone who needs it now."
              </p>
              <p className="story-attr">— Alieu Sankoh, Founder</p>
            </div>
          </TiltCard>
        </div>
      </section>

      {/* ─── WHAT LERN IS ─── */}
      <section className="lsec">
        <div className="section-inner">
          <motion.header className="sec-head"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <span className="sec-tag">WHAT LERN IS</span>
            <h2>Not a course platform.<br />A proof platform.</h2>
            <p className="sec-sub">
              There are thousands of places to watch someone explain something.
              What's missing is a place where young people can learn it live, do it for real,
              get it verified by a professional, and have employers actually see it.
              That's what LERN is.
            </p>
          </motion.header>
        </div>
      </section>

      {/* ─── WHAT THIS MEANS IN PRACTICE ─── */}
      <section className="lsec">
        <div className="section-inner">
          <motion.header className="sec-head"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <span className="sec-tag">WHAT THIS MEANS IN PRACTICE</span>
            <h2>A school in a deprived area<br />gets the same platform as one in Kensington.</h2>
            <p className="sec-sub">
              An 18-year-old in Sunderland gets the same employer connections as one in London.
              A student without a degree gets the same shot at proving their skills as one with a 2:1.
              That's the promise. We're building the infrastructure to keep it.
            </p>
          </motion.header>
        </div>
      </section>

      {/* ─── PRINCIPLES ─── */}
      <section className="lsec">
        <div className="section-inner">
          <motion.header className="sec-head"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <span className="sec-tag">OUR PRINCIPLES</span>
            <h2>Four things we won't<br />compromise on.</h2>
          </motion.header>
          <div className="approach-items">
            {PRINCIPLES.map((p, i) => (
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
                LERN is live. Our first college partnership begins in the autumn term.
                An NHS employer is posting live roles on the platform.
                We are onboarding institutions, employers, and instructors now.
              </p>
              <p>
                We're a small team, building something ambitious, funded by the conviction
                that this should exist. If you want to be part of it — as a school, an employer,
                an instructor, or an investor — we want to hear from you.
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
              Whether you're a school, an employer, an instructor, a journalist, or an investor —
              email Alieu directly. There's no contact form here. Real conversations work better.
            </p>
            <div className="cta-btns">
              <a href="mailto:alieu@joinirl.co.uk" className="btn btn-orange btn-lg">alieu@joinirl.co.uk →</a>
              <Link to="/institutions" className="btn btn-glass btn-lg">Set up your institution</Link>
            </div>
            <p className="about-legal">IRL Connect Ltd · Registered in England &amp; Wales</p>
          </TiltCard>
        </div>
      </section>
    </main>
  )
}
