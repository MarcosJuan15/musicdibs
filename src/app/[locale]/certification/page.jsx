import CertificationContent from '@/components/certification/CertificationContent';
import CertificationHero from '@/components/certification/CertificationHero';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';

export const metadata = {
    metadataBase: new URL('https://musicdibs.com'),
    title: 'Certificado de Autenticidad Musical Musicdibs | Registro Blockchain 2024',
    description: '✅ Certificado oficial de autenticidad y registro en blockchain de tu obra musical. Huella digital única, verificación instantánea y protección legal internacional. Descarga tu certificado Musicdibs.',
    keywords: 'certificado musical musicdibs, autenticidad blockchain, registro musical certificado, huella digital música, certificado autenticidad obras, verificación musical online, derechos autor blockchain, certificado registro canciones, musicdibs certificado digital, protección legal música',
    authors: [{ name: 'Musicdibs' }],
    creator: 'Musicdibs',
    publisher: 'Musicdibs',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        title: 'Certificado de Autenticidad Musical - Registro Blockchain Musicdibs',
        description: 'Certificado digital oficial con tecnología blockchain para registro y verificación de autenticidad de obras musicales. Protección legal internacional.',
        type: 'website',
        url: '/certification',
        siteName: 'Musicdibs',
        locale: 'es_ES',
        images: [
            {
                url: '/assets/images/og.png',
                width: 1200,
                height: 630,
                alt: 'Musicdibs Certificado de Autenticidad - Registro Blockchain para Obras Musicales',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Certificado de Autenticidad Musical - Musicdibs Blockchain',
        description: 'Registro y verificación de autenticidad en blockchain para tu música. Certificado digital oficial.',
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
        canonical: '/certification',
    },
    other: {
        'application-name': 'Musicdibs Certificates',
        'generator': 'Musicdibs Platform',
    }
};

// Schema.org para Certificate
const certificateSchema = {
    '@context': 'https://schema.org',
    '@type': 'DigitalDocument',
    'name': 'Certificado de Autenticidad Musical Musicdibs',
    'description': 'Certificado digital de registro y autenticidad de obras musicales mediante tecnología blockchain',
    'provider': {
        '@type': 'Organization',
        'name': 'Musicdibs',
        'url': 'https://musicdibs.com'
    },
    'license': 'https://musicdibs.com/terms-and-conditions',
    'fileFormat': 'application/pdf',
    'isAccessibleForFree': true,
    'keywords': 'certificado musical, blockchain, derechos autor, registro obras, autenticidad'
};

export default function Certification() {
    return (
        <>
            <Navbar />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(certificateSchema) }}
            />
            <CertificationHero />
            <CertificationContent />
            <Footer />
        </>
    );
}