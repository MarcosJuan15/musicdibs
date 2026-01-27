import SupportHero from '@/components/support/SupportHero';
import SupportChannels from '@/components/support/SupportChannels';
import SupportTicket from '@/components/support/SupportTicket';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import { getTranslations } from 'next-intl/server';

// Función para generar metadatos dinámicos según el idioma
export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'support.metadata' });

  return {
    metadataBase: new URL('https://musicdibs.com'),
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    authors: [{ name: 'Musicdibs' }],
    creator: 'Musicdibs',
    publisher: 'Musicdibs',
    category: 'Customer Support',
    classification: 'Technical Support Service',
    openGraph: {
      title: t('og_title'),
      description: t('og_description'),
      type: 'website',
      url: '/support',
      siteName: 'Musicdibs',
      locale: locale === 'es' ? 'es_ES' : locale === 'en' ? 'en_US' : 'pt_PT',
      images: [
        {
          url: '/assets/images/og-support.png',
          width: 1200,
          height: 630,
          alt: t('og_alt'),
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('og_title'),
      description: t('og_description'),
      images: ['/assets/images/og-support.png'],
      creator: '@musicdibs',
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
      canonical: '/support',
      languages: {
        'es': '/es/support',
        'en': '/en/support',
        'pt': '/pt/support',
      },
    },
    other: {
      'support-type': 'technical-music',
      'availability': '24/7',
      'response-time': '24h',
    }
  };
}

// Schema.org dinámico según idioma
function getCustomerServiceSchema(locale, t) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': t('schema_name'),
    'description': t('schema_description'),
    'provider': {
      '@type': 'Organization',
      'name': 'Musicdibs',
      'url': 'https://musicdibs.com'
    },
    'areaServed': 'Global',
    'serviceType': t('schema_service_type'),
    'availableChannel': {
      '@type': 'ServiceChannel',
      'serviceUrl': 'https://musicdibs.com/support',
      'servicePhone': t('schema_phone'),
      'serviceEmail': t('schema_email'),
      'serviceSmsNumber': t('schema_sms')
    },
    'hoursAvailable': {
      '@type': 'OpeningHoursSpecification',
      'opens': '00:00',
      'closes': '23:59',
      'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    }
  };
}

export default async function Support({ params }) {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'support.hero' });
  const customerServiceSchema = getCustomerServiceSchema(locale, t);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(customerServiceSchema) }}
      />
      <Navbar />
      <SupportHero />
      <SupportChannels />
      <SupportTicket />
      <Footer />
    </>
  );
}