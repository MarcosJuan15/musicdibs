// components/dashboard/Sidebar.jsx
"use client";
import { 
    BarChart3, FileText, Megaphone, Image, Shield, 
    ShoppingCart, Settings, Zap, X, Home 
} from "lucide-react";
import Link from "next/link";

// IDs en inglés (internos) pero labels en español (visibles)
const sections = [
    { 
        id: "overview", 
        label: "Resumen de la cuenta", 
        icon: BarChart3,
        description: "Vista general de tu cuenta y estadísticas"
    },
    { 
        id: "register", 
        label: "Registrar obra", 
        icon: FileText,
        description: "Protege tus derechos de autor registrando tus obras"
    },
    { 
        id: "promote", 
        label: "Promociona tus obras", 
        icon: Megaphone,
        description: "Herramientas de marketing y promoción para artistas"
    },
    { 
        id: "nft", 
        label: "Crea tu NFT", 
        icon: Image,
        description: "Convierte tu música en tokens no fungibles únicos"
    },
    { 
        id: "verify", 
        label: "Verificar autenticidad", 
        icon: Shield,
        description: "Sistema de verificación de obras y derechos"
    },
    { 
        id: "store", 
        label: "Tienda digital", 
        icon: ShoppingCart,
        description: "Marketplace para vender tu música y merchandising"
    },
    { 
        id: "settings", 
        label: "Configuración", 
        icon: Settings,
        description: "Ajustes de cuenta y preferencias de usuario"
    }
];

export default function Sidebar({ activeSection, setActiveSection, sidebarOpen, setSidebarOpen }) {
    const user = { credits: 15 };

    const handleMenuItemClick = (sectionId) => {
        setActiveSection(sectionId);
        if (window.innerWidth < 1024) {
            setSidebarOpen(false);
        }
    };

    return (
        <>
            {sidebarOpen && (
                <div 
                    className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={() => setSidebarOpen(false)}
                    aria-hidden="true"
                />
            )}

            <aside 
                id="sidebar-navigation"
                className={`
                    fixed inset-y-0 left-0 z-50
                    w-64 bg-white border-r border-gray-200
                    transform transition-transform duration-300 ease-in-out
                    lg:translate-x-0 lg:static lg:inset-0
                    ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
                `}
                role="navigation"
                aria-label="Navegación principal del dashboard"
            >
                <div className="flex flex-col h-full p-4">
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
                        <Link
                            href="/"
                            className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors"
                            aria-label="Volver a la página principal de Musicdibs"
                        >
                            <Home size={20} />
                            <span className="font-medium">Volver al Home</span>
                        </Link>
                        <button 
                            onClick={() => setSidebarOpen(false)}
                            className="lg:hidden p-1 rounded-lg hover:bg-gray-100 transition-colors"
                            aria-label="Cerrar menú de navegación"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    <div className="space-y-1 flex-1">
                        {sections.map((section) => {
                            const IconComponent = section.icon;
                            const isActive = activeSection === section.id;
                            
                            return (
                                <button
                                    key={section.id}
                                    onClick={() => handleMenuItemClick(section.id)}
                                    className={`
                                        w-full flex items-center space-x-3 px-3 py-3 rounded-lg text-left transition-all duration-200
                                        ${isActive
                                            ? 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border border-blue-200 shadow-sm'
                                            : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                                        }
                                    `}
                                    aria-current={isActive ? "page" : undefined}
                                >
                                    <IconComponent size={20} className="flex-shrink-0" />
                                    <span className="font-medium text-sm sm:text-base">
                                        {section.label}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </aside>
        </>
    );
}