import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import './MacBookHero.css'

/* ── Apple-style scroll-scrubbed hero, adapted from a frame-sequence
   spec to plain React/CSS (this site has no Tailwind/shadcn) and from
   hundreds of photographed frames (not something we can produce) to a
   handful of live-rendered app screens. Same mechanic: scroll pins the
   stage, a step card slides in per screen, a progress bar tracks how
   far through you are. Nav/CTA stay out of this component entirely --
   Navbar.js already owns those site-wide. ── */

function MockShell({ active, children }) {
  const NAV = ['Feed', 'Work Experience', 'Dashboard']
  return (
    <div className="mbh-shell">
      <div className="mbh-shell-nav">
        <span className="mbh-shell-wordmark">LERN</span>
        {NAV.map(n => (
          <span key={n} className={`mbh-shell-navitem${n === active ? ' mbh-shell-navitem-active' : ''}`}>{n}</span>
        ))}
      </div>
      <div className="mbh-shell-body">{children}</div>
    </div>
  )
}

function FeedScene() {
  return (
    <MockShell active="Feed">
      <div className="mbh-wins-row">
        {['AO', 'JW', 'LC', 'PN'].map((i, idx) => (
          <span key={i} className={`mbh-win-ring${idx === 0 ? ' mbh-win-ring-new' : ''}`}><span>{i}</span></span>
        ))}
      </div>
      <div className="mbh-post">
        <div className="mbh-post-head">
          <span className="mbh-avatar">AO</span>
          <div>
            <p className="mbh-post-name">Amara Okafor</p>
            <p className="mbh-post-meta">Work verified · 2m ago</p>
          </div>
        </div>
        <p className="mbh-post-text">Just got "Design a poster for our open day" verified by Ms Clarke 🎉</p>
      </div>
      <div className="mbh-post mbh-post-ghost" />
    </MockShell>
  )
}

function WorkExpScene() {
  return (
    <MockShell active="Work Experience">
      <div className="mbh-stat-row">
        <div className="mbh-stat"><span className="mbh-stat-n">14</span><span className="mbh-stat-l">Placed</span></div>
        <div className="mbh-stat"><span className="mbh-stat-n">3</span><span className="mbh-stat-l">Need one</span></div>
        <div className="mbh-stat"><span className="mbh-stat-n">96%</span><span className="mbh-stat-l">Attendance</span></div>
      </div>
      {[['Amara Okafor', 'David\'s Garage · Week 3', '3/3 days'], ['Leon Castillo', 'Northfield HR · Week 1', '1/1 days']].map(([n, s, p]) => (
        <div className="mbh-row" key={n}>
          <span className="mbh-avatar mbh-avatar-blue">{n.split(' ').map(w => w[0]).join('')}</span>
          <div className="mbh-row-text"><p className="mbh-row-name">{n}</p><p className="mbh-row-sub">{s}</p></div>
          <span className="mbh-row-pill">{p}</span>
        </div>
      ))}
    </MockShell>
  )
}

function DashboardScene() {
  return (
    <MockShell active="Dashboard">
      <p className="mbh-org">Riverside Academy</p>
      <div className="mbh-stat-row mbh-stat-row-4">
        {[['6', 'Students'], ['2', 'Active briefs'], ['4', 'Awaiting review'], ['2', 'Verified']].map(([n, l]) => (
          <div className="mbh-stat" key={l}><span className="mbh-stat-n">{n}</span><span className="mbh-stat-l">{l}</span></div>
        ))}
      </div>
      <div className="mbh-alert">
        <span className="mbh-alert-dot" />
        2 submissions overdue &gt;48h
      </div>
    </MockShell>
  )
}

function HelpDeskScene() {
  return (
    <MockShell active={null}>
      <div className="mbh-helpdesk-card">
        <div className="mbh-helpdesk-head">
          <span className="mbh-orb"><span className="mbh-orb-dot" /><span className="mbh-orb-dot" /></span>
          <p className="mbh-helpdesk-title">LERN Help Desk</p>
        </div>
        <div className="mbh-helpdesk-msg mbh-helpdesk-msg-me">How do I create a guest invite?</div>
        <div className="mbh-helpdesk-msg">Open Guest invite, tick the student, and tap "Create invite link" — no account needed on their end.</div>
      </div>
      <p className="mbh-helpdesk-caption">Drag it anywhere — it never has to block your view.</p>
    </MockShell>
  )
}

