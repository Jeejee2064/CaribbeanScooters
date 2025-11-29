import { Inter, Montserrat } from 'next/font/google'
import '../globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
})

export const metadata = {
  title: {
    default: "🚀 Alquiler de Scooter Honda Navi en Bocas del Toro | Caribbean Scooters #1",
    template: "%s | Mejor Alquiler de Scooters en Bocas del Toro"
  },
  description: "⭐️⭐️⭐️⭐️⭐️ Alquila scooters Honda Navi en Isla Colón, Bocas del Toro. Explora Playa Estrella, Bluff, Drago. Scooters automáticas, fáciles de manejar. ENTREGA GRATIS. ¡Reserva ahora! +507 6487-2001",
  keywords: "alquiler de scooters bocas del toro, scooter honda navi isla colón, rentar scooter playa estrella, alquiler scooter bluff beach, boca del drago scooter, alquiler de motos panamá, alquiler scooter barato bocas town, honda navi 120cc alquiler",
  authors: [{ name: "Caribbean Scooters" }],
  creator: "Caribbean Scooters",
  publisher: "Caribbean Scooters",
  classification: "Servicios de Alquiler de Vehículos",
  category: "Turismo y Viajes",
  metadataBase: new URL('https://caribbean-scooters.vercel.app'),
  alternates: {
    canonical: '/es',
    languages: {
      'en': '/',
      'es': '/es',
      'pt': '/br',
    },
  },
  openGraph: {
    title: "🚀 #1 Alquiler de Scooter Honda Navi en Bocas del Toro | Caribbean Scooters",
    description: "⭐️⭐️⭐️⭐️⭐️ Alquiler de scooters Honda Navi en Isla Colón. Explora Playa Estrella, Bluff y Drago. Automáticas, fáciles de manejar. ENTREGA GRATIS.",
    url: 'https://caribbean-scooters.vercel.app/es',
    siteName: 'Caribbean Scooters - Bocas del Toro',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Caribbean Scooters - Alquiler de Honda Navi en Bocas del Toro',
      },
    ],
    locale: 'es_PA',
    type: 'website',
    emails: ['fernandodinofloripa@gmail.com'],
    phoneNumbers: ['+50764872001'],
    location: {
      latitude: 9.3400,
      longitude: -82.2400,
    }
  },
  twitter: {
    card: 'summary_large_image',
    title: "🚀 #1 Alquiler de Scooters en Bocas del Toro | Caribbean Scooters",
    description: "⭐️⭐️⭐️⭐️⭐️ Alquila scooters Honda Navi: Explora Playa Estrella, Bluff y más en Isla Colón. Automáticas, fáciles de manejar.",
    images: ['/twitter-image.jpg'],
    creator: '@caribbeanscooter',
    site: '@caribbeanscooter',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'google-site-verification': 'your-verification-code',
    'ahrefs-site-verification': 'your-ahrefs-code',
    'facebook-domain-verification': 'your-fb-verification'
  }
}

