// src/app/[locale]/support/page.jsx - VERSIÓN SIMPLIFICADA
import SupportHero from '@/components/support/SupportHero';
import SupportChannels from '@/components/support/SupportChannels';
import SupportTicket from '@/components/support/SupportTicket';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';

// Metadatos fijos sin traducciones
export const metadata = {
  title: 'Support - Musicdibs',
  description: 'MusicDibs support center. Help, FAQs and contact.',
  keywords: 'support, help, contact, faq',
  openGraph: {
    title: 'Support - Musicdibs',
    description: 'MusicDibs support center. Help, FAQs and contact.',
    type: 'website',
    url: '/support',
    images: [
      {
        url: '/assets/images/og-support.png',
        width: 1200,
        height: 630,
        alt: 'Musicdibs support image',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Support - Musicdibs',
    description: 'MusicDibs support center. Help, FAQs and contact.',
    images: ['/assets/images/og-support.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Schema.org fijo
const customerServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  'name': 'MusicDibs Support',
  'description': 'MusicDibs technical support and customer service',
  'provider': {
    '@type': 'Organization',
    'name': 'Musicdibs',
    'url': 'https://musicdibs.com'
  },
  'areaServed': 'Global',
  'serviceType': 'Technical support and customer service',
  'availableChannel': {
    '@type': 'ServiceChannel',
    'serviceUrl': 'https://musicdibs.com/support',
    'servicePhone': '+1 123 456 7890',
    'serviceEmail': 'support@musicdibs.com',
  },
  'hoursAvailable': {
    '@type': 'OpeningHoursSpecification',
    'opens': '00:00',
    'closes': '23:59',
    'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  }
};

export default async function Support() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(customerServiceSchema) }}
      />
      <Navbar />
      <SupportHero />
      <SupportChannels />
      <SupportTicket />
      <Footer />
    </>
  );
}