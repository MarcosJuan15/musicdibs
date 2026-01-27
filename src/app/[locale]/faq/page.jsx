import FAQHero from '@/components/faq/FAQHero';
import FAQAccordion from '@/components/faq/FAQAccordion';
import FAQContact from '@/components/faq/FAQContact';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import { getTranslations } from 'next-intl/server';

// Función para generar metadatos dinámicos según el idioma
export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'faq.metadata' });

  return {
    metadataBase: new URL('https://musicdibs.com'),
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    authors: [{ name: 'Musicdibs' }],
    creator: 'Musicdibs',
    publisher: 'Musicdibs',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      title: t('og_title'),
      description: t('og_description'),
      type: 'website',
      url: '/faq',
      siteName: 'Musicdibs',
      locale: locale === 'es' ? 'es_ES' : locale === 'en' ? 'en_US' : 'pt_PT',
      images: [
        {
          url: '/assets/images/og.png',
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
      images: ['/assets/images/og.png'],
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
      canonical: '/faq',
      languages: {
        'es': '/es/faq',
        'en': '/en/faq',
        'pt': '/pt/faq',
      },
    },
  };
}

// Schema.org dinámico para FAQPage
function getFAQSchema(locale, t) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': t('schema_question1'),
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': t('schema_answer1')
        }
      },
      {
        '@type': 'Question',
        'name': t('schema_question2'),
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': t('schema_answer2')
        }
      }
    ],
    'about': {
      '@type': 'Thing',
      'name': t('schema_name'),
      'description': t('schema_description')
    }
  };
}

// Schema.org adicional para Service (soporte)
function getSupportServiceSchema(locale) {
  const serviceData = {
    es: {
      name: 'Soporte Musicdibs - FAQ',
      description: 'Servicio de preguntas frecuentes y soporte técnico especializado en registro musical con blockchain',
      serviceType: 'FAQ and Technical Support'
    },
    en: {
      name: 'Musicdibs Support - FAQ',
      description: 'Frequently asked questions service and technical support specialized in music registration with blockchain',
      serviceType: 'FAQ and Technical Support'
    },
    pt: {
      name: 'Suporte Musicdibs - FAQ',
      description: 'Serviço de perguntas frequentes e suporte técnico especializado em registro musical com blockchain',
      serviceType: 'FAQ e Suporte Técnico'
    }
  };

  const data = serviceData[locale] || serviceData.es;

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': data.name,
    'description': data.description,
    'provider': {
      '@type': 'Organization',
      'name': 'Musicdibs',
      'url': 'https://musicdibs.com'
    },
    'serviceType': data.serviceType,
    'areaServed': 'Global',
    'hoursAvailable': {
      '@type': 'OpeningHoursSpecification',
      'opens': '00:00',
      'closes': '23:59',
      'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    }
  };
}

export default async function FAQ({ params }) {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'faq.hero' });
  const faqSchema = getFAQSchema(locale, t);
  const supportServiceSchema = getSupportServiceSchema(locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(supportServiceSchema) }}
      />
      <Navbar />
      <FAQHero />
      <FAQAccordion />
      <FAQContact />
      <Footer />
    </>
  );
}