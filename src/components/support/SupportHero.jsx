import { HeadphonesIcon } from "lucide-react";

export default function SupportHero() {
    return (
        <section className="py-20 bg-gradient-to-br from-blue-900/10 via-purple-800/10 to-pink-600/10" 
                 itemScope 
                 itemType="https://schema.org/WebPage">
            <div className="container mx-auto px-4 text-center">
                <div className="flex justify-center mb-6">
                    <div className="p-4 rounded-full bg-gradient-to-br from-blue-900 via-purple-800 to-pink-600">
                        <HeadphonesIcon className="h-8 w-8 text-white" aria-hidden="true" />
                    </div>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6" itemProp="headline">
                    Centro de <span className="bg-gradient-to-br from-blue-900 via-purple-800 to-pink-600 bg-clip-text text-transparent">Soporte</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto" itemProp="description">
                    Estamos aquí para ayudarte en cada paso de tu viaje musical. Obtén asistencia personalizada 24/7.
                </p>
                
                {/* Schema.org para Customer Service */}
                <div itemScope itemType="https://schema.org/Service" className="hidden">
                    <meta itemProp="name" content="Soporte Técnico MusicDIBS" />
                    <meta itemProp="description" content="Servicio de soporte y atención al cliente para usuarios de MusicDIBS" />
                    <meta itemProp="provider" content="MusicDIBS" />
                    <meta itemProp="areaServed" content="Global" />
                    <meta itemProp="serviceType" content="Soporte Técnico" />
                </div>
            </div>
        </section>
    );
}