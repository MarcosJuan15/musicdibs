'use client';

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function HomeTestimonials() {
    const [currentVideo, setCurrentVideo] = useState(0);

    const testimonials = [
        {
            name: "Erika Bada",
            title: "Bada Sessions",
            videoId: "CnS6IblpMzY",
            role: "Artista y Productora Musical"
        },
        {
            name: "Christian",
            title: "ChristianVib", 
            videoId: "KodixKxB0C8",
            role: "Creador de Contenido Musical"
        },
        {
            name: "Nico Astegiano",
            title: "Nico Astegiano Youtube",
            videoId: "3Nok9jcbbuM",
            role: "YouTuber Musical"
        },
        {
            name: "Matias Martinez",
            title: "Matzz",
            videoId: "rq7ndp10DXA",
            role: "Artista Independiente"
        }
    ];

    const nextVideo = () => {
        setCurrentVideo((prev) => (prev + 1) % testimonials.length);
    };

    const prevVideo = () => {
        setCurrentVideo((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section 
            id="testimonials-section" 
            className="py-20 relative overflow-hidden bg-gradient-to-br bg-purple-400"
            itemScope
            itemType="https://schema.org/ItemList"
            aria-labelledby="testimonials-title"
        >
            <div className="container mx-auto px-4 relative z-10">
                {/* Schema.org structured data */}
                <div className="hidden">
                    {testimonials.map((testimonial, index) => (
                        <div key={testimonial.videoId} itemScope itemType="https://schema.org/ListItem">
                            <meta itemProp="position" content={index + 1} />
                            <div itemProp="item" itemScope itemType="https://schema.org/Review">
                                <div itemProp="author" itemScope itemType="https://schema.org/Person">
                                    <meta itemProp="name" content={testimonial.name} />
                                </div>
                                <div itemProp="itemReviewed" itemScope itemType="https://schema.org/Service">
                                    <meta itemProp="name" content="MusicDIBS Platform" />
                                </div>
                                <meta itemProp="reviewRating" content="5" />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mb-12">
                    <h2 
                        id="testimonials-title"
                        className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg"
                        itemProp="name"
                    >
                        Qué dicen los profesionales sobre MusicDIBS
                    </h2>
                    <p className="text-xl text-white/90 max-w-2xl mx-auto">
                        Descubre por qué miles de artistas confían en nosotros
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="bg-white/80 backdrop-blur-sm border border-white/20 shadow-2xl rounded-lg p-8">
                        {/* Video Player with Navigation */}
                        <div className="relative group">
                            <div className="aspect-video mb-6 rounded-lg overflow-hidden shadow-lg">
                                <iframe
                                    src={`https://www.youtube.com/embed/${testimonials[currentVideo].videoId}?rel=0&modestbranding=1`}
                                    title={`Testimonio de ${testimonials[currentVideo].name} - ${testimonials[currentVideo].title}`}
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
                                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/60 text-white p-2 rounded-full opacity-70 hover:opacity-100 transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-white"
                                aria-label="Testimonio anterior"
                            >
                                <ChevronLeft size={20} />
                            </button>
                            
                            <button
                                onClick={nextVideo}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/60 text-white p-2 rounded-full opacity-70 hover:opacity-100 transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-white"
                                aria-label="Siguiente testimonio"
                            >
                                <ChevronRight size={20} />
                            </button>
                        </div>

                        {/* Testimonial Info */}
                        <div className="text-center mb-6">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                                {testimonials[currentVideo].name}
                            </h3>
                            <p className="text-lg text-gray-700">{testimonials[currentVideo].title}</p>
                        </div>

                        {/* Dot Navigation */}
                        <div className="flex justify-center space-x-3 mt-6">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentVideo(index)}
                                    className={`w-4 h-4 rounded-full transition-all duration-300 focus:outline-none ${
                                        index === currentVideo
                                            ? "bg-purple-600 scale-125 shadow-md"
                                            : "bg-gray-400 hover:bg-gray-500"
                                    }`}
                                    aria-label={`View testimonial ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* SEO Text */}
                <div className="mt-8 text-center text-white/80">
                    <p className="text-lg">
                        Únete a los <strong>más de 100,000 artistas</strong> que ya protegen su música con MusicDIBS
                    </p>
                </div>
            </div>
        </section>
    );
}