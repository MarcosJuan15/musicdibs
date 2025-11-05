// src/components/dibs-token/DibsTokenDePIN.jsx
"use client";
import { Network, TrendingUp, Shield, Globe, Users, Zap } from "lucide-react";

export default function DibsTokenDePIN() {
    const characteristics = [
        {
            title: "Descentralización de la Gestión",
            desc: "La red blockchain permite que los artistas y creadores registren sus obras sin depender de intermediarios."
        },
        {
            title: "Token DIBS como Herramienta de Acceso",
            desc: "El token DIBS es un activo digital que otorga a los usuarios el derecho de acceso a los servicios de Musicdibs."
        },
        {
            title: "Registro Inmutable de Obras",
            desc: "Todas las transacciones y registros de obras en Musicdibs son inmutables y no pueden ser alterados."
        },
        {
            title: "Sostenibilidad y Escalabilidad",
            desc: "Al utilizar una red descentralizada, Musicdibs escala sin depender de una entidad centralizada."
        }
    ];

    const benefits = [
        {
            icon: Globe,
            title: "Transparencia Total",
            desc: "La red pública permite que cualquier usuario pueda verificar el estado y los derechos de las obras registradas."
        },
        {
            icon: Users,
            title: "Acceso Global",
            desc: "Musicdibs rompe barreras geográficas al permitir que creadores de todo el mundo protejan sus derechos."
        },
        {
            icon: Shield,
            title: "Empoderamiento de Creadores",
            desc: "Los artistas y creadores tienen control total sobre la gestión de su propiedad intelectual."
        }
    ];

    return (
        <section className="py-16 px-4 bg-white" itemScope itemType="https://schema.org/WebPageElement">
            <div className="container mx-auto max-w-6xl">
                {/* Header centrado con rayita decorativa */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6" itemProp="headline">
                        Infraestructura Descentralizada
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-900 via-purple-800 to-pink-600 mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto" itemProp="description">
                        El enfoque <span className="font-semibold text-purple-800">DePIN</span> (Redes de Infraestructuras Físicas Descentralizadas) de Musicdibs se centra en la descentralización de la gestión y protección de la propiedad intelectual.
                    </p>
                </div>

                {/* Manteniendo la estructura de tablas que te gusta */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {/* Características */}
                    <div className="bg-white rounded-xl border border-purple-800/30 shadow-sm hover:shadow-xl transition-all duration-300 p-6">
                        <h3 className="flex items-center gap-3 text-xl font-semibold text-gray-900 mb-6">
                            <div className="p-3 bg-gradient-to-br from-blue-900/10 to-purple-800/10 rounded-lg">
                                <Network className="w-6 h-6 text-blue-900" />
                            </div>
                            Características del enfoque DePIN
                        </h3>
                        <div className="space-y-4">
                            {characteristics.map((item, idx) => (
                                <div key={idx} className="flex gap-3 group hover:bg-gradient-to-r hover:from-blue-900/5 hover:to-purple-800/5 p-3 rounded-lg transition-all duration-300">
                                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-900/20 to-purple-800/20 rounded-full flex items-center justify-center text-blue-900 font-semibold text-sm group-hover:scale-110 transition-transform">
                                        {idx + 1}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                                        <p className="text-sm text-gray-600">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Beneficios */}
                    <div className="bg-white rounded-xl border border-pink-600/30 shadow-sm hover:shadow-xl transition-all duration-300 p-6">
                        <h3 className="flex items-center gap-3 text-xl font-semibold text-gray-900 mb-6">
                            <div className="p-3 bg-gradient-to-br from-purple-800/10 to-pink-600/10 rounded-lg">
                                <TrendingUp className="w-6 h-6 text-purple-800" />
                            </div>
                            Beneficios del enfoque DePIN
                        </h3>
                        <div className="space-y-4">
                            {benefits.map((item, idx) => (
                                <div key={idx} className="p-4 bg-gradient-to-r from-purple-800/5 to-pink-600/5 rounded-lg hover:bg-gradient-to-r hover:from-purple-800/10 hover:to-pink-600/10 transition-all duration-300 group">
                                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                                        <div className="w-8 h-8 bg-gradient-to-br from-purple-800/10 to-pink-600/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                            <item.icon className="w-4 h-4 text-purple-800" />
                                        </div>
                                        {item.title}
                                    </h4>
                                    <p className="text-sm text-gray-600">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Sección destacada */}
                <div className="text-center max-w-4xl mx-auto">
                    <div className="bg-gradient-to-r from-blue-900/10 via-purple-800/10 to-pink-600/10 rounded-2xl p-8 md:p-12 border border-gray-200">
                        <p className="text-lg font-semibold text-gray-900 leading-relaxed">
                            El enfoque <span className="text-blue-900">DePIN</span> de Musicdibs crea un <span className="text-purple-800">ecosistema más inclusivo y seguro</span> para la gestión de la propiedad intelectual.
                        </p>
                    </div>
                </div>

                {/* Schema.org para Technology */}
                <div itemScope itemType="https://schema.org/Technology" className="hidden">
                    <meta itemProp="name" content="DePIN Technology - MusicDIBS" />
                    <meta itemProp="description" content="Infraestructura descentralizada para la protección de propiedad intelectual musical" />
                    <meta itemProp="applicationCategory" content="Blockchain Infrastructure" />
                </div>
            </div>
        </section>
    );
}