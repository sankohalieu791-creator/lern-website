import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './Explore.css'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (d = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: d, ease: [0.16, 1, 0.3, 1] },
  }),
}

const STEPS = [
  { n: '01', title: 'Scroll the feed', body: 'Discover courses the way you discover music — short previews, live sessions, real instructors.' },
  { n: '02', title: 'Join live or on-demand', body: 'Jump into a live session now or watch the recording later. Same course, same credential.' },
  { n: '03', title: 'Build real proof', body: 'Every course requires a real project — actual evidence of what you can do, not just a quiz.' },
  { n: '04', title: 'Get verified', body: 'Knowledge assessment, project review, instructor endorsement — real verification employers trust.' },
  { n: '05', title: 'Access opportunity', body: 'Jobs, internships, apprenticeships, scholarships. Your verified profile opens real doors.' },
]

export default function Explore() {
  return (
    <div className="explore">

      {/* ── Header ── */}
      <motion.section className="explore-header"
        initial="hidden" animate="visible" variants={fadeUp} custom={0}>
        <h1>Unlimited Courses.<br /><span>Zero Cost.</span></h1>
        <p>Any skill. Any level. Taught by real people teaching live right now. Free for every learner. Always.</p>
      </motion.section>

      {/* ── How it works ── */}
      <section className="explore-how">
        <motion.h2
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
          How it works.
        </motion.h2>
        <div className="how-grid">
          {STEPS.map((s, i) => (
            <motion.div key={s.n} className="how-card"
              custom={i * 0.08} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="how-num">{s.n}</div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Unlimited ── */}
      <section className="explore-unlimited">
        <motion.div className="explore-unlimited-card"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
          <div className="card-glow" />
          <h2>Unlimited Courses.</h2>
          <p className="unlimited-sub">Choose the course that defines you.</p>
          <p className="unlimited-desc">
            Coding. Business. Design. Marketing. Coaching. Music. Engineering. Healthcare. Finance.
            Languages. Leadership. Whatever you want to learn — someone on LERN is teaching it live. For free.
          </p>
          <div className="unlimited-note">
            <p>No categories. No limits. The feed shows you everything. You decide what matters.</p>
          </div>
        </motion.div>
      </section>

      {/* ── CTA ── */}
      <section className="explore-cta">
        <motion.div className="explore-cta-box"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
          <h2>Want to teach?</h2>
          <p>Teach live. Build an audience. Earn real income from your knowledge.</p>
          <Link to="/academy" className="btn-outline">Become an Instructor →</Link>
        </motion.div>
      </section>

    </div>
  )
}
