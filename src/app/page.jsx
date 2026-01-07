import HomeLayout from '@/components/home/HomeLayout';

export const metadata = {
  metadataBase: new URL('https://musicdibs.com'),
  title: 'Musicdibs | Registro Musical Blockchain y Distribución Global 2024',
  description: '🎵 Registra tu música en blockchain con validez legal en 179 países. Distribuye en Spotify, Apple Music, TikTok y +220 plataformas. Protección de derechos de autor, 100% regalías y tecnología Web3. Comienza gratis.',
  keywords: 'registro musical, distribución música, blockchain música, protección derechos autor, Spotify, Apple Music, TikTok, distribución digital, royalties música, plataforma musical, artista independiente, web3 música, token musical, musicdibs, registrar canciones, proteger música, distribución streaming',
  authors: [{ name: 'Musicdibs' }],
  creator: 'Musicdibs',
  publisher: 'Musicdibs',
  category: 'Music Technology',
  classification: 'Blockchain Music Platform',
  openGraph: {
    title: 'Musicdibs | Registro y Distribución Musical con Blockchain',
    description: 'Registra tu música en blockchain con validez legal global. Distribuye en +220 plataformas y protege tus derechos de autor. Tecnología Web3 para artistas.',
    type: 'website',
    url: '/',
    siteName: 'Musicdibs',
    locale: 'es_ES',
    images: [
      {
        url: '/assets/images/logo-navbar.png',
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
    canonical: '/',
    languages: {
      'es-ES': '/',
      'en-US': '/en',
    },
  },
  other: {
    'google-site-verification': 'tu-codigo-verificacion', // Añadir si tienes
    'fb:app_id': 'tu-app-id', // Añadir si tienes
  }
};

// Schema.org para Home Page
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

// Schema.org adicional para Organization
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  'name': 'Musicdibs',
  'alternateName': 'Musicdibs Platform',
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
};

export const dynamic = 'force-static';

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <HomeLayout />
    </>
  );
}