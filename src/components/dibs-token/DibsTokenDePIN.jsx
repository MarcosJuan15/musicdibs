'use client';
import { Network, TrendingUp, Shield, Globe, Users, Zap } from "lucide-react";
import { useTranslations } from "next-intl";

export default function DibsTokenDePIN() {
    const t = useTranslations('dibsToken.depin');

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
    const rawCharacteristics = t.raw('characteristics');
    const rawBenefits = t.raw('benefits');
    
    const characteristics = getSafeArray(rawCharacteristics);
    const benefits = getSafeArray(rawBenefits);

    return (
        <section className="py-16 px-4 bg-white" itemScope itemType="https://schema.org/WebPageElement">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6" itemProp="headline">
                        {t('title')}
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-900 via-purple-800 to-pink-600 mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto" itemProp="description">
                        {t.rich('description', {
                            strong: (chunks) => <span className="font-semibold text-purple-800">{chunks}</span>
                        })}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {/* Columna de Características */}
                    <div className="bg-white rounded-xl border border-purple-800/30 shadow-sm hover:shadow-xl transition-all duration-300 p-6">
                        <h3 className="flex items-center gap-3 text-xl font-semibold text-gray-900 mb-6">
                            <div className="p-3 bg-gradient-to-br from-blue-900/10 to-purple-800/10 rounded-lg">
                                <Network className="w-6 h-6 text-blue-900" />
                            </div>
                            {t('characteristics_title')}
                        </h3>
                        <div className="space-y-4">
                            {characteristics.length > 0 ? (
                                characteristics.map((item, idx) => (
                                    <div key={idx} className="flex gap-3 group hover:bg-gradient-to-r hover:from-blue-900/5 hover:to-purple-800/5 p-3 rounded-lg transition-all duration-300">
                                        <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-900/20 to-purple-800/20 rounded-full flex items-center justify-center text-blue-900 font-semibold text-sm group-hover:scale-110 transition-transform">
                                            {idx + 1}
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-1">
                                                {item?.title || `Característica ${idx + 1}`}
                                            </h4>
                                            <p className="text-sm text-gray-600">
                                                {item?.description || ''}
                                            </p>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="text-gray-500 text-center py-4">
                                    No hay características disponibles
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Columna de Beneficios */}
                    <div className="bg-white rounded-xl border border-pink-600/30 shadow-sm hover:shadow-xl transition-all duration-300 p-6">
                        <h3 className="flex items-center gap-3 text-xl font-semibold text-gray-900 mb-6">
                            <div className="p-3 bg-gradient-to-br from-purple-800/10 to-pink-600/10 rounded-lg">
                                <TrendingUp className="w-6 h-6 text-purple-800" />
                            </div>
                            {t('benefits_title')}
                        </h3>
                        <div className="space-y-4">
                            {benefits.length > 0 ? (
                                benefits.map((item, idx) => {
                                    const IconComponent = getIconComponent(item?.icon);
                                    return (
                                        <div key={idx} className="p-4 bg-gradient-to-r from-purple-800/5 to-pink-600/5 rounded-lg hover:bg-gradient-to-r hover:from-purple-800/10 hover:to-pink-600/10 transition-all duration-300 group">
                                            <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                                                <div className="w-8 h-8 bg-gradient-to-br from-purple-800/10 to-pink-600/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                                    <IconComponent className="w-4 h-4 text-purple-800" />
                                                </div>
                                                {item?.title || `Beneficio ${idx + 1}`}
                                            </h4>
                                            <p className="text-sm text-gray-600">
                                                {item?.description || ''}
                                            </p>
                                        </div>
                                    );
                                })
                            ) : (
                                <p className="text-gray-500 text-center py-4">
                                    No hay beneficios disponibles
                                </p>
                            )}
                        </div>
                    </div>
                </div>

                <div className="text-center max-w-4xl mx-auto">
                    <div className="bg-gradient-to-r from-blue-900/10 via-purple-800/10 to-pink-600/10 rounded-2xl p-8 md:p-12 border border-gray-200">
                        <p className="text-lg font-semibold text-gray-900 leading-relaxed">
                            {t.rich('highlight', {
                                blue: (chunks) => <span className="text-blue-900">{chunks}</span>,
                                purple: (chunks) => <span className="text-purple-800">{chunks}</span>
                            })}
                        </p>
                    </div>
                </div>

                <div itemScope itemType="https://schema.org/Technology" className="hidden">
                    <meta itemProp="name" content="DePIN Technology - MusicDIBS" />
                    <meta itemProp="description" content={t('schema_description')} />
                    <meta itemProp="applicationCategory" content="Blockchain Infrastructure" />
                </div>
            </div>
        </section>
    );
}

function getIconComponent(iconName) {
    const icons = {
        Globe, Users, Shield, Zap
    };
    return icons[iconName] || Globe;
}