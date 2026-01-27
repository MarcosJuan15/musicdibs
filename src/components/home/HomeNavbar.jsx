'use client';

import { useState, useEffect, useRef } from "react";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import { Link, useRouter, usePathname } from "@/navigation";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";

export default function HomeNavbar({ isMenuOpen, setIsMenuOpen }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
    const [isMobileLanguageDropdownOpen, setIsMobileLanguageDropdownOpen] = useState(false); // Estado separado para móvil
    const router = useRouter();
    const pathname = usePathname();
    const locale = useLocale();

    // Solo tNavbar, sin tCommon
    const tNavbar = useTranslations('home.navbar');

    const languageDropdownRef = useRef(null);
    const mobileLanguageDropdownRef = useRef(null);
    const languageDropdownTimerRef = useRef(null);

    // Funciones para bloquear/desbloquear scroll
    const lockScroll = () => {
        const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
        const body = document.body;
        
        body.style.overflow = 'hidden';
        body.style.position = 'fixed';
        body.style.top = `-${window.scrollY}px`;
        body.style.left = '0';
        body.style.right = '0';
        body.style.paddingRight = `${scrollBarWidth}px`;
    };

    const unlockScroll = () => {
        const body = document.body;
        const scrollY = body.style.top;
        
        body.style.overflow = '';
        body.style.position = '';
        body.style.top = '';
        body.style.left = '';
        body.style.right = '';
        body.style.paddingRight = '';
        
        if (scrollY) {
            window.scrollTo(0, parseInt(scrollY || '0') * -1);
        }
    };

    // Efecto para manejar el scroll cuando el menú se abre/cierra
    useEffect(() => {
        if (isMenuOpen) {
            lockScroll();
        } else {
            unlockScroll();
            // Cerrar también el dropdown de idioma móvil cuando se cierra el menú
            setIsMobileLanguageDropdownOpen(false);
        }

        return () => {
            unlockScroll();
        };
    }, [isMenuOpen]);

    // Efecto para navbar sticky en móvil
    useEffect(() => {
        const handleScroll = () => {
            if (window.innerWidth < 768) {
                setIsScrolled(window.scrollY > 50);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Cerrar dropdowns al hacer clic fuera
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (languageDropdownRef.current && !languageDropdownRef.current.contains(event.target)) {
                setIsLanguageDropdownOpen(false);
            }
            if (mobileLanguageDropdownRef.current && !mobileLanguageDropdownRef.current.contains(event.target)) {
                setIsMobileLanguageDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Funciones para manejar hover en selector de idioma (desktop)
    const handleLanguageMouseEnter = () => {
        if (window.innerWidth >= 768) { // Solo en desktop
            clearTimeout(languageDropdownTimerRef.current);
            setIsLanguageDropdownOpen(true);
        }
    };

    const handleLanguageMouseLeave = () => {
        if (window.innerWidth >= 768) { // Solo en desktop
            languageDropdownTimerRef.current = setTimeout(() => {
                setIsLanguageDropdownOpen(false);
            }, 300);
        }
    };

    // Función para cambiar idioma - VERSIÓN CORREGIDA
    const handleLanguageChange = async (newLocale) => {
        // Cerrar dropdowns primero
        setIsLanguageDropdownOpen(false);
        setIsMobileLanguageDropdownOpen(false);
        
        // Esperar un momento antes de cerrar el menú completo para permitir que la navegación ocurra
        setTimeout(() => {
            setIsMenuOpen(false);
        }, 100);
        
        // Navegar al nuevo idioma
        router.push('/', { locale: newLocale });
    };

    // Función específica para móvil que maneja mejor el evento
    const handleMobileLanguageChange = (newLocale, e) => {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        
        // Cerrar solo el dropdown de idioma móvil
        setIsMobileLanguageDropdownOpen(false);
        
        // Esperar un frame antes de navegar para asegurar que el evento se complete
        setTimeout(() => {
            router.push('/', { locale: newLocale }).then(() => {
                // Cerrar el menú después de que la navegación se haya iniciado
                setIsMenuOpen(false);
            });
        }, 50);
    };

    // Función para obtener la etiqueta del idioma actual
    const getCurrentLanguageLabel = () => {
        switch (locale) {
            case 'es': return tNavbar('spanish');
            case 'en': return tNavbar('english');
            case 'pt': return tNavbar('portuguese');
            default: return tNavbar('spanish');
        }
    };

    // Función para manejar scroll a precios y cerrar menú - VERSIÓN CORREGIDA
    const handleScrollToPricing = (e) => {
        e.preventDefault();
        setIsMenuOpen(false);
        
        // Navegar a la página de inicio con el hash
        const homePath = `/${locale === 'es' ? '' : locale}`;
        
        // Si ya estamos en la página de inicio, hacer scroll
        const isHomePage = pathname === '/' || pathname === `/${locale}` || pathname === '';
        
        if (isHomePage) {
            // Ya estamos en home, hacer scroll
            setTimeout(() => {
                const section = document.querySelector("#pricing-toggle");
                if (section) {
                    section.scrollIntoView({ 
                        behavior: "smooth",
                        block: "start"
                    });
                }
            }, 100);
        } else {
            // Necesitamos navegar a home primero
            // Usamos router.push y luego hacemos scroll después de que la página se cargue
            router.push(homePath);
            
            // Esperar a que la navegación se complete y luego hacer scroll
            setTimeout(() => {
                const checkForSection = () => {
                    const section = document.querySelector("#pricing-toggle");
                    if (section) {
                        section.scrollIntoView({ 
                            behavior: "smooth",
                            block: "start"
                        });
                    } else {
                        // Si aún no está disponible, esperar un poco más
                        setTimeout(checkForSection, 100);
                    }
                };
                checkForSection();
            }, 300);
        }
    };

    // Función para cerrar menú y navegar
    const handleNavigation = (path) => {
        setIsMenuOpen(false);
        
        if (path.startsWith('http')) {
            window.open(path, '_blank', 'noopener,noreferrer');
        } else {
            router.push(path);
        }
    };

    // Función para toggle del menú móvil
    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
        // Cerrar dropdown de idioma móvil cuando se abre/cierra el menú
        if (!isMenuOpen) {
            setIsMobileLanguageDropdownOpen(false);
        }
    };

    // Función para manejar clic en Verificador (nuevo enlace)
    const handleVerificationClick = (e) => {
        e.preventDefault();
        setIsMenuOpen(false);
        window.open('https://checker.icommunitylabs.com/?brand=music', '_blank', 'noopener,noreferrer');
    };

    // Función para toggle del dropdown de idioma móvil
    const handleMobileLanguageToggle = (e) => {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        setIsMobileLanguageDropdownOpen(!isMobileLanguageDropdownOpen);
    };

    return (
        <nav 
            className={`top-0 left-0 right-0 z-40 w-full transition-all duration-300 ${
                "bg-transparent"
            } ${
                typeof window !== 'undefined' && window.innerWidth < 768 ? "sticky" : "static"
            }`}
            role="navigation"
            aria-label="Navegación principal"
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-white">
                {/* Logo */}
                <Link href="/" className="flex items-center mt-2 md:mt-0">
                    <Image 
                        src="/assets/images/logo-navbar.png"
                        alt="Musicdibs - Plataforma de distribución musical" 
                        width={160} 
                        height={48}
                        className="h-12 w-auto"
                        priority
                    />
                </Link>

                {/* Botón Hamburguesa en Móvil */}
                <div className="md:hidden z-50">
                    <button 
                        onClick={handleMenuToggle}
                        aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
                        aria-expanded={isMenuOpen}
                        className="p-2"
                    >
                        {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
                    </button>
                </div>

                {/* Links Desktop */}
                <div className="hidden md:flex items-center space-x-8 text-white/90 text-base font-medium">
                    <a
                        href="#pricing-toggle"
                        onClick={handleScrollToPricing}
                        className="hover:text-white transition-colors"
                        aria-label={tNavbar('pricing')}
                    >
                        {tNavbar('pricing')}
                    </a>
                    <Link href="/faq" className="hover:text-white transition-colors" aria-label={tNavbar('faq')}>
                        {tNavbar('faq')}
                    </Link>
                    <Link href="/support" className="hover:text-white transition-colors" aria-label={tNavbar('support')}>
                        {tNavbar('support')}
                    </Link>

                    {/* Dropdown Distribución */}
                    <div className="relative group">
                        <button className="flex items-center gap-1 hover:text-white transition-colors" aria-label={tNavbar('distribution')}>
                            {tNavbar('distribution')}
                            <FiChevronDown className="transition-transform duration-300 group-hover:rotate-180" />
                        </button>
                        <div className="absolute left-0 mt-2 w-48 bg-white/15 backdrop-blur-sm shadow-lg rounded-lg border border-white/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                            <a
                                href="https://dist.musicdibs.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block px-4 py-3 text-lg text-white hover:bg-white/20 transition-colors"
                                aria-label={tNavbar('distribution_access')}
                            >
                                {tNavbar('distribution_access')}
                            </a>
                            <Link
                                href="/distribution"
                                className="block px-4 py-3 text-lg text-white hover:bg-white/20 transition-colors"
                                aria-label={tNavbar('distribution_info')}
                            >
                                {tNavbar('distribution_info')}
                            </Link>
                        </div>
                    </div>

                    {/* Enlace Market actualizado */}
                    <a
                        href="https://market.musicdibs.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors"
                        aria-label={tNavbar('market')}
                    >
                        {tNavbar('market')}
                    </a>
                    
                    {/* Nueva pestaña Noticias */}
                    <a
                        href="https://musicdibs.com/noticias/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors"
                        aria-label={tNavbar('news')}
                    >
                        {tNavbar('news')}
                    </a>
                    
                    <Link 
                        href="/dibs-token" 
                        className="hover:text-white transition-colors"
                        aria-label={tNavbar('dibs_token')}
                    >
                        {tNavbar('dibs_token')}
                    </Link>
                    
                    {/* Enlace Verificador actualizado */}
                    <a
                        href="https://checker.icommunitylabs.com/?brand=music"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors"
                        aria-label={tNavbar('verification')}
                    >
                        {tNavbar('verification')}
                    </a>
                </div>

                {/* Selector + CTA Desktop */}
                <div className="hidden md:flex items-center gap-3 relative" 
                     ref={languageDropdownRef}
                     onMouseEnter={handleLanguageMouseEnter}
                     onMouseLeave={handleLanguageMouseLeave}>
                    {/* Selector de idioma */}
                    <div className="relative">
                        <button 
                            className="flex items-center gap-2 border border-white/30 text-white text-base pl-3 pr-6 py-2 rounded bg-white/15 backdrop-blur-sm shadow-lg hover:bg-white/20 transition-colors"
                            onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                            aria-label={`${tNavbar('language')}: ${getCurrentLanguageLabel()}`}
                        >
                            {locale === "es" && "🇪🇸"}
                            {locale === "en" && "🇬🇧"}
                            {locale === "pt" && "🇵🇹"}
                            <FiChevronDown className={`transition-transform duration-300 ${isLanguageDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>
                        
                        {/* Dropdown de idiomas */}
                        <div 
                            className={`absolute right-0 mt-2 w-28 bg-white/15 backdrop-blur-sm shadow-lg rounded-lg border border-white/20 transition-all duration-200 z-50 ${
                                isLanguageDropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
                            }`}
                            onMouseEnter={() => clearTimeout(languageDropdownTimerRef.current)}
                            onMouseLeave={handleLanguageMouseLeave}
                        >
                            <button
                                onClick={() => handleLanguageChange("es")}
                                className={`block w-full text-left px-3 py-2 text-sm hover:bg-white/20 transition-colors ${
                                    locale === "es" ? "bg-white/30 text-white" : "text-white"
                                }`}
                                aria-label={tNavbar('spanish')}
                            >
                                🇪🇸 {tNavbar('spanish')}
                            </button>
                            <button
                                onClick={() => handleLanguageChange("en")}
                                className={`block w-full text-left px-3 py-2 text-sm hover:bg-white/20 transition-colors ${
                                    locale === "en" ? "bg-white/30 text-white" : "text-white"
                                }`}
                                aria-label={tNavbar('english')}
                            >
                                🇬🇧 {tNavbar('english')}
                            </button>
                            <button
                                onClick={() => handleLanguageChange("pt")}
                                className={`block w-full text-left px-3 py-2 text-sm hover:bg-white/20 transition-colors ${
                                    locale === "pt" ? "bg-white/30 text-white" : "text-white"
                                }`}
                                aria-label={tNavbar('portuguese')}
                            >
                                🇵🇹 {tNavbar('portuguese')}
                            </button>
                        </div>
                    </div>

                    {/* Botón Acceder */}
                    <Link
                        href="/auth/login"
                        className="border border-white/30 text-white px-4 py-3 text-sm rounded hover:bg-white/10 font-semibold transition-colors bg-white/15 backdrop-blur-sm shadow-lg"
                        aria-label={tNavbar('login')}
                    >
                        {tNavbar('login')}
                    </Link>
                </div>
            </div>

            {/* Overlay Menú Móvil */}
            <div
                className={`fixed inset-0 bg-gray-900/95 backdrop-blur-sm text-white p-6 flex flex-col transform transition-all duration-500 ease-in-out z-[9999] ${
                    isMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
                }`}
            >
                {/* Header del menú móvil */}
                <div className="flex justify-between items-center mb-8">
                    <Link href="/" onClick={() => setIsMenuOpen(false)} aria-label="Ir al inicio">
                        <Image 
                            src="/assets/images/logo-navbar.png"
                            alt="Musicdibs" 
                            width={120} 
                            height={36}
                            className="h-9 w-auto"
                        />
                    </Link>
                    <button
                        onClick={() => setIsMenuOpen(false)}
                        className="text-3xl text-white hover:text-purple-300 transition-colors p-2"
                        aria-label="Cerrar menú"
                    >
                        <FiX />
                    </button>
                </div>

                {/* Links con animación escalonada */}
                <div className="flex-1 overflow-y-auto space-y-4">
                    <a
                        href="#pricing-toggle"
                        onClick={handleScrollToPricing}
                        className="block text-lg py-3 border-b border-gray-700 transform transition-all duration-500 ease-out hover:text-purple-300"
                        style={{ 
                            transitionDelay: isMenuOpen ? "0.1s" : "0s",
                            transform: isMenuOpen ? "translateX(0)" : "translateX(-20px)",
                            opacity: isMenuOpen ? 1 : 0
                        }}
                        aria-label={tNavbar('pricing')}
                    >
                        {tNavbar('pricing')}
                    </a>
                    <div
                        onClick={() => handleNavigation("/faq")}
                        className="block text-lg py-3 border-b border-gray-700 transform transition-all duration-500 ease-out hover:text-purple-300 cursor-pointer"
                        style={{ 
                            transitionDelay: isMenuOpen ? "0.2s" : "0s",
                            transform: isMenuOpen ? "translateX(0)" : "translateX(-20px)",
                            opacity: isMenuOpen ? 1 : 0
                        }}
                        aria-label={tNavbar('faq')}
                    >
                        {tNavbar('faq')}
                    </div>
                    <div
                        onClick={() => handleNavigation("/support")}
                        className="block text-lg py-3 border-b border-gray-700 transform transition-all duration-500 ease-out hover:text-purple-300 cursor-pointer"
                        style={{ 
                            transitionDelay: isMenuOpen ? "0.3s" : "0s",
                            transform: isMenuOpen ? "translateX(0)" : "translateX(-20px)",
                            opacity: isMenuOpen ? 1 : 0
                        }}
                        aria-label={tNavbar('support')}
                    >
                        {tNavbar('support')}
                    </div>

                    {/* Dropdown Distribución Móvil */}
                    <details className="py-3 border-b border-gray-700 transform transition-all duration-500 ease-out"
                        style={{ 
                            transitionDelay: isMenuOpen ? "0.4s" : "0s",
                            transform: isMenuOpen ? "translateX(0)" : "translateX(-20px)",
                            opacity: isMenuOpen ? 1 : 0
                        }}
                    >
                        <summary className="cursor-pointer text-lg flex items-center justify-between hover:text-purple-300" aria-label={tNavbar('distribution')}>
                            {tNavbar('distribution')} <FiChevronDown className="transition-transform duration-300" />
                        </summary>
                        <div className="mt-2 ml-4 space-y-2">
                            <a
                                href="https://dist.musicdibs.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block py-2 text-base text-gray-300 hover:text-purple-300 transition-colors"
                                aria-label={tNavbar('distribution_access')}
                            >
                                {tNavbar('distribution_access')}
                            </a>
                            <div
                                onClick={() => handleNavigation("/distribution")}
                                className="block py-2 text-base text-gray-300 hover:text-purple-300 transition-colors cursor-pointer"
                                aria-label={tNavbar('distribution_info')}
                            >
                                {tNavbar('distribution_info')}
                            </div>
                        </div>
                    </details>

                    {/* Market actualizado en móvil */}
                    <div
                        onClick={() => handleNavigation("https://market.musicdibs.com/")}
                        className="block text-lg py-3 border-b border-gray-700 transform transition-all duration-500 ease-out hover:text-purple-300 cursor-pointer"
                        style={{ 
                            transitionDelay: isMenuOpen ? "0.5s" : "0s",
                            transform: isMenuOpen ? "translateX(0)" : "translateX(-20px)",
                            opacity: isMenuOpen ? 1 : 0
                        }}
                        aria-label={tNavbar('market')}
                    >
                        {tNavbar('market')}
                    </div>
                    
                    {/* Nueva pestaña Noticias en móvil */}
                    <div
                        onClick={() => handleNavigation("https://musicdibs.com/noticias/")}
                        className="block text-lg py-3 border-b border-gray-700 transform transition-all duration-500 ease-out hover:text-purple-300 cursor-pointer"
                        style={{ 
                            transitionDelay: isMenuOpen ? "0.6s" : "0s",
                            transform: isMenuOpen ? "translateX(0)" : "translateX(-20px)",
                            opacity: isMenuOpen ? 1 : 0
                        }}
                        aria-label={tNavbar('news')}
                    >
                        {tNavbar('news')}
                    </div>
                    
                    <div
                        onClick={() => handleNavigation("/dibs-token")}
                        className="block text-lg py-3 border-b border-gray-700 transform transition-all duration-500 ease-out hover:text-purple-300 cursor-pointer"
                        style={{ 
                            transitionDelay: isMenuOpen ? "0.7s" : "0s",
                            transform: isMenuOpen ? "translateX(0)" : "translateX(-20px)",
                            opacity: isMenuOpen ? 1 : 0
                        }}
                        aria-label={tNavbar('dibs_token')}
                    >
                        {tNavbar('dibs_token')}
                    </div>
                    
                    {/* Verificador actualizado en móvil */}
                    <div
                        onClick={handleVerificationClick}
                        className="block text-lg py-3 border-b border-gray-700 transform transition-all duration-500 ease-out hover:text-purple-300 cursor-pointer"
                        style={{ 
                            transitionDelay: isMenuOpen ? "0.8s" : "0s",
                            transform: isMenuOpen ? "translateX(0)" : "translateX(-20px)",
                            opacity: isMenuOpen ? 1 : 0
                        }}
                        aria-label={tNavbar('verification')}
                    >
                        {tNavbar('verification')}
                    </div>
                </div>

                {/* Selector + CTA Móvil */}
                <div className="mt-8 pt-6 border-t border-gray-700 space-y-4 transform transition-all duration-500 ease-out relative"
                    style={{ 
                        transitionDelay: isMenuOpen ? "0.9s" : "0s",
                        transform: isMenuOpen ? "translateY(0)" : "translateY(20px)",
                        opacity: isMenuOpen ? 1 : 0
                    }}
                >
                    {/* Selector de idioma móvil */}
                    <div className="relative" ref={mobileLanguageDropdownRef}>
                        <button 
                            onClick={handleMobileLanguageToggle}
                            className="w-full border border-gray-600 bg-gray-800 text-white text-base px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 flex items-center justify-between"
                            aria-label={`${tNavbar('language')}: ${getCurrentLanguageLabel()}`}
                        >
                            <span>
                                {locale === "es" && "🇪🇸 " + tNavbar('spanish')}
                                {locale === "en" && "🇬🇧 " + tNavbar('english')} 
                                {locale === "pt" && "🇵🇹 " + tNavbar('portuguese')}
                            </span>
                            <FiChevronDown className={`transition-transform duration-300 ${isMobileLanguageDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>
                        
                        {/* Dropdown de idiomas */}
                        {isMobileLanguageDropdownOpen && (
                            <div className="absolute bottom-full left-0 right-0 mb-2 bg-gray-800 border border-gray-700 rounded-lg shadow-xl z-50">
                                <button
                                    onClick={(e) => handleMobileLanguageChange("es", e)}
                                    className={`block w-full text-left px-4 py-3 text-base hover:bg-purple-700 transition-colors ${
                                        locale === "es" ? "bg-purple-600 text-white" : "text-white"
                                    }`}
                                    aria-label={tNavbar('spanish')}
                                >
                                    🇪🇸 {tNavbar('spanish')}
                                </button>
                                <button
                                    onClick={(e) => handleMobileLanguageChange("en", e)}
                                    className={`block w-full text-left px-4 py-3 text-base hover:bg-purple-700 transition-colors ${
                                        locale === "en" ? "bg-purple-600 text-white" : "text-white"
                                    }`}
                                    aria-label={tNavbar('english')}
                                >
                                    🇬🇧 {tNavbar('english')}
                                </button>
                                <button
                                    onClick={(e) => handleMobileLanguageChange("pt", e)}
                                    className={`block w-full text-left px-4 py-3 text-base hover:bg-purple-700 transition-colors ${
                                        locale === "pt" ? "bg-purple-600 text-white" : "text-white"
                                    }`}
                                    aria-label={tNavbar('portuguese')}
                                >
                                    🇵🇹 {tNavbar('portuguese')}
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Botón Acceder Móvil */}
                    <Link
                        href="/auth/login"
                        className="w-full bg-purple-600 text-white px-4 py-3 text-base rounded-lg hover:bg-purple-700 font-semibold transition-colors text-center cursor-pointer block"
                        onClick={() => setIsMenuOpen(false)}
                        aria-label={tNavbar('login')}
                    >
                        {tNavbar('login')}
                    </Link>
                </div>
            </div>
        </nav>
    );
}