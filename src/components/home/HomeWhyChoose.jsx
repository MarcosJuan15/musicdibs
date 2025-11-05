'use client';

import { useState } from "react";
import { Shield, Zap, Globe, Ban } from "lucide-react";

export default function HomeWhyChoose() {
    const [openModalIndex, setOpenModalIndex] = useState(null);

    const features = [
        {
            icon: <Shield className="w-8 h-8 text-white" />,
            title: "Protección Legal Global",
            description: "Validez jurídica internacional respaldada por blockchain",
            color: "from-pink-500 to-purple-600",
            modalContent: (
                <>
                    Cada registro en MusicDIBS genera un certificado digital inmutable respaldado por tecnología Blockchain, válido como prueba legal de autoría. Este certificado cumple con normativas internacionales y nacionales, incluyendo el{" "}
                    <a
                        href="https://www.wipo.int/treaties/es/ip/berne/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 font-semibold underline hover:opacity-80"
                    >
                        Convenio de Berna
                    </a>
                    , el{" "}
                    <a
                        href="https://www.wipo.int/treaties/es/ip/wct/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 font-semibold underline hover:opacity-80"
                    >
                        Tratado de la OMPI
                    </a>
                    , la{" "}
                    <a
                        href="https://digital-strategy.ec.europa.eu/es/policies/copyright"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 font-semibold underline hover:opacity-80"
                    >
                        Directiva sobre Derechos de Autor en la Era Digital
                    </a>{" "}
                    y regulaciones sobre Blockchain aplicadas a la propiedad intelectual.
                </>
            ),
        },
        {
            icon: <Zap className="w-8 h-8 text-white" />,
            title: "Registro Instantáneo",
            description: "Protege tu obra en segundos, no en semanas. SIN burocracia.",
            color: "from-purple-500 to-blue-600",
            modalContent: (
                <>
                    Protección al instante, sin complicaciones. Olvídate del papeleo y de los procesos lentos y costosos. Con MusicDIBS, registrar tu música es{" "}
                    <span className="text-purple-600 font-semibold">
                        tan fácil como subir tu archivo: en solo segundos generamos una huella digital única,
                    </span>{" "}
                    y la registramos en blockchain{" "}
                    <span className="text-purple-600 font-semibold">
                        con validez legal internacional.
                    </span>{" "}
                    Sin intermediarios y por una fracción del coste de un registro tradicional.
                </>
            ),
        },
        {
            icon: <Globe className="w-8 h-8 text-white" />,
            title: "Distribución Mundial",
            description: "Lanza en todas las plataformas digitales. GANA royalties",
            color: "from-blue-500 to-cyan-600",
            modalContent: (
                <>
                    Distribución Mundial. Lanza tu música en las{" "}
                    <span className="text-purple-600 font-semibold">
                        plataformas digitales más importantes del mundo: Spotify, Apple Music, Amazon Music, YouTube Music
                    </span>{" "}
                    y muchas más, hasta 220.{" "}
                    <span className="text-purple-600 font-semibold">
                        Gana royalties desde el primer stream
                    </span>{" "}
                    y haz que tu talento cruce fronteras sin intermediarios ni comisiones ocultas. Controla todo desde una sola plataforma, con estadísticas en tiempo real y soporte personalizado.
                </>
            ),
        },
        {
            icon: <Ban className="w-8 h-8 text-white" />,
            title: "SIN Censura",
            description: "Registra y vende tus creaciones con IA",
            color: "from-cyan-500 to-pink-600",
            modalContent: (
                <>
                    Sin Censura. Sin límites. Solo libertad creativa. En MusicDIBS creemos que el arte no debe tener fronteras. Por eso,{" "}
                    <span className="text-purple-600 font-semibold">
                        aceptamos registros de obras generadas con inteligencia artificial
                    </span>{" "}
                    o experimentales, sin restricciones ni filtros, siempre que tengas todos los derechos de las mismas y no sean plagios.
                </>
            ),
        },
    ];

    return (
        <section 
            className="py-20 bg-gradient-to-b from-purple-900 to-purple-800"
            itemScope 
            itemType="https://schema.org/Service"
            aria-labelledby="why-choose-heading"
        >
            {/* Schema.org markup oculto */}
            <div itemScope itemType="https://schema.org/Organization" className="hidden">
                <meta itemProp="name" content="MusicDIBS" />
                <meta itemProp="description" content="Plataforma de registro y distribución musical con tecnología blockchain" />
                <meta itemProp="url" content="https://musicdibs.com" />
            </div>

            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 id="why-choose-heading" className="text-4xl md:text-5xl font-bold text-white mb-4">
                    ¿Por qué elegir MusicDIBS?
                </h2>
                <p className="text-lg text-white/80 max-w-2xl mx-auto mb-16">
                    Registra, distribuye y monetiza tus canciones en minutos. Genera ingresos reales con la solución digital más rápida y accesible creada para artistas independientes.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            onClick={() => setOpenModalIndex(index)}
                            className="cursor-pointer bg-white/10 rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 flex flex-col h-full"
                        >
                            <div
                                className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}
                            >
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-white/70">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {openModalIndex !== null && (
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
                    <div className="bg-white rounded-xl p-8 max-w-3xl max-h-[70vh] overflow-y-auto mx-4 relative text-black shadow-lg">
                        <button
                            onClick={() => setOpenModalIndex(null)}
                            className="absolute top-2 right-2 text-black text-xl font-bold"
                        >
                            ✕
                        </button>
                        <h2 className="text-2xl font-bold mb-4">
                            {features[openModalIndex].title}
                        </h2>
                        <div className="text-gray-800 leading-relaxed">
                            {features[openModalIndex].modalContent}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}