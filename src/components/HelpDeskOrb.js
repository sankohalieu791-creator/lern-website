import GradientOrb from './GradientOrb'
import './HelpDeskOrb.css'

/* ── The real Help Desk icon from the app: a GPU shader orb (glowing,
   rotating, noise-blended cream/orange/terracotta), not an organic
   blob with drawn-on eyes -- that was the icon's PREVIOUS design, now
   replaced on both the app and here to match. Reused pixel-for-pixel
   from components/v2/GradientOrb.tsx (see GradientOrb.js in this same
   folder), dropped into the same plain cream circular badge the app
   itself uses. No cursor-tracking needed any more -- the orb already
   animates on its own, real per-pixel alpha, nothing to react to. ── */

export default function HelpDeskOrb({ size = 56, onClick, active = false }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="LERN Help Desk"
      className={`hdo-orb${active ? ' hdo-orb-active' : ''}`}
      style={{ width: size, height: size }}
    >
      <GradientOrb config={{ rotationSpeed: 0.25 }} />
    </button>
  )
}
