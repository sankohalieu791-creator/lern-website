// Sidebar nav lists per variant, and the scripted beat sequences that
// drive PlatformDemo. Coordinates are relative to the window's body
// (780x~480 at full size) -- tuned by eye against real screenshots,
// not computed from CSS box math.

export const INSTITUTION_NAV = ['Feed', 'Work Experience', 'Review', 'Students', 'Guest invite', 'Briefs', 'Workshops', 'Interest received', 'Job tracking', 'Dashboard']
export const PROVIDER_NAV = ['Feed', 'Courses', 'Review', 'Students', 'Bootcamp Evidence', 'Workshops', 'Dashboard']
export const EMPLOYER_NAV = ['Discover', 'Talent pools', 'Jobs', 'Candidates', 'Inbox', 'Partners']

const navY = (list, label) => 70 + list.indexOf(label) * 34 + 17
const PROFILE = { x: 750, y: 20 }

// ── Home: the full tour -- every beat the user described, in order ──
export const HOME_BEATS = [
  { nav: 'Feed', panel: 'feed', sub: 'default', cursor: { x: 215, y: 90 }, hold: 1100 },
  { nav: 'Feed', panel: 'feed', sub: 'default', cursor: { x: 215, y: 90 }, click: true, hold: 500 },
  { nav: 'Feed', panel: 'feed', sub: 'posted', cursor: { x: 215, y: 90 }, hold: 1300 },

  { nav: 'Work Experience', panel: 'workexp', sub: 'list', cursor: navY2('Work Experience'), hold: 1100 },
  { nav: 'Work Experience', panel: 'workexp', sub: 'list', cursor: { x: 300, y: 165 }, click: true, hold: 400 },
  { nav: 'Work Experience', panel: 'workexp', sub: 'filled', cursor: { x: 300, y: 165 }, hold: 900 },
  { nav: 'Work Experience', panel: 'workexp', sub: 'filled', cursor: { x: 300, y: 290 }, click: true, hold: 500 },
  { nav: 'Work Experience', panel: 'workexp', sub: 'saved', cursor: { x: 300, y: 290 }, hold: 1200 },

  { nav: 'Work Experience', panel: 'export', cursor: { x: 240, y: 170 }, click: true, hold: 1300 },

  { nav: 'Review', panel: 'review', sub: null, cursor: navY2('Review'), hold: 900 },
  { nav: 'Review', panel: 'review', sub: null, cursor: { x: 300, y: 120 }, click: true, hold: 400 },
  { nav: 'Review', panel: 'review', sub: 'verify', cursor: { x: 420, y: 120 }, hold: 800 },
  { nav: 'Review', panel: 'review', sub: 'verify', cursor: { x: 420, y: 120 }, click: true, hold: 500 },
  { nav: 'Review', panel: 'review', sub: 'verified', cursor: { x: 420, y: 120 }, hold: 1200 },

  { nav: 'Workshops', panel: 'workshops', sub: null, cursor: navY2('Workshops'), hold: 900 },
  { nav: 'Workshops', panel: 'workshops', sub: null, cursor: { x: 715, y: 60 }, click: true, hold: 400 },
  { nav: 'Workshops', panel: 'workshops', sub: 'form', name: 'CV Writing Workshop', cursor: { x: 300, y: 125 }, hold: 800 },
  { nav: 'Workshops', panel: 'workshops', sub: 'form', name: 'CV Writing Workshop', cursor: { x: 300, y: 125 }, click: true, hold: 500 },
  { nav: 'Workshops', panel: 'workshops', sub: 'created', name: 'CV Writing Workshop', cursor: { x: 300, y: 125 }, hold: 1100 },

  { nav: 'Briefs', panel: 'briefs', sub: null, cursor: navY2('Briefs'), hold: 900 },
  { nav: 'Briefs', panel: 'briefs', sub: null, cursor: { x: 715, y: 60 }, click: true, hold: 400 },
  { nav: 'Briefs', panel: 'briefs', sub: 'form', name: 'Design a poster for our open day', cursor: { x: 300, y: 125 }, click: true, hold: 700 },
  { nav: 'Briefs', panel: 'briefs', sub: 'created', name: 'Design a poster for our open day', cursor: { x: 300, y: 125 }, hold: 1300 },

  { nav: null, panel: 'helpdesk', sub: 'empty', cursor: { x: 240, y: 110 }, click: true, hold: 700 },
  { nav: null, panel: 'helpdesk', sub: 'answered', cursor: { x: 240, y: 110 }, hold: 1500 },

  { nav: 'Interest received', panel: 'interest', sub: null, cursor: navY2('Interest received'), hold: 900 },
  { nav: 'Interest received', panel: 'interest', sub: null, cursor: { x: 710, y: 120 }, click: true, hold: 500 },
  { nav: 'Interest received', panel: 'interest', sub: 'open', cursor: { x: 710, y: 120 }, hold: 1300 },

  { nav: 'Interest received', panel: 'interest', sub: 'open', cursor: PROFILE, click: true, hold: 300 },
  { nav: 'Interest received', panel: 'interest', sub: 'open', cursor: PROFILE, profileMenu: true, hold: 1200 },

  { title: 'Where the future starts.', hold: 2600 },
]

function navY2(label) { return navY(INSTITUTION_NAV, label) }

// ── Shorter, faster per-role tours ──
export const INSTITUTION_BEATS = [
  { nav: 'Feed', panel: 'feed', sub: 'default', cursor: { x: 215, y: 90 }, hold: 1000 },
  { nav: 'Work Experience', panel: 'workexp', sub: 'saved', cursor: { x: 300, y: 290 }, click: true, hold: 1200 },
  { nav: 'Review', panel: 'review', sub: 'verified', cursor: { x: 420, y: 120 }, click: true, hold: 1200 },
  { nav: 'Briefs', panel: 'briefs', sub: 'created', name: 'Design a poster for our open day', cursor: { x: 715, y: 60 }, click: true, hold: 1300 },
  { title: 'Built for institutions.', hold: 2200 },
]

export const PROVIDER_BEATS = [
  { nav: 'Feed', panel: 'feed', sub: 'default', cursor: { x: 215, y: 90 }, hold: 1000 },
  { nav: 'Courses', panel: 'courses', sub: 'created', name: 'Digital Marketing Fundamentals', cursor: { x: 715, y: 60 }, click: true, hold: 1300 },
  { nav: 'Review', panel: 'review', sub: 'verified', cursor: { x: 420, y: 120 }, click: true, hold: 1200 },
  { nav: 'Workshops', panel: 'workshops', sub: 'created', name: 'Employability Bootcamp', cursor: { x: 715, y: 60 }, click: true, hold: 1300 },
  { title: 'Built for training providers.', hold: 2200 },
]

export const EMPLOYER_BEATS = [
  { nav: 'Discover', panel: 'discover', sub: 'interest', cursor: { x: 300, y: 165 }, hold: 1000 },
  { nav: 'Discover', panel: 'discover', sub: 'sent', cursor: { x: 300, y: 165 }, click: true, hold: 1300 },
  { nav: 'Candidates', panel: 'candidates', cursor: navY(EMPLOYER_NAV, 'Candidates'), hold: 1300 },
  { nav: 'Inbox', panel: 'inbox', sub: 'open', cursor: { x: 300, y: 120 }, click: true, hold: 1300 },
  { title: 'Built for employers.', hold: 2200 },
]
