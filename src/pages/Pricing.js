import './Pricing.css'

function Check() {
  return (
    <svg className="pc-check" viewBox="0 0 18 18" fill="none">
      <path d="M3.5 9.5l4 4 7-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const INSTITUTION_FEATURES = [
  { label: 'Feed', note: 'verified work visible school-wide, tutor-approved before anything shows' },
  { label: 'Review', note: 'every submission assessed against clear criteria before it counts' },
  { label: 'Work Experience', note: 'placements, daily attendance and sign-off in one view' },
  { label: 'Briefs & Workshops', note: 'real project briefs, live sessions, all tracked' },
  { label: 'Students', note: 'full roster with verified work, attendance and progress' },
  { label: 'Guest invite', note: 'safely share one student\'s profile with one employer' },
  { label: 'Job tracking', note: 'every application from first interest through to hired' },
  { label: 'Dashboard', note: 'overdue reviews, flagged content and weekly activity at a glance' },
  { label: 'Unlimited staff seats', note: 'every teacher and admin included, no extra cost' },
  { label: 'Safeguarding built in', note: 'no direct employer contact, no public searchability' },
]

const PROVIDER_FEATURES = [
  { label: 'Feed & Review', note: 'verified-work pipeline built for training cohorts' },
  { label: 'Courses', note: 'structured criteria that become trackable cohorts automatically' },
  { label: 'Workshops', note: 'online and in-person sessions learners join from their dashboard' },
  { label: 'Students', note: 'full roster with verified work, attendance and safe employer sharing' },
  { label: 'Guest invite', note: 'safely share one learner\'s profile with one employer' },
  { label: 'Job tracking', note: 'every application from first interest through to hired' },
  { label: 'Dashboard', note: 'activity, outcomes and what needs attention in one live view' },
  { label: 'Bootcamp Evidence add-on', note: 'attendance, completions and outcomes exported per cohort' },
]

const EMPLOYER_FEATURES = [
  { label: 'Discover', note: 'browse verified student work before the CV' },
  { label: 'Jobs', note: 'post roles and manage every applicant from one pipeline' },
  { label: 'Candidates', note: 'Applied → Reviewing → Shortlisted → Interview → Offer → Hired' },
  { label: 'Talent pools', note: 'LERN keeps promising candidates warm automatically' },
  { label: 'Inbox', note: 'all conversations routed through the school, never direct' },
  { label: 'Partners', note: 'track every school and provider relationship you\'ve built' },
]

const EMPLOYER_TIERS = [
  { name: 'Micro', size: '1–15', price: '£79', pools: '5 pools', postings: '5 postings' },
  { name: 'Growth', size: '16–99', price: '£249', pools: '20 pools', postings: '20 postings' },
  { name: 'Scale', size: '100–499', price: '£499', pools: '35 pools', postings: '35 postings' },
  { name: 'Enterprise', size: '500+', price: 'From £999', pools: 'Unlimited', postings: 'Unlimited' },
]

const PROVIDER_TIERS = [
  { band: '1–99 learners', price: '£70 / learner / yr', cap: 'capped £6,500' },
  { band: '100–299 learners', price: '£6,500 / yr', cap: 'flat rate' },
  { band: '300–599 learners', price: '£8,500 / yr', cap: 'flat rate' },
  { band: '600+ learners', price: 'On application', cap: '' },
]

export default function Pricing() {
  return (
    <main className="pricing-page">
      <section className="pricing-hero">
        <div className="wrap">
          <p className="eyebrow-plain">Pricing</p>
          <h1>One platform. Three plans.</h1>
          <p>
            Institutions and training providers pay annually by size.
            Employers pay monthly by company. Students always join free.
          </p>
        </div>
      </section>

      <div className="wrap">
        <div className="pricing-cards">

          {/* ── Institutions ── */}
          <div className="pc">
            <div className="pc-head">
              <p className="pc-label">Institutions</p>
              <p className="pc-subtitle">Schools &amp; colleges</p>
              <div className="pc-price-row">
                <span className="pc-amount">£2,000</span>
                <span className="pc-period">/ year</span>
              </div>
              <p className="pc-desc">
                Up to 750 students included. £2.50 per student above that,
                capped at £12,000/yr. One annual fee — unlimited staff seats.
              </p>
            </div>
            <div className="pc-divider" />
            <div className="pc-features-wrap">
              <p className="pc-features-label">What's included</p>
              <ul className="pc-features">
                {INSTITUTION_FEATURES.map(f => (
                  <li key={f.label}>
                    <Check />
                    <span><strong>{f.label}</strong> — {f.note}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pc-footer">
              <a href="mailto:alieu@joinirl.co.uk" className="pc-btn">Set up your school</a>
              <p className="pc-billing">Annual contract · VAT not included</p>
            </div>
          </div>

          {/* ── Training Providers ── */}
          <div className="pc pc-featured">
            <div className="pc-head">
              <p className="pc-label">Training Providers</p>
              <p className="pc-subtitle">Bootcamps &amp; programmes</p>
              <div className="pc-price-row">
                <span className="pc-amount">From £70</span>
                <span className="pc-period">/ learner / yr</span>
              </div>
              <p className="pc-desc">
                Scales with your cohort. Flat-rate bands above 100 learners.
                Custom pricing for 600+.
              </p>
              <div className="pc-tiers">
                {PROVIDER_TIERS.map(t => (
                  <div key={t.band} className="pc-tier-row">
                    <span className="pc-tier-band">{t.band}</span>
                    <div className="pc-tier-right">
                      <span className="pc-tier-price">{t.price}</span>
                      {t.cap && <span className="pc-tier-cap">{t.cap}</span>}
                    </div>
                  </div>
                ))}
              </div>
              <div className="pc-addon-pill">
                <strong>Bootcamp Evidence add-on</strong>
                <span>£100–£200 / month</span>
              </div>
            </div>
            <div className="pc-divider" />
            <div className="pc-features-wrap">
              <p className="pc-features-label">What's included</p>
              <ul className="pc-features">
                {PROVIDER_FEATURES.map(f => (
                  <li key={f.label}>
                    <Check />
                    <span><strong>{f.label}</strong> — {f.note}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pc-footer">
              <a href="mailto:alieu@joinirl.co.uk" className="pc-btn">Set up your organisation</a>
              <p className="pc-billing">Annual contract · VAT not included</p>
            </div>
          </div>

          {/* ── Employers ── */}
          <div className="pc">
            <div className="pc-head">
              <p className="pc-label">Employers</p>
              <p className="pc-subtitle">Hiring teams</p>
              <div className="pc-price-row">
                <span className="pc-amount">From £79</span>
                <span className="pc-period">/ month</span>
              </div>
              <p className="pc-desc">
                Four plans by company size. All plans include every feature below.
                Cancel any time.
              </p>
              <div className="pc-employer-tiers">
                {EMPLOYER_TIERS.map(t => (
                  <div key={t.name} className="pc-emp-row">
                    <div className="pc-emp-left">
                      <span className="pc-emp-name">{t.name}</span>
                      <span className="pc-emp-size">{t.size} employees</span>
                    </div>
                    <div className="pc-emp-right">
                      <span className="pc-emp-price">{t.price}<em>/mo</em></span>
                      <span className="pc-emp-limits">{t.pools} · {t.postings}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="pc-divider" />
            <div className="pc-features-wrap">
              <p className="pc-features-label">All plans include</p>
              <ul className="pc-features">
                {EMPLOYER_FEATURES.map(f => (
                  <li key={f.label}>
                    <Check />
                    <span><strong>{f.label}</strong> — {f.note}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pc-footer">
              <a href="mailto:alieu@joinirl.co.uk" className="pc-btn">Start hiring safely</a>
              <p className="pc-billing">Monthly · Cancel any time · VAT not included</p>
            </div>
          </div>

        </div>

        <p className="pricing-note">
          Students always join free.{' '}
          <a href="mailto:alieu@joinirl.co.uk">Email us</a>{' '}
          if you're not sure which plan fits your organisation.
        </p>
      </div>
    </main>
  )
}
