import PartnersHero from '@/components/partners/PartnersHero';
import PartnersFeatured from '@/components/partners/PartnersFeatured';
import PartnersWhy from '@/components/partners/PartnersWhy';
import PartnersCTA from '@/components/partners/PartnersCTA';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';

export const metadata = {
    metadataBase: new URL('https://musicdibs.com'),
    title: 'Partners y Alianzas Musicdibs | Colaboraciones Estratégicas en la Industria Musical 2024',
    description: '🤝 Conoce nuestros partners estratégicos: iCommunity Labs, Blockchain España y líderes del sector. Alianzas que fortalecen la protección de propiedad intelectual y distribución musical con tecnología blockchain.',
    keywords: 'partners musicdibs, alianzas estratégicas música, iCommunity Labs, Blockchain España, colaboraciones industria musical, partners tecnología blockchain, alianzas distribución musical, partners protección intelectual, ecosistema musicdibs, partners web3 música, socios estratégicos, alianzas tecnológicas música',
    authors: [{ name: 'Musicdibs' }],
    creator: 'Musicdibs',
    publisher: 'Musicdibs',
    category: 'Business Partnerships',
    classification: 'Strategic Alliances',
    openGraph: {
        title: 'Partners y Alianzas Estratégicas - Musicdibs',
        description: 'Conoce nuestros partners estratégicos en tecnología blockchain, distribución musical y protección de propiedad intelectual. Únete a nuestra red de colaboración.',
        type: 'website',
        url: '/partners',
        siteName: 'Musicdibs',
        locale: 'es_ES',
        images: [
            {
                url: '/assets/images/og-partners.png',
                width: 1200,
                height: 630,
                alt: 'Musicdibs Partners - Alianzas Estratégicas en la Industria Musical con Tecnología Blockchain',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Partners Musicdibs - Alianzas Estratégicas',
        description: 'Conoce nuestros partners en blockchain, distribución musical y protección intelectual. Colaboraciones que impulsan la industria.',
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
    },
    other: {
        'partnership-type': 'strategic-alliances',
        'industry': 'music-technology',
        'collaboration-model': 'B2B',
    }
};

// Schema.org para Partnership
const partnershipSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'Musicdibs Partners',
    'description': 'Red de alianzas estratégicas de Musicdibs en tecnología blockchain, distribución musical y protección de propiedad intelectual',
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
            'description': 'Plataforma de blockchain y tecnología para la protección de activos digitales'
        },
        {
            '@type': 'Organization', 
            'name': 'Blockchain España',
            'url': 'https://blockchainespana.io',
            'description': 'Asociación líder en blockchain y tecnologías descentralizadas en España'
        }
        // Agregar más partners según sea necesario
    ],
    'foundingDate': '2023',
    'numberOfEmployees': {
        '@type': 'QuantitativeValue',
        'value': '50+'
    }
};

// Schema.org adicional para HowTo (convertirse en partner)
const becomePartnerSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    'name': 'Cómo Convertirse en Partner de Musicdibs',
    'description': 'Guía paso a paso para establecer una alianza estratégica con Musicdibs',
    'image': 'https://musicdibs.com/assets/images/become-partner.jpg',
    'estimatedCost': {
        '@type': 'MonetaryAmount',
        'currency': 'EUR',
        'value': '0'
    },
    'supply': {
        '@type': 'HowToSupply',
        'name': 'Propuesta de colaboración'
    },
    'step': [
        {
            '@type': 'HowToStep',
            'name': 'Evaluar sinergias',
            'text': 'Analiza cómo tu organización puede complementar los servicios de Musicdibs en la industria musical',
            'image': 'https://musicdibs.com/assets/images/step1-partners.jpg',
            'url': 'https://musicdibs.com/partners#evaluate'
        },
        {
            '@type': 'HowToStep',
            'name': 'Contactar al equipo',
            'text': 'Envía tu propuesta de colaboración a través del formulario de partners',
            'image': 'https://musicdibs.com/assets/images/step2-partners.jpg',
            'url': 'https://musicdibs.com/partners#contact'
        },
        {
            '@type': 'HowToStep',
            'name': 'Reunión estratégica',
            'text': 'Coordina una reunión con nuestro equipo de alianzas para discutir oportunidades',
            'image': 'https://musicdibs.com/assets/images/step3-partners.jpg',
            'url': 'https://musicdibs.com/partners#meeting'
        },
        {
            '@type': 'HowToStep',
            'name': 'Firma de acuerdo',
            'text': 'Establece los términos de la colaboración y firma el acuerdo de partnership',
            'image': 'https://musicdibs.com/assets/images/step4-partners.jpg',
            'url': 'https://musicdibs.com/partners#agreement'
        }
    ]
};

export default function Partners() {
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