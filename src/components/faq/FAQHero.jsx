import { HelpCircle } from "lucide-react";

export default function FAQHero() {
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
                
                {/* H1 Principal optimizado para SEO */}
                <h1 className="text-4xl md:text-6xl font-bold mb-6" itemProp="headline">
                    Preguntas Frecuentes sobre <span className="bg-gradient-to-br from-blue-900 via-purple-800 to-pink-600 bg-clip-text text-transparent block mt-2">Registro Musical</span>
                </h1>
                
                <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8" itemProp="description">
                    Encuentra respuestas detalladas a las 20+ preguntas más comunes sobre registro, protección con blockchain, derechos de autor y suscripciones.
                </p>

                {/* Microdatos mejorados */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'FAQPage',
                            'name': 'Preguntas Frecuentes - MusicDIBS',
                            'description': 'Respuestas a preguntas sobre registro musical, protección con blockchain, derechos de autor y suscripciones',
                            'mainEntity': [
                                {
                                    '@type': 'Question',
                                    'name': '¿Cómo demostrar autoría de mi obra registrada?',
                                    'acceptedAnswer': {
                                        '@type': 'Answer',
                                        'text': 'El registro genera un hash y marca de tiempo que vinculan al autor con su creación. Ante disputas legales, se puede validar el código para verificar la autoría original.'
                                    }
                                },
                                {
                                    '@type': 'Question',
                                    'name': '¿Qué validez legal tiene el registro en blockchain?',
                                    'acceptedAnswer': {
                                        '@type': 'Answer',
                                        'text': 'Tiene validez legal en los 179 países firmantes del Convenio de Berna. Es un medio alternativo, rápido y fiable para proteger obras musicales.'
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