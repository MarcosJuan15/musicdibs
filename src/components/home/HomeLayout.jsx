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
import HomeSummerPromoPopup from './HomeSummerPromoPopup';
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
    const [showPromo, setShowPromo] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    // ✅ Función para manejar scroll a precios desde query params
    useEffect(() => {
        const handleScrollToPricing = () => {
            // Solo ejecutar en cliente
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
                        
                        // Limpiar el query param después del scroll
                        const newUrl = window.location.pathname;
                        window.history.replaceState({}, '', newUrl);
                    }
                }, 800);
            }
        };

        // Verificar si estamos en el cliente
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

    // Cerrar menú al hacer click fuera
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (isMenuOpen && !e.target.closest("nav")) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isMenuOpen]);

    // Mostrar promoción una vez por sesión
    useEffect(() => {
        if (typeof window !== "undefined") {
            const promoShown = sessionStorage.getItem("promoShown");
            if (!promoShown) {
                const timer = setTimeout(() => {
                    setShowPromo(true);
                }, 10000);
                return () => clearTimeout(timer);
            }
        }
    }, []);

    const handleClosePromo = () => {
        setShowPromo(false);
        if (typeof window !== "undefined") {
            sessionStorage.setItem("promoShown", "true");
        }
    };

    if (isLoading) {
        return (
            <div 
                className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-purple-800"
                role="status"
                aria-label="Cargando Musicdibs - Plataforma de registro musical con blockchain"
            >
                <div className="text-white text-xl animate-pulse" itemScope itemType="https://schema.org/WebApplication">
                    <span itemProp="name">Musicdibs</span> - Cargando...
                </div>
            </div>
        );
    }

    return (
        <>
            {/* Structured Data para SEO - MEJORADO */}
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

            {/* Preload crítico para el video */}
            <link 
                rel="preload" 
                href="https://res.cloudinary.com/dca4bxk23/video/upload/v1754417323/pieza_musicv3_1_yeve62.mp4" 
                as="video" 
                type="video/mp4"
            />

            {showPromo && <HomeSummerPromoPopup onClose={handleClosePromo} />}

            {/* PRIMERA SECCIÓN - 100% VIEWPORT con Schema Markup */}
            <section 
                className="relative w-full h-screen overflow-hidden" 
                role="banner"
                aria-label="Sección principal de Musicdibs - Registro y distribución musical con blockchain"
                itemScope
                itemType="https://schema.org/WPHeader"
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
                        aria-label="Video demostrativo de la plataforma Musicdibs para registro y distribución musical"
                        title="Musicdibs Platform Demo - Registro Musical con Blockchain"
                        itemProp="video"
                    >
                        <track kind="captions" srcLang="es" label="Spanish captions" />
                        {/* Considera añadir un archivo .vtt para accesibilidad */}
                    </video>
                    <div 
                        className="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-purple-800/50 to-pink-600/50"
                        aria-hidden="true"
                    />
                    <div 
                        className="absolute inset-0 bg-black/20"
                        aria-hidden="true"
                    />
                </div>

                <div className={`relative z-40 ${isDesktop ? "pt-12" : "pt-0"}`}>
                    <HomeNavbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
                </div>

                <div className="relative z-10 h-full flex items-center justify-center">
                    <HomeHero />
                </div>
            </section>

            {/* Contenido principal con estructura semántica */}
            <main 
                id="main-content" 
                role="main"
                itemScope
                itemType="https://schema.org/WebPage"
            >
                {/* Microdatos para cada sección */}
                <div itemScope itemProp="mainEntity" itemType="https://schema.org/ItemList">
                    <HomeWhyChoose />
                    <HomeDistribution />
                    <HomeArtistsBanner />
                    <HomeTestimonials />
                    <HomePricing />
                    <HomeMarquee />
                    <HomeIndividualRegistration />
                    <HomeTutorial />
                </div>
            </main>

            <Footer />
        </>
    );
}