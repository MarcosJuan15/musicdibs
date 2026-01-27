'use client';

import { Users, Award, Briefcase, Rocket, Linkedin } from "lucide-react";
import Image from 'next/image';
import { useTranslations } from "next-intl";

export default function DibsTokenTeam() {
    const t = useTranslations('dibsToken.team');

    // Función para convertir cualquier valor a array seguro
    const getSafeArray = (rawData, defaultValue = []) => {
        // Si ya es un array, retornarlo
        if (Array.isArray(rawData)) return rawData;
        
        // Si es null/undefined, retornar array vacío o valor por defecto
        if (!rawData) return defaultValue;
        
        // Si es string, intentar parsear como JSON
        if (typeof rawData === 'string') {
            try {
                const parsed = JSON.parse(rawData);
                return Array.isArray(parsed) ? parsed : defaultValue;
            } catch {
                return defaultValue;
            }
        }
        
        // Si es objeto, convertir sus valores a array
        if (typeof rawData === 'object') {
            return Object.values(rawData);
        }
        
        // Cualquier otro caso, array vacío
        return defaultValue;
    };

    // Obtener datos como arrays seguros
    const foundingTeam = getSafeArray(t.raw('founding_team'));
    const teamMembers = getSafeArray(t.raw('team_members'));
    
    const colorVariants = [
        "from-blue-900/10 to-purple-800/10 border-blue-900/20",
        "from-purple-800/10 to-pink-600/10 border-purple-800/20", 
        "from-pink-600/10 to-blue-900/10 border-pink-600/20",
        "from-blue-900/10 to-pink-600/10 border-blue-900/20"
    ];

    return (
        <section className="py-20 px-4 bg-white" itemScope itemType="https://schema.org/WebPageElement">
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

                {/* Founding Team Section */}
                {foundingTeam.length > 0 ? (
                    <div className="mb-10">
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {foundingTeam.map((member, index) => {
                                // Verificar que member no sea null/undefined
                                if (!member) return null;
                                
                                // Asegurarnos que member.companies sea un array
                                const companies = Array.isArray(member.companies) ? member.companies : [];
                                
                                return (
                                    <div 
                                        key={index} 
                                        className="text-center bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 p-6 group relative"
                                    >
                                        {member.image ? (
                                            <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-900/20 group-hover:border-blue-900/40 transition-colors">
                                                <Image 
                                                    src={member.image}
                                                    alt={t('member_alt', { name: member.name || `Miembro ${index + 1}` })}
                                                    width={128}
                                                    height={128}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                                    onError={(e) => {
                                                        // Fallback si la imagen no carga
                                                        e.target.style.display = 'none';
                                                        const fallbackDiv = document.createElement('div');
                                                        fallbackDiv.className = 'w-full h-full bg-gradient-to-br from-blue-900/20 to-purple-800/20 flex items-center justify-center';
                                                        fallbackDiv.innerHTML = `<span class="text-4xl">👤</span>`;
                                                        e.target.parentNode.appendChild(fallbackDiv);
                                                    }}
                                                />
                                            </div>
                                        ) : (
                                            <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-900/20 group-hover:border-blue-900/40 transition-colors bg-gradient-to-br from-blue-900/20 to-purple-800/20 flex items-center justify-center">
                                                <span className="text-4xl">👤</span>
                                            </div>
                                        )}
                                        
                                        {member.linkedin && (
                                            <a
                                                href={member.linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="absolute top-4 right-4 w-8 h-8 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                                                aria-label={t('linkedin_aria_label', { name: member.name || `Miembro ${index + 1}` })}
                                            >
                                                <Linkedin className="w-4 h-4 text-white" />
                                            </a>
                                        )}

                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                            {member.name || `Miembro Fundador ${index + 1}`}
                                        </h3>
                                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-blue-900 to-purple-800 text-white mb-3">
                                            {member.role || 'Fundador'}
                                        </span>
                                        <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                                            {member.description || ''}
                                        </p>
                                        {companies.length > 0 && (
                                            <div className="flex flex-wrap gap-2 justify-center">
                                                {companies.map((company, idx) => (
                                                    <span 
                                                        key={idx} 
                                                        className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors"
                                                    >
                                                        {company}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ) : (
                    <div className="text-center py-8 mb-10">
                        <p className="text-gray-500">Equipo fundador no disponible</p>
                    </div>
                )}

                <div className="text-center mb-8 max-w-4xl mx-auto">
                    <p className="text-lg text-gray-600 leading-relaxed">
                        {t('extended_description')}
                    </p>
                </div>

                {/* Team Members Section */}
                {teamMembers.length > 0 ? (
                    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {teamMembers.map((member, index) => {
                            // Verificar que member no sea null/undefined
                            if (!member) return null;
                            
                            const colorVariant = colorVariants[index % colorVariants.length];
                            
                            return (
                                <div 
                                    key={index} 
                                    className={`text-center bg-gradient-to-br ${colorVariant} rounded-xl border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 p-4 group`}
                                >
                                    {member.image ? (
                                        <div className="relative w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden border-2 border-white/50 group-hover:border-white/80 transition-colors">
                                            <Image 
                                                src={member.image}
                                                alt={t('member_alt', { name: member.name || `Miembro ${index + 1}` })}
                                                width={80}
                                                height={80}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                                onError={(e) => {
                                                    e.target.style.display = 'none';
                                                    const fallbackDiv = document.createElement('div');
                                                    fallbackDiv.className = 'w-full h-full bg-white/20 flex items-center justify-center';
                                                    fallbackDiv.innerHTML = `<span class="text-2xl">👤</span>`;
                                                    e.target.parentNode.appendChild(fallbackDiv);
                                                }}
                                            />
                                        </div>
                                    ) : (
                                        <div className="relative w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden border-2 border-white/50 group-hover:border-white/80 transition-colors bg-white/20 flex items-center justify-center">
                                            <span className="text-2xl">👤</span>
                                        </div>
                                    )}
                                    <h4 className="text-base font-semibold text-gray-900 mb-1">
                                        {member.name || `Miembro ${index + 1}`}
                                    </h4>
                                    <p className="text-xs text-gray-700 font-medium">
                                        {member.role || 'Miembro del equipo'}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div className="text-center py-8">
                        <p className="text-gray-500">Miembros del equipo no disponibles</p>
                    </div>
                )}

                <div itemScope itemType="https://schema.org/Organization" className="hidden">
                    <meta itemProp="name" content="MusicDIBS Team" />
                    <meta itemProp="description" content={t('schema_description')} />
                </div>
            </div>
        </section>
    );
}