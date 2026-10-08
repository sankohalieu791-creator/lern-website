import { Link } from 'react-router-dom'
import './HowItWorks.css'
import './Page.css'

const STEPS = [
  {
    num: '1',
    name: 'Do',
    body: 'A student takes on a real project brief — set by an employer or training provider, not invented for the classroom. Briefs cover a wide range of work, so a student on any course, not just business or IT, can find one that fits.',
  },
  {
    num: '2',
    name: 'Verify',
    body: 'The person who set the brief reviews the finished work against clear criteria and confirms it was actually completed to standard. This is what separates LERN from a portfolio a student builds themselves: the claim is checked by someone with no reason to inflate it.',
  },
  {
    num: '3',
    name: 'Show',
    body: "Verified work becomes part of the student's permanent profile — a real record of what they built, for whom, and to what standard, not a self-written description of their skills.",
  },
  {
    num: '4',
    name: 'Hire',
    body: "Institutions, training providers and employers can see that profile directly, so a student's actual output — not just their CV — is what gets them noticed.",
  },
]

const INSTITUTION_FEATURES = [
  'Verified profiles of completed project work for every student on the platform — evidence institutions can point to for destinations reporting and careers-strategy compliance, not just a completion certificate.',
  'A dashboard tracking student readiness across a whole cohort, so staff can see at a glance who is engaged, who is falling behind, and who is ready for an employer conversation — without chasing individual tutors for updates.',
  'Flat, capped pricing that scales with intake, so the cost is predictable regardless of cohort size.',
  'Safeguarding built in from day one, not added afterward — every brief and every verification happens inside a structure designed for young people, so institutions can offer real work experience without the liability of unsupervised external placements.',
]

const PROVIDER_FEATURES = [
  'Real project briefs that sit alongside existing courses, giving learners practical, verified experience without a separate placement to arrange.',
  'Verified outcomes, not just attendance — proof a learner actually did the work, to the standard asked for, rather than a record that they turned up.',
  'A direct route to employer visibility, so strong learners can be seen by employers before they\'ve even finished their course.',
]

const EMPLOYER_FEATURES = [
  'Seeing what a candidate actually built, before the CV — real, verified project work rather than a self-written list of skills.',
  'Direct access to job-ready talent, sourced from verified profiles rather than a stack of unverified applications.',
  'No placement fees, no long recruitment cycles — employers engage with students through project briefs, at a pace that suits them, instead of committing to a formal placement upfront.',
]

const TIMELINE = [
  { when: 'While still studying', what: 'Building proof of ability alongside their grades, one verified project at a time.' },
  { when: 'Applying to university or an apprenticeship', what: 'Something concrete to point to that a personal statement alone can\'t provide.' },
  { when: 'Graduating and applying for jobs', what: 'A profile of real, verified work that\'s often stronger evidence than a degree alone, especially for a first job.' },
  { when: 'Years later, as their career develops', what: 'The profile keeps growing with them, so early verified work never disappears just because they\'ve moved on.' },
]

const FOR_WHO = [
  { who: 'Schools, sixth forms and colleges', desc: 'wanting to give every student real work experience and stronger destinations outcomes, not just the students with existing connections.' },
  { who: 'Training providers', desc: 'wanting to give learners verified, practical outcomes alongside their course, and a direct route to employer visibility.' },
  { who: 'Employers', desc: 'from small local businesses to larger organisations, wanting to see real proof of what a young candidate can do before committing to hire or place them.' },
  { who: 'Students and young people', desc: "who want a way to prove their ability that doesn't depend on who they know." },
]

