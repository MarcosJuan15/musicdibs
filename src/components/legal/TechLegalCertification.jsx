import React from "react";
import { FileCheck, Globe, Users } from "lucide-react";

export default function TechLegalCertification() {
    return (
        <section className="py-10 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Nuestro sistema de certificación blockchain proporciona evidencia digital 
                        legalmente vinculante reconocida en más de 180 países.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center p-6">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <FileCheck className="h-8 w-8 text-green-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Certificación Legal</h3>
                        <p className="text-gray-600">
                            Documentación con validez jurídica ante cortes y tribunales internacionales
                        </p>
                    </div>

                    <div className="text-center p-6">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Globe className="h-8 w-8 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Reconocimiento Global</h3>
                        <p className="text-gray-600">
                            Validez legal en todos los países signatarios del Convenio de Berna
                        </p>
                    </div>

                    <div className="text-center p-6">
                        <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Users className="h-8 w-8 text-purple-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Protección Completa</h3>
                        <p className="text-gray-600">
                            Defiende tus derechos de autor frente a terceros y plataformas digitales
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}