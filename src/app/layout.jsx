import './globals.css';

export const metadata = {
  metadataBase: new URL('https://musicdibs.com'),
  title: {
    default: 'Musicdibs | Registro Musical Blockchain y Distribución Global 2024',
    template: '%s | Musicdibs'
  },
  description: '🎵 Registra tu música en blockchain con validez legal en 179 países. Distribuye en Spotify, Apple Music, TikTok y +220 plataformas. Protección de derechos de autor, 100% regalías y tecnología Web3.',
  keywords: 'registro musical, distribución música, blockchain música, protección derechos autor, Spotify, Apple Music, TikTok, distribución digital, royalties música, plataforma musical, artista independiente, web3 música, token musical, musicdibs',
  authors: [{ name: 'Musicdibs' }],
  creator: 'Musicdibs',
  publisher: 'Musicdibs',
  category: 'Music Technology',
  classification: 'Blockchain Music Platform',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://musicdibs.com',
    siteName: 'Musicdibs',
    title: 'Musicdibs | Registro y Distribución Musical con Blockchain',
    description: 'Registra tu música en blockchain con validez legal global. Distribuye en +220 plataformas y protege tus derechos de autor. Tecnología Web3 para artistas.',
    images: [
      {
        url: '/assets/images/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'Musicdibs - Plataforma de Registro Musical con Blockchain y Distribución Global para Artistas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Musicdibs | Registro y Distribución Musical con Blockchain',
    description: 'Registra y distribuye tu música con validez legal en 179 países. Protección blockchain y +220 plataformas.',
    images: ['/assets/images/og-home.jpg'],
    creator: '@musicdibs',
    site: '@musicdibs',
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
  alternates: {
    canonical: 'https://musicdibs.com',
    languages: {
      'es-ES': 'https://musicdibs.com',
      'en-US': 'https://musicdibs.com/en',
    },
  },
  verification: {
    google: 'tu-codigo-verificacion-google', // Añadir cuando tengas
    yandex: 'tu-codigo-verificacion-yandex', // Opcional
    yahoo: 'tu-codigo-verificacion-yahoo', // Opcional
  },
  other: {
    'msvalidate.01': 'tu-codigo-bing', // Para Bing
    'facebook-domain-verification': 'tu-codigo-facebook', // Para Facebook Pixel
  }
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

// Schema.org para toda la web
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  'name': 'Musicdibs',
  'description': 'Plataforma de registro y distribución musical con tecnología blockchain para artistas independientes',
  'url': 'https://musicdibs.com',
  'potentialAction': {
    '@type': 'SearchAction',
    'target': 'https://musicdibs.com/search?q={search_term_string}',
    'query-input': 'required name=search_term_string'
  },
  'publisher': {
    '@type': 'Organization',
    'name': 'Musicdibs',
    'logo': {
      '@type': 'ImageObject',
      'url': 'https://musicdibs.com/assets/images/logo.png'
    }
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        {/* Preconnect para mejorar performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdn.musicdibs.com" />
        
        {/* Favicon y iconos */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Canonical URL para la home */}
        <link rel="canonical" href="https://musicdibs.com" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-gray-900 antialiased">
        {/* Google Tag Manager (añadir cuando lo configures) */}
        {/* <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXX"
            height="0" 
            width="0" 
            style={{display: 'none', visibility: 'hidden'}}
          />
        </noscript> */}
        
        {children}
        
        {/* Schema.org para Organization (se puede incluir aquí o en cada página) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              'name': 'Musicdibs',
              'url': 'https://musicdibs.com',
              'logo': 'https://musicdibs.com/assets/images/logo.png',
              'description': 'Plataforma de registro y distribución musical con tecnología blockchain',
              'address': {
                '@type': 'PostalAddress',
                'addressCountry': 'ES'
              },
              'contactPoint': {
                '@type': 'ContactPoint',
                'telephone': '+34-900-123-456',
                'contactType': 'customer service',
                'email': 'info@musicdibs.com',
                'availableLanguage': ['Spanish', 'English']
              },
              'sameAs': [
                'https://twitter.com/musicdibs',
                'https://www.instagram.com/musicdibs/',
                'https://www.tiktok.com/@musicdibs_',
                'https://www.youtube.com/@Musicdibs'
              ]
            })
          }}
        />
      </body>
    </html>
  );
}