"use client";
export default function PartnersWhy() {
  const benefits = [
    {
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      ),
      title: "Red Global",
      description: "Acceso a nuestra red mundial de creadores, artistas y profesionales de la industria musical y audiovisual."
    },
    {
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      ),
      title: "Tecnología Blockchain",
      description: "Integra la tecnología blockchain más avanzada para la protección de propiedad intelectual en tu organización."
    },
    {
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
      ),
      title: "Soporte Dedicado",
      description: "Cuenta con un equipo especializado que te acompañará en cada paso de la integración y operación."
    }
  ];

  return (
    <section className="py-16 bg-gray-50" aria-labelledby="por-que-partners">
      <div className="container mx-auto px-4">
        <h2 id="por-que-partners" className="text-3xl font-bold text-center mb-12">
          ¿Por qué ser Partner de MusicDIBS?
        </h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8" role="list" aria-label="Beneficios de ser partner">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-xl border border-gray-200 shadow-lg mx-2 sm:mx-0"
                role="listitem"
                itemScope
                itemType="https://schema.org/Service"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-6 w-6 md:h-8 md:w-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {benefit.icon}
                  </svg>
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3 md:mb-4" itemProp="name">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base" itemProp="description">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}