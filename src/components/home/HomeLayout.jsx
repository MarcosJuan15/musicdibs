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

// Structured Data para SEO - Ajusta con tus datos reales
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Musicdibs",
  "description": "Plataforma de registro y distribución musical con tecnología blockchain",
  "url": "https://musicdibs.com",
  "logo": "https://musicdibs.com/logo.png",
  "sameAs": [
    "https://instagram.com/musicdibs",
    "https://twitter.com/musicdibs",
    "https://facebook.com/musicdibs"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "info@musicdibs.com",
    "contactType": "customer service"
  }
};

export default function HomeLayout() {
    const [isDesktop, setIsDesktop] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showPromo, setShowPromo] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    // ✅ AÑADIDO: Función para manejar scroll a precios desde query params
    useEffect(() => {
        const handleScrollToPricing = () => {
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

            // ✅ MODIFICADO: Cambiado de 'scrollTo' a 'scroll' para coincidir con el navbar
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
                aria-label="Cargando página"
            >
                <div className="text-white text-xl">Cargando Musicdibs...</div>
            </div>
        );
    }

    return (
        <>
            {/* Structured Data para SEO */}
            <Script
                id="structured-data"
                type="application/ld+json"
                strategy="afterInteractive"
            >
                {JSON.stringify(structuredData)}
            </Script>

            {showPromo && <HomeSummerPromoPopup onClose={handleClosePromo} />}

            {/* PRIMERA SECCIÓN - 100% VIEWPORT */}
            <section 
                className="relative w-full h-screen overflow-hidden" 
                role="banner"
                aria-label="Hero section de Musicdibs"
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
                        aria-label="Video demostrativo de la plataforma Musicdibs"
                        title="Musicdibs Platform Demo"
                    >
                        <track kind="captions" srcLang="es" label="Spanish captions" />
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

            <main id="main-content" role="main">
                {/* Secciones sin ScrollReveal - Limpio y directo */}
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