export default function HowItWorks() {
  return (
    <main className="lpage hiw-page">

      <section className="lpage-hero hiw-hero">
        <div className="wrap">
          <p className="eyebrow-plain">30 Sept 2026 · Alieu Sankoh</p>
          <h1>How LERN Works</h1>
          <p className="hero-sub">
            A platform where young people turn real work into verified proof of what
            they can do — and institutions, providers and employers connect around that evidence.
          </p>
        </div>
      </section>

      {/* ── Who we are ── */}
      <section className="lsection hiw-section">
        <div className="wrap hiw-prose">
          <h2>Who we are</h2>
          <p>
            LERN is a platform where young people turn real work into verified proof of what they can do.
          </p>
          <p>
            We were built on a simple observation: grades and CVs tell an employer what a young person
            studied, not what they can actually deliver. The students who get ahead are often the ones
            with connections — family who can arrange work experience, an uncle with a spare internship,
            a school with the right contacts. Everyone else is left showing a personal statement and
            hoping it's enough.
          </p>
          <p>
            LERN closes that gap. Instead of writing about their potential, students complete real project
            briefs set by real employers and training providers, get that work verified, and build a profile
            that proves what they're capable of — no connections required.
          </p>
        </div>
      </section>

      {/* ── The problem ── */}
      <section className="lsection hiw-section hiw-problem">
        <div className="wrap hiw-prose">
          <h2>The problem we solve</h2>
          <p>
            UK schools and colleges run careers programmes, apprenticeship weeks, and employer panels —
            but Ofsted and DfE reporting consistently flags the same gap: students who don't go to
            university, especially those without existing employer contacts, leave without enough direct
            work experience or employment readiness. Staff want to fix this, but arranging individual
            placements for every student, across every subject, doesn't scale.
          </p>
          <p>
            LERN doesn't replace careers provision — it gives it something concrete to run on. Instead
            of one placement arranged by hand, every student gets access to real project briefs they can
            complete alongside their studies, in any subject, verified by the people who set them.
          </p>
        </div>
      </section>

      {/* ── The loop ── */}
      <section className="lsection hiw-loop-section">
        <div className="wrap">
          <h2 className="hiw-loop-title">How LERN works: Do, Verify, Show, Hire</h2>
          <p className="hiw-loop-intro">
            LERN runs on one loop, repeated for every project a student completes.
          </p>
          <div className="hiw-steps">
            {STEPS.map((s) => (
              <div key={s.num} className="hiw-step">
                <div className="hiw-step-num">{s.num}</div>
                <div className="hiw-step-body">
                  <h3>{s.name}</h3>
                  <p>{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features by audience ── */}
      <section className="lsection hiw-section">
        <div className="wrap">
          <h2 className="hiw-features-title">Features, by who's using them</h2>

          <div className="hiw-audience-block">
            <div className="hiw-audience-head">
              <h3>For institutions</h3>
              <p className="hiw-audience-sub">Schools, sixth forms, colleges</p>
            </div>
            <ul className="hiw-feature-list">
              {INSTITUTION_FEATURES.map((f) => <li key={f}>{f}</li>)}
            </ul>
            <Link to="/institutions" className="link-accent hiw-learn-link">Learn more about Institutions →</Link>
          </div>

          <div className="hiw-audience-block">
            <div className="hiw-audience-head">
              <h3>For training providers</h3>
              <p className="hiw-audience-sub">Bootcamps · Employment programmes</p>
            </div>
            <ul className="hiw-feature-list">
              {PROVIDER_FEATURES.map((f) => <li key={f}>{f}</li>)}
            </ul>
            <Link to="/training-providers" className="link-accent hiw-learn-link">Learn more about Training Providers →</Link>
          </div>

          <div className="hiw-audience-block">
            <div className="hiw-audience-head">
              <h3>For employers</h3>
              <p className="hiw-audience-sub">Hiring teams · Talent leads</p>
            </div>
            <ul className="hiw-feature-list">
              {EMPLOYER_FEATURES.map((f) => <li key={f}>{f}</li>)}
            </ul>
            <Link to="/employers" className="link-accent hiw-learn-link">Learn more about Employers →</Link>
          </div>
        </div>
      </section>

      {/* ── Permanent profile ── */}
      <section className="lsection hiw-section hiw-profile-section">
        <div className="wrap">
          <div className="hiw-profile-grid">
            <div className="hiw-profile-copy">
              <h2>A profile that belongs to the student, not the institution</h2>
              <p>
                A student's verified work on LERN stays with them, not with the school or college that
                set the brief. It's their record, and it follows them through every stage that comes next.
              </p>
              <p className="hiw-profile-close">
                The institution introduces a student to LERN. The proof the student builds is theirs to keep for good.
              </p>
            </div>
            <div className="hiw-timeline">
              {TIMELINE.map((t) => (
                <div key={t.when} className="hiw-timeline-row">
                  <span className="hiw-timeline-when">{t.when}</span>
                  <span className="hiw-timeline-what">{t.what}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Who it's for ── */}
      <section className="lsection hiw-section">
        <div className="wrap">
          <h2>Who LERN is for</h2>
          <div className="hiw-for-grid">
            {FOR_WHO.map((f) => (
              <div key={f.who} className="hiw-for-item">
                <strong>{f.who}</strong>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What LERN is not ── */}
      <section className="lsection hiw-section hiw-not-section">
        <div className="wrap hiw-prose">
          <h2>What LERN is not</h2>
          <p>
            LERN is not a quiz app, and it doesn't test students on knowledge they've already learned.
            It's not another course platform — we don't teach the curriculum. And it's not a job board —
            we don't just list vacancies for students to apply to.
          </p>
          <p>
            LERN is the layer that turns real work into real, verified proof — built for institutions,
            training providers and employers to connect around evidence of what a young person can
            actually do.
          </p>
        </div>
      </section>

      <section className="page-cta">
        <div className="wrap">
          <h2>Ready to get started?</h2>
          <p>Email us and we'll get you set up.</p>
          <div className="cta-actions">
            <a href="mailto:hello@lernapp.uk" className="btn btn-primary-lg">Get in touch</a>
            <Link to="/pricing" className="link-accent">See pricing</Link>
          </div>
        </div>
      </section>

    </main>
  )
}
