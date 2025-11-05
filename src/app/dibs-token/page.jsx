import DibsTokenHero from '@/components/dibs-token/DibsTokenHero';
import DibsTokenWhatIs from '@/components/dibs-token/DibsTokenWhatIs';
import DibsTokenIA from '@/components/dibs-token/DibsTokenIA';
import DibsTokenDePIN from '@/components/dibs-token/DibsTokenDePIN';
import DibsTokenAcceleration from '@/components/dibs-token/DibsTokenAcceleration';
import DibsTokenPartners from '@/components/dibs-token/DibsTokenPartners';
import DibsTokenRoadmap from '@/components/dibs-token/DibsTokenRoadmap';
import DibsTokenStatistics from '@/components/dibs-token/DibsTokenStatistics';
import DibsTokenAbout from '@/components/dibs-token/DibsTokenAbout';
import DibsTokenTokenomics from '@/components/dibs-token/DibsTokenTokenomics';
import DibsTokenTeam from '@/components/dibs-token/DibsTokenTeam';
import DibsTokenCTA from '@/components/dibs-token/DibsTokenCTA';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';

export const metadata = {
    title: 'Token DIBS - MusicDIBS | La Nueva Era de la Protección Musical en WEB3',
    description: 'Descubre el token DIBS: protección de propiedad intelectual, 32% APR en recompensas, tecnología blockchain y IA. Únete a la revolución musical en WEB3.',
    keywords: 'token DIBS, musicdibs, protección musical, blockchain, WEB3, propiedad intelectual, recompensas APR, Solana, DePIN, tokenomics DIBS',
    openGraph: {
        title: 'Token DIBS - MusicDIBS | Protección Musical en WEB3',
        description: 'La nueva era de la protección de la música en WEB3 con token DIBS - 32% APR en recompensas',
        type: 'website',
        url: 'https://musicdibs.com/dibs-token',
        images: [
            {
                url: '/og-dibs-token.jpg',
                width: 1200,
                height: 630,
                alt: 'Token DIBS - MusicDIBS',
            },
        ],
    },
    robots: 'index, follow',
    authors: [{ name: 'MusicDIBS' }],
    creator: 'MusicDIBS',
    publisher: 'MusicDIBS',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
};

export default function DibsTokenPage() {
    return (
        <>
            <Navbar />
            <DibsTokenHero />
            <DibsTokenWhatIs />
            <DibsTokenIA />
            <DibsTokenDePIN />
            <DibsTokenAcceleration />
            <DibsTokenPartners />
            <DibsTokenRoadmap />
            <DibsTokenStatistics />
            <DibsTokenAbout />
            <DibsTokenTokenomics />
            <DibsTokenTeam />
            <DibsTokenCTA />
            <Footer />
        </>
    );
}