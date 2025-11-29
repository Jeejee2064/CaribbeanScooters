export default function sitemap() {
  const baseUrl = 'https://caribbean-scooters.vercel.app'
  const currentDate = new Date()
  
  return [
    {
      url: `${baseUrl}/`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/es`,
      lastModified: currentDate,
      changeFrequency: 'daily', 
      priority: 0.9,
    },
    {
      url: `${baseUrl}/br`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.9,
    },
  ]
}