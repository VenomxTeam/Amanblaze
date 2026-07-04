import { Link } from 'react-router-dom'
import { useEffect } from 'react'

export default function NotFound() {
  useEffect(() => {
    let meta = document.createElement('meta')
    meta.name = 'robots'
    meta.content = 'noindex'
    document.head.appendChild(meta)

    return () => {
      document.head.removeChild(meta)
    }
  }, [])

  return (
    <div className="container" style={{ padding: '120px 24px', textAlign: 'center' }}>
      <h1 style={{ fontSize: 64, margin: '0 0 16px', color: 'var(--brass)' }}>404</h1>
      <h2 style={{ fontSize: 24, margin: '0 0 24px' }}>Page not found</h2>
      <p style={{ maxWidth: 500, margin: '0 auto 32px', color: 'var(--text-muted)' }}>
        Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
      </p>
      <Link to="/" className="btn btn-primary" style={{ padding: '10px 24px', fontSize: 16 }}>
        Go back home
      </Link>
    </div>
  )
}
