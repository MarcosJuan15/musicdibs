import React from "react";
import { BarChart } from "lucide-react";

export default function SLAHero() {
    return (
        <section className="py-20 bg-gradient-to-br from-purple-900/10 via-purple-800/10 to-pink-800/10">
            <div className="container mx-auto px-4 text-center">
                <div className="flex justify-center mb-6">
                    <div className="p-4 rounded-full bg-gradient-to-br from-blue-900 via-purple-800 to-pink-600">
                        <BarChart className="h-8 w-8 text-white" />
                    </div>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    Acuerdo de Nivel de <span className="bg-gradient-to-br from-blue-900 via-purple-800 to-pink-600 bg-clip-text text-transparent">Servicio</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Comprometidos con la excelencia en el servicio y la disponibilidad de nuestros servicios de registro de propiedad intelectual.
                </p>
            </div>
        </section>
    );
}