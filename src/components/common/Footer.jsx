import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer 
            className="w-full relative bg-gradient-to-br from-blue-900 via-purple-800 to-pink-600 text-white overflow-hidden"
            role="contentinfo"
            aria-label="Pie de página"
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
                <div className="absolute top-10 left-10 w-20 h-20 border border-pink-400/30 rounded-full animate-pulse" />
                <div className="absolute top-20 right-20 w-16 h-16 bg-purple-500/20 rounded-lg rotate-45 animate-pulse" />
                <div className="absolute bottom-20 left-20 w-12 h-12 border-2 border-pink-300/40 rotate-12 animate-pulse" />
                <div className="absolute bottom-10 right-10 w-24 h-24 border border-purple-400/30 rounded-full animate-pulse" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Columna izquierda - Logo y enlaces */}
                    <div className="space-y-6 text-left">
                        <div>
                            <a
                                href="https://icommunity.io/"
                                target="_blank" 
                                rel="noopener noreferrer"
                                aria-label="Visitar iCommunity - Sitio web principal"
                            >
                                <Image
                                    src="/assets/images/logo-footer.png"
                                    alt="MusicDIBS - Plataforma de distribución musical"
                                    className="h-16 w-auto"
                                    width={160}
                                    height={64}
                                    priority
                                />
                            </a>
                        </div>
                        <nav className="space-y-3" aria-label="Enlaces rápidos">
                            <Link
                                href="/verification"
                                className="block text-white/80 hover:text-white transition-colors"
                                aria-label="Verificar registro de música"
                            >
                                Verificar registro
                            </Link>
                            <Link
                                href="/tech-and-legal"
                                className="block text-white/80 hover:text-white transition-colors"
                                aria-label="Información sobre tecnología y validez legal"
                            >
                                Tecnología y validez legal
                            </Link>
                            <Link
                                href="/support"
                                className="block text-white/80 hover:text-white transition-colors"
                                aria-label="Contactar con soporte técnico"
                            >
                                Soporte
                            </Link>
                            <Link
                                href="/partners"
                                className="block text-white/80 hover:text-white transition-colors"
                                aria-label="Conoce a nuestros partners"
                            >
                                Partners
                            </Link>
                            <a
                                href="/musicdibs-media-kit.zip"
                                download="MusicDIBS-Media-Kit.zip"
                                className="block text-white/80 hover:text-white transition-colors"
                                aria-label="Descargar Media Kit de MusicDIBS"
                            >
                                Media Kit
                            </a>
                        </nav>
                    </div>

                    {/* Columna central - Corporativo */}
                    <div className="space-y-6 text-left">
                        <h3 className="text-xl font-semibold mb-4">Corporativo</h3>
                        <nav className="space-y-3" aria-label="Enlaces corporativos">
                            <Link
                                href="/support"
                                className="block text-white/80 hover:text-white transition-colors"
                                aria-label="Información de contacto"
                            >
                                Contacto
                            </Link>
                            <a
                                href="/dibs-token"
                                className="block text-white/80 hover:text-white transition-colors"
                                aria-label="Información sobre DIBS Token"
                            >
                                DIBS Token
                            </a>
                            <Link
                                href="/sla"
                                className="block text-white/80 hover:text-white transition-colors"
                                aria-label="Acuerdo de nivel de servicios"
                            >
                                Acuerdo de nivel de servicios
                            </Link>
                            <Link
                                href="/privacy-policy"
                                className="block text-white/80 hover:text-white transition-colors"
                                aria-label="Política de privacidad y protección de datos"
                            >
                                Política de privacidad y protección de datos
                            </Link>
                            <Link
                                href="/terms-and-conditions"
                                className="block text-white/80 hover:text-white transition-colors"
                                aria-label="Términos y condiciones de uso"
                            >
                                Términos y condiciones
                            </Link>
                            <Link
                                href="/cookie-policy"
                                className="block text-white/80 hover:text-white transition-colors"
                                aria-label="Política de cookies"
                            >
                                Política de cookies
                            </Link>
                        </nav>
                    </div>

                    {/* Columna derecha - Redes sociales */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-semibold mb-4">Síguenos</h3>
                        <div className="flex space-x-4" role="list" aria-label="Redes sociales">
                            <a
                                href="https://twitter.com/musicdibs"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Síguenos en Twitter"
                                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors text-white focus:ring-2 focus:ring-white focus:outline-none"
                            >
                                <FaXTwitter size={18} aria-hidden="true" />
                                <span className="sr-only">Twitter de MusicDIBS</span>
                            </a>

                            <a
                                href="https://www.instagram.com/musicdibs/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Síguenos en Instagram"
                                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors text-white focus:ring-2 focus:ring-white focus:outline-none"
                            >
                                <FaInstagram size={18} aria-hidden="true" />
                                <span className="sr-only">Instagram de MusicDIBS</span>
                            </a>

                            <a
                                href="https://www.tiktok.com/@musicdibs_"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Síguenos en TikTok"
                                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors text-white focus:ring-2 focus:ring-white focus:outline-none"
                            >
                                <FaTiktok size={18} aria-hidden="true" />
                                <span className="sr-only">TikTok de MusicDIBS</span>
                            </a>

                            <a
                                href="https://www.youtube.com/@Musicdibs"
                                target="_blank" 
                                rel="noopener noreferrer"
                                aria-label="Síguenos en YouTube"
                                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors text-white focus:ring-2 focus:ring-white focus:outline-none"
                            >
                                <FaYoutube size={18} aria-hidden="true" />
                                <span className="sr-only">YouTube de MusicDIBS</span>
                            </a>
                        </div>
                        
                        {/* Información adicional para SEO */}
                        <div className="mt-6 text-white/70 text-sm">
                            <p className="mb-2">
                                <strong>MusicDIBS</strong> - Plataforma líder en distribución musical digital
                            </p>
                            <p>
                                Distribución global, protección de derechos y tecnología blockchain para artistas.
                            </p>
                        </div>
                    </div>
                </div>
                
                {/* Línea separadora */}
                <div className="border-t border-white/20 pt-6">
                    <p className="text-center text-white/50 text-sm">
                        © {currentYear} MusicDIBS. Todos los derechos reservados.
                    </p>
                    {/* Microdata para SEO */}
                    <div itemScope itemType="https://schema.org/Organization" className="hidden">
                        <meta itemProp="name" content="MusicDIBS" />
                        <meta itemProp="description" content="Plataforma de distribución musical digital con tecnología blockchain" />
                        <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                            <meta itemProp="addressCountry" content="ES" />
                        </div>
                        <a itemProp="url" href="https://musicdibs.com">MusicDIBS</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}