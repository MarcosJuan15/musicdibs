'use client';

import { useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

export default function HomeArtistsBanner() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

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
            {/* Background image with SEO optimization */}
            <div className="absolute inset-0">
                <Image
                    src="/assets/images/artists-background.png"
                    alt="Artistas de MusicDIBS - Plataforma de distribución musical"
                    fill
                    className="object-cover"
                    priority
                    quality={85}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                />
            </div>
            
            {/* Gradient overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600/80 via-pink-700/80 to-purple-700/80" />
            
            {/* Background pattern overlay for visual interest */}
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

            {/* Floating decorative elements - hidden from screen readers */}
            <div className="absolute top-6 left-6 w-12 h-12 border-2 border-white/20 rounded-full animate-pulse" aria-hidden="true" />
            <div className="absolute top-8 right-8 w-8 h-8 bg-white/10 rounded-lg rotate-45 animate-pulse" aria-hidden="true" />
            <div className="absolute bottom-6 left-12 w-6 h-6 border border-white/30 rotate-12 animate-pulse" aria-hidden="true" />
            <div className="absolute bottom-8 right-6 w-16 h-16 border border-white/20 rounded-full animate-pulse" aria-hidden="true" />

            {/* Main content */}
            <div className="relative z-10 container mx-auto px-6 text-center" ref={ref}>
                {/* Schema.org structured data */}
                <div itemScope itemType="https://schema.org/AggregateRating" className="hidden">
                    <meta itemProp="ratingValue" content="4.8" />
                    <meta itemProp="ratingCount" content="100000" />
                    <meta itemProp="bestRating" content="5" />
                    <meta itemProp="worstRating" content="1" />
                </div>

                <h1 
                    id="artists-stats-title"
                    className="text-3xl md:text-5xl font-bold text-white mb-3 leading-tight drop-shadow-lg"
                    itemProp="name"
                >
                    ¡MÁS DE 100.000 ARTISTAS YA
                    <br />
                    <span className="text-yellow-300" itemProp="slogan">UTILIZAN MUSICDIBS!</span>
                </h1>

                <p 
                    className="text-lg md:text-xl text-white/95 mb-6 font-medium drop-shadow-md"
                    itemProp="description"
                >
                    Impulsando el futuro de la música urbana con tecnología blockchain
                </p>

                {/* CTA Buttons with improved accessibility */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                    <button
                        onClick={() => handleScroll("pricing-toggle")}
                        className="bg-white text-pink-600 hover:bg-white/90 font-bold px-8 py-3 text-base rounded-full shadow-lg hover:translate-y-1 transition-transform duration-300 min-w-[180px] focus:ring-4 focus:ring-white/50 focus:outline-none"
                        aria-label="Únete ahora para proteger tu música"
                        itemProp="action"
                    >
                        ÚNETE AHORA
                    </button>

                    <button
                        onClick={() => handleScroll("testimonials-section")}
                        className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold px-8 py-3 text-base rounded-full shadow-lg hover:translate-y-1 transition-transform duration-300 min-w-[180px] focus:ring-4 focus:ring-white/50 focus:outline-none"
                        aria-label="Ver testimonios de artistas satisfechos"
                    >
                        VER TESTIMONIOS
                    </button>
                </div>
                
                {/* Stats with Schema.org markup */}
                <div 
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 max-w-3xl mx-auto"
                    itemScope
                    itemType="https://schema.org/ItemList"
                    role="list"
                    aria-label="Estadísticas de MusicDIBS"
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
                            <span className="sr-only">mil</span>
                        </div>
                        <div className="text-white/95 text-base drop-shadow-md" itemProp="name">
                            Artistas registrados
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
                            <span className="sr-only">millones</span>
                        </div>
                        <div className="text-white/95 text-base drop-shadow-md" itemProp="name">
                            Obras protegidas
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
                            <span className="sr-only">más de</span>
                        </div>
                        <div className="text-white/95 text-base drop-shadow-md" itemProp="name">
                            Países alcanzados
                        </div>
                    </div>
                </div>

                {/* Additional SEO text - hidden but readable by search engines */}
                <div className="sr-only" itemProp="description">
                    MusicDIBS es la plataforma líder en distribución musical digital con más de 100,000 artistas registrados, 
                    1,000,000 de obras protegidas y presencia en más de 50 países. Únete a la revolución de la música urbana 
                    con nuestra tecnología blockchain para proteger tus derechos de autor.
                </div>
            </div>
        </section>
    );
}