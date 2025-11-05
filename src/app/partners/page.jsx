import PartnersHero from '@/components/partners/PartnersHero';
import PartnersFeatured from '@/components/partners/PartnersFeatured';
import PartnersWhy from '@/components/partners/PartnersWhy';
import PartnersCTA from '@/components/partners/PartnersCTA';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';

export const metadata = {
    title: 'Partners - MusicDIBS | Alianzas Estratégicas',
    description: 'Conoce nuestros partners estratégicos. Colaboramos con organizaciones líderes para ofrecer soluciones integrales de protección de propiedad intelectual.',
    keywords: 'partners musicdibs, alianzas, colaboraciones, partners estratégicos, protección intelectual, distribución musical',
    openGraph: {
        title: 'Partners - MusicDIBS | Alianzas Estratégicas',
        description: 'Conoce nuestros partners estratégicos y únete a nuestra red.',
        type: 'website',
    },
    robots: 'index, follow',
};

export default function Partners() {
    return (
        <>
            <Navbar />
            <PartnersHero />
            <PartnersFeatured />
            <PartnersWhy />
            <PartnersCTA />
            <Footer />
        </>
    );
}