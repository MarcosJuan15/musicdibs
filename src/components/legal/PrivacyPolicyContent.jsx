import Link from "next/link";

export default function PrivacyPolicyContent() {
    const lastUpdated = "28 de febrero de 2022";
    
    return (
        <div className="min-h-screen bg-gray-50" itemScope itemType="https://schema.org/WebPage">
            {/* Schema.org para Legal Document */}
            <div itemScope itemType="https://schema.org/LegalDocument" className="hidden">
                <meta itemProp="name" content="Política de Privacidad - MusicDIBS" />
                <meta itemProp="description" content="Política de privacidad y protección de datos de MusicDIBS" />
                <meta itemProp="dateModified" content="2022-02-28" />
                <meta itemProp="publisher" content="MusicDIBS" />
            </div>

            <div className="max-w-4xl mx-auto px-6 pt-24 pb-16">
                <header className="text-center mb-16 bg-white rounded-lg shadow-sm p-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" itemProp="headline">
                        Política de Privacidad y Protección de Datos
                    </h1>
                    <p className="text-gray-600 text-lg">
                        Última actualización: <time dateTime="2022-02-28" itemProp="dateModified">{lastUpdated}</time>
                    </p>
                </header>

                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="p-8 md:p-12 space-y-12">
                        {/* Sección 1 - Información General */}
                        <section aria-labelledby="informacion-general">
                            <h2 id="informacion-general" className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                                1. Información General
                            </h2>
                            <div className="text-gray-700 leading-relaxed space-y-4">
                                <p itemProp="text">
                                    <strong>Musicdibs</strong> es un producto de iCommunity Labs Tech S.L. (en adelante &quot;iCommunity Labs&quot; o &quot;iCommunity&quot;),
                                    una empresa regida por la ley española, con domicilio social en Madrid, en C/Colmenares, nº3, Bajo-D, CP 28004, Madrid,
                                    con C.I.F. B88350897 e inscrita en el Registro Mercantil de Madrid en el tomo 39.161, Folio 40, Sección 8, Página M-695696.
                                </p>
                            </div>
                        </section>

                        {/* Sección 2 - Datos que Recopilamos */}
                        <section aria-labelledby="datos-recopilados">
                            <h2 id="datos-recopilados" className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                                2. Datos que Recopilamos
                            </h2>
                            <div className="bg-gray-50 rounded-lg p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">Información Personal</h3>
                                <ul className="space-y-3 text-gray-700" aria-label="Lista de información personal recopilada">
                                    <li className="flex items-start">
                                        <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" aria-hidden="true"></span>
                                        Nombre completo y datos de contacto
                                    </li>
                                    <li className="flex items-start">
                                        <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" aria-hidden="true"></span>
                                        Dirección de correo electrónico
                                    </li>
                                    <li className="flex items-start">
                                        <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" aria-hidden="true"></span>
                                        Información de facturación y pago
                                    </li>
                                    <li className="flex items-start">
                                        <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" aria-hidden="true"></span>
                                        Información de uso del servicio
                                    </li>
                                </ul>
                            </div>
                        </section>

                        {/* Sección 3 - Finalidad del Tratamiento */}
                        <section aria-labelledby="finalidad-tratamiento">
                            <h2 id="finalidad-tratamiento" className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                                3. Finalidad del Tratamiento
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4" itemProp="text">
                                Los datos personales que recopilamos se utilizan para:
                            </p>
                            <ul className="space-y-3 text-gray-700" aria-label="Finalidades del tratamiento de datos">
                                <li className="flex items-start">
                                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" aria-hidden="true"></span>
                                    Proporcionar y mantener nuestros servicios
                                </li>
                                <li className="flex items-start">
                                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" aria-hidden="true"></span>
                                    Procesar pagos y gestionar suscripciones
                                </li>
                                <li className="flex items-start">
                                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" aria-hidden="true"></span>
                                    Comunicarnos contigo sobre el servicio
                                </li>
                                <li className="flex items-start">
                                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" aria-hidden="true"></span>
                                    Mejorar nuestros servicios y experiencia del usuario
                                </li>
                                <li className="flex items-start">
                                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" aria-hidden="true"></span>
                                    Cumplir con obligaciones legales
                                </li>
                            </ul>
                        </section>

                        {/* Sección 4 - Base Legal */}
                        <section aria-labelledby="base-legal">
                            <h2 id="base-legal" className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                                4. Base Legal
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4" itemProp="text">
                                El tratamiento de tus datos personales se basa en:
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" aria-hidden="true"></span>
                                    <div>
                                        <strong className="text-gray-900">Consentimiento:</strong>
                                        <span className="text-gray-700 ml-2">Para comunicaciones de marketing</span>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" aria-hidden="true"></span>
                                    <div>
                                        <strong className="text-gray-900">Ejecución de contrato:</strong>
                                        <span className="text-gray-700 ml-2">Para proporcionar nuestros servicios</span>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" aria-hidden="true"></span>
                                    <div>
                                        <strong className="text-gray-900">Interés legítimo:</strong>
                                        <span className="text-gray-700 ml-2">Para mejorar nuestros servicios</span>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" aria-hidden="true"></span>
                                    <div>
                                        <strong className="text-gray-900">Obligación legal:</strong>
                                        <span className="text-gray-700 ml-2">Para cumplir con requisitos fiscales y legales</span>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Sección 5 - Derechos del Usuario */}
                        <section aria-labelledby="derechos-usuario">
                            <h2 id="derechos-usuario" className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                                5. Derechos del Usuario
                            </h2>
                            <div className="bg-blue-50 rounded-lg p-6">
                                <p className="text-gray-700 mb-4 font-medium">Tienes derecho a:</p>
                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" aria-hidden="true"></span>
                                        <div>
                                            <strong className="text-gray-900">Acceso:</strong>
                                            <span className="text-gray-700 ml-2">Solicitar información sobre tus datos personales</span>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" aria-hidden="true"></span>
                                        <div>
                                            <strong className="text-gray-900">Rectificación:</strong>
                                            <span className="text-gray-700 ml-2">Corregir datos inexactos</span>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" aria-hidden="true"></span>
                                        <div>
                                            <strong className="text-gray-900">Supresión:</strong>
                                            <span className="text-gray-700 ml-2">Solicitar la eliminación de tus datos</span>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" aria-hidden="true"></span>
                                        <div>
                                            <strong className="text-gray-900">Portabilidad:</strong>
                                            <span className="text-gray-700 ml-2">Recibir tus datos en formato estructurado</span>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" aria-hidden="true"></span>
                                        <div>
                                            <strong className="text-gray-900">Oposición:</strong>
                                            <span className="text-gray-700 ml-2">Oponerte al tratamiento de tus datos</span>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" aria-hidden="true"></span>
                                        <div>
                                            <strong className="text-gray-900">Limitación:</strong>
                                            <span className="text-gray-700 ml-2">Limitar el tratamiento de tus datos</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Sección 6 - Seguridad de los Datos */}
                        <section aria-labelledby="seguridad-datos">
                            <h2 id="seguridad-datos" className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                                6. Seguridad de los Datos
                            </h2>
                            <p className="text-gray-700 leading-relaxed" itemProp="text">
                                Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger tus datos personales
                                contra el acceso no autorizado, la alteración, divulgación o destrucción.
                            </p>
                        </section>

                        {/* Sección 7 - Retención de Datos */}
                        <section aria-labelledby="retencion-datos">
                            <h2 id="retencion-datos" className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                                7. Retención de Datos
                            </h2>
                            <p className="text-gray-700 leading-relaxed" itemProp="text">
                                Conservamos tus datos personales durante el tiempo necesario para cumplir con las finalidades para las que fueron recopilados,
                                incluyendo cualquier período de retención requerido por ley.
                            </p>
                        </section>

                        {/* Sección 8 - Contacto */}
                        <section aria-labelledby="contacto">
                            <h2 id="contacto" className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                                8. Contacto
                            </h2>
                            <div className="bg-gray-50 rounded-lg p-6" itemScope itemType="https://schema.org/Organization">
                                <p className="text-gray-700 mb-4" itemProp="description">
                                    Para cualquier consulta sobre esta política de privacidad, contacta con nosotros:
                                </p>
                                <div className="space-y-3">
                                    <p className="text-gray-700">
                                        <strong className="text-gray-900">Email:</strong>
                                        <a 
                                            href="mailto:info@musicdibs.com" 
                                            className="text-blue-600 hover:text-blue-700 ml-2 font-medium"
                                            itemProp="email"
                                            aria-label="Enviar email a info@musicdibs.com"
                                        >
                                            info@musicdibs.com
                                        </a>
                                    </p>
                                    <p className="text-gray-700" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                                        <strong className="text-gray-900">Dirección:</strong>
                                        <span className="ml-2" itemProp="streetAddress">C/Colmenares, nº3, Bajo-D</span>, 
                                        <span className="ml-1" itemProp="postalCode">28004</span>
                                        <span className="ml-1" itemProp="addressLocality">Madrid</span>
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>

                    <footer className="text-center py-8 border-t border-gray-200 bg-gray-50">
                        <p className="text-gray-500">©iCommunity Labs Tech S.L. Todos los derechos reservados.</p>
                    </footer>
                </div>
            </div>
        </div>
    );
}