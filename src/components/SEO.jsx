import { useEffect } from 'react'

export default function SEO({ title, description }) {
  useEffect(() => {
    // Update title
    document.title = title
    
    // Update description meta tag
    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]')
      if (metaDesc) {
        metaDesc.setAttribute('content', description)
      }
    }
  }, [title, description])

  return null
}
