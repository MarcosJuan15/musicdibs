// src/i18n.js - CONFIGURACIÓN CORRECTA
const { getRequestConfig } = require('next-intl/server');

module.exports = getRequestConfig(async ({ locale }) => {
  // Verifica que el locale sea válido
  const validLocales = ['en', 'es', 'pt'];
  const finalLocale = validLocales.includes(locale) ? locale : 'en';
  
  // Carga los mensajes del idioma correspondiente
  let messages;
  try {
    messages = (await import(`./messages/${finalLocale}.json`)).default;
  } catch (error) {
    // Si falla, carga inglés como respaldo
    console.warn(`No se encontró ${finalLocale}.json, usando en.json como fallback`);
    messages = (await import('./messages/en.json')).default;
  }
  
  return {
    messages,
    // Configuración adicional si la necesitas
    timeZone: 'UTC',
    now: new Date()
  };
});