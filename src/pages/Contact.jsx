import { useState } from 'react'
import SEO from '../components/SEO.jsx'

export default function Contact() {
  return (
    <>
      <SEO 
        title="Contact Us - Amanblaze" 
        description="Get in touch with Amanblaze for support, bug reports, or business partnerships." 
      />
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
          value="android@amanblaze.in"
          href="mailto:android@amanblaze.in"
        />
        <ContactCard
          label="Live Support"
          value="Raise a Ticket / Chat"
          href="#"
          onClick={(e) => {
            e.preventDefault()
            if (window.Tawk_API) {
              window.Tawk_API.maximize()
            }
          }}
        />
        <ContactCard
          label="Google Play Store"
          value="Our Developer Page"
          href="https://play.google.com/store/apps/dev?id=8663227897723109688"
          external
        />
      </div>

      <ContactForm />

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
        
        <details style={{ marginBottom: 16, borderBottom: '1px solid var(--card-line)', paddingBottom: 16 }}>
          <summary style={{ fontWeight: 600, cursor: 'pointer', outline: 'none', fontSize: 16 }}>How fast do you reply?</summary>
          <p style={{ marginTop: 12, marginBottom: 0, color: 'var(--text-muted)' }}>We aim to respond to all support and inquiry emails within 24 to 48 business hours.</p>
        </details>

        <details style={{ marginBottom: 16, borderBottom: '1px solid var(--card-line)', paddingBottom: 16 }}>
          <summary style={{ fontWeight: 600, cursor: 'pointer', outline: 'none', fontSize: 16 }}>Where can I request a new feature?</summary>
          <p style={{ marginTop: 12, marginBottom: 0, color: 'var(--text-muted)' }}>We love hearing your ideas! Send an email to our support address with the subject line "Feature Request: [App Name]".</p>
        </details>

        <details style={{ marginBottom: 16, borderBottom: '1px solid var(--card-line)', paddingBottom: 16 }}>
          <summary style={{ fontWeight: 600, cursor: 'pointer', outline: 'none', fontSize: 16 }}>Do you do custom app development?</summary>
          <p style={{ marginTop: 12, marginBottom: 0, color: 'var(--text-muted)' }}>Currently, our team is entirely focused on maintaining and expanding our own in-house catalog, so we do not take on external client projects.</p>
        </details>
      </div>
      
      {/* FAQ Schema for Google Search */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How fast do you reply?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We aim to respond to all support and inquiry emails within 24 to 48 business hours."
                }
              },
              {
                "@type": "Question",
                "name": "Where can I request a new feature?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We love hearing your ideas! Send an email to our support address with the subject line 'Feature Request: [App Name]'."
                }
              },
              {
                "@type": "Question",
                "name": "Do you do custom app development?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Currently, our team is entirely focused on maintaining and expanding our own in-house catalog, so we do not take on external client projects."
                }
              }
            ]
          })
        }}
      />
      </div>
    </>
  )
}

function ContactCard({ label, value, href, external, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
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

function ContactForm() {
  const [status, setStatus] = useState('idle')

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)
    
    // TODO: Replace with your actual Google Apps Script Web App URL
    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbz_REPLACE_THIS_WITH_YOUR_URL/exec' 
    
    setStatus('submitting')
    fetch(SCRIPT_URL, { 
      method: 'POST', 
      body: data,
      mode: 'no-cors' // Bypasses CORS policy for Google Scripts
    })
      .then(() => {
        setStatus('success')
        form.reset()
        setTimeout(() => setStatus('idle'), 5000)
      })
      .catch(err => {
        console.error(err)
        setStatus('error')
      })
  }

  return (
    <div style={{ marginTop: 40, maxWidth: 800, background: 'var(--card-bg)', border: '1px solid var(--card-line)', padding: '32px', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow)' }}>
      <h2 style={{ marginTop: 0, marginBottom: 24 }}>Send us a message</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
          <div>
            <label style={{ display: 'block', fontSize: 13, marginBottom: 8, color: 'var(--text-muted)' }}>Name *</label>
            <input name="name" required style={{ width: '100%', padding: '12px 14px', borderRadius: 8, border: '1px solid var(--card-line)', background: 'var(--bg)', color: 'var(--text)' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: 13, marginBottom: 8, color: 'var(--text-muted)' }}>Email *</label>
            <input type="email" name="email" required style={{ width: '100%', padding: '12px 14px', borderRadius: 8, border: '1px solid var(--card-line)', background: 'var(--bg)', color: 'var(--text)' }} />
          </div>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
          <div>
            <label style={{ display: 'block', fontSize: 13, marginBottom: 8, color: 'var(--text-muted)' }}>App Name (Optional)</label>
            <input name="app" placeholder="e.g. All Video Downloader" style={{ width: '100%', padding: '12px 14px', borderRadius: 8, border: '1px solid var(--card-line)', background: 'var(--bg)', color: 'var(--text)' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: 13, marginBottom: 8, color: 'var(--text-muted)' }}>Subject *</label>
            <input name="subject" required style={{ width: '100%', padding: '12px 14px', borderRadius: 8, border: '1px solid var(--card-line)', background: 'var(--bg)', color: 'var(--text)' }} />
          </div>
        </div>

        <div>
          <label style={{ display: 'block', fontSize: 13, marginBottom: 8, color: 'var(--text-muted)' }}>Message *</label>
          <textarea name="message" required rows={5} style={{ width: '100%', padding: '12px 14px', borderRadius: 8, border: '1px solid var(--card-line)', background: 'var(--bg)', color: 'var(--text)', resize: 'vertical' }} />
        </div>

        <button type="submit" disabled={status === 'submitting'} className="btn btn-primary" style={{ padding: '14px 24px', alignSelf: 'flex-start', cursor: status === 'submitting' ? 'wait' : 'pointer' }}>
          {status === 'submitting' ? 'Sending...' : 'Submit Message'}
        </button>

        {status === 'success' && <div style={{ color: 'var(--brass)', fontSize: 14.5, marginTop: 4, fontWeight: 500 }}>✓ Your message has been sent successfully!</div>}
        {status === 'error' && <div style={{ color: '#ef4444', fontSize: 14.5, marginTop: 4, fontWeight: 500 }}>Something went wrong. Please try again or use live chat.</div>}
      </form>
    </div>
  )
}
