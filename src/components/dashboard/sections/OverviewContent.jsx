import { RefreshCw, Music, CreditCard, CheckCircle, Eye, Download, Share2 } from "lucide-react";

export default function OverviewContent({ user }) {
    const metrics = [
        { title: "Obras Registradas", value: "8", icon: Music, color: "green" },
        { title: "Registros Pendientes", value: "2", icon: CheckCircle, color: "orange" },
        { title: "Créditos Disponibles", value: "15", icon: CreditCard, color: "blue" }
    ];

    const recentRegistrations = [
        { id: 1, title: "Summer Vibes", artist: "DJ Solar", date: "2024-01-15", status: "Completado" },
        { id: 2, title: "Midnight Dreams", artist: "Luna Echo", date: "2024-01-14", status: "Completado" },
        { id: 3, title: "Electric Pulse", artist: "Neon Wave", date: "2024-01-12", status: "Pendiente" }
    ];

    return (
        <div className="space-y-6">
            {/* SEO Metadata */}
            <div itemScope itemType="https://schema.org/Dashboard" className="hidden">
                <meta itemProp="name" content="Resumen de Cuenta - Musicdibs Dashboard" />
                <meta itemProp="description" content="Panel de control de Musicdibs. Gestiona tus obras registradas, créditos disponibles y registros pendientes." />
                <div itemProp="author" itemScope itemType="https://schema.org/Person">
                    <meta itemProp="name" content={user?.name || 'Usuario Musicdibs'} />
                </div>
            </div>

            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">RESUMEN DE LA CUENTA</h1>
                    <p className="text-gray-600 mt-1">Bienvenido de vuelta, {user?.name || 'Usuario'}</p>
                </div>
                <button 
                    className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    aria-label="Actualizar datos del dashboard"
                >
                    <RefreshCw size={16} />
                    <span>Actualizar</span>
                </button>
            </div>

            {/* Métricas principales */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {metrics.map((metric, index) => {
                    const IconComponent = metric.icon;
                    const colorClasses = {
                        blue: "bg-blue-100 text-blue-600",
                        green: "bg-green-100 text-green-600",
                        orange: "bg-orange-100 text-orange-600",
                        purple: "bg-purple-100 text-purple-600"
                    };
                    
                    return (
                        <div 
                            key={index} 
                            className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow"
                            itemScope
                            itemType="https://schema.org/QuantitativeValue"
                        >
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600" itemProp="name">{metric.title}</p>
                                    <p className="text-2xl font-bold text-gray-900 mt-1" itemProp="value">{metric.value}</p>
                                </div>
                                <div className={`p-3 rounded-full ${colorClasses[metric.color]}`} aria-hidden="true">
                                    <IconComponent size={24} />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Registros Recientes */}
            <section aria-labelledby="recent-registrations-title">
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                    <div className="px-6 py-4 border-b border-gray-200">
                        <div className="flex items-center justify-between">
                            <h2 id="recent-registrations-title" className="text-lg font-semibold text-gray-900">
                                REGISTROS RECIENTES
                            </h2>
                            <button 
                                className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                                aria-label="Ver histórico completo de registros"
                            >
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
                                    <tr 
                                        key={registration.id} 
                                        className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                                        itemScope
                                        itemType="https://schema.org/MusicRecording"
                                    >
                                        <td className="py-4 px-6">
                                            <div className="flex items-center">
                                                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                                                    <Music className="text-white" size={16} />
                                                </div>
                                                <div>
                                                    <p className="font-medium text-gray-900" itemProp="name">{registration.title}</p>
                                                    <p className="text-sm text-gray-500" itemProp="byArtist">{registration.artist}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-4 px-6">
                                            <p className="text-gray-900" itemProp="dateCreated">{registration.date}</p>
                                        </td>
                                        <td className="py-4 px-6">
                                            <div 
                                                className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${
                                                    registration.status === "Completado" 
                                                        ? "bg-green-100 text-green-800" 
                                                        : "bg-yellow-100 text-yellow-800"
                                                }`}
                                                aria-label={`Estado: ${registration.status}`}
                                            >
                                                <CheckCircle size={14} className="mr-1" />
                                                {registration.status}
                                            </div>
                                        </td>
                                        <td className="py-4 px-6">
                                            <div className="flex space-x-2">
                                                <button 
                                                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                                                    aria-label={`Ver detalles de ${registration.title}`}
                                                >
                                                    <Eye size={16} className="text-gray-600" />
                                                </button>
                                                <button 
                                                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                                                    aria-label={`Descargar certificado de ${registration.title}`}
                                                >
                                                    <Download size={16} className="text-gray-600" />
                                                </button>
                                                <button 
                                                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                                                    aria-label={`Compartir ${registration.title}`}
                                                >
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
            </section>
        </div>
    );
}