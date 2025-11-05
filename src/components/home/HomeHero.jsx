'use client';

import Link from "next/link";

export default function HomeHero() {
    // Función para hacer scroll suave
    const handleScroll = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section id="hero" className="relative w-full h-screen flex items-center justify-center overflow-hidden">
            {/* Patrones difuminados - EXACTAMENTE IGUAL */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-white/10 blur-xl"></div>
                <div className="absolute top-40 right-20 w-24 h-24 rounded-full bg-pink-300/20 blur-lg"></div>
                <div className="absolute bottom-32 left-1/4 w-40 h-40 rounded-full bg-purple-300/10 blur-xl"></div>
                <div className="absolute bottom-20 right-1/3 w-28 h-28 rounded-full bg-white/10 blur-lg"></div>
            </div>

            {/* Contenido principal */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto -translate-y-20">

                {/* Título - COLORES EXACTAMENTE IGUALES */}
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                    Tu obra,&nbsp;
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300">
                        solo tuya
                    </span>
                </h1>

                {/* Subtítulo - CON RUTA CORREGIDA */}
                <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                    Registra, promociona y distribuye tu música con{" "}
                    <span className="font-semibold text-white">validez legal en TODO el mundo</span>{" "}
                    <Link href="/tech-and-legal" className="text-pink-300 hover:text-pink-200 underline transition-colors">
                        +info
                    </Link>
                </p>

                {/* Botones - BOTÓN AZUL ACTUALIZADO */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                    <button
                        onClick={() => handleScroll("pricing-toggle")}
                        className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:opacity-90 transition w-full max-w-[280px] sm:w-[200px] text-center text-sm sm:text-base hover:scale-105 transform duration-200"
                    >
                        Empezar Ya
                    </button>
                    <button
                        onClick={() => handleScroll("tutorial-section")}
                        className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:opacity-90 transition w-full max-w-[280px] sm:w-[200px] text-center text-sm sm:text-base hover:scale-105 transform duration-200 border border-cyan-300/30"
                    >
                        Ver Cómo Funciona
                    </button>
                </div>
            </div>
        </section>
    );
}