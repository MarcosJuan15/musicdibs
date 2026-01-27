'use client';

import { BarChart } from "lucide-react";
import { useTranslations } from "next-intl";

export default function SLAHero() {
    const t = useTranslations('legal'); // Mismo namespace que SLAContent
    
    // Obtener los datos de service_level_agreement igual que en SLAContent
    const slaData = t.raw('service_level_agreement');
    const heroData = slaData.sections.hero;
    
    return (
        <section className="py-20 bg-gradient-to-br from-purple-900/10 via-purple-800/10 to-pink-800/10">
            <div className="container mx-auto px-4 text-center">
                <div className="flex justify-center mb-6">
                    <div className="p-4 rounded-full bg-gradient-to-br from-blue-900 via-purple-800 to-pink-600">
                        <BarChart className="h-8 w-8 text-white" />
                    </div>
                </div>
                
                <h1 
                    className="text-4xl md:text-6xl font-bold mb-6"
                    dangerouslySetInnerHTML={{
                        __html: heroData.title
                            .replace('{span}', '<span class="bg-gradient-to-br from-blue-900 via-purple-800 to-pink-600 bg-clip-text text-transparent">')
                            .replace('{/span}', '</span>')
                    }}
                />
                
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    {heroData.description}
                </p>
            </div>
        </section>
    );
}