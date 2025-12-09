import TechLegalHero from '@/components/legal/TechLegalHero';
import TechLegalCertification from '@/components/legal/TechLegalCertification';
import TechLegalFeatures from '@/components/legal/TechLegalFeatures';
import TechLegalBlockchain from '@/components/legal/TechLegalBlockchain';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';

export const metadata = {
    metadataBase: new URL('https://musicdibs.com'),
    title: 'Tecnología Blockchain y Validez Legal Musicdibs | Certificación Mundial 2024',
    description: '🔐 Tecnología blockchain con validez legal en 179 países. Certificación inmutable para tus obras musicales. Garantía de autenticidad, seguridad probatoria y protección internacional con Musicdibs.',
    keywords: 'blockchain música musicdibs, certificación legal musical, validez internacional obras, protección derechos autor blockchain, registro musical blockchain, validez legal 179 países, tecnología blockchain música, certificado autenticidad musical, protección obras musicales, derechos autor internacional, musicdibs blockchain, evidencia digital música',
    authors: [{ name: 'Musicdibs' }],
    creator: 'Musicdibs',
    publisher: 'Musicdibs',
    category: 'Technology & Legal',
    classification: 'Blockchain Certification',
    openGraph: {
        title: 'Tecnología Blockchain y Validez Legal - Musicdibs',
        description: 'Certificación blockchain con validez legal en 179 países para tus obras musicales. Protección internacional y evidencia digital inmutable.',
        type: 'website',
        url: '/tech-and-legal',
        siteName: 'Musicdibs',
        locale: 'es_ES',
        images: [
            {
                url: '/assets/images/og-tech-legal.png',
                width: 1200,
                height: 630,
                alt: 'Musicdibs Tecnología Blockchain y Validez Legal - Certificación Internacional para Obras Musicales',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Tecnología Blockchain y Validez Legal - Musicdibs',
        description: 'Certificación blockchain con validez legal en 179 países. Protección internacional para tu música.',
        images: ['/assets/images/og-tech-legal.png'],
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
        canonical: '/tech-and-legal',
    },
    other: {
        'technology': 'blockchain',
        'legal-validity': '179-countries',
        'certification-type': 'digital-proof',
    }
};

// Schema.org para Technology and Legal Service
const techLegalSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Tecnología Blockchain y Validez Legal - Musicdibs',
    'description': 'Servicio de certificación blockchain con validez legal internacional para obras musicales, proporcionando evidencia digital inmutable y protección de derechos de autor',
    'provider': {
        '@type': 'Organization',
        'name': 'Musicdibs',
        'url': 'https://musicdibs.com'
    },
    'areaServed': 'Worldwide',
    'serviceType': 'Blockchain Certification',
    'availableChannel': {
        '@type': 'ServiceChannel',
        'serviceUrl': 'https://musicdibs.com/tech-and-legal'
    },
    'hasOfferCatalog': {
        '@type': 'OfferCatalog',
        'name': 'Servicios de Certificación Blockchain',
        'itemListElement': [
            {
                '@type': 'Offer',
                'itemOffered': {
                    '@type': 'Service',
                    'name': 'Certificación Blockchain Musical',
                    'description': 'Certificación con validez legal en 179 países del Convenio de Berna'
                }
            }
        ]
    }
};

// Schema.org adicional para TechArticle
const techArticleSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    'headline': 'Tecnología Blockchain para la Protección Legal de Obras Musicales',
    'description': 'Explicación técnica y legal sobre cómo la tecnología blockchain proporciona validez legal internacional para obras musicales',
    'author': {
        '@type': 'Organization',
        'name': 'Musicdibs'
    },
    'datePublished': '2024-01-01',
    'publisher': {
        '@type': 'Organization',
        'name': 'Musicdibs'
    },
    'proficiencyLevel': 'Expert',
    'about': {
        '@type': 'Thing',
        'name': 'Blockchain Technology'
    }
};

export default function TechLegal() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(techLegalSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(techArticleSchema) }}
            />
            <Navbar />
            <TechLegalHero />
            <TechLegalCertification />
            <TechLegalFeatures />
            <TechLegalBlockchain />
            <Footer />
        </>
    );
}