import { Link } from 'react-router-dom'
import './Legal.css'

export default function Cookies() {
  return (
    <div className="legal-page">
      <div className="wrap">
        <Link to="/" className="legal-back">Back to home</Link>

        <div className="legal-doc">
          <h1>Cookie Policy</h1>
          <p className="legal-meta">
            IRL Connect Ltd (trading as LERN) · Company No. 17200180 · Last updated July 2026
          </p>

          <p>
            This Cookie Policy explains how IRL Connect Ltd ('we', 'us', and 'our') uses
            cookies and similar technologies to recognise you when you visit our website at{' '}
            <a href="https://join.lernapp.uk" target="_blank" rel="noopener noreferrer">join.lernapp.uk</a>{' '}
            and the LERN app.
          </p>
          <p>
            In some cases we may use cookies to collect personal information, or that becomes
            personal information if we combine it with other information. In such cases our{' '}
            <Link to="/privacy">Privacy Notice</Link> will apply in addition to this Cookie Policy.
          </p>

          <h2>What are cookies?</h2>
          <p>
            Cookies are small data files that are placed on your computer or mobile device when
            you visit a website. Cookies are widely used by website owners in order to make their
            websites work, or to work more efficiently, as well as to provide reporting information.
          </p>
          <p>
            Cookies set by the website owner are called 'first-party cookies'. Cookies set by
            parties other than the website owner are called 'third-party cookies'. Third-party
            cookies enable third-party features or functionality to be provided on or through the
            website (such as analytics). The parties that set these third-party cookies can
            recognise your computer both when it visits this website and also when it visits
            certain other websites.
          </p>

          <h2>Why do we use cookies?</h2>
          <p>
            We use first- and third-party cookies for several reasons. Some cookies are required
            for technical reasons in order for our website to operate — we refer to these as
            'essential' or 'strictly necessary' cookies. Others enable us to understand how
            our website is used.
          </p>

          <h2>What types of cookies do we use?</h2>

          <h3>Essential website cookies</h3>
          <p>
            These cookies are strictly necessary to provide you with services available through
            our website and to use some of its features, such as access to secure areas.
          </p>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Purpose</th>
                <th>Provider</th>
                <th>Expiry</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>__session</td>
                <td>Maintains user session state across page requests</td>
                <td>join.lernapp.uk</td>
                <td>Session</td>
              </tr>
              <tr>
                <td>_csrf</td>
                <td>Helps prevent Cross-Site Request Forgery (CSRF) attacks</td>
                <td>join.lernapp.uk</td>
                <td>Session</td>
              </tr>
            </tbody>
          </table>

          <h3>Performance and functionality cookies</h3>
          <p>
            These cookies are used to enhance the performance and functionality of our website
            but are non-essential to their use. However, without these cookies, certain
            functionality (such as remembering your preferences) may become unavailable.
          </p>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Purpose</th>
                <th>Provider</th>
                <th>Expiry</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>_prefs</td>
                <td>Stores user preferences such as language and display settings</td>
                <td>join.lernapp.uk</td>
                <td>1 year</td>
              </tr>
            </tbody>
          </table>

          <h3>Analytics cookies</h3>
          <p>
            These cookies collect information that is used in aggregate form to help us
            understand how our website is being used.
          </p>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Purpose</th>
                <th>Provider</th>
                <th>Expiry</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>_ga</td>
                <td>Records a particular ID used to come up with data about website usage</td>
                <td>Google Analytics</td>
                <td>2 years</td>
              </tr>
              <tr>
                <td>_gid</td>
                <td>Registers a unique ID used to generate statistical data on visitor usage</td>
                <td>Google Analytics</td>
                <td>1 day</td>
              </tr>
            </tbody>
          </table>

          <h2>How can I control cookies?</h2>
          <p>
            You have the right to decide whether to accept or reject cookies. You can control
            cookies through your browser settings. The following links show how to manage
            cookies on the most popular browsers:
          </p>
          <ul>
            <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Chrome</a></li>
            <li><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener noreferrer">Firefox</a></li>
            <li><a href="https://support.apple.com/en-ie/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
            <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">Edge</a></li>
          </ul>

          <h2>How often will we update this policy?</h2>
          <p>
            We may update this Cookie Policy from time to time to reflect changes in the
            cookies we use or for other operational, legal, or regulatory reasons. The date
            at the top of this policy indicates when it was last updated.
          </p>

          <h2>Questions?</h2>
          <p>
            If you have any questions about our use of cookies, email us at{' '}
            <a href="mailto:alieu@joinirl.co.uk">alieu@joinirl.co.uk</a>.
          </p>

          <p className="legal-footer">
            IRL Connect Ltd (trading as LERN) · <a href="mailto:alieu@joinirl.co.uk">alieu@joinirl.co.uk</a> · lernapp.uk
          </p>
        </div>
      </div>
    </div>
  )
}
