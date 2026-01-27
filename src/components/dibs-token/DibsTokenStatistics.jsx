'use client';

import { useState, useEffect } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useTranslations } from "next-intl";

export default function DibsTokenStatistics() {
    const t = useTranslations('dibsToken.statistics');
    const [hasAnimated, setHasAnimated] = useState(false);
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    useEffect(() => {
        if (inView && !hasAnimated) {
            setHasAnimated(true);
        }
    }, [inView, hasAnimated]);

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

    // Obtener stats como array seguro
    const stats = getSafeArray(t.raw('stats'));

    return (
        <section 
            className="py-20 px-4 bg-gradient-to-br from-blue-900/10 via-purple-800/10 to-pink-600/10" 
            itemScope 
            itemType="https://schema.org/WebPageElement"
        >
            <div className="container mx-auto max-w-6xl" ref={ref}>
                <div className="grid md:grid-cols-3 gap-8">
                    {stats.length > 0 ? (
                        stats.map((stat, index) => {
                            // Verificar que stat no sea null/undefined
                            if (!stat) return null;
                            
                            // Asegurarnos que stat.number sea un número
                            const statNumber = typeof stat.number === 'number' ? stat.number : 
                                             typeof stat.number === 'string' ? parseInt(stat.number.replace(/[^0-9]/g, '')) || 0 : 0;
                            
                            const suffix = stat.suffix || '';
                            
                            return (
                                <div key={index} className="text-center p-8 bg-white/80 backdrop-blur rounded-2xl hover:shadow-xl transition-shadow">
                                    <p className="text-5xl font-bold bg-gradient-to-r from-blue-900 to-purple-800 bg-clip-text text-transparent mb-2">
                                        {hasAnimated ? (
                                            <CountUp 
                                                end={statNumber}
                                                duration={2.5}
                                                delay={index * 0.3}
                                                suffix={suffix}
                                            />
                                        ) : (
                                            `0${suffix}`
                                        )}
                                    </p>
                                    <p className="text-gray-600">{stat.label || `Estadística ${index + 1}`}</p>
                                </div>
                            );
                        })
                    ) : (
                        // Mensaje cuando no hay stats
                        <div className="col-span-full text-center py-8">
                            <p className="text-gray-500">Estadísticas no disponibles</p>
                        </div>
                    )}
                </div>

                {stats.length > 0 && (
                    <div itemScope itemType="https://schema.org/QuantitativeValue" className="hidden">
                        <meta itemProp="name" content="MusicDIBS Platform Statistics" />
                        {stats.map((stat, index) => {
                            if (!stat) return null;
                            
                            const statNumber = typeof stat.number === 'number' ? stat.number : 
                                             typeof stat.number === 'string' ? parseInt(stat.number.replace(/[^0-9]/g, '')) || 0 : 0;
                            const suffix = stat.suffix || '';
                            
                            return (
                                <div key={index} itemScope itemType="https://schema.org/PropertyValue">
                                    <meta itemProp="name" content={stat.label || `Estadística ${index + 1}`} />
                                    <meta itemProp="value" content={`${statNumber}${suffix}`} />
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </section>
    );
}