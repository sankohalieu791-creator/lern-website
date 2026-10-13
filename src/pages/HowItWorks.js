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
  { name: 'Feed', body: 'A live, school-wide feed of work your students have actually had verified — nothing appears until a tutor has checked it, so it never fills up with unverified claims or noise.' },
  { name: 'Review', body: 'A structured queue for every submission, checked against the specific criteria the brief or skill asked for. Staff decide verified, returned for changes, or revoked — every decision is logged, and feedback goes straight back to the student.' },
  { name: 'Skill Wallet', body: "Set up the skills for a course once, with the criteria that count as proof for each. As students' verified work comes in, their skills move through five levels — Not started, Beginner, Developing, Secure, Advanced. Students can also set their own goal for something they're teaching themselves and check in weekly with proof — no tutor step needed for that part." },
  { name: 'Work Experience', body: 'Placements, daily attendance and supervisor sign-off tracked in one view, replacing the spreadsheets and email chains most schools currently run this through.' },
  { name: 'Briefs & Workshops', body: 'Set real project briefs for any subject, and run live or in-person workshops students join from their own dashboard — both tracked the same way everything else on LERN is.' },
  { name: 'Students', body: "A full roster per student: verified work, attendance, progress and skill levels, all in one place instead of scattered across different systems." },
  { name: 'Guest invite', body: "A time-limited link that safely shares one student's verified profile with one employer — no employer account needed, and the link expires, so access is never left open-ended." },
  { name: 'Job tracking', body: 'Every application tracked from first interest through to hired, so staff can see exactly where each student stands with an employer without chasing updates by email.' },
  { name: 'Dashboard', body: 'Overdue reviews, flagged content and weekly activity at a glance — the things that need a staff member\'s attention, surfaced automatically instead of needing to be hunted for.' },
  { name: 'Unlimited staff seats', body: 'Every teacher and admin who needs access is included in the one annual fee — no per-seat licensing to manage or budget around.' },
  { name: 'Safeguarding', body: 'No employer ever contacts a student directly — every message routes through the school. Nothing appears on a profile until a tutor has verified it. Under-18s are never publicly searchable. Every reported post is hidden immediately and reviewed by a person.' },
]

const PROVIDER_FEATURES = [
  { name: 'Feed & Review', body: 'The same verified-work pipeline as institutions, built for training cohorts — nothing shows on a learner\'s profile until it has been checked against clear criteria.' },
  { name: 'Courses', body: 'Structured criteria that automatically become a trackable cohort — set it up once per course, and every learner\'s progress against it is visible from day one.' },
  { name: 'Skill Wallet', body: "Set the skills a course teaches, with the proof that counts for each — as learners' work is verified, their skills move through five honest levels instead of a single pass/fail outcome. Learners can also log their own self-taught skills with weekly dated check-ins and proof, no tutor step needed." },
  { name: 'Workshops', body: 'Online and in-person sessions learners join straight from their dashboard, with attendance tracked automatically.' },
  { name: 'Students', body: 'A full roster — verified work, attendance, progress and skill levels — plus a safe way to share any one learner\'s profile directly with an employer.' },
  { name: 'Job tracking', body: 'Every application tracked from first interest through to hired, so you always know where a learner stands with an employer.' },
  { name: 'Dashboard', body: 'A live view of activity, outcomes and what needs your attention — the same real-time visibility institutions get.' },
  { name: 'Bootcamp Evidence add-on', body: 'Attendance, completions and outcomes exported per cohort, built specifically for the funder and compliance reporting bootcamps and employment programmes are asked for.' },
]

const EMPLOYER_FEATURES = [
  { name: 'Discover', body: 'Browse verified student and learner work before a single CV is involved — real, checked project output, not a self-written list of skills.' },
  { name: 'Jobs', body: 'Post roles and manage every applicant from one pipeline, instead of juggling email threads and spreadsheets per vacancy.' },
  { name: 'Candidates', body: 'A clear pipeline for every applicant — Applied, Reviewing, Shortlisted, Interview, Offer, Hired — so nothing gets lost between stages.' },
  { name: 'Talent pools', body: 'LERN automatically keeps promising candidates warm for you, so strong people you\'re not ready to hire yet don\'t just disappear.' },
  { name: 'Inbox', body: 'Every conversation with a young candidate is routed through their school first — you are never in direct, unsupervised contact with an under-18.' },
  { name: 'Partners', body: 'Track every school and training provider relationship you\'ve built in one place, instead of losing context between separate email threads.' },
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
              {INSTITUTION_FEATURES.map((f) => <li key={f.name}><strong>{f.name}</strong> — {f.body}</li>)}
            </ul>
            <Link to="/institutions" className="link-accent hiw-learn-link">Learn more about Institutions →</Link>
          </div>

          <div className="hiw-audience-block">
            <div className="hiw-audience-head">
              <h3>For training providers</h3>
              <p className="hiw-audience-sub">Bootcamps · Employment programmes</p>
            </div>
            <ul className="hiw-feature-list">
              {PROVIDER_FEATURES.map((f) => <li key={f.name}><strong>{f.name}</strong> — {f.body}</li>)}
            </ul>
            <Link to="/training-providers" className="link-accent hiw-learn-link">Learn more about Training Providers →</Link>
          </div>

          <div className="hiw-audience-block">
            <div className="hiw-audience-head">
              <h3>For employers</h3>
              <p className="hiw-audience-sub">Hiring teams · Talent leads</p>
            </div>
            <ul className="hiw-feature-list">
              {EMPLOYER_FEATURES.map((f) => <li key={f.name}><strong>{f.name}</strong> — {f.body}</li>)}
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
