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

      {/* Details / Features Section */}
      <section className="container" style={{ padding: '0 24px 80px' }}>
        <h2 style={{ fontSize: 22, marginBottom: 4, textAlign: 'center' }}>Why choose our apps?</h2>
        <p style={{ marginTop: 0, marginBottom: 32, fontSize: 14.5, textAlign: 'center', maxWidth: 600, margin: '0 auto 32px' }}>
          We focus on what matters most for a seamless experience.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 24,
          }}
        >
          {[
            {
              title: 'Lightning Fast',
              desc: 'Optimized for speed and minimal resource usage, ensuring a smooth experience even on older devices.',
              icon: '⚡'
            },
            {
              title: 'Privacy First',
              desc: 'We respect your data. Our apps require minimal permissions and do not track your personal information.',
              icon: '🔒'
            },
            {
              title: 'Regular Updates',
              desc: 'We constantly improve our apps based on community feedback, adding new features and fixing bugs quickly.',
              icon: '🔄'
            }
          ].map((feature, i) => (
            <div
              key={i}
              style={{
                background: 'var(--card-bg)',
                border: '1px solid var(--card-line)',
                borderRadius: 'var(--radius)',
                padding: '24px',
                boxShadow: 'var(--shadow)',
              }}
            >
              <div style={{ fontSize: 32, marginBottom: 16 }}>{feature.icon}</div>
              <h3 style={{ fontSize: 18, marginBottom: 8 }}>{feature.title}</h3>
              <p style={{ fontSize: 14.5, margin: 0 }}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container" style={{ padding: '0 24px 60px' }}>
        <h2 style={{ fontSize: 22, marginBottom: 4, textAlign: 'center' }}>What users say</h2>
        <p style={{ marginTop: 0, marginBottom: 32, fontSize: 14.5, textAlign: 'center', maxWidth: 600, margin: '0 auto 32px' }}>
          Reviews from our Google Play community.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 24,
          }}
        >
          {[
            {
              name: 'Rahul Kumar',
              review: 'The video downloader is extremely fast and easy to use. Best app in this category without annoying ads everywhere.',
              app: 'All Video Downloader & Player'
            },
            {
              name: 'Sarah Jenkins',
              review: 'Finally an app that does exactly what it says. The UI is clean, and downloading files in the background works flawlessly.',
              app: 'All Video Downloader & Player'
            }
          ].map((testimonial, i) => (
            <div
              key={i}
              style={{
                background: 'var(--bg-raised)',
                border: '1px solid var(--card-line)',
                borderRadius: 'var(--radius)',
                padding: '24px',
                position: 'relative',
              }}
            >
              <div style={{ color: 'var(--brass)', fontSize: 24, marginBottom: 12 }}>★★★★★</div>
              <p style={{ fontSize: 15, fontStyle: 'italic', color: 'var(--text)', margin: '0 0 20px 0', lineHeight: 1.6 }}>
                "{testimonial.review}"
              </p>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontWeight: 600, fontSize: 14.5 }}>{testimonial.name}</span>
                <span style={{ fontSize: 12.5, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginTop: 4 }}>
                  User of {testimonial.app}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="container" style={{ padding: '20px 24px 60px', textAlign: 'center' }}>
        <div style={{ 
          background: 'linear-gradient(135deg, var(--card-bg) 0%, var(--bg-raised) 100%)',
          border: '1px solid var(--card-line)',
          borderRadius: 16,
          padding: '40px 24px',
          boxShadow: 'var(--shadow)'
        }}>
          <h2 style={{ fontSize: 24, marginTop: 0, marginBottom: 12 }}>Ready to try our apps?</h2>
          <p style={{ maxWidth: 500, margin: '0 auto 24px', fontSize: 15, color: 'var(--text-muted)' }}>
            Join millions of users worldwide who trust Amanblaze apps for their daily digital needs. Available now on Google Play.
          </p>
          <a href={developerUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '12px 24px', fontSize: 16 }}>
            Explore on Google Play
          </a>
        </div>
      </section>
    </>
  )
}
