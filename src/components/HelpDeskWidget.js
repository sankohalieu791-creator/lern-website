import { useState } from 'react'
import HelpDeskOrb from './HelpDeskOrb'
import './HelpDeskWidget.css'

/* ── A real (if miniature) version of the in-app Help Desk — not a
   mockup. The answers below are copied verbatim from the app's actual
   hand-written knowledge base (lib/helpDeskContent.ts), because the
   whole point of the real thing is that nothing it says is generated.
   Click the orb, pick a question, get the real answer. ── */

const TOPICS = [
  {
    q: 'How do I create a brief?',
    a: 'On Briefs, tap "Create" in the top right, fill in the title, topic, criteria and a deadline, and assign it to a group. It appears on Briefs with a status pill — New, In progress, or Verified — that updates as students submit and you review their work.',
  },
  {
    q: 'How do I verify a submission?',
    a: 'Open Review, pick a submission from the queue, check it against the brief’s criteria, and tap "Verify". It moves onto the student or learner’s profile straight away, and off your queue.',
  },
  {
    q: 'How do I export placement evidence?',
    a: 'On Work Experience, the "Export placement evidence" button at the bottom downloads a CSV with every student, their employer, placement dates, and attendance — ready to hand to your MIS or an Ofsted return.',
  },
  {
    q: 'What is Bootcamp Evidence?',
    a: 'Bootcamp Evidence pulls together attendance against a 10-day threshold, course completion, and interview outcome for each learner — built automatically from work you’re already recording in Review, Workshops, and Job tracking, so nothing gets entered twice.',
  },
  {
    q: 'What is Discover?',
    a: 'Discover is where employers browse verified briefs and course work from schools and providers — every piece marked "Verified by a reviewer", so nothing shown is just a student’s own claim. Expressing interest always routes through the student’s school or provider first.',
  },
  {
    q: 'How do I deal with a reported post?',
    a: 'A reported post is hidden automatically the moment it’s reported — you don’t need to do anything for it to come down. To actually decide on it, go to the post in Feed; staff see a "Reported" tag and can restore it or remove it for good.',
  },
]

export default function HelpDeskWidget() {
  const [open, setOpen] = useState(false)
  const [activeIdx, setActiveIdx] = useState(null)

  return (
    <div className="hdw-wrap">
      {!open ? (
        <div className="hdw-closed">
          <HelpDeskOrb size={64} eyeSize={12} onClick={() => setOpen(true)} />
          <p className="hdw-hint">Try it — click the orb</p>
        </div>
      ) : (
        <div className="hdw-panel">
          <div className="hdw-head">
            <HelpDeskOrb size={34} eyeSize={7} active />
            <div className="hdw-head-text">
              <strong>LERN Help Desk</strong>
              <span>Hand-written answers. Not generated.</span>
            </div>
            <button className="hdw-close" aria-label="Close" onClick={() => { setOpen(false); setActiveIdx(null) }}>
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 5l10 10M15 5L5 15" /></svg>
            </button>
          </div>

          <div className="hdw-body">
            {activeIdx === null ? (
              <>
                <p className="hdw-intro">Ask how to do something on LERN. Pick one to see a real answer:</p>
                <div className="hdw-topics">
                  {TOPICS.map((t, i) => (
                    <button key={t.q} className="hdw-topic" onClick={() => setActiveIdx(i)}>{t.q}</button>
                  ))}
                </div>
              </>
            ) : (
              <div className="hdw-answer">
                <button className="hdw-back" onClick={() => setActiveIdx(null)}>&larr; Back</button>
                <p className="hdw-q">{TOPICS[activeIdx].q}</p>
                <p className="hdw-a">{TOPICS[activeIdx].a}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
