import LoginForm from '@/components/auth/LoginForm';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';

export const metadata = {
  metadataBase: new URL('https://musicdibs.com'),
  title: 'Iniciar Sesión Musicdibs | Accede a tu Cuenta de Artista 2024',
  description: '🔐 Accede a tu cuenta Musicdibs para gestionar tu música, ver registros, distribuir canciones y proteger tus derechos de autor. Plataforma segura para artistas musicales.',
  keywords: 'iniciar sesión musicdibs, login artista musical, acceso cuenta musicdibs, plataforma registro musical, cuenta distribución música, acceso seguro musicdibs, login blockchain música, panel control artista, gestión obras musicales',
  authors: [{ name: 'Musicdibs' }],
  creator: 'Musicdibs',
  publisher: 'Musicdibs',
  category: 'Authentication',
  classification: 'Login Portal',
  openGraph: {
    title: 'Iniciar Sesión - Musicdibs Plataforma Musical',
    description: 'Accede a tu cuenta Musicdibs para gestionar registros musicales, distribución y protección de derechos de autor.',
    type: 'website',
    url: '/auth/login',
    siteName: 'Musicdibs',
    locale: 'es_ES',
    images: [
      {
        url: '/assets/images/og.png',
        width: 1200,
        height: 630,
        alt: 'Musicdibs Iniciar Sesión - Acceso Seguro a la Plataforma Musical para Artistas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Iniciar Sesión - Musicdibs',
    description: 'Accede a tu cuenta Musicdibs para gestionar tu música y derechos de autor.',
    images: ['/assets/images/og-auth.png'],
    creator: '@musicdibs',
  },
  robots: {
    index: false, // No indexar páginas de autenticación
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
  alternates: {
    canonical: '/auth/login',
  },
  other: {
    'robots': 'noindex, nofollow', // Doble protección
    'page-type': 'authentication',
  }
};

// Schema.org para Authentication Service
const loginSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  'name': 'Inicio de Sesión - Musicdibs',
  'description': 'Servicio de autenticación seguro para acceder a la plataforma de registro y distribución musical Musicdibs',
  'provider': {
    '@type': 'Organization',
    'name': 'Musicdibs',
    'url': 'https://musicdibs.com'
  },
  'areaServed': 'Worldwide',
  'serviceType': 'Authentication',
  'availableChannel': {
    '@type': 'ServiceChannel',
    'serviceUrl': 'https://musicdibs.com/auth/login'
  }
};

export default function LoginPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(loginSchema) }}
      />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
          <LoginForm />
        </main>
        <Footer />
      </div>
    </>
  );
}