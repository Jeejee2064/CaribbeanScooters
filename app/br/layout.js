import { Inter, Montserrat } from 'next/font/google';
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
    default: "🚀 Aluguel de Scooter Honda Navi em Bocas del Toro | Caribbean Scooters #1",
    template: "%s | Melhor Aluguel de Scooter em Bocas del Toro"
  },
  description:
    "⭐️⭐️⭐️⭐️⭐️ Alugue Scooters Honda Navi na Isla Colón, Bocas del Toro. Explore a Praia das Estrelas, Bluff Beach e Boca del Drago. Automática, fácil de pilotar. ENTREGA GRÁTIS. Melhores preços garantidos. Reserve agora! +507 6487-2001",
  keywords:
    "aluguel scooter bocas del toro, honda navi aluguel isla colon, alugar scooter starfish beach, bluff beach scooter, boca del drago scooter, panamá aluguel scooter, aluguel quadriciclo bocas, aluguel scooter barato panamá, onde alugar scooter bocas town, scooter automática bocas del toro, honda navi 120cc",
  authors: [{ name: "Caribbean Scooters" }],
  creator: "Caribbean Scooters",
  publisher: "Caribbean Scooters",
  classification: "Serviços de Aluguel de Veículos",
  category: "Viagem & Turismo",
  metadataBase: new URL("https://caribbean-scooters.vercel.app"),
  alternates: {
    canonical: "/br",
    languages: {
      en: "/",
      es: "/es",
      pt: "/br",
    },
  },
  openGraph: {
    title: "🚀 #1 Aluguel de Scooter Honda Navi em Bocas del Toro | Caribbean Scooters",
    description:
      "⭐️⭐️⭐️⭐️⭐️ MELHOR AVALIADO: Alugue Scooters Honda Navi na Isla Colón. Explore Praia das Estrelas, Bluff Beach e Boca del Drago. Automática, fácil de pilotar. ENTREGA GRÁTIS!",
    url: "https://caribbean-scooters.vercel.app/br",
    siteName: "Caribbean Scooters - Bocas del Toro",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Caribbean Scooters - #1 Aluguel de Honda Navi em Bocas del Toro - Starfish Beach - Bluff Beach",
      },
    ],
    locale: "pt_BR",
    type: "website",
    emails: ["fernandodinofloripa@gmail.com"],
    phoneNumbers: ["+50764872001"],
    location: {
      latitude: 9.34,
      longitude: -82.24,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "🚀 #1 Aluguel de Scooter em Bocas del Toro | Caribbean Scooters",
    description:
      "⭐️⭐️⭐️⭐️⭐️ Alugue scooters Honda Navi — Explore Praia das Estrelas, Bluff Beach e mais. Automática, fácil de pilotar. ENTREGA GRÁTIS.",
    images: ["/twitter-image.jpg"],
    creator: "@caribbeanscooter",
    site: "@caribbeanscooter",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "google-site-verification": "your-verification-code",
    "ahrefs-site-verification": "your-ahrefs-code",
    "facebook-domain-verification": "your-fb-verification",
  },
}

