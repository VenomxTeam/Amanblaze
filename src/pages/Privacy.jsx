export default function Privacy() {
  return (
    <div className="container" style={{ padding: '64px 24px 80px' }}>
      <div className="eyebrow">Legal</div>
      <h1 style={{ fontSize: 32, marginTop: 10, marginBottom: 24 }}>Privacy Policy</h1>
      <p style={{ marginBottom: 32, fontSize: 14 }}>Last updated: July 4, 2026</p>

      <div className="prose" style={{ maxWidth: 800 }}>
        <p>
          This Privacy Policy explains how Amanblaze ("we", "us", "our") collects, uses, and
          protects information when you use any of our mobile applications published under our Google Play
          developer account, as well as our website (collectively, the "Services").
        </p>
        <p>
          This policy is designed to comply with worldwide privacy regulations, including the GDPR (Europe), CCPA (California), and Google Play Developer Policies. By using our Services, you agree to the collection and use of information in relation to this policy.
        </p>

        <h2>1. Information We Collect</h2>
        <p>Depending on the specific app you are using, we may collect the following types of information:</p>
        <ul>
          <li><strong>Personal Information (Authentication):</strong> If an app requires account registration, we may collect your name, email address, profile picture, or social login details (e.g., Google Sign-in).</li>
          <li><strong>Device & Usage Information:</strong> We automatically collect device model, operating system version, unique device identifiers (such as Android Advertising ID), IP address, app usage data, and crash reports.</li>
          <li><strong>Payment Information (In-App Purchases):</strong> If you make purchases within our apps, the transaction is securely processed by Google Play Billing. We do not collect or store your credit card numbers or financial details. We only receive purchase confirmation tokens to unlock features.</li>
          <li><strong>User-Generated Content:</strong> Any files, media, or data you create, upload, or download using our apps (e.g., a video downloader app) are stored locally on your device unless explicitly stated otherwise. We do not monitor or upload your private local files to our servers.</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <p>We use the collected data for the following purposes:</p>
        <ul>
          <li>To provide, operate, and maintain our Services.</li>
          <li>To manage your account and authenticate you across devices.</li>
          <li>To process transactions and provide premium features.</li>
          <li>To serve personalized or non-personalized advertisements (via AdMob).</li>
          <li>To analyze usage trends, diagnose crashes, and improve app stability.</li>
          <li>To respond to your customer support requests.</li>
        </ul>

        <h2>3. Third-Party Services & Advertising (AdMob)</h2>
        <p>
          Some of our apps are supported by advertising. We use <strong>Google AdMob</strong> to display ads. Ad providers may use cookies, device identifiers, and location data to serve personalized ads based on your interests.
        </p>
        <ul>
          <li><strong>Personalized Ads:</strong> Depending on your region (e.g., inside the EEA), you will be asked for explicit consent before personalized ads are shown.</li>
          <li><strong>Opting Out:</strong> You can opt out of personalized advertising by going to your Android device settings: <em>Settings &gt; Google &gt; Ads &gt; Opt out of Ads Personalization</em>.</li>
        </ul>
        <p>We may also use third-party analytics and crash reporting tools (e.g., Firebase, Google Analytics). These services have their own privacy policies governing how they handle data.</p>

        <h2>4. Data Sharing & Disclosure</h2>
        <p>We do not sell your personal information to third parties. We may share your data only in the following scenarios:</p>
        <ul>
          <li><strong>Service Providers:</strong> With trusted third parties (like Google Play, AdMob, and Firebase) who assist us in operating our apps, subject to strict confidentiality agreements.</li>
          <li><strong>Legal Compliance:</strong> When required by law, subpoena, or legal process to protect our rights or the safety of our users.</li>
        </ul>

        <h2>5. Data Retention & Deletion</h2>
        <p>We retain your personal information only as long as necessary to fulfill the purposes outlined in this policy. </p>
        <p><strong>Account Deletion:</strong> If you have created an account in any of our apps, you have the right to delete it. You can usually delete your account directly within the app's settings menu. Alternatively, you can email us at <a href="mailto:support@amanblaze.in">support@amanblaze.in</a> to request complete deletion of your account and associated data.</p>

        <h2>6. Your Privacy Rights (GDPR, CCPA, etc.)</h2>
        <p>Depending on your location, you have certain rights regarding your data:</p>
        <ul>
          <li>The right to access the personal data we hold about you.</li>
          <li>The right to request correction of inaccurate data.</li>
          <li>The right to request deletion (erasure) of your data.</li>
          <li>The right to withdraw consent for personalized ads or data collection at any time.</li>
        </ul>

        <h2>7. Children's Privacy</h2>
        <p>
          Our Services are not intended for children under the age of 13 (or 16 in certain European countries). We do not knowingly collect personal identifiable information from children. If we discover that a child has provided us with personal information, we will immediately delete it from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal data, please contact us.
        </p>

        <h2>8. Changes to This Privacy Policy</h2>
        <p>
          We may update our Privacy Policy from time to time to reflect changes in legal requirements, our apps, or third-party SDKs. Thus, you are advised to review this page periodically for any changes. Material changes will be reflected by the "Last updated" date at the top of this page.
        </p>

        <h2>9. Contact Us</h2>
        <p>If you have any questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact us at:</p>
        <p><strong>Email:</strong> <a href="mailto:support@amanblaze.in">support@amanblaze.in</a></p>
      </div>
    </div>
  )
}
