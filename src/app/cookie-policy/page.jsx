import CookiePolicyContent from '@/components/legal/CookiePolicyContent';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';

export const metadata = {
  metadataBase: new URL('https://musicdibs.com'),
  title: 'Política de Cookies Musicdibs | Uso de Cookies y Tecnologías Similares',
  description: 'ℹ️ Política de Cookies de Musicdibs actualizada el 28 de febrero de 2022. Información sobre cookies técnicas, analíticas y de preferencias para registro y distribución musical.',
  keywords: 'política de cookies musicdibs, cookies registro musical, cookies técnicas, cookies analíticas, privacidad musicdibs, gestión cookies, configuración cookies, RGPD cookies, LSSI cookies, tecnologías similares',
  authors: [{ name: 'Musicdibs' }],
  creator: 'Musicdibs',
  publisher: 'Musicdibs',
  category: 'Legal',
  classification: 'Política de Cookies',
  openGraph: {
    title: 'Política de Cookies - Musicdibs Plataforma Musical',
    description: 'Política de Cookies de Musicdibs actualizada el 28 de febrero de 2022. Información sobre uso de cookies en plataforma de registro musical.',
    type: 'article',
    url: '/cookie-policy',
    siteName: 'Musicdibs',
    locale: 'es_ES',
    publishedTime: '2022-02-28T00:00:00Z',
    modifiedTime: '2022-02-28T00:00:00Z',
    images: [
      {
        url: '/assets/images/og.png',
        width: 1200,
        height: 630,
        alt: 'Musicdibs Política de Cookies - Transparencia y Privacidad en Plataforma Musical',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Política de Cookies - Musicdibs',
    description: 'Política de Cookies de Musicdibs actualizada el 28 de febrero de 2022',
    images: ['/assets/images/og.png'],
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
    canonical: '/cookie-policy',
    languages: {
      'es-ES': '/cookie-policy',
      'en-US': '/en/cookie-policy',
    },
  },
  other: {
    'audience': 'all',
    'rating': 'safe for kids',
    'revisit-after': '30 days',
  }
};

// Schema.org para Legal Document con fecha real
const legalSchema = {
  '@context': 'https://schema.org',
  '@type': 'LegalDocument',
  'name': 'Política de Cookies - Musicdibs',
  'description': 'Política de uso de cookies y tecnologías similares en la plataforma de registro y distribución musical Musicdibs',
  'publisher': {
    '@type': 'Organization',
    'name': 'Musicdibs',
    'url': 'https://musicdibs.com'
  },
  'datePublished': '2022-02-28',
  'dateModified': '2022-02-28',
  'isAccessibleForFree': true,
  'license': 'https://musicdibs.com/terms-and-conditions',
  'keywords': 'cookies, política de cookies, RGPD, LSSI, privacidad, musicdibs'
};

export default function CookiePolicy() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(legalSchema) }}
      />
      <Navbar />
      <CookiePolicyContent />
      <Footer />
    </>
  );
}