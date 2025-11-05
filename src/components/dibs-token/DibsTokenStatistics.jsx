// src/components/dibs-token/DibsTokenStatistics.jsx
"use client";

import { useState, useEffect } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function DibsTokenStatistics() {
    const [hasAnimated, setHasAnimated] = useState(false);
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    useEffect(() => {
        if (inView && !hasAnimated) {
            setHasAnimated(true);
        }
    }, [inView, hasAnimated]);

    const stats = [
        { number: 100, label: "artistas de 57 países", suffix: "K+" },
        { number: 300, label: "seguidores en RRSS", suffix: "K+" },
        { number: 1000000, label: "obras registradas", suffix: "M+" },
    ];

    return (
        <section 
            className="py-20 px-4 bg-gradient-to-br from-blue-900/10 via-purple-800/10 to-pink-600/10" 
            itemScope 
            itemType="https://schema.org/WebPageElement"
        >
            <div className="container mx-auto max-w-6xl" ref={ref}>
                <div className="grid md:grid-cols-3 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center p-8 bg-white/80 backdrop-blur rounded-2xl hover:shadow-xl transition-shadow">
                            <p className="text-5xl font-bold bg-gradient-to-r from-blue-900 to-purple-800 bg-clip-text text-transparent mb-2">
                                {hasAnimated ? (
                                    <CountUp 
                                        end={stat.number}
                                        duration={2.5}
                                        delay={index * 0.3}
                                        suffix={stat.suffix}
                                    />
                                ) : (
                                    `0${stat.suffix}`
                                )}
                            </p>
                            <p className="text-gray-600">{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* Schema.org for QuantitativeValue */}
                <div itemScope itemType="https://schema.org/QuantitativeValue" className="hidden">
                    <meta itemProp="name" content="MusicDIBS Platform Statistics" />
                    {stats.map((stat, index) => (
                        <div key={index} itemScope itemType="https://schema.org/PropertyValue">
                            <meta itemProp="name" content={stat.label} />
                            <meta itemProp="value" content={stat.number + stat.suffix} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}