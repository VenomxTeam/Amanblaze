export default function Refund() {
  return (
    <div className="container" style={{ padding: '64px 24px 80px' }}>
      <div className="eyebrow">Legal</div>
      <h1 style={{ fontSize: 32, marginTop: 10, marginBottom: 24 }}>Refund Policy</h1>
      <p style={{ marginBottom: 32, fontSize: 14 }}>Last updated: July 4, 2026</p>

      <div className="prose" style={{ maxWidth: 700 }}>
        <p>
          This policy applies to any paid app, in-app purchase, or subscription offered by
          Amanblaze through Google Play.
        </p>

        <h2>1. Purchases made through Google Play</h2>
        <p>
          All purchases are processed by Google Play. Refund eligibility and processing are
          subject to Google Play's official refund policy. We recommend requesting refunds
          directly through Google Play within their stated refund window.
        </p>

        <h2>2. When we support a refund request</h2>
        <ul>
          <li>The app was not as described in its Play Store listing.</li>
          <li>A technical fault prevented normal use of a paid feature.</li>
          <li>A duplicate or accidental purchase occurred.</li>
        </ul>

        <h2>3. When refunds are not provided</h2>
        <ul>
          <li>Change of mind after extended use of a paid feature.</li>
          <li>Violation of our Terms &amp; Conditions.</li>
          <li>Requests made significantly after the purchase date.</li>
        </ul>

        <h2>4. Subscriptions</h2>
        <p>
          You can cancel a subscription at any time through Google Play settings. Cancelling
          stops future billing but does not automatically refund the current billing period
          unless required by law.
        </p>

        <h2>5. How to request a refund from us</h2>
        <p>
          Email <a href="mailto:support@amanblaze.in">support@amanblaze.in</a> with your Google
          Play order ID, the app name, and the reason for your request. We aim to respond within
          3–5 business days.
        </p>
      </div>
    </div>
  )
}
