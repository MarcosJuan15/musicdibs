// src/components/dibs-token/DibsTokenRoadmap.jsx
import { Target, CheckCircle2, Calendar, TrendingUp } from "lucide-react";

export default function DibsTokenRoadmap() {
    const roadmap = [
        {
            year: "2022",
            items: [
                "Lanzamiento de Musicdibs v1.0",
                "Implementación de registro de obras con tecnología blockchain",
                "Inicio de la comunidad y campañas",
                "+5K artistas registrados"
            ]
        },
        {
            year: "2023",
            items: [
                "Programa de embajadores y partnerships estratégicos",
                "Desarrollo del módulo de NFTs",
                "Expansión mercado Latam",
                "+25K artistas registrados"
            ]
        },
        {
            year: "2024",
            items: [
                "Módulo de distribución musical descentralizada",
                "Lanzamiento del DIBS token en red Solana",
                "Listado en exchanges (CEX y DEX)",
                "+100K artistas registrados"
            ]
        },
        {
            year: "2025",
            items: [
                "Módulo IA",
                "Marketplace NFT/Fiat",
                "Promoción Dibs token: eventos, festivales",
                "+500K artistas registrados"
            ]
        },
        {
            year: "2026",
            items: [
                "Mercado Global de Derechos",
                "Nuevas soluciones de escalabilidad",
                "Servicio de streaming",
                "+2M artistas registrados"
            ]
        },
        {
            year: "2027",
            items: [
                "Ecosistema DePIN Ampliado",
                "Plataforma de Creación de Contenidos Avanzada",
                "Monetización de Experiencias en Vivo",
                "+5M artistas registrados"
            ]
        }
    ];

    return (
        <section className="py-20 px-4 bg-gray-50/30" itemScope itemType="https://schema.org/WebPageElement">
            <div className="container mx-auto max-w-6xl">
                {/* Header centrado */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6" itemProp="headline">
                        Logros y próximos objetivos
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-900 via-purple-800 to-pink-600 mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto" itemProp="description">
                        Descubre los hitos alcanzados y los emocionantes objetivos que tenemos por delante en el desarrollo de Musicdibs y el ecosistema DIBS.
                    </p>
                </div>

                {/* Grid de roadmap */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {roadmap.map((milestone, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 p-6 group"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-900/10 to-purple-800/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Calendar className="w-6 h-6 text-blue-900" />
                                </div>
                                <h3 className="text-2xl font-bold text-blue-900">{milestone.year}</h3>
                            </div>
                            <ul className="space-y-3">
                                {milestone.items.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-sm text-gray-600 leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Sección destacada */}
                <div className="text-center max-w-4xl mx-auto">
                    <div className="bg-gradient-to-r from-blue-900/10 via-purple-800/10 to-pink-600/10 rounded-2xl p-8 md:p-12 border border-gray-200">
                        <p className="text-lg font-semibold text-gray-900 leading-relaxed">
                            Nuestro roadmap refleja un <span className="text-blue-900">crecimiento exponencial</span> y una <span className="text-purple-800">visión clara</span> para revolucionar la industria musical mediante la <span className="text-pink-600">tecnología blockchain</span>.
                        </p>
                    </div>
                </div>


                {/* Schema.org for Action */}
                <div itemScope itemType="https://schema.org/Action" className="hidden">
                    <meta itemProp="name" content="MusicDIBS Development Roadmap" />
                    <meta itemProp="description" content="Strategic development timeline for MusicDIBS platform and DIBS token" />
                </div>
            </div>
        </section>
    );
}