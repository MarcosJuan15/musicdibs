'use client';

import { useTranslations } from "next-intl";

export default function TermsAndConditionsContent() {
    const t = useTranslations('legal.terms_and_conditions');
    
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
                        <section aria-labelledby="terminos-generales">
                            <h2 id="terminos-generales" className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                                {t('sections.general_terms.title')}
                            </h2>
                            <div className="text-gray-700 leading-relaxed space-y-4">
                                <p itemProp="text">
                                    {t.rich('sections.general_terms.content', {
                                        strong: (chunks) => <strong>{chunks}</strong>
                                    })}
                                </p>
                            </div>
                        </section>

                        <section aria-labelledby="politica-reembolso">
                            <h2 id="politica-reembolso" className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                                {t('sections.refund_policy.title')}
                            </h2>

                            <div className="space-y-8">
                                <div className="bg-gray-50 rounded-lg p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('sections.refund_policy.online_purchase.title')}</h3>
                                    <p className="text-gray-700 leading-relaxed" itemProp="text">
                                        {t('sections.refund_policy.online_purchase.content')}
                                    </p>
                                </div>

                                <div className="bg-gray-50 rounded-lg p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('sections.refund_policy.warranty.title')}</h3>
                                    <p className="text-gray-700 leading-relaxed" itemProp="text">
                                        {t.rich('sections.refund_policy.warranty.content', {
                                            email: (chunks) => (
                                                <a 
                                                    href={`mailto:${chunks}`}
                                                    className="text-blue-600 hover:text-blue-700 font-medium"
                                                    aria-label={t('sections.refund_policy.warranty.email_aria_label', { email: chunks })}
                                                >
                                                    {chunks}
                                                </a>
                                            )
                                        })}
                                    </p>
                                </div>

                                <div className="bg-gray-50 rounded-lg p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('sections.refund_policy.cancel_purchase.title')}</h3>
                                    <p className="text-gray-700 leading-relaxed" itemProp="text">
                                        {t.rich('sections.refund_policy.cancel_purchase.content', {
                                            email: (chunks) => (
                                                <a 
                                                    href={`mailto:${chunks}`}
                                                    className="text-blue-600 hover:text-blue-700 font-medium"
                                                    aria-label={t('sections.refund_policy.cancel_purchase.email_aria_label', { email: chunks })}
                                                >
                                                    {chunks}
                                                </a>
                                            )
                                        })}
                                    </p>
                                </div>

                                <div className="bg-gray-50 rounded-lg p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('sections.refund_policy.refunds.title')}</h3>
                                    <p className="text-gray-700 leading-relaxed" itemProp="text">
                                        {t('sections.refund_policy.refunds.content')}
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section aria-labelledby="condiciones-suscripcion">
                            <h2 id="condiciones-suscripcion" className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                                {t('sections.subscription_conditions.title')}
                            </h2>
                            <div className="space-y-6">
                                <p className="text-gray-700 leading-relaxed" itemProp="text">
                                    {t('sections.subscription_conditions.content')}
                                </p>
                                <div className="bg-amber-50 border border-amber-200 rounded-lg p-6" role="alert" aria-labelledby="importante-alert">
                                    <p id="importante-alert" className="font-semibold text-amber-800 mb-3">
                                        {t('sections.subscription_conditions.important.title')}
                                    </p>
                                    <ul className="space-y-2 text-amber-700" aria-label={t('sections.subscription_conditions.important.aria_label')}>
                                        {t.raw('sections.subscription_conditions.important.items').map((item, index) => (
                                            <li key={index} className="flex items-start">
                                                <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0" aria-hidden="true"></span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section aria-labelledby="uso-abusivo">
                            <h2 id="uso-abusivo" className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                                {t('sections.abuse_use.title')}
                            </h2>
                            <p className="text-gray-700 leading-relaxed" itemProp="text">
                                {t('sections.abuse_use.content')}
                            </p>
                        </section>

                        <section aria-labelledby="nfts">
                            <h2 id="nfts" className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                                {t('sections.nfts.title')}
                            </h2>
                            <p className="text-gray-700 leading-relaxed" itemProp="text">
                                {t('sections.nfts.content')}
                            </p>
                        </section>

                        <section aria-labelledby="tokens-icom">
                            <h2 id="tokens-icom" className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                                {t('sections.icom_tokens.title')}
                            </h2>
                            <p className="text-gray-700 leading-relaxed" itemProp="text">
                                {t.rich('sections.icom_tokens.content', {
                                    strong: (chunks) => <strong className="text-gray-900">{chunks}</strong>
                                })}
                            </p>
                        </section>

                        <section aria-labelledby="ofertas-promociones">
                            <h2 id="ofertas-promociones" className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                                {t('sections.offers_promotions.title')}
                            </h2>
                            <p className="text-gray-700 leading-relaxed" itemProp="text">
                                {t('sections.offers_promotions.content')}
                            </p>
                        </section>

                        <section aria-labelledby="contacto">
                            <h2 id="contacto" className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                                {t('sections.contact.title')}
                            </h2>
                            <div className="bg-gray-50 rounded-lg p-6" itemScope itemType="https://schema.org/Organization">
                                <p className="text-gray-700 mb-4" itemProp="description">
                                    {t.rich('sections.contact.description', {
                                        strong: (chunks) => <strong className="text-gray-900" itemProp="name">{chunks}</strong>
                                    })}
                                </p>
                                <div className="space-y-3">
                                    <p className="text-gray-700" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                                        <strong className="text-gray-900">{t('sections.contact.address.label')}:</strong>
                                        <span className="ml-2" itemProp="streetAddress">{t('sections.contact.address.street')}</span>, 
                                        <span className="ml-1" itemProp="postalCode">{t('sections.contact.address.postal_code')}</span>
                                        <span className="ml-1" itemProp="addressLocality">{t('sections.contact.address.city')}</span>, 
                                        <span className="ml-1" itemProp="addressCountry">{t('sections.contact.address.country')}</span>
                                    </p>
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