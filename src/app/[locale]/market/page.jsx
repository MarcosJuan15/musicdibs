import MarketHero from '@/components/market/MarketHero';
import MarketContent from '@/components/market/MarketContent';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';

export const metadata = {
    metadataBase: new URL('https://musicdibs.com'),
    title: 'Market Musicdibs | Compra Música y Apoya Directamente a los Artistas',
    description: '🎵 Compra música directamente a los artistas en el Market Musicdibs. Los creadores reciben el 100% de las ventas. Descubre canciones exclusivas, apoya el talento y construye tu colección musical única.',
    keywords: 'market musicdibs, comprar música online, comprar canciones artistas, marketplace musical, apoyar artistas directamente, compra música digital, venta canciones, colección música, artistas independientes, música exclusiva, comprar derechos música, plataforma venta música',
    authors: [{ name: 'Musicdibs' }],
    creator: 'Musicdibs',
    publisher: 'Musicdibs',
    category: 'Digital Marketplace',
    classification: 'Music Market Platform',
    openGraph: {
        title: 'Market Musicdibs - Compra Música Directamente a los Artistas',
        description: 'Mercado musical donde compras canciones y los artistas reciben el 100% de las ventas. Apoya el talento y descubre música exclusiva.',
        type: 'website',
        url: '/market',
        siteName: 'Musicdibs',
        locale: 'es_ES',
        images: [
            {
                url: '/assets/images/og-market.png',
                width: 1200,
                height: 630,
                alt: 'Market Musicdibs - Compra y vende música directamente con artistas. 100% para el creador.',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Market Musicdibs - Compra Música Directa Artistas',
        description: 'Mercado musical donde los artistas reciben 100% de las ventas. Compra canciones y apoya el talento.',
        images: ['/assets/images/og-market.png'],
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
        canonical: '/market',
    },
    other: {
        'market-type': 'digital-music',
        'artist-payout': '100%',
        'transaction-type': 'direct-to-artist',
    }
};

// Schema.org para Marketplace
const marketplaceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    'name': 'Market Musicdibs - Mercado Musical Digital',
    'description': 'Plataforma de compra y venta de música donde los artistas reciben el 100% de las ventas directamente',
    'url': 'https://musicdibs.com/market',
    'image': 'https://musicdibs.com/assets/images/og-market.png',
    'offers': {
        '@type': 'Offer',
        'category': 'DigitalMusic',
        'availability': 'https://schema.org/InStock',
        'price': '0.99',
        'priceCurrency': 'EUR',
        'seller': {
            '@type': 'Organization',
            'name': 'Musicdibs'
        }
    },
    'provider': {
        '@type': 'Organization',
        'name': 'Musicdibs',
        'url': 'https://musicdibs.com'
    }
};

// Schema.org adicional para HowTo (comprar música)
const howToBuySchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    'name': 'Cómo comprar música en el Market Musicdibs',
    'description': 'Guía paso a paso para comprar canciones y apoyar directamente a los artistas',
    'image': 'https://musicdibs.com/assets/images/how-to-buy-music.jpg',
    'estimatedCost': {
        '@type': 'MonetaryAmount',
        'currency': 'EUR',
        'value': '0.99'
    },
    'supply': {
        '@type': 'HowToSupply',
        'name': 'Saldo en cuenta o tarjeta de crédito'
    },
    'tool': {
        '@type': 'HowToTool',
        'name': 'Cuenta Musicdibs'
    },
    'step': [
        {
            '@type': 'HowToStep',
            'name': 'Explora el catálogo',
            'text': 'Navega por las canciones disponibles en el Market Musicdibs',
            'image': 'https://musicdibs.com/assets/images/step1-market.jpg',
            'url': 'https://musicdibs.com/market#explore'
        },
        {
            '@type': 'HowToStep',
            'name': 'Selecciona tu canción',
            'text': 'Elige la canción que quieres comprar y revisa los detalles',
            'image': 'https://musicdibs.com/assets/images/step2-market.jpg',
            'url': 'https://musicdibs.com/market#select'
        },
        {
            '@type': 'HowToStep',
            'name': 'Realiza el pago',
            'text': 'Completa la compra con saldo de cuenta o tarjeta de crédito',
            'image': 'https://musicdibs.com/assets/images/step3-market.jpg',
            'url': 'https://musicdibs.com/market#payment'
        },
        {
            '@type': 'HowToStep',
            'name': 'Disfruta y apoya',
            'text': 'Recibe tu canción y el artista obtiene el 100% de la venta',
            'image': 'https://musicdibs.com/assets/images/step4-market.jpg',
            'url': 'https://musicdibs.com/market#support'
        }
    ]
};

export default function Market() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(marketplaceSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(howToBuySchema) }}
            />
            <Navbar />
            <MarketHero />
            <MarketContent />
            <Footer />
        </>
    )
}