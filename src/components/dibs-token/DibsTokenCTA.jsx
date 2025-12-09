// src/components/dibs-token/DibsTokenCTA.jsx
"use client";
import { ArrowRight, ShoppingBag } from "lucide-react";
import Link from "next/link";

export default function DibsTokenCTA() {
    return (
        <section className="py-20 px-4 bg-gradient-to-br from-blue-900/10 via-purple-800/10 to-pink-600/10" itemScope itemType="https://schema.org/WebPageElement">
            <div className="container mx-auto max-w-4xl">
                <div className="relative overflow-hidden border border-blue-900/30 bg-white rounded-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 via-purple-800/5 to-pink-600/5" />
                    <div className="relative p-12 text-center space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900" itemProp="headline">
                            Únete a la (r)evolución de la protección de la propiedad intelectual en WEB3
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto" itemProp="description">
                            Protege tus obras, gana recompensas y sé parte del futuro de la industria musical
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center pt-4">
                            <Link 
                                href="/auth/login"
                                className="bg-gradient-to-r from-blue-900 to-purple-800 hover:opacity-90 transition-opacity text-white px-6 py-3 rounded-lg font-medium inline-flex items-center justify-center space-x-2"
                            >
                                <span>Accede</span>
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                            <Link 
                                href="/shop"
                                className="bg-gradient-to-r from-blue-900 to-purple-800 hover:opacity-90 transition-opacity text-white px-6 py-3 rounded-lg font-medium inline-flex items-center justify-center space-x-2"
                            >
                                <ShoppingBag className="w-5 h-5 mr-2" />
                                <span>Comprar DIBS</span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Schema.org for Action - Nombre corregido a Musicdibs */}
                <div itemScope itemType="https://schema.org/Action" className="hidden">
                    <meta itemProp="name" content="Join Musicdibs Revolution" />
                    <meta itemProp="description" content="Join the WEB3 revolution in intellectual property protection" />
                    <div itemProp="agent" itemScope itemType="https://schema.org/Organization">
                        <meta itemProp="name" content="Musicdibs" />
                    </div>
                </div>
            </div>
        </section>
    );
}