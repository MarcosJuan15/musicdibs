'use client';

import Image from 'next/image';
import { useTranslations } from "next-intl";

export default function DibsTokenWhatIs() {
    const t = useTranslations('dibsToken.whatIs');

    return (
        <section className="py-20 px-4 bg-white" itemScope itemType="https://schema.org/WebPageElement">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6" itemProp="headline">
                        {t('title')}
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-900 via-purple-800 to-pink-600 mx-auto"></div>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
                    <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6 order-2 lg:order-1">
                        <p className="text-lg text-gray-600 leading-relaxed" itemProp="description">
                            {t.rich('description1', {
                                strong: (chunks) => <span className="font-semibold text-gray-900">{chunks}</span>
                            })}
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            {t.rich('description2', {
                                strong: (chunks) => <span className="font-semibold text-blue-900">{chunks}</span>
                            })}
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            {t('description3')}
                        </p>
                        
                        <div className="lg:hidden grid grid-cols-2 gap-4 mt-8">
                            <div className="bg-gradient-to-br from-blue-900/5 to-blue-900/10 p-4 rounded-lg text-center">
                                <p className="font-semibold text-blue-900">{t('feature1_title')}</p>
                                <p className="text-sm text-gray-600">{t('feature1_subtitle')}</p>
                            </div>
                            <div className="bg-gradient-to-br from-purple-800/5 to-purple-800/10 p-4 rounded-lg text-center">
                                <p className="font-semibold text-purple-800">{t('feature2_title')}</p>
                                <p className="text-sm text-gray-600">{t('feature2_subtitle')}</p>
                            </div>
                            <div className="bg-gradient-to-br from-pink-600/5 to-pink-600/10 p-4 rounded-lg text-center">
                                <p className="font-semibold text-pink-600">{t('feature3_title')}</p>
                                <p className="text-sm text-gray-600">{t('feature3_subtitle')}</p>
                            </div>
                            <div className="bg-gradient-to-br from-blue-900/5 to-purple-800/10 p-4 rounded-lg text-center">
                                <p className="font-semibold text-blue-900">{t('feature4_title')}</p>
                                <p className="text-sm text-gray-600">{t('feature4_subtitle')}</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="w-full lg:w-1/2 order-1 lg:order-2">
                        <div className="relative max-w-2xl mx-auto">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-800/10 to-pink-600/10 rounded-3xl blur-2xl" />
                            <div className="relative bg-gray-50 p-6 md:p-8 rounded-3xl shadow-2xl border border-gray-200">
                                <Image
                                    src="/assets/images/dibs-platform-architecture.png"
                                    alt={t('image_alt')}
                                    width={600}
                                    height={400}
                                    className="w-full h-auto rounded-xl"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="hidden lg:grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
                    <div className="bg-gradient-to-br from-blue-900/5 to-blue-900/10 p-6 rounded-xl text-center hover:shadow-lg transition-shadow border border-blue-900/10">
                        <p className="font-semibold text-blue-900 text-lg">{t('feature1_title')}</p>
                        <p className="text-gray-600 mt-2">{t('feature1_subtitle')}</p>
                    </div>
                    <div className="bg-gradient-to-br from-purple-800/5 to-purple-800/10 p-6 rounded-xl text-center hover:shadow-lg transition-shadow border border-purple-800/10">
                        <p className="font-semibold text-purple-800 text-lg">{t('feature2_title')}</p>
                        <p className="text-gray-600 mt-2">{t('feature2_subtitle')}</p>
                    </div>
                    <div className="bg-gradient-to-br from-pink-600/5 to-pink-600/10 p-6 rounded-xl text-center hover:shadow-lg transition-shadow border border-pink-600/10">
                        <p className="font-semibold text-pink-600 text-lg">{t('feature3_title')}</p>
                        <p className="text-gray-600 mt-2">{t('feature3_subtitle')}</p>
                    </div>
                    <div className="bg-gradient-to-br from-blue-900/5 to-purple-800/10 p-6 rounded-xl text-center hover:shadow-lg transition-shadow border border-blue-900/10">
                        <p className="font-semibold text-blue-900 text-lg">{t('feature4_title')}</p>
                        <p className="text-gray-600 mt-2">{t('feature4_subtitle')}</p>
                    </div>
                </div>

                <div itemScope itemType="https://schema.org/SoftwareApplication" className="hidden">
                    <meta itemProp="name" content="MusicDIBS Platform" />
                    <meta itemProp="description" content={t('schema_description')} />
                    <meta itemProp="applicationCategory" content="BusinessApplication" />
                    <meta itemProp="operatingSystem" content="Web-based" />
                </div>
            </div>
        </section>
    );
}