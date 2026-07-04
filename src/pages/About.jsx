export default function About() {
  return (
    <div className="container" style={{ padding: '64px 24px 80px' }}>
      <div className="eyebrow">About</div>
      <h1 style={{ fontSize: 32, marginTop: 10, marginBottom: 24 }}>Who we are</h1>

      <div className="prose" style={{ maxWidth: 700 }}>
        <p>
          Amanblaze is a software development community that designs, builds, and publishes its
          own Android applications. We are not a marketplace or an agency — every app under the
          Amanblaze name on Google Play is written, tested, and maintained by our own team.
        </p>

        <h2>What we do</h2>
        <ul>
          <li>Design and develop Android applications from concept to release.</li>
          <li>Maintain and update every published app based on user feedback.</li>
          <li>Publish exclusively through our official Google Play developer account.</li>
        </ul>

        <h2>Our approach</h2>
        <p>
          We keep our catalog small enough to maintain properly. Each app is expected to meet the
          same bar: clear purpose, honest permissions, and ongoing support after release.
        </p>

        <h2>Get in touch</h2>
        <p>
          For support, partnership, or feedback on any Amanblaze app, reach us at{' '}
          <a href="mailto:support@amanblaze.in">support@amanblaze.in</a>.
        </p>
      </div>
    </div>
  )
}
