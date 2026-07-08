import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import './Home.css'

function AnimatedCounter({ end, prefix = '', suffix = '', duration = 2.5 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  useEffect(() => {
    if (!inView) return
    let startTimestamp = null
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * end))
      if (progress < 1) requestAnimationFrame(step)
      else setCount(end)
    }
    requestAnimationFrame(step)
  }, [inView, end, duration])

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  )
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } }
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
}

export default function Home() {
  return (
    <div className="home">

      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero-bg-glow" />

        <motion.div
          className="hero-content"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.div variants={fadeUp}>
            <span className="hero-tag">
              <span className="tag-dot" />
              LIVE LEARNING PLATFORM
            </span>
          </motion.div>

          <motion.h1 variants={fadeUp}>
            Millions of young people<br />
            have skills.<br />
            <span className="hero-gradient">No way to prove it.</span>
          </motion.h1>

          <motion.p variants={fadeUp}>
            LERN is where that changes. Free live courses, real projects, verified credentials, and real opportunities — all in one place.
          </motion.p>

          <motion.div className="hero-buttons" variants={fadeUp}>
            <Link to="/explore" className="btn-primary">Learn for Free →</Link>
            <Link to="/academy" className="btn-secondary">Start Teaching →</Link>
          </motion.div>

          <motion.div className="hero-social" variants={fadeUp}>
            <div className="avatars">
              <div className="avatar av1" />
              <div className="avatar av2" />
              <div className="avatar av3" />
            </div>
            <p>Learners thriving. Instructors earning. In real time.</p>
          </motion.div>
        </motion.div>

        {/* App Mockup */}
        <div className="hero-visual">
          <div className="visual-glow" />

          <div className="float-wrapper">
            <motion.div
              className="mockup-card live-session-card"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="mockup-top-bar">
                <div className="live-badge">
                  <span className="live-dot" />
                  LIVE
                </div>
                <span className="viewer-count">
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                    <circle cx="6" cy="4" r="2.5" fill="#a1a1aa" />
                    <path d="M1 10.5c0-2.8 2.2-5 5-5s5 2.2 5 5" stroke="#a1a1aa" strokeWidth="1.3" strokeLinecap="round" fill="none" />
                  </svg>
                  1,247 watching
                </span>
              </div>

              <div className="mockup-thumb">
                <span className="thumb-cat">WEB DEVELOPMENT</span>
                <h4>React Development 2026</h4>
                <p className="thumb-instructor">with Sarah Chen</p>
              </div>

              <div className="mockup-progress-wrap">
                <div className="mockup-progress-bar">
                  <motion.div
                    className="progress-fill"
                    initial={{ width: '0%' }}
                    animate={{ width: '62%' }}
                    transition={{ duration: 1.8, delay: 1.2, ease: 'easeOut' }}
                  />
                </div>
                <span className="progress-time">43:21</span>
              </div>

              <div className="mockup-chat">
                {[
                  { name: 'Alex M.', msg: 'This is insanely clear 🔥' },
                  { name: 'Priya K.', msg: 'Can we recap the hooks?' },
                  { name: 'James W.', msg: 'Best free course ever' },
                ].map((c, i) => (
                  <motion.div
                    key={i}
                    className="chat-msg"
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.5 + i * 0.25 }}
                  >
                    <span className="chat-name">{c.name}</span> {c.msg}
                  </motion.div>
                ))}
              </div>

              <div className="mockup-footer">
                <button className="join-btn">Join Free</button>
                <span className="free-badge">FREE</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="mockup-card cred-card"
            initial={{ opacity: 0, x: 24, y: -10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="cred-icon">✓</div>
            <div>
              <p className="cred-title">Credential Earned</p>
              <p className="cred-sub">React Developer · LERN Verified</p>
            </div>
          </motion.div>

          <motion.div
            className="mockup-card notif-card"
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="notif-pulse" />
            <p>New live session in <strong>2 min</strong></p>
          </motion.div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="stats-section">
        <motion.div
          className="stats-inner"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
        >
          {[
            { end: 273, suffix: 'M', label: 'Young people locked out of quality education worldwide' },
            { end: 1, suffix: 'M', label: 'Young people in the UK classified as NEET with no clear path forward' },
            { prefix: '£', end: 27000, suffix: '+', label: 'Average UK university tuition — a barrier most families cannot afford' },
            { end: 90, suffix: '%', label: 'Dropout rate on passive video platforms like Coursera and Udemy' },
          ].map((s, i) => (
            <motion.div key={i} className="stat-item" variants={fadeUp}>
              <h3>
                <AnimatedCounter prefix={s.prefix || ''} end={s.end} suffix={s.suffix} />
              </h3>
              <p>{s.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── Bento ── */}
      <motion.section
        className="bento-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={stagger}
      >
        <div className="bento-inner">
          <motion.span className="section-label" variants={fadeUp}>OUR SOLUTION</motion.span>
          <motion.h2 variants={fadeUp}>Everything you need.<br />Nothing you don't.</motion.h2>
          <motion.p className="section-sub" variants={fadeUp}>
            LERN is a live learning platform where anyone can learn for free, build real proof of their skills, earn verified credentials, and access genuine opportunities.
          </motion.p>

          <motion.div className="bento-grid" variants={stagger}>

            <motion.div className="bento-card bento-live" variants={fadeUp}>
              <div className="bento-live-badge">
                <span className="bento-live-dot" />
                LIVE NOW
              </div>
              <h3>Real instruction.<br />Right now.</h3>
              <p>Real instructors teaching in real time. Join live, ask questions, and learn alongside thousands — not a recording, not a pre-made video.</p>
            </motion.div>

            <motion.div className="bento-card bento-free" variants={fadeUp}>
              <div className="bento-price">$0</div>
              <h3>Always free.</h3>
              <p>Every course. Every learner. No paywalls, no trials, no hidden fees.</p>
            </motion.div>

            <motion.div className="bento-card bento-proof" variants={fadeUp}>
              <div className="bento-icon-wrap">📁</div>
              <h3>Build real proof.</h3>
              <p>Every course ends with a real project — a website, a campaign, a portfolio. Something employers can actually see.</p>
            </motion.div>

            <motion.div className="bento-card bento-verify" variants={fadeUp}>
              <div className="bento-check">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                  <circle cx="18" cy="18" r="17" stroke="rgba(124,58,237,0.4)" strokeWidth="1" />
                  <path d="M10 18l6 6 10-10" stroke="#a78bfa" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3>Get verified.</h3>
              <p>Knowledge assessment. Project review. Instructor endorsement. Multi-layer verification employers actually trust.</p>
            </motion.div>

            <motion.div className="bento-card bento-feed" variants={fadeUp}>
              <div className="bento-icon-wrap">📱</div>
              <h3>Discovery feed.</h3>
              <p>Find courses the way you find music. Scroll, discover, join live or on-demand. Your pace, your choice.</p>
            </motion.div>

            <motion.div className="bento-card bento-access" variants={fadeUp}>
              <div className="bento-icon-wrap">🚀</div>
              <h3>Access opportunity.</h3>
              <p>Jobs. Internships. Apprenticeships. Mentorships. Your verified profile opens doors that were locked before.</p>
            </motion.div>

          </motion.div>
        </div>
      </motion.section>

      {/* ── For You ── */}
      <motion.section
        className="for-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={stagger}
      >
        <motion.div className="for-inner" variants={stagger}>
          <motion.div className="for-card" variants={fadeUp}>
            <span className="for-tag">FOR LEARNERS</span>
            <h2>For young people.</h2>
            <p>Whether you're in school, out of work, or just starting out — LERN gives you a real path forward. Learn any skill for free, build real projects, earn credentials employers trust, and access jobs, internships, and apprenticeships through your verified profile.</p>
            <ul className="for-list">
              <li>Free courses. Always.</li>
              <li>Learn live or on-demand</li>
              <li>Build a real portfolio</li>
              <li>Earn verified credentials</li>
              <li>Access real opportunities</li>
            </ul>
          </motion.div>

          <motion.div className="for-card" variants={fadeUp}>
            <span className="for-tag">FOR ADULTS</span>
            <h2>For adults.</h2>
            <p>Whether you are a career changer, a parent upskilling, or someone locked out of expensive universities — LERN gives you the same access. Free live courses, real credentials, and skills that matter today, taught by people doing the job right now.</p>
            <ul className="for-list">
              <li>No tuition fees</li>
              <li>Flexible learning</li>
              <li>Real skills from real people</li>
              <li>Credentials employers recognise</li>
              <li>Learn around your life</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* ── Instructor ── */}
      <motion.section
        className="instructor-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={stagger}
      >
        <div className="instructor-inner">
          <motion.span className="section-label" variants={fadeUp}>FOR INSTRUCTORS</motion.span>
          <motion.h2 variants={fadeUp}>You have knowledge.<br />LERN gives you an audience.</motion.h2>
          <motion.p variants={fadeUp}>
            Teach live. Verify your students' work. Build your audience. Earn from multiple streams — all while your students learn for free.
          </motion.p>

          <motion.div className="instructor-points" variants={stagger}>
            {[
              { title: 'Teach live', desc: 'Build real relationships with your students. Not recordings. Real interaction.' },
              { title: 'Verify real work', desc: 'Review student projects. Endorse competency. Your endorsement carries real weight.' },
              { title: 'Earn fairly', desc: 'Multiple income streams. Real money from your real knowledge.' },
              { title: 'Build globally', desc: 'Reach anyone, anywhere. Your audience is not limited to your city.' },
            ].map((pt, i) => (
              <motion.div key={i} className="instructor-point" variants={fadeUp}>
                <h4>{pt.title}</h4>
                <p>{pt.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} style={{ textAlign: 'center' }}>
            <Link to="/academy" className="btn-primary">Become an Instructor →</Link>
          </motion.div>
        </div>
      </motion.section>

      {/* ── Schools ── */}
      <motion.section
        className="schools-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={stagger}
      >
        <div className="schools-inner">
          <motion.span className="section-label" variants={fadeUp}>FOR INSTITUTIONS</motion.span>
          <motion.h2 variants={fadeUp}>For schools and institutions.</motion.h2>
          <motion.p className="section-sub" variants={fadeUp}>
            LERN gives schools and local councils a practical tool to engage young people, track their progress, and demonstrate real impact.
          </motion.p>

          <motion.div className="schools-grid" variants={stagger}>
            {[
              { title: 'Track outcomes', desc: 'See exactly how your students are progressing in real time.' },
              { title: 'Prove impact', desc: 'Real data. Real credentials. Real proof that your students are moving forward.' },
              { title: 'Engage NEETs', desc: 'Give disengaged young people a free, live, social way to learn that actually works.' },
              { title: 'Unlock funding', desc: 'Data-driven impact reports that help you access government funding.' },
            ].map((c, i) => (
              <motion.div
                key={i}
                className="schools-card"
                variants={fadeUp}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <h4>{c.title}</h4>
                <p>{c.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* ── CTA ── */}
      <motion.section
        className="cta-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={stagger}
      >
        <motion.div className="cta-learner" variants={fadeUp}>
          <h2>Ready to start?</h2>
          <p>Everything you need to learn, grow, and get hired — completely free.</p>
          <Link to="/explore" className="btn-cta">Explore Courses →</Link>
        </motion.div>
        <motion.div className="cta-instructor" variants={fadeUp}>
          <h2>Ready to teach?</h2>
          <p>Teach live, build a real audience, and earn genuine income from your knowledge.</p>
          <Link to="/academy" className="btn-cta-outline">Start Teaching →</Link>
        </motion.div>
      </motion.section>

    </div>
  )
}
