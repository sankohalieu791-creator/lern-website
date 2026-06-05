import React from 'react'
import { Link } from 'react-router-dom'
import './Explore.css'

export default function Explore() {
  return (
    <div className="explore">

      <section className="explore-header">
        <h1>Unlimited Courses. Zero Cost.</h1>
        <p>Any skill. Any level. Taught by real people teaching live right now. Free for every learner. Always.</p>
      </section>

      <section className="explore-how">
        <h2>How it works.</h2>
        <div className="how-grid">
          <div className="how-card">
            <div className="how-num">01</div>
            <h3>Scroll the feed</h3>
            <p>Discover courses the way you discover music. Short previews. Live sessions. Real instructors.</p>
          </div>
          <div className="how-card">
            <div className="how-num">02</div>
            <h3>Join live or on-demand</h3>
            <p>Join a live session right now or watch the recording later. Same course. Same credential.</p>
          </div>
          <div className="how-card">
            <div className="how-num">03</div>
            <h3>Build real proof</h3>
            <p>Every course requires a real project. Not just a test. Actual evidence of what you can do.</p>
          </div>
          <div className="how-card">
            <div className="how-num">04</div>
            <h3>Get verified</h3>
            <p>Knowledge assessment. Project review. Instructor endorsement. Real verification employers trust.</p>
          </div>
          <div className="how-card">
            <div className="how-num">05</div>
            <h3>Access opportunity</h3>
            <p>Jobs. Internships. Apprenticeships. Scholarships. Your verified profile opens real doors.</p>
          </div>
        </div>
      </section>

      <section className="explore-unlimited">
        <h2>Unlimited Courses.</h2>
        <p className="unlimited-sub">Choose the course that defines you.</p>
        <p className="unlimited-desc">Coding. Business. Design. Marketing. Coaching. Music. Engineering. Healthcare. Finance. Languages. Leadership. Whatever you want to learn — someone on LERN is teaching it live. For free.</p>
        <div className="unlimited-note">
          <p>No categories. No limits. The feed shows you everything. You decide what matters.</p>
        </div>
      </section>

      <section className="explore-cta">
        <div className="explore-cta-box">
          <h2>Want to teach?</h2>
          <p>Teach live. Build an audience. Earn real income from your knowledge.</p>
          <Link to="/academy" className="btn-outline">Become an Instructor →</Link>
        </div>
      </section>

    </div>
  )
}