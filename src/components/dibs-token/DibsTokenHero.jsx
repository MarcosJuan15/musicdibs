// src/components/dibs-token/DibsTokenHero.jsx
import { ArrowRight, TrendingUp, Coins, ShoppingBag } from "lucide-react";
import Link from "next/link";

export default function DibsTokenHero() {
    return (
        <section className="py-20 bg-gradient-to-br from-blue-900/10 via-purple-800/10 to-pink-600/10" 
                 itemScope 
                 itemType="https://schema.org/WebPage">
            <div className="container mx-auto px-4 text-center">
                <div className="flex justify-center mb-6">
                    <div className="p-4 rounded-full bg-gradient-to-br from-blue-900 via-purple-800 to-pink-600">
                        <Coins className="h-8 w-8 text-white" aria-hidden="true" />
                    </div>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6" itemProp="headline">
                    Token <span className="bg-gradient-to-br from-blue-900 via-purple-800 to-pink-600 bg-clip-text text-transparent">DIBS</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8" itemProp="description">
                    La nueva era de la protección de la música en WEB3
                </p>
                
                <div className="flex flex-col gap-6 items-center">

                    {/* Botones de compra */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link 
                            href="/shop"
                            className="bg-gradient-to-r from-blue-900 via-purple-800 to-pink-600 hover:opacity-90 transition-opacity text-white px-8 py-4 rounded-lg font-medium inline-flex items-center justify-center space-x-2"
                        >
                            <ShoppingBag className="w-5 h-5 mr-2" />
                            <span>Comprar en Tienda</span>
                        </Link>

                        <a 
                            href="https://raydium.io/swap/?inputMint=Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB&outputMint=A8EmqPD96yGE2Wo2FmRBm8mzvYkVwtmgpkZZsKRXyXxK"
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="border-2 border-blue-900 text-blue-900 bg-transparent hover:bg-blue-900 hover:text-white transition-colors px-8 py-4 rounded-lg font-medium inline-flex items-center justify-center space-x-2"
                        >
                            <span>Comprar en RAYDIUM</span>
                            <ArrowRight className="ml-2 w- h-5" />
                        </a>
                    </div>

                    <a href="https://dexscreener.com/solana/6mymzyflqxsa5lfy6apbtp5vws9q3ecyrcqumiu88oe9" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="text-blue-900 hover:text-blue-800 transition-colors inline-flex items-center gap-2 text-sm">
                        Consulte AQUÍ la cotización del DIBS en tiempo real
                        <TrendingUp className="w-4 h-4" />
                    </a>
                </div>

                {/* Schema.org para Product */}
                <div itemScope itemType="https://schema.org/Product" className="hidden">
                    <meta itemProp="name" content="Token DIBS" />
                    <meta itemProp="description" content="Token de utility para la plataforma Musicdibs, ofrece protección de propiedad intelectual y recompensas." />
                    <meta itemProp="url" content="https://musicdibs.com/dibs-token" />
                    <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
                        <meta itemProp="price" content="0.00" />
                        <meta itemProp="priceCurrency" content="USD" />
                    </div>
                </div>
            </div>
        </section>
    );
}