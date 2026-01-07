export default function HomePromoBanner() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-red-900 via-green-900 to-red-900 text-white py-3 px-4 text-center shadow-2xl">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
        <span className="font-bold text-sm md:text-base tracking-wider animate-pulse">
          🎄 ¡Navidad con ritmo! -20% en suscripciones con el código:
        </span>
        <div className="text-xs sm:text-sm font-bold bg-white/20 px-3 py-1 rounded-full border border-white/30 flex items-center gap-1">
          <span>❄️</span>
          <span className="text-green-300">MUSICXMAS20</span>
          <span>❄️</span>
        </div>
      </div>
    </div>
  );
}