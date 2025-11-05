import TechLegalHero from '@/components/legal/TechLegalHero';
import TechLegalCertification from '@/components/legal/TechLegalCertification';
import TechLegalFeatures from '@/components/legal/TechLegalFeatures';
import TechLegalBlockchain from '@/components/legal/TechLegalBlockchain';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';

export const metadata = {
    title: 'Tecnología y Validez Legal - MusicDIBS',
    description: 'Certificación blockchain con validez legal mundial para tus obras musicales. Garantiza la autenticidad, seguridad e inmutabilidad de tus creaciones.',
    keywords: 'blockchain, certificación legal, validez internacional, protección obras musicales, derechos de autor, música, registro blockchain, musicdibs',
    openGraph: {
        title: 'Tecnología y Validez Legal - MusicDIBS',
        description: 'Certificación blockchain con validez legal mundial para tus obras musicales.',
        type: 'website',
    },
};

export default function TechLegal() {
    return (
        <div className="min-h-screen flex flex-col">
            {/* NAVBAR - Con contenedor específico */}
            <div className="w-full">
                <Navbar />
            </div>
            
            {/* CONTENIDO PRINCIPAL - Con flex-grow para ocupar espacio restante */}
            <main className="flex-grow w-full">
                <TechLegalHero />
                <TechLegalCertification />
                <TechLegalFeatures />
                <TechLegalBlockchain />
            </main>
            
            {/* FOOTER - Se queda al fondo */}
            <div className="w-full">
                <Footer />
            </div>
        </div>
    );
}