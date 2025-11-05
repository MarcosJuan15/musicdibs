export default function VerificationInfo() {
  const features = [
    {
      title: "Huella Digital Única",
      description: "Analizamos la huella digital única de tu archivo mediante algoritmos criptográficos"
    },
    {
      title: "Base de Datos Blockchain",
      description: "Comparamos con nuestra base de datos descentralizada de obras registradas"
    },
    {
      title: "Resultado Inmediato",
      description: "Obten un resultado instantáneo sobre el estado de registro de tu obra"
    },
    {
      title: "Múltiples Formatos",
      description: "Soporte para audio, texto y documentos en los formatos más comunes"
    }
  ];

  return (
    <section className="py-16 bg-gray-50" aria-labelledby="como-funciona">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 id="como-funciona" className="text-3xl font-bold text-center mb-12">
            ¿Cómo funciona la verificación?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" role="list" aria-label="Características del verificador">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
                role="listitem"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold text-purple-600">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Información adicional */}
          <div className="mt-12 bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Información importante
            </h3>
            <div className="space-y-3 text-gray-600">
              <p className="flex items-start">
                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" aria-hidden="true"></span>
                La verificación solo funciona con obras registradas en MusicDIBS
              </p>
              <p className="flex items-start">
                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" aria-hidden="true"></span>
                El proceso es completamente seguro y no almacena tus archivos
              </p>
              <p className="flex items-start">
                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" aria-hidden="true"></span>
                Los resultados son verificables en cualquier momento mediante blockchain
              </p>
              <p className="flex items-start">
                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" aria-hidden="true"></span>
                Si tu obra no está registrada, puedes protegerla inmediatamente
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}