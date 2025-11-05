'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FiChevronDown, FiMenu, FiX, FiUser } from "react-icons/fi";
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

    // Estado de autenticación simple
    useEffect(() => {
        const checkAuth = () => {
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

    // ✅ SOLUCIÓN: Función MEJORADA para manejar scroll a precios
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
                // ✅ CAMBIO CRÍTICO: Mismo patrón que el navbar que funciona
                // En móvil: "sticky" (sin top-0) - se desplaza
                // En desktop: "static" - se desplaza
                typeof window !== 'undefined' && window.innerWidth < 768 ? "sticky" : "static"
            } ${
                isScrolled ? "shadow-lg" : ""
            }`}
            aria-label="Navegación principal"
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-white">
                {/* Logo */}
                <div 
                    className="flex items-center mt-2 md:mt-0 cursor-pointer" 
                    onClick={handleLogoClick}
                    role="button"
                    tabIndex={0}
                    onKeyPress={(e) => e.key === 'Enter' && handleLogoClick()}
                >
                    <Image 
                        src="/assets/images/logo-navbar.png"  
                        alt="MusicDibs - Plataforma de distribución musical" 
                        className="h-12 w-auto"
                        width={120}
                        height={48}
                        priority
                    />
                </div>

                {/* Botón Hamburguesa en Móvil */}
                <div className="md:hidden z-50">
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
                        aria-expanded={isMenuOpen}
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
                        aria-label="Ver planes de precios"
                    >
                        Precios
                    </a>
                    
                    <Link href="/faq" className="hover:text-white transition-colors">
                        FAQ
                    </Link>
                    
                    <Link href="/support" className="hover:text-white transition-colors">
                        Soporte
                    </Link>

                    {/* Dropdown Distribución */}
                    <div className="relative group" role="navigation" aria-label="Distribución">
                        <button 
                            className="flex items-center gap-1 hover:text-white transition-colors"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            Distribución
                            <FiChevronDown className="transition-transform duration-300 group-hover:rotate-180" aria-hidden="true" />
                        </button>
                        <div 
                            className="absolute left-0 mt-2 w-48 bg-gray-800 shadow-xl rounded-lg border border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50"
                            role="menu"
                        >
                            <a
                                href="https://dist.musicdibs.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block px-4 py-3 text-lg text-white hover:bg-purple-700 transition-colors"
                                role="menuitem"
                            >
                                Acceso
                            </a>
                            <Link
                                href="/distribution"
                                className="block px-4 py-3 text-lg text-white hover:bg-purple-700 transition-colors"
                                role="menuitem"
                            >
                                Información
                            </Link>
                        </div>
                    </div>

                    <Link href="/market" className="hover:text-white transition-colors">
                        Market
                    </Link>
                    
                    <Link 
                        href="/dibs-token" 
                        className="hover:text-white transition-colors"
                    >
                        DIBS Token
                    </Link>
                    
                    <Link href="/verification" className="hover:text-white transition-colors">
                        Verificador
                    </Link>
                </div>

                {/* Selector + CTA Desktop */}
                <div className="hidden md:flex items-center gap-3 relative">
                    {/* Selector de idioma desktop */}
                    <div className="relative group" role="combobox" aria-label="Seleccionar idioma">
                        <button 
                            className="flex items-center gap-2 border border-white/30 text-white text-lg pl-4 pr-8 py-1 rounded bg-white/15 backdrop-blur-sm shadow-lg hover:bg-white/20 transition-colors"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            {language === "es" && "🇪🇸"}
                            {language === "en" && "🇬🇧"}
                            {language === "br" && "🇧🇷"}
                            <FiChevronDown className="transition-transform duration-300 group-hover:rotate-180" aria-hidden="true" />
                        </button>
                        
                        <div 
                            className="absolute right-0 mt-2 w-32 bg-gray-800 shadow-xl rounded-lg border border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50"
                            role="listbox"
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

                    {/* Botón Acceder O Icono de Perfil si está logueado */}
                    {isLoggedIn ? (
                        <Link
                            href="/dashboard"
                            className="p-2 rounded-full bg-white/15 border border-white/30 hover:bg-white/20 backdrop-blur-sm transition-colors flex items-center justify-center"
                            aria-label="Ir al dashboard"
                        >
                            <FiUser className="w-6 h-6 text-white" />
                        </Link>
                    ) : (
                        <Link
                            href="/auth/login"
                            className="border border-white/30 text-white px-3 py-2 text-sm rounded hover:bg-white/10 font-semibold transition-colors bg-white/15 backdrop-blur-sm shadow-lg"
                            aria-label="Iniciar sesión"
                        >
                            Acceder
                        </Link>
                    )}
                </div>
            </div>

            {/* Menú Móvil */}
            <div
                className={`fixed inset-0 bg-gray-900/95 backdrop-blur-sm text-white p-6 flex flex-col transform transition-all duration-500 ease-in-out z-[9999] mobile-menu ${
                    isMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
                }`}
                role="dialog"
                aria-label="Menú de navegación móvil"
                aria-hidden={!isMenuOpen}
            >
                {/* Header del menú móvil */}
                <div className="flex justify-between items-center mb-8">
                    <div 
                        className="flex items-center cursor-pointer" 
                        onClick={handleLogoClick}
                        role="button"
                        tabIndex={0}
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
                        className="text-3xl text-white hover:text-purple-300 transition-colors p-2"
                        aria-label="Cerrar menú"
                    >
                        <FiX aria-hidden="true" />
                    </button>
                </div>

                {/* Links con animación escalonada */}
                <div className="flex-1 overflow-y-auto space-y-4" role="menu">
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
                    >
                        Precios
                    </a>
                    
                    <div
                        onClick={() => handleNavigation("/faq")}
                        className="block text-lg py-3 border-b border-gray-700 transform transition-all duration-500 ease-out hover:text-purple-300 cursor-pointer"
                        style={{ 
                            transitionDelay: isMenuOpen ? "0.2s" : "0s",
                            transform: isMenuOpen ? "translateX(0)" : "translateX(-20px)",
                            opacity: isMenuOpen ? 1 : 0
                        }}
                        role="menuitem"
                    >
                        FAQ
                    </div>
                    
                    <div
                        onClick={() => handleNavigation("/support")}
                        className="block text-lg py-3 border-b border-gray-700 transform transition-all duration-500 ease-out hover:text-purple-300 cursor-pointer"
                        style={{ 
                            transitionDelay: isMenuOpen ? "0.3s" : "0s",
                            transform: isMenuOpen ? "translateX(0)" : "translateX(-20px)",
                            opacity: isMenuOpen ? 1 : 0
                        }}
                        role="menuitem"
                    >
                        Soporte
                    </div>

                    {/* Dropdown Distribución Móvil */}
                    <details 
                        className="py-3 border-b border-gray-700 transform transition-all duration-500 ease-out"
                        style={{ 
                            transitionDelay: isMenuOpen ? "0.4s" : "0s",
                            transform: isMenuOpen ? "translateX(0)" : "translateX(-20px)",
                            opacity: isMenuOpen ? 1 : 0
                        }}
                    >
                        <summary className="cursor-pointer text-lg flex items-center justify-between hover:text-purple-300">
                            Distribución <FiChevronDown className="transition-transform duration-300" aria-hidden="true" />
                        </summary>
                        <div className="mt-2 ml-4 space-y-2" role="menu">
                            <a
                                href="https://dist.musicdibs.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block py-2 text-base text-gray-300 hover:text-purple-300 transition-colors"
                                role="menuitem"
                            >
                                Acceso
                            </a>
                            <div
                                onClick={() => handleNavigation("/distribution")}
                                className="block py-2 text-base text-gray-300 hover:text-purple-300 transition-colors cursor-pointer"
                                role="menuitem"
                            >
                                Información
                            </div>
                        </div>
                    </details>

                    <div
                        onClick={() => handleNavigation("/market")}
                        className="block text-lg py-3 border-b border-gray-700 transform transition-all duration-500 ease-out hover:text-purple-300 cursor-pointer"
                        style={{ 
                            transitionDelay: isMenuOpen ? "0.5s" : "0s",
                            transform: isMenuOpen ? "translateX(0)" : "translateX(-20px)",
                            opacity: isMenuOpen ? 1 : 0
                        }}
                        role="menuitem"
                    >
                        Market
                    </div>
                    
                    <div
                        onClick={() => handleNavigation("/dibs-token")}
                        className="block text-lg py-3 border-b border-gray-700 transform transition-all duration-500 ease-out hover:text-purple-300 cursor-pointer"
                        style={{ 
                            transitionDelay: isMenuOpen ? "0.6s" : "0s",
                            transform: isMenuOpen ? "translateX(0)" : "translateX(-20px)",
                            opacity: isMenuOpen ? 1 : 0
                        }}
                        role="menuitem"
                    >
                        DIBS Token
                    </div>
                    
                    <div
                        onClick={() => handleNavigation("/verification")}
                        className="block text-lg py-3 border-b border-gray-700 transform transition-all duration-500 ease-out hover:text-purple-300 cursor-pointer"
                        style={{ 
                            transitionDelay: isMenuOpen ? "0.7s" : "0s",
                            transform: isMenuOpen ? "translateX(0)" : "translateX(-20px)",
                            opacity: isMenuOpen ? 1 : 0
                        }}
                        role="menuitem"
                    >
                        Verificador
                    </div>
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
                    <div className="relative">
                        <button 
                            onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                            className="w-full border border-gray-600 bg-gray-800 text-white text-base px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 flex items-center justify-between"
                            aria-haspopup="true"
                            aria-expanded={isLanguageDropdownOpen}
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
                                className="absolute bottom-full left-0 right-0 mb-2 bg-gray-800 border border-gray-700 rounded-lg shadow-xl z-50"
                                role="listbox"
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

                    {/* Botón Acceder móvil O Icono de Perfil si está logueado */}
                    {isLoggedIn ? (
                        <Link
                            href="/dashboard"
                            className="w-full bg-white/10 border border-white/20 rounded-lg p-3 flex items-center gap-2 font-medium text-center justify-center hover:bg-white/20 transition-colors"
                            aria-label="Ir al dashboard"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <FiUser className="w-5 h-5" />
                            <span>Mi Perfil</span>
                        </Link>
                    ) : (
                        <Link
                            href="/auth/login"
                            className="w-full bg-purple-600 text-white px-4 py-3 text-base rounded-lg hover:bg-purple-700 font-semibold transition-colors text-center cursor-pointer block"
                            aria-label="Iniciar sesión"
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