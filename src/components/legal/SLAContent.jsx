import React from 'react';
import { Clock, AlertTriangle, CheckCircle, Phone, Mail } from 'lucide-react';

export default function SLAContent() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
        <div className="p-6 md:p-8 lg:p-12">
          
          {/* Purpose Section */}
          <section className="mb-10 md:mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 md:mb-6">
              Propósito del SLA
            </h2>
            <div className="text-gray-700 leading-relaxed">
              <p>
                El propósito de este documento es indicar el nivel de servicio en términos de 
                disponibilidad de los Servicios proporcionados por el sitio web de <strong>Musicdibs</strong>, 
                perteneciente a <strong>iCommunity Labs & Tech SL</strong>, así como describir los 
                procesos para reportar, catalogar, escalar y resolver incidentes en los servicios 
                ofrecidos y sus correspondientes tiempos de respuesta.
              </p>
            </div>
          </section>

          {/* Services Covered */}
          <section className="mb-10 md:mb-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
              Servicios Cubiertos
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Registro Descentralizado</h4>
                <p className="text-gray-700 text-sm md:text-base">Propiedad intelectual para obras audiovisuales, escritas o gráficas</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Verificación de Registros</h4>
                <p className="text-gray-700 text-sm md:text-base">Validación de autenticidad de obras registradas</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Generación de NFTs</h4>
                <p className="text-gray-700 text-sm md:text-base">Creación de tokens no fungibles para obras registradas</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Promoción</h4>
                <p className="text-gray-700 text-sm md:text-base">Difusión de obras en canales y redes sociales de la plataforma</p>
              </div>
            </div>
          </section>

          {/* SLA Categories */}
          <section className="mb-10 md:mb-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 md:mb-6 flex items-center">
              <Clock className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
              Categorías de SLA Ofrecidas
            </h3>
            
            <div className="overflow-x-auto -mx-2 md:mx-0">
              <table className="w-full border-collapse border border-gray-300 rounded-lg min-w-full">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-3 md:p-4 text-left font-semibold text-sm md:text-base">Servicio</th>
                    <th className="border border-gray-300 p-3 md:p-4 text-left font-semibold text-sm md:text-base">Anual</th>
                    <th className="border border-gray-300 p-3 md:p-4 text-left font-semibold text-sm md:text-base">Mensual</th>
                    <th className="border border-gray-300 p-3 md:p-4 text-left font-semibold text-sm md:text-base">Pago Único</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-3 md:p-4 font-medium text-sm md:text-base">Disponibilidad del Sistema</td>
                    <td className="border border-gray-300 p-3 md:p-4 text-green-600 font-semibold text-sm md:text-base">99.9%</td>
                    <td className="border border-gray-300 p-3 md:p-4 text-green-600 font-semibold text-sm md:text-base">99.5%</td>
                    <td className="border border-gray-300 p-3 md:p-4 text-blue-600 font-semibold text-sm md:text-base">99.0%</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3 md:p-4 font-medium text-sm md:text-base">Tiempo de Respuesta</td>
                    <td className="border border-gray-300 p-3 md:p-4 text-sm md:text-base">&lt; 2 segundos</td>
                    <td className="border border-gray-300 p-3 md:p-4 text-sm md:text-base">&lt; 3 segundos</td>
                    <td className="border border-gray-300 p-3 md:p-4 text-sm md:text-base">&lt; 5 segundos</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 md:p-4 font-medium text-sm md:text-base">Soporte Técnico</td>
                    <td className="border border-gray-300 p-3 md:p-4 text-sm md:text-base">24/7</td>
                    <td className="border border-gray-300 p-3 md:p-4 text-sm md:text-base">L-V 9:00-18:00</td>
                    <td className="border border-gray-300 p-3 md:p-4 text-sm md:text-base">Email únicamente</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3 md:p-4 font-medium text-sm md:text-base">Tiempo Resolución Crítica</td>
                    <td className="border border-gray-300 p-3 md:p-4 text-sm md:text-base">&lt; 1 hora</td>
                    <td className="border border-gray-300 p-3 md:p-4 text-sm md:text-base">&lt; 4 horas</td>
                    <td className="border border-gray-300 p-3 md:p-4 text-sm md:text-base">&lt; 24 horas</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Incident Management */}
          <section className="mb-10 md:mb-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 md:mb-6 flex items-center">
              <AlertTriangle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
              Gestión de Incidentes
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              <div className="text-center p-4 md:p-6 bg-red-50 rounded-lg border border-red-200">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-red-600 font-bold text-sm md:text-base">P1</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">Crítico</h4>
                <p className="text-gray-700 text-xs md:text-sm">Servicio completamente inoperativo</p>
                <p className="text-red-600 mt-2 font-medium text-xs md:text-sm">Respuesta: 15 min</p>
              </div>
              
              <div className="text-center p-4 md:p-6 bg-yellow-50 rounded-lg border border-yellow-200">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-yellow-600 font-bold text-sm md:text-base">P2</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">Alto</h4>
                <p className="text-gray-700 text-xs md:text-sm">Funcionalidad principal afectada</p>
                <p className="text-yellow-600 mt-2 font-medium text-xs md:text-sm">Respuesta: 1 hora</p>
              </div>
              
              <div className="text-center p-4 md:p-6 bg-blue-50 rounded-lg border border-blue-200">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-600 font-bold text-sm md:text-base">P3</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">Normal</h4>
                <p className="text-gray-700 text-xs md:text-sm">Impacto menor en el servicio</p>
                <p className="text-blue-600 mt-2 font-medium text-xs md:text-sm">Respuesta: 4 horas</p>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 md:mb-6">
              Contacto para Soporte
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                <Mail className="h-5 w-5 text-blue-500 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900 text-sm md:text-base">Email de Soporte</p>
                  <p className="text-gray-700 text-sm md:text-base">info@musicdibs.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                <Phone className="h-5 w-5 text-blue-500 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900 text-sm md:text-base">Teléfono de Contacto</p>
                  <p className="text-gray-700 text-sm md:text-base">+34 900 123 456</p>
                </div>
              </div>
            </div>
          </section>

          {/* Footer Note */}
          <div className="border-t border-gray-200 pt-6">
            <p className="text-sm text-gray-600">
              <strong>Nota:</strong> Este Acuerdo de Nivel de Servicio (SLA) será válido desde 
              la fecha de inicio del contrato de prestación de servicios correspondiente hasta 
              la fecha de terminación de la relación contractual para la prestación de los 
              servicios cubiertos por este documento.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}