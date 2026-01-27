'use client';

import { useTranslations } from "next-intl";

export default function TechLegalBlockchain() {
    const t = useTranslations('legal.tech_and_legal');
    
    const blockchainItems = t.raw('sections.blockchain_technology.items') || [];
    
    return (
        <section className="py-16 bg-white" aria-labelledby="tecnologia-blockchain">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 border border-gray-100">
                    <div className="grid lg:grid-cols-2 gap-10 items-center">
                        <div>
                            <h2 id="tecnologia-blockchain" className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                                {t('sections.blockchain_technology.title')}
                            </h2>
                            <div className="space-y-4">
                                {blockchainItems.map((item, index) => (
                                    <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                                        <div className="w-3 h-3 bg-purple-600 rounded-full mt-2 flex-shrink-0" aria-hidden="true"></div>
                                        <div>
                                            <p className="text-gray-900 font-semibold">{item.title}</p>
                                            <p className="text-gray-700 mt-1 text-sm">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 border border-purple-200">
                            <div className="text-center">
                                <div className="w-24 h-24 bg-purple-200 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <svg className="h-12 w-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                                    {t('sections.blockchain_technology.vanguard_tech.title')}
                                </h3>
                                <p className="text-gray-700">
                                    {t('sections.blockchain_technology.vanguard_tech.description')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}