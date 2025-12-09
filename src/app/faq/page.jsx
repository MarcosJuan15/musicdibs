import FAQHero from '@/components/faq/FAQHero';
import FAQAccordion from '@/components/faq/FAQAccordion';
import FAQContact from '@/components/faq/FAQContact';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';

export const metadata = {
    metadataBase: new URL('https://musicdibs.com'),
    title: 'Preguntas Frecuentes Musicdibs | FAQ Registro Musical y Blockchain 2024',
    description: '✅ 20+ Preguntas Frecuentes resueltas sobre registro musical, protección con blockchain, distribución y derechos de autor. Respuestas expertas de Musicdibs.',
    keywords: 'faq musicdibs, preguntas frecuentes registro musical, música blockchain, derechos autor canciones, distribución musical, protección obras, registro canciones, musicdibs preguntas, duda registro música',
    authors: [{ name: 'Musicdibs' }],
    creator: 'Musicdibs',
    publisher: 'Musicdibs',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        title: 'FAQ Musicdibs - Preguntas Frecuentes Registro Musical con Blockchain',
        description: 'Respuestas a 20+ preguntas comunes sobre registro musical, protección con blockchain, distribución y derechos de autor en Musicdibs',
        type: 'website',
        url: '/faq',
        siteName: 'Musicdibs',
        locale: 'es_ES',
        images: [
            {
                url: '/assets/images/og.png',
                width: 1200,
                height: 630,
                alt: 'Musicdibs FAQ - Preguntas Frecuentes sobre Registro Musical y Protección con Blockchain',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'FAQ Musicdibs - Preguntas Frecuentes Registro Musical',
        description: '20+ preguntas resueltas sobre registro musical, blockchain y derechos de autor en Musicdibs',
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
        canonical: '/faq',
    },
};

export default function FAQ() {
    return (
        <>
            <Navbar />
            <FAQHero />
            <FAQAccordion />
            <FAQContact />
            <Footer />
        </>
    );
}