export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/es', '/br'],
      },
      {
        userAgent: 'Googlebot',
        allow: ['/', '/es', '/br'],
      },
    ],
    sitemap: 'https://caribbean-scooters.vercel.app/sitemap.xml',
  }
}