'use client';

import { useTranslations } from "next-intl";
import { Link } from "@/navigation";
import Image from "next/image";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const t = useTranslations('footer');

    return (
        <footer 
            className="w-full relative bg-gradient-to-br from-blue-900 via-purple-800 to-pink-600 text-white overflow-hidden"
            role="contentinfo"
            aria-label={t('aria_label')}
            itemScope
            itemType="https://schema.org/Organization"
        >
            {/* Fondo geométrico sutil */}
            <div className="absolute inset-0 opacity-20" aria-hidden="true">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
                            radial-gradient(circle at 25% 25%, rgba(255, 182, 193, 0.3) 0%, transparent 50%),
                            radial-gradient(circle at 75% 75%, rgba(138, 43, 226, 0.3) 0%, transparent 50%),
                            radial-gradient(circle at 50% 50%, rgba(255, 20, 147, 0.2) 0%, transparent 50%),
                            linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%)
                        `,
                        backgroundSize: "100px 100px, 150px 150px, 200px 200px, 50px 50px",
                    }}
                />

                {/* Figuras geométricas flotantes */}
                <div className="absolute top-10 left-10 w-20 h-20 border border-pink-400/30 rounded-full animate-pulse" aria-hidden="true" />
                <div className="absolute top-20 right-20 w-16 h-16 bg-purple-500/20 rounded-lg rotate-45 animate-pulse" aria-hidden="true" />
                <div className="absolute bottom-20 left-20 w-12 h-12 border-2 border-pink-300/40 rotate-12 animate-pulse" aria-hidden="true" />
                <div className="absolute bottom-10 right-10 w-24 h-24 border border-purple-400/30 rounded-full animate-pulse" aria-hidden="true" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Columna izquierda - Logo y enlaces */}
                    <div className="space-y-6 text-left">
                        <div itemProp="logo">
                            <a
                                href="https://icommunity.io/"
                                target="_blank" 
                                rel="noopener noreferrer"
                                aria-label={t('visit_icommunity')}
                            >
                                <Image
                                    src="/assets/images/logo-footer.png"
                                    alt={t('logo_alt')}
                                    className="h-16 w-auto"
                                    width={160}
                                    height={64}
                                    priority
                                    itemProp="image"
                                />
                            </a>
                        </div>
                        <h3 className="text-xl font-semibold">{t('quick_links')}</h3>
                        <nav className="space-y-3" aria-label={t('quick_links')}>
                            {/* Verificar registro - ENLACE EXTERNO */}
                            <a
                                href="https://checker.icommunitylabs.com/?brand=music"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-white/80 hover:text-white transition-colors"
                                aria-label={t('verify_registration')}
                                itemProp="url"
                            >
                                <span itemProp="name">{t('verify_registration')}</span>
                            </a>
                            <Link
                                href="/tech-and-legal"
                                className="block text-white/80 hover:text-white transition-colors"
                                aria-label={t('tech_and_legal')}
                                itemProp="url"
                            >
                                <span itemProp="name">{t('tech_and_legal')}</span>
                            </Link>
                            <Link
                                href="/support"
                                className="block text-white/80 hover:text-white transition-colors"
                                aria-label={t('support')}
                                itemProp="url"
                            >
                                <span itemProp="name">{t('support')}</span>
                            </Link>
                            <Link
                                href="/partners"
                                className="block text-white/80 hover:text-white transition-colors"
                                aria-label={t('partners')}
                                itemProp="url"
                            >
                                <span itemProp="name">{t('partners')}</span>
                            </Link>
                            <a
                                href="/musicdibs-media-kit.zip"
                                download="MusicDIBS-Media-Kit.zip"
                                className="block text-white/80 hover:text-white transition-colors"
                                aria-label={t('media_kit')}
                                itemProp="url"
                            >
                                <span itemProp="name">{t('media_kit')}</span>
                            </a>
                        </nav>
                    </div>

                    {/* Columna central - Corporativo */}
                    <div className="space-y-6 text-left">
                        <h3 className="text-xl font-semibold mb-4" itemProp="name">{t('corporate')}</h3>
                        <nav className="space-y-3" aria-label={t('corporate')}>
                            <Link
                                href="/support"
                                className="block text-white/80 hover:text-white transition-colors"
                                aria-label={t('contact')}
                                itemProp="url"
                            >
                                <span itemProp="name">{t('contact')}</span>
                            </Link>
                            {/* Dibs token - ENLACE INTERNO CON Link para mantener idioma */}
                            <Link
                                href="/dibs-token"
                                className="block text-white/80 hover:text-white transition-colors"
                                aria-label={t('dibs_token')}
                                itemProp="url"
                            >
                                <span itemProp="name">{t('dibs_token')}</span>
                            </Link>
                            <Link
                                href="/sla"
                                className="block text-white/80 hover:text-white transition-colors"
                                aria-label={t('service_level_agreement')}
                                itemProp="url"
                            >
                                <span itemProp="name">{t('service_level_agreement')}</span>
                            </Link>
                            <Link
                                href="/privacy-policy"
                                className="block text-white/80 hover:text-white transition-colors"
                                aria-label={t('privacy_policy')}
                                itemProp="url"
                            >
                                <span itemProp="name">{t('privacy_policy')}</span>
                            </Link>
                            <Link
                                href="/terms-and-conditions"
                                className="block text-white/80 hover:text-white transition-colors"
                                aria-label={t('terms_and_conditions')}
                                itemProp="url"
                            >
                                <span itemProp="name">{t('terms_and_conditions')}</span>
                            </Link>
                            <Link
                                href="/cookie-policy"
                                className="block text-white/80 hover:text-white transition-colors"
                                aria-label={t('cookie_policy')}
                                itemProp="url"
                            >
                                <span itemProp="name">{t('cookie_policy')}</span>
                            </Link>
                        </nav>
                    </div>

                    {/* Columna derecha - Redes sociales */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-semibold mb-4">{t('follow_us')}</h3>
                        <div 
                            className="flex space-x-4" 
                            role="list" 
                            aria-label={t('follow_us')}
                        >
                            <a
                                href="https://twitter.com/musicdibs"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`${t('twitter')} - ${t('official')}`}
                                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors text-white focus:ring-2 focus:ring-white focus:outline-none"
                                role="listitem"
                                itemProp="sameAs"
                            >
                                <FaXTwitter size={18} aria-hidden="true" />
                                <span className="sr-only">{t('twitter')} {t('official')}</span>
                            </a>

                            <a
                                href="https://www.instagram.com/musicdibs/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`${t('instagram')} - ${t('official')}`}
                                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors text-white focus:ring-2 focus:ring-white focus:outline-none"
                                role="listitem"
                                itemProp="sameAs"
                            >
                                <FaInstagram size={18} aria-hidden="true" />
                                <span className="sr-only">{t('instagram')} {t('official')}</span>
                            </a>

                            <a
                                href="https://www.tiktok.com/@musicdibs_"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`${t('tiktok')} - ${t('official')}`}
                                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors text-white focus:ring-2 focus:ring-white focus:outline-none"
                                role="listitem"
                                itemProp="sameAs"
                            >
                                <FaTiktok size={18} aria-hidden="true" />
                                <span className="sr-only">{t('tiktok')} {t('official')}</span>
                            </a>

                            <a
                                href="https://www.youtube.com/@Musicdibs"
                                target="_blank" 
                                rel="noopener noreferrer"
                                aria-label={`${t('youtube')} - ${t('official')}`}
                                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors text-white focus:ring-2 focus:ring-white focus:outline-none"
                                role="listitem"
                                itemProp="sameAs"
                            >
                                <FaYoutube size={18} aria-hidden="true" />
                                <span className="sr-only">{t('youtube')} {t('official')}</span>
                            </a>
                        </div>
                        
                        {/* Información adicional para SEO */}
                        <div className="mt-6 text-white/70 text-sm">
                            <p className="mb-2">
                                <strong itemProp="name">Musicdibs</strong> - {t('description')}
                            </p>
                            <p itemProp="description">
                                {t('description_details')}
                            </p>
                        </div>
                    </div>
                </div>
                
                {/* Línea separadora */}
                <div className="border-t border-white/20 pt-6">
                    <p className="text-center text-white/50 text-sm" itemProp="copyrightNotice">
                        © {currentYear} Musicdibs. {t('all_rights_reserved')}.
                    </p>
                    
                    {/* Microdata mejorado para SEO */}
                    <div className="hidden" itemScope itemType="https://schema.org/Organization">
                        <meta itemProp="name" content="MusicDIBS" />
                        <meta itemProp="description" content={t('description')} />
                        <meta itemProp="url" content="https://musicdibs.com" />
                        <meta itemProp="email" content="soporte@musicdibs.com" />
                        <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                            <meta itemProp="addressCountry" content="ES" />
                        </div>
                        <div itemProp="areaServed" itemScope itemType="https://schema.org/Country">
                            <meta itemProp="name" content="Global" />
                        </div>
                        <meta itemProp="founder" content="iCommunity Labs" />
                        <meta itemProp="foundingDate" content="2023" />
                        <meta itemProp="keywords" content="registro musical, blockchain, derechos autor, distribución música, protección artistas, MusicDIBS" />
                    </div>
                </div>
            </div>
        </footer>
    );
}