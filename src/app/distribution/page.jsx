import { DistributionContent } from '@/components/distribution/DistributionContent';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';

export const metadata = {
    metadataBase: new URL('https://musicdibs.com'),
    title: 'Distribución Musical - MusicDIBS | Lleva tu música a +220 plataformas',
    description: 'Distribuye tu música en Spotify, Apple Music, TikTok y +220 plataformas digitales. Mantén el 100% de tus regalías y accede a analytics avanzados.',
    keywords: 'distribución musical, spotify, apple music, tiktok, distribución digital, regalías música, plataformas streaming',
    openGraph: {
        title: 'Distribución Musical - MusicDIBS | +220 Plataformas',
        description: 'Lleva tu música a todas las plataformas digitales manteniendo el 100% de tus regalías.',
        type: 'website',
        url: '/distribution',
        images: [
            {
                url: '/assets/images/og-distribution.png',
                width: 1200,
                height: 630,
                alt: 'MusicDIBS - Distribución Musical',
            },
        ],
    },
    robots: 'index, follow',
};

export default function Distribution() {
    return (
        <>
            <Navbar />
            <DistributionContent />
            <Footer />
        </>
    );
}