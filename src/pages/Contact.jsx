export default function Contact() {
  return (
    <div className="container" style={{ padding: '64px 24px 80px' }}>
      <div className="eyebrow">Get in touch</div>
      <h1 style={{ fontSize: 32, marginTop: 10, marginBottom: 24 }}>Contact us</h1>

      <div className="prose" style={{ maxWidth: 700 }}>
        <p>
          Questions about an app, a bug to report, or a partnership idea — reach out and we'll
          get back to you.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 16,
          maxWidth: 700,
          marginTop: 32,
        }}
      >
        <ContactCard
          label="Support email"
          value="support@amanblaze.in"
          href="mailto:support@amanblaze.in"
        />
        <ContactCard
          label="Google Play"
          value="Amanblaze developer page"
          href="https://play.google.com/store/apps/dev?id=8663227897723109688"
          external
        />
      </div>

      <div
        className="prose"
        style={{
          maxWidth: 700,
          marginTop: 40,
          border: '1px solid var(--card-line)',
          borderRadius: 'var(--radius)',
          padding: '20px 24px',
          background: 'var(--card-bg)',
        }}
      >
        <h2 style={{ marginTop: 0 }}>Reporting a bug or issue</h2>
        <p style={{ marginBottom: 8 }}>To help us resolve it faster, please include:</p>
        <ul style={{ marginTop: 0 }}>
          <li>The app name and package name (shown on its Play Store listing)</li>
          <li>Your device model and Android version</li>
          <li>Steps to reproduce the issue</li>
        </ul>
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
