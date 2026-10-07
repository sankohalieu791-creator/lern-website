import { useEffect, useRef } from 'react'

export default function AnimatedBackground() {
  const canvasRef = useRef(null)
  const mouse = useRef({ x: 0.5, y: 0.5 })
  const target = useRef({ x: 0.5, y: 0.5 })
  const raf = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let t = 0

    function resize() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()

    const onResize = () => resize()
    const onMove = (e) => {
      target.current = {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      }
    }

    window.addEventListener('resize', onResize)
    window.addEventListener('mousemove', onMove)

    function arc(x0, y0, cx1, cy1, cx2, cy2, x1, y1, color, width, alpha) {
      ctx.save()
      ctx.beginPath()
      ctx.moveTo(x0, y0)
      ctx.bezierCurveTo(cx1, cy1, cx2, cy2, x1, y1)
      ctx.strokeStyle = color
      ctx.lineWidth = width
      ctx.lineCap = 'round'
      ctx.globalAlpha = alpha
      ctx.stroke()
      ctx.restore()
    }

    function draw() {
      const w = canvas.width
      const h = canvas.height

      // Smooth lerp toward mouse
      mouse.current.x += (target.current.x - mouse.current.x) * 0.035
      mouse.current.y += (target.current.y - mouse.current.y) * 0.035
      const mx = mouse.current.x
      const my = mouse.current.y

      // ── Base gradient ──────────────────────────────────────
      const bg = ctx.createLinearGradient(0, 0, w * 0.85, h * 1.05)
      bg.addColorStop(0.00, '#DDD0EC')  // lavender top-left
      bg.addColorStop(0.20, '#EDD5C2')  // warm peach
      bg.addColorStop(0.50, '#F5DFD0')  // light peach center
      bg.addColorStop(0.78, '#ECCACE')  // rose-blush
      bg.addColorStop(1.00, '#E4C2D8')  // pink bottom-right
      ctx.fillStyle = bg
      ctx.fillRect(0, 0, w, h)

      // ── Mouse glow ─────────────────────────────────────────
      const gx = mx * w
      const gy = my * h
      const glow = ctx.createRadialGradient(gx, gy, 0, gx, gy, Math.min(w, h) * 0.55)
      glow.addColorStop(0.0, 'rgba(255, 210, 165, 0.32)')
      glow.addColorStop(0.5, 'rgba(255, 210, 165, 0.07)')
      glow.addColorStop(1.0, 'rgba(255, 210, 165, 0.00)')
      ctx.fillStyle = glow
      ctx.fillRect(0, 0, w, h)

      // Parallax: curves shift gently with cursor
      const px = (mx - 0.5) * 36
      const py = (my - 0.5) * 22

      // ── Curve A — main large sweep (dominant, bottom-right) ─
      const a = {
        x0: w * 0.12 + px * 0.30, y0: h * 1.08,
        cx1: w * 0.44 + Math.sin(t * 0.65) * 50 + px * 0.50,
        cy1: h * 0.58 + Math.cos(t * 0.50) * 32 + py * 0.38,
        cx2: w * 0.76 + Math.cos(t * 0.42) * 38 + px * 0.20,
        cy2: h * 0.26 + py * 0.60,
        x1: w * 1.10, y1: h * 0.04 + py * 0.28,
      }
      arc(a.x0, a.y0, a.cx1, a.cy1, a.cx2, a.cy2, a.x1, a.y1, 'rgba(238,190,158,0.9)', 110, 0.55)
      arc(a.x0, a.y0, a.cx1, a.cy1, a.cx2, a.cy2, a.x1, a.y1, 'rgba(255,248,242,0.95)', 20, 0.70)

      // ── Curve B — lower secondary arc ──────────────────────
      const b = {
        x0: w * -0.06 + px * 0.18, y0: h * 0.88,
        cx1: w * 0.28 + Math.sin(t * 0.58 + 1.1) * 38 + px * 0.32,
        cy1: h * 0.94 + Math.cos(t * 0.72) * 20,
        cx2: w * 0.64 + Math.cos(t * 0.48 + 0.7) * 30 + px * 0.12,
        cy2: h * 0.72 + py * 0.42,
        x1: w * 1.10, y1: h * 0.62 + py * 0.18,
      }
      arc(b.x0, b.y0, b.cx1, b.cy1, b.cx2, b.cy2, b.x1, b.y1, 'rgba(220,172,158,0.85)', 80, 0.52)
      arc(b.x0, b.y0, b.cx1, b.cy1, b.cx2, b.cy2, b.x1, b.y1, 'rgba(255,248,242,0.90)', 14, 0.65)

      // ── Curve C — upper left wisp ───────────────────────────
      const c = {
        x0: w * -0.10, y0: h * 0.12 + py * 0.22,
        cx1: w * 0.14 + Math.sin(t * 0.78 + 2.0) * 22,
        cy1: h * -0.06 + py * 0.10,
        cx2: w * 0.40 + Math.cos(t * 0.62 + 1.0) * 18,
        cy2: h * 0.07 + Math.sin(t * 0.88) * 14,
        x1: w * 0.72 + px * 0.22, y1: h * -0.04 + py * 0.18,
      }
      arc(c.x0, c.y0, c.cx1, c.cy1, c.cx2, c.cy2, c.x1, c.y1, 'rgba(185,195,228,0.75)', 58, 0.48)
      arc(c.x0, c.y0, c.cx1, c.cy1, c.cx2, c.cy2, c.x1, c.y1, 'rgba(240,244,255,0.90)', 10, 0.60)

      // ── Curve D — right-edge vertical sweep ────────────────
      const d = {
        x0: w * 1.05, y0: h * 0.30 + py * 0.38,
        cx1: w * 0.86 + Math.cos(t * 0.52 + 1.4) * 32,
        cy1: h * 0.52 + py * 0.22,
        cx2: w * 0.90 + Math.sin(t * 0.68 + 0.4) * 22,
        cy2: h * 0.80,
        x1: w * 1.05, y1: h * 1.02 + py * 0.12,
      }
      arc(d.x0, d.y0, d.cx1, d.cy1, d.cx2, d.cy2, d.x1, d.y1, 'rgba(210,170,188,0.70)', 58, 0.45)
      arc(d.x0, d.y0, d.cx1, d.cy1, d.cx2, d.cy2, d.x1, d.y1, 'rgba(255,244,248,0.85)', 10, 0.58)

      t += 0.0028
      raf.current = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(raf.current)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none',
      }}
    />
  )
}
