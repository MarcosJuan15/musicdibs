import VerificationHero from '@/components/verification/VerificationHero';
import VerificationUpload from '@/components/verification/VerificationUpload';
import VerificationInfo from '@/components/verification/VerificationInfo';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';

export const metadata = {
    metadataBase: new URL('https://musicdibs.com'),
    title: 'Verificador de Obras Musicdibs | Comprueba Registro Musical Blockchain 2024',
    description: '🔍 Verificador oficial Musicdibs - Comprueba el registro de tus canciones en blockchain. Verificación instantánea de autenticidad, derechos de autor y protección legal de obras musicales.',
    keywords: 'verificador obras musicdibs, comprobar registro musical, verificar canciones blockchain, protección intelectual música, derechos autor verificación, autenticidad obras musicales, comprobación registro musicdibs, verificación blockchain música, validez legal registro, herramienta verificación musical',
    authors: [{ name: 'Musicdibs' }],
    creator: 'Musicdibs',
    publisher: 'Musicdibs',
    category: 'Verification Tool',
    classification: 'Blockchain Verification Service',
    openGraph: {
        title: 'Verificador de Obras - Musicdibs | Comprobación de Registro Musical',
        description: 'Verifica si una obra musical está registrada en Musicdibs con tecnología blockchain. Comprobación instantánea de autenticidad y derechos.',
        type: 'website',
        url: '/verification',
        siteName: 'Musicdibs',
        locale: 'es_ES',
        images: [
            {
                url: '/assets/images/og-verification.png',
                width: 1200,
                height: 630,
                alt: 'Musicdibs Verificador de Obras - Comprueba el Registro de tus Canciones en Blockchain',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Verificador de Obras - Musicdibs',
        description: 'Comprueba el registro de tus canciones en blockchain. Verificación instantánea de autenticidad.',
        images: ['/assets/images/og-verification.png'],
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
        canonical: '/verification',
    },
    other: {
        'tool-type': 'blockchain-verification',
        'verification-method': 'file-upload',
        'result-type': 'instant',
    }
};

// Schema.org para Verification Service
const verificationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Verificador de Obras Musicales - Musicdibs',
    'description': 'Servicio de verificación de registro de obras musicales mediante tecnología blockchain, proporcionando comprobación de autenticidad y derechos de autor',
    'provider': {
        '@type': 'Organization',
        'name': 'Musicdibs',
        'url': 'https://musicdibs.com'
    },
    'areaServed': 'Worldwide',
    'serviceType': 'Blockchain Verification',
    'availableChannel': {
        '@type': 'ServiceChannel',
        'serviceUrl': 'https://musicdibs.com/verification'
    }
};

// Schema.org adicional para HowTo (cómo verificar)
const howToVerifySchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    'name': 'Cómo Verificar una Obra Musical en Musicdibs',
    'description': 'Guía paso a paso para verificar el registro y autenticidad de obras musicales mediante blockchain',
    'image': 'https://musicdibs.com/assets/images/how-to-verify.jpg',
    'estimatedCost': {
        '@type': 'MonetaryAmount',
        'currency': 'EUR',
        'value': '0'
    },
    'supply': {
        '@type': 'HowToSupply',
        'name': 'Archivo de audio o documento de la obra'
    },
    'tool': {
        '@type': 'HowToTool',
        'name': 'Verificador Musicdibs'
    },
    'step': [
        {
            '@type': 'HowToStep',
            'name': 'Sube tu archivo',
            'text': 'Carga el archivo de audio o documento de la obra que deseas verificar',
            'image': 'https://musicdibs.com/assets/images/step1-verify.jpg',
            'url': 'https://musicdibs.com/verification#upload'
        },
        {
            '@type': 'HowToStep',
            'name': 'Procesamiento blockchain',
            'text': 'Nuestro sistema genera el hash y lo compara con los registros en blockchain',
            'image': 'https://musicdibs.com/assets/images/step2-verify.jpg',
            'url': 'https://musicdibs.com/verification#processing'
        },
        {
            '@type': 'HowToStep',
            'name': 'Resultado instantáneo',
            'text': 'Recibe el resultado de verificación con detalles del registro y autenticidad',
            'image': 'https://musicdibs.com/assets/images/step3-verify.jpg',
            'url': 'https://musicdibs.com/verification#results'
        },
        {
            '@type': 'HowToStep',
            'name': 'Certificado de verificación',
            'text': 'Descarga el certificado de verificación con validez legal',
            'image': 'https://musicdibs.com/assets/images/step4-verify.jpg',
            'url': 'https://musicdibs.com/verification#certificate'
        }
    ]
};

export default function Verification() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(verificationSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(howToVerifySchema) }}
            />
            <Navbar />
            <VerificationHero />
            <VerificationUpload />
            <VerificationInfo />
            <Footer />
        </>
    );
}