// src/components/dibs-token/DibsTokenIA.jsx
import { Shield, Sparkles, TrendingUp, Lock } from "lucide-react";

export default function DibsTokenIA() {
    const features = [
        {
            icon: Shield,
            title: "Monitoreo de derechos de autor",
            description: "DIBS IA Agent asegurará un seguimiento del uso y distribución de las canciones, garantizando una gestión precisa y transparente de los derechos."
        },
        {
            icon: TrendingUp,
            title: "Optimización de ingresos",
            description: "DIBS IA ayudará a maximizar los ingresos de los artistas al proporcionar recomendaciones personalizadas sobre la monetización y promoción de sus canciones."
        },
        {
            icon: Lock,
            title: "Detección de infracciones",
            description: "El agente IA identificará posibles usos no autorizados de las obras, alertando a los artistas sobre posibles infracciones de derechos."
        },
        {
            icon: Sparkles,
            title: "Análisis de tendencias",
            description: "La IA analizará el comportamiento del público y las tendencias del mercado musical, proporcionando a los artistas información clave para mejorar su estrategia de lanzamiento."
        }
    ];

    return (
        <section className="py-16 px-4 bg-gray-50/30" itemScope itemType="https://schema.org/WebPageElement">
            <div className="container mx-auto max-w-6xl">
                {/* Header centrado */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6" itemProp="headline">
                        IA aplicada en Propiedad Intelectual
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-900 via-purple-800 to-pink-600 mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto" itemProp="description">
                        La nueva actualización de DIBS presentará una integración como <span className="font-semibold text-blue-900">Agente IA</span>, una herramienta avanzada que transforma la forma en que los artistas gestionan sus derechos y activos.
                    </p>
                </div>

                {/* Grid de características */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 p-6 text-center group"
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-900/10 via-purple-800/10 to-pink-600/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                <feature.icon className="w-8 h-8 text-blue-900" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Sección destacada */}
                <div className="text-center max-w-4xl mx-auto">
                    <div className="bg-gradient-to-r from-blue-900/10 via-purple-800/10 to-pink-600/10 rounded-2xl p-8 md:p-12 border border-gray-200">
                        <p className="text-lg font-semibold text-gray-900 leading-relaxed">
                            Con <span className="text-blue-900">DIBS IA Agent</span>, la tecnología blockchain y la inteligencia artificial se unen para llevar la industria musical a un nuevo nivel de <span className="text-purple-800">eficiencia</span> y <span className="text-pink-600">transparencia</span>.
                        </p>
                    </div>
                </div>


                {/* Schema.org para AI technology */}
                <div itemScope itemType="https://schema.org/SoftwareApplication" className="hidden">
                    <meta itemProp="name" content="DIBS IA Agent" />
                    <meta itemProp="description" content="Inteligencia Artificial aplicada a la protección de propiedad intelectual musical" />
                    <meta itemProp="applicationCategory" content="BusinessApplication" />
                    <meta itemProp="featureList" content="Monitoreo de derechos de autor, Optimización de ingresos, Detección de infracciones, Análisis de tendencias" />
                </div>
            </div>
        </section>
    );
}