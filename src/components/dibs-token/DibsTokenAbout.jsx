// src/components/dibs-token/DibsTokenAbout.jsx
import { 
    Shield, Sparkles, Award, TrendingUp, Zap, Globe, 
    Coins, Users, Crown, Gift 
} from "lucide-react";

export default function DibsTokenAbout() {
    const tokenFeatures = [
        { 
            icon: Shield, 
            title: "Registro de Obras", 
            desc: "Los artistas pueden usar DIBS para pagar las tarifas de registro de sus obras en la plataforma"
        },
        { 
            icon: Sparkles, 
            title: "Creación de Contenidos", 
            desc: "Accede a módulos de inteligencia artificial para la creación y edición de todo tipo de obras"
        },
        { 
            icon: Award, 
            title: "Creación de NFTs", 
            desc: "Convierte tus obras registradas en tokens no fungibles (NFTs) utilizando DIBS"
        },
        { 
            icon: TrendingUp, 
            title: "Distribución y Regalías", 
            desc: "Accede a servicios de distribución musical y gestión de regalías"
        },
        { 
            icon: Zap, 
            title: "Funcionalidades Premium", 
            desc: "Accede a herramientas avanzadas de promoción y marketing"
        },
        { 
            icon: Globe, 
            title: "Accesibilidad Global", 
            desc: "Disponible en mercados centralizados (CEX) y descentralizados (DEX)"
        },
    ];

    const holderBenefits = [
        { 
            icon: Crown,
            title: "Descuentos en Tarifas", 
            desc: "Obtén descuentos exclusivos en las tarifas de registro y otros servicios premium" 
        },
        { 
            icon: Users,
            title: "Participación en Gobernanza", 
            desc: "Participa en decisiones clave sobre el desarrollo y futuro de Musicdibs" 
        },
        { 
            icon: Award,
            title: "Programas de Fidelización", 
            desc: "Obtén recompensas exclusivas por tu participación activa en la plataforma" 
        },
        { 
            icon: Coins,
            title: "Recompensas y Airdrops", 
            desc: "Recibe recompensas periódicas en forma de DIBS a través de airdrops exclusivos" 
        },
    ];

    return (
        <section className="py-12 md:py-20 px-4 bg-white" itemScope itemType="https://schema.org/WebPageElement">
            <div className="container mx-auto max-w-6xl">
                {/* Header centrado */}
                <div className="text-center mb-8 md:mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6" itemProp="headline">
                        Utilidad del Token DIBS
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-900 via-purple-800 to-pink-600 mx-auto mb-4 md:mb-6"></div>
                    <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-4" itemProp="description">
                        El token <span className="font-semibold text-blue-900">DIBS</span> es el corazón del ecosistema MusicDIBS, facilitando el registro, protección, monetización y promoción de la propiedad intelectual de manera descentralizada.
                    </p>
                </div>

                {/* Features Grid - Responsive y centrado */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">
                    {tokenFeatures.map((feature, index) => (
                        <div 
                            key={index} 
                            className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 md:hover:-translate-y-2 p-4 md:p-6 group text-center md:text-left"
                        >
                            <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-blue-900/10 via-purple-800/10 to-pink-600/10 rounded-xl flex items-center justify-center mb-3 md:mb-4 mx-auto md:mx-0 group-hover:scale-110 transition-transform duration-300">
                                <feature.icon className="w-6 h-6 md:w-7 md:h-7 text-purple-700" />
                            </div>
                            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 md:mb-3">{feature.title}</h3>
                            <p className="text-xs md:text-sm text-gray-600 leading-relaxed">{feature.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Benefits Section - Responsive */}
                <div className="mb-8 md:mb-12">
                    <div className="bg-gradient-to-br from-blue-900/5 via-purple-800/5 to-pink-600/5 rounded-2xl p-6 md:p-8 border border-gray-200">
                        {/* Título dentro de la caja */}
                        <div className="text-center mb-6 md:mb-8">
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Beneficios Exclusivos</h3>
                            <p className="text-gray-600 text-sm md:text-base">Ventajas únicas para los holders del token DIBS</p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                            {holderBenefits.map((benefit, index) => (
                                <div key={index} className="flex flex-col md:flex-row gap-3 md:gap-4 group hover:bg-white/50 rounded-lg p-4 transition-all duration-300 text-center md:text-left">
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-900/10 via-purple-800/10 to-pink-600/10 rounded-lg flex items-center justify-center flex-shrink-0 mx-auto md:mx-0 group-hover:scale-110 transition-transform">
                                        <benefit.icon className="w-6 h-6 text-purple-700" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                                        <p className="text-xs md:text-sm text-gray-600 leading-relaxed">{benefit.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Schema.org for CryptoCurrency */}
                <div itemScope itemType="https://schema.org/CryptoCurrency" className="hidden">
                    <meta itemProp="name" content="DIBS Token" />
                    <meta itemProp="description" content="Utility token for MusicDIBS platform enabling intellectual property protection and rewards" />
                    <meta itemProp="url" content="https://musicdibs.com/dibs-token" />
                    <div itemProp="mainEntityOfPage" itemScope itemType="https://schema.org/WebPage">
                        <meta itemProp="url" content="https://musicdibs.com/dibs-token" />
                    </div>
                </div>
            </div>
        </section>
    );
}