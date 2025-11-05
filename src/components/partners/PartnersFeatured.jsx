"use client";
import Link from "next/link";

export default function PartnersFeatured() {
  const featuredPartner = {
    name: "DJP Music School",
    description: "Escuela de Música Profesional",
    logo: "DJP",
    website: "https://djpmusicschool.com/",
    rating: 5,
    services: [
      "Registro de composiciones",
      "Protección de obras estudiantiles"
    ],
    benefits: [
      "Descuentos exclusivos",
      "Soporte especializado"
    ]
  };

  return (
    <section className="py-16" aria-labelledby="partner-destacado">
      <div className="container mx-auto px-4">
        <h2 id="partner-destacado" className="text-3xl font-bold text-center mb-12">
          Partner Destacado
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200" 
               itemScope 
               itemType="https://schema.org/Organization">
            <div className="md:flex">
              <div className="md:w-1/3 bg-gradient-to-br from-purple-100 to-purple-50 p-6 md:p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-xl shadow-md flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl md:text-2xl font-bold text-purple-600" itemProp="name">{featuredPartner.logo}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-1 mb-2">
                    {Array.from({ length: featuredPartner.rating }).map((_, i) => (
                      <svg key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500">Partner Destacado</p>
                </div>
              </div>
              
              <div className="md:w-2/3 p-6 md:p-8">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                  <div className="mb-4 sm:mb-0">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2" itemProp="name">
                      {featuredPartner.name}
                    </h3>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <svg className="h-4 w-4 mr-1 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {featuredPartner.description}
                    </div>
                  </div>
                  <Link 
                    href={featuredPartner.website}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors w-full sm:w-auto"
                    itemProp="url"
                    aria-label={`Visitar sitio web de ${featuredPartner.name}`}
                  >
                    <span>Visitar</span>
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Link>
                </div>
                
                <p className="text-gray-600 mb-6 text-sm md:text-base" itemProp="description">
                  {featuredPartner.name} es una institución educativa líder especializada en la formación 
                  musical profesional. A través de nuestra alianza estratégica, ofrecemos a sus 
                  estudiantes y graduados acceso privilegiado a servicios de protección de 
                  propiedad intelectual para sus creaciones musicales.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-medium text-gray-900 mb-1">Servicios Integrados:</p>
                    <ul className="text-gray-600 space-y-1">
                      {featuredPartner.services.map((service, index) => (
                        <li key={index}>• {service}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 mb-1">Beneficios:</p>
                    <ul className="text-gray-600 space-y-1">
                      {featuredPartner.benefits.map((benefit, index) => (
                        <li key={index}>• {benefit}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}