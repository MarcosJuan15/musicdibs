import { Gift, Zap, Download, Check, Crown, Star, HelpCircle } from "lucide-react";

export default function TiendaContent({ user }) {
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
            price: "Gratis",
            originalPrice: "€9.99/mes",
            description: "Perfecto para empezar",
            features: basicFeatures,
            popular: false,
            color: "blue",
            buttonText: "Comenzar Gratis",
            badge: null
        },
        {
            name: "Plus",
            price: "€9.99",
            period: "mes",
            description: "Ideal para artistas profesionales",
            features: plusFeatures,
            popular: true,
            color: "purple",
            buttonText: "Suscribirse Ahora",
            badge: "Más Popular"
        }
    ];

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="text-center px-4">
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">ELIGE TU PLAN</h2>
                <p className="text-gray-600 mt-2 text-lg">Selecciona el plan que mejor se adapte a tus necesidades</p>
            </div>

            {/* Tarjetas de Planes */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-7xl mx-auto px-4">
                {plans.map((plan) => (
                    <div
                        key={plan.name}
                        className={`relative rounded-2xl border-2 ${
                            plan.popular 
                                ? 'border-purple-500 shadow-2xl transform lg:scale-105' 
                                : 'border-gray-200 shadow-lg'
                        } bg-white overflow-hidden transition-all duration-300 hover:shadow-xl`}
                    >
                        {/* Badge Popular */}
                        {plan.popular && (
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                                <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center space-x-2 shadow-lg">
                                    <Crown size={16} />
                                    <span>{plan.badge}</span>
                                </div>
                            </div>
                        )}

                        <div className="p-6 sm:p-8">
                            {/* Header del Plan */}
                            <div className="text-center mb-6 sm:mb-8">
                                <h3 className={`text-2xl sm:text-3xl font-bold ${
                                    plan.popular ? 'text-purple-600' : 'text-gray-900'
                                }`}>
                                    {plan.name}
                                </h3>
                                <p className="text-gray-600 mt-2 text-base">{plan.description}</p>
                                
                                {/* Precio */}
                                <div className="mt-4 sm:mt-6">
                                    <div className="flex items-baseline justify-center space-x-2">
                                        <span className="text-3xl sm:text-4xl font-bold text-gray-900">
                                            {plan.price}
                                        </span>
                                        {plan.period && (
                                            <span className="text-gray-600 text-lg">/{plan.period}</span>
                                        )}
                                    </div>
                                    {plan.originalPrice && (
                                        <p className="text-sm text-gray-500 line-through mt-1">
                                            {plan.originalPrice}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Características */}
                            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                                {plan.features.map((feature, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <Check className={`h-5 w-5 mt-0.5 flex-shrink-0 ${
                                            plan.popular ? 'text-purple-500' : 'text-blue-500'
                                        }`} />
                                        <span className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* Botón de acción */}
                            <button
                                className={`w-full py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 ${
                                    plan.popular
                                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl'
                                        : 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 shadow-md hover:shadow-lg'
                                }`}
                            >
                                {plan.buttonText}
                            </button>

                            {/* Nota adicional */}
                            {plan.name === "Básico" && (
                                <p className="text-xs text-gray-500 text-center mt-3">
                                    *Después del primer mes, se aplicará la tarifa estándar
                                </p>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Sección de Beneficios Adicionales */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 sm:p-8 max-w-7xl mx-auto px-4">
                <div className="text-center mb-8">
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Beneficios Adicionales</h3>
                    <p className="text-gray-600 mt-2">Características que incluyen ambos planes</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Gift className="h-6 w-6 text-blue-600" />
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2 text-lg">Regala créditos</h4>
                        <p className="text-gray-600 text-sm">Comparte créditos con otros artistas</p>
                    </div>

                    <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Zap className="h-6 w-6 text-green-600" />
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2 text-lg">Suscripción flexible</h4>
                        <p className="text-gray-600 text-sm">Cancela o cambia tu plan cuando quieras</p>
                    </div>

                    <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Download className="h-6 w-6 text-purple-600" />
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2 text-lg">Acceso completo</h4>
                        <p className="text-gray-600 text-sm">Descarga tus certificados en cualquier momento</p>
                    </div>
                </div>
            </div>

            {/* Sección de Preguntas Frecuentes */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 max-w-7xl mx-auto px-4">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">
                    Preguntas Frecuentes
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
                            <h4 className="font-semibold text-gray-900 flex items-start sm:items-center mb-2">
                                <HelpCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                                ¿Puedo cambiar de plan más tarde?
                            </h4>
                            <p className="text-sm text-gray-600">
                                Sí, puedes mejorar o degradar tu plan en cualquier momento desde tu panel de control.
                            </p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
                            <h4 className="font-semibold text-gray-900 flex items-start sm:items-center mb-2">
                                <HelpCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                                ¿Qué pasa si necesito más registros?
                            </h4>
                            <p className="text-sm text-gray-600">
                                En el plan Plus tienes hasta 100 registros anuales. Si necesitas más, contáctanos para un plan personalizado.
                            </p>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
                            <h4 className="font-semibold text-gray-900 flex items-start sm:items-center mb-2">
                                <HelpCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                                ¿Cómo funcionan las promociones?
                            </h4>
                            <p className="text-sm text-gray-600">
                                Cada mes recibirás créditos de promoción que puedes usar en nuestras redes sociales con miles de seguidores.
                            </p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
                            <h4 className="font-semibold text-gray-900 flex items-start sm:items-center mb-2">
                                <HelpCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                                ¿Hay compromiso de permanencia?
                            </h4>
                            <p className="text-sm text-gray-600">
                                No, puedes cancelar tu suscripción en cualquier momento sin penalizaciones.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Notas al pie */}
            <div className="text-center max-w-4xl mx-auto px-4">
                <p className="text-sm text-gray-500">
                    *Las promociones en redes sociales están sujetas a disponibilidad y políticas de cada plataforma.<br />
                    *Los NFTs mensuales dependen de la disponibilidad en la blockchain y pueden variar.
                </p>
            </div>
        </div>
    );
}