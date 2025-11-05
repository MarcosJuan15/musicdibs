import SLAHero from '@/components/legal/SLAHero';
import SLAContent from '@/components/legal/SLAContent';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';

export const metadata = {
    title: 'Acuerdo de Nivel de Servicio (SLA) - MusicDIBS',
    description: 'Consulta nuestro Acuerdo de Nivel de Servicio (SLA). Conoce nuestros compromisos de disponibilidad, tiempos de respuesta y soporte técnico.',
    keywords: 'acuerdo nivel servicio, sla, musicdibs, disponibilidad, soporte técnico, tiempos respuesta, servicio garantizado',
    openGraph: {
        title: 'Acuerdo de Nivel de Servicio (SLA) - MusicDIBS',
        description: 'Conoce nuestros compromisos de servicio y disponibilidad',
        type: 'website',
    },
};

export default function SLA() {
    return (
        <div className="min-h-screen flex flex-col">
            {/* NAVBAR - Con contenedor específico */}
            <div className="w-full">
                <Navbar />
            </div>
            
            {/* CONTENIDO PRINCIPAL - Con flex-grow para ocupar espacio restante */}
            <main className="flex-grow w-full">
                <SLAHero />
                <SLAContent />
            </main>
            
            {/* FOOTER - Se queda al fondo */}
            <div className="w-full">
                <Footer />
            </div>
        </div>
    );
}