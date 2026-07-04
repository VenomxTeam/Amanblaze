export default function Contact() {
  return (
    <div className="container" style={{ padding: '64px 24px 80px' }}>
      <div className="eyebrow">Get in touch</div>
      <h1 style={{ fontSize: 32, marginTop: 10, marginBottom: 24 }}>Contact us</h1>

      <div className="prose" style={{ maxWidth: 800 }}>
        <p>
          Whether you have a question about one of our apps, need help troubleshooting a bug, or want to discuss a potential partnership, we are here to help. Reach out through the channels below and our support team will get back to you as soon as possible.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 16,
          maxWidth: 800,
          marginTop: 32,
        }}
      >
        <ContactCard
          label="General Support"
          value="support@amanblaze.in"
          href="mailto:support@amanblaze.in"
        />
        <ContactCard
          label="Business & Partnerships"
          value="contact@amanblaze.in"
          href="mailto:contact@amanblaze.in"
        />
        <ContactCard
          label="Google Play Store"
          value="Our Developer Page"
          href="https://play.google.com/store/apps/dev?id=8663227897723109688"
          external
        />
      </div>

      <div
        className="prose"
        style={{
          maxWidth: 800,
          marginTop: 40,
          border: '1px solid var(--card-line)',
          borderRadius: 'var(--radius)',
          padding: '28px 32px',
          background: 'var(--card-bg)',
          boxShadow: 'var(--shadow)',
        }}
      >
        <h2 style={{ marginTop: 0 }}>How to Report a Bug or Issue</h2>
        <p style={{ marginBottom: 16, color: 'var(--text-muted)' }}>
          Found something that isn't working right? We want to fix it! To help our developers resolve the issue faster, please include the following details in your email:
        </p>
        <ul style={{ marginTop: 0, marginBottom: 0 }}>
          <li><strong>App Name:</strong> Which app are you using? (e.g., All Video Downloader & Player).</li>
          <li><strong>Device Details:</strong> Your smartphone model and Android version (e.g., Samsung Galaxy S23, Android 14).</li>
          <li><strong>Issue Description:</strong> What exactly went wrong? Please provide step-by-step instructions on how to reproduce the error.</li>
          <li><strong>Screenshots:</strong> If possible, attach screenshots or a screen recording of the bug in action.</li>
        </ul>
      </div>

      <div className="prose" style={{ maxWidth: 800, marginTop: 40 }}>
        <h2>Frequently Asked Questions</h2>
        <p><strong>How fast do you reply?</strong><br />We aim to respond to all support and inquiry emails within 24 to 48 business hours.</p>
        <p><strong>Where can I request a new feature?</strong><br />We love hearing your ideas! Send an email to our support address with the subject line "Feature Request: [App Name]".</p>
        <p><strong>Do you do custom app development?</strong><br />Currently, our team is entirely focused on maintaining and expanding our own in-house catalog, so we do not take on external client projects.</p>
      </div>
    </div>
  )
}

function ContactCard({ label, value, href, external }) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      style={{
        display: 'block',
        textDecoration: 'none',
        color: 'var(--text)',
        background: 'var(--card-bg)',
        border: '1px solid var(--card-line)',
        borderRadius: 'var(--radius)',
        boxShadow: 'var(--shadow)',
        padding: '18px 20px',
      }}
    >
      <div className="eyebrow" style={{ fontSize: 11 }}>{label}</div>
      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 15.5, marginTop: 6 }}>
        {value}
      </div>
    </a>
  )
}
