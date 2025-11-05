import { RefreshCw, Plus, Music, CreditCard, Image, Shield, CheckCircle, Eye, Download, Share2 } from "lucide-react";

export default function ResumenContent({ user }) {
    const metrics = [
        { title: "Créditos Disponibles", value: "15", icon: CreditCard, color: "blue" },
        { title: "Obras Registradas", value: "8", icon: Music, color: "green" },
        { title: "NFTs Creados", value: "3", icon: Image, color: "purple" },
        { title: "Verificaciones", value: "12", icon: Shield, color: "orange" }
    ];

    const recentRegistrations = [
        { id: 1, title: "Summer Vibes", artist: "DJ Solar", date: "2024-01-15", status: "Completado" },
        { id: 2, title: "Midnight Dreams", artist: "Luna Echo", date: "2024-01-14", status: "Completado" },
        { id: 3, title: "Electric Pulse", artist: "Neon Wave", date: "2024-01-12", status: "Pendiente" }
    ];

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">RESUMEN DE LA CUENTA</h2>
                    <p className="text-gray-600">Bienvenido de vuelta, {user.name}</p>
                </div>
                <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    <RefreshCw size={16} />
                    <span>Actualizar</span>
                </button>
            </div>

            {/* Métricas */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {metrics.map((metric, index) => {
                    const IconComponent = metric.icon;
                    return (
                        <div key={index} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600">{metric.title}</p>
                                    <p className="text-2xl font-bold text-gray-900 mt-1">{metric.value}</p>
                                </div>
                                <div className={`p-3 rounded-full bg-${metric.color}-100`}>
                                    <IconComponent className={`text-${metric.color}-600`} size={24} />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Registrar Obra */}
                <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-gray-900">REGISTRAR OBRA</h3>
                        <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                            1 registro = 1 crédito
                        </div>
                    </div>
                    <p className="text-gray-600 mb-4">
                        ¿Tienes dudas sobre cómo registrar una obra?{" "}
                        <a href="#" className="text-blue-600 hover:underline">Ver tutorial</a>
                    </p>
                    <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center space-x-2">
                        <Plus size={20} />
                        <span>Registrar nueva obra</span>
                    </button>
                </div>

                {/* Promociona tus obras */}
                <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">PROMOCIONA TUS OBRAS</h3>
                    <p className="text-gray-600 mb-4">
                        Por tener una suscripción activa, tienes derecho a promocionarte en nuestras redes sociales.
                    </p>
                    <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-medium">
                        SOLICITAR PROMOCIÓN
                    </button>
                </div>
            </div>

            {/* Registros Recientes */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="px-6 py-4 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-gray-900">REGISTROS RECIENTES</h3>
                        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                            Ver histórico completo
                        </button>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-gray-200">
                                <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">OBRA</th>
                                <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">FECHA</th>
                                <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">ESTADO</th>
                                <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">ACCIONES</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recentRegistrations.map((registration) => (
                                <tr key={registration.id} className="border-b border-gray-200 hover:bg-gray-50">
                                    <td className="py-4 px-6">
                                        <div className="flex items-center">
                                            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                                                <Music className="text-white" size={16} />
                                            </div>
                                            <div>
                                                <p className="font-medium text-gray-900">{registration.title}</p>
                                                <p className="text-sm text-gray-500">{registration.artist}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6">
                                        <p className="text-gray-900">{registration.date}</p>
                                    </td>
                                    <td className="py-4 px-6">
                                        <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${
                                            registration.status === "Completado" 
                                                ? "bg-green-100 text-green-800" 
                                                : "bg-yellow-100 text-yellow-800"
                                        }`}>
                                            <CheckCircle size={14} className="mr-1" />
                                            {registration.status}
                                        </div>
                                    </td>
                                    <td className="py-4 px-6">
                                        <div className="flex space-x-2">
                                            <button className="p-1 hover:bg-gray-100 rounded">
                                                <Eye size={16} className="text-gray-600" />
                                            </button>
                                            <button className="p-1 hover:bg-gray-100 rounded">
                                                <Download size={16} className="text-gray-600" />
                                            </button>
                                            <button className="p-1 hover:bg-gray-100 rounded">
                                                <Share2 size={16} className="text-gray-600" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}