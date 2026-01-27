// src/components/home/HomeDistribution.jsx
import { Music, Users, ShoppingCart, Zap } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function HomeDistribution() {
    const t = useTranslations('home.distribution'); 

    return (
        <section 
            className="py-16 md:py-20 bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600 relative overflow-hidden"
            itemScope 
            itemType="https://schema.org/Service"
            aria-labelledby="distribution-heading"
        >
            {/* Background image */}
            <div 
                className="absolute inset-0"
                style={{
                    backgroundImage: "url(/assets/images/wave-background.png)",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />
            
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/90 via-purple-700/90 to-pink-600/90"></div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
                <div className="text-center mb-12 md:mb-16">
                    <h2 
                        id="distribution-heading" 
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
                        itemProp="name"
                    >
                        {t('title')}
                    </h2>
                    <p 
                        className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto"
                        itemProp="description"
                    >
                        {t('subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
                    {/* World Distribution */}
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
                                {t('world_distribution_title')}
                            </h3>
                        </div>
                        <p className="text-white/80 mb-4 md:mb-6 text-base md:text-lg" itemProp="description">
                            {t('world_distribution_description')}
                        </p>
                        <div className="mt-auto">
                            <div className="grid grid-cols-2 gap-3 md:gap-4">
                                {[
                                    { src: "/assets/images/spotify-logo.png", alt: "Spotify" },
                                    { src: "/assets/images/apple-music-logo.png", alt: "Apple Music" },
                                    { src: "/assets/images/amazon-music-logo.png", alt: "Amazon Music" },
                                    { src: "/assets/images/deezer-logo.png", alt: "Deezer" },
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

                    {/* Social Promotion */}
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
                                {t('social_promotion_title')}
                            </h3>
                        </div>
                        <p className="text-white/80 mb-4 md:mb-6 text-base md:text-lg" itemProp="description">
                            {t('social_promotion_description')}
                        </p>
                        <div className="mt-auto">
                            <div className="flex justify-center space-x-4 md:space-x-6">
                                <a 
                                    href="https://www.instagram.com/musicdibs/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="w-24 h-32 md:w-32 md:h-40 rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300"
                                    aria-label="Instagram"
                                >
                                    <Image
                                        src="/assets/images/instagram-promo.png"
                                        alt="Instagram promotion"
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
                                    aria-label="TikTok"
                                >
                                    <Image
                                        src="/assets/images/tiktok-promo.png"
                                        alt="TikTok promotion"
                                        width={128}
                                        height={160}
                                        className="w-full h-full object-cover"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Marketplace */}
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
                                    {t('marketplace_title')}
                                </h3>
                                <p className="text-white/80 text-base md:text-lg" itemProp="description">
                                    {t('marketplace_description')}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* NFTs & Marketing */}
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
                                    {t('nfts_marketing_title')}
                                </h3>
                                <p className="text-white/80 text-base md:text-lg" itemProp="description">
                                    {t('nfts_marketing_description')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}