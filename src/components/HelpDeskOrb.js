import { useRef, useState } from 'react'
import './HelpDeskOrb.css'

/* ── The real Help Desk icon from the app: an organic blob (not a
   circle) with two small "eyes" that drift through a slow gaze loop.
   It's not an AI avatar — just a deliberately alive-looking icon for
   a hand-written knowledge base. Reused here pixel-for-pixel, plus a
   bit of extra reactivity (eyes track the cursor on hover) that only
   makes sense on a page people are actually pointing a mouse at. ── */

export default function HelpDeskOrb({ size = 56, eyeSize = 10, onClick, active = false }) {
  const ref = useRef(null)
  const [track, setTrack] = useState(null)

  const handleMove = (e) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const cx = r.left + r.width / 2
    const cy = r.top + r.height / 2
    const dx = Math.max(-1, Math.min(1, (e.clientX - cx) / (r.width / 2)))
    const dy = Math.max(-1, Math.min(1, (e.clientY - cy) / (r.height / 2)))
    setTrack({ x: dx * (eyeSize * 0.6), y: dy * (eyeSize * 0.6) })
  }

  return (
    <button
      ref={ref}
      type="button"
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={() => setTrack(null)}
      aria-label="LERN Help Desk"
      className={`hdo-orb${active ? ' hdo-orb-active' : ''}`}
      style={{ width: size, height: size }}
    >
      <span className={`hdo-eyes${track ? ' hdo-tracking' : ''}`} style={track ? { transform: `translate(${track.x}px, ${track.y}px)` } : undefined}>
        <span style={{ width: Math.max(2, eyeSize * 0.3), height: eyeSize }} />
        <span style={{ width: Math.max(2, eyeSize * 0.3), height: eyeSize }} />
      </span>
    </button>
  )
}
