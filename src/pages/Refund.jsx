import SEO from '../components/SEO.jsx'

export default function Refund() {
  return (
    <>
      <SEO 
        title="Refund Policy - Amanblaze" 
        description="Information regarding refunds for digital purchases made through Google Play on Amanblaze apps." 
      />
      <div className="container" style={{ padding: '64px 24px 80px' }}>
        <div className="eyebrow">Legal</div>
      <h1 style={{ fontSize: 32, marginTop: 10, marginBottom: 24 }}>Refund Policy</h1>
      <p style={{ marginBottom: 32, fontSize: 14 }}>Last updated: July 4, 2026</p>

      <div className="prose" style={{ maxWidth: 800 }}>
        <p>
          This Refund Policy applies to all digital goods, in-app purchases, paid apps, and subscriptions offered by Amanblaze through the Google Play Store. We want you to be completely satisfied with your purchase, but we also adhere to the standard digital goods refund rules set by Google.
        </p>

        <h2>1. Purchases Processed by Google Play</h2>
        <p>
          Since our apps are exclusively distributed via the Google Play Store, <strong>all transactions are processed entirely by Google</strong>. We do not process payments directly, nor do we store your credit card information. Because of this, refund eligibility and processing are primarily governed by Google Play's official refund policies.
        </p>

        <h2>2. The Standard 48-Hour Window</h2>
        <p>
          If it has been <strong>less than 48 hours</strong> since you bought an app or made an in-app purchase, you can easily request a refund directly through the Google Play Store. Google usually approves these requests automatically.
        </p>
        <ul>
          <li>Go to your Google Play account online.</li>
          <li>Navigate to your Order History.</li>
          <li>Find the order you want to return and select "Request a refund".</li>
        </ul>

        <h2>3. When We Issue Refunds Directly</h2>
        <p>
          If the standard 48-hour window has passed, you must contact us directly for a refund. We review direct refund requests on a case-by-case basis and generally approve them under the following circumstances:
        </p>
        <ul>
          <li><strong>Technical Failures:</strong> The premium feature you purchased does not work as described on your specific device, and our support team is unable to fix it.</li>
          <li><strong>Accidental Purchases:</strong> You made a duplicate purchase by mistake.</li>
          <li><strong>Misrepresentation:</strong> The app fundamentally lacks the features advertised on its Play Store listing.</li>
        </ul>

        <h2>4. When Refunds Are Not Provided</h2>
        <p>We generally do not grant refunds in the following situations:</p>
        <ul>
          <li>You simply changed your mind after extensive use of the paid features.</li>
          <li>You forgot to cancel an ongoing subscription before the renewal date.</li>
          <li>Your access to the app was terminated due to a violation of our Terms &amp; Conditions.</li>
          <li>The request is made months after the original purchase date without a valid technical reason.</li>
        </ul>

        <h2>5. Subscription Cancellations</h2>
        <p>
          If you are subscribed to a premium plan within our apps, you can cancel it at any time via your <em>Google Play Subscriptions</em> menu. 
          Canceling a subscription stops all future billing but allows you to keep premium access until the end of the current billing cycle. 
          <strong>Note:</strong> Canceling a subscription does not automatically refund you for the time you've already paid for.
        </p>

        <h2>6. How to Request a Refund From Us</h2>
        <p>
          If you need to request a direct refund outside the Google Play automated window, please email us at <a href="mailto:support@amanblaze.in">support@amanblaze.in</a> with the following details:
        </p>
        <ul>
          <li>Your <strong>Google Play Order ID</strong> (looks like GPA.1234-5678-9012-34567).</li>
          <li>The exact name of the app.</li>
          <li>A brief explanation of why you are requesting a refund.</li>
        </ul>
        <p>We aim to process and respond to all refund requests within 3 to 5 business days.</p>
      </div>
    </>
  )
}
