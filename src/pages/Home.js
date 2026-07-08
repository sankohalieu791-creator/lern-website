import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './Home.css'

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } }
}

const HERO_STATS = [
  { value: '0', label: 'Fees for learners' },
  { value: '100+', label: 'Live sessions each month' },
  { value: '98%', label: 'Learners say LERN helped them progress' },
]

const VALUE_CARDS = [
  { title: 'Built for real impact', body: 'Live learning, real projects, verified outcomes designed for people who need a pathway — not an extra expense.' },
  { title: 'Free for every learner', body: 'No subscription. No hidden fees. No gatekeepers. Ever.' },
  { title: 'Industry-aligned proof', body: 'Projects and credentials employers actually recognise, not just another badge.' },
  { title: 'Community-led cohorts', body: 'Learn live with peers, ask questions in real time, and stay motivated through every course.' },
]

const HOW_IT_WORKS = [
  { label: '01', title: 'Join a live cohort', text: 'Start every course with a live session, guided by instructors who answer your questions as you learn.' },
  { label: '02', title: 'Build real work', text: 'Complete a meaningful project that demonstrates your skills, not just your ability to click through videos.' },
  { label: '03', title: 'Earn verified proof', text: 'Receive verification from instructors and community review that signals readiness to employers.' },
]

const AUDIENCE_CARDS = [
  { title: 'Learners', tag: 'Free learning', bullets: ['Live classes with feedback', 'Real projects, not slides', 'Verified credentials'], cta: '/explore' },
  { title: 'Career changers', tag: 'New pathways', bullets: ['Flexible schedules', 'Employer-ready skills', 'No tuition burden'], cta: '/explore' },
  { title: 'Instructors', tag: 'Teach live', bullets: ['Reach real learners', 'Verify outcomes', 'Earn from your expertise'], cta: '/academy' },
]

const TICKER = [
  'Free live pathways',
  'Verified proof employers trust',
  'Real projects, real outcomes',
  'Built for learners left behind',
]

export default function Home() {
  return (
    <main className="home">
      <section className="hero">
        <div className="hero-grid">
          <motion.div className="hero-copy" initial="hidden" animate="visible" variants={fadeUp}>
            <span className="eyebrow">Live cohorts · Verified proof · No tuition</span>
            <h1>Skill-building for people the system left behind.</h1>
            <p className="hero-paragraph">
              LERN combines live teaching, practical projects, and employer-aligned credentials so every learner can prove what they can do.
            </p>
            <div className="hero-actions">
              <Link to="/explore" className="btn btn-primary">Browse free courses</Link>
              <Link to="/academy" className="btn btn-secondary">Teach on LERN</Link>
            </div>
            <div className="hero-stats">
              {HERO_STATS.map((stat) => (
                <div key={stat.label} className="hero-stat">
                  <span>{stat.value}</span>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div className="hero-panel" initial="hidden" animate="visible" variants={fadeUp}>
            <div className="panel-badge">Next cohort opens soon</div>
            <h2>Learn live, build proof, get recognised.</h2>
            <p className="panel-copy">Every course is structured around a real project and a verified outcome so you leave with a portfolio piece and proof you can use.</p>
            <ul className="panel-list">
              <li>Live sessions with active instructor feedback</li>
              <li>Project-based learning that employers can see</li>
              <li>Verified credentials backed by review</li>
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="ribbon">
        <div className="ribbon-track">
          {[...TICKER, ...TICKER].map((item, index) => (
            <span key={index} className="ribbon-item">{item}</span>
          ))}
        </div>
      </section>

      <section className="value-section">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-label">WHY LERN</span>
            <h2>Designed to change who can learn and how they prove it.</h2>
          </div>
          <div className="value-grid">
            {VALUE_CARDS.map((card) => (
              <article key={card.title} className="value-card">
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="how-section">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-label">HOW IT WORKS</span>
            <h2>Three steps from joining to verified proof.</h2>
          </div>
          <div className="how-grid">
            {HOW_IT_WORKS.map((item) => (
              <article key={item.label} className="how-card">
                <div className="how-step">{item.label}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="audience-section">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-label">WHO IT'S FOR</span>
            <h2>For learners, changers, and instructors who want a better path.</h2>
          </div>
          <div className="audience-grid">
            {AUDIENCE_CARDS.map((card) => (
              <article key={card.title} className="audience-card">
                <span className="audience-tag">{card.tag}</span>
                <h3>{card.title}</h3>
                <ul>
                  {card.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <Link to={card.cta} className="btn btn-primary btn-audience">Explore now</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="final-cta-inner">
          <p className="final-kicker">Launch your path without the barriers.</p>
          <h2>Live learning that lets you build proof, not pass tests.</h2>
          <Link to="/explore" className="btn btn-primary">Start learning today</Link>
        </div>
      </section>
    </main>
  )
}
