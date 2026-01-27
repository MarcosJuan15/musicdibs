// src/app/[locale]/layout.jsx - CON STATIC RENDERING
import { setRequestLocale } from 'next-intl/server';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

// Esto genera las rutas estáticas
export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'es' }, 
    { locale: 'pt' }
  ];
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = params;
  
  // Esto habilita el renderizado estático
  setRequestLocale(locale);
  
  return (
    <html lang={locale} className={inter.className}>
      <body>
        {children}
      </body>
    </html>
  );
}