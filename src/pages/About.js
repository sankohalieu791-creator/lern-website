import React from 'react'
import { motion } from 'framer-motion'
import './About.css'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (d = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: d, ease: [0.16, 1, 0.3, 1] },
  }),
}

const PROBLEMS = [
  { title: 'Education without outcomes.', body: 'Millions complete courses on Udemy and Coursera. 90% never finish. Those who do get a certificate that proves nothing to employers.' },
  { title: 'Skills without proof.', body: 'Real coaches, mentors, and practitioners transform lives daily. Without a verified record, none of that counts. Real ability stays invisible.' },
  { title: 'Opportunity without access.', body: '1 million NEETs in the UK alone. University costs £27,000. Geography decides your fate. The system locks out the people who need it most.' },
  { title: 'Knowledge without reward.', body: 'The world\'s best teachers earn a fraction of what they should. Platforms take the cut. LERN changes that.' },
]

const APPROACH = [
  { n: '01', title: 'Proof over certificates', body: 'Students build real projects. Sit real assessments. Earn instructor endorsements. Their LERN profile is evidence, not just a credential.' },
  { n: '02', title: 'Live over recorded', body: 'Real instructors teaching live. Real interaction. Real community. That\'s when learning actually happens.' },
  { n: '03', title: 'Free for every learner', body: 'Every course. Every exam. Every credential. Free. Always. No exceptions.' },
  { n: '04', title: 'Fair income for instructors', body: 'Multiple income streams. Real careers from real teaching. The knowledge economy should pay the knowledge makers.' },
]

export default function About() {
  return (
    <div className="about">

      {/* ── Header ── */}
      <motion.section className="about-header"
        initial="hidden" animate="visible" variants={fadeUp} custom={0}>
        <h1>About <em>LERN</em></h1>
        <p>We're not building another course platform. We're building a system that helps young people prove what they can do.</p>
      </motion.section>

      {/* ── Mission ── */}
      <section className="about-mission">
        <motion.div className="mission-card about-glass"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
          <h2>Our Mission</h2>
          <p>Millions of young people have potential but no way to prove it. Millions of employers need talent but can't identify it. LERN creates a trusted record of skills, projects, and verified achievements that bridges that gap.</p>
          <p>We believe education should be free. Proof should be real. Opportunity should be open to everyone.</p>
          <div className="mission-quote">
            <p>"Helping young people prove what they can do."</p>
          </div>
        </motion.div>
      </section>

      {/* ── Problem ── */}
      <section className="about-problem">
        <motion.h2
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
          The problem we're solving.
        </motion.h2>
        <div className="problem-grid">
          {PROBLEMS.map((p, i) => (
            <motion.div key={p.title} className="problem-item about-glass"
              custom={i * 0.08} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Approach ── */}
      <section className="about-approach">
        <motion.h2
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
          How we're different.
        </motion.h2>
        <div className="approach-items">
          {APPROACH.map((a, i) => (
            <motion.div key={a.n} className="approach-item about-glass"
              custom={i * 0.1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="approach-num">{a.n}</div>
              <div>
                <h4>{a.title}</h4>
                <p>{a.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Contact ── */}
      <section className="about-contact">
        <motion.div className="contact-card about-glass"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
          <div className="contact-glow" />
          <h2>Get in touch.</h2>
          <p>Whether you represent a school, local authority, employer, or organisation — or you are an instructor or potential partner — we would love to hear from you.</p>
          <p className="contact-info">IRL Connect Ltd — Registered in England &amp; Wales</p>
        </motion.div>
      </section>

    </div>
  )
}
