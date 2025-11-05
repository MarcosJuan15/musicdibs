/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ✅ PATRÓN SIMPLE Y COMPLETO
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // ✅ TUS COLORES PERSONALIZADOS
      colors: {
        primary: "#3B82F6",
        secondary: "#8B5CF6", 
        accent: "#EC4899",
        "muted-foreground": "#6B7280",
      },
    },
    // ✅ BREAKPOINTS ESTÁNDAR
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
}