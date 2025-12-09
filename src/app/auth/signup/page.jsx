import SignupForm from '@/components/auth/SignupForm';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';

export const metadata = {
  metadataBase: new URL('https://musicdibs.com'),
  title: 'Registro Musicdibs | Crea tu Cuenta de Artista Gratis 2024',
  description: '🎵 Regístrate en Musicdibs y comienza a proteger tu música con blockchain. Cuenta gratuita para registrar obras, distribuir en +220 plataformas y gestionar tus derechos de autor.',
  keywords: 'registro musicdibs, crear cuenta artista, registro gratuito música, plataforma registro musical, cuenta distribución música, signup musicdibs, registro blockchain música, alta artista musical, comenzar en musicdibs',
  authors: [{ name: 'Musicdibs' }],
  creator: 'Musicdibs',
  publisher: 'Musicdibs',
  category: 'Authentication',
  classification: 'Registration Portal',
  openGraph: {
    title: 'Registro - Musicdibs Plataforma Musical',
    description: 'Crea tu cuenta gratuita en Musicdibs para registrar obras, distribuir música y proteger tus derechos con blockchain.',
    type: 'website',
    url: '/auth/register',
    siteName: 'Musicdibs',
    locale: 'es_ES',
    images: [
      {
        url: '/assets/images/og-auth.png',
        width: 1200,
        height: 630,
        alt: 'Musicdibs Registro - Crea tu Cuenta de Artista para Proteger y Distribuir tu Música',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Registro - Musicdibs',
    description: 'Crea tu cuenta gratuita en Musicdibs para registrar y distribuir tu música.',
    images: ['/assets/images/og-auth.png'],
    creator: '@musicdibs',
  },
  robots: {
    index: false, // No indexar páginas de registro
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
  alternates: {
    canonical: '/auth/register',
  },
  other: {
    'robots': 'noindex, nofollow', // Doble protección
    'page-type': 'authentication',
    'account-type': 'free',
  }
};

// Schema.org para Registration Service
const signupSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  'name': 'Registro - Musicdibs',
  'description': 'Servicio de registro gratuito para artistas musicales en la plataforma de protección y distribución musical Musicdibs',
  'provider': {
    '@type': 'Organization',
    'name': 'Musicdibs',
    'url': 'https://musicdibs.com'
  },
  'areaServed': 'Worldwide',
  'serviceType': 'Registration',
  'availableChannel': {
    '@type': 'ServiceChannel',
    'serviceUrl': 'https://musicdibs.com/auth/register'
  },
  'offers': {
    '@type': 'Offer',
    'category': 'FreeService',
    'availability': 'OnlineOnly'
  }
};

export default function SignupPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(signupSchema) }}
      />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
          <SignupForm />
        </main>
        <Footer />
      </div>
    </>
  );
}