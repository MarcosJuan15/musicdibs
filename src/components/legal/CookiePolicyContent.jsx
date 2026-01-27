'use client';

import { useTranslations } from "next-intl";

export default function CookiePolicyContent() {
    const t = useTranslations('legal.cookie_policy');
    
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
                        <section aria-labelledby="politica-cookies">
                            <h2 id="politica-cookies" className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                                {t('sections.policy.title')}
                            </h2>
                            <p className="text-gray-700 leading-relaxed" itemProp="text">
                                {t('sections.policy.content')}
                            </p>
                        </section>

                        <section aria-labelledby="que-son-cookies">
                            <h2 id="que-son-cookies" className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                                {t('sections.what_are_cookies.title')}
                            </h2>
                            <div className="bg-blue-50 rounded-lg p-6">
                                <p className="text-gray-700 leading-relaxed" itemProp="text">
                                    {t('sections.what_are_cookies.content')}
                                </p>
                            </div>
                        </section>

                        <section aria-labelledby="tipos-cookies">
                            <h2 id="tipos-cookies" className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                                {t('sections.types_of_cookies.title')}
                            </h2>
                            <div className="space-y-8">
                                <div className="bg-gray-50 rounded-lg p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('sections.types_of_cookies.by_management.title')}</h3>
                                    <ul className="space-y-3" aria-label={t('sections.types_of_cookies.by_management.aria_label')}>
                                        {t.raw('sections.types_of_cookies.by_management.items').map((item, index) => (
                                            <li key={index} className="flex items-start">
                                                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" aria-hidden="true"></span>
                                                <div>
                                                    <strong className="text-gray-900">{item.title}</strong>
                                                    <span className="text-gray-700 ml-2">{item.description}</span>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="bg-gray-50 rounded-lg p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('sections.types_of_cookies.by_duration.title')}</h3>
                                    <ul className="space-y-3" aria-label={t('sections.types_of_cookies.by_duration.aria_label')}>
                                        {t.raw('sections.types_of_cookies.by_duration.items').map((item, index) => (
                                            <li key={index} className="flex items-start">
                                                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" aria-hidden="true"></span>
                                                <div>
                                                    <strong className="text-gray-900">{item.title}</strong>
                                                    <span className="text-gray-700 ml-2">{item.description}</span>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="bg-gray-50 rounded-lg p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('sections.types_of_cookies.by_purpose.title')}</h3>
                                    <ul className="space-y-3" aria-label={t('sections.types_of_cookies.by_purpose.aria_label')}>
                                        {t.raw('sections.types_of_cookies.by_purpose.items').map((item, index) => (
                                            <li key={index} className="flex items-start">
                                                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" aria-hidden="true"></span>
                                                <div>
                                                    <strong className="text-gray-900">{item.title}</strong>
                                                    <span className="text-gray-700 ml-2">{item.description}</span>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section aria-labelledby="cookies-utilizadas">
                            <h2 id="cookies-utilizadas" className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                                {t('sections.cookies_used.title')}
                            </h2>
                            <div className="space-y-6">
                                <div className="bg-gray-50 rounded-lg p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('sections.cookies_used.technical.title')}</h3>
                                    <p className="text-gray-700 leading-relaxed" itemProp="text">
                                        {t('sections.cookies_used.technical.content')}
                                    </p>
                                </div>

                                <div className="bg-gray-50 rounded-lg p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('sections.cookies_used.personalization.title')}</h3>
                                    <p className="text-gray-700 leading-relaxed" itemProp="text">
                                        {t('sections.cookies_used.personalization.content')}
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section aria-labelledby="aceptacion-cookies">
                            <h2 id="aceptacion-cookies" className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                                {t('sections.acceptance.title')}
                            </h2>
                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                                <p className="text-gray-700 leading-relaxed" itemProp="text">
                                    {t('sections.acceptance.content')}
                                </p>
                            </div>
                        </section>

                        <section aria-labelledby="configuracion-cookies">
                            <h2 id="configuracion-cookies" className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                                {t('sections.configuration.title')}
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-6" itemProp="text">
                                {t('sections.configuration.intro')}
                            </p>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-gray-50 rounded-lg p-6">
                                    <h4 className="font-semibold text-gray-900 mb-4">{t('sections.configuration.browsers.title')}</h4>
                                    <ul className="space-y-3 text-gray-700" aria-label={t('sections.configuration.browsers.aria_label')}>
                                        {t.raw('sections.configuration.browsers.items').map((item, index) => (
                                            <li key={index} className="flex items-start">
                                                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" aria-hidden="true"></span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="bg-gray-50 rounded-lg p-6">
                                    <h4 className="font-semibold text-gray-900 mb-4">{t('sections.configuration.additional_info.title')}</h4>
                                    <p className="text-gray-700 leading-relaxed" itemProp="text">
                                        {t.rich('sections.configuration.additional_info.content', {
                                            link: (chunks) => (
                                                <a
                                                    href="https://www.aepd.es/sites/default/files/2020-07/guia-cookies.pdf"
                                                    className="text-blue-600 hover:text-blue-700 font-medium"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    aria-label={t('sections.configuration.additional_info.link_aria_label')}
                                                >
                                                    {chunks}
                                                </a>
                                            )
                                        })}
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section aria-labelledby="actualizaciones-cookies">
                            <h2 id="actualizaciones-cookies" className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                                {t('sections.updates.title')}
                            </h2>
                            <div className="bg-gray-50 rounded-lg p-6">
                                <p className="text-gray-700 leading-relaxed mb-4" itemProp="text">
                                    {t('sections.updates.content_part1')}
                                </p>
                                <p className="text-gray-700 leading-relaxed" itemProp="text">
                                    {t('sections.updates.content_part2')}
                                </p>
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