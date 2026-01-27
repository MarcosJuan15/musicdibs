'use client';

import { useTranslations } from "next-intl";
import { FileCheck, Globe, Users } from "lucide-react";

export default function TechLegalCertification() {
    const t = useTranslations('legal.tech_and_legal');
    
    const certificationItems = t.raw('sections.certification.items') || [];
    
    return (
        <section className="py-10 bg-white" aria-labelledby="certificaciones">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 id="certificaciones" className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                        {t('sections.certification.title')}
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        {t('sections.certification.description')}
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                    {certificationItems.map((item, index) => {
                        const icons = [FileCheck, Globe, Users];
                        const Icon = icons[index];
                        const bgColors = ['bg-green-100', 'bg-blue-100', 'bg-purple-100'];
                        const textColors = ['text-green-600', 'text-blue-600', 'text-purple-600'];
                        
                        return (
                            <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                                <div className={`w-16 h-16 ${bgColors[index]} rounded-full flex items-center justify-center mx-auto mb-4`}>
                                    <Icon className={`h-8 w-8 ${textColors[index]}`} />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600">
                                    {item.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}