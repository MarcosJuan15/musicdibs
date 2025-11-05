// src/components/dibs-token/DibsTokenAcceleration.jsx
import { Award, Rocket } from "lucide-react";

export default function DibsTokenAcceleration() {
    const accelerationPrograms = [
        { 
            name: "Binance Labs", 
            logo: "https://musicdibs.com/dibs/wp-content/uploads/2025/02/binance-labs-200x52.png"
        },
        { 
            name: "Coinbase Ventures", 
            logo: "https://musicdibs.com/wp-content/uploads/2024/07/coinbase_ventures.png"
        },
        { 
            name: "a16z crypto", 
            logo: "https://musicdibs.com/wp-content/uploads/2024/07/a16z_crypto-1.png"
        },
    ];

    return (
        <section className="py-20 px-4 bg-white" itemScope itemType="https://schema.org/WebPageElement">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6" itemProp="headline">
                        Aceleración Web3
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-900 via-purple-800 to-pink-600 mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto" itemProp="description">
                        Musicdibs ha sido considerado por los programas de aceleración más prestigiosos del ecosistema blockchain y web3
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {accelerationPrograms.map((program, index) => (
                        <div 
                            key={index} 
                            className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 flex items-center justify-center min-h-[160px]"
                        >
                            <div className="grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
                                <img 
                                    src={program.logo} 
                                    alt={`Logo ${program.name}`}
                                    className="h-16 object-contain"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Schema.org for Organization */}
                <div itemScope itemType="https://schema.org/Organization" className="hidden">
                    <meta itemProp="name" content="MusicDIBS Acceleration Programs" />
                    <meta itemProp="description" content="Participación en programas de aceleración web3 líderes en la industria" />
                </div>
            </div>
        </section>
    );
}