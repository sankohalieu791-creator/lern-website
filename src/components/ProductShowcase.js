import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './ProductShowcase.css'

/* ── Phone frame chrome, same recipe as Home.js's IPhoneMockup --
   kept separate rather than sharing a component, since this scales
   and times very differently and the two shouldn't risk drifting
   each other's layout. ── */
const SPEC = { w: 393, h: 852, radius: 56, bezel: 12, topSafe: 59, bottomSafe: 34 }
const ISLAND = { w: 126, h: 37, r: 20 }
const SCALE = 0.78

function shadeHex(hex, pct) {
  const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex.trim())
  if (!m) return hex
  const [r, g, b] = [parseInt(m[1], 16), parseInt(m[2], 16), parseInt(m[3], 16)]
  const k = (100 + pct) / 100
  const c = v => Math.max(0, Math.min(255, Math.round(v * k)))
  return `#${c(r).toString(16).padStart(2, '0')}${c(g).toString(16).padStart(2, '0')}${c(b).toString(16).padStart(2, '0')}`
}

/* ── A believable four-beat story, not random clicking: set work,
   a student does it, a tutor checks it, it's verified. That loop is
   the entire pitch, so the demo just shows the loop happening. ── */
const SCENES = [
  { id: 'dashboard', cursor: { x: 176, y: 300 }, hold: 2200 },
  { id: 'briefs', cursor: { x: 176, y: 210 }, hold: 2200 },
  { id: 'review', cursor: { x: 292, y: 238 }, hold: 2200 },
  { id: 'verified', cursor: null, hold: 2600 },
]

function Cursor({ target, clicking }) {
  if (!target) return null
  return (
    <motion.div
      className="ps-cursor"
      animate={{ left: target.x, top: target.y }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.span
        className="ps-cursor-dot"
        animate={{ scale: clicking ? [1, 0.72, 1] : 1 }}
        transition={{ duration: 0.3 }}
      />
      {clicking && <motion.span className="ps-cursor-ring" initial={{ scale: 0.6, opacity: 0.55 }} animate={{ scale: 2.4, opacity: 0 }} transition={{ duration: 0.55 }} />}
    </motion.div>
  )
}

function Pill({ children, bg, fg }) {
  return <span className="ps-pill" style={{ background: bg, color: fg }}>{children}</span>
}

function DashboardScene() {
  return (
    <div className="ps-screen">
      <div className="ps-topbar">
        <span className="ps-wordmark">LERN</span>
        <span className="ps-avatar">D</span>
      </div>
      <p className="ps-org">Riverside Academy</p>
      <p className="ps-org-sub">You're the safeguarding lead — every review is logged.</p>
      <div className="ps-stat-grid">
        {[
          ['6', 'Students'], ['2', 'Active briefs'], ['4', 'Awaiting review'], ['2', 'Verified'],
        ].map(([n, l], i) => (
          <motion.div key={l} className={`ps-stat${i === 1 ? ' ps-stat-focus' : ''}`}
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}>
            <span className="ps-stat-n">{n}</span>
            <span className="ps-stat-l">{l}</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function BriefsScene() {
  return (
    <div className="ps-screen">
      <div className="ps-row-head">
        <span className="ps-h">Briefs</span>
        <span className="ps-create">+ Create</span>
      </div>
      <motion.div className="ps-card" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
        <div className="ps-card-top">
          <p className="ps-card-title">Design a poster for our open day</p>
          <Pill bg="#E6F1FB" fg="#185FA5">New</Pill>
        </div>
        <p className="ps-card-sub">Due Fri · Year 13 Business Studies</p>
      </motion.div>
      <div className="ps-card ps-card-ghost" />
      <div className="ps-card ps-card-ghost" />
    </div>
  )
}

function ReviewScene() {
  return (
    <div className="ps-screen">
      <div className="ps-row-head">
        <span className="ps-h">Review</span>
        <Pill bg="#FAEEDA" fg="#854F0B">1 waiting</Pill>
      </div>
      <motion.div className="ps-review-row" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
        <span className="ps-avatar ps-avatar-blue">AO</span>
        <div className="ps-review-text">
          <p className="ps-review-name">Amara Okafor</p>
          <p className="ps-review-sub">Design a poster for our open day</p>
        </div>
        <span className="ps-verify-btn">Verify</span>
      </motion.div>
    </div>
  )
}

function VerifiedScene() {
  return (
    <div className="ps-screen ps-screen-center">
      <motion.span
        className="ps-check-ring"
        initial={{ scale: 0.4, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 16 }}
      >
        <svg viewBox="0 0 20 20" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" width="30" height="30">
          <path d="M4 10l4 4 8-8" />
        </svg>
      </motion.span>
      <motion.p className="ps-verified-title" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        Verified
      </motion.p>
      <motion.p className="ps-verified-sub" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.32 }}>
        Added to Amara's portfolio — real work, checked by a real tutor.
      </motion.p>
    </div>
  )
}

const SCENE_COMPONENTS = { dashboard: DashboardScene, briefs: BriefsScene, review: ReviewScene, verified: VerifiedScene }

export default function ProductShowcase() {
  const [step, setStep] = useState(0)
  const [clicking, setClicking] = useState(false)
  const scene = SCENES[step]

  useEffect(() => {
    setClicking(false)
    if (!scene.cursor) {
      const advance = setTimeout(() => setStep(s => (s + 1) % SCENES.length), scene.hold)
      return () => clearTimeout(advance)
    }
    const click = setTimeout(() => setClicking(true), scene.hold - 600)
    const advance = setTimeout(() => setStep(s => (s + 1) % SCENES.length), scene.hold)
    return () => { clearTimeout(click); clearTimeout(advance) }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step])

  const Scene = SCENE_COMPONENTS[scene.id]
  const outerW = SPEC.w + SPEC.bezel * 2
  const outerH = SPEC.h + SPEC.bezel * 2
  const outerR = SPEC.radius + SPEC.bezel
  const hex = '#1c1e22'
  const frameGrad = `linear-gradient(135deg, ${shadeHex(hex, 8)} 0%, ${hex} 40%, ${shadeHex(hex, -14)} 100%)`

  return (
    <div className="ps-wrap" style={{ width: outerW * SCALE, height: outerH * SCALE }}>
      <div style={{ transform: `scale(${SCALE})`, transformOrigin: 'top left' }}>
        <div className="ps-frame" style={{ width: outerW, height: outerH, borderRadius: outerR, background: frameGrad, padding: SPEC.bezel }}>
          <div className="ps-glass" style={{ borderRadius: SPEC.radius }}>
            <div className="ps-island" aria-hidden style={{ width: ISLAND.w, height: ISLAND.h, borderRadius: ISLAND.r }} />
            <div className="ps-content" style={{ top: SPEC.topSafe, bottom: SPEC.bottomSafe }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={scene.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  style={{ height: '100%' }}
                >
                  <Scene />
                </motion.div>
              </AnimatePresence>
              <Cursor target={scene.cursor} clicking={clicking} />
            </div>
            <div className="ps-home-indicator" aria-hidden />
          </div>
        </div>
      </div>
    </div>
  )
}
