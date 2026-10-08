import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Logo from './Logo'
import './DemoWindow.css'

/* ── Plays a real screen recording of the actual LERN app (captured via
   Playwright driving getlern.com, not a hand-built mock) inside the same
   browser-chrome frame PlatformDemo used. Loops: video plays through,
   then a title card holds for a beat, then it restarts. ── */

export default function RealDemoPlayer({ src, title }) {
  const videoRef = useRef(null)
  const [showTitle, setShowTitle] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return undefined
    let restartTimer
    const onEnded = () => {
      setShowTitle(true)
      restartTimer = setTimeout(() => {
        setShowTitle(false)
        video.currentTime = 0
        video.play().catch(() => {})
      }, 2600)
    }
    video.addEventListener('ended', onEnded)
    return () => {
      video.removeEventListener('ended', onEnded)
      clearTimeout(restartTimer)
    }
  }, [])

  return (
    <div className="ap-wrap">
      <div className="ap-window">
        <div className="ap-chrome">
          <span className="ap-dot" /><span className="ap-dot" /><span className="ap-dot" />
          <span className="ap-url">getlern.com</span>
        </div>
        <div className="ap-body">
          <video
            ref={videoRef}
            className="ap-video"
            src={src}
            autoPlay
            muted
            playsInline
            preload="auto"
          />
        </div>
        <AnimatePresence>
          {showTitle && (
            <motion.div
              key="title" className="pd-title-overlay"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .25 }}
            >
              <Logo height={34} color="#fff" />
              <p className="pd-title-sub">{title}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
