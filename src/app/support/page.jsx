import SupportHero from '@/components/support/SupportHero';
import SupportChannels from '@/components/support/SupportChannels';
import SupportTicket from '@/components/support/SupportTicket';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';

export const metadata = {
    metadataBase: new URL('https://musicdibs.com'),
    title: 'Soporte Musicdibs | Centro de Ayuda 24/7 - Registro y Distribución Musical 2024',
    description: '🎵 Soporte técnico especializado de Musicdibs. Ayuda inmediata con registro musical, distribución, blockchain y derechos de autor. Resolución 24/7 por expertos en música y tecnología.',
    keywords: 'soporte musicdibs, ayuda registro musical, contacto musicdibs, tickets soporte, asistencia técnica distribución, soporte blockchain, derechos autor música, ayuda artistas, centro ayuda musicdibs, soporte técnico musical, consultas registro, problemas distribución, ayuda plataforma musicdibs',
    authors: [{ name: 'Musicdibs' }],
    creator: 'Musicdibs',
    publisher: 'Musicdibs',
    category: 'Customer Support',
    classification: 'Technical Support Service',
    openGraph: {
        title: 'Soporte Musicdibs - Centro de Ayuda 24/7 para Artistas Musicales',
        description: 'Soporte especializado en registro musical, distribución y protección de derechos con blockchain. Ayuda inmediata 24/7 por expertos.',
        type: 'website',
        url: '/support',
        siteName: 'Musicdibs',
        locale: 'es_ES',
        images: [
            {
                url: '/assets/images/og-support.png',
                width: 1200,
                height: 630,
                alt: 'Musicdibs Soporte - Centro de Ayuda 24/7 para Artistas Musicales - Registro y Distribución',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Soporte Musicdibs - Centro de Ayuda 24/7',
        description: 'Ayuda especializada en registro musical, distribución y blockchain para artistas. Soporte 24/7.',
        images: ['/assets/images/og-support.png'],
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
        canonical: '/support',
    },
    other: {
        'support-type': 'technical-music',
        'availability': '24/7',
        'response-time': '24h',
    }
};

// Schema.org para Customer Service
const customerServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Soporte Técnico Musicdibs',
    'description': 'Servicio de soporte y atención al cliente especializado en registro musical, distribución digital y protección de derechos con blockchain',
    'provider': {
        '@type': 'Organization',
        'name': 'Musicdibs',
        'url': 'https://musicdibs.com'
    },
    'areaServed': 'Global',
    'serviceType': 'Technical Support',
    'availableChannel': {
        '@type': 'ServiceChannel',
        'serviceUrl': 'https://musicdibs.com/support',
        'servicePhone': '+34-900-123-456',
        'serviceEmail': 'info@musicdibs.com',
        'serviceSmsNumber': '+34-600-123-456'
    },
    'hoursAvailable': {
        '@type': 'OpeningHoursSpecification',
        'opens': '00:00',
        'closes': '23:59',
        'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    }
};

export default function Support() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(customerServiceSchema) }}
            />
            <Navbar />
            <SupportHero />
            <SupportChannels />
            <SupportTicket />
            <Footer />
        </>
    );
}