import PartnersHero from '@/components/partners/PartnersHero';
import PartnersFeatured from '@/components/partners/PartnersFeatured';
import PartnersWhy from '@/components/partners/PartnersWhy';
import PartnersCTA from '@/components/partners/PartnersCTA';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import { getTranslations } from 'next-intl/server';

// Función para generar metadatos dinámicos según el idioma
export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'partners.metadata' });

  return {
    metadataBase: new URL('https://musicdibs.com'),
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    authors: [{ name: 'Musicdibs' }],
    creator: 'Musicdibs',
    publisher: 'Musicdibs',
    category: 'Business Partnerships',
    classification: 'Strategic Alliances',
    openGraph: {
      title: t('og_title'),
      description: t('og_description'),
      type: 'website',
      url: '/partners',
      siteName: 'Musicdibs',
      locale: locale === 'es' ? 'es_ES' : locale === 'en' ? 'en_US' : 'pt_PT',
      images: [
        {
          url: '/assets/images/og-partners.png',
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
      images: ['/assets/images/og-partners.png'],
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
      canonical: '/partners',
      languages: {
        'es': '/es/partners',
        'en': '/en/partners',
        'pt': '/pt/partners',
      },
    },
    other: {
      'partnership-type': 'strategic-alliances',
      'industry': 'music-technology',
      'collaboration-model': 'B2B',
    }
  };
}

// Schema.org dinámico para Partnership
function getPartnershipSchema(locale, t) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': t('schema_name'),
    'description': t('schema_description'),
    'url': 'https://musicdibs.com/partners',
    'logo': 'https://musicdibs.com/assets/images/logo.png',
    'memberOf': {
      '@type': 'Organization',
      'name': 'iCommunity Labs'
    },
    'member': [
      {
        '@type': 'Organization',
        'name': 'iCommunity Labs',
        'url': 'https://icommunity.io',
        'description': locale === 'es' 
          ? 'Plataforma de blockchain y tecnología para la protección de activos digitales'
          : locale === 'en'
          ? 'Blockchain and technology platform for digital assets protection'
          : 'Plataforma de blockchain e tecnologia para proteção de ativos digitais'
      },
      {
        '@type': 'Organization', 
        'name': 'Blockchain España',
        'url': 'https://blockchainespana.io',
        'description': locale === 'es'
          ? 'Asociación líder en blockchain y tecnologías descentralizadas en España'
          : locale === 'en'
          ? 'Leading association in blockchain and decentralized technologies in Spain'
          : 'Associação líder em blockchain e tecnologias descentralizadas na Espanha'
      }
    ],
    'foundingDate': '2023',
    'numberOfEmployees': {
      '@type': 'QuantitativeValue',
      'value': '50+'
    }
  };
}

// Schema.org adicional para HowTo (convertirse en partner) - dinámico según idioma
function getBecomePartnerSchema(locale) {
  const howToData = {
    es: {
      name: 'Cómo Convertirse en Partner de Musicdibs',
      description: 'Guía paso a paso para establecer una alianza estratégica con Musicdibs',
      supply: 'Propuesta de colaboración',
      steps: [
        {
          name: 'Evaluar sinergias',
          text: 'Analiza cómo tu organización puede complementar los servicios de Musicdibs en la industria musical',
        },
        {
          name: 'Contactar al equipo',
          text: 'Envía tu propuesta de colaboración a través del formulario de partners',
        },
        {
          name: 'Reunión estratégica',
          text: 'Coordina una reunión con nuestro equipo de alianzas para discutir oportunidades',
        },
        {
          name: 'Firma de acuerdo',
          text: 'Establece los términos de la colaboración y firma el acuerdo de partnership',
        }
      ]
    },
    en: {
      name: 'How to Become a Musicdibs Partner',
      description: 'Step by step guide to establish a strategic alliance with Musicdibs',
      supply: 'Collaboration proposal',
      steps: [
        {
          name: 'Evaluate synergies',
          text: 'Analyze how your organization can complement Musicdibs services in the music industry',
        },
        {
          name: 'Contact the team',
          text: 'Send your collaboration proposal through the partners form',
        },
        {
          name: 'Strategic meeting',
          text: 'Coordinate a meeting with our alliances team to discuss opportunities',
        },
        {
          name: 'Agreement signing',
          text: 'Establish the terms of collaboration and sign the partnership agreement',
        }
      ]
    },
    pt: {
      name: 'Como se Tornar um Parceiro da Musicdibs',
      description: 'Guia passo a passo para estabelecer uma aliança estratégica com a Musicdibs',
      supply: 'Proposta de colaboração',
      steps: [
        {
          name: 'Avaliar sinergias',
          text: 'Analise como sua organização pode complementar os serviços da Musicdibs na indústria musical',
        },
        {
          name: 'Contatar a equipe',
          text: 'Envie sua proposta de colaboração através do formulário de parceiros',
        },
        {
          name: 'Reunião estratégica',
          text: 'Coordene uma reunião com nossa equipe de alianças para discutir oportunidades',
        },
        {
          name: 'Assinatura do acordo',
          text: 'Estabeleça os termos da colaboração e assine o acordo de parceria',
        }
      ]
    }
  };

  const data = howToData[locale] || howToData.es;

  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    'name': data.name,
    'description': data.description,
    'image': 'https://musicdibs.com/assets/images/become-partner.jpg',
    'estimatedCost': {
      '@type': 'MonetaryAmount',
      'currency': 'EUR',
      'value': '0'
    },
    'supply': {
      '@type': 'HowToSupply',
      'name': data.supply
    },
    'step': data.steps.map((step, index) => ({
      '@type': 'HowToStep',
      'name': step.name,
      'text': step.text,
      'image': `https://musicdibs.com/assets/images/step${index + 1}-partners.jpg`,
      'url': `https://musicdibs.com/${locale}/partners#step${index + 1}`
    }))
  };
}

export default async function Partners({ params }) {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'partners.hero' });
  const partnershipSchema = getPartnershipSchema(locale, t);
  const becomePartnerSchema = getBecomePartnerSchema(locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(partnershipSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(becomePartnerSchema) }}
      />
      <Navbar />
      <PartnersHero />
      <PartnersFeatured />
      <PartnersWhy />
      <PartnersCTA />
      <Footer />
    </>
  );
}