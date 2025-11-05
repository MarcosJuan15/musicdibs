'use client';

import { useState, useEffect } from "react";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";

export default function HomeNavbar({ isMenuOpen, setIsMenuOpen }) {
    const [language, setLanguage] = useState("es");
    const [isScrolled, setIsScrolled] = useState(false);
    const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    // Funciones para bloquear/desbloquear scroll (igual que en el popup)
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

    // Función para cambiar idioma
    const handleLanguageChange = (newLanguage) => {
        setLanguage(newLanguage);
        setIsLanguageDropdownOpen(false);
    };

    // Función para manejar scroll a precios y cerrar menú
    const handleScrollToPricing = (e) => {
        e.preventDefault();
        setIsMenuOpen(false);

        if (pathname === "/") {
            setTimeout(() => {
                const section = document.querySelector("#pricing-toggle");
                if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                }
            }, 300);
        } else {
            router.push("/");
            setIsMenuOpen(false);
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
                    <div className="relative group">
                        <button className="flex items-center gap-1 hover:text-white transition-colors">
                            Distribución
                            <FiChevronDown className="transition-transform duration-300 group-hover:rotate-180" />
                        </button>
                        <div className="absolute left-0 mt-2 w-48 bg-white/15 backdrop-blur-sm shadow-lg rounded-lg border border-white/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                            <a
                                href="https://dist.musicdibs.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block px-4 py-3 text-lg text-white hover:bg-white/20 transition-colors"
                            >
                                Acceso
                            </a>
                            <Link
                                href="/distribution"
                                className="block px-4 py-3 text-lg text-white hover:bg-white/20 transition-colors"
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
                    {/* Selector de idioma */}
                    <div className="relative group">
                        <button className="flex items-center gap-2 border border-white/30 text-white text-base pl-3 pr-6 py-2 rounded bg-white/15 backdrop-blur-sm shadow-lg hover:bg-white/20 transition-colors">
                            {language === "es" && "🇪🇸"}
                            {language === "en" && "🇬🇧"}
                            {language === "br" && "🇧🇷"}
                            <FiChevronDown className="transition-transform duration-300 group-hover:rotate-180" />
                        </button>
                        
                        {/* Dropdown de idiomas */}
                        <div className="absolute right-0 mt-2 w-28 bg-white/15 backdrop-blur-sm shadow-lg rounded-lg border border-white/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                            <button
                                onClick={() => handleLanguageChange("es")}
                                className={`block w-full text-left px-3 py-2 text-sm hover:bg-white/20 transition-colors ${
                                    language === "es" ? "bg-white/30 text-white" : "text-white"
                                }`}
                            >
                                🇪🇸 Español
                            </button>
                            <button
                                onClick={() => handleLanguageChange("en")}
                                className={`block w-full text-left px-3 py-2 text-sm hover:bg-white/20 transition-colors ${
                                    language === "en" ? "bg-white/30 text-white" : "text-white"
                                }`}
                            >
                                🇬🇧 English
                            </button>
                            <button
                                onClick={() => handleLanguageChange("br")}
                                className={`block w-full text-left px-3 py-2 text-sm hover:bg-white/20 transition-colors ${
                                    language === "br" ? "bg-white/30 text-white" : "text-white"
                                }`}
                            >
                                🇧🇷 Português
                            </button>
                        </div>
                    </div>

                    {/* Botón Acceder - Recomiendo auth/login para consistencia */}
                    <Link
                        href="/auth/login"
                        className="border border-white/30 text-white px-4 py-3 text-sm rounded hover:bg-white/10 font-semibold transition-colors bg-white/15 backdrop-blur-sm shadow-lg"
                    >
                        Acceder
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
                    <Link href="/" onClick={() => setIsMenuOpen(false)}>
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
                    >
                        Soporte
                    </div>

                    {/* Dropdown Distribución Móvil */}
                    <details className="py-3 border-b border-gray-700 transform transition-all duration-500 ease-out"
                        style={{ 
                            transitionDelay: isMenuOpen ? "0.4s" : "0s",
                            transform: isMenuOpen ? "translateX(0)" : "translateX(-20px)",
                            opacity: isMenuOpen ? 1 : 0
                        }}
                    >
                        <summary className="cursor-pointer text-lg flex items-center justify-between hover:text-purple-300">
                            Distribución <FiChevronDown className="transition-transform duration-300" />
                        </summary>
                        <div className="mt-2 ml-4 space-y-2">
                            <a
                                href="https://dist.musicdibs.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block py-2 text-base text-gray-300 hover:text-purple-300 transition-colors"
                            >
                                Acceso
                            </a>
                            <div
                                onClick={() => handleNavigation("/distribution")}
                                className="block py-2 text-base text-gray-300 hover:text-purple-300 transition-colors cursor-pointer"
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
                    >
                        Verificador
                    </div>
                </div>

                {/* Selector + CTA Móvil */}
                <div className="mt-8 pt-6 border-t border-gray-700 space-y-4 transform transition-all duration-500 ease-out relative"
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
                        >
                            <span>
                                {language === "es" && "🇪🇸 Español"}
                                {language === "en" && "🇬🇧 English"} 
                                {language === "br" && "🇧🇷 Português"}
                            </span>
                            <FiChevronDown className={`transition-transform duration-300 ${isLanguageDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>
                        
                        {/* Dropdown de idiomas */}
                        {isLanguageDropdownOpen && (
                            <div className="absolute bottom-full left-0 right-0 mb-2 bg-gray-800 border border-gray-700 rounded-lg shadow-xl z-50">
                                <button
                                    onClick={() => handleLanguageChange("es")}
                                    className={`block w-full text-left px-4 py-3 text-base hover:bg-purple-700 transition-colors ${
                                        language === "es" ? "bg-purple-600 text-white" : "text-white"
                                    }`}
                                >
                                    🇪🇸 Español
                                </button>
                                <button
                                    onClick={() => handleLanguageChange("en")}
                                    className={`block w-full text-left px-4 py-3 text-base hover:bg-purple-700 transition-colors ${
                                        language === "en" ? "bg-purple-600 text-white" : "text-white"
                                    }`}
                                >
                                    🇬🇧 English
                                </button>
                                <button
                                    onClick={() => handleLanguageChange("br")}
                                    className={`block w-full text-left px-4 py-3 text-base hover:bg-purple-700 transition-colors ${
                                        language === "br" ? "bg-purple-600 text-white" : "text-white"
                                    }`}
                                >
                                    🇧🇷 Português
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Botón Acceder Móvil */}
                    <Link
                        href="/auth/login"
                        className="w-full bg-purple-600 text-white px-4 py-3 text-base rounded-lg hover:bg-purple-700 font-semibold transition-colors text-center cursor-pointer block"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Acceder
                    </Link>
                </div>
            </div>
        </nav>
    );
}