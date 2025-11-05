import { Music } from "lucide-react";

export default function MarketHero() {
    return (
        <section className="py-20 bg-gradient-to-br from-blue-900/10 via-purple-800/10 to-pink-600/10">
            <div className="container mx-auto px-4 text-center">
                <div className="flex justify-center mb-6">
                    <div className="p-4 rounded-full bg-gradient-to-br from-blue-900 via-purple-800 to-pink-600">
                        <Music className="h-8 w-8 text-white" />
                    </div>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    <span className="bg-gradient-to-br from-blue-900 via-purple-800 to-pink-600 bg-clip-text text-transparent">Market</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Convierte tu talento en ingresos. En nuestro Market podrás vender tus canciones y conectar con fans y sellos que buscan nueva música.
                </p>
            </div>
        </section>
    );
}