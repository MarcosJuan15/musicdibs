import { User } from "lucide-react";

export default function DashboardHeader() {
    const user = {
        name: "Marcos",
        lastName: "Martos",
        credits: 15
    };

    return (
        <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
            <div className="px-6 py-4">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
                        <p className="text-sm text-gray-500">Panel de control de Musicdibs</p>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-3 bg-gray-100 rounded-lg px-4 py-2">
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                                <User className="text-white" size={16} />
                            </div>
                            <div className="text-right">
                                <p className="text-sm font-medium text-gray-900">{user.name} {user.lastName}</p>
                                <p className="text-xs text-gray-500">{user.credits} créditos</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}