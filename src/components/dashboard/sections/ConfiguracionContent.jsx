"use client";
import { useState } from "react";
import { User } from "lucide-react";

export default function ConfiguracionContent({ user }) {
    const [settings, setSettings] = useState({
        email: user.email,
        notifications: true,
        newsletter: true,
        twoFactor: false,
        language: "es"
    });

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold text-gray-900">CONFIGURACIÓN</h2>
                <p className="text-gray-600">Gestiona tu cuenta y preferencias</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                    {/* Información personal */}
                    <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Información Personal</h3>
                        <div className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Nombre</label>
                                    <input 
                                        type="text" 
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        value={user.name}
                                        readOnly
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Apellidos</label>
                                    <input 
                                        type="text" 
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        value={user.lastName}
                                        readOnly
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                <input 
                                    type="email" 
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    value={settings.email}
                                    onChange={(e) => setSettings({...settings, email: e.target.value})}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Preferencias */}
                    <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Preferencias</h3>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-medium text-gray-900">Notificaciones por email</p>
                                    <p className="text-sm text-gray-600">Recibe notificaciones sobre tus registros</p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input 
                                        type="checkbox" 
                                        className="sr-only peer" 
                                        checked={settings.notifications}
                                        onChange={(e) => setSettings({...settings, notifications: e.target.checked})}
                                    />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                </label>
                            </div>

                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-medium text-gray-900">Newsletter</p>
                                    <p className="text-sm text-gray-600">Recibe novedades y ofertas especiales</p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input 
                                        type="checkbox" 
                                        className="sr-only peer" 
                                        checked={settings.newsletter}
                                        onChange={(e) => setSettings({...settings, newsletter: e.target.checked})}
                                    />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                </label>
                            </div>

                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-medium text-gray-900">Autenticación de dos factores</p>
                                    <p className="text-sm text-gray-600">Añade una capa extra de seguridad</p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input 
                                        type="checkbox" 
                                        className="sr-only peer" 
                                        checked={settings.twoFactor}
                                        onChange={(e) => setSettings({...settings, twoFactor: e.target.checked})}
                                    />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                </label>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Idioma</label>
                                <select 
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    value={settings.language}
                                    onChange={(e) => setSettings({...settings, language: e.target.value})}
                                >
                                    <option value="es">Español</option>
                                    <option value="en">English</option>
                                    <option value="pt">Português</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    {/* Tarjeta de usuario */}
                    <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm text-center">
                        <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                            <User className="text-white" size={32} />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">{user.name} {user.lastName}</h3>
                        <p className="text-gray-600 mb-4">{user.email}</p>
                        <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                            user.verified ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                            {user.verified ? 'Verificado' : 'Pendiente de verificación'}
                        </div>
                    </div>

                    {/* Acciones rápidas */}
                    <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Acciones</h3>
                        <div className="space-y-3">
                            <button className="w-full text-left px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                                Cambiar contraseña
                            </button>
                            <button className="w-full text-left px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                                Descargar datos
                            </button>
                            <button className="w-full text-left px-3 py-2 rounded-lg text-red-600 hover:bg-red-50 transition-colors">
                                Eliminar cuenta
                            </button>
                        </div>
                    </div>

                    <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                        Guardar Cambios
                    </button>
                </div>
            </div>
        </div>
    );
}