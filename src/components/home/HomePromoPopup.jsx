'use client';

import { useState, useEffect } from "react";
import { X, Gift } from "lucide-react";

export default function HomePromoPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log("🔍 useEffect ejecutándose");
    
    // Para DEBUGGING, descomenta esto:
    // localStorage.removeItem('christmasPopupClosed');
    
    // Verificar si ya fue cerrado
    const wasClosed = localStorage.getItem('christmasPopupClosed');
    console.log("📝 localStorage 'christmasPopupClosed':", wasClosed);
    
    if (wasClosed === 'true') {
      console.log("❌ Popup ya fue cerrado, no mostrando");
      return;
    }

    console.log("⏳ Mostrando popup en 3 segundos...");
    const timer = setTimeout(() => {
      console.log("✅ MOSTRANDO POPUP AHORA!");
      setIsOpen(true);
    }, 3000);
    
    return () => {
      console.log("🧹 Limpiando timer");
      clearTimeout(timer);
    };
  }, []);

  // Efecto para bloquear/desbloquear el scroll cuando se abre/cierra el popup
  useEffect(() => {
    if (isOpen) {
      console.log("🔒 Bloqueando scroll de la página");
      
      // Guardar la posición actual del scroll y el ancho del scrollbar
      const scrollY = window.scrollY;
      const body = document.body;
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
      
      // Guardar el estilo original para restaurarlo después
      body.style.position = 'fixed';
      body.style.top = `-${scrollY}px`;
      body.style.left = '0';
      body.style.right = '0';
      body.style.overflowY = 'scroll'; // Mantener espacio para scrollbar
      body.style.paddingRight = `${scrollBarWidth}px`;
      
      // Guardar la posición de scroll para restaurarla después
      body.dataset.scrollY = scrollY.toString();
      
      return () => {
        console.log("🔓 Restaurando scroll de la página");
        
        // Restaurar estilos
        body.style.position = '';
        body.style.top = '';
        body.style.left = '';
        body.style.right = '';
        body.style.overflowY = '';
        body.style.paddingRight = '';
        
        // Restaurar posición de scroll
        const savedScrollY = body.dataset.scrollY;
        if (savedScrollY) {
          window.scrollTo(0, parseInt(savedScrollY));
        }
        delete body.dataset.scrollY;
      };
    }
  }, [isOpen]); // Este efecto se ejecuta cada vez que isOpen cambia

  const handleClose = () => {
    console.log("✖️ Cerrando popup");
    setIsOpen(false);
    localStorage.setItem('christmasPopupClosed', 'true');
  };

  // Manejar tecla Escape para cerrar
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
  }, [isOpen]);

  // Para forzar a mostrar inmediatamente (DEBUG)
  if (typeof window !== 'undefined') {
    window.showChristmasPopup = () => {
      console.log("🎮 Forzando popup desde consola");
      setIsOpen(true);
    };
  }

  if (!isOpen) {
    console.log("👻 Popup NO está abierto, retornando null");
    return null;
  }

  console.log("🎨 Renderizando popup!");

  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={handleClose}
    >
      <div 
        className="relative bg-gradient-to-br from-red-950 via-green-950 to-red-950 text-white rounded-2xl shadow-2xl w-full max-w-lg mx-auto overflow-hidden border-2 border-green-500/50 animate-in fade-in-90 zoom-in-90 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 z-10 text-white/80 hover:text-white transition-colors hover:scale-110 bg-red-900/50 hover:bg-red-800/70 rounded-full p-2 backdrop-blur-sm"
          aria-label="Cerrar oferta navideña"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Copos de nieve decorativos */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute text-white opacity-70 animate-fall"
              style={{
                left: `${(i * 15) % 90}%`,
                top: '-20px',
                animationDelay: `${i * 0.5}s`,
                fontSize: '1.2rem'
              }}
            >
              ❄️
            </div>
          ))}
        </div>
        
        <div className="text-center p-6 sm:p-8 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 via-green-600/10 to-red-600/10"></div>
          
          <div className="relative z-10">
            {/* Iconos navideños */}
            <div className="flex justify-center items-center gap-4 mb-6">
              <span className="text-4xl animate-bounce" style={{ animationDelay: '0s' }}>🎄</span>
              <div className="bg-gradient-to-br from-red-600 to-green-600 text-white rounded-full p-4 shadow-lg shadow-green-500/30 animate-pulse">
                <Gift className="h-10 w-10" />
              </div>
              <span className="text-4xl animate-bounce" style={{ animationDelay: '0.2s' }}>🎄</span>
            </div>
            
            {/* Título */}
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-white to-green-400 uppercase tracking-wider">
              🎁 Oferta Especial de Navidad 🎁
            </h2>

            {/* Descuento */}
            <div className="bg-gradient-to-r from-red-600/20 via-green-600/20 to-red-600/20 rounded-xl p-5 mb-6 backdrop-blur-sm border border-green-500/30">
              <div className="text-6xl sm:text-7xl font-extrabold mb-1 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-red-400">
                -25%
              </div>
              <p className="text-green-200 text-sm font-semibold">
                En todas las suscripciones
              </p>
            </div>
            
            {/* Descripción */}
            <p className="mb-4 text-sm sm:text-base text-center text-green-200 font-semibold">
              Distribuye tu música en todas las plataformas esta Navidad y empieza el nuevo año con tu música en el mundo.
            </p>
            
            <p className="mb-6 text-xs sm:text-sm text-center text-white/90">
              Introduce el cupón al hacer el pago para aplicar el descuento.
            </p>
            
            {/* Código de descuento */}
            <div className="bg-gradient-to-br from-red-600 via-red-500 to-green-600 rounded-xl p-4 sm:p-6 shadow-2xl shadow-green-500/20 relative overflow-hidden mb-4">
              {/* Estrellas decorativas */}
              <div className="absolute top-1 left-2 text-yellow-300 text-sm animate-pulse">✨</div>
              <div className="absolute top-1 right-2 text-yellow-300 text-sm animate-pulse" style={{ animationDelay: '0.5s' }}>✨</div>
              <div className="absolute bottom-1 left-4 text-yellow-300 text-xs animate-pulse" style={{ animationDelay: '1s' }}>⭐</div>
              <div className="absolute bottom-1 right-4 text-yellow-300 text-xs animate-pulse" style={{ animationDelay: '1.5s' }}>⭐</div>
              
              <div className="text-white text-base sm:text-lg font-bold mb-2">
                Código de descuento navideño: 
              </div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight flex items-center justify-center gap-2">
                <span className="text-3xl animate-bounce" style={{ animationDelay: '0s' }}>🎅</span>
                <span className="bg-white/20 px-5 py-3 rounded-lg backdrop-blur-sm border border-white/30 font-mono">MUSICXMAS25</span>
                <span className="text-3xl animate-bounce" style={{ animationDelay: '0.2s' }}>🎅</span>
              </div>
            </div>
            
            {/* Nota al pie */}
            <p className="text-xs text-white/60 text-center mt-4">
              *Oferta válida hasta el 31 de diciembre. No acumulable con otras promociones.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}