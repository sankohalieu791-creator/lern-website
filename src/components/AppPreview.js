import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import './AppPreview.css'

/* ── A short, self-looping clip of the real app layout -- not a scroll
   hijack, not a laptop illustration. A browser-window frame (light
   mode only), a mouse arrow that moves to a sidebar item and clicks
   it, the screen changes, a one-line explanation appears. Loops. ── */

const NAV = ['Feed', 'Work Experience', 'Review', 'Students', 'Guest invite', 'Briefs', 'Workshops', 'Interest received', 'Job tracking', 'Dashboard']

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
      <div className="ap-post ap-post-ghost" />
    </div>
  )
}

function BriefsView() {
  return (
    <div className="ap-view">
      <div className="ap-row-head">
        <span className="ap-h">Briefs</span>
        <span className="ap-create">+ Create</span>
      </div>
      <div className="ap-card">
        <div className="ap-card-top">
          <p className="ap-card-title">Design a poster for our open day</p>
          <span className="ap-pill">New</span>
        </div>
        <p className="ap-card-sub">Due Fri · Year 13 Business Studies</p>
      </div>
      <div className="ap-card ap-card-ghost" />
      <div className="ap-card ap-card-ghost" />
    </div>
  )
}

const VIEWS = { feed: FeedView, briefs: BriefsView }

/* One beat: idle on `start`, cursor moves to `target` nav item, clicks
   it, view swaps to `show`, a short explanation appears, then it holds
   before looping back to the start. */
const SEQUENCE = {
  start: 'Feed',
  target: 'Briefs',
  show: 'briefs',
  explain: 'A Brief sets real work for students — checked against your own criteria before it counts as verified.',
}

const NAV_Y = (label) => 70 + NAV.indexOf(label) * 34 + 17 // matches .ap-navitem layout
// Content and the nav highlight both derive from `phase` directly (no
// separate "clicking" phase with its own boundary) so they can never
// flip at slightly different moments -- that's what caused a ~300ms
// window where the sidebar said one screen and the content showed
// another.
const PHASES = [
  { key: 'idle', ms: 900 },
  { key: 'moving', ms: 850 },
  { key: 'explaining', ms: 2900 },
  { key: 'resetting', ms: 900 },
]

export default function AppPreview() {
  const [phaseIdx, setPhaseIdx] = useState(0)
  const [justClicked, setJustClicked] = useState(false)
  const phase = PHASES[phaseIdx].key

  useEffect(() => {
    const t = setTimeout(() => setPhaseIdx(i => (i + 1) % PHASES.length), PHASES[phaseIdx].ms)
    if (phase === 'explaining') {
      setJustClicked(true)
      const ct = setTimeout(() => setJustClicked(false), 400)
      return () => { clearTimeout(t); clearTimeout(ct) }
    }
    return () => clearTimeout(t)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phaseIdx])

  const showingBriefs = phase === 'explaining'
  const View = VIEWS[showingBriefs ? SEQUENCE.show : 'feed']
  const cursorAt = (phase === 'idle' || phase === 'resetting') ? NAV_Y(SEQUENCE.start) : NAV_Y(SEQUENCE.target)
  const clicking = justClicked

  return (
    <div className="ap-wrap">
      <div className="ap-window">
        <div className="ap-chrome">
          <span className="ap-dot" /><span className="ap-dot" /><span className="ap-dot" />
          <span className="ap-url">app.getlern.com</span>
        </div>
        <div className="ap-body">
          <div className="ap-sidebar">
            <span className="ap-wordmark">LERN</span>
            {NAV.map(n => (
              <span key={n} className={`ap-navitem${n === (showingBriefs ? SEQUENCE.target : SEQUENCE.start) ? ' ap-navitem-active' : ''}`}>{n}</span>
            ))}
          </div>
          <div className="ap-main">
            <AnimatePresence>
              <motion.div key={showingBriefs ? 'briefs' : 'feed'} className="ap-scene" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
                <View />
              </motion.div>
            </AnimatePresence>
            <AnimatePresence>
              {phase === 'explaining' && (
                <motion.div className="ap-explain" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.25 }}>
                  {SEQUENCE.explain}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <motion.div className="ap-cursor" animate={{ top: cursorAt }} transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}>
            <svg width="20" height="22" viewBox="0 0 20 22" fill="none">
              <path d="M1 1L1 17.5L5.2 13.8L7.8 19.8L10.4 18.6L7.9 12.6L13.5 12.6L1 1Z" fill="#111" stroke="white" strokeWidth="1.2" strokeLinejoin="round" />
            </svg>
            {clicking && <motion.span className="ap-click-ring" initial={{ scale: 0.4, opacity: 0.6 }} animate={{ scale: 2, opacity: 0 }} transition={{ duration: 0.5 }} />}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
