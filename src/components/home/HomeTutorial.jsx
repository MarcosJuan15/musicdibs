// src/components/home/HomeTutorial.jsx
'use client';

import { useState } from "react";
import { Link } from "@/navigation"; // ← Link personalizado
import { useTranslations } from 'next-intl';

export default function HomeTutorial() {
    const [currentVideo, setCurrentVideo] = useState(0);
    const t = useTranslations('home.tutorial');      // ← 'home.tutorial'
const tCommon = useTranslations('common');


    const videos = [
        {
            src: "https://www.youtube.com/embed/a4HMb8pV2hQ",
            title: t('video1_title'),
            description: t('video1_description')
        },
        {
            src: "https://www.youtube.com/embed/YS8euOYAdp8",
            title: t('video2_title'),
            description: t('video2_description')
        },
    ];

    const steps = [
        {
            step: 1,
            title: t('step1_title'),
            description: t('step1_description'),
        },
        {
            step: 2,
            title: t('step2_title'),
            description: t.rich('step2_description', {
                link: (chunks) => (
                    <Link
                        href="/certification"
                        target="_blank"
                        className="text-pink-300 hover:text-pink-200 underline transition-colors"
                        aria-label={t('step2_link')}
                    >
                        {chunks}
                    </Link>
                )
            }),
        },
        {
            step: 3,
            title: t('step3_title'),
            description: t('step3_description'),
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
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2
                        id="tutorial-title"
                        className="text-4xl md:text-5xl font-bold text-white mb-6"
                        itemProp="name"
                    >
                        {t('title')}
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        {t('subtitle')}
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

                    <button
                        onClick={prevVideo}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black transition-colors z-10"
                        aria-label={tCommon('previous')}
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
                        aria-label={tCommon('next')}
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
                        {t('cta_title')}
                    </h3>
                    <button
                        className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-bold py-4 px-12 rounded-full text-lg shadow-lg transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                        onClick={scrollToPricing}
                        aria-label={t('cta_button')}
                    >
                        {t('cta_button')}
                    </button>
                </div>
            </div>
        </section>
    );
}