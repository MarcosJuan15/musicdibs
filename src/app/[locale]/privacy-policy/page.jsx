import PrivacyPolicyContent from '@/components/legal/PrivacyPolicyContent';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';

export const metadata = {
    metadataBase: new URL('https://musicdibs.com'),
    title: 'Política de Privacidad Musicdibs | Protección de Datos y RGPD 2022',
    description: '🔒 Política de Privacidad de Musicdibs actualizada el 28 de febrero de 2022. Conoce cómo protegemos tus datos personales, derechos RGPD y medidas de seguridad en el registro y distribución musical.',
    keywords: 'política de privacidad musicdibs, protección datos musicales, RGPD musicdibs, datos personales artistas, privacidad registro musical, LOPDGDD, derechos ARCO, seguridad datos música, tratamiento datos personales, confidencialidad musicdibs',
    authors: [{ name: 'Musicdibs' }],
    creator: 'Musicdibs',
    publisher: 'Musicdibs',
    category: 'Legal',
    classification: 'Privacy Policy',
    openGraph: {
        title: 'Política de Privacidad - Musicdibs Plataforma Musical',
        description: 'Política de Privacidad de Musicdibs actualizada el 28 de febrero de 2022. Protección de datos RGPD para artistas y usuarios.',
        type: 'article',
        url: '/privacy-policy',
        siteName: 'Musicdibs',
        locale: 'es_ES',
        publishedTime: '2022-02-28T00:00:00Z',
        modifiedTime: '2022-02-28T00:00:00Z',
        images: [
            {
                url: '/assets/images/og.png',
                width: 1200,
                height: 630,
                alt: 'Musicdibs Política de Privacidad - Protección de Datos RGPD para Artistas Musicales',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Política de Privacidad - Musicdibs',
        description: 'Política de Privacidad de Musicdibs actualizada el 28 de febrero de 2022. RGPD y protección de datos.',
        images: ['/assets/images/og.png'],
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
        canonical: '/privacy-policy',
        languages: {
            'es-ES': '/privacy-policy',
            'en-US': '/en/privacy-policy',
        },
    },
    other: {
        'audience': 'all',
        'rating': 'safe for kids',
        'revisit-after': '30 days',
    }
};

// Schema.org para Privacy Policy
const privacyPolicySchema = {
    '@context': 'https://schema.org',
    '@type': 'PrivacyPolicy',
    'name': 'Política de Privacidad - Musicdibs',
    'description': 'Política de protección de datos personales y privacidad para usuarios de la plataforma musical Musicdibs',
    'publisher': {
        '@type': 'Organization',
        'name': 'Musicdibs',
        'url': 'https://musicdibs.com'
    },
    'datePublished': '2022-02-28',
    'dateModified': '2022-02-28',
    'isAccessibleForFree': true,
    'license': 'https://musicdibs.com/terms-and-conditions',
    'keywords': 'privacidad, protección datos, RGPD, LOPDGDD, datos personales, musicdibs'
};

export default function PrivacyPolicy() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(privacyPolicySchema) }}
            />
            <Navbar />
            <PrivacyPolicyContent />
            <Footer />
        </>
    );
}