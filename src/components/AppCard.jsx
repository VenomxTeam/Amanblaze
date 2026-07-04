export default function AppCard({ app }) {
  return (
    <div
      style={{
        background: 'var(--card-bg)',
        border: '1px solid var(--card-line)',
        borderRadius: 'var(--radius)',
        boxShadow: 'var(--shadow)',
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
        gap: 14,
      }}
    >
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: 12,
            background: app.icon ? `url(${app.icon}) center/cover` : 'linear-gradient(135deg, var(--ink), var(--brass-strong))',
            flexShrink: 0,
          }}
        />
        <div style={{ minWidth: 0 }}>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 16, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {app.name}
          </div>
          <div className="eyebrow" style={{ fontSize: 11 }}>{app.category}</div>
        </div>
      </div>

      <p style={{ fontSize: 14, margin: 0, minHeight: 42 }}>{app.shortDescription}</p>

      <div
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 11.5,
          color: 'var(--text-muted)',
          background: 'var(--bg)',
          border: '1px solid var(--card-line)',
          borderRadius: 6,
          padding: '8px 10px',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}
        title={app.packageName}
      >
        {app.packageName} · v{app.version}
      </div>

      <a
        href={app.installUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary"
        style={{ justifyContent: 'center', marginTop: 4 }}
      >
        Install
      </a>
    </div>
  )
}
