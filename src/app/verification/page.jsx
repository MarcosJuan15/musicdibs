import VerificationHero from '@/components/verification/VerificationHero';
import VerificationUpload from '@/components/verification/VerificationUpload';
import VerificationInfo from '@/components/verification/VerificationInfo';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';

export const metadata = {
    metadataBase: new URL('https://musicdibs.com'),
    title: 'Verificador de Obras - MusicDIBS | Comprueba el Registro de tus Canciones',
    description: 'Verifica si una obra musical está registrada en MusicDIBS. Comprueba la autenticidad y protección de tus canciones con nuestro verificador blockchain.',
    keywords: 'verificador obras, comprobar registro musical, verificar canciones, protección intelectual, blockchain música, derechos autor',
    openGraph: {
        title: 'Verificador de Obras - MusicDIBS | Comprueba el Registro de tus Canciones',
        description: 'Verifica si una obra musical está registrada en MusicDIBS con tecnología blockchain.',
        type: 'website',
        url: '/verification',
    },
    robots: 'index, follow',
};

export default function Verification() {
    return (
        <>
            <Navbar />
            <VerificationHero />
            <VerificationUpload />
            <VerificationInfo />
            <Footer />
        </>
    );
}