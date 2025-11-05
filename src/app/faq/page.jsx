import FAQHero from '@/components/faq/FAQHero';
import FAQAccordion from '@/components/faq/FAQAccordion';
import FAQContact from '@/components/faq/FAQContact';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';

export const metadata = {
    metadataBase: new URL('https://musicdibs.com'),
    title: 'FAQ - MusicDIBS | Preguntas Frecuentes sobre Registro Musical',
    description: 'Encuentra respuestas a las dudas más comunes sobre registro musical, distribución, protección con blockchain y propiedad intelectual. 20+ preguntas resueltas.',
    keywords: 'faq musicdibs, preguntas frecuentes música, registro musical, distribución, propiedad intelectual, blockchain, derechos autor',
    openGraph: {
        title: 'FAQ - MusicDIBS | Preguntas Frecuentes',
        description: 'Respuestas a las dudas más comunes sobre nuestros servicios de registro y protección musical.',
        type: 'website',
        url: '/faq',
        images: [
            {
                url: '/assets/images/og-faq.png', // ← Esta imagen YA la tienes
                width: 1200,
                height: 630,
                alt: 'MusicDIBS - Preguntas Frecuentes',
            },
        ],
    },
    robots: 'index, follow',
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