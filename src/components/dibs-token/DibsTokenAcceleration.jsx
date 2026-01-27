'use client';

import { Award, Rocket } from "lucide-react";
import { useTranslations } from "next-intl";

export default function DibsTokenAcceleration() {
    const t = useTranslations('dibsToken.acceleration');

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

    // Obtener programas como array seguro
    const programs = getSafeArray(t.raw('programs'));

    return (
        <section className="py-20 px-4 bg-white" itemScope itemType="https://schema.org/WebPageElement">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6" itemProp="headline">
                        {t('title')}
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-900 via-purple-800 to-pink-600 mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto" itemProp="description">
                        {t('description')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {programs.length > 0 ? (
                        programs.map((program, index) => {
                            // Verificar que program no sea null/undefined
                            if (!program) return null;
                            
                            return (
                                <div 
                                    key={index} 
                                    className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 flex items-center justify-center min-h-[160px]"
                                >
                                    <div className="grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
                                        {program.logo ? (
                                            <img 
                                                src={program.logo} 
                                                alt={t('logo_alt', { name: program.name || `Programa ${index + 1}` })}
                                                className="h-16 object-contain"
                                                loading="lazy"
                                                onError={(e) => {
                                                    // Fallback si la imagen no carga
                                                    e.target.style.display = 'none';
                                                    const fallbackDiv = document.createElement('div');
                                                    fallbackDiv.className = 'text-gray-400 text-center';
                                                    fallbackDiv.innerHTML = `<div class="text-sm">${program.name || 'Logo'}</div>`;
                                                    e.target.parentNode.appendChild(fallbackDiv);
                                                }}
                                            />
                                        ) : (
                                            <div className="text-gray-400 text-center">
                                                <div className="text-sm">{program.name || `Programa ${index + 1}`}</div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        // Mensaje cuando no hay programas
                        <div className="col-span-full text-center py-8">
                            <p className="text-gray-500">Programas de aceleración no disponibles</p>
                        </div>
                    )}
                </div>

                <div itemScope itemType="https://schema.org/Organization" className="hidden">
                    <meta itemProp="name" content="Musicdibs Acceleration Programs" />
                    <meta itemProp="description" content={t('schema_description')} />
                </div>
            </div>
        </section>
    );
}