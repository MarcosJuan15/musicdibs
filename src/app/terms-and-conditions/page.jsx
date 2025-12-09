import TermsAndConditionsContent from '@/components/legal/TermsAndConditionsContent';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';

export const metadata = {
  metadataBase: new URL('https://musicdibs.com'),
  title: 'Términos y Condiciones Musicdibs | Condiciones de Uso Plataforma 2022',
  description: '📄 Términos y Condiciones de Musicdibs actualizados el 28 de febrero de 2022. Conoce nuestras políticas de uso, reembolso, cancelación de suscripción y derechos de propiedad intelectual para el registro y distribución musical.',
  keywords: 'términos condiciones musicdibs, condiciones uso plataforma, política reembolso musicdibs, cancelación suscripción, derechos propiedad intelectual, registro musical condiciones, distribución música términos, uso plataforma musical, acuerdo usuario musicdibs, normativa uso musicdibs',
  authors: [{ name: 'Musicdibs' }],
  creator: 'Musicdibs',
  publisher: 'Musicdibs',
  category: 'Legal',
  classification: 'Terms and Conditions',
  openGraph: {
    title: 'Términos y Condiciones - Musicdibs Plataforma Musical',
    description: 'Términos y Condiciones de Musicdibs actualizados el 28 de febrero de 2022. Políticas de uso, reembolso y propiedad intelectual.',
    type: 'article',
    url: '/terms-and-conditions',
    siteName: 'Musicdibs',
    locale: 'es_ES',
    publishedTime: '2022-02-28T00:00:00Z',
    modifiedTime: '2022-02-28T00:00:00Z',
    images: [
      {
        url: '/assets/images/og.png',
        width: 1200,
        height: 630,
        alt: 'Musicdibs Términos y Condiciones - Acuerdo Legal para Plataforma de Registro y Distribución Musical',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Términos y Condiciones - Musicdibs',
    description: 'Términos y Condiciones de Musicdibs actualizados el 28 de febrero de 2022',
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
    canonical: '/terms-and-conditions',
    languages: {
      'es-ES': '/terms-and-conditions',
      'en-US': '/en/terms-and-conditions',
    },
  },
  other: {
    'audience': 'all',
    'rating': 'safe for kids',
    'revisit-after': '30 days',
  }
};

// Schema.org para Terms and Conditions
const termsSchema = {
  '@context': 'https://schema.org',
  '@type': 'LegalDocument',
  'name': 'Términos y Condiciones - Musicdibs',
  'description': 'Acuerdo de términos y condiciones para el uso de la plataforma de registro y distribución musical Musicdibs',
  'publisher': {
    '@type': 'Organization',
    'name': 'Musicdibs',
    'url': 'https://musicdibs.com'
  },
  'datePublished': '2022-02-28',
  'dateModified': '2022-02-28',
  'isAccessibleForFree': true,
  'license': 'https://musicdibs.com/terms-and-conditions',
  'keywords': 'términos, condiciones, uso, plataforma, musicdibs, registro musical, distribución'
};

export default function TermsAndConditions() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(termsSchema) }}
      />
      <Navbar />
      <TermsAndConditionsContent />
      <Footer />
    </>
  );
}