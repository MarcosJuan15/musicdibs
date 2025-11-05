// src/components/dibs-token/DibsTokenPartners.jsx
import { Handshake } from "lucide-react";

export default function DibsTokenPartners() {
    const partners = [
        { name: "LANZADERA", logo: "https://icommunity.io/icom/wp-content/uploads/2021/07/lanzadera200.png" },
        { name: "Amazon Web Services", logo: "https://icommunity.io/icom/wp-content/uploads/2021/07/amazonWS.png" },
        { name: "Alastria", logo: "https://icommunity.io/icom/wp-content/uploads/2021/07/alastriagray-300x93.png" },
        { name: "Telefónica", logo: "https://icommunity.io/icom/wp-content/uploads/2021/07/telefonica200.png" },
        { name: "Sopra Steria", logo: "https://musicdibs.com/dibs/wp-content/uploads/2024/09/Logo_Sopra_Steria_1.webp" },
        { name: "Eurecat", logo: "https://icommunity.io/icom/wp-content/uploads/2021/07/eurecat.png" },
        { name: "IBM", logo: "https://icommunity.io/icom/wp-content/uploads/2021/07/ibmHLgray-300x137.png" },
        { name: "Ardor", logo: "https://icommunity.io/icom/wp-content/uploads/2021/07/ardor2.png" },
    ];

    return (
        <section className="py-20 px-4 bg-gray-50/30" itemScope itemType="https://schema.org/WebPageElement">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6" itemProp="headline">
                        Nuestros Partners
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-900 via-purple-800 to-pink-600 mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto" itemProp="description">
                        Colaboramos con organizaciones líderes para ofrecer soluciones integrales de protección de propiedad intelectual y servicios musicales de alta calidad.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {partners.map((partner, index) => (
                        <div 
                            key={index} 
                            className="bg-white rounded-xl p-6 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 hover:shadow-lg border border-gray-200 min-h-[120px] hover:-translate-y-1"
                        >
                            <img 
                                src={partner.logo} 
                                alt={`Partner ${partner.name}`}
                                className="max-h-12 object-contain"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}