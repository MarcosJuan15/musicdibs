// components/dashboard/DashboardLayout.jsx
"use client";
import { useState } from "react";
import DashboardHeader from "./DashboardHeader";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

export default function DashboardLayout() {
    // Estado inicial en inglés
    const [activeSection, setActiveSection] = useState("overview");
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="flex flex-col h-screen">
                <DashboardHeader 
                    sidebarOpen={sidebarOpen} 
                    setSidebarOpen={setSidebarOpen} 
                />
                <div className="flex flex-1 overflow-hidden">
                    <Sidebar 
                        activeSection={activeSection} 
                        setActiveSection={setActiveSection}
                        sidebarOpen={sidebarOpen}
                        setSidebarOpen={setSidebarOpen}
                    />
                    <div className="flex-1 overflow-auto">
                        <MainContent activeSection={activeSection} />
                    </div>
                </div>
            </div>
        </div>
    );
}