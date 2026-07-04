import appsData from '../data/apps.json'
import AppCard from '../components/AppCard.jsx'

export default function Home() {
  const { apps, lastUpdated, developerUrl } = appsData

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Software Development Community</div>
          <h1>We build our own Android apps — end to end.</h1>
          <p style={{ maxWidth: 560, marginTop: 14, fontSize: 16 }}>
            Amanblaze is an independent developer community. Every app in the catalog below
            is designed, coded, tested, and published by us on Google Play.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 24, flexWrap: 'wrap' }}>
            <a href="#catalog" className="btn btn-primary">Browse the catalog</a>
            <a href={developerUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              View on Google Play
            </a>
          </div>

          <div
            style={{
              marginTop: 40,
              fontFamily: 'var(--font-mono)',
              fontSize: 12.5,
              color: 'var(--text-muted)',
              border: '1px solid var(--card-line)',
              borderRadius: 8,
              padding: '12px 16px',
              display: 'inline-block',
            }}
          >
            apps_published: {apps.length} &nbsp;·&nbsp; catalog_synced: {lastUpdated}
          </div>
        </div>
      </section>

      <section id="catalog" className="container" style={{ padding: '20px 24px 80px' }}>
        <h2 style={{ fontSize: 22, marginBottom: 4 }}>App catalog</h2>
        <p style={{ marginTop: 0, marginBottom: 24, fontSize: 14.5 }}>
          Updated as new releases ship to Google Play.
        </p>

        {apps.length === 0 ? (
          <p>No apps listed yet. Check back soon.</p>
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
              gap: 20,
            }}
          >
            {apps.map((app) => (
              <AppCard key={app.packageName} app={app} />
            ))}
          </div>
        )}
      </section>
    </>
  )
}
