import Link from "next/link";

export default function CookiePolicyContent() {
    const lastUpdated = "28 de febrero de 2022";
    
    return (
        <div className="min-h-screen bg-gray-50" itemScope itemType="https://schema.org/WebPage">
            {/* Schema.org para Legal Document */}
            <div itemScope itemType="https://schema.org/LegalDocument" className="hidden">
                <meta itemProp="name" content="Política de Cookies - MusicDIBS" />
                <meta itemProp="description" content="Política de cookies de MusicDIBS" />
                <meta itemProp="dateModified" content="2022-02-28" />
                <meta itemProp="publisher" content="MusicDIBS" />
            </div>

            <div className="max-w-4xl mx-auto px-6 pt-24 pb-16">
                <header className="text-center mb-16 bg-white rounded-lg shadow-sm p-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" itemProp="headline">
                        Política de Cookies
                    </h1>
                    <p className="text-gray-600 text-lg">
                        Última actualización: <time dateTime="2022-02-28" itemProp="dateModified">{lastUpdated}</time>
                    </p>
                </header>

                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="p-8 md:p-12 space-y-12">
                        {/* Sección 1 - Política de Cookies */}
                        <section aria-labelledby="politica-cookies">
                            <h2 id="politica-cookies" className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                                Política de Cookies
                            </h2>
                            <p className="text-gray-700 leading-relaxed" itemProp="text">
                                El propósito de esta política de cookies es informarte de manera clara y precisa sobre las cookies utilizadas en el
                                sitio web de Musicdibs, propiedad de iCommunity Labs Techs S.L.
                            </p>
                        </section>

                        {/* Sección 2 - ¿Qué son las Cookies? */}
                        <section aria-labelledby="que-son-cookies">
                            <h2 id="que-son-cookies" className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                                ¿Qué son las Cookies?
                            </h2>
                            <div className="bg-blue-50 rounded-lg p-6">
                                <p className="text-gray-700 leading-relaxed" itemProp="text">
                                    Una cookie es un pequeño fragmento de texto que los sitios web que visitas envían al navegador y que permite al sitio web
                                    recordar información sobre tu visita, como tu idioma preferido y otras opciones, con el fin de facilitar tu próxima visita
                                    y hacer que el sitio te resulte más útil. Las cookies desempeñan un papel muy importante y contribuyen a tener una mejor
                                    experiencia de navegación para el usuario.
                                </p>
                            </div>
                        </section>

                        {/* Sección 3 - Tipos de Cookies */}
                        <section aria-labelledby="tipos-cookies">
                            <h2 id="tipos-cookies" className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                                Tipos de Cookies
                            </h2>
                            <div className="space-y-8">
                                <div className="bg-gray-50 rounded-lg p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Según su Gestión</h3>
                                    <ul className="space-y-3" aria-label="Tipos de cookies según su gestión">
                                        <li className="flex items-start">
                                            <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" aria-hidden="true"></span>
                                            <div>
                                                <strong className="text-gray-900">Cookies propias:</strong>
                                                <span className="text-gray-700 ml-2">Enviadas desde nuestro dominio</span>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" aria-hidden="true"></span>
                                            <div>
                                                <strong className="text-gray-900">Cookies de terceros:</strong>
                                                <span className="text-gray-700 ml-2">Enviadas desde dominios externos</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-gray-50 rounded-lg p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Según su Duración</h3>
                                    <ul className="space-y-3" aria-label="Tipos de cookies según su duración">
                                        <li className="flex items-start">
                                            <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" aria-hidden="true"></span>
                                            <div>
                                                <strong className="text-gray-900">Cookies de sesión:</strong>
                                                <span className="text-gray-700 ml-2">Se eliminan al cerrar el navegador</span>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" aria-hidden="true"></span>
                                            <div>
                                                <strong className="text-gray-900">Cookies persistentes:</strong>
                                                <span className="text-gray-700 ml-2">Permanecen durante un tiempo determinado</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-gray-50 rounded-lg p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Según su Finalidad</h3>
                                    <ul className="space-y-3" aria-label="Tipos de cookies según su finalidad">
                                        <li className="flex items-start">
                                            <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" aria-hidden="true"></span>
                                            <div>
                                                <strong className="text-gray-900">Cookies técnicas:</strong>
                                                <span className="text-gray-700 ml-2">Permiten la navegación y uso del sitio web</span>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" aria-hidden="true"></span>
                                            <div>
                                                <strong className="text-gray-900">Cookies de personalización:</strong>
                                                <span className="text-gray-700 ml-2">Permiten acceder al servicio con características predefinidas</span>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" aria-hidden="true"></span>
                                            <div>
                                                <strong className="text-gray-900">Cookies de análisis:</strong>
                                                <span className="text-gray-700 ml-2">Permiten el seguimiento y análisis del comportamiento de los usuarios</span>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" aria-hidden="true"></span>
                                            <div>
                                                <strong className="text-gray-900">Cookies publicitarias:</strong>
                                                <span className="text-gray-700 ml-2">Permiten la gestión de espacios publicitarios</span>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" aria-hidden="true"></span>
                                            <div>
                                                <strong className="text-gray-900">Cookies de publicidad comportamental:</strong>
                                                <span className="text-gray-700 ml-2">Almacenan información sobre el comportamiento de los usuarios</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Sección 4 - Cookies Utilizadas en el Sitio Web */}
                        <section aria-labelledby="cookies-utilizadas">
                            <h2 id="cookies-utilizadas" className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                                Cookies Utilizadas en el Sitio Web
                            </h2>
                            <div className="space-y-6">
                                <div className="bg-gray-50 rounded-lg p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Cookies Técnicas</h3>
                                    <p className="text-gray-700 leading-relaxed" itemProp="text">
                                        Son aquellas que permiten al usuario la navegación a través de una página web, plataforma o aplicación y la utilización
                                        de las diferentes opciones o servicios que en ella existan como, por ejemplo, controlar el tráfico y la comunicación de
                                        datos, identificar la sesión, acceder a partes de acceso restringido, recordar los elementos que integran un pedido,
                                        realizar el proceso de compra de un pedido, realizar la solicitud de inscripción o participación en un evento, utilizar
                                        elementos de seguridad durante la navegación.
                                    </p>
                                </div>

                                <div className="bg-gray-50 rounded-lg p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Cookies de Personalización</h3>
                                    <p className="text-gray-700 leading-relaxed" itemProp="text">
                                        Son aquellas que permiten al usuario acceder al servicio con algunas características de carácter general predefinidas
                                        en función de una serie de criterios en el terminal del usuario como por ejemplo serían el idioma, el servicio,
                                        la configuración regional desde donde se accede al servicio, etc.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Sección 5 - Aceptación de la Política de Cookies */}
                        <section aria-labelledby="aceptacion-cookies">
                            <h2 id="aceptacion-cookies" className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                                Aceptación de la Política de Cookies
                            </h2>
                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                                <p className="text-gray-700 leading-relaxed" itemProp="text">
                                    Al presionar el botón &quot;Acepto&quot; se asume que aceptas el uso de cookies. Sin embargo, puedes modificar la configuración
                                    de cookies en cualquier momento desde tu navegador.
                                </p>
                            </div>
                        </section>

                        {/* Sección 6 - Cómo Modificar la Configuración de Cookies */}
                        <section aria-labelledby="configuracion-cookies">
                            <h2 id="configuracion-cookies" className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                                Cómo Modificar la Configuración de Cookies
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-6" itemProp="text">
                                Puedes restringir, bloquear o borrar las cookies del sitio web de Musicdibs o cualquier otro sitio web utilizando tu navegador.
                                En cada navegador la operación es diferente, la función &quot;Ayuda&quot; te mostrará cómo hacerlo.
                            </p>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-gray-50 rounded-lg p-6">
                                    <h4 className="font-semibold text-gray-900 mb-4">Navegadores Principales:</h4>
                                    <ul className="space-y-3 text-gray-700" aria-label="Configuración de cookies en navegadores principales">
                                        <li className="flex items-start">
                                            <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" aria-hidden="true"></span>
                                            Chrome: Configuración → Privacidad y seguridad → Cookies
                                        </li>
                                        <li className="flex items-start">
                                            <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" aria-hidden="true"></span>
                                            Firefox: Opciones → Privacidad y seguridad
                                        </li>
                                        <li className="flex items-start">
                                            <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" aria-hidden="true"></span>
                                            Safari: Preferencias → Privacidad
                                        </li>
                                        <li className="flex items-start">
                                            <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" aria-hidden="true"></span>
                                            Edge: Configuración → Cookies y permisos del sitio
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-gray-50 rounded-lg p-6">
                                    <h4 className="font-semibold text-gray-900 mb-4">Información Adicional:</h4>
                                    <p className="text-gray-700 leading-relaxed" itemProp="text">
                                        Para más información sobre cookies, puedes consultar la Guía sobre el uso de cookies de la{" "}
                                        <a
                                            href="https://www.aepd.es/sites/default/files/2020-07/guia-cookies.pdf"
                                            className="text-blue-600 hover:text-blue-700 font-medium"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Guía sobre el uso de cookies de la Agencia Española de Protección de Datos"
                                        >
                                            Agencia Española de Protección de Datos
                                        </a>.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Sección 7 - Actualizaciones y Cambios en la Política de Cookies */}
                        <section aria-labelledby="actualizaciones-cookies">
                            <h2 id="actualizaciones-cookies" className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                                Actualizaciones y Cambios en la Política de Cookies
                            </h2>
                            <div className="bg-gray-50 rounded-lg p-6">
                                <p className="text-gray-700 leading-relaxed mb-4" itemProp="text">
                                    iCommunity Labs Techs SL se reserva el derecho a modificar esta Política de Cookies en base a exigencias legislativas,
                                    reglamentarias, o con la finalidad de adaptar dicha política a las instrucciones dictadas por la Agencia Española de
                                    Protección de Datos, por ello se aconseja a los usuarios que la visiten periódicamente.
                                </p>
                                <p className="text-gray-700 leading-relaxed" itemProp="text">
                                    Cuando se produzcan cambios significativos en esta Política de Cookies, estos se comunicarán a los usuarios bien mediante
                                    la web o a través de correo electrónico a los usuarios registrados.
                                </p>
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