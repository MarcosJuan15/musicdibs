'use client';

export default function ShopContent() {
  const packages = [
    { amount: "1.000", price: "120,00", bonus: null },
    { amount: "2.000", price: "240,00", bonus: null },
    { amount: "3.000", price: "360,00", bonus: null },
    { amount: "4.000", price: "480,00", bonus: null },
    { amount: "5.000", price: "600,00", bonus: null },
    { amount: "10.000", price: "1.200,00", bonus: "10%" },
    { amount: "20.000", price: "2.400,00", bonus: "15%" },
    { amount: "100.000", price: "12.000,00", bonus: "20%" },
  ];

  const handleAddToCart = (pkg) => {
    console.log('Añadiendo al carrito:', pkg);
    // Aquí iría la lógica para añadir al carrito
  };

  const goToCart = () => {
    console.log('Ir al carrito');
    // Aquí iría la navegación al carrito
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">

      {/* Bonus Section */}
      <section className="pb-12 pt-16 px-4">
        <div className="container mx-auto">
          <div className="p-8 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 rounded-xl border border-blue-200">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">🎁</span>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                BONUS DE COMPRA
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                <p className="text-gray-700">
                  En compras iguales o superiores a <span className="font-bold text-blue-600">20.000 DIBS</span> obtendrás un{" "}
                  <span className="font-bold text-green-600">10% extra</span> en token DIBS.
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-purple-600 mt-2 flex-shrink-0" />
                <p className="text-gray-700">
                  En compras iguales o superiores a <span className="font-bold text-purple-600">100.000 DIBS</span> obtendrás un{" "}
                  <span className="font-bold text-green-600">15% extra</span> en token DIBS.
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-pink-600 mt-2 flex-shrink-0" />
                <p className="text-gray-700">
                  En compras iguales o superiores a <span className="font-bold text-pink-600">200.000 DIBS</span> obtendrás un{" "}
                  <span className="font-bold text-green-600">20% extra</span> en token DIBS.
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                <p className="text-gray-700">
                  Los DIBS de bonus estarán disponibles en su cuenta en hasta{" "}
                  <span className="font-bold">72 horas</span> de la confirmación de la compra.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white rounded-xl border border-gray-200"
              >
                {/* Decorative gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 transition-all duration-300" />
                
                {/* Bonus Badge */}
                {pkg.bonus && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-gradient-to-r from-green-500 to-green-600 text-white font-bold px-3 py-1 rounded-full text-sm">
                      +{pkg.bonus} BONUS
                    </span>
                  </div>
                )}

                <div className="relative p-6 flex flex-col items-center text-center h-full">
                  {/* Amount Circle */}
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1 mb-6">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                      <div>
                        <p className="text-3xl font-bold text-gray-900">
                          {pkg.amount.split('.')[0]}K
                        </p>
                        <p className="text-sm text-gray-600">DIBS</p>
                      </div>
                    </div>
                  </div>

                  {/* Package Details */}
                  <div className="mb-6">
                    <p className="text-sm text-gray-500 mb-2">
                      {pkg.amount} DIBS
                    </p>
                    <p className="text-3xl font-bold text-gray-900 mb-1">
                      {pkg.price} €
                    </p>
                    <p className="text-xs text-gray-500">
                      Impuestos incluídos
                    </p>
                  </div>

                  {/* Buy Button */}
                  <button 
                    onClick={() => handleAddToCart(pkg)}
                    className="w-full mt-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 text-white py-3 px-4 rounded-lg font-medium transition-all duration-300"
                  >
                    <span className="mr-2">🛒</span>
                    Comprar
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Important Notice */}
          <div className="mt-12 p-6 bg-gray-100 rounded-xl border border-gray-300">
            <p className="text-center text-gray-600">
              <span className="font-semibold text-gray-900">ATENCIÓN:</span> Las compras con criptomonedas pueden tardar hasta{" "}
              <span className="font-semibold text-blue-600">48 horas</span> en confirmarse.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}