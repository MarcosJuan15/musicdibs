import PrivacyPolicyContent from '@/components/legal/PrivacyPolicyContent';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';

export const metadata = {
    title: 'Política de Privacidad - MusicDIBS',
    description: 'Consulta nuestra política de privacidad y protección de datos. Conoce cómo protegemos tu información en MusicDIBS.',
    keywords: 'política de privacidad, protección de datos, musicdibs, RGPD, datos personales',
    openGraph: {
        title: 'Política de Privacidad - MusicDIBS',
        description: 'Consulta nuestra política de privacidad y protección de datos',
        type: 'website',
    },
};

export default function PrivacyPolicy() {
    return (
        <>
            <Navbar />
            <PrivacyPolicyContent />
            <Footer />
        </>
    );
}