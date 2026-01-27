// next.config.js
const withNextIntl = require('next-intl/plugin')('./src/i18n/request.js');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuración para eliminar advertencias
  experimental: {
    webpackBuildWorker: true,
  },
  
  // Configuración de imágenes
  images: {
    unoptimized: true, // Temporalmente para debug
  },
  
  // Desactiva verificación de tipos y ESLint temporalmente
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  }
};

module.exports = withNextIntl(nextConfig);