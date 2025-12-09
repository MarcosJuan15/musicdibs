'use client';

import { useState } from "react";
import { ChevronLeft, ChevronRight, Users } from "lucide-react";

export default function DibsTokenTestimonials() {
    const [currentVideo, setCurrentVideo] = useState(0);

    const testimonials = [
        {
            name: "Carlos Lozano",
            title: "Plan BTC",
            videoId: "r5v_kPZLzOM",
            role: "Experto en Bitcoin"
        },
        {
            name: "Erika Bada",
            title: "Bada Sessions",
            videoId: "CnS6IblpMzY",
            role: "Artista y Productora Musical"
        },
        {
            name: "Javier Sierra",
            title: "Javier Sierra",
            videoId: "xrsiFHJUGSk",
            role: "Profesional Musical"
        },
        {
            name: "Dorrego",
            title: "Dorrego",
            videoId: "l1RIZvKCvhE",
            role: "Artista"
        },
        {
            name: "Christian",
            title: "ChristianVib",
            videoId: "KodixKxB0C8",
            role: "Creador de Contenido Musical"
        },
        {
            name: "Vocalissama",
            title: "Vocalissama",
            videoId: "dtsGdtsv3eQ",
            role: "Coach Vocal"
        },
        {
            name: "Malurina",
            title: "Malurina",
            videoId: "FzDva0GalOc",
            role: "Artista Musical"
        }
    ];

    const nextVideo = () => {
        setCurrentVideo((prev) => (prev + 1) % testimonials.length);
    };

    const prevVideo = () => {
        setCurrentVideo((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="py-20 px-4 bg-white" itemScope itemType="https://schema.org/ItemList">
            <div className="container mx-auto max-w-6xl">
                {/* Header con el mismo estilo */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6" itemProp="headline">
                        Qué dicen los expertos sobre DIBS Token
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-900 via-purple-800 to-pink-600 mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto" itemProp="description">
                        Descubre por qué inversores y artistas confían en nuestra tokenómica
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-6 md:p-8">
                        {/* Video Player with Navigation */}
                        <div className="relative group">
                            <div className="aspect-video mb-6 rounded-lg overflow-hidden shadow-lg bg-black">
                                <iframe
                                    src={`https://www.youtube.com/embed/${testimonials[currentVideo].videoId}?rel=0&modestbranding=1&autoplay=0`}
                                    title={`Testimonio de ${testimonials[currentVideo].name} sobre DIBS Token - ${testimonials[currentVideo].title}`}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full"
                                    loading="lazy"
                                />
                            </div>

                            {/* Navigation Arrows */}
                            <button
                                onClick={prevVideo}
                                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/70 text-white p-2 rounded-full opacity-80 hover:opacity-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-lg"
                                aria-label="Testimonio anterior"
                            >
                                <ChevronLeft size={20} />
                            </button>

                            <button
                                onClick={nextVideo}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/70 text-white p-2 rounded-full opacity-80 hover:opacity-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-lg"
                                aria-label="Siguiente testimonio"
                            >
                                <ChevronRight size={20} />
                            </button>
                        </div>

                        {/* Testimonial Info */}
                        <div className="text-center mb-6">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                {testimonials[currentVideo].name}
                            </h3>
                            <p className="text-lg text-gray-700 font-medium mb-1">
                                {testimonials[currentVideo].title}
                            </p>
                            <p className="text-gray-600">
                                {testimonials[currentVideo].role}
                            </p>
                        </div>

                        {/* Dot Navigation */}
                        <div className="flex justify-center space-x-3 mt-6">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentVideo(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 ${index === currentVideo
                                            ? "bg-gradient-to-r from-purple-800 to-pink-600 scale-125 shadow-md"
                                            : "bg-gray-300 hover:bg-gray-400"
                                        }`}
                                    aria-label={`Ver testimonio ${index + 1} - ${testimonials[index].name}`}
                                    aria-current={index === currentVideo ? "true" : "false"}
                                />
                            ))}
                        </div>

                        {/* Video Counter */}
                        <div className="text-center mt-4">
                            <span className="text-sm text-gray-600 font-medium">
                                {currentVideo + 1} / {testimonials.length}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Stats Section - Similar al estilo de tus componentes */}
                <div className="mt-16 max-w-2xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
                        <div className="bg-gradient-to-br from-blue-900/5 to-purple-800/5 rounded-xl p-6 border border-blue-900/10">
                            <div className="text-3xl font-bold text-gray-900 mb-2">100M+</div>
                            <p className="text-gray-600">Tokens en circulación</p>
                        </div>
                        <div className="bg-gradient-to-br from-purple-800/5 to-pink-600/5 rounded-xl p-6 border border-purple-800/10">
                            <div className="text-3xl font-bold text-gray-900 mb-2">7</div>
                            <p className="text-gray-600">Expertos respaldan</p>
                        </div>
                    </div>
                </div>

                {/* Schema.org structured data */}
                <div className="hidden">
                    {testimonials.map((testimonial, index) => (
                        <div key={testimonial.videoId} itemScope itemType="https://schema.org/ListItem">
                            <meta itemProp="position" content={index + 1} />
                            <div itemProp="item" itemScope itemType="https://schema.org/Review">
                                <div itemProp="author" itemScope itemType="https://schema.org/Person">
                                    <meta itemProp="name" content={testimonial.name} />
                                    <meta itemProp="jobTitle" content={testimonial.role} />
                                </div>
                                <div itemProp="itemReviewed" itemScope itemType="https://schema.org/Service">
                                    <meta itemProp="name" content="DIBS Token - MusicDIBS" />
                                </div>
                                <meta itemProp="reviewRating" content="5" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}