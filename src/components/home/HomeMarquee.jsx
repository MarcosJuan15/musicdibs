export default function HomeMarquee() {
    return (
        <div className="bg-gradient-to-r from-blue-600 to-pink-600 text-white py-3 overflow-hidden relative">
            <div className="marquee-container whitespace-nowrap">
                <div className="marquee-content animate-marquee inline-flex">
                    <span className="mx-8 font-semibold">🎵 DISTRIBUYE TU MÚSICA EN +150 PLATAFORMAS 🎵</span>
                    <span className="mx-8 font-semibold">🔥 MANTÉN EL 100% DE TUS REGALÍAS - SIN COMISIONES OCULTAS 🔥</span>
                    <span className="mx-8 font-semibold">⚡ TU MÚSICA ONLINE EN 24-48 HORAS ⚡</span>
                    <span className="mx-8 font-semibold">💫 PLAN PLUS: 59,90€/AÑO - HASTA 100 REGISTROS 💫</span>
                    
                    {/* Duplicado para el efecto infinito */}
                    <span className="mx-8 font-semibold">🎵 DISTRIBUYE TU MÚSICA EN +150 PLATAFORMAS 🎵</span>
                    <span className="mx-8 font-semibold">🔥 MANTÉN EL 100% DE TUS REGALÍAS - SIN COMISIONES OCULTAS 🔥</span>
                    <span className="mx-8 font-semibold">⚡ TU MÚSICA ONLINE EN 24-48 HORAS ⚡</span>
                    <span className="mx-8 font-semibold">💫 PLAN PLUS: 59,90€/AÑO - HASTA 100 REGISTROS 💫</span>
                </div>
            </div>
            
            <style jsx>{`
                @keyframes marquee {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                .animate-marquee {
                    animation: marquee 40s linear infinite;
                }
                .marquee-container {
                    width: 100%;
                    overflow: hidden;
                }
                .marquee-content {
                    display: inline-flex;
                    white-space: nowrap;
                }
            `}</style>
        </div>
    );
}