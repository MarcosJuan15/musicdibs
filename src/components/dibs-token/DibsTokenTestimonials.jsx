'use client';

import { useState } from "react";
import { ChevronLeft, ChevronRight, Users } from "lucide-react";
import { useTranslations } from "next-intl";

export default function DibsTokenTestimonials() {
    const t = useTranslations('dibsToken.testimonials');
    const [currentVideo, setCurrentVideo] = useState(0);

    // Función para convertir cualquier valor a array seguro
    const getSafeArray = (rawData) => {
        // Si ya es un array, retornarlo
        if (Array.isArray(rawData)) return rawData;
        
        // Si es null/undefined, retornar array vacío
        if (!rawData) return [];
        
        // Si es string, intentar parsear como JSON
        if (typeof rawData === 'string') {
            try {
                const parsed = JSON.parse(rawData);
                return Array.isArray(parsed) ? parsed : [];
            } catch {
                return [];
            }
        }
        
        // Si es objeto, convertir sus valores a array
        if (typeof rawData === 'object') {
            return Object.values(rawData);
        }
        
        // Cualquier otro caso, array vacío
        return [];
    };

    // Obtener testimonios como array seguro
    const testimonials = getSafeArray(t.raw('testimonials'));

    // Verificar que haya testimonios antes de usar las funciones de navegación
    const nextVideo = () => {
        if (testimonials.length > 0) {
            setCurrentVideo((prev) => (prev + 1) % testimonials.length);
        }
    };

    const prevVideo = () => {
        if (testimonials.length > 0) {
            setCurrentVideo((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        }
    };

    // Obtener el testimonio actual de forma segura
    const currentTestimonial = testimonials[currentVideo] || {};

    return (
        <section className="py-20 px-4 bg-white" itemScope itemType="https://schema.org/ItemList">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6" itemProp="headline">
                        {t('title')}
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-900 via-purple-800 to-pink-600 mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto" itemProp="description">
                        {t('description')}
                    </p>
                </div>

                {testimonials.length > 0 ? (
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-6 md:p-8">
                            <div className="relative group">
                                <div className="aspect-video mb-6 rounded-lg overflow-hidden shadow-lg bg-black">
                                    <iframe
                                        src={`https://www.youtube.com/embed/${currentTestimonial.videoId || ''}?rel=0&modestbranding=1&autoplay=0`}
                                        title={t('video_title', {
                                            name: currentTestimonial.name || '',
                                            title: currentTestimonial.title || ''
                                        })}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="w-full h-full"
                                        loading="lazy"
                                    />
                                </div>

                                {testimonials.length > 1 && (
                                    <>
                                        <button
                                            onClick={prevVideo}
                                            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/70 text-white p-2 rounded-full opacity-80 hover:opacity-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-lg"
                                            aria-label={t('previous')}
                                        >
                                            <ChevronLeft size={20} />
                                        </button>

                                        <button
                                            onClick={nextVideo}
                                            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/70 text-white p-2 rounded-full opacity-80 hover:opacity-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-lg"
                                            aria-label={t('next')}
                                        >
                                            <ChevronRight size={20} />
                                        </button>
                                    </>
                                )}
                            </div>

                            <div className="text-center mb-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                    {currentTestimonial.name || 'Testimonio'}
                                </h3>
                                <p className="text-lg text-gray-700 font-medium mb-1">
                                    {currentTestimonial.title || ''}
                                </p>
                                <p className="text-gray-600">
                                    {currentTestimonial.role || ''}
                                </p>
                            </div>

                            {testimonials.length > 1 && (
                                <>
                                    <div className="flex justify-center space-x-3 mt-6">
                                        {testimonials.map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setCurrentVideo(index)}
                                                className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 ${index === currentVideo
                                                        ? "bg-gradient-to-r from-purple-800 to-pink-600 scale-125 shadow-md"
                                                        : "bg-gray-300 hover:bg-gray-400"
                                                    }`}
                                                aria-label={t('view_testimonial', { 
                                                    number: index + 1, 
                                                    name: testimonials[index]?.name || `Testimonio ${index + 1}` 
                                                })}
                                                aria-current={index === currentVideo ? "true" : "false"}
                                            />
                                        ))}
                                    </div>

                                    <div className="text-center mt-4">
                                        <span className="text-sm text-gray-600 font-medium">
                                            {currentVideo + 1} / {testimonials.length}
                                        </span>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                ) : (
                    <div className="max-w-4xl mx-auto text-center py-12">
                        <p className="text-gray-500 text-lg">
                            No hay testimonios disponibles en este momento.
                        </p>
                    </div>
                )}

                <div className="mt-16 max-w-2xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
                        <div className="bg-gradient-to-br from-blue-900/5 to-purple-800/5 rounded-xl p-6 border border-blue-900/10">
                            <div className="text-3xl font-bold text-gray-900 mb-2">{t('stats.tokens')}</div>
                            <p className="text-gray-600">{t('stats.tokens_label')}</p>
                        </div>
                        <div className="bg-gradient-to-br from-purple-800/5 to-pink-600/5 rounded-xl p-6 border border-purple-800/10">
                            <div className="text-3xl font-bold text-gray-900 mb-2">{t('stats.experts')}</div>
                            <p className="text-gray-600">{t('stats.experts_label')}</p>
                        </div>
                    </div>
                </div>

                <div className="hidden">
                    {testimonials.map((testimonial, index) => (
                        testimonial && (
                            <div key={testimonial.videoId || index} itemScope itemType="https://schema.org/ListItem">
                                <meta itemProp="position" content={index + 1} />
                                <div itemProp="item" itemScope itemType="https://schema.org/Review">
                                    <div itemProp="author" itemScope itemType="https://schema.org/Person">
                                        <meta itemProp="name" content={testimonial.name || ''} />
                                        <meta itemProp="jobTitle" content={testimonial.role || ''} />
                                    </div>
                                    <div itemProp="itemReviewed" itemScope itemType="https://schema.org/Service">
                                        <meta itemProp="name" content="DIBS Token - MusicDIBS" />
                                    </div>
                                    <meta itemProp="reviewRating" content="5" />
                                </div>
                            </div>
                        )
                    ))}
                </div>
            </div>
        </section>
    );
}