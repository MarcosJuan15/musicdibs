import SLAHero from '@/components/legal/SLAHero';
import SLAContent from '@/components/legal/SLAContent';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';

export const metadata = {
    metadataBase: new URL('https://musicdibs.com'),
    title: 'Acuerdo de Nivel de Servicio (SLA) Musicdibs | Garantías de Servicio 2022',
    description: '📋 Acuerdo de Nivel de Servicio (SLA) de Musicdibs actualizado el 28 de febrero de 2022. Conoce nuestras garantías de disponibilidad 99.9%, tiempos de respuesta y compromisos de soporte técnico para el registro y distribución musical.',
    keywords: 'acuerdo nivel servicio musicdibs, SLA musicdibs, disponibilidad plataforma, tiempos respuesta soporte, garantías servicio, uptime 99.9%, soporte técnico musicdibs, compromisos servicio, nivel servicio plataforma musical, disponibilidad registro musical',
    authors: [{ name: 'Musicdibs' }],
    creator: 'Musicdibs',
    publisher: 'Musicdibs',
    category: 'Legal',
    classification: 'Service Level Agreement',
    openGraph: {
        title: 'Acuerdo de Nivel de Servicio (SLA) - Musicdibs',
        description: 'SLA de Musicdibs actualizado el 28 de febrero de 2022. Garantías de disponibilidad, tiempos de respuesta y soporte técnico.',
        type: 'article',
        url: '/sla',
        siteName: 'Musicdibs',
        locale: 'es_ES',
        publishedTime: '2022-02-28T00:00:00Z',
        modifiedTime: '2022-02-28T00:00:00Z',
        images: [
            {
                url: '/assets/images/og.png',
                width: 1200,
                height: 630,
                alt: 'Musicdibs Acuerdo de Nivel de Servicio - Garantías de Disponibilidad y Soporte para Plataforma Musical',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Acuerdo de Nivel de Servicio (SLA) - Musicdibs',
        description: 'SLA de Musicdibs con garantías de disponibilidad 99.9% y compromisos de soporte técnico',
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
        canonical: '/sla',
        languages: {
            'es-ES': '/sla',
            'en-US': '/en/sla',
        },
    },
    other: {
        'audience': 'all',
        'rating': 'safe for kids',
        'revisit-after': '30 days',
    }
};

// Schema.org para Service Level Agreement
const slaSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Acuerdo de Nivel de Servicio - Musicdibs',
    'description': 'Acuerdo de nivel de servicio que establece las garantías de disponibilidad, tiempos de respuesta y compromisos de soporte técnico para la plataforma Musicdibs',
    'provider': {
        '@type': 'Organization',
        'name': 'Musicdibs',
        'url': 'https://musicdibs.com'
    },
    'areaServed': 'Worldwide',
    'serviceType': 'Music Platform Service',
    'serviceLevelAgreement': {
        '@type': 'ServiceLevelAgreement',
        'name': 'SLA Musicdibs',
        'description': 'Acuerdo de nivel de servicio para la plataforma de registro y distribución musical',
        'availability': '99.9%',
        'responseTime': '24 horas',
        'resolutionTime': '48 horas'
    },
    'termsOfService': 'https://musicdibs.com/terms-and-conditions'
};

export default function SLA() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(slaSchema) }}
            />
            <Navbar />
            <SLAHero />
            <SLAContent />
            <Footer />
        </>
    );
}