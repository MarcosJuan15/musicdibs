// next.config.js - CONFIGURACIÓN SIMPLIFICADA
const withNextIntl = require('next-intl/plugin')('./src/i18n.js');

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    webpackBuildWorker: true,
  },
  // Configuración opcional para imágenes si usas next/image
  images: {
    unoptimized: true, // Temporal para evitar errores
  }
};

module.exports = withNextIntl(nextConfig);