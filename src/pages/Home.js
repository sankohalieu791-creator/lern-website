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
  'Live instructor-led sessions',
  'Verified proof employers trust',
  'Free for students. Always.',
  'Free for schools and colleges',
  'Real projects · Real outcomes',
  'Employer discovery built in',
]

const MINI_FACES = ['A', 'J', 'M', 'K', 'S']

const PROBLEMS = [
  'Certificates prove attendance, not ability',
  'CVs are self-written claims nobody verifies',
  'Recruiters spend 30 seconds on an application',
  '98% of applicants never hear back at all',
  'Work experience depends on who your parents know',
]

const WHAT_LERN_DOES = [
  { icon: '◈', title: 'Learn live', body: 'Real professionals teaching in real time. Not a video you watch alone at 2am.' },
  { icon: '◎', title: 'Build something real', body: 'Every course ends in an actual project, not a quiz.' },
  { icon: '◆', title: 'Get it verified', body: 'Your work is reviewed by a professional and becomes proof on your profile.' },
  { icon: '◉', title: 'Get discovered', body: 'Employers search by proven skill and contact you directly.' },
]

const WHO_FOR = [
  {
    tag: 'Schools & colleges', title: 'Institutions',
    desc: 'Your own private platform, free forever. Run your courses, your way, for your students.',
    bullets: ['Private branded space', 'Live virtual classrooms', 'Gatsby Benchmark reporting'],
    href: '/institutions', label: 'Set up free',
  },
  {
    tag: 'Hire better', title: 'Employers',
    desc: 'Hire early-career talent you can actually assess before you interview.',
    bullets: ['Search by verified skill', 'Set live employer briefs', 'Contact candidates directly'],
    href: '/employers', label: 'Talk to us',
  },
  {
    tag: 'Young people', title: 'Students',
    desc: 'Learn, build proof, get seen. Free, always.',
    bullets: ['Live courses', 'Verified profile', 'Real job opportunities'],
    href: '/students', label: 'Join free',
  },
  {
    tag: 'Teach live', title: 'Instructors',
    desc: 'Reach real learners, deliver live sessions, and meet the talent before anyone else does.',
    bullets: ['Teach on your terms', 'Earn from courses', 'Refer talent directly'],
    href: '/instructors', label: 'Apply to teach',
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
              Free for students · Free for schools · Always
            </span>
            <h1>
              Training and jobs<br />
              <em className="h1-em">young people</em><br />
              can't get elsewhere.
            </h1>
            <p className="hero-lead">
              LERN is where young people learn live from real professionals,
              build real work that proves what they can do, and get discovered
              by employers who are actually hiring.
            </p>
            <div className="hero-actions">
              <Link to="/students" className="btn btn-orange">
                Get started <span aria-hidden="true">→</span>
              </Link>
              <Link to="/institutions" className="btn btn-glass">For institutions</Link>
            </div>
            <div className="hero-pills">
              <div className="stat-pill"><strong>Free</strong><span>for students &amp; schools</span></div>
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
                  <div className="badge-label">Job match unlocked</div>
                  <div className="badge-sub">Employer contacted you directly</div>
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
            <h2>A million young people in the UK<br />are out of work and education.</h2>
            <p className="sec-sub">Not because they can't do the job. Because they can't prove they can,<br />and nobody will give them the chance to try.</p>
          </motion.header>

          <div className="problem-list">
            {PROBLEMS.map((p, i) => (
              <motion.div key={p} className="problem-item g-card"
                custom={i * 0.08} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <span className="problem-x">—</span>
                <p>{p}</p>
              </motion.div>
            ))}
          </div>

          <motion.p className="problem-close"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0.4}>
            Schools and colleges already teach. What they can't give students is real experience,
            real proof, and a real route to an employer. That's the gap. That's what we built LERN to close.
          </motion.p>
        </div>
      </section>

      {/* ─── WHAT LERN DOES ─── */}
      <section className="lsec value-sec">
        <div className="section-inner">
          <motion.header className="sec-head"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <span className="sec-tag">WHAT LERN DOES</span>
            <h2>Four things that change<br />everything for a young person.</h2>
          </motion.header>
          <div className="value-grid">
            {WHAT_LERN_DOES.map((c, i) => (
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

      {/* ─── WHAT MAKES LERN DIFFERENT ─── */}
      <section className="lsec diff-sec">
        <div className="section-inner">
          <motion.header className="sec-head"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <span className="sec-tag">WHAT MAKES LERN DIFFERENT</span>
            <h2>Everything that happens<br />after the teaching.</h2>
            <p className="sec-sub">Anyone can put courses online. Institutions already have courses, and good teachers.<br />What almost none can provide on their own is everything else.</p>
          </motion.header>

          <div className="diff-grid">
            {[
              { title: 'Employer-set live briefs', body: 'A real employer sets a real task. Students complete it live. The employer reviews the work. It isn\'t a simulation — it\'s an audition.' },
              { title: 'Live interview practice', body: 'Not an AI coach. An actual hiring manager, giving real feedback to a young person who has nobody at home to practise with.' },
              { title: 'Employer viewing history', body: '"Three employers viewed your project this week." That notification changes how a young person sees themselves.' },
              { title: 'Application tracking', body: 'Where it went, whether it was opened, and why they weren\'t picked. We fix the silence. 98% of applicants never hear back.' },
              { title: 'Skills gap alerts', body: '"Employers hiring near you want this skill. Here\'s a live course starting Tuesday." Directly actionable.' },
              { title: 'Instructor referrals', body: 'The vouching that well-connected students get for free, made available to everyone. An instructor can put a student in front of employers directly.' },
            ].map((d, i) => (
              <TiltCard key={d.title} className="g-card diff-card"
                custom={i * 0.07} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <h3>{d.title}</h3>
                <p>{d.body}</p>
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
            <h2>Built for everyone<br />the system left out.</h2>
          </motion.header>
          <div className="for-grid">
            {WHO_FOR.map((c, i) => (
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
                <Link to={c.href} className="btn btn-orange btn-sm">{c.label} →</Link>
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
            <span className="sec-tag">WHERE WE ARE</span>
            <h2>LERN is live<br />and working.</h2>
            <p className="cta-sub">
              Our first college partnership begins in the autumn term, with an NHS employer posting
              live roles on the platform. We're onboarding institutions, employers and instructors now.
            </p>
            <div className="cta-btns">
              <Link to="/students" className="btn btn-orange btn-lg">Get started free →</Link>
              <Link to="/institutions" className="btn btn-glass btn-lg">For institutions</Link>
            </div>
          </TiltCard>
        </div>
      </section>
    </main>
  )
}
