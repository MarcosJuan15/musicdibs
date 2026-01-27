'use client';

import { Target, CheckCircle2, Calendar, TrendingUp } from "lucide-react";
import { useTranslations } from "next-intl";

export default function DibsTokenRoadmap() {
    const t = useTranslations('dibsToken.roadmap');

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

    // Obtener milestones como array seguro
    const milestones = getSafeArray(t.raw('milestones'));

    return (
        <section className="py-20 px-4 bg-gray-50/30" itemScope itemType="https://schema.org/WebPageElement">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6" itemProp="headline">
                        {t('title')}
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-900 via-purple-800 to-pink-600 mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto" itemProp="description">
                        {t('description')}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {milestones.length > 0 ? (
                        milestones.map((milestone, index) => {
                            // Verificar que milestone no sea null/undefined
                            if (!milestone) return null;
                            
                            // Asegurarnos que milestone.items sea un array
                            const items = Array.isArray(milestone.items) ? milestone.items : [];
                            
                            return (
                                <div
                                    key={index}
                                    className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 p-6 group"
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-blue-900/10 to-purple-800/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                                            <Calendar className="w-6 h-6 text-blue-900" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-blue-900">
                                            {milestone.year || `Etapa ${index + 1}`}
                                        </h3>
                                    </div>
                                    {items.length > 0 ? (
                                        <ul className="space-y-3">
                                            {items.map((item, idx) => (
                                                <li key={idx} className="flex items-start gap-3">
                                                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                                    <span className="text-sm text-gray-600 leading-relaxed">
                                                        {item}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p className="text-gray-500 text-sm italic">
                                            Hitos por definir
                                        </p>
                                    )}
                                </div>
                            );
                        })
                    ) : (
                        // Mensaje cuando no hay milestones
                        <div className="col-span-full text-center py-8">
                            <p className="text-gray-500">Hitos del roadmap no disponibles</p>
                        </div>
                    )}
                </div>

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

                <div itemScope itemType="https://schema.org/Action" className="hidden">
                    <meta itemProp="name" content="MusicDIBS Development Roadmap" />
                    <meta itemProp="description" content={t('schema_description')} />
                </div>
            </div>
        </section>
    );
}