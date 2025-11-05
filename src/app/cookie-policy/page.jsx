import CookiePolicyContent from '@/components/legal/CookiePolicyContent';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';

export const metadata = {
  title: 'Política de Cookies - MusicDIBS',
  description: 'Consulta nuestra política de cookies. Conoce los tipos de cookies que utilizamos y cómo gestionarlas en MusicDIBS.',
  keywords: 'política de cookies, cookies, musicdibs, configuración cookies, privacidad',
  openGraph: {
    title: 'Política de Cookies - MusicDIBS',
    description: 'Consulta nuestra política de cookies y cómo gestionarlas',
    type: 'website',
  },
};

export default function CookiePolicy() {
    return (
        <>
            <Navbar />
            <CookiePolicyContent />
            <Footer />
        </>
    );
}