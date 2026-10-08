import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Logo from './Logo'
import './PlatformDemo.css'

/* ── A scripted walkthrough inside the real app layout -- same window
   chrome as before, but now actual buttons get pressed (Add win, Save
   placement, Verify work, Create), not just sidebar nav. One engine,
   driven by a `beats` array, reused for the home page (long, full
   tour) and three shorter per-role pages (fast). Ends on a title card
   ("LERN — where the future starts"), then loops. ── */

function Toast({ children }) {
  return (
    <motion.div className="pd-toast" initial={{ opacity: 0, y: 8, scale: .96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: .2 }}>
      <span className="pd-toast-check">✓</span>{children}
    </motion.div>
  )
}

/* ── Scenes ── */
function FeedScene({ sub }) {
  return (
    <div className="ap-view">
      <div className="ap-wins-row">
        <span className="pd-addwin">
          <span className="pd-addwin-circle">+</span>
          <span className="pd-addwin-label">Add win</span>
        </span>
        {['AO', 'JW', 'LC', 'PN'].map((i, idx) => (
          <span key={i} className={`ap-win-ring${idx === 0 ? ' ap-win-ring-new' : ''}`}><span>{i}</span></span>
        ))}
      </div>
      <div className="ap-post">
        <div className="ap-post-head">
          <span className="ap-avatar">AO</span>
          <div><p className="ap-post-name">Amara Okafor</p><p className="ap-post-meta">Work verified · 2m ago</p></div>
        </div>
        <p className="ap-post-text">Just got "Design a poster for our open day" verified by Ms Clarke 🎉</p>
      </div>
      <AnimatePresence>{sub === 'posted' && <Toast>Win posted</Toast>}</AnimatePresence>
    </div>
  )
}

function WorkExpScene({ sub }) {
  const filled = sub === 'filled' || sub === 'saved'
  return (
    <div className="ap-view">
      <span className="ap-h">Work Experience</span>
      <div className={`ap-row pd-rowable${sub && sub !== 'list' ? ' pd-row-selected' : ''}`}>
        <span className="ap-avatar ap-avatar-blue">AO</span>
        <div className="ap-row-text"><p className="ap-row-name">Amara Okafor</p><p className="ap-row-sub">{filled ? "David's Garage · 12–30 Oct" : 'No placement yet'}</p></div>
      </div>
      {sub && sub !== 'list' && (
        <motion.div className="pd-form" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .2 }}>
          <div className="pd-field"><span className="pd-field-l">Employer</span><span className="pd-field-v">{filled ? "David's Garage" : ''}</span></div>
          <div className="pd-field"><span className="pd-field-l">Start</span><span className="pd-field-v">{filled ? '12 Oct' : ''}</span></div>
          <div className="pd-field"><span className="pd-field-l">End</span><span className="pd-field-v">{filled ? '30 Oct' : ''}</span></div>
          <span className="ap-create pd-save">Save placement</span>
        </motion.div>
      )}
      <AnimatePresence>{sub === 'saved' && <Toast>Placement saved</Toast>}</AnimatePresence>
    </div>
  )
}

function ExportScene() {
  return (
    <div className="ap-view">
      <span className="ap-h">Work Experience</span>
      <div className="ap-row"><span className="ap-avatar ap-avatar-blue">AO</span><div className="ap-row-text"><p className="ap-row-name">Amara Okafor</p><p className="ap-row-sub">David's Garage · 12–30 Oct</p></div></div>
      <span className="ap-create pd-export">⬇ Export placement evidence</span>
      <AnimatePresence><Toast>Exported</Toast></AnimatePresence>
    </div>
  )
}

