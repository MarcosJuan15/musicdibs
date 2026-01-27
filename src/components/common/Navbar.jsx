'use client';

import { useState, useEffect, useRef } from "react";
import { Link, usePathname, useRouter } from "@/navigation";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [isMobileLanguageDropdownOpen, setIsMobileLanguageDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const tNavbar = useTranslations('navbar');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const languageDropdownRef = useRef(null);
  const mobileLanguageDropdownRef = useRef(null);
  const languageDropdownTimerRef = useRef(null);

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
        setIsMobileLanguageDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Funciones para manejar hover en selector de idioma (desktop)
  const handleLanguageMouseEnter = () => {
    if (window.innerWidth >= 768) {
      clearTimeout(languageDropdownTimerRef.current);
      setIsLanguageDropdownOpen(true);
    }
  };

  const handleLanguageMouseLeave = () => {
    if (window.innerWidth >= 768) {
      languageDropdownTimerRef.current = setTimeout(() => {
        setIsLanguageDropdownOpen(false);
      }, 300);
    }
  };

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
      setIsMobileLanguageDropdownOpen(false);
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
      router.push("/");
      setTimeout(() => {
        const section = document.querySelector("#pricing-toggle");
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
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

  // Click en logo → Home
  const handleLogoClick = () => {
    setIsMenuOpen(false);
    router.push("/");
  };

  // FUNCIÓN CORREGIDA PARA CAMBIAR IDIOMA - DESKTOP (MANTIENE PÁGINA ACTUAL)
  const handleLanguageChange = (newLocale) => {
    setIsLanguageDropdownOpen(false);

    try {
      // Mantener la ruta actual, solo cambiar el locale
      router.push(
        { pathname: pathname || '/' },
        { locale: newLocale }
      );

    } catch (error) {
      console.error('Error cambiando idioma:', error);

      const currentPath = window.location.pathname;
      const pathWithoutLocale = currentPath.replace(/^\/(es|en|pt)/, '');
      const newPath = `/${newLocale}${pathWithoutLocale || '/'}`;

      window.location.href = newPath;
    }
  };

  // Función específica para móvil que maneja mejor el evento (MANTIENE PÁGINA ACTUAL)
  const handleMobileLanguageChange = (newLocale, e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }

    setIsMobileLanguageDropdownOpen(false);

    setTimeout(() => {
      // Mantener la ruta actual, solo cambiar el locale
      router.push(
        { pathname: pathname || '/' },
        { locale: newLocale }
      ).then(() => {
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

  // Función para obtener la bandera del idioma actual
  const getCurrentLanguageFlag = () => {
    switch (locale) {
      case 'es': return "🇪🇸";
      case 'en': return "🇬🇧";
      case 'pt': return "🇵🇹";
      default: return "🇪🇸";
    }
  };

  // Función para toggle del menú móvil
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
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
      className={`w-full top-0 left-0 right-0 z-40 bg-gradient-to-br from-blue-900 via-purple-800 to-pink-600 transition-all duration-300 ${typeof window !== 'undefined' && window.innerWidth < 768 ? "sticky" : "static"
        } ${isScrolled ? "shadow-lg" : ""
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
            onClick={handleMenuToggle}
            aria-label={isMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            className="p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            {isMenuOpen ? <FiX size={28} aria-hidden="true" /> : <FiMenu size={28} aria-hidden="true" />}
          </button>
        </div>

        {/* Links Desktop */}
        <div className="hidden md:flex items-center space-x-8 text-white/90 text-base font-medium">
          <a
            href="#pricing-toggle"
            onClick={handleScrollToPricing}
            className="hover:text-white transition-colors"
            aria-label={tNavbar('pricing')}
            itemProp="url"
          >
            <span itemProp="name">{tNavbar('pricing')}</span>
          </a>

          <Link href="/faq" className="hover:text-white transition-colors" itemProp="url">
            <span itemProp="name">{tNavbar('faq')}</span>
          </Link>

          <Link href="/support" className="hover:text-white transition-colors" itemProp="url">
            <span itemProp="name">{tNavbar('support')}</span>
          </Link>

          {/* Dropdown Distribución */}
          <div className="relative group" role="navigation" aria-label={tNavbar('distribution')}>
            <button
              className="flex items-center gap-1 hover:text-white transition-colors"
              aria-haspopup="true"
              aria-expanded="false"
              aria-controls="distribution-menu"
            >
              <span itemProp="name">{tNavbar('distribution')}</span>
              <FiChevronDown className="transition-transform duration-300 group-hover:rotate-180" aria-hidden="true" />
            </button>
            <div
              id="distribution-menu"
              className="absolute left-0 mt-2 w-48 bg-gray-700/90 shadow-xl rounded-lg border border-gray-600 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50"
              role="menu"
              aria-label={tNavbar('distribution')}
            >
              <a
                href="https://dist.musicdibs.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-3 text-sm text-white hover:bg-purple-600/50 transition-colors"
                role="menuitem"
                itemProp="url"
              >
                Acceso Plataforma
              </a>
              <Link
                href="/distribution"
                className="block px-4 py-3 text-sm text-white hover:bg-purple-600/50 transition-colors"
                role="menuitem"
                itemProp="url"
              >
                Información
              </Link>
            </div>
          </div>

          {/* Enlace Market actualizado */}
          <a
            href="https://market.musicdibs.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            itemProp="url"
          >
            <span itemProp="name">{tNavbar('market')}</span>
          </a>

          {/* Nueva pestaña Noticias */}
          <a
            href="https://musicdibs.com/noticias/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            itemProp="url"
          >
            <span itemProp="name">{tNavbar('news')}</span>
          </a>

          <Link
            href="/dibs-token"
            className="hover:text-white transition-colors"
            itemProp="url"
          >
            <span itemProp="name">{tNavbar('dibs_token')}</span>
          </Link>

          {/* Enlace Verificador actualizado */}
          <a
            href="https://checker.icommunitylabs.com/?brand=music"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            itemProp="url"
          >
            <span itemProp="name">{tNavbar('verification')}</span>
          </a>
        </div>

        {/* Selector de Idioma + CTA - FONDO BLANCO TRANSLÚCIDO como HomeNavbar */}
        <div 
          className="hidden md:flex items-center gap-3 relative"
          ref={languageDropdownRef}
          onMouseEnter={handleLanguageMouseEnter}
          onMouseLeave={handleLanguageMouseLeave}
        >
          {/* Selector de idioma desktop - FONDO BLANCO TRANSLÚCIDO como HomeNavbar */}
          <div className="relative">
            <button
              className="flex items-center gap-2 border border-white/30 text-white text-base pl-3 pr-6 py-2 rounded bg-white/15 backdrop-blur-sm shadow-lg hover:bg-white/20 transition-colors"
              onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
              aria-haspopup="listbox"
              aria-expanded={isLanguageDropdownOpen}
              aria-controls="language-listbox-desktop"
              aria-label={`${tNavbar('language')}: ${getCurrentLanguageLabel()}`}
            >
              {getCurrentLanguageFlag()}
              <FiChevronDown className={`transition-transform duration-300 ${isLanguageDropdownOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
            </button>

            {/* Dropdown de idiomas - FONDO OSCURO como el de distribución */}
            <div
              id="language-listbox-desktop"
              className={`absolute right-0 mt-2 w-28 bg-gray-700/90 shadow-xl rounded-lg border border-gray-600 transition-all duration-200 z-50 ${
                isLanguageDropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
              role="listbox"
              aria-label={tNavbar('language')}
              onMouseEnter={() => clearTimeout(languageDropdownTimerRef.current)}
              onMouseLeave={handleLanguageMouseLeave}
            >
              <button
                onClick={() => handleLanguageChange("es")}
                className={`block w-full text-left px-3 py-2 text-sm hover:bg-purple-600/50 transition-colors ${
                  locale === "es" ? "bg-purple-600 text-white" : "text-white"
                }`}
                role="option"
                aria-selected={locale === "es"}
              >
                🇪🇸 {tNavbar('spanish')}
              </button>
              <button
                onClick={() => handleLanguageChange("en")}
                className={`block w-full text-left px-3 py-2 text-sm hover:bg-purple-600/50 transition-colors ${
                  locale === "en" ? "bg-purple-600 text-white" : "text-white"
                }`}
                role="option"
                aria-selected={locale === "en"}
              >
                🇬🇧 {tNavbar('english')}
              </button>
              <button
                onClick={() => handleLanguageChange("pt")}
                className={`block w-full text-left px-3 py-2 text-sm hover:bg-purple-600/50 transition-colors ${
                  locale === "pt" ? "bg-purple-600 text-white" : "text-white"
                }`}
                role="option"
                aria-selected={locale === "pt"}
              >
                🇵🇹 {tNavbar('portuguese')}
              </button>
            </div>
          </div>

          {/* Botón Acceder - FONDO BLANCO TRANSLÚCIDO como HomeNavbar */}
          <Link
            href="/auth/login"
            className="border border-white/30 text-white px-4 py-2 text-sm rounded hover:bg-white/10 font-semibold transition-colors bg-white/15 backdrop-blur-sm shadow-lg"
            aria-label={tNavbar('login')}
          >
            {tNavbar('login')}
          </Link>
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

        {/* Links con animación escalonada */}
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
            aria-label={tNavbar('pricing')}
          >
            {tNavbar('pricing')}
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
            aria-label={tNavbar('faq')}
          >
            {tNavbar('faq')}
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
            aria-label={tNavbar('support')}
          >
            {tNavbar('support')}
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
              onClick={() => {
                const menu = document.getElementById('distribution-mobile-menu');
                if (menu) {
                  menu.classList.toggle('hidden');
                }
              }}
              aria-expanded="false"
              aria-controls="distribution-mobile-menu"
            >
              {tNavbar('distribution')} <FiChevronDown className="transition-transform duration-300" aria-hidden="true" />
            </button>
            <div id="distribution-mobile-menu" className="mt-2 ml-4 space-y-2 hidden" role="menu">
              <a
                href="https://dist.musicdibs.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block py-2 text-sm text-gray-300 hover:text-purple-300 transition-colors"
                role="menuitem"
              >
                Acceso Plataforma
              </a>
              <button
                onClick={() => handleNavigation("/distribution")}
                className="block py-2 text-sm text-gray-300 hover:text-purple-300 transition-colors cursor-pointer text-left w-full"
                role="menuitem"
              >
                Información
              </button>
            </div>
          </div>

          {/* Market actualizado en móvil */}
          <button
            onClick={() => handleNavigation("https://market.musicdibs.com/")}
            className="block text-lg py-3 border-b border-gray-700 transform transition-all duration-500 ease-out hover:text-purple-300 cursor-pointer text-left w-full"
            style={{
              transitionDelay: isMenuOpen ? "0.5s" : "0s",
              transform: isMenuOpen ? "translateX(0)" : "translateX(-20px)",
              opacity: isMenuOpen ? 1 : 0
            }}
            role="menuitem"
            aria-label={tNavbar('market')}
          >
            {tNavbar('market')}
          </button>

          {/* Nueva pestaña Noticias en móvil */}
          <button
            onClick={() => handleNavigation("https://musicdibs.com/noticias/")}
            className="block text-lg py-3 border-b border-gray-700 transform transition-all duration-500 ease-out hover:text-purple-300 cursor-pointer text-left w-full"
            style={{
              transitionDelay: isMenuOpen ? "0.6s" : "0s",
              transform: isMenuOpen ? "translateX(0)" : "translateX(-20px)",
              opacity: isMenuOpen ? 1 : 0
            }}
            role="menuitem"
            aria-label={tNavbar('news')}
          >
            {tNavbar('news')}
          </button>

          <button
            onClick={() => handleNavigation("/dibs-token")}
            className="block text-lg py-3 border-b border-gray-700 transform transition-all duration-500 ease-out hover:text-purple-300 cursor-pointer text-left w-full"
            style={{
              transitionDelay: isMenuOpen ? "0.7s" : "0s",
              transform: isMenuOpen ? "translateX(0)" : "translateX(-20px)",
              opacity: isMenuOpen ? 1 : 0
            }}
            role="menuitem"
            aria-label={tNavbar('dibs_token')}
          >
            {tNavbar('dibs_token')}
          </button>

          {/* Verificador actualizado en móvil */}
          <button
            onClick={handleVerificationClick}
            className="block text-lg py-3 border-b border-gray-700 transform transition-all duration-500 ease-out hover:text-purple-300 cursor-pointer text-left w-full"
            style={{
              transitionDelay: isMenuOpen ? "0.8s" : "0s",
              transform: isMenuOpen ? "translateX(0)" : "translateX(-20px)",
              opacity: isMenuOpen ? 1 : 0
            }}
            role="menuitem"
            aria-label={tNavbar('verification')}
          >
            {tNavbar('verification')}
          </button>
        </div>

        {/* Selector + CTA Móvil CORREGIDO */}
        <div
          className="mt-8 pt-6 border-t border-gray-700 space-y-4 transform transition-all duration-500 ease-out relative"
          style={{
            transitionDelay: isMenuOpen ? "0.9s" : "0s",
            transform: isMenuOpen ? "translateY(0)" : "translateY(20px)",
            opacity: isMenuOpen ? 1 : 0
          }}
        >
          {/* Selector de idioma móvil CORREGIDO */}
          <div className="relative" ref={mobileLanguageDropdownRef}>
            <button
              onClick={handleMobileLanguageToggle}
              className="w-full border border-gray-600 bg-gray-800 text-white text-base px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 flex items-center justify-between"
              aria-haspopup="listbox"
              aria-expanded={isMobileLanguageDropdownOpen}
              aria-controls="language-listbox-mobile"
              aria-label={`${tNavbar('language')}: ${getCurrentLanguageLabel()}`}
            >
              <span>
                {getCurrentLanguageFlag()} {getCurrentLanguageLabel()}
              </span>
              <FiChevronDown
                className={`transition-transform duration-300 ${isMobileLanguageDropdownOpen ? 'rotate-180' : ''}`}
                aria-hidden="true"
              />
            </button>

            {isMobileLanguageDropdownOpen && (
              <div
                id="language-listbox-mobile"
                className="absolute bottom-full left-0 right-0 mb-2 bg-gray-700/90 border border-gray-600 rounded-lg shadow-xl z-50"
                role="listbox"
                aria-label={tNavbar('language')}
              >
                <button
                  onClick={(e) => handleMobileLanguageChange("es", e)}
                  className={`block w-full text-left px-4 py-3 text-sm hover:bg-purple-600/50 transition-colors ${locale === "es" ? "bg-purple-600 text-white" : "text-white"
                    }`}
                  role="option"
                  aria-selected={locale === "es"}
                >
                  🇪🇸 {tNavbar('spanish')}
                </button>
                <button
                  onClick={(e) => handleMobileLanguageChange("en", e)}
                  className={`block w-full text-left px-4 py-3 text-sm hover:bg-purple-600/50 transition-colors ${locale === "en" ? "bg-purple-600 text-white" : "text-white"
                    }`}
                  role="option"
                  aria-selected={locale === "en"}
                >
                  🇬🇧 {tNavbar('english')}
                </button>
                <button
                  onClick={(e) => handleMobileLanguageChange("pt", e)}
                  className={`block w-full text-left px-4 py-3 text-sm hover:bg-purple-600/50 transition-colors ${locale === "pt" ? "bg-purple-600 text-white" : "text-white"
                    }`}
                  role="option"
                  aria-selected={locale === "pt"}
                >
                  🇵🇹 {tNavbar('portuguese')}
                </button>
              </div>
            )}
          </div>

          {/* Botón Acceder en móvil */}
          <Link
            href="/auth/login"
            className="w-full bg-purple-600 text-white px-4 py-3 text-base rounded-lg hover:bg-purple-700 font-semibold transition-colors text-center cursor-pointer block"
            aria-label={tNavbar('login')}
            onClick={() => setIsMenuOpen(false)}
          >
            {tNavbar('login')}
          </Link>
        </div>
      </div>
    </nav>
  );
}