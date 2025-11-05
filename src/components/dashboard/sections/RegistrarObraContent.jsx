"use client";
import { useState } from "react";
import { Shield, FileText, User, ArrowLeft, Info, CheckCircle } from "lucide-react";

export default function RegistrarObraContent() {
    const [formData, setFormData] = useState({
        documentType: "",
        documentNumber: ""
    });

    const [verificationStep, setVerificationStep] = useState("info"); // "info" or "form"

    const documentTypes = [
        "DNI",
        "INE", 
        "PASAPORTE",
        "LICENCIA DE CONDUCIR",
        "OTRO DOCUMENTO OFICIAL"
    ];

    const handleInputChange = (field, value) => {
        setFormData({...formData, [field]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica para enviar la verificación
        console.log("Datos de verificación:", formData);
        // Aquí normalmente redirigiríamos a iCommunity
    };

    if (verificationStep === "info") {
        return (
            <div className="space-y-4 sm:space-y-6">
                {/* Header */}
                <div className="px-2 sm:px-0">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900">VERIFICAR IDENTIDAD</h2>
                    <p className="text-sm sm:text-base text-gray-600">Protege tus obras con una verificación legalmente válida</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                    {/* Información principal - Columna izquierda */}
                    <div className="space-y-4 sm:space-y-6">
                        {/* ¿Por qué es necesario? */}
                        <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6 shadow-sm">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3 sm:mb-4 flex items-center">
                                <Info className="mr-2 text-blue-600 flex-shrink-0" size={20} />
                                ¿Por qué es necesario verificar tu identidad?
                            </h3>
                            <div className="space-y-3 text-gray-700 text-sm sm:text-base">
                                <p className="leading-relaxed">
                                    Igual que cuando vas a un notario a firmar un documento éste te solicita tu documento 
                                    de identidad para verificarla, en Musicdibs llevamos a cabo un procedimiento similar.
                                </p>
                                <p className="leading-relaxed">
                                    De esta forma tus registros de obras podrán tener validez legal, ya que irán ligadas 
                                    a tu identidad previamente verificada.
                                </p>
                            </div>
                        </div>

                        {/* ¿Cómo funciona? */}
                        <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6 shadow-sm">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3 sm:mb-4 flex items-center">
                                <Shield className="mr-2 text-green-600 flex-shrink-0" size={20} />
                                ¿Cómo funciona?
                            </h3>
                            <div className="space-y-3 text-gray-700 text-sm sm:text-base">
                                <p className="leading-relaxed">
                                    Para verificar tu identidad te redirigiremos a nuestro sitio web de iCommunity, 
                                    que se encargará de todo el proceso de verificación.
                                </p>
                                <p className="leading-relaxed">
                                    Una vez terminado, tu identidad digital y tu clave de firma serán encriptadas y 
                                    guardadas de manera segura en un sistema de almacenamiento descentralizado y 
                                    protegido por tecnología blockchain, que asegura la total disponibilidad de las mismas.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Panel lateral con beneficios y acción - Columna derecha */}
                    <div className="space-y-4 sm:space-y-6">
                        {/* Beneficios de la verificación */}
                        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 sm:p-6">
                            <h3 className="text-lg font-semibold text-blue-900 mb-3 sm:mb-4">Beneficios de Verificarte</h3>
                            <div className="space-y-3">
                                <div className="flex items-start space-x-2 sm:space-x-3">
                                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                                    <div className="min-w-0">
                                        <p className="font-medium text-blue-900 text-sm sm:text-base">Validez Legal</p>
                                        <p className="text-xs sm:text-sm text-blue-700 leading-relaxed">Tus registros tendrán validez ante disputas</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-2 sm:space-x-3">
                                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                                    <div className="min-w-0">
                                        <p className="font-medium text-blue-900 text-sm sm:text-base">Protección Avanzada</p>
                                        <p className="text-xs sm:text-sm text-blue-700 leading-relaxed">Tus datos en blockchain de forma segura</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-2 sm:space-x-3">
                                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                                    <div className="min-w-0">
                                        <p className="font-medium text-blue-900 text-sm sm:text-base">Proceso Único</p>
                                        <p className="text-xs sm:text-sm text-blue-700 leading-relaxed">Solo necesitas verificarte una vez</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-2 sm:space-x-3">
                                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                                    <div className="min-w-0">
                                        <p className="font-medium text-blue-900 text-sm sm:text-base">Certificación Digital</p>
                                        <p className="text-xs sm:text-sm text-blue-700 leading-relaxed">Recibe tu certificado de identidad verificado</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Acción principal */}
                        <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6 shadow-sm text-center">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                                <Shield className="text-white" size={24} />
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">¿Listo para Verificarte?</h3>
                            <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
                                El proceso toma solo 5 minutos y es esencial para proteger tus derechos de autor.
                            </p>
                            <button 
                                onClick={() => setVerificationStep("form")}
                                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors font-medium text-base sm:text-lg"
                            >
                                Comenzar Verificación
                            </button>
                            <p className="text-xs text-gray-500 mt-2 sm:mt-3">
                                Serás redirigido a iCommunity para completar el proceso
                            </p>
                        </div>

                        {/* Información de seguridad */}
                        <div className="bg-green-50 border border-green-200 rounded-lg p-3 sm:p-4">
                            <h4 className="font-semibold text-green-900 mb-2 flex items-center text-sm sm:text-base">
                                <Shield size={16} className="mr-2 flex-shrink-0" />
                                Seguridad Garantizada
                            </h4>
                            <p className="text-xs sm:text-sm text-green-800 leading-relaxed">
                                Tus datos están protegidos con encriptación de grado bancario y almacenamiento 
                                descentralizado en blockchain.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Paso del formulario
    return (
        <div className="space-y-4 sm:space-y-6">
            {/* Header con botón volver */}
            <div className="px-2 sm:px-0">
                <button 
                    onClick={() => setVerificationStep("info")}
                    className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-3 sm:mb-4 text-sm sm:text-base"
                >
                    <ArrowLeft size={18} />
                    <span>Volver a la información</span>
                </button>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">VERIFICAR IDENTIDAD</h2>
                <p className="text-sm sm:text-base text-gray-600">Completa tus datos para iniciar el proceso de verificación</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {/* Formulario principal */}
                <div className="lg:col-span-2">
                    <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6 shadow-sm">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4 sm:mb-6 flex items-center">
                            <User className="mr-2 text-blue-600 flex-shrink-0" size={20} />
                            Documento de Identidad
                        </h3>
                        
                        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                            {/* Tipo de documento */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                                    <FileText className="mr-2 flex-shrink-0" size={16} />
                                    Tipo de documento de identidad
                                </label>
                                <select 
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                                    value={formData.documentType}
                                    onChange={(e) => handleInputChange('documentType', e.target.value)}
                                    required
                                >
                                    <option value="">Tipo de documento (DNI, INE, PASAPORTE,...)</option>
                                    {documentTypes.map((type, index) => (
                                        <option key={index} value={type}>{type}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Número del documento */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                                    <FileText className="mr-2 flex-shrink-0" size={16} />
                                    Número del documento
                                </label>
                                <input 
                                    type="text" 
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                                    placeholder="Número del documento"
                                    value={formData.documentNumber}
                                    onChange={(e) => handleInputChange('documentNumber', e.target.value)}
                                    required
                                />
                            </div>

                            {/* Información del proceso */}
                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 sm:p-4">
                                <div className="flex items-start space-x-2 sm:space-x-3">
                                    <Info size={18} className="text-blue-600 mt-0.5 flex-shrink-0" />
                                    <div className="min-w-0">
                                        <p className="text-sm text-blue-800 font-semibold mb-1">
                                            Proceso de Verificación
                                        </p>
                                        <p className="text-xs sm:text-sm text-blue-800 leading-relaxed">
                                            Después de enviar este formulario, serás redirigido a iCommunity 
                                            donde completarás el proceso de verificación de identidad. 
                                            Todo el proceso está protegido y encriptado.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <button 
                                type="submit"
                                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors font-medium text-base sm:text-lg"
                            >
                                CONTINUAR A iCOMMUNITY
                            </button>
                        </form>
                    </div>
                </div>

                {/* Panel lateral */}
                <div className="space-y-4 sm:space-y-6">
                    {/* Resumen del proceso */}
                    <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6 shadow-sm">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Resumen del Proceso</h3>
                        <div className="space-y-3 sm:space-y-4">
                            <div className="flex items-start space-x-2 sm:space-x-3">
                                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <span className="text-blue-600 text-xs sm:text-sm font-bold">1</span>
                                </div>
                                <div className="min-w-0">
                                    <p className="font-medium text-gray-900 text-sm sm:text-base">Completa el formulario</p>
                                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">Proporciona tu tipo y número de documento</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-2 sm:space-x-3">
                                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <span className="text-blue-600 text-xs sm:text-sm font-bold">2</span>
                                </div>
                                <div className="min-w-0">
                                    <p className="font-medium text-gray-900 text-sm sm:text-base">Redirección a iCommunity</p>
                                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">Serás llevado al portal seguro de verificación</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-2 sm:space-x-3">
                                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <span className="text-blue-600 text-xs sm:text-sm font-bold">3</span>
                                </div>
                                <div className="min-w-0">
                                    <p className="font-medium text-gray-900 text-sm sm:text-base">Verificación de identidad</p>
                                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">Completa el proceso guiado de verificación</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-2 sm:space-x-3">
                                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <span className="text-blue-600 text-xs sm:text-sm font-bold">4</span>
                                </div>
                                <div className="min-w-0">
                                    <p className="font-medium text-gray-900 text-sm sm:text-base">Identidad Verificada</p>
                                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">Recibe tu certificado y protege tus obras</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Información de seguridad */}
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3 sm:p-4">
                        <h4 className="font-semibold text-green-900 mb-2 text-sm sm:text-base">Tu Seguridad es Primero</h4>
                        <ul className="text-xs text-green-800 space-y-1">
                            <li className="leading-relaxed">• Datos encriptados de extremo a extremo</li>
                            <li className="leading-relaxed">• Almacenamiento descentralizado en blockchain</li>
                            <li className="leading-relaxed">• Cumplimiento con normativas de protección de datos</li>
                            <li className="leading-relaxed">• Sin almacenamiento de documentos originales</li>
                        </ul>
                    </div>

                    {/* Botón volver al panel general */}
                    <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium text-sm sm:text-base flex items-center justify-center space-x-2">
                        <ArrowLeft size={16} />
                        <span>Volver al panel general</span>
                    </button>
                </div>
            </div>
        </div>
    );
}