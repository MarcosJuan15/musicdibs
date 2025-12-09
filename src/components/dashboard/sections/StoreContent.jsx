"use client";
import { Gift, Zap, Download, Check, Crown, Star, HelpCircle } from "lucide-react";

export default function StoreContent({ user }) {
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

    const plans = [
        {
            name: "Básico",
            price: "€6,90",
            period: "mes",
            description: "Perfecto para empezar",
            features: basicFeatures,
            popular: false,
            color: "blue",
            buttonText: "Comprar",
            inscription: "€6,90 cuota de inscripción"
        },
        {
            name: "Plus",
            price: "€59,90",
            period: "año",
            description: "Ideal para artistas profesionales",
            features: plusFeatures,
            popular: true,
            color: "black",
            buttonText: "Comprar",
            inscription: null
        }
    ];

    return (
        <div className="space-y-6">
            {/* SEO Metadata */}
            <div itemScope itemType="https://schema.org/Product" className="hidden">
                <meta itemProp="name" content="Planes de Suscripción - Tienda Musicdibs" />
                <meta itemProp="description" content="Elige entre el plan Básico de €6,90/mes o el plan Plus anual de €59,90. Registra, distribuye y promociona tu música con Musicdibs." />
                <div itemProp="provider" itemScope itemType="https://schema.org/Organization">
                    <meta itemProp="name" content="Musicdibs" />
                </div>
            </div>

            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold text-gray-900">ELIGE TU PLAN</h1>
                <p className="text-gray-600 mt-1">Selecciona el plan que mejor se adapte a tus necesidades</p>
            </div>

            {/* Tarjetas de Planes */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
                {plans.map((plan) => (
                    <section key={plan.name} aria-labelledby={`plan-${plan.name.toLowerCase()}-title`}>
                        <div className={`relative rounded-2xl border-2 ${plan.popular
                                ? 'border-black shadow-xl hover:shadow-2xl'
                                : 'border-gray-200 shadow-lg hover:shadow-xl'
                            } bg-white overflow-hidden transition-all duration-300 flex flex-col min-h-0 h-full`}>
                            <div className="p-6 lg:p-8 flex flex-col h-full">
                                {/* Header del Plan */}
                                <div className="text-center mb-6">
                                    <h2 id={`plan-${plan.name.toLowerCase()}-title`} className={`text-2xl lg:text-3xl font-bold ${plan.popular ? 'text-black' : 'text-gray-900'
                                        }`}>
                                        {plan.name}
                                    </h2>
                                    <p className="text-gray-600 mt-2 text-base">
                                        {plan.description}
                                    </p>

                                    {/* Precio */}
                                    <div className="mt-6">
                                        <div className="flex items-baseline justify-center space-x-2">
                                            <span className="text-4xl lg:text-5xl font-bold text-gray-900">
                                                {plan.price}
                                            </span>
                                            <span className="text-gray-600 text-lg">/{plan.period}</span>
                                        </div>
                                        {plan.inscription && (
                                            <p className="text-sm text-gray-600 mt-2">
                                                {plan.inscription}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* Características */}
                                <div className="flex-1 mb-6">
                                    <div className="space-y-4">
                                        {plan.features.map((feature, index) => (
                                            <div key={index} className="flex items-start space-x-3">
                                                <Check className={`h-5 w-5 mt-0.5 flex-shrink-0 ${plan.popular ? 'text-black' : 'text-blue-500'
                                                    }`} />
                                                <span className="text-gray-700 text-sm lg:text-base leading-relaxed">
                                                    {feature}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Botón de acción */}
                                <div className="mt-auto">
                                    <button
                                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors font-medium text-lg"
                                        aria-label={`Comprar plan ${plan.name}`}
                                    >
                                        {plan.buttonText}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                ))}
            </div>

            {/* Sección de Beneficios Adicionales */}
            <section aria-labelledby="additional-benefits-title">
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 max-w-6xl mx-auto">
                    <div className="text-center mb-8">
                        <h2 id="additional-benefits-title" className="text-2xl lg:text-3xl font-bold text-gray-900">
                            Beneficios Adicionales
                        </h2>
                        <p className="text-gray-600 mt-2 text-base">
                            Características que incluyen ambos planes
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { icon: Gift, title: "Regala créditos", desc: "Comparte créditos con otros artistas" },
                            { icon: Zap, title: "Suscripción flexible", desc: "Cancela o cambia tu plan cuando quieras" },
                            { icon: Download, title: "Acceso completo", desc: "Descarga tus certificados en cualquier momento" }
                        ].map((benefit, index) => (
                            <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <benefit.icon className="h-6 w-6 text-blue-600" />
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2 text-lg">{benefit.title}</h3>
                                <p className="text-gray-600 text-sm">{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Sección de Preguntas Frecuentes */}
            <section aria-labelledby="faq-title">
                <div className="bg-white rounded-2xl shadow-lg p-8 max-w-6xl mx-auto">
                    <h2 id="faq-title" className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-8">
                        Preguntas Frecuentes
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            {[
                                {
                                    question: "¿Puedo cambiar de plan más tarde?",
                                    answer: "Sí, puedes mejorar o degradar tu plan en cualquier momento desde tu panel de control."
                                },
                                {
                                    question: "¿Qué pasa si necesito más registros?",
                                    answer: "En el plan Plus tienes hasta 100 registros anuales. Si necesitas más, contáctanos para un plan personalizado."
                                }
                            ].map((faq, index) => (
                                <div key={index} className="bg-gray-50 rounded-lg p-6">
                                    <h3 className="font-semibold text-gray-900 flex items-start mb-2">
                                        <HelpCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                                        {faq.question}
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        {faq.answer}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <div className="space-y-4">
                            {[
                                {
                                    question: "¿Cómo funcionan las promociones?",
                                    answer: "Cada mes recibirás créditos de promoción que puedes usar en nuestras redes sociales con miles de seguidores."
                                },
                                {
                                    question: "¿Hay compromiso de permanencia?",
                                    answer: "No, puedes cancelar tu suscripción en cualquier momento sin penalizaciones."
                                }
                            ].map((faq, index) => (
                                <div key={index} className="bg-gray-50 rounded-lg p-6">
                                    <h3 className="font-semibold text-gray-900 flex items-start mb-2">
                                        <HelpCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                                        {faq.question}
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        {faq.answer}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}