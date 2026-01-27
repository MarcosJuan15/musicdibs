'use client';

import { HelpCircle } from "lucide-react";
import { useTranslations } from "next-intl";

export default function FAQHero() {
    const t = useTranslations('faq.hero');
    
    return (
        <section className="py-20 bg-gradient-to-br from-blue-900/10 via-purple-800/10 to-pink-600/10" 
                 itemScope 
                 itemType="https://schema.org/WebPage">
            <div className="container mx-auto px-4 text-center">
                <div className="flex justify-center mb-6" aria-hidden="true">
                    <div className="p-4 rounded-full bg-gradient-to-br from-blue-900 via-purple-800 to-pink-600">
                        <HelpCircle className="h-8 w-8 text-white" />
                    </div>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold mb-6" itemProp="headline">
                    {t('title_part1')} <span className="bg-gradient-to-br from-blue-900 via-purple-800 to-pink-600 bg-clip-text text-transparent block mt-2">{t('title_part2')}</span>
                </h1>
                
                <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8" itemProp="description">
                    {t('description')}
                </p>

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'FAQPage',
                            'name': t('schema_name'),
                            'description': t('schema_description'),
                            'mainEntity': [
                                {
                                    '@type': 'Question',
                                    'name': t('schema_question1'),
                                    'acceptedAnswer': {
                                        '@type': 'Answer',
                                        'text': t('schema_answer1')
                                    }
                                },
                                {
                                    '@type': 'Question',
                                    'name': t('schema_question2'),
                                    'acceptedAnswer': {
                                        '@type': 'Answer',
                                        'text': t('schema_answer2')
                                    }
                                }
                            ],
                            'publisher': {
                                '@type': 'Organization',
                                'name': 'MusicDIBS',
                                'url': 'https://musicdibs.com'
                            }
                        })
                    }}
                />
            </div>
        </section>
    );
}