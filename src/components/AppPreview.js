import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import './AppPreview.css'

/* ── A short, self-looping clip of the real app layout -- not a scroll
   hijack, not a laptop illustration. A browser-window frame, a mouse
   arrow that moves down the sidebar clicking through a few real
   screens, a one-line explanation per stop, then a dark-mode beat on
   Dashboard before it loops back to Feed. ── */

const NAV = ['Feed', 'Work Experience', 'Review', 'Students', 'Guest invite', 'Briefs', 'Workshops', 'Interest received', 'Job tracking', 'Dashboard']
const NAV_Y = (label) => 70 + NAV.indexOf(label) * 34 + 17

function FeedView() {
  return (
    <div className="ap-view">
      <div className="ap-wins-row">
        {['AO', 'JW', 'LC', 'PN'].map((i, idx) => (
          <span key={i} className={`ap-win-ring${idx === 0 ? ' ap-win-ring-new' : ''}`}><span>{i}</span></span>
        ))}
      </div>
      <div className="ap-post">
        <div className="ap-post-head">
          <span className="ap-avatar">AO</span>
          <div>
            <p className="ap-post-name">Amara Okafor</p>
            <p className="ap-post-meta">Work verified · 2m ago</p>
          </div>
        </div>
        <p className="ap-post-text">Just got "Design a poster for our open day" verified by Ms Clarke 🎉</p>
      </div>
      <div className="ap-post ap-post-ghost" />
    </div>
  )
}

function WorkExpView() {
  return (
    <div className="ap-view">
      <span className="ap-h">Work Experience</span>
      <div className="ap-row">
        <span className="ap-avatar ap-avatar-blue">AO</span>
        <div className="ap-row-text"><p className="ap-row-name">Amara Okafor</p><p className="ap-row-sub">David's Garage · Week 3</p></div>
        <span className="ap-pill ap-pill-green">3/3 days</span>
      </div>
      <div className="ap-row ap-row-ghost" />
    </div>
  )
}

function GuestInviteView() {
  return (
    <div className="ap-view">
      <span className="ap-h">Guest invite</span>
      <p className="ap-view-sub">Share one student's verified work — no account needed on their end.</p>
      <div className="ap-card">
        <div className="ap-checkrow">
          <span className="ap-check-box">✓</span>
          <span className="ap-row-name">Amara Okafor</span>
        </div>
      </div>
      <span className="ap-create ap-create-block">Create invite link</span>
    </div>
  )
}

function WorkshopsView() {
  return (
    <div className="ap-view">
      <div className="ap-row-head">
        <span className="ap-h">Workshops</span>
        <span className="ap-create">+ Create</span>
      </div>
      <div className="ap-card">
        <div className="ap-card-top">
          <p className="ap-card-title">CV Writing Workshop</p>
          <span className="ap-pill ap-pill-blue">Online</span>
        </div>
        <p className="ap-card-sub">Fri · 2:00pm</p>
      </div>
      <div className="ap-card ap-card-ghost" />
    </div>
  )
}

function DashboardView() {
  return (
    <div className="ap-view">
      <p className="ap-org-name">Riverside Academy</p>
      <div className="ap-stat-row ap-stat-row-4">
        {[['6', 'Students'], ['2', 'Active briefs'], ['4', 'Awaiting review'], ['2', 'Verified']].map(([n, l]) => (
          <div className="ap-stat" key={l}><span className="ap-stat-n">{n}</span><span className="ap-stat-l">{l}</span></div>
        ))}
      </div>
      <div className="ap-needs">
        <p className="ap-needs-head">⚠ Needs attention (4)</p>
        <div className="ap-needs-row">Josh Whitfield — Social Media Campaign</div>
        <div className="ap-needs-row">Ruby Fairweather — Pop-Up Shop</div>
      </div>
    </div>
  )
}

const STOPS = [
  { nav: 'Feed', View: FeedView, explain: 'Everyone sees the wins — verified before they ever reach the feed.', dark: false },
  { nav: 'Work Experience', View: WorkExpView, explain: 'Placements and attendance, tracked automatically.', dark: false },
  { nav: 'Guest invite', View: GuestInviteView, explain: 'Share one student’s verified work with an employer — no account needed.', dark: false },
  { nav: 'Workshops', View: WorkshopsView, explain: 'Live sessions, online or in person — recorded automatically.', dark: false },
  { nav: 'Dashboard', View: DashboardView, explain: 'Light or dark, whenever staff want it.', dark: true },
]

const HOLD_MS = 1500
const MOVE_MS = 550

export default function AppPreview() {
  const [activeIdx, setActiveIdx] = useState(0)
  const [targetIdx, setTargetIdx] = useState(0)
  const [justClicked, setJustClicked] = useState(false)

  // Hold on the active stop, then send the cursor toward the next one.
  useEffect(() => {
    const t = setTimeout(() => setTargetIdx(i => (i + 1) % STOPS.length), HOLD_MS)
    return () => clearTimeout(t)
  }, [activeIdx])

  // Once the cursor has had time to arrive, "click" -- the view and
  // nav highlight only flip here, not the instant the cursor starts
  // moving, so the arrow visibly arrives before anything reacts.
  useEffect(() => {
    if (targetIdx === activeIdx) return
    const t = setTimeout(() => {
      setActiveIdx(targetIdx)
      setJustClicked(true)
      setTimeout(() => setJustClicked(false), 350)
    }, MOVE_MS)
    return () => clearTimeout(t)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetIdx])

  const stop = STOPS[activeIdx]
  const View = stop.View
  const dark = stop.dark

  return (
    <div className="ap-wrap">
      <div className={`ap-window${dark ? ' ap-window-dark' : ''}`}>
        <div className="ap-chrome">
          <span className="ap-dot" /><span className="ap-dot" /><span className="ap-dot" />
          <span className="ap-url">getlern.com</span>
        </div>
        <div className="ap-body">
          <div className="ap-sidebar">
            <span className="ap-wordmark">LERN</span>
            {NAV.map(n => (
              <span key={n} className={`ap-navitem${n === stop.nav ? ' ap-navitem-active' : ''}`}>{n}</span>
            ))}
          </div>
          <div className="ap-main">
            <AnimatePresence>
              <motion.div key={stop.nav} className="ap-scene" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.18 }}>
                <View />
              </motion.div>
            </AnimatePresence>
            <AnimatePresence>
              <motion.div key={`explain-${stop.nav}`} className="ap-explain" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.2 }}>
                {stop.explain}
              </motion.div>
            </AnimatePresence>
          </div>
          <motion.div className="ap-cursor" animate={{ top: NAV_Y(STOPS[targetIdx].nav) }} transition={{ duration: MOVE_MS / 1000, ease: [0.22, 1, 0.36, 1] }}>
            <svg width="20" height="22" viewBox="0 0 20 22" fill="none">
              <path d="M1 1L1 17.5L5.2 13.8L7.8 19.8L10.4 18.6L7.9 12.6L13.5 12.6L1 1Z" fill="#111" stroke="white" strokeWidth="1.2" strokeLinejoin="round" />
            </svg>
            {justClicked && <motion.span className="ap-click-ring" initial={{ scale: 0.4, opacity: 0.6 }} animate={{ scale: 2, opacity: 0 }} transition={{ duration: 0.45 }} />}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
