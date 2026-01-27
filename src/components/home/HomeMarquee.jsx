// src/components/home/HomeMarquee.jsx
'use client';

import { useTranslations } from 'next-intl';

export default function HomeMarquee() {
    const t = useTranslations('home.marquee');  
    
    const lines = [
        t('line1'),
        t('line2'), 
        t('line3'),
        t('line4')
    ];

    return (
        <div className="bg-gradient-to-r from-blue-600 to-pink-600 text-white py-3 overflow-hidden relative">
            <div className="marquee-container whitespace-nowrap">
                <div className="marquee-content animate-marquee inline-flex">
                    {lines.map((line, index) => (
                        <span key={index} className="mx-8 font-semibold">{line}</span>
                    ))}
                    {/* Duplicado para el efecto infinito */}
                    {lines.map((line, index) => (
                        <span key={`dup-${index}`} className="mx-8 font-semibold">{line}</span>
                    ))}
                </div>
            </div>
            
            <style jsx>{`
                @keyframes marquee {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                .animate-marquee {
                    animation: marquee 40s linear infinite;
                }
                .marquee-container {
                    width: 100%;
                    overflow: hidden;
                }
                .marquee-content {
                    display: inline-flex;
                    white-space: nowrap;
                }
            `}</style>
        </div>
    );
}