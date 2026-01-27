// src/app/[locale]/layout.jsx
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';

// Define los idiomas soportados usando la configuración centralizada
import { routing } from '@/i18n/routing';

export default async function LocaleLayout({ children, params }) {
  // Extraer el locale de params
  const { locale } = await params;
  
  // Validar que el locale sea soportado
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  // Obtener mensajes para el locale
  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider 
          locale={locale} 
          messages={messages}
        >
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

// Generar rutas estáticas
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}