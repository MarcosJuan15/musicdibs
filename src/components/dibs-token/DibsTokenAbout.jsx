'use client';

import { 
    Shield, Sparkles, Award, TrendingUp, Zap, Globe, 
    Coins, Users, Crown, Gift 
} from "lucide-react";
import { useTranslations } from "next-intl";

export default function DibsTokenAbout() {
    const t = useTranslations('dibsToken.about');
    
    // Función para convertir cualquier valor a array seguro
    const getSafeArray = (rawData) => {
        // Si ya es un array, retornarlo
        if (Array.isArray(rawData)) return rawData;
        
        // Si es null/undefined, retornar array vacío
        if (!rawData) return [];
        
        // Si es string, intentar parsear como JSON
        if (typeof rawData === 'string') {
            try {
                const parsed = JSON.parse(rawData);
                return Array.isArray(parsed) ? parsed : [];
            } catch {
                return [];
            }
        }
        
        // Si es objeto, convertir sus valores a array
        if (typeof rawData === 'object') {
            return Object.values(rawData);
        }
        
        // Cualquier otro caso, array vacío
        return [];
    };

    // Obtener datos como arrays seguros
    const tokenFeatures = getSafeArray(t.raw('features'));
    const holderBenefits = getSafeArray(t.raw('benefits'));

    return (
        <section className="py-12 md:py-20 px-4 bg-white" itemScope itemType="https://schema.org/WebPageElement">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-8 md:mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6" itemProp="headline">
                        {t('title')}
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-900 via-purple-800 to-pink-600 mx-auto mb-4 md:mb-6"></div>
                    <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-4" itemProp="description">
                        {t.rich('description', {
                            strong: (chunks) => <span className="font-semibold text-blue-900">{chunks}</span>
                        })}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">
                    {tokenFeatures.length > 0 ? (
                        tokenFeatures.map((feature, index) => {
                            // Verificar que feature no sea null/undefined
                            if (!feature) return null;
                            
                            const IconComponent = getIconComponent(feature.icon);
                            return (
                                <div 
                                    key={index} 
                                    className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 md:hover:-translate-y-2 p-4 md:p-6 group text-center md:text-left"
                                >
                                    <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-blue-900/10 via-purple-800/10 to-pink-600/10 rounded-xl flex items-center justify-center mb-3 md:mb-4 mx-auto md:mx-0 group-hover:scale-110 transition-transform duration-300">
                                        <IconComponent className="w-6 h-6 md:w-7 md:h-7 text-purple-700" />
                                    </div>
                                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 md:mb-3">
                                        {feature.title || `Característica ${index + 1}`}
                                    </h3>
                                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                                        {feature.description || ''}
                                    </p>
                                </div>
                            );
                        })
                    ) : (
                        <div className="col-span-full text-center py-8">
                            <p className="text-gray-500">Características del token no disponibles</p>
                        </div>
                    )}
                </div>

                <div className="mb-8 md:mb-12">
                    <div className="bg-gradient-to-br from-blue-900/5 via-purple-800/5 to-pink-600/5 rounded-2xl p-6 md:p-8 border border-gray-200">
                        <div className="text-center mb-6 md:mb-8">
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{t('benefits_title')}</h3>
                            <p className="text-gray-600 text-sm md:text-base">{t('benefits_subtitle')}</p>
                        </div>
                        
                        {holderBenefits.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                                {holderBenefits.map((benefit, index) => {
                                    // Verificar que benefit no sea null/undefined
                                    if (!benefit) return null;
                                    
                                    const IconComponent = getIconComponent(benefit.icon);
                                    return (
                                        <div key={index} className="flex flex-col md:flex-row gap-3 md:gap-4 group hover:bg-white/50 rounded-lg p-4 transition-all duration-300 text-center md:text-left">
                                            <div className="w-12 h-12 bg-gradient-to-br from-blue-900/10 via-purple-800/10 to-pink-600/10 rounded-lg flex items-center justify-center flex-shrink-0 mx-auto md:mx-0 group-hover:scale-110 transition-transform">
                                                <IconComponent className="w-6 h-6 text-purple-700" />
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-2">
                                                    {benefit.title || `Beneficio ${index + 1}`}
                                                </h4>
                                                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                                                    {benefit.description || ''}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        ) : (
                            <div className="text-center py-8">
                                <p className="text-gray-500">Beneficios no disponibles</p>
                            </div>
                        )}
                    </div>
                </div>

                <div itemScope itemType="https://schema.org/CryptoCurrency" className="hidden">
                    <meta itemProp="name" content="DIBS Token" />
                    <meta itemProp="description" content={t('schema_description')} />
                    <meta itemProp="url" content="https://musicdibs.com/dibs-token" />
                    <div itemProp="mainEntityOfPage" itemScope itemType="https://schema.org/WebPage">
                        <meta itemProp="url" content="https://musicdibs.com/dibs-token" />
                    </div>
                </div>
            </div>
        </section>
    );
}

function getIconComponent(iconName) {
    const icons = {
        Shield, Sparkles, Award, TrendingUp, Zap, Globe,
        Coins, Users, Crown, Gift
    };
    // Asegurarnos que iconName sea string y tenga valor
    return icons[iconName] || Shield;
}