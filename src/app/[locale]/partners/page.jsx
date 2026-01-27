// src/app/[locale]/partners/page.jsx - VERSIÓN SIMPLIFICADA
import PartnersHero from '@/components/partners/PartnersHero';
import PartnersFeatured from '@/components/partners/PartnersFeatured';
import PartnersWhy from '@/components/partners/PartnersWhy';
import PartnersCTA from '@/components/partners/PartnersCTA';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';

// Metadatos fijos
export const metadata = {
  title: 'Partners - Musicdibs',
  description: 'Become a Musicdibs partner. Strategic alliances and business opportunities.',
  keywords: 'partners, alliances, business, collaboration',
  openGraph: {
    title: 'Partners - Musicdibs',
    description: 'Become a Musicdibs partner. Strategic alliances and business opportunities.',
    type: 'website',
    url: '/partners',
    images: [
      {
        url: '/assets/images/og-partners.png',
        width: 1200,
        height: 630,
        alt: 'MusicDibs partners image',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Partners - Musicdibs',
    description: 'Become a Musicdibs partner. Strategic alliances and business opportunities.',
    images: ['/assets/images/og-partners.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Schema.org fijo para partners
const partnershipSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  'name': 'MusicDibs Partners',
  'description': 'Strategic partnerships and alliances for music technology innovation',
  'url': 'https://musicdibs.com/partners',
  'logo': 'https://musicdibs.com/assets/images/logo.png',
  'foundingDate': '2023',
  'numberOfEmployees': {
    '@type': 'QuantitativeValue',
    'value': '50+'
  }
};

export default async function Partners() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(partnershipSchema) }}
      />
      <Navbar />
      <PartnersHero />
      <PartnersFeatured />
      <PartnersWhy />
      <PartnersCTA />
      <Footer />
    </>
  );
}