// components/dashboard/sections/SettingsContent.jsx
"use client";
import { useState } from "react";
import { User, Lock, CreditCard, Trash2, Shield, Bell, Mail } from "lucide-react";

export default function SettingsContent({ user }) {
    const [activeSection, setActiveSection] = useState("cuenta");
    const [formData, setFormData] = useState({
        // Sección Cuenta
        username: user.username || "marcosmartos",
        nombre: user.name,
        apellidos: user.lastName,
        email: user.email,
        
        // Sección Contraseña
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
        
        // Sección Suscripción
        plan: "pro",
        newsletter: true,
        notifications: true,
        
        // Sección Borrar Cuenta
        deletePassword: "",
        confirmDelete: false
    });

    const menuItems = [
        { id: "cuenta", label: "Cuenta", icon: User },
        { id: "contrasena", label: "Contraseña", icon: Lock },
        { id: "suscripcion", label: "Suscripción", icon: CreditCard },
        { id: "eliminar", label: "Eliminar Cuenta", icon: Trash2 }
    ];

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleSaveChanges = (section) => {
        console.log(`Guardando cambios de ${section}:`, formData);
        // Aquí iría la lógica para guardar en tu API
    };

    return (
        <div 
            className="space-y-6 pb-8"
            itemScope
            itemType="https://schema.org/WebPage"
        >
            {/* Metadatos SEO */}
            <meta itemProp="name" content="Configuración - Panel de Control Musicdibs" />
            <meta itemProp="description" content="Gestiona tu cuenta, contraseña, suscripción y configuración en Musicdibs. Panel de control para artistas musicales." />
            <div itemScope itemType="https://schema.org/Person" className="hidden">
                <meta itemProp="name" content={user.name} />
                <meta itemProp="email" content={user.email} />
            </div>

            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold text-gray-900" itemProp="headline">
                    CONFIGURACIÓN
                </h1>
                <p className="text-gray-600">Gestiona tu cuenta y preferencias</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Menú lateral */}
                <div className="lg:col-span-1">
                    <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
                        <nav className="space-y-2">
                            {menuItems.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <button
                                        key={item.id}
                                        onClick={() => setActiveSection(item.id)}
                                        className={`w-full flex items-center space-x-3 px-3 py-3 rounded-lg text-left transition-all duration-200 ${
                                            activeSection === item.id
                                                ? 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border border-blue-200 shadow-sm'
                                                : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                                        }`}
                                    >
                                        <Icon size={20} className="flex-shrink-0" />
                                        <span className="font-medium text-sm">{item.label}</span>
                                    </button>
                                );
                            })}
                        </nav>
                    </div>
                </div>

                {/* Contenido principal */}
                <div className="lg:col-span-3 space-y-6">
                    {/* Sección: Cuenta */}
                    {activeSection === "cuenta" && (
                        <div 
                            className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm"
                            itemScope
                            itemType="https://schema.org/Person"
                        >
                            <div className="flex items-center space-x-3 mb-6">
                                <User className="text-blue-600" size={24} />
                                <h2 className="text-xl font-semibold text-gray-900">Información de la Cuenta</h2>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Nombre de usuario *
                                    </label>
                                    <input 
                                        type="text" 
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        value={formData.username}
                                        onChange={(e) => handleInputChange('username', e.target.value)}
                                        itemProp="alternateName"
                                    />
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Correo electrónico *
                                    </label>
                                    <input 
                                        type="email" 
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        value={formData.email}
                                        onChange={(e) => handleInputChange('email', e.target.value)}
                                        itemProp="email"
                                    />
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Nombre *
                                    </label>
                                    <input 
                                        type="text" 
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        value={formData.nombre}
                                        onChange={(e) => handleInputChange('nombre', e.target.value)}
                                        itemProp="givenName"
                                    />
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Apellidos *
                                    </label>
                                    <input 
                                        type="text" 
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        value={formData.apellidos}
                                        onChange={(e) => handleInputChange('apellidos', e.target.value)}
                                        itemProp="familyName"
                                    />
                                </div>
                            </div>
                            
                            <div className="mt-6">
                                <button 
                                    onClick={() => handleSaveChanges('cuenta')}
                                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                                >
                                    Guardar Cambios
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Sección: Contraseña */}
                    {activeSection === "contrasena" && (
                        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                            <div className="flex items-center space-x-3 mb-6">
                                <Lock className="text-blue-600" size={24} />
                                <h2 className="text-xl font-semibold text-gray-900">Cambiar Contraseña</h2>
                            </div>
                            
                            <div className="space-y-4 max-w-md">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Contraseña actual *
                                    </label>
                                    <input 
                                        type="password" 
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        value={formData.currentPassword}
                                        onChange={(e) => handleInputChange('currentPassword', e.target.value)}
                                        placeholder="Introduce tu contraseña actual"
                                    />
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Nueva contraseña *
                                    </label>
                                    <input 
                                        type="password" 
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        value={formData.newPassword}
                                        onChange={(e) => handleInputChange('newPassword', e.target.value)}
                                        placeholder="Mínimo 8 caracteres"
                                    />
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Confirmar nueva contraseña *
                                    </label>
                                    <input 
                                        type="password" 
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        value={formData.confirmPassword}
                                        onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                                        placeholder="Repite la nueva contraseña"
                                    />
                                </div>
                            </div>
                            
                            <div className="mt-6">
                                <button 
                                    onClick={() => handleSaveChanges('contraseña')}
                                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                                >
                                    Cambiar Contraseña
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Sección: Suscripción */}
                    {activeSection === "suscripcion" && (
                        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                            <div className="flex items-center space-x-3 mb-6">
                                <CreditCard className="text-blue-600" size={24} />
                                <h2 className="text-xl font-semibold text-gray-900">Suscripción y Notificaciones</h2>
                            </div>
                            
                            <div className="space-y-6">
                                {/* Plan actual */}
                                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 border border-blue-200">
                                    <h3 className="font-semibold text-gray-900 mb-2">Plan Actual</h3>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-2xl font-bold text-blue-600">PRO</p>
                                            <p className="text-sm text-gray-600">Acceso completo a todas las funciones</p>
                                        </div>
                                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                                            Activo
                                        </span>
                                    </div>
                                </div>
                                
                                {/* Preferencias de notificaciones */}
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                                        <div className="flex items-center space-x-3">
                                            <Mail className="text-gray-600" size={20} />
                                            <div>
                                                <p className="font-medium text-gray-900">Newsletter</p>
                                                <p className="text-sm text-gray-600">Recibe novedades y ofertas especiales</p>
                                            </div>
                                        </div>
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input 
                                                type="checkbox" 
                                                className="sr-only peer" 
                                                checked={formData.newsletter}
                                                onChange={(e) => handleInputChange('newsletter', e.target.checked)}
                                            />
                                            <div className="w-11 h-6 bg-gray-200 peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                        </label>
                                    </div>
                                    
                                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                                        <div className="flex items-center space-x-3">
                                            <Bell className="text-gray-600" size={20} />
                                            <div>
                                                <p className="font-medium text-gray-900">Notificaciones por email</p>
                                                <p className="text-sm text-gray-600">Recibe notificaciones sobre tus registros</p>
                                            </div>
                                        </div>
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input 
                                                type="checkbox" 
                                                className="sr-only peer" 
                                                checked={formData.notifications}
                                                onChange={(e) => handleInputChange('notifications', e.target.checked)}
                                            />
                                            <div className="w-11 h-6 bg-gray-200 peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                        </label>
                                    </div>
                                </div>
                                
                                <div className="mt-6">
                                    <button 
                                        onClick={() => handleSaveChanges('suscripción')}
                                        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                                    >
                                        Guardar Preferencias
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Sección: Eliminar Cuenta */}
                    {activeSection === "eliminar" && (
                        <div className="bg-white rounded-xl border border-red-200 p-6 shadow-sm">
                            <div className="flex items-center space-x-3 mb-6">
                                <Trash2 className="text-red-600" size={24} />
                                <h2 className="text-xl font-semibold text-red-900">Eliminar Cuenta</h2>
                            </div>
                            
                            <div className="space-y-6">
                                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                                    <div className="flex items-start space-x-3">
                                        <Shield className="text-red-600 mt-0.5" size={20} />
                                        <div>
                                            <h3 className="font-semibold text-red-900 mb-2">Advertencia Importante</h3>
                                            <p className="text-red-700 text-sm">
                                                ¿Seguro que quieres cancelar y borrar tu cuenta? Esto cancelará y borrará todos los datos de tu cuenta. Para hacerlo, introduce a continuación tu contraseña.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="space-y-4 max-w-md">
                                    <div>
                                        <label className="block text-sm font-medium text-red-700 mb-2">
                                            Contraseña *
                                        </label>
                                        <input 
                                            type="password" 
                                            className="w-full px-3 py-2 border border-red-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                                            value={formData.deletePassword}
                                            onChange={(e) => handleInputChange('deletePassword', e.target.value)}
                                            placeholder="Introduce tu contraseña para confirmar"
                                        />
                                    </div>
                                    
                                    <div className="flex items-center space-x-3 p-4 border border-red-200 rounded-lg bg-red-50">
                                        <input 
                                            type="checkbox" 
                                            id="confirmDelete"
                                            className="w-4 h-4 text-red-600 border-red-300 rounded focus:ring-red-500"
                                            checked={formData.confirmDelete}
                                            onChange={(e) => handleInputChange('confirmDelete', e.target.checked)}
                                        />
                                        <label htmlFor="confirmDelete" className="text-sm font-medium text-red-700">
                                            Entiendo que esta acción es irreversible y todos mis datos serán eliminados permanentemente.
                                        </label>
                                    </div>
                                </div>
                                
                                <div className="flex space-x-4">
                                    <button 
                                        onClick={() => handleSaveChanges('eliminar cuenta')}
                                        disabled={!formData.confirmDelete || !formData.deletePassword}
                                        className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-medium disabled:bg-red-300 disabled:cursor-not-allowed"
                                    >
                                        Eliminar Cuenta Permanentemente
                                    </button>
                                    
                                    <button 
                                        onClick={() => setActiveSection('cuenta')}
                                        className="bg-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-400 transition-colors font-medium"
                                    >
                                        Cancelar
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}