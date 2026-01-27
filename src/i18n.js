// src/i18n.js - CONFIGURACIÓN PARA STATIC RENDERING
const { getRequestConfig } = require('next-intl/server');

module.exports = getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;

  return {
    messages: (await import(`./messages/${locale}.json`)).default,
    timeZone: 'Europe/Madrid',
    now: new Date(),
    // Configuración para evitar warnings
    onError: (error) => {
      if (error.code === 'MISSING_MESSAGE') {
        // Silencia errores de mensajes faltantes durante build
        console.warn(`Missing translation: ${error.message}`);
        return;
      }
      throw error;
    }
  };
});