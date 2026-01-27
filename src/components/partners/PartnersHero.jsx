'use client';

import { Handshake } from "lucide-react";
import { useTranslations } from "next-intl";

export default function PartnersHero() {
    const t = useTranslations('partners.hero');
    
    return (
        <section className="py-20 bg-gradient-to-br from-blue-900/10 via-purple-800/10 to-pink-600/10" 
                itemScope 
                itemType="https://schema.org/WebPage">
            <div className="container mx-auto px-4 text-center">
                <div className="flex justify-center mb-6">
                    <div className="p-4 rounded-full bg-gradient-to-br from-blue-900 via-purple-800 to-pink-600">
                        <Handshake className="h-8 w-8 text-white" aria-hidden="true" />
                    </div>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6" itemProp="headline">
                    {t('title_part1')} <span className="bg-gradient-to-br from-blue-900 via-purple-800 to-pink-600 bg-clip-text text-transparent">{t('title_part2')}</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto" itemProp="description">
                    {t('description')}
                </p>
                
                {/* Schema.org para Partnership */}
                <div itemScope itemType="https://schema.org/Organization" className="hidden">
                    <meta itemProp="name" content={t('schema_name')} />
                    <meta itemProp="description" content={t('schema_description')} />
                    <meta itemProp="url" content="https://musicdibs.com/partners" />
                </div>
            </div>
        </section>
    );
}