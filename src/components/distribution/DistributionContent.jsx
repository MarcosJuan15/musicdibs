"use client";
import { useRouter } from 'next/navigation';

export const DistributionContent = () => {
  const router = useRouter();

  const handleNavigation = (path) => {
    router.push(path);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 pt-16 pb-8">
        {/* Hero Section */}
        <div className="text-center mb-12 bg-white rounded-2xl shadow-lg p-8 border border-blue-200">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Distribución Musical
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Lleva tu música a todas las plataformas digitales del mundo con nuestro servicio de distribución profesional
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-blue-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Distribución Global</h2>
            <p className="text-gray-700 mb-4">
              Distribuye tu música en más de 220 plataformas digitales.
            </p>
            <ul className="space-y-2 text-gray-700">
              {['Spotify, Apple Music, YouTube Music', 'Amazon Music, Deezer, Tidal', 'Beatport, Traxsource, Juno Download', 'TikTok, Instagram, Facebook'].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 border border-blue-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Gestión Profesional</h2>
            <p className="text-gray-700 mb-4">
              Herramientas profesionales para gestionar tus releases y regalías.
            </p>
            <ul className="space-y-2 text-gray-700">
              {['Dashboard completo de estadísticas', 'Gestión de metadata avanzada', 'Reportes detallados de regalías', 'Soporte técnico especializado'].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12 border border-blue-200">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            ¿Por qué elegir MusicDibs?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: 'M13 10V3L4 14h7v7l9-11h-7z', title: 'Rápido y Eficiente', desc: 'Tu música estará disponible en todas las plataformas en 24-48 horas' },
              { icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z', title: '100% de Regalías', desc: 'Mantén el 100% de tus derechos y regalías' },
              { icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z', title: 'Analytics Avanzados', desc: 'Accede a estadísticas detalladas y reportes en tiempo real' }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-700">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Planes de Distribución</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-blue-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Plan Basic</h3>
              <div className="text-3xl font-bold text-gray-900 mb-4">6,90€<span className="text-lg text-gray-600">/mes</span></div>
              <ul className="space-y-2 text-gray-700 text-left">
                {[
                  'Cuota de inscripción sólo primer mes',
                  'Hasta 3 registros/mes',
                  'Acceso continuo a tus certificados',
                  '1 Promoción base/mes en TikTok',
                  'Soporte estándar'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => handleNavigation('/auth/login')}
                className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Comprar
              </button>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 relative border-2 border-blue-500">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Más Popular
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Plan Plus +</h3>
              <div className="text-3xl font-bold text-gray-900 mb-4">59,90€<span className="text-lg text-gray-600">/año</span></div>
              <ul className="space-y-2 text-gray-700 text-left">
                {[
                  'Protege tu catálogo completo (Hasta 100 registros/año)',
                  'Distribución Musical +220 DSPs',
                  'Genera dinero con las escuchas',
                  'Acceso continuo a certificados',
                  '2 NFT/mes*',
                  '2 Promoción Plus/mes en redes',
                  'Soporte prioritario',
                  'Ayuda ante disputas'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => handleNavigation('/auth/login')}
                className="w-full mt-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors font-medium"
              >
                Comprar
              </button>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">¿Listo para distribuir tu música?</h2>
          <p className="text-xl mb-6 opacity-90">
            Comienza hoy mismo y lleva tu música a todo el mundo
          </p>
          <div className="flex justify-center">
            <button 
              onClick={() => handleNavigation('/auth/login')}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Comenzar Distribución
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};