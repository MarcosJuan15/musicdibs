import { Search } from "lucide-react";

export default function VerificationHero() {
    return (
        <section className="py-20 bg-gradient-to-br from-blue-900/10 via-purple-800/10 to-pink-600/10" 
                 itemScope 
                 itemType="https://schema.org/WebPage">
            <div className="container mx-auto px-4 text-center">
                <div className="flex justify-center mb-6">
                    <div className="p-4 rounded-full bg-gradient-to-br from-blue-900 via-purple-800 to-pink-600">
                        <Search className="h-8 w-8 text-white" aria-hidden="true" />
                    </div>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6" itemProp="headline">
                    Verificador de <span className="bg-gradient-to-br from-blue-900 via-purple-800 to-pink-600 bg-clip-text text-transparent">Obras</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto" itemProp="description">
                    Verifica si una obra ha sido previamente registrada en MusicDIBS mediante tecnología blockchain.
                </p>
                
                {/* Schema.org para SearchAction */}
                <div itemScope itemType="https://schema.org/SearchAction" className="hidden">
                    <meta itemProp="name" content="Verificador de Obras Musicales" />
                    <meta itemProp="description" content="Sistema de verificación de registro de obras musicales en blockchain" />
                    <meta itemProp="target" content="https://musicdibs.com/verification" />
                </div>
            </div>
        </section>
    );
}