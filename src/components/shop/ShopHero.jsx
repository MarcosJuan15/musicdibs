import { ShoppingCart, Coins } from "lucide-react";

export default function ShopHero() {
    return (
        <section className="py-16 bg-gradient-to-br from-blue-900/10 via-purple-800/10 to-pink-600/10" 
                 itemScope 
                 itemType="https://schema.org/WebPage">
            <div className="container mx-auto px-4 text-center">
                <div className="flex justify-center mb-6" aria-hidden="true">
                    <div className="relative">
                        <div className="p-4 rounded-full bg-gradient-to-br from-blue-900 via-purple-800 to-pink-600">
                            <ShoppingCart className="h-8 w-8 text-white" />
                        </div>
                        <div className="absolute -top-2 -right-2 bg-green-500 rounded-full p-1">
                            <Coins className="h-5 w-5 text-white" />
                        </div>
                    </div>
                </div>
                
                {/* H1 Principal optimizado para SEO */}
                <h1 className="text-4xl md:text-6xl font-bold mb-6" itemProp="headline">
                    Compra tus <span className="bg-gradient-to-br from-blue-900 via-purple-800 to-pink-600 bg-clip-text text-transparent block mt-2">Tokens DIBS</span>
                </h1>
                
                <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8" itemProp="description">
                    Adquiere tokens DIBS para registrar, proteger y gestionar tu música en blockchain. 
                    Bonos exclusivos para compras mayores.
                </p>

                {/* Microdatos para tienda */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'Store',
                            'name': 'MusicDIBS Shop - Tokens DIBS',
                            'description': 'Tienda oficial de tokens DIBS para registro musical en blockchain',
                            'url': 'https://musicdibs.com/shop',
                            'acceptsReservations': 'false',
                            'currenciesAccepted': 'EUR',
                            'priceRange': '€€',
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