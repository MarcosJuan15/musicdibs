// app/dashboard/page.js
import DashboardLayout from '@/components/dashboard/DashboardLayout';

export const metadata = {
  metadataBase: new URL('https://musicdibs.com'),
  title: 'Dashboard Musicdibs | Panel de Control Artistas - Registro y Distribución Musical',
  description: '🎵 Panel de control Musicdibs para artistas. Gestiona tu registro musical, distribuye tus obras, crea NFTs, verifica derechos y promociona tu música desde un solo lugar.',
  keywords: 'dashboard musicdibs, panel control artista, registro musical online, distribuir música, crear NFTs música, verificar registros, promocionar música, gestión obras musicales, cuenta musicdibs',
  authors: [{ name: 'Musicdibs' }],
  creator: 'Musicdibs',
  publisher: 'Musicdibs',
  openGraph: {
    title: 'Dashboard Musicdibs - Panel de Control para Artistas Musicales',
    description: 'Gestiona tu música, registra obras, distribuye canciones y crea NFTs desde tu panel de control Musicdibs',
    type: 'website',
    url: '/dashboard',
    siteName: 'Musicdibs',
    locale: 'es_ES',
    images: [
      {
        url: '/assets/images/og.png',
        width: 1200,
        height: 630,
        alt: 'Musicdibs Dashboard - Panel de Control para Artistas Musicales',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dashboard Musicdibs - Panel de Control Artistas',
    description: 'Gestiona tu música, registra obras y distribuye desde tu panel Musicdibs',
    images: ['/assets/images/og.png'],
    creator: '@musicdibs',
  },
  robots: {
    index: false, // Importante: no indexar páginas privadas
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
  alternates: {
    canonical: '/dashboard',
  },
  other: {
    'robots': 'noindex, nofollow', // Doble protección para páginas privadas
  }
};

// Schema.org para CreativeWork (panel de control)
const dashboardSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  'name': 'Dashboard Musicdibs - Panel de Control Artistas',
  'description': 'Panel de control para gestión integral de obras musicales, registro, distribución y promoción',
  'applicationCategory': 'MusicApplication',
  'operatingSystem': 'Web Browser',
  'permissions': 'requires_authentication',
  'creator': {
    '@type': 'Organization',
    'name': 'Musicdibs',
    'url': 'https://musicdibs.com'
  },
  'offers': {
    '@type': 'Offer',
    'category': 'DigitalService',
    'url': 'https://musicdibs.com/precios'
  }
};

export default function Dashboard() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dashboardSchema) }}
      />
      <DashboardLayout />
    </>
  );
}