'use client';

import { useState } from "react";
import { useRouter } from "@/navigation";
import { useTranslations } from "next-intl";

export default function HomePricing() {
  const [active, setActive] = useState("basic");
  const isBasic = active === "basic";
  const router = useRouter();

  // Lógica de traducción
  const t = useTranslations('home.pricing');

  // Cargamos los arrays desde el JSON
  const basicFeatures = t.raw('basic_features'); 
  const plusFeatures = t.raw('plus_features');

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
          {t('title')}
        </h2>
        <p className="mb-10 text-lg" itemProp="description">
          {t('subtitle')}
        </p>

        {/* Toggle - Mantengo tu estilo original exacto */}
        <div className="flex justify-center mb-10">
          <div 
            className="relative inline-flex bg-white rounded-full p-2 w-[350px] select-none" 
            role="tablist" 
          >
            <div
              className="absolute top-1 bottom-1 bg-pink-400 rounded-full shadow-md transition-all duration-300 ease-in-out"
              style={{
                width: '49%',
                left: active === "plus" ? 'calc(100% - 2px - 49%)' : '2px',
              }}
              aria-hidden="true"
            />

            <button
              onClick={() => setActive("basic")}
              className={`relative flex-1 py-2 text-center rounded-full font-semibold transition-colors duration-300 ${
                active === "basic" ? "text-black" : "text-black/60"
              }`}
            >
              {t('basic_title')}
            </button>
            <button
              onClick={() => setActive("plus")}
              className={`relative flex-1 py-2 text-center rounded-full font-semibold transition-colors duration-300 ${
                active === "plus" ? "text-black" : "text-black/60"
              }`}
            >
              {t('plus_title')}
            </button>
          </div>
        </div>

        {/* Pricing Card - Basic */}
        <div
          className={`max-w-md mx-auto rounded-lg p-8 ${isBasic ? "block" : "hidden"} bg-teal-600`}
        >
          <div className="text-4xl font-bold mb-2">
            {t('basic_price')}
            <span className="text-xl font-normal ml-1">{t('basic_period')}</span>
          </div>

          <p className="text-sm mb-4 opacity-80">{t('basic_enrollment_fee')}</p>

          <ul className="mb-8 text-left space-y-3">
            {basicFeatures.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <button
            onClick={handlePurchase}
            className="w-full py-3 rounded-full font-semibold bg-white text-teal-600 hover:bg-white/90 transition-colors"
          >
            {t('buy').toUpperCase()}
          </button>
        </div>

        {/* Pricing Card - Plus */}
        <div
          className={`max-w-md mx-auto rounded-lg p-8 ${!isBasic ? "block" : "hidden"} bg-pink-600`}
        >
          <div className="bg-yellow-300 text-pink-700 font-bold rounded-full px-4 py-1 mb-4 inline-block">
            {t('plus_special_offer')}
          </div>

          <div className="text-4xl font-bold mb-2">
            {t('plus_price')}
            <span className="text-xl font-normal ml-1">{t('plus_period')}</span>
          </div>

          <ul className="mb-8 text-left space-y-3">
            {plusFeatures.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <button
            onClick={handlePurchase}
            className="w-full py-3 rounded-full font-semibold bg-white text-pink-600 hover:bg-white/90 transition-colors"
          >
            {t('buy').toUpperCase()}
          </button>
        </div>

        {/* Nota adicional */}
        <div className="mt-8 text-sm text-white/80 max-w-2xl mx-auto">
          <p>{t('additional_note')}</p>
        </div>
      </div>
    </section>
  );
}