'use client';

import { FileText, CheckCircle } from "lucide-react";
import { useTranslations } from "next-intl";

export default function CertificationHero() {
    const t = useTranslations('certification'); // Solo 'certification'
    
    // Obtenemos todo el objeto hero de forma segura
    const heroData = t.raw('hero') || {};
    
    // Fallbacks para que no explote si no encuentra la traducción
    const title = heroData.title || "";
    const description = heroData.description || "";
    const schema = heroData.schema || {};

    return (
        <section className="py-16 bg-gradient-to-br from-blue-900/10 via-purple-800/10 to-pink-600/10" 
                 itemScope 
                 itemType="https://schema.org/WebPage">
            <div className="container mx-auto px-4 text-center">
                <div className="flex justify-center mb-6" aria-hidden="true">
                    <div className="relative">
                        <div className="p-4 rounded-full bg-gradient-to-br from-blue-900 via-purple-800 to-pink-600">
                            <FileText className="h-8 w-8 text-white" />
                        </div>
                        <div className="absolute -top-2 -right-2 bg-green-500 rounded-full p-1">
                            <CheckCircle className="h-5 w-5 text-white" />
                        </div>
                    </div>
                </div>
                
                {/* H1 Principal con dangerouslySetInnerHTML */}
                <h1 
                    className="text-4xl md:text-6xl font-bold mb-6" 
                    itemProp="headline"
                    dangerouslySetInnerHTML={{
                        __html: title.replace(
                            '{span}',
                            '<span class="bg-gradient-to-br from-blue-900 via-purple-800 to-pink-600 bg-clip-text text-transparent block mt-2">'
                        ).replace('{/span}', '</span>')
                    }}
                />
                
                <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8" itemProp="description">
                    {description}
                </p>

                {/* Microdatos mejorados para certificado */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'CreativeWork',
                            'name': schema.name || '',
                            'description': schema.description || '',
                            'dateCreated': '2025-03-24T11:57:23Z',
                            'author': {
                                '@type': 'Person',
                                'name': schema.author || ''
                            },
                            'license': schema.license_url || '',
                            'publisher': {
                                '@type': 'Organization',
                                'name': schema.publisher_name || '',
                                'url': schema.publisher_url || ''
                            },
                            'mainEntityOfPage': {
                                '@type': 'WebPage',
                                '@id': schema.page_url || ''
                            },
                            'hash': 'cfpzy05fqR/aH1mcEEcrj+aqr2ocSfRisofRu16CPlm5fmxAg/pzolswyVOTLuHHqLjg0mKi+20hEi2lFs+rHcg==',
                            'encodingFormat': 'application/pdf',
                            'fileSize': '5471085',
                            'identifier': '0xe5570586bwfc32bf760ff9753d745112ac3c3b6431d45415971bfd93a917722'
                        })
                    }}
                />
            </div>
        </section>
    );
}