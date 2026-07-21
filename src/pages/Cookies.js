import React from 'react'
import { Link } from 'react-router-dom'
import './Privacy.css'

const TERMLY_STYLE = `
  [data-custom-class='body'], [data-custom-class='body'] * { background: transparent !important; }
  [data-custom-class='title'], [data-custom-class='title'] * { font-family: Arial !important; font-size: 26px !important; color: #000000 !important; }
  [data-custom-class='subtitle'], [data-custom-class='subtitle'] * { font-family: Arial !important; color: #595959 !important; font-size: 14px !important; }
  [data-custom-class='heading_1'], [data-custom-class='heading_1'] * { font-family: Arial !important; font-size: 19px !important; color: #000000 !important; }
  [data-custom-class='heading_2'], [data-custom-class='heading_2'] * { font-family: Arial !important; font-size: 17px !important; color: #000000 !important; }
  [data-custom-class='body_text'], [data-custom-class='body_text'] * { color: #595959 !important; font-size: 14px !important; font-family: Arial !important; }
  [data-custom-class='link'], [data-custom-class='link'] * { color: #3030F1 !important; font-size: 14px !important; font-family: Arial !important; word-break: break-word !important; }
`

const COOKIES_HTML = `
<div data-custom-class="body">

<div><strong><span style="font-size:26px"><span data-custom-class="title"><h1>COOKIE POLICY</h1></span></span></strong></div>
<div><span style="color:rgb(127,127,127)"><strong><span style="font-size:15px"><span data-custom-class="subtitle">Last updated July 21, 2026</span></span></strong></span></div>
<div><br></div>

<div style="line-height:1.5"><span style="font-size:15px"><span data-custom-class="body_text">This Cookie Policy explains how <strong>IRL CONNECT</strong> ('we', 'us', and 'our') uses cookies and similar technologies to recognise you when you visit our website at <a href="https://join.lernapp.uk" target="_blank" data-custom-class="link">https://join.lernapp.uk</a> and the LERN app. It explains what these technologies are and why we use them, as well as your rights to control our use of them.</span></span></div>
<div style="line-height:1.5"><br></div>
<div style="line-height:1.5"><span style="font-size:15px"><span data-custom-class="body_text">In some cases we may use cookies to collect personal information, or that becomes personal information if we combine it with other information. In such cases our <a href="/privacy" data-custom-class="link">Privacy Policy</a> will apply in addition to this Cookie Policy.</span></span></div>

<div style="line-height:1.5"><br></div><div style="line-height:1.5"><br></div>

<!-- SECTION 1 -->
<div id="what" style="line-height:1.5"><strong><span data-custom-class="heading_1"><h2>1. WHAT ARE COOKIES?</h2></span></strong></div>
<div style="line-height:1.5"><span style="font-size:15px"><span data-custom-class="body_text">Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.</span></span></div>
<div style="line-height:1.5"><br></div>
<div style="line-height:1.5"><span style="font-size:15px"><span data-custom-class="body_text">Cookies set by the website owner (in this case, IRL CONNECT) are called 'first-party cookies'. Cookies set by parties other than the website owner are called 'third-party cookies'. Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g. advertising, interactive content and analytics). The parties that set these third-party cookies can recognise your computer both when it visits the website in question and also when it visits certain other websites.</span></span></div>

<div style="line-height:1.5"><br></div><div style="line-height:1.5"><br></div>

<!-- SECTION 2 -->
<div id="why" style="line-height:1.5"><strong><span data-custom-class="heading_1"><h2>2. WHY DO WE USE COOKIES?</h2></span></strong></div>
<div style="line-height:1.5"><span style="font-size:15px"><span data-custom-class="body_text">We use first- and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our website to operate, and we refer to these as 'essential' or 'strictly necessary' cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Online Properties. Third parties serve cookies through our website for analytics and other purposes. This is described in more detail below.</span></span></div>

<div style="line-height:1.5"><br></div><div style="line-height:1.5"><br></div>

<!-- SECTION 3 -->
<div id="types" style="line-height:1.5"><strong><span data-custom-class="heading_1"><h2>3. HOW CAN I CONTROL COOKIES?</h2></span></strong></div>
<div style="line-height:1.5"><span style="font-size:15px"><span data-custom-class="body_text">You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in the Cookie Consent Manager. The Cookie Consent Manager allows you to select which categories of cookies you accept or reject. Essential cookies cannot be rejected as they are strictly necessary to provide you with services.</span></span></div>
<div style="line-height:1.5"><br></div>
<div style="line-height:1.5"><span style="font-size:15px"><span data-custom-class="body_text">The Cookie Consent Manager can be found in the notification banner and on our website. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted. You may also set or amend your web browser controls to accept or refuse cookies.</span></span></div>
<div style="line-height:1.5"><br></div>
<div style="line-height:1.5"><span style="font-size:15px"><span data-custom-class="body_text">The specific types of first- and third-party cookies served through our website and the purposes they perform are described in the table below (please note that the specific cookies served may vary depending on the specific Online Properties you visit):</span></span></div>

<div style="line-height:1.5"><br></div><div style="line-height:1.5"><br></div>

<!-- SECTION 4 -->
<div id="essential" style="line-height:1.5"><strong><span data-custom-class="heading_1"><h2>4. WHAT TYPES OF COOKIES DO WE USE?</h2></span></strong></div>

<div style="line-height:1.5"><span style="font-size:15px"><span data-custom-class="heading_2"><strong><h3>Essential website cookies</h3></strong></span></span></div>
<div style="line-height:1.5"><span style="font-size:15px"><span data-custom-class="body_text">These cookies are strictly necessary to provide you with services available through our website and to use some of its features, such as access to secure areas.</span></span></div>
<div style="line-height:1.5"><br></div>

<table style="width:100%;border-collapse:collapse;font-size:14px">
  <thead>
    <tr style="background:rgba(0,0,0,0.04)">
      <th style="padding:0.6rem 1rem;text-align:left;border-bottom:1px solid rgba(0,0,0,0.1);font-size:13px">Name</th>
      <th style="padding:0.6rem 1rem;text-align:left;border-bottom:1px solid rgba(0,0,0,0.1);font-size:13px">Purpose</th>
      <th style="padding:0.6rem 1rem;text-align:left;border-bottom:1px solid rgba(0,0,0,0.1);font-size:13px">Provider</th>
      <th style="padding:0.6rem 1rem;text-align:left;border-bottom:1px solid rgba(0,0,0,0.1);font-size:13px">Expiry</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding:0.6rem 1rem;border-bottom:1px solid rgba(0,0,0,0.06);color:#595959">__session</td>
      <td style="padding:0.6rem 1rem;border-bottom:1px solid rgba(0,0,0,0.06);color:#595959">Maintains user session state across page requests</td>
      <td style="padding:0.6rem 1rem;border-bottom:1px solid rgba(0,0,0,0.06);color:#595959">join.lernapp.uk</td>
      <td style="padding:0.6rem 1rem;border-bottom:1px solid rgba(0,0,0,0.06);color:#595959">Session</td>
    </tr>
    <tr>
      <td style="padding:0.6rem 1rem;border-bottom:1px solid rgba(0,0,0,0.06);color:#595959">_csrf</td>
      <td style="padding:0.6rem 1rem;border-bottom:1px solid rgba(0,0,0,0.06);color:#595959">Helps prevent Cross-Site Request Forgery (CSRF) attacks</td>
      <td style="padding:0.6rem 1rem;border-bottom:1px solid rgba(0,0,0,0.06);color:#595959">join.lernapp.uk</td>
      <td style="padding:0.6rem 1rem;border-bottom:1px solid rgba(0,0,0,0.06);color:#595959">Session</td>
    </tr>
  </tbody>
</table>

<div style="line-height:1.5"><br></div>

<div style="line-height:1.5"><span style="font-size:15px"><span data-custom-class="heading_2"><strong><h3>Performance and functionality cookies</h3></strong></span></span></div>
<div style="line-height:1.5"><span style="font-size:15px"><span data-custom-class="body_text">These cookies are used to enhance the performance and functionality of our website but are non-essential to their use. However, without these cookies, certain functionality (like remembering your preferences) may become unavailable.</span></span></div>
<div style="line-height:1.5"><br></div>

<table style="width:100%;border-collapse:collapse;font-size:14px">
  <thead>
    <tr style="background:rgba(0,0,0,0.04)">
      <th style="padding:0.6rem 1rem;text-align:left;border-bottom:1px solid rgba(0,0,0,0.1);font-size:13px">Name</th>
      <th style="padding:0.6rem 1rem;text-align:left;border-bottom:1px solid rgba(0,0,0,0.1);font-size:13px">Purpose</th>
      <th style="padding:0.6rem 1rem;text-align:left;border-bottom:1px solid rgba(0,0,0,0.1);font-size:13px">Provider</th>
      <th style="padding:0.6rem 1rem;text-align:left;border-bottom:1px solid rgba(0,0,0,0.1);font-size:13px">Expiry</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding:0.6rem 1rem;border-bottom:1px solid rgba(0,0,0,0.06);color:#595959">_prefs</td>
      <td style="padding:0.6rem 1rem;border-bottom:1px solid rgba(0,0,0,0.06);color:#595959">Stores user preferences such as language and display settings</td>
      <td style="padding:0.6rem 1rem;border-bottom:1px solid rgba(0,0,0,0.06);color:#595959">join.lernapp.uk</td>
      <td style="padding:0.6rem 1rem;border-bottom:1px solid rgba(0,0,0,0.06);color:#595959">1 year</td>
    </tr>
  </tbody>
</table>

<div style="line-height:1.5"><br></div>

<div style="line-height:1.5"><span style="font-size:15px"><span data-custom-class="heading_2"><strong><h3>Analytics and customisation cookies</h3></strong></span></span></div>
<div style="line-height:1.5"><span style="font-size:15px"><span data-custom-class="body_text">These cookies collect information that is used either in aggregate form to help us understand how our website is being used or how effective our marketing campaigns are, or to help us customise our website for you.</span></span></div>
<div style="line-height:1.5"><br></div>

<table style="width:100%;border-collapse:collapse;font-size:14px">
  <thead>
    <tr style="background:rgba(0,0,0,0.04)">
      <th style="padding:0.6rem 1rem;text-align:left;border-bottom:1px solid rgba(0,0,0,0.1);font-size:13px">Name</th>
      <th style="padding:0.6rem 1rem;text-align:left;border-bottom:1px solid rgba(0,0,0,0.1);font-size:13px">Purpose</th>
      <th style="padding:0.6rem 1rem;text-align:left;border-bottom:1px solid rgba(0,0,0,0.1);font-size:13px">Provider</th>
      <th style="padding:0.6rem 1rem;text-align:left;border-bottom:1px solid rgba(0,0,0,0.1);font-size:13px">Expiry</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding:0.6rem 1rem;border-bottom:1px solid rgba(0,0,0,0.06);color:#595959">_ga</td>
      <td style="padding:0.6rem 1rem;border-bottom:1px solid rgba(0,0,0,0.06);color:#595959">Records a particular ID used to come up with data about website usage by the user</td>
      <td style="padding:0.6rem 1rem;border-bottom:1px solid rgba(0,0,0,0.06);color:#595959">Google Analytics</td>
      <td style="padding:0.6rem 1rem;border-bottom:1px solid rgba(0,0,0,0.06);color:#595959">2 years</td>
    </tr>
    <tr>
      <td style="padding:0.6rem 1rem;border-bottom:1px solid rgba(0,0,0,0.06);color:#595959">_gid</td>
      <td style="padding:0.6rem 1rem;border-bottom:1px solid rgba(0,0,0,0.06);color:#595959">Registers a unique ID that is used to generate statistical data on how the visitor uses the website</td>
      <td style="padding:0.6rem 1rem;border-bottom:1px solid rgba(0,0,0,0.06);color:#595959">Google Analytics</td>
      <td style="padding:0.6rem 1rem;border-bottom:1px solid rgba(0,0,0,0.06);color:#595959">1 day</td>
    </tr>
  </tbody>
</table>

<div style="line-height:1.5"><br></div><div style="line-height:1.5"><br></div>

<!-- SECTION 5 -->
<div id="browser" style="line-height:1.5"><strong><span data-custom-class="heading_1"><h2>5. HOW CAN I CONTROL COOKIES ON MY BROWSER?</h2></span></strong></div>
<div style="line-height:1.5"><span style="font-size:15px"><span data-custom-class="body_text">As the means by which you can refuse cookies through your web browser controls vary from browser to browser, you should visit your browser's help menu for more information. The following is information about how to manage cookies on the most popular browsers:</span></span></div>
<div style="line-height:1.5"><br></div>
<ul>
  <li data-custom-class="body_text" style="line-height:1.5"><span style="font-size:15px"><a href="https://support.google.com/chrome/answer/95647#zippy=%2Callow-or-block-cookies" target="_blank" rel="noopener noreferrer" data-custom-class="link">Chrome</a></span></li>
  <li data-custom-class="body_text" style="line-height:1.5"><span style="font-size:15px"><a href="https://support.microsoft.com/en-us/windows/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer" data-custom-class="link">Internet Explorer</a></span></li>
  <li data-custom-class="body_text" style="line-height:1.5"><span style="font-size:15px"><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop?redirectslug=enable-and-disable-cookies-website-preferences&redirectlocale=en-US" target="_blank" rel="noopener noreferrer" data-custom-class="link">Firefox</a></span></li>
  <li data-custom-class="body_text" style="line-height:1.5"><span style="font-size:15px"><a href="https://support.apple.com/en-ie/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" data-custom-class="link">Safari</a></span></li>
  <li data-custom-class="body_text" style="line-height:1.5"><span style="font-size:15px"><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" data-custom-class="link">Edge</a></span></li>
  <li data-custom-class="body_text" style="line-height:1.5"><span style="font-size:15px"><a href="https://help.opera.com/en/latest/web-preferences/" target="_blank" rel="noopener noreferrer" data-custom-class="link">Opera</a></span></li>
</ul>
<div style="line-height:1.5"><br></div>
<div style="line-height:1.5"><span style="font-size:15px"><span data-custom-class="body_text">In addition, most advertising networks offer you a way to opt out of targeted advertising. If you would like to find out more information, please visit:</span></span></div>
<div style="line-height:1.5"><br></div>
<ul>
  <li data-custom-class="body_text" style="line-height:1.5"><span style="font-size:15px"><a href="http://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" data-custom-class="link">Digital Advertising Alliance</a></span></li>
  <li data-custom-class="body_text" style="line-height:1.5"><span style="font-size:15px"><a href="https://youradchoices.ca/" target="_blank" rel="noopener noreferrer" data-custom-class="link">Digital Advertising Alliance of Canada</a></span></li>
  <li data-custom-class="body_text" style="line-height:1.5"><span style="font-size:15px"><a href="http://www.youronlinechoices.com/" target="_blank" rel="noopener noreferrer" data-custom-class="link">European Interactive Digital Advertising Alliance</a></span></li>
</ul>

<div style="line-height:1.5"><br></div><div style="line-height:1.5"><br></div>

<!-- SECTION 6 -->
<div id="other" style="line-height:1.5"><strong><span data-custom-class="heading_1"><h2>6. OTHER TRACKING TECHNOLOGIES</h2></span></strong></div>
<div style="line-height:1.5"><span style="font-size:15px"><span data-custom-class="body_text">In addition to cookies, we may use web beacons (also called tracking pixels), and similar tracking technologies on our website. Web beacons are tiny graphic files that contain a unique identifier that enables us to recognise when someone has visited our website or opened an email including them. This allows us, for example, to monitor the traffic patterns of users from one page within a website to another, to deliver or communicate with cookies, to understand whether you have come to the website from an online advertisement displayed on a third-party website, to improve site performance, and to measure the success of email marketing campaigns. In many instances, these technologies are reliant on cookies to function properly, and so declining cookies will impair their functioning.</span></span></div>

<div style="line-height:1.5"><br></div><div style="line-height:1.5"><br></div>

<!-- SECTION 7 -->
<div id="flash" style="line-height:1.5"><strong><span data-custom-class="heading_1"><h2>7. DO YOU USE FLASH COOKIES OR LOCAL SHARED OBJECTS?</h2></span></strong></div>
<div style="line-height:1.5"><span style="font-size:15px"><span data-custom-class="body_text">Websites may also use so-called 'Flash Cookies' (also known as Local Shared Objects or 'LSOs') to, amongst other things, collect and store information about your use of our services, prevent fraud, and for other site operations.</span></span></div>
<div style="line-height:1.5"><br></div>
<div style="line-height:1.5"><span style="font-size:15px"><span data-custom-class="body_text">If you do not want Flash Cookies stored on your computer, you can adjust the settings of your Flash player to block Flash Cookies storage using the tools contained in the <a href="http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager07.html" target="_blank" rel="noopener noreferrer" data-custom-class="link">Website Storage Settings Panel</a>. You can also control Flash Cookies by going to the <a href="http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager03.html" target="_blank" rel="noopener noreferrer" data-custom-class="link">Global Storage Settings Panel</a> and following the instructions.</span></span></div>
<div style="line-height:1.5"><br></div>
<div style="line-height:1.5"><span style="font-size:15px"><span data-custom-class="body_text">Please note that setting the Flash Player to restrict or limit acceptance of Flash Cookies may reduce or impede the functionality of some Flash applications, including, potentially, Flash applications used in connection with our services or online content.</span></span></div>

<div style="line-height:1.5"><br></div><div style="line-height:1.5"><br></div>

<!-- SECTION 8 -->
<div id="updates" style="line-height:1.5"><strong><span data-custom-class="heading_1"><h2>8. HOW OFTEN WILL WE UPDATE THIS COOKIE POLICY?</h2></span></strong></div>
<div style="line-height:1.5"><span style="font-size:15px"><span data-custom-class="body_text">We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please therefore revisit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.</span></span></div>
<div style="line-height:1.5"><br></div>
<div style="line-height:1.5"><span style="font-size:15px"><span data-custom-class="body_text">The date at the top of this Cookie Policy indicates when it was last updated.</span></span></div>

<div style="line-height:1.5"><br></div><div style="line-height:1.5"><br></div>

<!-- SECTION 9 -->
<div id="contact" style="line-height:1.5"><strong><span data-custom-class="heading_1"><h2>9. WHERE CAN YOU GET FURTHER INFORMATION?</h2></span></strong></div>
<div style="line-height:1.5"><span style="font-size:15px"><span data-custom-class="body_text">If you have any questions about our use of cookies or other technologies, please email us at <a href="mailto:alieu@joinirl.co.uk" data-custom-class="link">alieu@joinirl.co.uk</a> or by post to:</span></span></div>
<div style="line-height:1.5"><br></div>
<div style="line-height:1.5"><span style="font-size:15px"><span data-custom-class="body_text"><strong>IRL CONNECT</strong><br>United Kingdom</span></span></div>
<div style="line-height:1.5"><br></div>
<div style="line-height:1.5"><span style="font-size:12px;color:rgb(127,127,127)">This cookie policy was created using <a href="https://termly.io/products/cookie-consent-manager/" target="_blank" rel="noopener noreferrer">Termly's Cookie Consent Manager</a>.</span></div>

</div>
`

export default function Cookies() {
  return (
    <div className="privacy-page">
      <div className="privacy-wrap">
        <Link to="/" className="privacy-back">← Back to home</Link>
        <style>{TERMLY_STYLE}</style>
        <div dangerouslySetInnerHTML={{ __html: COOKIES_HTML }} />
      </div>
    </div>
  )
}
