import SupportHero from '@/components/support/SupportHero';
import SupportChannels from '@/components/support/SupportChannels';
import SupportTicket from '@/components/support/SupportTicket';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';

export const metadata = {
    title: 'Soporte - MusicDIBS | Centro de Ayuda y Asistencia',
    description: 'Centro de soporte de MusicDIBS. Obtén ayuda personalizada 24/7, contacta con nuestro equipo y resuelve tus dudas sobre distribución musical.',
    keywords: 'soporte musicdibs, ayuda, contacto, tickets soporte, asistencia técnica, distribución musical, FAQ',
    openGraph: {
        title: 'Soporte - MusicDIBS | Centro de Ayuda y Asistencia',
        description: 'Centro de soporte de MusicDIBS. Obtén ayuda personalizada y resuelve tus dudas.',
        type: 'website',
    },
    robots: 'index, follow',
};

export default function Support() {
    return (
        <>
            <Navbar />
            <SupportHero />
            <SupportChannels />
            <SupportTicket />
            <Footer />
        </>
    );
}