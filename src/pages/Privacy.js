import { Link } from 'react-router-dom'
import './Legal.css'

export default function Privacy() {
  return (
    <div className="legal-page">
      <div className="wrap">
        <Link to="/" className="legal-back">Back to home</Link>

        <div className="legal-doc">
          <h1>Privacy Notice</h1>
          <p className="legal-meta">
            IRL Connect Ltd (trading as LERN) · Company No. 17200180 · Version 1.0 · August 2026
          </p>
          <p>
            This notice explains how LERN handles your personal data and your rights over it.
            LERN is a platform where young people build verified work and connect safely with
            employers through their school, college or organisation.
          </p>

          <h2>Who we are</h2>
          <p>
            LERN is operated by IRL Connect Ltd, a company registered in England and Wales
            (Company No. 17200180), registered office 93a Cobbold Road, London NW10 9SU.
            You can contact us at{' '}
            <a href="mailto:alieu@joinirl.co.uk">alieu@joinirl.co.uk</a>.
          </p>

          <h2>When your school or organisation is in control</h2>
          <p>
            While you are on LERN through your school, college or organisation, that institution
            is the data controller for your personal data, and LERN acts as its data processor.
            This means your institution decides how your data is used, and we process it only
            on their instructions, under a written agreement (our Data Processing Schedule).
          </p>

          <h2>When we become the controller</h2>
          <p>
            If your institution stops using LERN and you choose to keep your own profile and
            project work, LERN then becomes the controller of that data in its own right, on
            the basis of your consent. From that point, this notice governs how we handle your
            data, we are responsible for it, and you can withdraw your consent and have it
            deleted at any time.
          </p>

          <h2>What data we hold</h2>
          <ul>
            <li>Your name, email address and age</li>
            <li>Your profile information and the project work you create</li>
            <li>Recordings of any online workshops you take part in (some workshops are in person and are not recorded)</li>
          </ul>
          <p>
            We do not ask for or require special category data (such as health or SEND
            information). If you choose to share such information within your own work or
            content, we do not solicit it and treat it as your own contribution.
          </p>

          <h2>Why we hold it and our lawful basis</h2>
          <ul>
            <li>To provide the platform and show your verified work to your institution and to employers it approves — on your institution's instructions while it is the controller.</li>
            <li>To let you keep your profile after your institution leaves — on the basis of your consent.</li>
          </ul>
          <p>We never sell your data.</p>

          <h2>Who can see your data</h2>
          <ul>
            <li>Your own institution and its staff.</li>
            <li>Employers your institution has approved — who see only your verified profile, and for under-18s can never contact you directly; any interest is routed through your institution.</li>
            <li>Within LERN, access is limited to two named people (the Founder and the Founding Engineer).</li>
          </ul>
          <p>Your full location and contact details are never shown publicly.</p>

          <h2>Where your data is stored</h2>
          <p>
            All personal data is stored in the United Kingdom. We use Supabase (UK region)
            for database and storage, Vercel for application hosting, and Agora for live video
            in online workshops (UK region). These providers act as our sub-processors under
            data protection terms.
          </p>

          <h2>How long we keep it</h2>
          <p>
            While your institution uses LERN, we hold your data for the duration of that use.
            If the arrangement ends and you do not choose to keep your profile, we delete your
            personal data within 30 days. Recordings of online workshops are kept for 12 months
            and then deleted, unless needed for an active safeguarding matter. If you keep your
            profile on the basis of consent, we hold it until you withdraw that consent.
          </p>

          <h2>Your rights</h2>
          <p>
            You have the right to access your data, correct it, delete it, restrict or object
            to how we use it, and to withdraw consent at any time. To exercise any of these,
            contact <a href="mailto:alieu@joinirl.co.uk">alieu@joinirl.co.uk</a>. You also
            have the right to complain to the Information Commissioner's Office (
            <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">ico.org.uk</a>).
          </p>

          <h2>Changes to this notice</h2>
          <p>
            We may update this notice. The version number and date at the top show when it
            was last changed.
          </p>

          <p className="legal-footer">
            IRL Connect Ltd (trading as LERN) · <a href="mailto:alieu@joinirl.co.uk">alieu@joinirl.co.uk</a> · lernapp.uk
          </p>
        </div>
      </div>
    </div>
  )
}
