"use client";
import { useState } from "react";
import { 
    BarChart3, FileText, Megaphone, Image, Shield, 
    ShoppingCart, Settings, Zap, Menu, X 
} from "lucide-react";

const sections = [
    { id: "resumen", label: "Resumen de la cuenta", icon: BarChart3 },
    { id: "registrar", label: "Registrar obra", icon: FileText },
    { id: "promocionar", label: "Promociona tus obras", icon: Megaphone },
    { id: "nft", label: "Crea tu NFT", icon: Image },
    { id: "verificar", label: "Verificar tu registro", icon: Shield },
    { id: "tienda", label: "Tienda", icon: ShoppingCart },
    { id: "configuracion", label: "Configuración", icon: Settings }
];

export default function Sidebar({ activeSection, setActiveSection }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const user = { credits: 15 };

    return (
        <>
            {/* Mobile Menu Button */}
            <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded-lg shadow-lg border border-gray-200"
            >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            {/* Overlay for mobile */}
            {isMobileMenuOpen && (
                <div 
                    className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside className={`
                fixed lg:static inset-y-0 left-0 z-40
                w-64 bg-white border-r border-gray-200 min-h-screen
                transform transition-transform duration-300 ease-in-out
                lg:transform-none lg:translate-x-0
                ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
            `}>
                <nav className="p-4 h-full flex flex-col">
                    {/* Close button for mobile */}
                    <div className="flex justify-end lg:hidden mb-4">
                        <button 
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="p-2 hover:bg-gray-100 rounded-lg"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* Navigation Sections */}
                    <div className="space-y-1 flex-1">
                        {sections.map((section) => {
                            const IconComponent = section.icon;
                            return (
                                <button
                                    key={section.id}
                                    onClick={() => {
                                        setActiveSection(section.id);
                                        setIsMobileMenuOpen(false);
                                    }}
                                    className={`w-full flex items-center space-x-3 px-3 py-3 rounded-lg text-left transition-colors ${
                                        activeSection === section.id
                                            ? 'bg-blue-50 text-blue-700 border border-blue-200'
                                            : 'text-gray-700 hover:bg-gray-50'
                                    }`}
                                >
                                    <IconComponent size={20} className="flex-shrink-0" />
                                    <span className="font-medium text-sm sm:text-base">{section.label}</span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Credits Card */}
                    <div className="mt-4 sm:mt-8">
                        <div className="p-3 sm:p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-xs sm:text-sm font-medium">Créditos disponibles</span>
                                <Zap size={14} className="sm:size-4 flex-shrink-0" />
                            </div>
                            <p className="text-xl sm:text-2xl font-bold">{user.credits}</p>
                            <button className="w-full mt-2 sm:mt-3 bg-white text-blue-600 py-2 px-3 rounded text-xs sm:text-sm font-medium hover:bg-blue-50 transition-colors">
                                Comprar más créditos
                            </button>
                        </div>
                    </div>
                </nav>
            </aside>

            {/* Spacer for mobile layout */}
            <div className="lg:hidden h-16"></div>
        </>
    );
}