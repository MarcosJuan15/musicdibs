// src/app/[locale]/faq/page.jsx - VERSIÓN SIMPLIFICADA
import FAQHero from '@/components/faq/FAQHero';
import FAQAccordion from '@/components/faq/FAQAccordion';
import FAQContact from '@/components/faq/FAQContact';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';

// Metadatos fijos
export const metadata = {
  title: 'FAQ - Musicdibs',
  description: 'Frequently asked questions about Musicdibs services and platform.',
  keywords: 'faq, questions, help, support',
  openGraph: {
    title: 'FAQ - Musicdibs',
    description: 'Frequently asked questions about MusicDibs services and platform.',
    type: 'website',
    url: '/faq',
    images: [
      {
        url: '/assets/images/og.png',
        width: 1200,
        height: 630,
        alt: 'MusicDibs FAQ image',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ - MusicDibs',
    description: 'Frequently asked questions about Musicdibs services and platform.',
    images: ['/assets/images/og.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Schema.org fijo para FAQ
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': [
    {
      '@type': 'Question',
      'name': 'What is Musicdibs?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'MusicDibs is a platform for music copyright protection and digital asset management using blockchain technology.'
      }
    },
    {
      '@type': 'Question',
      'name': 'How does MusicDibs work?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'MusicDibs allows artists to register their music, protect copyrights, and manage digital assets through a secure blockchain-based platform.'
      }
    }
  ]
};

export default async function FAQ() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <FAQHero />
      <FAQAccordion />
      <FAQContact />
      <Footer />
    </>
  );
}