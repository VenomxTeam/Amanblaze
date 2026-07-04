export default function About() {
  return (
    <div className="container" style={{ padding: '64px 24px 80px' }}>
      <div className="eyebrow">About</div>
      <h1 style={{ fontSize: 32, marginTop: 10, marginBottom: 24 }}>Who we are</h1>

      <div className="prose" style={{ maxWidth: 800 }}>
        <p>
          <strong>Amanblaze</strong> is an independent software development studio and digital community dedicated to creating high-quality, reliable, and user-centric Android applications. We are not a marketplace or a third-party agency — every app published under the Amanblaze name on the Google Play Store is designed, coded, tested, and maintained entirely by our in-house team.
        </p>

        <h2>Our Mission</h2>
        <p>
          Our goal is to build utility apps that genuinely solve problems without frustrating the user. In a marketplace crowded with bloated software, we focus on delivering tools that are lightweight, fast, and intuitive. Whether it's a video downloader, a media player, or a productivity tool, we believe software should just work.
        </p>

        <h2>What We Do</h2>
        <ul>
          <li><strong>End-to-End Development:</strong> We handle the entire lifecycle of our apps, from UI/UX design concepts to writing native Android code and deploying server infrastructure.</li>
          <li><strong>Continuous Improvement:</strong> Software is never truly "finished." We actively monitor user feedback and analytics to push regular updates, squash bugs, and introduce highly requested features.</li>
          <li><strong>Exclusive Publishing:</strong> You will only find our official, secure applications on our certified Google Play Developer account.</li>
        </ul>

        <h2>Our Core Values</h2>
        <p>
          We keep our catalog highly curated. Rather than pushing out hundreds of mediocre apps, we focus on a select few and make them the best in their category. Every Amanblaze app is held to a strict standard:
        </p>
        <ul>
          <li><strong>Honest Permissions:</strong> We only ask for the permissions strictly necessary for the app to function.</li>
          <li><strong>Privacy Respecting:</strong> Your data is yours. We minimize data collection and prioritize on-device processing wherever possible.</li>
          <li><strong>User-First Design:</strong> We prioritize clean, modern, and ad-balanced interfaces that don't interrupt your workflow.</li>
        </ul>

        <h2>Join the Community</h2>
        <p>
          Amanblaze is more than just a brand; it's a growing community of users who appreciate good software. We love hearing from the people who use our tools daily. 
        </p>
        <p>
          For support, partnership inquiries, or simply to share feedback on how we can improve an app, reach out to us at <a href="mailto:support@amanblaze.in">support@amanblaze.in</a>.
        </p>
      </div>
    </div>
  )
}
