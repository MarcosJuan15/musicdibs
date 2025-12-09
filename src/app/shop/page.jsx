import ShopHero from '@/components/shop/ShopHero';
import ShopContent from '@/components/shop/ShopContent';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';

export const metadata = {
    metadataBase: new URL('https://musicdibs.com'),
    title: 'Tienda Musicdibs | Compra Tokens DIBS para Registro Musical 2024',
    description: '🛒 Compra tokens DIBS directamente - Registra y protege tu música en blockchain. Bonos exclusivos hasta 50%, precios con IVA incluido y entrega instantánea. Adquiere tu paquete de tokens DIBS ahora.',
    keywords: 'comprar tokens DIBS musicdibs, tienda tokens musicales, comprar DIBS tokens, registro musical blockchain, tokens protección música, crypto para artistas, compra directa DIBS, bonus tokens música, paquetes DIBS, precios tokens musicales, shop musicdibs, adquisición tokens, blockchain música español',
    authors: [{ name: 'Musicdibs' }],
    creator: 'Musicdibs',
    publisher: 'Musicdibs',
    category: 'Cryptocurrency Store',
    classification: 'Token Purchase Platform',
    openGraph: {
        title: 'Tienda Musicdibs - Compra Tokens DIBS para Registro Musical',
        description: 'Compra tokens DIBS directamente con bonos exclusivos hasta 50%. Registra y protege tu música en blockchain con precios transparentes.',
        type: 'website',
        url: '/shop',
        siteName: 'Musicdibs',
        locale: 'es_ES',
        images: [
            {
                url: '/assets/images/og-shop.png',
                width: 1200,
                height: 630,
                alt: 'Musicdibs Shop - Compra Tokens DIBS con Bonos Exclusivos para Registro Musical en Blockchain',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Tienda Musicdibs - Compra Tokens DIBS',
        description: 'Compra tokens DIBS con bonos hasta 50% para registrar tu música en blockchain. Precios con IVA incluido.',
        images: ['/assets/images/og-shop.png'],
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
        canonical: '/shop',
    },
    other: {
        'product-type': 'cryptocurrency-tokens',
        'payment-methods': 'card,transfer,crypto',
        'delivery': 'instant',
        'tax-included': 'yes',
    }
};

// Schema.org para Online Store
const onlineStoreSchema = {
    '@context': 'https://schema.org',
    '@type': 'Store',
    'name': 'Tienda Musicdibs - Tokens DIBS',
    'description': 'Tienda oficial para la compra de tokens DIBS utilizados para el registro y protección de obras musicales en blockchain',
    'url': 'https://musicdibs.com/shop',
    'image': 'https://musicdibs.com/assets/images/og-shop.png',
    'telephone': '+34-900-123-456',
    'email': 'info@musicdibs.com',
    'address': {
        '@type': 'PostalAddress',
        'addressCountry': 'ES'
    },
    'openingHours': '24/7',
    'paymentAccepted': 'Credit Card, Bank Transfer, Cryptocurrency',
    'currenciesAccepted': 'EUR, USD, Crypto',
    'priceRange': '€€'
};

// Schema.org para Product Offer
const tokenProductSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    'name': 'Tokens DIBS - Paquete Estándar',
    'description': 'Paquete de tokens DIBS para registro de obras musicales en blockchain con bonos exclusivos',
    'brand': {
        '@type': 'Brand',
        'name': 'Musicdibs'
    },
    'offers': {
        '@type': 'Offer',
        'url': 'https://musicdibs.com/shop',
        'priceCurrency': 'EUR',
        'price': '50',
        'availability': 'https://schema.org/InStock',
        'itemCondition': 'https://schema.org/NewCondition',
        'hasMerchantReturnPolicy': {
            '@type': 'MerchantReturnPolicy',
            'returnPolicyCategory': 'https://schema.org/NonRefundable'
        }
    }
};

// Schema.org adicional para HowTo (comprar tokens)
const howToBuySchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    'name': 'Cómo Comprar Tokens DIBS en Musicdibs',
    'description': 'Guía paso a paso para adquirir tokens DIBS y comenzar a registrar tu música en blockchain',
    'image': 'https://musicdibs.com/assets/images/how-to-buy-dibs.jpg',
    'estimatedCost': {
        '@type': 'MonetaryAmount',
        'currency': 'EUR',
        'value': '50'
    },
    'supply': {
        '@type': 'HowToSupply',
        'name': 'Método de pago (tarjeta, transferencia, crypto)'
    },
    'tool': {
        '@type': 'HowToTool',
        'name': 'Cuenta Musicdibs verificada'
    },
    'step': [
        {
            '@type': 'HowToStep',
            'name': 'Selecciona tu paquete',
            'text': 'Elige el paquete de tokens DIBS que mejor se adapte a tus necesidades de registro musical',
            'image': 'https://musicdibs.com/assets/images/step1-shop.jpg',
            'url': 'https://musicdibs.com/shop#select'
        },
        {
            '@type': 'HowToStep',
            'name': 'Aprovecha los bonos',
            'text': 'Recibe bonos exclusivos hasta 50% según el paquete seleccionado',
            'image': 'https://musicdibs.com/assets/images/step2-shop.jpg',
            'url': 'https://musicdibs.com/shop#bonus'
        },
        {
            '@type': 'HowToStep',
            'name': 'Completa el pago',
            'text': 'Realiza el pago seguro con tarjeta, transferencia o criptomonedas. IVA incluido',
            'image': 'https://musicdibs.com/assets/images/step3-shop.jpg',
            'url': 'https://musicdibs.com/shop#payment'
        },
        {
            '@type': 'HowToStep',
            'name': 'Recibe tus tokens',
            'text': 'Obten tus tokens DIBS instantáneamente y comienza a registrar tu música',
            'image': 'https://musicdibs.com/assets/images/step4-shop.jpg',
            'url': 'https://musicdibs.com/shop#delivery'
        }
    ]
};

export default function Shop() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(onlineStoreSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(tokenProductSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(howToBuySchema) }}
            />
            <Navbar />
            <ShopHero />
            <ShopContent />
            <Footer />
        </>
    );
}