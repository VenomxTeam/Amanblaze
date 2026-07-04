export default function Privacy() {
  return (
    <div className="container" style={{ padding: '64px 24px 80px' }}>
      <div className="eyebrow">Legal</div>
      <h1 style={{ fontSize: 32, marginTop: 10, marginBottom: 24 }}>Privacy Policy</h1>
      <p style={{ marginBottom: 32, fontSize: 14 }}>Last updated: July 4, 2026</p>

      <div className="prose" style={{ maxWidth: 700 }}>
        <p>
          This Privacy Policy explains how Amanblaze ("we", "us", "our") collects, uses, and
          protects information when you use any application published under our Google Play
          developer account, or visit this website.
        </p>

        <h2>1. Information we collect</h2>
        <ul>
          <li><strong>Device information:</strong> device model, operating system version, and app version, used for diagnostics.</li>
          <li><strong>Usage data:</strong> feature usage and crash reports, used to improve app stability.</li>
          <li><strong>Contact information:</strong> only if you email us directly for support.</li>
        </ul>
        <p>Individual apps may collect additional data specific to their function; this is disclosed in that app's Play Store listing and in-app permissions.</p>

        <h2>2. How we use information</h2>
        <ul>
          <li>To operate and maintain app functionality.</li>
          <li>To diagnose crashes and fix bugs.</li>
          <li>To respond to support requests.</li>
          <li>To comply with legal obligations.</li>
        </ul>

        <h2>3. Sharing of information</h2>
        <p>
          We do not sell personal information. We may share limited data with service providers
          (such as analytics or crash-reporting tools) strictly to operate our apps, and only
          under confidentiality obligations.
        </p>

        <h2>4. Data retention</h2>
        <p>We retain data only as long as necessary for the purposes described above, or as required by law.</p>

        <h2>5. Your choices</h2>
        <ul>
          <li>You can revoke app permissions at any time from your device settings.</li>
          <li>You can uninstall any app to stop further data collection by it.</li>
          <li>You can request deletion of any data you've shared with us by emailing support.</li>
        </ul>

        <h2>6. Children's privacy</h2>
        <p>Our apps are not directed at children under 13. We do not knowingly collect personal information from children.</p>

        <h2>7. Changes to this policy</h2>
        <p>We may update this policy periodically. Material changes will be reflected by the "Last updated" date above.</p>

        <h2>8. Contact us</h2>
        <p>Questions about this policy can be sent to <a href="mailto:support@amanblaze.in">support@amanblaze.in</a>.</p>
      </div>
    </div>
  )
}
