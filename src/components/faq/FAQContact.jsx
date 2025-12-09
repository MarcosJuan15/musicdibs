import Link from "next/link";
import { MessageCircle, Clock, Users } from "lucide-react";

export default function FAQContact() {
    return (
        <section className="py-16 bg-gradient-to-r from-purple-50 to-pink-50" aria-labelledby="contacto-soporte">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    
                    {/* Beneficios agregados para SEM */}
                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                        <div className="text-center p-4">
                            <Clock className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                            <h3 className="font-semibold text-gray-900">Respuesta en 24h</h3>
                            <p className="text-sm text-gray-600">Soporte rápido y efectivo</p>
                        </div>
                        <div className="text-center p-4">
                            <Users className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                            <h3 className="font-semibold text-gray-900">Expertos en Música</h3>
                            <p className="text-sm text-gray-600">Especialistas en derechos de autor</p>
                        </div>
                        <div className="text-center p-4">
                            <MessageCircle className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                            <h3 className="font-semibold text-gray-900">Soporte 24/7</h3>
                            <p className="text-sm text-gray-600">Ayuda cuando la necesites</p>
                        </div>
                    </div>

                    <div className="bg-white border-0 shadow-xl rounded-2xl overflow-hidden text-center">
    <div className="p-6 md:p-8 space-y-2"> {/* Reducido de space-y-4 a space-y-2 */}
        <div className="flex justify-center">
            <div className="p-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 shadow-md">
                <MessageCircle className="h-6 w-6 text-white" aria-hidden="true" />
            </div>
        </div>
        <h2 id="contacto-soporte" className="text-2xl md:text-3xl font-bold text-gray-900">
            ¿No encuentras tu respuesta?
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nuestro equipo de <strong>expertos en registro musical</strong> está aquí para ayudarte personalmente
        </p>
    </div>
    <div className="flex flex-col sm:flex-row gap-4 justify-center p-6 md:p-8 pt-2"> {/* Reducido de pt-0 a pt-2 */}
        <Link
            href="/support"
            className="bg-gradient-to-r from-blue-900 via-purple-800 to-pink-600 hover:opacity-90 transition-all duration-300 shadow-md hover:shadow-lg text-white px-8 py-3 rounded-lg font-medium text-center flex items-center justify-center space-x-2"
            aria-label="Contactar con soporte técnico de Musicdibs"
        >
            <span>Contactar Soporte</span>
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
        </Link>
    </div>
</div>
                </div>
            </div>
        </section>
    );
}