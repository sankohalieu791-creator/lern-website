import React from 'react'
import './Academy.css'

export default function Academy() {
  return (
    <div className="academy">

      <section className="academy-header">
        <h1>Teach on LERN.</h1>
        <p>Share your knowledge. Teach live. Build an audience. Earn real income. Your students learn for free — that's what makes LERN different.</p>
      </section>

      <section className="academy-why">
        <div className="academy-why-inner">
          <h2>Why teach on LERN.</h2>
          <div className="why-grid">
            <div className="why-card">
              <h4>🔴 Teach live</h4>
              <p>No pre-recording. No editing. Go live. Teach. Build real relationships with your audience in real time.</p>
            </div>
            <div className="why-card">
              <h4>🌍 Reach globally</h4>
              <p>Your audience isn't limited to your city or country. Anyone in the world can join your live sessions.</p>
            </div>
            <div className="why-card">
              <h4>📊 Build your audience</h4>
              <p>Every session grows your following. Students come back. They recommend you. Your audience compounds.</p>
            </div>
            <div className="why-card">
              <h4>✅ Verify real work</h4>
              <p>Review your students' projects. Endorse their competency. Your endorsement carries real weight with employers.</p>
            </div>
            <div className="why-card">
              <h4>💰 Earn real income</h4>
              <p>Multiple income streams. Real money from your real knowledge. Not a side gig. A real teaching career.</p>
            </div>
            <div className="why-card">
              <h4>🎯 No gatekeepers</h4>
              <p>No permission needed. Teach what you know. How you know it. To whoever wants to learn it.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="academy-who">
        <h2>Who can teach.</h2>
        <p className="section-sub">If you have real knowledge and can teach it live, you belong here.</p>
        <div className="who-grid">
          <div className="who-card"><h4>Coaches</h4><p>Football, life, business, wellness. Transform lives at scale.</p></div>
          <div className="who-card"><h4>Developers</h4><p>Frontend, backend, full stack. Teach the next generation of engineers.</p></div>
          <div className="who-card"><h4>Business Owners</h4><p>You've built something. Share the playbook. Get paid for it.</p></div>
          <div className="who-card"><h4>Teachers & Educators</h4><p>You already teach. Reach a global audience. Keep what you earn.</p></div>
          <div className="who-card"><h4>Mentors</h4><p>Your guidance changes lives. Teach live. Earn from your impact.</p></div>
          <div className="who-card"><h4>Creative Professionals</h4><p>Design, music, writing, art. Build a creative teaching career.</p></div>
        </div>
      </section>

      <section className="academy-how">
        <h2>How to get started.</h2>
        <div className="how-steps">
          <div className="how-step"><div className="step-num">01</div><h3>Create your course</h3><p>Plan your live sessions. Define what students will build as proof. Set your structure.</p></div>
          <div className="how-step"><div className="step-num">02</div><h3>Go live and teach</h3><p>Schedule your first session. Go live. Students join. You teach. Real interaction. Real learning.</p></div>
          <div className="how-step"><div className="step-num">03</div><h3>Review and verify</h3><p>Students build real projects. You review their work. You endorse their competency. That verification matters.</p></div>
          <div className="how-step"><div className="step-num">04</div><h3>Build and grow</h3><p>Your audience grows with every session. More students. More reach. More income streams unlocked.</p></div>
        </div>
      </section>

      <section className="academy-cta">
        <h2>Ready to start?</h2>
        <p>Your knowledge has real value. LERN is where you get paid for it.</p>
        <button className="btn-create">Create Your Course →</button>
      </section>

    </div>
  )
}