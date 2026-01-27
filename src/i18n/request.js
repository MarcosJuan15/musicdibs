// src/i18n/request.js
import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale)) {
    locale = routing.defaultLocale;
  }

  // Importar y extraer la estructura correcta
  const distributionData = (await import(`../messages/${locale}/distribution.json`)).default;
  const faqData = (await import(`../messages/${locale}/faq.json`)).default;
  const homeData = (await import(`../messages/${locale}/home.json`)).default;
  const supportData = (await import(`../messages/${locale}/support.json`)).default;
  const dibsTokenData = (await import(`../messages/${locale}/dibsToken.json`)).default;
  const navbarData = (await import(`../messages/${locale}/navbar.json`)).default;
  const footerData = (await import(`../messages/${locale}/footer.json`)).default;
  const legalData = (await import(`../messages/${locale}/legal.json`)).default;
  const authData = (await import(`../messages/${locale}/auth.json`)).default;
  const partnersData = (await import(`../messages/${locale}/partners.json`)).default;
  const certificationData = (await import(`../messages/${locale}/certification.json`)).default;

  return {
    locale,
    messages: {
      // Si los JSON tienen { "distribution": { ... } }, extraemos solo el contenido interior
      distribution: distributionData.distribution || distributionData,
      faq: faqData.faq || faqData,
      home: homeData.home || homeData,
      support: supportData.support || supportData,
      dibsToken: dibsTokenData.dibsToken || dibsTokenData,
      navbar: navbarData.navbar || navbarData,
      footer: footerData.footer || footerData,
      legal: legalData.legal || legalData,
      auth: authData.auth || authData,
      partners: partnersData.partners || partnersData,
      certification: certificationData.certification || certificationData
    }
  };
});