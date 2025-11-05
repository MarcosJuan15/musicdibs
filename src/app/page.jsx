import HomeLayout from '@/components/home/HomeLayout';

export const metadata = {
  metadataBase: new URL('https://musicdibs.com'),
  title: 'Musicdibs | Registro y Distribución Musical con Blockchain',
  description: 'Registra, distribuye y monetiza tu música con validez legal global. Protege tus canciones en blockchain y llévalas a todas las plataformas digitales.',
  keywords: 'registro musical, distribución música, blockchain, protección intelectual, derechos autor, Spotify, Apple Music, TikTok',
  openGraph: {
    title: 'Musicdibs | Registro y Distribución Musical con Blockchain',
    description: 'Registra, distribuye y monetiza tu música con validez legal global.',
    type: 'website',
    url: '/',
    images: [
      {
        url: '/og-image.jpg', // Añade esta imagen
        width: 1200,
        height: 630,
        alt: 'MusicDIBS - Plataforma Musical',
      },
    ],
  },
  robots: 'index, follow',
  twitter: {
    card: 'summary_large_image',
    title: 'MusicDIBS | Registro y Distribución Musical con Blockchain',
    description: 'Registra, distribuye y monetiza tu música con validez legal global.',
    images: ['/og-image.jpg'],
  },
};

export const dynamic = 'force-static';

export default function Home() {
  return <HomeLayout />;
}