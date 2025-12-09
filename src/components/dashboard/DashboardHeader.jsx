// components/dashboard/DashboardHeader.jsx
import { User, Menu } from "lucide-react";

export default function DashboardHeader({ sidebarOpen, setSidebarOpen }) {
    const user = {
        name: "Marcos",
        lastName: "Martos", 
        credits: 15
    };

    return (
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
            <div className="px-4 sm:px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <button 
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                            aria-label="Open navigation menu"
                            aria-expanded={sidebarOpen}
                        >
                            <Menu size={20} />
                        </button>
                        
                        <div>
                            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
                                Dashboard
                            </h1>
                            <p className="text-sm text-gray-500 hidden sm:block">
                                Musicdibs Control Panel
                            </p>
                        </div>
                    </div>
                    
                    <div className="flex items-center space-x-3 bg-gray-100 rounded-lg px-3 sm:px-4 py-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                            <User className="text-white" size={16} />
                        </div>
                        <div className="text-right">
                            <p className="text-sm font-medium text-gray-900">
                                {user.name} {user.lastName}
                            </p>
                            <p className="text-xs text-gray-500">
                                {user.credits} credits available
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}