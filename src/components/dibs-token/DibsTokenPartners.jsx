'use client';

import { Handshake } from "lucide-react";
import { useTranslations } from "next-intl";

export default function DibsTokenPartners() {
    const t = useTranslations('dibsToken.partners');

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

    // Obtener partners como array seguro
    const partners = getSafeArray(t.raw('partners'));

    return (
        <section className="py-20 px-4 bg-gray-50/30" itemScope itemType="https://schema.org/WebPageElement">
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

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {partners.length > 0 ? (
                        partners.map((partner, index) => {
                            // Verificar que partner no sea null/undefined
                            if (!partner) return null;
                            
                            return (
                                <div 
                                    key={index} 
                                    className="bg-white rounded-xl p-6 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 hover:shadow-lg border border-gray-200 min-h-[120px] hover:-translate-y-1"
                                >
                                    {partner.logo ? (
                                        <img 
                                            src={partner.logo} 
                                            alt={t('partner_alt', { name: partner.name || `Partner ${index + 1}` })}
                                            className="max-h-12 object-contain"
                                            loading="lazy"
                                            onError={(e) => {
                                                // Fallback si la imagen no carga
                                                e.target.style.display = 'none';
                                                const fallbackDiv = document.createElement('div');
                                                fallbackDiv.className = 'text-gray-400 text-center';
                                                fallbackDiv.innerHTML = `<div class="text-sm font-medium">${partner.name || 'Partner'}</div>`;
                                                e.target.parentNode.appendChild(fallbackDiv);
                                            }}
                                        />
                                    ) : (
                                        <div className="text-gray-400 text-center">
                                            <div className="text-sm font-medium">{partner.name || `Partner ${index + 1}`}</div>
                                        </div>
                                    )}
                                </div>
                            );
                        })
                    ) : (
                        // Mensaje cuando no hay partners
                        <div className="col-span-full text-center py-8">
                            <p className="text-gray-500">Socios no disponibles</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}