export default function RootLayout({ children }) {
  const rentalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "VehicleRentalBusiness",
    "@id": "https://caribbean-scooters.vercel.app/#organization",
    name: "Caribbean Scooters",
    description:
      "Aluguel premium de scooters Honda Navi em Bocas del Toro, Panamá. Explore Isla Colón, Praia das Estrelas, Bluff Beach e Boca del Drago com nossas scooters automáticas.",
    url: "https://caribbean-scooters.vercel.app/br",
    telephone: "+50764872001",
    email: "fernandodinofloripa@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Calle Segunda, ao lado da Prefeitura",
      addressLocality: "Bocas Town",
      addressRegion: "Bocas del Toro",
      addressCountry: "PA",
      postalCode: "0101",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 9.34,
      longitude: -82.24,
    },
    areaServed: {
      "@type": "City",
      name: "Isla Colón",
    },
    priceRange: "$$",
    openingHours: "Mo-Su 08:00-18:00",
    image: [
      "https://caribbean-scooters.vercel.app/og-image.jpg",
      "https://caribbean-scooters.vercel.app/logoTrans.png",
      "https://caribbean-scooters.vercel.app/navi.jpg",
    ],
    makesOffer: [
      {
        "@type": "Offer",
        name: "Aluguel de Scooter Honda Navi 120cc",
        description: "Scooter automática perfeita para explorar a Isla Colón",
        areaServed: "Isla Colón, Bocas del Toro",
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "USD",
          price: "25",
        },
      },
    ],
    sameAs: [
      "https://www.instagram.com/caribbeanscooter/",
      "https://www.facebook.com/caribbeanscooter/",
      "https://wa.me/50764872001",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "127",
      bestRating: "5",
      worstRating: "1",
    },
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Preciso de carteira de motorista para alugar scooter em Bocas del Toro?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim, é necessária uma carteira de motorista válida. Licenças internacionais são aceitas pela Caribbean Scooters.",
        },
      },
      {
        "@type": "Question",
        name: "Qual é a melhor scooter para explorar Isla Colón?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A Honda Navi 120cc automática é perfeita para explorar a ilha. Fácil de pilotar, econômica e ideal para ir à Praia das Estrelas, Bluff Beach e Boca del Drago.",
        },
      },
      {
        "@type": "Question",
        name: "Posso levar a scooter até a Praia das Estrelas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim! As scooters Honda Navi são ideais para esse trajeto. O percurso leva cerca de 35 minutos e oferece paisagens incríveis.",
        },
      },
      {
        "@type": "Question",
        name: "Quais são os preços do aluguel de scooter em Bocas del Toro?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oferecemos preços competitivos a partir de $25 por 2 horas, $45 por um dia inteiro, e pacotes semanais a partir de $35 por dia. Inclui capacete e entrega em Bocas Town.",
        },
      },
    ],
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Início",
        item: "https://caribbean-scooters.vercel.app/br",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Aluguel de Scooter Bocas del Toro",
        item: "https://caribbean-scooters.vercel.app/br#scooter-rental",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Honda Navi na Isla Colón",
        item: "https://caribbean-scooters.vercel.app/br#honda-navi",
      },
    ],
  }

  return (
    <html lang="pt" className={`${inter.variable} ${montserrat.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" as="image" href="/hero.webp" />
        <link rel="preload" as="image" href="/logoTrans.png" />

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

        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />

        <meta name="theme-color" content="#e85d04" />
        <meta name="msapplication-TileColor" content="#e85d04" />

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />

        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />

        <meta name="geo.region" content="PA-1" />
        <meta name="geo.placename" content="Bocas del Toro, Isla Colón" />
        <meta name="geo.position" content="9.3400;-82.2400" />
        <meta name="ICBM" content="9.3400, -82.2400" />

        <meta name="facebook-domain-verification" content="your-facebook-verification" />

        <meta name="location" content="Bocas Town, Isla Colón, Bocas del Toro, Panamá" />
        <meta name="address" content="Calle Segunda, Bocas Town, ao lado da Prefeitura" />
        <meta name="zipcode" content="0101" />
        <meta name="city" content="Bocas Town" />
        <meta name="state" content="Bocas del Toro" />
        <meta name="country" content="Panamá" />

        <meta name="service-area" content="Isla Colón, Bocas del Toro, Panamá" />
        <meta name="coverage" content="Isla Colón, Bocas del Toro" />

        <meta name="payment" content="dinheiro, yappy, cartão de crédito" />

        <link
          rel="alternate"
          hreflang="es"
          href="https://caribbean-scooters.vercel.app/es"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://caribbean-scooters.vercel.app/"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://caribbean-scooters.vercel.app"
        />
      </head>

      <body className={`${inter.className} antialiased`}>
        {children}

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
            `,
          }}
        />
      </body>
    </html>
  )
}
