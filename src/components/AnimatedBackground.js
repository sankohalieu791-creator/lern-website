import { useEffect, useRef } from 'react'

// Soft, glowing layered-blob texture -- large blurred radial gradients
// that drift slowly and lean toward the cursor, the same "aurora mesh"
// look as a modern OS wallpaper (soft overlapping translucent waves,
// not hard-edged lines). Replaces an earlier canvas version that drew
// thin bezier-curve strokes -- that read as "lines", not the soft
// glowing texture actually wanted; this is CSS-blurred gradient blobs
// instead, which gets the soft bloomy edge a stroke can't.
//
// Brand-toned, not a literal copy of an Apple wallpaper's blue/lilac --
// cream base with the brand orange as the warm glow, one cooler
// neutral blob for depth so it doesn't read as a flat orange wash.
// drift: [angular speed, phase, amplitude%] for a slow autonomous
// wander, on top of which the mouse-parallax offset is added -- both
// computed together in the rAF loop below, never a CSS `animation` on
// the same `transform` property, which would just fight (and lose to)
// a JS-set inline transform every frame.
const BLOBS = [
  { color: '248,181,122', size: 62, top: '-10%', left: '-8%', px: 26, py: 16, speed: 0.18, phase: 0 },
  { color: '255,214,189', size: 70, top: '8%', left: '48%', px: -20, py: 22, speed: 0.14, phase: 1.4 },
  { color: '226,214,235', size: 58, top: '46%', left: '-6%', px: 18, py: -18, speed: 0.16, phase: 2.6 },
  { color: '255,196,150', size: 66, top: '52%', left: '58%', px: -24, py: -14, speed: 0.12, phase: 4.0 },
  { color: '255,233,214', size: 50, top: '20%', left: '22%', px: 14, py: 20, speed: 0.20, phase: 5.2 },
]

// `fixed` -- page-wide mode: sized/positioned to the whole viewport
// instead of whatever element renders it (the original hero-scoped
// use), mouse-tracked off `window` instead of a parent container, and
// stays put (position: fixed) as the page scrolls past it.
export default function AnimatedBackground({ fixed = false }) {
  const rootRef = useRef(null)
  const blobRefs = useRef([])
  const mouse = useRef({ x: 0.5, y: 0.5 })
  const target = useRef({ x: 0.5, y: 0.5 })
  const raf = useRef(null)

  useEffect(() => {
    const root = rootRef.current
    const parent = root.parentElement
    let t = 0

    const onMove = (e) => {
      const r = fixed ? { left: 0, top: 0, width: window.innerWidth, height: window.innerHeight } : parent.getBoundingClientRect()
      target.current = {
        x: (e.clientX - r.left) / r.width,
        y: (e.clientY - r.top) / r.height,
      }
    }
    const moveTarget = fixed ? window : parent
    moveTarget.addEventListener('mousemove', onMove)

    function tick() {
      mouse.current.x += (target.current.x - mouse.current.x) * 0.04
      mouse.current.y += (target.current.y - mouse.current.y) * 0.04
      const dx = (mouse.current.x - 0.5) * 2
      const dy = (mouse.current.y - 0.5) * 2
      blobRefs.current.forEach((el, i) => {
        if (!el) return
        const b = BLOBS[i]
        const driftX = Math.sin(t * b.speed + b.phase) * 22
        const driftY = Math.cos(t * b.speed * 0.8 + b.phase) * 16
        el.style.transform = `translate(${dx * b.px + driftX}px, ${dy * b.py + driftY}px)`
      })
      t += 0.016
      raf.current = requestAnimationFrame(tick)
    }
    tick()

    return () => {
      cancelAnimationFrame(raf.current)
      moveTarget.removeEventListener('mousemove', onMove)
    }
  }, [fixed])

  return (
    <div ref={rootRef} className={fixed ? 'aurora-bg aurora-bg-fixed' : 'aurora-bg'} aria-hidden="true">
      {BLOBS.map((b, i) => (
        <span
          key={i}
          ref={el => (blobRefs.current[i] = el)}
          className="aurora-blob"
          style={{
            width: `${b.size}%`,
            height: `${b.size}%`,
            top: b.top,
            left: b.left,
            background: `radial-gradient(circle, rgba(${b.color},0.55) 0%, rgba(${b.color},0) 70%)`,
          }}
        />
      ))}
    </div>
  )
}
