'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function HomePricing() {
  const [active, setActive] = useState("Basic");
  const isBasic = active === "Basic";
  const router = useRouter();

  const basicFeatures = [
    "Cuota de inscripción sólo primer mes",
    "Hasta 3 registros/mes",
    "Acceso continuo a tus certificados",
    "1 Promoción base/mes en TikTok (+245k seguidores)*",
    "Soporte estándar",
  ];

  const plusFeatures = [
    "Protege tu catálogo completo (Hasta 100 registros al año, SIN costes extra)",
    "Distribución Musical +220 DSPs (Spotify, Apple Music, ...)",
    "Genera dinero con las escuchas de tus canciones",
    "Acceso continuo a certificados",
    "2 NFT/mes*",
    "2 Promoción Plus/mes en TikTok (+245k seguidores) – Instagram (+100k)*",
    "Market MusicDibs – Promociona y vende tus obras",
    "Soporte prioritario",
    "Ayuda ante disputas",
  ];

  const features = isBasic ? basicFeatures : plusFeatures;

  // Función para redirigir a la página de registro
  const handlePurchase = () => {
    router.push("/auth/signup");
  };

  return (
    <section 
      id="pricing-toggle" 
      className="py-8 px-4 bg-gradient-to-br bg-purple-400 text-white"
      itemScope 
      itemType="https://schema.org/Product"
      aria-labelledby="pricing-heading"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 id="pricing-heading" className="text-4xl font-bold mb-4" itemProp="name">
          Precios
        </h2>
        <p className="mb-10 text-lg" itemProp="description">
          ¡Ahorra grandes costes que tendrías en los servicios por separado que ofrece el mercado, contratando nuestro plan Plus+!
        </p>

        {/* Schema.org para Offer */}
        <div itemScope itemType="https://schema.org/Offer" className="hidden">
          <meta itemProp="name" content="Planes MusicDIBS - Basic y Plus+" />
          <meta itemProp="description" content="Planes de distribución musical con registro, promoción y soporte" />
          <meta itemProp="price" content="6.90" />
          <meta itemProp="priceCurrency" content="EUR" />
          <meta itemProp="availability" content="https://schema.org/InStock" />
          <link itemProp="url" href="https://musicdibs.com/register/?prod=5157" />
        </div>

        {/* Toggle */}
        <div className="flex justify-center mb-10">
          <div 
            className="relative inline-flex bg-white rounded-full p-2 w-[350px] select-none" 
            role="tablist" 
            aria-label="Seleccionar plan de precios"
          >
            {/* Fondo móvil */}
            <div
              className="absolute top-1 bottom-1 bg-pink-400 rounded-full shadow-md transition-all duration-300 ease-in-out"
              style={{
                width: '49%',
                left: active === "Plan Plus+" ? 'calc(100% - 2px - 49%)' : '2px',
              }}
              aria-hidden="true"
            ></div>

            {/* Botones */}
            <button
              role="tab"
              aria-selected={active === "Basic"}
              aria-controls="basic-plan-content"
              id="basic-tab"
              onClick={() => setActive("Basic")}
              className={`relative flex-1 py-2 text-center rounded-full font-semibold transition-colors duration-300 ${
                active === "Basic" ? "text-black" : "text-black/60"
              }`}
            >
              Basic
            </button>
            <button
              role="tab"
              aria-selected={active === "Plan Plus+"}
              aria-controls="plus-plan-content"
              id="plus-tab"
              onClick={() => setActive("Plan Plus+")}
              className={`relative flex-1 py-2 text-center rounded-full font-semibold transition-colors duration-300 ${
                active === "Plan Plus+" ? "text-black" : "text-black/60"
              }`}
            >
              Plan Plus+
            </button>
          </div>
        </div>

        {/* Pricing Card - Basic */}
        <div
          id="basic-plan-content"
          role="tabpanel"
          aria-labelledby="basic-tab"
          className={`max-w-md mx-auto rounded-lg p-8 ${
            isBasic ? "block" : "hidden"
          } bg-teal-600`}
          itemScope
          itemType="https://schema.org/Product"
        >
          <meta itemProp="name" content="Plan Basic - MusicDIBS" />
          <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
            <meta itemProp="price" content="6.90" />
            <meta itemProp="priceCurrency" content="EUR" />
            <meta itemProp="priceValidUntil" content="2024-12-31" />
          </div>

          <div className="text-4xl font-bold mb-2" itemProp="price">
            6,90 €
            <span className="text-xl font-normal ml-1" itemProp="priceCurrency">
              / mes
            </span>
          </div>

          <p className="text-sm mb-4 opacity-80">
            y 6,90 € cuota de inscripción
          </p>

          <ul className="mb-8 text-left space-y-3" aria-label="Características del plan Basic">
            {basicFeatures.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center flex-shrink-0" aria-hidden="true">
                  <svg
                    className="w-3 h-3 text-teal-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span itemProp="description">{feature}</span>
              </li>
            ))}
          </ul>

          <button
            onClick={handlePurchase}
            className="w-full py-3 rounded-full font-semibold bg-white text-teal-600 hover:bg-white/90 transition-colors"
            aria-label="Comprar plan Basic"
            itemProp="url"
          >
            COMPRAR
          </button>
        </div>

        {/* Pricing Card - Plus */}
        <div
          id="plus-plan-content"
          role="tabpanel"
          aria-labelledby="plus-tab"
          className={`max-w-md mx-auto rounded-lg p-8 ${
            !isBasic ? "block" : "hidden"
          } bg-pink-600`}
          itemScope
          itemType="https://schema.org/Product"
        >
          <meta itemProp="name" content="Plan Plus+ - MusicDIBS" />
          
          <div className="bg-yellow-300 text-pink-700 font-bold rounded-full px-4 py-1 mb-4 inline-block" aria-label="Oferta especial">
            Cuota registro + 4 meses GRATIS
          </div>

          <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
            <meta itemProp="price" content="59.90" />
            <meta itemProp="priceCurrency" content="EUR" />
            <meta itemProp="priceValidUntil" content="2024-12-31" />
          </div>

          <div className="text-4xl font-bold mb-2" itemProp="price">
            59,90 €
            <span className="text-xl font-normal ml-1" itemProp="priceCurrency">
              / año
            </span>
          </div>

          <ul className="mb-8 text-left space-y-3" aria-label="Características del plan Plus+">
            {plusFeatures.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center flex-shrink-0" aria-hidden="true">
                  <svg
                    className="w-3 h-3 text-pink-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span itemProp="description">{feature}</span>
              </li>
            ))}
          </ul>

          <button
            onClick={handlePurchase}
            className="w-full py-3 rounded-full font-semibold bg-white text-pink-600 hover:bg-white/90 transition-colors"
            aria-label="Comprar plan Plus+"
            itemProp="url"
          >
            COMPRAR
          </button>
        </div>

        {/* Nota adicional */}
        <div className="mt-8 text-sm text-white/80 max-w-2xl mx-auto">
          <p>* Los servicios de promoción y NFTs están sujetos a disponibilidad y términos específicos.</p>
        </div>
      </div>
    </section>
  );
}