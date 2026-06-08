import React from 'react'
import './About.css'

export default function About() {
  return (
    <div className="about">

      <section className="about-header">
        <h1>About LERN</h1>
        <p>We're not building another course platform. We're building a system that helps young people prove what they can do.</p>
      </section>

      <section className="about-mission">
        <div className="mission-inner">
          <h2>Our Mission</h2>
          <p>Millions of young people have potential but no way to prove it. Millions of employers need talent but can't identify it. LERN creates a trusted record of skills, projects, and verified achievements that bridges that gap.</p>
          <p>We believe education should be free. Proof should be real. Opportunity should be open to everyone.</p>
          <div className="mission-statement">
            <p>"Helping young people prove what they can do."</p>
          </div>
        </div>
      </section>

      <section className="about-problem">
        <h2>The problem we're solving.</h2>
        <div className="problem-grid">
          <div className="problem-item"><h3>Education without outcomes.</h3><p>Millions complete courses on Udemy and Coursera. 90% never finish. Those who do get a certificate that proves nothing to employers.</p></div>
          <div className="problem-item"><h3>Skills without proof.</h3><p>Real coaches, mentors, and practitioners transform lives daily. Without a verified record, none of that counts. Real ability stays invisible.</p></div>
          <div className="problem-item"><h3>Opportunity without access.</h3><p>1 million NEETs in the UK alone. University costs £27,000. Geography decides your fate. The system locks out the people who need it most.</p></div>
          <div className="problem-item"><h3>Knowledge without reward.</h3><p>The world's best teachers earn a fraction of what they should. Platforms take the cut. LERN changes that.</p></div>
        </div>
      </section>

      <section className="about-approach">
        <div className="approach-inner">
          <h2>How we're different.</h2>
          <div className="approach-items">
            <div className="approach-item"><div className="approach-num">01</div><div><h4>Proof over certificates</h4><p>Students build real projects. Sit real assessments. Earn instructor endorsements. Their LERN profile is evidence, not just a credential.</p></div></div>
            <div className="approach-item"><div className="approach-num">02</div><div><h4>Live over recorded</h4><p>Real instructors teaching live. Real interaction. Real community. That's when learning actually happens.</p></div></div>
            <div className="approach-item"><div className="approach-num">03</div><div><h4>Free for every learner</h4><p>Every course. Every exam. Every credential. Free. Always. No exceptions.</p></div></div>
            <div className="approach-item"><div className="approach-num">04</div><div><h4>Fair income for instructors</h4><p>Multiple income streams. Real careers from real teaching. The knowledge economy should pay the knowledge makers.</p></div></div>
          </div>
        </div>
      </section>

      <section className="about-contact">
        <h2>Get in touch.</h2>
        <p>Whether you represent a school, local authority, employer, or organisation — or you are an instructor or potential partner — we would love to hear from you.</p>
        <p className="contact-info">IRL Connect Ltd — Registered in England &amp; Wales</p>
      </section>

    </div>
  )
}