// middleware.js - CONFIGURACIÓN OPTIMIZADA
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'es', 'pt'],
  defaultLocale: 'en',
  localePrefix: 'always' // Asegura que siempre haya locale en la URL
});

export const config = {
  matcher: [
    '/((?!api|_next|_vercel|.*\\..*).*)',
    '/([\\w-]+)?/(.*)'
  ]
};