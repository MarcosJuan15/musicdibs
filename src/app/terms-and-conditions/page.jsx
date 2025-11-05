import TermsAndConditionsContent from '@/components/legal/TermsAndConditionsContent';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';

export const metadata = {
  title: 'Términos y Condiciones - MusicDIBS',
  description: 'Consulta los términos y condiciones de uso de MusicDIBS. Conoce nuestras políticas de reembolso, cancelación y suscripción.',
  keywords: 'términos y condiciones, musicdibs, política de reembolso, cancelación suscripción, condiciones de uso',
  openGraph: {
    title: 'Términos y Condiciones - MusicDIBS',
    description: 'Consulta los términos y condiciones de uso de MusicDIBS',
    type: 'website',
  },
};

export default function TermsAndConditions() {
    return (
        <>
            <Navbar />
            <TermsAndConditionsContent />
            <Footer />
        </>
    );
}