import Link from "next/link";

export default function TermsAndConditionsContent() {
    const lastUpdated = "28 de febrero de 2022";
    
    return (
        <div className="min-h-screen bg-gray-50" itemScope itemType="https://schema.org/WebPage">
            {/* Schema.org para Legal Document */}
            <div itemScope itemType="https://schema.org/LegalDocument" className="hidden">
                <meta itemProp="name" content="Términos y Condiciones - MusicDIBS" />
                <meta itemProp="description" content="Términos y condiciones de uso de la plataforma MusicDIBS" />
                <meta itemProp="dateModified" content="2022-02-28" />
                <meta itemProp="publisher" content="MusicDIBS" />
            </div>

            <div className="max-w-4xl mx-auto px-6 pt-24 pb-16">
                <header className="text-center mb-16 bg-white rounded-lg shadow-sm p-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" itemProp="headline">
                        Términos y Condiciones
                    </h1>
                    <p className="text-gray-600 text-lg">
                        Última actualización: <time dateTime="2022-02-28" itemProp="dateModified">{lastUpdated}</time>
                    </p>
                </header>

                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="p-8 md:p-12 space-y-12">
                        {/* Sección 1 - Términos Generales */}
                        <section aria-labelledby="terminos-generales">
                            <h2 id="terminos-generales" className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                                Términos Generales
                            </h2>
                            <div className="text-gray-700 leading-relaxed space-y-4">
                                <p itemProp="text">
                                    <strong>Musicdibs</strong> es un producto de iCommunity Labs Tech S.L. (en adelante &quot;iCommunity Labs&quot; o &quot;iCommunity&quot;),
                                    una empresa regida por la ley española, con domicilio social en Madrid, en C/Colmenares, nº3, Bajo-D, CP 28004, Madrid,
                                    con C.I.F. B88350897 e inscrita en el Registro Mercantil de Madrid en el tomo 39.161, Folio 40, Sección 8, Página M-695696.
                                </p>
                            </div>
                        </section>

                        {/* Sección 2 - Política de Reembolso y Cancelación */}
                        <section aria-labelledby="politica-reembolso">
                            <h2 id="politica-reembolso" className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                                Política de Reembolso y Cancelación
                            </h2>

                            <div className="space-y-8">
                                <div className="bg-gray-50 rounded-lg p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Proceso de Compra Online</h3>
                                    <p className="text-gray-700 leading-relaxed" itemProp="text">
                                        La validación de un pedido en nuestro sitio web implica el conocimiento y aceptación de las condiciones de uso y compra
                                        como se expresa en esta página. Después de completar la compra, el cliente recibirá un correo electrónico con el registro
                                        de su pedido dentro de un período de menos de 24 horas.
                                    </p>
                                </div>

                                <div className="bg-gray-50 rounded-lg p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Garantía</h3>
                                    <p className="text-gray-700 leading-relaxed" itemProp="text">
                                        Nuestro departamento de atención al cliente cuenta con un servicio post-venta para resolver cualquier problema con nuestro
                                        servicio de certificación y verificación. Si tienes alguna pregunta sobre el uso de Musicdibs, contáctanos en{" "}
                                        <a 
                                            href="mailto:info@musicdibs.com" 
                                            className="text-blue-600 hover:text-blue-700 font-medium"
                                            aria-label="Enviar email a info@musicdibs.com"
                                        >
                                            info@musicdibs.com
                                        </a>.
                                    </p>
                                </div>

                                <div className="bg-gray-50 rounded-lg p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Cancelar Compra</h3>
                                    <p className="text-gray-700 leading-relaxed" itemProp="text">
                                        Dada la naturaleza personalizada e individualizada de los servicios ofrecidos, no será posible ejercer el derecho de
                                        cancelación de compra, excepto en el caso de compra de créditos para registros &quot;sin suscripción&quot;. Para solicitar la
                                        cancelación dentro de los 14 días posteriores a la compra, envía un correo electrónico a{" "}
                                        <a 
                                            href="mailto:info@musicdibs.com" 
                                            className="text-blue-600 hover:text-blue-700 font-medium"
                                            aria-label="Enviar email a info@musicdibs.com"
                                        >
                                            info@musicdibs.com
                                        </a> incluyendo:
                                        nombre completo, ID del documento de identificación utilizado en el proceso de registro, nombre de usuario o correo
                                        electrónico y número de pedido.
                                    </p>
                                </div>

                                <div className="bg-gray-50 rounded-lg p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Reembolsos</h3>
                                    <p className="text-gray-700 leading-relaxed" itemProp="text">
                                        Los clientes tienen hasta 30 días calendario para solicitar un reembolso por sus compras de créditos, siempre que no los
                                        hayan utilizado. Si han pasado más de 30 días desde tu compra o si se ha utilizado parte de los créditos del paquete
                                        comprado, no tendrás derecho a ningún tipo de reembolso.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Sección 3 - Condiciones de Suscripción */}
                        <section aria-labelledby="condiciones-suscripcion">
                            <h2 id="condiciones-suscripcion" className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                                Condiciones de Suscripción
                            </h2>
                            <div className="space-y-6">
                                <p className="text-gray-700 leading-relaxed" itemProp="text">
                                    Al confirmar tu suscripción, autorizas a iCommunity Labs Tech S.L. a realizar futuros cargos a tu tarjeta de acuerdo con
                                    estos términos y condiciones. Puedes cancelarla en cualquier momento, pero con un mínimo de 24 horas antes de su renovación.
                                </p>
                                <div className="bg-amber-50 border border-amber-200 rounded-lg p-6" role="alert" aria-labelledby="importante-alert">
                                    <p id="importante-alert" className="font-semibold text-amber-800 mb-3">Importante:</p>
                                    <ul className="space-y-2 text-amber-700" aria-label="Puntos importantes sobre suscripciones">
                                        <li className="flex items-start">
                                            <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0" aria-hidden="true"></span>
                                            Si deseas cancelar la renovación de una suscripción, debes hacerlo al menos 24 horas antes de que se renueve automáticamente
                                        </li>
                                        <li className="flex items-start">
                                            <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0" aria-hidden="true"></span>
                                            El derecho de cancelación de compra NO se aplica a las suscripciones
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Sección 4 - Uso Abusivo */}
                        <section aria-labelledby="uso-abusivo">
                            <h2 id="uso-abusivo" className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                                Uso Abusivo
                            </h2>
                            <p className="text-gray-700 leading-relaxed" itemProp="text">
                                Está prohibida la reventa o uso no autorizado de los créditos adquiridos por terceros que no sean el propietario de la cuenta.
                                En el caso de suscripciones ilimitadas, se realizará un seguimiento mensual del consumo y se puede restringir el uso si se
                                detectan usos abusivos.
                            </p>
                        </section>

                        {/* Sección 5 - NFTs */}
                        <section aria-labelledby="nfts">
                            <h2 id="nfts" className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                                NFTs
                            </h2>
                            <p className="text-gray-700 leading-relaxed" itemProp="text">
                                Los NFTs están limitados según lo establecido en cada suscripción, con un acuñado máximo de hasta 1,000 unidades por NFT.
                                Es responsabilidad exclusiva del usuario proporcionar la dirección de una cartera compatible con la red Polygon.
                            </p>
                        </section>

                        {/* Sección 6 - Compra usando Tokens ICOM */}
                        <section aria-labelledby="tokens-icom">
                            <h2 id="tokens-icom" className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                                Compra usando Tokens ICOM
                            </h2>
                            <p className="text-gray-700 leading-relaxed" itemProp="text">
                                Los ICOMs son los tokens de utilidad de iCommunity y se pueden usar para comprar créditos de Musicdibs con un{" "}
                                <strong className="text-gray-900">descuento del 20%</strong> sobre el precio original del producto elegido.
                            </p>
                        </section>

                        {/* Sección 7 - Ofertas y Promociones */}
                        <section aria-labelledby="ofertas-promociones">
                            <h2 id="ofertas-promociones" className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                                Ofertas y Promociones
                            </h2>
                            <p className="text-gray-700 leading-relaxed" itemProp="text">
                                Las ofertas disponibles en la web están limitadas a las primeras 1000 compras que paguen por el producto en oferta, excepto
                                en situaciones excepcionales explícitamente indicadas en la promoción. Cualquier oferta terminará cuando termine su tiempo
                                definido, o los paquetes disponibles, lo que ocurra primero.
                            </p>
                        </section>

                        {/* Sección 8 - Contacto */}
                        <section aria-labelledby="contacto">
                            <h2 id="contacto" className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                                Contacto
                            </h2>
                            <div className="bg-gray-50 rounded-lg p-6" itemScope itemType="https://schema.org/Organization">
                                <p className="text-gray-700 mb-4" itemProp="description">
                                    <strong className="text-gray-900" itemProp="name">Musicdibs</strong> es una marca registrada de iCommunity Labs Tech S.L.
                                </p>
                                <div className="space-y-3">
                                    <p className="text-gray-700" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                                        <strong className="text-gray-900">Dirección:</strong>
                                        <span className="ml-2" itemProp="streetAddress">Gran Vía 26</span>, 
                                        <span className="ml-1" itemProp="postalCode">28005</span>
                                        <span className="ml-1" itemProp="addressLocality">Madrid</span>, 
                                        <span className="ml-1" itemProp="addressCountry">España</span>
                                    </p>
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