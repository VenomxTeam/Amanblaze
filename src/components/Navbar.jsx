import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import ThemeToggle from './ThemeToggle.jsx'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/privacy', label: 'Privacy' },
  { to: '/terms', label: 'Terms' },
  { to: '/refund', label: 'Refund' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 20,
        backdropFilter: 'blur(10px)',
        background: 'var(--nav-bg)',
        borderBottom: '1px solid var(--card-line)',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
        <NavLink to="/" onClick={() => setOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', color: 'var(--text)' }}>
          <span
            style={{
              width: 30,
              height: 30,
              borderRadius: 7,
              background: 'var(--ink)',
              color: '#fbfaf7',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'var(--font-mono)',
              fontWeight: 500,
              fontSize: 13,
              flexShrink: 0,
            }}
          >
            {'{ }'}
          </span>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 17 }}>Amanblaze</span>
        </NavLink>

        {/* Desktop nav */}
        <nav className="nav-desktop" style={{ alignItems: 'center', gap: 24 }}>
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              style={({ isActive }) => ({
                textDecoration: 'none',
                fontSize: 14.5,
                fontWeight: 500,
                color: isActive ? 'var(--text)' : 'var(--text-muted)',
                borderBottom: isActive ? '2px solid var(--brass)' : '2px solid transparent',
                paddingBottom: 4,
                whiteSpace: 'nowrap',
              })}
            >
              {l.label}
            </NavLink>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile controls */}
        <div className="nav-mobile-controls" style={{ display: 'none', alignItems: 'center', gap: 10 }}>
          <ThemeToggle />
          <button
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            style={{
              width: 38,
              height: 38,
              borderRadius: 8,
              border: '1px solid var(--card-line)',
              background: 'var(--bg-raised)',
              color: 'var(--text)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            {open ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div
          className="nav-mobile-panel"
          style={{
            borderTop: '1px solid var(--card-line)',
            background: 'var(--bg)',
            padding: '8px 24px 16px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              onClick={() => setOpen(false)}
              style={({ isActive }) => ({
                textDecoration: 'none',
                padding: '12px 0',
                borderBottom: '1px solid var(--card-line)',
                fontSize: 15,
                fontWeight: 500,
                color: isActive ? 'var(--brass-strong)' : 'var(--text)',
              })}
            >
              {l.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  )
}
