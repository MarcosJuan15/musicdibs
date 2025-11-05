import React from "react";

export default function TechLegalBlockchain() {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-xl shadow-lg p-10 border border-gray-100">
                    <div className="grid lg:grid-cols-2 gap-10 items-center">
                        <div>
                            <h2 className="text-3xl font-semibold text-gray-900 mb-8">
                                Tecnología Blockchain: La Base de Nuestra Certificación
                            </h2>
                            <div className="space-y-6">
                                {[
                                    {
                                        title: "Descentralización",
                                        description: "No depende de una autoridad central, lo que elimina puntos únicos de fallo y corrupción."
                                    },
                                    {
                                        title: "Timestamp Cryptográfico", 
                                        description: "Cada registro incluye una marca de tiempo criptográficamente segura e inmutable."
                                    },
                                    {
                                        title: "Prueba Matemática",
                                        description: "La integridad de los datos se garantiza mediante algoritmos criptográficos avanzados."
                                    },
                                    {
                                        title: "Accesibilidad Permanente",
                                        description: "Tus registros estarán disponibles mientras exista la red blockchain, garantizando acceso perpetuo."
                                    }
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                                        <div className="w-3 h-3 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                                        <div>
                                            <p className="text-gray-900 font-semibold">{item.title}</p>
                                            <p className="text-gray-700 mt-1">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-10 border border-purple-200">
                            <div className="text-center">
                                <div className="w-28 h-28 bg-purple-200 rounded-full flex items-center justify-center mx-auto mb-8">
                                    <svg className="h-14 w-14 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Tecnología de Vanguardia</h3>
                                <p className="text-gray-700 text-lg">
                                    Utilizamos los protocolos blockchain más avanzados y seguros del mercado 
                                    para garantizar la protección máxima de tu propiedad intelectual.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}