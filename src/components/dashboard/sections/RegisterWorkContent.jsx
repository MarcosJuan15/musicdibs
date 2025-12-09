"use client";
import { useState } from "react";
import { Shield, FileText, User, ArrowLeft, Info, CheckCircle } from "lucide-react";

export default function RegisterWorkContent() {
    const [formData, setFormData] = useState({
        documentType: "",
        documentNumber: ""
    });

    const [verificationStep, setVerificationStep] = useState("info");

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
        console.log("Datos de verificación:", formData);
    };

    if (verificationStep === "info") {
        return (
            <div className="space-y-6">
                {/* SEO Metadata */}
                <div itemScope itemType="https://schema.org/Service" className="hidden">
                    <meta itemProp="name" content="Verificación de Identidad - Musicdibs" />
                    <meta itemProp="description" content="Verifica tu identidad para proteger tus obras musicales con validez legal. Proceso seguro con tecnología blockchain." />
                    <meta itemProp="serviceType" content="Identity Verification" />
                </div>

                {/* Header */}
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">VERIFICAR IDENTIDAD</h1>
                    <p className="text-gray-600 mt-1">Protege tus obras con una verificación legalmente válida</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Información principal */}
                    <div className="space-y-6">
                        {/* ¿Por qué es necesario? */}
                        <section aria-labelledby="why-necessary-title">
                            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                                <h2 id="why-necessary-title" className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                    <Info className="mr-2 text-blue-600 flex-shrink-0" size={20} />
                                    ¿Por qué es necesario verificar tu identidad?
                                </h2>
                                <div className="space-y-3 text-gray-700">
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
                        </section>

                        {/* ¿Cómo funciona? */}
                        <section aria-labelledby="how-it-works-title">
                            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                                <h2 id="how-it-works-title" className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                    <Shield className="mr-2 text-green-600 flex-shrink-0" size={20} />
                                    ¿Cómo funciona?
                                </h2>
                                <div className="space-y-3 text-gray-700">
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
                        </section>
                    </div>

                    {/* Panel lateral */}
                    <div className="space-y-6">
                        {/* Beneficios */}
                        <section aria-labelledby="benefits-title">
                            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                                <h2 id="benefits-title" className="text-lg font-semibold text-blue-900 mb-4">
                                    Beneficios de Verificarte
                                </h2>
                                <div className="space-y-3">
                                    {[
                                        { title: "Validez Legal", desc: "Tus registros tendrán validez ante disputas" },
                                        { title: "Protección Avanzada", desc: "Tus datos en blockchain de forma segura" },
                                        { title: "Proceso Único", desc: "Solo necesitas verificarte una vez" },
                                        { title: "Certificación Digital", desc: "Recibe tu certificado de identidad verificado" }
                                    ].map((benefit, index) => (
                                        <div key={index} className="flex items-start space-x-3">
                                            <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                                            <div>
                                                <p className="font-medium text-blue-900">{benefit.title}</p>
                                                <p className="text-sm text-blue-700 leading-relaxed">{benefit.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* Acción principal */}
                        <section aria-labelledby="verification-cta-title">
                            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm text-center">
                                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Shield className="text-white" size={24} />
                                </div>
                                <h2 id="verification-cta-title" className="text-xl font-bold text-gray-900 mb-2">
                                    ¿Listo para Verificarte?
                                </h2>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    El proceso toma solo 5 minutos y es esencial para proteger tus derechos de autor.
                                </p>
                                <button 
                                    onClick={() => setVerificationStep("form")}
                                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors font-medium text-lg"
                                    aria-label="Comenzar proceso de verificación de identidad"
                                >
                                    Comenzar Verificación
                                </button>
                                <p className="text-sm text-gray-500 mt-3">
                                    Serás redirigido a iCommunity para completar el proceso
                                </p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* SEO Metadata */}
            <div itemScope itemType="https://schema.org/Form" className="hidden">
                <meta itemProp="name" content="Formulario de Verificación de Identidad" />
                <meta itemProp="description" content="Completa tus datos para verificar tu identidad y proteger tus obras musicales." />
            </div>

            {/* Header */}
            <div>
                <button 
                    onClick={() => setVerificationStep("info")}
                    className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-4"
                    aria-label="Volver a la información de verificación"
                >
                    <ArrowLeft size={18} />
                    <span>Volver a la información</span>
                </button>
                <h1 className="text-2xl font-bold text-gray-900">VERIFICAR IDENTIDAD</h1>
                <p className="text-gray-600 mt-1">Completa tus datos para iniciar el proceso de verificación</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Formulario principal */}
                <div className="lg:col-span-2">
                    <section aria-labelledby="document-form-title">
                        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                            <h2 id="document-form-title" className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
                                <User className="mr-2 text-blue-600 flex-shrink-0" size={20} />
                                Documento de Identidad
                            </h2>
                            
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Tipo de documento */}
                                <div>
                                    <label htmlFor="documentType" className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                                        <FileText className="mr-2 flex-shrink-0" size={16} />
                                        Tipo de documento de identidad
                                    </label>
                                    <select 
                                        id="documentType"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        value={formData.documentType}
                                        onChange={(e) => handleInputChange('documentType', e.target.value)}
                                        required
                                        aria-required="true"
                                    >
                                        <option value="">Tipo de documento (DNI, INE, PASAPORTE,...)</option>
                                        {documentTypes.map((type, index) => (
                                            <option key={index} value={type}>{type}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* Número del documento */}
                                <div>
                                    <label htmlFor="documentNumber" className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                                        <FileText className="mr-2 flex-shrink-0" size={16} />
                                        Número del documento
                                    </label>
                                    <input 
                                        id="documentNumber"
                                        type="text" 
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Número del documento"
                                        value={formData.documentNumber}
                                        onChange={(e) => handleInputChange('documentNumber', e.target.value)}
                                        required
                                        aria-required="true"
                                    />
                                </div>

                                <button 
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors font-medium text-lg"
                                    aria-label="Continuar al proceso de verificación en iCommunity"
                                >
                                    CONTINUAR A iCOMMUNITY
                                </button>
                            </form>
                        </div>
                    </section>
                </div>

                {/* Panel lateral */}
                <div className="space-y-6">
                    {/* Resumen del proceso */}
                    <section aria-labelledby="process-summary-title">
                        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                            <h2 id="process-summary-title" className="text-lg font-semibold text-gray-900 mb-4">
                                Resumen del Proceso
                            </h2>
                            <div className="space-y-4">
                                {[
                                    { step: "1", title: "Completa el formulario", desc: "Proporciona tu tipo y número de documento" },
                                    { step: "2", title: "Redirección a iCommunity", desc: "Serás llevado al portal seguro de verificación" },
                                    { step: "3", title: "Verificación de identidad", desc: "Completa el proceso guiado de verificación" },
                                    { step: "4", title: "Identidad Verificada", desc: "Recibe tu certificado y protege tus obras" }
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <span className="text-blue-600 text-sm font-bold">{item.step}</span>
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-900">{item.title}</p>
                                            <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}