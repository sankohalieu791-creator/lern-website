import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
  return (
    <div className="home">

      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="hero-tag">LIVE LEARNING PLATFORM</span>
            <h1>
              Millions of young people<br />
              have skills.<br />
              <span>No way to prove it.</span>
            </h1>
            <p>LERN is where that changes. Free courses. Live instruction. Real projects. Verified credentials. Real opportunities.</p>
          </motion.div>
          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link to="/explore" className="btn-primary">Start Learning Free →</Link>
            <Link to="/academy" className="btn-secondary">Start Teaching →</Link>
          </motion.div>
          <motion.div
            className="hero-social"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="avatars">
              <div className="avatar"></div>
              <div className="avatar"></div>
              <div className="avatar"></div>
            </div>
            <p>Young people learning. Instructors earning. Right now.</p>
          </motion.div>
        </div>

        <div className="hero-cards">
          <motion.div
            className="card"
            initial={{ rotateX: 20, rotateY: -20 }}
            animate={{ rotateX: -5, rotateY: 5 }}
            transition={{ duration: 6, repeat: Infinity, repeatType: 'reverse' }}
            style={{ perspective: '1200px' }}
          >
            <div className="card-badge">FREE</div>
            <div className="card-circle"></div>
            <h3>Learn.</h3>
            <p>Free courses. Live instruction.</p>
          </motion.div>
          <motion.div
            className="card"
            initial={{ rotateX: -20, rotateY: 20 }}
            animate={{ rotateX: 5, rotateY: -5 }}
            transition={{ duration: 6, repeat: Infinity, repeatType: 'reverse' }}
            style={{ perspective: '1200px' }}
          >
            <div className="card-badge">BUILD</div>
            <div className="card-circle"></div>
            <h3>Prove it.</h3>
            <p>Real projects. Real evidence.</p>
          </motion.div>
          <motion.div
            className="card"
            initial={{ rotateX: 15, rotateY: 0 }}
            animate={{ rotateX: -10, rotateY: 0 }}
            transition={{ duration: 6, repeat: Infinity, repeatType: 'reverse' }}
            style={{ perspective: '1200px' }}
          >
            <div className="card-badge">ACCESS</div>
            <div className="card-circle"></div>
            <h3>Open doors.</h3>
            <p>Jobs. Internships. Opportunities.</p>
          </motion.div>
        </div>
      </section>

      {/* Problem */}
      <section className="problem-section">
        <h2>The problem is real.</h2>
        <p className="section-sub">1 million young people in the UK are NEET. Not because they lack ability. Because the system failed them.</p>
        <div className="stats-grid">
          <div className="stat-card"><h3>273M</h3><p>Young people locked out of education globally</p></div>
          <div className="stat-card"><h3>1M</h3><p>NEETs in the UK right now with no clear path</p></div>
          <div className="stat-card"><h3>£27,000+</h3><p>University costs. Most people cannot afford it</p></div>
          <div className="stat-card"><h3>90%</h3><p>Dropout rate on Coursera and Udemy. It doesn't work</p></div>
        </div>
      </section>

      {/* Solution */}
      <section className="solution-section">
        <div className="solution-inner">
          <h2>Our solution.</h2>
          <p>LERN is a live learning platform where anyone can learn for free, build real proof of their skills, earn verified credentials, and access real opportunities. No gatekeepers. No cost to learners. No pre-recorded videos.</p>
          <div className="solution-grid">
            <div className="solution-card">
              <h4>🔴 Live Instruction</h4>
              <p>Real instructors teaching right now. Join live. Ask questions. Learn with others. Not a recording. Not a video. Real teaching.</p>
            </div>
            <div className="solution-card">
              <h4>💰 Free for Everyone</h4>
              <p>Every course is 100% free. Every learner. Always. No paywalls. No barriers. Education for everyone.</p>
            </div>
            <div className="solution-card">
              <h4>📁 Build Real Proof</h4>
              <p>Every course requires a real project. A website. A campaign. A business plan. Something tangible employers can actually see.</p>
            </div>
            <div className="solution-card">
              <h4>✅ Get Verified</h4>
              <p>Knowledge assessment. Project review. Instructor endorsement. Multi-layer verification that employers actually trust.</p>
            </div>
            <div className="solution-card">
              <h4>📱 Discovery Feed</h4>
              <p>Scroll and find courses the way you find music. Join live or watch on-demand. Your pace. Your choice.</p>
            </div>
            <div className="solution-card">
              <h4>🚀 Access Opportunity</h4>
              <p>Jobs. Internships. Apprenticeships. Mentorships. Scholarships. Your verified profile opens doors that were previously locked.</p>
            </div>
          </div>
        </div>
      </section>

      {/* For Youth */}
      <section className="for-section">
        <div className="for-inner">
          <div className="for-card">
            <h2>For young people.</h2>
            <p>Whether you're in school, out of work, or just starting out — LERN gives you a real path forward. Learn any skill for free. Build real projects. Earn credentials employers trust. Access jobs, internships, and apprenticeships through your verified profile.</p>
            <ul className="for-list">
              <li>✓ Free courses. Always.</li>
              <li>✓ Learn live or on-demand</li>
              <li>✓ Build a real portfolio</li>
              <li>✓ Earn verified credentials</li>
              <li>✓ Access real opportunities</li>
            </ul>
          </div>

          <div className="for-card">
            <h2>For adults.</h2>
            <p>Career changers. Parents upskilling. People locked out of expensive universities. LERN gives adults the same access. Free live courses. Real credentials. Skills that matter today — taught by people doing the job right now.</p>
            <ul className="for-list">
              <li>✓ No tuition fees</li>
              <li>✓ Flexible learning</li>
              <li>✓ Real skills from real people</li>
              <li>✓ Credentials employers recognise</li>
              <li>✓ Learn around your life</li>
            </ul>
          </div>
        </div>
      </section>

      {/* For Instructors */}
      <section className="instructor-section">
        <div className="instructor-inner">
          <h2>For instructors.</h2>
          <p>You have knowledge. LERN gives you a platform, an audience, and real income. Teach live. Verify your students' work. Build your audience. Earn from multiple streams — all while your students learn for free.</p>
          <div className="instructor-points">
            <div className="instructor-point">
              <h4>Teach live</h4>
              <p>Build real relationships with your students. Not recordings. Real interaction.</p>
            </div>
            <div className="instructor-point">
              <h4>Verify real work</h4>
              <p>Review student projects. Endorse competency. Your endorsement carries real weight.</p>
            </div>
            <div className="instructor-point">
              <h4>Earn fairly</h4>
              <p>Multiple income streams. Real money from your real knowledge.</p>
            </div>
            <div className="instructor-point">
              <h4>Build globally</h4>
              <p>Your audience isn't limited to your city. Reach anyone. Build everywhere.</p>
            </div>
          </div>
          <Link to="/academy" className="btn-primary">Learn More →</Link>
        </div>
      </section>

      {/* For Schools */}
      <section className="schools-section">
        <div className="schools-inner">
          <h2>For schools and institutions.</h2>
          <p>LERN gives schools and councils a real tool to engage young people, track their progress, and prove impact. Access real-time data on student engagement, skills being built, and credentials earned.</p>
          <div className="schools-grid">
            <div className="schools-card">
              <h4>Track outcomes</h4>
              <p>See exactly how your students are progressing in real time.</p>
            </div>
            <div className="schools-card">
              <h4>Prove impact</h4>
              <p>Real data. Real credentials. Real proof that your students are moving forward.</p>
            </div>
            <div className="schools-card">
              <h4>Engage NEETs</h4>
              <p>Give disengaged young people a free, live, social way to learn that actually works.</p>
            </div>
            <div className="schools-card">
              <h4>Unlock funding</h4>
              <p>Data-driven impact reports that help you access government funding.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-learner">
          <h2>Ready to start?</h2>
          <p>Free courses. Live instruction. Real proof. Real opportunities.</p>
          <Link to="/explore" className="btn-cta">Explore Courses →</Link>
        </div>
        <div className="cta-instructor">
          <h2>Ready to teach?</h2>
          <p>Live teaching. Real audience. Real income.</p>
          <Link to="/academy" className="btn-cta">Start Teaching →</Link>
        </div>
      </section>

    </div>
  )
}