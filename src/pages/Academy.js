import React from 'react'
import { motion } from 'framer-motion'
import './Academy.css'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (d = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: d, ease: [0.16, 1, 0.3, 1] },
  }),
}

const WHY = [
  { icon: '🔴', title: 'Teach live', body: 'No pre-recording. No editing. Go live, teach, and build real relationships with your audience in real time.' },
  { icon: '🌍', title: 'Reach globally', body: 'Your audience isn\'t limited to your city or country. Anyone in the world can join your live sessions.' },
  { icon: '📊', title: 'Build your audience', body: 'Every session grows your following. Students come back, recommend you, and your audience compounds.' },
  { icon: '✅', title: 'Verify real work', body: 'Review your students\' projects. Endorse their competency. Your endorsement carries real weight with employers.' },
  { icon: '💰', title: 'Earn real income', body: 'Multiple income streams. Real money from your real knowledge. Not a side gig — a real teaching career.' },
  { icon: '🎯', title: 'No gatekeepers', body: 'No permission needed. Teach what you know, how you know it, to whoever wants to learn it.' },
]

const WHO = [
  { title: 'Coaches', body: 'Football, life coaching, business, and wellness. Transform lives at scale.' },
  { title: 'Developers', body: 'Frontend, backend, full stack. Teach the next generation of engineers.' },
  { title: 'Business Owners', body: 'You\'ve built something. Share the playbook. Get paid for it.' },
  { title: 'Teachers & Educators', body: 'You already teach. Reach a global audience. Keep what you earn.' },
  { title: 'Mentors', body: 'Your guidance changes lives. Teach live. Earn from your impact.' },
  { title: 'Creative Professionals', body: 'Design, music, writing, art. Build a creative teaching career.' },
]

const STEPS = [
  { n: '01', title: 'Create your course', body: 'Plan your live sessions. Define what students will build as proof. Set your structure.' },
  { n: '02', title: 'Go live and teach', body: 'Schedule your first session. Go live. Students join. You teach. Real interaction. Real learning.' },
  { n: '03', title: 'Review and verify', body: 'Students build real projects. You review their work, endorse their competency. That verification matters.' },
  { n: '04', title: 'Build and grow', body: 'Your audience grows with every session. More students. More reach. More income streams unlocked.' },
]

export default function Academy() {
  return (
    <div className="academy">

      {/* ── Header ── */}
      <motion.section className="academy-header"
        initial="hidden" animate="visible" variants={fadeUp} custom={0}>
        <h1>Teach on <em>LERN.</em></h1>
        <p>Share your knowledge, teach live, build a global audience, and earn real income — all while your students learn completely for free. That is what makes LERN different.</p>
      </motion.section>

      {/* ── Why section ── */}
      <section className="academy-why">
        <div className="academy-why-inner">
          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            Why teach on LERN.
          </motion.h2>
          <div className="why-grid">
            {WHY.map((c, i) => (
              <motion.div key={c.title} className="why-card academy-glass"
                custom={i * 0.08} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <h4>{c.icon} {c.title}</h4>
                <p>{c.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who section ── */}
      <section className="academy-who">
        <motion.h2
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
          Who can teach.
        </motion.h2>
        <p className="section-sub">If you have genuine knowledge and can teach it live, you belong on LERN.</p>
        <div className="who-grid">
          {WHO.map((c, i) => (
            <motion.div key={c.title} className="who-card academy-glass"
              custom={i * 0.08} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h4>{c.title}</h4>
              <p>{c.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── How section ── */}
      <section className="academy-how">
        <motion.h2
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
          How to get started.
        </motion.h2>
        <div className="how-steps">
          {STEPS.map((s, i) => (
            <motion.div key={s.n} className="how-step academy-glass"
              custom={i * 0.1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="step-num">{s.n}</div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="academy-cta">
        <motion.div className="academy-cta-card academy-glass"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
          <div className="cta-glow" />
          <h2>Ready to start?</h2>
          <p>Your knowledge has real value. LERN is where you get paid for it.</p>
          <a href="https://www.lernapp.uk" target="_blank" rel="noopener noreferrer" className="btn-create">Start Teaching on LERN →</a>
        </motion.div>
      </section>

    </div>
  )
}
