'use client';

import { useTranslations } from "next-intl";

export default function PrivacyPolicyContent() {
    const t = useTranslations('legal.privacy_policy');
    
    // Función auxiliar para obtener arrays de traducciones
    const getTranslationArray = (key) => {
        const value = t.raw(key);
        if (Array.isArray(value)) {
            return value;
        }
        // Si es string, convertirlo en array
        if (typeof value === 'string') {
            return [value];
        }
        // Si es objeto, convertirlo en array de valores
        if (value && typeof value === 'object') {
            return Object.values(value);
        }
        return [];
    };
    
    // Función para objetos estructurados
    const getTranslationObjectArray = (key) => {
        const value = t.raw(key);
        if (Array.isArray(value)) {
            return value;
        }
        // Si no es array, retornar array vacío
        return [];
    };
    
    return (
        <div className="min-h-screen bg-gray-50" itemScope itemType="https://schema.org/WebPage">
            <div itemScope itemType="https://schema.org/LegalDocument" className="hidden">
                <meta itemProp="name" content={t('schema.name')} />
                <meta itemProp="description" content={t('schema.description')} />
                <meta itemProp="dateModified" content={t('schema.date_modified')} />
                <meta itemProp="publisher" content={t('schema.publisher')} />
            </div>

            <div className="max-w-4xl mx-auto px-6 pt-24 pb-16">
                <header className="text-center mb-16 bg-white rounded-lg shadow-sm p-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" itemProp="headline">
                        {t('title')}
                    </h1>
                    <p className="text-gray-600 text-lg">
                        {t('last_updated')}: <time dateTime={t('schema.date_modified')} itemProp="dateModified">{t('last_updated_date')}</time>
                    </p>
                </header>

                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="p-8 md:p-12 space-y-12">
                        <section aria-labelledby="informacion-general">
                            <h2 id="informacion-general" className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                                {t('sections.general_information.title')}
                            </h2>
                            <div className="text-gray-700 leading-relaxed space-y-4">
                                <p itemProp="text">
                                    {t.rich('sections.general_information.content', {
                                        strong: (chunks) => <strong>{chunks}</strong>
                                    })}
                                </p>
                            </div>
                        </section>

                        <section aria-labelledby="datos-recopilados">
                            <h2 id="datos-recopilados" className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                                {t('sections.collected_data.title')}
                            </h2>
                            <div className="bg-gray-50 rounded-lg p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('sections.collected_data.personal_information.title')}</h3>
                                <ul className="space-y-3 text-gray-700" aria-label={t('sections.collected_data.personal_information.aria_label')}>
                                    {getTranslationArray('sections.collected_data.personal_information.items').map((item, index) => (
                                        <li key={index} className="flex items-start">
                                            <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" aria-hidden="true"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </section>

                        <section aria-labelledby="finalidad-tratamiento">
                            <h2 id="finalidad-tratamiento" className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                                {t('sections.purpose_of_processing.title')}
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4" itemProp="text">
                                {t('sections.purpose_of_processing.intro')}
                            </p>
                            <ul className="space-y-3 text-gray-700" aria-label={t('sections.purpose_of_processing.aria_label')}>
                                {getTranslationArray('sections.purpose_of_processing.items').map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" aria-hidden="true"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <section aria-labelledby="base-legal">
                            <h2 id="base-legal" className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                                {t('sections.legal_basis.title')}
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4" itemProp="text">
                                {t('sections.legal_basis.intro')}
                            </p>
                            <div className="space-y-4">
                                {getTranslationObjectArray('sections.legal_basis.items').map((item, index) => (
                                    <div key={index} className="flex items-start">
                                        <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" aria-hidden="true"></span>
                                        <div>
                                            <strong className="text-gray-900">{item?.title || item}</strong>
                                            {item?.description && (
                                                <span className="text-gray-700 ml-2">{item.description}</span>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section aria-labelledby="derechos-usuario">
                            <h2 id="derechos-usuario" className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                                {t('sections.user_rights.title')}
                            </h2>
                            <div className="bg-blue-50 rounded-lg p-6">
                                <p className="text-gray-700 mb-4 font-medium">{t('sections.user_rights.intro')}</p>
                                <div className="space-y-4">
                                    {getTranslationObjectArray('sections.user_rights.items').map((item, index) => (
                                        <div key={index} className="flex items-start">
                                            <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" aria-hidden="true"></span>
                                            <div>
                                                <strong className="text-gray-900">{item?.title || item}</strong>
                                                {item?.description && (
                                                    <span className="text-gray-700 ml-2">{item.description}</span>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        <section aria-labelledby="seguridad-datos">
                            <h2 id="seguridad-datos" className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                                {t('sections.data_security.title')}
                            </h2>
                            <p className="text-gray-700 leading-relaxed" itemProp="text">
                                {t('sections.data_security.content')}
                            </p>
                        </section>

                        <section aria-labelledby="retencion-datos">
                            <h2 id="retencion-datos" className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                                {t('sections.data_retention.title')}
                            </h2>
                            <p className="text-gray-700 leading-relaxed" itemProp="text">
                                {t('sections.data_retention.content')}
                            </p>
                        </section>

                        <section aria-labelledby="contacto">
                            <h2 id="contacto" className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                                {t('sections.contact.title')}
                            </h2>
                            <div className="bg-gray-50 rounded-lg p-6" itemScope itemType="https://schema.org/Organization">
                                <p className="text-gray-700 mb-4" itemProp="description">
                                    {t('sections.contact.description')}
                                </p>
                                <div className="space-y-3">
                                    <p className="text-gray-700">
                                        <strong className="text-gray-900">{t('sections.contact.email.label')}:</strong>
                                        <a 
                                            href={`mailto:${t('sections.contact.email.value')}`}
                                            className="text-blue-600 hover:text-blue-700 ml-2 font-medium"
                                            itemProp="email"
                                            aria-label={t('sections.contact.email.aria_label', { email: t('sections.contact.email.value') })}
                                        >
                                            {t('sections.contact.email.value')}
                                        </a>
                                    </p>
                                    <p className="text-gray-700" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                                        <strong className="text-gray-900">{t('sections.contact.address.label')}:</strong>
                                        <span className="ml-2" itemProp="streetAddress">{t('sections.contact.address.street')}</span>, 
                                        <span className="ml-1" itemProp="postalCode">{t('sections.contact.address.postal_code')}</span>
                                        <span className="ml-1" itemProp="addressLocality">{t('sections.contact.address.city')}</span>
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>

                    <footer className="text-center py-8 border-t border-gray-200 bg-gray-50">
                        <p className="text-gray-500">{t('footer.copyright')}</p>
                    </footer>
                </div>
            </div>
        </div>
    );
}