'use client';

import { useRouter } from "next/navigation";

export default function HomeIndividualRegistration() {
    const router = useRouter();

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
            {/* Schema.org structured data */}
            <div itemScope itemType="https://schema.org/Product" className="hidden">
                <meta itemProp="name" content="Registro Individual - MusicDIBS" />
                <meta itemProp="description" content="Registro individual de obras musicales por 11,90€" />
                <link itemProp="url" href="https://musicdibs.com/register/?prod=5157" />
            </div>

            <div className="max-w-4xl mx-auto">
                <h2 
                    id="individual-registration-title"
                    className="text-2xl font-bold mb-2"
                    itemProp="name"
                >
                    ¿REGISTROS INDIVIDUALES?
                </h2>
                <p className="mb-6 text-lg">
                    También puedes registrar una obra por <strong itemProp="price">11,90€</strong>
                </p>

                <button
                    onClick={handlePurchase}
                    className="bg-transparent border border-green-400 text-green-400 px-8 py-3 rounded-full hover:bg-green-400 hover:text-white transition-colors duration-300 font-semibold"
                    aria-label="Comprar registro individual por 11,90€"
                    itemProp="url"
                >
                    Comprar
                </button>

                <div className="mt-8 text-sm text-white/80 space-y-4">
                    <p>
                        ¿Eres un profesional, empresa o academia?{" "}
                        <a
                            href="/support"
                            className="text-green-300 underline hover:text-green-200 transition-colors"
                            aria-label="Contactar para paquetes personalizados"
                        >
                            Contáctanos
                        </a>{" "}
                        y solicita detalles para paquetes personalizados o licenciamientos
                        (marca blanca).
                    </p>

                    <div 
                        className="text-xs text-white/70 bg-white/10 p-4 rounded-lg"
                        itemProp="additionalProperty"
                        itemScope
                        itemType="https://schema.org/PropertyValue"
                    >
                        <meta itemProp="name" content="Condiciones de la oferta" />
                        <p itemProp="description">
                            * Condiciones de la oferta
                            <br />
                            Impuestos NO incluidos (se aplicará el 21% de IVA para países UE). Las
                            suscripciones mensuales y anuales se renuevan automáticamente al
                            finalizar el período de suscripción. Más información en FAQ y en
                            términos de uso y compra.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}