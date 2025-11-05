"use client";
import Link from "next/link";

export default function PartnersCTA() {
    return (
        <section className="py-16" aria-labelledby="unete-partners">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center bg-gradient-to-r from-purple-50 via-white to-purple-50 rounded-xl p-8 md:p-12 border border-gray-200"
                        itemScope
                        itemType="https://schema.org/ContactPage">
                        <h2 id="unete-partners" className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                            ¿Quieres ser nuestro próximo Partner?
                        </h2>
                        <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto">
                            Únete a nuestra red de partners y ofrece a tu comunidad las mejores
                            soluciones de protección de propiedad intelectual del mercado.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/support"
                                className="bg-gradient-to-r from-blue-900 via-purple-800 to-pink-600 text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center space-x-2"
                            >
                                <span>Contactar para Partnership</span>
                                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </Link>
                            <Link
                                href="/faq"
                                className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                                aria-label="Más información sobre partnerships"
                            >
                                Más Información
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}