export default function RootLayout({ children }) {
  const rentalBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'VehicleRentalBusiness',
    '@id': 'https://caribbean-scooters.vercel.app/#organization',
    name: 'Caribbean Scooters',
    description: 'Alquiler premium de scooters Honda Navi en Bocas del Toro, Panamá. Explora Isla Colón, Playa Estrella, Bluff Beach y Boca del Drago.',
    url: 'https://caribbean-scooters.vercel.app',
    telephone: '+50764872001',
    email: 'fernandodinofloripa@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Calle Segunda, al lado de la Alcaldía',
      addressLocality: 'Bocas Town',
      addressRegion: 'Bocas del Toro',
      addressCountry: 'PA',
      postalCode: '0101'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 9.3400,
      longitude: -82.2400
    },
    areaServed: {
      '@type': 'City',
      name: 'Isla Colón'
    },
    priceRange: '$$',
    openingHours: 'Mo-Su 08:00-18:00',
    image: [
      'https://caribbean-scooters.vercel.app/og-image.jpg',
      'https://caribbean-scooters.vercel.app/logoTrans.png',
      'https://caribbean-scooters.vercel.app/navi.jpg'
    ],
    makesOffer: [
      {
        '@type': 'Offer',
        name: 'Alquiler de Scooter Honda Navi 120cc',
        description: 'Scooter automática perfecta para explorar Isla Colón',
        areaServed: 'Isla Colón, Bocas del Toro',
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'USD',
          price: '25'
        }
      }
    ],
    sameAs: [
      'https://www.instagram.com/caribbeanscooter/',
      'https://www.facebook.com/caribbeanscooter/',
      'https://wa.me/50764872001'
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '127',
      bestRating: '5',
      worstRating: '1'
    }
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿Necesito licencia de conducir para alquilar una scooter en Bocas del Toro?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí, necesitas una licencia de conducir válida. Las licencias internacionales son aceptadas por Caribbean Scooters.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Cuál es la mejor scooter para explorar Isla Colón?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'La Honda Navi 120cc automática es ideal para recorrer Isla Colón. Es fácil de manejar y muy económica.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Puedo llevar la scooter hasta Playa Estrella?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '¡Sí! Las Honda Navi son perfectas para ir a Playa Estrella. El trayecto dura aproximadamente 35 minutos desde Bocas Town.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Cuáles son los precios de alquiler?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ofrecemos precios desde $25 por 2 horas, $45 por un día completo y tarifas semanales desde $35 por día. Incluye casco y entrega en Bocas Town.'
        }
      }
    ]
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Inicio',
        item: 'https://caribbean-scooters.vercel.app/es'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Alquiler de Scooters en Bocas del Toro',
        item: 'https://caribbean-scooters.vercel.app/es/#scooter-rental'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Honda Navi Isla Colón',
        item: 'https://caribbean-scooters.vercel.app/es/#honda-navi'
      }
    ]
  }

  return (
    <html lang="es" className={`${inter.variable} ${montserrat.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" as="image" href="/hero.webp" />
        <link rel="preload" as="image" href="/logoTrans.png" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(rentalBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />

        {/* Mobile */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />

        {/* Theme */}
        <meta name="theme-color" content="#e85d04" />
        <meta name="msapplication-TileColor" content="#e85d04" />

        {/* Icons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Geo */}
        <meta name="geo.region" content="PA-1" />
        <meta name="geo.placename" content="Bocas del Toro, Isla Colón" />
        <meta name="geo.position" content="9.3400;-82.2400" />
        <meta name="ICBM" content="9.3400, -82.2400" />

        {/* Local SEO */}
        <meta name="location" content="Bocas Town, Isla Colón, Bocas del Toro, Panamá" />
        <meta name="address" content="Calle Segunda, Bocas Town, al lado de la Alcaldía" />
        <meta name="zipcode" content="0101" />
        <meta name="city" content="Bocas Town" />
        <meta name="state" content="Bocas del Toro" />
        <meta name="country" content="Panamá" />

        {/* Payment */}
        <meta name="payment" content="efectivo, yappy, tarjeta de crédito" />

        {/* Language Alternates */}
        <link rel="alternate" hreflang="en" href="https://caribbean-scooters.vercel.app/" />
        <link rel="alternate" hreflang="pt" href="https://caribbean-scooters.vercel.app/br" />
        <link rel="alternate" hreflang="es" href="https://caribbean-scooters.vercel.app/es" />
        <link rel="alternate" hreflang="x-default" href="https://caribbean-scooters.vercel.app" />
      </head>

      <body className={`${inter.className} antialiased`}>
        {children}

        {/* Performance Monitoring */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener('load', function() {
                setTimeout(function(){
                  if (typeof gtag !== 'undefined') {
                    gtag('event', 'load_time', {
                      'event_category': 'Performance',
                      'event_label': 'Page Load',
                      'value': Math.round(performance.timing.loadEventEnd - performance.timing.navigationStart)
                    });
                  }
                }, 0);
              });
              window.pageSchema = ${JSON.stringify(rentalBusinessSchema)};
            `
          }}
        />
      </body>
    </html>
  )
}
