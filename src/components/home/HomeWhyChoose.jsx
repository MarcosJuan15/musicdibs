// src/components/home/HomeWhyChoose.jsx
'use client';

import { useState } from "react";
import { Link } from "@/navigation"; // ← Link personalizado
import { Shield, Zap, Globe, Ban } from "lucide-react";
import { useTranslations } from "next-intl";

export default function HomeWhyChoose() {
    const [openModalIndex, setOpenModalIndex] = useState(null);
    const t = useTranslations('home.why_choose');    // ← 'home.why_choose'
const tCommon = useTranslations('common');


    const features = [
        {
            icon: <Shield className="w-8 h-8 text-white" />,
            title: t('feature1_title'),
            description: t('feature1_description'),
            color: "from-pink-500 to-purple-600",
            modalContent: (
                <>
                    {t.rich('feature1_modal', {
                        link1: (chunks) => (
                            <a
                                href="https://www.wipo.int/treaties/es/ip/berne/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-purple-600 font-semibold underline hover:opacity-80"
                            >
                                {chunks}
                            </a>
                        ),
                        link2: (chunks) => (
                            <a
                                href="https://www.wipo.int/treaties/es/ip/wct/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-purple-600 font-semibold underline hover:opacity-80"
                            >
                                {chunks}
                            </a>
                        ),
                        link3: (chunks) => (
                            <a
                                href="https://digital-strategy.ec.europa.eu/es/policies/copyright"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-purple-600 font-semibold underline hover:opacity-80"
                            >
                                {chunks}
                            </a>
                        ),
                    })}
                </>
            )
        },
        {
            icon: <Zap className="w-8 h-8 text-white" />,
            title: t('feature2_title'),
            description: t('feature2_description'),
            color: "from-purple-500 to-blue-600",
            modalContent: t('feature2_modal')
        },
        {
            icon: <Globe className="w-8 h-8 text-white" />,
            title: t('feature3_title'),
            description: t('feature3_description'),
            color: "from-blue-500 to-cyan-600",
            modalContent: t('feature3_modal')
        },
        {
            icon: <Ban className="w-8 h-8 text-white" />,
            title: t('feature4_title'),
            description: t('feature4_description'),
            color: "from-cyan-500 to-pink-600",
            modalContent: t('feature4_modal')
        },
    ];

    return (
        <section 
            className="py-20 bg-gradient-to-b from-purple-900 to-purple-800"
            itemScope 
            itemType="https://schema.org/Service"
            aria-labelledby="why-choose-heading"
        >
            {/* Schema.org markup oculto */}
            <div itemScope itemType="https://schema.org/Organization" className="hidden">
                <meta itemProp="name" content="MusicDIBS" />
                <meta itemProp="description" content="Plataforma de registro y distribución musical con tecnología blockchain" />
                <meta itemProp="url" content="https://musicdibs.com" />
            </div>

            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 id="why-choose-heading" className="text-4xl md:text-5xl font-bold text-white mb-4">
                    {t('title')}
                </h2>
                <p className="text-lg text-white/80 max-w-2xl mx-auto mb-16">
                    {t('subtitle')}
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            onClick={() => setOpenModalIndex(index)}
                            className="cursor-pointer bg-white/10 rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 flex flex-col h-full"
                        >
                            <div
                                className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}
                            >
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-white/70">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {openModalIndex !== null && (
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
                    <div className="bg-white rounded-xl p-8 max-w-3xl max-h-[70vh] overflow-y-auto mx-4 relative text-black shadow-lg">
                        <button
                            onClick={() => setOpenModalIndex(null)}
                            className="absolute top-2 right-2 text-black text-xl font-bold"
                            aria-label={tCommon('close')}
                        >
                            ✕
                        </button>
                        <h2 className="text-2xl font-bold mb-4">
                            {features[openModalIndex].title}
                        </h2>
                        <div className="text-gray-800 leading-relaxed">
                            {features[openModalIndex].modalContent}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}