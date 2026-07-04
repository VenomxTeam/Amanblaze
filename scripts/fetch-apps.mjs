// Auto-updates src/data/apps.json from your Google Play developer page.
//
// Run this locally or in a scheduled GitHub Action (where internet access is
// available) — it CANNOT run inside an offline sandbox. It uses the
// `google-play-scraper` package (unofficial, but widely used and reliable).
//
// Setup:
//   npm install google-play-scraper
//   npm run fetch-apps
//
// Recommended: schedule this via GitHub Actions (cron) and commit the
// updated apps.json automatically, so new Play Store releases show up on
// the site without any manual work.

import gplay from 'google-play-scraper'
import { writeFile } from 'node:fs/promises'

const DEVELOPER_ID = '8663227897723109688'

async function main() {
  console.log('Fetching apps for developer:', DEVELOPER_ID)

  const list = await gplay.developer({ devId: DEVELOPER_ID, num: 100 })

  const apps = []
  for (const item of list) {
    // Fetch full details for each app to get description + version
    const details = await gplay.app({ appId: item.appId })
    apps.push({
      name: details.title,
      packageName: details.appId,
      category: details.genre,
      shortDescription: details.summary || details.description?.slice(0, 120) || '',
      icon: details.icon,
      installUrl: details.url,
      version: details.version || 'latest',
    })
  }

  const data = {
    developerId: DEVELOPER_ID,
    developerUrl: `https://play.google.com/store/apps/dev?id=${DEVELOPER_ID}`,
    lastUpdated: new Date().toISOString().slice(0, 10),
    apps,
  }

  await writeFile(
    new URL('../src/data/apps.json', import.meta.url),
    JSON.stringify(data, null, 2)
  )

  console.log(`Wrote ${apps.length} apps to src/data/apps.json`)
}

main().catch((err) => {
  console.error('Failed to fetch apps:', err)
  process.exit(1)
})