const SCENES = [
  { id: 'feed', color: '#ff9f3a', num: '01', total: '04', label: 'Feed', title: 'Everyone sees the wins.', description: 'Staff and students post real wins the moment they happen — verified before it ever reaches the feed.', Scene: FeedScene },
  { id: 'workexp', color: '#ff6f9c', num: '02', total: '04', label: 'Work Experience', title: 'Placements, actually tracked.', description: 'Who\'s placed where, for how long, and their attendance — ready to export for Ofsted or a funder.', Scene: WorkExpScene },
  { id: 'dashboard', color: '#5e9bff', num: '03', total: '04', label: 'Dashboard', title: 'Nothing slips through.', description: 'Every student, every brief, everything overdue — one summary for whoever runs safeguarding.', Scene: DashboardScene },
  { id: 'helpdesk', color: '#a37bff', num: '04', total: '04', label: 'Help Desk', title: 'Staff never get stuck.', description: 'A built-in help desk answers how-to questions instantly — written by the LERN team, not generated.', Scene: HelpDeskScene },
]

const STEP_PAD = 0.03
const SCROLL_VH_PER_SCENE = 100

export default function MacBookHero() {
  const spacerRef = useRef(null)
  const [progress, setProgress] = useState(0)
  const [activeIdx, setActiveIdx] = useState(0)
  const [subHidden, setSubHidden] = useState(false)

  useEffect(() => {
    const ranges = SCENES.map((_, i) => {
      const span = 1 / SCENES.length
      return { from: i * span + (i === 0 ? 0 : STEP_PAD), to: (i + 1) * span - (i === SCENES.length - 1 ? 0 : STEP_PAD) }
    })

    const onScroll = () => {
      const spacer = spacerRef.current
      if (!spacer) return
      const rect = spacer.getBoundingClientRect()
      const total = spacer.offsetHeight - window.innerHeight
      const scrolledIntoSpacer = -rect.top
      const p = Math.max(0, Math.min(1, scrolledIntoSpacer / Math.max(1, total)))
      setProgress(p)
      setSubHidden(p > 0.015)
      let idx = 0
      for (let i = 0; i < ranges.length; i++) if (p >= ranges[i].from) idx = i
      setActiveIdx(idx)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    onScroll()
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  const ActiveScene = SCENES[activeIdx].Scene

  return (
    <div className="mbh-root">
      <div className="mbh-stage">
        <div className="mbh-copy">
          <p className="mbh-eyebrow">Verified · Trusted · Safe</p>
          <h1 className="mbh-title">Work that follows you.</h1>
          <p className={`mbh-sub${subHidden ? ' mbh-sub-hidden' : ''}`}>
            LERN connects schools, colleges, training providers and employers around real work — properly checked and safely shared.
          </p>
          <div className={`mbh-btns${subHidden ? ' mbh-sub-hidden' : ''}`}>
            <a href="https://getlern.com" target="_blank" rel="noopener noreferrer" className="btn-glass btn-glass-lg">Get started — it's free</a>
            <a href="https://getlern.com" target="_blank" rel="noopener noreferrer" className="btn-glass btn-glass-lg">See how it works</a>
          </div>
        </div>

        <div className="mbh-laptop-wrap">
          <div className="mbh-laptop">
            <div className="mbh-screen">
              <span className="mbh-camera" aria-hidden />
              <div className="mbh-screen-inner">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={SCENES[activeIdx].id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mbh-scene-wrap"
                  >
                    <ActiveScene />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
            <div className="mbh-base">
              <div className="mbh-notch" />
            </div>
          </div>

          <div className="mbh-cards">
            {SCENES.map((s, i) => {
              const isActive = activeIdx === i
              const isPrev = i < activeIdx
              return (
                <article key={s.id} style={{ '--c': s.color }} className={`mbh-card${isActive ? ' mbh-card-active' : ''}${isPrev ? ' mbh-card-prev' : ''}`}>
                  <div className="mbh-card-head">
                    <span className="mbh-card-num"><strong>{s.num}</strong> / {s.total}</span>
                  </div>
                  <h3 className="mbh-card-title">{s.title}</h3>
                  <p className="mbh-card-desc">{s.description}</p>
                  <span className="mbh-card-label">{s.label}</span>
                </article>
              )
            })}
          </div>
        </div>

        <div className="mbh-scroll-hint" style={{ opacity: subHidden ? 0 : 1 }}>Scroll to explore ↓</div>
        <div className="mbh-progress"><span className="mbh-progress-fill" style={{ width: `${progress * 100}%` }} /></div>
      </div>

      <div ref={spacerRef} className="mbh-spacer" style={{ height: `${SCROLL_VH_PER_SCENE * SCENES.length}vh` }} />
    </div>
  )
}
