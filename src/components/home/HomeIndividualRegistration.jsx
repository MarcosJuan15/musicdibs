'use client';

import { useRouter } from "@/navigation";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

export default function HomeIndividualRegistration() {
    const router = useRouter();
    const t = useTranslations('home.individual_registration');

    const handlePurchase = () => {
        router.push("/auth/signup");
    };

    return (
        <section 
            className="bg-purple-600 text-center py-12 px-4 text-white"
            itemScope
            itemType="https://schema.org/Offer"
            aria-labelledby="individual-registration-title"
        >
            <div className="max-w-4xl mx-auto">
                <h2 
                    id="individual-registration-title"
                    className="text-2xl font-bold mb-2"
                    itemProp="name"
                >
                    {t('title')}
                </h2>
                <p className="mb-6 text-lg">
                    {t('subtitle')} <strong itemProp="price">{t('price')}</strong>
                </p>

                <button
                    onClick={handlePurchase}
                    className="bg-transparent border border-green-400 text-green-400 px-8 py-3 rounded-full hover:bg-green-400 hover:text-white transition-colors duration-300 font-semibold"
                    aria-label={`${t('buy')} registro individual por ${t('price')}`}
                >
                    {t('buy')}
                </button>

                <div className="mt-8 text-sm text-white/80 space-y-4">
                    <p>
                        {t.rich('contact_message', {
                            contact: (chunks) => (
                                <Link
                                    href="/support"
                                    className="text-green-300 underline hover:text-green-200 transition-colors"
                                    aria-label={t('contact_us')}
                                >
                                    {chunks}
                                </Link>
                            )
                        })}
                    </p>

                    <div 
                        className="text-xs text-white/70 bg-white/10 p-4 rounded-lg"
                        itemProp="additionalProperty"
                        itemScope
                        itemType="https://schema.org/PropertyValue"
                    >
                        <meta itemProp="name" content="Condiciones de la oferta" />
                        <p itemProp="description">
                            {t('terms_note')}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}