import { DistributionContent } from '@/components/distribution/DistributionContent';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';

export const metadata = {
    metadataBase: new URL('https://musicdibs.com'),
    title: 'Distribución Musical Profesional | Musicdibs - +220 Plataformas Digitales 2024',
    description: '🚀 Distribuye tu música en Spotify, Apple Music, TikTok, YouTube Music y +220 plataformas. Mantén 100% de regalías, analytics en tiempo real y lanzamientos globales ilimitados con Musicdibs.',
    keywords: 'distribución musical musicdibs, distribuir música online, spotify artist, apple music distribución, tiktok música, youtube music, amazon music, deezer, regalías 100%, plataformas streaming, distribución digital profesional, lanzar música online, distribuidor musical, musicdibs distribución, analytics música',
    authors: [{ name: 'Musicdibs' }],
    creator: 'Musicdibs',
    publisher: 'Musicdibs',
    category: 'Music Distribution',
    classification: 'Digital Music Service',
    openGraph: {
        title: 'Distribución Musical Profesional - Musicdibs +220 Plataformas',
        description: 'Distribuye tu música en Spotify, Apple Music, TikTok y +220 plataformas. 100% regalías, analytics avanzados y lanzamientos ilimitados.',
        type: 'website',
        url: '/distribution',
        siteName: 'Musicdibs',
        locale: 'es_ES',
        images: [
            {
                url: '/assets/images/og-distribution.png',
                width: 1200,
                height: 630,
                alt: 'Musicdibs Distribución Musical - Lleva tu música a +220 plataformas digitales worldwide',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Distribución Musical - Musicdibs +220 Plataformas',
        description: 'Distribuye tu música en Spotify, Apple Music, TikTok manteniendo 100% regalías. Lanzamientos globales con Musicdibs.',
        images: ['/assets/images/og-distribution.png'],
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
        canonical: '/distribution',
    },
    other: {
        'service-type': 'music-distribution',
        'platform-count': '220+',
        'royalties': '100%',
        'release-limit': 'unlimited',
    }
};

// Schema.org para Music Distribution Service
const distributionSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Distribución Musical Profesional - Musicdibs',
    'description': 'Servicio de distribución musical digital a más de 220 plataformas incluyendo Spotify, Apple Music, TikTok y YouTube Music',
    'provider': {
        '@type': 'Organization',
        'name': 'Musicdibs',
        'url': 'https://musicdibs.com'
    },
    'areaServed': 'Worldwide',
    'serviceType': 'Music Distribution',
    'availableChannel': {
        '@type': 'ServiceChannel',
        'serviceUrl': 'https://dist.musicdibs.com/',
        'servicePhone': '+34-900-123-456'
    },
    'hasOfferCatalog': {
        '@type': 'OfferCatalog',
        'name': 'Planes de Distribución',
        'itemListElement': [
            {
                '@type': 'Offer',
                'itemOffered': {
                    '@type': 'Service',
                    'name': 'Distribución Básica',
                    'description': 'Distribución a +220 plataformas manteniendo 100% regalías'
                }
            }
        ]
    }
};

// Schema.org adicional para Platform List
const platformListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'name': 'Plataformas de Streaming Disponibles - Musicdibs',
    'description': 'Lista de más de 220 plataformas digitales donde distribuir tu música',
    'numberOfItems': 220,
    'itemListElement': [
        {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Spotify'
        },
        {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Apple Music'
        },
        {
            '@type': 'ListItem',
            'position': 3,
            'name': 'TikTok'
        },
        {
            '@type': 'ListItem',
            'position': 4,
            'name': 'YouTube Music'
        },
        {
            '@type': 'ListItem',
            'position': 5,
            'name': 'Amazon Music'
        },
        {
            '@type': 'ListItem',
            'position': 6,
            'name': 'Deezer'
        }
        // Puedes agregar más plataformas relevantes
    ]
};

export default function Distribution() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(distributionSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(platformListSchema) }}
            />
            <Navbar />
            <DistributionContent />
            <Footer />
        </>
    );
}