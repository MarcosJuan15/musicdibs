'use client';

import { useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function HomeArtistsBanner() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    const t = useTranslations('home.artists_banner');

    const handleScroll = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section 
            className="relative py-12 overflow-hidden"
            aria-labelledby="artists-stats-title"
            itemScope
            itemType="https://schema.org/Organization"
        >
            {/* Background image */}
            <div className="absolute inset-0">
                <Image
                    src="/assets/images/artists-background.png"
                    alt="Artists background"
                    fill
                    className="object-cover"
                    priority
                    quality={85}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                />
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600/80 via-pink-700/80 to-purple-700/80" />
            
            <div className="absolute inset-0 opacity-10" aria-hidden="true">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
                            radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.3) 0%, transparent 50%),
                            radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.2) 0%, transparent 50%)
                        `,
                        backgroundSize: "100px 100px, 150px 150px",
                    }}
                />
            </div>

            {/* Floating elements */}
            <div className="absolute top-6 left-6 w-12 h-12 border-2 border-white/20 rounded-full animate-pulse" aria-hidden="true" />
            <div className="absolute top-8 right-8 w-8 h-8 bg-white/10 rounded-lg rotate-45 animate-pulse" aria-hidden="true" />
            <div className="absolute bottom-6 left-12 w-6 h-6 border border-white/30 rotate-12 animate-pulse" aria-hidden="true" />
            <div className="absolute bottom-8 right-6 w-16 h-16 border border-white/20 rounded-full animate-pulse" aria-hidden="true" />

            {/* Main content */}
            <div className="relative z-10 container mx-auto px-6 text-center" ref={ref}>
                <h1 
                    id="artists-stats-title"
                    className="text-3xl md:text-5xl font-bold text-white mb-3 leading-tight drop-shadow-lg"
                    itemProp="name"
                >
                    {t('title_part1')}
                    <br />
                    <span className="text-yellow-300" itemProp="slogan">{t('title_part2')}</span>
                </h1>

                <p 
                    className="text-lg md:text-xl text-white/95 mb-6 font-medium drop-shadow-md"
                    itemProp="description"
                >
                    {t('subtitle')}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                    <button
                        onClick={() => handleScroll("pricing-toggle")}
                        className="bg-white text-pink-600 hover:bg-white/90 font-bold px-8 py-3 text-base rounded-full shadow-lg hover:translate-y-1 transition-transform duration-300 min-w-[180px] focus:ring-4 focus:ring-white/50 focus:outline-none"
                        aria-label={t('join_now')}
                    >
                        {t('join_now')}
                    </button>

                    <button
                        onClick={() => handleScroll("testimonials-section")}
                        className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold px-8 py-3 text-base rounded-full shadow-lg hover:translate-y-1 transition-transform duration-300 min-w-[180px] focus:ring-4 focus:ring-white/50 focus:outline-none"
                        aria-label={t('see_testimonials')}
                    >
                        {t('see_testimonials')}
                    </button>
                </div>
                
                {/* Stats */}
                <div 
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 max-w-3xl mx-auto"
                    itemScope
                    itemType="https://schema.org/ItemList"
                    role="list"
                    aria-label="Statistics"
                >
                    <div 
                        className="text-center"
                        itemProp="itemListElement"
                        itemScope
                        itemType="https://schema.org/ListItem"
                        role="listitem"
                    >
                        <meta itemProp="position" content="1" />
                        <div className="text-2xl md:text-3xl font-bold text-yellow-300 mb-1 drop-shadow-lg flex justify-center items-baseline gap-1">
                            {inView ? <CountUp end={100000} duration={3} separator="," /> : 0}
                            <span aria-hidden="true">K+</span>
                        </div>
                        <div className="text-white/95 text-base drop-shadow-md" itemProp="name">
                            {t('artists_registered')}
                        </div>
                    </div>
                    
                    <div 
                        className="text-center"
                        itemProp="itemListElement"
                        itemScope
                        itemType="https://schema.org/ListItem"
                        role="listitem"
                    >
                        <meta itemProp="position" content="2" />
                        <div className="text-2xl md:text-3xl font-bold text-yellow-300 mb-1 drop-shadow-lg flex justify-center items-baseline gap-1">
                            {inView ? <CountUp end={1000000} duration={3} separator="," /> : 0}
                            <span aria-hidden="true">M+</span>
                        </div>
                        <div className="text-white/95 text-base drop-shadow-md" itemProp="name">
                            {t('works_protected')}
                        </div>
                    </div>
                    
                    <div 
                        className="text-center"
                        itemProp="itemListElement"
                        itemScope
                        itemType="https://schema.org/ListItem"
                        role="listitem"
                    >
                        <meta itemProp="position" content="3" />
                        <div className="text-2xl md:text-3xl font-bold text-yellow-300 mb-1 drop-shadow-lg flex justify-center items-baseline gap-1">
                            {inView ? <CountUp end={50} duration={3} /> : 0}
                            <span aria-hidden="true">+</span>
                        </div>
                        <div className="text-white/95 text-base drop-shadow-md" itemProp="name">
                            {t('countries_reached')}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}