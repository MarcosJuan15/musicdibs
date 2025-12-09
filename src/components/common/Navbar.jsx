'use client';

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FiChevronDown, FiMenu, FiX, FiUser, FiShoppingCart } from "react-icons/fi";
import Image from "next/image";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [language, setLanguage] = useState("es");
    const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const router = useRouter();
    const pathname = usePathname();
    
    const languageDropdownRef = useRef(null);
    const mobileLanguageDropdownRef = useRef(null);

    // Estado de autenticación simple
    useEffect(() => {
        const checkAuth = () => {
            // Verificar autenticación real cuando tengas backend
            const token = localStorage.getItem('auth-token');
            const user = localStorage.getItem('user-data');
            setIsLoggedIn(!!token && !!user);
        };

        checkAuth();
        
        const handleStorageChange = () => checkAuth();
        window.addEventListener('storage', handleStorageChange);
        
        return () => window.removeEventListener('storage', handleStorageChange);
    }, []);

    // Efecto para detectar si es móvil y manejar scroll
    useEffect(() => {
        const checkDevice = () => {
            const mobile = window.innerWidth < 768;
            setIsMobile(mobile);
        };

        const handleScroll = () => {
            if (window.innerWidth < 768) {
                setIsScrolled(window.scrollY > 50);
            }
        };

        checkDevice();
        
        window.addEventListener("resize", checkDevice);
        window.addEventListener("scroll", handleScroll);
        
        return () => {
            window.removeEventListener("resize", checkDevice);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Cerrar dropdowns al hacer clic fuera
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (languageDropdownRef.current && !languageDropdownRef.current.contains(event.target)) {
                setIsLanguageDropdownOpen(false);
            }
            if (mobileLanguageDropdownRef.current && !mobileLanguageDropdownRef.current.contains(event.target)) {
                setIsLanguageDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

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
        }

        return () => {
            unlockScroll();
        };
    }, [isMenuOpen]);

    // Función para manejar scroll a precios
    const handleScrollToPricing = (e) => {
        e.preventDefault();
        setIsMenuOpen(false);

        if (pathname === "/") {
            setTimeout(() => {
                const section = document.querySelector("#pricing-toggle");
                if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                }
            }, 100);
        } else {
            router.push("/?scroll=pricing");
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

    // Click en logo → Home
    const handleLogoClick = () => {
        setIsMenuOpen(false);
        router.push("/");
    };

    // Función para cambiar idioma
    const handleLanguageChange = (newLanguage) => {
        setLanguage(newLanguage);
        setIsLanguageDropdownOpen(false);
    };

    // Cerrar menú al hacer clic fuera
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (isMenuOpen && !e.target.closest("nav") && !e.target.closest(".mobile-menu")) {
                setIsMenuOpen(false);
            }
        };
        
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isMenuOpen]);

    return (
        <nav 
            className={`w-full top-0 left-0 right-0 z-40 bg-gradient-to-br from-blue-900 via-purple-800 to-pink-600 transition-all duration-300 ${
                typeof window !== 'undefined' && window.innerWidth < 768 ? "sticky" : "static"
            } ${
                isScrolled ? "shadow-lg" : ""
            }`}
            aria-label="Navegación principal"
            itemScope
            itemType="https://schema.org/SiteNavigationElement"
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-white">
                {/* Logo */}
                <div 
                    className="flex items-center mt-2 md:mt-0 cursor-pointer" 
                    onClick={handleLogoClick}
                    role="button"
                    tabIndex={0}
                    aria-label="Musicdibs - Ir al inicio"
                    onKeyPress={(e) => e.key === 'Enter' && handleLogoClick()}
                    itemProp="url"
                >
                    <Image 
                        src="/assets/images/logo-navbar.png"  
                        alt="Musicdibs - Plataforma de distribución musical y registro de derechos de autor" 
                        className="h-12 w-auto"
                        width={120}
                        height={48}
                        priority
                        itemProp="logo"
                    />
                </div>

                {/* Botón Hamburguesa en Móvil */}
                <div className="md:hidden z-50">
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label={isMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-menu"
                        className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                    >
                        {isMenuOpen ? <FiX size={28} aria-hidden="true" /> : <FiMenu size={28} aria-hidden="true" />}
                    </button>
                </div>

                {/* Links Desktop - LAS 7 VISTAS */}
                <div className="hidden md:flex items-center space-x-8 text-white/90 text-base font-medium">
                    <a
                        href="#pricing-toggle"
                        onClick={handleScrollToPricing}
                        className="hover:text-white transition-colors"
                        aria-label="Ver planes y precios de MusicDibs"
                        itemProp="url"
                    >
                        <span itemProp="name">Precios</span>
                    </a>
                    
                    <Link href="/faq" className="hover:text-white transition-colors" itemProp="url">
                        <span itemProp="name">FAQ</span>
                    </Link>
                    
                    <Link href="/support" className="hover:text-white transition-colors" itemProp="url">
                        <span itemProp="name">Soporte</span>
                    </Link>

                    {/* Dropdown Distribución */}
                    <div className="relative group" role="navigation" aria-label="Distribución musical">
                        <button 
                            className="flex items-center gap-1 hover:text-white transition-colors"
                            aria-haspopup="true"
                            aria-expanded="false"
                            aria-controls="distribution-menu"
                        >
                            <span itemProp="name">Distribución</span>
                            <FiChevronDown className="transition-transform duration-300 group-hover:rotate-180" aria-hidden="true" />
                        </button>
                        <div 
                            id="distribution-menu"
                            className="absolute left-0 mt-2 w-48 bg-gray-800 shadow-xl rounded-lg border border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50"
                            role="menu"
                            aria-label="Opciones de distribución"
                        >
                            <a
                                href="https://dist.musicdibs.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block px-4 py-3 text-lg text-white hover:bg-purple-700 transition-colors"
                                role="menuitem"
                                itemProp="url"
                            >
                                <span itemProp="name">Acceso Plataforma</span>
                            </a>
                            <Link
                                href="/distribution"
                                className="block px-4 py-3 text-lg text-white hover:bg-purple-700 transition-colors"
                                role="menuitem"
                                itemProp="url"
                            >
                                <span itemProp="name">Información</span>
                            </Link>
                        </div>
                    </div>

                    <Link href="/market" className="hover:text-white transition-colors" itemProp="url">
                        <span itemProp="name">Market</span>
                    </Link>
                    
                    <Link 
                        href="/dibs-token" 
                        className="hover:text-white transition-colors"
                        itemProp="url"
                    >
                        <span itemProp="name">DIBS Token</span>
                    </Link>
                    
                    <Link href="/verification" className="hover:text-white transition-colors" itemProp="url">
                        <span itemProp="name">Verificador</span>
                    </Link>
                </div>

                {/* Selector de Idioma + CTA/Carrito/Perfil */}
                <div className="hidden md:flex items-center gap-3 relative">
                    {/* Selector de idioma desktop */}
                    <div 
                        className="relative group" 
                        ref={languageDropdownRef}
                    >
                        <button 
                            className="flex items-center gap-2 border border-white/30 text-white text-lg pl-4 pr-8 py-1 rounded bg-white/15 backdrop-blur-sm shadow-lg hover:bg-white/20 transition-colors"
                            aria-haspopup="listbox"
                            aria-expanded={isLanguageDropdownOpen}
                            aria-controls="language-listbox-desktop"
                            aria-label={`Idioma actual: ${language === "es" ? "Español" : language === "en" ? "English" : "Português"}. Seleccionar idioma`}
                        >
                            {language === "es" && "🇪🇸"}
                            {language === "en" && "🇬🇧"}
                            {language === "br" && "🇧🇷"}
                            <FiChevronDown className="transition-transform duration-300 group-hover:rotate-180" aria-hidden="true" />
                        </button>
                        
                        <div 
                            id="language-listbox-desktop"
                            className={`absolute right-0 mt-2 w-32 bg-gray-800 shadow-xl rounded-lg border border-gray-700 transition-all duration-200 z-50 ${
                                isLanguageDropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
                            }`}
                            role="listbox"
                            aria-label="Seleccionar idioma"
                        >
                            <button
                                onClick={() => handleLanguageChange("es")}
                                className={`block w-full text-left px-4 py-3 text-lg hover:bg-purple-700 transition-colors ${
                                    language === "es" ? "bg-purple-600 text-white" : "text-white"
                                }`}
                                role="option"
                                aria-selected={language === "es"}
                            >
                                🇪🇸 Español
                            </button>
                            <button
                                onClick={() => handleLanguageChange("en")}
                                className={`block w-full text-left px-4 py-3 text-lg hover:bg-purple-700 transition-colors ${
                                    language === "en" ? "bg-purple-600 text-white" : "text-white"
                                }`}
                                role="option"
                                aria-selected={language === "en"}
                            >
                                🇬🇧 English
                            </button>
                            <button
                                onClick={() => handleLanguageChange("br")}
                                className={`block w-full text-left px-4 py-3 text-lg hover:bg-purple-700 transition-colors ${
                                    language === "br" ? "bg-purple-600 text-white" : "text-white"
                                }`}
                                role="option"
                                aria-selected={language === "br"}
                            >
                                🇧🇷 Português
                            </button>
                        </div>
                    </div>

                    {/* SI ESTÁ LOGUEADO: Carrito + Perfil */}
                    {isLoggedIn ? (
                        <div className="flex items-center gap-2">
                            {/* Icono del Carrito */}
                            <Link
                                href="/cart"
                                className="p-2 rounded-full bg-white/15 border border-white/30 hover:bg-white/20 backdrop-blur-sm transition-colors flex items-center justify-center relative"
                                aria-label="Carrito de compras"
                            >
                                <FiShoppingCart className="w-6 h-6 text-white" aria-hidden="true" />
                                {/* Puedes añadir un badge si hay items en el carrito */}
                                {/* <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">3</span> */}
                            </Link>

                            {/* Icono de Perfil que lleva al Dashboard */}
                            <Link
                                href="/dashboard"
                                className="p-2 rounded-full bg-white/15 border border-white/30 hover:bg-white/20 backdrop-blur-sm transition-colors flex items-center justify-center"
                                aria-label="Ir al dashboard"
                            >
                                <FiUser className="w-6 h-6 text-white" aria-hidden="true" />
                            </Link>
                        </div>
                    ) : (
                        /* NO LOGUEADO: Botón Acceder */
                        <Link
                            href="/auth/login"
                            className="border border-white/30 text-white px-4 py-2 text-sm rounded hover:bg-white/10 font-semibold transition-colors bg-white/15 backdrop-blur-sm shadow-lg"
                            aria-label="Iniciar sesión en MusicDibs"
                        >
                            Acceder
                        </Link>
                    )}
                </div>
            </div>

            {/* Menú Móvil */}
            <div
                id="mobile-menu"
                className={`fixed inset-0 bg-gray-900/95 backdrop-blur-sm text-white p-6 flex flex-col transform transition-all duration-500 ease-in-out z-[9999] mobile-menu ${
                    isMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
                }`}
                role="dialog"
                aria-label="Menú de navegación móvil"
                aria-modal="true"
                aria-hidden={!isMenuOpen}
            >
                {/* Header del menú móvil */}
                <div className="flex justify-between items-center mb-8">
                    <div 
                        className="flex items-center cursor-pointer" 
                        onClick={handleLogoClick}
                        role="button"
                        tabIndex={0}
                        aria-label="MusicDibs - Ir al inicio"
                        onKeyPress={(e) => e.key === 'Enter' && handleLogoClick()}
                    >
                        <Image 
                            src="/assets/images/logo-navbar.png"  
                            alt="MusicDibs" 
                            className="h-10 w-auto"
                            width={100}
                            height={40}
                        />
                    </div>
                    <button
                        onClick={() => setIsMenuOpen(false)}
                        className="text-3xl text-white hover:text-purple-300 transition-colors p-2 rounded-lg hover:bg-white/10"
                        aria-label="Cerrar menú de navegación"
                    >
                        <FiX aria-hidden="true" />
                    </button>
                </div>

                {/* Links con animación escalonada - LAS 7 VISTAS */}
                <div className="flex-1 overflow-y-auto space-y-4" role="menu" aria-label="Navegación móvil">
                    <a
                        href="#pricing-toggle"
                        onClick={handleScrollToPricing}
                        className="block text-lg py-3 border-b border-gray-700 transform transition-all duration-500 ease-out hover:text-purple-300"
                        style={{ 
                            transitionDelay: isMenuOpen ? "0.1s" : "0s",
                            transform: isMenuOpen ? "translateX(0)" : "translateX(-20px)",
                            opacity: isMenuOpen ? 1 : 0
                        }}
                        role="menuitem"
                        aria-label="Ver planes y precios"
                    >
                        Precios
                    </a>
                    
                    <button
                        onClick={() => handleNavigation("/faq")}
                        className="block text-lg py-3 border-b border-gray-700 transform transition-all duration-500 ease-out hover:text-purple-300 cursor-pointer text-left w-full"
                        style={{ 
                            transitionDelay: isMenuOpen ? "0.2s" : "0s",
                            transform: isMenuOpen ? "translateX(0)" : "translateX(-20px)",
                            opacity: isMenuOpen ? 1 : 0
                        }}
                        role="menuitem"
                        aria-label="Preguntas frecuentes"
                    >
                        FAQ
                    </button>
                    
                    <button
                        onClick={() => handleNavigation("/support")}
                        className="block text-lg py-3 border-b border-gray-700 transform transition-all duration-500 ease-out hover:text-purple-300 cursor-pointer text-left w-full"
                        style={{ 
                            transitionDelay: isMenuOpen ? "0.3s" : "0s",
                            transform: isMenuOpen ? "translateX(0)" : "translateX(-20px)",
                            opacity: isMenuOpen ? 1 : 0
                        }}
                        role="menuitem"
                        aria-label="Soporte técnico"
                    >
                        Soporte
                    </button>

                    {/* Dropdown Distribución Móvil */}
                    <div 
                        className="py-3 border-b border-gray-700 transform transition-all duration-500 ease-out"
                        style={{ 
                            transitionDelay: isMenuOpen ? "0.4s" : "0s",
                            transform: isMenuOpen ? "translateX(0)" : "translateX(-20px)",
                            opacity: isMenuOpen ? 1 : 0
                        }}
                    >
                        <button 
                            className="cursor-pointer text-lg flex items-center justify-between hover:text-purple-300 w-full text-left"
                            aria-expanded="false"
                            aria-controls="distribution-mobile-menu"
                        >
                            Distribución <FiChevronDown className="transition-transform duration-300" aria-hidden="true" />
                        </button>
                        <div id="distribution-mobile-menu" className="mt-2 ml-4 space-y-2 hidden" role="menu">
                            <a
                                href="https://dist.musicdibs.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block py-2 text-base text-gray-300 hover:text-purple-300 transition-colors"
                                role="menuitem"
                            >
                                Acceso
                            </a>
                            <button
                                onClick={() => handleNavigation("/distribution")}
                                className="block py-2 text-base text-gray-300 hover:text-purple-300 transition-colors cursor-pointer text-left w-full"
                                role="menuitem"
                            >
                                Información
                            </button>
                        </div>
                    </div>

                    <button
                        onClick={() => handleNavigation("/market")}
                        className="block text-lg py-3 border-b border-gray-700 transform transition-all duration-500 ease-out hover:text-purple-300 cursor-pointer text-left w-full"
                        style={{ 
                            transitionDelay: isMenuOpen ? "0.5s" : "0s",
                            transform: isMenuOpen ? "translateX(0)" : "translateX(-20px)",
                            opacity: isMenuOpen ? 1 : 0
                        }}
                        role="menuitem"
                        aria-label="Mercado musical"
                    >
                        Market
                    </button>
                    
                    <button
                        onClick={() => handleNavigation("/dibs-token")}
                        className="block text-lg py-3 border-b border-gray-700 transform transition-all duration-500 ease-out hover:text-purple-300 cursor-pointer text-left w-full"
                        style={{ 
                            transitionDelay: isMenuOpen ? "0.6s" : "0s",
                            transform: isMenuOpen ? "translateX(0)" : "translateX(-20px)",
                            opacity: isMenuOpen ? 1 : 0
                        }}
                        role="menuitem"
                        aria-label="DIBS Token"
                    >
                        DIBS Token
                    </button>
                    
                    <button
                        onClick={() => handleNavigation("/verification")}
                        className="block text-lg py-3 border-b border-gray-700 transform transition-all duration-500 ease-out hover:text-purple-300 cursor-pointer text-left w-full"
                        style={{ 
                            transitionDelay: isMenuOpen ? "0.7s" : "0s",
                            transform: isMenuOpen ? "translateX(0)" : "translateX(-20px)",
                            opacity: isMenuOpen ? 1 : 0
                        }}
                        role="menuitem"
                        aria-label="Verificador de registros"
                    >
                        Verificador
                    </button>
                </div>

                {/* Selector + CTA Móvil */}
                <div 
                    className="mt-8 pt-6 border-t border-gray-700 space-y-4 transform transition-all duration-500 ease-out relative"
                    style={{ 
                        transitionDelay: isMenuOpen ? "0.8s" : "0s",
                        transform: isMenuOpen ? "translateY(0)" : "translateY(20px)",
                        opacity: isMenuOpen ? 1 : 0
                    }}
                >
                    {/* Selector de idioma móvil */}
                    <div className="relative" ref={mobileLanguageDropdownRef}>
                        <button 
                            onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                            className="w-full border border-gray-600 bg-gray-800 text-white text-base px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 flex items-center justify-between"
                            aria-haspopup="listbox"
                            aria-expanded={isLanguageDropdownOpen}
                            aria-controls="language-listbox-mobile"
                            aria-label={`Idioma actual: ${language === "es" ? "Español" : language === "en" ? "English" : "Português"}. Seleccionar idioma`}
                        >
                            <span>
                                {language === "es" && "🇪🇸 Español"}
                                {language === "en" && "🇬🇧 English"} 
                                {language === "br" && "🇧🇷 Português"}
                            </span>
                            <FiChevronDown 
                                className={`transition-transform duration-300 ${isLanguageDropdownOpen ? 'rotate-180' : ''}`} 
                                aria-hidden="true" 
                            />
                        </button>
                        
                        {isLanguageDropdownOpen && (
                            <div 
                                id="language-listbox-mobile"
                                className="absolute bottom-full left-0 right-0 mb-2 bg-gray-800 border border-gray-700 rounded-lg shadow-xl z-50"
                                role="listbox"
                                aria-label="Seleccionar idioma"
                            >
                                {[
                                    { code: "es", label: "🇪🇸 Español" },
                                    { code: "en", label: "🇬🇧 English" },
                                    { code: "br", label: "🇧🇷 Português" },
                                ].map((lang) => (
                                    <button
                                        key={lang.code}
                                        onClick={() => handleLanguageChange(lang.code)}
                                        className={`block w-full text-left px-4 py-3 text-base hover:bg-purple-700 transition-colors ${
                                            language === lang.code ? "bg-purple-600 text-white" : "text-white"
                                        }`}
                                        role="option"
                                        aria-selected={language === lang.code}
                                    >
                                        {lang.label}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* SI ESTÁ LOGUEADO: Carrito + Perfil en móvil */}
                    {isLoggedIn ? (
                        <div className="flex gap-3">
                            <Link
                                href="/cart"
                                className="flex-1 bg-white/10 border border-white/20 rounded-lg p-3 flex items-center gap-2 font-medium text-center justify-center hover:bg-white/20 transition-colors"
                                aria-label="Carrito de compras"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <FiShoppingCart className="w-5 h-5" aria-hidden="true" />
                                <span>Carrito</span>
                            </Link>
                            <Link
                                href="/dashboard"
                                className="flex-1 bg-white/10 border border-white/20 rounded-lg p-3 flex items-center gap-2 font-medium text-center justify-center hover:bg-white/20 transition-colors"
                                aria-label="Ir al dashboard"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <FiUser className="w-5 h-5" aria-hidden="true" />
                                <span>Perfil</span>
                            </Link>
                        </div>
                    ) : (
                        /* NO LOGUEADO: Botón Acceder en móvil */
                        <Link
                            href="/auth/login"
                            className="w-full bg-purple-600 text-white px-4 py-3 text-base rounded-lg hover:bg-purple-700 font-semibold transition-colors text-center cursor-pointer block"
                            aria-label="Iniciar sesión en MusicDibs"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Acceder
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
}