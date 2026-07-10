import React from 'react'
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

const TICKER = [
  'Free live pathways',
  'Verified proof employers trust',
  'Real projects · Real outcomes',
  'Built for learners left behind',
  'No fees · No gatekeepers',
  'Live instructor feedback',
]

const MINI_FACES = ['A', 'J', 'M', 'K', 'S']

export default function Home() {
  return (
    <main className="home">
      <div className="blob blob-a" />
      <div className="blob blob-b" />

      {/* ─── HERO ─── */}
      <section className="hero">
        <div className="hero-inner">

          <motion.div className="hero-copy"
            initial="hidden" animate="visible" variants={fadeUp} custom={0}>
            <span className="eyebrow">
              <span className="pulse-dot" />
              Live cohorts · Verified proof · No tuition
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
                Browse free courses <span aria-hidden="true">→</span>
              </Link>
              <Link to="/academy" className="btn btn-glass">Teach on LERN</Link>
            </div>
            <div className="hero-pills">
              <div className="stat-pill">
                <strong>£0</strong>
                <span>Cost to learners</span>
              </div>
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

          {/* Floating glass UI */}
          <div className="hero-visual">

            {/* Main live-session card */}
            <motion.div className="g-card main-card"
              animate={{ y: [0, -18, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}>
              <div className="mc-bar">
                <span className="live-chip">
                  <span className="live-ring" />LIVE
                </span>
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
                  <span className="mc-more">+242 more learners</span>
                </div>
              </div>
            </motion.div>

            {/* Badge: credential earned */}
            <motion.div className="g-card g-badge badge-tl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}>
              <span className="badge-icon b-green">✓</span>
              <div>
                <div className="badge-label">Credential earned</div>
                <div className="badge-sub">Web Dev · Cohort 12</div>
              </div>
            </motion.div>

            {/* Badge: next session */}
            <motion.div className="g-card g-badge badge-br"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}>
              <span className="badge-icon b-blue">◷</span>
              <div>
                <div className="badge-label">Next live session</div>
                <div className="badge-sub">Starts in 2 hours</div>
              </div>
            </motion.div>

            {/* Badge: free forever */}
            <motion.div className="g-card g-badge badge-tr"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 1.4 }}>
              <span className="badge-icon b-orange">★</span>
              <div>
                <div className="badge-label">Free forever</div>
                <div className="badge-sub">No card required</div>
              </div>
            </motion.div>

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
              { icon: '◎', title: 'Free for every learner', body: 'No subscription. No hidden fees. No gatekeepers. Ever.' },
              { icon: '◆', title: 'Industry-aligned proof', body: 'Projects and credentials employers actually recognise, not just another badge to collect.' },
              { icon: '◉', title: 'Community-led cohorts', body: 'Learn live with peers, ask questions in real time, and stay motivated through every course.' },
            ].map((c, i) => (
              <motion.article key={c.title} className="g-card v-card"
                custom={i * 0.08} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}>
                <span className="v-icon">{c.icon}</span>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </motion.article>
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
              <motion.div key={s.n} className="g-card how-card"
                custom={i * 0.1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}>
                <div className="how-num">{s.n}</div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </motion.div>
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
                tag: 'Free learning', title: 'Learners',
                desc: 'Access live courses, build real projects, and earn verified credentials without spending a penny.',
                bullets: ['Live classes with real feedback', 'Project-based curriculum', 'Verified credentials'],
                cta: '/explore', ctaLabel: 'Browse courses',
              },
              {
                tag: 'New pathways', title: 'Career changers',
                desc: 'Transition into a new field with flexible live learning and employer-ready skills.',
                bullets: ['Flexible schedules', 'Employer-ready skills', 'No tuition burden'],
                cta: '/explore', ctaLabel: 'Start changing',
              },
              {
                tag: 'Teach live', title: 'Instructors',
                desc: 'Reach real learners, deliver live sessions, and earn from your expertise on your terms.',
                bullets: ['Reach motivated learners', 'Verify outcomes', 'Earn from your expertise'],
                cta: '/academy', ctaLabel: 'Start teaching',
              },
            ].map((c, i) => (
              <motion.article key={c.title} className="g-card for-card"
                custom={i * 0.1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}>
                <span className="for-tag">{c.tag}</span>
                <h3>{c.title}</h3>
                <p className="for-desc">{c.desc}</p>
                <ul className="for-list">
                  {c.bullets.map(b => (
                    <li key={b}><span className="for-dot" />{b}</li>
                  ))}
                </ul>
                <Link to={c.cta} className="btn btn-orange btn-sm">{c.ctaLabel} →</Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="lsec cta-sec">
        <div className="section-inner">
          <motion.div className="g-card cta-inner"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <div className="cta-glow" />
            <span className="sec-tag">GET STARTED</span>
            <h2>Live learning that lets you<br />build proof, not pass tests.</h2>
            <p className="cta-sub">No fees. No gatekeepers. Just real skills and real credentials.</p>
            <div className="cta-btns">
              <Link to="/explore" className="btn btn-orange btn-lg">Start learning today →</Link>
              <Link to="/academy" className="btn btn-glass">Become an instructor</Link>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  )
}
