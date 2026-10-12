import { useState } from 'react'
import RealDemoPlayer from './RealDemoPlayer'
import './RoleDemoShowcase.css'

// Home's hero demo -- one real screen recording at a time (same footage
// Institutions/Providers/Employers each already show on their own
// pages), switchable by role instead of picking just one for the
// combined homepage. Real captures throughout, never a mock.
const ROLES = [
  { key: 'institution', label: 'Institutions', src: '/demo/institution-demo.mp4', title: 'Built for institutions.' },
  { key: 'provider', label: 'Training Providers', src: '/demo/provider-demo.mp4', title: 'Built for training providers.' },
  { key: 'employer', label: 'Employers', src: '/demo/employer-demo.mp4', title: 'Built for employers.' },
]

export default function RoleDemoShowcase() {
  const [active, setActive] = useState('institution')
  const role = ROLES.find(r => r.key === active)

  return (
    <div className="rds">
      <div className="rds-tabs" role="tablist" aria-label="See LERN for">
        {ROLES.map(r => (
          <button
            key={r.key}
            type="button"
            role="tab"
            aria-selected={r.key === active}
            className={`rds-tab${r.key === active ? ' rds-tab-active' : ''}`}
            onClick={() => setActive(r.key)}
          >
            {r.label}
          </button>
        ))}
      </div>
      {/* key forces a clean remount on tab switch -- the video restarts
          and autoplays the newly selected clip from the first frame
          rather than inheriting the previous clip's playback state. */}
      <RealDemoPlayer key={role.key} src={role.src} title={role.title} />
    </div>
  )
}
