'use client';

import { HeadphonesIcon } from "lucide-react";
import { useTranslations } from "next-intl";

export default function SupportHero() {
    const t = useTranslations('support.hero');

    return (
        <section className="py-20 bg-gradient-to-br from-blue-900/10 via-purple-800/10 to-pink-600/10"
            itemScope
            itemType="https://schema.org/WebPage">
            <div className="container mx-auto px-4 text-center">
                <div className="flex justify-center mb-6" aria-hidden="true">
                    <div className="p-4 rounded-full bg-gradient-to-br from-blue-900 via-purple-800 to-pink-600">
                        <HeadphonesIcon className="h-8 w-8 text-white" />
                    </div>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-6" itemProp="headline">
                    {t('title_part1')} <span className="bg-gradient-to-br from-blue-900 via-purple-800 to-pink-600 bg-clip-text text-transparent">{t('title_part2')}</span>
                </h1>

                <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8" itemProp="description">
                    {t.rich('description', {
                        strong: (chunks) => <strong>{chunks}</strong>
                    })}
                </p>

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'Service',
                            'name': t('schema_name'),
                            'description': t('schema_description'),
                            'provider': {
                                '@type': 'Organization',
                                'name': 'Musicdibs',
                                'url': 'https://musicdibs.com',
                                'logo': 'https://musicdibs.com/assets/images/logo.png'
                            },
                            'areaServed': 'Global',
                            'serviceType': t('schema_service_type'),
                            'availableChannel': {
                                '@type': 'ServiceChannel',
                                'serviceUrl': 'https://musicdibs.com/support',
                                'servicePhone': t('schema_phone'),
                                'serviceEmail': t('schema_email'),
                                'serviceSmsNumber': t('schema_sms')
                            },
                            'hoursAvailable': {
                                '@type': 'OpeningHoursSpecification',
                                'opens': '00:00',
                                'closes': '23:59',
                                'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
                            },
                            'serviceArea': {
                                '@type': 'GeoCircle',
                                'geoMidpoint': {
                                    '@type': 'GeoCoordinates',
                                    'latitude': '40.4168',
                                    'longitude': '-3.7038'
                                },
                                'geoRadius': '10000000'
                            }
                        })
                    }}
                />
            </div>
        </section>
    );
}