function ReviewScene({ sub }) {
  return (
    <div className="ap-view">
      <div className="ap-row-head"><span className="ap-h">Review</span><span className="ap-pill ap-pill-blue">1 waiting</span></div>
      <div className={`ap-row pd-rowable${sub ? ' pd-row-selected' : ''}`}>
        <span className="ap-avatar ap-avatar-blue">AO</span>
        <div className="ap-row-text"><p className="ap-row-name">Amara Okafor</p><p className="ap-row-sub">Design a poster for our open day</p></div>
        {sub === 'verify' && <span className="pd-save" style={{ marginLeft: 'auto' }}>Verify work</span>}
      </div>
      <AnimatePresence>{sub === 'verified' && <Toast>Verified</Toast>}</AnimatePresence>
    </div>
  )
}

function CreateScene({ title, label, sub, name }) {
  return (
    <div className="ap-view">
      <div className="ap-row-head"><span className="ap-h">{title}</span><span className="ap-create">+ Create</span></div>
      {sub === 'form' && (
        <motion.div className="pd-form" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .2 }}>
          <div className="pd-field"><span className="pd-field-l">Title</span><span className="pd-field-v">{name}</span></div>
          <span className="ap-create pd-save">Create</span>
        </motion.div>
      )}
      {sub === 'created' && (
        <motion.div className="ap-card" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .2 }}>
          <div className="ap-card-top"><p className="ap-card-title">{name}</p><span className="ap-pill">New</span></div>
        </motion.div>
      )}
    </div>
  )
}

function HelpDeskScene({ sub }) {
  return (
    <div className="ap-view">
      <div className="pd-helpdesk-card">
        <div className="ap-post-head" style={{ marginBottom: 10 }}>
          <span className="pd-orb"><span /><span /></span>
          <p className="ap-row-name">LERN Help Desk</p>
        </div>
        {sub !== 'empty' && <div className="pd-bubble pd-bubble-me">How do I create a guest invite?</div>}
        {sub === 'answered' && <div className="pd-bubble">Open Guest invite, tick the student, and tap "Create invite link".</div>}
      </div>
    </div>
  )
}

function InterestScene({ sub }) {
  return (
    <div className="ap-view">
      <span className="ap-h">Interest received</span>
      {sub !== 'open' ? (
        <div className="ap-row pd-rowable pd-row-selected">
          <span className="ap-avatar ap-avatar-blue">H</span>
          <div className="ap-row-text"><p className="ap-row-name">Hannah Pierce</p><p className="ap-row-sub">Interested in Amara O.</p></div>
          <span className="pd-save" style={{ marginLeft: 'auto' }}>Open</span>
        </div>
      ) : (
        <motion.div className="pd-form" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .2 }}>
          <p className="ap-row-sub">"We liked your charity campaign brief — would you be interested in a short placement?"</p>
        </motion.div>
      )}
    </div>
  )
}

function DiscoverScene({ sub }) {
  return (
    <div className="ap-view">
      <span className="ap-h">Discover</span>
      <div className={`ap-card pd-rowable${sub ? ' pd-row-selected' : ''}`}>
        <div className="ap-card-top"><p className="ap-card-title">Social Media Campaign for a Local Charity</p><span className="ap-pill ap-pill-green">Verified</span></div>
        <p className="ap-card-sub">Amara O. · Year 13 Business Studies</p>
        {sub === 'interest' && <span className="pd-save" style={{ marginTop: 8 }}>Express interest</span>}
      </div>
      <AnimatePresence>{sub === 'sent' && <Toast>Interest sent</Toast>}</AnimatePresence>
    </div>
  )
}

function CandidatesScene() {
  return (
    <div className="ap-view">
      <span className="ap-h">Candidates</span>
      <div className="ap-stat-row">
        {[['Applied', '4'], ['Interview', '2'], ['Offer', '1']].map(([l, n]) => (
          <div className="ap-stat" key={l}><span className="ap-stat-n">{n}</span><span className="ap-stat-l">{l}</span></div>
        ))}
      </div>
      <div className="ap-row"><span className="ap-avatar ap-avatar-blue">AO</span><div className="ap-row-text"><p className="ap-row-name">Amara Okafor</p><p className="ap-row-sub">Marketing Assistant</p></div><span className="ap-pill ap-pill-blue">Interview</span></div>
    </div>
  )
}

