import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer style={{ borderTop: '1px solid var(--card-line)', marginTop: 40, background: 'var(--card-bg)' }}>
      <div className="container" style={{ padding: '36px 24px', display: 'flex', flexWrap: 'wrap', gap: 20, justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Amanblaze</div>
          <p style={{ margin: '4px 0 0', fontSize: 13.5 }}>Built and published in-house. © {year}.</p>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px 22px', fontSize: 13.5 }}>
          <Link to="/about" style={{ textDecoration: 'none', color: 'var(--text-muted)' }}>About</Link>
          <Link to="/privacy" style={{ textDecoration: 'none', color: 'var(--text-muted)' }}>Privacy</Link>
          <Link to="/terms" style={{ textDecoration: 'none', color: 'var(--text-muted)' }}>Terms</Link>
          <Link to="/refund" style={{ textDecoration: 'none', color: 'var(--text-muted)' }}>Refund</Link>
          <Link to="/contact" style={{ textDecoration: 'none', color: 'var(--text-muted)' }}>Contact</Link>
          <a
            href="https://play.google.com/store/apps/dev?id=8663227897723109688"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: 'var(--text-muted)' }}
          >
            Play Store
          </a>
        </div>
      </div>
    </footer>
  )
}
