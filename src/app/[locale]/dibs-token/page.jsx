import DibsTokenHero from '@/components/dibs-token/DibsTokenHero';
import DibsTokenWhatIs from '@/components/dibs-token/DibsTokenWhatIs';
import DibsTokenIA from '@/components/dibs-token/DibsTokenIA';
import DibsTokenDePIN from '@/components/dibs-token/DibsTokenDePIN';
import DibsTokenAcceleration from '@/components/dibs-token/DibsTokenAcceleration';
import DibsTokenPartners from '@/components/dibs-token/DibsTokenPartners';
import DibsTokenRoadmap from '@/components/dibs-token/DibsTokenRoadmap';
import DibsTokenStatistics from '@/components/dibs-token/DibsTokenStatistics';
import DibsTokenAbout from '@/components/dibs-token/DibsTokenAbout';
import DibsTokenTokenomics from '@/components/dibs-token/DibsTokenTokenomics';
import DibsTokenTeam from '@/components/dibs-token/DibsTokenTeam';
import DibsTokenCTA from '@/components/dibs-token/DibsTokenCTA';
import DibsTokenTestimonials from '@/components/dibs-token/DibsTokenTestimonials';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';

export const metadata = {
    metadataBase: new URL('https://musicdibs.com'),
    title: 'Token DIBS Musicdibs | Cryptomoneda Web3 para Protección Musical 2024',
    description: '🚀 Token DIBS: Revoluciona la protección musical con blockchain. 32% APR en staking, tecnología DePIN + IA, y tokenomics sólidas. Únete a la economía musical Web3 con Musicdibs.',
    keywords: 'token DIBS musicdibs, cryptocurrency música, blockchain protección musical, web3 artistas, staking 32% APR, tokenomics DIBS, Solana token, DePIN música, IA musical, rewards token, comprar DIBS, inversión música, crypto recompensas, música web3, nft música token',
    authors: [{ name: 'Musicdibs' }],
    creator: 'Musicdibs',
    publisher: 'Musicdibs',
    category: 'Cryptocurrency',
    classification: 'Token Musical Utility',
    openGraph: {
        title: 'Token DIBS Musicdibs - Cryptomoneda Web3 para Protección Musical',
        description: 'Token DIBS: Protección musical con blockchain, 32% APR en staking, tecnología DePIN + IA. Únete a la revolución Web3 de la música.',
        type: 'website',
        url: '/dibs-token',
        siteName: 'Musicdibs',
        locale: 'es_ES',
        images: [
            {
                url: '/assets/images/og-dibs-token.jpg',
                width: 1200,
                height: 630,
                alt: 'Token DIBS Musicdibs - Cryptomoneda Web3 para la Protección Musical con Blockchain',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Token DIBS Musicdibs - Cryptomoneda Musical Web3',
        description: '32% APR en staking, protección musical con blockchain y tecnología DePIN + IA. Revoluciona la música con Token DIBS.',
        images: ['/assets/images/og-dibs-token.jpg'],
        creator: '@musicdibs',
        site: '@musicdibs',
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
        canonical: '/dibs-token',
    },
    other: {
        'coin': 'DIBS',
        'blockchain': 'Solana',
        'token-type': 'utility',
        'marketcap': 'growing',
    }
};

// Schema.org para Cryptocurrency
const cryptocurrencySchema = {
    '@context': 'https://schema.org',
    '@type': 'Cryptocurrency',
    'name': 'DIBS Token',
    'description': 'Token de utilidad para la protección musical en blockchain, con staking rewards y tecnología DePIN + IA',
    'currency': 'DIBS',
    'url': 'https://musicdibs.com/dibs-token',
    'image': 'https://musicdibs.com/assets/images/og-dibs-token.jpg',
    'publisher': {
        '@type': 'Organization',
        'name': 'Musicdibs',
        'url': 'https://musicdibs.com'
    },
    'founder': {
        '@type': 'Organization',
        'name': 'Musicdibs'
    },
    'foundingDate': '2023',
    'operatingSystem': 'Solana Blockchain',
    'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': '4.8',
        'ratingCount': '1500'
    },
    'offers': {
        '@type': 'Offer',
        'category': 'Cryptocurrency',
        'availability': 'OnlineOnly'
    }
};

// Schema.org adicional para HowTo (staking)
const stakingHowToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    'name': 'Cómo hacer Staking de Token DIBS para obtener 32% APR',
    'description': 'Guía paso a paso para staking de Token DIBS y obtener recompensas del 32% APR',
    'image': 'https://musicdibs.com/assets/images/staking-dibs.jpg',
    'estimatedCost': {
        '@type': 'MonetaryAmount',
        'currency': 'USD',
        'value': '0'
    },
    'supply': {
        '@type': 'HowToSupply',
        'name': 'Tokens DIBS'
    },
    'tool': {
        '@type': 'HowToTool',
        'name': 'Wallet compatible con Solana'
    },
    'step': [
        {
            '@type': 'HowToStep',
            'name': 'Adquirir Tokens DIBS',
            'text': 'Compra tokens DIBS en exchanges listados o mediante la plataforma Musicdibs',
            'image': 'https://musicdibs.com/assets/images/step1.jpg',
            'url': 'https://musicdibs.com/dibs-token#comprar'
        },
        {
            '@type': 'HowToStep',
            'name': 'Conectar Wallet',
            'text': 'Conecta tu wallet compatible con Solana a la plataforma Musicdibs',
            'image': 'https://musicdibs.com/assets/images/step2.jpg',
            'url': 'https://musicdibs.com/dibs-token#staking'
        },
        {
            '@type': 'HowToStep',
            'name': 'Seleccionar Staking',
            'text': 'Navega a la sección de staking y selecciona la cantidad de tokens a stakear',
            'image': 'https://musicdibs.com/assets/images/step3.jpg',
            'url': 'https://musicdibs.com/dibs-token#staking'
        },
        {
            '@type': 'HowToStep',
            'name': 'Confirmar y Ganar',
            'text': 'Confirma la transacción y comienza a ganar recompensas del 32% APR',
            'image': 'https://musicdibs.com/assets/images/step4.jpg',
            'url': 'https://musicdibs.com/dibs-token#rewards'
        }
    ]
};

export default function DibsTokenPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(cryptocurrencySchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(stakingHowToSchema) }}
            />
            <Navbar />
            <DibsTokenHero />
            <DibsTokenWhatIs />
            <DibsTokenIA />
            <DibsTokenDePIN />
            <DibsTokenTestimonials />
            <DibsTokenAcceleration />
            <DibsTokenPartners />
            <DibsTokenRoadmap />
            <DibsTokenStatistics />
            <DibsTokenAbout />
            <DibsTokenTokenomics />
            <DibsTokenTeam />
            <DibsTokenCTA />
            <Footer />
        </>
    );
}