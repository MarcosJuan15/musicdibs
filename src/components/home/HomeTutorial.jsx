'use client';

import { useState } from "react";
import Link from "next/link";

export default function HomeTutorial() {
    const [currentVideo, setCurrentVideo] = useState(0);

    const videos = [
        {
            src: "https://www.youtube.com/embed/a4HMb8pV2hQ",
            title: "Tutorial de Registro - MusicDIBS",
            description: "Aprende a registrar tus obras musicales paso a paso"
        },
        {
            src: "https://www.youtube.com/embed/YS8euOYAdp8",
            title: "Tutorial de Distribución - MusicDIBS",
            description: "Descubre cómo distribuir tu música en todas las plataformas"
        },
    ];

    const steps = [
        {
            step: 1,
            title: "Date de alta",
            description: "Regístrate y verifica tu identidad para dar validez legal a tus registros.",
        },
        {
            step: 2,
            title: "Registra tu canción",
            description: (
                <>
                    Sube tu obra; generamos una huella digital y la registramos en blockchain en segundos. Descarga tu certificado de registro, con sello de tiempo.{" "}
                    <Link
                        href="/certification"
                        target="_blank"
                        className="text-pink-300 hover:text-pink-200 underline transition-colors"
                        aria-label="Ver ejemplo de certificado"
                    >
                        Ver ej. certificado
                    </Link>
                    .
                </>
            ),
        },
        {
            step: 3,
            title: "Distribuye tu música",
            description: "Llega a Spotify, Apple Music, YouTube y más de 200 plataformas con un solo clic. Controla y monetiza tus lanzamientos desde tu panel.",
        },
    ];

    const prevVideo = () => {
        setCurrentVideo((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
    };

    const nextVideo = () => {
        setCurrentVideo((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
    };

    const scrollToPricing = () => {
        const pricingSection = document.getElementById('pricing-toggle');
        if (pricingSection) {
            pricingSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section
            id="tutorial-section"
            className="py-20 relative overflow-hidden bg-gradient-to-b from-purple-600 via-purple-700 to-purple-800"
            itemScope
            itemType="https://schema.org/HowTo"
            aria-labelledby="tutorial-title"
        >
            {/* Schema.org structured data */}
            <div className="hidden">
                <div itemScope itemType="https://schema.org/HowTo">
                    <meta itemProp="name" content="Cómo registrar y distribuir tu música con MusicDIBS" />
                    <meta itemProp="description" content="Tutorial paso a paso para registrar y distribuir tu música en todas las plataformas digitales" />
                    {steps.map((step, index) => (
                        <div key={step.step} itemScope itemType="https://schema.org/HowToStep">
                            <meta itemProp="position" content={index + 1} />
                            <meta itemProp="name" content={`Paso ${step.step}: ${step.title}`} />
                            <div itemProp="text">{step.description}</div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2
                        id="tutorial-title"
                        className="text-4xl md:text-5xl font-bold text-white mb-6"
                        itemProp="name"
                    >
                        ¿Cómo funciona?
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Ve los 2 tutoriales de registro y distribución y verás lo sencillo que es.
                    </p>
                </div>

                {/* Video Section */}
                <div
                    className="max-w-2xl mx-auto mb-16 bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-2xl p-4 relative"
                    itemScope
                    itemType="https://schema.org/VideoObject"
                >
                    <meta itemProp="name" content={videos[currentVideo].title} />
                    <meta itemProp="description" content={videos[currentVideo].description} />
                    <meta itemProp="thumbnailUrl" content={`https://img.youtube.com/vi/${videos[currentVideo].src.split('/').pop()}/maxresdefault.jpg`} />
                    <meta itemProp="uploadDate" content="2024-01-01" />

                    <button
                        onClick={prevVideo}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black transition-colors z-10"
                        aria-label="Video anterior"
                    >
                        ◀
                    </button>

                    <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                        <iframe
                            src={videos[currentVideo].src}
                            title={videos[currentVideo].title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
                            loading="lazy"
                            itemProp="embedUrl"
                        />
                    </div>

                    <button
                        onClick={nextVideo}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black transition-colors z-10"
                        aria-label="Siguiente video"
                    >
                        ▶
                    </button>

                    {/* Video Navigation Dots */}
                    <div className="flex justify-center space-x-2 mt-4">
                        {videos.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentVideo(index)}
                                className={`w-3 h-3 rounded-full transition-all ${index === currentVideo
                                        ? "bg-purple-600 scale-125"
                                        : "bg-gray-400 hover:bg-gray-500"
                                    }`}
                                aria-label={`Ver video ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Steps Section */}
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
                    {steps.map((step) => (
                        <div
                            key={step.step}
                            className="text-center"
                            itemScope
                            itemType="https://schema.org/HowToStep"
                        >
                            <meta itemProp="position" content={step.step} />
                            <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                                <span className="text-2xl font-bold text-white">{step.step}</span>
                            </div>
                            <h3
                                className="text-2xl font-bold text-white mb-4"
                                itemProp="name"
                            >
                                Paso {step.step}: {step.title}
                            </h3>
                            <p
                                className="text-lg text-white/90 leading-relaxed"
                                itemProp="text"
                            >
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-center">
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 max-w-3xl mx-auto">
                        Empieza hoy mismo a proteger y monetizar tu música
                    </h3>
                    <button
                        className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-bold py-4 px-12 rounded-full text-lg shadow-lg transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                        onClick={scrollToPricing}
                        aria-label="Comenzar a proteger mi música"
                    >
                        Comenzar ahora
                    </button>
                </div>
            </div>
        </section>
    );
}