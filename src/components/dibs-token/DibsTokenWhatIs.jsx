// src/components/dibs-token/DibsTokenWhatIs.jsx
import Image from 'next/image';

export default function DibsTokenWhatIs() {
    return (
        <section className="py-20 px-4 bg-white" itemScope itemType="https://schema.org/WebPageElement">
            <div className="container mx-auto max-w-6xl">
                {/* Título centrado */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6" itemProp="headline">
                        ¿Qué es Musicdibs?
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-900 via-purple-800 to-pink-600 mx-auto"></div>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
                    {/* Contenido de texto - centrado en móvil, izquierda en desktop */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6 order-2 lg:order-1">
                        <p className="text-lg text-gray-600 leading-relaxed" itemProp="description">
                            <span className="font-semibold text-gray-900">Musicdibs</span> es la plataforma líder mundial en registro de propiedad intelectual del sector musical de manera descentralizada, utilizando tecnología blockchain de última generación.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Diseñada para proteger las creaciones de todo tipo de artistas musicales y audiovisuales, Musicdibs garantiza la seguridad y autenticidad de las obras en más de <span className="font-semibold text-blue-900">175 países</span>.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Con un sistema accesible y sin interrupciones, permite a los creadores contemporáneos registrar sus obras de manera permanente y sin costos de mantenimiento, asegurando la verificación y defensa de la autoría en cualquier jurisdicción adherida al Convenio de Berna.
                        </p>
                        
                        {/* Puntos destacados en móvil */}
                        <div className="lg:hidden grid grid-cols-2 gap-4 mt-8">
                            <div className="bg-gradient-to-br from-blue-900/5 to-blue-900/10 p-4 rounded-lg text-center">
                                <p className="font-semibold text-blue-900">Protección Global</p>
                                <p className="text-sm text-gray-600">175+ países</p>
                            </div>
                            <div className="bg-gradient-to-br from-purple-800/5 to-purple-800/10 p-4 rounded-lg text-center">
                                <p className="font-semibold text-purple-800">Blockchain</p>
                                <p className="text-sm text-gray-600">Inmutable</p>
                            </div>
                            <div className="bg-gradient-to-br from-pink-600/5 to-pink-600/10 p-4 rounded-lg text-center">
                                <p className="font-semibold text-pink-600">Descentralizado</p>
                                <p className="text-sm text-gray-600">Sin intermediarios</p>
                            </div>
                            <div className="bg-gradient-to-br from-blue-900/5 to-purple-800/10 p-4 rounded-lg text-center">
                                <p className="font-semibold text-blue-900">32% APR</p>
                                <p className="text-sm text-gray-600">Recompensas</p>
                            </div>
                        </div>
                    </div>
                    
                    {/* Gráfico - siempre centrado */}
                    <div className="w-full lg:w-1/2 order-1 lg:order-2">
                        <div className="relative max-w-2xl mx-auto">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-800/10 to-pink-600/10 rounded-3xl blur-2xl" />
                            <div className="relative bg-gray-50 p-6 md:p-8 rounded-3xl shadow-2xl border border-gray-200">
                                <Image
                                    src="/assets/images/dibs-platform-architecture.png"
                                    alt="Arquitectura de la plataforma MusicDIBS - Blogchain Platform con Digital ID, Admin Panel, Music Composition y Streaming Platforms"
                                    width={600}
                                    height={400}
                                    className="w-full h-auto rounded-xl"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Puntos destacados en desktop */}
                <div className="hidden lg:grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
                    <div className="bg-gradient-to-br from-blue-900/5 to-blue-900/10 p-6 rounded-xl text-center hover:shadow-lg transition-shadow border border-blue-900/10">
                        <p className="font-semibold text-blue-900 text-lg">Protección Global</p>
                        <p className="text-gray-600 mt-2">175+ países</p>
                    </div>
                    <div className="bg-gradient-to-br from-purple-800/5 to-purple-800/10 p-6 rounded-xl text-center hover:shadow-lg transition-shadow border border-purple-800/10">
                        <p className="font-semibold text-purple-800 text-lg">Blockchain</p>
                        <p className="text-gray-600 mt-2">Tecnología Inmutable</p>
                    </div>
                    <div className="bg-gradient-to-br from-pink-600/5 to-pink-600/10 p-6 rounded-xl text-center hover:shadow-lg transition-shadow border border-pink-600/10">
                        <p className="font-semibold text-pink-600 text-lg">Descentralizado</p>
                        <p className="text-gray-600 mt-2">Sin intermediarios</p>
                    </div>
                    <div className="bg-gradient-to-br from-blue-900/5 to-purple-800/10 p-6 rounded-xl text-center hover:shadow-lg transition-shadow border border-blue-900/10">
                        <p className="font-semibold text-blue-900 text-lg">32% APR</p>
                        <p className="text-gray-600 mt-2">En recompensas</p>
                    </div>
                </div>

                {/* Schema.org para SoftwareApplication */}
                <div itemScope itemType="https://schema.org/SoftwareApplication" className="hidden">
                    <meta itemProp="name" content="MusicDIBS Platform" />
                    <meta itemProp="description" content="Plataforma descentralizada para registro y protección de propiedad intelectual musical usando tecnología blockchain" />
                    <meta itemProp="applicationCategory" content="BusinessApplication" />
                    <meta itemProp="operatingSystem" content="Web-based" />
                </div>
            </div>
        </section>
    );
}