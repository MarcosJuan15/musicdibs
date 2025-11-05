import { Music, Users, ShoppingCart, Zap } from "lucide-react";
import Image from "next/image";

export default function HomeDistribution() {
    return (
        <section 
            className="py-16 md:py-20 bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600 relative overflow-hidden"
            itemScope 
            itemType="https://schema.org/Service"
            aria-labelledby="distribution-heading"
        >
            {/* Background image - EXACTAMENTE IGUAL */}
            <div 
                className="absolute inset-0"
                style={{
                    backgroundImage: "url(/assets/images/wave-background.png)",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />
            
            {/* Fondo con overlay - EXACTAMENTE IGUAL */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/90 via-purple-700/90 to-pink-600/90"></div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
                {/* Título - EXACTAMENTE IGUAL */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 
                        id="distribution-heading" 
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
                        itemProp="name"
                    >
                        Distribución y Promoción
                    </h2>
                    <p 
                        className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto"
                        itemProp="description"
                    >
                        Lleva tu música al mundo entero y conecta con millones de fans
                    </p>
                </div>

                {/* Grid de secciones - EXACTAMENTE IGUAL */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
                    {/* Distribución Mundial - EXACTAMENTE IGUAL */}
                    <div 
                        className="h-full flex flex-col bg-white/15 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-[1.02] cursor-pointer group"
                        itemScope
                        itemType="https://schema.org/Service"
                    >
                        <div className="flex items-center mb-4 md:mb-6">
                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-green-500 flex items-center justify-center mr-3 md:mr-4">
                                <Music className="w-5 h-5 md:w-6 md:h-6 text-white" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-white" itemProp="name">
                                Distribución Mundial
                            </h3>
                        </div>
                        <p className="text-white/80 mb-4 md:mb-6 text-base md:text-lg" itemProp="description">
                            Despliega tus obras a nivel mundial en todas las plataformas digitales +220 DSPs y GANA Royalties
                        </p>
                        <div className="mt-auto">
                            <div className="grid grid-cols-2 gap-3 md:gap-4">
                                {[
                                    { src: "/assets/images/spotify-logo.png", alt: "Spotify - Plataforma de streaming musical" },
                                    { src: "/assets/images/apple-music-logo.png", alt: "Apple Music - Servicio de música de Apple" },
                                    { src: "/assets/images/amazon-music-logo.png", alt: "Amazon Music - Plataforma musical de Amazon" },
                                    { src: "/assets/images/deezer-logo.png", alt: "Deezer - Servicio de música en streaming" },
                                ].map((platform, idx) => (
                                    <div
                                        key={idx}
                                        className="bg-white/10 rounded-xl p-3 md:p-4 flex items-center justify-center h-14 md:h-16"
                                    >
                                        <Image
                                            src={platform.src}
                                            alt={platform.alt}
                                            width={idx === 1 || idx === 3 ? 80 : 60}
                                            height={idx === 1 || idx === 3 ? 80 : 60}
                                            className={`object-contain ${idx === 1 || idx === 3 ? "h-20 md:h-22" : "h-6 md:h-8"}`}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Promoción en Redes Sociales - EXACTAMENTE IGUAL */}
                    <div 
                        className="h-full flex flex-col bg-white/15 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-[1.02] cursor-pointer group"
                        itemScope
                        itemType="https://schema.org/Service"
                    >
                        <div className="flex items-center mb-4 md:mb-6">
                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-pink-500 flex items-center justify-center mr-3 md:mr-4">
                                <Users className="w-5 h-5 md:w-6 md:h-6 text-white" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-white" itemProp="name">
                                Promoción en Redes Sociales
                            </h3>
                        </div>
                        <p className="text-white/80 mb-4 md:mb-6 text-base md:text-lg" itemProp="description">
                            Promociónate en nuestras redes sociales con ¡+300.000 seguidores!
                        </p>
                        <div className="mt-auto">
                            <div className="flex justify-center space-x-4 md:space-x-6">
                                <a 
                                    href="https://www.instagram.com/musicdibs/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="w-24 h-32 md:w-32 md:h-40 rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300"
                                    aria-label="Síguenos en Instagram para promociones"
                                >
                                    <Image
                                        src="/assets/images/instagram-promo.png"
                                        alt="Promoción en Instagram - MusicDIBS con más de 300,000 seguidores"
                                        width={128}
                                        height={160}
                                        className="w-full h-full object-cover"
                                    />
                                </a>
                                <a 
                                    href="https://www.tiktok.com/@musicdibs_" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="w-24 h-32 md:w-32 md:h-40 rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300"
                                    aria-label="Síguenos en TikTok para promociones"
                                >
                                    <Image
                                        src="/assets/images/tiktok-promo.png"
                                        alt="Promoción en TikTok - MusicDIBS con contenido viral musical"
                                        width={128}
                                        height={160}
                                        className="w-full h-full object-cover"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Marketplace - EXACTAMENTE IGUAL */}
                    <div 
                        className="h-full flex flex-col bg-white/15 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-[1.02] cursor-pointer group"
                        itemScope
                        itemType="https://schema.org/Service"
                    >
                        <div className="flex flex-col items-center text-center h-full justify-between">
                            <div className="w-full">
                                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-orange-500 flex items-center justify-center mb-4 md:mb-6 mx-auto">
                                    <ShoppingCart className="w-8 h-8 md:w-10 md:h-10 text-white" />
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4" itemProp="name">
                                    Marketplace
                                </h3>
                                <p className="text-white/80 text-base md:text-lg" itemProp="description">
                                    Vende tus creaciones en nuestro market y GANA dinero
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* NFTs & Marketing - EXACTAMENTE IGUAL */}
                    <div 
                        className="h-full flex flex-col bg-white/15 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-[1.02] cursor-pointer group"
                        itemScope
                        itemType="https://schema.org/Service"
                    >
                        <div className="flex flex-col items-center text-center h-full justify-between">
                            <div className="w-full">
                                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-pink-500 flex items-center justify-center mb-4 md:mb-6 mx-auto">
                                    <Zap className="w-8 h-8 md:w-10 md:h-10 text-white" />
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4" itemProp="name">
                                    NFTs & Marketing
                                </h3>
                                <p className="text-white/80 text-base md:text-lg" itemProp="description">
                                    Genera NFTs para ofrecerlos a tus seguidores como parte de tus campañas de marketing
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Schema.org structured data - OCULTO PARA SEO */}
            <div className="hidden">
                <div itemScope itemType="https://schema.org/Organization">
                    <meta itemProp="name" content="MusicDIBS Distribución Musical" />
                    <meta itemProp="description" content="Servicios de distribución musical global en más de 220 plataformas digitales" />
                    <meta itemProp="url" content="https://musicdibs.com" />
                </div>
                <div itemScope itemType="https://schema.org/Service">
                    <h3 itemProp="name">Distribución Musical Global</h3>
                    <p itemProp="description">
                        Distribución en Spotify, Apple Music, Amazon Music, Deezer y más de 220 plataformas digitales.
                        Promoción en redes sociales con más de 300,000 seguidores.
                    </p>
                    <meta itemProp="serviceType" content="Distribución Digital de Música" />
                    <meta itemProp="provider" content="MusicDIBS" />
                    <meta itemProp="areaServed" content="Global" />
                </div>
            </div>
        </section>
    );
}