function InboxScene({ sub }) {
  return (
    <div className="ap-view">
      <span className="ap-h">Inbox</span>
      <div className={`ap-row pd-rowable${sub ? ' pd-row-selected' : ''}`}>
        <span className="ap-avatar ap-avatar-blue">AO</span>
        <div className="ap-row-text"><p className="ap-row-name">Amara Okafor</p><p className="ap-row-sub">Marketing Assistant (Work Experience)</p></div>
      </div>
      {sub === 'open' && <motion.div className="pd-form" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .2 }}><p className="ap-row-sub">"Thanks for reaching out — Amara would love to hear more."</p></motion.div>}
    </div>
  )
}

const SCENES = {
  feed: FeedScene, workexp: WorkExpScene, export: ExportScene, review: ReviewScene,
  briefs: p => <CreateScene {...p} title="Briefs" />, workshops: p => <CreateScene {...p} title="Workshops" />,
  courses: p => <CreateScene {...p} title="Courses" />,
  helpdesk: HelpDeskScene, interest: InterestScene, discover: DiscoverScene,
  candidates: CandidatesScene, inbox: InboxScene,
}

function ProfileMenu() {
  return (
    <motion.div className="pd-profile-menu" initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: .18 }}>
      <span>Settings</span><span>Sign out</span>
    </motion.div>
  )
}

export default function PlatformDemo({ beats, navItems, dark: darkDefault }) {
  const [i, setI] = useState(0)
  const beat = beats[i]

  useEffect(() => {
    const t = setTimeout(() => setI(n => (n + 1) % beats.length), beat.hold)
    return () => clearTimeout(t)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i])

  if (beat.title) {
    return (
      <div className="ap-wrap">
        <motion.div key="title" className="pd-title-card" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <Logo height={34} color="#fff" />
          <p className="pd-title-sub">{beat.title}</p>
        </motion.div>
      </div>
    )
  }

  const Scene = SCENES[beat.panel]
  const isDark = !!(darkDefault ?? beat.dark)

  return (
    <div className="ap-wrap">
      <div className={`ap-window${isDark ? ' ap-window-dark' : ''}`}>
        <div className="ap-chrome">
          <span className="ap-dot" /><span className="ap-dot" /><span className="ap-dot" />
          <span className="ap-url">getlern.com</span>
        </div>
        <div className="ap-body">
          <div className="ap-sidebar">
            <span className="pd-sidebar-logo"><Logo height={16} color={isDark ? '#F3EFE7' : '#111'} /></span>
            {navItems.map(n => (
              <span key={n} className={`ap-navitem${n === beat.nav ? ' ap-navitem-active' : ''}`}>{n}</span>
            ))}
          </div>
          <div className="ap-main">
            <div className="pd-topbar">
              <span className="pd-profile-dot">D</span>
            </div>
            <AnimatePresence>
              <motion.div key={beat.nav + (beat.panel || '')} className="ap-scene pd-scene" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .18 }}>
                {Scene && <Scene sub={beat.sub} name={beat.name} />}
              </motion.div>
            </AnimatePresence>
            <AnimatePresence>{beat.profileMenu && <ProfileMenu />}</AnimatePresence>
          </div>
          {beat.cursor && (
            <motion.div className="ap-cursor" animate={{ left: beat.cursor.x, top: beat.cursor.y }} transition={{ duration: .45, ease: [0.22, 1, 0.36, 1] }}>
              <svg width="20" height="22" viewBox="0 0 20 22" fill="none">
                <path d="M1 1L1 17.5L5.2 13.8L7.8 19.8L10.4 18.6L7.9 12.6L13.5 12.6L1 1Z" fill="#111" stroke="white" strokeWidth="1.2" strokeLinejoin="round" />
              </svg>
              {beat.click && <motion.span className="ap-click-ring" initial={{ scale: .4, opacity: .6 }} animate={{ scale: 2, opacity: 0 }} transition={{ duration: .4 }} />}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}
