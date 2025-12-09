import { HeadphonesIcon } from "lucide-react";

export default function SupportHero() {
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

                {/* H1 optimizado para SEO */}
                <h1 className="text-4xl md:text-6xl font-bold mb-6" itemProp="headline">
                    Centro de <span className="bg-gradient-to-br from-blue-900 via-purple-800 to-pink-600 bg-clip-text text-transparent">Soporte</span>
                </h1>

                <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8" itemProp="description">
                    Soporte técnico especializado 24/7 para <strong>registro musical, distribución y protección de derechos</strong> con tecnología blockchain.
                </p>

                {/* Schema.org mejorado para Customer Service */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'Service',
                            'name': 'Soporte Técnico Musicdibs',
                            'description': 'Servicio de soporte especializado en registro musical, distribución digital y protección de derechos de autor con blockchain',
                            'provider': {
                                '@type': 'Organization',
                                'name': 'Musicdibs',
                                'url': 'https://musicdibs.com',
                                'logo': 'https://musicdibs.com/assets/images/logo.png'
                            },
                            'areaServed': 'Global',
                            'serviceType': 'Soporte Técnico Musical',
                            'availableChannel': {
                                '@type': 'ServiceChannel',
                                'serviceUrl': 'https://musicdibs.com/support',
                                'servicePhone': '+34-900-123-456',
                                'serviceEmail': 'info@musicdibs.com',
                                'serviceSmsNumber': '+34-600-123-456'
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