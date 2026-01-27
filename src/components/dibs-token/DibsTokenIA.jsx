'use client';

import { Shield, Sparkles, TrendingUp, Lock } from "lucide-react";
import { useTranslations } from "next-intl";

export default function DibsTokenIA() {
    const t = useTranslations('dibsToken.ia');

    // Obtener features y asegurarnos que sea un array
    const rawFeatures = t.raw('features');
    
    // Convertir a array si no lo es
    let features = [];
    
    if (Array.isArray(rawFeatures)) {
        features = rawFeatures;
    } else if (rawFeatures && typeof rawFeatures === 'object') {
        // Si es un objeto, convertirlo a array
        features = Object.values(rawFeatures);
    } else if (typeof rawFeatures === 'string') {
        // Si es un string, intentar parsearlo como JSON
        try {
            const parsed = JSON.parse(rawFeatures);
            features = Array.isArray(parsed) ? parsed : [];
        } catch {
            features = [];
        }
    }

    // Componente con array seguro
    return (
        <section className="py-16 px-4 bg-gray-50/30" itemScope itemType="https://schema.org/WebPageElement">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6" itemProp="headline">
                        {t('title')}
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-900 via-purple-800 to-pink-600 mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto" itemProp="description">
                        {t.rich('description', {
                            strong: (chunks) => <span className="font-semibold text-blue-900">{chunks}</span>
                        })}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {features.length > 0 ? (
                        features.map((feature, index) => {
                            // Asegurarnos que feature no sea null/undefined
                            if (!feature) return null;
                            
                            const IconComponent = getIconComponent(feature.icon);
                            return (
                                <div
                                    key={index}
                                    className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 p-6 text-center group"
                                >
                                    <div className="w-16 h-16 bg-gradient-to-br from-blue-900/10 via-purple-800/10 to-pink-600/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <IconComponent className="w-8 h-8 text-blue-900" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                        {feature.title || `Feature ${index + 1}`}
                                    </h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        {feature.description || ''}
                                    </p>
                                </div>
                            );
                        })
                    ) : (
                        // Fallback si no hay features
                        <div className="col-span-full text-center py-8">
                            <p className="text-gray-500">Características no disponibles</p>
                        </div>
                    )}
                </div>

                {/* Resto del componente permanece igual */}
                <div className="text-center max-w-4xl mx-auto">
                    <div className="bg-gradient-to-r from-blue-900/10 via-purple-800/10 to-pink-600/10 rounded-2xl p-8 md:p-12 border border-gray-200">
                        <p className="text-lg font-semibold text-gray-900 leading-relaxed">
                            {t.rich('highlight', {
                                blue: (chunks) => <span className="text-blue-900">{chunks}</span>,
                                purple: (chunks) => <span className="text-purple-800">{chunks}</span>,
                                pink: (chunks) => <span className="text-pink-600">{chunks}</span>
                            })}
                        </p>
                    </div>
                </div>

                <div itemScope itemType="https://schema.org/SoftwareApplication" className="hidden">
                    <meta itemProp="name" content="DIBS IA Agent" />
                    <meta itemProp="description" content={t('schema_description')} />
                    <meta itemProp="applicationCategory" content="BusinessApplication" />
                    <meta itemProp="featureList" content="Copyright monitoring, Income optimization, Infringement detection, Trend analysis" />
                </div>
            </div>
        </section>
    );
}

function getIconComponent(iconName) {
    const icons = {
        Shield, Sparkles, TrendingUp, Lock
    };
    // Asegurarnos que iconName sea string y tenga valor
    return icons[iconName] || Shield;
}