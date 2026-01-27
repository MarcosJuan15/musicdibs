'use client';
import { useState } from "react";
import { useTranslations } from "next-intl";

export default function FAQAccordion() {
  const t = useTranslations('faq.accordion');
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Asegurarnos de que faqItems sea un array
  const rawItems = t.raw('items');
  const faqItems = Array.isArray(rawItems) ? rawItems : [];

  // Si no hay items, mostrar un mensaje de error
  if (faqItems.length === 0) {
    return (
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 text-center">
            <p className="text-red-500">Error: No se pudieron cargar las preguntas frecuentes.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-10" aria-labelledby="preguntas-frecuentes">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100">
          <div className="text-center mb-8">
            <h2 id="preguntas-frecuentes" className="text-3xl font-bold text-gray-900 mb-4">
              {t('section_title')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('section_subtitle')}
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className={`border border-gray-200 rounded-xl transition-all duration-300 overflow-hidden ${
                  activeIndex === index 
                    ? 'border-purple-300 shadow-md bg-purple-50/30' 
                    : 'hover:border-gray-300 hover:shadow-sm'
                }`}
              >
                <button
                  className="flex justify-between items-center w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-purple-200 focus:ring-offset-2"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={activeIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span 
                    className={`font-semibold text-lg md:text-xl pr-6 ${
                      activeIndex === index ? 'text-purple-700' : 'text-gray-900'
                    }`}
                  >
                    {item.question}
                  </span>
                  <div className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 ${
                    activeIndex === index 
                      ? 'bg-purple-100 text-purple-600 rotate-180' 
                      : 'bg-gray-100 text-gray-500'
                  }`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </button>
                
                <div
                  id={`faq-answer-${index}`}
                  className={`overflow-hidden transition-all duration-500 ${
                    activeIndex === index ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 text-gray-700 leading-relaxed border-t border-gray-100">
                    {typeof item.answer === 'string' ? (
                      <div dangerouslySetInnerHTML={{ __html: item.answer }} />
                    ) : (
                      item.answer
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}