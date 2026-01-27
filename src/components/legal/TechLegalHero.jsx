'use client';

import { useTranslations } from "next-intl";
import { Shield } from "lucide-react";

export default function TechLegalHero() {
    const t = useTranslations('legal.tech_and_legal'); // Correcto
    
    // Obtén los datos usando t.raw() como en tus otros componentes
    const techLegalData = t.raw('sections.hero') || {};
    
    return (
        <section className="py-20 bg-gradient-to-br from-purple-900/10 via-purple-800/10 to-pink-800/10" aria-labelledby="hero-tech-legal">
            <div className="container mx-auto px-4 text-center">
                <div className="flex justify-center mb-6">
                    <div className="p-4 rounded-full bg-gradient-to-br from-blue-900 via-purple-800 to-pink-600">
                        <Shield className="h-8 w-8 text-white" />
                    </div>
                </div>
                
                {/* Usa dangerouslySetInnerHTML como en SLAHero */}
                <h1 
                    id="hero-tech-legal" 
                    className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6"
                    dangerouslySetInnerHTML={{
                        __html: techLegalData.title
                            .replace('{span}', '<span class="bg-gradient-to-br from-blue-900 via-purple-800 to-pink-600 bg-clip-text text-transparent">')
                            .replace('{/span}', '</span>')
                    }}
                />
                
                <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                    {techLegalData.description}
                </p>
            </div>
        </section>
    );
}