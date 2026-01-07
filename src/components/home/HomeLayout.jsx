'use client';

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Script from "next/script";
import HomePromoBanner from './HomePromoBanner';
import HomeNavbar from './HomeNavbar';
import HomeHero from './HomeHero';
import HomeWhyChoose from './HomeWhyChoose';
import HomeDistribution from './HomeDistribution';
import HomeArtistsBanner from './HomeArtistsBanner';
import HomeTestimonials from './HomeTestimonials';
import HomePricing from './HomePricing';
import HomeMarquee from './HomeMarquee';
import HomeIndividualRegistration from './HomeIndividualRegistration';
import HomeTutorial from './HomeTutorial';
import HomePromoPopup from './HomePromoPopup';  // ¡IMPORTANTE! Asegúrate de que esto existe
import Footer from '@/components/common/Footer';

// Structured Data MEJORADO para SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Musicdibs",
  "description": "Plataforma de registro y distribución musical con tecnología blockchain para artistas independientes",
  "url": "https://musicdibs.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://musicdibs.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Musicdibs",
    "logo": {
      "@type": "ImageObject",
      "url": "https://musicdibs.com/assets/images/logo.png",
      "width": 120,
      "height": 48
    }
  }
};

// Schema adicional para VideoObject (optimización del video hero)
const videoSchema = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "Musicdibs - Plataforma de Registro Musical con Blockchain",
  "description": "Demostración de la plataforma Musicdibs para registro, distribución y protección de música con tecnología blockchain",
  "thumbnailUrl": "https://musicdibs.com/assets/images/video-thumbnail.jpg",
  "uploadDate": "2024-01-01T00:00:00Z",
  "duration": "PT1M",
  "contentUrl": "https://res.cloudinary.com/dca4bxk23/video/upload/v1754417323/pieza_musicv3_1_yeve62.mp4",
  "embedUrl": "https://musicdibs.com",
  "publisher": {
    "@type": "Organization",
    "name": "Musicdibs",
    "logo": {
      "@type": "ImageObject",
      "url": "https://musicdibs.com/assets/images/logo.png"
    }
  }
};

export default function HomeLayout() {
    const [isDesktop, setIsDesktop] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const handleScrollToPricing = () => {
            if (typeof window === "undefined") return;

            const urlParams = new URLSearchParams(window.location.search);
            const scrollTo = urlParams.get('scroll');
            
            if (scrollTo === 'pricing') {
                setTimeout(() => {
                    const section = document.querySelector("#pricing-toggle");
                    if (section) {
                        const offsetTop = section.getBoundingClientRect().top + window.pageYOffset - 100;
                        window.scrollTo({
                            top: offsetTop,
                            behavior: "smooth"
                        });
                        
                        const newUrl = window.location.pathname;
                        window.history.replaceState({}, '', newUrl);
                    }
                }, 800);
            }
        };

        if (typeof window !== "undefined") {
            const checkWidth = () => {
                setIsDesktop(window.innerWidth > 1024);
                setIsLoading(false);
            };

            checkWidth();
            window.addEventListener("resize", checkWidth);
            handleScrollToPricing();

            return () => window.removeEventListener("resize", checkWidth);
        }
    }, []);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (isMenuOpen && !e.target.closest("nav")) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isMenuOpen]);

    if (isLoading) {
        return (
            <div 
                className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-purple-800"
                role="status"
                aria-label="Cargando Musicdibs"
            >
                <div className="text-white text-xl animate-pulse">
                    Musicdibs - Cargando...
                </div>
            </div>
        );
    }

    return (
        <>
            {/* Structured Data para SEO */}
            <Script
                id="website-schema"
                type="application/ld+json"
                strategy="afterInteractive"
            >
                {JSON.stringify(structuredData)}
            </Script>

            <Script
                id="video-schema"
                type="application/ld+json"
                strategy="afterInteractive"
            >
                {JSON.stringify(videoSchema)}
            </Script>

            {/* ¡ESTA ES LA LÍNEA CLAVE! */}
            <HomePromoPopup />

            {/* PRIMERA SECCIÓN */}
            <section 
                className="relative w-full h-screen overflow-hidden" 
                role="banner"
                aria-label="Sección principal de Musicdibs"
            >
                {isDesktop && (
                    <div className="fixed top-0 left-0 right-0 z-50">
                        <HomePromoBanner />
                    </div>
                )}

                <div className="absolute inset-0 -z-10">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                        className="w-full h-full object-cover"
                        src="https://res.cloudinary.com/dca4bxk23/video/upload/v1754417323/pieza_musicv3_1_yeve62.mp4"
                        aria-label="Video demostrativo de Musicdibs"
                    >
                        <track kind="captions" srcLang="es" label="Spanish captions" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-purple-800/50 to-pink-600/50" />
                    <div className="absolute inset-0 bg-black/20" />
                </div>

                <div className={`relative z-40 ${isDesktop ? "pt-12" : "pt-0"}`}>
                    <HomeNavbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
                </div>

                <div className="relative z-10 h-full flex items-center justify-center">
                    <HomeHero />
                </div>
            </section>

            {/* Contenido principal */}
            <main id="main-content" role="main">
                <HomeWhyChoose />
                <HomeDistribution />
                <HomeArtistsBanner />
                <HomeTestimonials />
                <HomePricing />
                <HomeMarquee />
                <HomeIndividualRegistration />
                <HomeTutorial />
            </main>

            <Footer />
        </>
    );
}