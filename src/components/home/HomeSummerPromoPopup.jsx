'use client';

import { useState, useEffect, useCallback } from "react";
import { Sparkles } from "lucide-react";

export default function HomeSummerPromoPopup({ onClose }) {
  const [isOpen, setIsOpen] = useState(false);

  // Función para bloquear el scroll completamente
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

  // Función para desbloquear el scroll
  const unlockScroll = () => {
    const body = document.body;
    const scrollY = body.style.top;
    
    body.style.overflow = '';
    body.style.position = '';
    body.style.top = '';
    body.style.left = '';
    body.style.right = '';
    body.style.paddingRight = '';
    
    // Restaurar la posición de scroll
    if (scrollY) {
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
  };

  const handleClose = useCallback(() => {
    setIsOpen(false);
    unlockScroll();
    if (onClose) onClose();
  }, [onClose]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
      lockScroll();
    }, 10000);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    return () => {
      if (isOpen) {
        unlockScroll();
      }
    };
  }, [isOpen]);

  // Manejar tecla Escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, handleClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="promo-title"
    >
      <div 
        className="bg-gradient-to-br from-blue-900 via-purple-800 to-pink-600 text-white rounded-2xl shadow-2xl w-full max-w-sm sm:max-w-md md:max-w-lg relative mx-auto animate-in fade-in-90 zoom-in-90 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute -top-3 -right-3 bg-white text-blue-900 hover:bg-gray-100 rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition-all duration-200 z-20 font-bold text-lg hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-900"
          aria-label="Cerrar oferta"
        >
          ✕
        </button>

        <div className="p-4 sm:p-6 md:p-8 relative z-10">
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="bg-yellow-400 text-blue-900 rounded-full p-3 animate-bounce shadow-lg">
              <Sparkles className="h-6 w-6 sm:h-8 sm:w-8" />
            </div>
          </div>

          <h2 id="promo-title" className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-center">
            🔥 ¡Oferta de Verano! 🔥
          </h2>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 mb-4 sm:mb-6 border border-white/20">
            <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-yellow-300 mb-1 text-center">
              -20%
            </div>
            <p className="text-base sm:text-lg font-semibold text-center">
              En todas las suscripciones
            </p>
          </div>

          <p className="mb-3 sm:mb-4 text-sm sm:text-base text-center">
            Distribuye tu música en todas las plataformas y empieza a ganar dinero con tus canciones.
          </p>

          <p className="mb-4 sm:mb-6 text-xs sm:text-sm text-center text-white/90">
            Introduce el cupón al hacer el pago.
          </p>

          <div className="bg-white/95 rounded-xl p-4 sm:p-6 shadow-2xl text-blue-900 font-bold text-lg sm:text-xl md:text-2xl text-center mb-2 border-2 border-yellow-400">
            Código de descuento: 
            <span className="block text-blue-900 mt-1 text-xl sm:text-2xl md:text-3xl">
              MUSIC20
            </span>
          </div>

          <p className="text-xs text-white/70 text-center mt-3">
            *Oferta válida por tiempo limitado
          </p>
        </div>
      </div>
    </div>
  );
}